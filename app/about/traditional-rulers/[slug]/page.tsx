import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import Footer from '@/components/Footer'
import { RULERS, getRuler } from '@/lib/rulers'

export function generateStaticParams() {
  return RULERS.map((r) => ({ slug: r.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const ruler = getRuler(params.slug)
  if (!ruler) return { title: 'Traditional Rulers | Ibeju-Lekki Local Government' }
  return {
    title: `${ruler.name} | Traditional Rulers | Ibeju-Lekki Local Government`,
    description: `${ruler.name}, ${ruler.title}, Ibeju-Lekki Local Government Area, Lagos State.`,
  }
}

export default function Page({ params }: { params: { slug: string } }) {
  const ruler = getRuler(params.slug)
  if (!ruler) notFound()

  return (
    <>
      <main className="min-h-screen bg-white">
        <section className="border-b border-black/10 bg-brand-cream">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14">
            <nav className="flex items-center flex-wrap gap-1.5 text-[11px] sm:text-[12px] text-black/45 mb-5" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-brand-ink transition-colors">Home</Link>
              <span className="text-black/30">/</span>
              <Link href="/about/traditional-rulers" className="hover:text-brand-ink transition-colors">Traditional Rulers</Link>
              <span className="text-black/30">/</span>
              <span className="text-brand-ink font-semibold">{ruler.title}</span>
            </nav>
            <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 sm:gap-9">
              <div className="relative aspect-[3/4] w-44 sm:w-52 flex-shrink-0 overflow-hidden rounded-2xl bg-[#F4F4F4] shadow-lg">
                <Image
                  src={ruler.image}
                  alt={ruler.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 176px, 208px"
                  priority
                />
              </div>
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-3 mb-3">
                  <span className="h-px w-8 bg-brand-yellow" aria-hidden="true" />
                  <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-black/45">Traditional Ruler</span>
                </div>
                <h1 className="text-[clamp(1.5rem,4vw,2.3rem)] font-extrabold text-brand-ink tracking-tight leading-tight">
                  {ruler.name}
                </h1>
                <p className="mt-2 text-[13px] font-semibold uppercase tracking-wide text-brand-amber">{ruler.title}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
          {ruler.history ? (
            <div className="space-y-10">
              {ruler.history.map((sec, i) => (
                <div key={i}>
                  {sec.heading ? (
                    <h2 className="mb-4 text-[17px] sm:text-[19px] font-extrabold text-brand-ink tracking-tight">
                      {sec.heading}
                    </h2>
                  ) : null}
                  {sec.paras.map((p, j) => (
                    <p key={j} className="mb-4 text-[14.5px] leading-[1.9] text-black/70">
                      {p}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-[14.5px] leading-[1.9] text-black/60">
              The history of this kingdom will be published here.
            </p>
          )}

          <div className="mt-12">
            <Link
              href="/about/traditional-rulers"
              className="inline-flex items-center gap-2 rounded-full border border-black/15 px-5 py-2.5 text-[12.5px] font-semibold text-brand-ink transition-colors hover:border-brand-yellow hover:bg-brand-yellow/10"
            >
              <ArrowLeft size={14} strokeWidth={2.5} /> All Traditional Rulers
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
