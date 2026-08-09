import Link from 'next/link'
import { Building2, ChevronRight } from 'lucide-react'

export default function CorporateCTA() {
  return (
    <div className="corporate-cta-banner" role="complementary" aria-label="Corporate solutions offer">
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.875rem' }}>
          <div
            style={{
              width: 48, height: 48, borderRadius: 12,
              background: 'rgba(255,255,255,0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
            aria-hidden="true"
          >
            <Building2 size={24} color="white" />
          </div>
          <span
            style={{
              fontSize: 'var(--body-xs)', fontWeight: 700, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)',
            }}
          >
            For Businesses &amp; Enterprises
          </span>
        </div>
        <h2 className="heading-h2" style={{ color: 'var(--white)', marginBottom: '0.75rem' }}>
          Need AMC or Bulk IT Procurement for Your Business?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 'var(--body-lg)', maxWidth: 560 }}>
          We offer tailored Annual Maintenance Contracts, bulk procurement, and customised IT service plans
          for offices, schools, and enterprises across Hyderabad.
        </p>
      </div>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', flexShrink: 0 }}>
        <Link href="/corporate" className="btn btn-primary btn-lg" id="corporate-cta-explore-btn">
          Explore Corporate Plans
          <ChevronRight size={18} aria-hidden="true" />
        </Link>
        <Link href="/contact" className="btn btn-outline-white btn-lg" id="corporate-cta-contact-btn">
          Contact Us
        </Link>
      </div>
    </div>
  )
}
