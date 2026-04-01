const tiles = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Calendar with checkmark */}
        <rect x="5" y="6" width="22" height="22" rx="3" />
        <line x1="5" y1="12" x2="27" y2="12" />
        <line x1="11" y1="3" x2="11" y2="9" />
        <line x1="21" y1="3" x2="21" y2="9" />
        <line x1="9" y1="17" x2="14" y2="17" />
        <line x1="9" y1="21" x2="14" y2="21" />
        <polyline points="18 20 20 22 24 17" />
      </svg>
    ),
    title: 'Verified Availability',
    body: "Every candidate we present has explicitly confirmed they are available for your timeline and scope before we ever make the introduction. No more chasing people who don't call back.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Document with magnifying glass overlay */}
        <rect x="5" y="4" width="16" height="22" rx="2" />
        <line x1="9" y1="10" x2="17" y2="10" />
        <line x1="9" y1="14" x2="17" y2="14" />
        <line x1="9" y1="18" x2="13" y2="18" />
        <circle cx="22" cy="20" r="5" />
        <line x1="26" y1="24" x2="29" y2="27" />
      </svg>
    ),
    title: 'Preliminary Due Diligence',
    body: 'We pre-screen for conflicts and credentials, removing the administrative burden from your team entirely. You receive candidates who are already cleared and ready to engage.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Funnel with filtering layers */}
        <path d="M5 7 L27 7 L19 16 L19 26 L13 23 L13 16 Z" />
        <line x1="8" y1="11" x2="24" y2="11" />
        <line x1="12" y1="15" x2="20" y2="15" />
      </svg>
    ),
    title: 'Quality Over Quantity',
    body: 'We do not dump a database export on your desk. We provide a surgical list of the best options available for your specific case and jurisdiction.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Two person silhouettes with direct arrow */}
        <circle cx="7" cy="10" r="3" />
        <path d="M2 22 C2 18 4.5 16 7 16 C9.5 16 12 18 12 22" />
        <circle cx="25" cy="10" r="3" />
        <path d="M20 22 C20 18 22.5 16 25 16 C27.5 16 30 18 30 22" />
        <line x1="13" y1="13" x2="19" y2="13" />
        <polyline points="17 11 19 13 17 15" />
      </svg>
    ),
    title: 'Direct Retention',
    body: 'You retain the expert directly. We never mark up their hourly rates. Our fee covers the search and the introduction. Everything after that is between you and the expert.',
  },
]

export default function ModernApproach() {
  return (
    <section
      id="why-blackstorm"
      style={{
        background: '#f0ede8',
        padding: '80px 40px',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
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
          Why Blackstorm
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
          A Modern Approach to Expert Witness Search
        </h2>

        {/* Subheader */}
        <p
          style={{
            fontSize: '18px',
            color: '#4a5568',
            textAlign: 'center',
            maxWidth: '600px',
            margin: '0 auto 56px',
            lineHeight: 1.7,
          }}
        >
          We don&rsquo;t just find names. We confirm interest, verify credentials, and check availability before a candidate ever reaches your desk.
        </p>

        {/* 2x2 grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '40px',
          }}
          className="approach-grid"
        >
          {tiles.map((tile, i) => (
            <div
              key={i}
              className="approach-tile"
              style={{
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '32px',
                transition: 'border-color 0.2s ease',
              }}
            >
              {/* Icon container */}
              <div
                style={{
                  background: '#f7f8fa',
                  width: '56px',
                  height: '56px',
                  borderRadius: '12px',
                  padding: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                }}
              >
                {tile.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  color: '#0a0a0a',
                  marginBottom: '8px',
                }}
              >
                {tile.title}
              </h3>

              {/* Body */}
              <p
                style={{
                  fontSize: '16px',
                  color: '#4a5568',
                  lineHeight: 1.6,
                }}
              >
                {tile.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .approach-tile:hover {
          border-color: #0a0a0a !important;
        }
        @media (max-width: 768px) {
          section {
            padding: 60px 20px !important;
          }
          .approach-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  )
}
