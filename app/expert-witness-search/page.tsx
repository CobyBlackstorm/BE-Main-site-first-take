import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FinalCTA from '@/components/FinalCTA'

export const metadata: Metadata = {
  title: 'Expert Witness Search | Find an Expert Witness in 48 Hours',
  description:
    'Custom expert witness sourcing for law firms nationwide. Tell us the case, get vetted candidates with CVs, fee schedules, and interview notes in 48 to 72 hours.',
  alternates: {
    canonical: '/expert-witness-search',
  },
  openGraph: {
    url: '/expert-witness-search',
    title: 'Expert Witness Search | Find an Expert Witness in 48 Hours',
    description:
      'Custom expert witness sourcing for law firms nationwide. Tell us the case, get vetted candidates with CVs, fee schedules, and interview notes in 48 to 72 hours.',
  },
}

const steps = [
  {
    number: '1',
    title: 'Case intake',
    description:
      'You send the case facts, jurisdiction, side, and the qualifications that matter. Fifteen minutes on the phone or a short email is usually enough.',
  },
  {
    number: '2',
    title: 'Sourcing',
    description:
      'We identify candidates through academic institutions, professional associations, practice groups, and our own bench. This is where most of the work happens and it is not a database lookup.',
  },
  {
    number: '3',
    title: 'Outreach and screening',
    description:
      'We contact each candidate directly, confirm availability, check for conflicts, and talk through the case facts to make sure the fit is real and not just a resume match.',
  },
  {
    number: '4',
    title: 'Delivery',
    description:
      "You receive a packet with each candidate's CV, fee schedule, and our notes from the interview.",
  },
]

const packetItems = [
  {
    title: 'Full CV',
    detail: 'Credentials, practice history, and publications in one place.',
  },
  {
    title: 'Current fee schedule',
    detail: 'Review, deposition, and trial rates spelled out before you engage.',
  },
  {
    title: 'Screening interview notes',
    detail: 'Availability, prior testimony experience, and how they discussed the case facts.',
  },
  {
    title: 'Availability and conflicts',
    detail: 'Confirmed available, with no conflicts flagged before you see the name.',
  },
]

const directoryPoints = [
  'Candidates are selected for your case, not pulled from a paid list',
  'We contact and screen every candidate before you see the name',
  'Experts who do not market themselves are still reachable, which matters because heavily marketed experts draw credibility attacks on cross',
  'You are not paying for access to names you will never call',
]

