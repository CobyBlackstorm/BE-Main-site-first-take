import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import RelatedArticles from '@/components/RelatedArticles'
import { getBlogPostsBySpecialty, type BlogPost } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'TBI Expert Witness | Traumatic Brain Injury Experts | Blackstorm Experts',
  description:
    'Which experts a traumatic brain injury case requires, how mild TBI cases are defended, and what to evaluate before retaining.',
  alternates: {
    canonical: '/tbi-expert-witness',
  },
  openGraph: {
    url: '/tbi-expert-witness',
    title: 'TBI Expert Witness | Traumatic Brain Injury Experts | Blackstorm Experts',
    description:
      'Which experts a traumatic brain injury case requires, how mild TBI cases are defended, and what to evaluate before retaining.',
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

function getRelatedTbiPosts(): BlogPost[] {
  const seen = new Set<string>()
  const posts: BlogPost[] = []

  for (const specialty of [
    'neurology',
    'life-care-planning',
    'vocational-rehabilitation',
    'physical-medicine-rehabilitation',
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

export default function TbiExpertWitnessPage() {
  const relatedPosts = getRelatedTbiPosts()

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'TBI Expert Witness Sourcing',
    serviceType: 'Traumatic brain injury expert witness sourcing',
    description:
      'Which experts a traumatic brain injury case requires, how mild TBI cases are defended, and what to evaluate before retaining.',
    url: `${BASE}/tbi-expert-witness`,
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
              TBI Expert Witness
            </h1>

            <div className="blog-prose text-[17px] leading-[1.85] text-primary">
              <p className="mb-6">
                Traumatic brain injury cases turn on expert testimony more completely than almost any other injury type.
                There is often no fracture, no surgical scar, and no imaging finding a jury can look at. What the client
                experiences is real and largely invisible, and the entire case becomes a question of whether the right
                experts can make that visible.
              </p>
              <p className="mb-6">
                A TBI case rarely runs on one expert. It usually requires several, each covering a different link in the
                chain from injury to impairment to damages. This page covers which experts do what, where the defense
                concentrates its attack, and what to evaluate before you retain.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                The experts a TBI case typically requires
              </h2>
              <p className="mb-6">
                A <SpecialtyLink slug="neurology">neurologist</SpecialtyLink> or neurosurgeon establishes the mechanism and
                the diagnosis. They connect the described event to the injury, interpret imaging, and speak to prognosis.
                In moderate to severe cases with clear imaging findings, this expert carries much of the causation burden.
              </p>
              <p className="mb-6">
                A neuropsychologist administers and interprets the battery of cognitive testing that documents deficits in
                memory, attention, processing speed, and executive function. In mild TBI cases where imaging is
                unremarkable, this is frequently the most important expert in the case, because the testing is the
                objective evidence of impairment.
              </p>
              <p className="mb-6">
                A neuroradiologist becomes relevant when imaging is contested or when advanced techniques are involved.
                Standard CT and MRI often show nothing in mild TBI. DTI and other advanced modalities may show findings,
                and their admissibility is actively litigated, which makes the qualifications and methodology of this
                expert unusually important.
              </p>
              <p className="mb-6">
                A physiatrist or{' '}
                <SpecialtyLink slug="physical-medicine-rehabilitation">rehabilitation</SpecialtyLink> physician addresses
                the treatment course and future care needs, and often bridges to the life care planner.
              </p>
              <p className="mb-6">
                A <SpecialtyLink slug="vocational-rehabilitation">vocational</SpecialtyLink> expert quantifies the effect
                on earning capacity, which in TBI cases is frequently substantial even where the client can still work in
                some capacity.
              </p>
              <p className="mb-6">
                A{' '}
                <Link href="/life-care-planner-expert-witness" className={linkClass}>
                  life care planner expert witness
                </Link>{' '}
                projects the cost of future care over the life expectancy, particularly attendant care, cognitive
                rehabilitation, and case management, which are the dominant cost categories in serious TBI. How those
                figures are built is covered in{' '}
                <Link href="/life-care-plan-cost-calculation-expert" className={linkClass}>
                  life care plan cost calculation expert
                </Link>
                .
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                Where mild TBI cases are attacked
              </h2>
              <p className="mb-6">
                Mild traumatic brain injury generates the hardest fights, because the defense position is rarely that
                nothing happened. It is that something happened, it resolved, and what remains has another explanation.
              </p>
              <p className="mb-6">
                The most common attacks proceed along a few lines. Symptom validity is challenged directly, and the
                neuropsychological battery must include effort and validity testing or the results will be attacked as
                unverified. A neuropsychologist who omitted validity measures has handed the defense the case.
              </p>
              <p className="mb-6">
                Pre existing conditions are raised aggressively. Prior head injuries, learning differences, attention
                disorders, depression, anxiety, substance use, and sleep disorders all produce overlapping cognitive
                findings, and the medical history will be searched for every one of them.
              </p>
              <p className="mb-6">
                Post accident life events are offered as alternative explanations for the same deficits. Litigation stress
                itself is frequently offered as the cause of the presentation.
              </p>
              <p className="mb-6">
                Delay in reporting symptoms is used to break causation. Where the emergency record shows no loss of
                consciousness and no complaint of head symptoms, and the first documented cognitive complaint appears weeks
                later, that gap becomes the center of the defense.
              </p>
              <p className="mb-6">
                The response to all of this is not a better narrative. It is an expert whose methodology anticipated each
                of these challenges and addressed them in the report rather than for the first time at deposition.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                What to evaluate before retaining
              </h2>
              <p className="mb-6">
                For a neuropsychologist, the first question is board certification. The ABPP certification in clinical
                neuropsychology is the meaningful credential, and its absence will be raised. The second question is which
                validity measures they routinely include, and the answer should be specific test names rather than a
                general assurance. The third is how they handle pre existing conditions in their analysis, because a
                report that ignores a documented prior head injury is a report that will be discredited.
              </p>
              <p className="mb-6">
                For medical experts, the relevant question is whether their clinical practice actually involves treating
                brain injury patients. An expert who has not treated a TBI patient in years is vulnerable regardless of
                their credentials, and juries respond to that. For how qualification attaches to the specific opinion, see{' '}
                <Link href="/blog/qualifying-an-expert-witness" className={linkClass}>
                  qualifying an expert witness
                </Link>
                .
              </p>
              <p className="mb-6">
                For any expert in a TBI case, testimony history matters more than usual. These cases draw{' '}
                <Link href="/blog/frye-vs-daubert" className={linkClass}>
                  Daubert and Frye
                </Link>{' '}
                challenges at a higher rate than most, particularly around advanced imaging and around the interpretation
                of neuropsychological testing. An expert who has been challenged and survived is worth considerably more
                than one who has never been tested.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                Coordination between experts
              </h2>
              <p className="mb-6">
                TBI cases fail on internal inconsistency more often than on any single weak expert.
              </p>
              <p className="mb-6">
                The neuropsychologist documents specific deficits. The life care planner projects care based on those
                deficits. The vocational expert calculates earning capacity loss based on the same findings. If the three
                do not describe the same impairment picture, the defense will place them side by side and the
                inconsistency will do more damage than any cross examination.
              </p>
              <p className="mb-0">
                This is worth managing directly. Confirm that each downstream expert has the neuropsychological report and
                is working from it rather than from the medical record generally or from your description of the case. On
                the defense side, inflated future care projections are often challenged through a{' '}
                <Link href="/life-care-plan-rebuttal-expert" className={linkClass}>
                  life care plan rebuttal expert
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
