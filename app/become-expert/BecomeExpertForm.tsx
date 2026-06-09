'use client'

import { useState, type FormEvent, type ReactNode } from 'react'

const WEBHOOK_URL =
  'https://blackstormexperts.app.n8n.cloud/webhook/ef9f174c-99a2-4e6b-ae24-819e597aa0ba'

const PRIOR_EXPERIENCE_OPTIONS = ['None', 'Some', 'Extensive'] as const

const LOOKING_FOR_OPTIONS = [
  'More cases',
  'Build my presence',
  'Help managing my caseload',
  'Just join the network',
] as const

const JUST_JOIN_NETWORK = 'Just join the network'

const pillButtonClass = (selected: boolean) =>
  `cursor-pointer rounded-full border px-4 py-2.5 text-[14px] font-medium leading-tight transition-all duration-200 ease-in-out ${
    selected
      ? 'border-accent bg-accent text-white shadow-[0_2px_8px_rgba(26,58,92,0.18)]'
      : 'border-[#e2e8f0] bg-[#f8fafc] text-[#4a5568] hover:border-accent/50 hover:bg-white'
  }`

const fieldLabelClass = 'mb-3 block text-[14px] font-semibold leading-snug text-[#1a1a1a]'

function FieldLabel({ children, htmlFor }: { children: ReactNode; htmlFor?: string }) {
  return (
    <label htmlFor={htmlFor} className={fieldLabelClass}>
      {children}
    </label>
  )
}

function FormField({ label, htmlFor, children }: { label: string; htmlFor: string; children: ReactNode }) {
  return (
    <div>
      <FieldLabel htmlFor={htmlFor}>{label}</FieldLabel>
      {children}
    </div>
  )
}

function PillSelector<T extends string>({
  legend,
  options,
  value,
  onChange,
}: {
  legend: string
  options: readonly T[]
  value: T | ''
  onChange: (value: T) => void
}) {
  return (
    <fieldset className="border-0 p-0">
      <legend className={fieldLabelClass}>{legend}</legend>
      <input
        tabIndex={-1}
        value={value}
        readOnly
        required
        aria-hidden
        className="pointer-events-none absolute h-0 w-0 overflow-hidden opacity-0"
        onChange={() => undefined}
      />
      <div className="flex flex-wrap gap-2" role="radiogroup" aria-label={legend}>
        {options.map((option) => {
          const selected = value === option

          return (
            <button
              key={option}
              type="button"
              aria-pressed={selected}
              onClick={() => onChange(option)}
              className={pillButtonClass(selected)}
            >
              {option}
            </button>
          )
        })}
      </div>
    </fieldset>
  )
}

function MultiPillSelector({
  legend,
  options,
  value,
  onChange,
}: {
  legend: string
  options: readonly string[]
  value: string[]
  onChange: (value: string[]) => void
}) {
  const toggleOption = (option: string) => {
    if (value.includes(option)) {
      onChange(value.filter((item) => item !== option))
      return
    }

    if (option === JUST_JOIN_NETWORK) {
      onChange([JUST_JOIN_NETWORK])
      return
    }

    onChange([...value.filter((item) => item !== JUST_JOIN_NETWORK), option])
  }

  return (
    <fieldset className="border-0 p-0">
      <legend className={fieldLabelClass}>{legend}</legend>
      <div className="flex flex-wrap gap-2" role="group" aria-label={legend}>
        {options.map((option) => {
          const selected = value.includes(option)

          return (
            <button
              key={option}
              type="button"
              aria-pressed={selected}
              onClick={() => toggleOption(option)}
              className={pillButtonClass(selected)}
            >
              {option}
            </button>
          )
        })}
      </div>
    </fieldset>
  )
}

