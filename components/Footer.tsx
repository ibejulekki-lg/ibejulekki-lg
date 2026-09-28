import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'
import { FaXTwitter, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa6'
import { getSiteSettings } from '@/lib/settings'

const FOOTER_NAV: {
  heading: string
  links: { label: string; href: string; external?: boolean }[]
}[] = [
  {
    heading: 'Government',
    links: [
      { label: 'Overview',            href: '/about' },
      { label: 'Vision & Mission',    href: '/government/vision' },
      { label: 'Executive Chairman',  href: '/government/chairman' },
      { label: 'Executive Council',   href: '/government/executive-council' },
      { label: 'Legislative Council', href: '/government/legislative-council' },
      { label: 'Chief Technical Advisers', href: '/government/technical-advisers' },
      { label: 'Management Team',     href: '/government/management-team' },
    ],
  },
  {
    heading: 'Programmes',
    links: [
      { label: 'SHIEELD Agenda',      href: '/programmes/shieeld' },
      { label: '2025 Budget',         href: '/programmes/budget' },
      { label: 'Performance Report',  href: '/programmes/performance-report' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'Pay Levies',          href: 'https://portal.ibejulekkilga.com', external: true },
      { label: 'Street Naming',       href: '/resources/street-naming' },
      { label: 'Birth Certification', href: '/resources/birth-certification' },
      { label: 'Marriage Registry',    href: '/resources/marriage-registry' },
      { label: 'Waste Collection',    href: '/resources/waste' },
      { label: 'Download Forms',      href: '/resources/forms' },
      { label: 'Report an Issue',     href: '/report' },
    ],
  },
  {
    heading: 'Opportunities',
    links: [
      { label: 'Housing',              href: '/opportunities/housing' },
      { label: 'Citrus Gardens',       href: '/opportunities/housing/citrus-garden' },
      { label: 'Eleko Isles',          href: '/opportunities/housing/eleko-isles' },
      { label: 'Tourism',              href: '/opportunities/tourism' },
      { label: 'Investment Opportunities', href: '/opportunities/investment' },
      { label: 'Career & Jobs',        href: '/resources/careers' },
    ],
  },
  {
    heading: 'Information',
    links: [
      { label: 'News & Events',              href: '/news' },
      { label: 'Historic Background',        href: '/about/history' },
      { label: 'The People, Arts & Culture', href: '/about/culture' },
      { label: 'Traditional Rulers',         href: '/about/traditional-rulers' },
      { label: 'Contact Us',                 href: '/contact' },
    ],
  },
]

const SOCIAL_ICONS = {
  twitter:   { Icon: FaXTwitter,  label: 'X / Twitter' },
  facebook:  { Icon: FaFacebookF, label: 'Facebook' },
  instagram: { Icon: FaInstagram, label: 'Instagram' },
  youtube:   { Icon: FaYoutube,   label: 'YouTube' },
} as const

export default async function Footer() {
  const settings = await getSiteSettings()
  const telHref = 'tel:' + settings.phone.replace(/[^+\d]/g, '')
  const socials = (Object.keys(SOCIAL_ICONS) as (keyof typeof SOCIAL_ICONS)[])
    .map((key) => ({ key, href: settings.socials[key], ...SOCIAL_ICONS[key] }))
    .filter((s): s is typeof s & { href: string } => typeof s.href === 'string' && s.href.startsWith('http'))

  return (
    <footer className="bg-[#0A0A0A] text-white/55">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-14 sm:pt-16 pb-0">

        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[1.5fr_1fr_1fr_1fr_1fr_1fr] gap-10 pb-12 border-b border-white/[0.08]">

          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image src="/ibeju-lekki-logo-sm.webp" alt="Ibeju-Lekki LGA" fill className="object-contain" />
              </div>
              <div>
                <div className="text-[14px] font-bold text-white leading-tight">IBEJU LEKKI LGA</div>
                <div className="text-[9px] uppercase tracking-[0.2em] text-white/45">Official Government Website</div>
              </div>
            </Link>

            <p className="text-[12.5px] leading-[1.8] mb-5 max-w-[240px]">
              The official website of Ibeju-Lekki Local Government Area, Lagos State, Nigeria.
            </p>

            <div className="space-y-2.5 text-[12px] mb-6">
              <div className="flex items-start gap-2.5">
                <MapPin size={13} strokeWidth={1.8} className="text-brand-yellow mt-0.5 flex-shrink-0" />
                <span className="leading-snug whitespace-pre-line">{settings.address}</span>
              </div>
              <a href={telHref} className="flex items-center gap-2.5 hover:text-white transition-colors">
                <Phone size={13} strokeWidth={1.8} className="text-brand-yellow flex-shrink-0" />
                {settings.phone}
              </a>
              <a href={`mailto:${settings.email}`} className="flex items-center gap-2.5 hover:text-brand-yellow transition-colors">
                <Mail size={13} strokeWidth={1.8} className="text-brand-yellow flex-shrink-0" />
                {settings.email}
              </a>
            </div>

            {/* Socials, shown only when real profile URLs are set in Site Settings */}
            {socials.length > 0 && (
              <div className="flex items-center gap-2">
                {socials.map(({ key, Icon, href, label }) => (
                  <a
                    key={key}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white/[0.08] flex items-center justify-center hover:bg-brand-yellow hover:text-black transition-all duration-200"
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Nav columns */}
          {FOOTER_NAV.map((col) => (
            <div key={col.heading}>
              <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-yellow mb-4">
                {col.heading}
              </div>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[12.5px] hover:text-white hover:translate-x-0.5 transition-all duration-150 inline-flex items-center gap-1"
                      >
                        {link.label}
                        <ExternalLink size={9} />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-[12.5px] hover:text-white hover:translate-x-0.5 transition-all duration-150 inline-block"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-5 text-[10.5px]">
          <span>&copy; {new Date().getFullYear()} Ibeju-Lekki Local Government Area. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
            <a href="https://lagosstate.gov.ng" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-white transition-colors">
              Lagos State Govt <ExternalLink size={10} />
            </a>
          </div>
        </div>
      </div>

      {/* Color stripe (official Lagos motif), matched to the header stripe */}
      <div className="flex h-[5px]" aria-hidden="true">
        <div className="flex-1 bg-brand-red" />
        <div className="flex-1 bg-[#14377D]" />
        <div className="flex-1 bg-brand-yellow" />
        <div className="flex-1 bg-[#1E7A3D]" />
      </div>
    </footer>
  )
}
