"use client"
import { useEffect, useState } from 'react'
import Image from 'next/image'

const lineDrawKeyframes = `
  @keyframes drawLine {
    to {
      stroke-dashoffset: 0;
    }
  }
  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-fade-in {
    animation: fadeIn 0.8s ease-out forwards;
  }
  .animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
  }
`

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('about-section')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])
  return (
    <section id="about-section" className=" bg-gradient-to-br from-gray-50 to-white">
      <div className="w-[85%] max-w-none mx-auto ">
        {/* Header */}
        <div className={` w-full text-center mb-8 md:mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={isVisible ? { animationDelay: '0.2s', animationFillMode: 'forwards' } : {}}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4 font-heading font-bold">
            About <span className="text-blue-600">HAND</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full mb-4" />
          <p className="text-base w-[80%]  md:text-lg text-black  mx-auto leading-relaxed">
            We are a purpose-driven Non governmental organisation committed to building sustainable communities through <br /> skill development, rural development, education, livelihood generation, and climate action. Our work focuses on empowering individuals-especially women and youth-with practical skills, knowledge, and opportunities to become self-reliant. By strengthening education, promoting inclusive livelihoods, and supporting rural ecosystems, we strive to create long-term social and economic impact.Rooted in community participation and sustainability, we believe that meaningful change begins at the grassroots and grows with collective effort
          </p>
        </div>

        {/* Modern Layout with Logo in Center */}
        <div className="relative min-h-[500px] flex items-center justify-center">
          {/* Animated Connecting Lines - draw from logo to cards */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 100 100">
            {/* Straight horizontal line from Logo to Vision */}
            {/* Vision - straight horizontal to the right */}
            <line
              x1="50"
              y1="30"
              x2="95"   // extend farther right
              y2="30"
              stroke="#2563eb"
              strokeWidth="2"
              strokeLinecap="round"
              style={{
                strokeDasharray: isVisible ? '45' : '0',
                strokeDashoffset: isVisible ? '45' : '0',
                animation: isVisible ? 'drawLine 1.5s ease-out 0.5s forwards' : 'none'
              }}
            />

            {/* Mission - straight horizontal to the left */}
            <line
              x1="50"
              y1="60"
              x2="5"    // extend farther left
              y2="60"
              stroke="#2563eb"
              strokeWidth="2"
              strokeLinecap="round"
              style={{
                strokeDasharray: isVisible ? '45' : '0',
                strokeDashoffset: isVisible ? '45' : '0',
                animation: isVisible ? 'drawLine 1.5s ease-out 0.8s forwards' : 'none'
              }}
            />

          </svg>

          <style dangerouslySetInnerHTML={{ __html: lineDrawKeyframes }} />

          {/* Vision - Top Right */}
          <div className={`absolute top-8 right-4 md:top-12 md:right-12 max-w-xs md:max-w-sm z-10 ${isVisible ? 'opacity-0 animate-fade-in' : 'opacity-0'}`} style={isVisible ? { animationDelay: '2s', animationFillMode: 'forwards' } : {}}>
            {/* Decorative lines */}
            <div className="flex items-center mb-4">
              <div className="w-8 h-px bg-blue-600 mr-3"></div>
              <div className="w-4 h-px bg-blue-400 mr-3"></div>
              <div className="w-2 h-px bg-blue-300"></div>
            </div>
            <div className="p-4 md:p-6 bg-white rounded-lg shadow-lg border border-blue-100">
              <div className="flex items-center mb-3">
                <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <h4 className="text-lg md:text-xl text-blue-800 font-heading font-semibold">Our Vision</h4>
              </div>
              <p className="text-sm md:text-base text-black leading-relaxed">
                To empower the underserved across India by providing access to education, healthcare, sustainable livelihoods, and digital connectivity, fostering self-reliance and long-term development.
              </p>
            </div>
          </div>

          {/* Logo in Center */}
          <div className="relative z-20">
            <div className="relative w-80 h-80 bg-[#FFFFFA] rounded-lg shadow-2xl overflow-hidden border-2 border-gray-200 flex items-center justify-center">
              <Image
                src="/logo_bg.png"
                alt="HAND Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>


          {/* Mission - Bottom Left */}
          <div className={`absolute bottom-8 left-4 md:bottom-12 md:left-12 max-w-xs md:max-w-sm z-10 ${isVisible ? 'opacity-0 animate-fade-in' : 'opacity-0'}`} style={isVisible ? { animationDelay: '2.2s', animationFillMode: 'forwards' } : {}}>
            <div className="p-4 md:p-6 bg-white rounded-lg shadow-lg border border-blue-100">
              <div className="flex items-center mb-3">
                <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h4 className="text-lg md:text-xl text-blue-800 font-heading font-semibold">Our Mission</h4>
              </div>
              <p className="text-sm md:text-base text-black leading-relaxed">
                To enable inclusive and sustainable development by strengthening livelihoods, fostering resilience, advancing education and health, and empowering marginalized communities to become self-reliant.
              </p>
            </div>
            {/* Decorative lines */}
            <div className="flex items-center mt-4 justify-end">
              <div className="w-2 h-px bg-blue-300 mr-3"></div>
              <div className="w-4 h-px bg-blue-400 mr-3"></div>
              <div className="w-8 h-px bg-blue-600"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}