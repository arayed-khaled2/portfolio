import { useState, useEffect } from 'react'
import { SectionTitle } from './About'

const timelineItems = [
  { num: '01', title: 'Développement Fullstack', description: "Développement d'applications web fullstack (HTML, CSS, JavaScript, React, Node.js, Express, MySQL), conception d'APIs REST avec authentification JWT et hachage bcrypt, containerisation via Docker Compose." },
  { num: '02', title: 'Data Science & ML', description: "Exploration et nettoyage de données avec Pandas, construction de modèles de régression prédictifs avec Scikit-learn, visualisation avec Matplotlib et Seaborn, création de tableaux de bord interactifs avec Streamlit." },
  { num: '03', title: 'Cybersécurité', description: "Pratique du hacking éthique sur OWASP Juice Shop (Burp Suite) : SQL Injection, XSS, Broken Authentication. Documentation des vecteurs d'attaque et stratégies de remédiation." },
  { num: '04', title: 'Travail en équipe', description: "Travail en équipes de 4 sur plusieurs projets. Gestion de version avec Git, résolution de conflits et organisation des tâches avec Trello." },
  { num: '05', title: 'Vision Produit', description: "Conception de Cupidly from scratch : recherche UX, personas, wireframes Figma, pitch deck et définition du MVP." },
]

const techSkills = [
  { label: 'Langages', value: 'Python · JavaScript (Node.js) · SQL · Bash · C (notions)' },
  { label: 'Web & API', value: 'HTML5 · CSS3 · Express · REST API · JWT · JSON' },
  { label: 'Cybersécurité', value: 'OWASP Top 10 · SQL Injection · XSS · Burp Suite' },
  { label: 'DevOps & Outils', value: 'Docker · Docker Compose · Git / GitHub · Linux Ubuntu' },
  { label: 'Data & IA', value: 'Pandas · scikit-learn · Jupyter · Streamlit · Matplotlib' },
]

const workItems = [
  {
    title: 'Carrefour Drive',
    role: 'Préparateur de commandes',
    period: 'oct. 2025',
    description: "Préparation et contrôle des commandes clients en rythme soutenu, gestion des substitutions et remise des commandes dans le respect strict des délais.",
  },
  {
    title: 'DELEEV / La Belle Vie',
    role: 'Préparateur de commandes',
    period: 'avr.–mai 2025',
    description: "Picking complet des produits, contrôle des références et organisation des commandes pour les livreurs, avec une bonne maîtrise des outils logistiques.",
  },
  {
    title: 'Tunisair',
    role: 'Stagiaire polyvalent',
    period: 'avr. 2023',
    description: "Accueil et assistance clients au SAV, gestion de la billetterie et saisie comptable, développant ainsi polyvalence, sens du service et organisation.",
  },
]

function WorkCard({ item }) {
  const [hov, setHov] = useState(false)
  return (
    <div
      style={{
        background: hov ? '#fff3ec' : '#ffffff', border: `1px solid ${hov ? '#ffd4b3' : '#f0f0f0'}`,
        borderRadius: '12px', padding: '1.25rem',
        transition: 'all 0.2s', cursor: 'default',
      }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.3rem', gap: '1rem', flexWrap: 'wrap' }}>
        <h4 style={{ color: '#111827', fontSize: '0.9rem', fontWeight: 700 }}>{item.title}</h4>
        <span style={{ color: '#9ca3af', fontSize: '0.72rem', fontFamily: 'monospace', whiteSpace: 'nowrap' }}>{item.period}</span>
      </div>
      <p style={{ color: '#FF6B00', fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.5rem' }}>{item.role}</p>
      <p style={{ color: '#6b7280', fontSize: '0.82rem', lineHeight: 1.6 }}>{item.description}</p>
    </div>
  )
}

export default function Experience() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  useEffect(() => {
    const h = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', h); return () => window.removeEventListener('resize', h)
  }, [])

  return (
    <section id="experience" style={{ padding: isMobile ? '5rem 1.5rem' : '7rem 10%', background: '#fafafa' }}>
      <SectionTitle number="03. Expérience" title="Ce que j'ai appris." isMobile={isMobile} />

      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
        {/* Left column: timeline + tech skills */}
        <div>
          <p style={{ color: '#374151', fontWeight: 700, fontSize: '1rem', marginBottom: '2rem' }}>Cette année à Epitech</p>
          {timelineItems.map((item, i) => (
            <div key={item.title} style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                <div style={{
                  width: '38px', height: '38px', borderRadius: '10px',
                  background: '#fff3ec', border: '1.5px solid #ffd4b3',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <span style={{ color: '#FF6B00', fontFamily: 'monospace', fontSize: '0.7rem', fontWeight: 700 }}>{item.num}</span>
                </div>
                {i < timelineItems.length - 1 && (
                  <div style={{ width: '2px', flex: 1, minHeight: '32px', background: '#f0f0f0', margin: '6px 0' }} />
                )}
              </div>
              <div style={{ paddingTop: '6px' }}>
                <h4 style={{ color: '#111827', fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.35rem' }}>{item.title}</h4>
                <p style={{ color: '#6b7280', fontSize: '0.85rem', lineHeight: 1.65, marginBottom: i < timelineItems.length - 1 ? '1.25rem' : '0' }}>{item.description}</p>
              </div>
            </div>
          ))}

          {/* Technical skills table */}
          <div style={{ marginTop: '2.5rem', background: '#ffffff', border: '1px solid #f0f0f0', borderRadius: '12px', overflow: 'hidden' }}>
            <div style={{ padding: '1rem 1.25rem', borderBottom: '1px solid #f0f0f0' }}>
              <p style={{ color: '#374151', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Compétences techniques</p>
            </div>
            {techSkills.map((s, i) => (
              <div key={s.label} style={{
                display: 'flex', gap: '1rem', padding: '0.75rem 1.25rem',
                borderBottom: i < techSkills.length - 1 ? '1px solid #f9fafb' : 'none',
                alignItems: 'baseline',
              }}>
                <span style={{ color: '#FF6B00', fontWeight: 700, fontSize: '0.78rem', minWidth: '110px', flexShrink: 0 }}>{s.label}</span>
                <span style={{ color: '#6b7280', fontSize: '0.8rem', lineHeight: 1.5 }}>{s.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right column: work experience */}
        <div>
          <p style={{ color: '#374151', fontWeight: 700, fontSize: '1rem', marginBottom: '2rem' }}>Expérience professionnelle</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {workItems.map(item => <WorkCard key={item.title} item={item} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
