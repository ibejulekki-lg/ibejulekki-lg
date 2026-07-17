import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight, Download, ShieldCheck, HeartPulse, Building2,
  Leaf, GraduationCap, TrendingUp, LayoutDashboard,
} from 'lucide-react'
import Footer from '@/components/Footer'
import { PILLARS } from '@/lib/shieeld'

const ICONS = {
  security: ShieldCheck, health: HeartPulse, infrastructure: Building2,
  environment: Leaf, education: GraduationCap, economy: TrendingUp,
  digital: LayoutDashboard,
} as const

export const metadata = {
  title: 'The SHIEELD Agenda | Ibeju-Lekki Local Government',
  description:
    'The seven pillars of the SHIEELD Agenda, the 2025-2029 manifesto for Ibeju-Lekki Local Government.',
}

export default function Page() {
  return (
    <>
      <main className="min-h-screen bg-white">
        <section className="border-b border-black/10 bg-[#FAFAFA]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14">
            <nav className="flex items-center flex-wrap gap-1.5 text-[11px] sm:text-[12px] text-black/45 mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#111111] transition-colors">Home</Link>
              <span className="text-black/30">/</span>
              <span>Programmes</span>
              <span className="text-black/30">/</span>
              <span className="text-[#111111] font-semibold">SHIEELD Agenda</span>
            </nav>

            <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 sm:gap-9">
              <div className="relative w-40 h-52 sm:w-48 sm:h-64 flex-shrink-0 overflow-hidden rounded-2xl bg-[#D9D9D9] shadow-lg">
                <Image
                  src="/chairman.webp"
                  alt="Hon. Abdullahi Sesan Olowa, Executive Chairman"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 160px, 192px"
                  priority
                />
              </div>
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-3 mb-3">
                  <span className="h-px w-8 bg-brand-yellow" aria-hidden="true" />
                  <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-black/45">Manifesto &middot; 2025 &ndash; 2029</span>
                </div>
                <h1 className="text-[clamp(1.9rem,5vw,3rem)] font-extrabold text-[#111111] tracking-tight leading-tight">
                  The <span className="text-[#B26B00]">SHIEELD</span> Agenda
                </h1>
                <p className="mt-3 max-w-xl text-[14px] sm:text-[15px] text-black/55 leading-[1.8]">
                  Seven pillars for the next term under Hon. Abdullahi Sesan Olowa,
                  Executive Chairman, Making Ibeju-Lekki Great for Everyone. Tap any pillar for the full plan.
                </p>
                <a
                  href="/shieeld-manifesto.pdf"
                  download="Ibeju-Lekki-SHIEELD-Manifesto.pdf"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-yellow px-6 py-3 text-[13px] font-bold text-black transition-colors hover:bg-[#111111] hover:text-brand-yellow"
                >
                  <Download size={15} strokeWidth={2.5} /> Download the Manifesto (PDF)
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {PILLARS.map((p) => {
              const Icon = ICONS[p.icon]
              return (
                <Link
                  key={p.slug}
                  href={`/programmes/shieeld/${p.slug}`}
                  className="group flex flex-col rounded-2xl border border-black/10 bg-white p-5 sm:p-6 transition-all hover:border-brand-yellow hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-brand-yellow text-[18px] font-extrabold text-black">
                      {p.letter}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <Icon size={14} strokeWidth={2} className="text-[#111111] flex-shrink-0" />
                        <h2 className="text-[14.5px] font-bold text-[#111111] leading-snug">{p.title}</h2>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-[12.5px] italic leading-[1.7] text-black/55">&ldquo;{p.summary}&rdquo;</p>
                  <div className="mt-4 border-t border-black/[0.07] pt-3">
                    <div className="text-[9.5px] font-bold uppercase tracking-[0.16em] text-black/40">{p.prioritiesLabel}</div>
                    <ul className="mt-2 space-y-1.5">
                      {p.priorities.slice(0, 3).map((it) => (
                        <li key={it} className="flex items-start gap-2 text-[11.5px] leading-snug text-black/65">
                          <span className="mt-[5px] h-1 w-1 flex-shrink-0 rounded-full bg-brand-yellow" aria-hidden="true" />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 text-[12px] font-semibold text-[#B26B00] transition-all group-hover:gap-2">
                    {p.priorities.length > 3 ? ('View all ' + p.priorities.length + ' priorities') : 'Read more'} <ArrowRight size={13} strokeWidth={2.5} />
                  </span>
                </Link>
              )
            })}
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl bg-[#111111] p-6 text-white sm:flex-row sm:items-center sm:p-8">
            <div>
              <div className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-brand-yellow">The record so far</div>
              <p className="max-w-md text-[14px] leading-relaxed text-white/70">
                See how the first term was delivered in the 2021 &ndash; 2025 performance report.
              </p>
            </div>
            <Link
              href="/programmes/performance-report"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-brand-yellow px-6 py-3.5 text-[13px] font-bold text-black transition-colors hover:bg-white"
            >
              View Performance Report <ArrowRight size={15} strokeWidth={2.5} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
