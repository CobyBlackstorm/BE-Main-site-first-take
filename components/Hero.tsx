'use client'

export default function Hero() {
  return (
    <section
      style={{
        background: '#f0ede8',
        width: '100%',
        padding: '100px 40px',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '80px',
        }}
        className="hero-inner"
      >
        {/* Left column */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            textAlign: 'left',
          }}
        >
          <h1
            style={{
              fontSize: '64px',
              fontWeight: 800,
              color: '#0a0a0a',
              lineHeight: 1.05,
              maxWidth: '600px',
            }}
          >
            Stop Wasting Hours Searching for the Right Expert Witness.
          </h1>

          <p
            style={{
              fontSize: '18px',
              color: '#4a5568',
              maxWidth: '480px',
              marginTop: '20px',
              lineHeight: 1.7,
            }}
          >
            The right expert witness, delivered in 48 to 72 hours. No retainer. No hidden fees. Satisfaction guaranteed.
          </p>

          <a
            href="#"
            style={{
              display: 'inline-block',
              background: '#0a0a0a',
              color: '#ffffff',
              fontSize: '16px',
              fontWeight: 600,
              padding: '16px 40px',
              borderRadius: '6px',
              textDecoration: 'none',
              transition: 'opacity 0.2s ease',
              marginTop: '32px',
              alignSelf: 'flex-start',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Start Your Expert Search
          </a>

          <p
            style={{
              fontSize: '13px',
              color: '#4a5568',
              marginTop: '12px',
              textAlign: 'left',
            }}
          >
            No upfront fees. No obligation to retain. Satisfaction guaranteed.
          </p>
        </div>

        {/* Right column — stats card */}
        <div
          style={{
            flex: '0 0 320px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          className="hero-card-col"
        >
          <div
            style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '16px',
              padding: '28px 32px',
              boxShadow: '0 12px 40px rgba(0,0,0,0.1)',
              width: '100%',
            }}
          >
            {/* Row 1 */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div
                style={{
                  width: '10px',
                  height: '10px',
                  background: '#22c55e',
                  borderRadius: '999px',
                  flexShrink: 0,
                }}
              />
              <span style={{ fontSize: '13px', fontWeight: 500, color: '#4a5568' }}>
                Active Search in Progress
              </span>
            </div>

            {/* Divider */}
            <div style={{ borderTop: '1px solid #f0ede8', margin: '16px 0' }} />

            {/* Row 2 */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '14px', color: '#4a5568' }}>Avg. Delivery Time</span>
              <span style={{ fontSize: '16px', fontWeight: 800, color: '#0a0a0a' }}>48-72 hrs</span>
            </div>

            {/* Row 3 */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px' }}>
              <span style={{ fontSize: '14px', color: '#4a5568' }}>Satisfaction Rate</span>
              <span style={{ fontSize: '16px', fontWeight: 800, color: '#22c55e' }}>100%</span>
            </div>

            {/* Divider */}
            <div style={{ borderTop: '1px solid #f0ede8', margin: '16px 0' }} />

            {/* Row 4 */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '14px', color: '#4a5568' }}>Searches Handled</span>
              <span style={{ fontSize: '14px', fontWeight: 700, color: '#0a0a0a' }}>Founder-led</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-inner {
            flex-direction: column !important;
            gap: 48px !important;
          }
          .hero-inner h1 {
            font-size: 40px !important;
          }
          .hero-card-col {
            flex: none !important;
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  )
}
