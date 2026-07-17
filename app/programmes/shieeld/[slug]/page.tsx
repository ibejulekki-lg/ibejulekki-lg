import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import {
  ArrowLeft, ArrowRight, Download, CheckCircle2, Quote,
  ShieldCheck, HeartPulse, Building2, Leaf, GraduationCap, TrendingUp, LayoutDashboard,
} from 'lucide-react'
import Footer from '@/components/Footer'
import { PILLARS } from '@/lib/shieeld'

const ICONS = {
  security: ShieldCheck, health: HeartPulse, infrastructure: Building2,
  environment: Leaf, education: GraduationCap, economy: TrendingUp,
  digital: LayoutDashboard,
} as const

export function generateStaticParams() {
  return PILLARS.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = PILLARS.find((x) => x.slug === params.slug)
  return {
    title: p
      ? `${p.title} - SHIEELD Agenda | Ibeju-Lekki Local Government`
      : 'SHIEELD Agenda | Ibeju-Lekki Local Government',
  }
}

export default function Page({ params }: { params: { slug: string } }) {
  const idx = PILLARS.findIndex((x) => x.slug === params.slug)
  if (idx === -1) notFound()
  const p = PILLARS[idx]
  const Icon = ICONS[p.icon]
  const prev = PILLARS[(idx - 1 + PILLARS.length) % PILLARS.length]
  const next = PILLARS[(idx + 1) % PILLARS.length]

  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-brand-ink text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
            <nav className="flex items-center flex-wrap gap-1.5 text-[11px] sm:text-[12px] text-white/45 mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-white/25">/</span>
              <Link href="/programmes/shieeld" className="hover:text-white transition-colors">SHIEELD</Link>
              <span className="text-white/25">/</span>
              <span className="text-white font-semibold">{p.title}</span>
            </nav>
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-yellow text-[24px] font-extrabold text-black">
                {p.letter}
              </div>
              <Icon size={26} strokeWidth={1.8} className="text-white/60" />
            </div>
            <h1 className="mt-5 text-[clamp(1.7rem,4.5vw,2.7rem)] font-extrabold tracking-tight leading-tight">{p.title}</h1>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-white/70">{p.tagline}</p>
          </div>
        </section>

        {/* Verbatim manifesto pull-quote */}
        <section className="bg-brand-cream border-b border-black/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-10">
            <blockquote className="relative rounded-2xl border border-black/10 bg-white p-6 sm:p-8 shadow-sm">
              <Quote size={26} strokeWidth={2} className="absolute -top-3 left-6 text-brand-yellow" fill="currentColor" />
              <p className="text-[clamp(1rem,2.6vw,1.4rem)] font-semibold leading-[1.5] text-brand-ink">
                &ldquo;{p.summary}&rdquo;
              </p>
            </blockquote>
          </div>
        </section>

        {/* Infographic */}
        <section className="bg-brand-cream border-b border-black/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 pb-8 sm:pb-10">
            <div className="relative w-full overflow-hidden rounded-2xl border border-black/10 shadow-sm" style={{ aspectRatio: '110 / 78' }}>
              <Image
                src={p.cover}
                alt={`${p.title} manifesto infographic`}
                fill
                className="object-cover"
                sizes="(max-width: 896px) 100vw, 896px"
              />
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
          <div className="max-w-2xl space-y-4 text-[14px] sm:text-[15px] leading-[1.85] text-black/65">
            {p.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* Priorities (verbatim manifesto items) */}
          <div className="mt-10">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-brand-yellow" aria-hidden="true" />
              <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-black/45">{p.prioritiesLabel}</span>
            </div>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {p.priorities.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-xl border border-black/10 bg-white px-4 py-3.5">
                  <CheckCircle2 size={16} strokeWidth={2} className="mt-0.5 flex-shrink-0 text-brand-yellow" />
                  <span className="text-[13px] leading-snug text-black/70">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-black/10 bg-brand-cream p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <p className="max-w-md text-[13px] leading-[1.7] text-black/55">
              Read the full 2025 &ndash; 2029 manifesto for every pillar and commitment.
            </p>
            <a
              href="/shieeld-manifesto.pdf"
              download="Ibeju-Lekki-SHIEELD-Manifesto.pdf"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-brand-yellow px-6 py-3.5 text-[13px] font-bold text-black transition-colors hover:bg-brand-ink hover:text-brand-yellow"
            >
              <Download size={16} strokeWidth={2.5} /> Download the Manifesto (PDF)
            </a>
          </div>

          {/* Prev / next pillar */}
          <div className="mt-8 grid grid-cols-2 gap-3">
            <Link href={`/programmes/shieeld/${prev.slug}`} className="flex items-center gap-2 rounded-xl border border-black/10 bg-white px-4 py-3 text-left transition-colors hover:border-brand-yellow">
              <ArrowLeft size={15} strokeWidth={2.5} className="flex-shrink-0 text-brand-amber" />
              <span className="min-w-0">
                <span className="block text-[10px] uppercase tracking-wide text-black/40">Previous</span>
                <span className="block truncate text-[12.5px] font-semibold text-brand-ink">{prev.title}</span>
              </span>
            </Link>
            <Link href={`/programmes/shieeld/${next.slug}`} className="flex items-center justify-end gap-2 rounded-xl border border-black/10 bg-white px-4 py-3 text-right transition-colors hover:border-brand-yellow">
              <span className="min-w-0">
                <span className="block text-[10px] uppercase tracking-wide text-black/40">Next</span>
                <span className="block truncate text-[12.5px] font-semibold text-brand-ink">{next.title}</span>
              </span>
              <ArrowRight size={15} strokeWidth={2.5} className="flex-shrink-0 text-brand-amber" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
