import Link from 'next/link'
import { Laptop, Monitor, Printer, Camera, Mouse } from 'lucide-react'

const categories = [
  { icon: Laptop, name: 'Laptops', href: '/sales#laptops', sub: 'Sales & Repair' },
  { icon: Monitor, name: 'Desktops & Monitors', href: '/sales#desktops', sub: 'Custom Rigs & Service' },
  { icon: Printer, name: 'Printers', href: '/sales#printers', sub: 'Laser / Inkjet & AMC' },
  { icon: Camera, name: 'CCTV & Security', href: '/sales#cctv', sub: 'HD / IP Cameras' },
  { icon: Mouse, name: 'Accessories', href: '/sales#accessories', sub: 'Peripherals & Extras' },
]

export default function CategoryCards() {
  return (
    <div className="category-grid">
      {categories.map((cat) => {
        const Icon = cat.icon
        return (
          <Link
            key={cat.name}
            href={cat.href}
            className="category-card"
            aria-label={`Explore ${cat.name} — ${cat.sub}`}
          >
            <div className="category-icon-box" aria-hidden="true">
              <Icon size={28} />
            </div>
            <div className="category-name">{cat.name}</div>
            <div className="category-sub">{cat.sub}</div>
          </Link>
        )
      })}
    </div>
  )
}
