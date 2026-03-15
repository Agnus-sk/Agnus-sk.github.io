import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'

const links = [
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Education',  href: '#education' },
]

export default function Navbar() {
  const [stuck, setStuck]     = useState(false)
  const [open, setOpen]       = useState(false)
  const { theme, toggle }     = useTheme()

  useEffect(() => {
    const fn = () => setStuck(window.scrollY > 32)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const go = (href) => {
    setOpen(false)
    setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }), 60)
  }

  return (
    <>
      <nav className={`nav${stuck ? ' stuck' : ''}`}>
        <div className="nav-inner">
          <a href="#hero" className="nav-logo" onClick={e => { e.preventDefault(); go('#hero') }}>
            agnus<span className="nav-logo-dot" />.sk
          </a>

          <ul className="nav-links">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} onClick={e => { e.preventDefault(); go(l.href) }}>{l.label}</a>
              </li>
            ))}
            <li>
              <a href="mailto:skagnussk@gmail.com" className="nav-hire">Hire Me</a>
            </li>
          </ul>

          <div className="nav-right">
            <button className="tgl" onClick={toggle} aria-label="Toggle theme">
              <span className="tgl-track">
                <span className="tgl-moon">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                  </svg>
                </span>
                <span className="tgl-thumb" />
                <span className="tgl-sun">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <circle cx="12" cy="12" r="5"/>
                    <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                    <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                  </svg>
                </span>
              </span>
            </button>

            <button className={`hbg${open ? ' open' : ''}`} onClick={() => setOpen(v => !v)} aria-label="Menu">
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`mob-menu${open ? ' open' : ''}`}>
        {links.map((l, i) => (
          <a key={l.href} href={l.href}
            style={{ animationDelay: `${i * .06}s` }}
            onClick={e => { e.preventDefault(); go(l.href) }}>
            {l.label}
          </a>
        ))}
        <a href="mailto:skagnussk@gmail.com" className="mob-cta" onClick={() => setOpen(false)}>
          Hire Me
        </a>
      </div>
    </>
  )
}
