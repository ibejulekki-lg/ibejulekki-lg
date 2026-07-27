import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/components/Footer'
import {
  ArrowRight, MapPin, ShieldCheck, Camera, Zap, Leaf, FileCheck2, Gamepad2,
  Route, Droplets, Lightbulb, Phone, Home,
} from 'lucide-react'

export const metadata = {
  title: 'Citrus Gardens Estate | Ibeju-Lekki Local Government',
  description:
    'Citrus Gardens is a flagship affordable housing development by Ibeju-Lekki Local Government in partnership with the Lagos State Government and RIZZ Consulting Nigeria Limited, located in the Eleko axis behind the council secretariat.',
}

const IMG = '/images/citrus-garden'

const KEY_FEATURES = [
  { icon: Route,      label: 'Road Infrastructure',    note: 'Fully paved internal roads and a completed access road' },
  { icon: Camera,     label: 'CCTV Surveillance',      note: 'Estate-wide camera coverage' },
  { icon: ShieldCheck,label: '24/7 Security',          note: 'Perimeter fencing and controlled access' },
  { icon: Zap,        label: 'Alternative Power',      note: 'Including solar energy elements' },
  { icon: Droplets,   label: 'Potable Water',          note: 'Reliable supply across the estate' },
  { icon: Lightbulb,  label: 'Street Lighting',        note: 'Lit internal roads and walkways' },
  { icon: Leaf,       label: 'ESG Compliance',         note: 'Environmental, social and governance aligned design' },
  { icon: FileCheck2, label: 'Title: Secured',         note: 'Government-backed documentation' },
  { icon: Gamepad2,   label: 'Recreational Centre',    note: 'Shared amenity and green space' },
]

const PROXIMITY = [
  { mins: '5 min',  place: 'Proposed Lekki International Airport' },
  { mins: '10 min', place: 'Lekki Deep Sea Port' },
  { mins: '8 min',  place: 'Dangote Refinery' },
  { mins: '5 min',  place: 'Shore of the Atlantic Ocean' },
  { mins: '5 min',  place: 'Lakowe Lakes Golf Course and Omu Resort' },
  { mins: 'Nearby', place: 'Makarios Waterfall' },
]

const NEARBY = [
  'Pan-Atlantic University', 'Corona School', 'Greenspring Schools',
  'Atlantic Hall', 'Lagos Business School', 'La Paz Mall',
  'La Campagne Tropicana Resort', 'Lekki-Epe Expressway',
]

const UNIT_TYPES = [
  { name: '2-Bedroom Apartments', note: 'Condominium-style units with generous living areas and contemporary finishes.' },
  { name: '4-Bedroom Maisonettes', note: 'Multi-level terraced duplexes with private courtyards and boys quarters.' },
  { name: '5-Bedroom Terraces',    note: 'The largest homes on the estate, arranged over three floors.' },
]

const TERRACE_GALLERY = [
  { src: 'terrace-facade.jpg',  alt: 'Terrace block facade at Citrus Gardens in the evening' },
  { src: 'terrace-bedroom.jpg', alt: 'Terrace bedroom with fitted wardrobe and wall-mounted television' },
  { src: 'terrace-kitchen.jpg', alt: 'Terrace kitchen with fitted cabinets and granite worktop' },
  { src: 'terrace-dining.jpg',  alt: 'Terrace dining area with slatted timber feature wall' },
  { src: 'terrace-bathroom.jpg',alt: 'Terrace bathroom with walk-in shower enclosure' },
  { src: 'terrace-shower.jpg',  alt: 'Terrace shower room with rainfall shower head' },
]

const TERRACE_PLANS = [
  { src: 'terrace-plan-ground.jpg', label: 'Ground Floor', alt: 'Citrus Gardens terrace ground floor plan' },
  { src: 'terrace-plan-first.jpg',  label: 'First Floor',  alt: 'Citrus Gardens terrace first floor plan' },
  { src: 'terrace-plan-second.jpg', label: 'Second Floor', alt: 'Citrus Gardens terrace second floor plan' },
  { src: 'terrace-3d.jpg',          label: '3D Renditions', alt: 'Cutaway three dimensional views of a Citrus Gardens terrace' },
]

