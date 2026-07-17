import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/components/Footer'

export type Block =
  | { kind: 'section'; heading?: string; paras: string[] }
  | { kind: 'quote'; text: string; note?: string }
  | { kind: 'chips'; label: string; items: string[] }
  | { kind: 'cards'; label: string; intro?: string[]; items: { name: string; desc: string }[] }
  | { kind: 'defs'; label: string; items: { term: string; text: string }[] }
  | { kind: 'ruler'; name: string; title: string; image: string; note?: string }

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 flex items-center gap-3">
      <span className="h-px w-8 bg-brand-yellow" aria-hidden="true" />
      <h2 className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-black/45">{children}</h2>
    </div>
  )
}

export default function AboutPage({
  crumb, eyebrow, title, lead, facts, blocks,
}: {
  crumb: string
  eyebrow: string
  title: string
  lead: string
  facts?: { label: string; value: string }[]
  blocks: Block[]
}) {
  return (
    <>
      <main className="min-h-screen bg-white">
        <section className="border-b border-black/10 bg-brand-cream">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14">
            <nav className="flex items-center flex-wrap gap-1.5 text-[11px] sm:text-[12px] text-black/45 mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-brand-ink transition-colors">Home</Link>
              <span className="text-black/30">/</span>
              <Link href="/about" className="hover:text-brand-ink transition-colors">About</Link>
              <span className="text-black/30">/</span>
              <span className="text-brand-ink font-semibold">{crumb}</span>
            </nav>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-brand-yellow" aria-hidden="true" />
              <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-black/45">{eyebrow}</span>
            </div>
            <h1 className="text-[clamp(1.8rem,5vw,2.9rem)] font-extrabold text-brand-ink tracking-tight leading-tight">{title}</h1>
            <p className="mt-4 max-w-2xl text-[15px] sm:text-[16px] text-black/60 leading-[1.85]">{lead}</p>

            {facts && facts.length > 0 ? (
              <div className="mt-6 flex flex-wrap gap-x-7 gap-y-3">
                {facts.map((f) => (
                  <div key={f.label}>
                    <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-black/40">{f.label}</div>
                    <div className="text-[13.5px] font-bold text-brand-ink">{f.value}</div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
          <div className="space-y-10">
            {blocks.map((b, i) => {
              if (b.kind === 'section') {
                return (
                  <div key={i}>
                    {b.heading ? <Eyebrow>{b.heading}</Eyebrow> : null}
                    <div className="space-y-4 text-[14px] sm:text-[15px] leading-[1.85] text-black/70">
                      {b.paras.map((p, j) => <p key={j}>{p}</p>)}
                    </div>
                  </div>
                )
              }
              if (b.kind === 'quote') {
                return (
                  <blockquote key={i} className="rounded-2xl border border-black/10 bg-brand-cream p-6 sm:p-7">
                    <p className="border-l-4 border-brand-yellow pl-4 text-[clamp(1rem,2.4vw,1.25rem)] font-semibold italic leading-[1.6] text-brand-ink">
                      {b.text}
                    </p>
                    {b.note ? <p className="mt-3 pl-4 text-[13px] leading-relaxed text-black/55">{b.note}</p> : null}
                  </blockquote>
                )
              }
              if (b.kind === 'chips') {
                return (
                  <div key={i}>
                    <Eyebrow>{b.label}</Eyebrow>
                    <div className="flex flex-wrap gap-2">
                      {b.items.map((it) => (
                        <span key={it} className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-[12.5px] font-medium text-black/70">
                          {it}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              }
              if (b.kind === 'cards') {
                return (
                  <div key={i}>
                    <Eyebrow>{b.label}</Eyebrow>
                    {b.intro ? (
                      <div className="mb-5 space-y-4 text-[14px] sm:text-[15px] leading-[1.85] text-black/70">
                        {b.intro.map((p, j) => <p key={j}>{p}</p>)}
                      </div>
                    ) : null}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {b.items.map((it) => (
                        <div key={it.name} className="rounded-2xl border border-black/10 bg-white p-4 sm:p-5">
                          <div className="text-[13.5px] font-bold text-brand-ink">{it.name}</div>
                          <div className="mt-1 text-[12.5px] leading-relaxed text-black/60">{it.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              }
              if (b.kind === 'ruler') {
          return (
            <div key={i} className="overflow-hidden rounded-2xl border border-black/10 bg-white sm:flex">
              <div className="relative aspect-[3/4] w-full sm:w-56 flex-shrink-0 bg-[#F4F4F4]">
                <Image src={b.image} alt={b.name} fill className="object-cover object-top" sizes="(max-width: 640px) 100vw, 224px" />
              </div>
              <div className="p-5 sm:p-6">
                <div className="text-[15px] font-extrabold text-brand-ink leading-snug">{b.name}</div>
                <div className="mt-1 text-[12px] font-semibold uppercase tracking-wide text-brand-amber">{b.title}</div>
                {b.note ? <p className="mt-3 text-[13.5px] leading-[1.8] text-black/70">{b.note}</p> : null}
              </div>
            </div>
          )
        }
        // defs
              return (
                <div key={i}>
                  <Eyebrow>{b.label}</Eyebrow>
                  <div className="space-y-4">
                    {b.items.map((it) => (
                      <div key={it.term} className="rounded-2xl border border-black/10 bg-brand-cream p-5">
                        <div className="mb-1 text-[13.5px] font-bold text-brand-amber">{it.term}</div>
                        <p className="text-[13.5px] leading-[1.8] text-black/70">{it.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
