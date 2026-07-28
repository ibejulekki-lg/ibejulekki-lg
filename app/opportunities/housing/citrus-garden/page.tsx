import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/components/Footer'
import {
  MapPin, ShieldCheck, Camera, Zap, Leaf, FileCheck2, Gamepad2,
  Route, Phone, Download, Plane, Ship, Waves, Factory, Trees, Building2,
} from 'lucide-react'

export const metadata = {
  title: 'Citrus Gardens Estate | Ibeju-Lekki Local Government',
  description:
    'Citrus Gardens is an Ibeju-Lekki Local Government housing initiative, sponsored by the Lagos State Government in partnership with RIZZ Consulting Nigeria Limited.',
}

const IMG = '/images/citrus-garden'

/* Seven key features, in the order they appear on page 5 of the brochure. */
const KEY_FEATURES = [
  { icon: Route,       label: 'Road Infrastructure' },
  { icon: Camera,      label: 'CCTV Surveillance' },
  { icon: ShieldCheck, label: '24/7 Security' },
  { icon: Zap,         label: 'Alternative Power Supply' },
  { icon: Leaf,        label: 'ESG Compliance' },
  { icon: FileCheck2,  label: 'Title: Secured' },
  { icon: Gamepad2,    label: 'Recreational Centre' },
]

/* Close Proximity To..., page 4 of the brochure, wording kept as written. */
const PROXIMITY = [
  {
    icon: Plane,
    text: 'It is 5 minutes from the proposed Lekki International Airport, which directly relates to the needs of teeming population of locals and expatriates.',
  },
  {
    icon: Ship,
    text: "10 minutes from Lekki Deep Sea Port, a multipurpose facility to support Nigeria and West Africa's expanding commercial activities.",
  },
  {
    icon: Waves,
    text: '5-minute drive from the Shore of the Atlantic Ocean.',
  },
  {
    icon: Trees,
    text: 'It is in the same neighborhood as Makarios Waterfall.',
  },
  {
    icon: Factory,
    text: "8 minutes from Dangote Refinery which is the world's biggest single-train facility set to process 650,000 barrels of crude oil daily, which is bounded by Lagos Calabar Coastal Highway and Lagos-Epe-Shagamu circular Road.",
  },
  {
    icon: Trees,
    text: '5 minutes drive from Lakowe Lakes & Golf Course & Omu Resort.',
  },
]

const APART = [
  {
    title: 'Prime Location',
    body: 'Citrus Gardens is located in a desirable area (Ibeju-Lekki Corridor) with excellent transportation links, schools, and employment opportunities as earlier stated.',
  },
  {
    title: 'Affordability',
    body: 'RIZZ Consulting has designed the Citrus Gardens homes to be affordable for middle income families while maintaining a high level of quality and amenities across the 8 Terraces and 55 Maisonettes.',
  },
  {
    title: 'Sustainability',
    body: "By incorporating green areas and the serene nature of the environment, Citrus Gardens meets the growing demand for eco-friendly living, which is a key differentiator in today's real estate market.",
  },
  {
    title: 'Strong Partnership',
    body: 'Our experienced project development team has a strong track record of delivering projects on time and within budget, minimizing investor risk, and providing worthwhile experiences for owners and renters.',
  },
]

const AMENITY_GROUPS = [
  {
    title: 'Infrastructure',
    items: [
      'Fully paved internal roads and completed access roads.',
      'Reliable potable water supply.',
      'Alternative power supply (including solar energy elements).',
      'Street lighting.',
    ],
  },
  {
    title: 'Security and Surveillance',
    items: ['24/7 security.', 'CCTV surveillance.', 'Perimeter fencing and controlled access.'],
  },
  {
    title: 'Sustainability and Compliance',
    items: [
      'ESG (Environmental, Social, and Governance) compliant design, promoting sustainable community development.',
    ],
  },
  {
    title: 'Additional Benefits',
    items: [
      'Elevator access in applicable blocks, good road network, and proximity to emerging infrastructure like roads linking to the Lekki corridor, airport, and business hubs.',
    ],
  },
]

const TERRACE_GALLERY = [
  { src: 'terrace-bedroom.jpg',  alt: 'Terrace bedroom with fitted wardrobe and wall-mounted television' },
  { src: 'terrace-bathroom.jpg', alt: 'Terrace bathroom with walk-in shower enclosure' },
  { src: 'terrace-shower.jpg',   alt: 'Terrace shower room with rainfall shower head' },
  { src: 'terrace-dining.jpg',   alt: 'Terrace dining area with slatted timber feature wall' },
  { src: 'terrace-kitchen.jpg',  alt: 'Terrace kitchen with fitted cabinets and granite worktop' },
  { src: 'terrace-stairs.jpg',   alt: 'Curved staircase inside a Citrus Gardens terrace' },
]

