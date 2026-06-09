import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'As Seen On | Blackstorm Experts',
  description: 'Blackstorm Experts as featured on Product Hunt, LinkedIn, Trustpilot, Hotfrog, Dang.ai, and Indie Hackers.',
  alternates: {
    canonical: '/as-seen-on',
  },
  openGraph: {
    url: '/as-seen-on',
  },
}

type Platform = {
  name: string
  href: string
  rel?: string
  badge?: {
    src: string
    alt: string
    width: number
    height: number
  }
}

const platforms: Platform[] = [
  {
    name: 'Product Hunt',
    href: 'https://www.producthunt.com/products/blackstorm-experts?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-blackstorm-experts',
    rel: 'noopener noreferrer',
    badge: {
      src: 'https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1163790&theme=light&t=1780669446148',
      alt: 'Blackstorm Experts - Legal Service | Product Hunt',
      width: 250,
      height: 54,
    },
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/blackstorm-experts/',
    rel: 'noopener noreferrer',
    badge: {
      src: '/logos/linkedin.svg',
      alt: 'Blackstorm Experts on LinkedIn',
      width: 56,
      height: 56,
    },
  },
  {
    name: 'Trustpilot',
    href: 'https://ie.trustpilot.com/review/blackstormexperts.com',
    rel: 'noopener noreferrer',
    badge: {
      src: '/logos/trustpilot.svg',
      alt: 'Blackstorm Experts on Trustpilot',
      width: 150,
      height: 37,
    },
  },
  {
    name: 'Hotfrog',
    href: 'https://www.hotfrog.com/company/562245905f7e68735069c521cffed698',
    rel: 'noopener noreferrer',
    badge: {
      src: '/logos/hotfrog.png',
      alt: 'Blackstorm Experts on Hotfrog',
      width: 150,
      height: 41,
    },
  },
  {
    name: 'Indie Hackers',
    href: 'https://www.indiehackers.com/product/blackstorm-experts',
    rel: 'noopener noreferrer',
    badge: {
      src: '/logos/indiehackers.svg',
      alt: 'Blackstorm Experts on Indie Hackers',
      width: 56,
      height: 56,
    },
  },
  {
    name: 'Dang.ai',
    href: 'https://dang.ai',
    rel: 'dofollow noopener',
    badge: {
      src: 'https://assets.dang.ai/badges/dang-verified-dark.png',
      alt: 'Verified on DANG!',
      width: 260,
      height: 94,
    },
  },
]

export default function AsSeenOnPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-page py-[60px] md:py-20">
          <div className="section-container max-w-container">
            <p className="section-label mb-3 text-center">Press &amp; Listings</p>
            <h1 className="mb-4 text-center text-[36px] font-bold tracking-[-0.02em] text-primary">As Seen On</h1>
            <p className="mx-auto mb-12 max-w-[560px] text-center text-[17px] leading-[1.7] text-secondary">
              Blackstorm Experts has been featured and listed on the following platforms.
            </p>

            <ul className="mx-auto grid max-w-[800px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {platforms.map((platform) => (
                <li key={platform.name} className={platform.badge ? 'flex justify-center' : undefined}>
                  <a
                    href={platform.href}
                    target="_blank"
                    rel={platform.rel ?? 'noopener noreferrer'}
                    className={
                      platform.badge
                        ? 'inline-flex items-center justify-center'
                        : 'flex h-full min-h-[100px] items-center justify-center rounded-lg border border-card-border bg-white px-6 py-8 text-center text-[17px] font-semibold text-primary shadow-card transition-all duration-200 hover:border-accent hover:shadow-card-hover'
                    }
                  >
                    {platform.badge ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={platform.badge.src}
                        alt={platform.badge.alt}
                        width={platform.badge.width}
                        height={platform.badge.height}
                        className="block h-auto max-w-full border-0 outline-none"
                        style={{ width: platform.badge.width }}
                      />
                    ) : (
                      platform.name
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
