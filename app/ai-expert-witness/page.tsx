import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import RelatedArticles from '@/components/RelatedArticles'
import FinalCTA from '@/components/FinalCTA'
import { getBlogPostsBySpecialty, type BlogPost } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'AI Expert Witness | Blackstorm Experts',
  description:
    'AI expert witnesses for machine learning, generative AI, large language models, algorithmic decision-making, training data, intellectual property, and automated systems.',
  alternates: {
    canonical: '/ai-expert-witness',
  },
  openGraph: {
    url: '/ai-expert-witness',
    title: 'AI Expert Witness | Blackstorm Experts',
    description:
      'AI expert witnesses for machine learning, generative AI, large language models, algorithmic decision-making, training data, intellectual property, and automated systems.',
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

function getRelatedAiPosts(): BlogPost[] {
  const seen = new Set<string>()
  const posts: BlogPost[] = []

  for (const specialty of [
    'intellectual-property',
    'employment-hr',
    'medical-device',
    'products-liability-engineering',
    'medical-malpractice',
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

export default function AiExpertWitnessPage() {
  const relatedPosts = getRelatedAiPosts()

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI Expert Witness Sourcing',
    serviceType: 'Artificial intelligence expert witness sourcing',
    description:
      'AI expert witnesses for machine learning, generative AI, large language models, algorithmic decision-making, training data, intellectual property, and automated systems.',
    url: `${BASE}/ai-expert-witness`,
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
              AI Expert Witness
            </h1>

            <div className="blog-prose text-[17px] leading-[1.85] text-primary">
              <p className="mb-6">
                An AI expert witness provides specialized knowledge regarding artificial intelligence, machine learning,
                automated decision systems, generative AI, large language models, algorithms, training data, model
                performance, and the technical systems used to develop and deploy AI applications.
              </p>
              <p className="mb-6">
                Artificial intelligence disputes can arise in{' '}
                <SpecialtyLink slug="intellectual-property">intellectual property</SpecialtyLink> litigation, product
                liability cases, employment matters, commercial disputes, privacy litigation, software cases, professional
                negligence claims, and matters involving allegedly inaccurate or discriminatory automated decisions.
              </p>
              <p className="mb-6">
                Blackstorm Experts helps attorneys identify AI expert witnesses whose technical backgrounds align with
                the specific technology and issues involved in the case.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                What Is an AI Expert Witness?
              </h2>
              <p className="mb-6">
                An AI expert witness is typically a computer scientist, machine learning engineer, artificial intelligence
                researcher, software engineer, data scientist, or other technical professional with substantial experience
                designing, developing, evaluating, or deploying AI systems.
              </p>
              <p className="mb-6">
                Artificial intelligence is an unusually broad field. An expert who specializes in computer vision may not
                be the right person to analyze a large language model. Likewise, an expert experienced in traditional
                statistical machine learning may not necessarily have the background needed to address the architecture or
                behavior of modern generative AI systems.
              </p>
              <p className="mb-6">
                The appropriate expert depends on the technology involved and the opinion the attorney needs.
              </p>
              <p className="mb-6">
                An AI expert may explain how a system works, evaluate its development methodology, analyze its outputs,
                assess model performance, review source code or technical documentation, or determine whether claims about
                a system are supported by the available evidence.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                Machine Learning Expert Witnesses
              </h2>
              <p className="mb-6">
                Machine learning systems identify patterns from data and use those patterns to make predictions,
                classifications, recommendations, or other outputs.
              </p>
              <p className="mb-6">
                A machine learning expert witness may evaluate the data used to train a model, the methods selected by
                its developers, the model&apos;s performance, validation procedures, and the way the system was
                implemented in practice.
              </p>
              <p className="mb-6">
                The expert may also consider whether the model was being used for a purpose consistent with the conditions
                under which it was developed and tested.
              </p>
              <p className="mb-6">
                Issues can arise when a system performs well on development data but performs differently when exposed to
                new data or real-world conditions. Model evaluation therefore requires more than simply reviewing an
                overall accuracy number.
              </p>
              <p className="mb-6">
                Depending on the system, factors such as precision, recall, false-positive rates, false-negative rates,
                calibration, class imbalance, and performance across different populations may be relevant.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                Generative AI Expert Witnesses
              </h2>
              <p className="mb-6">
                Generative artificial intelligence systems create new content such as text, images, audio, video, or
                computer code.
              </p>
              <p className="mb-6">
                Litigation involving generative AI may require an expert who understands how these systems are trained,
                how prompts influence outputs, what technical limitations exist, and why the same or similar instructions
                may produce different results.
              </p>
              <p className="mb-6">A generative AI expert may be retained to analyze questions involving:</p>
              <ul className="mb-6 list-disc space-y-2 pl-6">
                <li>Large language models</li>
                <li>AI-generated text</li>
                <li>Image generation</li>
                <li>AI-generated code</li>
                <li>Model outputs</li>
                <li>Prompting</li>
                <li>Retrieval-augmented generation</li>
                <li>Fine-tuning</li>
                <li>Model evaluation</li>
                <li>AI system architecture</li>
                <li>Training and inference</li>
                <li>Automated content generation</li>
              </ul>
              <p className="mb-6">
                The expert&apos;s role will depend on the dispute. Some cases may focus on how an output was produced,
                while others may concern the development or commercial use of the underlying system.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                Large Language Model Expert Witnesses
              </h2>
              <p className="mb-6">
                Large language models, often called LLMs, are AI systems trained to process and generate language.
              </p>
              <p className="mb-6">
                An LLM expert witness may explain model architecture, tokenization, training, prompting, context windows,
                inference, fine-tuning, retrieval systems, and the probabilistic nature of generated responses.
              </p>
              <p className="mb-6">
                One important issue in litigation may be whether an AI system can reliably reproduce a particular output.
              </p>
              <p className="mb-6">
                Generative models do not necessarily function like conventional databases that simply retrieve a fixed
                stored answer. Their responses can depend on the model version, system instructions, prompt wording,
                conversation context, sampling settings, external tools, retrieved documents, and other factors.
              </p>
              <p className="mb-6">
                An expert may therefore need to reconstruct the technical environment in which an output was generated
                before drawing conclusions about what occurred.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                AI Hallucinations and Incorrect Outputs
              </h2>
              <p className="mb-6">
                Generative AI systems can produce statements that sound plausible while being inaccurate or unsupported.
                These outputs are commonly referred to as hallucinations.
              </p>
              <p className="mb-6">
                An AI expert can help determine what an alleged hallucination demonstrates about the system and what
                conclusions cannot reasonably be drawn from it.
              </p>
              <p className="mb-6">
                For example, an inaccurate output does not necessarily establish that the underlying software
                malfunctioned. The expert may need to examine the system&apos;s intended purpose, prompt, model behavior,
                available context, system instructions, and any safeguards surrounding its use.
              </p>
              <p className="mb-6">
                In other cases, repeated inaccurate outputs may become relevant to allegations concerning system testing,
                warnings, reliability, or deployment practices.
              </p>
              <p className="mb-6">The significance depends on the specific system and how it was being used.</p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                Algorithmic Decision-Making
              </h2>
              <p className="mb-6">
                Artificial intelligence and machine learning are increasingly used to support decisions in areas such as
                hiring, insurance, lending, fraud detection, healthcare, advertising, pricing, and risk assessment.
              </p>
              <p className="mb-6">
                Legal disputes may arise when a party challenges an automated decision or alleges that a model produced
                inaccurate, unfair, or unreliable results.
              </p>
              <p className="mb-6">
                An AI expert may examine the inputs supplied to the system, the model&apos;s methodology, its training
                and evaluation data, relevant outputs, and how humans used those outputs in the final decision.
              </p>
              <p className="mb-6">This distinction can be critical.</p>
              <p className="mb-6">
                An algorithm may generate a recommendation while a human decision-maker retains final authority. In other
                systems, automation may play a much larger role. The expert should determine how the specific process
                operated rather than assuming that the presence of AI means the entire decision was automated.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                AI Bias and Fairness
              </h2>
              <p className="mb-6">
                Some AI litigation involves allegations that an automated system treated groups differently or generated
                outcomes that were unfair or discriminatory.
              </p>
              <p className="mb-6">Evaluating such an allegation requires careful technical analysis.</p>
              <p className="mb-6">
                Differences in outcomes can potentially arise from training data, feature selection, labels, sampling
                methods, model design, deployment conditions, or characteristics of the population on which the system is
                used.
              </p>
              <p className="mb-6">
                An expert may analyze performance across relevant groups and determine whether observed differences are
                statistically and technically meaningful.
              </p>
              <p className="mb-6">
                However, technical analysis of model performance is different from determining whether conduct violates
                anti-discrimination law. The expert can provide evidence concerning how the system behaved, while the
                court determines the applicable legal standard.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">Training Data</h2>
              <p className="mb-6">
                Training data is fundamental to many AI systems because models learn statistical relationships from
                examples supplied during development.
              </p>
              <p className="mb-6">
                Litigation may involve questions about where training data came from, how it was collected, how it was
                processed, whether particular data was included, and how the data affected model behavior.
              </p>
              <p className="mb-6">
                An AI expert may evaluate dataset documentation, data pipelines, preprocessing procedures, training
                records, source code, technical papers, and other available materials.
              </p>
              <p className="mb-6">
                In some disputes, it may be impossible to determine whether a particular piece of information appeared in
                a massive training dataset without adequate records or direct access to the underlying data.
              </p>
              <p className="mb-6">
                A qualified expert should distinguish between what can be demonstrated technically and what can only be
                inferred.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                AI and Intellectual Property Litigation
              </h2>
              <p className="mb-6">
                Artificial intelligence has become increasingly relevant to intellectual property disputes.
              </p>
              <p className="mb-6">
                Cases may involve patents covering machine learning techniques, trade secrets related to AI development,
                copyrighted works allegedly used in an AI process, source code disputes, or allegations that a competing
                company misappropriated proprietary models or data.
              </p>
              <p className="mb-6">
                An AI expert witness may analyze the technical systems involved and explain similarities and differences
                between competing technologies.
              </p>
              <p className="mb-6">
                In a patent case, an expert may assist with infringement or validity issues involving AI-related claims.
              </p>
              <p className="mb-6">
                In a trade secret case, the expert may evaluate whether information allegedly taken from one company
                appears in another company&apos;s system and whether the information has technical significance.
              </p>
              <p className="mb-6">
                Copyright questions may require analysis of training, inputs, outputs, model behavior, or software
                architecture depending on the allegations.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                AI Patent Expert Witnesses
              </h2>
              <p className="mb-6">
                AI patents can involve neural networks, machine learning algorithms, computer vision, natural language
                processing, recommendation systems, optimization techniques, data processing, and other computational
                technologies.
              </p>
              <p className="mb-6">
                An AI patent expert may review patent claims, specifications, technical references, source code, model
                documentation, and accused systems.
              </p>
              <p className="mb-6">
                The expert may be asked to determine whether a system contains particular claimed elements or whether
                earlier technical work disclosed similar methods.
              </p>
              <p className="mb-6">
                Because patent analysis can be highly specialized, the expert&apos;s technical background should closely
                match the subject matter of the patent. For how qualification attaches to the specific opinion, see{' '}
                <Link href="/blog/qualifying-an-expert-witness" className={linkClass}>
                  qualifying an expert witness
                </Link>
                .
              </p>
              <p className="mb-6">
                A general software expert may not have sufficient experience with the specific machine learning
                architecture involved.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                AI Trade Secret Cases
              </h2>
              <p className="mb-6">
                Artificial intelligence companies may treat source code, model architecture, training methods, datasets,
                evaluation procedures, prompts, deployment techniques, and other technical information as confidential.
              </p>
              <p className="mb-6">
                Trade secret litigation can require an expert to determine whether allegedly misappropriated information
                was technically significant and whether another system reflects use of that information.
              </p>
              <p className="mb-6">
                The analysis may include source code comparisons, model documentation, development timelines,
                repositories, communications, system architecture, and technical records.
              </p>
              <p className="mb-6">
                Similar outcomes between two AI systems do not necessarily prove that one copied the other. Many systems
                can produce comparable results while using different implementations.
              </p>
              <p className="mb-6">
                A technical expert can help distinguish meaningful evidence of copying from similarities that may arise
                because developers are solving the same engineering problem.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">Source Code Analysis</h2>
              <p className="mb-6">
                Some AI disputes require review of the software used to train, evaluate, or deploy a model.
              </p>
              <p className="mb-6">
                An AI expert may examine source code to determine how data enters the system, which models are used, how
                outputs are generated, whether safeguards are implemented, or whether particular functionality exists.
              </p>
              <p className="mb-6">
                Source code review may also reveal dependencies on external libraries, APIs, pretrained models, or other
                software components.
              </p>
              <p className="mb-6">
                The expert should distinguish between code that is actually executed in the relevant workflow and code
                that simply exists somewhere within a larger repository.
              </p>
              <p className="mb-6">
                Understanding the system architecture is therefore often necessary before interpreting isolated portions
                of code.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                Model Testing and Validation
              </h2>
              <p className="mb-6">Testing is essential when evaluating the performance of machine learning systems.</p>
              <p className="mb-6">
                A model may perform well on the same information used during development but perform poorly on unseen
                data. Developers therefore commonly separate data or use other evaluation methods to estimate how a model
                will perform outside its training environment.
              </p>
              <p className="mb-6">
                An AI expert witness may evaluate whether the testing methodology was appropriate for the system and
                whether performance claims are supported by the underlying evidence.
              </p>
              <p className="mb-6">
                Relevant questions can include how test data was selected, whether the test population represented the
                intended use case, which metrics were reported, and whether limitations were disclosed.
              </p>
              <p className="mb-6">
                The expert may also attempt to reproduce testing where sufficient access to the model and data exists.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                Accuracy and Reliability of AI Systems
              </h2>
              <p className="mb-6">
                The word &quot;accuracy&quot; can be misleading when discussing artificial intelligence.
              </p>
              <p className="mb-6">Different applications require different performance measures.</p>
              <p className="mb-6">
                For example, a system identifying rare events may appear highly accurate simply by predicting that the
                rare event will almost never occur. In that situation, other measures can provide a more meaningful
                picture of performance.
              </p>
              <p className="mb-6">A qualified AI expert can explain which metrics matter for the specific system.</p>
              <p className="mb-6">
                The expert may also analyze whether reported performance during development reflects how the system
                actually operates in production.
              </p>
              <p className="mb-6">
                Changes in data, users, environments, model versions, or deployment procedures can affect performance
                after a system is released.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                Computer Vision Expert Witnesses
              </h2>
              <p className="mb-6">
                Computer vision is an area of artificial intelligence focused on extracting information from images and
                video.
              </p>
              <p className="mb-6">
                Computer vision systems may be used for facial recognition, object detection, medical imaging, autonomous
                vehicles, surveillance, manufacturing inspection, and numerous other applications.
              </p>
              <p className="mb-6">
                A computer vision expert witness may analyze image-processing algorithms, model performance, training
                data, detection systems, classification methods, or the limitations of automated visual analysis.
              </p>
              <p className="mb-6">
                Image quality, lighting, camera position, resolution, compression, and the characteristics of the training
                data can all influence system performance.
              </p>
              <p className="mb-6">
                Cases involving computer vision should therefore be matched with an expert who has direct experience in
                that area rather than relying solely on general AI knowledge.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                Natural Language Processing Expert Witnesses
              </h2>
              <p className="mb-6">
                Natural language processing involves computational methods used to analyze or generate human language.
              </p>
              <p className="mb-6">
                NLP systems can perform tasks such as classification, search, translation, sentiment analysis,
                summarization, information extraction, and text generation.
              </p>
              <p className="mb-6">
                An NLP expert may evaluate the methodology behind a system, its training data, model architecture,
                evaluation metrics, or specific outputs.
              </p>
              <p className="mb-6">
                Modern NLP increasingly overlaps with large language models, but not every NLP system uses generative AI.
              </p>
              <p className="mb-6">
                Understanding which technology actually powers the system is necessary before selecting the appropriate
                expert.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                Recommendation and Ranking Algorithms
              </h2>
              <p className="mb-6">
                AI and machine learning are frequently used to determine what content, products, advertisements, or
                information users see.
              </p>
              <p className="mb-6">
                Recommendation and ranking systems may consider numerous signals to estimate which items are most relevant
                to a user.
              </p>
              <p className="mb-6">
                Litigation involving these systems may require analysis of the ranking methodology, model inputs, user
                data, testing procedures, and the degree to which particular factors influenced an output.
              </p>
              <p className="mb-6">
                An expert may explain that an individual recommendation can result from the interaction of many variables
                rather than a single rule.
              </p>
              <p className="mb-6">
                Where appropriate, the expert may conduct experiments or analyze system logs to evaluate how changes in
                inputs affect rankings.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                AI Product Liability Cases
              </h2>
              <p className="mb-6">
                Artificial intelligence may be incorporated into products that make recommendations, assist users,
                control functionality, detect conditions, or automate tasks.
              </p>
              <p className="mb-6">
                When an AI-enabled product allegedly contributes to an injury or loss, attorneys may need experts from
                several disciplines.
              </p>
              <p className="mb-6">
                An AI expert can analyze the software and model, while an engineer or medical expert may address the
                physical product, professional standard of care, or injury mechanism. Related product issues are covered
                in{' '}
                <SpecialtyLink slug="products-liability-engineering">products liability engineering</SpecialtyLink>.
              </p>
              <p className="mb-6">
                For example, if a medical device incorporates an algorithm, the technical question of how the software
                operated is different from the medical question of whether a clinician acted appropriately in response to
                the output. For when that split is necessary, see{' '}
                <Link href="/blog/when-your-case-needs-two-expert-witnesses" className={linkClass}>
                  when your case needs two expert witnesses
                </Link>
                .
              </p>
              <p className="mb-6">
                Separating these issues can help ensure that each expert remains within the proper discipline.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                AI in Employment Litigation
              </h2>
              <p className="mb-6">
                Employers and vendors may use automated tools to assist with recruiting, screening, assessment,
                scheduling, performance analysis, or other employment functions.
              </p>
              <p className="mb-6">
                A dispute may involve allegations that an automated system unfairly affected applicants or employees.
              </p>
              <p className="mb-6">
                An AI expert can examine how the system generated scores or recommendations, which data it considered,
                how performance was evaluated, and what role humans played in the decision process. Related workplace
                issues are covered in <SpecialtyLink slug="employment-hr">employment</SpecialtyLink> expert work.
              </p>
              <p className="mb-6">
                Statistical or labor economics expertise may also be necessary when a case requires broader analysis of
                employment outcomes across a population.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                AI in Healthcare Litigation
              </h2>
              <p className="mb-6">
                Artificial intelligence is used in healthcare for applications including imaging analysis, clinical
                decision support, risk prediction, workflow automation, and administrative functions.
              </p>
              <p className="mb-6">
                Litigation involving medical AI may require both technical and clinical expertise.
              </p>
              <p className="mb-6">
                An AI expert can analyze the algorithm, model outputs, performance metrics, technical limitations, and
                system implementation. A{' '}
                <SpecialtyLink slug="medical-device">medical device</SpecialtyLink> expert may be needed when the
                algorithm is incorporated into a regulated device.
              </p>
              <p className="mb-6">
                A physician or other healthcare expert may separately address whether the medical care provided met the
                applicable standard of care. For how we source across medical specialties, see{' '}
                <Link href="/medical-expert-witness" className={linkClass}>
                  medical expert witness
                </Link>{' '}
                sourcing.
              </p>
              <p className="mb-6">
                The fact that an AI system was involved does not eliminate the need to examine how clinicians interpreted
                and used its output.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                AI and Data Privacy Disputes
              </h2>
              <p className="mb-6">
                Artificial intelligence systems may process large quantities of personal, behavioral, or commercial data.
              </p>
              <p className="mb-6">
                Privacy disputes can involve questions about what information was collected, how it was processed, where
                it was transmitted, how long it was retained, or whether it was used by an AI model.
              </p>
              <p className="mb-6">
                A technical expert may analyze system architecture, logs, data flows, databases, APIs, model pipelines,
                and software documentation.
              </p>
              <p className="mb-6">
                Cybersecurity or privacy specialists may also be required when the central issue involves data security,
                unauthorized access, or compliance practices rather than the AI model itself.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                AI System Logs and Technical Evidence
              </h2>
              <p className="mb-6">AI systems can generate a substantial amount of technical evidence.</p>
              <p className="mb-6">
                Depending on the application, relevant records may include prompts, outputs, system instructions,
                timestamps, model versions, user activity, API records, retrieval logs, configuration settings, source
                code, database records, training documentation, and evaluation results.
              </p>
              <p className="mb-6">These details can matter because AI systems evolve rapidly.</p>
              <p className="mb-6">
                An output generated by one model version may not be reproducible after the provider modifies the model or
                surrounding application.
              </p>
              <p className="mb-6">
                Preserving technical evidence early can therefore be important in cases involving changing AI systems.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                Reproducing AI Outputs
              </h2>
              <p className="mb-6">Attorneys may sometimes ask an expert to reproduce an AI-generated result.</p>
              <p className="mb-6">Reproduction may be possible in some circumstances but difficult in others.</p>
              <p className="mb-6">
                The expert may need the same model version, prompt, system instructions, temperature or sampling
                configuration, context, retrieved materials, external tools, and other settings used during the original
                interaction.
              </p>
              <p className="mb-6">
                If those conditions cannot be reconstructed, a different result does not necessarily prove that the
                original evidence is inaccurate.
              </p>
              <p className="mb-6">
                An AI expert can explain which variables may affect reproducibility and whether a proposed test reasonably
                replicates the original system.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                AI Expert Witness Versus Software Engineering Expert
              </h2>
              <p className="mb-6">
                Artificial intelligence and software engineering overlap, but the disciplines are not identical.
              </p>
              <p className="mb-6">
                A software engineering expert may be best suited for disputes involving conventional application
                architecture, source code quality, software development practices, APIs, databases, or system failures.
              </p>
              <p className="mb-6">
                An AI expert may be more appropriate when the dispute centers on model training, machine learning
                methodology, neural networks, generative outputs, model performance, or statistical evaluation.
              </p>
              <p className="mb-6">Some experts have substantial experience in both areas.</p>
              <p className="mb-6">
                The correct choice depends on what part of the system is actually being challenged.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                AI Expert Witness Versus Data Science Expert
              </h2>
              <p className="mb-6">
                Data scientists often work with statistics, predictive modeling, data analysis, and machine learning.
              </p>
              <p className="mb-6">
                An experienced data scientist may be an excellent AI expert for disputes involving predictive models,
                datasets, statistical validation, or algorithmic decision-making.
              </p>
              <p className="mb-6">
                A highly specialized generative AI case, however, may require an expert with more direct experience
                developing or researching modern neural-network architectures or large language models.
              </p>
              <p className="mb-6">
                The title printed on an expert&apos;s resume matters less than whether the individual&apos;s actual work
                matches the technical problem in the case.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                Documents an AI Expert Witness May Review
              </h2>
              <p className="mb-6">The materials required for an AI analysis vary widely depending on the system.</p>
              <p className="mb-6">An expert may review:</p>
              <ul className="mb-6 list-disc space-y-2 pl-6">
                <li>Source code</li>
                <li>Model documentation</li>
                <li>Training documentation</li>
                <li>Dataset descriptions</li>
                <li>Technical specifications</li>
                <li>System architecture diagrams</li>
                <li>Model evaluation results</li>
                <li>Prompts and outputs</li>
                <li>System instructions</li>
                <li>API records</li>
                <li>Application logs</li>
                <li>Model version information</li>
                <li>Database records</li>
                <li>Software repositories</li>
                <li>Internal development communications</li>
                <li>Research papers</li>
                <li>Patent materials</li>
                <li>Product documentation</li>
                <li>User instructions</li>
                <li>Deposition testimony</li>
                <li>Technical discovery responses</li>
              </ul>
              <p className="mb-6">
                Access to the underlying system may also be important when testing or reproduction is required.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                Choosing the Right AI Expert Witness
              </h2>
              <p className="mb-6">Artificial intelligence is too broad for a one-size-fits-all expert.</p>
              <p className="mb-6">
                Before beginning a search, attorneys should identify the specific technology and opinion required.
              </p>
              <p className="mb-6">
                A dispute involving generative text may call for an LLM or natural language processing specialist. An
                autonomous vision system may require a computer vision expert. A hiring algorithm may benefit from a
                machine learning professional with experience evaluating classification systems and fairness. An AI patent
                may require an expert whose research or engineering background closely matches the patented technology.
              </p>
              <p className="mb-6">Relevant expert backgrounds can include:</p>
              <ul className="mb-6 list-disc space-y-2 pl-6">
                <li>Artificial intelligence research</li>
                <li>Machine learning engineering</li>
                <li>Computer science</li>
                <li>Data science</li>
                <li>Natural language processing</li>
                <li>Large language models</li>
                <li>Computer vision</li>
                <li>Software engineering</li>
                <li>Neural networks and deep learning</li>
                <li>Statistical machine learning</li>
                <li>AI product development</li>
              </ul>
              <p className="mb-6">
                The strongest expert is usually the person whose technical experience most closely matches the system
                being litigated.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                Plaintiff and Defense AI Expert Witnesses
              </h2>
              <p className="mb-6">AI experts may assist either plaintiff or defense counsel.</p>
              <p className="mb-6">
                Plaintiff attorneys may need an expert to determine whether an automated system functioned as
                represented, produced unreliable results, improperly used data, or contributed to a disputed decision.
              </p>
              <p className="mb-6">
                Defense attorneys may need an expert to evaluate whether an alleged AI defect actually exists, whether
                opposing testing accurately reflects the system, or whether conclusions about model behavior are
                technically supported.
              </p>
              <p className="mb-6">
                An expert may also identify circumstances where the available evidence does not support a definitive
                technical conclusion.
              </p>
              <p className="mb-6">
                AI systems can be complex, and recognizing the limits of the available data is an important part of
                reliable expert analysis.
              </p>

              <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary">
                Find an AI Expert Witness
              </h2>
              <p className="mb-6">
                Artificial intelligence litigation can involve machine learning, generative AI, large language models,
                algorithms, software, data science, intellectual property, automated decision-making, and highly
                specialized technical systems.
              </p>
              <p className="mb-6">
                Blackstorm Experts helps attorneys identify AI expert witnesses whose experience aligns with the
                technology and disputed issues in the case.
              </p>
              <p className="mb-0">
                Send us a description of the AI system, the allegations being made, the technical questions you need
                answered, and any upcoming deadlines. We can identify expert candidates whose artificial intelligence and
                machine learning experience fits the matter. Start an{' '}
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
