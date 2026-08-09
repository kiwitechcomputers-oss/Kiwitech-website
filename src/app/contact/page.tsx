import type { Metadata } from 'next'
import ContactForm from '@/components/contact/ContactForm'
import ScrollReveal from '@/components/shared/ScrollReveal'
import { BUSINESS } from '@/lib/constants'
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us — Location, Phone, Hours & Enquiry',
  description:
    'Contact Kiwi Technologies in Medipally, Hyderabad. Phone: 06303 547474, Email: kiwitechnologies47@gmail.com. Mon–Sun 9:00 AM – 9:30 PM.',
  alternates: { canonical: `${BUSINESS.domain}/contact` },
}

export default function ContactPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="contact-heading">
        <div className="container">
          <ScrollReveal>
            <span className="heading-eyebrow page-hero-eyebrow">Contact Us</span>
            <h1 id="contact-heading">Get in Touch with Kiwi Technologies</h1>
            <p>
              Have a question, need a repair estimate, or looking for corporate AMC details?
              Call us, send a WhatsApp message, or drop by our store.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section section--white" id="contact-details">
        <div className="container">
          <div className="contact-grid">
            {/* Info Card */}
            <ScrollReveal>
              <div className="contact-info-card">
                <h3>Store &amp; Office Information</h3>

                <div className="contact-info-item">
                  <div className="contact-info-icon"><MapPin size={20} aria-hidden="true" /></div>
                  <div>
                    <div className="contact-info-label">Address &amp; Location</div>
                    <div className="contact-info-value">{BUSINESS.address.full}</div>
                    <a
                      href={BUSINESS.googleMapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-map-button"
                      id="contact-page-gmaps-btn"
                    >
                      <MapPin size={16} aria-hidden="true" />
                      <span>Open Location in Google Maps</span>
                      <ExternalLink size={14} aria-hidden="true" />
                    </a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon"><Phone size={20} aria-hidden="true" /></div>
                  <div>
                    <div className="contact-info-label">Call / WhatsApp</div>
                    <div className="contact-info-value">
                      <a href={`tel:${BUSINESS.phone}`}>{BUSINESS.phoneDisplay}</a>
                    </div>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon"><Mail size={20} aria-hidden="true" /></div>
                  <div>
                    <div className="contact-info-label">Email</div>
                    <div className="contact-info-value">
                      <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
                    </div>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon"><Clock size={20} aria-hidden="true" /></div>
                  <div>
                    <div className="contact-info-label">Store Hours</div>
                    <div className="contact-info-value">
                      Monday – Sunday: 9:00 AM – 9:30 PM
                      <br />
                      <small style={{ color: 'var(--teal)', fontWeight: 600 }}>Open 7 days a week</small>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal delay={120}>
              <div className="contact-form-card">
                <h3 className="heading-h3" style={{ marginBottom: '1rem', color: 'var(--navy)' }}>
                  Send an Enquiry via WhatsApp
                </h3>
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
