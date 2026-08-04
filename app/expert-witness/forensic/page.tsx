import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FinalCTA from '@/components/FinalCTA'
import RelatedArticles from '@/components/RelatedArticles'
import { getBlogPostsBySpecialty, type BlogPost } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Forensic Expert Witness',
  description:
    'Forensic expert witnesses across accounting, engineering, pathology, digital, fire investigation, and document examination. Vetted candidates with CVs, fee schedules, and testimony history in 48 to 72 hours.',
  alternates: {
    canonical: '/expert-witness/forensic',
  },
  openGraph: {
    url: '/expert-witness/forensic',
    title: 'Forensic Expert Witness',
    description:
      'Forensic expert witnesses across accounting, engineering, pathology, digital, fire investigation, and document examination. Vetted candidates with CVs, fee schedules, and testimony history in 48 to 72 hours.',
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

function getRelatedForensicPosts(): BlogPost[] {
  const seen = new Set<string>()
  const posts: BlogPost[] = []

  for (const specialty of [
    'forensic-accounting',
    'forensic-economics',
    'fire-investigation',
    'electrical-engineering',
    'accident-reconstruction',
    'toxicology',
    'pathology',
    'psychiatry',
    'wrongful-death',
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

export default function ForensicExpertWitnessPage() {
  const relatedPosts = getRelatedForensicPosts()

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Forensic Expert Witness Sourcing',
    serviceType: 'Forensic expert witness sourcing',
    description:
      'Forensic expert witnesses across accounting, engineering, pathology, digital, fire investigation, and document examination. Vetted candidates with CVs, fee schedules, and testimony history in 48 to 72 hours.',
    url: `${BASE}/expert-witness/forensic`,
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
              Forensic Expert Witness
            </h1>

            <div className="blog-prose text-[17px] leading-[1.85] text-primary">
              <p className="mb-6">
                Forensic work is reconstruction. Something happened, the evidence of it is incomplete, and the
                expert&apos;s job is to determine what occurred from what is left behind.
              </p>
              <p className="mb-6">
                That makes methodology the whole ballgame. Forensic opinions draw{' '}
                <Link href="/blog/daubert-expert-witness" className={linkClass}>
                  Daubert
                </Link>{' '}
                challenges more often than most expert testimony because the analysis is what connects physical evidence
                to a conclusion, and courts examine whether that connection holds.
              </p>
              <p className="mb-6">
                Blackstorm Experts sources forensic experts matched to the specific discipline and the specific analysis
                your case requires. For how custom sourcing works, see our{' '}
                <Link href="/expert-witness-search" className={linkClass}>
                  expert witness search
                </Link>{' '}
                page.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                Forensic Disciplines We Source
              </h2>
              <p className="mb-6">
                <SpecialtyLink slug="forensic-accounting">Forensic accounting</SpecialtyLink>. Fraud investigation, asset
                tracing, economic damages, lost profits, business valuation, and financial reconstruction in commercial
                and marital disputes.
              </p>
              <p className="mb-6">
                <SpecialtyLink slug="forensic-economics">Forensic economics</SpecialtyLink>.{' '}
                <SpecialtyLink slug="wrongful-death">Wrongful death</SpecialtyLink> and{' '}
                <SpecialtyLink slug="personal-injury">personal injury</SpecialtyLink> damages, lost earning capacity,
                present value calculations, and household services valuation.
              </p>
              <p className="mb-6">
                <SpecialtyLink slug="pathology">Forensic pathology</SpecialtyLink>. Cause and manner of death, autopsy
                findings, time of death, injury interpretation, and toxicology correlation in wrongful death and criminal
                matters.
              </p>
              <p className="mb-6">
                <SpecialtyLink slug="fire-investigation">Fire and explosion investigation</SpecialtyLink>. Origin and
                cause determination, ignition sequence, fuel load analysis, and NFPA 921 methodology in property damage,
                subrogation, and products cases.
              </p>
              <p className="mb-6">
                Forensic engineering. Failure analysis, materials examination, structural collapse, and product failure
                reconstruction. Related disciplines are covered on our{' '}
                <Link href="/expert-witness/engineering" className={linkClass}>
                  engineering expert witness
                </Link>{' '}
                page, including{' '}
                <Link href="/forensic-electrical-engineer-expert-witness" className={linkClass}>
                  forensic electrical engineer expert witness
                </Link>{' '}
                work.
              </p>
              <p className="mb-6">
                Digital and computer forensics. Data recovery, device examination, metadata analysis, deleted file
                recovery, and chain of custody in employment, trade secret, and criminal matters.
              </p>
              <p className="mb-6">
                Forensic document examination. Handwriting comparison, signature authentication, alterations, and ink and
                paper analysis in will contests, contract disputes, and fraud claims.
              </p>
              <p className="mb-6">
                <SpecialtyLink slug="toxicology">Forensic toxicology</SpecialtyLink>. Substance identification, impairment
                analysis, dose reconstruction, and postmortem interpretation.
              </p>
              <p className="mb-6">
                <SpecialtyLink slug="accident-reconstruction">Accident reconstruction</SpecialtyLink>. Vehicle dynamics,
                speed and impact analysis, crush measurement, and event data recorder interpretation.
              </p>
              <p className="mb-6">
                <SpecialtyLink slug="psychiatry">Forensic psychiatry</SpecialtyLink> and psychology. Competency, capacity,
                emotional damages, and standard of care in mental health treatment.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                Why Methodology Matters More Here
              </h2>
              <p className="mb-6">
                Forensic testimony sits at the center of Daubert analysis. The reliability factors, testability, peer
                review, known error rate, and general acceptance, were written with exactly this kind of evidence in mind.
                The governing federal framework is{' '}
                <Link href="/blog/federal-rule-of-evidence-702" className={linkClass}>
                  Federal Rule of Evidence 702
                </Link>
                .
              </p>
              <p className="mb-6">Three failures recur.</p>
              <p className="mb-6">
                Methodology developed for litigation. A technique the expert created for this case, or uses only when
                testifying, draws immediate scrutiny. Methods used in the expert&apos;s regular professional work are far
                more defensible.
              </p>
              <p className="mb-6">
                Conclusions outrunning the evidence. Forensic analysis often supports a range of possibilities. An expert
                who states a definitive conclusion where the evidence supports a probability is vulnerable, and so is the
                opinion built on it.
              </p>
              <p className="mb-6">
                Chain of custody and evidence handling. Particularly in digital forensics and physical evidence
                examination, how the material was collected and preserved can undermine an otherwise sound analysis.
              </p>
              <p className="mb-6">We screen for these before candidates reach you.</p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">What You Get</h2>
              <p className="mb-6">
                Two to three vetted candidates, typically within 48 to 72 hours. Each with a full CV, fee schedule and
                retainer terms, testimony history, and a summary of the specific experience that maps to the analysis your
                case requires. For how fee schedules typically break down, see{' '}
                <Link href="/blog/expert-witness-fees-cost-structure" className={linkClass}>
                  expert witness fee structures
                </Link>
                .
              </p>
              <p className="mb-6">
                Conflicts are cleared before we send anyone. If a candidate has consulted for a party, carrier, or
                laboratory involved in your matter, you will know before you make a call.
              </p>
              <p className="mb-6">
                Flat success fee. No subscription, no database access charge, no retainer to start a search.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">Case Types We Support</h2>
              <p className="mb-6">
                Wrongful death and catastrophic injury. Fire and explosion subrogation.{' '}
                <SpecialtyLink slug="products-liability-engineering">Products liability</SpecialtyLink>. Commercial fraud
                and financial disputes. Trade secret and employment litigation. Will contests and estate disputes. Motor
                vehicle and <SpecialtyLink slug="trucking-transportation">trucking</SpecialtyLink>.{' '}
                <SpecialtyLink slug="medical-malpractice">Medical malpractice</SpecialtyLink> involving cause of death.
              </p>
              <p className="mb-6">Both plaintiff and defense.</p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                Credentials Worth Checking
              </h2>
              <p className="mb-6">
                Forensic disciplines vary widely in how they are certified, and some certifications carry more weight than
                others. Board certification from a recognized body, laboratory accreditation where applicable, and
                adherence to published standards such as NFPA 921 in fire investigation or ASTM methods in materials
                analysis are what hold up under examination. For how qualification attaches to the specific opinion, see{' '}
                <Link href="/blog/qualifying-an-expert-witness" className={linkClass}>
                  qualifying an expert witness
                </Link>
                .
              </p>
              <p className="mb-6">
                Certifications from organizations with minimal requirements are a common cross-examination target. We
                check the issuing body, not just the credential.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">How the Search Works</h2>
              <p className="mb-6">
                Tell us the case, the evidence available, the jurisdiction, and the opinion you need supported. If an
                opposing expert has already issued a report, send it, because the response often determines which
                discipline you need. On a compressed rebuttal timeline, see{' '}
                <Link href="/blog/rebuttal-expert-witness" className={linkClass}>
                  rebuttal expert witness
                </Link>
                .
              </p>
              <p className="mb-6">
                We identify candidates whose background covers the specific analysis, clear conflicts, confirm
                availability against your deadlines, and confirm they will testify. You get the package and you contact
                them directly.
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
