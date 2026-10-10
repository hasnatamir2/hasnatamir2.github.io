import type { MetadataRoute } from 'next'
import { getProjectImages, getSiteSettings } from '../sanity/lib/data'
import { SITE_URL } from '../lib/seo'
import { urlFor } from '../sanity/lib/image'

export const revalidate = 300

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { data: settings } = await getSiteSettings()
  if (settings?.seo.noIndex) return []
  const { data: projectImages } = await getProjectImages()
  const avatar = settings?.hero?.avatar
  const images = [
    ...(avatar?.asset ? [urlFor(avatar.asset).url()] : []),
    ...(projectImages || []).flatMap(({ image }) =>
      image?.asset ? [urlFor(image.asset).url()] : []
    ),
  ]
  return [
    {
      url: SITE_URL,
      images: Array.from(new Set(images)),
      ...(settings?._updatedAt ? { lastModified: settings._updatedAt } : {}),
    },
  ]
}
