type LandingPageCTAProps = {
  specialty: string
  caseType?: string
}

function indefiniteArticle(specialty: string): 'a' | 'an' {
  const word = specialty.trim().split(/\s+/)[0] ?? ''
  if (/^[A-Z]{2,}$/.test(word)) {
    return 'AEFHILMNORSX'.includes(word[0]) ? 'an' : 'a'
  }
  return /^[aeiou]/i.test(word) ? 'an' : 'a'
}

function defaultCaseType(specialty: string): string {
  return specialty
    .split(/\s+/)
    .map((word) => (/^[A-Z]{2,}$/.test(word) ? word : word.toLowerCase()))
    .join(' ')
}

export default function LandingPageCTA({ specialty, caseType }: LandingPageCTAProps) {
  const isGenericExpertWitness = specialty.trim().toLowerCase() === 'expert witness'
  const article = indefiniteArticle(specialty)
  const cases = caseType ?? defaultCaseType(specialty)

  return (
    <div className="landing-page-cta mb-8 mt-6 overflow-hidden rounded-xl border border-card-border bg-white text-center shadow-card">
      <div className="h-[3px] w-full bg-accent" />
      <div className="px-5 py-5 md:px-8 md:py-6">
        <p className="text-[18px] font-bold leading-snug tracking-[-0.02em] text-primary md:text-[20px]">
          {isGenericExpertWitness
            ? 'Are you looking for an expert witness?'
            : `Need ${article} ${specialty} Expert Witness?`}
        </p>
        <p className="mx-auto mt-2 max-w-[520px] text-[15px] leading-[1.65] text-secondary">
          Blackstorm Experts helps attorneys identify and connect with the right expert candidates
          {isGenericExpertWitness ? '' : ` for ${cases} cases`}. Tell us about the matter and
          we&apos;ll source qualified experts who fit the case.
        </p>
        <a
          href="#"
          data-open-search-modal
          className="mt-4 inline-flex items-center justify-center rounded-md bg-accent px-8 py-3 text-[15px] font-semibold text-white no-underline transition-all duration-200 ease-in-out hover:bg-accent-hover"
        >
          Request an Expert
        </a>
      </div>
    </div>
  )
}
