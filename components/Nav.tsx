'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchModal } from '@/components/SearchModal'

const moreLinks = [
  { label: 'Expert Directory', href: '/expert-witness' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
]

export default function Nav() {
  const { openSearchModal } = useSearchModal()
  const [menuOpen, setMenuOpen] = useState(false)
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false)
  const moreDropdownCloseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const clearMoreDropdownCloseTimer = () => {
    if (moreDropdownCloseTimerRef.current) {
      clearTimeout(moreDropdownCloseTimerRef.current)
      moreDropdownCloseTimerRef.current = null
    }
  }

  const openMoreDropdown = () => {
    clearMoreDropdownCloseTimer()
    setMoreDropdownOpen(true)
  }

  const closeMoreDropdown = () => {
    clearMoreDropdownCloseTimer()
    moreDropdownCloseTimerRef.current = setTimeout(() => {
      setMoreDropdownOpen(false)
      moreDropdownCloseTimerRef.current = null
    }, 150)
  }

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    return () => {
      if (moreDropdownCloseTimerRef.current) {
        clearTimeout(moreDropdownCloseTimerRef.current)
      }
    }
  }, [])

  const moreTriggerClass =
    'inline-flex items-center gap-1.5 py-2.5 text-sm font-medium leading-none text-secondary transition-colors duration-200 ease-in-out hover:text-primary'

  const dropdownItemClass =
    'block whitespace-nowrap px-4 py-2.5 text-sm font-medium leading-none text-primary transition-colors duration-200 hover:bg-[#f5f4f0] hover:text-accent'

  return (
    <nav className="sticky top-0 z-50 bg-[#f5f4f0] shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
      <div className="section-container flex h-16 max-w-container items-center justify-between">
        <Link href="/" className="flex items-center no-underline">
          <Image
            src="/blackstorm-logo.png"
            alt="Blackstorm Experts"
            width={258}
            height={59}
            className="h-14 w-auto"
            priority
          />
        </Link>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="#"
            className="rounded-md bg-accent px-6 py-2.5 text-sm font-semibold leading-none text-white transition-all duration-200 ease-in-out hover:bg-accent-hover"
            onClick={(e) => {
              e.preventDefault()
              openSearchModal()
            }}
          >
            Request an Expert
          </a>

          <Link
            href="/become-expert"
            className="rounded-md border border-accent bg-transparent px-5 py-2.5 text-sm font-semibold leading-none text-accent transition-all duration-200 ease-in-out hover:bg-accent/5"
          >
            For Experts
          </Link>

          <div className="relative flex items-center" onMouseEnter={openMoreDropdown} onMouseLeave={closeMoreDropdown}>
            <button
              type="button"
              className={moreTriggerClass}
              aria-expanded={moreDropdownOpen}
              aria-haspopup="true"
              onClick={() => setMoreDropdownOpen((open) => !open)}
            >
              More
              <svg
                width="10"
                height="10"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden
                className={`text-secondary transition-transform duration-200 ease-out ${moreDropdownOpen ? 'rotate-180' : ''}`}
              >
                <path d="M4 6 L8 10 L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div
              className={`absolute right-0 top-full z-50 pt-2 transition-all duration-200 ease-out ${
                moreDropdownOpen
                  ? 'pointer-events-auto visible translate-y-0 opacity-100'
                  : 'pointer-events-none invisible translate-y-1 opacity-0'
              }`}
            >
              <div className="min-w-[188px] overflow-hidden rounded-lg border border-card-border bg-white py-1.5 shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
                {moreLinks.map((item) => (
                  <Link key={item.href} href={item.href} className={dropdownItemClass}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex p-1 text-primary md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-[200] flex flex-col bg-[#f5f4f0] md:hidden">
          <div className="flex h-16 items-center justify-between border-b border-card-border px-6">
            <Link href="/" className="flex items-center no-underline" onClick={() => setMenuOpen(false)}>
              <Image
                src="/blackstorm-logo.png"
                alt="Blackstorm Experts"
                width={258}
                height={59}
                className="h-14 w-auto"
              />
            </Link>
            <button type="button" onClick={() => setMenuOpen(false)} className="p-1 text-primary" aria-label="Close menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 flex-col justify-center gap-2 px-8 pb-12">
            {moreLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-card-border py-4 text-left text-lg font-medium text-secondary"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                setMenuOpen(false)
                openSearchModal()
              }}
              className="mt-4 rounded-md bg-accent py-3.5 text-center text-base font-semibold text-white transition-all duration-200 ease-in-out hover:bg-accent-hover"
            >
              Request an Expert
            </a>
            <Link
              href="/become-expert"
              className="mt-3 rounded-md border border-accent py-3.5 text-center text-base font-semibold text-accent transition-all duration-200 ease-in-out hover:bg-accent/5"
              onClick={() => setMenuOpen(false)}
            >
              For Experts
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
