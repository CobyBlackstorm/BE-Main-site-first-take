import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FinalCTA from '@/components/FinalCTA'
import RelatedArticles from '@/components/RelatedArticles'
import { getBlogPostsBySpecialty, type BlogPost } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Expert Witness Consulting',
  description:
    'Consulting expert witnesses for case evaluation, opposing expert review, and pre-suit assessment. Retained non-testifying experts who help you decide whether the case holds up.',
  alternates: {
    canonical: '/expert-witness-consulting',
  },
  openGraph: {
    url: '/expert-witness-consulting',
    title: 'Expert Witness Consulting',
    description:
      'Consulting expert witnesses for case evaluation, opposing expert review, and pre-suit assessment. Retained non-testifying experts who help you decide whether the case holds up.',
  },
}

const BASE = 'https://blackstormexperts.com'

const linkClass = 'font-medium text-accent underline underline-offset-2 hover:text-accent-hover'

function getRelatedConsultingPosts(): BlogPost[] {
  const seen = new Set<string>()
  const posts: BlogPost[] = []

  for (const specialty of ['personal-injury', 'medical-malpractice', 'life-care-planning']) {
    for (const post of getBlogPostsBySpecialty(specialty)) {
      if (seen.has(post.slug)) continue
      seen.add(post.slug)
      posts.push(post)
    }
  }

  return posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5)
}

