import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'
import { Sparkles, ArrowRight, CalendarClock, MapPin, Users } from 'lucide-react'

export type Programme = {
  _id: string
  title: string
  slug: { current: string }
  summary?: string
  status?: string
  audience?: string
  venue?: string
  deadline?: string
  partners?: string[]
  coverImage?: any
}

export const STATUS_LABELS: Record<string, string> = {
  open: 'Open for applications',
  upcoming: 'Coming soon',
  closed: 'Applications closed',
  ongoing: 'Ongoing',
}

export const STATUS_STYLES: Record<string, string> = {
  open: 'bg-brand-yellow text-black',
  upcoming: 'bg-brand-ink text-white',
  closed: 'bg-black/10 text-black/55',
  ongoing: 'bg-brand-amber text-white',
}

export const formatDeadline = (iso?: string) =>
  iso ? new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : ''

export default function ProgrammeCards({ programmes }: { programmes: Programme[] }) {
  if (!programmes || programmes.length === 0) return null

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 pt-12 sm:pt-16">
      <div className="flex items-center gap-3 mb-3">
        <span className="h-px w-8 bg-brand-yellow" aria-hidden="true" />
        <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-black/45">Programmes</span>
      </div>
      <h2 className="text-[clamp(1.3rem,3.4vw,1.8rem)] font-extrabold text-brand-ink tracking-tight mb-3">
        Skills and employment programmes
      </h2>
      <p className="max-w-2xl text-[14px] text-black/55 leading-[1.8] mb-8">
        Training and career programmes run by the council and its partners under the SHIEELD Agenda.
        Select a programme to see who it is for and how to apply.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {programmes.map((p) => {
          const cover = p.coverImage?.asset
            ? urlFor(p.coverImage).width(800).height(450).fit('crop').auto('format').url()
            : null
          const status = p.status ?? 'upcoming'
          return (
            <Link
              key={p._id}
              href={`/resources/careers/${p.slug.current}`}
              className="group flex flex-col border border-black/10 rounded-2xl overflow-hidden hover:border-brand-yellow/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-brand-cream">
                {cover ? (
                  <Image src={cover} alt={p.coverImage?.alt || p.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/[0.18] to-brand-yellow/[0.06] flex items-center justify-center">
                    <Sparkles size={28} strokeWidth={1.2} className="text-brand-ink/25" />
                  </div>
                )}
                <span className={`absolute top-3 left-3 text-[9.5px] font-bold uppercase tracking-[0.12em] px-2.5 py-1 rounded-full ${STATUS_STYLES[status] ?? 'bg-brand-ink text-white'}`}>
                  {STATUS_LABELS[status] ?? status}
                </span>
              </div>

              <div className="flex flex-col flex-1 p-5">
                <h3 className="text-[15px] font-bold text-brand-ink leading-[1.35] mb-2 group-hover:text-brand-amber transition-colors">
                  {p.title}
                </h3>
                {p.summary ? (
                  <p className="text-[12.5px] text-black/55 leading-[1.7] line-clamp-3 mb-4">{p.summary}</p>
                ) : null}

                <div className="space-y-1.5 mb-4">
                  {p.audience ? (
                    <div className="flex items-start gap-1.5 text-[11.5px] text-black/45">
                      <Users size={12} strokeWidth={2} className="mt-0.5 flex-shrink-0" />
                      <span className="line-clamp-1">{p.audience}</span>
                    </div>
                  ) : null}
                  {p.venue ? (
                    <div className="flex items-start gap-1.5 text-[11.5px] text-black/45">
                      <MapPin size={12} strokeWidth={2} className="mt-0.5 flex-shrink-0" />
                      <span className="line-clamp-1">{p.venue}</span>
                    </div>
                  ) : null}
                  {p.deadline ? (
                    <div className="flex items-start gap-1.5 text-[11.5px] font-semibold text-brand-amber">
                      <CalendarClock size={12} strokeWidth={2} className="mt-0.5 flex-shrink-0" />
                      <span>Closes {formatDeadline(p.deadline)}</span>
                    </div>
                  ) : null}
                </div>

                <div className="inline-flex items-center gap-1 text-[11.5px] font-bold text-brand-ink group-hover:text-brand-amber transition-colors mt-auto">
                  Programme details <ArrowRight size={12} strokeWidth={2.5} />
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
