import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'À propos', href: '#about', num: '01.' },
  { label: 'Projets', href: '#projects', num: '02.' },
  { label: 'Expérience', href: '#experience', num: '03.' },
  { label: 'Contact', href: '#contact', num: '04.' },
]

const SECTIONS = ['home', 'about', 'projects', 'experience', 'contact']

function useActiveSection() {
  const [active, setActive] = useState('home')
  useEffect(() => {
    const observers = []
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setActive(id) },
        { threshold: 0.3 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])
  return active
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const active = useActiveSection()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    const onResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('scroll', onScroll)
    window.addEventListener('resize', onResize)
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onResize) }
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const isActive = (href) => active === href.replace('#', '')

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '70px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 2rem',
      background: scrolled ? 'rgba(255,255,255,0.92)' : '#ffffff',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: '1px solid #f0f0f0',
      boxShadow: scrolled ? '0 1px 12px rgba(0,0,0,0.06)' : 'none',
      transition: 'box-shadow 0.3s',
      zIndex: 1000,
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', zIndex: 1100 }}>
        <span style={{ color: '#9ca3af', fontSize: '0.78rem' }}>khaled.arayed@epitech.eu</span>
        <span style={{ color: '#9ca3af', fontSize: '0.78rem' }}>07 78 43 64 88</span>
      </div>

      {isMobile ? (
        <>
          <button
            onClick={() => setMenuOpen(o => !o)}
            style={{ display: 'flex', flexDirection: 'column', gap: '5px', background: 'none', border: 'none', cursor: 'pointer', zIndex: 1100, padding: '4px' }}
            aria-label="Ouvrir le menu"
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                width: '24px', height: '2px',
                background: menuOpen ? '#FF6B00' : '#111827',
                borderRadius: '2px', transition: 'transform 0.3s, opacity 0.3s, background 0.3s',
                transform: menuOpen && i === 0 ? 'rotate(45deg) translate(5px,5px)' : menuOpen && i === 2 ? 'rotate(-45deg) translate(5px,-5px)' : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
          <div style={{
            position: 'fixed', inset: 0, background: '#ffffff', zIndex: 1050,
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2.5rem',
            opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? 'auto' : 'none', transition: 'opacity 0.3s',
          }}>
            {navLinks.map(l => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                style={{
                  color: isActive(l.href) ? '#FF6B00' : '#111827',
                  textDecoration: 'none', fontSize: '1.4rem', fontWeight: 600,
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#FF6B00'}
                onMouseLeave={e => e.currentTarget.style.color = isActive(l.href) ? '#FF6B00' : '#111827'}
              >
                <span style={{ color: '#FF6B00', fontSize: '0.75rem', fontFamily: 'monospace' }}>{l.num}</span>
                {l.label}
              </a>
            ))}
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="https://github.com/arayed-khaled2" target="_blank" rel="noopener noreferrer"
                style={{
                  background: '#FF6B00', color: '#ffffff',
                  padding: '0.55rem 1.25rem', borderRadius: '100px', fontSize: '0.9rem',
                  fontWeight: 600, textDecoration: 'none',
                  display: 'flex', alignItems: 'center', gap: '6px',
                }}
              >
                <svg height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/khaled-arayed-294a05345" target="_blank" rel="noopener noreferrer"
                style={{
                  background: '#ffffff', color: '#0a66c2',
                  border: '1.5px solid #0a66c2',
                  padding: '0.55rem 1.25rem', borderRadius: '100px', fontSize: '0.9rem',
                  fontWeight: 600, textDecoration: 'none',
                  display: 'flex', alignItems: 'center', gap: '6px',
                }}
              >
                <svg height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
            </div>
          </div>
        </>
      ) : (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          {navLinks.map(l => (
            <a key={l.href} href={l.href}
              style={{
                color: isActive(l.href) ? '#FF6B00' : '#374151',
                textDecoration: 'none', fontSize: '0.88rem', fontWeight: 500,
                padding: '0.4rem 0.9rem', borderRadius: '100px',
                background: isActive(l.href) ? '#fff3ec' : 'transparent',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = '#FF6B00'; e.currentTarget.style.background = '#fff3ec' }}
              onMouseLeave={e => {
                e.currentTarget.style.color = isActive(l.href) ? '#FF6B00' : '#374151'
                e.currentTarget.style.background = isActive(l.href) ? '#fff3ec' : 'transparent'
              }}
            >
              <span style={{ color: '#FF6B00', fontSize: '0.75rem', fontFamily: 'monospace', marginRight: '3px' }}>{l.num}</span>
              {l.label}
            </a>
          ))}
          <a href="https://github.com/arayed-khaled2" target="_blank" rel="noopener noreferrer"
            style={{
              marginLeft: '0.75rem', background: '#FF6B00', color: '#ffffff',
              padding: '0.45rem 1.1rem', borderRadius: '100px', fontSize: '0.85rem',
              fontWeight: 600, textDecoration: 'none', transition: 'background 0.2s',
              display: 'flex', alignItems: 'center', gap: '6px',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#e55f00'}
            onMouseLeave={e => e.currentTarget.style.background = '#FF6B00'}
          >
            <svg height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/khaled-arayed-294a05345" target="_blank" rel="noopener noreferrer"
            style={{
              marginLeft: '0.5rem', background: '#ffffff', color: '#0a66c2',
              border: '1.5px solid #0a66c2',
              padding: '0.45rem 1.1rem', borderRadius: '100px', fontSize: '0.85rem',
              fontWeight: 600, textDecoration: 'none', transition: 'all 0.2s',
              display: 'flex', alignItems: 'center', gap: '6px',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#0a66c2'; e.currentTarget.style.color = '#ffffff' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.color = '#0a66c2' }}
          >
            <svg height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            LinkedIn
          </a>
        </div>
      )}
    </nav>
  )
}
