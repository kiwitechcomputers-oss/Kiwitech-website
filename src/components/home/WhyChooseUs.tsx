import { WHY_CHOOSE_US } from '@/lib/constants'
import { Shield, Zap, Tag, Home, Award, Users } from 'lucide-react'

const iconMap: Record<string, React.ElementType> = {
  shield: Shield, zap: Zap, tag: Tag, home: Home, award: Award, users: Users,
}

export default function WhyChooseUs() {
  return (
    <div className="why-grid">
      {WHY_CHOOSE_US.map((item) => {
        const Icon = iconMap[item.icon]
        return (
          <div key={item.title} className="why-item">
            <div className="why-item-icon" aria-hidden="true">
              {Icon && <Icon size={20} />}
            </div>
            <div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
