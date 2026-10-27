import { useState } from 'react'
import { colors, fonts, mono, container, EMAIL, GITHUB, LINKEDIN, CV_URL } from '../theme'

// Public Formspree endpoint: it is meant to be in the client code, it is not a secret.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xkjjrkqz'

const contactLinks = [
  { label: 'Email', text: EMAIL, href: `mailto:${EMAIL}` },
  { label: 'GitHub', text: 'github.com/arayed-khaled2', href: GITHUB, external: true },
  { label: 'LinkedIn', text: 'Voir le profil', href: LINKEDIN, external: true },
  { label: 'CV', text: 'Télécharger (PDF)', href: CV_URL, download: true },
]

const fieldStyle = {
  width: '100%', background: colors.field, color: colors.darkText,
  border: `1px solid ${colors.fieldBorder}`, borderRadius: '2px',
  padding: '12px 14px', fontSize: '16px',
}

const labelStyle = { ...mono, display: 'block', color: colors.darkMuted, marginBottom: '8px' }

function ContactForm() {
  // idle | sending | success | error
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')
    setErrors([])
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        form.reset()
        setStatus('success')
        return
      }
      const data = await res.json().catch(() => ({}))
      if (Array.isArray(data.errors)) setErrors(data.errors.map(err => err.message))
      setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ flex: '1 1 380px', minWidth: 0 }}>
      <input type="hidden" name="_subject" value="Portfolio : nouveau message" />
      <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="contact-name" style={labelStyle}>Nom</label>
        <input id="contact-name" name="name" type="text" required autoComplete="name" className="field" style={fieldStyle} />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="contact-email" style={labelStyle}>Email</label>
        <input id="contact-email" name="email" type="email" required autoComplete="email" className="field" style={fieldStyle} />
      </div>
      <div style={{ marginBottom: '24px' }}>
        <label htmlFor="contact-message" style={labelStyle}>Message</label>
        <textarea id="contact-message" name="message" required rows={6} className="field" style={{ ...fieldStyle, resize: 'vertical', minHeight: '140px' }} />
      </div>

      <button type="submit" disabled={status === 'sending'} className="btn-light"
        style={{
          background: colors.darkText, color: colors.darkBg, border: 'none', borderRadius: '2px',
          padding: '12px 24px', fontWeight: 500, cursor: status === 'sending' ? 'wait' : 'pointer',
          opacity: status === 'sending' ? 0.75 : 1,
        }}
      >
        {status === 'sending' ? 'Envoi…' : 'Envoyer'}
      </button>

      <div role="status" aria-live="polite" style={{ marginTop: '20px', minHeight: '1.6em' }}>
        {status === 'success' && (
          <p style={{ color: colors.darkText }}>Merci, votre message a bien été envoyé. Je vous réponds rapidement.</p>
        )}
        {status === 'error' && (
          <div style={{ color: colors.darkText, borderLeft: `2px solid ${colors.darkText}`, paddingLeft: '12px' }}>
            <p>
              L'envoi a échoué. Réessayez ou écrivez-moi directement à{' '}
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
            </p>
            {errors.length > 0 && (
              <ul style={{ marginTop: '8px', color: colors.darkMuted }}>
                {errors.map(msg => <li key={msg}>{msg}</li>)}
              </ul>
            )}
          </div>
        )}
      </div>
    </form>
  )
}

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="dark" style={{ background: colors.darkBg, color: colors.darkText }}>
      <div style={{ ...container, paddingTop: '80px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '48px 64px', paddingBottom: '80px' }}>
          <div style={{ flex: '1 1 380px', minWidth: 0 }}>
            <h2 id="contact-title" style={{ fontFamily: fonts.serif, fontWeight: 400, fontSize: 'clamp(30px, 4.5vw, 44px)', lineHeight: 1.15, marginBottom: '20px' }}>
              Un stage de 4 à 6 mois dès avril 2027 ? <span style={{ whiteSpace: 'nowrap' }}>Écrivons-nous.</span>
            </h2>
            <p style={{ color: colors.darkMuted, marginBottom: '32px' }}>Disponible dès avril 2027, en sécurité offensive.</p>
            <ul>
              {contactLinks.map(l => (
                <li key={l.label} style={{
                  borderTop: `1px solid ${colors.darkBorder}`, padding: '12px 0',
                  display: 'flex', flexWrap: 'wrap', columnGap: '24px', rowGap: '2px',
                }}>
                  <span style={{ ...mono, color: colors.darkMuted, flex: '0 0 90px' }}>{l.label}</span>
                  <a href={l.href}
                    {...(l.external && { target: '_blank', rel: 'noopener noreferrer' })}
                    {...(l.download && { download: true })}
                    style={{ minWidth: 0 }}
                  >
                    {l.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <ContactForm />
        </div>
        <footer style={{ borderTop: `1px solid ${colors.darkBorder}`, padding: '24px 0 32px' }}>
          <p style={{ ...mono, fontSize: '12px', color: colors.darkMuted }}>© 2026 Khaled Arayed · Epitech Paris</p>
        </footer>
      </div>
    </section>
  )
}
