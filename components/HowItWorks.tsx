const steps = [
  {
    number: '1',
    title: 'You Tell Us What You Need',
    body: 'Share the case type, jurisdiction, and the specific expertise required. The more detail you provide, the better we can match your needs.',
  },
  {
    number: '2',
    title: 'We Do the Legwork',
    body: 'We manually source candidates, verify credentials, confirm availability, and screen for conflicts. You never touch a database or make a cold call.',
  },
  {
    number: '3',
    title: 'We Make the Introduction',
    body: 'Within 48 to 72 hours, we deliver a direct introduction to two to three vetted candidates who are ready, willing, and able to take your case.',
  },
  {
    number: '4',
    title: 'You Choose Who to Retain',
    body: 'Review your options and retain who you want directly. We never mark up their rates. If no one fits, we keep searching at no extra charge.',
  },
]

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
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
            fontWeight: 600,
            marginBottom: '12px',
          }}
        >
          How It Works
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
          From Request to Introduction in Four Steps
        </h2>

        {/* Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
          }}
          className="how-grid"
        >
          {steps.map((step) => (
            <div
              key={step.number}
              className="how-card"
              style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderLeft: '4px solid #1a3a5c',
                borderRadius: '8px',
                padding: '36px',
                minHeight: '220px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
            >
              {/* Ghost watermark number */}
              <span
                style={{
                  position: 'absolute',
                  bottom: '-16px',
                  right: '8px',
                  fontSize: '120px',
                  fontWeight: 800,
                  color: '#1a3a5c',
                  opacity: 0.04,
                  lineHeight: 1,
                  userSelect: 'none',
                  pointerEvents: 'none',
                }}
              >
                {step.number}
              </span>

              {/* Large step number */}
              <p
                style={{
                  fontSize: '72px',
                  fontWeight: 800,
                  color: '#1a3a5c',
                  lineHeight: 1,
                  marginBottom: '20px',
                }}
              >
                {step.number}
              </p>

              {/* Title */}
              <p
                style={{
                  fontSize: '17px',
                  fontWeight: 700,
                  color: '#0a0a0a',
                  marginBottom: '10px',
                  lineHeight: 1.3,
                }}
              >
                {step.title}
              </p>

              {/* Body */}
              <p
                style={{
                  fontSize: '14px',
                  color: '#4a5568',
                  lineHeight: 1.7,
                }}
              >
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .how-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.1) !important;
        }
        @media (max-width: 900px) {
          .how-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          section {
            padding: 60px 20px !important;
          }
          .how-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
