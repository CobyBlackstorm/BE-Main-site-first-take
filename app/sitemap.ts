import type { MetadataRoute } from 'next'
import { getAllBlogPosts } from '@/lib/blog'
import { SPECIALTIES } from '@/lib/expertData'

const BASE = 'https://blackstormexperts.com'

/** Used when a static path is missing from the map, or a blog post has no date. */
const FALLBACK_LASTMOD = '2026-04-01'

/**
 * Hand-maintained lastmod dates for static routes (YYYY-MM-DD).
 * Update the entry whenever that page's content meaningfully changes.
 */
const STATIC_LASTMOD: Record<string, string> = {
  '/': '2026-04-01',
  '/about': '2026-06-09',
  '/become-expert': '2026-06-09',
  '/expert-witness': '2026-06-09',
  '/expert-witness-search': '2026-07-23',
  '/expert-witness-services-comparison': '2026-08-13',
  '/medical-expert-witness': '2026-07-23',
  '/life-care-planner-expert-witness': '2026-08-03',
  '/life-care-plan-rebuttal-expert': '2026-08-03',
  '/life-care-plan-cost-calculation-expert': '2026-08-03',
  '/tbi-expert-witness': '2026-08-03',
  '/heart-attack-expert-witness': '2026-08-08',
  '/aortic-dissection-expert-witness': '2026-08-08',
  '/seizure-expert-witness': '2026-08-08',
  '/spinal-cord-injury-expert-witness': '2026-08-08',
  '/knee-surgery-expert-witness': '2026-08-08',
  '/hip-surgery-expert-witness': '2026-08-08',
  '/hip-replacement-expert-witness': '2026-08-08',
  '/hospital-acquired-infection-expert-witness': '2026-08-08',
  '/postoperative-infection-expert-witness': '2026-08-08',
  '/delayed-diagnosis-expert-witness': '2026-08-08',
  '/surgical-error-expert-witness': '2026-08-08',
  '/medication-error-expert-witness': '2026-08-08',
  '/emergency-room-malpractice-expert-witness': '2026-08-08',
  '/anesthesia-malpractice-expert-witness': '2026-08-08',
  '/electrical-shock-expert-witness': '2026-08-08',
  '/electrical-fire-expert-witness': '2026-08-08',
  '/power-line-expert-witness': '2026-08-08',
  '/building-collapse-expert-witness': '2026-08-08',
  '/foundation-failure-expert-witness': '2026-08-08',
  '/slip-and-fall-expert-witness': '2026-08-08',
  '/truck-accident-expert-witness': '2026-08-08',
  '/trucking-safety-expert-witness': '2026-08-08',
  '/freight-broker-expert-witness': '2026-08-15',
  '/injury-causation-expert-witness': '2026-08-08',
  '/low-speed-impact-expert-witness': '2026-08-08',
  '/failure-to-diagnose-cancer-expert-witness': '2026-08-08',
  '/compartment-syndrome-expert-witness': '2026-08-15',
  '/cattle-fencing-expert-witness': '2026-08-15',
  '/ai-expert-witness': '2026-08-15',
  '/rat-infestation-expert-witness': '2026-08-15',
  '/pest-control-expert-witness': '2026-08-15',
  '/stroke-expert-witness': '2026-08-15',
  '/cruise-ship-expert-witness': '2026-08-15',
  '/spa-director-expert-witness': '2026-08-15',
  '/propane-expert-witness': '2026-08-15',
  '/forensic-pathologist-expert-witness': '2026-08-15',
  '/psychologist-expert-witness': '2026-08-15',
  '/child-psychologist-expert-witness': '2026-08-15',
  '/boat-accident-expert-witness': '2026-08-15',
  '/trip-and-fall-expert-witness': '2026-08-15',
  '/cowboy-expert-witness': '2026-08-15',
  '/forklift-expert-witness': '2026-08-15',
  '/hand-surgery-expert-witness': '2026-08-15',
  '/handwriting-expert-witness': '2026-08-15',
  '/critical-care-expert-witness': '2026-08-15',
  '/dental-malpractice-expert-witness': '2026-08-15',
  '/forensic-electrical-engineer-expert-witness': '2026-08-03',
  '/expert-witness/engineering': '2026-08-04',
  '/expert-witness/forensic': '2026-08-04',
  '/how-to-find-an-expert-witness': '2026-08-04',
  '/expert-witness-consulting': '2026-08-04',
  '/as-seen-on': '2026-06-09',
  '/blog': '2026-06-23',
}

