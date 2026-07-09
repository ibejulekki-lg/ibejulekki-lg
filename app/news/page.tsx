import Link from 'next/link'
import Image from 'next/image'
import { client, urlFor } from '@/lib/sanity'
import { groq } from 'next-sanity'
import { Calendar, Tag, ArrowRight, ArrowLeft, Search } from 'lucide-react'
import Footer from '@/components/Footer'

export const revalidate = 60

const PER_PAGE = 12  // posts per page

export const metadata = {
  title: 'News & Events | Ibeju-Lekki Local Government',
  description: 'Latest news, announcements and events from Ibeju-Lekki Local Government Area.',
}

const cardProjection = `{
  _id, title, slug, category, publishedAt, featured, summary,
  "coverImage": coverImage { asset, alt, hotspot }
}`
const countQuery = groq`count(*[_type == "news"])`
const heroQuery  = groq`*[_type == "news"] | order(publishedAt desc)[0] ${cardProjection}`
const pageQuery  = groq`*[_type == "news"] | order(publishedAt desc)[$start...$end] ${cardProjection}`
const searchCountQuery = groq`count(*[_type == "news" && (title match $q || summary match $q)])`
const searchPageQuery  = groq`*[_type == "news" && (title match $q || summary match $q)] | order(publishedAt desc)[$start...$end] ${cardProjection}`

const PLACEHOLDER_NEWS = [
  { _id: 'n1', title: 'LASG Set To Drive Local Government Development Plan Across All 57 LGAs', slug: { current: 'lasg-local-government-development-plan' }, category: 'governance', publishedAt: '2026-04-17T09:00:00Z', featured: true, summary: 'Conference 57 Chairman Hon. Abdullahi Sesan Olowa appreciates a unified Lagos State plan for accelerated growth and service delivery across all 57 local government areas.', coverImage: null },
  { _id: 'n2', title: 'Stakeholders Meeting on Gbadamosi Alo Street Rehabilitation', slug: { current: 'gbadamosi-alo-street-rehabilitation' }, category: 'infrastructure', publishedAt: '2026-03-01T09:00:00Z', featured: false, summary: 'Council convenes stakeholders to discuss plans for the rehabilitation of Gbadamosi Alo Street and surrounding access roads.', coverImage: null },
  { _id: 'n3', title: 'Women Empowerment Programme Holds at Council Secretariat', slug: { current: 'women-empowerment-programme' }, category: 'community', publishedAt: '2025-11-30T09:00:00Z', featured: false, summary: 'Over 300 women from across Ibeju-Lekki participated in the quarterly empowerment programme organised by the council social development department.', coverImage: null },
]

const CATEGORY_LABELS: Record<string, string> = {
  governance: 'Governance', infrastructure: 'Infrastructure', health: 'Health',
  education: 'Education', environment: 'Environment', economy: 'Economy',
  security: 'Security', community: 'Community', events: 'Events',
}
const CATEGORY_COLORS: Record<string, string> = {
  governance: 'bg-[#111111] text-white', infrastructure: 'bg-[#1A3A7A] text-white',
  health: 'bg-emerald-700 text-white', education: 'bg-brand-yellow text-black',
  environment: 'bg-green-700 text-white', economy: 'bg-amber-600 text-white',
  security: 'bg-[#BE1E2D] text-white', community: 'bg-purple-700 text-white',
  events: 'bg-teal-700 text-white',
}
const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })

const coverUrl = (img: any, w: number, h: number) =>
  img?.asset ? urlFor(img).width(w).height(h).fit('crop').auto('format').url() : null

function pageList(current: number, total: number): (number | string)[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1)
  const out: (number | string)[] = [1]
  const from = Math.max(2, current - 1), to = Math.min(total - 1, current + 1)
  if (from > 2) out.push('...')
  for (let i = from; i <= to; i++) out.push(i)
  if (to < total - 1) out.push('...')
  out.push(total)
  return out
}