const practiceAreas: {
  title: string
  specialties: { label: string; slug?: string }[]
}[] = [
  {
    title: 'Medical',
    specialties: [
      { label: 'Emergency medicine', slug: 'emergency-medicine' },
      { label: 'Cardiology', slug: 'cardiology' },
      { label: 'Radiology', slug: 'radiology' },
      { label: 'Orthopedic surgery', slug: 'orthopedic-surgery' },
      { label: 'Anesthesiology', slug: 'anesthesiology' },
      { label: 'Oncology', slug: 'oncology' },
      { label: 'Neurology', slug: 'neurology' },
      { label: 'Pediatrics', slug: 'pediatrics' },
      { label: 'Obstetrics', slug: 'gynecology-obstetrics' },
      { label: 'Pathology', slug: 'pathology' },
      { label: 'Nephrology', slug: 'nephrology' },
      { label: 'Rheumatology', slug: 'rheumatology' },
      { label: 'Dermatology', slug: 'dermatology' },
      { label: 'Gastroenterology', slug: 'gastroenterology' },
      { label: 'Infectious disease', slug: 'infectious-disease' },
      { label: 'Ophthalmology', slug: 'ophthalmology' },
      { label: 'Vascular surgery', slug: 'vascular-surgery' },
      { label: 'Psychiatry', slug: 'psychiatry' },
      { label: 'Nursing' },
      { label: 'Pharmacology', slug: 'pharmacology' },
      { label: 'Toxicology', slug: 'toxicology' },
      { label: 'Medical billing and coding' },
    ],
  },
  {
    title: 'Engineering and technical',
    specialties: [
      { label: 'Accident reconstruction', slug: 'accident-reconstruction' },
      { label: 'Biomechanics', slug: 'biomechanics' },
      { label: 'Human factors', slug: 'human-factors' },
      { label: 'Electrical engineering', slug: 'electrical-engineering' },
      { label: 'Civil engineering', slug: 'civil-engineering' },
      { label: 'Structural engineering', slug: 'structural-engineering' },
      { label: 'Mechanical engineering' },
      { label: 'Fire investigation', slug: 'fire-investigation' },
      { label: 'Products liability engineering', slug: 'products-liability-engineering' },
      { label: 'Construction defect', slug: 'construction-defect' },
      { label: 'Premises safety', slug: 'premises-liability-security' },
    ],
  },
  {
    title: 'Financial and economic',
    specialties: [
      { label: 'Forensic accounting', slug: 'forensic-accounting' },
      { label: 'Forensic economics', slug: 'forensic-economics' },
      { label: 'Life care planning', slug: 'life-care-planning' },
      { label: 'Vocational rehabilitation', slug: 'vocational-rehabilitation' },
      { label: 'Business valuation' },
      { label: 'Medical billing analysis' },
    ],
  },
  {
    title: 'Transportation',
    specialties: [
      { label: 'Trucking and commercial motor vehicle', slug: 'trucking-transportation' },
      { label: 'DOT compliance', slug: 'trucking-transportation' },
      { label: 'Maritime and admiralty', slug: 'maritime-admiralty' },
      { label: 'Aviation' },
      { label: 'Rail' },
    ],
  },
  {
    title: 'Other',
    specialties: [
      { label: 'Employment and HR', slug: 'employment-hr' },
      { label: 'Nursing home and elder abuse', slug: 'nursing-home-elder-abuse' },
      { label: 'Workers compensation', slug: 'workers-compensation' },
      { label: 'Real estate', slug: 'real-estate' },
      { label: 'Security and premises liability', slug: 'premises-liability-security' },
      { label: 'Medical malpractice', slug: 'medical-malpractice' },
      { label: 'Personal injury', slug: 'personal-injury' },
    ],
  },
]

const clientTypes = [
  'Plaintiff firms',
  'Defense firms',
  'Solo practitioners',
  'Large firms',
  'Personal injury',
  'Medical malpractice',
  'Product liability',
  'Commercial litigation',
  'Employment',
]

