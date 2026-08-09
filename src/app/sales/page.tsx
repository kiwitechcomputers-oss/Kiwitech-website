import type { Metadata } from 'next'
import SalesAccordion from '@/components/sales/SalesAccordion'
import ScrollReveal from '@/components/shared/ScrollReveal'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Sales — Laptops, Desktops, Printers, CCTV & Accessories',
  description:
    'Buy brand-new and certified refurbished laptops, desktops, monitors, printers, CCTV systems, and computer accessories in Medipally, Hyderabad. HP, Dell, Lenovo, Canon, CP Plus & more.',
  alternates: { canonical: `${BUSINESS.domain}/sales` },
  openGraph: {
    title: 'Sales | Kiwi Technologies Hyderabad',
    description: 'Laptops, desktops, printers, CCTV & accessories — all major brands at competitive prices.',
  },
}

export default function SalesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero" aria-labelledby="sales-heading">
        <div className="container">
          <ScrollReveal>
            <span className="heading-eyebrow page-hero-eyebrow">Sales</span>
            <h1 id="sales-heading">
              IT Products &amp; Equipment for Every Need
            </h1>
            <p>
              Laptops, Desktops, Printers, CCTV &amp; Accessories — all major brands, competitive prices,
              with warranty support. Walk in or enquire online.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Accordion Categories */}
      <section className="section section--white" id="sales-categories">
        <div className="container">
          <ScrollReveal>
            <div className="section-header" style={{ textAlign: 'left', marginInline: 0 }}>
              <span className="heading-eyebrow">Browse by Category</span>
              <h2 className="heading-h2">What We Sell</h2>
              <p className="text-lead mt-md">
                Click any category below to explore available products, brands, and enquire for price &amp; availability.
              </p>
            </div>
          </ScrollReveal>
          <SalesAccordion />
        </div>
      </section>

      {/* Brand logos */}
      <section className="section" style={{ background: 'var(--offwhite)', paddingBlock: '3rem' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="heading-eyebrow">Brands We Deal In</span>
              <h2 className="heading-h2" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}>
                Authorised Dealer &amp; Trusted Reseller
              </h2>
            </div>
          </ScrollReveal>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              justifyContent: 'center',
            }}
          >
            {['HP', 'Dell', 'Lenovo', 'Asus', 'Acer', 'Canon', 'Epson', 'Brother', 'CP Plus', 'Hikvision', 'Logitech', 'Samsung'].map((brand) => (
              <div
                key={brand}
                style={{
                  padding: '0.75rem 1.5rem',
                  background: 'var(--white)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-sm)',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  color: 'var(--charcoal)',
                  letterSpacing: '0.04em',
                }}
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
