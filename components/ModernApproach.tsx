const tiles = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 32 32" fill="none" stroke="#1a3a5c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="20" height="20" viewBox="0 0 32 32" fill="none" stroke="#1a3a5c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="20" height="20" viewBox="0 0 32 32" fill="none" stroke="#1a3a5c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="20" height="20" viewBox="0 0 32 32" fill="none" stroke="#1a3a5c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
    <section id="why-blackstorm" className="bg-muted section-padding">
      <div className="section-container max-w-container">
        <p className="section-label mb-3 text-center">Why Blackstorm</p>

        <h2 className="mb-4 text-center text-[36px] font-bold leading-[1.2] tracking-[-0.02em] text-primary">
          A Modern Approach to Expert Witness Search
        </h2>

        <p className="mx-auto mb-12 max-w-[600px] text-center text-base font-normal leading-[1.7] text-secondary">
          We don&rsquo;t just find names. We confirm interest, verify credentials, and check availability before a candidate ever reaches your desk.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          {tiles.map((tile, i) => (
            <div
              key={i}
              className="rounded-lg border border-card-border border-l-[3px] border-l-accent bg-white p-[28px] shadow-card transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-card-hover"
            >
              <div className="flex flex-row items-start gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-card-border bg-[#ffffff]">
                  {tile.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="mb-1 text-base font-bold text-primary">{tile.title}</h3>
                  <p className="text-sm font-normal leading-[1.7] text-secondary">{tile.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
