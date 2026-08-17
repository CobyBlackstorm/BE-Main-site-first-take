import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import RelatedArticles from '@/components/RelatedArticles'
import FinalCTA from '@/components/FinalCTA'
import LandingPageCTA from '@/components/LandingPageCTA'
import { getBlogPostsBySpecialty, type BlogPost } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Spinal Cord Injury Expert Witness | Blackstorm Experts',
  description:
    'Spinal cord injury expert witnesses for diagnosis, surgery, neurologic impairment, rehabilitation, future care, and medical causation.',
  alternates: {
    canonical: '/spinal-cord-injury-expert-witness',
  },
  openGraph: {
    url: '/spinal-cord-injury-expert-witness',
    title: 'Spinal Cord Injury Expert Witness | Blackstorm Experts',
    description:
      'Spinal cord injury expert witnesses for diagnosis, surgery, neurologic impairment, rehabilitation, future care, and medical causation.',
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

function getRelatedSpinalCordPosts(): BlogPost[] {
  const seen = new Set<string>()
  const posts: BlogPost[] = []

  for (const specialty of [
    'neurology',
    'orthopedic-surgery',
    'physical-medicine-rehabilitation',
    'life-care-planning',
    'personal-injury',
    'radiology',
    'emergency-medicine',
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

export default function SpinalCordInjuryExpertWitnessPage() {
  const relatedPosts = getRelatedSpinalCordPosts()

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Spinal Cord Injury Expert Witness Sourcing',
    serviceType: 'Spinal cord injury expert witness sourcing',
    description:
      'Spinal cord injury expert witnesses for diagnosis, surgery, neurologic impairment, rehabilitation, future care, and medical causation.',
    url: `${BASE}/spinal-cord-injury-expert-witness`,
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
              Spinal Cord Injury Expert Witness
            </h1>

            <LandingPageCTA specialty="Spinal Cord Injury" />

            <div className="blog-prose text-[17px] leading-[1.85] text-primary">
              <p className="mb-6">
                A spinal cord injury case often requires more than one medical opinion because the injury affects several
                parts of the case at once. One expert may be needed to explain how the cord was injured. Another may
                address surgical treatment. A rehabilitation physician may evaluate long-term function, while a{' '}
                <Link href="/life-care-planner-expert-witness" className={linkClass}>
                  life care planner
                </Link>{' '}
                addresses the care and equipment the patient will require in the future.
              </p>
              <p className="mb-6">
                The first question is therefore not simply whether the patient has a spinal cord injury. It is what part of
                the injury, treatment, prognosis, or damages is actually disputed. For when that split is necessary, see{' '}
                <Link href="/blog/when-your-case-needs-two-expert-witnesses" className={linkClass}>
                  when your case needs two expert witnesses
                </Link>
                .
              </p>
              <p className="mb-6">
                Blackstorm Experts sources spinal cord injury experts based on the specific medical and functional issues
                in the case.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                Traumatic Spinal Cord Injury
              </h2>
              <p className="mb-6">
                Motor vehicle collisions, falls, construction accidents, sports injuries, and other traumatic events can
                damage the spinal cord through fracture, dislocation, compression, distraction, or direct injury.
              </p>
              <p className="mb-6">
                In these cases, the expert may need to determine whether the mechanism of the accident is consistent with
                the neurologic injury documented afterward. The analysis can involve imaging, emergency records,
                neurologic examinations, operative findings, and the patient&apos;s condition before and after the event.
              </p>
              <p className="mb-6">
                Preexisting degenerative disease can complicate the picture. A patient may already have spinal stenosis,
                disc disease, or prior surgery before sustaining trauma. The expert must distinguish the underlying
                condition from new injury caused or aggravated by the event.
              </p>
              <p className="mb-6">That distinction can be central to both liability and damages.</p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                Complete and Incomplete Spinal Cord Injuries
              </h2>
              <p className="mb-6">Not every spinal cord injury results in the same degree of impairment.</p>
              <p className="mb-6">
                A complete injury generally involves the absence of preserved motor and sensory function below the relevant
                neurologic level, while an incomplete injury preserves some function below the level of injury. The
                patient&apos;s classification can change as swelling resolves and recovery progresses.
              </p>
              <p className="mb-6">
                Experts may rely on serial neurologic examinations and standardized classifications such as the ASIA
                Impairment Scale when evaluating severity and prognosis.
              </p>
              <p className="mb-6">
                The functional significance of the injury depends not only on whether it is complete or incomplete, but
                also on its level. A cervical cord injury can affect the arms, legs, trunk, and respiratory function, while
                a lower injury may primarily affect the legs and lower body.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                Cervical Spinal Cord Injury
              </h2>
              <p className="mb-6">
                Cervical injuries can produce some of the most severe consequences because they may result in tetraplegia
                or substantial impairment of both upper and lower extremities.
              </p>
              <p className="mb-6">
                Cases involving cervical cord injury often require review of fractures, ligamentous injury, disc
                herniation, spinal canal narrowing, cord compression, edema, and abnormal signal on MRI. The expert may
                also need to address respiratory impairment, upper extremity function, autonomic complications, and the
                extent of permanent neurologic loss.
              </p>
              <p className="mb-6">
                When the dispute involves surgical decompression or stabilization, a spine surgeon may be necessary in
                addition to a <SpecialtyLink slug="neurology">neurologist</SpecialtyLink> or{' '}
                <SpecialtyLink slug="physical-medicine-rehabilitation">rehabilitation</SpecialtyLink> specialist.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                Thoracic and Lumbar Injury
              </h2>
              <p className="mb-6">
                Thoracic spinal cord injuries can result in paraplegia while leaving upper extremity function intact. The
                precise deficits depend on the level and severity of the injury.
              </p>
              <p className="mb-6">
                Below the termination of the spinal cord, injuries may involve the conus medullaris or cauda equina rather
                than the cord itself. These conditions can produce weakness, sensory loss, bowel and bladder dysfunction,
                sexual dysfunction, and other significant impairment.
              </p>
              <p className="mb-6">
                Because these diagnoses involve different anatomy and mechanisms, the expert should be familiar with the
                specific neurologic structure involved rather than treating every lower spinal injury as interchangeable.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                Spinal Cord Compression and Delayed Diagnosis
              </h2>
              <p className="mb-6">
                Some spinal cord injuries develop because the cord remains compressed rather than because it was
                irreversibly damaged at the moment of the initial event.
              </p>
              <p className="mb-6">
                Compression may result from fracture fragments, disc material, hematoma, tumor, infection, degenerative
                narrowing, or other pathology. Litigation can focus on whether worsening weakness, sensory changes, gait
                problems, bowel or bladder symptoms, or other neurologic findings should have prompted urgent imaging or
                specialist evaluation.
              </p>
              <p className="mb-6">
                The central question is often whether earlier recognition and decompression would probably have preserved
                additional neurologic function.
              </p>
              <p className="mb-6">
                These cases may involve <SpecialtyLink slug="emergency-medicine">emergency medicine</SpecialtyLink>,{' '}
                <SpecialtyLink slug="radiology">radiology</SpecialtyLink>, neurology, neurosurgery, or{' '}
                <SpecialtyLink slug="orthopedic-surgery">orthopedic</SpecialtyLink> spine surgery depending on where the
                alleged delay occurred.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">Surgical Treatment</h2>
              <p className="mb-6">
                Spinal cord injury surgery may involve decompression, stabilization, fusion, fracture reduction, or
                treatment of another condition producing pressure on the cord.
              </p>
              <p className="mb-6">
                A spine surgeon reviewing the case may evaluate whether surgery was indicated, when it should have
                occurred, the approach selected, technical performance, postoperative management, and whether a
                complication was recognized appropriately.
              </p>
              <p className="mb-6">
                A poor neurologic outcome does not necessarily mean the operation was performed improperly. Severe spinal
                cord injuries can result in permanent deficits despite technically appropriate treatment.
              </p>
              <p className="mb-6">
                The expert should be able to separate complications associated with the underlying injury from injuries
                that may have resulted from the procedure itself. For how qualification attaches to the specific opinion,
                see{' '}
                <Link href="/blog/qualifying-an-expert-witness" className={linkClass}>
                  qualifying an expert witness
                </Link>
                .
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                Spinal Cord Injury After Surgery
              </h2>
              <p className="mb-6">Some cases involve new neurologic deficits following spinal or other surgery.</p>
              <p className="mb-6">
                The dispute may concern direct cord injury, hematoma, vascular compromise, positioning, hardware
                placement, postoperative compression, hypotension, infection, or delayed recognition of neurologic
                deterioration.
              </p>
              <p className="mb-6">
                The timing of the deficit can be particularly important. A new finding documented immediately after surgery
                may raise different questions from weakness that develops hours or days later.
              </p>
              <p className="mb-6">
                These cases often require close review of operative reports, anesthesia records, intraoperative
                monitoring, postoperative examinations, imaging, and the sequence of events leading to further treatment.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                Rehabilitation and Functional Recovery
              </h2>
              <p className="mb-6">
                Once the acute medical and surgical issues are addressed, the focus often shifts to what the patient can
                realistically regain.
              </p>
              <p className="mb-6">
                A physical medicine and rehabilitation physician can evaluate mobility, transfers, upper extremity
                function, bowel and bladder management, spasticity, pain, skin integrity, respiratory needs, and the
                patient&apos;s ability to perform activities of daily living.
              </p>
              <p className="mb-6">
                Recovery can continue over time, particularly after incomplete injuries, but prognosis depends on the
                neurologic level, severity, age, associated injuries, medical complications, and response to
                rehabilitation.
              </p>
              <p className="mb-6">
                An expert should distinguish between possible improvement and improvement that is reasonably expected based
                on the patient&apos;s actual clinical course.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                Long-Term Medical Needs
              </h2>
              <p className="mb-6">
                Spinal cord injuries can create lifelong medical issues extending well beyond loss of movement.
              </p>
              <p className="mb-6">
                Patients may experience neurogenic bladder and bowel dysfunction, pressure injuries, recurrent infections,
                spasticity, chronic pain, osteoporosis, autonomic dysreflexia, respiratory complications, and secondary
                musculoskeletal problems.
              </p>
              <p className="mb-6">
                Some individuals require wheelchairs, transfer equipment, home modifications, attendant care, ongoing
                therapy, specialty medical follow-up, or periodic replacement of durable medical equipment.
              </p>
              <p className="mb-6">
                The physician establishes the medical foundation for these needs. A{' '}
                <Link href="/life-care-planner-expert-witness" className={linkClass}>
                  life care planner expert witness
                </Link>{' '}
                may then translate those recommendations into a structured plan for future care. How those figures are
                built is covered in{' '}
                <Link href="/life-care-plan-cost-calculation-expert" className={linkClass}>
                  life care plan cost calculation expert
                </Link>
                .
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                Causation and Preexisting Spine Disease
              </h2>
              <p className="mb-6">Spinal cord cases frequently involve preexisting abnormalities on imaging.</p>
              <p className="mb-6">
                Degenerative disc disease, spinal stenosis, prior fusion, previous trauma, or congenital narrowing may have
                been present before the incident. The presence of those findings does not automatically answer whether the
                event caused the patient&apos;s neurologic deterioration.
              </p>
              <p className="mb-6">
                The expert must determine the patient&apos;s baseline function, the mechanism of the event, the timing of
                new symptoms, objective neurologic findings, and whether the subsequent course supports an acute injury or
                aggravation.
              </p>
              <p className="mb-6">
                A meaningful causation opinion should explain how the medical evidence connects the event to the claimed
                impairment rather than relying only on the fact that symptoms appeared afterward.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                Spinal Cord Injury and Life Expectancy
              </h2>
              <p className="mb-6">
                Severe spinal cord injury cases may also involve questions about future medical risk and life expectancy.
              </p>
              <p className="mb-6">
                The analysis can depend on the neurologic level of injury, degree of impairment, respiratory status,
                recurrent infections, pressure injuries, cardiovascular complications, and the patient&apos;s overall
                health.
              </p>
              <p className="mb-6">
                Life expectancy opinions should be based on appropriate medical and statistical evidence. They are
                distinct from life care planning, which focuses on the type and cost of future care.
              </p>
              <p className="mb-6">
                In high-value cases, these issues may require separate experts with different areas of expertise.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                Records That Matter Most
              </h2>
              <p className="mb-6">
                Spinal cord injury review is often heavily dependent on the progression of the patient&apos;s neurologic
                findings.
              </p>
              <p className="mb-6">
                Emergency records, serial neurologic examinations, CT and MRI studies, operative reports, intensive care
                documentation, rehabilitation evaluations, therapy records, and prior spine records help establish what
                happened and how function changed over time.
              </p>
              <p className="mb-6">
                Imaging is especially important when the case involves compression, fracture, stenosis, hematoma, or
                questions about when structural changes became apparent.
              </p>
              <p className="mb-6">
                Rehabilitation records can be equally important later in the case because they document what the patient
                can actually do, rather than relying only on diagnostic labels.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                Matching the Expert to the Issue
              </h2>
              <p className="mb-6">
                Spinal cord injury litigation often requires a team rather than a single broadly qualified physician.
              </p>
              <p className="mb-6">
                A neurosurgeon or orthopedic spine surgeon may address surgical treatment and structural injury. A
                neurologist may evaluate neurologic diagnosis and causation. A physical medicine and rehabilitation
                physician may address long-term impairment, recovery, and functional limitations. A radiologist may be
                necessary when imaging interpretation is disputed.
              </p>
              <p className="mb-6">
                Life care planners,{' '}
                <SpecialtyLink slug="vocational-rehabilitation">vocational</SpecialtyLink> experts, and economists may
                become relevant when the case moves from medical causation into future care and economic damages. Related
                catastrophic injury issues involving brain trauma are covered on our{' '}
                <Link href="/tbi-expert-witness" className={linkClass}>
                  TBI expert witness
                </Link>{' '}
                page.
              </p>
              <p className="mb-0">
                The strongest approach is to identify the exact opinion that needs to be supported first, then retain the
                specialty that routinely addresses that issue in clinical practice. For how we source across specialties,
                see{' '}
                <Link href="/medical-expert-witness" className={linkClass}>
                  medical expert witness
                </Link>{' '}
                sourcing, or start an{' '}
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
