import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FinalCTA from '@/components/FinalCTA'
import ExpertTrustIcons from '@/components/ExpertTrustIcons'
import { getSpecialtyBySlug, getAllSpecialtySlugs, type ExpertSpecialty } from '@/lib/expertData'

type Props = {
  params: { specialty: string }
}

/** Specialty page sections: 40px vertical padding mobile, 60px desktop. */
const sectionPadding = 'py-[40px] md:py-[60px]'

export function generateStaticParams() {
  return getAllSpecialtySlugs().map((specialty) => ({ specialty }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const specialty = getSpecialtyBySlug(params.specialty)
  if (!specialty) {
    return { title: 'Not Found | Blackstorm Experts' }
  }
  return {
    title: specialty.metaTitle,
    description: specialty.metaDescription,
    alternates: {
      canonical: `https://blackstormexperts.com/expert-witness/${params.specialty}`,
    },
  }
}

function PillList({ items, compact }: { items: string[]; compact?: boolean }) {
  return (
    <div className={`flex flex-wrap items-center justify-center ${compact ? 'gap-2' : 'gap-3'}`}>
      {items.map((item) => (
        <span
          key={item}
          className={
            compact
              ? 'inline-block rounded-full border border-card-border bg-white px-3 py-1.5 text-[13px] font-medium leading-snug text-primary'
              : 'inline-block rounded-full border border-card-border bg-white px-5 py-2 text-sm font-medium text-primary'
          }
        >
          {item}
        </span>
      ))}
    </div>
  )
}

export default function ExpertSpecialtyPage({ params }: Props) {
  const data = getSpecialtyBySlug(params.specialty)
  if (!data) {
    notFound()
  }

  return (
    <>
      <Nav />
      <Breadcrumb specialty={data} />
      <main>
        <HeroSection data={data} />
        <CombinedPillsSection data={data} />
        <ContentSection data={data} />
        <ExpertTrustIcons />
        <FinalCTA compact />
      </main>
      <Footer />
    </>
  )
}

function Breadcrumb({ specialty }: { specialty: ExpertSpecialty }) {
  return (
    <div className="mb-0 bg-page">
      <div className="mx-auto max-w-container px-6 pb-0 pt-3 text-[13px] md:px-10">
        <Link href="/" className="text-secondary transition-colors duration-200 hover:text-primary">
          Home
        </Link>
        <span className="mx-1.5 text-secondary/70">&gt;</span>
        <Link href="/expert-witness" className="text-secondary transition-colors duration-200 hover:text-primary">
          Expert Witness
        </Link>
        <span className="mx-1.5 text-secondary/70">&gt;</span>
        <span className="text-secondary">{specialty.name}</span>
      </div>
    </div>
  )
}

function HeroSection({ data }: { data: ExpertSpecialty }) {
  return (
    <section className="bg-page pt-6 pb-6 md:pt-7 md:pb-8">
      <div className="section-container max-w-container text-center">
        <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.1em] text-accent">Expert Witness</p>
        <h1 className="text-[clamp(1.75rem,5vw,44px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-primary md:text-[44px]">
          {data.heroHeading}
        </h1>
        <p className="mx-auto mt-4 max-w-[650px] text-[17px] font-normal leading-[1.7] text-secondary">
          {data.heroSubheading}
        </p>
        <a
          href="#"
          data-open-search-modal
          className="mt-7 inline-flex items-center justify-center rounded-md bg-accent px-12 py-4 text-base font-semibold text-white transition-all duration-200 ease-in-out hover:bg-accent-hover"
        >
          Start Your Expert Search
        </a>
        <p className="mb-0 mt-3 text-[13px] font-normal text-secondary">
          No payment until we deliver. No obligation to retain. Satisfaction guaranteed.
        </p>
      </div>
    </section>
  )
}

function CombinedPillsSection({ data }: { data: ExpertSpecialty }) {
  return (
    <section className="bg-muted pt-[36px] pb-[36px]">
      <div className="section-container max-w-container">
        <p className="mb-3 text-center text-[12px] font-semibold uppercase tracking-[0.1em] text-accent">Common Case Types</p>
        <PillList items={data.commonCases} compact />

        <div className="mt-5">
          <p className="mb-3 text-center text-[12px] font-semibold uppercase tracking-[0.1em] text-accent">Subspecialties</p>
          <PillList items={data.subspecialties} compact />
        </div>
      </div>
    </section>
  )
}

function ContentSection({ data }: { data: ExpertSpecialty }) {
  return (
    <section className={`bg-page ${sectionPadding}`}>
      <div className="mx-auto max-w-[720px] px-6 text-left md:px-10">
        {data.content.map((paragraph, i) => (
          <p key={i} className={`text-[17px] font-normal leading-[1.85] text-primary ${i < data.content.length - 1 ? 'mb-6' : ''}`}>
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  )
}
