import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { SectionTitle } from './About'
import projects from '../data/projects'


function ProjectCard({ project }) {
  const [ghHov, setGhHov] = useState(false)
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      style={{
        background: '#ffffff', border: '1px solid #f0f0f0', borderRadius: '16px',
        padding: '1.75rem', transition: 'all 0.25s',
        boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
      }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.08)'; e.currentTarget.style.borderColor = '#ffd4b3' }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04)'; e.currentTarget.style.borderColor = '#f0f0f0' }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1rem', gap: '1rem' }}>
        <div>
          <h3 style={{ color: '#111827', fontSize: '1.05rem', fontWeight: 700 }}>{project.title}</h3>
        </div>
        <a href={project.github} target="_blank" rel="noopener noreferrer"
          style={{ color: ghHov ? '#FF6B00' : '#9ca3af', transition: 'color 0.2s', display: 'flex', alignItems: 'center', flexShrink: 0 }}
          onMouseEnter={() => setGhHov(true)} onMouseLeave={() => setGhHov(false)}
          aria-label="GitHub"
        >
          <svg height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
        </a>
      </div>

      <div style={{
        color: '#6b7280', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '0.5rem',
        overflow: 'hidden', maxHeight: expanded ? '500px' : '3.6em',
        transition: 'max-height 0.3s ease', position: 'relative',
      }}>
        <ReactMarkdown>{project.description}</ReactMarkdown>
        {!expanded && (
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1.5em', background: 'linear-gradient(transparent, #ffffff)' }} />
        )}
      </div>
      <button onClick={() => setExpanded(e => !e)}
        style={{ background: 'none', border: 'none', color: '#FF6B00', fontSize: '0.78rem', cursor: 'pointer', fontWeight: 600, padding: 0, marginBottom: '1.25rem' }}>
        {expanded ? '↑ Réduire' : '↓ Lire plus'}
      </button>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {project.tech.map(t => (
          <span key={t} style={{
            background: '#f9fafb', border: '1px solid #f0f0f0',
            color: '#374151', fontSize: '0.72rem', fontWeight: 500,
            padding: '3px 10px', borderRadius: '100px', fontFamily: 'monospace',
          }}>{t}</span>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  useEffect(() => {
    const h = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', h); return () => window.removeEventListener('resize', h)
  }, [])

  return (
    <section id="projects" style={{ padding: isMobile ? '5rem 1.5rem' : '7rem 10%', background: '#ffffff' }}>
      <SectionTitle number="02. Projets" title="Projets réalisés." isMobile={isMobile} />
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: '1.25rem' }}>
        {projects.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    </section>
  )
}
