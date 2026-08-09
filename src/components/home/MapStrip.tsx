import Link from 'next/link'
import { Phone, MapPin, Clock } from 'lucide-react'
import { BUSINESS } from '@/lib/constants'

export default function MapStrip() {
  return (
    <div style={{ background: 'var(--offwhite)', marginTop: '3rem' }}>
      {/* Map embed */}
      <div style={{ width: '100%', height: 360, position: 'relative', overflow: 'hidden' }}>
        <iframe
          src={BUSINESS.googleMapsEmbed}
          width="100%"
          height="360"
          style={{ border: 0, display: 'block', filter: 'grayscale(20%) contrast(1.05)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Kiwi Tech Computers location on Google Maps"
          aria-label="Google Maps showing Kiwi Tech Computers store location in Medipally, Hyderabad"
        />
      </div>

      {/* Info strip below map */}
      <div style={{ background: 'var(--navy)', padding: '1.75rem 0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.5rem',
              alignItems: 'center',
            }}
          >
            <div style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start' }}>
              <div style={{ color: 'var(--teal)', flexShrink: 0, marginTop: 2 }}>
                <MapPin size={20} aria-hidden="true" />
              </div>
              <div>
                <div style={{ fontSize: 'var(--body-xs)', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.25rem' }}>
                  Address
                </div>
                <div style={{ fontSize: 'var(--body-sm)', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>
                  {BUSINESS.address.full}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start' }}>
              <div style={{ color: 'var(--teal)', flexShrink: 0, marginTop: 2 }}>
                <Clock size={20} aria-hidden="true" />
              </div>
              <div>
                <div style={{ fontSize: 'var(--body-xs)', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.25rem' }}>
                  Business Hours
                </div>
                <div style={{ fontSize: 'var(--body-sm)', color: 'rgba(255,255,255,0.85)' }}>
                  Mon – Sun: 9:00 AM – 9:30 PM
                </div>
                <div style={{ fontSize: 'var(--body-xs)', color: 'var(--kiwi)', marginTop: '0.25rem' }}>
                  Open 7 days a week
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start' }}>
              <div style={{ color: 'var(--teal)', flexShrink: 0, marginTop: 2 }}>
                <Phone size={20} aria-hidden="true" />
              </div>
              <div>
                <div style={{ fontSize: 'var(--body-xs)', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.25rem' }}>
                  Call / WhatsApp
                </div>
                <a
                  href={`tel:${BUSINESS.phone}`}
                  style={{ fontSize: 'var(--body-sm)', color: 'var(--white)', fontWeight: 600 }}
                  aria-label={`Call ${BUSINESS.phoneDisplay}`}
                >
                  {BUSINESS.phoneDisplay}
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap' }}>
              <a
                href={BUSINESS.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-teal"
                id="map-directions-btn"
              >
                <MapPin size={16} aria-hidden="true" />
                Get Directions
              </a>
              <Link href="/contact" className="btn btn-outline-white" id="map-contact-btn">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
