export default function Problem() {
  return (
    <section
      style={{
        background: '#f0ede8',
        padding: '80px 40px',
      }}
    >
      <div style={{ maxWidth: '680px', margin: '0 auto' }}>
        <p
          style={{
            fontSize: '11px',
            letterSpacing: '0.12em',
            color: '#4a5568',
            textTransform: 'uppercase',
            fontWeight: 600,
            marginBottom: '16px',
          }}
        >
          The Problem
        </p>
        <h2
          style={{
            fontSize: '36px',
            fontWeight: 800,
            color: '#0a0a0a',
            lineHeight: 1.2,
            marginBottom: '28px',
          }}
        >
          Your Time Is Too Valuable for This
        </h2>
        <p
          style={{
            fontSize: '18px',
            color: '#4a5568',
            lineHeight: 1.9,
            marginBottom: '20px',
          }}
        >
          Litigation is your expertise. But finding the right expert witness is a different job entirely.
        </p>
        <p
          style={{
            fontSize: '18px',
            color: '#4a5568',
            lineHeight: 1.9,
          }}
        >
          Most attorneys are stuck cold calling experts who don&rsquo;t call back, digging through outdated directories, and waiting on colleagues to see if anyone knows someone. The big expert witness services aren&rsquo;t much better. You pay a retainer before they lift a finger, get handed off to a junior account rep, and end up with a database dump instead of a vetted shortlist. The right expert can make or break a case. The problem has never been knowing you need one. The problem is finding the right one before it costs you.
        </p>
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
