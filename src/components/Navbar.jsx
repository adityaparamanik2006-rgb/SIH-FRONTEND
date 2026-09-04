import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Button from './shared/Button.jsx'

const NAV_LINKS = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Challenges', href: '#challenges' },
  { label: 'Impact', href: '#impact' },
  { label: 'About', href: '#about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] h-[72px] border-b transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm border-slate-200 shadow-sm'
          : 'bg-white border-slate-200'
      }`}
    >
      <nav
        className="mx-auto flex h-full max-w-container items-center justify-between px-6 lg:px-12"
        aria-label="Primary"
      >
        <Link to="/" className="flex flex-col leading-tight">
          <span className="text-lg font-bold text-brand-navy">ChallengeHub</span>
          <span className="hidden text-xs text-slate-500 sm:block">
            Disaster Management Platform
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-base font-medium text-slate-600 transition-colors hover:text-brand-blue"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="text" size="sm" to="/auth">
            Sign In
          </Button>
          <Button variant="primary" size="sm" to="/auth">
            Sign Up
          </Button>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center text-brand-navy md:hidden"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={24} aria-hidden="true" />
        </button>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-[110] bg-white md:hidden" role="dialog" aria-modal="true">
          <div className="flex h-[72px] items-center justify-between px-6 border-b border-slate-200">
            <span className="text-lg font-bold text-brand-navy">ChallengeHub</span>
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center text-brand-navy"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <X size={24} aria-hidden="true" />
            </button>
          </div>
          <ul className="flex flex-col gap-1 px-6 py-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block min-h-[48px] py-3 text-lg font-medium text-slate-700"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 px-6">
            <Button variant="secondary" to="/auth" onClick={() => setMenuOpen(false)} className="w-full">
              Sign In
            </Button>
            <Button variant="primary" to="/auth" onClick={() => setMenuOpen(false)} className="w-full">
              Sign Up
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
