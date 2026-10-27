import { colors, fonts, mono, container } from '../theme'

export default function Section({ id, label, title, subtitle, children }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} style={container}>
      <div style={{
        borderTop: `1px solid ${colors.border}`, padding: '64px 0',
        display: 'flex', flexWrap: 'wrap', columnGap: '32px', rowGap: '16px',
      }}>
        <p style={{ ...mono, color: colors.muted, flex: '0 0 160px', paddingTop: '10px' }}>{label}</p>
        <div style={{ flex: '1 1 560px', minWidth: 0 }}>
          <h2 id={`${id}-title`} style={{ fontFamily: fonts.serif, fontWeight: 400, fontSize: 'clamp(28px, 4vw, 36px)', lineHeight: 1.2, marginBottom: subtitle ? '12px' : '40px' }}>
            {title}
          </h2>
          {subtitle && <p style={{ ...mono, color: colors.muted, marginBottom: '40px' }}>{subtitle}</p>}
          {children}
        </div>
      </div>
    </section>
  )
}
