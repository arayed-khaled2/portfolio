import { useState, useEffect } from 'react'

const techLogos = [
  { name: 'HTML5',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Python',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Docker',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Git',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MySQL',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Pandas',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
  { name: 'Linux',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
]

function LogoCard({ tech }) {
  const [hov, setHov] = useState(false)
  return (
    <div
      style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        gap: '0.5rem', padding: '0.85rem 0.5rem',
        background: '#ffffff', border: `1px solid ${hov ? '#ffd4b3' : '#f0f0f0'}`,
        borderRadius: '12px', transition: 'all 0.2s', cursor: 'default',
        boxShadow: hov ? '0 4px 16px rgba(255,107,0,0.1)' : 'none',
      }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
    >
      <img src={tech.icon} alt={tech.name} style={{ width: '36px', height: '36px', objectFit: 'contain' }} />
      <span style={{ fontSize: '0.7rem', color: '#374151', fontWeight: 500, fontFamily: 'monospace', textAlign: 'center' }}>{tech.name}</span>
    </div>
  )
}

export function SectionTitle({ number, title, isMobile }) {
  return (
    <div style={{ marginBottom: '3rem' }}>
      <span style={{ color: '#FF6B00', fontFamily: 'monospace', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '1px', display: 'block', marginBottom: '0.5rem' }}>
        {number}
      </span>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <h2 style={{ color: '#111827', fontSize: isMobile ? '1.7rem' : '2.2rem', fontWeight: 800, whiteSpace: 'nowrap' }}>
          {title}
        </h2>
        <div style={{ flex: 1, minWidth: '40px', height: '2px', background: '#f0f0f0', borderRadius: '2px' }} />
      </div>
    </div>
  )
}

export default function About() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  useEffect(() => {
    const h = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', h); return () => window.removeEventListener('resize', h)
  }, [])

  return (
    <section id="about" style={{ padding: isMobile ? '5rem 1.5rem' : '7rem 10%', background: '#fafafa' }}>
      <SectionTitle number="01. À propos" title="Qui je suis." isMobile={isMobile} />

      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '3fr 2fr', gap: '4rem', alignItems: 'start' }}>
        <div>
          <p style={{ color: '#6b7280', lineHeight: 1.75, marginBottom: '1rem', fontSize: '1rem' }}>
            Salut ! Je suis Khaled, étudiant en première année à EPITECH Paris. Je suis passionné par la construction de projets concrets qui ont un vrai impact, que ce soit du développement web fullstack, de l'analyse de données ou de la cybersécurité.
          </p>
          <p style={{ color: '#6b7280', lineHeight: 1.75, marginBottom: '2rem', fontSize: '1rem' }}>
            Cette année j'ai réalisé 7 projets dans des domaines variés : une plateforme d'agrégation d'offres d'emploi fullstack, une application de rencontre basée sur les idées, un pentest complet sur OWASP Juice Shop, la prédiction des retards SNCF avec du machine learning, et bien d'autres. J'aime travailler en équipe et j'apprécie autant l'aspect technique que la vision produit derrière ce qu'on construit.
          </p>

          <p style={{ color: '#374151', fontWeight: 600, marginBottom: '1rem', fontSize: '0.95rem' }}>
            Technologies utilisées
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.6rem' }}>
            {techLogos.map(tech => <LogoCard key={tech.name} tech={tech} />)}
          </div>
        </div>

        <div>
          <div style={{
            width: '100%', aspectRatio: '1', position: 'relative',
            background: '#fff3ec', borderRadius: '16px',
            border: '2px dashed #ffd4b3', overflow: 'hidden',
          }}>
            <img
              src="/photo.png"
              alt="Khaled Arayed"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '14px', display: 'block' }}
              onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
            />
            <div style={{
              display: 'none', position: 'absolute', inset: 0,
              alignItems: 'center', justifyContent: 'center',
              color: '#FF6B00', fontSize: '0.85rem', fontWeight: 500,
            }}>
              Photo à venir
            </div>
          </div>

          <div style={{
            marginTop: '1.5rem', background: '#ffffff', border: '1px solid #f0f0f0',
            borderRadius: '12px', padding: '1.25rem', display: 'flex', gap: '1rem', alignItems: 'center',
          }}>
            <div style={{ width: '40px', height: '40px', background: '#fff3ec', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#111827' }}>Epitech Paris</div>
              <div style={{ color: '#9ca3af', fontSize: '0.78rem' }}>Bachelor Informatique — 2025–2028</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
