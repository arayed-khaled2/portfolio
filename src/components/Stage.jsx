import Section from './Section'
import { colors, fonts, mono } from '../theme'

const blocks = [
  { label: 'Contexte', text: "Analyse fonctionnelle et technique de l'application avant tout test, pour comprendre ce qui devait être protégé." },
  { label: 'Méthode', text: "Tests OWASP en grey box, avec les DevTools du navigateur, sur l'application et son API (Swagger)." },
  { label: 'Livrable', text: 'Rapport de recommandations priorisées, appuyées sur la CNIL.' },
  // TODO (Khaled) : écrire ce bloc, puis le décommenter. La bordure rouge est gérée par `accent`.
  // { label: "Ce que j'en retiens", text: '', accent: true },
]

export default function Stage() {
  return (
    <Section
      id="stage" label="Stage"
      title="Audit de sécurité d'une plateforme SaaS de gestion scolaire"
      subtitle="Waialys · Sousse, Tunisie · août 2026 · 1 mois"
    >
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px' }}>
        {blocks.map(b => (
          <div key={b.label} style={{ flex: '1 1 220px', borderTop: `2px solid ${b.accent ? colors.accent : colors.text}`, paddingTop: '16px' }}>
            <h3 style={{ ...mono, fontWeight: 500, marginBottom: '12px' }}>{b.label}</h3>
            <p style={{ color: colors.muted, fontFamily: fonts.sans }}>{b.text}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
