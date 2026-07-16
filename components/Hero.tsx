'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ShieldCheck,
  HeartPulse,
  Landmark,
  GraduationCap,
  Leaf,
  TrendingUp,
  MonitorSmartphone,
  Megaphone,
  ChevronRight,
  Download,
} from 'lucide-react';

// ── SHIEELD pillars ───────────────────────────────────────────────────────────
const PILLARS = [
  { key: 'S', label: 'Security',       Icon: ShieldCheck },
  { key: 'H', label: 'Health',          Icon: HeartPulse },
  { key: 'I', label: 'Infrastructural Development',  Icon: Landmark },
  { key: 'E', label: 'Education',       Icon: GraduationCap },
  { key: 'E', label: 'Environment',     Icon: Leaf },
  { key: 'L', label: 'Local Economy',   Icon: TrendingUp },
  { key: 'D', label: 'Digital Governance',    Icon: MonitorSmartphone },
];

// ── Stats ─────────────────────────────────────────────────────────────────────
const STATS = [
  { value: '$9B+',   label: 'Private Investment' },
  { value: '646km²', label: 'Land Area' },
  { value: '250k+',  label: 'Residents' },
  { value: '7',      label: 'SHIEELD Pillars' },
];

// ── Ticker ────────────────────────────────────────────────────────────────────
const TICKER = [
  'Dangote Refinery',
  'Lekki Free Trade Zone',
  'Lekki Deep Seaport',
  'Pan-Atlantic University',
  'Lekki International Airport',
  'Epe Resort & Spa',
  'Alaro City',
  'Eleganza Industrial City',
];

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const [activePillar, setActivePillar] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 120);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePillar((p) => (p + 1) % PILLARS.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  const ActiveIcon = PILLARS[activePillar].Icon;

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        className="relative bg-white overflow-hidden"
        aria-label="Welcome to Ibeju-Lekki Local Government"
      >
        {/* Subtle dot grid background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #111111 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />

        {/* Top-right gold wash, very faint */}
        <div
          aria-hidden="true"
          className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 90% 20%, rgba(255,186,38,0.07) 0%, transparent 60%)',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

            {/* ── LEFT ── */}
            <div>
              {/* Badge */}
              <div
                className={`
                  inline-flex items-center gap-2 border border-[#111111]/20
                  rounded-full px-4 py-1.5 mb-6
                  transition-all duration-600 ease-out
                  ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}
                `}
                style={{ transitionDelay: '0ms' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow flex-shrink-0" />
                <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[#111111]">
                  Official Local Govt. Website
                </span>
              </div>

              {/* H1 */}
              <h1
                className={`
                  text-[clamp(2.4rem,6vw,4rem)] font-extrabold text-[#111111]
                  leading-[1.05] tracking-[-0.028em] mb-5
                  transition-all duration-700 ease-out
                  ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
                `}
                style={{ transitionDelay: '80ms' }}
              >
                Making Ibeju-Lekki <br />
                <span className="text-[#111111]">Great </span>
                <span className="text-brand-yellow">for Everyone</span>
              </h1>

              {/* Sub */}
              <p
                className={`
                  text-[15px] sm:text-[16px] text-[#111111]/55 leading-[1.8]
                  max-w-[480px] mb-8
                  transition-all duration-700 ease-out
                  ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
                `}
                style={{ transitionDelay: '160ms' }}
              >
                Ibeju-Lekki is the fastest-growing local government area in
                Lagos State and Nigeria&apos;s emerging economic frontier.
              </p>

              {/* CTAs */}
              <div
                className={`
                  flex flex-wrap gap-3 mb-12
                  transition-all duration-700 ease-out
                  ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
                `}
                style={{ transitionDelay: '240ms' }}
              >
                <Link
                  href="/programmes/shieeld"
                  className="
                    inline-flex items-center gap-2 px-6 py-3.5
                    bg-brand-yellow text-black text-[13px] font-bold tracking-[0.04em]
                    rounded-full hover:bg-[#111111] hover:text-brand-yellow
                    active:scale-95 transition-all duration-200
                    shadow-sm shadow-[#111111]/15
                  "
                >
                  Explore SHIEELD Agenda
                  <ArrowRight size={15} strokeWidth={2.5} />
                </Link>
                <Link
                  href="/news"
                  className="
                    inline-flex items-center gap-2 px-6 py-3.5
                    border border-[#111111]/20 text-[#111111]/75 text-[13px]
                    font-semibold tracking-[0.04em] rounded-full
                    hover:border-[#111111]/50 hover:text-[#B26B00]
                    active:scale-95 transition-all duration-200
                  "
                >
                  Latest News
                  <ChevronRight size={15} strokeWidth={2.5} />
                </Link>
              </div>

              {/* Document downloads */}
              <div
                className={`
                  flex flex-wrap items-center gap-x-5 gap-y-2 mb-12 -mt-6
                  transition-all duration-700 ease-out
                  ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
                `}
                style={{ transitionDelay: '280ms' }}
              >
                <span className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#111111]/35">
                  Downloads
                </span>
                <a
                  href="/shieeld-manifesto.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-1.5 text-[12.5px] font-semibold
                    text-[#111111]/70 hover:text-[#B26B00] transition-colors
                  "
                >
                  <Download size={14} strokeWidth={2.2} className="text-brand-yellow" />
                  SHIEELD Manifesto
                </a>
                <a
                  href="/performance-report.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-1.5 text-[12.5px] font-semibold
                    text-[#111111]/70 hover:text-[#B26B00] transition-colors
                  "
                >
                  <Download size={14} strokeWidth={2.2} className="text-brand-yellow" />
                  Performance Report
                </a>
              </div>

              {/* Stats */}
              <div
                className={`
                  grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6
                  pt-8 border-t border-[#111111]/10
                  transition-all duration-700 ease-out
                  ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
                `}
                style={{ transitionDelay: '340ms' }}
              >
                {STATS.map((s) => (
                  <div key={s.label}>
                    <div className="text-[clamp(1.35rem,2.5vw,1.9rem)] font-extrabold text-[#B26B00] leading-none mb-1 tracking-tight">
                      {s.value}
                    </div>
                    <div className="text-[10.5px] font-semibold text-[#111111]/40 uppercase tracking-[0.1em]">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT ── */}
            <div
              className={`
                flex flex-col gap-4
                transition-all duration-700 ease-out
                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
              `}
              style={{ transitionDelay: '180ms' }}
            >
              {/* Chairman card */}
              <div className="
                border border-[#111111]/[0.12] rounded-2xl p-5 sm:p-6
                hover:border-brand-yellow/40 transition-colors duration-300
              ">
                <div className="flex items-center gap-4 mb-4">
                  {/* Portrait photo, square crop, face centred */}
                  <div className="relative w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-2xl overflow-hidden flex-shrink-0 ring-2 ring-brand-yellow/35 shadow-sm">
                    <Image
                      src="/chairman_on_landingpage.webp"
                      alt="Hon. Abdullahi Sesan Olowa, Executive Chairman"
                      fill
                      className="object-cover object-[center_15%]"
                      sizes="(max-width: 640px) 64px, 72px"
                      priority
                    />
                  </div>
                  <div>
                    <div className="text-[14px] font-bold text-[#111111] leading-tight mb-0.5">
                      Hon. Abdullahi Sesan Olowa
                    </div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#B26B00]">
                      Executive Chairman
                    </div>
                    <div className="text-[10px] text-[#111111]/40 mt-0.5 font-medium">
                      Ibeju-Lekki Local Government
                    </div>
                  </div>
                </div>
                <p className="text-[13px] text-[#111111]/55 leading-[1.78] italic border-l-[2.5px] border-brand-yellow/40 pl-3.5">
                  &ldquo;Our dedication is rooted in the comprehensive advancement
                  of Ibeju-Lekki through SHIEELD, we are transforming this LGA
                  into a model of modern governance.&rdquo;
                </p>
              </div>

              {/* SHIEELD tiles */}
              <div className="border border-[#111111]/[0.12] rounded-2xl p-4 sm:p-5">
                <div className="text-[9.5px] font-bold uppercase tracking-[0.24em] text-[#111111]/35 mb-3">
                  The SHIEELD Agenda, 7 Pillars
                </div>

                <div className="grid grid-cols-7 gap-1.5">
                  {PILLARS.map((p, i) => {
                    const isActive = activePillar === i;
                    return (
                      <button
                        key={i}
                        onClick={() => setActivePillar(i)}
                        aria-label={`Pillar: ${p.label}`}
                        className={`
                          flex flex-col items-center justify-center rounded-xl
                          py-2.5 px-1 border transition-all duration-300 cursor-pointer
                          ${isActive
                            ? 'bg-brand-yellow border-brand-yellow scale-105 shadow-md shadow-brand-yellow/25'
                            : 'bg-white border-[#111111]/[0.12] hover:border-[#111111]/30 hover:bg-brand-yellow/10'
                          }
                        `}
                      >
                        <span
                          className={`
                            text-[clamp(1rem,2.2vw,1.4rem)] font-extrabold leading-none mb-0.5
                            ${isActive ? 'text-black' : 'text-[#111111]/55'}
                          `}
                        >
                          {p.key}
                        </span>
                        <span
                          className={`
                            hidden sm:block text-[7px] font-semibold uppercase
                            tracking-[0.04em] leading-tight text-center
                            ${isActive ? 'text-black/60' : 'text-[#111111]/30'}
                          `}
                        >
                          {p.label.split(' ')[0]}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Active pillar info */}
                <div className="mt-3 pt-3 border-t border-[#111111]/[0.08] flex items-center gap-3 min-h-[40px]">
                  <div className="w-8 h-8 rounded-lg bg-brand-yellow/[0.12] flex items-center justify-center flex-shrink-0">
                    <ActiveIcon size={15} strokeWidth={2} className="text-[#111111]" />
                  </div>
                  <div>
                    <span className="text-[12.5px] font-bold text-[#111111]">
                      {PILLARS[activePillar].label}
                    </span>
                    <span className="text-[11px] text-[#111111]/35 ml-2">
                      Pillar {activePillar + 1} of 7
                    </span>
                  </div>
                  <Link
                    href="/programmes/shieeld"
                    className="ml-auto text-[10.5px] font-semibold text-[#B26B00] hover:text-[#B26B00] transition-colors flex items-center gap-1"
                  >
                    View <ChevronRight size={12} strokeWidth={2.5} />
                  </Link>
                </div>
              </div>

              {/* Alert strip */}
              <div className="
                flex items-start gap-3
                border border-[#BE1E2D]/20 rounded-xl px-4 py-3
                bg-[#BE1E2D]/[0.03]
              ">
                <div className="w-7 h-7 rounded-lg bg-[#BE1E2D]/[0.08] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Megaphone size={14} strokeWidth={2} className="text-[#BE1E2D]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[11.5px] font-bold text-[#111111] mb-0.5">
                    Council Notice
                  </div>
                  <div className="text-[11px] text-[#111111]/50 leading-snug">
                    LASG Local Government Development Plan, Conference 57 · Apr 2026
                  </div>
                </div>
                <Link
                  href="/news"
                  className="flex-shrink-0 flex items-center gap-1 text-[10.5px] font-bold text-[#BE1E2D] hover:text-[#B26B00] transition-colors mt-0.5"
                >
                  Read <ChevronRight size={11} strokeWidth={2.5} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TICKER ─────────────────────────────────────────────────────────── */}
      <div
        className="border-y border-[#111111]/[0.08] overflow-hidden bg-white"
        aria-label="Key investments in Ibeju-Lekki"
      >
        <div className="flex">
          {/* Label */}
          <div className="
            flex-shrink-0 flex items-center gap-2 px-4 sm:px-5
            bg-brand-yellow text-black z-10
            text-[9.5px] font-bold uppercase tracking-[0.22em]
          ">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" aria-hidden="true" />
            <span className="hidden sm:inline py-3">The New Lagos.</span>
            <span className="sm:hidden py-3">The New Lagos.</span>
          </div>

          {/* Scrolling text */}
          <div className="flex-1 overflow-hidden py-3">
            <div
              className="flex whitespace-nowrap"
              style={{ animation: 'scroll 36s linear infinite' }}
              aria-hidden="true"
            >
              {[...TICKER, ...TICKER].map((item, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-3 px-6 text-[12px] font-medium text-[#111111]/45 italic"
                >
                  {item}
                  <span className="w-1 h-1 rounded-full bg-brand-yellow/50 flex-shrink-0" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
