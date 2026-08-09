import type { Metadata } from 'next'
import ServicesAccordion from '@/components/services/ServicesAccordion'
import ScrollReveal from '@/components/shared/ScrollReveal'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Services — Laptop Repair, Desktop Repair, CCTV & Printer Service',
  description:
    'Professional computer repair & maintenance services in Medipally, Hyderabad. Laptop screen replacement, motherboard repair, CCTV installation, printer service & accessories support.',
  alternates: { canonical: `${BUSINESS.domain}/services` },
  openGraph: {
    title: 'Repair & Service | Kiwi Technologies Hyderabad',
    description: 'Fast diagnosis, genuine spare parts, certified technicians, doorstep service available.',
  },
}

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="services-heading">
        <div className="container">
          <ScrollReveal>
            <span className="heading-eyebrow page-hero-eyebrow">Repair &amp; Service</span>
            <h1 id="services-heading">
              Fast, Reliable Repair &amp; Maintenance Services
            </h1>
            <p>
              Free initial diagnosis, transparent upfront estimates, genuine parts, and quick turnaround.
              In-store walk-in or doorstep pickup available in Medipally &amp; nearby areas.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section section--white" id="services-list">
        <div className="container">
          <ScrollReveal>
            <div className="section-header" style={{ textAlign: 'left', marginInline: 0 }}>
              <span className="heading-eyebrow">Our Core Services</span>
              <h2 className="heading-h2">Hardware &amp; Software Solutions</h2>
              <p className="text-lead mt-md">
                Select your service category below to view typical issues handled, turnaround time, and book a service.
              </p>
            </div>
          </ScrollReveal>
          <ServicesAccordion />
        </div>
      </section>
    </>
  )
}
