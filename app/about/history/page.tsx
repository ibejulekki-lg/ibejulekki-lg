import AboutPage from '@/components/AboutPage'
import type { Block } from '@/components/AboutPage'

export const metadata = {
  title: 'History of Ibeju-Lekki | Ibeju-Lekki Local Government',
  description:
    'The history of Ibeju-Lekki Local Government Area, Lagos State: its creation, name, geography, towns and modern transformation.',
}

const FACTS = [
  { label: 'Created', value: '1990' },
  { label: 'Headquarters', value: 'Igando-Oloja' },
  { label: 'Land area', value: 'About 646 km²' },
  { label: 'Coast', value: 'Atlantic Ocean, south' },
]

const BLOCKS: Block[] = [
  {
    kind: 'section',
    heading: 'Creation',
    paras: [
      `It was created in 1990 by the then military president, General Ibrahim Badamasi Babangida, as one of four new local governments excised from the old Epe Local Government Area. At inception, its headquarters was located at Akodo.`,
      `In October 2003, the Lagos State Government under Governor Bola Ahmed Tinubu carved out the Lekki Local Council Development Area (LCDA) from parts of Ibeju-Lekki. This administrative change led to the relocation of the headquarters from Akodo to its present site at Igando-Oloja, along the Lekki-Epe Expressway.`,
    ],
  },
  {
    kind: 'section',
    heading: 'The Name and the Land',
    paras: [
      `The name Ibeju-Lekki is derived from the combination of two prominent autonomous communities: Ibeju-Agbe and Lekki. Situated along the coastal plain of Nigeria, the area is characterised by numerous creeks and lagoons, which have historically supported fishing, farming and trading among its people.`,
    ],
  },
  {
    kind: 'section',
    heading: 'Geography',
    paras: [
      `Ibeju-Lekki is bounded by Eti-Osa East LCDA to the west, Epe Local Government Area to the east, and the Atlantic Ocean to the south. It stretches approximately 75 kilometres in length and 20 kilometres at its widest point, covering an expansive land area of about 646 square kilometres, roughly a quarter of the total land mass of Lagos State. This strategic coastal location has positioned it as an important corridor for both traditional livelihoods and modern development.`,
    ],
  },
  {
    kind: 'section',
    heading: 'Towns and Communities',
    paras: [
      `The local government is home to many towns and settlements spread across its wards, reflecting the rich heritage of its people and serving as hubs for residential, agricultural and emerging commercial activity.`,
    ],
  },
  {
    kind: 'chips',
    label: 'Major Towns and Communities',
    items: [
      'Ibeju-Agbe', 'Magbon-Alade', 'Iberekodo', 'Igando-Oloja', 'Aiyeteju', 'Awoyaya',
      'Bogije', 'Akodo', 'Eleran-Igbe', 'Eleko', 'Elemoro', 'Idi-Orogbo', 'Lakowe',
      'Orimedu', 'Abijo', 'Mopo-Ijebu', 'Eputu', 'Badore', 'Idado', 'Solu-Alade',
      'Lagasa', 'Ogunfayo', 'Araromi', 'Kaiyetoro', 'Iwerekun', 'Abegede',
      'Arapagi', 'Idi-Ori',
    ],
  },
  {
    kind: 'section',
    heading: 'Modern Transformation',
    paras: [
      `In recent decades, Ibeju-Lekki has undergone significant transformation and rapid urbanisation. Its proximity to key infrastructure such as the Lekki-Epe Expressway, the Dangote Refinery and numerous large-scale real estate projects has greatly enhanced its economic potential. Today it blends its traditional coastal identity with modern opportunities in industry, tourism and residential expansion.`,
    ],
  },
]

export default function Page() {
  return (
    <AboutPage
      crumb="History"
      eyebrow="About · History"
      title="History of Ibeju-Lekki"
      lead="Ibeju-Lekki Local Government Area is one of the 20 Local Government Areas in Lagos State, Nigeria, and one of the fastest-growing regions in the state."
      facts={FACTS}
      blocks={BLOCKS}
    />
  )
}
