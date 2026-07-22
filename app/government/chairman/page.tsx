import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Award, MapPin, CalendarDays, Landmark } from 'lucide-react'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Executive Chairman | Ibeju-Lekki Local Government',
  description:
    'Biography of Hon. Abdullahi Sesan Olowa, Executive Chairman of Ibeju-Lekki Local Government Area, Lagos State.',
}

const FACTS: { icon: 'pin' | 'cal' | 'mark'; label: string; value: string }[] = [
  { icon: 'pin', label: 'Hometown', value: 'Orimedu, Ibeju-Lekki' },
  { icon: 'mark', label: 'Party', value: 'All Progressives Congress (APC)' },
  { icon: 'cal', label: 'First elected', value: 'July 2021' },
  { icon: 'cal', label: 'Re-elected', value: '2025 (term to 2029)' },
]

const SECTIONS: { heading: string; paras: string[] }[] = [
  {
    heading: 'Early Life and Education',
    paras: [
      `Hon. Engr. Abdullahi Sesan Olowa, popularly known as "Jaja" and widely celebrated as "Mr. Project", hails from Orimedu Town in Ibeju-Lekki Local Government Area of Lagos State, Nigeria. He began his educational journey at Epe Primary School and proceeded to Ogunmodede College, Epe, for his secondary education.`,
      `Driven by a passion for science, technology, and innovation, he earned a Bachelor of Science (B.Sc.) Degree in Electronics and Computer Engineering from Lagos State University (LASU), Ojo, between 1994 and 2000. He subsequently attended the Access Bank School of Banking, where he acquired specialized training in finance, banking operations, and management.`,
      `Further strengthening his leadership and management capabilities, Hon. Olowa obtained a Master of Business Administration (MBA) from the University of Lagos Business School, equipping him with advanced knowledge in strategic management, corporate leadership, and organizational development.`,
      `He is a Council for the Regulation of Engineering in Nigeria (COREN) Certified Engineer and a proud member of the Nigerian Society of Engineers (NSE), reflecting his commitment to professional excellence and engineering best practices.`,
    ],
  },
  {
    heading: 'Professional Career',
    paras: [
      `Olowa's career reflects a blend of technical expertise, financial acumen and executive leadership. He began in 2001 as a Trainee Consultant at Ernst & Young, then moved into banking with the Public Sector team at Access Bank from 2002 to 2006.`,
      `He served as Team Leader of the Agricultural Unit at Bank PHB, now Keystone Bank, from 2006 to 2010, supporting agricultural financing and rural economic development, and spent six months in 2010 as a Public Sector Consultant at First City Monument Bank (FCMB).`,
      `From 2011 to 2017 he was Pioneer General Manager and later Group General Manager at the Louis Valentino Group, rising to Executive Director and Board Member of Louis Valentino Food and Beverages Limited from 2017 to 2020. In 2020 he returned to Access Bank as Manager of the Commercial Banking Division.`,
    ],
  },
  {
    heading: 'Political Career',
    paras: [
      `Olowa entered active politics in 2003, aligned with the progressive ideals of the All Progressives Congress (APC). In July 2021 he was elected Executive Chairman of Ibeju-Lekki Local Government, and in 2025 he was re-elected for a second term that runs to 2029.`,
      `He also serves as Chairman of Conference 57, the association of all Lagos State Local Government Chairmen, and as Lagos State Coordinator of the "Relax! Tinubu Is Fixing Nigeria" (RTIFN) movement in support of President Bola Ahmed Tinubu's Renewed Hope Agenda. His administration received early commendation from the Lagos State Ministry of Local Government, Chieftaincy Affairs and Rural Development for its performance in its first 28 months.`,
    ],
  },
  {
    heading: 'Leadership and the SHIEELD Agenda',
    paras: [
      `Widely known as "Mr. Project", Olowa runs a people-centred administration built on the SHIEELD agenda and its seven cardinal pillars: security, health, infrastructure, environmental sustainability, education and youth development, the local economy, and digital governance and civic participation.`,
    ],
  },
]

const ACHIEVEMENTS: { group: string; items: string[] }[] = [
  {
    group: 'Infrastructure',
    items: [
      `Construction and commissioning of a modern Ibeju-Lekki Council Secretariat, the Bola Ahmed Tinubu (BAT) House, commissioned by Governor Babajide Sanwo-Olu.`,
      `Completion of a new Legislative Building and Complex.`,
      `Standard paved roads, including the 450 metre Babajide Olusola Sanwo-Olu Road in Igando-Oloja, the 700 metre Ocean Drive Road in Orimedu, and the 800 metre Lakowe-Losoro Link Road.`,
      `Power restoration, including rehabilitation of a vandalised 33kV line to restore electricity to several communities.`,
    ],
  },
  {
    group: 'Social Services and Economic Empowerment',
    items: [
      `Renovation of schools, such as Magbon Alade Primary School.`,
      `Free weekend tutorials and tertiary scholarships in partnership with Pan-Atlantic University.`,
      `Conditional cash transfers, including ₦100,000 payments to beneficiaries across the council.`,
      `Education and health interventions and housing scheme flag-offs.`,
    ],
  },
  {
    group: 'Environment and Security',
    items: [
      `Expansion of the waste management fleet for cleaner communities.`,
      `Establishment of the Keke Jaja garbage collection tricycles.`,
      `Broader security enhancement and sustainability initiatives.`,
    ],
  },
]

