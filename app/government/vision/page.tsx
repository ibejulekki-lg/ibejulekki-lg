import Link from 'next/link'
import Footer from '@/components/Footer'
import {
  ArrowRight, Compass, Target, Award, HeartHandshake, ScrollText,
  Users, Handshake, Lightbulb, ShieldCheck, Building2,
} from 'lucide-react'

export const metadata = {
  title: 'Vision, Mission & Values | Ibeju-Lekki Local Government',
  description:
    'The vision, mission and core values guiding Ibeju-Lekki Local Government: transformation, inclusive governance, accountability and sustainable infrastructure for every resident.',
}

const VALUES = [
  { icon: Award,          name: 'Leadership',          note: 'Setting direction with competence and integrity.' },
  { icon: HeartHandshake, name: 'Passion for Service', note: 'Serving residents with commitment and care.' },
  { icon: ScrollText,     name: 'Accountability',      note: 'Answering for every decision and every naira.' },
  { icon: Users,          name: 'People Empowerment',  note: 'Building the capacity of citizens to thrive.' },
  { icon: Handshake,      name: 'Collaboration',       note: 'Working with communities, partners and government.' },
  { icon: Lightbulb,      name: 'Innovation',          note: 'Finding better ways to deliver public value.' },
]

const PILLARS = [
  {
    icon: ShieldCheck,
    title: 'Anchoring progress in integrity and transparency',
    body:
      'True transformation is measured not just by new roads, commercial hubs or modern infrastructure, but by the strength of the bond between local leadership and the people we serve. At the heart of our vision for Ibeju-Lekki is an unwavering commitment to open governance, financial integrity and clear accountability. Every milestone on our path toward becoming Lagos State\u2019s leading local government will be built on a foundation of ethical leadership, where public resources directly yield measurable public value.',
  },
  {
    icon: Users,
    title: 'Empowering communities through inclusive governance',
    body:
      'A modern, developed city is one where every voice matters. We recognise that sustainable growth cannot be achieved top-down; it thrives when citizens are active partners in progress. By fostering continuous dialogue, prioritising grassroots participation, and keeping communication channels open and accessible, Ibeju-Lekki Local Government guarantees that civic decisions reflect the genuine needs of our diverse communities. We build trust by listening, acting, and continuously proving that our residents are the primary focus of every developmental initiative.',
  },
  {
    icon: Building2,
    title: 'Delivering sustainable, forward-looking infrastructure',
    body:
      'As Ibeju-Lekki evolves into a pivotal economic hub of Lagos State, our growth must be responsible, equitable and long-lasting. Building public trust means delivering infrastructure that works today while safeguarding opportunities for future generations. Through dependable public services, environmental stewardship, and a relentless focus on safety and economic enablement, we are dedicated to creating a vibrant, secure and prosperous municipality that every resident is proud to call home.',
  },
]

