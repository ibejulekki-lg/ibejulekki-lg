import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import Footer from '@/components/Footer'
import { RULERS } from '@/lib/rulers'

export const metadata = {
  title: 'Traditional Rulers | Ibeju-Lekki Local Government',
  description:
    'The traditional rulers of Ibeju-Lekki Local Government Area, Lagos State: the Obas and custodians of the customs and heritage of our kingdoms.',
}

export default function Page() {
  /* RULERS is already sorted by the council protocol order, so the first
     entry is the paramount ruler. */
  const [paramount, ...others] = RULERS

  return (
    <>
      <main className="min-h-screen bg-white">
        <section className="border-b border-black/10 bg-brand-cream">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14">
            <nav className="flex items-center flex-wrap gap-1.5 text-[11px] sm:text-[12px] text-black/45 mb-5" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-brand-ink transition-colors">Home</Link>
              <span className="text-black/30">/</span>
              <span>About</span>
              <span className="text-black/30">/</span>
              <span className="text-brand-ink font-semibold">Traditional Rulers</span>
            </nav>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-brand-yellow" aria-hidden="true" />
              <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-black/45">About Ibeju-Lekki</span>
            </div>
            <h1 className="text-[clamp(1.8rem,5vw,2.9rem)] font-extrabold text-brand-ink tracking-tight leading-tight">
              Traditional Rulers
            </h1>
            <p className="mt-4 max-w-2xl text-[15px] sm:text-[16px] text-black/60 leading-[1.85]">
              The royal fathers of Ibeju-Lekki: the Obas of our kingdoms, custodians of the
              customs, history and heritage of the communities that make up the local
              government area.
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
          {/* The Onibeju is first in the protocol order, so he is shown on his
              own in a larger card above the other royal fathers. */}
          {paramount ? (
            <Link
              href={`/about/traditional-rulers/${paramount.slug}`}
              className="group mb-10 sm:mb-14 grid grid-cols-1 sm:grid-cols-[minmax(0,320px)_1fr] gap-6 sm:gap-8 overflow-hidden rounded-2xl border border-black/10 bg-white transition-all hover:border-brand-yellow hover:shadow-md"
            >
              <div className="relative aspect-[3/4] w-full bg-[#F4F4F4]">
                <Image
                  src={paramount.image}
                  alt={paramount.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, 320px"
                  priority
                />
              </div>
              <div className="flex flex-col justify-center p-5 sm:p-8 sm:pl-0">
                <span className="mb-3 inline-flex w-fit items-center rounded-full bg-brand-yellow px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-black">
                  Paramount Ruler
                </span>
                <h2 className="text-[clamp(1.2rem,3vw,1.7rem)] font-extrabold text-brand-ink leading-tight">
                  {paramount.name}
                </h2>
                <p className="mt-2 text-[13px] font-semibold uppercase tracking-wide text-brand-amber">
                  {paramount.title}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-[12.5px] font-semibold text-brand-amber transition-all group-hover:gap-2">
                  Read more <ArrowRight size={13} strokeWidth={2.5} />
                </span>
              </div>
            </Link>
          ) : null}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {others.map((r) => (
              <Link
                key={r.slug}
                href={`/about/traditional-rulers/${r.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-white transition-all hover:border-brand-yellow hover:shadow-md"
              >
                <div className="relative aspect-[3/4] w-full bg-[#F4F4F4]">
                  <Image
                    src={r.image}
                    alt={r.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-col flex-1 p-5">
                  <h2 className="text-[14px] font-bold text-brand-ink leading-snug">{r.name}</h2>
                  <p className="mt-1 text-[11.5px] font-semibold uppercase tracking-wide text-brand-amber">{r.title}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-[12px] font-semibold text-brand-amber transition-all group-hover:gap-2">
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
