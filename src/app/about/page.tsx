import type { Metadata } from 'next'
import Testimonials from '@/components/home/Testimonials'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import ScrollReveal from '@/components/shared/ScrollReveal'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About Us — 3+ Years of Trusted IT Services in Hyderabad',
  description:
    'Learn about Kiwi Technologies — Medipally Hyderabad’s premier IT sales, service & AMC provider. 5.0★ Google rating with 120+ reviews.',
  alternates: { canonical: `${BUSINESS.domain}/about` },
}

export default function AboutPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="about-heading">
        <div className="container">
          <ScrollReveal>
            <span className="heading-eyebrow page-hero-eyebrow">About Kiwi Tech</span>
            <h1 id="about-heading">
              Serving Medipally &amp; Hyderabad
            </h1>
            <p>
              Built on transparency, technical expertise, and relentless customer satisfaction.
              Consistently rated 5.0★ by verified Google reviews.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section className="section section--white" id="our-story">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
            <ScrollReveal>
              <div>
                <span className="heading-eyebrow">Our Story</span>
                <h2 className="heading-h2" style={{ marginBottom: '1.25rem' }}>
                  From Local Repair Shop to Trusted Corporate Partner
                </h2>
                <p style={{ color: 'var(--charcoal-500)', lineHeight: 1.8, marginBottom: '1rem' }}>
                  Kiwi Technologies was founded with a single mission: to provide honest, quick, and highly skilled computer repair and IT services to residents and businesses in Medipally, Hyderabad.
                </p>
                <p style={{ color: 'var(--charcoal-500)', lineHeight: 1.8 }}>
                  Over the past 3+ years, we have expanded from computer repairs into comprehensive sales, CCTV surveillance installations, printer servicing, and enterprise Annual Maintenance Contracts (AMC).
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={120}>
              <div style={{ padding: '2.5rem', background: 'var(--navy-900)', color: 'white', borderRadius: 'var(--radius-xl)', border: '1px solid rgba(255,255,255,0.12)' }}>
                <h3 className="heading-h3" style={{ color: 'white', marginBottom: '1.25rem' }}>Our Commitments</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <li style={{ display: 'flex', gap: '0.875rem', fontSize: 'var(--body-sm)' }}>
                    <span style={{ color: 'var(--teal)', fontWeight: 800 }}>01.</span>
                    <span><strong>100% Honest Diagnosis:</strong> We never suggest unnecessary part replacements.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '0.875rem', fontSize: 'var(--body-sm)' }}>
                    <span style={{ color: 'var(--teal)', fontWeight: 800 }}>02.</span>
                    <span><strong>Genuine Spare Parts:</strong> Only authentic components with warranty support.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '0.875rem', fontSize: 'var(--body-sm)' }}>
                    <span style={{ color: 'var(--teal)', fontWeight: 800 }}>03.</span>
                    <span><strong>Rapid Turnaround:</strong> Most repairs finished within 24 to 48 hours.</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section section--dark" id="why">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="heading-eyebrow">Why Choose Us</span>
              <h2 className="heading-h2">What Sets Us Apart</h2>
            </div>
          </ScrollReveal>
          <WhyChooseUs />
        </div>
      </section>

      {/* Reviews */}
      <section className="section section--white" id="reviews">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="heading-eyebrow">Customer Voice</span>
              <h2 className="heading-h2">Google Reviews</h2>
            </div>
          </ScrollReveal>
          <Testimonials />
        </div>
      </section>
    </>
  )
}
