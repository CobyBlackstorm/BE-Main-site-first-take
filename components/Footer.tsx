'use client'

export default function Footer() {
  return (
    <footer
      style={{
        background: '#0a0a0a',
        padding: '60px 40px 30px',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
        }}
      >
        {/* Two column layout */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}
          className="footer-cols"
        >
          {/* Left */}
          <div>
            <span
              style={{
                fontWeight: 700,
                fontSize: '18px',
                color: '#ffffff',
                letterSpacing: '0.01em',
                fontFamily: 'Inter, sans-serif',
                display: 'block',
                marginBottom: '12px',
              }}
            >
              Blackstorm Experts
            </span>
            <p style={{ color: '#4a5568', fontSize: '13px' }}>
              Expert Witness Search for Litigation Attorneys
            </p>
          </div>

          {/* Right */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              textAlign: 'right',
            }}
            className="footer-right"
          >
            <p style={{ color: '#9ca3af', fontSize: '13px' }}>352-256-1603</p>
            <p style={{ color: '#9ca3af', fontSize: '13px', marginTop: '4px' }}>
              coby@blackstormexperts.com
            </p>
            <a
              href="#"
              style={{
                color: '#9ca3af',
                fontSize: '13px',
                marginTop: '4px',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={e => (e.currentTarget.style.color = '#9ca3af')}
            >
              Become an Expert Witness
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            marginTop: '40px',
            paddingTop: '20px',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          className="footer-bottom"
        >
          <p style={{ color: '#4a5568', fontSize: '12px' }}>
            &copy; 2025 Blackstorm Experts. All rights reserved.
          </p>
          <p style={{ color: '#4a5568', fontSize: '12px' }}>getblackstorm.com</p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer {
            padding: 40px 20px 24px !important;
          }
          .footer-cols {
            flex-direction: column !important;
            align-items: center !important;
            gap: 32px !important;
            text-align: center !important;
          }
          .footer-right {
            align-items: center !important;
            text-align: center !important;
          }
          .footer-bottom {
            flex-direction: column !important;
            gap: 8px !important;
            text-align: center !important;
          }
        }
      `}</style>
    </footer>
  )
}