export default function Page() {
  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Header band */}
        <section className="border-b border-black/10 bg-brand-cream">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14">
            <nav className="flex items-center flex-wrap gap-1.5 text-[11px] sm:text-[12px] text-black/45 mb-5" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-brand-ink transition-colors">Home</Link>
              <span className="text-black/30">/</span>
              <span>Government</span>
              <span className="text-black/30">/</span>
              <span className="text-brand-ink font-semibold">Vision, Mission &amp; Values</span>
            </nav>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-brand-yellow" aria-hidden="true" />
              <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-black/45">Government</span>
            </div>
            <h1 className="text-[clamp(1.9rem,5vw,3rem)] font-extrabold text-brand-ink tracking-tight leading-tight">
              Vision, Mission &amp; Values
            </h1>
            <p className="mt-4 max-w-2xl text-[15px] sm:text-[16px] text-black/60 leading-[1.85]">
              What Ibeju-Lekki Local Government is working towards, how we intend to get there,
              and the principles that guide every decision along the way.
            </p>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 space-y-14 sm:space-y-18">

          {/* Vision + Mission */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-black/10 bg-brand-ink p-7 sm:p-9 text-white">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-yellow">
                <Compass size={19} strokeWidth={2.2} className="text-black" />
              </span>
              <div className="mt-5 text-[10.5px] font-bold uppercase tracking-[0.25em] text-brand-yellow">Vision Statement</div>
              <p className="mt-3 text-[15px] sm:text-[16px] leading-[1.85] text-white/85">
                To become one of the most transformed, prosperous, sustainable and people-centered
                local governments in Lagos State, setting the benchmark for infrastructure development,
                economic growth, environmental sustainability and quality public service delivery.
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 bg-brand-cream p-7 sm:p-9">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-yellow">
                <Target size={19} strokeWidth={2.2} className="text-black" />
              </span>
              <div className="mt-5 text-[10.5px] font-bold uppercase tracking-[0.25em] text-brand-amber">Mission Statement</div>
              <p className="mt-3 text-[15px] sm:text-[16px] leading-[1.85] text-black/72">
                To drive the sustainable social and economic transformation of Ibeju-Lekki through
                inclusive governance, strategic partnerships, citizen empowerment, entrepreneurship
                development, quality service delivery, and the provision of modern infrastructure that
                enhances the well-being and prosperity of all residents.
              </p>
            </div>
          </section>

          {/* Core values */}
          <section>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-brand-yellow" aria-hidden="true" />
              <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-black/45">Core Values</span>
            </div>
            <h2 className="text-[clamp(1.3rem,3.4vw,1.8rem)] font-extrabold text-brand-ink tracking-tight mb-6">
              The principles we hold ourselves to
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {VALUES.map((v) => {
                const Icon = v.icon
                return (
                  <div key={v.name} className="rounded-2xl border border-black/10 bg-white p-5 hover:border-brand-yellow/50 transition-colors">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-yellow/[0.15]">
                      <Icon size={17} strokeWidth={2.2} className="text-brand-amber" />
                    </span>
                    <div className="mt-3.5 text-[14px] font-bold text-brand-ink">{v.name}</div>
                    <p className="mt-1.5 text-[12px] text-black/55 leading-[1.65]">{v.note}</p>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Commitments */}
          <section>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-brand-yellow" aria-hidden="true" />
              <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-black/45">Our Commitments</span>
            </div>
            <h2 className="text-[clamp(1.3rem,3.4vw,1.8rem)] font-extrabold text-brand-ink tracking-tight mb-7">
              How the vision becomes practice
            </h2>
            <div className="space-y-4">
              {PILLARS.map((p) => {
                const Icon = p.icon
                return (
                  <article key={p.title} className="rounded-2xl border border-black/10 bg-white p-6 sm:p-8">
                    <div className="flex items-start gap-4">
                      <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-brand-yellow">
                        <Icon size={18} strokeWidth={2.2} className="text-black" />
                      </span>
                      <div>
                        <h3 className="text-[15.5px] sm:text-[17px] font-bold text-brand-ink tracking-tight leading-snug">
                          {p.title}
                        </h3>
                        <p className="mt-3 text-[14px] sm:text-[15px] text-black/70 leading-[1.85]">{p.body}</p>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </section>

          {/* Onward links */}
          <section className="rounded-2xl border border-black/10 bg-brand-cream p-6 sm:p-9">
            <h2 className="text-[clamp(1.2rem,3vw,1.6rem)] font-extrabold text-brand-ink tracking-tight mb-3">
              See the vision in action
            </h2>
            <p className="max-w-2xl text-[14px] text-black/65 leading-[1.85] mb-6">
              The SHIEELD Agenda sets out how these commitments are being delivered across security,
              health, infrastructure, education, environment, the local economy and development.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/programmes/shieeld" className="inline-flex items-center gap-2 rounded-full bg-brand-yellow px-5 py-2.5 text-[13px] font-bold text-black hover:bg-brand-hover transition-colors">
                The SHIEELD Agenda <ArrowRight size={14} strokeWidth={2.5} />
              </Link>
              <Link href="/programmes/performance-report" className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-brand-amber hover:text-brand-ink transition-colors">
                Performance Report <ArrowRight size={12} strokeWidth={2.5} />
              </Link>
              <Link href="/government/chairman" className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-brand-amber hover:text-brand-ink transition-colors">
                Executive Chairman <ArrowRight size={12} strokeWidth={2.5} />
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
