import { colors, fonts, container, CV_URL } from '../theme'

const navLinks = [
  { label: 'Stage', href: '#stage' },
  { label: 'Projets', href: '#projets' },
  { label: 'Outils', href: '#outils' },
  { label: 'Parcours', href: '#parcours' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  return (
    <header style={{ borderBottom: `1px solid ${colors.border}` }}>
      <div style={{
        ...container, minHeight: '72px', paddingTop: '16px', paddingBottom: '16px',
        display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px 32px',
      }}>
        <a href="#top" style={{ fontFamily: fonts.serif, fontSize: '24px', fontWeight: 500, textDecoration: 'none' }}>
          Khaled Arayed
        </a>
        <nav aria-label="Navigation principale">
          <ul style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px 24px', fontSize: '15px', fontWeight: 500 }}>
            {navLinks.map(l => (
              <li key={l.href}><a className="nav-link" href={l.href}>{l.label}</a></li>
            ))}
            <li>
              <a href={CV_URL} target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'inline-block', border: `1px solid ${colors.text}`, borderRadius: '2px',
                  padding: '6px 14px', textDecoration: 'none',
                }}
              >
                CV (PDF)
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
