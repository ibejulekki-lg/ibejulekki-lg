import Link from 'next/link'
import { INVESTMENTS } from '@/lib/investments'

/* Scrolling "The New Lagos" ticker. Each landmark links to its Investment
   Opportunities page. Pure CSS scroll (globals.css @keyframes scroll); pauses
   on hover so items can be clicked. */
export default function LandmarksTicker() {
  const items = [...INVESTMENTS, ...INVESTMENTS]
  return (
    <div
      className="border-y border-brand-ink/[0.08] overflow-hidden bg-white"
      aria-label="Key investments in Ibeju-Lekki"
    >
      <div className="flex">
        <div className="flex-shrink-0 flex items-center gap-2 px-4 sm:px-5 bg-brand-yellow text-black z-10 text-[9.5px] font-bold uppercase tracking-[0.22em]">
          <span className="w-1.5 h-1.5 rounded-full bg-black/40" aria-hidden="true" />
          <span className="py-3">The New Lagos.</span>
        </div>
        <div className="flex-1 overflow-hidden py-3">
          <div
            className="flex whitespace-nowrap hover:[animation-play-state:paused]"
            style={{ animation: 'scroll 36s linear infinite' }}
          >
            {items.map((inv, i) => (
              <Link
                key={i}
                href={`/opportunities/investment/${inv.slug}`}
                className="inline-flex items-center gap-3 px-6 text-[12px] font-medium text-brand-ink/55 italic hover:text-brand-amber transition-colors"
              >
                {inv.name}
                <span className="w-1 h-1 rounded-full bg-brand-yellow/50 flex-shrink-0" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
