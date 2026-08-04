import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FinalCTA from '@/components/FinalCTA'
import RelatedArticles from '@/components/RelatedArticles'
import { getBlogPostsBySpecialty, type BlogPost } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Engineering Expert Witness',
  description:
    'Engineering expert witnesses across civil, structural, electrical, mechanical, products liability, and forensic disciplines. Vetted candidates with CVs, fee schedules, and testimony history in 48 to 72 hours.',
  alternates: {
    canonical: '/expert-witness/engineering',
  },
  openGraph: {
    url: '/expert-witness/engineering',
    title: 'Engineering Expert Witness',
    description:
      'Engineering expert witnesses across civil, structural, electrical, mechanical, products liability, and forensic disciplines. Vetted candidates with CVs, fee schedules, and testimony history in 48 to 72 hours.',
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

function getRelatedEngineeringPosts(): BlogPost[] {
  const seen = new Set<string>()
  const posts: BlogPost[] = []

  for (const specialty of [
    'electrical-engineering',
    'civil-engineering',
    'structural-engineering',
    'products-liability-engineering',
    'construction-defect',
    'fire-investigation',
    'human-factors',
    'accident-reconstruction',
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

export default function EngineeringExpertWitnessPage() {
  const relatedPosts = getRelatedEngineeringPosts()

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Engineering Expert Witness Sourcing',
    serviceType: 'Engineering expert witness sourcing',
    description:
      'Engineering expert witnesses across civil, structural, electrical, mechanical, products liability, and forensic disciplines. Vetted candidates with CVs, fee schedules, and testimony history in 48 to 72 hours.',
    url: `${BASE}/expert-witness/engineering`,
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
              Engineering Expert Witness
            </h1>

            <div className="blog-prose text-[17px] leading-[1.85] text-primary">
              <p className="mb-6">
                Engineering cases turn on causation, and causation turns on whether the expert&apos;s discipline actually
                covers the failure at issue. A mechanical engineer and an{' '}
                <SpecialtyLink slug="electrical-engineering">electrical engineer</SpecialtyLink> are both engineers. They
                are not interchangeable when the question is why a component ignited.
              </p>
              <p className="mb-6">
                Blackstorm Experts sources engineering experts matched to the specific failure mode in your case, not to
                the broad category. For how custom sourcing differs from directories, see our{' '}
                <Link href="/expert-witness-search" className={linkClass}>
                  expert witness search
                </Link>{' '}
                page.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                Disciplines We Source
              </h2>
              <p className="mb-6">
                <SpecialtyLink slug="civil-engineering">Civil engineering</SpecialtyLink>. Site conditions, drainage,
                grading, roadway design, land development, and code compliance on infrastructure.
              </p>
              <p className="mb-6">
                <SpecialtyLink slug="structural-engineering">Structural engineering</SpecialtyLink>. Building collapse,
                framing failure, load calculations, foundation movement, and the structural elements in{' '}
                <SpecialtyLink slug="construction-defect">construction defect</SpecialtyLink> claims.
              </p>
              <p className="mb-6">
                <SpecialtyLink slug="electrical-engineering">Electrical engineering</SpecialtyLink>. Arc fault and
                ignition analysis, wiring and installation defects, panel and breaker failures, electrocution, and NEC
                compliance. For the forensic side of that work, see{' '}
                <Link href="/forensic-electrical-engineer-expert-witness" className={linkClass}>
                  forensic electrical engineer expert witness
                </Link>
                .
              </p>
              <p className="mb-6">
                <SpecialtyLink slug="products-liability-engineering">Products liability engineering</SpecialtyLink>.
                Design defect, manufacturing defect, alternative design feasibility, warnings adequacy, and industry
                standards compliance.
              </p>
              <p className="mb-6">
                Mechanical engineering. Machinery failure, equipment design, HVAC systems, pressure vessels, moving parts
                and guarding, and maintenance standards. Common in industrial accident, workplace injury, and equipment
                failure litigation where the question is whether a machine was designed, maintained, or guarded properly.
              </p>
              <p className="mb-6">
                Geotechnical engineering. Slope stability, settlement, retaining walls, excavation and shoring, and
                subsurface conditions. Frequently paired with structural engineering when a building has moved or a
                foundation has failed, and central to trench collapse and excavation injury cases.
              </p>
              <p className="mb-6">
                Materials and metallurgical engineering. Fracture analysis, corrosion, weld failure, fatigue, and material
                selection. This is the discipline when a component broke and the question is why the material failed
                rather than whether the design was sound.
              </p>
              <p className="mb-6">
                Traffic and transportation engineering. Roadway design, signage and signalization, sight distance,
                intersection design, and work zone configuration. Distinct from{' '}
                <SpecialtyLink slug="accident-reconstruction">accident reconstruction</SpecialtyLink>, which addresses
                how a collision occurred rather than whether the roadway was designed and marked properly.
              </p>
              <p className="mb-6">
                <SpecialtyLink slug="human-factors">Human factors</SpecialtyLink> and safety engineering. Guarding,
                foreseeable misuse, warnings adequacy, OSHA and ANSI standards, and ergonomics. Often the second expert in
                a products case where the design was defensible but the warnings were not.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                Why Discipline Matching Matters
              </h2>
              <p className="mb-6">
                The most common engineering expert problem is adjacency. The expert practices in a field that touches the
                issue without covering it, and the CV reads as relevant right up until opposing counsel asks what
                specifically qualifies them to analyze this failure. For how that gap is framed as a qualification
                challenge, see{' '}
                <Link href="/blog/qualifying-an-expert-witness" className={linkClass}>
                  qualifying an expert witness
                </Link>
                .
              </p>
              <p className="mb-6">
                It surfaces in three places. Multi-discipline failures, where a{' '}
                <SpecialtyLink slug="fire-investigation">fire</SpecialtyLink> has both an electrical origin question and a
                product design question and one expert gets stretched across both. Standards-based opinions, where the
                expert is qualified in the field but has no working familiarity with the code governing the installation.
                And failure analysis, where the discipline is right but the expert has never examined this specific
                failure mode.
              </p>
              <p className="mb-6">We screen for the specific match before candidates reach you.</p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">What You Get</h2>
              <p className="mb-6">
                Two to three vetted candidates, typically within 48 to 72 hours. Each with a full CV, fee schedule and
                retainer terms, testimony history, and a summary of the specific experience that maps to the opinion your
                case needs supported. For how fee schedules typically break down, see{' '}
                <Link href="/blog/expert-witness-fees-cost-structure" className={linkClass}>
                  expert witness fee structures
                </Link>
                .
              </p>
              <p className="mb-6">
                Conflicts are cleared before we send anyone. If a candidate has consulted for a party, manufacturer, or
                insurer involved in your matter, you will know before you make a call.
              </p>
              <p className="mb-6">
                Flat success fee. No subscription, no database access charge, no retainer to start a search.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">Case Types We Support</h2>
              <p className="mb-6">
                Construction defect and construction site injury. Products liability and design defect.{' '}
                <SpecialtyLink slug="premises-liability-security">Premises liability</SpecialtyLink> involving structural
                or electrical conditions. Fire and explosion litigation. Industrial and machinery accidents. Motor vehicle
                cases involving roadway design or vehicle systems. Property damage from water intrusion, settlement, or
                component failure.
              </p>
              <p className="mb-6">Both plaintiff and defense.</p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">How the Search Works</h2>
              <p className="mb-6">
                Tell us the case, the failure at issue, the jurisdiction, and the opinion you need supported. If you have
                a report from an opposing expert, send it, because the response often determines which discipline you
                actually need. On a compressed rebuttal timeline, see{' '}
                <Link href="/blog/rebuttal-expert-witness" className={linkClass}>
                  rebuttal expert witness
                </Link>
                .
              </p>
              <p className="mb-6">
                We identify candidates whose background covers the specific failure mode, clear conflicts, confirm
                availability against your deadlines, and confirm they will testify. You get the package and you contact
                them directly.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                Working Against a Deadline
              </h2>
              <p className="mb-6">
                Engineering searches on a compressed timeline are common, particularly on rebuttal where the window runs
                thirty days from the opposing disclosure. Tell us the date you are working against and we will tell you
                honestly whether it is workable before you commit.
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
