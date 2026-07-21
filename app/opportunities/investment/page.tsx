import Link from 'next/link'
import { ArrowRight, Building2 } from 'lucide-react'
import Footer from '@/components/Footer'
import { INVESTMENTS } from '@/lib/investments'

export const metadata = {
  title: 'Investment Opportunities | Ibeju-Lekki Local Government',
  description:
    'The landmark projects powering Ibeju-Lekki, Lagos State: Dangote Refinery, Lekki Free Trade Zone, Lekki Deep Seaport and more.',
}

export default function Page() {
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
              <span className="text-brand-ink font-semibold">Investment Opportunities</span>
            </nav>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-brand-yellow" aria-hidden="true" />
              <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-black/45">The New Lagos</span>
            </div>
            <h1 className="text-[clamp(1.8rem,5vw,2.9rem)] font-extrabold text-brand-ink tracking-tight leading-tight">
              Investment Opportunities
            </h1>
            <p className="mt-4 max-w-2xl text-[15px] sm:text-[16px] text-black/60 leading-[1.85]">
              Ibeju-Lekki is Nigeria&apos;s emerging economic frontier, home to landmark projects
              that are reshaping Lagos State. Explore the developments driving the area&apos;s growth.
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {INVESTMENTS.map((inv) => (
              <Link
                key={inv.slug}
                href={`/opportunities/investment/${inv.slug}`}
                className="group flex flex-col rounded-2xl border border-black/10 bg-white p-5 sm:p-6 transition-all hover:border-brand-yellow hover:shadow-md"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-yellow">
                  <Building2 size={18} strokeWidth={2.2} className="text-black" />
                </span>
                <h2 className="mt-4 text-[14.5px] font-bold text-brand-ink leading-snug">{inv.name}</h2>
                <p className="mt-2 flex-1 text-[12.5px] leading-[1.7] text-black/55">{inv.blurb}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-[12px] font-semibold text-brand-amber transition-all group-hover:gap-2">
                  Read more <ArrowRight size={13} strokeWidth={2.5} />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
