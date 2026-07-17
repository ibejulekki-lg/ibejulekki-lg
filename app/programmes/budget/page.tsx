import Link from 'next/link'
import { Download, ArrowRight, FileText } from 'lucide-react'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Budget Summary & Performance Report | Ibeju-Lekki Local Government',
  description:
    'The Ibeju-Lekki Local Government budget summary and the 2021-2025 performance report.',
}

export default function Page() {
  return (
    <>
      <main className="min-h-screen bg-white">
        <section className="bg-brand-ink text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
            <nav className="flex items-center flex-wrap gap-1.5 text-[11px] sm:text-[12px] text-white/45 mb-5" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-white/25">/</span>
              <span>Programmes</span>
              <span className="text-white/25">/</span>
              <span className="text-white font-semibold">Budget Summary</span>
            </nav>
            <div className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-brand-yellow mb-3">Transparency</div>
            <h1 className="text-[clamp(1.8rem,5vw,3rem)] font-extrabold tracking-tight leading-tight">
              Budget Summary &amp; Performance Report
            </h1>
            <p className="mt-3 max-w-2xl text-[15px] text-white/70 leading-relaxed">
              In line with the commitment to open, participatory governance, the council
              publishes its record for residents to read. The full 2021 &ndash; 2025 performance
              report is available to download below.
            </p>
            <a
              href="/performance-report.pdf"
              download="Ibeju-Lekki-Performance-Report-2021-2025.pdf"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-yellow px-6 py-3.5 text-[13px] font-bold text-black transition-colors hover:bg-white"
            >
              <Download size={16} strokeWidth={2.5} /> Download Performance Report (PDF)
            </a>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-brand-yellow" aria-hidden="true" />
            <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-black/45">What is inside</span>
          </div>
          <div className="max-w-2xl space-y-4 text-[14px] sm:text-[15px] text-black/65 leading-[1.85]">
            <p>
              The report records the projects, programmes and reforms delivered across
              the local government, organised around economic growth, infrastructure,
              environmental sustainability, government performance, and social development
              and security.
            </p>
            <p>
              Forthcoming budgets and simplified summaries, in English and Yoruba, will be
              published here as the council rolls out participatory budgeting under the
              Digital Governance pillar.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="/performance-report.pdf"
              download="Ibeju-Lekki-Performance-Report-2021-2025.pdf"
              className="flex items-center gap-3 rounded-2xl border border-black/10 bg-brand-cream p-5 transition-colors hover:border-brand-yellow"
            >
              <FileText size={20} strokeWidth={2} className="text-brand-amber flex-shrink-0" />
              <div>
                <div className="text-[13.5px] font-bold text-brand-ink">Performance Report 2021 &ndash; 2025</div>
                <div className="text-[12px] text-black/50">PDF download</div>
              </div>
            </a>
            <Link
              href="/programmes/shieeld"
              className="flex items-center justify-between gap-3 rounded-2xl border border-black/10 bg-white p-5 transition-colors hover:border-brand-yellow"
            >
              <div>
                <div className="text-[13.5px] font-bold text-brand-ink">The SHIEELD Agenda</div>
                <div className="text-[12px] text-black/50">The 2025 &ndash; 2029 manifesto</div>
              </div>
              <ArrowRight size={16} strokeWidth={2.5} className="text-brand-amber flex-shrink-0" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
