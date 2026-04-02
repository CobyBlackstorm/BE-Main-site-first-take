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
    <section id="how-it-works" className="bg-page section-padding">
      <div className="section-container max-w-container">
        <p className="section-label mb-3 text-center">How It Works</p>

        <h2 className="mb-12 text-center text-[36px] font-bold leading-[1.2] tracking-[-0.02em] text-primary">
          From Request to Introduction in Four Steps
        </h2>

        <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex min-h-0 flex-col overflow-hidden rounded-xl border border-card-border bg-white shadow-[0_2px_12px_rgba(0,0,0,0.06)] transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
            >
              <div className="h-[3px] w-full bg-accent" />
              <div className="flex flex-1 flex-col p-[28px]">
                <div className="mb-2 flex items-center gap-3">
                  <p className="flex-shrink-0 text-[36px] font-extrabold leading-none text-accent">{step.number}</p>
                  <p className="text-[15px] font-bold text-primary">{step.title}</p>
                </div>
                <p className="text-sm font-normal leading-[1.7] text-secondary">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
