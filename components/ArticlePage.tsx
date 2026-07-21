import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/components/Footer'

export type ArticleBlock =
  | { kind: 'para'; text: string }
  | { kind: 'heading'; text: string }
  | { kind: 'list'; items: string[] }
  | { kind: 'gallery'; images: { src: string; alt: string }[] }

export interface ArticleData {
  crumb: string
  eyebrow: string
  title: string
  standfirst?: string
  blocks: ArticleBlock[]
}

export default function ArticlePage({ data }: { data: ArticleData }) {
  return (
    <>
      <main className="min-h-screen bg-white">
        <section className="border-b border-black/10 bg-brand-cream">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14">
            <nav className="flex items-center flex-wrap gap-1.5 text-[11px] sm:text-[12px] text-black/45 mb-5" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-brand-ink transition-colors">Home</Link>
              <span className="text-black/30">/</span>
              <span>Opportunities</span>
              <span className="text-black/30">/</span>
              <span className="text-brand-ink font-semibold">{data.crumb}</span>
            </nav>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-brand-yellow" aria-hidden="true" />
              <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-black/45">{data.eyebrow}</span>
            </div>
            <h1 className="text-[clamp(1.7rem,4.5vw,2.7rem)] font-extrabold text-brand-ink tracking-tight leading-tight">
              {data.title}
            </h1>
            {data.standfirst ? (
              <p className="mt-4 max-w-2xl text-[15px] sm:text-[16px] text-black/60 leading-[1.85]">{data.standfirst}</p>
            ) : null}
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
          {data.blocks.map((b, i) => {
            if (b.kind === 'heading') {
              return (
                <h2 key={i} className="mt-10 first:mt-0 mb-4 text-[18px] sm:text-[20px] font-extrabold text-brand-ink tracking-tight">
                  {b.text}
                </h2>
              )
            }
            if (b.kind === 'gallery') {
              return (
                <div key={i} className="my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {b.images.map((img) => (
                    <div key={img.src} className="relative aspect-[4/3] overflow-hidden rounded-xl border border-black/10 bg-[#F4F4F4]">
                      <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                    </div>
                  ))}
                </div>
              )
            }
            if (b.kind === 'list') {
              return (
                <ul key={i} className="mb-6 space-y-2">
                  {b.items.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-[14.5px] leading-[1.8] text-black/70">
                      <span className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-yellow" aria-hidden="true" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              )
            }
            return (
              <p key={i} className="mb-5 text-[14.5px] sm:text-[15px] leading-[1.9] text-black/70">
                {b.text}
              </p>
            )
          })}
        </section>
      </main>
      <Footer />
    </>
  )
}