const faqs = [
  {
    question: 'How long does an expert witness search take?',
    answer:
      'Standard searches deliver in 48 to 72 hours. Highly specialized requests take longer, and we tell you upfront if a search is going to be difficult rather than quietly missing the deadline.',
  },
  {
    question: 'What is included in the candidate packet?',
    answer:
      'Every packet includes a full CV, a current fee schedule covering review, deposition, and trial rates, notes from our screening interview, and confirmation that the candidate is available and has no conflicts.',
  },
  {
    question: 'How is a custom search different from an expert witness directory?',
    answer:
      'Directories sell listings. Experts pay to appear, so the list reflects who bought placement. A custom search selects candidates for your case, screens them before you see a name, and reaches experts who do not market themselves.',
  },
  {
    question: 'What practice areas do you cover?',
    answer:
      'Medical, engineering and technical, financial and economic, transportation, and other litigation specialties. Browse the full expert witness directory, or ask if your case needs something not listed. Most searches we run are for specialties nobody thought to advertise.',
  },
  {
    question: 'Who do you work with?',
    answer:
      'Plaintiff and defense firms nationwide. Solo practitioners through large firms. Personal injury, medical malpractice, product liability, commercial litigation, and employment matters.',
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Expert Witness Search',
  serviceType: 'Expert witness sourcing',
  description:
    'Custom expert witness sourcing for law firms nationwide. Tell us the case, get vetted candidates with CVs, fee schedules, and interview notes in 48 to 72 hours.',
  url: 'https://blackstormexperts.com/expert-witness-search',
  provider: {
    '@type': 'Organization',
    name: 'Blackstorm Experts',
    url: 'https://blackstormexperts.com',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

const linkClass = 'font-medium text-accent underline-offset-2 transition-colors hover:text-accent-hover hover:underline'

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4a5568" strokeWidth="1.5" strokeLinecap="round" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  )
}

export default function ExpertWitnessSearchPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Nav />
      <main>
        {/* Hero */}
        <section className="bg-page section-padding">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-16">
            <div className="min-w-0">
              <p className="section-label mb-4">Custom Expert Sourcing</p>
              <h1 className="max-w-[560px] text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold leading-[1.08] tracking-[-0.035em] text-primary">
                Expert Witness Search
              </h1>
              <p className="mt-4 max-w-[480px] text-[20px] font-semibold leading-[1.4] tracking-[-0.01em] text-primary">
                Custom sourcing. Screened candidates. Delivered in 48 to 72 hours.
              </p>
              <p className="mt-6 max-w-[480px] text-[17px] leading-[1.75] text-secondary">
                Most expert witness services sell you access to a directory. You pay, you get a list, and you spend the next two
                weeks calling people who may or may not be available, qualified, or willing to take your side of the case.
              </p>
              <p className="mt-4 max-w-[480px] text-[17px] leading-[1.75] text-secondary">
                Blackstorm works differently. You tell us what the case needs. We do the sourcing, the outreach, and the
                screening calls. You get a short list of candidates who have already confirmed they are available and
                interested.
              </p>
              <a
                href="#"
                data-open-search-modal
                className="mt-8 inline-flex items-center justify-center rounded-md bg-accent px-12 py-4 text-base font-semibold text-white transition-all duration-200 ease-in-out hover:bg-accent-hover hover:shadow-[0_4px_14px_rgba(26,58,92,0.25)]"
              >
                Request an Expert
              </a>
              <p className="mt-3 text-[13px] text-secondary">
                No payment until we deliver. No obligation to retain. Satisfaction guaranteed.
              </p>
            </div>

            <div className="flex min-w-0 justify-center lg:justify-end">
              <div className="w-full max-w-[420px] overflow-hidden rounded-xl border border-card-border bg-white shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
                <div className="h-[3px] w-full bg-accent" />
                <div className="p-[28px]">
                  <p className="text-[13px] font-semibold uppercase tracking-[0.05em] text-accent">Candidate Packet</p>
                  <p className="mt-0.5 text-[12px] text-secondary">Ready for retention review</p>
                  <div className="my-4 border-t border-card-border" />

                  <div className="space-y-3.5">
                    {['Curriculum Vitae', 'Fee Schedule', 'Interview Notes', 'Conflict Clearance'].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-guarantee-bg">
                          <CheckIcon />
                        </div>
                        <p className="text-[15px] font-semibold text-primary">{item}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mb-3.5 mt-5 border-t border-card-border" />
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5">
                      <ClockIcon />
                      <span className="text-[12px] font-medium text-secondary">Typical delivery: 48 to 72 hours</span>
                    </div>
                    <span className="rounded-full border border-guarantee-border bg-guarantee-bg px-2 py-[3px] text-[11px] font-semibold text-guarantee">
                      Screened
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-muted section-padding">
          <div className="section-container max-w-container">
            <p className="section-label mb-3 text-center">Process</p>
            <h2 className="mb-4 text-center text-[32px] font-bold leading-[1.2] tracking-[-0.02em] text-primary md:text-[36px]">
              How the search works
            </h2>
            <p className="mx-auto mb-12 max-w-[560px] text-center text-[16px] leading-[1.7] text-secondary">
              Four steps from case facts to a retention-ready shortlist. You never touch a database or make a cold call.
            </p>

            <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="flex min-h-0 flex-col overflow-hidden rounded-xl border border-card-border bg-white shadow-card transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-card-hover"
                >
                  <div className="h-[3px] w-full bg-accent" />
                  <div className="flex flex-1 flex-col p-[24px]">
                    <div className="mb-3 flex items-center gap-3">
                      <p className="flex-shrink-0 text-[36px] font-extrabold leading-none text-accent">{step.number}</p>
                      <p className="text-[15px] font-bold text-primary">{step.title}</p>
                    </div>
                    <p className="text-[14px] leading-[1.7] text-secondary">{step.description}</p>
                    {step.number === '3' ? (
                      <p className="mt-3 text-[13px] leading-[1.6] text-secondary">
                        See{' '}
                        <Link href="/blog/qualifying-an-expert-witness" className={linkClass}>
                          qualifying an expert witness
                        </Link>
                        .
                      </p>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What you get */}
        <section className="bg-page section-padding">
          <div className="section-container max-w-container">
            <div className="mx-auto max-w-[720px] text-center">
              <p className="section-label mb-3">Delivery</p>
              <h2 className="mb-4 text-[32px] font-bold leading-[1.2] tracking-[-0.02em] text-primary md:text-[36px]">
                What you get
              </h2>
              <p className="mb-12 text-[16px] leading-[1.7] text-secondary">
                Every candidate packet includes enough to make a retention decision without another round of calls.
              </p>
            </div>

            <div className="mx-auto grid max-w-[960px] grid-cols-1 gap-5 sm:grid-cols-2">
              {packetItems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg border border-card-border border-l-[3px] border-l-accent bg-white p-[28px] shadow-card transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-card-hover"
                >
                  <h3 className="mb-2 text-[17px] font-bold text-primary">{item.title}</h3>
                  <p className="text-[15px] leading-[1.7] text-secondary">{item.detail}</p>
                </div>
              ))}
            </div>

            <p className="mx-auto mt-10 max-w-[640px] text-center text-[15px] leading-[1.7] text-secondary">
              For how fee schedules typically break down, see{' '}
              <Link href="/blog/expert-witness-fees-cost-structure" className={linkClass}>
                expert witness fee structures
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Turnaround */}
        <section className="bg-accent py-[60px] md:py-[72px]">
          <div className="section-container max-w-[800px] text-center">
            <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.1em] text-white/50">Timing</p>
            <p className="text-[clamp(2.5rem,6vw,4rem)] font-extrabold leading-none tracking-[-0.03em] text-white">
              48 to 72 hours
            </p>
            <h2 className="mt-5 text-[24px] font-bold text-white md:text-[28px]">Standard search turnaround</h2>
            <p className="mx-auto mt-4 max-w-[560px] text-[16px] leading-[1.75] text-white/65">
              Highly specialized requests take longer, and we tell you upfront if a search is going to be difficult rather than
              quietly missing the deadline.
            </p>
          </div>
        </section>

        {/* Directory comparison */}
        <section className="bg-muted section-padding">
          <div className="section-container max-w-container">
            <p className="section-label mb-3 text-center">Comparison</p>
            <h2 className="mb-4 text-center text-[32px] font-bold leading-[1.2] tracking-[-0.02em] text-primary md:text-[36px]">
              How this differs from an expert witness directory
            </h2>
            <p className="mx-auto mb-12 max-w-[640px] text-center text-[16px] leading-[1.7] text-secondary">
              Directories like SEAK and TASA sell listings. Experts pay to appear, which means the list reflects who bought
              placement, not who fits your case. You also do all the screening yourself.
            </p>

            <div className="mx-auto grid max-w-[960px] grid-cols-1 gap-5 md:grid-cols-2">
              <div className="rounded-xl border border-card-border bg-white p-[28px] shadow-card">
                <p className="mb-1 text-[12px] font-semibold uppercase tracking-[0.08em] text-secondary">Directories</p>
                <h3 className="mb-5 text-[20px] font-bold text-primary">Paid listings</h3>
                <ul className="space-y-3">
                  {[
                    'Experts buy placement on the list',
                    'You do the outreach and screening',
                    'Availability is unknown until you call',
                    'Heavily marketed experts dominate results',
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-[15px] leading-[1.6] text-secondary">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#cbd5e1]" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="overflow-hidden rounded-xl border border-card-border bg-white shadow-card">
                <div className="h-[3px] w-full bg-accent" />
                <div className="p-[28px]">
                  <p className="mb-1 text-[12px] font-semibold uppercase tracking-[0.08em] text-accent">Blackstorm</p>
                  <h3 className="mb-5 text-[20px] font-bold text-primary">Custom search</h3>
                  <ul className="space-y-3">
                    {directoryPoints.map((item) => (
                      <li key={item} className="flex gap-3 text-[15px] leading-[1.6] text-primary">
                        <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-guarantee-bg">
                          <CheckIcon />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Practice areas */}
        <section className="bg-page section-padding">
          <div className="section-container max-w-container">
            <p className="section-label mb-3 text-center">Coverage</p>
            <h2 className="mb-4 text-center text-[32px] font-bold leading-[1.2] tracking-[-0.02em] text-primary md:text-[36px]">
              Practice areas we cover
            </h2>
            <p className="mx-auto mb-12 max-w-[600px] text-center text-[16px] leading-[1.7] text-secondary">
              Browse the full{' '}
              <Link href="/expert-witness" className={linkClass}>
                expert witness directory
              </Link>{' '}
              by specialty, or start a custom search if you already know what you need.
            </p>

            <div className="mx-auto grid max-w-[960px] grid-cols-1 gap-5 lg:grid-cols-2">
              {practiceAreas.map((area) => (
                <div
                  key={area.title}
                  className={`rounded-xl border border-card-border bg-white p-[28px] shadow-card ${
                    area.title === 'Other' ? 'lg:col-span-2' : ''
                  }`}
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-2 w-2 flex-shrink-0 rounded-full bg-accent" aria-hidden />
                    <h3 className="text-[17px] font-bold text-primary">{area.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {area.specialties.map((specialty) =>
                      specialty.slug ? (
                        <Link
                          key={specialty.label}
                          href={`/expert-witness/${specialty.slug}`}
                          className="inline-flex items-center rounded-full border border-card-border bg-page px-3.5 py-1.5 text-[13px] font-medium text-primary transition-all duration-200 hover:border-accent hover:bg-white hover:text-accent hover:shadow-card"
                        >
                          {specialty.label}
                        </Link>
                      ) : (
                        <span
                          key={specialty.label}
                          className="inline-flex items-center rounded-full border border-transparent bg-[#f0eeea] px-3.5 py-1.5 text-[13px] font-medium text-secondary"
                        >
                          {specialty.label}
                        </span>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>

            <p className="mx-auto mt-10 max-w-[600px] text-center text-[15px] leading-[1.7] text-secondary">
              If your case needs something not on this list, ask. Most searches we run are for specialties nobody thought to
              advertise.
            </p>
          </div>
        </section>

        {/* Who we work with */}
        <section className="bg-muted section-padding">
          <div className="section-container max-w-[800px] text-center">
            <p className="section-label mb-3">Clients</p>
            <h2 className="mb-5 text-[32px] font-bold leading-[1.2] tracking-[-0.02em] text-primary md:text-[36px]">
              Who we work with
            </h2>
            <p className="mb-8 text-[17px] leading-[1.75] text-secondary">
              Plaintiff and defense firms nationwide. Solo practitioners through large firms. Personal injury, medical
              malpractice, product liability, commercial litigation, and employment matters.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {clientTypes.map((type) => (
                <span
                  key={type}
                  className="inline-block rounded-full border border-card-border bg-white px-4 py-2 text-[13px] font-medium text-primary shadow-card"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-page section-padding">
          <div className="section-container max-w-[760px]">
            <p className="section-label mb-3 text-center">FAQ</p>
            <h2 className="mb-10 text-center text-[32px] font-bold leading-[1.2] tracking-[-0.02em] text-primary md:text-[36px]">
              Frequently asked questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-xl border border-card-border bg-white p-6 shadow-card md:p-7"
                >
                  <h3 className="mb-2 text-[17px] font-bold text-primary">{faq.question}</h3>
                  <p className="text-[15px] leading-[1.75] text-secondary">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA compact />
      </main>
      <Footer />
    </>
  )
}
