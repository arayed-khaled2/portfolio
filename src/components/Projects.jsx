import ReactMarkdown from 'react-markdown'
import Section from './Section'
import projects from '../data/projects'
import { colors, fonts, mono } from '../theme'

// Groups projects by `year`, keeping the order in which years first appear.
function groupByYear(list) {
  const groups = new Map()
  list.forEach(p => {
    if (!groups.has(p.year)) groups.set(p.year, [])
    groups.get(p.year).push(p)
  })
  return [...groups.entries()]
}

function ProjectRow({ project }) {
  return (
    <article style={{
      borderTop: `1px solid ${colors.border}`, padding: '28px 0',
      display: 'flex', flexWrap: 'wrap', columnGap: '32px', rowGap: '8px',
    }}>
      <p style={{ ...mono, fontSize: '12px', color: colors.muted, flex: '0 0 150px', paddingTop: '8px' }}>{project.period}</p>
      <div style={{ flex: '1 1 380px', minWidth: 0 }}>
        <h4 style={{ fontFamily: fonts.serif, fontWeight: 400, fontSize: '26px', lineHeight: 1.25, marginBottom: '10px' }}>
          {project.title}
        </h4>
        <div style={{ color: colors.muted, marginBottom: '14px' }}>
          <ReactMarkdown>{project.description}</ReactMarkdown>
        </div>
        <ul aria-label="Technologies" style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 16px', ...mono, fontSize: '12px', color: colors.muted }}>
          {project.tech.map(t => <li key={t}>{t}</li>)}
        </ul>
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            aria-label={`Code de ${project.title} sur GitHub (nouvel onglet)`}
            style={{ display: 'inline-block', marginTop: '14px', color: colors.accent, fontWeight: 500 }}
          >
            Code sur GitHub ↗
          </a>
        )}
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <Section id="projets" label="Projets" title="Du plus récent au plus ancien">
      {groupByYear(projects).map(([year, items]) => (
        <div key={year} style={{ marginBottom: '48px' }}>
          <h3 style={{ ...mono, fontWeight: 500, marginBottom: '16px' }}>{year}</h3>
          {items.map(p => <ProjectRow key={p.id} project={p} />)}
        </div>
      ))}
    </Section>
  )
}
