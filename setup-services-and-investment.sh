#!/usr/bin/env bash
# ============================================================================
# setup-services-and-investment.sh
# Six of the eight requested changes. The other two are blocked on answers.
#
#   Resources renamed to Services in the header (footer already said Services)
#   Services gains Pay Levies, Street Naming and Birth Certification
#   External links in the header and footer open in a new tab
#   New placeholder pages: /resources/street-naming, /resources/birth-certification
#   Supervisor short profiles: optional bio field wired through, renders when set
#   Investment page rebuilt with the five landmark photographs and the council
#     Housing Development Opportunities text
#   Portraits attached for Hon. Ogungbo Sofwan Temitope and Jimoh Azeez
#
# NOT included, waiting on answers:
#   Executive Members rename, Eleko Isles rename, third portrait name
#
# Requires:  bash setup-batch-assets.sh   (puts the images in public/)
# Run from project root:  bash setup-services-and-investment.sh
# Undo after push:  git revert HEAD && git push
# ============================================================================
set -euo pipefail
[ -f package.json ] || { echo "ERROR: run from project root."; exit 1; }

echo "== Checking assets =="
MISSING=0
for f in public/images/investment/dangote-refinery.jpg \
         public/images/investment/lekki-deep-sea-port.jpg \
         public/images/investment/lekki-free-zone-gate.jpg \
         public/images/investment/lagos-free-zone.jpg \
         public/images/investment/coastal-corridor-aerial.jpg \
         public/leadership/ogungbo-sofwan-temitope.webp \
         public/leadership/jimoh-azeez.webp ; do
  [ -f "$f" ] || { echo "  MISSING $f"; MISSING=1; }
done
[ "$MISSING" = "0" ] || { echo; echo "ERROR: run  bash setup-batch-assets.sh  first."; exit 1; }
echo "  OK, all assets present."

mkdir -p app/resources/street-naming app/resources/birth-certification scripts

echo
echo "== Writing the two new Services pages =="
cat > app/resources/street-naming/page.tsx << 'SN_EOF'
import PagePlaceholder from '@/components/PagePlaceholder'

export const metadata = {
  title: 'Street Naming | Ibeju-Lekki Local Government',
  description:
    'Apply for street naming and street name validation in Ibeju-Lekki Local Government Area, Lagos State.',
}

export default function Page() {
  return (
    <PagePlaceholder
      title="Street Naming"
      sectionLabel="Services"
      description="Street naming and street name validation for communities, estates and developments across Ibeju-Lekki Local Government Area."
      variant="form"
    />
  )
}
SN_EOF
cat > app/resources/birth-certification/page.tsx << 'BC_EOF'
import PagePlaceholder from '@/components/PagePlaceholder'

export const metadata = {
  title: 'Birth Certification | Ibeju-Lekki Local Government',
  description:
    'Register a birth and obtain a birth attestation or certificate from Ibeju-Lekki Local Government Area, Lagos State.',
}

export default function Page() {
  return (
    <PagePlaceholder
      title="Birth Certification"
      sectionLabel="Services"
      description="Birth registration and attestation services for residents of Ibeju-Lekki Local Government Area."
      variant="form"
    />
  )
}
BC_EOF
echo "  OK   /resources/street-naming"
echo "  OK   /resources/birth-certification"

echo
echo "== Patching header, footer, roster and team page =="
cat > scripts/p1.cjs << 'P1_EOF'
const fs = require('fs');
const log = [];
const ok = (m) => log.push('  OK   ' + m);
const noop = (m) => log.push('  NOOP ' + m);
const warn = (m) => log.push('  WARN ' + m);
const read = (p) => { try { return fs.readFileSync(p, 'utf8'); } catch (e) { return null; } };

/* ================================================================
 * 1. HEADER - Resources becomes Services, gains three entries,
 *    and external links open in a new tab.
 * ================================================================ */
