import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/components/Footer'
import {
  Phone, MapPin, Clock, Heart, FileCheck2, Users, ScrollText,
  BookOpenCheck, BadgeCheck, FileStack, ArrowRight,
} from 'lucide-react'

export const metadata = {
  title: 'Marriage Registry | Ibeju-Lekki Local Government',
  description:
    'The Lagos State Marriage Registry at Ibeju-Lekki Local Government: contracting of marriage, church marriage registration, counselling for intending couples, certificates and certified true copies.',
}

const IMG = '/images/marriage-registry'

/* Taken from the registry's own service board. */
const SERVICES = [
  { icon: Heart,        title: 'Contracting of Marriage',
    note: 'Statutory marriage conducted and registered at the council registry.' },
  { icon: BookOpenCheck,title: 'Church Marriage Registration',
    note: 'Registration of marriages solemnised in a licensed place of worship.' },
  { icon: Users,        title: 'Counselling of Intending Couples',
    note: 'Guidance for couples ahead of the ceremony.' },
  { icon: FileCheck2,   title: 'Registration of New and Long Marriages',
    note: 'Both recent marriages and those contracted years ago.' },
  { icon: ScrollText,   title: 'Documentation of Marriage',
    note: 'Preparation and safekeeping of the official marriage record.' },
  { icon: BadgeCheck,   title: 'Bachelorhood & Spinsterhood Certificate',
    note: 'Sworn confirmation of single status, often required abroad.' },
  { icon: FileStack,    title: 'Issuance of Certified True Copy',
    note: 'Certified replacement copies of a marriage certificate.' },
]

const GALLERY = [
  { src: 'ceremony-1.jpg', alt: 'A couple receiving their marriage certificate at the Ibeju-Lekki registry' },
  { src: 'ceremony-2.jpg', alt: 'Newlyweds with the registrar at the Lagos State Marriage Registry, Ibeju-Lekki' },
  { src: 'ceremony-3.jpg', alt: 'A bride and groom holding their certificate with the registrar' },
  { src: 'ceremony-4.jpg', alt: 'A couple presented with their marriage certificate at the council registry' },
]

const PHONES = ['08051871871', '08089493737']

