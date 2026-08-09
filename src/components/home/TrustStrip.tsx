'use client'
import { Shield, Zap, Clock, Home, Award, Star } from 'lucide-react'

const bannerItems = [
  { icon: Star, label: '5.0★ Google Reviews', isGold: true },
  { icon: Shield, label: 'Certified Technicians' },
  { icon: Zap, label: 'Quick Turnaround' },
  { icon: Home, label: 'Doorstep Service' },
  { icon: Award, label: '3+ Years Experience' },
  { icon: Clock, label: 'Open 9 AM – 9:30 PM (7 Days)', isKiwi: true },
]

export default function TrustStrip() {
  // Duplicate array 3 times for a seamless infinite marquee loop
  const marqueeList = [...bannerItems, ...bannerItems, ...bannerItems]

  return (
    <section className="trust-marquee-section" aria-label="Key Highlights Marquee">
      <div className="trust-marquee-track">
        {marqueeList.map((item, i) => {
          const Icon = item.icon
          return (
            <div key={i} className="trust-marquee-item">
              <span className={`trust-marquee-icon ${item.isGold ? 'gold' : item.isKiwi ? 'kiwi' : ''}`}>
                <Icon size={16} fill={item.isGold ? 'currentColor' : 'none'} aria-hidden="true" />
              </span>
              <span className="trust-marquee-text">{item.label}</span>
              <span className="trust-marquee-sep" aria-hidden="true">•</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
