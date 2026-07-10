export type Member = {
  name: string   // "To be confirmed" shows a neutral placeholder card
  role: string
  ward?: string  // legislative councillors only
  image?: string // /path.webp in public/
}

/* Real leadership data from the official Protocol List (2026).
   Portraits live in public/leadership/. */

export const EXECUTIVE: Member[] = [
  { name: 'Hon. Abdullahi Sesan Olowa', role: 'Executive Chairman', image: '/chairman_on_landingpage.webp' },
  { name: 'To be confirmed', role: 'Vice Chairman' },
  { name: 'To be confirmed', role: 'Council Secretary' },
  { name: 'Hon. Abisola Raolat Azeez', role: 'Supervisor for WAPA', image: '/leadership/abisola-raolat-azeez.webp' },
  { name: 'Hon. Mrs. Wakilat Remilekun Odupe', role: 'Special Adviser on Wealth Creation', image: '/leadership/wakilat-remilekun-odupe.webp' },
  { name: 'Hon. Yusuf Mujaidu', role: 'Special Adviser on Chieftaincy Matters', image: '/leadership/yusuf-mujaidu.webp' },
]

export const LEGISLATIVE: Member[] = [
  { name: 'Hon. Olayinka Mojeed Oluwafemi', role: 'Leader of the Council', ward: 'Ward F',  image: '/leadership/olayinka-mojeed-oluwafemi.webp' },
  { name: 'Hon. Musibau Shuaibu Olorunju',  role: 'Deputy Leader',         ward: 'Ward D',  image: '/leadership/musibau-shuaibu-olorunju.webp' },
  { name: 'Hon. Eletu Zainab Ayobola',      role: 'Majority Leader',       ward: 'Ward E',  image: '/leadership/eletu-zainab-ayobola.webp' },
  { name: 'Hon. Lawal Sebiu Alaba',         role: 'Chief Whip',            ward: 'Ward C2', image: '/leadership/lawal-sebiu-alaba.webp' },
  { name: 'Hon. Aromire Rasaki Abidemi',    role: 'Member',                ward: 'Ward A',  image: '/leadership/aromire-rasaki-abidemi.webp' },
  { name: 'Hon. Ogungbo Nurudeen Tunde',    role: 'Member',                ward: 'Ward B',  image: '/leadership/ogungbo-nurudeen-tunde.webp' },
  { name: 'Hon. Rufai Kafayat Abosede',     role: 'Member',                ward: 'Ward C1', image: '/leadership/rufai-kafayat-abosede.webp' },
]

export const MANAGEMENT: Member[] = [
  { name: 'Mr. Lagbalu Adesegun',                role: 'HOD, Environment Services',                        image: '/leadership/lagbalu-adesegun.webp' },
  { name: 'Engr. Kamiyo Adetola Tijani',         role: 'Council Engineer',                                 image: '/leadership/kamiyo-adetola-tijani.webp' },
  { name: 'Mr. Ajayi Babajide Muhammed',         role: 'Deputy Director, Administration & Human Resources', image: '/leadership/ajayi-babajide-muhammed.webp' },
  { name: 'Mrs. Temitope Adesokan',              role: 'Internal Auditor',                                 image: '/leadership/temitope-adesokan.webp' },
  { name: 'Mrs. Sarumi Oluwatosin Abidemi',      role: 'HOU, ICT',                                         image: '/leadership/sarumi-oluwatosin-abidemi.webp' },
  { name: 'Dr. Agboola Bidemi',                  role: 'Medical Officer of Health',                        image: '/leadership/agboola-bidemi.webp' },
  { name: 'Barr. Damilola Lawson',               role: 'Legal Officer',                                    image: '/leadership/damilola-lawson.webp' },
  { name: 'Mr. Oladjobu Nathaniel Idowu',        role: 'Public Affairs Officer',                           image: '/leadership/oladjobu-nathaniel-idowu.webp' },
  { name: 'Mrs. Ibraheem-Edunjobi Moriam Olaide', role: 'HOD, Budget, Planning and Statistics',            image: '/leadership/ibraheem-edunjobi-moriam-olaide.webp' },
  { name: 'Miss Issa R. Titilola',               role: 'HOU, Procurement',                                 image: '/leadership/issa-r-titilola.webp' },
  { name: 'Mrs. Belo Ganiat Abiola',             role: 'HOD, Education & Library Studies',                 image: '/leadership/belo-ganiat-abiola.webp' },
  { name: 'Mr. Adewale Omole Sheriff',           role: 'Tourism Officer',                                  image: '/leadership/adewale-omole-sheriff.webp' },
  { name: 'Mrs. Bokoh Sewanu Abosede',           role: 'HOD, WAPA',                                        image: '/leadership/bokoh-sewanu-abosede.webp' },
  { name: 'Mrs. Oketoyinbo Taiwo Adebowale',     role: 'Marriage Registrar',                               image: '/leadership/oketoyinbo-taiwo-adebowale.webp' },
  { name: 'Mr. Odumokun Olusegun',               role: 'Area Officer, Ibeju',                              image: '/leadership/odumokun-olusegun.webp' },
]