(function header() {
  const P = 'components/Header.tsx';
  let s = read(P);
  if (s === null) { warn(P + ' missing'); return; }

  if (s.includes("label: 'Services'")) { noop('header already has the Services menu'); }
  else {
    /* Type the nav explicitly. Without this, TypeScript infers a union where
       only some children carry `external`, and strict mode rejects the access. */
    const declOld = 'const NAV_ITEMS = [';
    const declNew = [
      'type NavChild = { label: string; href: string; external?: boolean };',
      'type NavItem = { label: string; href: string; children?: NavChild[] };',
      '',
      'const NAV_ITEMS: NavItem[] = [',
    ].join('\n');
    if (s.includes(declOld) && !s.includes('type NavChild')) {
      s = s.replace(declOld, declNew);
      ok('header: NAV_ITEMS given an explicit type');
    }

    const old = [
      "  {",
      "    label: 'Resources',",
      "    href: '#',",
      "    children: [",
      "      { label: 'Revenue Portal',   href: 'https://portal.ibejulekkilga.com' },",
      "      { label: 'Waste Collection', href: '/resources/waste' },",
      "      { label: 'Career & Jobs',    href: '/resources/careers' },",
      "    ],",
      "  },",
    ].join('\n');
    const neu = [
      "  {",
      "    label: 'Services',",
      "    href: '#',",
      "    children: [",
      "      { label: 'Pay Levies',          href: 'https://portal.ibejulekkilga.com', external: true },",
      "      { label: 'Revenue Portal',      href: 'https://portal.ibejulekkilga.com', external: true },",
      "      { label: 'Street Naming',       href: '/resources/street-naming' },",
      "      { label: 'Birth Certification', href: '/resources/birth-certification' },",
      "      { label: 'Waste Collection',    href: '/resources/waste' },",
      "      { label: 'Career & Jobs',       href: '/resources/careers' },",
      "    ],",
      "  },",
    ].join('\n');
    if (s.includes(old)) { s = s.replace(old, neu); ok('header: Resources renamed to Services, three entries added'); }
    else { warn('header Resources block not found; menu unchanged'); }
  }

  /* External dropdown links must open in a new tab. */
  if (s.includes('child.external')) { noop('header external links already handled'); }
  else {
    const old = [
      "          {item.children.map((child) => (",
      "            <Link",
      "              key={child.href}",
      "              href={child.href}",
      "              className=\"block px-4 py-2.5 text-[12.5px] font-medium text-brand-ink/80 transition-colors hover:bg-brand-yellow/10 hover:text-brand-ink\"",
      "            >",
      "              {child.label}",
      "            </Link>",
      "          ))}",
    ].join('\n');
    const neu = [
      "          {item.children.map((child) => {",
      "            const cls =",
      "              'block px-4 py-2.5 text-[12.5px] font-medium text-brand-ink/80 transition-colors hover:bg-brand-yellow/10 hover:text-brand-ink';",
      "            const isExternal = child.external || /^https?:\\/\\//.test(child.href);",
      "            return isExternal ? (",
      "              <a",
      "                key={child.href}",
      "                href={child.href}",
      "                target=\"_blank\"",
      "                rel=\"noopener noreferrer\"",
      "                className={cls + ' flex items-center justify-between gap-2'}",
      "              >",
      "                {child.label}",
      "                <ExternalLink size={11} className=\"text-black/30\" />",
      "              </a>",
      "            ) : (",
      "              <Link key={child.href} href={child.href} className={cls}>",
      "                {child.label}",
      "              </Link>",
      "            );",
      "          })}",
    ].join('\n');
    if (s.includes(old)) {
      s = s.replace(old, neu);
      const imp = "import { ChevronDown, Phone, Mail, Clock, Circle, CreditCard } from 'lucide-react';";
      if (s.includes(imp)) {
        s = s.replace(imp, "import { ChevronDown, Phone, Mail, Clock, Circle, CreditCard, ExternalLink } from 'lucide-react';");
      } else { warn('lucide import line not found in header'); }
      ok('header: external links open in a new tab');
    } else { warn('header dropdown render block not found'); }
  }

  fs.writeFileSync(P, s);
})();

/* ================================================================
 * 2. FOOTER - Services column gains the same three entries.
 * ================================================================ */
