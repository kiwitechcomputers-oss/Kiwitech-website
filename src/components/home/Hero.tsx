'use client'
import { Phone, ChevronRight, Star } from 'lucide-react'
import { BUSINESS, WHATSAPP_URL, DEFAULT_WA_MESSAGE } from '@/lib/constants'

export default function Hero() {
  const openQuote = () => document.dispatchEvent(new CustomEvent('open-quote-modal'))

  return (
    <section className="hero" id="hero" aria-labelledby="hero-heading">
      <div className="container">
        <div className="hero-grid">
          {/* Left — Copy */}
          <div>
            <h1 className="hero-heading" id="hero-heading">
              Hyderabad&apos;s Premier<br />
              <span>IT Sales, Service</span><br />
              &amp; Corporate Partner
            </h1>

            <p className="hero-subtext">
              Premium laptops, workstations, CCTV security, printers &amp; computer accessories.
              Fast repairs and tailored corporate AMC solutions for Medipally &amp; Hyderabad.
            </p>

            <div className="hero-ctas">
              <button
                className="btn btn-teal btn-lg"
                onClick={openQuote}
                id="hero-quote-btn"
                aria-label="Get a free quote"
              >
                Get a Free Quote
                <ChevronRight size={20} aria-hidden="true" />
              </button>
              <a
                href={`tel:${BUSINESS.phone}`}
                className="btn btn-outline-white btn-lg"
                id="hero-call-btn"
                aria-label={`Call us: ${BUSINESS.phoneDisplay}`}
              >
                <Phone size={18} aria-hidden="true" />
                {BUSINESS.phoneDisplay}
              </a>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginTop: '3rem', paddingTop: '2.25rem', borderTop: '1px solid rgba(255,255,255,0.12)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '12px', padding: '0.625rem 1rem' }}>
                <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--gold)', lineHeight: 1 }}>5.0</span>
                <div style={{ display: 'flex', gap: '2px', color: 'var(--gold)' }} aria-hidden="true">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" />
                  ))}
                </div>
              </div>
              <div style={{ fontSize: 'var(--body-sm)', color: 'rgba(255,255,255,0.8)' }}>
                <strong style={{ color: 'var(--white)', display: 'block', fontSize: '1rem' }}>5.0★ Google Reviews</strong>
                Trusted IT partner on Google Maps
              </div>
            </div>
          </div>

          {/* Right — Visual card */}
          <div className="hero-visual" aria-hidden="true">
            <div className="hero-card-box">
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--teal)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
                Core Capabilities
              </div>

              {[
                { icon: '💻', label: 'Laptop Repair & Sales', tag: 'High Speed' },
                { icon: '🖥️', label: 'Desktop & Custom Rig Build', tag: 'Expert' },
                { icon: '🖨️', label: 'Printer Service & Maintenance', tag: 'Same Day' },
                { icon: '📷', label: 'CCTV Surveillance Systems', tag: 'HD / 4K' },
                { icon: '🏢', label: 'Corporate AMC Contracts', tag: 'SLA Support' },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.875rem 0',
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                    fontSize: '0.95rem',
                    color: 'rgba(255,255,255,0.9)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span>{item.icon}</span>
                    <span style={{ fontWeight: 600 }}>{item.label}</span>
                  </div>
                  <span className="badge badge-kiwi">{item.tag}</span>
                </div>
              ))}

              <a
                href={WHATSAPP_URL(DEFAULT_WA_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-full"
                style={{ marginTop: '1.75rem' }}
              >
                <svg viewBox="0 0 24 24" fill="white" width="20" height="20" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Instant WhatsApp Enquiry
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