export default async function NewsPage({ searchParams }: { searchParams?: { page?: string; q?: string } }) {
  const page = Math.max(1, parseInt(searchParams?.page || '1', 10) || 1)
  const q = (searchParams?.q ?? '').trim().slice(0, 80)
  const searching = q.length > 0
  const hrefFor = (n: number) => searching ? `/news?q=${encodeURIComponent(q)}&page=${n}` : `/news?page=${n}`

  let connected = false
  try { connected = ((await client.fetch(countQuery)) ?? 0) > 0 } catch {}

  let total = 0
  let hero: any = null
  let grid: any[] = []
  let totalPages = 1

  if (connected && searching) {
    const params = { q: `${q}*` }
    try { total = (await client.fetch(searchCountQuery, params)) ?? 0 } catch {}
    totalPages = Math.max(1, Math.ceil(total / PER_PAGE))
    const start = (page - 1) * PER_PAGE
    try { grid = (await client.fetch(searchPageQuery, { ...params, start, end: start + PER_PAGE })) || [] } catch {}
  } else if (connected) {
    try { total = (await client.fetch(countQuery)) ?? 0 } catch {}
    const start = page === 1 ? 1 : 1 + (page - 1) * PER_PAGE
    const end = start + PER_PAGE
    totalPages = Math.max(1, Math.ceil((total - 1) / PER_PAGE))
    try {
      if (page === 1) hero = await client.fetch(heroQuery)
      grid = (await client.fetch(pageQuery, { start, end })) || []
    } catch {}
  } else {
    const pool = searching
      ? PLACEHOLDER_NEWS.filter((p) => (p.title + ' ' + p.summary).toLowerCase().includes(q.toLowerCase()))
      : PLACEHOLDER_NEWS
    total = pool.length
    hero = !searching && page === 1 ? (pool.find((p) => p.featured) ?? pool[0]) : null
    grid = pool.filter((p) => !hero || p._id !== hero._id)
    totalPages = 1
  }

  const heroCover = hero ? coverUrl(hero.coverImage, 900, 560) : null

  return (
    <>
      <main className="min-h-screen bg-white">
        <div className="border-b border-[#111111]/10 bg-[#FAFAFA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-brand-yellow" aria-hidden="true" />
              <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-[#111111]/45">Newsroom</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h1 className="text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold text-[#111111] tracking-tight leading-tight">News &amp; Events</h1>
              <form action="/news" method="get" className="relative max-w-xs w-full" role="search">
                <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#111111]/35" strokeWidth={2} />
                <input type="search" name="q" defaultValue={q} placeholder="Search articles..." aria-label="Search articles" className="w-full pl-9 pr-4 py-2.5 text-[13px] border border-[#111111]/15 rounded-full focus:outline-none focus:border-brand-yellow/50 transition-colors" />
              </form>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
          {/* Featured (page 1 only, hidden while searching) */}
          {hero ? (
            <div className="mb-12">
              <div className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-[#111111]/35 mb-5">Featured Story</div>
              <Link href={`/news/${hero.slug.current}`} className="group grid grid-cols-1 lg:grid-cols-[3fr_2fr] border border-[#111111]/10 rounded-2xl overflow-hidden hover:border-brand-yellow/40 hover:shadow-lg transition-all duration-200">
                <div className="relative aspect-[16/9] lg:aspect-auto lg:min-h-[280px] overflow-hidden">
                  {heroCover ? (
                    <Image src={heroCover} alt={hero.coverImage?.alt || hero.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 60vw" priority />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow to-[#E08E0B] flex items-center justify-center">
                      <span className="text-[clamp(4rem,10vw,7rem)] font-extrabold text-black/10 italic tracking-tighter select-none">{CATEGORY_LABELS[hero.category] ?? hero.category}</span>
                    </div>
                  )}
                  <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-[0.12em] px-3 py-1 rounded-full bg-brand-yellow text-black">Featured</span>
                </div>
                <div className="p-6 sm:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-[10.5px] text-[#111111]/40 mb-3"><Calendar size={11} strokeWidth={2} />{formatDate(hero.publishedAt)}</div>
                  <h2 className="text-[clamp(1.1rem,2.5vw,1.5rem)] font-bold text-[#111111] leading-[1.3] mb-3 group-hover:text-[#B26B00] transition-colors">{hero.title}</h2>
                  <p className="text-[13.5px] text-[#111111]/55 leading-[1.75] mb-5 line-clamp-3">{hero.summary}</p>
                  <div className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-[#111111] group-hover:text-[#B26B00] transition-colors">Read full article <ArrowRight size={13} strokeWidth={2.5} /></div>
                </div>
              </Link>
            </div>
          ) : null}

          {/* Grid */}
          <div>
            <div className="flex items-center justify-between gap-3 flex-wrap mb-5">
              <div className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-[#111111]/35">
                {searching ? (
                  <>Results for &ldquo;{q}&rdquo; ({total})</>
                ) : (
                  <>All Articles ({total || grid.length})</>
                )}
                {totalPages > 1 ? <> - Page {page} of {totalPages}</> : null}
              </div>
              {searching ? (
                <Link href="/news" className="text-[11px] font-bold text-[#B26B00] hover:text-[#111111] transition-colors">Clear search</Link>
              ) : null}
            </div>

            {grid.length === 0 ? (
              <div className="bg-[#FAFAFA] border border-[#111111]/10 rounded-2xl p-10 text-center">
                <div className="text-[14px] font-bold text-[#111111] mb-1.5">No articles found</div>
                <div className="text-[12.5px] text-[#111111]/45 mb-4">Try a different search term or browse all articles.</div>
                <Link href="/news" className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-[#B26B00] hover:text-[#111111] transition-colors">View all news <ArrowRight size={13} strokeWidth={2.5} /></Link>
              </div>
            ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {grid.map((post: any) => {
                const c = coverUrl(post.coverImage, 600, 338)
                return (
                  <Link key={post._id} href={`/news/${post.slug.current}`} className="group flex flex-col border border-[#111111]/10 rounded-2xl overflow-hidden hover:border-brand-yellow/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      {c ? (
                        <Image src={c} alt={post.coverImage?.alt || post.title} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/[0.12] to-brand-yellow/10 flex items-center justify-center"><Tag size={28} strokeWidth={1} className="text-[#111111]/20" /></div>
                      )}
                      <span className={`absolute top-3 left-3 text-[9.5px] font-bold uppercase tracking-[0.12em] px-2.5 py-1 rounded-full ${CATEGORY_COLORS[post.category] ?? 'bg-[#111111] text-white'}`}>{CATEGORY_LABELS[post.category] ?? post.category}</span>
                    </div>
                    <div className="flex flex-col flex-1 p-5">
                      <div className="flex items-center gap-1.5 text-[10px] text-[#111111]/40 mb-2.5"><Calendar size={10} strokeWidth={2} />{formatDate(post.publishedAt)}</div>
                      <h3 className="text-[13.5px] font-bold text-[#111111] leading-[1.4] mb-2 line-clamp-2 group-hover:text-[#B26B00] transition-colors flex-1">{post.title}</h3>
                      <p className="text-[12px] text-[#111111]/50 leading-[1.65] line-clamp-2 mb-4">{post.summary}</p>
                      <div className="inline-flex items-center gap-1 text-[11.5px] font-bold text-[#111111] group-hover:text-[#B26B00] transition-colors mt-auto">Read more <ArrowRight size={12} strokeWidth={2.5} /></div>
                    </div>
                  </Link>
                )
              })}
            </div>
            )}

            {/* Pagination */}
            {totalPages > 1 ? (
              <nav className="mt-12 flex items-center justify-center gap-1.5 flex-wrap" aria-label="Pagination">
                {page > 1 ? (
                  <Link href={hrefFor(page - 1)} className="inline-flex items-center gap-1 px-3.5 py-2 text-[12.5px] font-semibold rounded-full border border-[#111111]/15 text-[#111111] hover:border-brand-yellow transition-colors"><ArrowLeft size={13} strokeWidth={2.5} /> Prev</Link>
                ) : (
                  <span className="inline-flex items-center gap-1 px-3.5 py-2 text-[12.5px] font-semibold rounded-full border border-[#111111]/10 text-[#111111]/25"><ArrowLeft size={13} strokeWidth={2.5} /> Prev</span>
                )}
                {pageList(page, totalPages).map((n, i) =>
                  n === '...' ? (
                    <span key={`d${i}`} className="px-2 text-[12.5px] text-[#111111]/35">...</span>
                  ) : (
                    <Link key={n} href={hrefFor(n as number)} className={`min-w-[36px] text-center px-3 py-2 text-[12.5px] font-bold rounded-full border transition-colors ${n === page ? 'bg-brand-yellow border-brand-yellow text-black' : 'border-[#111111]/15 text-[#111111] hover:border-brand-yellow'}`}>{n}</Link>
                  )
                )}
                {page < totalPages ? (
                  <Link href={hrefFor(page + 1)} className="inline-flex items-center gap-1 px-3.5 py-2 text-[12.5px] font-semibold rounded-full border border-[#111111]/15 text-[#111111] hover:border-brand-yellow transition-colors">Next <ArrowRight size={13} strokeWidth={2.5} /></Link>
                ) : (
                  <span className="inline-flex items-center gap-1 px-3.5 py-2 text-[12.5px] font-semibold rounded-full border border-[#111111]/10 text-[#111111]/25">Next <ArrowRight size={13} strokeWidth={2.5} /></span>
                )}
              </nav>
            ) : null}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
