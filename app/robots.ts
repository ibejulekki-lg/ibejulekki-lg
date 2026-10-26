import type { MetadataRoute } from "next"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ibejulekki.lg.gov.ng"

// Bulk crawlers that cost hosting credits and send no visitors to a council
// site: AI-training scrapers and commercial SEO tools. Google, Bing and the
// AI search bots that cite and link the site are still allowed.
const BLOCKED_BOTS = [
  "GPTBot", "ClaudeBot", "anthropic-ai", "CCBot", "Bytespider", "Amazonbot",
  "meta-externalagent", "Diffbot", "ImagesiftBot", "cohere-ai", "omgili",
  "AhrefsBot", "SemrushBot", "MJ12bot", "DotBot", "PetalBot", "BLEXBot", "DataForSeoBot",
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: BLOCKED_BOTS, disallow: "/" },
      { userAgent: "*", allow: "/", disallow: ["/studio", "/studio/", "/api/"] },
    ],
    sitemap: SITE_URL + "/sitemap.xml",
    host: SITE_URL,
  }
}
