import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import RelatedArticles from '@/components/RelatedArticles'
import LandingPageCTA from '@/components/LandingPageCTA'
import { getBlogPostsBySpecialty } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Life Care Planner Expert Witness | Blackstorm Experts',
  description:
    'What a life care planner does in litigation, what credentials matter, and how to evaluate one before you retain them.',
  alternates: {
    canonical: '/life-care-planner-expert-witness',
  },
  openGraph: {
    url: '/life-care-planner-expert-witness',
    title: 'Life Care Planner Expert Witness | Blackstorm Experts',
    description:
      'What a life care planner does in litigation, what credentials matter, and how to evaluate one before you retain them.',
  },
}

const BASE = 'https://blackstormexperts.com'

const linkClass = 'font-medium text-accent underline underline-offset-2 hover:text-accent-hover'

function SpecialtyLink({ slug, children }: { slug: string; children: React.ReactNode }) {
  return (
    <Link href={`/expert-witness/${slug}`} className={linkClass}>
      {children}
    </Link>
  )
}

export default function LifeCarePlannerExpertWitnessPage() {
  const relatedPosts = getBlogPostsBySpecialty('life-care-planning')

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Life Care Planner Expert Witness Sourcing',
    serviceType: 'Life care planner expert witness sourcing',
    description:
      'What a life care planner does in litigation, what credentials matter, and how to evaluate one before you retain them.',
    url: `${BASE}/life-care-planner-expert-witness`,
    provider: {
      '@type': 'Organization',
      name: 'Blackstorm Experts',
      url: BASE,
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Nav />
      <main>
        <article className="bg-page py-[60px] md:py-20">
          <div className="section-container max-w-[720px]">
            <h1 className="mb-6 text-[36px] font-bold tracking-[-0.02em] text-primary md:text-[40px]">
              Life Care Planner Expert Witness
            </h1>

            <LandingPageCTA specialty="Life Care Planner" />

            <div className="blog-prose text-[17px] leading-[1.85] text-primary">
              <p className="mb-6">
                In a <SpecialtyLink slug="personal-injury">catastrophic injury</SpecialtyLink> case, future care is usually
                the largest single component of damages. It is also the hardest to prove. A{' '}
                <SpecialtyLink slug="life-care-planning">life care planner</SpecialtyLink> is the expert who converts a
                medical record into an itemized, defensible projection of what your client will need for the rest of their
                life and what it will cost.
              </p>
              <p className="mb-6">
                Retaining the wrong one is expensive in a way that is not obvious until deposition. The title is not
                protected, the methodology varies widely between practitioners, and a plan built on assumptions rather than
                records will not survive a competent cross examination. This page covers what the role actually involves,
                which credentials mean something, and what to look at before you retain.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                What a life care planner does
              </h2>
              <p className="mb-6">
                A life care plan is a document that projects every future medical and non-medical care need arising from an
                injury, assigns a cost and a frequency to each item, and extends those costs across the client&apos;s life
                expectancy.
              </p>
              <p className="mb-6">
                The planner starts with the medical records and the treating physicians. They are not making independent
                medical determinations about prognosis. They are taking the treatment recommendations that already exist in
                the record, or that they obtain from the treating providers, and building a cost structure around them.
                That distinction matters more than most attorneys realize, because it is the first place a plan gets
                attacked. A care item that is not traceable to a physician recommendation is a care item the defense will
                move to strike.
              </p>
              <p className="mb-6">
                A complete plan typically covers future surgeries and hospitalizations, ongoing physician and specialist
                visits, therapy of all kinds, durable medical equipment with replacement schedules based on useful life,
                medications and disposable supplies, attendant care or skilled nursing, home and vehicle modifications, and
                case management. Each line item carries a cost basis, a frequency, and a duration.
              </p>
              <p className="mb-6">
                The planner does not usually reduce those figures to present value. That is the{' '}
                <SpecialtyLink slug="forensic-economics">economist</SpecialtyLink>&apos;s job, and in most cases you will
                retain both. The life care planner establishes what is needed and what it costs today. The economist
                handles growth rates, discount rates, and present value.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                When a life care planner is necessary
              </h2>
              <p className="mb-6">
                The general rule is that if future care is significant and permanent, you need a plan. In practice that
                means spinal cord injury, traumatic brain injury, amputation, severe burns, birth injury including
                cerebral palsy, and catastrophic orthopedic injuries that will require revision surgery over time.{' '}
                <SpecialtyLink slug="medical-malpractice">Medical malpractice</SpecialtyLink> cases resulting in permanent
                impairment follow the same pattern.
              </p>
              <p className="mb-6">
                The plaintiff side generally retains a planner as soon as the medical picture stabilizes enough to project
                forward. Retaining too early produces a plan built on an incomplete record, and you will end up amending
                it.
              </p>
              <p className="mb-6">
                The defense side usually retains later and for a different purpose, which is discussed below.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                Credentials that actually mean something
              </h2>
              <p className="mb-6">
                Anyone can print a business card that says life care planner. The certifications that carry weight in
                litigation are narrower.
              </p>
              <p className="mb-6">
                The CLCP, Certified Life Care Planner, is issued by the International Commission on Health Care
                Certification. It requires an underlying professional license in a health care discipline, completion of
                specific life care planning coursework, documented experience, and a certification examination. This is the
                credential you will see most often and the one opposing counsel is least likely to attack on its face.
              </p>
              <p className="mb-6">
                The CNLCP, Certified Nurse Life Care Planner, comes through the American Association of Nurse Life Care
                Planners and requires an active RN license. Nurse planners are common in medical malpractice work, where
                the ability to read and interpret nursing documentation is central to the analysis.
              </p>
              <p className="mb-6">
                The CRC, Certified Rehabilitation Counselor, frequently appears alongside a CLCP. It signals training in{' '}
                <SpecialtyLink slug="vocational-rehabilitation">vocational rehabilitation</SpecialtyLink>, which matters
                when the case also involves lost earning capacity. Some planners hold both and can speak to care needs and
                vocational impact, though many firms prefer to keep those as separate experts so that an attack on one does
                not damage the other.
              </p>
              <p className="mb-6">
                Credentials alone are not sufficient. A planner who has never been deposed is an unknown quantity, and you
                will find out how they perform under pressure at the worst possible moment. Ask for a testimony history.
                Ask whether they have faced a{' '}
                <Link href="/blog/frye-vs-daubert" className={linkClass}>
                  Daubert or Frye
                </Link>{' '}
                challenge and what the outcome was. A planner who has been challenged and survived is more valuable than
                one who has never been tested. For how qualification attaches to the specific opinion, see{' '}
                <Link href="/blog/qualifying-an-expert-witness" className={linkClass}>
                  qualifying an expert witness
                </Link>
                .
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                Methodology is where plans fail
              </h2>
              <p className="mb-6">
                The most common ground for excluding or gutting a life care plan is that the methodology cannot be
                articulated. Courts want to see that the planner followed a consistent, reproducible process rather than
                assembling a wish list.
              </p>
              <p className="mb-6">
                Ask a prospective planner how they determine cost data. Published fee schedules, regional cost surveys,
                and actual local provider quotes are all defensible. Round numbers pulled from memory are not. Ask how
                they establish frequency and duration for each item. The answer should point back to a physician
                recommendation, a published clinical guideline, or a documented standard of care, not to the planner&apos;s
                general sense of what patients like this usually need.
              </p>
              <p className="mb-6">
                Ask what they do when the record is silent on a needed item. A good planner will tell you they go back to
                the treating physician for a recommendation rather than filling the gap themselves. That answer tells you
                they understand where the line is. For how cost projections are typically built, see{' '}
                <Link href="/blog/life-care-plan-calculation-future-medical-costs" className={linkClass}>
                  life care plan calculation
                </Link>
                .
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                Plaintiff and defense use planners differently
              </h2>
              <p className="mb-6">
                On the plaintiff side, you want an affirmative plan: complete, well sourced, and built to withstand a
                challenge. The planner is establishing the number.
              </p>
              <p className="mb-6">
                On the defense side, the work is usually rebuttal. A defense planner reviews the opposing plan and looks
                for care items with no support in the record, frequencies that exceed what the treating providers actually
                recommended, cost figures drawn from unrepresentative sources, equipment replacement schedules that are
                shorter than the manufacturer&apos;s stated useful life, and duplication between line items. The output is
                a critique and often a competing figure. That process is covered in more detail in{' '}
                <Link href="/blog/life-care-plan-rebuttal-defense" className={linkClass}>
                  life care plan rebuttal
                </Link>
                .
              </p>
              <p className="mb-6">
                These are genuinely different skill sets. A planner who writes excellent affirmative plans is not
                automatically effective at dismantling someone else&apos;s work, and a planner known primarily for defense
                rebuttal work may face credibility questions if you put them forward affirmatively. When you retain, be
                specific about which role you need.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                What to ask before you retain
              </h2>
              <p className="mb-6">
                Beyond credentials and methodology, a few practical questions save trouble later.
              </p>
              <p className="mb-6">
                Availability through trial matters more than availability today. A planner who can produce a report by your
                disclosure deadline but has three trials stacked in the month you are set is a problem you will discover
                late.
              </p>
              <p className="mb-6">
                Conflicts should be cleared against all parties, not just the opposing party. Planners often work with
                treating providers and facilities, and an undisclosed prior relationship is an avoidable embarrassment.
              </p>
              <p className="mb-6">
                Ask about their fee structure for review, report preparation, deposition, and trial separately. These are
                usually different rates and the report preparation figure is the one that varies most between
                practitioners. For the typical structure of those categories, see{' '}
                <Link href="/blog/expert-witness-fees-cost-structure" className={linkClass}>
                  expert witness fee structures
                </Link>
                .
              </p>
              <p className="mb-0">
                Ask whether they will testify to the plan they wrote or whether an associate performed the underlying
                work. In larger practices, the person whose name is on the report is not always the person who built it,
                and that gap is discoverable.
              </p>
            </div>
          </div>
        </article>
        <RelatedArticles posts={relatedPosts} title="Related Reading" />
      </main>
      <Footer />
    </>
  )
}
