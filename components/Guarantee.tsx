const badges = [
  'No Upfront Payment',
  'Satisfaction Guaranteed',
  '48-72 Hr Turnaround',
]

export default function Guarantee() {
  return (
    <section
      style={{
        background: '#0a0a0a',
        padding: '80px 40px',
      }}
    >
      <div
        style={{
          maxWidth: '640px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        {/* Shield icon */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M24 4 L40 10 L40 24 C40 33 32 40 24 44 C16 40 8 33 8 24 L8 10 Z" />
            <polyline points="17 24 22 29 31 20" />
          </svg>
        </div>

        {/* Header */}
        <h2
          style={{
            color: '#ffffff',
            fontSize: '36px',
            fontWeight: 800,
            marginBottom: '20px',
          }}
        >
          The Blackstorm Guarantee
        </h2>

        {/* Body */}
        <p
          style={{
            color: '#cccccc',
            fontSize: '18px',
            lineHeight: 1.9,
          }}
        >
          You don&rsquo;t pay unless we deliver an expert introduction you&rsquo;re satisfied with. If the candidates we provide aren&rsquo;t the right fit, we go back out and source more at no additional charge. No retainer. No hidden fees. One flat rate, only when we deliver.
        </p>

        {/* Badges */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            marginTop: '32px',
          }}
        >
          {badges.map((badge) => (
            <div
              key={badge}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.25)',
                borderRadius: '999px',
                padding: '8px 16px',
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="2.5 7 5.5 10 11.5 4" />
              </svg>
              <span
                style={{
                  color: '#ffffff',
                  fontSize: '12px',
                  fontWeight: 600,
                }}
              >
                {badge}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section {
            padding: 60px 20px !important;
          }
        }
      `}</style>
    </section>
  )
}
