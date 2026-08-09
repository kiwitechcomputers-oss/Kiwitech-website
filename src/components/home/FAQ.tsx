'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'What is your typical computer & laptop repair turnaround time?',
    a: 'Most standard repairs (screen replacement, keyboard fix, SSD upgrade, OS installation) are completed within 24 to 48 hours. Express same-day service is available for urgent jobs in Medipally.',
  },
  {
    q: 'Do you offer doorstep pickup and delivery in Hyderabad?',
    a: 'Yes! We offer doorstep pickup and delivery for laptop/desktop repairs as well as on-site technicians for CCTV installation and corporate IT support across Medipally and surrounding areas.',
  },
  {
    q: 'Do you provide warranty on repairs and spare parts?',
    a: 'Absolutely. All genuine replacement parts (screens, batteries, SSDs, motherboards, CCTV cameras) carry manufacturer warranty support, alongside a Kiwi Tech service warranty.',
  },
  {
    q: 'Which computer and CCTV brands do you sell and service?',
    a: 'We sell and service all major brands including HP, Dell, Lenovo, Asus, Acer, Apple (MacBook), Canon, Epson, Brother, CP Plus, Hikvision, Dahua, Logitech, and TVS.',
  },
  {
    q: 'How does Corporate AMC (Annual Maintenance Contract) work?',
    a: 'Our AMC plans cover regular preventive maintenance, hardware diagnostics, network troubleshooting, and priority on-site support for office setups with 1 to 50+ computers. Customized SLAs are available.',
  },
  {
    q: 'What payment options do you accept?',
    a: 'We accept Cash, UPI (Google Pay, PhonePe, Paytm), Net Banking, and Debit/Credit Cards. GST invoice billing is provided for all corporate and retail purchases.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (idx: number) => {
    setOpenIndex(prev => (prev === idx ? null : idx))
  }

  return (
    <div className="faq-accordion" role="region" aria-label="Frequently Asked Questions">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i
        return (
          <div key={faq.q} className={`faq-item${isOpen ? ' open' : ''}`}>
            <button
              className="faq-question"
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${i}`}
              id={`faq-question-${i}`}
            >
              <span>{faq.q}</span>
              <ChevronDown
                size={22}
                style={{
                  transform: isOpen ? 'rotate(180deg)' : 'none',
                  transition: 'transform 0.3s ease',
                  color: isOpen ? 'var(--teal)' : 'var(--charcoal-400)',
                  flexShrink: 0,
                }}
                aria-hidden="true"
              />
            </button>
            <div
              id={`faq-answer-${i}`}
              className={`faq-answer${isOpen ? ' open' : ''}`}
              role="region"
              aria-labelledby={`faq-question-${i}`}
            >
              <div className="faq-answer-inner">{faq.a}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
