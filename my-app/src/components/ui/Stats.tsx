'use client'

import { useEffect, useState } from 'react'

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({
    stat1: 0,
    stat2: 0,
    stat3: 0,
    stat4: 0,
    stat5: 0
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('stats-section')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  // Counter animation effect
  useEffect(() => {
    if (isVisible) {
      const targets = {
        stat1: 300000,
        stat2: 10000,
        stat3: 100000,
        stat4: 100,
        stat5: 50
      }

      const duration = 2000 // 2 seconds
      const steps = 60 // 60 fps
      const increment = duration / steps

      Object.keys(targets).forEach(statId => {
        const target = targets[statId as keyof typeof targets]
        let current = 0
        const stepValue = target / steps

        const timer = setInterval(() => {
          current += stepValue
          if (current >= target) {
            current = target
            clearInterval(timer)
          }

          setCounters(prev => ({
            ...prev,
            [statId]: Math.floor(current)
          }))
        }, increment)
      })
    }
  }, [isVisible])

  const stats = [
    {
      id: 'stat1',
      number: '300000+',
      label: 'People Benefited',
      description: 'Direct beneficiaries through our integrated development programs',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: 'hand-primary'
    },
    {
      id: 'stat2',
      number: '10000+',
      label: 'Students Supported',
      description: 'Providing quality education and resources to rural children',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      color: 'hand-success'
    },
    {
      id: 'stat3',
      number: '100000+',
      label: 'Youth Benifitted',
      description: 'Creative works by  youth showcasing their talent globally',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      color: 'hand-warning'
    },
    {
      id: 'stat4',
      number: '100+',
      label: 'Health Camps',
      description: 'Camps conducted addressing the health of marginalised communities',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      color: 'hand-primary'
    },
    {
      id: 'stat5',
      number: '50+',
      label: 'Sports Events',
      description: 'Tournaments and cultural events fostering talent and community',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      color: 'hand-success'
    }
  ]

  return (
    <section
      id="stats-section"
      className="relative py-8 md:py-12 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-white"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="hsl(var(--hand-neutral-400))" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid-pattern)" />
          </svg>
        </div>
      </div>

      <div className="w-[90vw] max-w-none mx-auto px-4 relative z-10 h-full flex flex-col">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4 font-heading font-bold">
            Our Global <span className="text-blue-600">Impact</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full mb-4" />
          <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Every number represents real lives transformed, communities empowered, and hope restored across the globe
          </p>
        </div>

        {/* Stats Layout - 3 on first row, 2 on second row */}
        <div className="flex flex-col gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* First row - 3 stats */}
          <div className="grid grid-cols-3 gap-3 md:gap-6 lg:gap-8">
            {stats.slice(0, 3).map((stat, index) => (
              <div
                key={stat.id}
                className={`group relative rounded-xl p-4 md:p-8 transition-all duration-300 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                  }`}
                style={{ animationDelay: `${(index + 1) * 0.2}s` }}
              >
                {/* Icon */}
                <div className="text-base md:text-4xl lg:text-5xl font-bold text-black mb-1 md:mb-2">
                  {stat.icon}
                </div>

                {/* Number in middle */}
                <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-black mb-1 md:mb-2">
                  {isVisible ? `${counters[stat.id as keyof typeof counters]}+` : '0'}
                </div>

                {/* Title below */}
                <h3 className="text-base  md:text-xl text-blue-600 mb-1 md:mb-2 font-heading font-semibold">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-xs md:text-base text-black leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>

          {/* Second row - 2 stats centered */}
          <div className="flex justify-center gap-6 md:gap-8 lg:gap-12">
            {stats.slice(3, 5).map((stat, index) => (
              <div
                key={stat.id}
                className={`group relative rounded-xl p-4 md:p-8 transition-all duration-300 text-center max-w-xs ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                  }`}
                style={{ animationDelay: `${(index + 4) * 0.2}s` }}
              >
                {/* Icon */}
                <div className="text-base md:text-4xl lg:text-5xl font-bold text-black mb-1 md:mb-2">
                  {stat.icon}
                </div>

                {/* Number in middle */}
                <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-black mb-1 md:mb-2">
                  {isVisible ? `${counters[stat.id as keyof typeof counters]}+` : '0'}
                </div>

                {/* Title below */}
                <h3 className="text-base md:text-xl font-semibold text-blue-600 mb-1 md:mb-2">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-xs md:text-base text-black leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
