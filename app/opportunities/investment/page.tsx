import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Building2 } from 'lucide-react'
import Footer from '@/components/Footer'
import { INVESTMENTS } from '@/lib/investments'


/* Landmark projects, with wording from the council's Housing Development
   Opportunities paper. Photographs live in public/images/investment/. */
const LANDMARKS = [
  {
    name: 'Dangote Refinery and Petrochemical Complex',
    image: '/images/investment/dangote-refinery.jpg',
    alt: 'The Dangote Petroleum Refinery within the Lekki Free Zone',
    body:
      'The Dangote Petroleum Refinery is Africa\u2019s largest refinery and the world\u2019s largest single-train refinery, located within the Lekki Free Zone. The refinery has a processing capacity of approximately 650,000 barrels of crude oil per day and occupies thousands of hectares of land within Ibeju-Lekki. The project has created thousands of direct and indirect jobs, attracting workers and businesses that require quality housing and residential communities.',
  },
  {
    name: 'Lekki Deep Sea Port',
    image: '/images/investment/lekki-deep-sea-port.jpg',
    alt: 'Aerial view of the Lekki Deep Sea Port',
    body:
      'The Lekki Deep Sea Port is one of the largest and most modern seaports in West Africa. The port is expected to facilitate trade, logistics, manufacturing, and export activities while generating significant employment opportunities. Its operations continue to attract businesses and professionals into the area, increasing demand for residential developments.',
  },
  {
    name: 'Lagos Free Zone and Industrial Corridor',
    image: '/images/investment/lekki-free-zone-gate.jpg',
    alt: 'Entrance to the Lekki Free Zone',
    body:
      'The Lagos Free Zone and the broader Lekki Free Trade Zone have become major destinations for manufacturing, logistics, technology, and industrial investments. These economic activities are generating employment and driving population growth, creating sustained demand for affordable, middle-income, and luxury housing developments.',
  },
  {
    name: 'Proposed Lekki International Airport',
    image: '/images/investment/lagos-free-zone.jpg',
    alt: 'Industrial corridor road within the Lagos Free Zone',
    body:
      'The proposed international airport project is expected to further accelerate economic growth and increase the attractiveness of Ibeju-Lekki as a residential and business destination. The airport is anticipated to stimulate demand for residential estates, hotels, serviced apartments, and commercial developments throughout the corridor.',
  },
  {
    name: 'Lagos-Calabar Coastal Highway',
    image: '/images/investment/coastal-corridor-aerial.jpg',
    alt: 'Aerial view of the coastal industrial corridor in Ibeju-Lekki',
    body:
      'The ongoing Coastal Highway project will improve connectivity between Lagos and other coastal states, enhancing accessibility and property values throughout Ibeju-Lekki. Improved transportation infrastructure is expected to unlock new residential development opportunities and support the growth of emerging communities.',
  },
]

const HOUSING_SEGMENTS = [
  'Affordable Housing Estates',
  'Middle-Income Residential Communities',
  'Luxury Residential Estates',
  'Smart City Developments',
  'Mixed-Use Communities',
  'Staff Housing for Industrial Workers',
  'Serviced Apartments',
  'Student Accommodation',
  'Retirement Communities',
  'Waterfront Residential Developments',
]
export const metadata = {
  title: 'Investment Opportunities | Ibeju-Lekki Local Government',
  description:
    'The landmark projects powering Ibeju-Lekki, Lagos State: Dangote Refinery, Lekki Free Trade Zone, Lekki Deep Seaport and more.',
}

