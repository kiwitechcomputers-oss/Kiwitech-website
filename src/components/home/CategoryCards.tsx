'use client'
import { useRef } from 'react'
import Link from 'next/link'
import { Laptop, Monitor, Printer, Camera, Mouse, ChevronLeft, ChevronRight } from 'lucide-react'

const categories = [
  { icon: Laptop, name: 'Laptops', href: '/sales#laptops', sub: 'Sales & Express Repair' },
  { icon: Monitor, name: 'Desktops & Monitors', href: '/sales#desktops', sub: 'Custom Rigs & Service' },
  { icon: Printer, name: 'Printers', href: '/sales#printers', sub: 'Laser / Inkjet & Cartridges' },
  { icon: Camera, name: 'CCTV & Security', href: '/sales#cctv', sub: 'HD / IP Camera Setup' },
  { icon: Mouse, name: 'Accessories', href: '/sales#accessories', sub: 'Peripherals & Cables' },
]

export default function CategoryCards() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return
    const scrollAmount = scrollRef.current.clientWidth * 0.6
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  return (
    <div className="carousel-rel-container">
      {/* Side Glowing Navigation Arrow Buttons */}
      <button
        onClick={() => scroll('left')}
        className="side-glowing-arrow left light-theme"
        aria-label="Scroll left"
        type="button"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={() => scroll('right')}
        className="side-glowing-arrow right light-theme"
        aria-label="Scroll right"
        type="button"
      >
        <ChevronRight size={22} />
      </button>

      {/* Category Carousel Track */}
      <div className="category-carousel" ref={scrollRef}>
        {categories.map((cat) => {
          const Icon = cat.icon
          return (
            <Link
              key={cat.name}
              href={cat.href}
              className="category-card-item"
              aria-label={`Explore ${cat.name} — ${cat.sub}`}
            >
              <div className="category-icon-box" aria-hidden="true">
                <Icon size={26} />
              </div>
              <div className="category-name">{cat.name}</div>
              <div className="category-sub">{cat.sub}</div>
              <div className="category-arrow-badge">
                <span>View Catalog</span>
                <ChevronRight size={14} />
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
