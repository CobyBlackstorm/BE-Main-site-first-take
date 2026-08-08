import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import RelatedArticles from '@/components/RelatedArticles'
import FinalCTA from '@/components/FinalCTA'
import { getBlogPostsBySpecialty, type BlogPost } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Heart Attack Expert Witness | Blackstorm Experts',
  description:
    'Heart attack expert witnesses for delayed diagnosis, STEMI and NSTEMI, cardiac testing, catheterization, treatment, and causation.',
  alternates: {
    canonical: '/heart-attack-expert-witness',
  },
  openGraph: {
    url: '/heart-attack-expert-witness',
    title: 'Heart Attack Expert Witness | Blackstorm Experts',
    description:
      'Heart attack expert witnesses for delayed diagnosis, STEMI and NSTEMI, cardiac testing, catheterization, treatment, and causation.',
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

function getRelatedHeartAttackPosts(): BlogPost[] {
  const seen = new Set<string>()
  const posts: BlogPost[] = []

  for (const specialty of [
    'cardiology',
    'emergency-medicine',
    'medical-malpractice',
    'cardiothoracic-surgery',
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

export default function HeartAttackExpertWitnessPage() {
  const relatedPosts = getRelatedHeartAttackPosts()

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Heart Attack Expert Witness Sourcing',
    serviceType: 'Heart attack and myocardial infarction expert witness sourcing',
    description:
      'Heart attack expert witnesses for delayed diagnosis, STEMI and NSTEMI, cardiac testing, catheterization, treatment, and causation.',
    url: `${BASE}/heart-attack-expert-witness`,
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
              Heart Attack Expert Witness
            </h1>

            <div className="blog-prose text-[17px] leading-[1.85] text-primary">
              <p className="mb-6">
                Heart attack cases often turn on timing. The diagnosis itself may be clear by the time litigation begins,
                but the disputed questions are usually what the treating team knew, when the available information should
                have changed the plan of care, and whether earlier intervention would have changed the outcome.
              </p>
              <p className="mb-6">
                A heart attack, or myocardial infarction, can involve several different specialties depending on where the
                alleged failure occurred. A <SpecialtyLink slug="cardiology">cardiologist</SpecialtyLink> may address
                diagnosis and medical management. An{' '}
                <SpecialtyLink slug="emergency-medicine">emergency medicine</SpecialtyLink> physician may be needed when
                the case centers on the initial presentation and discharge decision. An interventional cardiologist may be
                more appropriate when the dispute involves cardiac catheterization, stent placement, or the timing of
                coronary intervention.
              </p>
              <p className="mb-6">
                The right expert is therefore determined by the opinion that needs to be supported, not simply by the
                diagnosis. For how specialty matching works across medicine generally, see{' '}
                <Link href="/medical-expert-witness" className={linkClass}>
                  medical expert witness
                </Link>{' '}
                sourcing.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                Delayed or Missed Heart Attack Diagnosis
              </h2>
              <p className="mb-6">
                Many heart attack cases begin with an allegation that the patient&apos;s symptoms, risk factors, ECG
                findings, or cardiac biomarkers should have prompted further evaluation.
              </p>
              <p className="mb-6">
                The analysis is rarely limited to one test. An expert may need to consider the patient&apos;s symptoms,
                medical history, serial ECGs, troponin results, response to treatment, changes during observation, and the
                differential diagnosis being considered at the time. The question is whether the overall clinical picture
                required additional cardiac testing, consultation, admission, or treatment.
              </p>
              <p className="mb-6">
                This can be particularly important when the presentation is not classic. Some patients present with chest
                pressure, while others report shortness of breath, weakness, nausea, diaphoresis, arm discomfort, jaw
                discomfort, or other symptoms. The standard of care is evaluated based on the information available to the
                treating clinician at the time, not solely on the diagnosis that became apparent later.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                STEMI and NSTEMI Cases
              </h2>
              <p className="mb-6">
                The distinction between STEMI and NSTEMI can significantly affect the expert analysis.
              </p>
              <p className="mb-6">
                ST-elevation myocardial infarction generally raises urgent questions about recognition and restoration of
                coronary blood flow. Litigation may focus on whether an ECG was interpreted appropriately, whether a
                catheterization team should have been activated sooner, whether transfer to a PCI-capable facility was
                timely, or whether another delay affected the patient&apos;s outcome.
              </p>
              <p className="mb-6">
                NSTEMI cases may involve a more complicated sequence of serial biomarkers, repeat ECGs, risk assessment,
                cardiology consultation, medication management, and decisions about when to proceed with invasive
                evaluation. An expert reviewing this type of case should be familiar with the clinical pathway actually at
                issue rather than offering a generalized opinion about myocardial infarction.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                Cardiac Catheterization and Coronary Intervention
              </h2>
              <p className="mb-6">
                When the dispute concerns treatment after a heart attack has been recognized, an interventional cardiologist
                may be the most appropriate expert.
              </p>
              <p className="mb-6">
                These cases can involve the timing of cardiac catheterization, interpretation of coronary angiography,
                selection of vessels for intervention, balloon angioplasty, stent placement, antiplatelet therapy,
                procedural complications, or the decision to pursue PCI rather than medical or surgical management.
              </p>
              <p className="mb-6">
                The expert&apos;s current clinical practice matters. A case criticizing the performance of a coronary
                intervention is generally stronger when reviewed by someone who actively performs the same or similar
                procedures and can explain what a reasonable interventional cardiologist would have done under comparable
                circumstances. For how qualification attaches to the specific opinion, see{' '}
                <Link href="/blog/qualifying-an-expert-witness" className={linkClass}>
                  qualifying an expert witness
                </Link>
                .
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                Emergency Department Heart Attack Cases
              </h2>
              <p className="mb-6">
                Emergency department cases often focus on whether a patient with possible acute coronary syndrome was
                evaluated appropriately before discharge. Our{' '}
                <Link href="/blog/emergency-medicine-expert-witness" className={linkClass}>
                  emergency medicine expert witness
                </Link>{' '}
                overview covers when that specialty is the right fit and what to screen for.
              </p>
              <p className="mb-6">
                An emergency medicine expert may address the initial differential diagnosis, interpretation of symptoms,
                use of ECG testing, serial troponin testing, observation, consultation, risk stratification, and whether
                admission or additional testing was warranted. A cardiologist may then address the cardiac significance of
                the findings or the consequences of a delay.
              </p>
              <p className="mb-6">
                This is one of the situations where a single expert may not be enough. The emergency physician&apos;s
                standard of care and the cardiologist&apos;s causation analysis can be separate issues. For when that
                split is necessary, see{' '}
                <Link href="/blog/when-your-case-needs-two-expert-witnesses" className={linkClass}>
                  when your case needs two expert witnesses
                </Link>
                .
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                Causation After a Heart Attack
              </h2>
              <p className="mb-6">
                A breach in the standard of care does not automatically establish that the alleged delay caused the
                patient&apos;s injury.
              </p>
              <p className="mb-6">
                Causation analysis may require evaluation of the timing and extent of myocardial damage, the
                patient&apos;s underlying coronary artery disease, cardiac function before and after the event, and whether
                earlier treatment would probably have produced a different result.
              </p>
              <p className="mb-6">
                A cardiology expert may be asked to address whether a delay contributed to reduced ejection fraction, heart
                failure, arrhythmia, cardiogenic shock, the need for additional procedures, permanent cardiac impairment,
                or death. In some cases, the expert may conclude that the underlying disease process was already too
                advanced for the alleged delay to have materially changed the outcome.
              </p>
              <p className="mb-6">
                The ability to separate standard of care from causation is especially important in heart attack litigation.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                Premature Discharge and Failure to Admit
              </h2>
              <p className="mb-6">
                Some cases involve patients who were evaluated for chest pain or other cardiac symptoms and then discharged
                shortly before suffering a myocardial infarction or cardiac arrest.
              </p>
              <p className="mb-6">
                The expert analysis may focus on whether the patient&apos;s symptoms, laboratory findings, ECG results, risk
                factors, or clinical course required continued observation, cardiology consultation, admission, or
                additional testing. The fact that a patient later experienced a heart attack does not by itself establish
                that discharge was inappropriate.
              </p>
              <p className="mb-6">
                A defensible opinion requires comparison of the information known at the time with the standard of care
                applicable to the treating clinician.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                Heart Attack Cases Involving Cardiac Arrest
              </h2>
              <p className="mb-6">
                Heart attack and cardiac arrest are related but distinct events. A myocardial infarction occurs when blood
                flow to part of the heart is reduced or blocked. Cardiac arrest occurs when the heart stops effectively
                pumping blood.
              </p>
              <p className="mb-6">
                A heart attack may trigger a fatal arrhythmia and lead to cardiac arrest, but not every cardiac arrest is
                caused by myocardial infarction. Cases involving both conditions may require analysis of rhythm strips,
                resuscitation records, coronary disease, laboratory findings, and the sequence of events leading to the
                arrest.
              </p>
              <p className="mb-6">
                Depending on the allegations, the appropriate expert may include cardiology, emergency medicine, critical
                care, or another specialty involved in the patient&apos;s treatment.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                Records Reviewed in Heart Attack Litigation
              </h2>
              <p className="mb-6">
                Heart attack experts generally need more than the final discharge summary or cardiology note.
              </p>
              <p className="mb-6">
                The review may include emergency department records, EMS documentation, ECG tracings, serial laboratory
                results, cardiac monitoring, medication administration records, cardiology consultations, echocardiograms,
                stress testing, cardiac catheterization records, coronary angiography, operative records, and prior cardiac
                history.
              </p>
              <p className="mb-6">
                The underlying tracings and studies can be particularly important when interpretation is disputed. A note
                stating that an ECG was &quot;normal&quot; or &quot;nonspecific&quot; may not resolve the question if the
                actual tracing is central to the case.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                Choosing the Right Heart Attack Expert
              </h2>
              <p className="mb-6">The appropriate expert depends on the precise allegation.</p>
              <p className="mb-6">
                A delayed diagnosis case arising in the emergency department may require an emergency physician. A question
                about myocardial infarction diagnosis or medical management may call for a general cardiologist. A dispute
                involving PCI or stent placement may require an interventional cardiologist. A case involving coronary
                artery bypass surgery may require a{' '}
                <SpecialtyLink slug="cardiothoracic-surgery">cardiothoracic surgeon</SpecialtyLink>.
              </p>
              <p className="mb-6">
                In more complex cases, multiple experts may be necessary because the standard of care and causation
                opinions fall within different specialties.
              </p>
              <p className="mb-0">
                The strongest match is generally an expert whose current clinical practice closely resembles the care being
                evaluated and whose experience covers the specific decision, procedure, or phase of treatment at issue.
                Start an{' '}
                <Link href="/expert-witness-search" className={linkClass}>
                  expert witness search
                </Link>{' '}
                when you are ready to retain.
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
