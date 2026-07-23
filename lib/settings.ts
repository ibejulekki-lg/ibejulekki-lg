import { client } from '@/lib/sanity'
import { siteSettingsQuery } from '@/lib/queries'

/* Single source of truth for site contact details. Values come from the
   Site Settings document in Sanity when available, with the constants
   below as offline fallbacks. */

export interface SiteSettings {
  siteName: string
  tagline: string
  address: string
  phone: string
  email: string
  officeHours: string
  socials: { twitter?: string; facebook?: string; instagram?: string; youtube?: string }
}

export const DEFAULT_SETTINGS: SiteSettings = {
  siteName: 'Ibeju-Lekki Local Government Area',
  tagline: 'The Official Website of Ibeju-Lekki LGA',
  address: 'Klm 47, Lekki-Epe Expressway,\nIgando-Oloja, Ibeju-Lekki, Lagos State.',
  phone: '08079792040, 09167148716',
  email: 'info@ibejulekki.lg.gov.ng',
  officeHours: 'Mon - Fri, 8am - 4pm',
  socials: {
    facebook: 'https://web.facebook.com/Idagbasokeibejulekki',
    twitter: 'https://twitter.com/Olowajaja',
    instagram: 'https://www.instagram.com/ibeju_lekkilg',
  },
}

export async function getSiteSettings(): Promise<SiteSettings> {
  try {
    const data = await client.fetch(siteSettingsQuery)
    if (!data) return DEFAULT_SETTINGS
    return {
      siteName: data.siteName ?? DEFAULT_SETTINGS.siteName,
      tagline: data.tagline ?? DEFAULT_SETTINGS.tagline,
      address: data.address ?? DEFAULT_SETTINGS.address,
      phone: data.phone ?? DEFAULT_SETTINGS.phone,
      email: data.email ?? DEFAULT_SETTINGS.email,
      officeHours: data.officeHours ?? DEFAULT_SETTINGS.officeHours,
      socials: data.socials ?? {},
    }
  } catch {
    return DEFAULT_SETTINGS
  }
}
