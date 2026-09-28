import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/components/Footer'
import {
  Phone, Trash2, Clock, MapPin, PhoneCall, CalendarClock,
  PackageCheck, Truck, Smartphone, ArrowRight,
} from 'lucide-react'

export const metadata = {
  title: 'Waste Collection | Ibeju-Lekki Local Government',
  description:
    'Keke Jaja garbage collection tricycle service in Ibeju-Lekki Local Government Area. Call 0915 629 2000 to have your waste collected from your doorstep in under an hour.',
}

const HOTLINE = '0915 629 2000'
const HOTLINE_TEL = '+2349156292000'

/* The four steps as printed on the council's own Keke Jaja notice. */
const STEPS = [
  { icon: PhoneCall,     title: 'Place a call',
    body: `Call ${HOTLINE}. The line is answered by the collection team.` },
  { icon: CalendarClock, title: 'Give the details',
    body: 'Indicate the date, time and address for your waste to be picked up.' },
  { icon: PackageCheck,  title: 'Bag your waste',
    body: 'Prepare your waste in the designated bin bags before the tricycle arrives.' },
  { icon: Truck,         title: 'Doorstep pickup',
    body: 'The tricycle appears at your doorstep in less than one hour.' },
]

export default function Page() {
  return (
    <>
      <main className="min-h-screen bg-white">

        {/* Header band */}
        <section className="border-b border-black/10 bg-brand-cream">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
            <nav className="flex items-center flex-wrap gap-1.5 text-[11px] sm:text-[12px] text-black/45 mb-5" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-brand-ink transition-colors">Home</Link>
              <span className="text-black/30">/</span>
              <span>Services</span>
              <span className="text-black/30">/</span>
              <span className="text-brand-ink font-semibold">Waste Collection</span>
            </nav>

            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-brand-yellow" aria-hidden="true" />
              <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-black/45">
                Services &middot; Environment
              </span>
            </div>

            <h1 className="text-[clamp(1.9rem,5.2vw,3rem)] font-extrabold text-brand-ink tracking-tight leading-[1.1]">
              Waste Collection
            </h1>
            <p className="mt-4 max-w-2xl text-[14.5px] sm:text-[15px] text-black/65 leading-[1.85]">
              <span className="font-bold text-brand-ink">Keke Jaja</span> is the council&apos;s
              garbage collection tricycle service, run in partnership with LAWMA. Call the
              hotline, say when and where, and a tricycle comes to your door in under an hour.
            </p>

            <a
              href={`tel:${HOTLINE_TEL}`}
              className="mt-7 inline-flex items-center gap-3 rounded-full bg-brand-ink px-6 py-3.5 text-white transition-colors hover:bg-brand-amber"
            >
              <Phone size={18} strokeWidth={2.5} className="text-brand-yellow" />
              <span className="text-left leading-tight">
                <span className="block text-[9.5px] font-bold uppercase tracking-[0.18em] text-white/50">Call to dispose your waste</span>
                <span className="block text-[18px] sm:text-[21px] font-extrabold tracking-tight">{HOTLINE}</span>
              </span>
            </a>
          </div>
        </section>

        {/* How it works */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 pt-12 sm:pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,340px)] gap-8 lg:gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="h-px w-8 bg-brand-yellow" aria-hidden="true" />
                <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-black/45">How It Works</span>
              </div>
              <h2 className="text-[clamp(1.3rem,3.4vw,1.9rem)] font-extrabold text-brand-ink tracking-tight mb-6">
                Four simple steps
              </h2>

              <ol className="space-y-4">
                {STEPS.map((s, i) => {
                  const Icon = s.icon
                  return (
                    <li key={s.title} className="flex items-start gap-4 rounded-2xl border border-black/10 bg-white p-5">
                      <span className="relative flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-brand-yellow">
                        <Icon size={18} strokeWidth={2.2} className="text-black" />
                        <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-brand-ink text-[10px] font-bold text-white">
                          {i + 1}
                        </span>
                      </span>
                      <div>
                        <div className="text-[13.5px] font-bold text-brand-ink leading-snug">{s.title}</div>
                        <p className="mt-1 text-[12.5px] text-black/60 leading-[1.7]">{s.body}</p>
                      </div>
                    </li>
                  )
                })}
              </ol>
            </div>

            <figure className="relative aspect-square w-full overflow-hidden rounded-2xl border border-black/10 bg-brand-cream">
              <Image
                src="/images/waste/keke-jaja.jpg"
                alt="Keke Jaja garbage collection tricycles, with the hotline 0915 629 2000"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 340px"
              />
            </figure>
          </div>
        </section>

        {/* App coming soon */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 pt-12 sm:pt-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-2xl border border-black/10 bg-brand-cream p-6 sm:p-8">
            <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white border border-black/10">
              <Smartphone size={20} strokeWidth={2} className="text-brand-amber" />
            </span>
            <div>
              <div className="text-[14px] font-bold text-brand-ink">A mobile app is on the way</div>
              <p className="mt-1 text-[12.5px] text-black/60 leading-[1.7]">
                The Keke Jaja app will be available on Google Play and the App Store, with a
                quick-access dashboard for booking pickups. Until then, the hotline is the
                fastest route.
              </p>
            </div>
          </div>
        </section>

        {/* Details */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-black/10 bg-white p-5">
              <div className="flex items-start gap-2.5">
                <Phone size={15} strokeWidth={2} className="mt-0.5 flex-shrink-0 text-brand-amber" />
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-black/40">Collection hotline</div>
                  <a href={`tel:${HOTLINE_TEL}`} className="mt-0.5 block text-[14px] font-bold text-brand-ink hover:text-brand-amber transition-colors">
                    {HOTLINE}
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white p-5">
              <div className="flex items-start gap-2.5">
                <Clock size={15} strokeWidth={2} className="mt-0.5 flex-shrink-0 text-brand-amber" />
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-black/40">Response time</div>
                  <div className="mt-0.5 text-[13px] text-brand-ink leading-snug">Under one hour from your call</div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white p-5">
              <div className="flex items-start gap-2.5">
                <Trash2 size={15} strokeWidth={2} className="mt-0.5 flex-shrink-0 text-brand-amber" />
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-black/40">In partnership with</div>
                  <div className="mt-0.5 text-[13px] text-brand-ink leading-snug">LAWMA, Lagos State Waste Management Authority</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-black/10 bg-brand-cream p-6 sm:p-8">
            <h2 className="text-[clamp(1.1rem,2.6vw,1.4rem)] font-extrabold text-brand-ink tracking-tight mb-3">
              Keeping Ibeju-Lekki clean
            </h2>
            <p className="max-w-2xl text-[13.5px] text-black/65 leading-[1.85]">
              Waste management sits under the Environment pillar of the SHIEELD Agenda. Alongside
              doorstep collection, the council runs sanitation exercises, street sweeping and
              drainage clearing across the local government area.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Link
                href="/programmes/shieeld/environment"
                className="inline-flex items-center gap-2 rounded-full bg-brand-yellow px-5 py-2.5 text-[13px] font-bold text-black transition-colors hover:bg-brand-hover"
              >
                Environment under SHIEELD <ArrowRight size={14} strokeWidth={2.5} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-brand-amber transition-colors hover:text-brand-ink"
              >
                Contact the council <ArrowRight size={12} strokeWidth={2.5} />
              </Link>
            </div>
          </div>

          <div className="mt-6 flex items-start gap-2.5 text-[11.5px] text-black/45 leading-relaxed">
            <MapPin size={13} strokeWidth={2} className="mt-0.5 flex-shrink-0" />
            <span>
              Service covers Ibeju-Lekki Local Government Area. For bulk or commercial waste,
              call the hotline to discuss arrangements.
            </span>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

