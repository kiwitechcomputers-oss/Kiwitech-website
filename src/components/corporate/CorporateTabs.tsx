'use client'
import { useState } from 'react'
import { Check, Building2, PackageCheck, ShieldCheck, ChevronRight } from 'lucide-react'
import { AMC_PLANS, WHATSAPP_URL } from '@/lib/constants'

export default function CorporateTabs() {
  const [activeTab, setActiveTab] = useState<'amc' | 'bulk' | 'custom'>('amc')

  const openQuote = () => document.dispatchEvent(new CustomEvent('open-quote-modal'))

  return (
    <div className="tabs-wrapper">
      <div className="tabs-nav" role="tablist" aria-label="Corporate solution categories">
        <button
          className={`tab-btn${activeTab === 'amc' ? ' active' : ''}`}
          onClick={() => setActiveTab('amc')}
          role="tab"
          aria-selected={activeTab === 'amc'}
          id="tab-amc"
        >
          <ShieldCheck size={16} style={{ verticalAlign: 'middle', marginRight: 6 }} aria-hidden="true" />
          AMC Contracts
        </button>
        <button
          className={`tab-btn${activeTab === 'bulk' ? ' active' : ''}`}
          onClick={() => setActiveTab('bulk')}
          role="tab"
          aria-selected={activeTab === 'bulk'}
          id="tab-bulk"
        >
          <PackageCheck size={16} style={{ verticalAlign: 'middle', marginRight: 6 }} aria-hidden="true" />
          Bulk Procurement
        </button>
        <button
          className={`tab-btn${activeTab === 'custom' ? ' active' : ''}`}
          onClick={() => setActiveTab('custom')}
          role="tab"
          aria-selected={activeTab === 'custom'}
          id="tab-custom"
        >
          <Building2 size={16} style={{ verticalAlign: 'middle', marginRight: 6 }} aria-hidden="true" />
          Custom IT Plans
        </button>
      </div>

      {/* Tab 1: AMC */}
      <div className={`tab-panel${activeTab === 'amc' ? ' active' : ''}`} role="tabpanel" aria-labelledby="tab-amc">
        <div className="plan-cards">
          {AMC_PLANS.map((plan) => (
            <div key={plan.name} className={`plan-card${plan.featured ? ' featured' : ''}`}>
              <div className="plan-tier">{plan.tier}</div>
              <h3 className="plan-name">{plan.name}</h3>
              <p style={{ fontSize: 'var(--body-sm)', color: 'var(--charcoal-400)', marginBottom: '1.5rem' }}>
                {plan.description}
              </p>
              <ul className="plan-features">
                {plan.features.map(f => (
                  <li key={f}>
                    <Check size={16} aria-hidden="true" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={openQuote}
                className={`btn ${plan.featured ? 'btn-primary' : 'btn-secondary'} plan-cta`}
                id={`amc-${plan.tier.toLowerCase()}-btn`}
              >
                Request Quote
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Tab 2: Bulk Procurement */}
      <div className={`tab-panel${activeTab === 'bulk' ? ' active' : ''}`} role="tabpanel" aria-labelledby="tab-bulk">
        <div className="card" style={{ padding: '2.5rem' }}>
          <h3 className="heading-h3" style={{ marginBottom: '1rem' }}>Bulk IT Equipment Procurement</h3>
          <p className="text-lead" style={{ marginBottom: '1.5rem' }}>
            Setting up a new office, lab, or expanding your workstation count? We supply bulk laptops, desktops,
            monitors, CCTV kits, and networking equipment with corporate volume pricing.
          </p>
          <div className="grid-2" style={{ marginBottom: '2rem' }}>
            {[
              'Direct manufacturer supply chain',
              'GST invoice & corporate billing',
              'Pre-configured & software installed',
              'On-site delivery & setup across Hyderabad',
              'Warranty registration & management',
              'Buyback / trade-in options for old hardware',
            ].map(item => (
              <div key={item} style={{ display: 'flex', gap: '0.625rem', fontSize: 'var(--body-sm)' }}>
                <Check size={16} color="var(--kiwi)" aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button onClick={openQuote} className="btn btn-primary" id="bulk-quote-btn">
              Request Bulk Pricing <ChevronRight size={16} aria-hidden="true" />
            </button>
            <a
              href={WHATSAPP_URL("Hi Kiwi Tech! I have a bulk procurement enquiry for my company.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Tab 3: Custom IT Plans */}
      <div className={`tab-panel${activeTab === 'custom' ? ' active' : ''}`} role="tabpanel" aria-labelledby="tab-custom">
        <div className="card" style={{ padding: '2.5rem' }}>
          <h3 className="heading-h3" style={{ marginBottom: '1rem' }}>Tailored IT Service Agreements</h3>
          <p className="text-lead" style={{ marginBottom: '1.5rem' }}>
            Have specialized requirements, specific SLA needs, or hybrid remote/office support demand?
            We design custom IT support plans tailored to your exact business size, budget, and tech stack.
          </p>
          <button onClick={openQuote} className="btn btn-teal" id="custom-plan-btn">
            Schedule a Corporate Consultation <ChevronRight size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}