const TERRACE_PLANS = [
  { src: 'terrace-3d.jpg',          label: '3D Renditions', alt: 'Cutaway three dimensional views of a Citrus Gardens terrace' },
  { src: 'terrace-plan-ground.jpg', label: 'Ground Floor Level', alt: 'Citrus Gardens terrace ground floor plan' },
  { src: 'terrace-plan-first.jpg',  label: 'First Floor Level',  alt: 'Citrus Gardens terrace first floor plan' },
  { src: 'terrace-plan-second.jpg', label: 'Second Floor Level', alt: 'Citrus Gardens terrace second floor plan' },
]

const MAISONETTE_GALLERY = [
  { src: 'maisonette-living.jpg',  alt: 'Maisonette living room with marble feature wall' },
  { src: 'maisonette-dining.jpg',  alt: 'Maisonette dining area beside the staircase' },
  { src: 'maisonette-kitchen.jpg', alt: 'Maisonette kitchen with fitted units' },
]

const MAISONETTE_PLANS = [
  { src: 'maisonette-3d-lower.jpg',    label: '3D Renditions: Ground & First Floor', alt: 'Cutaway views of the maisonette ground and first floors' },
  { src: 'maisonette-3d-upper.jpg',    label: '3D Renditions: Second & Third Floor', alt: 'Cutaway views of the maisonette second and third floors' },
  { src: 'maisonette-plan-ground.jpg', label: 'Ground Floor Level', alt: 'Citrus Gardens maisonette ground floor plan' },
  { src: 'maisonette-plan-first.jpg',  label: 'First Floor Level',  alt: 'Citrus Gardens maisonette first floor plan' },
  { src: 'maisonette-plan-second.jpg', label: 'Second Floor Level', alt: 'Citrus Gardens maisonette second floor plan' },
  { src: 'maisonette-plan-third.jpg',  label: 'Third Floor Level',  alt: 'Citrus Gardens maisonette third floor plan' },
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

function BrochureButton({ variant = 'dark' }: { variant?: 'dark' | 'outline' }) {
  const cls =
    variant === 'dark'
      ? 'bg-brand-ink text-white hover:bg-brand-amber'
      : 'border border-black/15 bg-white text-brand-ink hover:border-brand-yellow'
  return (
    <a
      href="/citrus-gardens-brochure.pdf"
      download
      className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-bold transition-colors ${cls}`}
    >
      <Download size={14} strokeWidth={2.5} /> Download Brochure
      <span className={variant === 'dark' ? 'font-medium text-white/60' : 'font-medium text-black/40'}>PDF, 5.3 MB</span>
    </a>
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
              Citrus Gardens
            </h1>
            <p className="mt-3 text-[15px] sm:text-[17px] italic text-brand-amber">
              &hellip;A Community Designed for Modern Living.
            </p>
            <p className="mt-4 max-w-2xl text-[15px] sm:text-[16px] text-black/65 leading-[1.85]">
              Citrus Gardens is a flagship affordable and modern housing development project initiated
              by the Ibeju-Lekki Local Government in partnership with the Lagos State Government and
              Rizz Consulting.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-yellow px-3.5 py-1.5 text-[11.5px] font-bold text-black">
                Under construction
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-black/15 px-3.5 py-1.5 text-[11.5px] font-semibold text-brand-ink">
                <MapPin size={12} strokeWidth={2.2} className="text-brand-amber" /> Igando Oloja, along the Lekki-Epe Expressway
              </span>
            </div>
            <div className="mt-5">
              <BrochureButton />
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
          <p className="mt-3 text-right text-[11.5px] font-bold uppercase tracking-[0.12em] text-black/40">
            Designed with a focus on comfort, &amp; long-term value.
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 space-y-16 sm:space-y-20">

          {/* 1. Welcome to Citrus Gardens */}
          <section>
            <SectionLabel>Welcome</SectionLabel>
            <h2 className="text-[clamp(1.4rem,3.6vw,2rem)] font-extrabold text-brand-ink tracking-tight mb-6">
              Welcome to Citrus Gardens
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
              <p className="text-[14.5px] sm:text-[15px] text-black/70 leading-[1.85]">
                Citrus Gardens is an Ibeju-Lekki Local Government housing initiative, sponsored by the
                Lagos State Government in partnership with RIZZ Consulting Nigeria Limited. This housing
                initiative embodies a commitment to improving the standard of living for all.
              </p>
              <div>
                <div className="text-[13.5px] font-bold text-brand-ink mb-2">About Citrus Gardens</div>
                <p className="text-[14.5px] sm:text-[15px] text-black/70 leading-[1.85]">
                  Citrus Gardens Residential Housing Development features 63 units of 8 Terraces and 55
                  Maisonettes, catering to various specific demographics.
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-3xl text-[14.5px] sm:text-[15px] text-black/70 leading-[1.85]">
              It is designed to offer sustainable living solutions, combining green spaces, and community
              amenities to create a thriving neighborhood.
            </p>

            <h3 className="mt-9 mb-2 text-[16px] sm:text-[17px] font-bold text-brand-ink tracking-tight">
              What sets Citrus Gardens apart?
            </h3>
            <p className="text-[13.5px] text-black/55 mb-5">This residential development project stands out for several reasons:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {APART.map((a) => (
                <div key={a.title} className="rounded-2xl border border-black/10 bg-brand-cream p-5">
                  <div className="text-[13.5px] font-bold text-brand-ink mb-1.5">{a.title}:</div>
                  <p className="text-[13px] text-black/65 leading-[1.75]">{a.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Figure
                src="terraces-dusk.jpg"
                alt="Terrace frontage at Citrus Gardens with parked vehicles at dusk"
                ratio="aspect-[16/8]"
              />
              <p className="mt-3 text-right text-[11.5px] font-bold uppercase tracking-[0.12em] text-black/40">
                More than a home, it&rsquo;s a lifetime of returns.
              </p>
            </div>
          </section>

          {/* 2. Project update */}
          <section>
            <SectionLabel>Project Update</SectionLabel>
            <h2 className="text-[clamp(1.3rem,3.4vw,1.8rem)] font-extrabold text-brand-ink tracking-tight mb-6">
              Flagged off by the Governor of Lagos State
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
              <div className="space-y-4 text-[14.5px] sm:text-[15px] text-black/70 leading-[1.85]">
                <p>
                  Construction was flagged off in 2025 by the Executive Governor of Lagos State, His
                  Excellency Babajide Sanwo-Olu, in recognition of the remarkable infrastructural
                  achievements of the Council Chairman, Hon. Abdullahi Sesan Olowa. The project aligns
                  with efforts to address housing needs, create jobs, and drive sustainable community
                  growth in one of Lagos State&rsquo;s fastest-growing corridors.
                </p>
                <p>
                  Construction is ongoing, with the 450 meters access road fully completed and
                  commissioned by the Governor. The estate is strategically located in the Eleko axis of
                  Ibeju-Lekki, behind the council secretariat, designed to deliver quality homes with
                  improved living standards.
                </p>
              </div>
              <Figure
                src="flagoff-sanwoolu.jpg"
                alt="Governor Babajide Sanwo-Olu performing the ground-breaking at the Citrus Gardens housing scheme"
                caption="Sanwo-Olu commissions key projects, flags off housing scheme in Ibeju-Lekki."
                ratio="aspect-[4/3]"
              />
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Figure src="flagoff-1.jpg" alt="Dignitaries at the Citrus Gardens project unveiling" ratio="aspect-[4/3]" />
              <Figure src="flagoff-ribbon.jpg" alt="Ribbon cutting at the commissioning ceremony in Ibeju-Lekki" ratio="aspect-[4/3]" />
              <Figure src="flagoff-4.jpg" alt="Governor and council officials walking the commissioned road project" ratio="aspect-[4/3]" />
            </div>
          </section>

          {/* 3. Site Location */}
          <section>
            <SectionLabel>Site Location</SectionLabel>
            <h2 className="text-[clamp(1.4rem,3.6vw,2rem)] font-extrabold text-brand-ink tracking-tight mb-6">
              Site Location
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 mb-7">
              <p className="text-[14.5px] sm:text-[15px] text-black/70 leading-[1.85]">
                The project is strategically located in Igando Oloja, adjacent to the Ibeju-Lekki Local
                Government Secretariat, along the Lekki-Epe Expressway. Ibeju-Lekki is a rapidly
                developing suburban hub with excellent transportation infrastructure,
              </p>
              <p className="text-[14.5px] sm:text-[15px] text-black/70 leading-[1.85]">
                including road, water, air, and a proposed rail network. The area also boasts a growing
                number of schools, commercial establishments, and industrial facilities, making it a
                prime location for residential and investment opportunities.
              </p>
            </div>
            <Figure
              src="site-aerial.jpg"
              alt="Aerial view of the Citrus Gardens site beside the Ibeju-Lekki council secretariat"
              ratio="aspect-[16/6]"
            />
          </section>

          {/* 4. Close Proximity To... */}
          <section>
            <SectionLabel>Location Advantage</SectionLabel>
            <h2 className="text-[clamp(1.4rem,3.6vw,2rem)] font-extrabold text-brand-ink tracking-tight mb-6">
              Close Proximity To&hellip;
            </h2>
            <div className="h-1 w-full rounded-full bg-brand-yellow mb-7" aria-hidden="true" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PROXIMITY.map((p) => {
                const Icon = p.icon
                return (
                  <div key={p.text} className="flex items-start gap-3.5 rounded-2xl border border-black/10 bg-white p-5">
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-brand-ink">
                      <Icon size={15} strokeWidth={2.1} className="text-white" />
                    </span>
                    <p className="text-[13px] text-black/65 leading-[1.75]">{p.text}</p>
                  </div>
                )
              })}
            </div>
            <div className="mt-4 flex items-start gap-3.5 rounded-2xl border border-black/10 bg-brand-cream p-5">
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-brand-ink">
                <Building2 size={15} strokeWidth={2.1} className="text-white" />
              </span>
              <p className="text-[13px] text-black/65 leading-[1.75]">
                In addition, the Estate is strategically located near key amenities, including Schools
                (e.g. Pan Atlantic University, Corona School, Greenspring Schools, Atlantic Hall, and
                Lagos Business School), Shopping areas like La Paz Mall, a one-stop shopping centre and
                recreational facilities such as La Campagne Tropicana Resort, and its accessibility
                through major roadways (Lekki Epe Expressway) makes it more attractive for potential
                homeowners and investors.
              </p>
            </div>
            <div className="h-1 w-full rounded-full bg-brand-yellow mt-7" aria-hidden="true" />
          </section>

          {/* 5. Key Features */}
          <section>
            <SectionLabel>Key Features</SectionLabel>
            <h2 className="text-[clamp(1.4rem,3.6vw,2rem)] font-extrabold text-brand-ink tracking-tight mb-7">
              Key Features
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {KEY_FEATURES.map((f) => {
                const Icon = f.icon
                return (
                  <div key={f.label} className="rounded-2xl border border-black/10 bg-white p-5">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-ink">
                      <Icon size={18} strokeWidth={2.1} className="text-white" />
                    </span>
                    <div className="mt-4 text-[13.5px] font-bold text-brand-ink leading-snug">{f.label}</div>
                    <div className="mt-3 h-0.5 w-full bg-brand-ink/80" aria-hidden="true" />
                  </div>
                )
              })}
            </div>
          </section>

          {/* 6. Housing units and estate amenities */}
          <section>
            <SectionLabel>Housing Units</SectionLabel>
            <h2 className="text-[clamp(1.3rem,3.4vw,1.8rem)] font-extrabold text-brand-ink tracking-tight mb-5">
              Key Estate Features and Amenities
            </h2>
            <p className="max-w-3xl text-[14.5px] sm:text-[15px] text-black/70 leading-[1.85] mb-6">
              The estate emphasizes modern, sustainable, and secure living. Planned highlights include
              approximately 63 family units, featuring a mix of 2-Bedroom Apartments/Condominiums,
              4-Bedroom Terraced Duplexes/Maisonettes, and 5-Bedroom Terraces. Units offer generous
              living areas, well-planned bedrooms, functional kitchens, and contemporary finishes.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {AMENITY_GROUPS.map((g) => (
                <div key={g.title} className="rounded-2xl border border-black/10 bg-brand-cream p-5">
                  <div className="text-[13.5px] font-bold text-brand-ink mb-2.5">{g.title}</div>
                  <ul className="space-y-1.5">
                    {g.items.map((i) => (
                      <li key={i} className="flex items-start gap-2 text-[13px] text-black/65 leading-[1.75]">
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-brand-amber" aria-hidden="true" />
                        <span>{i}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-6 max-w-3xl text-[14.5px] sm:text-[15px] text-black/70 leading-[1.85]">
              This estate positions itself as a premium yet accessible residential community, blending
              government-backed reliability with private-sector expertise for luxury living made easy in
              a rapidly developing area.
            </p>
            <div className="mt-6 rounded-2xl border border-brand-yellow/40 bg-brand-yellow/[0.07] p-5 sm:p-6">
              <p className="text-[13.5px] text-black/70 leading-[1.8]">
                Prices for units (as marketed) typically range from around &#8358;80m for 2-bedroom
                apartments to &#8358;150m&ndash;&#8358;170m for larger terraces/maisonettes, with
                flexible payment plans (e.g., 30% initial deposit in some offerings).
              </p>
            </div>
          </section>

          {/* 7. The Terrace */}
          <section>
            <SectionLabel>The Terrace</SectionLabel>
            <h2 className="text-[clamp(1.4rem,3.6vw,2rem)] font-extrabold text-brand-ink tracking-tight mb-6">
              The Terrace
            </h2>
            <Figure
              src="terrace-facade.jpg"
              alt="Terrace block facade at Citrus Gardens in the evening"
              ratio="aspect-[16/8]"
            />
            <div className="mt-7 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
              <div>
                <div className="text-[13.5px] font-bold uppercase tracking-[0.08em] text-brand-ink mb-2">
                  Elevated living at Citrus Gardens Estate!
                </div>
                <p className="text-[14px] text-black/70 leading-[1.85]">
                  Our stylish terrace apartments blend modern design with comfort, offering spacious
                  living areas, sleek finishes, and a serene environment perfect for families and
                  professionals. With lush surroundings and top-tier amenities, enjoy the best of urban
                  living in a secure and vibrant community.
                </p>
              </div>
              <div>
                <div className="text-[13.5px] font-bold uppercase tracking-[0.08em] text-brand-ink mb-2">
                  Wake up to luxury!
                </div>
                <p className="text-[14px] text-black/70 leading-[1.85]">
                  Our terrace bedrooms offer the perfect mix of style, space, and serenity. With bright,
                  airy interiors and premium finishes, every morning feels like a fresh start in comfort
                  and elegance.
                </p>
              </div>
            </div>

            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-black/10 bg-brand-cream p-5">
                <div className="text-[12.5px] font-bold text-brand-ink mb-2.5">Key features</div>
                <p className="text-[12.5px] text-black/55 mb-2">With modern facilities and designs such as;</p>
                <ul className="space-y-1.5 text-[13px] text-black/70">
                  <li>&ndash; P.O.P ceiling</li>
                  <li>&ndash; Wardrobe</li>
                  <li>&ndash; Water heater</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-black/10 bg-brand-cream p-5">
                <div className="text-[12.5px] font-bold text-brand-ink mb-2.5">Modern kitchen facilities such as</div>
                <ul className="space-y-1.5 text-[13px] text-black/70">
                  <li>Microwave</li>
                  <li>Granite Top</li>
                  <li>Heat Extractor etc.</li>
                </ul>
              </div>
            </div>

            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {TERRACE_GALLERY.map((g) => (
                <Figure key={g.src} src={g.src} alt={g.alt} ratio="aspect-[4/3]" />
              ))}
            </div>

            <h3 className="mt-10 mb-4 text-[17px] font-bold text-brand-ink tracking-tight">Floor Plans</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {TERRACE_PLANS.map((p) => (
                <PlanFigure key={p.src} src={p.src} alt={p.alt} label={p.label} />
              ))}
            </div>
          </section>

          {/* 8. The Maisonettes */}
          <section>
            <SectionLabel>The Maisonettes</SectionLabel>
            <h2 className="text-[clamp(1.4rem,3.6vw,2rem)] font-extrabold text-brand-ink tracking-tight mb-6">
              The Maisonettes
            </h2>
            <Figure
              src="maisonette-exterior.jpg"
              alt="Maisonette frontage at Citrus Gardens"
              ratio="aspect-[16/8]"
            />
            <div className="mt-7 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
              <div>
                <div className="text-[13.5px] font-bold uppercase tracking-[0.08em] text-brand-ink mb-2">
                  Experience luxury redefined!
                </div>
                <p className="text-[14px] text-black/70 leading-[1.85]">
                  The maisonette apartments at Citrus Gardens Estate offer a stunning blend of space,
                  sophistication, and modern comfort. With multi-level living, sleek interiors, and a
                  serene environment, every detail is designed for those who desire more.
                </p>
              </div>
              <div>
                <div className="text-[13.5px] font-bold uppercase tracking-[0.08em] text-brand-ink mb-2">
                  Luxury redefined: Maisonettes at Citrus Gardens!
                </div>
                <p className="text-[14px] text-black/70 leading-[1.85]">
                  Spacious, stylish, and designed for ultimate comfort, our maisonette apartments offer
                  multi-level elegance with premium finishes and breathtaking views. Experience the
                  perfect blend of privacy and modern living in a serene, upscale community.
                </p>
              </div>
            </div>

            <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-black/10 bg-brand-cream p-5">
                <div className="text-[12.5px] font-bold text-brand-ink mb-2.5">Key features</div>
                <p className="text-[12.5px] text-black/55 mb-2">With modern facilities and designs such as;</p>
                <ul className="space-y-1.5 text-[13px] text-black/70">
                  <li>&ndash; P.O.P ceiling</li>
                  <li>&ndash; Wardrobe</li>
                  <li>&ndash; Water heater</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-black/10 bg-brand-cream p-5">
                <div className="text-[12.5px] font-bold text-brand-ink mb-2.5">Modern kitchen facilities such as</div>
                <ul className="space-y-1.5 text-[13px] text-black/70">
                  <li>Microwave</li>
                  <li>Granite Top</li>
                  <li>Heat Extractor etc.</li>
                </ul>
              </div>
              <div className="flex items-center justify-center rounded-2xl border border-black/10 bg-brand-ink p-5">
                <div className="text-center">
                  <div className="text-[26px] font-extrabold tracking-[0.18em] text-brand-yellow">4</div>
                  <div className="mt-1 text-[12px] font-bold uppercase tracking-[0.22em] text-white">Bedrooms</div>
                </div>
              </div>
            </div>

            <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {MAISONETTE_GALLERY.map((g) => (
                <Figure key={g.src} src={g.src} alt={g.alt} ratio="aspect-[4/3]" />
              ))}
            </div>

            <h3 className="mt-10 mb-4 text-[17px] font-bold text-brand-ink tracking-tight">Floor Plans</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {MAISONETTE_PLANS.map((p) => (
                <PlanFigure key={p.src} src={p.src} alt={p.alt} label={p.label} />
              ))}
            </div>
          </section>

          {/* 9. The Scenery */}
          <section>
            <SectionLabel>The Scenery</SectionLabel>
            <h2 className="text-[clamp(1.4rem,3.6vw,2rem)] font-extrabold text-brand-ink tracking-tight mb-6">
              The Scenery
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Figure src="estate-daylight.jpg" alt="Citrus Gardens Estate under a clear sky" ratio="aspect-[4/3]" />
              <Figure src="flagoff-3.jpg" alt="Street view of completed homes at Citrus Gardens" ratio="aspect-[4/3]" />
            </div>
          </section>

          {/* 10. The Aerial View */}
          <section>
            <SectionLabel>The Aerial View</SectionLabel>
            <h2 className="text-[clamp(1.4rem,3.6vw,2rem)] font-extrabold text-brand-ink tracking-tight mb-6">
              The Aerial View
            </h2>
            <Figure
              src="aerial-night.jpg"
              alt="Aerial view of Citrus Gardens Estate illuminated at dusk"
              ratio="aspect-[16/9]"
            />
          </section>

          {/* Enquiries */}
          <section className="rounded-2xl border border-black/10 bg-brand-cream p-6 sm:p-9">
            <SectionLabel>For Further Enquiries</SectionLabel>
            <p className="max-w-2xl text-[14px] text-black/70 leading-[1.85] mb-6">
              Note: Details may evolve as construction progresses. For the latest updates, enquiries,
              site inspections, contact the Chief Technical Adviser to the Executive Chairman on Housing
              and Tourism, Mr. Oriyomi Azeez on 08071726296.
            </p>
            <div className="rounded-xl border border-black/10 bg-white px-5 py-4 mb-6 inline-block">
              <div className="text-[13.5px] font-bold text-brand-ink">Oriyomi Azeez</div>
              <div className="text-[12px] text-black/50 mt-0.5">
                CTA, Housing &amp; Tourism Development, Ibeju-Lekki Local Government
              </div>
              <a href="tel:+2348071726296" className="mt-2.5 inline-flex items-center gap-2 text-[13.5px] font-bold text-brand-amber hover:text-brand-ink transition-colors">
                <Phone size={14} strokeWidth={2.4} /> 08071726296
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <BrochureButton variant="outline" />
            </div>
          </section>

          <p className="text-[11.5px] text-black/40 leading-relaxed">
            Ibeju-Lekki Local Government housing initiative through Lagos State Government, in
            partnership with Rizz Consulting Nigeria Limited.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
