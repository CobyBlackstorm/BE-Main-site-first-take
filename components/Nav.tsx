'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (id: string) => {
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(240,237,232,0.95)' : '#f0ede8',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(8px)' : 'none',
        boxShadow: scrolled ? '0 1px 8px rgba(0,0,0,0.08)' : 'none',
        transition: 'background 0.2s ease, box-shadow 0.2s ease',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 40px',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <span
            style={{
              fontWeight: 700,
              fontSize: '18px',
              color: '#0a0a0a',
              letterSpacing: '0.01em',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            Blackstorm Experts
          </span>
        </Link>

        {/* Desktop nav */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
          }}
          className="desktop-nav"
        >
          <button
            onClick={() => handleNavClick('how-it-works')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 500,
              color: '#4a5568',
              transition: 'color 0.2s ease',
              fontFamily: 'Inter, sans-serif',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#0a0a0a')}
            onMouseLeave={e => (e.currentTarget.style.color = '#4a5568')}
          >
            How It Works
          </button>
          <button
            onClick={() => handleNavClick('why-blackstorm')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 500,
              color: '#4a5568',
              transition: 'color 0.2s ease',
              fontFamily: 'Inter, sans-serif',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#0a0a0a')}
            onMouseLeave={e => (e.currentTarget.style.color = '#4a5568')}
          >
            Why Blackstorm
          </button>
          <button
            onClick={() => handleNavClick('results')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 500,
              color: '#4a5568',
              transition: 'color 0.2s ease',
              fontFamily: 'Inter, sans-serif',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#0a0a0a')}
            onMouseLeave={e => (e.currentTarget.style.color = '#4a5568')}
          >
            Results
          </button>
          <a
            href="#"
            style={{
              background: '#0a0a0a',
              color: '#ffffff',
              fontSize: '14px',
              fontWeight: 600,
              padding: '10px 20px',
              borderRadius: '6px',
              textDecoration: 'none',
              transition: 'opacity 0.2s ease',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Start Your Search
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
          }}
          className="hamburger-btn"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: '#f0ede8',
            borderTop: '1px solid rgba(0,0,0,0.06)',
            padding: '16px 20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          }}
          className="mobile-menu"
        >
          <button
            onClick={() => handleNavClick('how-it-works')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 500,
              color: '#4a5568',
              padding: '12px 0',
              textAlign: 'left',
              fontFamily: 'Inter, sans-serif',
              borderBottom: '1px solid rgba(0,0,0,0.06)',
            }}
          >
            How It Works
          </button>
          <button
            onClick={() => handleNavClick('why-blackstorm')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 500,
              color: '#4a5568',
              padding: '12px 0',
              textAlign: 'left',
              fontFamily: 'Inter, sans-serif',
              borderBottom: '1px solid rgba(0,0,0,0.06)',
            }}
          >
            Why Blackstorm
          </button>
          <button
            onClick={() => handleNavClick('results')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 500,
              color: '#4a5568',
              padding: '12px 0',
              textAlign: 'left',
              fontFamily: 'Inter, sans-serif',
              borderBottom: '1px solid rgba(0,0,0,0.06)',
            }}
          >
            Results
          </button>
          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            style={{
              background: '#0a0a0a',
              color: '#ffffff',
              fontSize: '16px',
              fontWeight: 600,
              padding: '14px 20px',
              borderRadius: '6px',
              textDecoration: 'none',
              textAlign: 'center',
              marginTop: '12px',
            }}
          >
            Start Your Search
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .hamburger-btn {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  )
}
