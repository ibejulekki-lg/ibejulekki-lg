import AboutPage from '@/components/AboutPage'
import type { Block } from '@/components/AboutPage'

export const metadata = {
  title: 'Traditional Rulers | Ibeju-Lekki Local Government',
  description:
    'The traditional institution of Ibeju-Lekki: the Council of Obas and Chiefs, headed by the Onibeju as permanent Chairman.',
}

const FACTS = [
  { label: 'Apex body', value: 'Council of Obas and Chiefs' },
  { label: 'Permanent Chairman', value: 'The Onibeju' },
]

const BLOCKS: Block[] = [
  {
    kind: 'ruler',
    name: 'HRM Oba Amb. Abidemi Toheeb Yissa Oyedele',
    title: 'Onimedu of Orimedu Kingdom, Oyetu I, Ibeju-Lekki, Lagos',
    image: '/leadership/oba-onimedu-orimedu.webp',
    note: 'A reigning traditional ruler within the Council of Obas and Chiefs of Ibeju-Lekki, custodian of the customs and heritage of the Orimedu Kingdom.',
  },
  {
    kind: 'section',
    paras: [
      `Firmly rooted in a patriarchal and male-dominated structure, leadership is vested in the Council of Obas and Chiefs, which is headed by the Onibeju, who serves as its permanent Chairman.`,
    ],
  },
  {
    kind: 'section',
    heading: 'The Onibeju',
    paras: [
      `Historically, the Onibeju has long been the paramount traditional ruler and administrative head of all communities that constituted the old Ibeju District. This pre-colonial authority predates the arrival of the British colonial masters.`,
      `Because of this ancient and unbroken legacy, the Onibeju has retained his position as the permanent Chairman of the Council of Obas and Chiefs in Ibeju-Lekki to the present day.`,
    ],
  },
]

export default function Page() {
  return (
    <AboutPage
      crumb="Traditional Rulers"
      eyebrow="About · Traditional Rulers"
      title="Traditional Rulers"
      lead="The traditional institution of authority in Ibeju-Lekki remains deeply revered by the indigenous people."
      facts={FACTS}
      blocks={BLOCKS}
    />
  )
}
