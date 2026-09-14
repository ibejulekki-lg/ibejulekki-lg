import type { MetadataRoute } from 'next'
import { groq } from 'next-sanity'
import { client } from '@/lib/sanity'
import { INVESTMENTS } from '@/lib/investments'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ibejulekki.lg.gov.ng'

/* Pages with real content. Placeholder pages are deliberately excluded:
   listing empty pages in the sitemap invites Google to index thin content,
   which drags the whole site down. Add a route here once its page is written. */
const STATIC_ROUTES = [
  '',
  '/news',
  '/contact',

  '/about',
  '/about/history',
  '/about/culture',
  '/about/traditional-rulers',

  '/government/vision',
  '/government/chairman',
  '/government/executive-council',
  '/government/legislative-council',
  '/government/management-team',

  '/programmes/shieeld',
  '/programmes/budget',
  '/programmes/performance-report',

  '/opportunities/housing',
  '/opportunities/housing/citrus-garden',
  '/opportunities/housing/housing-opportunities',
  '/opportunities/tourism',
  '/opportunities/investment',

  '/resources/careers',
]

/* Traditional ruler pages, matching the routes the build actually generates. */
const RULERS = [
  'orimedu', 'araromi', 'kayetoro', 'debojo', 'itedo',
  'lakowe', 'akodo', 'ogunfayo', 'ibeju', 'onisolu', 'lagasa',
]

/* SHIEELD pillar pages. */
const PILLARS = [
  'security', 'health', 'infrastructure', 'education',
  'environment', 'local-economy', 'digital-governance',
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let posts: { slug: string; publishedAt?: string; updatedAt?: string }[] = []
  try {
    posts =
      (await client.fetch(
        groq`*[_type == "news" && defined(slug.current)]{ "slug": slug.current, publishedAt, "updatedAt": _updatedAt }`,
      )) ?? []
  } catch {}

  let programmes: { slug: string }[] = []
  try {
    programmes =
      (await client.fetch(
        groq`*[_type == "programme" && active == true && defined(slug.current)]{ "slug": slug.current }`,
      )) ?? []
  } catch {}

  const now = new Date()

  const entry = (
    path: string,
    priority: number,
    changeFrequency: 'daily' | 'weekly' | 'monthly',
    lastModified: Date = now,
  ) => ({ url: SITE_URL + path, lastModified, changeFrequency, priority })

  return [
    ...STATIC_ROUTES.map((r) =>
      entry(r, r === '' ? 1 : 0.7, r === '' || r === '/news' ? 'daily' : 'weekly'),
    ),
    ...RULERS.map((s) => entry('/about/traditional-rulers/' + s, 0.6, 'monthly')),
    ...PILLARS.map((s) => entry('/programmes/shieeld/' + s, 0.7, 'monthly')),
    ...INVESTMENTS.map((i) => entry('/opportunities/investment/' + i.slug, 0.7, 'monthly')),
    ...programmes.map((p) => entry('/resources/careers/' + p.slug, 0.6, 'weekly')),
    ...posts.map((p) =>
      entry(
        '/news/' + p.slug,
        0.6,
        'monthly',
        p.updatedAt ? new Date(p.updatedAt) : p.publishedAt ? new Date(p.publishedAt) : now,
      ),
    ),
  ]
}
