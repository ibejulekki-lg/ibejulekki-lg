export interface RulerSection {
  heading?: string
  paras: string[]
}

export interface Ruler {
  slug: string
  name: string
  title: string
  image: string
  history?: RulerSection[]
}

const RULERS_RAW: Ruler[] = [
  {
    slug: 'orimedu',
    name: 'HRM Oba Amb. Abidemi Toheeb Yissa Oyedele',
    title: 'Onimedu of Orimedu Kingdom, Oyetu I',
    image: '/leadership/oba-onimedu-orimedu.webp',
    history: [
      {
        paras: [
          `Orimedu Kingdom is a historic settlement located in the Ibeju-Lekki Local Government Area of Lagos State, South West Nigeria. Situated in a region that serves as a vibrant commercial nerve centre for Nigeria and Africa, Orimedu boasts a rich cultural heritage deeply rooted in Yoruba traditions.`,
        ],
      },
      {
        heading: 'Origin of the Name and the Founder',
        paras: [
          `The name Orimedu was coined by its founder, Prince Ladejobi, after discovering that the vast majority of the land consisted of rich, dark humus soil known locally as Imedu (or Ile dudu). Prince Ladejobi, a direct descendant of Oba Oranmiyan of Ile-Ife, migrated to the area in the late 14th century in search of a suitable settlement. His choice of location was guided by an oracle, which instructed that the new kingdom must lie between a river and the sea.`,
        ],
      },
      {
        heading: 'The Migration Journey',
        paras: [
          `A bold and skilled hunter, Prince Ladejobi embarked on the journey from Ile-Ife accompanied by his relatives, Ogbe, Sobokunrin, and Sifiyon, along with their followers and slaves. During the migration, he passed through the Oyo Empire, where he was received with royal honour as a blood relative. He later continued to Ijebu-Ode and settled temporarily at the Idewon Quarters.`,
          `Consulting the oracle once again, he was reminded that his final destination must be between a river and the sea. The group proceeded to the Epe riverbank, crossed to Oju-Ota (now Ojota), hunted through what is today known as Oke-Ogun Village, and finally arrived at Ebute-Orimedu.`,
        ],
      },
      {
        heading: 'Settlement and Key Events',
        paras: [
          `Upon reaching the bank of Orimedu Creek, Prince Ladejobi left his companions to scout for a suitable camping site. While he was away, his sister Ogbe was attacked and swallowed by a large fish. Prince Ladejobi tracked and killed the fish, retrieved the body of his sister from its belly, and performed traditional burial rites. The site of her burial is still known today as Oju Ogbe.`,
          `As a result of this tragedy, the consumption of Eja Osan (a species of fish) became a taboo in Orimedu.`,
          `Prince Ladejobi eventually moved his people to the chosen site, which he named Orimedu. He reigned as the first Oba and established the worship of several deities, including Oro and Olokun.`,
          `One notable event during this period involved his brothers, Sobokunrin and Sifiyon. While hunting on a sunny day, they discovered the tracks of a large wild animal at the bank of Orimedu River. They tracked and killed the animal at the bank of another nearby river, which they named Odo-Ogun Yo (the river where the god of iron answered their prayer). This river lies between present-day Ijede and Eleko towns. They carried parts of the animal back to Prince Ladejobi as proof of their success. With his permission and after further consultation with the oracle, Sobokunrin and Sifiyon settled in the area, naming it Ibere Kodo. To this day, Orimedu and Iberekodo maintain strong historical, cultural, and social ties.`,
        ],
      },
      {
        heading: '19th-Century Historical Context',
        paras: [
          `In 1859, during the reign of Kosoko (who was then in exile from Lagos Island), the Epe and Orimedu seashore served as a major slave port. Portuguese and other European traders came here to purchase slaves, who were then shipped to foreign lands. This occurred after the proclamation of the abolition of slavery by Oba Akintoye, backed by the British government, which led to conflict. Kosoko later returned to Lagos Island (settling at Epetedo) following a reconciliation with Oba Akintoye, while some of his entourage remained in the area.`,
        ],
      },
      {
        heading: 'Modern Orimedu',
        paras: [
          `Contemporary Orimedu is divided into two main quarters, Ijebu and Eko, with six sub-quarters: Oko-Ekun, Oke-Oshodi, Abejoye, Oke-Oba, Ipatun, and Oke-Popo.`,
        ],
      },
    ],
  },
  {
    slug: 'araromi',
    name: 'HRM Oba Olayemi Lukman Arowolo',
    title: 'Oba Gbadewolu of Araromi Kingdom',
    image: '/leadership/oba-arowolo-araromi.webp',
  },
  {
    slug: 'kayetoro',
    name: 'HRM Oba Saka Bakare',
    title: 'The Olu Kayetoro of Kayetoro Land',
    image: '/leadership/oba-bakare-kayetoro.webp',
  },
  {
    slug: 'debojo',
    name: 'Oba Ajibola Talabi Odugbesan',
    title: 'Onidebojo of Debojo Kingdom',
    image: '/leadership/oba-odugbesan-debojo.webp',
  },
  {
    slug: 'waliu-rasak',
    name: 'HRM Oba Waliu Rasak',
    title: 'Traditional Ruler, Ibeju-Lekki',
    image: '/leadership/oba-rasak.webp',
  },
  {
    slug: 'itedo',
    name: 'HRM Oba Tajudeen Afolabi Elemoro',
    title: 'The Onitedo of Itedo',
    image: '/leadership/oba-elemoro-itedo.webp',
  },
  {
    slug: 'lakowe',
    name: 'HRM Oba Akeem Olusegun Adisa Ojomu',
    title: 'The Onilakowe of Lakowe Kingdom',
    image: '/leadership/oba-ojomu-lakowe.webp',
  },
  {
    slug: 'akodo',
    name: 'HRM Oba Abdulhakeem Babatunde Olokodano',
    title: 'The Alakodo of Akodo',
    image: '/leadership/oba-olokodano-akodo.webp',
  },
  {
    slug: 'ogunfayo',
    name: 'Oba Dr. Mufutau Olanrewaju Adewunmi Idogun Larrys (Tunwase I)',
    title: 'Ologunfayo of Ogunfayo Kingdom',
    image: '/leadership/oba-idogun-ogunfayo.webp',
  },
]

/* Official order of the traditional rulers as supplied by the council.
   Rulers not yet matched to a stool on this list appear after these, in their
   existing order. Add new slugs here as further rulers are confirmed. */
const DISPLAY_ORDER = [
  'orimedu',      // Onimedu
  'itedo',        // Elemoro
  'araromi',      // Araromi
  'ogunfayo',     // Ologunfayo
  'lakowe',       // Onilakowe
  'debojo',       // Onidebojo
  'akodo',        // Alakodo
]

const rank = (slug: string) => {
  const i = DISPLAY_ORDER.indexOf(slug)
  return i === -1 ? DISPLAY_ORDER.length + 1 : i
}

export const RULERS: Ruler[] = [...RULERS_RAW].sort((a, b) => rank(a.slug) - rank(b.slug))

export function getRuler(slug: string): Ruler | undefined {
  return RULERS.find((r) => r.slug === slug)
}
