import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Quote } from 'lucide-react'
import { urlFor } from '@/lib/sanity'

const PLACEHOLDER = {
  name: 'Hon. Abdullahi Sesan Olowa',
  title: 'Executive Chairman, Ibeju-Lekki Local Government',
  pullQuote: 'Our dedication is rooted in the comprehensive advancement of Ibeju-Lekki. Through the SHIEELD Agenda, we are transforming this LGA into a model of modern governance and sustainable development.',
  stats: [
    { value:'20,000+',  label:'People Reached',  detail:'Food Palliative Programme' },
    { value:'400',   label:'Free JAMB Forms Annually',    detail:'Student Admission Support' },
    { value:'Conference 57', label:'Chairman',  detail:'League of LG Chairmen, Lagos' },
    { value:'7',      label:'SHIEELD Pillars',      detail:'The governance framework' },
  ],
}

interface Stat { value:string; label:string; detail:string }
interface Props {
  data?: { name?:string; title?:string; pullQuote?:string; photo?:{ asset:any; alt?:string }; stats?:Stat[] }
}

export default function ChairmanSection({ data }: Props) {
  // Merge field by field so a partially filled CMS document never renders
  // blank text; every field falls back to the placeholder copy.
  const name      = data?.name      ?? PLACEHOLDER.name
  const title     = data?.title     ?? PLACEHOLDER.title
  const pullQuote = data?.pullQuote ?? PLACEHOLDER.pullQuote
  const stats     = data?.stats && data.stats.length > 0 ? data.stats : PLACEHOLDER.stats
  const photoUrl  = data?.photo?.asset
    ? urlFor(data.photo).width(840).height(1050).fit('crop').auto('format').url()
    : '/chairman_on_landingpage.webp'
  const photoAlt  = data?.photo?.alt ?? `${name}, ${title}`

  return (
    <section className="bg-brand-cream py-16 sm:py-20 lg:py-24 border-t border-brand-ink/[0.06]" aria-labelledby="chairman-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="relative aspect-[4/5] max-w-[420px] mx-auto lg:mx-0 rounded-3xl overflow-hidden border border-brand-ink/10 shadow-lg shadow-brand-ink/[0.06]">
              <Image src={photoUrl} alt={photoAlt} fill className="object-cover object-[center_12%]" sizes="(max-width:1024px) 90vw, 420px" />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-brand-ink/80 via-brand-ink/40 to-transparent">
                <div className="text-[9.5px] font-bold uppercase tracking-[0.24em] text-brand-amber mb-1">Executive Chairman</div>
                <div className="text-[17px] font-bold text-white leading-tight">{name}</div>
              </div>
            </div>
            <div className="hidden lg:block absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-brand-yellow/30 rounded-bl-2xl pointer-events-none" aria-hidden="true" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-brand-yellow" aria-hidden="true" />
              <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-brand-ink/45">Office of the Executive Chairman</span>
            </div>
            <div className="relative mb-7">
              <Quote size={32} strokeWidth={1} className="text-brand-amber/20 absolute -top-2 -left-1" aria-hidden="true" />
              <blockquote id="chairman-heading" className="text-[clamp(1.3rem,2.8vw,1.85rem)] font-extrabold text-brand-ink leading-[1.2] tracking-tight pl-4 border-l-[3px] border-brand-yellow">
                &ldquo;{pullQuote}&rdquo;
              </blockquote>
            </div>
            <p className="text-[14px] text-brand-ink/55 leading-[1.8] mb-10 max-w-[480px]">
              Hon. Abdullahi Sesan Olowa leads Ibeju-Lekki Local Government with a clear blueprint, the SHIEELD Agenda, translating policy into visible, measurable change across all communities and wards.
            </p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-5 mb-10">
              {stats.map((s) => (
                <div key={s.label} className="border-t-2 border-brand-ink/10 pt-4">
                  <div className="text-[clamp(1.3rem,2.5vw,1.75rem)] font-extrabold text-brand-amber leading-none mb-1 tracking-tight">{s.value}</div>
                  <div className="text-[12.5px] font-bold text-brand-ink mb-0.5">{s.label}</div>
                  <div className="text-[11px] text-brand-ink/40">{s.detail}</div>
                </div>
              ))}
            </div>
            <Link href="/government/chairman" className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-yellow text-black text-[13px] font-bold tracking-[0.04em] rounded-full hover:bg-brand-ink hover:text-brand-yellow transition-all duration-200">
              Read Full Message <ArrowRight size={15} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
