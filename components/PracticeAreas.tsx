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
      className="ticker-row"
      style={{
        overflow: 'hidden',
        width: '100%',
        WebkitMaskImage:
          'linear-gradient(to right, transparent 0px, black 80px, black calc(100% - 80px), transparent 100%)',
        maskImage:
          'linear-gradient(to right, transparent 0px, black 80px, black calc(100% - 80px), transparent 100%)',
        cursor: 'default',
      }}
    >
      <div
        className={animClass}
        style={{
          display: 'flex',
          gap: '12px',
          width: 'max-content',
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '999px',
              padding: '8px 20px',
              fontSize: '14px',
              fontWeight: 500,
              color: '#0a0a0a',
              whiteSpace: 'nowrap',
              display: 'inline-block',
            }}
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
    <section
      style={{
        background: '#e8e4de',
        padding: '80px 0',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 40px' }}>
        {/* Small label */}
        <p
          style={{
            fontSize: '11px',
            letterSpacing: '0.12em',
            color: '#4a5568',
            textAlign: 'center',
            textTransform: 'uppercase',
            fontWeight: 600,
            marginBottom: '12px',
          }}
        >
          Practice Areas
        </p>

        {/* Header */}
        <h2
          style={{
            fontSize: '36px',
            fontWeight: 800,
            color: '#0a0a0a',
            textAlign: 'center',
            marginBottom: '16px',
          }}
        >
          Trusted Across Every Area of Litigation
        </h2>

        {/* Subheader */}
        <p
          style={{
            fontSize: '18px',
            color: '#4a5568',
            textAlign: 'center',
            maxWidth: '580px',
            margin: '0 auto 48px',
            lineHeight: 1.7,
          }}
        >
          If your case needs an expert, we can find one. No matter the practice area, the jurisdiction, or how niche the specialty.
        </p>
      </div>

      {/* Tickers — full width */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <TickerRow items={row1} direction="left" />
        <TickerRow items={row2} direction="right" />
      </div>

      <style>{`
        @media (max-width: 768px) {
          section {
            padding: 60px 0 !important;
          }
        }
      `}</style>
    </section>
  )
}
