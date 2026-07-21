import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import Footer from '@/components/Footer'
import { INVESTMENTS, getInvestment } from '@/lib/investments'

export function generateStaticParams() {
  return INVESTMENTS.map((i) => ({ slug: i.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const inv = getInvestment(params.slug)
  if (!inv) return { title: 'Investment Opportunities | Ibeju-Lekki Local Government' }
  return {
    title: `${inv.name} | Investment Opportunities | Ibeju-Lekki Local Government`,
    description: inv.blurb,
  }
}

export default function Page({ params }: { params: { slug: string } }) {
  const inv = getInvestment(params.slug)
  if (!inv) notFound()

  return (
    <>
      <main className="min-h-screen bg-white">
        <section className="border-b border-black/10 bg-brand-cream">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14">
            <nav className="flex items-center flex-wrap gap-1.5 text-[11px] sm:text-[12px] text-black/45 mb-5" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-brand-ink transition-colors">Home</Link>
              <span className="text-black/30">/</span>
              <Link href="/opportunities/investment" className="hover:text-brand-ink transition-colors">Investment Opportunities</Link>
              <span className="text-black/30">/</span>
              <span className="text-brand-ink font-semibold">{inv.name}</span>
            </nav>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-brand-yellow" aria-hidden="true" />
              <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-black/45">The New Lagos</span>
            </div>
            <h1 className="text-[clamp(1.7rem,4.5vw,2.7rem)] font-extrabold text-brand-ink tracking-tight leading-tight">
              {inv.name}
            </h1>
            <p className="mt-4 max-w-2xl text-[15px] sm:text-[16px] text-black/60 leading-[1.85]">{inv.blurb}</p>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
          {inv.body.length > 0 ? (
            inv.body.map((p, i) => (
              <p key={i} className="mb-5 text-[14.5px] sm:text-[15px] leading-[1.9] text-black/70">{p}</p>
            ))
          ) : (
            <p className="text-[14.5px] leading-[1.9] text-black/60">
              Detailed information about this landmark will be published here soon.
            </p>
          )}

          <div className="mt-12">
            <Link
              href="/opportunities/investment"
              className="inline-flex items-center gap-2 rounded-full border border-black/15 px-5 py-2.5 text-[12.5px] font-semibold text-brand-ink transition-colors hover:border-brand-yellow hover:bg-brand-yellow/10"
            >
              <ArrowLeft size={14} strokeWidth={2.5} /> All Investment Opportunities
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
