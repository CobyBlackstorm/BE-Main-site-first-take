'use client'

import { useState, type FormEvent } from 'react'

const WEBHOOK_URL =
  'https://blackstormexperts.app.n8n.cloud/webhook-test/ef9f174c-99a2-4e6b-ae24-819e597aa0ba'

export default function BecomeExpertForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [specialty, setSpecialty] = useState('')
  const [yearsExperience, setYearsExperience] = useState('')
  const [background, setBackground] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const fieldClass =
    'box-border w-full rounded-[6px] border border-[#e2e8f0] px-4 py-3 font-[inherit] text-[15px] outline-none focus:border-[#1a3a5c] focus:outline-none mb-3'

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        required
        autoComplete="name"
        placeholder="Full Name"
        aria-label="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={fieldClass}
      />
      <input
        type="email"
        required
        autoComplete="email"
        placeholder="Email Address"
        aria-label="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={fieldClass}
      />
      <input
        type="tel"
        autoComplete="tel"
        placeholder="Phone Number"
        aria-label="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className={fieldClass}
      />
      <input
        type="text"
        required
        placeholder="e.g., Orthopedic Surgery, Forensic Economics"
        aria-label="Area of Expertise"
        value={specialty}
        onChange={(e) => setSpecialty(e.target.value)}
        className={fieldClass}
      />
      <input
        type="number"
        required
        min="0"
        placeholder="Years of Experience"
        aria-label="Years of Experience"
        value={yearsExperience}
        onChange={(e) => setYearsExperience(e.target.value)}
        className={fieldClass}
      />
      <textarea
        rows={4}
        placeholder="Tell us about your credentials, specialties, and any prior expert witness experience."
        aria-label="Brief Background"
        value={background}
        onChange={(e) => setBackground(e.target.value)}
        className={`${fieldClass} mb-6 resize-y`}
      />
      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-md border-0 bg-[#1a3a5c] py-[14px] text-[16px] font-semibold text-white transition-colors duration-200 ease-in-out hover:bg-[#152d47] disabled:cursor-not-allowed disabled:opacity-80"
      >
        {submitting ? 'Submitting...' : 'Submit Your Profile'}
      </button>
      {error && (
        <p className="mt-3 text-[14px] text-[#dc2626]" role="alert">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  )
}