export default function Page() {
  return (
    <>
      <main className="min-h-screen bg-white">

        {/* Header band */}
        <section className="relative overflow-hidden border-b border-black/10 bg-brand-cream">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 15% 20%, #FFBA26 0, transparent 45%), radial-gradient(circle at 85% 75%, #C9A227 0, transparent 40%)',
            }}
            aria-hidden="true"
          />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
            <nav className="flex items-center flex-wrap gap-1.5 text-[11px] sm:text-[12px] text-black/45 mb-5" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-brand-ink transition-colors">Home</Link>
              <span className="text-black/30">/</span>
              <span>Services</span>
              <span className="text-black/30">/</span>
              <span className="text-brand-ink font-semibold">Marriage Registry</span>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-brand-yellow" aria-hidden="true" />
              <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-black/45">
                Federal Republic of Nigeria &middot; Lagos State
              </span>
            </div>

            <h1 className="text-[clamp(1.9rem,5.2vw,3rem)] font-extrabold text-brand-ink tracking-tight leading-[1.1]">
              Marriage Registry
            </h1>
            <p className="mt-3 text-[15px] sm:text-[17px] italic text-brand-amber">
              Where two families become one.
            </p>
            <p className="mt-5 max-w-2xl text-[14.5px] sm:text-[15px] text-black/65 leading-[1.85]">
              The Lagos State Marriage Registry at Ibeju-Lekki Local Government conducts and
              registers statutory marriages, registers church marriages, counsels intending
              couples and issues the certificates that follow. Call ahead to confirm
              requirements, fees and available dates.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              {PHONES.map((p) => (
                <a
                  key={p}
                  href={`tel:+234${p.slice(1)}`}
                  className="inline-flex items-center gap-2 rounded-full bg-brand-ink px-5 py-2.5 text-[13.5px] font-bold text-white transition-colors hover:bg-brand-amber"
                >
                  <Phone size={14} strokeWidth={2.5} /> {p}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 pt-12 sm:pt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {GALLERY.map((g, i) => (
              <figure
                key={g.src}
                className={`relative overflow-hidden rounded-2xl border border-black/10 bg-brand-cream ${
                  i === 0 ? 'sm:col-span-2 aspect-[16/9]' : 'aspect-[4/3]'
                }`}
              >
                <Image
                  src={`${IMG}/${g.src}`}
                  alt={g.alt}
                  fill
                  className="object-cover"
                  sizes={i === 0 ? '(max-width: 1024px) 100vw, 1024px' : '(max-width: 640px) 100vw, 50vw'}
                  priority={i === 0}
                />
              </figure>
            ))}
          </div>
          <p className="mt-3 text-[11.5px] text-black/40 leading-relaxed">
            Couples receiving their certificates at the Ibeju-Lekki registry.
          </p>
        </section>

        {/* Services */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 pt-14 sm:pt-20">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-brand-yellow" aria-hidden="true" />
            <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-black/45">Our Services</span>
          </div>
          <h2 className="text-[clamp(1.3rem,3.4vw,1.9rem)] font-extrabold text-brand-ink tracking-tight mb-7">
            What the registry does
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((s) => {
              const Icon = s.icon
              return (
                <div
                  key={s.title}
                  className="rounded-2xl border border-black/10 bg-white p-5 transition-colors hover:border-brand-yellow/50"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-yellow">
                    <Icon size={17} strokeWidth={2.2} className="text-black" />
                  </span>
                  <div className="mt-3.5 text-[13.5px] font-bold text-brand-ink leading-snug">{s.title}</div>
                  <p className="mt-1.5 text-[12px] text-black/55 leading-[1.7]">{s.note}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Contact */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-14 sm:py-20">
          <div className="overflow-hidden rounded-2xl border border-brand-yellow/40 bg-brand-cream">
            <div className="h-1.5 w-full bg-brand-yellow" aria-hidden="true" />
            <div className="p-6 sm:p-9">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-px w-8 bg-brand-yellow" aria-hidden="true" />
                <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-black/45">Plan Your Visit</span>
              </div>
              <h2 className="text-[clamp(1.2rem,3vw,1.7rem)] font-extrabold text-brand-ink tracking-tight mb-3">
                Speak to the registry
              </h2>
              <p className="max-w-2xl text-[14px] text-black/65 leading-[1.85] mb-7">
                Requirements, fees and available dates are confirmed over the phone. Call
                either number below before travelling, so you arrive with everything you need.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2 rounded-xl border border-black/10 bg-white p-5">
                  <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-black/40 mb-3">Call the registry</div>
                  <div className="flex flex-wrap gap-2.5">
                    {PHONES.map((p) => (
                      <a
                        key={p}
                        href={`tel:+234${p.slice(1)}`}
                        className="inline-flex items-center gap-2 rounded-full border border-black/15 px-4 py-2 text-[14px] font-bold text-brand-ink transition-colors hover:border-brand-yellow hover:bg-brand-yellow/10"
                      >
                        <Phone size={14} strokeWidth={2.5} className="text-brand-amber" /> {p}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-black/10 bg-white p-5">
                  <div className="flex items-start gap-2.5">
                    <Clock size={15} strokeWidth={2} className="mt-0.5 flex-shrink-0 text-brand-amber" />
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-black/40">Opening hours</div>
                      <div className="mt-0.5 text-[13px] text-brand-ink leading-snug">Monday to Friday<br />8:00am to 4:00pm</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-black/10 bg-white p-5">
                <div className="flex items-start gap-2.5">
                  <MapPin size={15} strokeWidth={2} className="mt-0.5 flex-shrink-0 text-brand-amber" />
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-black/40">Where to find us</div>
                    <div className="mt-0.5 text-[13px] text-brand-ink leading-snug">
                      Marriage Registry, Ibeju-Lekki Local Government Secretariat,
                      Igando Oloja, along the Lekki-Epe Expressway, Lagos State.
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-yellow px-5 py-2.5 text-[13px] font-bold text-black transition-colors hover:bg-brand-hover"
                >
                  Contact the council <ArrowRight size={14} strokeWidth={2.5} />
                </Link>
                <Link
                  href="/resources/birth-certification"
                  className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-brand-amber transition-colors hover:text-brand-ink"
                >
                  Birth Certification <ArrowRight size={12} strokeWidth={2.5} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

