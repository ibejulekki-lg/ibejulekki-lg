import Link from 'next/link'
import Image from 'next/image'
import { client, urlFor } from '@/lib/sanity'
import { groq } from 'next-sanity'
import { Calendar, Briefcase, ArrowRight, ArrowLeft, ExternalLink } from 'lucide-react'
import Footer from '@/components/Footer'

export const revalidate = 60

const PER_PAGE = 12

export const metadata = {
  title: 'Career & Jobs | Ibeju-Lekki Local Government',
  description:
    'Job opportunities, recruitment notices and vacancies from Ibeju-Lekki Local Government Area and partner agencies.',
}

const cardProjection = `{
  _id, title, slug, publishedAt, summary,
  "coverImage": coverImage { asset, alt, hotspot }
}`
const countQuery = groq`count(*[_type == "news" && category == "careers"])`
const pageQuery  = groq`*[_type == "news" && category == "careers"] | order(publishedAt desc)[$start...$end] ${cardProjection}`

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

export default async function CareersPage({ searchParams }: { searchParams?: { page?: string } }) {
  const page = Math.max(1, parseInt(searchParams?.page || '1', 10) || 1)

  let total = 0
  let posts: any[] = []
  try {
    total = (await client.fetch(countQuery)) ?? 0
    const start = (page - 1) * PER_PAGE
    posts = (await client.fetch(pageQuery, { start, end: start + PER_PAGE })) || []
  } catch {}
  const totalPages = Math.max(1, Math.ceil(total / PER_PAGE))

  return (
    <>
      <main className="min-h-screen bg-white">
        <section className="border-b border-black/10 bg-brand-cream">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14">
            <nav className="flex items-center flex-wrap gap-1.5 text-[11px] sm:text-[12px] text-black/45 mb-5" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-brand-ink transition-colors">Home</Link>
              <span className="text-black/30">/</span>
              <span>Opportunities</span>
              <span className="text-black/30">/</span>
              <span className="text-brand-ink font-semibold">Career &amp; Jobs</span>
            </nav>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-brand-yellow" aria-hidden="true" />
              <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-black/45">Opportunities</span>
            </div>
            <h1 className="text-[clamp(1.8rem,5vw,2.8rem)] font-extrabold text-brand-ink tracking-tight leading-tight">Career &amp; Jobs</h1>
            <p className="mt-4 max-w-2xl text-[14px] sm:text-[15px] text-black/55 leading-[1.8]">
              Job opportunities, recruitment notices and vacancies from Ibeju-Lekki Local Government and partner agencies. Always confirm application details through official council channels.
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
          {posts.length === 0 ? (
            <div className="bg-brand-cream border border-black/10 rounded-2xl p-10 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-yellow/[0.15]">
                <Briefcase size={22} strokeWidth={1.8} className="text-brand-amber" />
              </div>
              <div className="text-[15px] font-bold text-brand-ink mb-1.5">No open opportunities right now</div>
              <div className="text-[13px] text-black/50 mb-5 max-w-md mx-auto leading-relaxed">
                There are no job or recruitment notices published at the moment. Please check back, or follow council announcements for the latest openings.
              </div>
              <Link href="/news" className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-brand-amber hover:text-brand-ink transition-colors">
                Browse News &amp; Events <ArrowRight size={13} strokeWidth={2.5} />
              </Link>
            </div>
          ) : (
            <>
              <div className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-black/35 mb-5">
                {total} {total === 1 ? 'Opportunity' : 'Opportunities'}{totalPages > 1 ? ` · Page ${page} of ${totalPages}` : ''}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {posts.map((post: any) => {
                  const c = coverUrl(post.coverImage, 600, 338)
                  return (
                    <Link key={post._id} href={`/news/${post.slug.current}`} className="group flex flex-col border border-black/10 rounded-2xl overflow-hidden hover:border-brand-yellow/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                      <div className="relative aspect-[16/9] overflow-hidden">
                        {c ? (
                          <Image src={c} alt={post.coverImage?.alt || post.title} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                        ) : (
                          <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/[0.15] to-brand-yellow/10 flex items-center justify-center">
                            <Briefcase size={26} strokeWidth={1.2} className="text-brand-ink/25" />
                          </div>
                        )}
                        <span className="absolute top-3 left-3 text-[9.5px] font-bold uppercase tracking-[0.12em] px-2.5 py-1 rounded-full bg-brand-yellow text-black">Opportunity</span>
                      </div>
                      <div className="flex flex-col flex-1 p-5">
                        <div className="flex items-center gap-1.5 text-[10px] text-black/40 mb-2.5"><Calendar size={10} strokeWidth={2} />{formatDate(post.publishedAt)}</div>
                        <h2 className="text-[13.5px] font-bold text-brand-ink leading-[1.4] mb-2 line-clamp-3 group-hover:text-brand-amber transition-colors flex-1">{post.title}</h2>
                        {post.summary ? <p className="text-[12px] text-black/50 leading-[1.65] line-clamp-2 mb-4">{post.summary}</p> : null}
                        <div className="inline-flex items-center gap-1 text-[11.5px] font-bold text-brand-ink group-hover:text-brand-amber transition-colors mt-auto">View details <ArrowRight size={12} strokeWidth={2.5} /></div>
                      </div>
                    </Link>
                  )
                })}
              </div>

              {totalPages > 1 ? (
                <nav className="mt-12 flex items-center justify-center gap-1.5 flex-wrap" aria-label="Pagination">
                  {page > 1 ? (
                    <Link href={`/resources/careers?page=${page - 1}`} className="inline-flex items-center gap-1 px-3.5 py-2 text-[12.5px] font-semibold rounded-full border border-black/15 text-brand-ink hover:border-brand-yellow transition-colors"><ArrowLeft size={13} strokeWidth={2.5} /> Prev</Link>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-3.5 py-2 text-[12.5px] font-semibold rounded-full border border-black/10 text-black/25"><ArrowLeft size={13} strokeWidth={2.5} /> Prev</span>
                  )}
                  {pageList(page, totalPages).map((n, i) =>
                    n === '...' ? (
                      <span key={`d${i}`} className="px-2 text-[12.5px] text-black/35">...</span>
                    ) : (
                      <Link key={n} href={`/resources/careers?page=${n}`} className={`min-w-[36px] text-center px-3 py-2 text-[12.5px] font-bold rounded-full border transition-colors ${n === page ? 'bg-brand-yellow border-brand-yellow text-black' : 'border-black/15 text-brand-ink hover:border-brand-yellow'}`}>{n}</Link>
                    )
                  )}
                  {page < totalPages ? (
                    <Link href={`/resources/careers?page=${page + 1}`} className="inline-flex items-center gap-1 px-3.5 py-2 text-[12.5px] font-semibold rounded-full border border-black/15 text-brand-ink hover:border-brand-yellow transition-colors">Next <ArrowRight size={13} strokeWidth={2.5} /></Link>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-3.5 py-2 text-[12.5px] font-semibold rounded-full border border-black/10 text-black/25">Next <ArrowRight size={13} strokeWidth={2.5} /></span>
                  )}
                </nav>
              ) : null}
            </>
          )}
        </section>
      </main>
      <Footer />
    </>
  )
}
