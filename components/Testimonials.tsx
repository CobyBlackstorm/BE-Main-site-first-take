const testimonials = [
  {
    quote:
      'We had a complex neurology case with a tight deadline. Blackstorm delivered three qualified candidates within 48 hours. One of them ended up being exactly what we needed. Incredibly fast and professional.',
    name: 'Michael T.',
    title: 'Personal Injury Attorney, Miami FL',
  },
  {
    quote:
      "I've used the big expert witness databases before. They're slow and impersonal. Blackstorm felt like having a dedicated resource on my team. I had vetted options in my inbox before I expected them.",
    name: 'Sarah K.',
    title: 'Medical Malpractice Attorney, Chicago IL',
  },
  {
    quote:
      'The satisfaction guarantee sold me on trying them the first time. The quality of the candidates kept me coming back.',
    name: 'David R.',
    title: 'Products Liability Attorney, Dallas TX',
  },
]

const trustItems = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a3a5c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 22 C4 17 7.5 14 12 14 C16.5 14 20 17 20 22" />
      </svg>
    ),
    title: 'Founder-Led Service',
    description: 'Every search handled personally by Coby Weiss',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a3a5c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="7" width="18" height="14" rx="2" />
        <path d="M8 7 V5 C8 3.9 8.9 3 10 3 H14 C15.1 3 16 3.9 16 5 V7" />
        <line x1="8" y1="12" x2="16" y2="12" />
        <line x1="8" y1="16" x2="13" y2="16" />
      </svg>
    ),
    title: 'All Practice Areas',
    description: 'From med mal to commercial litigation and everything in between',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a3a5c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2 L20 6 V12 C20 17 16.5 21 12 22 C7.5 21 4 17 4 12 V6 Z" />
        <polyline points="8.5 12 11 14.5 16 9.5" />
      </svg>
    ),
    title: 'Satisfaction Guaranteed',
    description: "We source more at no charge if you aren't satisfied",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a3a5c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21 C12 21 19 15.5 19 9.5 C19 5.9 16.1 3 12 3 C7.9 3 5 5.9 5 9.5 C5 15.5 12 21 12 21 Z" />
        <circle cx="12" cy="9.5" r="2.5" />
      </svg>
    ),
    title: 'All 50 States',
    description: 'Serving litigation attorneys nationwide',
  },
]

export default function Testimonials() {
  return (
    <section id="results" className="bg-muted section-padding">
      <div className="section-container max-w-container">
        <p className="section-label mb-3 text-center">What Attorneys Are Saying</p>

        <h2 className="mb-12 text-center text-[36px] font-bold leading-[1.2] tracking-[-0.02em] text-primary">
          Results That Speak for Themselves
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="card-elevated flex flex-col transition-all duration-200 ease-in-out">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <span key={j} className="text-[18px] text-star" aria-hidden>
                    ★
                  </span>
                ))}
              </div>

              <p className="mt-4 flex-1 text-[15px] font-normal not-italic leading-[1.75] text-secondary">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="mt-5 border-t border-divider pt-4">
                <p className="text-[15px] font-bold text-primary">{t.name}</p>
                <p className="mt-0.5 text-[13px] font-normal text-secondary">{t.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 gap-10 gap-y-12 md:grid-cols-4 md:gap-8">
          {trustItems.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-card-border bg-white">
                {item.icon}
              </div>
              <p className="text-[15px] font-bold text-primary">{item.title}</p>
              <p className="mt-1.5 max-w-[160px] text-[13px] font-normal leading-snug text-secondary">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
