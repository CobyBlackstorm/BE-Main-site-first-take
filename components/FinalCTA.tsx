'use client'

export default function FinalCTA() {
  return (
    <section
      style={{
        background: '#f0ede8',
        padding: '80px 40px',
      }}
    >
      <div
        style={{
          maxWidth: '700px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        {/* Header */}
        <h2
          style={{
            fontSize: '40px',
            fontWeight: 800,
            color: '#0a0a0a',
            lineHeight: 1.15,
            marginBottom: '16px',
          }}
        >
          Ready to Find the Right Expert?
        </h2>

        {/* Subheader */}
        <p
          style={{
            fontSize: '18px',
            color: '#4a5568',
            lineHeight: 1.7,
            marginBottom: '36px',
          }}
        >
          Submit your search request and we will have vetted candidates in front of you within 48 to 72 hours.
        </p>

        {/* CTA Button */}
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
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          Start Your Expert Search
        </a>

        {/* Trust line */}
        <p
          style={{
            fontSize: '13px',
            color: '#4a5568',
            marginTop: '12px',
          }}
        >
          No upfront fees. No obligation to retain. Satisfaction guaranteed.
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section {
            padding: 60px 20px !important;
          }
          h2 {
            font-size: 32px !important;
          }
        }
      `}</style>
    </section>
  )
}
