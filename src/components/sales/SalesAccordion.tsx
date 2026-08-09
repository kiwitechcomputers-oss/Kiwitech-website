'use client'
import { useState } from 'react'
import { ChevronDown, Check, Phone } from 'lucide-react'
import { Laptop, Monitor, Printer, Camera, Mouse } from 'lucide-react'
import { SALES_CATEGORIES, WHATSAPP_URL } from '@/lib/constants'

const iconMap: Record<string, React.ElementType> = {
  laptop: Laptop, monitor: Monitor, printer: Printer, cctv: Camera, accessories: Mouse,
}

export default function SalesAccordion() {
  const [open, setOpen] = useState<string>('laptops')

  const toggle = (id: string) => setOpen(prev => (prev === id ? '' : id))

  return (
    <div className="accordion" role="list">
      {SALES_CATEGORIES.map((cat) => {
        const Icon = iconMap[cat.icon]
        const isOpen = open === cat.id

        const waMsg = `Hi Kiwi Tech! I'm interested in your ${cat.name}. Please share availability and price.`

        return (
          <div
            key={cat.id}
            id={cat.id}
            className={`accordion-item${isOpen ? ' open' : ''}`}
            role="listitem"
          >
            <button
              className="accordion-trigger"
              onClick={() => toggle(cat.id)}
              aria-expanded={isOpen}
              aria-controls={`${cat.id}-body`}
              id={`${cat.id}-trigger`}
            >
              <div className="accordion-icon-wrap" aria-hidden="true">
                {Icon && <Icon size={24} />}
              </div>
              <div className="accordion-trigger-text">
                <h3 className="heading-h4" style={{ marginBottom: '0.2rem' }}>{cat.name}</h3>
                <p style={{ margin: 0, fontSize: 'var(--body-sm)', color: 'var(--charcoal-400)' }}>
                  {cat.tagline}
                </p>
              </div>
              <ChevronDown size={20} className="accordion-chevron" aria-hidden="true" />
            </button>

            <div
              id={`${cat.id}-body`}
              className={`accordion-body${isOpen ? ' open' : ''}`}
              role="region"
              aria-labelledby={`${cat.id}-trigger`}
            >
              <div className="accordion-body-inner">
                <p style={{ marginBottom: '1.25rem', color: 'var(--charcoal-500)', lineHeight: 1.75 }}>
                  {cat.description}
                </p>

                {/* Brands */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <div style={{ fontSize: 'var(--body-xs)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--charcoal-400)', marginBottom: '0.5rem' }}>
                    Brands Available
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {cat.brands.map(b => (
                      <span key={b} className="badge badge-teal">{b}</span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="accordion-features">
                  {cat.features.map(f => (
                    <div key={f} className="accordion-feature-item">
                      <Check size={15} aria-hidden="true" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="accordion-ctas">
                  <a
                    href={WHATSAPP_URL(waMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    id={`${cat.id}-whatsapp-btn`}
                  >
                    <svg viewBox="0 0 24 24" fill="white" width="16" height="16" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Enquire on WhatsApp
                  </a>
                  <a
                    href="tel:06303547474"
                    className="btn btn-secondary"
                    id={`${cat.id}-call-btn`}
                  >
                    <Phone size={15} aria-hidden="true" />
                    Call for Price
                  </a>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
