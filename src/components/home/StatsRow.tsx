'use client'
import { useEffect, useRef, useState } from 'react'

interface CounterProps {
  end: number
  suffix?: string
  prefix?: string
  duration?: number
}

function Counter({ end, suffix = '', prefix = '', duration = 1800 }: CounterProps) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    let start = 0
    const step = Math.ceil(end / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= end) { setCount(end); clearInterval(timer) }
      else setCount(start)
    }, 16)
    return () => clearInterval(timer)
  }, [started, end, duration])

  return (
    <span ref={ref} className="stat-number" aria-label={`${prefix}${end}${suffix}`}>
      {prefix}{count}{suffix}
    </span>
  )
}

const stats = [
  { end: 129, suffix: '+', label: 'Happy Customers' },
  { end: 5, prefix: '', suffix: '.0★', label: 'Google Rating' },
  { end: 9, suffix: '+', label: 'Years in Business' },
  { end: 24, suffix: 'hrs', label: 'Avg. Turnaround' },
]

export default function StatsRow() {
  return (
    <div className="stats-row" role="region" aria-label="Key statistics">
      {stats.map((s) => (
        <div key={s.label} className="stat-box">
          <Counter end={s.end} suffix={s.suffix} prefix={s.prefix} />
          <p className="stat-label">{s.label}</p>
        </div>
      ))}
    </div>
  )
}