(function footer() {
  const P = 'components/Footer.tsx';
  let s = read(P);
  if (s === null) { warn(P + ' missing'); return; }
  if (s.includes("Street Naming")) { noop('footer Services column already updated'); return; }

  const old = [
    "    links: [",
    "      { label: 'Pay Levies',          href: 'https://portal.ibejulekkilga.com', external: true },",
    "      { label: 'Revenue Portal',      href: '/resources/revenue' },",
    "      { label: 'Waste Collection',    href: '/resources/waste' },",
    "      { label: 'Download Forms',      href: '/resources/forms' },",
    "      { label: 'Report an Issue',     href: '/report' },",
    "    ],",
  ].join('\n');
  const neu = [
    "    links: [",
    "      { label: 'Pay Levies',          href: 'https://portal.ibejulekkilga.com', external: true },",
    "      { label: 'Revenue Portal',      href: 'https://portal.ibejulekkilga.com', external: true },",
    "      { label: 'Street Naming',       href: '/resources/street-naming' },",
    "      { label: 'Birth Certification', href: '/resources/birth-certification' },",
    "      { label: 'Waste Collection',    href: '/resources/waste' },",
    "      { label: 'Download Forms',      href: '/resources/forms' },",
    "      { label: 'Report an Issue',     href: '/report' },",
    "    ],",
  ].join('\n');
  if (s.includes(old)) { fs.writeFileSync(P, s.replace(old, neu)); ok('footer: Street Naming and Birth Certification added to Services'); }
  else warn('footer Services block not found in its expected form');
})();

/* ================================================================
 * 3. MEMBER TYPE gains an optional short profile, and TeamPage
 *    renders it when present. No content yet, just the plumbing.
 * ================================================================ */
(function bios() {
  const P = 'lib/cabinet.ts';
  let s = read(P);
  if (s === null) { warn(P + ' missing'); return; }

  if (s.includes('bio?: string')) { noop('Member type already has a bio field'); }
  else {
    const old = "  image?: string // /path.webp in public/";
    const neu = [
      "  image?: string // /path.webp in public/",
      "  bio?: string   // short profile, two or three sentences; shown on the team card",
    ].join('\n');
    if (s.includes(old)) { s = s.replace(old, neu); fs.writeFileSync(P, s); ok('Member type: optional bio field added'); }
    else warn('Member type image line not found');
  }

  /* Portraits for two of the three new photographs. */
  let t = read(P);
  const EDITS = [
    {
      who: 'Hon. Ogungbo Sofwan Temitope',
      from: "      { name: 'Hon. Ogungbo Sofwan Temitope',        role: 'Supervisor for Environmental Services and Waste Management' },",
      to:   "      { name: 'Hon. Ogungbo Sofwan Temitope',        role: 'Supervisor for Environmental Services and Waste Management', image: '/leadership/ogungbo-sofwan-temitope.webp' },",
    },
    {
      who: 'Jimoh Azeez',
      from: "      { name: 'Jimoh Azeez' },",
      to:   "      { name: 'Jimoh Azeez', image: '/leadership/jimoh-azeez.webp' },",
    },
  ];
  let changed = 0;
  for (const e of EDITS) {
    if (t.includes(e.to)) { noop(e.who + ' already has a portrait'); continue; }
    if (!t.includes(e.from)) { warn(e.who + ' entry not found in its expected form'); continue; }
    t = t.replace(e.from, e.to); changed++; ok(e.who + ' portrait attached');
  }
  if (changed) fs.writeFileSync(P, t);
})();

(function teamPage() {
  const P = 'components/TeamPage.tsx';
  let s = read(P);
  if (s === null) { warn(P + ' missing'); return; }
  if (s.includes('m.bio')) { noop('TeamPage already renders short profiles'); return; }

  const old = [
    "        {m.ward ? (",
    "          <span className=\"mt-2 inline-block rounded-full bg-black/[0.05] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-black/50\">",
    "            {m.ward}",
    "          </span>",
    "        ) : null}",
  ].join('\n');
  const neu = [
    "        {m.ward ? (",
    "          <span className=\"mt-2 inline-block rounded-full bg-black/[0.05] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-black/50\">",
    "            {m.ward}",
    "          </span>",
    "        ) : null}",
    "        {m.bio ? (",
    "          <p className=\"mt-2 text-[11px] sm:text-[11.5px] leading-[1.65] text-black/50\">{m.bio}</p>",
    "        ) : null}",
  ].join('\n');
  if (s.includes(old)) { fs.writeFileSync(P, s.replace(old, neu)); ok('TeamPage: short profiles render when a bio is present'); }
  else warn('TeamPage ward block not found; bio rendering skipped');
})();

console.log(log.join('\n') || '  (no changes)');
P1_EOF
node scripts/p1.cjs
rm -f scripts/p1.cjs

