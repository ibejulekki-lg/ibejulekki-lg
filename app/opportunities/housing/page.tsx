import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Home } from 'lucide-react'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Housing | Ibeju-Lekki Local Government',
  description:
    'Housing opportunities and estate developments across Ibeju-Lekki Local Government Area, Lagos State.',
}

const ITEMS: { name: string; href: string; desc: string; image?: string; alt?: string }[] = [
  {
    name: 'Citrus Gardens',
    href: '/opportunities/housing/citrus-garden',
    desc: 'Flagship affordable housing scheme in the Eleko axis. About 63 units, flagged off by the Governor in 2025 and under construction.',
    image: '/images/citrus-garden/hero-terraces.jpg',
    alt: 'Terrace homes at Citrus Gardens Estate, Ibeju-Lekki',
  },
  {
    name: 'Eleko ISOLE',
    href: '/opportunities/housing/eleko-isole',
    desc: 'An estate development within the local government area.',
  },
]

export default function Page() {
  return (
    <>
      <main className="min-h-screen bg-white">
        <section className="border-b border-black/10 bg-brand-cream">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14">
            <nav className="flex items-center flex-wrap gap-1.5 text-[11px] sm:text-[12px] text-black/45 mb-5" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-brand-ink transition-colors">Home</Link>
              <span className="text-black/30">/</span>
              <span>Opportunities</span>
              <span className="text-black/30">/</span>
              <span className="text-brand-ink font-semibold">Housing</span>
            </nav>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-brand-yellow" aria-hidden="true" />
              <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-black/45">Opportunities</span>
            </div>
            <h1 className="text-[clamp(1.8rem,5vw,2.9rem)] font-extrabold text-brand-ink tracking-tight leading-tight">
              Housing
            </h1>
            <p className="mt-4 max-w-2xl text-[15px] sm:text-[16px] text-black/60 leading-[1.85]">
              Housing schemes and estate developments across Ibeju-Lekki, delivered in partnership
              with private developers to widen access to affordable home ownership and rental.
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {ITEMS.map((it) => (
              <Link
                key={it.href}
                href={it.href}
                className="group flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-white transition-all hover:border-brand-yellow hover:shadow-md"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-brand-cream">
                  {it.image ? (
                    <Image
                      src={it.image}
                      alt={it.alt ?? it.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-yellow/[0.18] to-brand-yellow/[0.06]">
                      <Home size={30} strokeWidth={1.3} className="text-brand-ink/25" />
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h2 className="text-[14.5px] font-bold text-brand-ink leading-snug">{it.name}</h2>
                  <p className="mt-2 text-[12.5px] leading-[1.7] text-black/55">{it.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-[12px] font-semibold text-brand-amber transition-all group-hover:gap-2">
                    Read more <ArrowRight size={13} strokeWidth={2.5} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
