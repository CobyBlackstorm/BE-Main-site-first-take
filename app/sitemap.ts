import type { MetadataRoute } from 'next'
import { getAllSpecialtySlugs } from '@/lib/expertData'

const BASE = 'https://blackstormexperts.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE}/become-expert`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE}/expert-witness`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/as-seen-on`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]

  const specialtyEntries: MetadataRoute.Sitemap = getAllSpecialtySlugs().map((slug) => ({
    url: `${BASE}/expert-witness/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [...staticEntries, ...specialtyEntries]
}
