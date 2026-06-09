'use client'

import Link from 'next/link'

type Pill = {
  label: string
  href?: string
}

const pillClass =
  'inline-block whitespace-nowrap rounded-full border border-card-border bg-white px-5 py-2 text-sm font-medium text-primary shadow-none transition-all duration-200 ease-in-out hover:border-accent hover:shadow-card'

const row1: Pill[] = [
  { label: 'Medical Malpractice', href: '/expert-witness/medical-malpractice' },
  { label: 'Personal Injury', href: '/expert-witness/personal-injury' },
  { label: 'Products Liability', href: '/expert-witness/products-liability-engineering' },
  { label: 'Fire and Explosion', href: '/expert-witness/fire-investigation' },
  { label: 'Forensic Economics', href: '/expert-witness/forensic-economics' },
  { label: 'Commercial Litigation' },
  { label: 'Construction Defect', href: '/expert-witness/construction-defect' },
  { label: 'Employment Law', href: '/expert-witness/employment-hr' },
  { label: 'Intellectual Property', href: '/expert-witness/intellectual-property' },
  { label: 'Wrongful Death', href: '/expert-witness/wrongful-death' },
  { label: 'Premises Liability', href: '/expert-witness/premises-liability-security' },
  { label: 'Trucking and Transportation', href: '/expert-witness/trucking-transportation' },
  { label: 'Maritime and Admiralty', href: '/expert-witness/maritime-admiralty' },
  { label: 'Environmental', href: '/expert-witness/environmental' },
  { label: 'Toxic Tort', href: '/expert-witness/toxicology' },
  { label: 'Class Action' },
  { label: 'Insurance Bad Faith' },
  { label: 'Business Litigation' },
  { label: 'Real Estate Disputes', href: '/expert-witness/real-estate' },
  { label: 'Securities Litigation' },
  { label: 'Workers Compensation', href: '/expert-witness/workers-compensation' },
  { label: 'Civil Rights' },
  { label: 'Elder Abuse', href: '/expert-witness/nursing-home-elder-abuse' },
  { label: 'Pharmaceutical Liability', href: '/expert-witness/pharmacology' },
]

const row2: Pill[] = [
  { label: 'Neurology', href: '/expert-witness/neurology' },
  { label: 'Orthopedics', href: '/expert-witness/orthopedic-surgery' },
  { label: 'Cardiology', href: '/expert-witness/cardiology' },
  { label: 'Oncology', href: '/expert-witness/oncology' },
  { label: 'Psychiatry', href: '/expert-witness/psychiatry' },
  { label: 'Nursing Standard of Care', href: '/expert-witness/medical-malpractice' },
  { label: 'Pharmacy and Medication', href: '/expert-witness/pharmacology' },
  { label: 'Accident Reconstruction', href: '/expert-witness/accident-reconstruction' },
  { label: 'Biomechanics', href: '/expert-witness/biomechanics' },
  { label: 'Fire Investigation', href: '/expert-witness/fire-investigation' },
  { label: 'Electrical Engineering', href: '/expert-witness/electrical-engineering' },
  { label: 'Structural Engineering', href: '/expert-witness/structural-engineering' },
  { label: 'Accounting and Damages', href: '/expert-witness/forensic-accounting' },
  { label: 'Vocational Rehabilitation', href: '/expert-witness/vocational-rehabilitation' },
  { label: 'Life Care Planning', href: '/expert-witness/life-care-planning' },
  { label: 'Human Factors', href: '/expert-witness/human-factors' },
  { label: 'Metallurgy' },
  { label: 'Architecture' },
  { label: 'Aviation' },
  { label: 'Cybersecurity' },
  { label: 'Forensic Psychology' },
  { label: 'Toxicology', href: '/expert-witness/toxicology' },
  { label: 'Pediatrics', href: '/expert-witness/pediatrics' },
  { label: 'Vascular Surgery', href: '/expert-witness/vascular-surgery' },
  { label: 'Radiology', href: '/expert-witness/radiology' },
  { label: 'Anesthesiology', href: '/expert-witness/anesthesiology' },
  { label: 'Physical Therapy', href: '/expert-witness/physical-therapy' },
  { label: 'Emergency Medicine', href: '/expert-witness/emergency-medicine' },
]

function PillItem({ pill }: { pill: Pill }) {
  if (pill.href) {
    return (
      <Link href={pill.href} className="inline-block no-underline">
        <span className={pillClass}>{pill.label}</span>
      </Link>
    )
  }

  return <span className={pillClass}>{pill.label}</span>
}

function TickerRow({ items, direction }: { items: Pill[]; direction: 'left' | 'right' }) {
  const doubled = [...items, ...items]
  const animClass = direction === 'left' ? 'ticker-left' : 'ticker-right'

  return (
    <div
      className="ticker-row cursor-default overflow-hidden"
      style={{
        WebkitMaskImage:
          'linear-gradient(to right, transparent 0px, black 80px, black calc(100% - 80px), transparent 100%)',
        maskImage:
          'linear-gradient(to right, transparent 0px, black 80px, black calc(100% - 80px), transparent 100%)',
      }}
    >
      <div className={`${animClass} flex w-max gap-3`}>
        {doubled.map((pill, i) => (
          <PillItem key={`${pill.label}-${i}`} pill={pill} />
        ))}
      </div>
    </div>
  )
}

export default function PracticeAreas() {
  return (
    <section className="bg-page pt-[60px] md:pt-20">
      <div className="section-container max-w-container pb-5">
        <p className="section-label mb-3 text-center">Practice Areas</p>

        <h2 className="mb-4 text-center text-[36px] font-bold leading-[1.2] tracking-[-0.02em] text-primary">
          Trusted Across Every Area of Litigation
        </h2>

        <p className="mx-auto max-w-[580px] text-center text-base font-normal leading-[1.7] text-secondary">
          If your case needs an expert, we can find one. No matter the practice area, the jurisdiction, or how niche the specialty.
        </p>
      </div>

      <div className="flex flex-col gap-4 pb-[60px] md:pb-[80px]">
        <TickerRow items={row1} direction="left" />
        <TickerRow items={row2} direction="right" />
      </div>
    </section>
  )
}
