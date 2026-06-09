import Link from 'next/link'
import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { SPECIALTIES } from '@/lib/expertData'

export const metadata: Metadata = {
  title: 'Expert Witness Specialties | Blackstorm Experts',
  description:
    'Browse expert witness specialties. Blackstorm sources qualified experts for litigation attorneys in 48–72 hours. Flat rate, satisfaction guaranteed.',
  alternates: {
    canonical: '/expert-witness',
  },
  openGraph: {
    url: '/expert-witness',
  },
}

export default function ExpertWitnessIndexPage() {
  const specialtiesAlphabetical = [...SPECIALTIES].sort((a, b) =>
    a.name.localeCompare(b.name, 'en', { sensitivity: 'base' })
  )

  return (
    <>
      <Nav />
      <main>
        <div className="bg-page py-[60px] md:py-20">
          <div className="section-container max-w-container">
            <h1 className="mb-4 text-center text-[36px] font-bold tracking-[-0.02em] text-primary">Expert Witness Specialties</h1>
            <p className="mx-auto mb-12 max-w-[640px] text-center text-[17px] leading-[1.7] text-secondary">
              Select a specialty to learn how Blackstorm connects you with vetted expert witnesses for your case.
            </p>
            <ul className="mx-auto grid max-w-[720px] gap-3">
              {specialtiesAlphabetical.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/expert-witness/${s.slug}`}
                    className="block rounded-lg border border-card-border bg-white px-5 py-4 text-[17px] font-semibold text-primary shadow-card transition-all duration-200 hover:border-accent hover:shadow-card-hover"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <section className="bg-[#eceae4] py-[60px]">
          <div className="section-container max-w-container text-center">
            <h2 className="text-[32px] font-bold text-[#1a1a1a]">Don&apos;t See Your Specialty?</h2>
            <p className="mx-auto mt-4 max-w-[600px] text-[16px] text-[#4a5568]">
              We source expert witnesses across every discipline, jurisdiction, and niche — from the most common specialties to the
              most obscure. If your case needs an expert, we&apos;ll find one.
            </p>
            <a
              href="#"
              data-open-search-modal
              className="mt-7 inline-flex items-center justify-center rounded-md bg-accent px-12 py-4 text-base font-semibold text-white transition-all duration-200 ease-in-out hover:bg-accent-hover"
            >
              Start Your Expert Search
            </a>
            <p className="mt-3 text-[13px] text-[#4a5568]">
              No payment until we deliver. No obligation to retain. Satisfaction guaranteed.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