echo
echo "== Rebuilding the Investment Opportunities page =="
cat > scripts/p2.cjs << 'P2_EOF'
const fs = require('fs');
const log = [];
const ok = (m) => log.push('  OK   ' + m);
const noop = (m) => log.push('  NOOP ' + m);
const warn = (m) => log.push('  WARN ' + m);

const P = 'app/opportunities/investment/page.tsx';
let s;
try { s = fs.readFileSync(P, 'utf8'); } catch (e) { console.log('  WARN ' + P + ' missing'); process.exit(0); }

if (s.includes('LANDMARKS')) { console.log('  NOOP landmark photo section already present'); process.exit(0); }

/* Imports. The existing INVESTMENTS grid is left untouched below. */
const impOld = "import Link from 'next/link'\nimport { ArrowRight, Building2 } from 'lucide-react'";
const impNew = "import Link from 'next/link'\nimport Image from 'next/image'\nimport { ArrowRight, Building2 } from 'lucide-react'";
if (!s.includes(impOld)) { console.log('  WARN import anchor not found; nothing changed'); process.exit(0); }
s = s.replace(impOld, impNew);

/* Landmark data, wording taken from the council housing development document. */
const DATA = [
  "",
  "/* Landmark projects, with wording from the council's Housing Development",
  "   Opportunities paper. Photographs live in public/images/investment/. */",
  "const LANDMARKS = [",
  "  {",
  "    name: 'Dangote Refinery and Petrochemical Complex',",
  "    image: '/images/investment/dangote-refinery.jpg',",
  "    alt: 'The Dangote Petroleum Refinery within the Lekki Free Zone',",
  "    body:",
  "      'The Dangote Petroleum Refinery is Africa\\u2019s largest refinery and the world\\u2019s largest single-train refinery, located within the Lekki Free Zone. The refinery has a processing capacity of approximately 650,000 barrels of crude oil per day and occupies thousands of hectares of land within Ibeju-Lekki. The project has created thousands of direct and indirect jobs, attracting workers and businesses that require quality housing and residential communities.',",
  "  },",
  "  {",
  "    name: 'Lekki Deep Sea Port',",
  "    image: '/images/investment/lekki-deep-sea-port.jpg',",
  "    alt: 'Aerial view of the Lekki Deep Sea Port',",
  "    body:",
  "      'The Lekki Deep Sea Port is one of the largest and most modern seaports in West Africa. The port is expected to facilitate trade, logistics, manufacturing, and export activities while generating significant employment opportunities. Its operations continue to attract businesses and professionals into the area, increasing demand for residential developments.',",
  "  },",
  "  {",
  "    name: 'Lagos Free Zone and Industrial Corridor',",
  "    image: '/images/investment/lekki-free-zone-gate.jpg',",
  "    alt: 'Entrance to the Lekki Free Zone',",
  "    body:",
  "      'The Lagos Free Zone and the broader Lekki Free Trade Zone have become major destinations for manufacturing, logistics, technology, and industrial investments. These economic activities are generating employment and driving population growth, creating sustained demand for affordable, middle-income, and luxury housing developments.',",
  "  },",
  "  {",
  "    name: 'Proposed Lekki International Airport',",
  "    image: '/images/investment/lagos-free-zone.jpg',",
  "    alt: 'Industrial corridor road within the Lagos Free Zone',",
  "    body:",
  "      'The proposed international airport project is expected to further accelerate economic growth and increase the attractiveness of Ibeju-Lekki as a residential and business destination. The airport is anticipated to stimulate demand for residential estates, hotels, serviced apartments, and commercial developments throughout the corridor.',",
  "  },",
  "  {",
  "    name: 'Lagos-Calabar Coastal Highway',",
  "    image: '/images/investment/coastal-corridor-aerial.jpg',",
  "    alt: 'Aerial view of the coastal industrial corridor in Ibeju-Lekki',",
  "    body:",
  "      'The ongoing Coastal Highway project will improve connectivity between Lagos and other coastal states, enhancing accessibility and property values throughout Ibeju-Lekki. Improved transportation infrastructure is expected to unlock new residential development opportunities and support the growth of emerging communities.',",
  "  },",
  "]",
  "",
  "const HOUSING_SEGMENTS = [",
  "  'Affordable Housing Estates',",
  "  'Middle-Income Residential Communities',",
  "  'Luxury Residential Estates',",
  "  'Smart City Developments',",
  "  'Mixed-Use Communities',",
  "  'Staff Housing for Industrial Workers',",
  "  'Serviced Apartments',",
  "  'Student Accommodation',",
  "  'Retirement Communities',",
  "  'Waterfront Residential Developments',",
  "]",
  "",
].join('\n');

