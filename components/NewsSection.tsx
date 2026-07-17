import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'
import { ArrowRight, ChevronRight, Calendar, Tag } from 'lucide-react'

const CATEGORY_LABELS: Record<string, string> = {
  governance: 'Governance', infrastructure: 'Infrastructure', health: 'Health',
  education: 'Education', environment: 'Environment', economy: 'Economy',
  security: 'Security', community: 'Community', events: 'Events',
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })

interface NewsPost {
  _id: string
  title: string
  slug: { current: string }
  category: string
  publishedAt: string
  featured: boolean
  summary: string
  coverImage: null | { asset: any; alt?: string }
}

interface Props { posts?: NewsPost[] }

export default function NewsSection({ posts }: Props) {
  // Render real posts only; hide the whole section when there are none
  const data = posts && posts.length > 0 ? posts : []

  const featured  = data.find((p) => p.featured) ?? data[0]
  const secondary = data.filter((p) => p._id !== featured._id).slice(0, 3)

  // Safety check, should never hit this but prevents crash
  if (!featured) return null

  return (
    <section
      className="bg-white py-16 sm:py-20 lg:py-24 border-t border-[#111111]/[0.06]"
      aria-labelledby="news-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-brand-yellow" aria-hidden="true" />
              <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-[#111111]/45">Newsroom</span>
            </div>
            <h2
              id="news-heading"
              className="text-[clamp(1.6rem,3.5vw,2.2rem)] font-extrabold text-[#111111] tracking-tight leading-tight"
            >
              What&apos;s happening<br />
              <span className="text-[#111111]">in the council.</span>
            </h2>
          </div>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-[12.5px] font-bold text-[#111111] hover:text-[#B26B00] transition-colors whitespace-nowrap"
          >
            All Stories <ArrowRight size={14} strokeWidth={2.5} />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-5">

          {/* Featured */}
          <Link
            href={`/news/${featured.slug.current}`}
            className="group block border border-[#111111]/10 rounded-2xl overflow-hidden hover:border-brand-yellow/40 hover:shadow-lg transition-all duration-200"
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              {featured.coverImage?.asset ? (
                <Image src={urlFor(featured.coverImage).width(900).height(506).fit('crop').auto('format').url()} alt={featured.coverImage.alt || featured.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 60vw" />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow to-[#E0A421] flex items-center justify-center"><span className="text-[clamp(3rem,8vw,5rem)] font-extrabold text-black/10 italic tracking-tighter select-none">{CATEGORY_LABELS[featured.category] ?? featured.category}</span></div>
              )}
              <span className="absolute top-4 left-4 bg-brand-yellow text-black text-[10px] font-bold uppercase tracking-[0.12em] px-3 py-1 rounded-full">
                {CATEGORY_LABELS[featured.category] ?? featured.category}
              </span>
            </div>
            <div className="p-5 sm:p-7">
              <div className="flex items-center gap-2 text-[10.5px] text-[#111111]/40 mb-3">
                <Calendar size={11} strokeWidth={2} />
                {formatDate(featured.publishedAt)}
              </div>
              <h3 className="text-[clamp(1rem,2.2vw,1.3rem)] font-bold text-[#111111] leading-[1.3] mb-3 group-hover:text-[#B26B00] transition-colors">
                {featured.title}
              </h3>
              <p className="text-[13px] text-[#111111]/50 leading-[1.7] line-clamp-3">
                {featured.summary}
              </p>
              <div className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-bold text-[#111111] group-hover:text-[#B26B00] transition-colors">
                Read more <ChevronRight size={13} strokeWidth={2.5} />
              </div>
            </div>
          </Link>

          {/* Secondary */}
          <div className="flex flex-col gap-4">
            {secondary.map((post) => (
              <Link
                key={post._id}
                href={`/news/${post.slug.current}`}
                className="group flex gap-4 border border-[#111111]/10 rounded-2xl p-4 sm:p-5 hover:border-brand-yellow/40 hover:shadow-md transition-all duration-200"
              >
                <div className="relative flex-shrink-0 w-14 h-14 rounded-xl overflow-hidden bg-brand-yellow/[0.12] flex items-center justify-center">
                  {post.coverImage?.asset ? (
                    <Image src={urlFor(post.coverImage).width(120).height(120).fit('crop').auto('format').url()} alt={post.coverImage.alt || post.title} fill className="object-cover" sizes="56px" />
                  ) : (
                    <Tag size={18} strokeWidth={1.5} className="text-[#111111]/50" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[9.5px] font-bold uppercase tracking-[0.16em] text-[#B26B00]">
                      {CATEGORY_LABELS[post.category] ?? post.category}
                    </span>
                    <span className="text-[#111111]/20">·</span>
                    <span className="text-[10px] text-[#111111]/35">{formatDate(post.publishedAt)}</span>
                  </div>
                  <h3 className="text-[13px] font-bold text-[#111111] leading-[1.4] line-clamp-2 group-hover:text-[#B26B00] transition-colors">
                    {post.title}
                  </h3>
                </div>
              </Link>
            ))}

            <Link
              href="/news"
              className="flex items-center justify-center gap-2 border border-dashed border-[#111111]/20 rounded-2xl p-5 text-[12.5px] font-bold text-[#111111]/60 hover:border-[#111111]/40 hover:text-[#B26B00] transition-all duration-200"
            >
              View all news & events <ArrowRight size={14} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
