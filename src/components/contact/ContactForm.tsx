'use client'
import { useState } from 'react'
import { ChevronRight, Phone } from 'lucide-react'
import { BUSINESS, WHATSAPP_URL } from '@/lib/constants'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', email: '', subject: 'General Enquiry', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleWhatsApp = () => {
    const msg = `Hi Kiwi Tech!\nName: ${form.name}\nPhone: ${form.phone}\nSubject: ${form.subject}\nMessage: ${form.message}`
    window.open(WHATSAPP_URL(msg), '_blank')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...form, _subject: `Contact Form — ${form.subject}` }),
      })
      setSubmitted(true)
    } catch {
      handleWhatsApp()
    }
  }

  if (submitted) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem 0' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
        <h4 className="heading-h4" style={{ marginBottom: '0.5rem' }}>Message Received!</h4>
        <p className="text-muted" style={{ fontSize: 'var(--body-sm)', marginBottom: '1.5rem' }}>
          Thank you for reaching out. We&apos;ll get back to you within 30 minutes.
        </p>
        <a href={`tel:${BUSINESS.phone}`} className="btn btn-primary btn-full">
          <Phone size={16} aria-hidden="true" /> Call Now: {BUSINESS.phoneDisplay}
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="form-grid" noValidate>
      <div className="form-group">
        <label className="form-label" htmlFor="contact-name">Your Name *</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          className="form-input"
          placeholder="e.g. Ramesh Babu"
          required
          value={form.name}
          onChange={handleChange}
          autoComplete="name"
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="contact-phone">Phone / WhatsApp *</label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          className="form-input"
          placeholder="+91 98765 43210"
          required
          value={form.phone}
          onChange={handleChange}
          autoComplete="tel"
        />
      </div>

      <div className="form-group full">
        <label className="form-label" htmlFor="contact-email">Email Address</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          className="form-input"
          placeholder="name@company.com"
          value={form.email}
          onChange={handleChange}
          autoComplete="email"
        />
      </div>

      <div className="form-group full">
        <label className="form-label" htmlFor="contact-subject">Topic / Requirement</label>
        <select
          id="contact-subject"
          name="subject"
          className="form-select"
          value={form.subject}
          onChange={handleChange}
        >
          <option value="General Enquiry">General Enquiry</option>
          <option value="Laptop Repair">Laptop Repair</option>
          <option value="Desktop / Monitor Service">Desktop / Monitor Service</option>
          <option value="Printer Service">Printer Service</option>
          <option value="CCTV Installation">CCTV Installation</option>
          <option value="Laptop / PC Purchase">Laptop / PC Purchase</option>
          <option value="Corporate AMC Enquiry">Corporate AMC Enquiry</option>
          <option value="Bulk Procurement">Bulk Procurement</option>
        </select>
      </div>

      <div className="form-group full">
        <label className="form-label" htmlFor="contact-message">Message *</label>
        <textarea
          id="contact-message"
          name="message"
          className="form-textarea"
          placeholder="Describe your requirement or device issue..."
          required
          value={form.message}
          onChange={handleChange}
        />
      </div>

      <div className="form-group full" style={{ marginTop: '0.5rem' }}>
        <button type="submit" className="btn btn-primary btn-full btn-lg" id="contact-submit-btn">
          Send Enquiry <ChevronRight size={18} aria-hidden="true" />
        </button>

        <div style={{ textAlign: 'center', margin: '0.5rem 0', color: 'var(--charcoal-400)', fontSize: 'var(--body-xs)' }}>
          — or —
        </div>

        <button
          type="button"
          onClick={handleWhatsApp}
          className="btn btn-full"
          style={{ background: '#25D366', color: 'white', borderColor: '#25D366', justifyContent: 'center' }}
          id="contact-whatsapp-btn"
        >
          Send via WhatsApp
        </button>
      </div>
    </form>
  )
}