const metaAnchor = 'export const metadata = {';
if (!s.includes(metaAnchor)) { console.log('  WARN metadata anchor not found'); process.exit(0); }
s = s.replace(metaAnchor, DATA + metaAnchor);
ok('landmark and housing segment data added');

/* The new sections go above the existing INVESTMENTS card grid. */
const gridAnchor = '        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">';
if (!s.includes(gridAnchor)) { console.log('  WARN grid section anchor not found'); fs.writeFileSync(P, s); process.exit(0); }

const NEW = [
  '        {/* Landmark projects driving demand */}',
  '        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 pt-12 sm:pt-16">',
  '          <div className="flex items-center gap-3 mb-3">',
  '            <span className="h-px w-8 bg-brand-yellow" aria-hidden="true" />',
  '            <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-black/45">Landmark Projects</span>',
  '          </div>',
  '          <h2 className="text-[clamp(1.3rem,3.4vw,1.9rem)] font-extrabold text-brand-ink tracking-tight mb-5">',
  '            The projects driving demand',
  '          </h2>',
  '          <p className="max-w-3xl text-[14.5px] sm:text-[15px] text-black/70 leading-[1.85] mb-4">',
  '            Ibeju-Lekki has become the most promising real estate growth corridor in Lagos State and one',
  '            of the fastest-growing investment destinations in Africa. The area is undergoing a remarkable',
  '            transformation driven by massive public and private sector investments, creating unprecedented',
  '            opportunities for residential, commercial, and mixed-use housing developments.',
  '          </p>',
  '          <p className="max-w-3xl text-[14.5px] sm:text-[15px] text-black/70 leading-[1.85] mb-10">',
  '            The emergence of major economic and infrastructure projects has significantly increased demand',
  '            for housing, creating opportunities for developers, investors, mortgage institutions, and',
  '            construction companies to participate in the area&apos;s growth story. The increasing influx of',
  '            workers, professionals, business owners, expatriates, and investors is expected to sustain',
  '            housing demand for decades.',
  '          </p>',
  '',
  '          <div className="space-y-10 sm:space-y-14">',
  '            {LANDMARKS.map((l, i) => (',
  '              <article key={l.name} className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8 items-center">',
  '                <div className={`relative aspect-[16/10] overflow-hidden rounded-2xl border border-black/10 bg-brand-cream ${i % 2 ? \'lg:order-2\' : \'\'}`}>',
  '                  <Image',
  '                    src={l.image}',
  '                    alt={l.alt}',
  '                    fill',
  '                    className="object-cover"',
  '                    sizes="(max-width: 1024px) 100vw, 50vw"',
  '                  />',
  '                </div>',
  '                <div>',
  '                  <h3 className="text-[16px] sm:text-[18px] font-bold text-brand-ink tracking-tight leading-snug mb-3">',
  '                    {l.name}',
  '                  </h3>',
  '                  <p className="text-[13.5px] sm:text-[14px] text-black/65 leading-[1.85]">{l.body}</p>',
  '                </div>',
  '              </article>',
  '            ))}',
  '          </div>',
  '        </section>',
  '',
  '        {/* Government intervention */}',
  '        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 pt-12 sm:pt-16">',
  '          <div className="rounded-2xl border border-black/10 bg-brand-cream p-6 sm:p-9">',
  '            <h2 className="text-[clamp(1.2rem,3vw,1.6rem)] font-extrabold text-brand-ink tracking-tight mb-4">',
  '              Government intervention in housing development',
  '            </h2>',
  '            <p className="text-[14px] text-black/70 leading-[1.85] mb-4">',
  '              The Lagos State Government and Ibeju-Lekki Local Government have played a critical role in',
  '              creating an enabling environment for housing and real estate development. Through strategic',
  '              investments in roads, drainage systems, transportation infrastructure, urban planning, and',
  '              public services, government has significantly improved the attractiveness of the area for',
  '              investors and developers.',
  '            </p>',
  '            <p className="text-[14px] text-black/70 leading-[1.85]">',
  '              Government-backed land schemes, infrastructure expansion projects, road upgrades, and urban',
  '              development initiatives have provided the foundation for large-scale residential development',
  '              across the local government area. These interventions have enhanced land values, improved',
  '              accessibility, and increased investor confidence in the area.',
  '            </p>',
  '            <Link',
  '              href="/opportunities/housing/citrus-garden"',
  '              className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-yellow px-5 py-2.5 text-[13px] font-bold text-black hover:bg-brand-hover transition-colors"',
  '            >',
  '              See Citrus Gardens, a model development <ArrowRight size={14} strokeWidth={2.5} />',
  '            </Link>',
  '          </div>',
  '        </section>',
  '',
  '        {/* Future housing opportunities */}',
  '        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 pt-12 sm:pt-16">',
  '          <div className="flex items-center gap-3 mb-3">',
  '            <span className="h-px w-8 bg-brand-yellow" aria-hidden="true" />',
  '            <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-black/45">Future Opportunities</span>',
  '          </div>',
  '          <h2 className="text-[clamp(1.3rem,3.4vw,1.9rem)] font-extrabold text-brand-ink tracking-tight mb-5">',
  '            Where the housing market is opening up',
  '          </h2>',
  '          <p className="max-w-3xl text-[14.5px] text-black/70 leading-[1.85] mb-6">',
  '            The housing market in Ibeju-Lekki presents opportunities across several segments:',
  '          </p>',
  '          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">',
  '            {HOUSING_SEGMENTS.map((seg) => (',
  '              <div',
  '                key={seg}',
  '                className="flex items-start gap-2.5 rounded-xl border border-black/10 bg-white px-4 py-3.5 text-[13px] font-medium text-brand-ink"',
  '              >',
  '                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-yellow" aria-hidden="true" />',
  '                <span>{seg}</span>',
  '              </div>',
  '            ))}',
  '          </div>',
  '        </section>',
  '',
  '        {/* Explore each project */}',
  '        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 pt-12 sm:pt-16">',
  '          <div className="flex items-center gap-3 mb-3">',
  '            <span className="h-px w-8 bg-brand-yellow" aria-hidden="true" />',
  '            <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-black/45">Explore</span>',
  '          </div>',
  '          <h2 className="text-[clamp(1.3rem,3.4vw,1.9rem)] font-extrabold text-brand-ink tracking-tight">',
  '            Each project in detail',
  '          </h2>',
  '        </section>',
  '',
  gridAnchor,
].join('\n');

