'use client'

const row1 = [
  'Medical Malpractice',
  'Personal Injury',
  'Products Liability',
  'Fire and Explosion',
  'Forensic Economics',
  'Commercial Litigation',
  'Construction Defect',
  'Employment Law',
  'Intellectual Property',
  'Wrongful Death',
  'Premises Liability',
  'Trucking and Transportation',
  'Maritime and Admiralty',
  'Environmental',
  'Toxic Tort',
  'Class Action',
  'Insurance Bad Faith',
  'Business Litigation',
  'Real Estate Disputes',
  'Securities Litigation',
  'Workers Compensation',
  'Civil Rights',
  'Elder Abuse',
  'Pharmaceutical Liability',
]

const row2 = [
  'Neurology',
  'Orthopedics',
  'Cardiology',
  'Oncology',
  'Psychiatry',
  'Nursing Standard of Care',
  'Pharmacy and Medication',
  'Accident Reconstruction',
  'Biomechanics',
  'Fire Investigation',
  'Electrical Engineering',
  'Structural Engineering',
  'Accounting and Damages',
  'Vocational Rehabilitation',
  'Life Care Planning',
  'Human Factors',
  'Metallurgy',
  'Architecture',
  'Aviation',
  'Cybersecurity',
  'Forensic Psychology',
  'Toxicology',
  'Pediatrics',
  'Vascular Surgery',
  'Radiology',
  'Anesthesiology',
  'Physical Therapy',
  'Emergency Medicine',
]

function TickerRow({ items, direction }: { items: string[]; direction: 'left' | 'right' }) {
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
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-block whitespace-nowrap rounded-full border border-card-border bg-white px-5 py-2 text-sm font-medium text-primary shadow-none transition-all duration-200 ease-in-out hover:border-accent hover:shadow-card"
          >
            {item}
          </span>
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
