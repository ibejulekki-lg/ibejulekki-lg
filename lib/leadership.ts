import { groq } from 'next-sanity'
import { client } from '@/lib/sanity'
import { EXECUTIVE_SECTIONS, LEGISLATIVE, MANAGEMENT } from '@/lib/cabinet'
import type { Member, Section } from '@/lib/cabinet'

/* Leadership now lives in Sanity so council staff can add, edit, reorder and
   retire members themselves. lib/cabinet.ts is kept as a fallback: if Sanity
   is unreachable or empty, the pages still render the roster rather than
   showing nothing. Once content is seeded, Sanity is always preferred. */

const LEADERS = groq`
  *[_type == "leader" && arm == $arm && active == true]
  | order(order asc, name asc) {
    _id, name, role, ward, bio, featured, section,
    "photo": photo { asset, alt, hotspot }
  }
`

const SECTION_ORDER = ['executive-members', 'supervisors', 'special-advisers', 'non-cabinet']

const SECTION_TITLES: Record<string, string> = {
  'executive-members': 'Executive Members',
  'supervisors': 'Supervisors',
  'special-advisers': 'Special Advisers',
  'non-cabinet': 'Non-Cabinet Members',
}

const SECTION_BLURBS: Record<string, string> = {
  supervisors: 'Supervisory councillors appointed to lead the council portfolios.',
}

async function fetchArm(arm: string): Promise<Member[]> {
  try {
    /* client.fetch is untyped here, so the result is cast rather than
       the call being parameterised. */
    const rows = (await client.fetch(LEADERS, { arm })) as Member[]
    return Array.isArray(rows) ? rows : []
  } catch {
    return []
  }
}

/* Executive Council, grouped into its four sections. */
export async function getExecutiveSections(): Promise<Section[]> {
  const rows = await fetchArm('executive')
  if (rows.length === 0) return EXECUTIVE_SECTIONS

  const sections: Section[] = []
  for (const key of SECTION_ORDER) {
    const members = rows.filter((m) => m.section === key)
    if (members.length === 0) continue
    sections.push({
      title: SECTION_TITLES[key],
      ...(SECTION_BLURBS[key] ? { blurb: SECTION_BLURBS[key] } : {}),
      members,
    })
  }

  /* Anything with an unrecognised or missing section still gets shown rather
     than silently disappearing from a government page. */
  const orphans = rows.filter((m) => !m.section || !SECTION_ORDER.includes(m.section))
  if (orphans.length) sections.push({ title: 'Other Members', members: orphans })

  return sections.length ? sections : EXECUTIVE_SECTIONS
}

/* Legislative Council: a featured leader above the grid, then the rest. */
export async function getLegislative(): Promise<{ lead?: Member; members: Member[] }> {
  const rows = await fetchArm('legislative')
  if (rows.length === 0) return { lead: LEGISLATIVE[0], members: LEGISLATIVE.slice(1) }

  const idx = rows.findIndex((m) => m.featured)
  if (idx === -1) return { lead: rows[0], members: rows.slice(1) }
  return { lead: rows[idx], members: rows.filter((_, i) => i !== idx) }
}

/* Management Team: a single ordered list. */
export async function getManagement(): Promise<Member[]> {
  const rows = await fetchArm('management')
  return rows.length ? rows : MANAGEMENT
}

