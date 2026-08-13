import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FinalCTA from '@/components/FinalCTA'

export const metadata: Metadata = {
  title: 'Expert Witness Services Compared: SEAK, TASA, Expert Institute',
  description:
    'How expert witness directories and sourcing firms differ on cost, turnaround, screening, and candidate quality, and which model fits which case.',
  alternates: {
    canonical: '/expert-witness-services-comparison',
  },
  openGraph: {
    url: '/expert-witness-services-comparison',
    title: 'Expert Witness Services Compared: SEAK, TASA, Expert Institute',
    description:
      'How expert witness directories and sourcing firms differ on cost, turnaround, screening, and candidate quality, and which model fits which case.',
  },
}

const BASE = 'https://blackstormexperts.com'

export default function ExpertWitnessServicesComparisonPage() {
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Expert Witness Services Compared: SEAK, TASA, Expert Institute',
    description:
      'How expert witness directories and sourcing firms differ on cost, turnaround, screening, and candidate quality, and which model fits which case.',
    url: `${BASE}/expert-witness-services-comparison`,
    publisher: {
      '@type': 'Organization',
      name: 'Blackstorm Experts',
      url: BASE,
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <Nav />
      <main>
        <article className="bg-page py-[60px] md:py-20">
          <div className="section-container max-w-[720px]">
            <h1 className="mb-6 text-[36px] font-bold tracking-[-0.02em] text-primary md:text-[40px]">
              Expert Witness Services Compared
            </h1>

            <div className="blog-prose text-[17px] leading-[1.85] text-primary">
              <p className="mb-6">
                There are three ways to find an expert witness, and they solve different problems. Understanding which
                model fits your case saves both money and the two weeks you would otherwise spend calling people who
                never call back.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">The three models</h2>
              <p className="mb-6">
                Directories sell listings. Experts pay an annual fee to appear. Searching is free for attorneys, and you
                contact the experts directly with no markup or referral fee. SEAK, Experts.com, and JurisPro are the best
                known. You get a large searchable pool and you do all the outreach, screening, and conflict checking
                yourself.
              </p>
              <p className="mb-6">
                Sourcing and referral firms do the work for you. You describe the case, they identify candidates, contact
                them, screen them, and deliver a short list. Expert Institute, and Blackstorm both operate this way,
                along with several regional firms.
              </p>
              <p className="mb-6">
                Direct sourcing means finding the expert yourself through academic institutions, professional
                associations, and personal networks. It costs nothing but your time, and on a case with a common
                specialty it is often the right answer. You can also browse our{' '}
                <Link href="/expert-witness" className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover">
                  expert witness specialties
                </Link>{' '}
                to see the disciplines we cover most often.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">Directories</h2>
              <p className="mb-6">
                The strength of a directory is breadth, immediacy, and price. Access costs nothing. You can search across
                thousands of listings at two in the morning and get names instantly, then call whoever you want.
              </p>
              <p className="mb-6">
                The limitation is that a directory reflects who paid to be listed, not who fits your case. Experts who do
                not market themselves are absent, which excludes a large share of the academic and actively practicing
                physicians who make strong witnesses. Heavily marketed experts also draw predictable cross-examination on
                how much of their income comes from testimony.
              </p>
              <p className="mb-6">
                You also do all the labor. Finding a name is the fast part of an{' '}
                <Link
                  href="/expert-witness-search"
                  className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover"
                >
                  expert witness search
                </Link>
                . Confirming availability, running conflicts, and determining whether the person will actually hold up
                under a Daubert challenge is the slow part, and a directory does none of it. For what to screen on
                qualification specifically, see{' '}
                <Link
                  href="/blog/qualifying-an-expert-witness"
                  className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover"
                >
                  qualifying an expert witness
                </Link>
                .
              </p>
              <p className="mb-6">
                Directories make sense when you need a common specialty quickly and you have the staff time to do the
                screening. Since access is free, the real cost is the hours your team spends on outreach and vetting.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">Sourcing firms</h2>
              <p className="mb-6">
                A sourcing firm delivers screened candidates rather than a list of names. The work product is a short
                list with CVs, fee schedules, and notes from interviews with each candidate. Comparing those fee
                schedules side by side is easier when you understand{' '}
                <Link
                  href="/blog/expert-witness-fees-cost-structure"
                  className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover"
                >
                  expert witness fee structures
                </Link>
                .
              </p>
              <p className="mb-6">
                The advantages are real when the search is hard. A sourcing firm can reach experts who are not listed
                anywhere, which matters when the specialty is narrow or the case requires an unusual combination of
                qualifications. The screening also surfaces problems before you retain, including availability conflicts,
                exclusion history, and experts who look right on paper but discuss the case facts in ways that will not
                survive cross.
              </p>
              <p className="mb-6">
                The tradeoff is cost per search and dependence on the firm&apos;s actual sourcing ability. Firms vary
                widely, and some are effectively directories with a service layer, delivering the same marketed experts
                you could have found yourself.
              </p>
              <p className="mb-6">
                Pricing models also differ in ways that matter. Some firms charge a flat fee per search. Others take a
                markup on the expert&apos;s hourly rate, which means the search looks free at the start and costs more
                the longer the expert works on your case. Worth knowing which one you are signing up for before the
                deposition.
              </p>
              <p className="mb-6">
                Questions worth asking any sourcing firm: what is the actual turnaround, do you interview candidates
                before delivery, are these experts from a proprietary database or sourced for this case, what is included
                in the packet, and do you charge a flat fee or take a percentage of the expert&apos;s rate.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">Direct sourcing</h2>
              <p className="mb-6">
                Finding the expert yourself works better than most attorneys expect on common specialties. Academic
                department pages, professional society directories, and published literature in the relevant area will
                produce qualified names in an afternoon.
              </p>
              <p className="mb-6">
                It stops working when the specialty is narrow, when you need someone willing to testify against a local
                institution, or when the case requires a specific combination of credentials. It also stops working when
                you are under a disclosure deadline, because the response rate on cold outreach to physicians is low and
                slow.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">How to choose</h2>
              <p className="mb-6">
                The variables that actually matter are the difficulty of the specialty, your available time, and the
                deadline.
              </p>
              <p className="mb-6">
                For a common specialty with time on the calendar, direct sourcing or a directory is usually sufficient
                and cheaper. For a narrow specialty, an unusual credential combination, or a compressed deadline, a
                sourcing firm is generally worth the cost because the search itself is the hard part.
              </p>
              <p className="mb-6">
                For firms running expert searches constantly, a directory subscription plus internal screening capacity
                is often the most economical model, with sourcing firms reserved for the searches that come back empty.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">How Blackstorm fits</h2>
              <p className="mb-6">
                We do custom sourcing. Every candidate is identified for the specific case, contacted directly, and
                interviewed before you see the name. Packets include the CV, current fee schedule, and our notes from the
                screening call, delivered in 48 to 72 hours on standard searches.
              </p>
              <p className="mb-0">
                We are not a directory and there is no database to subscribe to. If you have staff time to run outreach
                and screening yourself, a directory subscription may be more economical over many searches. If you would
                rather spend that time on the case, we do the sourcing and screening and you get candidates who have
                already confirmed availability. Start an{' '}
                <Link
                  href="/expert-witness-search"
                  className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover"
                >
                  expert witness search
                </Link>{' '}
                when you are ready.
              </p>
            </div>
          </div>
        </article>
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
