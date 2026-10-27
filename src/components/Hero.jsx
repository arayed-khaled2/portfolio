import { colors, fonts, mono, container, CV_URL } from '../theme'

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" style={container}>
      <div style={{
        padding: '80px 0', display: 'flex', flexWrap: 'wrap', alignItems: 'center',
        justifyContent: 'space-between', gap: '48px',
      }}>
        <div style={{ flex: '1 1 480px', minWidth: 0, maxWidth: '640px' }}>
          <p style={{ ...mono, color: colors.accent, marginBottom: '24px' }}>
            Candidature, stage de 4 à 6 mois, dès avril 2027
          </p>
          <h1 id="hero-title" style={{ fontFamily: fonts.serif, fontWeight: 400, fontSize: 'clamp(34px, 5vw, 52px)', lineHeight: 1.12, marginBottom: '24px' }}>
            Étudiant en cybersécurité. Je teste ce que je construis.
          </h1>
          <p style={{ color: colors.muted, fontSize: '18px', marginBottom: '40px' }}>
            Epitech Paris, 2e année. Pentest web, CTF et sécurité des LLM.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '16px 28px' }}>
            <a href={CV_URL} download className="btn-primary"
              style={{
                display: 'inline-block', background: colors.text, color: colors.bg,
                borderRadius: '2px', padding: '12px 20px', fontWeight: 500, textDecoration: 'none',
              }}
            >
              Télécharger mon CV (PDF)
            </a>
            <a href="#projets" style={{ fontWeight: 500 }}>Voir les projets →</a>
          </div>
        </div>

        <img
          src={import.meta.env.BASE_URL + 'photo.png'}
          alt="Portrait de Khaled Arayed"
          width="320" height="400"
          style={{ flex: '0 1 320px', width: '320px', aspectRatio: '4 / 5', height: 'auto', objectFit: 'cover', objectPosition: 'center top' }}
        />
      </div>
    </section>
  )
}
