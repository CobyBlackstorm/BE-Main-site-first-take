import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FinalCTA from '@/components/FinalCTA'

export const metadata: Metadata = {
  title: 'Medical Expert Witness Sourcing for Law Firms',
  description:
    'Custom medical expert witness sourcing across every specialty. Screened candidates with CVs, fee schedules, and interview notes in 48 to 72 hours.',
  alternates: {
    canonical: '/medical-expert-witness',
  },
  openGraph: {
    url: '/medical-expert-witness',
    title: 'Medical Expert Witness Sourcing for Law Firms',
    description:
      'Custom medical expert witness sourcing across every specialty. Screened candidates with CVs, fee schedules, and interview notes in 48 to 72 hours.',
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

export default function MedicalExpertWitnessPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Medical Expert Witness Sourcing',
    serviceType: 'Medical expert witness sourcing',
    description:
      'Custom medical expert witness sourcing across every specialty. Screened candidates with CVs, fee schedules, and interview notes in 48 to 72 hours.',
    url: `${BASE}/medical-expert-witness`,
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
              Medical Expert Witness
            </h1>

            <div className="blog-prose text-[17px] leading-[1.85] text-primary">
              <p className="mb-6">
                Medical cases fail on the expert more often than on the facts. The wrong specialty, a credential that
                does not quite match the question, or an expert whose methodology will not survive a challenge can end a
                viable case before it reaches a jury.
              </p>
              <p className="mb-6">
                We source medical experts for the specific question the case turns on, screen them before delivery, and
                tell you when the search is going to be difficult rather than sending weak candidates on time. For how
                the process works end to end, see our{' '}
                <Link href="/expert-witness-search" className={linkClass}>
                  expert witness search
                </Link>{' '}
                page.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">What we source</h2>
              <p className="mb-6">
                We cover every medical specialty and the allied health and administrative fields that surround them.
              </p>
              <p className="mb-6">
                <SpecialtyLink slug="emergency-medicine">Emergency medicine</SpecialtyLink>,{' '}
                <SpecialtyLink slug="internal-medicine">internal medicine</SpecialtyLink>, family medicine, hospitalist
                medicine, and critical care. Surgical specialties including{' '}
                <SpecialtyLink slug="general-surgery">general</SpecialtyLink>,{' '}
                <SpecialtyLink slug="orthopedic-surgery">orthopedic</SpecialtyLink>, neurological,{' '}
                <SpecialtyLink slug="cardiothoracic-surgery">cardiothoracic</SpecialtyLink>,{' '}
                <SpecialtyLink slug="vascular-surgery">vascular</SpecialtyLink>,{' '}
                <SpecialtyLink slug="plastic-surgery">plastic</SpecialtyLink>, and trauma surgery.{' '}
                <SpecialtyLink slug="cardiology">Cardiology</SpecialtyLink>,{' '}
                <SpecialtyLink slug="neurology">neurology</SpecialtyLink>,{' '}
                <SpecialtyLink slug="oncology">oncology</SpecialtyLink>,{' '}
                <SpecialtyLink slug="nephrology">nephrology</SpecialtyLink>,{' '}
                <SpecialtyLink slug="endocrinology">endocrinology</SpecialtyLink>,{' '}
                <SpecialtyLink slug="gastroenterology">gastroenterology</SpecialtyLink>,{' '}
                <SpecialtyLink slug="pulmonology">pulmonology</SpecialtyLink>,{' '}
                <SpecialtyLink slug="rheumatology">rheumatology</SpecialtyLink>,{' '}
                <SpecialtyLink slug="infectious-disease">infectious disease</SpecialtyLink>, and{' '}
                <SpecialtyLink slug="hematology">hematology</SpecialtyLink>.
              </p>
              <p className="mb-6">
                <SpecialtyLink slug="gynecology-obstetrics">Obstetrics and gynecology</SpecialtyLink>, maternal fetal
                medicine, neonatology, and <SpecialtyLink slug="pediatrics">pediatrics</SpecialtyLink> across
                subspecialties. <SpecialtyLink slug="anesthesiology">Anesthesiology</SpecialtyLink>,{' '}
                <SpecialtyLink slug="pain-management">pain management</SpecialtyLink>,{' '}
                <SpecialtyLink slug="radiology">radiology</SpecialtyLink>,{' '}
                <SpecialtyLink slug="pathology">pathology</SpecialtyLink>, and{' '}
                <SpecialtyLink slug="psychiatry">psychiatry</SpecialtyLink>.
              </p>
              <p className="mb-6">
                Nursing across practice settings, along with{' '}
                <SpecialtyLink slug="physical-therapy">physical therapy</SpecialtyLink>, occupational therapy,
                respiratory therapy, pharmacy and <SpecialtyLink slug="pharmacology">pharmacology</SpecialtyLink>, and{' '}
                <SpecialtyLink slug="toxicology">toxicology</SpecialtyLink>.
              </p>
              <p className="mb-6">
                On the administrative and economic side, medical billing and coding, hospital administration and policy,{' '}
                <SpecialtyLink slug="life-care-planning">life care planning</SpecialtyLink>, and{' '}
                <SpecialtyLink slug="vocational-rehabilitation">vocational rehabilitation</SpecialtyLink>.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                How medical searches differ
              </h2>
              <p className="mb-6">
                Matching the specialty is the easy part. The harder question is whether the expert&apos;s actual practice
                covers the specific clinical question, because courts qualify experts to the opinion rather than to the
                field. For how that analysis works in practice, see{' '}
                <Link href="/blog/qualifying-an-expert-witness" className={linkClass}>
                  qualifying an expert witness
                </Link>
                .
              </p>
              <p className="mb-6">
                An emergency physician who has never worked a rural critical access hospital may not be the right witness
                for a case about resource-limited triage. A cardiologist who left clinical practice six years ago faces a
                different cross-examination than one still taking call. These distinctions do not show up on a CV, which
                is why every candidate we deliver has been interviewed about the case facts.
              </p>
              <p className="mb-6">
                Conflicts also run deeper in medicine than in most fields. Physicians train together, refer to each
                other, and sit on the same committees, and an expert who trained under the defendant is a problem
                discovered too late if nobody asked.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">What you receive</h2>
              <p className="mb-6">
                Each candidate packet includes the full CV, the current fee schedule covering review, deposition, and
                trial rates, and our notes from the screening interview. For how fee schedules typically break down, see{' '}
                <Link href="/blog/expert-witness-fees-cost-structure" className={linkClass}>
                  expert witness fee structures
                </Link>
                .
              </p>
              <p className="mb-6">
                The interview notes cover availability against your trial calendar, prior testimony experience and any
                exclusion history, current clinical practice status, conflicts with the parties and institutions
                involved, and how the candidate discussed the case facts. That last part is usually the most useful,
                because it is where a technically qualified expert reveals whether they can explain the medicine to a
                jury.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">Turnaround</h2>
              <p className="mb-6">
                Standard medical searches deliver in 48 to 72 hours. Narrow subspecialties and searches with unusual
                constraints take longer, and we tell you at intake rather than missing the deadline quietly.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">Who we work with</h2>
              <p className="mb-6">
                Plaintiff and defense firms nationwide, from solo practitioners to national litigation groups.{' '}
                <SpecialtyLink slug="personal-injury">Personal injury</SpecialtyLink>,{' '}
                <SpecialtyLink slug="medical-malpractice">medical malpractice</SpecialtyLink>,{' '}
                <SpecialtyLink slug="products-liability-engineering">product liability</SpecialtyLink>,{' '}
                <SpecialtyLink slug="nursing-home-elder-abuse">nursing home and elder abuse</SpecialtyLink>,{' '}
                <SpecialtyLink slug="workers-compensation">workers compensation</SpecialtyLink>, insurance defense, mass
                tort, class action, hospital and health system litigation, employment matters involving medical issues,
                and any case where the medicine drives the outcome.
              </p>
              <p className="mb-0">
                We also work with insurers, third party administrators, and in-house legal departments handling claims
                that require independent medical review.
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