const MAISONETTE_GALLERY = [
  { src: 'maisonette-exterior.jpg', alt: 'Maisonette frontage at Citrus Gardens' },
  { src: 'maisonette-living.jpg',   alt: 'Maisonette living room with marble feature wall' },
  { src: 'maisonette-kitchen.jpg',  alt: 'Maisonette kitchen with fitted units' },
  { src: 'maisonette-dining.jpg',   alt: 'Maisonette dining area beside the staircase' },
]

const MAISONETTE_PLANS = [
  { src: 'maisonette-plan-ground.jpg', label: 'Ground Floor', alt: 'Citrus Gardens maisonette ground floor plan' },
  { src: 'maisonette-plan-first.jpg',  label: 'First Floor',  alt: 'Citrus Gardens maisonette first floor plan' },
  { src: 'maisonette-plan-second.jpg', label: 'Second Floor', alt: 'Citrus Gardens maisonette second floor plan' },
  { src: 'maisonette-plan-third.jpg',  label: 'Third Floor',  alt: 'Citrus Gardens maisonette third floor plan' },
  { src: 'maisonette-3d-lower.jpg',    label: '3D: Lower Levels', alt: 'Cutaway views of the maisonette ground and first floors' },
  { src: 'maisonette-3d-upper.jpg',    label: '3D: Upper Levels', alt: 'Cutaway views of the maisonette second and third floors' },
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <span className="h-px w-8 bg-brand-yellow" aria-hidden="true" />
      <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-black/45">{children}</span>
    </div>
  )
}

function Figure({ src, alt, caption, ratio = 'aspect-[16/10]' }: { src: string; alt: string; caption?: string; ratio?: string }) {
  return (
    <figure>
      <div className={`relative ${ratio} overflow-hidden rounded-2xl border border-black/10 bg-brand-cream`}>
        <Image src={`${IMG}/${src}`} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
      </div>
      {caption ? <figcaption className="mt-2 text-[11.5px] text-black/45 leading-relaxed">{caption}</figcaption> : null}
    </figure>
  )
}

