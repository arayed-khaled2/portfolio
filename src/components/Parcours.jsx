import Section from './Section'
import { colors, mono } from '../theme'

const entries = [
  {
    period: '2025–2028',
    place: 'Epitech Paris',
    role: "Bachelor Technologies de l'Information",
    text: '2e année en cours, orientée cybersécurité.',
  },
  {
    period: 'Août 2026',
    place: 'Waialys',
    role: 'Stage, audit de sécurité',
    text: <>Détail dans la <a href="#stage">section Stage</a>.</>,
  },
  {
    period: 'Juil. 2026',
    place: 'Manpower',
    role: 'Opérateur de production / Manutentionnaire',
    text: 'Missions chez Bardusch et Jeulin : blanchisserie industrielle et installation de mobilier.',
  },
  {
    period: 'Oct. 2025',
    place: 'Carrefour Drive',
    role: 'Préparateur de commandes',
    text: 'Préparation et contrôle des commandes clients, dans le respect strict des délais.',
  },
  {
    period: 'Avr.–mai 2025',
    place: 'DELEEV / La Belle Vie',
    role: 'Préparateur de commandes',
    text: 'Picking, contrôle des références et organisation des commandes pour les livreurs.',
  },
  {
    period: 'Avr. 2023',
    place: 'Tunisair',
    role: 'Stagiaire polyvalent',
    text: 'Accueil clients au SAV, billetterie et saisie comptable.',
  },
]

export default function Parcours() {
  return (
    <Section id="parcours" label="Parcours" title="Formation et expériences">
      <ol>
        {entries.map(e => (
          <li key={e.place} style={{
            borderTop: `1px solid ${colors.border}`, padding: '20px 0',
            display: 'flex', flexWrap: 'wrap', columnGap: '32px', rowGap: '4px',
          }}>
            <p style={{ ...mono, fontSize: '12px', color: colors.muted, flex: '0 0 150px', paddingTop: '3px' }}>{e.period}</p>
            <div style={{ flex: '1 1 380px', minWidth: 0 }}>
              <p>
                <strong style={{ fontWeight: 600 }}>{e.place}</strong>,{' '}
                <span style={{ color: colors.accent, fontWeight: 500 }}>{e.role}</span>
              </p>
              <p style={{ color: colors.muted }}>{e.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
