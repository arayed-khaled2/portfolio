import { useState, useEffect } from 'react'
import { SectionTitle } from './About'

function InputField({ label, type = 'text', placeholder, value, onChange, multiline }) {
  const [focused, setFocused] = useState(false)
  const base = {
    width: '100%', padding: '0.75rem 1rem',
    border: `1px solid ${focused ? '#FF6B00' : '#e5e7eb'}`,
    borderRadius: '8px', fontSize: '0.9rem',
    color: '#111827', background: '#ffffff',
    outline: 'none', transition: 'border-color 0.2s',
    fontFamily: 'Inter, sans-serif', resize: 'vertical',
  }
  return (
    <div style={{ marginBottom: '1.25rem' }}>
      <label style={{ display: 'block', fontSize: '0.85rem', color: '#374151', fontWeight: 500, marginBottom: '6px' }}>
        {label} <span style={{ color: '#FF6B00' }}>*</span>
      </label>
      {multiline ? (
        <textarea
          rows={7} placeholder={placeholder} value={value} onChange={onChange}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
          style={{ ...base, minHeight: '160px' }}
        />
      ) : (
        <input
          type={type} placeholder={placeholder} value={value} onChange={onChange}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
          style={base}
        />
      )}
    </div>
  )
}

export default function Contact() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const [btnHov, setBtnHov] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const h = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', h); return () => window.removeEventListener('resize', h)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, message } = form
    if (!name || !email || !message) return
    window.location.href = `mailto:khaled.arayed@epitech.eu?subject=Contact de ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0A— ${encodeURIComponent(name)}%0A${encodeURIComponent(email)}`
    setSent(true)
  }

  return (
    <section id="contact" style={{ padding: isMobile ? '5rem 1.5rem' : '7rem 10%', background: '#ffffff' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>
        <SectionTitle number="04. Contact" title="Entrons en contact." isMobile={isMobile} />

        <form onSubmit={handleSubmit}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '2rem', alignItems: 'start' }}>
            <div>
              <InputField
                label="Nom et prénom" placeholder="Nom et Prénom"
                value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              />
              <InputField
                label="Email" type="email" placeholder="Votre adresse email"
                value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
              />
            </div>

            <div>
              <InputField
                label="Message" placeholder="Votre message" multiline
                value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
              />
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: isMobile ? 'center' : 'flex-end', marginTop: '0.5rem' }}>
            {sent ? (
              <span style={{ color: '#FF6B00', fontWeight: 600, fontSize: '0.95rem' }}>Message envoyé !</span>
            ) : (
              <button
                type="submit"
                style={{
                  background: btnHov ? '#e55f00' : '#FF6B00', color: '#ffffff',
                  border: 'none', padding: '0.75rem 2.5rem', borderRadius: '100px',
                  fontSize: '0.9rem', fontWeight: 700, cursor: 'pointer', letterSpacing: '0.5px',
                  transition: 'background 0.2s, transform 0.2s',
                  transform: btnHov ? 'translateY(-2px)' : 'none',
                }}
                onMouseEnter={() => setBtnHov(true)} onMouseLeave={() => setBtnHov(false)}
              >
                ENVOYER
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
