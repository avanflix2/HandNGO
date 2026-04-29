'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Partners() {
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

    const element = document.getElementById('partners-section')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const partners = [
    {
      id: 'partner1',
      name: 'AvanFlix',
      logo: '/sponsers/avanflix.png'
    },
    {
      id: 'partner2',
      name: 'KeySolutus',
      logo: '/sponsers/keysolutus.png'
    },
    // {
    //   id: 'partner3',
    //   name: 'Red Cross International',
    //   logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Indian_Red_Cross_Society_Logo.png'
    // },
    // {
    //   id: 'partner4',
    //   name: 'UNESCO',
    //   logo: 'https://1000logos.net/wp-content/uploads/2021/04/UNESCO-logo.png'
    // }
  ]



  return (
    <section
      id="partners-section"
      className="relative h-[64vh] py-8 md:py-12 px-4 md:px-8 flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="partners-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="2" fill="hsl(var(--hand-neutral-500))"/>
                <circle cx="10" cy="10" r="0.5" fill="hsl(var(--hand-neutral-400))"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#partners-pattern)" />
          </svg>
        </div>

        {/* Floating elements */}
        <div className="absolute top-10 md:top-20 left-10 md:left-20 w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-blue-100/50 to-indigo-100/50 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 md:bottom-20 right-10 md:right-20 w-20 h-20 md:w-32 md:h-32 bg-gradient-to-br from-indigo-100/40 to-purple-100/40 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 w-[90vw] max-w-none mx-auto px-4 h-full flex flex-col">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            Our <span className="text-blue-600">Partners</span> & Supporters
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full mb-4" />
          <p className={`text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`} style={{ animationDelay: '0.2s' }}>
            Together with our partners, we create lasting impact and sustainable change worldwide.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="flex-grow w-[60%] h-full mx-auto flex items-center">
          <div className="w-full">
            {/* Our Partners */}
            <div>
              {/* <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Partners</h3> */}
              <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                {partners.map((partner, index) => (
                  <div
                    key={partner.id}
                    className={`group relative flex flex-col items-center text-center ${
                      isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    {/* Partner Logo */}
                    <div className="w-70 h-70  mb-3 md:mb-4 flex items-center justify-center grayscale-0 transition-all duration-300">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        className="max-w-full max-h-full object-contain opacity-100"
                        width={600}
                        height={600}
                      />
                    </div>

                    {/* Partner Name - Hidden by default, shown on hover */}
                    <h4 className="text-sm font-semibold text-gray-600 group-hover:text-hand-neutral-700 transition-colors duration-300 opacity-0 group-hover:opacity-100 absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                      {partner.name}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}