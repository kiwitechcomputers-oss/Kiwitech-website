import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import TrustStrip from '@/components/home/TrustStrip'
import ThreePillars from '@/components/home/ThreePillars'
import CategoryCards from '@/components/home/CategoryCards'
import Testimonials from '@/components/home/Testimonials'
import CorporateCTA from '@/components/home/CorporateCTA'
import FAQ from '@/components/home/FAQ'
import ScrollReveal from '@/components/shared/ScrollReveal'

export const metadata: Metadata = {
  title: 'Kiwi Tech Computers — IT Sales, Repair & Corporate Solutions in Hyderabad',
  description:
    "Hyderabad's trusted IT partner for laptop & desktop sales, repair, CCTV installation, printer service, and corporate AMC. 5.0★ rated, 129+ Google reviews. Medipally, Hyderabad.",
  alternates: { canonical: 'https://kiwitechnologies.in' },
}

export default function HomePage() {
  return (
    <>
      {/* 1. Hero (Dark) */}
      <Hero />

      {/* 2. Trust Strip (Light) */}
      <TrustStrip />

      {/* 3. What We Offer (Dark) */}
      <section className="section section--navy-alt" id="services-overview">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="heading-eyebrow">What We Offer</span>
              <h2 className="heading-h2">Complete IT Sales, Repair &amp; AMC Solutions</h2>
              <p className="text-lead mt-md">
                From individual computer repairs to enterprise IT infrastructure — we&apos;ve got Hyderabad covered.
              </p>
            </div>
          </ScrollReveal>
          <ThreePillars />
        </div>
      </section>

      {/* 4. Browse by Category (Light) */}
      <section className="section section--offwhite" id="product-categories">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="heading-eyebrow">Browse by Category</span>
              <h2 className="heading-h2">Sales &amp; Service Categories</h2>
              <p className="text-lead mt-md">
                Select any category below to view products, services, and get an instant quote.
              </p>
            </div>
          </ScrollReveal>
          <CategoryCards />
        </div>
      </section>

      {/* 5. Corporate Solutions (Dark) */}
      <section className="section section--dark" id="corporate-cta">
        <div className="container">
          <ScrollReveal>
            <CorporateCTA />
          </ScrollReveal>
        </div>
      </section>

      {/* 6. Google Reviews (Light) */}
      <section className="section section--white" id="testimonials">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="heading-eyebrow">Customer Feedback</span>
              <h2 className="heading-h2">Google Reviews</h2>
              <p className="text-lead mt-md">
                Real customer feedback from walk-in &amp; corporate clients across Medipally &amp; Hyderabad.
              </p>
            </div>
          </ScrollReveal>
          <Testimonials />
        </div>
      </section>

      {/* 7. FAQ (Dark) */}
      <section className="section section--navy-alt" id="faq">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="heading-eyebrow">Got Questions?</span>
              <h2 className="heading-h2">Frequently Asked Questions</h2>
              <p className="text-lead mt-md">
                Everything you need to know about our repair process, turnaround time, warranties, and corporate AMC.
              </p>
            </div>
          </ScrollReveal>
          <FAQ />
        </div>
      </section>
    </>
  )
}