export default function ExpertWitnessConsultingPage() {
  const relatedPosts = getRelatedConsultingPosts()

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Expert Witness Consulting',
    serviceType: 'Consulting expert witness sourcing',
    description:
      'Consulting expert witnesses for case evaluation, opposing expert review, and pre-suit assessment. Retained non-testifying experts who help you decide whether the case holds up.',
    url: `${BASE}/expert-witness-consulting`,
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
              Expert Witness Consulting
            </h1>

            <div className="blog-prose text-[17px] leading-[1.85] text-primary">
              <p className="mb-6">
                Not every expert you need is going to testify. Some of the highest-value expert work happens before
                disclosure, when you need someone to tell you privately whether the case holds up.
              </p>
              <p className="mb-6">
                A consulting expert is retained to advise you rather than the jury. Their work is generally protected from
                discovery, which means you can ask the questions you cannot afford to ask a testifying expert. The
                discovery and strategy differences are covered in{' '}
                <Link href="/blog/testifying-vs-consulting-expert" className={linkClass}>
                  testifying vs consulting expert
                </Link>
                .
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                What a Consulting Expert Does
              </h2>
              <p className="mb-6">
                Case evaluation before you file. Someone with the technical background reviews the facts and tells you
                whether the theory is supportable. In{' '}
                <Link href="/expert-witness/medical-malpractice" className={linkClass}>
                  medical malpractice
                </Link>{' '}
                this is often the difference between filing a viable case and spending two years on one that was never
                going to survive.
              </p>
              <p className="mb-6">
                Opposing expert review. Your consulting expert reads the other side&apos;s report and identifies the
                methodological weaknesses, the missing data, the assumptions the record does not support. That analysis
                becomes your deposition outline and your{' '}
                <Link href="/blog/daubert-expert-witness" className={linkClass}>
                  Daubert
                </Link>{' '}
                motion.
              </p>
              <p className="mb-6">
                Deposition preparation. A consultant who understands the discipline helps you build the questions that
                actually expose a flawed analysis, rather than the ones that let the opposing expert restate their
                opinion. That work feeds into{' '}
                <Link href="/blog/expert-witness-deposition-preparation" className={linkClass}>
                  expert witness deposition preparation
                </Link>
                .
              </p>
              <p className="mb-6">
                Identifying what you need. Sometimes you know something failed and not which discipline explains why. A
                consultant can tell you whether you are looking at a structural problem, a materials problem, or a
                maintenance problem, which determines who you retain to testify. Related discipline coverage is on our{' '}
                <Link href="/expert-witness/engineering" className={linkClass}>
                  engineering expert witness
                </Link>{' '}
                and{' '}
                <Link href="/expert-witness/forensic" className={linkClass}>
                  forensic expert witness
                </Link>{' '}
                pages.
              </p>
              <p className="mb-6">
                Testing your own expert&apos;s opinion. A second set of eyes on your testifying expert&apos;s analysis
                before it becomes a report you cannot walk back.
              </p>
              <p className="mb-6">Damages modeling. Running the numbers before you commit to a settlement position.</p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                Why the Distinction Matters
              </h2>
              <p className="mb-6">The critical difference is discovery protection.</p>
              <p className="mb-6">
                A testifying expert&apos;s materials, communications, and draft opinions are generally discoverable, with
                some protections under the federal rules for draft reports and certain attorney communications. Everything
                they considered can be examined. Those disclosure contents are covered in the{' '}
                <Link href="/blog/rule-26-expert-disclosure-pre-retention-checklist" className={linkClass}>
                  Rule 26 pre-retention checklist
                </Link>
                .
              </p>
              <p className="mb-6">
                A consulting expert who will not testify is generally protected as work product, and in federal practice
                their facts and opinions are typically not discoverable absent exceptional circumstances.
              </p>
              <p className="mb-6">
                That protection is what makes candid evaluation possible. You can ask a consultant whether your case has a
                fatal flaw. Asking that of a testifying expert creates a record.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                The Conversion Problem
              </h2>
              <p className="mb-6">
                A consulting expert can be converted to a testifying expert, and it happens regularly. What attorneys
                underestimate is that the conversion generally opens their prior work to discovery.
              </p>
              <p className="mb-6">
                If you retain someone as a consultant, have them evaluate the case candidly, and later decide you want
                them on the stand, the analysis they did during the consulting phase may become discoverable. Including
                the parts where they identified problems with your case.
              </p>
              <p className="mb-6">
                Decide the role deliberately. If there is a real chance you will want this person to testify, structure
                the engagement accordingly from the start. If you need genuinely candid evaluation, retain a consultant
                you do not intend to convert and plan to retain a separate testifying expert.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                When to Retain a Consultant
              </h2>
              <p className="mb-6">
                Before filing in any case where the technical merits are uncertain and the cost of being wrong is high.
              </p>
              <p className="mb-6">
                When the opposing expert&apos;s report is outside your technical comfort zone and you need to know whether
                the analysis is actually sound or just confidently presented. That review often feeds a{' '}
                <Link href="/blog/rebuttal-expert-witness" className={linkClass}>
                  rebuttal expert witness
                </Link>{' '}
                retention later.
              </p>
              <p className="mb-6">
                When the case involves multiple technical disciplines and you are not sure how many experts you need.
              </p>
              <p className="mb-6">When you are preparing to depose an expert in a field you do not practice in.</p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">What to Look For</h2>
              <p className="mb-6">
                The criteria differ from a testifying retention. Courtroom presentation does not matter. Credentials
                matter less. Testimony history is irrelevant.
              </p>
              <p className="mb-6">
                What matters is depth in the specific area, willingness to give you an unfavorable answer, and the ability
                to explain the technical issues in terms you can use. For how qualification attaches when you later
                convert someone to testify, see{' '}
                <Link href="/blog/qualifying-an-expert-witness" className={linkClass}>
                  qualifying an expert witness
                </Link>
                .
              </p>
              <p className="mb-6">
                The most valuable consultant is the one who tells you the case does not work. That is a cheaper answer to
                get early than late.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">Cost</h2>
              <p className="mb-6">
                Consulting engagements are usually smaller than testifying retentions because there is no report, no
                deposition, and no trial time. Many experts charge their standard hourly rate with a smaller retainer, and
                some scope a preliminary evaluation as a fixed-fee review. For how fee schedules typically break down, see{' '}
                <Link href="/blog/expert-witness-fees-cost-structure" className={linkClass}>
                  expert witness fee structures
                </Link>
                .
              </p>
              <p className="mb-6">
                For pre-suit evaluation in particular, the cost of a consultant is a fraction of what a non-viable case
                costs to carry.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">Start a Search</h2>
              <p className="mb-6">
                Tell us the case, what you need evaluated, and your timeline. Blackstorm Experts conducts the search,
                identifies consultants whose background matches the specific technical issue, clears conflicts, and
                confirms availability. Candidates typically within 48 to 72 hours. For the broader sourcing process, see{' '}
                <Link href="/how-to-find-an-expert-witness" className={linkClass}>
                  how to find an expert witness
                </Link>
                .
              </p>
              <p className="mb-0">
                <a href="#" data-open-search-modal className={linkClass}>
                  Request an Expert
                </a>
              </p>
            </div>
          </div>
        </article>
        <RelatedArticles posts={relatedPosts} title="Related Reading" />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
