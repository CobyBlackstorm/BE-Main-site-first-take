import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import RelatedArticles from '@/components/RelatedArticles'
import { getBlogPostsBySpecialty } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Life Care Plan Cost Calculation Expert Witness | Blackstorm Experts',
  description:
    'How future care costs are calculated in a life care plan, which cost sources hold up, and where the numbers get challenged.',
  alternates: {
    canonical: '/life-care-plan-cost-calculation-expert',
  },
  openGraph: {
    url: '/life-care-plan-cost-calculation-expert',
    title: 'Life Care Plan Cost Calculation Expert Witness | Blackstorm Experts',
    description:
      'How future care costs are calculated in a life care plan, which cost sources hold up, and where the numbers get challenged.',
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

export default function LifeCarePlanCostCalculationExpertPage() {
  const relatedPosts = getBlogPostsBySpecialty('life-care-planning')

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Life Care Plan Cost Calculation Expert Witness Sourcing',
    serviceType: 'Life care plan cost calculation expert witness sourcing',
    description:
      'How future care costs are calculated in a life care plan, which cost sources hold up, and where the numbers get challenged.',
    url: `${BASE}/life-care-plan-cost-calculation-expert`,
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
              Life Care Plan Cost Calculation Expert
            </h1>

            <div className="blog-prose text-[17px] leading-[1.85] text-primary">
              <p className="mb-6">
                Two <SpecialtyLink slug="life-care-planning">life care planners</SpecialtyLink> can look at the same
                medical record, agree on every care item, and produce totals that differ by several million dollars. The
                difference is not the care. It is the cost data behind it.
              </p>
              <p className="mb-6">
                Cost calculation is the part of life care planning that gets the least attention from counsel and the
                most attention from opposing experts. This page covers how those figures are built, which sources are
                defensible, and where the calculation is most often attacked. For the broader role of the planner, see{' '}
                <Link href="/life-care-planner-expert-witness" className={linkClass}>
                  life care planner expert witness
                </Link>
                .
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                What the calculation actually involves
              </h2>
              <p className="mb-6">
                Every line in a life care plan carries four variables: the unit cost of the item, how often it recurs, how
                long it recurs, and in the case of equipment, how often it must be replaced. Multiply those out across a
                life expectancy and you have the projected cost for that item. Sum the lines and you have the plan total.
              </p>
              <p className="mb-6">
                The arithmetic is trivial. The defensibility lives entirely in where each variable came from.
              </p>
              <p className="mb-6">
                Unit cost is the variable with the widest range of possible answers, because health care has no single
                price. The same procedure carries a billed charge, an allowed amount under a given payer, a Medicare rate,
                a negotiated commercial rate, and a self pay rate, and those figures can differ by a factor of three or
                more. Which one a planner uses drives the total more than almost any other choice they make. A closer look
                at how those projections are typically assembled is in{' '}
                <Link href="/blog/life-care-plan-calculation-future-medical-costs" className={linkClass}>
                  life care plan calculation
                </Link>
                .
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                Cost sources that hold up
              </h2>
              <p className="mb-6">
                Published fee schedules are the most defensible starting point because they are verifiable by anyone.
                Medicare fee schedules, state{' '}
                <SpecialtyLink slug="workers-compensation">workers compensation</SpecialtyLink> fee schedules, and
                published facility charge data can all be cited and reproduced.
              </p>
              <p className="mb-6">
                Regional cost databases used in the industry provide geographically adjusted figures across procedure and
                service categories. These are widely accepted in life care planning practice, and a planner who uses one
                should be able to name it and explain how they applied it.
              </p>
              <p className="mb-6">
                Direct provider quotes are strong evidence for items where published data is thin, particularly attendant
                care, home modification, and specialized equipment. A planner who called three local vendors and
                documented the quotes has produced something concrete that is difficult to attack.
              </p>
              <p className="mb-6">
                Actual historical costs from the client&apos;s own treatment are useful where the care is already occurring
                and expected to continue. If the client has been receiving a therapy for two years, what it has actually
                cost is better evidence than a national average.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                Where cost figures get challenged
              </h2>
              <p className="mb-6">
                Billed charges versus allowed amounts is the most frequent point of attack. Billed charges are list prices
                that almost nobody pays. A plan built on billed charges will overstate the realistic cost of care, and
                opposing counsel will make that point with the client&apos;s own explanation of benefits statements.
              </p>
              <p className="mb-6">
                The counterargument matters and should be understood before you retain. Plaintiff planners frequently take
                the position that a client without insurance, or one who will exhaust coverage, faces the billed rate.
                Whether that holds depends on the facts and the jurisdiction. What you want is a planner who knows which
                position they are taking and can explain why, rather than one who used billed charges by default and
                cannot articulate a reason. Defense counsel often presses these points through a{' '}
                <Link href="/life-care-plan-rebuttal-expert" className={linkClass}>
                  life care plan rebuttal expert
                </Link>
                .
              </p>
              <p className="mb-6">
                Geographic mismatch is the second issue. National average cost data applied in a market where costs run
                materially higher or lower produces a figure that is defensible in general and wrong in particular. A
                planner should be able to explain how they adjusted for the client&apos;s actual location and where they
                will realistically receive care.
              </p>
              <p className="mb-6">
                Stale data appears in plans more often than it should. Cost figures pulled from a database two or three
                years old, applied to care that begins now and runs for decades, understate the baseline before any growth
                is applied. Ask when the underlying data was compiled.
              </p>
              <p className="mb-6">
                Replacement schedules for durable medical equipment are frequently aggressive. Manufacturer useful life
                ratings and reimbursement standards provide external reference points. A schedule that is materially
                shorter than both is an easy target.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                Where the economist takes over
              </h2>
              <p className="mb-6">
                Life care planners generally do not apply medical inflation or reduce figures to present value. Both are
                economic questions and belong to a <SpecialtyLink slug="forensic-economics">forensic economist</SpecialtyLink>.
              </p>
              <p className="mb-6">
                This division matters practically because it is a place where the two experts can contradict each other if
                they are not coordinated. The planner produces costs in current dollars. The economist applies growth rates
                and discount rates to reach present value. If the planner has already applied some inflation adjustment and
                the economist applies another, the result is double counting, and it is discoverable.
              </p>
              <p className="mb-6">
                Confirm early which expert is doing what, and confirm the planner is delivering figures in current dollars
                unless there is a specific reason otherwise.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                What to ask a planner about their cost methodology
              </h2>
              <p className="mb-6">
                Ask what specific sources they use for cost data and whether they can produce the underlying
                documentation. A planner who cannot name their sources has a problem.
              </p>
              <p className="mb-6">
                Ask whether they use billed, allowed, or paid amounts, and why. The answer should be a reasoned position,
                not a shrug.
              </p>
              <p className="mb-6">Ask how they handle geographic adjustment.</p>
              <p className="mb-6">
                Ask how they date their cost data and how recently the sources were updated.
              </p>
              <p className="mb-0">
                Ask what they do when no published cost exists for an item. Direct vendor quotes are the right answer.
                Estimation from similar items is acceptable if documented. Professional judgment with no supporting record
                is where plans get excluded. Methodology challenges of that kind sit under the same reliability analysis
                covered in{' '}
                <Link href="/blog/qualifying-an-expert-witness" className={linkClass}>
                  qualifying an expert witness
                </Link>
                .
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
