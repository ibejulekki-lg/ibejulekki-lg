import Link from 'next/link'
import Image from 'next/image'
import { User } from 'lucide-react'
import Footer from '@/components/Footer'
import type { Member, Section } from '@/lib/cabinet'

const HONORIFICS = ['Hon.', 'Engr.', 'Dr.', 'Mr.', 'Mrs.', 'Ms.', 'Miss', 'Barr.', 'Alh.', 'Chief', 'Prince', 'Princess', 'Pastor', 'Arc.', 'Surv.', 'Mallam']

function initials(name: string) {
  const parts = name.split(' ').filter((w) => w && !HONORIFICS.includes(w))
  return parts.slice(0, 2).map((w) => w[0] || '').join('').toUpperCase()
}

function Portrait({ m }: { m: Member }) {
  if (m.image) {
    return (
      <Image
        src={m.image}
        alt={m.role ? `${m.name}, ${m.role}` : m.name}
        fill
        className="object-cover object-top"
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
      />
    )
  }
  if (m.name === 'To be confirmed') {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-black/[0.04] text-black/25">
        <User size={44} strokeWidth={1.4} />
      </div>
    )
  }
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-brand-yellow">
      <span className="text-[clamp(2rem,6vw,2.8rem)] font-extrabold tracking-tight text-black/80">{initials(m.name)}</span>
    </div>
  )
}

function Card({ m }: { m: Member }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-black/10 bg-white hover:border-brand-yellow/50 hover:shadow-md transition-all duration-200">
      <div className="relative aspect-[3/4] overflow-hidden bg-[#F4F4F4]">
        <Portrait m={m} />
      </div>
      <div className="p-3 sm:p-4">
        <div className="text-[12.5px] sm:text-[13.5px] font-bold text-[#111111] leading-snug">{m.name}</div>
        {m.role ? (
          <div className="mt-0.5 text-[11px] sm:text-[12px] font-medium text-[#B26B00] leading-snug">{m.role}</div>
        ) : null}
        {m.ward ? (
          <span className="mt-2 inline-block rounded-full bg-black/[0.05] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-black/50">
            {m.ward}
          </span>
        ) : null}
      </div>
    </div>
  )
}

function Grid({ members }: { members: Member[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
      {members.map((m, i) => (
        <Card key={i} m={m} />
      ))}
    </div>
  )
}

export default function TeamPage({
  eyebrow, title, intro, members, sections, group,
}: {
  eyebrow: string
  title: string
  intro: string
  members?: Member[]
  sections?: Section[]
  group: string
}) {
  return (
    <>
      <main className="min-h-screen bg-white">
        <section className="border-b border-black/10 bg-[#FAFAFA]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14">
            <nav className="flex items-center flex-wrap gap-1.5 text-[11px] sm:text-[12px] text-black/45 mb-5" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#111111] transition-colors">Home</Link>
              <span className="text-black/30">/</span>
              <span>Government</span>
              <span className="text-black/30">/</span>
              <span className="text-[#111111] font-semibold">{group}</span>
            </nav>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-brand-yellow" aria-hidden="true" />
              <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-black/45">{eyebrow}</span>
            </div>
            <h1 className="text-[clamp(1.8rem,5vw,2.8rem)] font-extrabold text-[#111111] tracking-tight leading-tight">{title}</h1>
            <p className="mt-4 max-w-2xl text-[14px] sm:text-[15px] text-black/55 leading-[1.8]">{intro}</p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
          {sections ? (
            <div className="space-y-12 sm:space-y-16">
              {sections.map((sec) => (
                <div key={sec.title}>
                  <div className="mb-6">
                    <h2 className="text-[clamp(1.15rem,2.5vw,1.5rem)] font-extrabold text-[#111111] tracking-tight">{sec.title}</h2>
                    {sec.blurb ? (
                      <p className="mt-1.5 text-[13px] text-black/50 leading-relaxed max-w-2xl">{sec.blurb}</p>
                    ) : null}
                    <div className="mt-3 h-px w-full bg-black/10" />
                  </div>
                  <Grid members={sec.members} />
                </div>
              ))}
            </div>
          ) : members ? (
            <Grid members={members} />
          ) : null}
        </section>
      </main>
      <Footer />
    </>
  )
}
