export type Member = {
  name: string   // "To be confirmed" shows a neutral placeholder card
  role?: string  // portfolio or office; omitted for non-cabinet members
  ward?: string  // legislative councillors only
  image?: string // /path.webp in public/
}

export type Section = {
  title: string
  blurb?: string
  members: Member[]
}

/* Official leadership data, from the council Protocol List and the printed
   Management, Supervisors and Special Advisers roster (2026).
   Portraits live in public/leadership/. People without a portrait yet render
   as clean initials cards; adding a photo later is a one-line change. */

/* --- Executive arm: sectioned (Leadership, Supervisors, Advisers, etc.) --- */
export const EXECUTIVE_SECTIONS: Section[] = [
  {
    title: 'Council Leadership',
    members: [
      { name: 'Hon. Abdullahi Sesan Olowa', role: 'Executive Chairman', image: '/chairman_on_landingpage.webp' },
      { name: 'To be confirmed', role: 'Vice Chairman' },
      { name: 'To be confirmed', role: 'Council Secretary' },
    ],
  },
  {
    title: 'Supervisors',
    blurb: 'Supervisory councillors appointed to lead the council portfolios.',
    members: [
      { name: 'Hon. Ogungbo Sofwan Temitope',        role: 'Supervisor for Environmental Services and Waste Management' },
      { name: 'Hon. Ajibola Elemoro',                role: 'Supervisor for Market & Revenue' },
      { name: 'Hon. Fatai Alonge',                   role: 'Supervisor for Housing & Tourism' },
      { name: 'Hon. Abisola Raolat Azeez',           role: 'Supervisor for WAPA', image: '/leadership/abisola-raolat-azeez.webp' },
      { name: 'Hon. Olusola Edalere',                role: 'Supervisor for Agric. & Social Services' },
      { name: 'Hon. Balogun Hakeem Oluwole',         role: 'Supervisor for Youth & Sports' },
      { name: 'Hon. Aje Saheed',                     role: 'Supervisor for Health' },
      { name: 'Hon. Balogun Abdulwaliu Oluwagbemi',  role: 'Supervisor for Budget, Planning & Statistics' },
      { name: 'Hon. Lasiru Sule',                    role: 'Supervisor for Information, Communication & Technology' },
      { name: 'Hon. Agbaje Sodiq Olajide',           role: 'Supervisor for Education & Library Services' },
    ],
  },
  {
    title: 'Special Advisers',
    members: [
      { name: 'Hon. Saheed Yusuf',                   role: 'Special Adviser for Agric & Social Services' },
      { name: 'Hon. Mrs. Wakilat Remilekun Odupe',   role: 'Special Adviser on Wealth Creation', image: '/leadership/wakilat-remilekun-odupe.webp' },
      { name: 'Hon. Nurudeen Adeboyejo',             role: 'Special Adviser on Political Affairs' },
      { name: 'Hon. Yusuf Mujaidu',                  role: 'Special Adviser on Chieftaincy Matters', image: '/leadership/yusuf-mujaidu.webp' },
      { name: 'Hon. Shakirat Bisola Musari',         role: 'Special Adviser on Business & Economic Dev.' },
    ],
  },
  {
    title: 'Non-Cabinet Members',
    members: [
      { name: 'Rafiu Sanni Eleku' },
      { name: 'Jimoh Azeez' },
      { name: 'Kazeem Rilwan Abolaji' },
    ],
  },
]

/* --- Legislative arm --- */
export const LEGISLATIVE: Member[] = [
  { name: 'Hon. Olayinka Mojeed Oluwafemi', role: 'Leader of the Council', ward: 'Ward F',  image: '/leadership/olayinka-mojeed-oluwafemi.webp' },
  { name: 'Hon. Musibau Shuaibu Olorunju',  role: 'Deputy Leader',         ward: 'Ward D',  image: '/leadership/musibau-shuaibu-olorunju.webp' },
  { name: 'Hon. Eletu Zainab Ayobola',      role: 'Majority Leader',       ward: 'Ward E',  image: '/leadership/eletu-zainab-ayobola.webp' },
  { name: 'Hon. Lawal Sebiu Alaba',         role: 'Chief Whip',            ward: 'Ward C2', image: '/leadership/lawal-sebiu-alaba.webp' },
  { name: 'Hon. Aromire Rasaki Abidemi',    role: 'Member',                ward: 'Ward A',  image: '/leadership/aromire-rasaki-abidemi.webp' },
  { name: 'Hon. Ogungbo Nurudeen Tunde',    role: 'Member',                ward: 'Ward B',  image: '/leadership/ogungbo-nurudeen-tunde.webp' },
  { name: 'Hon. Rufai Kafayat Abosede',     role: 'Member',                ward: 'Ward C1', image: '/leadership/rufai-kafayat-abosede.webp' },
]

