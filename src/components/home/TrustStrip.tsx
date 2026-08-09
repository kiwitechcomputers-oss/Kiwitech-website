import { Shield, Zap, Clock, Home, Award, Star } from 'lucide-react'
import { BUSINESS } from '@/lib/constants'

const items = [
  { icon: Shield, label: 'Certified Technicians' },
  { icon: Zap, label: 'Quick Turnaround' },
  { icon: Home, label: 'Doorstep Service' },
  { icon: Award, label: `${BUSINESS.yearsInBusiness} Years Experience` },
]

export default function TrustStrip() {
  return (
    <div className="trust-strip" role="region" aria-label="Trust highlights">
      <div className="container">
        <div className="trust-strip-inner">
          <div className="trust-item" aria-label={`${BUSINESS.rating} stars on Google, ${BUSINESS.reviewCount} reviews`}>
            <div className="trust-item-icon" style={{ background: 'var(--gold-100)', color: 'var(--gold)' }}>
              <Star size={20} fill="currentColor" aria-hidden="true" />
            </div>
            <div>
              <span style={{ color: 'var(--navy)', fontWeight: 800 }}>{BUSINESS.rating}★</span>
              {' '}
              <span style={{ color: 'var(--charcoal-500)', fontWeight: 600 }}>
                ({BUSINESS.reviewCount} Google Reviews)
              </span>
            </div>
          </div>

          <div style={{ width: '1px', height: '36px', background: 'var(--border)' }} aria-hidden="true" />

          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="trust-item">
              <div className="trust-item-icon">
                <Icon size={18} aria-hidden="true" />
              </div>
              <span>{label}</span>
            </div>
          ))}

          <div style={{ width: '1px', height: '36px', background: 'var(--border)' }} aria-hidden="true" />

          <div className="trust-item">
            <div className="trust-item-icon" style={{ background: 'var(--kiwi-100)', color: 'var(--kiwi)' }}>
              <Clock size={18} aria-hidden="true" />
            </div>
            <span>Open 9 AM – 9:30 PM (7 Days)</span>
          </div>
        </div>
      </div>
    </div>
  )
}
