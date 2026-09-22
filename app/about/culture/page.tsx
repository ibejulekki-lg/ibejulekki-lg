import AboutPage from '@/components/AboutPage'
import type { Block } from '@/components/AboutPage'

export const metadata = {
  title: 'The People, Arts and Culture | Ibeju-Lekki Local Government',
  description:
    'The people, arts and culture of Ibeju-Lekki: Igi-Meta heritage, religious tolerance, masquerades, festivals and Yoruba-Ijebu traditions.',
}

const FACTS = [
  { label: 'Heritage', value: 'Igi-Meta (Three Trees)' },
  { label: 'People', value: 'Ijebu Yoruba' },
  { label: 'Faiths', value: 'Islam, Christianity, African Traditional Worship' },
]

const BLOCKS: Block[] = [
  {
    kind: 'section',
    heading: 'The People',
    paras: [
      `The indigenous people of Ibeju-Lekki are primarily of Ijebu descent. They proudly identify with the Igi-Meta (Three Trees) heritage, reflected in their oriki, or praise poetry.`,
    ],
  },
  {
    kind: 'quote',
    text: `Omo onigi meta Ibeju, ikan n so owo, ikan n so iyun, ikan n so alaari baba aso.`,
    note: `The verse symbolises prosperity, with trees that yield wealth, beads (iyun), and high-quality dyed fabrics such as alaari.`,
  },
  {
    kind: 'section',
    paras: [
      `Historically, many residents are fishermen who navigate the lagoons and ocean for fish, prawns, lobsters and crabs. Women traditionally smoke or grill the catch, producing smoked fish that pairs with garri, a local delicacy with regional fame.`,
      `The population includes a vibrant mix of Muslims, Christians and Traditional Worshippers. Ibeju-Lekki is cosmopolitan: while indigenes maintain strong ties, people from across Nigeria and beyond live, work and invest here, and the area is known for peaceful coexistence and hospitality.`,
    ],
  },
  {
    kind: 'section',
    heading: 'Religious Tolerance',
    paras: [
      `A defining hallmark of Ibeju-Lekki is the exemplary religious tolerance among Muslims, Christians and Traditional Worshippers, reflecting the broader Yoruba tradition of interfaith accommodation, where adherents of different faiths live in the same families, participate in one another's celebrations, and collaborate for community progress.`,
      `Muslims, organised under bodies such as the Ibeju-Lekki League of Imams and Alfas, promote unity, self-discipline and respect for all faiths. Christians, represented by the Christian Association of Nigeria (CAN) and the Pentecostal Fellowship of Nigeria (PFN), engage in worship, crusades and community outreach. African Traditional Worshippers maintain ancestral practices, including the veneration of deities such as Olokun, and take part in masquerade traditions and African Traditional Worship Day celebrations.`,
    ],
  },
  {
    kind: 'cards',
    label: 'Arts and Creative Expression',
    intro: [
      `Arts in Ibeju-Lekki blend traditional Yoruba craftsmanship with contemporary influences. Traditional crafts include textile work, notably Alaari and Aso-Oke and other dyed fabrics referenced in the oriki, alongside beadwork and items tied to fishing and daily life.`,
      `Masquerades form a cornerstone of the performing arts, embodying ancestral spirits, community values, purification and entertainment. Often tied to broader Ijebu traditions, they feature elaborate costumes, drumming, dance and chants, appearing during festivals across religious lines.`,
    ],
    items: [
      { name: 'Kilajolu', desc: 'Commemorates historical victories and is known for energetic performances.' },
      { name: 'Imale Agbo (Agbo Omiyoyo)', desc: 'Featured in local cultural displays, adding vibrant energy to celebrations.' },
      { name: 'Jigbo', desc: 'Central to annual festivals, with processions for cleansing, progress and unity.' },
      { name: 'Eyo', desc: 'Displayed by traditional rulers at events, representing ancestral blessings in white attire.' },
      { name: 'Igununko', desc: 'Performs at beach carnivals and local events.' },
    ],
  },
  {
    kind: 'section',
    heading: 'Culture and Traditions',
    paras: [
      `The culture of Ibeju-Lekki is deeply rooted in Yoruba-Ijebu traditions, emphasising community, royalty, enterprise and a connection to the sea and the land.`,
    ],
  },
  {
    kind: 'defs',
    label: 'Key Elements',
    items: [
      { term: 'Festivals', text: `The annual Igi Meta Ibeju Day celebrates heritage, unity and the leadership of the Onibeju, with cultural displays, music including Fuji, prayers from various faiths, dispute resolution and spiritual cleansing. Other events include beach fiestas, masquerade processions, Olokun festivals and African Traditional Worship celebrations, drawing on grand Ijebu traditions such as Ojude Oba and Agemo.` },
      { term: 'Cuisine and Daily Life', text: `Seafood dominates, with smoked fish as a specialty. Festivals showcase local foods alongside fabrics, crafts and masquerade performances.` },
      { term: 'Social Values', text: `A strong emphasis on hospitality, education, family ties and communal progress, with age-grade systems (regberegbe) historically driving development.` },
    ],
  },
  {
    kind: 'section',
    paras: [
      `This rich cultural tapestry makes Ibeju-Lekki not only an emerging economic powerhouse but also a living repository of Yoruba heritage in Lagos.`,
    ],
  },
]

export default function Page() {
  return (
    <AboutPage
      crumb="People & Culture"
      eyebrow="About · People & Culture"
      title="The People, Arts and Culture"
      lead="Ibeju-Lekki exemplifies the dynamic interplay of tradition and modernity in coastal Yoruba society. Its people, rooted in Igi-Meta identity and fishing heritage, celebrate their arts and culture through vibrant festivals, music, crafts, masquerades and exemplary religious harmony."
      facts={FACTS}
      blocks={BLOCKS}
    />
  )
}
