import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { APPLY_FORM_URL } from '../config/constants'
import logo from '../assets/logo.png'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Jobs', to: '/jobs' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Our Success', to: '/success' },
  { label: 'For Employers', to: '/employers' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false)
  }, [location])

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo - Left */}
        <Link
          to="/"
          className="inline-flex items-center gap-3"
          aria-label="Ascenus home"
        >
          <img src={logo} alt="Ascenus Logo" className="h-25 w-50 -ml-10" />
        </Link>

        {/* Nav Links - Center */}
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-all ${location.pathname === item.to
                ? 'bg-violet-500/20 text-violet-400 text-glow'
                : 'text-zinc-400 hover:bg-white/5 hover:text-white hover-text-glow'
                }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Apply Now - Right */}
        <div className="flex items-center gap-3">
          <a
            href={APPLY_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition-all hover:shadow-xl hover:shadow-violet-500/40 hover:scale-105"
          >
            Apply Now
            <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2 text-zinc-400 hover:bg-white/10 hover:text-white lg:hidden"
            aria-label="Toggle navigation menu"
            aria-controls="mobile-nav"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div id="mobile-nav" className="border-t border-white/10 bg-zinc-950 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${location.pathname === item.to
                  ? 'bg-violet-500/20 text-violet-400'
                  : 'text-zinc-400 hover:bg-white/5 hover:text-white'
                  }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={APPLY_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-3 text-sm font-semibold text-white"
            >
              Apply Now
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
