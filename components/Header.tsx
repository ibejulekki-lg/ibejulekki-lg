'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Phone, Mail, Clock, Circle, CreditCard } from 'lucide-react';
import BrandStripe from '@/components/BrandStripe';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
    {
    label: 'About',
    href: '#',
    children: [
      { label: 'Historic Background',        href: '/about/history' },
      { label: 'The People, Arts & Culture', href: '/about/culture' },
      { label: 'Traditional Rulers',         href: '/about/traditional-rulers' },
    ],
  },
  {
    label: 'Government',
    href: '#',
    children: [
      { label: 'Overview',            href: '/about' },
      { label: 'Vision & Mission',    href: '/government/vision' },
      { label: 'Executive Chairman',  href: '/government/chairman' },
      { label: 'Executive Council',   href: '/government/executive-council' },
      { label: 'Legislative Council', href: '/government/legislative-council' },
      { label: 'Management Team',     href: '/government/management-team' },
    ],
  },
  {
    label: 'Programmes',
    href: '#',
    children: [
      { label: 'SHIEELD Agenda',      href: '/programmes/shieeld' },
      { label: '2025 Budget Summary', href: '/programmes/budget' },
      { label: 'Performance Report',  href: '/programmes/performance-report' },
      // { label: 'Agenda 2029',         href: '/programmes/agenda-2029' },
    ],
  },
  {
    label: 'Opportunities',
    href: '#',
    children: [
      { label: 'Housing',                href: '/opportunities/housing' },
      // { label: 'Housing Opportunities',  href: '/opportunities/housing/housing-opportunities' },
      // { label: 'Citrus Garden',          href: '/opportunities/housing/citrus-garden' },
      // { label: 'Eleko ISOL',             href: '/opportunities/housing/eleko-isol' },
      { label: 'Tourism',                href: '/opportunities/tourism' },
      { label: 'Career & Jobs',          href: '/resources/careers' },
    ],
  },
  { label: 'News & Events', href: '/news' },
  {
    label: 'Resources',
    href: '#',
    children: [
      { label: 'Revenue Portal',   href: 'https://portal.ibejulekkilga.com' },
      { label: 'Waste Collection', href: '/resources/waste' },
      { label: 'Career & Jobs',    href: '/resources/careers' },
    ],
  },
];

function DesktopNavItem({ item }: { item: (typeof NAV_ITEMS)[number] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  if (!('children' in item) || !item.children) {
    return (
      <Link
        href={item.href}
        className="relative whitespace-nowrap text-[11.5px] font-semibold uppercase tracking-wide text-brand-ink transition-colors hover:text-black after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:w-0 after:bg-brand-yellow after:transition-all after:duration-300 hover:after:w-full"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="flex items-center gap-1 whitespace-nowrap text-[11.5px] font-semibold uppercase tracking-wide text-brand-ink transition-colors hover:text-black"
        onClick={() => setOpen((v) => !v)}
      >
        {item.label}
        <ChevronDown
          size={13}
          strokeWidth={2.5}
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {/* transparent bridge so the menu stays open when moving the cursor down */}
      <div className={`absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 ${open ? 'block' : 'hidden'}`}>
        <div className="min-w-[230px] overflow-hidden rounded-xl border border-black/10 bg-white py-2 shadow-xl">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="block px-4 py-2.5 text-[12.5px] font-medium text-brand-ink/80 transition-colors hover:bg-brand-yellow/10 hover:text-brand-ink"
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

interface HeaderProps {
  email?: string;
  officeHours?: string;
}

export default function Header({
  email = 'info@ibejulekki.lg.gov.ng',
  officeHours = 'Mon - Fri, 8am - 4pm',
}: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-[200] w-full">
      <BrandStripe />

      {/* utility bar */}
      <div className="hidden md:block bg-brand-ink text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-8 py-1.5 text-[11px]">
          <div className="flex items-center gap-5">
            <a href={`mailto:${email}`} className="flex items-center gap-1.5 text-white/70 transition-colors hover:text-brand-yellow">
              <Mail size={12} /> {email}
            </a>
            <span className="flex items-center gap-1.5 text-white/70">
              <Clock size={12} /> {officeHours}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-semibold text-brand-yellow">
              <Phone size={12} /> Emergency: 112
            </span>
            <span className="flex items-center gap-1">
              <Circle size={6} className="fill-brand-yellow text-brand-yellow" />
              <button className="font-semibold tracking-wide transition-colors hover:text-brand-yellow">EN</button>
              <span className="text-white/30">&middot;</span>
              <button className="text-white/50 transition-colors hover:text-brand-yellow">YO</button>
            </span>
          </div>
        </div>
      </div>

      {/* main bar */}
      <div className={`w-full bg-white transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-8 py-3">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/ibeju-lekki-logo-sm.webp"
              alt="IBEJU LEKKI"
              width={44}
              height={44}
              className="h-11 w-11 flex-shrink-0 object-contain"
            />
            <span className="leading-tight">
              <span className="block text-[15px] sm:text-[17px] font-extrabold tracking-tight text-brand-ink">
                IBEJU LEKKI 
              </span>
              <span className="block text-[9.5px] sm:text-[10px] font-medium uppercase tracking-[0.18em] text-black/45">
                Local Government<br />Lagos State
              </span>
            </span>
          </Link>

          <nav className="hidden xl:flex items-center gap-5 2xl:gap-7">
            {NAV_ITEMS.map((item) => (
              <DesktopNavItem key={item.label} item={item} />
            ))}
          </nav>

          <Link
            href="https://portal.ibejulekkilga.com" target="_blank" rel="noopener noreferrer"
            className="hidden xl:inline-flex items-center gap-2 rounded-full bg-brand-yellow px-5 py-2.5 text-[12px] font-bold text-black transition-colors hover:bg-brand-ink hover:text-brand-yellow"
          >
            <CreditCard size={15} strokeWidth={2.5} /> Pay Levies
          </Link>
        </div>
      </div>
    </header>
  );
}
