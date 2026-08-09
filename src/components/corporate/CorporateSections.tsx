'use client'
import { useRef } from 'react'
import { CheckCircle2, ShieldCheck, ChevronLeft, ChevronRight, Building2, PackageCheck, Wrench, Award, FileText, Users } from 'lucide-react'
import { AMC_PLANS, WHATSAPP_URL } from '@/lib/constants'

export default function CorporateSections() {
  const amcScrollRef = useRef<HTMLDivElement>(null)
  const servicesScrollRef = useRef<HTMLDivElement>(null)
  const whyScrollRef = useRef<HTMLDivElement>(null)

  const scrollContainer = (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right') => {
    if (!ref.current) return
    const scrollAmount = ref.current.clientWidth * 0.65
    ref.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  const openWhatsAppQuote = (subject: string) => {
    window.open(WHATSAPP_URL(`Hi Kiwi Tech! I'd like to enquire about ${subject} for my company.`), '_blank')
  }

  const enterpriseServices = [
    {
      icon: PackageCheck,
      title: 'Bulk Equipment Procurement',
      sub: 'Volume Corporate Discount',
      desc: 'Bulk supply of laptops, workstations, monitors, and CCTV kits with GST invoicing & ready pre-configuration.',
      features: ['Direct manufacturer pricing', 'Pre-installed office software', 'On-site installation & testing'],
    },
    {
      icon: Wrench,
      title: 'Dedicated On-Site Engineers',
      sub: 'Resident IT Support',
      desc: 'Certified IT engineers assigned to your office for daily hardware support, network maintenance, and user helpdesk.',
      features: ['24/7 or business hours SLA', 'Immediate issue resolution', 'Preventive hardware checks'],
    },
    {
      icon: Building2,
      title: 'Network & CCTV Surveillance AMC',
      sub: 'Infrastructure Protection',
      desc: 'Comprehensive annual coverage for routers, firewalls, WiFi access points, DVR/NVR systems, and IP cameras.',
      features: ['Same-day camera & network repair', 'Periodic backup & firmware updates', 'Complete campus coverage'],
    },
  ]

  const corporateWhyUs = [
    {
      icon: ShieldCheck,
      title: 'SLA-Backed Response Time',
      desc: 'Guaranteed technician response within 2–4 hours for critical system outages to ensure zero operational downtime.',
    },
    {
      icon: FileText,
      title: '100% Tax Compliant GST Billing',
      desc: 'Full corporate invoices with tax compliance, clear warranty documentation, and easy credit payment terms.',
    },
    {
      icon: Award,
      title: 'Certified & Skillful Engineers',
      desc: 'Over 3+ years of expertise managing multi-location office networks, corporate servers, and enterprise desktop fleets.',
    },
  ]

  return (
    <div className="corporate-sections-stack">
      {/* SECTION 1: AMC PLANS */}
      <section className="corp-section">
        <div className="corp-section-header">
          <div>
            <span className="heading-eyebrow">Section 1 • Maintenance Contracts</span>
            <h2 className="heading-h2" style={{ color: 'var(--navy)' }}>Corporate AMC Plans</h2>
          </div>
          <div className="carousel-arrows">
            <button onClick={() => scrollContainer(amcScrollRef, 'left')} className="side-glowing-arrow left light-theme inline-arrow" type="button" aria-label="Scroll Left">
              <ChevronLeft size={20} />
            </button>
            <button onClick={() => scrollContainer(amcScrollRef, 'right')} className="side-glowing-arrow right light-theme inline-arrow" type="button" aria-label="Scroll Right">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="carousel-rel-container">
          <button onClick={() => scrollContainer(amcScrollRef, 'left')} className="side-glowing-arrow left light-theme hide-desktop" type="button" aria-label="Scroll Left">
            <ChevronLeft size={20} />
          </button>
          <button onClick={() => scrollContainer(amcScrollRef, 'right')} className="side-glowing-arrow right light-theme hide-desktop" type="button" aria-label="Scroll Right">
            <ChevronRight size={20} />
          </button>

          <div className="corp-carousel-track" ref={amcScrollRef}>
            {AMC_PLANS.map((plan) => (
              <div key={plan.name} className={`corp-plan-card${plan.featured ? ' featured' : ''}`}>
                <div className="plan-tier-badge">{plan.tier}</div>
                <h3 className="corp-card-title">{plan.name}</h3>
                <p className="corp-card-desc">{plan.description}</p>

                <ul className="corp-feature-list">
                  {plan.features.map(f => (
                    <li key={f}>
                      <CheckCircle2 size={16} className="corp-check-icon" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => openWhatsAppQuote(plan.name)}
                  className={`btn ${plan.featured ? 'btn-primary' : 'btn-secondary'} corp-card-btn`}
                  type="button"
                >
                  Request {plan.tier} Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: ENTERPRISE SERVICES */}
      <section className="corp-section mt-xl">
        <div className="corp-section-header">
          <div>
            <span className="heading-eyebrow">Section 2 • Hardware &amp; Procurement</span>
            <h2 className="heading-h2" style={{ color: 'var(--navy)' }}>Enterprise IT Services</h2>
          </div>
          <div className="carousel-arrows">
            <button onClick={() => scrollContainer(servicesScrollRef, 'left')} className="side-glowing-arrow left light-theme inline-arrow" type="button" aria-label="Scroll Left">
              <ChevronLeft size={20} />
            </button>
            <button onClick={() => scrollContainer(servicesScrollRef, 'right')} className="side-glowing-arrow right light-theme inline-arrow" type="button" aria-label="Scroll Right">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="carousel-rel-container">
          <button onClick={() => scrollContainer(servicesScrollRef, 'left')} className="side-glowing-arrow left light-theme hide-desktop" type="button" aria-label="Scroll Left">
            <ChevronLeft size={20} />
          </button>
          <button onClick={() => scrollContainer(servicesScrollRef, 'right')} className="side-glowing-arrow right light-theme hide-desktop" type="button" aria-label="Scroll Right">
            <ChevronRight size={20} />
          </button>

          <div className="corp-carousel-track" ref={servicesScrollRef}>
            {enterpriseServices.map((s) => {
              const Icon = s.icon
              return (
                <div key={s.title} className="corp-service-card">
                  <div className="corp-card-icon-box">
                    <Icon size={24} />
                  </div>
                  <span className="corp-card-sub">{s.sub}</span>
                  <h3 className="corp-card-title">{s.title}</h3>
                  <p className="corp-card-desc">{s.desc}</p>
                  <ul className="corp-feature-list">
                    {s.features.map(f => (
                      <li key={f}>
                        <CheckCircle2 size={16} className="corp-check-icon" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => openWhatsAppQuote(s.title)}
                    className="btn btn-teal corp-card-btn"
                    type="button"
                  >
                    Enquire for Business
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY CHOOSE US FOR CORPORATE */}
      <section className="corp-section mt-xl">
        <div className="corp-section-header">
          <div>
            <span className="heading-eyebrow">Section 3 • Trust Guarantee</span>
            <h2 className="heading-h2" style={{ color: 'var(--navy)' }}>Why Partner With Kiwi Tech</h2>
          </div>
          <div className="carousel-arrows">
            <button onClick={() => scrollContainer(whyScrollRef, 'left')} className="side-glowing-arrow left light-theme inline-arrow" type="button" aria-label="Scroll Left">
              <ChevronLeft size={20} />
            </button>
            <button onClick={() => scrollContainer(whyScrollRef, 'right')} className="side-glowing-arrow right light-theme inline-arrow" type="button" aria-label="Scroll Right">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="carousel-rel-container">
          <button onClick={() => scrollContainer(whyScrollRef, 'left')} className="side-glowing-arrow left light-theme hide-desktop" type="button" aria-label="Scroll Left">
            <ChevronLeft size={20} />
          </button>
          <button onClick={() => scrollContainer(whyScrollRef, 'right')} className="side-glowing-arrow right light-theme hide-desktop" type="button" aria-label="Scroll Right">
            <ChevronRight size={20} />
          </button>

          <div className="corp-carousel-track" ref={whyScrollRef}>
            {corporateWhyUs.map((w) => {
              const Icon = w.icon
              return (
                <div key={w.title} className="corp-why-card">
                  <div className="corp-card-icon-box gold">
                    <Icon size={24} />
                  </div>
                  <h3 className="corp-card-title" style={{ marginTop: '0.75rem' }}>{w.title}</h3>
                  <p className="corp-card-desc">{w.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
