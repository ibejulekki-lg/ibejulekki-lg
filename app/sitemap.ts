import type { MetadataRoute } from 'next'
import { groq } from 'next-sanity'
import { client } from '@/lib/sanity'
import { PILLARS } from '@/lib/shieeld'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ibejulekki-demo.vercel.app'

const STATIC_ROUTES = [
  '', '/news', '/about', '/about/history', '/about/culture', '/about/traditional-rulers',
  '/government/vision', '/government/chairman', '/government/executive-council',
  '/government/legislative-council', '/government/management-team',
  '/programmes/shieeld', '/programmes/budget', '/programmes/performance-report',
  '/housing-tourism', '/resources/revenue', '/resources/waste', '/resources/careers',
  '/resources/forms', '/contact', '/report', '/privacy', '/accessibility',
]

export const revalidate = 3600

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()
  const entries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === '' || route === '/news' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.7,
  }))

  for (const pillar of PILLARS) {
    entries.push({
      url: `${SITE_URL}/programmes/shieeld/${pillar.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    })
  }

  try {
    const posts: { slug: string; publishedAt?: string }[] =
      (await client.fetch(groq`*[_type == "news" && defined(slug.current)]{ "slug": slug.current, publishedAt }`)) ?? []
    for (const post of posts) {
      entries.push({
        url: `${SITE_URL}/news/${post.slug}`,
        lastModified: post.publishedAt ? new Date(post.publishedAt) : now,
        changeFrequency: 'monthly',
        priority: 0.5,
      })
    }
  } catch {
    /* Sanity unreachable, ship the static routes only */
  }

  return entries
}
