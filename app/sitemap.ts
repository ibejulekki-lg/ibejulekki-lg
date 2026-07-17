import type { MetadataRoute } from 'next'
import { groq } from 'next-sanity'
import { client } from '@/lib/sanity'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ibejulekki-demo.vercel.app'

const STATIC_ROUTES = [
  '', '/news', '/about', '/about/history', '/about/culture', '/about/traditional-rulers',
  '/government/vision', '/government/chairman', '/government/executive-council',
  '/government/legislative-council', '/government/management-team',
  '/programmes/shieeld', '/programmes/budget', '/programmes/performance-report',
  '/resources/careers', '/resources/revenue', '/resources/waste', '/resources/forms',
  '/housing-tourism', '/contact', '/report', '/privacy', '/accessibility',
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let posts: { slug: string; publishedAt?: string }[] = []
  try {
    posts =
      (await client.fetch(
        groq`*[_type == "news" && defined(slug.current)]{ "slug": slug.current, publishedAt }`,
      )) ?? []
  } catch {}

  const now = new Date()
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((r) => ({
    url: SITE_URL + r,
    lastModified: now,
    changeFrequency: (r === '' || r === '/news' ? 'daily' : 'weekly') as 'daily' | 'weekly',
    priority: r === '' ? 1 : 0.7,
  }))
  const newsEntries: MetadataRoute.Sitemap = posts.map((p) => ({
    url: SITE_URL + '/news/' + p.slug,
    lastModified: p.publishedAt ? new Date(p.publishedAt) : now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))
  return [...staticEntries, ...newsEntries]
}
