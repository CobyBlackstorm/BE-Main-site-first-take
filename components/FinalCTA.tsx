'use client'

type FinalCTAProps = {
  /** Tighter vertical padding for specialty pages (40px mobile / 60px desktop). */
  compact?: boolean
}

export default function FinalCTA({ compact }: FinalCTAProps) {
  const paddingClass = compact ? 'py-[40px] md:py-[60px]' : 'py-20 md:py-[80px]'

  return (
    <section className={`bg-[#1a3a5c] ${paddingClass}`}>
      <div className="section-container max-w-[700px] text-center">
        <h2 className="mb-4 text-[36px] font-bold leading-[1.2] tracking-[-0.02em] text-white">
          Ready to Find the Right Expert?
        </h2>

        <p className="mb-9 text-lg font-normal leading-[1.7] text-white/60">
          Submit your search request and we will have vetted candidates in front of you within 48 to 72 hours.
        </p>

        <a
          href="#"
          data-open-search-modal
          className="inline-block rounded-md bg-white px-12 py-[18px] text-base font-semibold text-primary transition-colors duration-200 ease-in-out hover:bg-white/90"
        >
          Request an Expert
        </a>

        <p className="mt-3 text-[13px] font-normal leading-[1.7] text-white/60">
          No payment until we deliver. No obligation to retain. Satisfaction guaranteed.
        </p>
      </div>
    </section>
  )
}