function lastMod(path: string): Date {
  const iso = STATIC_LASTMOD[path]
  if (!iso) {
    console.warn(`Missing STATIC_LASTMOD entry for ${path}; using FALLBACK_LASTMOD`)
    return new Date(FALLBACK_LASTMOD)
  }
  return new Date(iso)
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: BASE,
      lastModified: lastMod('/'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE}/about`,
      lastModified: lastMod('/about'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE}/become-expert`,
      lastModified: lastMod('/become-expert'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE}/expert-witness`,
      lastModified: lastMod('/expert-witness'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/expert-witness-search`,
      lastModified: lastMod('/expert-witness-search'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/expert-witness-services-comparison`,
      lastModified: lastMod('/expert-witness-services-comparison'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE}/medical-expert-witness`,
      lastModified: lastMod('/medical-expert-witness'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/life-care-planner-expert-witness`,
      lastModified: lastMod('/life-care-planner-expert-witness'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/life-care-plan-rebuttal-expert`,
      lastModified: lastMod('/life-care-plan-rebuttal-expert'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/life-care-plan-cost-calculation-expert`,
      lastModified: lastMod('/life-care-plan-cost-calculation-expert'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/tbi-expert-witness`,
      lastModified: lastMod('/tbi-expert-witness'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/heart-attack-expert-witness`,
      lastModified: lastMod('/heart-attack-expert-witness'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/aortic-dissection-expert-witness`,
      lastModified: lastMod('/aortic-dissection-expert-witness'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/seizure-expert-witness`,
      lastModified: lastMod('/seizure-expert-witness'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/spinal-cord-injury-expert-witness`,
      lastModified: lastMod('/spinal-cord-injury-expert-witness'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/knee-surgery-expert-witness`,
      lastModified: lastMod('/knee-surgery-expert-witness'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/hip-surgery-expert-witness`,
      lastModified: lastMod('/hip-surgery-expert-witness'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/hip-replacement-expert-witness`,
      lastModified: lastMod('/hip-replacement-expert-witness'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/hospital-acquired-infection-expert-witness`,
      lastModified: lastMod('/hospital-acquired-infection-expert-witness'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/postoperative-infection-expert-witness`,
      lastModified: lastMod('/postoperative-infection-expert-witness'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/delayed-diagnosis-expert-witness`,
      lastModified: lastMod('/delayed-diagnosis-expert-witness'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/surgical-error-expert-witness`,
      lastModified: lastMod('/surgical-error-expert-witness'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/medication-error-expert-witness`,
      lastModified: lastMod('/medication-error-expert-witness'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/emergency-room-malpractice-expert-witness`,
      lastModified: lastMod('/emergency-room-malpractice-expert-witness'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/anesthesia-malpractice-expert-witness`,
      lastModified: lastMod('/anesthesia-malpractice-expert-witness'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/electrical-shock-expert-witness`,
      lastModified: lastMod('/electrical-shock-expert-witness'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/electrical-fire-expert-witness`,
      lastModified: lastMod('/electrical-fire-expert-witness'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/power-line-expert-witness`,
      lastModified: lastMod('/power-line-expert-witness'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/building-collapse-expert-witness`,
      lastModified: lastMod('/building-collapse-expert-witness'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/foundation-failure-expert-witness`,
      lastModified: lastMod('/foundation-failure-expert-witness'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/slip-and-fall-expert-witness`,
      lastModified: lastMod('/slip-and-fall-expert-witness'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/truck-accident-expert-witness`,
      lastModified: lastMod('/truck-accident-expert-witness'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/trucking-safety-expert-witness`,
      lastModified: lastMod('/trucking-safety-expert-witness'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/freight-broker-expert-witness`,
      lastModified: lastMod('/freight-broker-expert-witness'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/injury-causation-expert-witness`,
      lastModified: lastMod('/injury-causation-expert-witness'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/low-speed-impact-expert-witness`,
      lastModified: lastMod('/low-speed-impact-expert-witness'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/failure-to-diagnose-cancer-expert-witness`,
      lastModified: lastMod('/failure-to-diagnose-cancer-expert-witness'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/compartment-syndrome-expert-witness`,
      lastModified: lastMod('/compartment-syndrome-expert-witness'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/cattle-fencing-expert-witness`,
      lastModified: lastMod('/cattle-fencing-expert-witness'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/ai-expert-witness`,
      lastModified: lastMod('/ai-expert-witness'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/rat-infestation-expert-witness`,
      lastModified: lastMod('/rat-infestation-expert-witness'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/pest-control-expert-witness`,
      lastModified: lastMod('/pest-control-expert-witness'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/stroke-expert-witness`,
      lastModified: lastMod('/stroke-expert-witness'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/cruise-ship-expert-witness`,
      lastModified: lastMod('/cruise-ship-expert-witness'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/spa-director-expert-witness`,
      lastModified: lastMod('/spa-director-expert-witness'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/propane-expert-witness`,
      lastModified: lastMod('/propane-expert-witness'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/forensic-pathologist-expert-witness`,
      lastModified: lastMod('/forensic-pathologist-expert-witness'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/psychologist-expert-witness`,
      lastModified: lastMod('/psychologist-expert-witness'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/child-psychologist-expert-witness`,
      lastModified: lastMod('/child-psychologist-expert-witness'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/boat-accident-expert-witness`,
      lastModified: lastMod('/boat-accident-expert-witness'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/trip-and-fall-expert-witness`,
      lastModified: lastMod('/trip-and-fall-expert-witness'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/cowboy-expert-witness`,
      lastModified: lastMod('/cowboy-expert-witness'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/forklift-expert-witness`,
      lastModified: lastMod('/forklift-expert-witness'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/hand-surgery-expert-witness`,
      lastModified: lastMod('/hand-surgery-expert-witness'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/handwriting-expert-witness`,
      lastModified: lastMod('/handwriting-expert-witness'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/critical-care-expert-witness`,
      lastModified: lastMod('/critical-care-expert-witness'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/dental-malpractice-expert-witness`,
      lastModified: lastMod('/dental-malpractice-expert-witness'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/forensic-electrical-engineer-expert-witness`,
      lastModified: lastMod('/forensic-electrical-engineer-expert-witness'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/expert-witness/engineering`,
      lastModified: lastMod('/expert-witness/engineering'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/expert-witness/forensic`,
      lastModified: lastMod('/expert-witness/forensic'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/how-to-find-an-expert-witness`,
      lastModified: lastMod('/how-to-find-an-expert-witness'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/expert-witness-consulting`,
      lastModified: lastMod('/expert-witness-consulting'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/as-seen-on`,
      lastModified: lastMod('/as-seen-on'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE}/blog`,
      lastModified: lastMod('/blog'),
      changeFrequency: 'monthly',
      priority: 0.4,
    },
  ]

  const specialtyEntries: MetadataRoute.Sitemap = SPECIALTIES.map((specialty) => ({
    url: `${BASE}/expert-witness/${specialty.slug}`,
    lastModified: new Date(specialty.lastModified),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const blogEntries: MetadataRoute.Sitemap = getAllBlogPosts().map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(FALLBACK_LASTMOD),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticEntries, ...specialtyEntries, ...blogEntries]
}
