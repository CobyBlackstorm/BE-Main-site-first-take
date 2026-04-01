'use client'

function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4a5568" strokeWidth="1.5" strokeLinecap="round" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  )
}

const candidates = [
  {
    initials: 'SM',
    name: 'Dr. Sarah Mitchell',
    circleBg: '#1a3a5c',
    detail: 'Board Certified Neurosurgeon · 22 yrs',
  },
  {
    initials: 'JT',
    name: 'Dr. James Thornton',
    circleBg: '#16a34a',
    detail: 'Orthopedic Surgery Specialist · 18 yrs',
  },
  {
    initials: 'RV',
    name: 'Dr. Rachel Vasquez',
    circleBg: '#4a5568',
    detail: 'Emergency Medicine · 15 yrs',
  },
]

export default function Hero() {
  return (
    <section className="bg-page section-padding">
      <div className="section-container flex max-w-container flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-0">
        <div className="flex w-full flex-col items-start text-left lg:w-[55%] lg:max-w-[55%] lg:pr-8">
          <h1 className="max-w-[600px] text-[clamp(2rem,8vw,48px)] font-extrabold leading-[1.08] tracking-[-0.03em] text-primary md:text-[48px]">
            Stop Wasting Hours Searching for the{' '}
            <span className="whitespace-nowrap">Right Expert Witness.</span>
          </h1>

          <p className="mt-4 max-w-[480px] text-[17px] font-normal leading-[1.7] text-secondary">
            The right expert witness, delivered in 48 to 72 hours. No retainer. No hidden fees. Satisfaction guaranteed.
          </p>

          <a
            href="#"
            className="mt-7 inline-flex items-center justify-center rounded-md bg-accent px-12 py-4 text-base font-semibold text-white transition-all duration-200 ease-in-out hover:bg-accent-hover hover:shadow-[0_4px_14px_rgba(26,58,92,0.25)]"
          >
            Start Your Expert Search
          </a>

          <p className="mt-3 text-[13px] font-normal leading-[1.7] text-secondary">
            No upfront fees. No obligation to retain. Satisfaction guaranteed.
          </p>
        </div>

        <div className="mt-10 flex w-full flex-col justify-center lg:mt-0 lg:w-[45%] lg:max-w-[45%]">
          <div className="overflow-hidden rounded-xl border border-card-border bg-white shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
            <div className="h-[3px] w-full bg-accent" />
            <div className="p-[28px]">
              <p className="text-[13px] font-semibold uppercase tracking-[0.05em] text-accent">
                Expert Candidates — Ready to Opine
              </p>
              <p className="mt-0.5 text-[12px] text-secondary">Medical Malpractice · Florida</p>
              <div className="my-4 border-t border-card-border" />

              <div>
                {candidates.map((c, i) => (
                  <div
                    key={c.name}
                    className={`flex items-center py-3 ${i < candidates.length - 1 ? 'border-b border-[#f0f0f0]' : ''}`}
                  >
                    <div
                      className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-[13px] font-semibold text-white"
                      style={{ backgroundColor: c.circleBg }}
                    >
                      {c.initials}
                    </div>
                    <div className="ml-3 min-w-0 flex-1">
                      <p className="text-sm font-semibold text-primary">{c.name}</p>
                      <p className="text-[12px] text-secondary">{c.detail}</p>
                    </div>
                    <span className="ml-2 flex-shrink-0 rounded-full border border-guarantee-border bg-guarantee-bg px-2 py-[3px] text-[11px] font-semibold text-guarantee">
                      Available
                    </span>
                  </div>
                ))}
              </div>

              <div className="mb-3.5 mt-4 border-t border-card-border" />
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  <ClockIcon />
                  <span className="text-[12px] font-medium text-secondary">Delivered in 54 hours</span>
                </div>
                <span className="text-[12px] font-semibold text-guarantee">3 of 3 available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
