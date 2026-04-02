'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchModal } from '@/components/SearchModal'

export default function Nav() {
  const { openSearchModal } = useSearchModal()
  const [menuOpen, setMenuOpen] = useState(false)

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

  const linkClass =
    'text-sm font-medium text-secondary transition-colors duration-200 ease-in-out hover:text-primary'

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

        <div className="hidden items-center gap-8 md:flex">
          <div className="group relative">
            <button type="button" className={`${linkClass} inline-flex items-center`}>
              Expert Witnesses
              <svg
                width="10"
                height="10"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden
                className="ml-1 align-middle text-[#4a5568] transition-transform duration-200 ease-out group-hover:rotate-180"
              >
                <path d="M4 6 L8 10 L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="pointer-events-none invisible absolute left-0 top-full z-50 mt-2 min-w-[200px] translate-y-1 rounded-[8px] border border-[#e2e8f0] bg-white py-2 opacity-0 shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-all duration-200 ease-out group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <Link
                href="/expert-witness"
                className="block px-5 py-2.5 text-[14px] font-medium text-[#1a1a1a] transition-colors hover:bg-[#f5f4f0]"
              >
                Expert Directory
              </Link>
              <Link
                href="/become-expert"
                className="block px-5 py-2.5 text-[14px] font-medium text-[#1a1a1a] transition-colors hover:bg-[#f5f4f0]"
              >
                Become an Expert
              </Link>
            </div>
          </div>
          <Link href="/about" className={linkClass}>
            About
          </Link>
          <a
            href="#"
            className="rounded-md bg-accent px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 ease-in-out hover:bg-accent-hover"
            onClick={(e) => {
              e.preventDefault()
              openSearchModal()
            }}
          >
            Start Your Search
          </a>
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
            <Link
              href="/expert-witness"
              className="border-b border-card-border py-4 text-left text-lg font-medium text-secondary"
              onClick={() => setMenuOpen(false)}
            >
              Expert Directory
            </Link>
            <Link
              href="/become-expert"
              className="border-b border-card-border py-4 text-left text-lg font-medium text-secondary"
              onClick={() => setMenuOpen(false)}
            >
              Become an Expert
            </Link>
            <Link
              href="/about"
              className="border-b border-card-border py-4 text-left text-lg font-medium text-secondary"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                setMenuOpen(false)
                openSearchModal()
              }}
              className="mt-6 rounded-md bg-accent py-3.5 text-center text-base font-semibold text-white transition-all duration-200 ease-in-out hover:bg-accent-hover"
            >
              Start Your Search
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