function PlanFigure({ src, alt, label }: { src: string; alt: string; label: string }) {
  return (
    <figure>
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-black/10 bg-white">
        <Image src={`${IMG}/${src}`} alt={alt} fill className="object-contain" sizes="(max-width: 768px) 100vw, 50vw" />
      </div>
      <figcaption className="mt-2 text-[11.5px] font-semibold text-brand-ink">{label}</figcaption>
    </figure>
  )
}

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
              <span>Opportunities</span>
              <span className="text-black/30">/</span>
              <Link href="/opportunities/housing" className="hover:text-brand-ink transition-colors">Housing</Link>
              <span className="text-black/30">/</span>
              <span className="text-brand-ink font-semibold">Citrus Gardens</span>
            </nav>
            <SectionLabel>Opportunities &middot; Housing</SectionLabel>
            <h1 className="text-[clamp(1.9rem,5vw,3rem)] font-extrabold text-brand-ink tracking-tight leading-tight">
              Citrus Gardens Estate
            </h1>
            <p className="mt-4 max-w-2xl text-[15px] sm:text-[16px] text-black/60 leading-[1.85]">
              A flagship affordable and modern housing development initiated by Ibeju-Lekki Local
              Government in partnership with the Lagos State Government and RIZZ Consulting Nigeria Limited.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-yellow px-3.5 py-1.5 text-[11.5px] font-bold text-black">
                Under construction
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-black/15 px-3.5 py-1.5 text-[11.5px] font-semibold text-brand-ink">
                <MapPin size={12} strokeWidth={2.2} className="text-brand-amber" /> Eleko axis, behind the council secretariat
              </span>
            </div>
          </div>
        </section>

        {/* Hero image */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 -mt-8 sm:-mt-10 relative z-10">
          <div className="relative aspect-[16/8] sm:aspect-[16/7] overflow-hidden rounded-2xl border border-black/10 shadow-lg bg-brand-cream">
            <Image
              src={`${IMG}/hero-terraces.jpg`}
              alt="Terrace homes at Citrus Gardens Estate, Ibeju-Lekki"
              fill className="object-cover" sizes="(max-width: 1024px) 100vw, 1024px" priority
            />
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 space-y-16 sm:space-y-20">

          {/* Overview */}
          <section>
            <SectionLabel>Overview</SectionLabel>
            <h2 className="text-[clamp(1.3rem,3.4vw,1.8rem)] font-extrabold text-brand-ink tracking-tight mb-5">
              A community designed for modern living
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
              <div className="space-y-4 text-[14.5px] sm:text-[15px] text-black/70 leading-[1.85]">
                <p>
                  Construction was flagged off in 2025 by the Executive Governor of Lagos State,
                  His Excellency Babajide Sanwo-Olu, in recognition of the infrastructural
                  achievements of the Council Chairman, Hon. Abdullahi Sesan Olowa.
                </p>
                <p>
                  The project addresses housing need, creates jobs and drives sustainable community
                  growth in one of Lagos State&apos;s fastest-growing corridors. Construction is
                  ongoing, with the 450-metre access road fully completed and commissioned by the Governor.
                </p>
                <p>
                  The estate is designed to offer sustainable living, combining green space and shared
                  amenities to create a thriving neighbourhood, with quality and finishes maintained
                  across every unit type.
                </p>
              </div>
              <div className="space-y-4">
                <Figure
                  src="flagoff-sanwoolu.jpg"
                  alt="Governor Babajide Sanwo-Olu performing the ground-breaking at the Citrus Gardens housing scheme"
                  caption="Governor Babajide Sanwo-Olu flags off the housing scheme in Ibeju-Lekki."
                  ratio="aspect-[4/3]"
                />
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Figure src="flagoff-1.jpg" alt="Dignitaries at the Citrus Gardens project unveiling" ratio="aspect-[4/3]" />
              <Figure src="flagoff-ribbon.jpg" alt="Ribbon cutting at the commissioning ceremony in Ibeju-Lekki" ratio="aspect-[4/3]" />
              <Figure src="flagoff-4.jpg" alt="Governor and council officials walking the commissioned road project" ratio="aspect-[4/3]" />
            </div>
          </section>

          {/* Location */}
          <section>
            <SectionLabel>Site Location</SectionLabel>
            <h2 className="text-[clamp(1.3rem,3.4vw,1.8rem)] font-extrabold text-brand-ink tracking-tight mb-5">
              Igando Oloja, along the Lekki-Epe Expressway
            </h2>
            <p className="max-w-3xl text-[14.5px] sm:text-[15px] text-black/70 leading-[1.85] mb-7">
              The estate sits in the Eleko axis of Ibeju-Lekki, behind the council secretariat, adjacent
              to the Local Government offices along the Lekki-Epe Expressway. The area is a rapidly
              developing suburban hub with road, water and air links, a proposed rail network, and a
              growing number of schools, commercial establishments and industrial facilities.
            </p>

            <Figure
              src="site-aerial.jpg"
              alt="Aerial view of the Citrus Gardens site beside the Ibeju-Lekki council secretariat"
              caption="The site under development, adjacent to the council secretariat."
              ratio="aspect-[16/6]"
            />

            <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {PROXIMITY.map((p) => (
                <div key={p.place} className="flex items-start gap-3 rounded-xl border border-black/10 bg-brand-cream px-4 py-3.5">
                  <span className="inline-flex flex-shrink-0 items-center justify-center rounded-full bg-brand-yellow px-2.5 py-1 text-[10.5px] font-bold text-black">
                    {p.mins}
                  </span>
                  <span className="text-[12.5px] text-brand-ink leading-snug pt-0.5">{p.place}</span>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <div className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-black/40 mb-3">Also close by</div>
              <div className="flex flex-wrap gap-2">
                {NEARBY.map((n) => (
                  <span key={n} className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-[12px] font-medium text-brand-ink">
                    {n}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Key features */}
          <section>
            <SectionLabel>Key Features</SectionLabel>
            <h2 className="text-[clamp(1.3rem,3.4vw,1.8rem)] font-extrabold text-brand-ink tracking-tight mb-6">
              Built for secure, sustainable living
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {KEY_FEATURES.map((f) => {
                const Icon = f.icon
                return (
                  <div key={f.label} className="rounded-2xl border border-black/10 bg-white p-5 hover:border-brand-yellow/50 transition-colors">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-yellow">
                      <Icon size={17} strokeWidth={2.2} className="text-black" />
                    </span>
                    <div className="mt-3.5 text-[13.5px] font-bold text-brand-ink">{f.label}</div>
                    <p className="mt-1.5 text-[12px] text-black/55 leading-[1.65]">{f.note}</p>
                  </div>
                )
              })}
            </div>
            <p className="mt-6 max-w-3xl text-[13.5px] text-black/60 leading-[1.8]">
              Additional benefits include elevator access in applicable blocks, a good internal road
              network, and proximity to emerging infrastructure linking the Lekki corridor, the proposed
              airport and nearby business hubs.
            </p>
          </section>

          {/* Units */}
          <section>
            <SectionLabel>Housing Units</SectionLabel>
            <h2 className="text-[clamp(1.3rem,3.4vw,1.8rem)] font-extrabold text-brand-ink tracking-tight mb-5">
              Approximately 63 family units
            </h2>
            <p className="max-w-3xl text-[14.5px] sm:text-[15px] text-black/70 leading-[1.85] mb-7">
              The development features a mix of unit types catering to different households, each with
              generous living areas, well-planned bedrooms, functional kitchens and contemporary finishes.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {UNIT_TYPES.map((u) => (
                <div key={u.name} className="rounded-2xl border border-black/10 bg-brand-cream p-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-black/10">
                    <Home size={17} strokeWidth={2.2} className="text-brand-amber" />
                  </span>
                  <div className="mt-3.5 text-[13.5px] font-bold text-brand-ink">{u.name}</div>
                  <p className="mt-1.5 text-[12px] text-black/55 leading-[1.65]">{u.note}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 rounded-2xl border border-brand-yellow/40 bg-brand-yellow/[0.07] p-5 sm:p-6">
              <div className="text-[13.5px] font-bold text-brand-ink mb-2">Indicative pricing</div>
              <p className="text-[13.5px] text-black/70 leading-[1.8]">
                Units are marketed from around &#8358;80 million for 2-bedroom apartments, rising to
                &#8358;150 million to &#8358;170 million for the larger terraces and maisonettes.
                Flexible payment plans are available, starting from a 30 percent initial deposit on some offerings.
              </p>
              <p className="mt-3 text-[11.5px] text-black/45 leading-relaxed">
                Prices are indicative and may change as construction progresses. Confirm current pricing
                and payment terms with the council before committing to any purchase.
              </p>
            </div>
          </section>

          {/* Terraces */}
          <section>
            <SectionLabel>The Terraces</SectionLabel>
            <h2 className="text-[clamp(1.3rem,3.4vw,1.8rem)] font-extrabold text-brand-ink tracking-tight mb-5">
              Elevated living at Citrus Gardens
            </h2>
            <p className="max-w-3xl text-[14.5px] sm:text-[15px] text-black/70 leading-[1.85] mb-7">
              The terrace apartments blend modern design with comfort, offering spacious living areas,
              sleek finishes and a serene environment suited to families and professionals. Homes are
              finished with P.O.P ceilings, fitted wardrobes, water heaters, and modern kitchen facilities
              including a microwave, granite worktops and a heat extractor.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {TERRACE_GALLERY.map((g) => (
                <Figure key={g.src} src={g.src} alt={g.alt} ratio="aspect-[4/3]" />
              ))}
            </div>

            <h3 className="mt-10 mb-4 text-[16px] font-bold text-brand-ink tracking-tight">Terrace floor plans</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {TERRACE_PLANS.map((p) => (
                <PlanFigure key={p.src} src={p.src} alt={p.alt} label={p.label} />
              ))}
            </div>
          </section>

          {/* Maisonettes */}
          <section>
            <SectionLabel>The Maisonettes</SectionLabel>
            <h2 className="text-[clamp(1.3rem,3.4vw,1.8rem)] font-extrabold text-brand-ink tracking-tight mb-5">
              Multi-level living, redefined
            </h2>
            <p className="max-w-3xl text-[14.5px] sm:text-[15px] text-black/70 leading-[1.85] mb-7">
              The maisonettes offer a blend of space, sophistication and modern comfort, with multi-level
              living, private courtyards and premium finishes throughout. Each home is arranged across
              four levels with generous master suites and dedicated service accommodation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {MAISONETTE_GALLERY.map((g) => (
                <Figure key={g.src} src={g.src} alt={g.alt} ratio="aspect-[4/3]" />
              ))}
            </div>

            <h3 className="mt-10 mb-4 text-[16px] font-bold text-brand-ink tracking-tight">Maisonette floor plans</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {MAISONETTE_PLANS.map((p) => (
                <PlanFigure key={p.src} src={p.src} alt={p.alt} label={p.label} />
              ))}
            </div>
          </section>

          {/* The estate */}
          <section>
            <SectionLabel>The Estate</SectionLabel>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Figure src="aerial-night.jpg" alt="Aerial view of Citrus Gardens Estate illuminated at dusk" ratio="aspect-[4/3]" />
              <Figure src="terraces-dusk.jpg" alt="Terrace frontage at Citrus Gardens with parked vehicles at dusk" ratio="aspect-[4/3]" />
              <Figure src="maisonette-exterior.jpg" alt="Maisonette block frontage at Citrus Gardens" ratio="aspect-[4/3]" />
              <Figure src="estate-daylight.jpg" alt="Citrus Gardens Estate under a clear sky" ratio="aspect-[4/3]" />
            </div>
          </section>

          {/* Enquiries */}
          <section className="rounded-2xl border border-black/10 bg-brand-cream p-6 sm:p-9">
            <SectionLabel>Enquiries</SectionLabel>
            <h2 className="text-[clamp(1.2rem,3vw,1.6rem)] font-extrabold text-brand-ink tracking-tight mb-3">
              Site inspections and allocation
            </h2>
            <p className="max-w-2xl text-[14px] text-black/65 leading-[1.85] mb-6">
              For the latest updates, enquiries and site inspections, contact the Chief Technical Adviser
              to the Executive Chairman on Housing and Tourism.
            </p>
            <div className="rounded-xl border border-black/10 bg-white px-5 py-4 mb-6 inline-block">
              <div className="text-[13.5px] font-bold text-brand-ink">Mr. Oriyomi Azeez</div>
              <div className="text-[12px] text-black/50 mt-0.5">Chief Technical Adviser, Housing &amp; Tourism Development</div>
              <a href="tel:+2348071726296" className="mt-2.5 inline-flex items-center gap-2 text-[13.5px] font-bold text-brand-amber hover:text-brand-ink transition-colors">
                <Phone size={14} strokeWidth={2.4} /> 0807 172 6296
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-brand-yellow px-5 py-2.5 text-[13px] font-bold text-black hover:bg-brand-hover transition-colors">
                Contact the council <ArrowRight size={14} strokeWidth={2.5} />
              </Link>
              <Link href="/opportunities/housing" className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-brand-amber hover:text-brand-ink transition-colors">
                All housing schemes <ArrowRight size={12} strokeWidth={2.5} />
              </Link>
            </div>
          </section>

          <p className="text-[11.5px] text-black/40 leading-relaxed">
            Details may evolve as construction progresses. Ibeju-Lekki Local Government housing
            initiative, delivered through the Lagos State Government in partnership with RIZZ
            Consulting Nigeria Limited.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
