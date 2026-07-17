import Link from 'next/link'
import { Clock, ArrowRight, ChevronRight, Home } from 'lucide-react'
import Footer from './Footer'

interface Props {
  title: string
  sectionLabel?: string
  description?: string
}

export default function PagePlaceholder({ title, sectionLabel, description }: Props) {
  return (
    <>
      <main className="min-h-screen bg-white">

        {/* Page header band */}
        <section className="border-b border-black/10 bg-brand-cream">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14">

            {/* Breadcrumb */}
            <nav
              className="flex items-center flex-wrap gap-1.5 text-[11px] sm:text-[12px] text-black/45 mb-5"
              aria-label="Breadcrumb"
            >
              <Link href="/" className="inline-flex items-center gap-1 hover:text-brand-ink transition-colors">
                <Home size={12} strokeWidth={2} /> Home
              </Link>
              {sectionLabel && (
                <>
                  <ChevronRight size={12} className="text-black/30" aria-hidden="true" />
                  <span>{sectionLabel}</span>
                </>
              )}
              <ChevronRight size={12} className="text-black/30" aria-hidden="true" />
              <span className="text-brand-ink font-semibold">{title}</span>
            </nav>

            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-brand-yellow" aria-hidden="true" />
              <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-black/45">
                {sectionLabel ?? 'Ibeju-Lekki LGA'}
              </span>
            </div>

            <h1 className="text-[clamp(1.8rem,5vw,2.8rem)] font-extrabold text-brand-ink tracking-tight leading-tight">
              {title}
            </h1>

            {description && (
              <p className="mt-4 max-w-2xl text-[14px] sm:text-[15px] text-black/55 leading-[1.8]">
                {description}
              </p>
            )}
          </div>
        </section>

        {/* On the way card */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-14 sm:py-20">
          <div className="border border-black/10 rounded-2xl p-8 sm:p-12 text-center">
            <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-brand-yellow/15 flex items-center justify-center">
              <Clock size={24} strokeWidth={1.8} className="text-brand-ink" />
            </div>
            <h2 className="text-[clamp(1.1rem,3vw,1.5rem)] font-bold text-brand-ink mb-3">
              This page is on the way
            </h2>
            <p className="max-w-md mx-auto text-[13.5px] text-black/55 leading-[1.8] mb-8">
              We are preparing this section of the new Ibeju-Lekki website. Please check
              back soon, or reach out if you need information right away.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-yellow text-black text-[13px] font-bold tracking-[0.04em] rounded-full hover:bg-brand-ink hover:text-brand-yellow transition-all duration-200"
              >
                Back to Home <ArrowRight size={15} strokeWidth={2.5} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-black/20 text-brand-ink text-[13px] font-semibold tracking-[0.04em] rounded-full hover:border-brand-yellow hover:bg-brand-yellow/10 transition-all duration-200"
              >
                Contact the Council
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
