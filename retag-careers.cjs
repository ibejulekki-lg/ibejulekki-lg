/* retag-careers.cjs - one-off migration.
   Moves the 10 genuine Job Opportunity Desk posts to the "careers" category
   and the mistagged school-fence post to "infrastructure". Matches by slug,
   so it is safe and idempotent: rerunning only patches posts not already on
   the target category, and never touches anything else.

   Run from the project root AFTER the careers category exists in the schema:
     SANITY_API_TOKEN=your_editor_token node retag-careers.cjs
   Add --dry to preview without writing:
     SANITY_API_TOKEN=... node retag-careers.cjs --dry
*/
const { createClient } = require('@sanity/client')

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'sgw7lo2z'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const token = process.env.SANITY_API_TOKEN
const DRY = process.argv.includes('--dry')

if (!token) {
  console.error('ERROR: SANITY_API_TOKEN is not set. Use your Editor token:')
  console.error('  SANITY_API_TOKEN=your_editor_token node retag-careers.cjs')
  process.exit(1)
}

const client = createClient({ projectId, dataset, token, apiVersion: '2024-01-01', useCdn: false })

const TO_CAREERS = [
  'the-national-directorate-of-employment-in-collaboration-with-ibeju-lekki-local-government',
  'stakeholders-engagement-and-registration-on-army-recruitment-exercise',
  'job-advertisement',
  'nigerian-army-regular-recruit-intake-82rri',
  'expression-of-interest-as-laboratory-services-consultant',
  '1489',
  'recruitment-for-enumeration-officer',
  'job-advertisement-recruitment-of-clinical-staff-for-health-sector',
  'job-advertisement-federal-road-safety-corps-frsc-recruitment',
  'nigerian-air-force-online-recruitment-enlistment-portal',
]
const TO_INFRASTRUCTURE = [
  'bogije-primary-school-upgrade-perimeter-fence-takes-shape',
]

async function retag(slugs, category) {
  let changed = 0
  let missing = 0
  let already = 0
  for (const slug of slugs) {
    const doc = await client.fetch(
      '*[_type == "news" && slug.current == $slug][0]{ _id, category, title }',
      { slug },
    )
    if (!doc) {
      console.log(`  MISSING: no post with slug "${slug}"`)
      missing++
      continue
    }
    if (doc.category === category) {
      already++
      continue
    }
    const label = (doc.title || slug).slice(0, 60)
    if (DRY) {
      console.log(`  would set ${category.padEnd(14)} <- ${doc.category.padEnd(14)} | ${label}`)
    } else {
      await client.patch(doc._id).set({ category }).commit()
      console.log(`  set ${category.padEnd(14)} <- ${doc.category.padEnd(14)} | ${label}`)
    }
    changed++
  }
  return { changed, missing, already }
}

;(async () => {
  console.log((DRY ? '[DRY RUN] ' : '') + `Retag on ${projectId}/${dataset}`)
  console.log(`\nMoving ${TO_CAREERS.length} posts to "careers":`)
  const a = await retag(TO_CAREERS, 'careers')
  console.log(`\nMoving ${TO_INFRASTRUCTURE.length} post to "infrastructure":`)
  const b = await retag(TO_INFRASTRUCTURE, 'infrastructure')
  console.log('\nSummary:')
  console.log(`  changed:        ${a.changed + b.changed}`)
  console.log(`  already tagged: ${a.already + b.already}`)
  console.log(`  missing:        ${a.missing + b.missing}`)
  if (DRY) console.log('\n(dry run - nothing was written)')
})().catch((e) => { console.error(e.message || e); process.exit(1) })
