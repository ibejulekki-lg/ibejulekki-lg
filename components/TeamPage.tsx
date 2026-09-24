import Link from 'next/link'
import Image from 'next/image'
import { User } from 'lucide-react'
import Footer from '@/components/Footer'
import { urlFor } from '@/lib/sanity'
import type { Member, Section } from '@/lib/cabinet'

const HONORIFICS = ['Hon.', 'Engr.', 'Dr.', 'Mr.', 'Mrs.', 'Ms.', 'Miss', 'Barr.', 'Alh.', 'Chief', 'Prince', 'Princess', 'Pastor', 'Arc.', 'Surv.', 'Mallam']

function initials(name: string) {
  const parts = name.split(' ').filter((w) => w && !HONORIFICS.includes(w))
  return parts.slice(0, 2).map((w) => w[0] || '').join('').toUpperCase()
}

/* A portrait comes either from Sanity (photo) or from the public folder
   (image). Sanity wins when both are present, so a CMS upload immediately
   overrides whatever the file-based fallback held. */
function portraitSrc(m: Member): string | null {
  if (m.photo?.asset) {
    try {
      return urlFor(m.photo).width(600).height(800).fit('crop').auto('format').url()
    } catch {
      return null
    }
  }
  return m.image ?? null
}

function Portrait({ m }: { m: Member }) {
  const src = portraitSrc(m)
  if (src) {
    return (
      <Image
        src={src}
        alt={m.photo?.alt || (m.role ? `${m.name}, ${m.role}` : m.name)}
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
        <div className="text-[12.5px] sm:text-[13.5px] font-bold text-brand-ink leading-snug">{m.name}</div>
        {m.role ? (
          <div className="mt-0.5 text-[11px] sm:text-[12px] font-medium text-brand-amber leading-snug">{m.role}</div>
        ) : null}
        {m.ward ? (
          <span className="mt-2 inline-block rounded-full bg-black/[0.05] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-black/50">
            {m.ward}
          </span>
        ) : null}
        {m.bio ? (
          <p className="mt-2 text-[11px] sm:text-[11.5px] leading-[1.65] text-black/50">{m.bio}</p>
        ) : null}
      </div>
    </div>
  )
}

/* The lead figure on a page: the Executive Chairman, or the Leader of the
   House. Shown wide with the portrait beside the name rather than as one
   of the grid cards, so the hierarchy reads at a glance on desktop as
   well as on mobile. */
function FeaturedCard({ m, label }: { m: Member; label?: string }) {
  return (
    <div className="group grid grid-cols-1 sm:grid-cols-[minmax(0,300px)_1fr] gap-5 sm:gap-8 overflow-hidden rounded-2xl border border-black/10 bg-white transition-all duration-200 hover:border-brand-yellow/50 hover:shadow-md">
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#F4F4F4]">
        <Portrait m={m} />
      </div>
      <div className="flex flex-col justify-center p-5 sm:p-8 sm:pl-0">
        {label ? (
          <span className="mb-3 inline-flex w-fit items-center rounded-full bg-brand-yellow px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-black">
            {label}
          </span>
        ) : null}
        <div className="text-[clamp(1.2rem,3vw,1.7rem)] font-extrabold text-brand-ink leading-tight">{m.name}</div>
        {m.role ? (
          <div className="mt-2 text-[13px] sm:text-[14px] font-semibold uppercase tracking-wide text-brand-amber leading-snug">{m.role}</div>
        ) : null}
        {m.ward ? (
          <span className="mt-3 inline-block w-fit rounded-full bg-black/[0.05] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-black/50">
            {m.ward}
          </span>
        ) : null}
        {m.bio ? (
          <p className="mt-4 max-w-xl text-[13px] sm:text-[13.5px] leading-[1.75] text-black/55">{m.bio}</p>
        ) : null}
      </div>
    </div>
  )
}

/* A larger upright card, used when two people share the top of a page. */
function FeaturedTall({ m }: { m: Member }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-black/10 bg-white transition-all duration-200 hover:border-brand-yellow/50 hover:shadow-md">
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#F4F4F4]">
        <Portrait m={m} />
      </div>
      <div className="p-5 sm:p-6">
        <div className="text-[15px] sm:text-[18px] font-extrabold text-brand-ink leading-tight">{m.name}</div>
        {m.role ? (
          <div className="mt-1.5 text-[12px] sm:text-[13px] font-semibold uppercase tracking-wide text-brand-amber leading-snug">{m.role}</div>
        ) : null}
        {m.bio ? (
          <p className="mt-3 text-[12.5px] leading-[1.7] text-black/55">{m.bio}</p>
        ) : null}
      </div>
    </div>
  )
}

/* The people at the top of a page. One gets the wide card; two get a pair
   of larger upright cards. On a phone both stack, which is how they
   already read there. */
