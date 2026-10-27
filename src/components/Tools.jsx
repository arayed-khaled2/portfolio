import Section from './Section'
import { colors, mono } from '../theme'

const tools = [
  { label: 'Sécurité offensive', value: 'OWASP Top 10 · Pentest web · Burp Suite · DevTools · CTF Boot2Root · Prompt injection' },
  { label: 'Supervision', value: 'Wazuh · Prometheus · Grafana (en cours)' },
  { label: 'Langages', value: 'Python · JavaScript (Node.js) · Java · SQL · Bash · C (notions)' },
  { label: 'Systèmes et outils', value: 'Linux · Git · Docker · GitHub Actions' },
  { label: 'Web et données', value: 'React · Express · REST API · JWT · Pandas · Scikit-learn · Matplotlib · Seaborn' },
]

export default function Tools() {
  return (
    <Section id="outils" label="Outils" title="Ce que j'utilise">
      <dl>
        {tools.map(t => (
          <div key={t.label} style={{
            borderTop: `1px solid ${colors.border}`, padding: '16px 0',
            display: 'flex', flexWrap: 'wrap', columnGap: '32px', rowGap: '4px',
          }}>
            <dt style={{ ...mono, fontWeight: 500, flex: '0 0 200px' }}>{t.label}</dt>
            <dd style={{ ...mono, textTransform: 'none', letterSpacing: 0, fontSize: '14px', color: colors.muted, flex: '1 1 320px', minWidth: 0 }}>{t.value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
