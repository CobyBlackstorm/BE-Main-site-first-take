import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Blog | Blackstorm Experts',
  description: 'Insights and updates from Blackstorm Experts. Coming soon.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    url: '/blog',
  },
}

export default function BlogPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-page py-[60px] md:py-20">
          <div className="section-container max-w-container text-center">
            <p className="section-label mb-3">Blog</p>
            <h1 className="mb-4 text-[36px] font-bold tracking-[-0.02em] text-primary">Coming Soon</h1>
            <p className="mx-auto max-w-[480px] text-[17px] leading-[1.7] text-secondary">
              We&apos;re working on articles and updates for litigation attorneys and expert witnesses. Check back soon.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
