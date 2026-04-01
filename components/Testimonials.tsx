const testimonials = [
  {
    quote:
      'We had a complex neurology case with a tight deadline. Blackstorm delivered three qualified candidates within 48 hours. One of them ended up being exactly what we needed. Incredibly fast and professional.',
    name: 'Michael T.',
    title: 'Personal Injury Attorney',
  },
  {
    quote:
      "I've used the big expert witness databases before. They're slow and impersonal. Blackstorm felt like having a dedicated resource on my team. I had vetted options in my inbox before I expected them.",
    name: 'Sarah K.',
    title: 'Medical Malpractice Attorney',
  },
  {
    quote:
      'The satisfaction guarantee sold me on trying them the first time. The quality of the candidates kept me coming back.',
    name: 'David R.',
    title: 'Products Liability Attorney, Dallas TX',
  },
]

export default function Testimonials() {
  return (
    <section
      id="results"
      style={{
        background: '#e8e4de',
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
            marginBottom: '12px',
            fontWeight: 600,
          }}
        >
          What Attorneys Are Saying
        </p>

        {/* Header */}
        <h2
          style={{
            fontSize: '36px',
            fontWeight: 800,
            color: '#0a0a0a',
            textAlign: 'center',
            marginBottom: '48px',
          }}
        >
          Results That Speak for Themselves
        </h2>

        {/* Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }}
          className="testimonial-grid"
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderTop: '3px solid #0a0a0a',
                borderRadius: '8px',
                padding: '36px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              }}
            >
              {/* Stars */}
              <div style={{ display: 'flex', gap: '2px' }}>
                {Array.from({ length: 5 }).map((_, j) => (
                  <span key={j} style={{ color: '#f0a500', fontSize: '18px' }}>
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p
                style={{
                  fontStyle: 'italic',
                  fontSize: '16px',
                  color: '#4a5568',
                  lineHeight: 1.7,
                  marginTop: '16px',
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Attribution */}
              <div
                style={{
                  marginTop: '20px',
                  borderTop: '1px solid #e2e8f0',
                  paddingTop: '16px',
                }}
              >
                <p style={{ fontWeight: 600, color: '#0a0a0a', fontSize: '14px' }}>
                  {t.name}
                </p>
                <p style={{ color: '#4a5568', fontSize: '13px', marginTop: '2px' }}>
                  {t.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section {
            padding: 60px 20px !important;
          }
          .testimonial-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
