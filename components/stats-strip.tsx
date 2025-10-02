"use client"

import { useEffect, useRef, useState } from "react"

interface Stat {
  value: number
  label: string
  suffix?: string
}

const stats: Stat[] = [
  { value: 150, label: "Projects Delivered", suffix: "+" },
  { value: 5, label: "States Served" },
  { value: 0, label: "HSE Incidents (12 months)" },
]

function CountUp({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLSpanElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const startTime = Date.now()
          const animate = () => {
            const now = Date.now()
            const progress = Math.min((now - startTime) / duration, 1)
            const easeOutQuad = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(easeOutQuad * end))

            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }
          animate()
        }
      },
      { threshold: 0.5 },
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => observer.disconnect()
  }, [end, duration, hasAnimated])

  return (
    <span ref={countRef}>
      {count}
      {suffix}
    </span>
  )
}

export function StatsStrip() {
  return (
    <section className="section-spacing bg-charcoal text-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-mid-green">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-white/90 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
