const stats = [
  { label: '48-72 Hr', descriptor: 'Turnaround' },
  { label: '100%', descriptor: 'Satisfaction Guarantee' },
  { label: 'Flat Rate', descriptor: 'Per Search' },
  { label: 'Nationwide', descriptor: 'Attorney Coverage' },
]

export default function TrustBar() {
  return (
    <div
      style={{
        background: '#0a0a0a',
        width: '100%',
        padding: '36px 40px',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
        className="trust-bar-inner"
      >
        {stats.map((stat, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0' }}>
            {i > 0 && (
              <div
                style={{
                  width: '1px',
                  height: '40px',
                  background: 'rgba(255,255,255,0.12)',
                  marginRight: '48px',
                }}
                className="trust-divider"
              />
            )}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <span
                style={{
                  color: '#ffffff',
                  fontSize: '18px',
                  fontWeight: 800,
                  letterSpacing: '0.02em',
                }}
              >
                {stat.label}
              </span>
              <span
                style={{
                  color: '#9ca3af',
                  fontSize: '13px',
                  marginTop: '4px',
                }}
              >
                {stat.descriptor}
              </span>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .trust-bar-inner {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
            justify-items: center !important;
          }
          .trust-divider {
            display: none !important;
          }
        }
      `}</style>
    </div>
  )
}