/* --- Management arm: career civil service, in official roster order --- */
export const MANAGEMENT: Member[] = [
  { name: 'Dr. Adekoya Adesanya Augustine',        role: 'Council Manager' },
  { name: 'Mr. Lagbalu Adesegun',                  role: 'HOD, Environmental Services',                      image: '/leadership/lagbalu-adesegun.webp' },
  { name: 'Mrs. Osun Yetunde Shakirat',            role: 'Council Treasurer' },
  { name: 'Mr. Ajayi Babajide Muhammed',           role: 'Deputy Director, Administration & Human Resources', image: '/leadership/ajayi-babajide-muhammed.webp' },
  { name: 'Mrs. Belo Ganiat Abiola',               role: 'HOD, Education & Library Studies',                 image: '/leadership/belo-ganiat-abiola.webp' },
  { name: 'Dr. Agboola Bidemi',                    role: 'Medical Officer of Health',                        image: '/leadership/agboola-bidemi.webp' },
  { name: 'Mrs. Temitope Adesokan',                role: 'Internal Auditor',                                 image: '/leadership/temitope-adesokan.webp' },
  { name: 'Mrs. AbdulAzeez Funmilola B.',          role: 'HOD, Agric. Rural & Social Services' },
  { name: 'Mr. Badmus Hamzat',                     role: 'Clerk of the House' },
  { name: 'Barr. Damilola Lawson',                 role: 'Legal Officer',                                    image: '/leadership/damilola-lawson.webp' },
  { name: 'Engr. Kamiyo Adetola Tijani',           role: 'Council Engineer',                                 image: '/leadership/kamiyo-adetola-tijani.webp' },
  { name: 'Mrs. Bokoh Sewanu Abosede',             role: 'HOD, WAPA',                                        image: '/leadership/bokoh-sewanu-abosede.webp' },
  { name: 'Mr. Balogun Adewale Alli',              role: 'Area Officer (Bogije)' },
  { name: 'Miss Issa R. Titilola',                 role: 'HOU, Procurement',                                 image: '/leadership/issa-r-titilola.webp' },
  { name: 'Mrs. Ibraheem-Edunjobi Moriam Olaide',  role: 'HOD, Budget, Planning and Statistics',            image: '/leadership/ibraheem-edunjobi-moriam-olaide.webp' },
  { name: 'Mr. Olaojubu Nathaniel Idowu',          role: 'Public Affairs Officer',                           image: '/leadership/oladjobu-nathaniel-idowu.webp' },
  { name: 'Mrs. Aragbada Omolola Taiwo',           role: 'Area Officer (Ogunfayo)' },
  { name: 'Mr. Okesanya Olumide Adedapo',          role: 'Area Officer (Coastal)' },
  { name: 'Mr. Odumokun Olusegun',                 role: 'Area Officer (Ibeju)',                             image: '/leadership/odumokun-olusegun.webp' },
  { name: 'Mrs. Sarumi Oluwatosin Abidemi',        role: 'HOU, ICT',                                         image: '/leadership/sarumi-oluwatosin-abidemi.webp' },
  { name: 'Mr. Adewale Omole Sheriff',             role: 'Tourism Officer',                                  image: '/leadership/adewale-omole-sheriff.webp' },
  { name: 'Mr. Edalere Oladeinde Wasiu',           role: 'Second Signatory' },
  { name: 'Mrs. Oketoyinbo Taiwo Adebowale',       role: 'Marriage Registrar',                               image: '/leadership/oketoyinbo-taiwo-adebowale.webp' },
  { name: 'Mr. Lawal Liafis Adaranijo',            role: 'NULGE Chairman' },
]
