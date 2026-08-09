'use client'
import { useRef } from 'react'
import Link from 'next/link'
import { ShoppingCart, Wrench, Building2, ChevronRight, CheckCircle2, ChevronLeft, Laptop, Cpu, Server } from 'lucide-react'

const pillars = [
  {
    id: 'sales',
    icon: ShoppingCart,
    badgeText: 'Sales Catalog',
    title: 'Sales & Products',
    subTitle: 'Brand New & Refurbished Hardware',
    description:
      'Laptops, Desktops, CCTV Security, Printers & Computer Accessories from HP, Dell, Lenovo, Canon & CP Plus with full warranty support.',
    features: ['Brand New & Certified Refurbished', 'Competitive Hyderabad Pricing', 'Instant Invoice & Warranty'],
    link: '/sales',
    linkLabel: 'Explore Sales Catalog',
    accentColor: '#0EA5A5',
    gradientBg: 'linear-gradient(135deg, rgba(14,165,165,0.18) 0%, rgba(7,20,38,0.9) 100%)',
    visualIcon: Laptop,
    tags: ['Laptops', 'Desktops', 'CCTV', 'Printers']
  },
  {
    id: 'repair',
    icon: Wrench,
    badgeText: 'Express Service',
    title: 'Repair & Maintenance',
    subTitle: 'Hardware & Software Issue Resolution',
    description:
      'Expert chip-level repair, laptop screen replacement, OS/software setup, printer servicing & CCTV setup. Free diagnosis & quick turnaround.',
    features: ['Free Upfront Diagnosis', '100% Genuine Spare Parts', 'Doorstep Pickup & Delivery'],
    link: '/services',
    linkLabel: 'Book Repair Service',
    accentColor: '#7BC142',
    gradientBg: 'linear-gradient(135deg, rgba(123,193,66,0.18) 0%, rgba(7,20,38,0.9) 100%)',
    visualIcon: Cpu,
    tags: ['Chip Repair', 'Screen Fix', 'OS Setup', 'Doorstep']
  },
  {
    id: 'corporate',
    icon: Building2,
    badgeText: 'Enterprise AMC',
    title: 'Corporate Solutions',
    subTitle: 'Office IT AMC & SLA Support',
    description:
      'Comprehensive Annual Maintenance Contracts (AMC) for offices, schools, & enterprises. On-site engineers, regular maintenance & hardware support.',
    features: ['SLA-Backed Priority Support', 'Dedicated Service Engineer', 'Custom Quarterly AMC Plans'],
    link: '/corporate',
    linkLabel: 'View Corporate AMC Plans',
    accentColor: '#F59E0B',
    gradientBg: 'linear-gradient(135deg, rgba(245,158,11,0.18) 0%, rgba(7,20,38,0.9) 100%)',
    visualIcon: Server,
    tags: ['Annual AMC', 'SLA Support', 'Bulk IT', 'On-Site']
  },
]

export default function ThreePillars() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return
    const scrollAmount = scrollRef.current.clientWidth * 0.75
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  return (
    <div className="carousel-wrapper">
      {/* Navigation Controls */}
      <div className="carousel-nav-header">
        <span className="carousel-nav-hint">Swipe or use arrows to view services</span>
        <div className="carousel-arrows">
          <button
            onClick={() => scroll('left')}
            className="carousel-arrow-btn"
            aria-label="Scroll left"
            type="button"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="carousel-arrow-btn"
            aria-label="Scroll right"
            type="button"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Pillars Carousel Container */}
      <div className="pillars-carousel" ref={scrollRef}>
        {pillars.map((p) => {
          const Icon = p.icon
          const VisualIcon = p.visualIcon
          return (
            <article key={p.id} className="pillar-card">
              <div className="pillar-card-content">
                {/* Visual Banner Header */}
                <div
                  className="pillar-banner"
                  style={{
                    background: p.gradientBg,
                    border: `1.5px solid ${p.accentColor}33`,
                    borderRadius: '14px',
                    padding: '1.25rem',
                    marginBottom: '1.25rem',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.875rem' }}>
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: '12px',
                        background: `${p.accentColor}25`,
                        border: `1px solid ${p.accentColor}50`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: p.accentColor,
                      }}
                    >
                      <Icon size={24} />
                    </div>
                    <span
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        padding: '0.25rem 0.625rem',
                        borderRadius: '999px',
                        background: `${p.accentColor}20`,
                        color: p.accentColor,
                        border: `1px solid ${p.accentColor}40`,
                      }}
                    >
                      {p.badgeText}
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.5rem' }}>
                    <VisualIcon size={34} color={p.accentColor} style={{ opacity: 0.9, flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: '1rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.25 }}>
                        {p.subTitle}
                      </div>
                      <div style={{ display: 'flex', gap: '0.35rem', marginTop: '0.4rem', flexWrap: 'wrap' }}>
                        {p.tags.map(t => (
                          <span key={t} style={{ fontSize: '0.6875rem', color: 'rgba(255,255,255,0.75)', background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px' }}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="pillar-title">{p.title}</h3>

                <p className="pillar-desc">{p.description}</p>

                {/* Key feature list */}
                <div className="pillar-features">
                  {p.features.map(f => (
                    <div key={f} className="pillar-feature-item">
                      <CheckCircle2 size={16} color={p.accentColor} style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button with clean padding */}
              <Link
                href={p.link}
                className="pillar-action-btn"
                style={{
                  background: `${p.accentColor}18`,
                  color: p.accentColor,
                  borderColor: `${p.accentColor}50`,
                }}
                aria-label={`${p.linkLabel} — ${p.title}`}
              >
                <span>{p.linkLabel}</span>
                <ChevronRight size={18} aria-hidden="true" />
              </Link>
            </article>
          )
        })}
      </div>
    </div>
  )
}
