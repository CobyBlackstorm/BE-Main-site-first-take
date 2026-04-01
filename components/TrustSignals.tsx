const items = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="#1a3a5c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13" cy="8" r="4" />
        <path d="M5 22 C5 17.5 8.5 14 13 14 C17.5 14 21 17.5 21 22" />
      </svg>
    ),
    title: 'Founder-Led Service',
    description: 'Every search handled personally by Coby Weiss',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="#1a3a5c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="8" width="18" height="14" rx="2" />
        <path d="M9 8 L9 6 C9 4.9 9.9 4 11 4 L15 4 C16.1 4 17 4.9 17 6 L17 8" />
        <line x1="9" y1="13" x2="17" y2="13" />
        <line x1="9" y1="17" x2="14" y2="17" />
      </svg>
    ),
    title: 'All Practice Areas',
    description: 'From med mal to commercial litigation and everything in between',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="#1a3a5c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2 L21 6 L21 13 C21 18 17.5 22 13 24 C8.5 22 5 18 5 13 L5 6 Z" />
        <polyline points="9.5 13 12 15.5 17 10.5" />
      </svg>
    ),
    title: 'Satisfaction Guaranteed',
    description: "We source more at no charge if you aren't satisfied",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="#1a3a5c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13" cy="11" r="4" />
        <path d="M13 15 L13 19" />
        <path d="M7 20 C7 17.5 9.5 15 13 15 C16.5 15 19 17.5 19 20" strokeDasharray="2 2" />
        <path d="M10 23 L13 19 L16 23" />
      </svg>
    ),
    title: 'All 50 States',
    description: 'Serving litigation attorneys nationwide',
  },
]

export default function TrustSignals() {
  return (
    <section
      style={{
        background: '#ffffff',
        borderTop: '1px solid #e2e8f0',
        borderBottom: '1px solid #e2e8f0',
        padding: '48px 40px',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'flex-start',
          gap: '24px',
        }}
        className="trust-signals-inner"
      >
        {items.map((item, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '999px',
                background: '#e8edf5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '14px',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              {item.icon}
            </div>
            <p
              style={{
                fontSize: '15px',
                fontWeight: 700,
                color: '#0a0a0a',
                marginBottom: '6px',
              }}
            >
              {item.title}
            </p>
            <p
              style={{
                fontSize: '13px',
                color: '#4a5568',
                lineHeight: 1.5,
                maxWidth: '150px',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .trust-signals-inner {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  )
}
