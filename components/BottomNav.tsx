'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Home, Newspaper, CreditCard, ShieldCheck, Menu, X, ChevronRight } from 'lucide-react'

type Tab = { href: string; label: string; Icon: typeof Home; primary?: boolean }

const TABS: Tab[] = [
  { href: '/',                  label: 'Home',    Icon: Home },
  { href: '/news',              label: 'News',    Icon: Newspaper },
  { href: '/resources/revenue', label: 'Pay',     Icon: CreditCard, primary: true },
  { href: '/programmes/shieeld', label: 'SHIEELD', Icon: ShieldCheck },
]

const MENU: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: 'Government',
    links: [
      { label: 'Overview',            href: '/about' },
      { label: 'Vision & Mission',    href: '/government/vision' },
      { label: 'Executive Chairman',  href: '/government/chairman' },
      { label: 'Executive Council',   href: '/government/executive-council' },
      { label: 'Legislative Council', href: '/government/legislative-council' },
      { label: 'Management Team',     href: '/government/management-team' },
    ],
  },
  {
    heading: 'Programmes',
    links: [
      { label: 'SHIEELD Agenda',      href: '/programmes/shieeld' },
      { label: '2025 Budget Summary', href: '/programmes/budget' },
      { label: 'Performance Report',  href: '/programmes/performance-report' },
      // { label: 'Agenda 2029',         href: '/programmes/agenda-2029' },
    ],
  },
  {
    heading: 'About',
    links: [
      { label: 'Historic Background',        href: '/about/history' },
      { label: 'The People, Arts & Culture', href: '/about/culture' },
      { label: 'Traditional Rulers',         href: '/about/traditional-rulers' },
    ],
  },
  {
    heading: 'Opportunities',
    links: [
      { label: 'Career & Jobs',     href: '/resources/careers' },
      { label: 'Housing & Tourism', href: '/housing-tourism' },
    ],
  },
  {
    heading: 'More',
    links: [
      { label: 'News & Events',     href: '/news' },
      { label: 'Revenue Portal',    href: '/resources/revenue' },
      { label: 'Waste Collection',  href: '/resources/waste' },
      { label: 'Contact Us',        href: '/contact' },
    ],
  },
]

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(href + '/')
}

export default function BottomNav() {
  const pathname = usePathname() || '/'
  const [moreOpen, setMoreOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = moreOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [moreOpen])

  useEffect(() => { setMoreOpen(false) }, [pathname])

  return (
    <>
      {/* backdrop */}
      <div
        onClick={() => setMoreOpen(false)}
        aria-hidden="true"
        className={`xl:hidden fixed inset-0 z-[185] bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${moreOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      />

      {/* slide-up sheet */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="More menu"
        className={`xl:hidden fixed inset-x-0 bottom-0 z-[186] flex max-h-[80vh] flex-col rounded-t-3xl bg-white shadow-2xl transition-transform duration-300 ${moreOpen ? 'translate-y-0' : 'translate-y-full'}`}
      >
        <div className="flex items-center justify-between border-b border-black/10 px-5 py-4">
          <span className="text-[13px] font-bold uppercase tracking-[0.15em] text-[#111111]">Menu</span>
          <button
            onClick={() => setMoreOpen(false)}
            aria-label="Close menu"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-black/[0.06] transition-colors hover:bg-black/10"
          >
            <X size={16} strokeWidth={2} className="text-[#111111]" />
          </button>
        </div>
        <div
          className="overflow-y-auto px-5 py-4"
          style={{ paddingBottom: 'calc(1rem + env(safe-area-inset-bottom))' }}
        >
          {MENU.map((group) => (
            <div key={group.heading} className="mb-5 last:mb-0">
              <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#B26B00]">
                {group.heading}
              </div>
              <ul className="space-y-0.5">
                {group.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={() => setMoreOpen(false)}
                      className="flex items-center justify-between py-2.5 text-[13.5px] font-medium text-[#111111]/80 transition-colors hover:text-[#111111]"
                    >
                      {l.label}
                      <ChevronRight size={15} className="text-black/25" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* bottom tab bar */}
      <nav
        aria-label="Primary mobile navigation"
        className="xl:hidden fixed bottom-0 inset-x-0 z-[180] border-t border-black/10 bg-white shadow-[0_-2px_14px_rgba(0,0,0,0.07)]"
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        <ul className="grid grid-cols-5">
          {TABS.map(({ href, label, Icon, primary }) => {
            const active = isActive(pathname, href)
            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={active ? 'page' : undefined}
                  className="flex flex-col items-center justify-center gap-1 py-2"
                >
                  <span
                    className={
                      primary
                        ? 'flex h-11 w-11 -mt-5 items-center justify-center rounded-full border-4 border-white bg-brand-yellow text-black shadow-md'
                        : `flex h-9 w-9 items-center justify-center rounded-full transition-colors ${active ? 'text-[#111111]' : 'text-black/45'}`
                    }
                  >
                    <Icon size={primary ? 21 : 19} strokeWidth={2} />
                  </span>
                  <span className={`text-[9.5px] font-semibold tracking-wide ${active ? 'text-[#111111]' : 'text-black/45'}`}>
                    {label}
                  </span>
                </Link>
              </li>
            )
          })}
          <li>
            <button
              onClick={() => setMoreOpen(true)}
              aria-label="More menu"
              aria-expanded={moreOpen}
              className="flex w-full flex-col items-center justify-center gap-1 py-2"
            >
              <span className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors ${moreOpen ? 'text-[#111111]' : 'text-black/45'}`}>
                <Menu size={19} strokeWidth={2} />
              </span>
              <span className={`text-[9.5px] font-semibold tracking-wide ${moreOpen ? 'text-[#111111]' : 'text-black/45'}`}>
                More
              </span>
            </button>
          </li>
        </ul>
      </nav>
    </>
  )
}
