'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/sales', label: 'Sales' },
  { href: '/services', label: 'Services' },
  { href: '/corporate', label: 'Corporate' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  const openQuote = () => {
    document.dispatchEvent(new CustomEvent('open-quote-modal'))
    setMenuOpen(false)
  }

  // On homepage: transparent until scrolled; on inner pages: always solid
  const solidBg = !isHome || scrolled

  return (
    <>
      <header
        className={`navbar${scrolled ? ' scrolled' : ''}${solidBg ? ' solid' : ' transparent'}`}
        role="banner"
      >
        <div className="container">
          <nav className="navbar-inner" aria-label="Main navigation">
            {/* Logo */}
            <Link href="/" className="navbar-logo" aria-label="Kiwi Tech Computers — Home">
              <div className="navbar-logo-mark" aria-hidden="true">K</div>
              <div className="navbar-logo-text">
                <div className="navbar-logo-name">Kiwi Tech</div>
                <div className="navbar-logo-sub">Computers</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="navbar-nav" role="list">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    role="listitem"
                    className={`nav-link${isActive ? ' active' : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>

            {/* CTA */}
            <button
              className="btn btn-primary navbar-cta"
              onClick={openQuote}
              id="nav-get-quote-btn"
              aria-label="Get a free quote"
            >
              Get a Quote
              <ChevronRight size={16} aria-hidden="true" />
            </button>

            {/* Hamburger */}
            <button
              className="hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer */}
      <nav
        id="mobile-nav"
        className={`mobile-nav${menuOpen ? ' open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <div className="mobile-nav-links">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`mobile-nav-link${pathname === link.href ? ' active' : ''}`}
              aria-current={pathname === link.href ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
          <button className="btn btn-primary mobile-nav-cta" onClick={openQuote} id="mobile-get-quote-btn">
            Get a Free Quote
            <ChevronRight size={16} aria-hidden="true" />
          </button>
        </div>
      </nav>
    </>
  )
}
