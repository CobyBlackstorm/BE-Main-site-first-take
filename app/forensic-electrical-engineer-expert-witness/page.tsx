import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import RelatedArticles from '@/components/RelatedArticles'
import LandingPageCTA from '@/components/LandingPageCTA'
import { getBlogPostsBySpecialty, type BlogPost } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Forensic Electrical Engineer Expert Witness | Blackstorm Experts',
  description:
    'What a forensic electrical engineer examines in electrocution, fire, and equipment failure cases, and what to evaluate before retaining one.',
  alternates: {
    canonical: '/forensic-electrical-engineer-expert-witness',
  },
  openGraph: {
    url: '/forensic-electrical-engineer-expert-witness',
    title: 'Forensic Electrical Engineer Expert Witness | Blackstorm Experts',
    description:
      'What a forensic electrical engineer examines in electrocution, fire, and equipment failure cases, and what to evaluate before retaining one.',
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

function getRelatedElectricalPosts(): BlogPost[] {
  const seen = new Set<string>()
  const posts: BlogPost[] = []

  for (const specialty of [
    'electrical-engineering',
    'fire-investigation',
    'products-liability-engineering',
    'construction-defect',
    'personal-injury',
  ]) {
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

export default function ForensicElectricalEngineerExpertWitnessPage() {
  const relatedPosts = getRelatedElectricalPosts()

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Forensic Electrical Engineer Expert Witness Sourcing',
    serviceType: 'Forensic electrical engineer expert witness sourcing',
    description:
      'What a forensic electrical engineer examines in electrocution, fire, and equipment failure cases, and what to evaluate before retaining one.',
    url: `${BASE}/forensic-electrical-engineer-expert-witness`,
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
              Forensic Electrical Engineer Expert Witness
            </h1>

            <LandingPageCTA specialty="Forensic Electrical Engineer" />

            <div className="blog-prose text-[17px] leading-[1.85] text-primary">
              <p className="mb-6">
                Electrical cases are unusual in that the physical evidence often survives the event. A failed breaker, a
                damaged conductor, an arc mark on a panel enclosure, and the installation itself frequently remain
                available for examination, which means causation in these cases is provable to a degree that is rare in{' '}
                <SpecialtyLink slug="personal-injury">personal injury</SpecialtyLink> work.
              </p>
              <p className="mb-6">
                That advantage disappears if the evidence is altered or discarded before anyone qualified looks at it.
                Retaining a <SpecialtyLink slug="electrical-engineering">forensic electrical engineer</SpecialtyLink>{' '}
                early matters more in these cases than in most.
              </p>
              <p className="mb-6">
                This page covers the case types where these experts are used, what their analysis consists of, which
                qualifications matter, and where their opinions are challenged.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">Case types</h2>
              <p className="mb-6">
                Electrocution and electric shock injury cases are the most direct application. These arise from contact
                with energized equipment, overhead or underground power lines, faulty appliances, damaged cords and tools,
                improperly grounded systems, and swimming pool and marina electrical faults. The engineer establishes the
                path the current took, why it was available to the victim, and what safety measure would have prevented
                it.
              </p>
              <p className="mb-6">
                Electrical fire origin and cause work often runs alongside a{' '}
                <SpecialtyLink slug="fire-investigation">fire investigator</SpecialtyLink>. The fire investigator
                addresses origin and general cause. The electrical engineer addresses whether an electrical component or
                system initiated it, which is a narrower and more technical question involving arc mapping, conductor
                examination, and evaluation of overcurrent protection. How those disciplines work together is covered in{' '}
                <Link href="/blog/product-fire-electrical-engineering-expert-witness" className={linkClass}>
                  product fire and electrical engineering
                </Link>{' '}
                cases.
              </p>
              <p className="mb-6">
                Equipment and product failure cases involve determining whether a device failed because of a design
                defect, a manufacturing defect, improper installation, or misuse. This work frequently intersects with{' '}
                <SpecialtyLink slug="products-liability-engineering">product liability</SpecialtyLink>.
              </p>
              <p className="mb-6">
                <SpecialtyLink slug="construction-defect">Construction</SpecialtyLink> and installation defect cases turn
                on whether the work complied with the National Electrical Code and applicable local amendments, and
                whether the noncompliance caused the harm.
              </p>
              <p className="mb-6">
                Utility cases involve line clearance, pole conditions, service drops, and metering, and generally require
                an engineer with specific utility system experience rather than general electrical qualifications.
              </p>
              <p className="mb-6">
                Arc flash injury cases involve incident energy calculations, personal protective equipment adequacy, and
                whether the employer or contractor followed NFPA 70E requirements.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                What the analysis consists of
              </h2>
              <p className="mb-6">
                The work begins with physical examination of the evidence wherever it still exists. Conductors,
                connectors, breakers, receptacles, and the equipment involved are examined for arcing, overheating,
                insulation failure, and mechanical damage. Much of this is visual and microscopic, and some involves
                destructive testing that requires notice to all parties before it occurs.
              </p>
              <p className="mb-6">
                The engineer then reconstructs the electrical conditions at the time of the incident. What was energized,
                at what voltage, what protective devices were present, whether those devices operated as designed, and
                what path a fault current would have followed.
              </p>
              <p className="mb-6">
                Code compliance analysis follows. The National Electrical Code sets the installation standard, NFPA 70E
                governs workplace electrical safety practices, and OSHA regulations apply in occupational settings. The
                engineer identifies which provisions applied and whether the installation or the work practice met them.
                The applicable code edition is the one in effect when the work was performed, which is a detail that gets
                missed and produces avoidable problems on cross.
              </p>
              <p className="mb-6">
                Where relevant, the engineer performs calculations: fault current magnitude, incident energy for arc
                flash, current through the body in an electrocution case. These are the portions of the opinion most likely
                to be tested under{' '}
                <Link href="/blog/daubert-expert-exclusion-vetting-checklist" className={linkClass}>
                  Daubert
                </Link>
                , and the underlying assumptions should be documented. For how the governing reliability framework works
                more broadly, see{' '}
                <Link href="/blog/federal-rule-of-evidence-702" className={linkClass}>
                  Federal Rule of Evidence 702
                </Link>
                .
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                Evidence preservation
              </h2>
              <p className="mb-6">
                Electrical evidence is destroyed routinely and usually without bad intent. Damaged equipment is replaced
                because the building needs power. Fire scenes are cleared. Utilities repair lines within hours.
              </p>
              <p className="mb-6">
                Anyone handling these cases should issue a preservation demand immediately and, where possible, get an
                engineer to the scene before repairs. Where evidence has already been altered, the engineer&apos;s ability
                to reach a firm opinion is reduced and the opinion becomes more vulnerable, though photographs,
                maintenance records, and the physical remains of the system often still support meaningful analysis.
              </p>
              <p className="mb-6">
                If evidence still exists, joint examination protocols should be established with opposing counsel before
                any destructive testing. Unilateral destructive testing produces spoliation motions.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">Qualifications</h2>
              <p className="mb-6">
                A professional engineer license in electrical engineering is the baseline credential, and its absence will
                be raised. Licensure in the state where the incident occurred is not usually required for the opinion but
                is worth confirming, since some jurisdictions treat it as relevant.
              </p>
              <p className="mb-6">
                Beyond licensure, subject matter alignment matters. Electrical engineering is broad, and a power systems
                engineer, an electronics designer, and a controls specialist are not interchangeable. An expert whose
                background is in semiconductor design is poorly positioned to testify about residential branch circuit
                wiring, and opposing counsel will develop that point. For how that gap is framed as a qualification
                challenge, see{' '}
                <Link href="/blog/qualifying-an-expert-witness" className={linkClass}>
                  qualifying an expert witness
                </Link>
                .
              </p>
              <p className="mb-6">
                Field experience carries weight with juries in these cases. An engineer who has actually worked in
                installation, inspection, or utility operations presents differently than one whose experience is entirely
                academic.
              </p>
              <p className="mb-6">
                Certifications worth noting include IAEI membership and certification for code compliance work, NAFI or
                IAAI certification where fire cause is involved, and documented arc flash and NFPA 70E training for
                workplace electrical safety cases.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                Where opinions are challenged
              </h2>
              <p className="mb-6">
                The most common challenge is that the engineer&apos;s causation theory rests on assumptions that cannot be
                verified because the evidence was altered. This is why early retention matters.
              </p>
              <p className="mb-6">
                Alternative cause is the second. In fire cases particularly, the defense will offer a non electrical
                origin, and the engineer must have ruled it out through a documented process rather than by asserting the
                electrical explanation is more likely.
              </p>
              <p className="mb-6">
                Calculation inputs are challenged where fault current or incident energy figures depend on assumed system
                parameters. An engineer who obtained the actual utility fault current data is in a much stronger position
                than one who estimated.
              </p>
              <p className="mb-0">
                Code edition and applicability disputes arise frequently and are avoidable with attention at the report
                stage. Challenges are typically raised through a{' '}
                <Link href="/blog/motion-in-limine-to-exclude-expert-testimony" className={linkClass}>
                  motion in limine
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