s = s.replace(gridAnchor, NEW);
ok('landmark, government intervention and housing segment sections added');
ok('existing project card grid kept below, now under an Explore heading');

fs.writeFileSync(P, s);
console.log(log.join('\n'));
P2_EOF
node scripts/p2.cjs
rm -f scripts/p2.cjs

echo
echo "== Checks =="
grep -q "label: 'Services'" components/Header.tsx && echo "  OK   header Services menu" || echo "  WARN header menu"
grep -q "street-naming" components/Footer.tsx && echo "  OK   footer Services entries" || echo "  WARN footer entries"
grep -q "LANDMARKS" app/opportunities/investment/page.tsx && echo "  OK   investment landmarks" || echo "  WARN investment page"
grep -q "bio?: string" lib/cabinet.ts && echo "  OK   bio field on Member" || echo "  WARN bio field"

echo
echo "== tsc --noEmit =="
if ! npx --no-install tsc --noEmit; then echo "ERROR: TypeScript failed. Nothing committed."; exit 1; fi

echo "== lint =="
if ! npm run lint --silent; then echo "ERROR: ESLint failed. Nothing committed."; exit 1; fi

if [ -d .git ]; then
  git add -A
  if git diff --cached --quiet; then
    echo "Nothing to commit."
  else
    if git commit -m "Services menu, street naming and birth certification pages, investment landmarks, supervisor bios"; then
      if git push; then echo "Pushed. Vercel will redeploy."; else echo "Push failed - run: git push"; fi
    else
      echo "Commit failed (git identity not set?). Changes are staged - commit manually."
    fi
  fi
fi

echo
echo "Done. Check:"
echo "  header Services menu, and that Pay Levies opens in a new tab"
echo "  /opportunities/investment - five landmark photographs with the council text"
echo "  /government/executive-council - Hon. Sofwan and Jimoh Azeez now have photos"