export default function Page() {
  return (
    <>
      <main className="min-h-screen bg-white">
        <section className="border-b border-black/10 bg-brand-cream">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14">
            <nav className="flex items-center flex-wrap gap-1.5 text-[11px] sm:text-[12px] text-black/45 mb-5" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-brand-ink transition-colors">Home</Link>
              <span className="text-black/30">/</span>
              <span>Opportunities</span>
              <span className="text-black/30">/</span>
              <span className="text-brand-ink font-semibold">Investment Opportunities</span>
            </nav>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-brand-yellow" aria-hidden="true" />
              <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-black/45">The New Lagos</span>
            </div>
            <h1 className="text-[clamp(1.8rem,5vw,2.9rem)] font-extrabold text-brand-ink tracking-tight leading-tight">
              Investment Opportunities
            </h1>
            <p className="mt-4 max-w-2xl text-[15px] sm:text-[16px] text-black/60 leading-[1.85]">
              Ibeju-Lekki is Nigeria&apos;s emerging economic frontier, home to landmark projects
              that are reshaping Lagos State. Explore the developments driving the area&apos;s growth.
            </p>
          </div>
        </section>

        {/* Landmark projects driving demand */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 pt-12 sm:pt-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-brand-yellow" aria-hidden="true" />
            <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-black/45">Landmark Projects</span>
          </div>
          <h2 className="text-[clamp(1.3rem,3.4vw,1.9rem)] font-extrabold text-brand-ink tracking-tight mb-5">
            The projects driving demand
          </h2>
          <p className="max-w-3xl text-[14.5px] sm:text-[15px] text-black/70 leading-[1.85] mb-4">
            Ibeju-Lekki has become the most promising real estate growth corridor in Lagos State and one
            of the fastest-growing investment destinations in Africa. The area is undergoing a remarkable
            transformation driven by massive public and private sector investments, creating unprecedented
            opportunities for residential, commercial, and mixed-use housing developments.
          </p>
          <p className="max-w-3xl text-[14.5px] sm:text-[15px] text-black/70 leading-[1.85] mb-10">
            The emergence of major economic and infrastructure projects has significantly increased demand
            for housing, creating opportunities for developers, investors, mortgage institutions, and
            construction companies to participate in the area&apos;s growth story. The increasing influx of
            workers, professionals, business owners, expatriates, and investors is expected to sustain
            housing demand for decades.
          </p>

          <div className="space-y-10 sm:space-y-14">
            {LANDMARKS.map((l, i) => (
              <article key={l.name} className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8 items-center">
                <div className={`relative aspect-[16/10] overflow-hidden rounded-2xl border border-black/10 bg-brand-cream ${i % 2 ? 'lg:order-2' : ''}`}>
                  <Image
                    src={l.image}
                    alt={l.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div>
                  <h3 className="text-[16px] sm:text-[18px] font-bold text-brand-ink tracking-tight leading-snug mb-3">
                    {l.name}
                  </h3>
                  <p className="text-[13.5px] sm:text-[14px] text-black/65 leading-[1.85]">{l.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Government intervention */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 pt-12 sm:pt-16">
          <div className="rounded-2xl border border-black/10 bg-brand-cream p-6 sm:p-9">
            <h2 className="text-[clamp(1.2rem,3vw,1.6rem)] font-extrabold text-brand-ink tracking-tight mb-4">
              Government intervention in housing development
            </h2>
            <p className="text-[14px] text-black/70 leading-[1.85] mb-4">
              The Lagos State Government and Ibeju-Lekki Local Government have played a critical role in
              creating an enabling environment for housing and real estate development. Through strategic
              investments in roads, drainage systems, transportation infrastructure, urban planning, and
              public services, government has significantly improved the attractiveness of the area for
              investors and developers.
            </p>
            <p className="text-[14px] text-black/70 leading-[1.85]">
              Government-backed land schemes, infrastructure expansion projects, road upgrades, and urban
              development initiatives have provided the foundation for large-scale residential development
              across the local government area. These interventions have enhanced land values, improved
              accessibility, and increased investor confidence in the area.
            </p>
            <Link
              href="/opportunities/housing/citrus-garden"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-yellow px-5 py-2.5 text-[13px] font-bold text-black hover:bg-brand-hover transition-colors"
            >
              See Citrus Gardens, a model development <ArrowRight size={14} strokeWidth={2.5} />
            </Link>
          </div>
        </section>

        {/* Future housing opportunities */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 pt-12 sm:pt-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-brand-yellow" aria-hidden="true" />
            <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-black/45">Future Opportunities</span>
          </div>
          <h2 className="text-[clamp(1.3rem,3.4vw,1.9rem)] font-extrabold text-brand-ink tracking-tight mb-5">
            Where the housing market is opening up
          </h2>
          <p className="max-w-3xl text-[14.5px] text-black/70 leading-[1.85] mb-6">
            The housing market in Ibeju-Lekki presents opportunities across several segments:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {HOUSING_SEGMENTS.map((seg) => (
              <div
                key={seg}
                className="flex items-start gap-2.5 rounded-xl border border-black/10 bg-white px-4 py-3.5 text-[13px] font-medium text-brand-ink"
              >
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-yellow" aria-hidden="true" />
                <span>{seg}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Explore each project */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 pt-12 sm:pt-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-brand-yellow" aria-hidden="true" />
            <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-black/45">Explore</span>
          </div>
          <h2 className="text-[clamp(1.3rem,3.4vw,1.9rem)] font-extrabold text-brand-ink tracking-tight">
            Each project in detail
          </h2>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {INVESTMENTS.map((inv) => (
              <Link
                key={inv.slug}
                href={`/opportunities/investment/${inv.slug}`}
                className="group flex flex-col rounded-2xl border border-black/10 bg-white p-5 sm:p-6 transition-all hover:border-brand-yellow hover:shadow-md"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-yellow">
                  <Building2 size={18} strokeWidth={2.2} className="text-black" />
                </span>
                <h2 className="mt-4 text-[14.5px] font-bold text-brand-ink leading-snug">{inv.name}</h2>
                <p className="mt-2 flex-1 text-[12.5px] leading-[1.7] text-black/55">{inv.blurb}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-[12px] font-semibold text-brand-amber transition-all group-hover:gap-2">
                  Read more <ArrowRight size={13} strokeWidth={2.5} />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
