import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { groq } from 'next-sanity'
import { client, urlFor } from '@/lib/sanity'
import { newsPostBySlugQuery } from '@/lib/queries'
import { Calendar, Tag, ArrowLeft } from 'lucide-react'
import Footer from '@/components/Footer'
import ShareButton from '@/components/ShareButton'
import PortableBody from '@/components/PortableBody'

export const revalidate = 60

const CATEGORY_LABELS: Record<string, string> = {
  governance: 'Governance', infrastructure: 'Infrastructure', health: 'Health',
  education: 'Education', environment: 'Environment', economy: 'Economy', careers: 'Careers',
  security: 'Security', community: 'Community', events: 'Events',
}

const PLACEHOLDER_POSTS: Record<string, any> = {
  'lasg-local-government-development-plan': {
    _id: 'n1', title: 'LASG Set To Drive Local Government Development Plan Across All 57 LGAs',
    slug: { current: 'lasg-local-government-development-plan' }, category: 'governance',
    publishedAt: '2026-04-17T09:00:00Z', author: 'Ibeju-Lekki LGA Communications',
    summary: 'Conference 57 Chairman Hon. Abdullahi Sesan Olowa appreciates a unified Lagos State plan for accelerated growth and service delivery across all 57 local government areas.',
    body: null, coverImage: null,
  },
}

async function getPost(slug: string) {
  let post = null
  try {
    post = await client.fetch(newsPostBySlugQuery, { slug })
  } catch {}
  if (!post) post = PLACEHOLDER_POSTS[slug] ?? null
  return post
}

// Per-article metadata so shared links show the real headline, summary and
// cover image on WhatsApp, X, Facebook and in search results.
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug)
  if (!post) return { title: 'Article Not Found | Ibeju-Lekki Local Government' }
  const ogImage = post.coverImage?.asset
    ? urlFor(post.coverImage).width(1200).height(630).fit('crop').auto('format').url()
    : undefined
  return {
    title: `${post.title} | Ibeju-Lekki Local Government`,
    description: post.summary,
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.summary,
      publishedTime: post.publishedAt,
      ...(ogImage ? { images: [{ url: ogImage, width: 1200, height: 630 }] } : {}),
    },
    twitter: {
      card: ogImage ? 'summary_large_image' : 'summary',
      title: post.title,
      description: post.summary,
    },
  }
}

// Pre-build only the 30 newest articles; the rest render on demand and cache
// (keeps the Vercel build fast even with hundreds of posts).
export async function generateStaticParams() {
  try {
    const slugs = await client.fetch(groq`*[_type == "news" && defined(slug.current)] | order(publishedAt desc)[0...30]{ "slug": slug.current }`)
    return (slugs ?? []).map((s: any) => ({ slug: s.slug }))
  } catch {
    return []
  }
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })

export default async function NewsPost({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)
  if (!post) notFound()

  const hasBody = Array.isArray(post.body) && post.body.length > 0
  const cover = post.coverImage?.asset
    ? urlFor(post.coverImage).width(1200).height(675).fit('crop').auto('format').url()
    : null

  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Hero banner */}
        <div className="bg-[#111111] py-14 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10">
            <Link href="/news" className="inline-flex items-center gap-2 text-[11.5px] font-semibold text-white/60 hover:text-white transition-colors mb-6">
              <ArrowLeft size={14} strokeWidth={2} /> Back to News
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] bg-brand-yellow text-black px-3 py-1 rounded-full">
                {CATEGORY_LABELS[post.category] ?? post.category}
              </span>
            </div>
            <h1 className="text-[clamp(1.5rem,4vw,2.6rem)] font-extrabold text-white leading-[1.15] tracking-tight mb-5">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-[11.5px] text-white/55">
              <span className="flex items-center gap-1.5"><Calendar size={12} strokeWidth={2} />{formatDate(post.publishedAt)}</span>
              {post.author && <span className="flex items-center gap-1.5"><Tag size={12} strokeWidth={2} />{post.author}</span>}
            </div>
          </div>
        </div>

        {/* Cover image */}
        {cover ? (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 -mt-8 sm:-mt-10 relative z-10">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-[#111111]/10 shadow-lg bg-[#FAFAFA]">
              <Image src={cover} alt={post.coverImage?.alt || post.title} fill className="object-cover" sizes="(max-width: 896px) 100vw, 896px" priority />
            </div>
          </div>
        ) : null}

        {/* Article body */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
          <p className="text-[16px] sm:text-[17px] text-[#111111]/70 leading-[1.8] font-medium border-l-[3px] border-brand-yellow pl-5 mb-10">
            {post.summary}
          </p>

          {hasBody ? (
            <article className="max-w-none">
              <PortableBody value={post.body} />
            </article>
          ) : (
            <div className="bg-[#FAFAFA] border border-[#111111]/10 rounded-2xl p-8 text-center">
              <div className="text-[13px] text-[#111111]/40 mb-2">Full article content</div>
              <div className="text-[12px] text-[#111111]/30">The complete article will appear here once published in the CMS.</div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-12 pt-8 border-t border-[#111111]/10">
            <Link href="/news" className="inline-flex items-center gap-2 text-[12.5px] font-bold text-[#111111] hover:text-[#B26B00] transition-colors">
              <ArrowLeft size={14} strokeWidth={2.5} /> All News &amp; Events
            </Link>
            <ShareButton title={post.title} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
