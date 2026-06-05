import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'As Seen On | Blackstorm Experts',
  description: 'Blackstorm Experts as featured on Product Hunt, LinkedIn, Trustpilot, Hotfrog, and Dang.ai.',
}

type Platform = {
  name: string
  href: string
  badge?: {
    src: string
    alt: string
    width: number
    height: number
  }
}

const platforms: Platform[] = [
  { name: 'Product Hunt', href: '#' },
  { name: 'LinkedIn', href: '#' },
  { name: 'Trustpilot', href: '#' },
  { name: 'Hotfrog', href: '#' },
  {
    name: 'Dang.ai',
    href: 'https://dang.ai',
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
                    rel={platform.badge ? 'dofollow noopener' : 'noopener noreferrer'}
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
                        className="block h-auto w-[260px] max-w-full border-0 outline-none"
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
