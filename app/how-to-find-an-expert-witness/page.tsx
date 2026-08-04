import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FinalCTA from '@/components/FinalCTA'
import RelatedArticles from '@/components/RelatedArticles'
import { getBlogPostsBySpecialty, type BlogPost } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'How to Find an Expert Witness',
  description:
    'How to find an expert witness for your case, the four ways attorneys source experts and what each costs, how to vet candidates, and what to check before you retain.',
  alternates: {
    canonical: '/how-to-find-an-expert-witness',
  },
  openGraph: {
    url: '/how-to-find-an-expert-witness',
    title: 'How to Find an Expert Witness',
    description:
      'How to find an expert witness for your case, the four ways attorneys source experts and what each costs, how to vet candidates, and what to check before you retain.',
  },
}

const BASE = 'https://blackstormexperts.com'

const linkClass = 'font-medium text-accent underline underline-offset-2 hover:text-accent-hover'

function getRelatedFindingPosts(): BlogPost[] {
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

export default function HowToFindAnExpertWitnessPage() {
  const relatedPosts = getRelatedFindingPosts()

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'How to Find an Expert Witness',
    description:
      'How to find an expert witness for your case, the four ways attorneys source experts and what each costs, how to vet candidates, and what to check before you retain.',
    url: `${BASE}/how-to-find-an-expert-witness`,
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
              How to Find an Expert Witness
            </h1>

            <div className="blog-prose text-[17px] leading-[1.85] text-primary">
              <p className="mb-6">
                Finding an expert is not hard. Finding the right one, clearing conflicts, confirming they will actually
                testify, and doing it before your disclosure deadline is where attorneys lose time.
              </p>
              <p className="mb-6">
                Here is how the sourcing options actually compare and what to check before you retain anyone. For a side
                by side look at directories versus sourcing firms, see{' '}
                <Link href="/expert-witness-services-comparison" className={linkClass}>
                  expert witness services compared
                </Link>
                .
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                The Four Ways Attorneys Source Experts
              </h2>
              <p className="mb-6">
                Referrals from other attorneys. Free, and the quality signal is real because someone has worked with the
                person. The limits are coverage and conflicts. Your network only reaches so far, and the expert your
                colleague recommends may have already been retained by the other side or consulted for a party in your
                matter. Referrals also skew toward experts who testify frequently, which is a cross-examination target.
              </p>
              <p className="mb-6">
                Directories and listing sites. Sites like SEAK, JurisPro, and ExpertPages list experts who pay to be
                listed. Free or cheap to search, and you get volume. The problem is that a listing tells you the person is
                marketing themselves, not that they are qualified for your specific opinion. You do the vetting, the
                conflict clearing, and the availability calls yourself, and most of the profiles you contact will not
                respond.
              </p>
              <p className="mb-6">
                Expert referral services. Firms that maintain a network and match experts to your case. Faster than doing
                it yourself and the vetting is done for you. Pricing models vary and that is what to look at closely. Some
                charge a subscription or database access fee. Some mark up the expert&apos;s hourly rate, which means you
                pay more for every hour the expert bills. Some charge a flat success fee. Blackstorm&apos;s model is
                custom sourcing with a flat success fee, described on our{' '}
                <Link href="/expert-witness-search" className={linkClass}>
                  expert witness search
                </Link>{' '}
                page.
              </p>
              <p className="mb-6">
                Academic and professional associations. Useful when you need a genuinely rare specialty. University
                faculty and specialty board directories can surface people who do not market themselves as experts at
                all. Slower, and many will decline, but this is often the only route for narrow subspecialties. Browse our{' '}
                <Link href="/expert-witness" className={linkClass}>
                  expert witness specialties
                </Link>{' '}
                for the disciplines we source most often.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                What to Check Before You Retain
              </h2>
              <p className="mb-6">
                The specific match. Not the specialty, the opinion. Qualification attaches to the opinion, not to the
                person. A board-certified surgeon is qualified as a surgeon. Whether they are qualified to opine on a
                procedure they have not performed in fifteen years is a separate question, and that is the question
                opposing counsel asks. For how that analysis works, see{' '}
                <Link href="/blog/qualifying-an-expert-witness" className={linkClass}>
                  qualifying an expert witness
                </Link>
                .
              </p>
              <p className="mb-6">
                Conflicts. Clear the parties, the carriers, the manufacturers, and any prior consulting relationships
                before the first call. A conflict discovered after retention costs you the expert and the time.
              </p>
              <p className="mb-6">
                Testimony history. How often they testify, the plaintiff and defense split, and whether they have ever
                been excluded or limited. A heavily one-sided history invites a bias attack. A prior exclusion is not
                disqualifying but you need to know about it before opposing counsel does.
              </p>
              <p className="mb-6">
                Methodology. Ask what method they will use and whether they use it in their regular professional work. A
                technique developed for litigation is a{' '}
                <Link href="/blog/daubert-expert-witness" className={linkClass}>
                  Daubert
                </Link>{' '}
                problem waiting to happen.
              </p>
              <p className="mb-6">
                Availability against your deadlines. Ask specifically about your disclosure date, deposition window, and
                trial date. An expert who is qualified and unavailable is not a candidate. Disclosure contents are covered
                in the{' '}
                <Link href="/blog/rule-26-expert-disclosure-pre-retention-checklist" className={linkClass}>
                  Rule 26 pre-retention checklist
                </Link>
                .
              </p>
              <p className="mb-6">
                Whether they will actually testify. Some experts consult but decline to testify. Confirm it early rather
                than discovering it after they have reviewed the file. The consulting versus designated posture is covered
                in{' '}
                <Link href="/blog/testifying-vs-consulting-expert" className={linkClass}>
                  testifying vs consulting expert
                </Link>
                .
              </p>
              <p className="mb-6">
                Fee structure. Hourly rate, retainer amount, whether the retainer replenishes, deposition and trial day
                rates, travel, and cancellation terms. Deposition rates in particular are often significantly higher than
                the review rate. For how those categories typically break down, see{' '}
                <Link href="/blog/expert-witness-fees-cost-structure" className={linkClass}>
                  expert witness fee structures
                </Link>
                . For evaluating cost and credentials together, see{' '}
                <Link href="/blog/how-to-compare-expert-witness-fees-and-qualifications" className={linkClass}>
                  how to compare expert witness fees and qualifications
                </Link>
                .
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                The Questions That Reveal a Weak Candidate
              </h2>
              <p className="mb-6">
                What specifically in your background supports this exact opinion? A general answer about years of
                experience is a warning.
              </p>
              <p className="mb-6">When did you last practice in this specific area?</p>
              <p className="mb-6">Have you been qualified by a court on this type of opinion before?</p>
              <p className="mb-6">Have you ever been excluded, limited, or found unqualified?</p>
              <p className="mb-6">
                What would change your conclusion? An expert who cannot answer this has not thought like an expert.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">Timing</h2>
              <p className="mb-6">
                Start earlier than feels necessary, particularly in{' '}
                <Link href="/expert-witness/medical-malpractice" className={linkClass}>
                  medical malpractice
                </Link>{' '}
                where same-specialty requirements narrow the pool, and in rebuttal where the federal window runs thirty
                days from the opposing disclosure. That compressed timeline is covered in{' '}
                <Link href="/blog/rebuttal-expert-witness" className={linkClass}>
                  rebuttal expert witness
                </Link>
                .
              </p>
              <p className="mb-6">
                The search itself is usually not the bottleneck. Conflict clearing, availability confirmation, and the
                expert&apos;s own review time are what consume the calendar.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">Start a Search</h2>
              <p className="mb-6">
                Describe the case and the opinion you need supported. We will return matched candidates with CVs, fee
                schedules, and testimony history, typically within 48 to 72 hours.
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
