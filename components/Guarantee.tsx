const badges = ['No Upfront Payment', 'Satisfaction Guaranteed', '48-72 Hr Turnaround']

function GreenCheckBadge({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-center gap-2">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
        <circle cx="7" cy="7" r="7" fill="#16a34a" />
        <path
          d="M3.5 7.2 L6 9.5 L10.5 4.5"
          stroke="white"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-[13px] font-bold text-guarantee">{label}</span>
    </div>
  )
}

export default function Guarantee() {
  return (
    <section className="border-y border-guarantee-border bg-guarantee-bg py-[60px]">
      <div className="section-container max-w-[800px] text-center">
        <div className="mb-6 flex justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-guarantee">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M6 12 L10 16 L18 8"
                stroke="white"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <h2 className="mb-5 text-[32px] font-extrabold leading-[1.2] tracking-[-0.02em] text-guarantee">
          The Blackstorm Guarantee
        </h2>

        <p className="mx-auto max-w-[600px] text-[15px] font-normal leading-[1.8] text-secondary">
          You don&rsquo;t pay unless we deliver an expert introduction you&rsquo;re satisfied with. If the candidates we provide aren&rsquo;t the right fit, we go back out and source more at no additional charge. No retainer. No hidden fees. One flat rate, only when we deliver.
        </p>

        <div className="mt-7 flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row sm:gap-8">
          {badges.map((badge) => (
            <GreenCheckBadge key={badge} label={badge} />
          ))}
        </div>
      </div>
    </section>
  )
}