const AWARDS: string[] = [
  `Best Performing Local Government Chairman (2024), presented at the 5th Epe Division Community Annual Award (EDCAA) in Epe.`,
]

function FactIcon({ kind }: { kind: 'pin' | 'cal' | 'mark' }) {
  if (kind === 'pin') return <MapPin size={14} strokeWidth={2} className="text-brand-amber" />
  if (kind === 'cal') return <CalendarDays size={14} strokeWidth={2} className="text-brand-amber" />
  return <Landmark size={14} strokeWidth={2} className="text-brand-amber" />
}

export default function Page() {
  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Hero on grey */}
        <section className="border-b border-black/10 bg-gradient-to-b from-[#ECECEC] to-[#F7F7F7]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14">
            <nav className="flex items-center flex-wrap gap-1.5 text-[11px] sm:text-[12px] text-black/45 mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-brand-ink transition-colors">Home</Link>
              <span className="text-black/30">/</span>
              <span>Government</span>
              <span className="text-black/30">/</span>
              <span className="text-brand-ink font-semibold">Executive Chairman</span>
            </nav>

            <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 sm:gap-9">
              <div className="relative w-44 h-56 sm:w-52 sm:h-72 flex-shrink-0 overflow-hidden rounded-2xl bg-[#D9D9D9] shadow-lg ring-1 ring-black/5">
                <Image
                  src="/chairman.webp"
                  alt="Hon. Abdullahi Sesan Olowa, Executive Chairman"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 176px, 208px"
                  priority
                />
              </div>
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-3 mb-3">
                  <span className="h-px w-8 bg-brand-yellow" aria-hidden="true" />
                  <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-black/45">Executive Chairman</span>
                </div>
                <h1 className="text-[clamp(1.8rem,5vw,2.9rem)] font-extrabold text-brand-ink tracking-tight leading-tight">
                  Hon. Abdullahi Sesan Olowa
                </h1>
                <p className="mt-2 text-[14px] sm:text-[15px] text-black/55">
                  Ibeju-Lekki Local Government Area, Lagos State &middot; Known as &ldquo;Jaja&rdquo; and &ldquo;Mr. Project&rdquo;
                </p>
                <div className="mt-5 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-x-6 gap-y-2.5 max-w-md">
                  {FACTS.map((f) => (
                    <div key={f.label} className="flex items-center gap-2">
                      {f.label === 'Party' ? (
                        <Image src="/apc-logo.webp" alt="All Progressives Congress logo" width={16} height={16} className="flex-shrink-0" />
                      ) : (
                        <FactIcon kind={f.icon} />
                      )}
                      <span className="text-[12px] text-black/45">{f.label}:</span>
                      <span className="text-[12.5px] font-semibold text-brand-ink">{f.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Biography */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
          <div className="space-y-10">
            {SECTIONS.map((s) => (
              <div key={s.heading}>
                <div className="mb-3 flex items-center gap-3">
                  <span className="h-px w-8 bg-brand-yellow" aria-hidden="true" />
                  <h2 className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-black/45">{s.heading}</h2>
                </div>
                <div className="space-y-4 text-[14px] sm:text-[15px] leading-[1.85] text-black/70">
                  {s.paras.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <div className="mt-12">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-brand-yellow" aria-hidden="true" />
              <h2 className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-black/45">Notable Achievements</h2>
            </div>
            <div className="space-y-6">
              {ACHIEVEMENTS.map((a) => (
                <div key={a.group} className="rounded-2xl border border-black/10 bg-brand-cream p-5 sm:p-6">
                  <h3 className="mb-3 text-[14px] font-bold text-brand-ink">{a.group}</h3>
                  <ul className="space-y-2.5">
                    {a.items.map((it) => (
                      <li key={it} className="flex items-start gap-2.5 text-[13px] leading-snug text-black/65">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-yellow" aria-hidden="true" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div className="mt-12">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-brand-yellow" aria-hidden="true" />
              <h2 className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-black/45">Awards and Recognition</h2>
            </div>
            <ul className="space-y-3">
              {AWARDS.map((aw) => (
                <li key={aw} className="flex items-start gap-3 rounded-xl border border-black/10 bg-white px-4 py-3.5">
                  <Award size={16} strokeWidth={2} className="mt-0.5 flex-shrink-0 text-brand-yellow" />
                  <span className="text-[13px] leading-snug text-black/70">{aw}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-2xl bg-brand-ink p-6 text-white sm:flex-row sm:items-center sm:p-8">
            <div>
              <div className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-brand-yellow">The plan and the record</div>
              <p className="max-w-md text-[14px] leading-relaxed text-white/70">
                Explore the SHIEELD agenda for the second term, and the performance report for the first.
              </p>
            </div>
            <div className="flex flex-shrink-0 flex-col gap-2.5 sm:flex-row">
              <Link href="/programmes/shieeld" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-brand-yellow px-5 py-3 text-[13px] font-bold text-black transition-colors hover:bg-white">
                SHIEELD Agenda <ArrowRight size={15} strokeWidth={2.5} />
              </Link>
              <Link href="/programmes/budget" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/25 px-5 py-3 text-[13px] font-bold text-white transition-colors hover:bg-white/10">
                Performance Report
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
