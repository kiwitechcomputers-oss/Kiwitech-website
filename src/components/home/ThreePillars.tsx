import Link from 'next/link'
import { ShoppingCart, Wrench, Building2, ChevronRight, CheckCircle2, ShieldCheck, Cpu, HardDrive, Laptop, Server } from 'lucide-react'
import ScrollReveal from '@/components/shared/ScrollReveal'

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
    gradientBg: 'linear-gradient(135deg, rgba(14,165,165,0.15) 0%, rgba(7,20,38,0.8) 100%)',
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
    gradientBg: 'linear-gradient(135deg, rgba(123,193,66,0.15) 0%, rgba(7,20,38,0.8) 100%)',
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
    gradientBg: 'linear-gradient(135deg, rgba(245,158,11,0.15) 0%, rgba(7,20,38,0.8) 100%)',
    visualIcon: Server,
    tags: ['Annual AMC', 'SLA Support', 'Bulk IT', 'On-Site']
  },
]

export default function ThreePillars() {
  return (
    <div className="pillars-grid">
      {pillars.map((p, i) => {
        const Icon = p.icon
        const VisualIcon = p.visualIcon
        return (
          <ScrollReveal key={p.title} delay={i * 90}>
            <article className="pillar-card flex-1 flex flex-col justify-between">
              <div>
                {/* Visual Image / Hero Card Banner Header */}
                <div
                  className="pillar-banner"
                  style={{
                    background: p.gradientBg,
                    border: `1.5px solid ${p.accentColor}33`,
                    borderRadius: '16px',
                    padding: '1.5rem',
                    marginBottom: '1.5rem',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: '12px',
                        background: `${p.accentColor}25`,
                        border: `1px solid ${p.accentColor}50`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: p.accentColor,
                      }}
                    >
                      <Icon size={26} />
                    </div>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        padding: '0.3rem 0.75rem',
                        borderRadius: '999px',
                        background: `${p.accentColor}20`,
                        color: p.accentColor,
                        border: `1px solid ${p.accentColor}40`,
                      }}
                    >
                      {p.badgeText}
                    </span>
                  </div>

                  {/* Decorative Icon Graphic Visual */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.75rem' }}>
                    <VisualIcon size={38} color={p.accentColor} style={{ opacity: 0.9 }} />
                    <div>
                      <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.2 }}>
                        {p.subTitle}
                      </div>
                      <div style={{ display: 'flex', gap: '0.35rem', marginTop: '0.4rem', flexWrap: 'wrap' }}>
                        {p.tags.map(t => (
                          <span key={t} style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.7)', background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: '4px' }}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--white)', marginBottom: '0.75rem' }}>
                  {p.title}
                </h3>

                <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                  {p.description}
                </p>

                {/* Key feature list */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.75rem' }}>
                  {p.features.map(f => (
                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.9)' }}>
                      <CheckCircle2 size={16} color={p.accentColor} style={{ flexShrink: 0 }} />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href={p.link}
                className="btn"
                style={{
                  background: `${p.accentColor}18`,
                  color: p.accentColor,
                  border: `1.5px solid ${p.accentColor}50`,
                  justifyContent: 'space-between',
                  width: '100%',
                  marginTop: 'auto',
                }}
                aria-label={`${p.linkLabel} — ${p.title}`}
              >
                <span style={{ fontWeight: 700 }}>{p.linkLabel}</span>
                <ChevronRight size={18} aria-hidden="true" />
              </Link>
            </article>
          </ScrollReveal>
        )
      })}
    </div>
  )
}
