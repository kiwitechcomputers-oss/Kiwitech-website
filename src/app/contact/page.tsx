import type { Metadata } from 'next'
import ContactForm from '@/components/contact/ContactForm'
import ScrollReveal from '@/components/shared/ScrollReveal'
import { BUSINESS } from '@/lib/constants'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us — Location, Phone, Hours & Enquiry',
  description:
    'Contact Kiwi Tech Computers in Medipally, Hyderabad. Phone: 06303 547474, Email: kiwitechnologies47@gmail.com. Mon–Sun 9:00 AM – 9:30 PM.',
  alternates: { canonical: `${BUSINESS.domain}/contact` },
}

export default function ContactPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="contact-heading">
        <div className="container">
          <ScrollReveal>
            <span className="heading-eyebrow page-hero-eyebrow">Contact Us</span>
            <h1 id="contact-heading">Get in Touch with Kiwi Tech</h1>
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
                    <div className="contact-info-label">Address</div>
                    <div className="contact-info-value">{BUSINESS.address.full}</div>
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
                      <small style={{ color: 'var(--kiwi)', fontWeight: 600 }}>Open 7 days a week</small>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal delay={120}>
              <div className="contact-form-card">
                <h3 className="heading-h3">Send Us an Enquiry</h3>
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
