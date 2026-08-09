import type { Metadata } from 'next'
import CorporateSections from '@/components/corporate/CorporateSections'
import ScrollReveal from '@/components/shared/ScrollReveal'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Corporate Solutions — AMC, Bulk Procurement & IT Service Plans',
  description:
    'Tailored Annual Maintenance Contracts (AMC), bulk procurement, and IT support plans for companies, offices, schools, and institutions across Hyderabad.',
  alternates: { canonical: `${BUSINESS.domain}/corporate` },
  openGraph: {
    title: 'Corporate Solutions | Kiwi Tech Computers Hyderabad',
    description: 'Enterprise IT AMC, bulk hardware procurement, and SLA-backed maintenance plans.',
  },
}

export default function CorporatePage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="corporate-heading">
        <div className="container">
          <ScrollReveal>
            <span className="heading-eyebrow page-hero-eyebrow">Corporate Solutions</span>
            <h1 id="corporate-heading">
              Enterprise IT Infrastructure &amp; AMC Services
            </h1>
            <p>
              Keep your business operations running smoothly with dedicated IT maintenance contracts,
              bulk procurement discounts, and SLA-backed support.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section section--white" id="corporate-plans">
        <div className="container">
          <ScrollReveal>
            <CorporateSections />
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
