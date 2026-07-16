export type Pillar = {
  slug: string
  letter: string
  title: string
  tagline: string
  icon: 'security' | 'health' | 'infrastructure' | 'environment' | 'education' | 'economy' | 'digital'
  cover: string
  summary: string          // VERBATIM manifesto pillar quote
  body: string[]
  prioritiesLabel: string  // the manifesto section heading
  priorities: string[]     // verbatim manifesto grid items
}

// Summaries are quoted verbatim from the 2025-2029 manifesto pillar pages.
export const PILLARS: Pillar[] = [
  {
    slug: 'security',
    letter: 'S',
    title: 'Security',
    tagline: 'Securing our future: a safer, stronger Ibeju-Lekki.',
    icon: 'security',
    cover: '/shieeld/shieeld-security.webp',
    summary: 'Safe communities. Stronger partnerships. A security system built for the people, by the people, with the people.',
    body: [
      'At the heart of the plan is a 24/7 Central Security Command Centre for surveillance, emergency response and coordination. It enables timely incident reporting, strategic intelligence gathering and smart crime mapping, backed by community-centred surveillance for early detection and swift intervention.',
      'The council will deepen collaboration with the police, civil defence and local outfits, align local operations with the Lagos State Security Trust Fund model, equip the Ibeju-Lekki Community Corps (Folumo) with patrol motorbikes, and establish a dedicated fire service unit for disaster response.',
    ],
    prioritiesLabel: 'Our Priorities',
    priorities: [
      '24/7 Central Security Command Centre',
      'Collaboration with Security Agencies',
      'Equip and Upscale Ibeju-Lekki Community Corps (Folumo)',
      'Logistics Support for Patrol and Safety Operations',
      'Establishment of Ibeju-Lekki Fire Service Unit',
    ],
  },
  {
    slug: 'health',
    letter: 'H',
    title: 'Health',
    tagline: 'Expanding healthcare access.',
    icon: 'health',
    cover: '/shieeld/shieeld-health.webp',
    summary: 'Delivering quality, affordable, and inclusive healthcare through infrastructure renewal and community-based health insurance coverage',
    body: [
      'Ibeju-Lekki has 14 primary health centres, 9 of them already fully upgraded. The next term completes the rest, including Iberekodo, Otunla, Oko Oba and Debojo, so every facility meets one standard of care, safety and accessibility, with priority for underserved and riverine areas.',
      'Plans include a flagship Maternal and Child Hospital, rapid-response mobile clinics, solar-powered centres, more frontline health workers, and a Community Health Insurance Scheme aligned with the Lagos State Ilera Eko initiative for indigent and vulnerable residents.',
    ],
    prioritiesLabel: 'Our Programmes',
    priorities: [
      'Deployment of Rapid Response Mobile Clinics',
      'Leveraging Technology to Expand and Manage Healthcare Access',
      'Solar Electrification of Primary Health Centres',
      'Upgrading Primary Healthcare Centres Infrastructure & Facilities',
      'Strengthening the Healthcare Workforce',
    ],
  },
  {
    slug: 'infrastructure',
    letter: 'I',
    title: 'Infrastructural Development',
    tagline: 'Deepening infrastructure renewal.',
    icon: 'infrastructure',
    cover: '/shieeld/shieeld-infrastructure.webp',
    summary: 'Enhancing quality of life through strategic road connectivity, accessible housing, reliable power, and safety infrastructure in Ibeju-Lekki.',
    body: [
      'Building on first-term roads in Orimedu, Idado, Igando and Lakowe, the Rural-Urban Linkage Expansion Programme will upgrade strategic roads of at least 500 metres across at least 10 wards, each with functional drainage, durable surfacing and solar street lighting, protected by a new Ibeju-Lekki Road Maintenance Agency.',
      'A Build-and-Lease Housing Initiative with private developers targets affordable home ownership and rental, while a Power Sector Renewal Drive distributes transformers, pursues stalled transmission lines and coastal electrification, alongside clean water, tertiary drainage and a first-ever fire station.',
    ],
    prioritiesLabel: 'Our Projects',
    priorities: [
      'Rehabilitation and Construction of Roads',
      'Provision of Transformers for Stable Power Supply',
      'Establishment of Ibeju-Lekki Road Maintenance Agency',
      'Installation of Solar-Powered Street Lights',
      'Improved Access to Clean Water',
      'Rehabilitation & Construction of Tertiary Drainages',
      'Establishment of Ibeju-Lekki Housing Scheme',
    ],
  },
  {
    slug: 'environment',
    letter: 'E',
    title: 'Environmental Sustainability',
    tagline: 'Community-driven environmental initiatives.',
    icon: 'environment',
    cover: '/shieeld/shieeld-environment.webp',
    summary: 'Safeguarding our environment through green infrastructure, smart waste solutions, and climate-resilient initiatives that protect lives, and future generations.',
    body: [
      'First-term efforts, including monthly sanitation drives, the Keke Jaja waste tricycles, the Cleaner Waterways Campaign and over 400 environmental workers, will scale up. From 12,000 bags cleared monthly with 20 tricycles, the goal is 40,000 bags, by procuring 3 high-capacity compactors, 4 industrial Dino bins and 20 more Keke Jaja tricycles.',
      'Through public-private partnerships the council will set up Transfer Loading Stations and recycling, run scheduled desilting and market sanitation, build modern public toilets, and launch the Green Ibeju Project for tree planting, coastal protection and waste-to-wealth programmes.',
    ],
    prioritiesLabel: 'Our Focus Areas',
    priorities: [
      'Comprehensive Waste Management and Flood Control',
      'Promotion of Recyclable Waste Practices',
      'Deployment of Waste Compactors & Garbage Collection Tricycle (Keke Jaja)',
      'Strengthening Environmental Policing',
      'Greening Through Tree Planting Initiatives',
      'Community-Based Sanitation Campaigns',
      'Establishment of Eco-Friendly Parks and Green Zones',
    ],
  },
  {
    slug: 'education',
    letter: 'E',
    title: 'Education & Youth Development',
    tagline: 'Empowering the next generation.',
    icon: 'education',
    cover: '/shieeld/shieeld-education.webp',
    summary: 'Empowering the next generation through digital learning, innovative education models, and youth-centered economic opportunities.',
    body: [
      'First-term classroom rehabilitation, learning materials, scholarships and bursaries continue, anchored by new digitally enabled Ibeju-Lekki Model Schools designed for 21st-century learning.',
      'The Ibeju Digital Learning Initiative and Digital Innovation Hubs offer short, high-impact training in digital marketing, content creation, 2D/3D animation, web, coding and app development, and music production, aiming to make youth job-ready in 1 to 3 months, with vocational starter kits and regular employment and entrepreneurship fairs.',
    ],
    prioritiesLabel: 'Our Initiatives',
    priorities: [
      'Establishment of Model Primary Schools',
      'Sports and Recreation Centres',
      'Scholarship Programs for Indigent Students',
      'Provision of Educational Materials',
      'Establishment of Innovation Hub',
      'Implementation of Skills Acquisition Programs for Youth Empowerment',
    ],
  },
  {
    slug: 'local-economy',
    letter: 'L',
    title: 'Local Economy',
    tagline: 'Economic empowerment and enterprise support.',
    icon: 'economy',
    cover: '/shieeld/shieeld-local-economy.webp',
    summary: 'Driving inclusive prosperity through support for MSMEs, structured market systems, agro-processing, and tourism-led growth.',
    body: [
      'Building on first-term grants, cooperative loans and agricultural processing for cassava and plantain farmers, a Regional Cooperative Development Fund, seeded by the council and structured to grow toward a 100 million naira portfolio, will provide flexible finance and advisory services to community enterprises.',
      'A Market Restructuring Programme develops specialised markets such as cattle markets, auto-parts hubs and foodstuff clusters, plus structured motor parks and bus terminals, quarterly trade fairs and expos, and tourism-led growth through entertainment hubs, beach resorts, cultural heritage centres and seasonal festivals.',
    ],
    prioritiesLabel: 'Our Intervention',
    priorities: [
      'SME Funding and Support',
      'Promotion of Local Trade Expositions',
      'Implementation of Agricultural Schemes',
      'Development of Strategic Market Hubs',
      'Promotion of Tourism and Cultural Heritage',
    ],
  },
  {
    slug: 'digital-governance',
    letter: 'D',
    title: 'Digital Governance & Civic Participation',
    tagline: 'Build a smarter and participatory governance.',
    icon: 'digital',
    cover: '/shieeld/shieeld-digital-governance.webp',
    summary: 'Strengthening public trust through transparent governance, inclusive decision-making, and technology-driven citizen engagement.',
    body: [
      'First-term digital transformation, including business registration and enumeration systems that boosted internally generated revenue, leads to the Ibeju-Lekki Digital Civic Centre on web, Android and iOS: lodge complaints, track capital projects by ward, join community polls and get service updates, backed by a Local Government Response Team.',
      'Quarterly Public Town Halls and ward-based Community Budget Councils will make budgeting a community affair, with simplified budget summaries in English and Yoruba, and a Monitoring, Evaluation and Transparency Dashboard tracking response times, top-requested projects, and resolved versus pending issues.',
    ],
    prioritiesLabel: 'Our Models',
    priorities: [
      'Establishment of Ibeju-Lekki Digital Civic Centre',
      'Automated Revenue Generation and Administration',
      'Performance Dashboard',
    ],
  },
]
