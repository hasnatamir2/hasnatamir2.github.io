import type { MetadataRoute } from 'next'
import { getSiteSettings } from '../sanity/lib/data'
import { SITE_URL } from '../lib/seo'

export const revalidate = 300

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { data: settings } = await getSiteSettings()
  if (settings?.seo.noIndex) return []
  return [
    {
      url: SITE_URL,
      ...(settings?._updatedAt ? { lastModified: settings._updatedAt } : {}),
    },
  ]
}
