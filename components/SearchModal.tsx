'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useState,
  type FormEvent,
} from 'react'

const WEBHOOK_URL =
  'https://blackstormexperts.app.n8n.cloud/webhook/60227524-9eaf-4ca2-a204-136e2a17c9ca'

type SearchModalContextValue = {
  openSearchModal: () => void
  closeSearchModal: () => void
}

const SearchModalContext = createContext<SearchModalContextValue | null>(null)

export function useSearchModal() {
  const ctx = useContext(SearchModalContext)
  if (!ctx) {
    throw new Error('useSearchModal must be used within SearchModalProvider')
  }
  return ctx
}

function SearchModalDialog() {
  const { closeSearchModal } = useSearchModal()
  const titleId = useId()
  const [name, setName] = useState('')
  const [firm, setFirm] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

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
          firm,
          email,
          phone: phone || '',
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

  const fieldClass =
    'box-border w-full rounded-[6px] border border-[#e2e8f0] px-4 py-3 font-[inherit] text-[15px] outline-none focus:border-[#1a3a5c] focus:outline-none'

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-6"
      style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
      role="presentation"
      onClick={closeSearchModal}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative box-border w-full max-w-[480px] rounded-[12px] bg-white p-10 shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={closeSearchModal}
          className="absolute right-10 top-10 cursor-pointer border-0 bg-transparent p-0 text-[20px] leading-none text-[#4a5568]"
          aria-label="Close"
        >
          ×
        </button>

        {success ? (
          <div className="flex flex-col items-center pt-2 text-center">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#16a34a] text-[24px] text-white"
              aria-hidden
            >
              ✓
            </div>
            <p className="mt-4 text-[18px] text-[#1a1a1a]">Thanks! We&apos;ll be in touch within 24 hours.</p>
          </div>
        ) : (
          <>
            <h2 id={titleId} className="mb-2 text-[24px] font-bold text-[#1a1a1a]">
              Start Your Expert Search
            </h2>
            <p className="mb-6 text-[14px] text-[#4a5568]">
              Fill out the form below and we&apos;ll be in touch within 24 hours.
            </p>
            <form onSubmit={handleSubmit}>
              <input
                id="search-modal-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Full Name"
                aria-label="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`${fieldClass} mb-3`}
              />
              <input
                id="search-modal-firm"
                name="firm"
                type="text"
                required
                autoComplete="organization"
                placeholder="Law Firm Name"
                aria-label="Law Firm Name"
                value={firm}
                onChange={(e) => setFirm(e.target.value)}
                className={`${fieldClass} mb-3`}
              />
              <input
                id="search-modal-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="Email Address"
                aria-label="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`${fieldClass} mb-3`}
              />
              <input
                id="search-modal-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="Phone Number (Optional)"
                aria-label="Phone Number (Optional)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={`${fieldClass} mb-6`}
              />
              <button
                type="submit"
                disabled={submitting}
                className="w-full cursor-pointer rounded-[6px] border-0 bg-[#1a3a5c] py-[14px] text-[16px] font-semibold text-white transition-colors hover:bg-[#152d47] disabled:cursor-not-allowed disabled:opacity-80"
              >
                {submitting ? 'Submitting...' : 'Submit Your Request'}
              </button>
              {error && (
                <p className="mt-3 text-[14px] text-[#dc2626]" role="alert">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  )
}

export function SearchModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)

  const openSearchModal = useCallback(() => {
    setOpen(true)
  }, [])

  const closeSearchModal = useCallback(() => {
    setOpen(false)
  }, [])

  const value: SearchModalContextValue = {
    openSearchModal,
    closeSearchModal,
  }

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [open])

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest('[data-open-search-modal]')
      if (!el) return
      e.preventDefault()
      e.stopPropagation()
      openSearchModal()
    }
    document.addEventListener('click', onDocClick, true)
    return () => document.removeEventListener('click', onDocClick, true)
  }, [openSearchModal])

  return (
    <SearchModalContext.Provider value={value}>
      {children}
      {open && <SearchModalDialog />}
    </SearchModalContext.Provider>
  )
}
