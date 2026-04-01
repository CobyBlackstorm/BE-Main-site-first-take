'use client'

import Link from 'next/link'

export default function Footer() {
  const muted = 'text-[13px] text-white/50 transition-colors duration-200 ease-in-out'

  return (
    <footer className="bg-[#111111] px-6 pb-8 pt-14 md:px-10 md:pb-10 md:pt-[60px]">
      <div className="mx-auto max-w-container">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="text-center md:text-left">
            <span className="block text-[18px] font-semibold text-white/50">Blackstorm Experts</span>
            <p className={`mt-3 ${muted}`}>Expert Witness Search for Litigation Attorneys</p>
          </div>

          <div className="flex flex-col items-center text-center md:items-end md:text-right">
            <p className={muted}>352-256-1603</p>
            <p className={`mt-1 ${muted}`}>info@blackstormexperts.com</p>
            <a href="#" className={`mt-1 ${muted} hover:text-white`}>
              Become an Expert Witness
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-5 md:flex-row">
          <p className="text-center text-[13px] text-white/50 md:text-left">
            &copy; 2026 Blackstorm Experts. All rights reserved.
          </p>
          <Link href="https://www.getblackstorm.com" className="text-[13px] text-white/50 hover:text-white">
            getblackstorm.com
          </Link>
        </div>
      </div>
    </footer>
  )
}
