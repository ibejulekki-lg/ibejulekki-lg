export interface Investment {
  slug: string
  name: string
  blurb: string
  body: string[]
  image?: string
  alt?: string
}

/* Single source of truth for the landmarks. Drives the homepage ticker, the
   Investment Opportunities landing page and each detail page, so a name or a
   photograph only ever has to be changed in one place.
   Order here drives the ticker order. body: [] renders a
   "details coming soon" note until fuller text is added. */
export const INVESTMENTS: Investment[] = [
  {
    slug: 'dangote-refinery',
    name: 'Dangote Refinery',
    blurb: `Africa's largest refinery and the world's largest single-train refinery, within the Lekki Free Zone.`,
    image: '/images/investment/dangote-refinery.jpg',
    alt: 'The Dangote Petroleum Refinery within the Lekki Free Zone',
    body: [
      `The Dangote Petroleum Refinery is Africa's largest refinery and the world's largest single-train refinery, located within the Lekki Free Zone. The refinery has a processing capacity of approximately 650,000 barrels of crude oil per day and occupies thousands of hectares of land within Ibeju-Lekki. The project has created thousands of direct and indirect jobs, attracting workers and businesses that require quality housing and residential communities.`,
    ],
  },
  {
    slug: 'lekki-deep-seaport',
    name: 'Lekki Deep Seaport',
    blurb: 'One of the largest and most modern seaports in West Africa.',
    image: '/images/investment/lekki-deep-sea-port.jpg',
    alt: 'Aerial view of the Lekki Deep Sea Port',
    body: [
      `The Lekki Deep Sea Port is one of the largest and most modern seaports in West Africa. The port is expected to facilitate trade, logistics, manufacturing, and export activities while generating significant employment opportunities. Its operations continue to attract businesses and professionals into the area, increasing demand for residential developments.`,
    ],
  },
  {
    slug: 'lekki-free-trade-zone',
    name: 'Lekki Free Trade Zone',
    blurb: 'A major destination for manufacturing, logistics, technology and industrial investment.',
    image: '/images/investment/lekki-free-zone-gate.jpg',
    alt: 'Entrance to the Lekki Free Zone',
    body: [
      `The Lagos Free Zone and the broader Lekki Free Trade Zone have become major destinations for manufacturing, logistics, technology, and industrial investments. These economic activities are generating employment and driving population growth, creating sustained demand for affordable, middle-income, and luxury housing developments.`,
    ],
  },
  {
    slug: 'lekki-international-airport',
    name: 'Lekki International Airport',
    blurb: 'A proposed international airport set to accelerate growth across the corridor.',
    image: '/images/investment/lagos-free-zone.jpg',
    alt: 'Road within the industrial corridor serving the Ibeju-Lekki area',
    body: [
      `The proposed international airport project is expected to further accelerate economic growth and increase the attractiveness of Ibeju-Lekki as a residential and business destination. The airport is anticipated to stimulate demand for residential estates, hotels, serviced apartments, and commercial developments throughout the corridor.`,
    ],
  },
  {
    slug: 'lagos-calabar-coastal-highway',
    name: 'Lagos-Calabar Coastal Highway',
    blurb: 'Improving connectivity between Lagos and the coastal states, and unlocking new development.',
    image: '/images/investment/coastal-corridor-aerial.jpg',
    alt: 'Aerial view of the coastal industrial corridor in Ibeju-Lekki',
    body: [
      `The ongoing Coastal Highway project will improve connectivity between Lagos and other coastal states, enhancing accessibility and property values throughout Ibeju-Lekki. Improved transportation infrastructure is expected to unlock new residential development opportunities and support the growth of emerging communities.`,
    ],
  },
  {
    slug: 'pan-atlantic-university',
    name: 'Pan-Atlantic University',
    blurb: 'A leading private university within the Ibeju-Lekki corridor.',
    body: [],
  },
  {
    slug: 'eleganza-industrial-city',
    name: 'Eleganza Industrial City',
    blurb: 'An industrial development within the Ibeju-Lekki investment corridor.',
    body: [],
  },
]

export function getInvestment(slug: string): Investment | undefined {
  return INVESTMENTS.find((i) => i.slug === slug)
}
