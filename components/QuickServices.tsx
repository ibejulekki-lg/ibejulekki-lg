import Link from 'next/link'
import { CreditCard, Briefcase, Trash2, AlertCircle, FileText, Phone, ExternalLink } from 'lucide-react'

const ICON_MAP: Record<string, React.ElementType> = { CreditCard, Briefcase, Trash2, AlertCircle, FileText, Phone }

const PLACEHOLDER_SERVICES = [
  { _id:'1', label:'Pay Levies',       description:'Pay your council levies online',  icon:'CreditCard',  href:'/resources/revenue',  external:false },
  { _id:'2', label:'Career & Jobs',    description:'View current job vacancies',       icon:'Briefcase',   href:'/resources/careers',  external:false },
  { _id:'3', label:'Waste Collection', description:'Schedule a pickup for your area', icon:'Trash2',      href:'/resources/waste',    external:false },
  { _id:'4', label:'Report an Issue',  description:'Submit a complaint or concern',   icon:'AlertCircle', href:'/report',             external:false },
  { _id:'5', label:'Download Forms',   description:'Access official LGA documents',   icon:'FileText',    href:'/resources/forms',    external:false },
  { _id:'6', label:'Contact Us',       description:'Reach the council directly',      icon:'Phone',       href:'/contact',            external:false },
]

interface Service { _id:string; label:string; description:string; icon:string; href:string; external:boolean }
interface Props { services?: Service[] }

export default function QuickServices({ services }: Props) {
  // Fall back to placeholders when Sanity is disconnected OR returns an
  // empty list (no active quickService documents published yet).
  const data = services && services.length > 0 ? services : PLACEHOLDER_SERVICES

  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-brand-yellow" aria-hidden="true" />
            <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-brand-ink/45">Quick Access</span>
          </div>
          <h2 id="services-heading" className="text-[clamp(1.6rem,3.5vw,2.2rem)] font-extrabold text-brand-ink tracking-tight leading-tight">
            Government Services
          </h2>
          <p className="mt-2 text-[14px] text-brand-ink/50 max-w-md leading-relaxed">
            Access the most-used council services directly from the homepage.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {data.map((svc) => {
            const Icon = ICON_MAP[svc.icon] ?? FileText
            const Wrapper = svc.external ? 'a' : Link
            const props = svc.external ? { href:svc.href, target:'_blank', rel:'noopener noreferrer' } : { href:svc.href }
            return (
              <Wrapper key={svc._id} {...(props as any)}
                className="group relative flex flex-col items-center text-center border border-brand-ink/10 rounded-2xl p-5 sm:p-6 hover:border-brand-yellow/50 hover:shadow-md hover:-translate-y-1 active:scale-95 transition-all duration-200 cursor-pointer bg-white"
              >
                <div className="w-11 h-11 rounded-xl mb-3 bg-brand-yellow/[0.12] flex items-center justify-center group-hover:bg-brand-yellow transition-colors duration-200">
                  <Icon size={20} strokeWidth={1.8} className="text-brand-ink group-hover:text-black transition-colors duration-200" />
                </div>
                <span className="text-[12.5px] font-bold text-brand-ink leading-tight mb-1 group-hover:text-brand-amber transition-colors">{svc.label}</span>
                <span className="text-[10.5px] text-brand-ink/45 leading-snug">{svc.description}</span>
                {svc.external && <ExternalLink size={10} className="absolute top-3 right-3 text-brand-ink/20" aria-hidden="true" />}
              </Wrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}
