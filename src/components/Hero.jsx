import { useState, useEffect } from 'react'

export default function Hero() {
  const [visible, setVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const [btn1, setBtn1] = useState(false)
  const [btn2, setBtn2] = useState(false)

  useEffect(() => { const t = setTimeout(() => setVisible(true), 80); return () => clearTimeout(t) }, [])
  useEffect(() => {
    const h = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', h); return () => window.removeEventListener('resize', h)
  }, [])

  return (
    <section id="home" style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center',
      padding: isMobile ? '70px 1.5rem 0' : '70px 10% 0',
      opacity: visible ? 1 : 0, transition: 'opacity 0.5s ease',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, #e5e7eb 1px, transparent 1px)',
        backgroundSize: '28px 28px', opacity: 0.6,
      }} />
      <div style={{
        position: 'absolute', top: '20%', right: isMobile ? '-20%' : '5%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,107,0,0.08) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <h1 style={{ fontSize: 'clamp(42px, 8vw, 82px)', fontWeight: 800, lineHeight: 1.05, color: '#111827', marginBottom: '1rem' }}>
          Bonjour, je suis{' '}
          <span style={{ color: '#FF6B00', position: 'relative' }}>
            Khaled
            <span style={{
              position: 'absolute', bottom: '-4px', left: 0, right: 0,
              height: '4px', background: 'linear-gradient(90deg, #FF6B00, #ff9a4d)',
              borderRadius: '2px',
            }} />
          </span>
          .
        </h1>

        <h2 style={{ fontSize: 'clamp(18px, 3vw, 28px)', fontWeight: 500, color: '#6b7280', marginBottom: '1.75rem', lineHeight: 1.4, maxWidth: '620px' }}>
          Je construis des choses pour le web et au-delà.
        </h2>

        <p style={{ color: '#6b7280', maxWidth: '580px', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '2.5rem' }}>
          Étudiant en 1ère année à EPITECH Paris, formé par projets intensifs en développement fullstack, cybersécurité et data science. Expériences professionnelles en environnement exigeant (pédagogie par projet). À l'aise en environnement Linux, Git et Docker. Je recherche un stage pour travailler sur des projets concrets.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="#projects"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: btn1 ? '#e55f00' : '#FF6B00', color: '#ffffff',
              padding: '0.85rem 1.75rem', borderRadius: '100px',
              fontSize: '0.95rem', fontWeight: 600, textDecoration: 'none',
              transition: 'background 0.2s, transform 0.2s',
              transform: btn1 ? 'translateY(-1px)' : 'none',
              boxShadow: btn1 ? '0 6px 20px rgba(255,107,0,0.35)' : '0 2px 10px rgba(255,107,0,0.2)',
            }}
            onMouseEnter={() => setBtn1(true)} onMouseLeave={() => setBtn1(false)}
          >
            Voir mes projets →
          </a>
          <a href={import.meta.env.BASE_URL + 'cv.pdf'} download
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: btn2 ? '#f3f4f6' : '#ffffff', color: '#374151',
              border: '1.5px solid #e5e7eb',
              padding: '0.85rem 1.75rem', borderRadius: '100px',
              fontSize: '0.95rem', fontWeight: 600, textDecoration: 'none',
              transition: 'background 0.2s, transform 0.2s',
              transform: btn2 ? 'translateY(-1px)' : 'none',
            }}
            onMouseEnter={() => setBtn2(true)} onMouseLeave={() => setBtn2(false)}
          >
            ↓ Télécharger mon CV
          </a>
        </div>

        <div style={{ paddingBottom: '4rem' }} />
      </div>
    </section>
  )
}
