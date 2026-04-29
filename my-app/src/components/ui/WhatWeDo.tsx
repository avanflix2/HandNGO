'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function WhatWeDoSection() {
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

    const element = document.getElementById('what-we-do-section')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const services = [
    {
      id: 'education',
      image: '/education/2bg.png',
      title: 'Education',
      description: 'Ensuring access to inclusive learning environments that support academic, social, emotional, and creative growth for rural children.',
      color: 'blue',
      link: '/domains/education'
    },
    {
      id: 'livelihood',
      image: '/livelihood/22.png',
      title: 'Livelihood',
      description: 'Creating sustainable income opportunities and reducing poverty through technical training, micro-enterprise support, and skill building.',
      color: 'blue',
      link: '/domains/livelihood'
    },
    {
      id: 'rural-development',
      image: '/icons/rural-development.png',
      title: 'Rural Development',
      description: 'Transforming villages through infrastructure development, modern agricultural practices, and community-led initiatives.',
      color: 'blue',
      link: '/domains/rural-development'
    },
    {
      id: 'skill-development',
      image: '/skill-development/bg2.jpg',
      title: 'Skill Development',
      description: 'Equipping youth with industry-relevant technical and vocational skills for a better future.',
      color: 'blue',
      link: '/domains/skill-development'
    },
    {
      id: 'climate-change',
      image: '/icons/climate-change.png',
      title: 'Climate Change',
      description: 'Promoting eco-friendly practices and sustainable livelihoods through leaf plate making and plastic reduction.',
      color: 'blue',
      link: '/domains/climate-change'
    }
  ]

  const extendedServices = [
    ...services
  ]


  const getCardColor = (color: string) => {
    switch (color) {
      case 'blue':
        return 'from-blue-500 to-blue-600'
      default:
        return 'from-gray-500 to-gray-600'
    }
  }

  return (
    <section
      id="what-we-do-section"
      className="relative bg-white"
    >
      <Image src="/2.png" alt="HAND" width={10000} height={1} />
      <div className="relative">
        <Image
          src="/3.png"
          alt="HAND"
          width={10000}
          height={1}
          className="border-none outline-none select-none"
        />
        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-full max-w-7xl z-10 flex flex-col items-center">

          {/* Header */}
          <div className="text-center mb-12 bg-[#2495d5] px-40 pt-4 rounded-t-xl">
            <h2 className={`text-3xl md:text-5xl text-black mb-4 font-heading font-bold ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
              }`}>
              What We Do
            </h2>
          </div>

          {/* Services grid */}
          <div className="w-full">
            {/* Adjusted grid to facilitate 5 items better: flex-wrap or auto-fit */}
            <div className="flex flex-wrap justify-center gap-6">
              {extendedServices.map((service, index) => (
                <div
                  key={service.id}
                  className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-gray-100 to-gray-20 transform hover:-translate-y-2 w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(20%-1.2rem)] ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                    }`}
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  {/* Icon/Title */}
                  <div className="relative h-64 flex flex-col items-center justify-center ">
                    <Image src={service.image} alt={service.title} width={300} height={300} className="object-contain max-h-48" />
                    <p className="text-sm font-bold text-black text-center leading-tight mt-4">
                      {service.title}
                    </p>
                  </div>

                  {/* Content (hidden by default, shows on hover) */}
                  <div className="absolute inset-0 bg-white bg-opacity-95 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
                    <div className="mb-4">
                      {/* Description */}
                      <p className="text-gray-600 text-base leading-relaxed mb-4">
                        {service.description}
                      </p>

                      {/* Know More Button */}
                      <a href={service.link} className="block w-full text-center bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700 transition-colors duration-300 text-base font-body font-medium hover:font-semibold">
                        Know More
                      </a>
                    </div>
                  </div>

                  {/* Colored bottom border */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${getCardColor(service.color)}`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}