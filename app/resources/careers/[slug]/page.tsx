import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { groq } from 'next-sanity'
import { client, urlFor } from '@/lib/sanity'
import { programmeBySlugQuery } from '@/lib/queries'
import { ArrowLeft, ArrowRight, CalendarClock, MapPin, Users, Download, Phone, CheckCircle2, Handshake } from 'lucide-react'
import Footer from '@/components/Footer'
import PortableBody from '@/components/PortableBody'
import { STATUS_LABELS, STATUS_STYLES, formatDeadline } from '@/components/ProgrammeCards'

export const revalidate = 60

async function getProgramme(slug: string) {
  try {
    return await client.fetch(programmeBySlugQuery, { slug })
  } catch {
    return null
  }
}

export async function generateStaticParams() {
  try {
    const rows = await client.fetch(
      groq`*[_type == "programme" && active == true && defined(slug.current)]{ "slug": slug.current }`
    )
    return (rows ?? []).map((r: any) => ({ slug: r.slug }))
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const p = await getProgramme(params.slug)
  if (!p) return { title: 'Programme Not Found | Ibeju-Lekki Local Government' }
  return {
    title: `${p.title} | Career & Jobs | Ibeju-Lekki Local Government`,
    description: p.summary,
    openGraph: {
      title: p.title,
      description: p.summary,
      ...(p.coverImage?.asset
        ? { images: [{ url: urlFor(p.coverImage).width(1200).height(630).fit('crop').auto('format').url(), width: 1200, height: 630 }] }
        : {}),
    },
  }
}

export default async function ProgrammePage({ params }: { params: { slug: string } }) {
  const p = await getProgramme(params.slug)
  if (!p) notFound()

  const status = p.status ?? 'upcoming'
  const cover = p.coverImage?.asset
    ? urlFor(p.coverImage).width(1200).height(675).fit('crop').auto('format').url()
    : null
  const applyHref = p.applyLink || p.applyFileUrl || null
  const isFile = !p.applyLink && !!p.applyFileUrl
  const hasBody = Array.isArray(p.body) && p.body.length > 0

  return (
    <>
      <main className="min-h-screen bg-white">
        <section className="border-b border-black/10 bg-brand-cream">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14">
            <nav className="flex items-center flex-wrap gap-1.5 text-[11px] sm:text-[12px] text-black/45 mb-5" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-brand-ink transition-colors">Home</Link>
              <span className="text-black/30">/</span>
              <Link href="/resources/careers" className="hover:text-brand-ink transition-colors">Career &amp; Jobs</Link>
              <span className="text-black/30">/</span>
              <span className="text-brand-ink font-semibold line-clamp-1">{p.title}</span>
            </nav>
            <span className={`inline-block text-[9.5px] font-bold uppercase tracking-[0.14em] px-2.5 py-1 rounded-full mb-4 ${STATUS_STYLES[status] ?? 'bg-brand-ink text-white'}`}>
              {STATUS_LABELS[status] ?? status}
            </span>
            <h1 className="text-[clamp(1.6rem,4.5vw,2.5rem)] font-extrabold text-brand-ink tracking-tight leading-tight">{p.title}</h1>
            {p.summary ? (
              <p className="mt-4 max-w-2xl text-[14px] sm:text-[15px] text-black/60 leading-[1.8]">{p.summary}</p>
            ) : null}
          </div>
        </section>

        {cover ? (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 -mt-8 sm:-mt-10 relative z-10">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-black/10 shadow-lg bg-brand-cream">
              <Image src={cover} alt={p.coverImage?.alt || p.title} fill className="object-cover" sizes="(max-width: 896px) 100vw, 896px" priority />
            </div>
          </div>
        ) : null}

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
          {/* Key facts */}
          {(p.audience || p.venue || p.deadline || p.contact) ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {p.audience ? (
                <div className="flex items-start gap-3 rounded-xl border border-black/10 bg-brand-cream px-4 py-3.5">
                  <Users size={16} strokeWidth={2} className="mt-0.5 text-brand-amber flex-shrink-0" />
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-black/40 mb-0.5">Who it is for</div>
                    <div className="text-[13px] text-brand-ink leading-snug">{p.audience}</div>
                  </div>
                </div>
              ) : null}
              {p.venue ? (
                <div className="flex items-start gap-3 rounded-xl border border-black/10 bg-brand-cream px-4 py-3.5">
                  <MapPin size={16} strokeWidth={2} className="mt-0.5 text-brand-amber flex-shrink-0" />
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-black/40 mb-0.5">Venue</div>
                    <div className="text-[13px] text-brand-ink leading-snug">{p.venue}</div>
                  </div>
                </div>
              ) : null}
              {p.deadline ? (
                <div className="flex items-start gap-3 rounded-xl border border-black/10 bg-brand-cream px-4 py-3.5">
                  <CalendarClock size={16} strokeWidth={2} className="mt-0.5 text-brand-amber flex-shrink-0" />
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-black/40 mb-0.5">Deadline</div>
                    <div className="text-[13px] text-brand-ink leading-snug">{formatDeadline(p.deadline)}</div>
                  </div>
                </div>
              ) : null}
              {p.contact ? (
                <div className="flex items-start gap-3 rounded-xl border border-black/10 bg-brand-cream px-4 py-3.5">
                  <Phone size={16} strokeWidth={2} className="mt-0.5 text-brand-amber flex-shrink-0" />
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-black/40 mb-0.5">Enquiries</div>
                    <div className="text-[13px] text-brand-ink leading-snug">{p.contact}</div>
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}

          {hasBody ? <div className="mb-10"><PortableBody value={p.body} /></div> : null}

          {/* Outcomes */}
          {Array.isArray(p.outcomes) && p.outcomes.length > 0 ? (
            <div className="mb-10">
              <h2 className="text-[18px] sm:text-[20px] font-bold text-brand-ink tracking-tight mb-4">What you will learn</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {p.outcomes.map((o: string, i: number) => (
                  <li key={i} className="flex items-start gap-2.5 text-[13.5px] text-black/65 leading-[1.7]">
                    <CheckCircle2 size={15} strokeWidth={2} className="mt-1 text-brand-amber flex-shrink-0" />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {/* Partners */}
          {Array.isArray(p.partners) && p.partners.length > 0 ? (
            <div className="mb-10">
              <h2 className="text-[18px] sm:text-[20px] font-bold text-brand-ink tracking-tight mb-4">Delivered in partnership with</h2>
              <div className="flex flex-wrap gap-2">
                {p.partners.map((t: string, i: number) => (
                  <span key={i} className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-brand-cream px-3.5 py-1.5 text-[12px] font-semibold text-brand-ink">
                    <Handshake size={12} strokeWidth={2} className="text-brand-amber" />
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ) : null}

          {/* How to apply */}
          <div className="rounded-2xl border border-black/10 bg-brand-cream p-6 sm:p-8">
            <h2 className="text-[18px] sm:text-[20px] font-bold text-brand-ink tracking-tight mb-4">How to apply</h2>
            {Array.isArray(p.howToApply) && p.howToApply.length > 0 ? (
              <ol className="space-y-3 mb-6">
                {p.howToApply.map((step: string, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-[13.5px] text-black/70 leading-[1.7]">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-yellow text-[11px] font-bold text-black">{i + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            ) : (
              <p className="text-[13.5px] text-black/60 leading-[1.8] mb-6">
                Application details for this programme have not been published yet. Follow council
                announcements on the News page, or contact the secretariat for updates.
              </p>
            )}

            <div className="flex flex-wrap items-center gap-3">
              {applyHref ? (
                <a
                  href={applyHref}
                  {...(isFile ? { download: true } : { target: '_blank', rel: 'noopener noreferrer' })}
                  className="inline-flex items-center gap-2 rounded-full bg-brand-yellow px-5 py-2.5 text-[13px] font-bold text-black hover:bg-brand-hover transition-colors"
                >
                  {isFile ? <Download size={14} strokeWidth={2.5} /> : null}
                  {isFile ? 'Download application form' : 'Apply now'}
                  {isFile ? null : <ArrowRight size={14} strokeWidth={2.5} />}
                </a>
              ) : null}
              <Link href="/contact" className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-brand-amber hover:text-brand-ink transition-colors">
                Contact the council <ArrowRight size={12} strokeWidth={2.5} />
              </Link>
            </div>
          </div>

          <div className="mt-10">
            <Link href="/resources/careers" className="inline-flex items-center gap-2 text-[12.5px] font-semibold text-black/55 hover:text-brand-ink transition-colors">
              <ArrowLeft size={13} strokeWidth={2.5} /> Back to Career &amp; Jobs
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
