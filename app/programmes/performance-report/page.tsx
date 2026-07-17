import Link from 'next/link'
import { Download, ArrowLeft, CheckCircle2 } from 'lucide-react'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Performance Report 2021–2025 | Ibeju-Lekki Local Government',
  description:
    'A summary of the Ibeju-Lekki Local Government performance report, 2021 to 2025, Making Ibeju-Lekki Great for Everyone.',
}

const PILLARS = [
  { letter: 'S', title: 'Security',                                body: 'Community safety programmes complementing state security efforts across the wards, with Ibeju-Lekki Traffic Managers established to ease the Lekki to Epe corridor.' },
  { letter: 'H', title: 'Health',                                  body: 'Three primary health centres rehabilitated and expanded, more doctors recruited, and health interventions delivered across the wards.' },
  { letter: 'I', title: 'Infrastructural Development',             body: 'A modern council secretariat under construction to replace the building lost in 2020, with new office equipment for council operations.' },
  { letter: 'E', title: 'Environmental Sustainability',            body: 'Daily street sweeping and the Cleaner Ibeju-Lekki initiative kept up by hundreds of street sweepers, plus a large-scale de-flooding exercise that cleared blocked canals and reopened access roads.' },
  { letter: 'E', title: 'Education & Youth Development',           body: 'Weekend coaching with Pan-Atlantic University for UTME and WASSCE candidates, hundreds of free JAMB and WASSCE forms each year, and bursaries and scholarships for indigenous students at every level.' },
  { letter: 'L', title: 'Local Economy',                          body: 'Roughly 500 percent growth in internally generated revenue over two years, reinvested in projects and programmes across the wards.' },
  { letter: 'D', title: 'Digital Governance & Civic Participation', body: 'A comprehensive overhaul of revenue collection and administration with ICT automation across the council, and performance reforms aligned with the Lagos State THEMES agenda for measurable results.' },
]

const HIGHLIGHTS = [
  'Around 500 percent growth in internally generated revenue over two years',
  'Modern council secretariat under construction, replacing the one lost in 2020',
  'Weekend coaching with Pan-Atlantic University for UTME and WASSCE candidates',
  'Hundreds of free JAMB and WASSCE forms provided to students each year',
  'Three primary health centres rehabilitated and expanded; more doctors recruited',
  'Ibeju-Lekki Traffic Managers established to ease the Lekki to Epe corridor',
  'Hundreds of street sweepers keeping communities clean daily',
  'Bursaries and scholarships for indigenous students at every level',
]

export default function Page() {
  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Header band */}
        <section className="bg-brand-ink text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
            <nav className="flex items-center flex-wrap gap-1.5 text-[11px] sm:text-[12px] text-white/45 mb-5" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-white/25">/</span>
              <span>Programmes</span>
              <span className="text-white/25">/</span>
              <span className="text-white font-semibold">Performance Report</span>
            </nav>
            <div className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-brand-yellow mb-3">2021 – 2025</div>
            <h1 className="text-[clamp(1.9rem,5vw,3rem)] font-extrabold tracking-tight leading-tight">
              Performance Report
            </h1>
            <p className="mt-3 text-[15px] text-white/70 leading-relaxed max-w-2xl">
              Making Ibeju-Lekki Great for Everyone, a record of the projects, programmes and reforms
              delivered by the administration of Hon. Abdullahi Sesan Olowa.
            </p>
            <a href="/performance-report.pdf" target="_blank" rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 px-6 py-3.5 bg-brand-yellow text-black text-[13px] font-bold rounded-full hover:bg-white transition-colors">
              <Download size={16} strokeWidth={2.5} /> Download full report (PDF)
            </a>
          </div>
        </section>

        {/* Overview */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-brand-yellow" aria-hidden="true" />
            <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-black/45">Overview</span>
          </div>
          <div className="max-w-2xl space-y-4 text-[14px] sm:text-[15px] text-black/65 leading-[1.85]">
            <p>The administration came on board with a plan anchored on development across economic growth, infrastructure, environmental sustainability, government performance management, and social development and security, areas chosen to align with the Lagos State THEMES agenda.</p>
            <p>Recognising that the council could not rely on federal allocation alone to close the gap in infrastructure and social services, it overhauled revenue collection and administration, achieving roughly 500 percent growth in internally generated revenue, and reinvested in projects and programmes across the wards.</p>
          </div>
        </section>

        {/* Pillars */}
        <section className="bg-brand-cream border-y border-black/[0.06] py-12 sm:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-brand-yellow" aria-hidden="true" />
              <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-black/45">Performance Against the SHIEELD Agenda</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {PILLARS.map((p) => (
                <div key={p.title} className="rounded-2xl border border-black/10 bg-white p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-brand-yellow text-[13px] font-extrabold text-black">{p.letter}</span>
                    <h2 className="text-[13.5px] font-bold text-brand-ink leading-snug">{p.title}</h2>
                  </div>
                  <p className="text-[12.5px] text-black/55 leading-[1.7]">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-brand-yellow" aria-hidden="true" />
            <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-black/45">Highlights</span>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {HIGHLIGHTS.map((h) => (
              <li key={h} className="flex items-start gap-3 rounded-xl border border-black/10 bg-white px-4 py-3">
                <CheckCircle2 size={16} strokeWidth={2} className="text-brand-yellow mt-0.5 flex-shrink-0" />
                <span className="text-[13px] text-black/65 leading-snug">{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-2xl border border-black/10 bg-brand-cream p-6 sm:p-8 text-center">
            <h2 className="text-[clamp(1.1rem,3vw,1.4rem)] font-bold text-brand-ink mb-2">Read the full report</h2>
            <p className="max-w-md mx-auto text-[13px] text-black/55 leading-[1.7] mb-6">
              This page summarises the headlines. Download the complete report to continue reading, with all projects, figures and photographs.
            </p>
            <a href="/performance-report.pdf" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-yellow text-black text-[13px] font-bold rounded-full hover:bg-brand-ink hover:text-brand-yellow transition-all duration-200">
              <Download size={16} strokeWidth={2.5} /> Download full report (PDF)
            </a>
            <div className="mt-4">
              <Link href="/programmes/shieeld" className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-brand-amber hover:text-brand-ink transition-colors">
                <ArrowLeft size={13} strokeWidth={2.5} /> Back to the SHIEELD Agenda
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