export default function BecomeExpertForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [specialty, setSpecialty] = useState('')
  const [yearsExperience, setYearsExperience] = useState('')
  const [priorExperience, setPriorExperience] = useState('')
  const [currentCaseload, setCurrentCaseload] = useState('')
  const [lookingForSelections, setLookingForSelections] = useState<string[]>([])
  const [background, setBackground] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const fieldClass =
    'box-border w-full rounded-[6px] border border-[#e2e8f0] bg-white px-4 py-3 font-[inherit] text-[15px] text-[#1a1a1a] outline-none transition-colors duration-200 ease-in-out placeholder:text-[#94a3b8] focus:border-[#1a3a5c] focus:outline-none'

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError(false)
    setSubmitting(true)

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          specialty,
          yearsExperience,
          priorExperience,
          currentCaseload,
          lookingFor: LOOKING_FOR_OPTIONS.filter((option) => lookingForSelections.includes(option)).join(', '),
          background,
        }),
      })

      if (res.type !== 'opaque' && !res.ok) {
        setError(true)
        return
      }

      setSuccess(true)
    } catch {
      setError(true)
    } finally {
      setSubmitting(false)
    }
  }

  if (success) {
    return (
      <div className="flex flex-col items-center pt-2 text-center">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#16a34a] text-[24px] text-white"
          aria-hidden
        >
          ✓
        </div>
        <p className="mt-4 text-[18px] text-[#1a1a1a]">Thanks! We&apos;ll review your profile and follow up within 48 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.1em] text-accent">About You</p>
        <div className="space-y-4">
          <FormField label="Full Name" htmlFor="expert-name">
            <input
              id="expert-name"
              type="text"
              required
              autoComplete="name"
              placeholder="Jane Smith"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={fieldClass}
            />
          </FormField>

          <FormField label="Email Address" htmlFor="expert-email">
            <input
              id="expert-email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@lawfirm.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={fieldClass}
            />
          </FormField>

          <FormField label="Phone Number" htmlFor="expert-phone">
            <input
              id="expert-phone"
              type="tel"
              autoComplete="tel"
              placeholder="(555) 123-4567"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={fieldClass}
            />
          </FormField>

          <FormField label="Specialty / Area of Expertise" htmlFor="expert-specialty">
            <input
              id="expert-specialty"
              type="text"
              required
              placeholder="e.g. Orthopedic Surgery, Forensic Economics"
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
              className={fieldClass}
            />
          </FormField>

          <FormField label="Years of Experience" htmlFor="expert-years">
            <input
              id="expert-years"
              type="number"
              required
              min="0"
              placeholder="15"
              value={yearsExperience}
              onChange={(e) => setYearsExperience(e.target.value)}
              className={fieldClass}
            />
          </FormField>
        </div>
      </div>

      <div>
        <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.1em] text-accent">Your Experience</p>
        <div className="space-y-5">
          <PillSelector
            legend="Have you served as an expert witness before?"
            options={PRIOR_EXPERIENCE_OPTIONS}
            value={priorExperience}
            onChange={setPriorExperience}
          />

          <FormField label="Roughly how many cases are you currently working?" htmlFor="expert-caseload">
            <input
              id="expert-caseload"
              type="text"
              required
              placeholder="e.g. 2"
              value={currentCaseload}
              onChange={(e) => setCurrentCaseload(e.target.value)}
              className={fieldClass}
            />
          </FormField>

          <MultiPillSelector
            legend="What are you looking for?"
            options={LOOKING_FOR_OPTIONS}
            value={lookingForSelections}
            onChange={setLookingForSelections}
          />

          <FormField label="Tell us about your background" htmlFor="expert-background">
            <textarea
              id="expert-background"
              rows={4}
              placeholder="Credentials, specialties, prior expert witness experience..."
              value={background}
              onChange={(e) => setBackground(e.target.value)}
              className={`${fieldClass} resize-y`}
            />
          </FormField>
        </div>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-md border-0 bg-[#1a3a5c] py-[14px] text-[16px] font-semibold text-white transition-colors duration-200 ease-in-out hover:bg-[#152d47] disabled:cursor-not-allowed disabled:opacity-80"
      >
        {submitting ? 'Submitting...' : 'Join Now'}
      </button>
      {error && (
        <p className="text-[14px] text-[#dc2626]" role="alert">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  )
}
