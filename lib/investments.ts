export interface Investment {
  slug: string
  name: string
  blurb: string
  body: string[]
}

/* Order here drives the homepage ticker order. body: [] renders a
   "details coming soon" note until fuller text (and images) are added. */
export const INVESTMENTS: Investment[] = [
  {
    slug: 'dangote-refinery',
    name: 'Dangote Refinery',
    blurb: 'Africa\'s largest refinery and the world\'s largest single-train refinery, within the Lekki Free Zone.',
    body: [
      `The Dangote Petroleum Refinery is Africa's largest refinery and the world's largest single-train refinery, located within the Lekki Free Zone. The refinery has a processing capacity of approximately 650,000 barrels of crude oil per day and occupies thousands of hectares of land within Ibeju-Lekki. The project has created thousands of direct and indirect jobs, attracting workers and businesses that require quality housing and residential communities.`,
    ],
  },
  {
    slug: 'lekki-free-trade-zone',
    name: 'Lekki Free Trade Zone',
    blurb: 'A major destination for manufacturing, logistics, technology and industrial investment.',
    body: [
      `The Lagos Free Zone and the broader Lekki Free Trade Zone have become major destinations for manufacturing, logistics, technology, and industrial investments. These economic activities are generating employment and driving population growth, creating sustained demand for affordable, middle-income, and luxury housing developments.`,
    ],
  },
  {
    slug: 'lekki-deep-seaport',
    name: 'Lekki Deep Seaport',
    blurb: 'One of the largest and most modern seaports in West Africa.',
    body: [
      `The Lekki Deep Sea Port is one of the largest and most modern seaports in West Africa. The port is expected to facilitate trade, logistics, manufacturing, and export activities while generating significant employment opportunities. Its operations continue to attract businesses and professionals into the area, increasing demand for residential developments.`,
    ],
  },
  {
    slug: 'pan-atlantic-university',
    name: 'Pan-Atlantic University',
    blurb: 'A leading private university within the Ibeju-Lekki corridor.',
    body: [],
  },
  {
    slug: 'lekki-international-airport',
    name: 'Lekki International Airport',
    blurb: 'A proposed international airport set to accelerate growth across the corridor.',
    body: [
      `The proposed international airport project is expected to further accelerate economic growth and increase the attractiveness of Ibeju-Lekki as a residential and business destination. The airport is anticipated to stimulate demand for residential estates, hotels, serviced apartments, and commercial developments throughout the corridor.`,
    ],
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
