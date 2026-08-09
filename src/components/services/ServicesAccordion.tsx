'use client'
import { useState } from 'react'
import { ChevronDown, Check, Clock, Phone, Wrench } from 'lucide-react'
import { Laptop, Monitor, Printer, Camera, Mouse } from 'lucide-react'
import { SERVICE_CATEGORIES, WHATSAPP_URL } from '@/lib/constants'

const iconMap: Record<string, React.ElementType> = {
  laptop: Laptop, monitor: Monitor, printer: Printer, cctv: Camera, accessories: Mouse,
}

export default function ServicesAccordion() {
  const [open, setOpen] = useState<string>('laptop-repair')

  const toggle = (id: string) => setOpen(prev => (prev === id ? '' : id))

  const openQuote = () => document.dispatchEvent(new CustomEvent('open-quote-modal'))

  return (
    <div className="accordion" role="list">
      {SERVICE_CATEGORIES.map((cat) => {
        const Icon = iconMap[cat.icon]
        const isOpen = open === cat.id
        const waMsg = `Hi Kiwi Tech! I need help with ${cat.name}. Please provide an estimate.`

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
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <h3 className="heading-h4" style={{ margin: 0 }}>{cat.name}</h3>
                  <span className="badge badge-kiwi" style={{ fontSize: '0.7rem' }}>
                    <Clock size={11} aria-hidden="true" /> {cat.turnaround}
                  </span>
                </div>
                <p style={{ margin: '0.2rem 0 0', fontSize: 'var(--body-sm)', color: 'var(--charcoal-400)' }}>
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

                <div className="accordion-features">
                  {cat.features.map(f => (
                    <div key={f} className="accordion-feature-item">
                      <Check size={15} aria-hidden="true" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                <div className="accordion-ctas">
                  <button
                    onClick={openQuote}
                    className="btn btn-teal"
                    id={`${cat.id}-quote-btn`}
                  >
                    <Wrench size={16} aria-hidden="true" />
                    Book Service / Get Estimate
                  </button>
                  <a
                    href={WHATSAPP_URL(waMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    id={`${cat.id}-whatsapp-btn`}
                  >
                    Chat on WhatsApp
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