function FeaturedRow({ people, label }: { people: Member[]; label?: string }) {
  if (people.length === 0) return null
  if (people.length === 1) return <FeaturedCard m={people[0]} label={label} />
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 max-w-3xl">
      {people.map((m, i) => (
        <FeaturedTall key={i} m={m} />
      ))}
    </div>
  )
}

/* A vertical line joining one tier to the next. Desktop only: on a phone
   the sections already read as a simple stack, which is clearer there. */
function TierConnector() {
  return <div className="mx-auto hidden sm:block w-px h-9 bg-black/15" aria-hidden="true" />
}

/* A section heading centred over its tier, used on the hierarchy layout
   so each level reads as a rung rather than a left-aligned list. */
function TierHeading({ title, blurb }: { title: string; blurb?: string }) {
  return (
    <div className="mb-6 text-center">
      <h2 className="text-[clamp(1.05rem,2.3vw,1.35rem)] font-extrabold text-brand-ink tracking-tight">{title}</h2>
      {blurb ? (
        <p className="mt-1.5 mx-auto max-w-xl text-[12.5px] text-black/50 leading-relaxed">{blurb}</p>
      ) : null}
    </div>
  )
}

/* Keeps a short tier from stretching the full width, so three cards sit
   as a tidy group under the pair above rather than spreading out. */
function tierWidth(count: number) {
  if (count <= 2) return 'max-w-2xl'
  if (count === 3) return 'max-w-3xl'
  if (count === 4) return 'max-w-4xl'
  return ''
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
  eyebrow, title, intro, members, sections, group, lead,
  featureFirst = false, featureCount = 1, featureLabel, hierarchy = false,
}: {
  eyebrow: string
  title: string
  intro: string
  members?: Member[]
  sections?: Section[]
  group: string
  lead?: Member
  /* Lift the first person out of the first section and show them in the
     wide featured card, with the rest of that section in the grid below. */
  featureFirst?: boolean
  /* How many people to lift out of the first section. The Executive
     Council lifts two: the Chairman and the Vice Chairman. */
  featureCount?: number
  featureLabel?: string
  /* Lay the sections out as a top-down hierarchy on desktop, with each
     tier centred and joined by a connector, matching the organogram.
     The phone layout is unchanged either way. */
  hierarchy?: boolean
}) {
  /* Who sits at the top: either an explicitly passed leader, or the first
     featureCount people of the first section. */
  const headline: Member[] = lead
    ? [lead]
    : featureFirst
      ? (sections?.[0]?.members ?? []).slice(0, featureCount)
      : []

  /* Those people are then removed from the section below, so nobody
     appears twice on the page. */
  const shown =
    featureFirst && !lead && sections
      ? sections.map((sec, i) =>
          i === 0 ? { ...sec, members: sec.members.slice(featureCount) } : sec,
        )
      : sections

  return (
    <>
      <main className="min-h-screen bg-white">
        <section className="border-b border-black/10 bg-brand-cream">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14">
            <nav className="flex items-center flex-wrap gap-1.5 text-[11px] sm:text-[12px] text-black/45 mb-5" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-brand-ink transition-colors">Home</Link>
              <span className="text-black/30">/</span>
              <span>Government</span>
              <span className="text-black/30">/</span>
              <span className="text-brand-ink font-semibold">{group}</span>
            </nav>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-brand-yellow" aria-hidden="true" />
              <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-black/45">{eyebrow}</span>
            </div>
            <h1 className="text-[clamp(1.8rem,5vw,2.8rem)] font-extrabold text-brand-ink tracking-tight leading-tight">{title}</h1>
            <p className="mt-4 max-w-2xl text-[14px] sm:text-[15px] text-black/55 leading-[1.8]">{intro}</p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
          {headline.length ? (
            <div className={hierarchy ? 'mb-2 sm:mb-4' : 'mb-10 sm:mb-14'}>
              <FeaturedRow people={headline} label={featureLabel} />
            </div>
          ) : null}
          {shown ? (
            <div className={hierarchy ? undefined : 'space-y-12 sm:space-y-16'}>
              {shown
                .filter((sec) => sec.members.length > 0)
                .map((sec, i) => (
                  <div key={sec.title}>
                    {hierarchy ? (
                      <>
                        <TierConnector />
                        <div className={`mx-auto ${tierWidth(sec.members.length)}`}>
                          <TierHeading title={sec.title} blurb={sec.blurb} />
                          <Grid members={sec.members} />
                        </div>
                      </>
                    ) : (
                      <div className={i > 0 ? 'mt-12 sm:mt-16' : undefined}>
                        <div className="mb-6">
                          <h2 className="text-[clamp(1.15rem,2.5vw,1.5rem)] font-extrabold text-brand-ink tracking-tight">{sec.title}</h2>
                          {sec.blurb ? (
                            <p className="mt-1.5 text-[13px] text-black/50 leading-relaxed max-w-2xl">{sec.blurb}</p>
                          ) : null}
                          <div className="mt-3 h-px w-full bg-black/10" />
                        </div>
                        <Grid members={sec.members} />
                      </div>
                    )}
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

