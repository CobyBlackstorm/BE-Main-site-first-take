import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BecomeExpertForm from './BecomeExpertForm'

export const metadata: Metadata = {
  title: 'Become an Expert Witness | Blackstorm Experts',
  description:
    "Join Blackstorm Experts' network. We connect qualified expert witnesses with litigation attorneys nationwide. No marketing required — we bring the cases to you.",
}

const steps = [
  {
    number: '1',
    title: 'Submit Your Profile',
    description:
      "Tell us your area of expertise, credentials, and availability. We'll review your background and add you to our network.",
  },
  {
    number: '2',
    title: 'We Match You with Cases',
    description:
      'When an attorney needs your specific expertise, we reach out to confirm your interest, availability, and absence of conflicts.',
  },
  {
    number: '3',
    title: 'You Get Retained Directly',
    description:
      'The attorney retains you directly. We never mark up your rates. You set your own fees and manage the engagement on your terms.',
  },
]

const benefits = [
  'Direct introductions to attorneys who need your expertise',
  'No marketing or business development required',
  'You set your own rates — we never mark them up',
  'Simple process — we handle the matchmaking',
]

export default function BecomeExpertPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-page py-[60px]">
          <div className="section-container max-w-container text-center">
            <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.1em] text-accent">Join Our Network</p>
            <h1 className="mx-auto max-w-[700px] text-[40px] font-extrabold tracking-[-0.02em] text-[#1a1a1a]">
              Become an Expert Witness with Blackstorm
            </h1>
            <p className="mx-auto mt-4 max-w-[600px] text-[17px] leading-[1.7] text-[#4a5568]">
              We connect qualified professionals with litigation attorneys who need expert testimony. No marketing, no chasing leads
              — we bring the cases to you.
            </p>
            <a
              href="#expert-form"
              className="mt-7 inline-flex items-center justify-center rounded-md bg-accent px-12 py-4 text-base font-semibold text-white transition-all duration-200 ease-in-out hover:bg-accent-hover"
            >
              Submit Your Profile
            </a>
            <p className="mt-3 text-[13px] text-[#4a5568]">We&apos;ll follow up within 48 hours.</p>
          </div>
        </section>

        <section className="bg-[#eceae4] py-[60px]">
          <div className="section-container max-w-container">
            <p className="mb-3 text-center text-[12px] font-semibold uppercase tracking-[0.1em] text-accent">How It Works</p>
            <h2 className="mb-10 text-center text-[28px] font-bold text-[#1a1a1a]">Simple Process for Expert Witnesses</h2>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="rounded-lg border border-card-border bg-white p-[28px] shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
                >
                  <div className="flex items-baseline gap-3">
                    <p className="flex-shrink-0 text-[36px] font-extrabold leading-none text-accent">{step.number}</p>
                    <p className="text-[16px] font-bold text-[#1a1a1a]">{step.title}</p>
                  </div>
                  <p className="mt-2 text-[14px] leading-[1.7] text-[#4a5568]">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-page py-[60px]">
          <div className="section-container max-w-[700px]">
            <p className="mb-3 text-center text-[12px] font-semibold uppercase tracking-[0.1em] text-accent">Why Join Blackstorm</p>
            <h2 className="mb-8 text-center text-[28px] font-bold text-[#1a1a1a]">What You Get</h2>
            <div className="mx-auto max-w-[480px] space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex w-full items-start gap-3 text-left">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden className="mt-1 flex-shrink-0">
                    <circle cx="8" cy="8" r="8" fill="#16a34a" />
                    <path d="M4.2 8.4 L6.8 10.6 L11.8 5.6" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="text-[16px] font-semibold text-[#1a1a1a]">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="expert-form" className="bg-[#eceae4] py-[60px]">
          <div className="section-container max-w-[520px]">
            <h2 className="mb-2 text-center text-[24px] font-bold text-[#1a1a1a]">Submit Your Information</h2>
            <p className="mb-6 text-center text-[14px] text-[#4a5568]">
              We&apos;ll review your background and follow up via email to collect your CV and additional details.
            </p>
            <BecomeExpertForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
