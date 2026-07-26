import { groq } from 'next-sanity'

export const homepageNewsQuery = groq`
  *[_type == "news"] | order(publishedAt desc) [0...8] {
    _id, title, slug, category, publishedAt, featured, summary,
    "coverImage": coverImage { asset, alt, hotspot }
  }
`

export const quickServicesQuery = groq`
  *[_type == "quickService" && active == true] | order(order asc) {
    _id, label, description, icon, href, external
  }
`

export const chairmanQuery = groq`
  *[_type == "chairmanMessage"][0] {
    name, title, pullQuote, fullMessage,
    "photo": photo { asset, alt, hotspot },
    stats
  }
`

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    siteName, tagline, address, phone, email, officeHours, socials, emergencyLines
  }
`

export const newsPostBySlugQuery = groq`
  *[_type == "news" && slug.current == $slug][0] {
    _id, title, slug, category, publishedAt, _updatedAt, summary, author, tags,
    body[]{
      ...,
      _type == "fileDownload" => {
        _type, label, "url": asset->url, "fileName": asset->originalFilename, "size": asset->size
      }
    },
    cta {
      label, href,
      "fileUrl": file.asset->url,
      "fileName": file.asset->originalFilename
    },
    "coverImage": coverImage { asset, alt, hotspot }
  }
`

export const programmesQuery = groq`
  *[_type == "programme" && active == true] | order(order asc, title asc) {
    _id, title, slug, summary, status, audience, venue, deadline, partners,
    "coverImage": coverImage { asset, alt, hotspot }
  }
`

export const programmeBySlugQuery = groq`
  *[_type == "programme" && slug.current == $slug && active == true][0] {
    _id, title, slug, summary, status, audience, venue, deadline, contact,
    outcomes, partners, body, howToApply, applyLink,
    "applyFileUrl": applyFile.asset->url,
    "coverImage": coverImage { asset, alt, hotspot }
  }
`
