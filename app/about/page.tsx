import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FinalCTA from '@/components/FinalCTA'
import ExpertTrustIcons from '@/components/ExpertTrustIcons'

export const metadata: Metadata = {
  title: 'About Blackstorm Experts | Expert Witness Search for Litigation Attorneys',
  description:
    'Blackstorm Experts was founded to give litigation attorneys a faster, simpler way to find qualified expert witnesses. Every search is handled personally by founder Coby Weiss.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    url: '/about',
  },
}

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-page">
          <div className="mx-auto max-w-[1100px] px-6 py-[60px] md:px-10 md:py-20">
            <div className="flex flex-col items-center gap-10 md:grid md:grid-cols-[2fr_3fr] md:items-center md:gap-[60px]">
              <div className="flex w-full justify-center md:block md:w-full">
                <div className="relative mx-auto h-[380px] w-full max-w-[280px] overflow-hidden rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] md:mx-0 md:max-w-[300px] md:w-[300px]">
                  <Image
                    src="/founder.png"
                    alt="Professional headshot of Coby Weiss, founder of Blackstorm Experts, wearing a navy blazer and light blue shirt against a gray background."
                    fill
                    sizes="(max-width: 767px) min(280px, 100vw), 300px"
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>

              <div className="min-w-0 w-full">
                <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.1em] text-accent">About the founder</p>
                <h1 className="mb-5 text-[32px] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#1a1a1a]">
                  You&apos;re Not Working With an Account Rep. You&apos;re Working With the Founder.
                </h1>
                <p className="mb-4 text-[16px] leading-[1.8] text-[#4a5568]">
                  Before starting Blackstorm, I worked at{' '}
                  <strong className="font-bold text-[#1a1a1a]">one of the nation&apos;s largest defense firms</strong>. I saw firsthand how
                  high the demand was for quality expert witnesses and how poor the solutions were for finding them. Firms were overusing the
                  same handful of experts simply because{' '}
                  <strong className="font-bold text-[#1a1a1a]">finding new ones was too slow and too painful</strong>.
                </p>
                <p className="mb-4 text-[16px] leading-[1.8] text-[#4a5568]">
                  The existing services weren&apos;t cutting it.{' '}
                  <strong className="font-bold text-[#1a1a1a]">
                    Overpriced retainers, hidden fees, slow turnarounds, and bloated databases
                  </strong>{' '}
                  that left attorneys doing half the work themselves. <strong className="font-bold text-[#1a1a1a]">There had to be a better way</strong>.
                </p>
                <p className="mb-4 text-[16px] leading-[1.8] text-[#4a5568]">
                  That&apos;s why I built Blackstorm.{' '}
                  <strong className="font-bold text-[#1a1a1a]">
                    A straightforward sourcing service with no fluff, no retainers, and no runaround
                  </strong>
                  . You tell me what you need, I find the right expert fast, and you only pay when I deliver.{' '}
                  <strong className="font-bold text-[#1a1a1a]">Every search is handled personally by me</strong>, not a junior researcher, not
                  an algorithm.
                </p>
                <Link
                  href="#"
                  data-open-search-modal
                  className="mt-7 inline-flex items-center justify-center rounded-md bg-accent px-12 py-4 text-base font-semibold text-white transition-all duration-200 ease-in-out hover:bg-accent-hover"
                >
                  Start Your Expert Search
                </Link>
              </div>
            </div>
          </div>
        </section>
        <ExpertTrustIcons />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
