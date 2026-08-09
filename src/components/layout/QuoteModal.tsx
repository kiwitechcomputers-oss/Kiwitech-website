'use client'
import { useState, useEffect, useCallback } from 'react'
import { X, ChevronRight, Phone } from 'lucide-react'
import { BUSINESS, WHATSAPP_URL } from '@/lib/constants'

const services = [
  'Laptop Repair / Service',
  'Desktop / Monitor Repair',
  'Printer Repair',
  'CCTV Installation',
  'Laptop / Desktop Purchase',
  'Corporate AMC',
  'Bulk Procurement',
  'Other / General Enquiry',
]

export default function QuoteModal() {
  const [open, setOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' })

  const openModal = useCallback(() => setOpen(true), [])
  const closeModal = useCallback(() => { setOpen(false); setSubmitted(false) }, [])

  useEffect(() => {
    document.addEventListener('open-quote-modal', openModal)
    return () => document.removeEventListener('open-quote-modal', openModal)
  }, [openModal])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleWhatsApp = () => {
    const msg = `Hi Kiwi Tech! I'd like a quote.\nName: ${form.name}\nPhone: ${form.phone}\nService: ${form.service}\n${form.message ? 'Details: ' + form.message : ''}`
    window.open(WHATSAPP_URL(msg), '_blank')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Replace with your Formspree endpoint
    try {
      await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...form, _subject: 'New Quote Request — Kiwi Tech Computers' }),
      })
      setSubmitted(true)
    } catch {
      handleWhatsApp()
    }
  }

  return (
    <div
      className={`modal-overlay${open ? ' open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Get a Free Quote"
      onClick={(e) => { if (e.target === e.currentTarget) closeModal() }}
    >
      <div className="modal-panel">
        <div className="modal-header">
          <div>
            <h3 className="heading-h4">Get a Free Quote</h3>
            <p style={{ fontSize: 'var(--body-xs)', color: 'var(--charcoal-400)', marginTop: '2px' }}>
              We&apos;ll respond within 30 minutes
            </p>
          </div>
          <button className="modal-close" onClick={closeModal} aria-label="Close modal" id="modal-close-btn">
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        <div className="modal-body">
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
              <h4 className="heading-h4" style={{ marginBottom: '0.5rem' }}>Quote Sent!</h4>
              <p className="text-muted" style={{ fontSize: 'var(--body-sm)', marginBottom: '1.5rem' }}>
                We&apos;ll get back to you within 30 minutes. You can also reach us instantly on WhatsApp.
              </p>
              <a href={`tel:${BUSINESS.phone}`} className="btn btn-primary btn-full">
                <Phone size={16} aria-hidden="true" /> Call Now: {BUSINESS.phoneDisplay}
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="modal-name">Your Name *</label>
                  <input
                    id="modal-name"
                    name="name"
                    type="text"
                    className="form-input"
                    placeholder="e.g. Suresh Kumar"
                    required
                    value={form.name}
                    onChange={handleChange}
                    autoComplete="name"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="modal-phone">Phone / WhatsApp *</label>
                  <input
                    id="modal-phone"
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

                <div className="form-group">
                  <label className="form-label" htmlFor="modal-service">Service Required *</label>
                  <select
                    id="modal-service"
                    name="service"
                    className="form-select"
                    required
                    value={form.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service...</option>
                    {services.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="modal-message">Additional Details</label>
                  <textarea
                    id="modal-message"
                    name="message"
                    className="form-textarea"
                    placeholder="Briefly describe your issue or requirement..."
                    value={form.message}
                    onChange={handleChange}
                    style={{ minHeight: '90px' }}
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-full btn-lg" id="modal-submit-btn">
                  Send Quote Request <ChevronRight size={18} aria-hidden="true" />
                </button>

                <div style={{ textAlign: 'center', margin: '0.25rem 0', color: 'var(--charcoal-400)', fontSize: 'var(--body-xs)' }}>
                  — or —
                </div>

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="btn btn-full"
                  style={{ background: '#25D366', color: 'white', borderColor: '#25D366', justifyContent: 'center' }}
                  id="modal-whatsapp-btn"
                >
                  <svg viewBox="0 0 24 24" fill="white" width="18" height="18" style={{ flexShrink: 0 }} aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Send via WhatsApp Instead
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
