'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react'
import Link from 'next/link'

export default function SupportSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(true)

  const supportOptions = [
    {
      id: 1,
      title: 'EDUCATION',
      subtitle: 'Enable Learning Opportunities',
      description: 'Break poverty cycles through inclusive learning environments, digital literacy, and scholarship support for rural children.',
      image: '/education/4.jpeg',
      color: 'blue'
    },
    {
      id: 2,
      title: 'LIVELIHOOD',
      subtitle: 'Empower Sustainable Income',
      description: 'Create sustainable income opportunities for women and youth through micro-enterprise support, handicrafts, and vocational training.',
      image: '/livelihood/1.png',
      color: 'blue'
    },
    {
      id: 3,
      title: 'RURAL DEVELOPMENT',
      subtitle: 'Transform Villages',
      description: 'Support infrastructure development, modern agricultural practices, and community-led initiatives for self-sufficient villages.',
      image: '/rural-development/1.jpeg',
      color: 'blue'
    },
    {
      id: 4,
      title: 'CLIMATE CHANGE',
      subtitle: 'Sustainable Action',
      description: 'Protect the environment through eco-friendly initiatives, leaf plate production, and plastic reduction awareness.',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=300&fit=crop',
      color: 'blue'
    },
    {
      id: 5,
      title: 'SKILL DEVELOPMENT',
      subtitle: 'Build Future Skills',
      description: 'Equip youth with industry-relevant technical skills in coding, mechanics, and digital media for a better future.',
      image: '/skill-development/bg2.jpg',
      color: 'blue'
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => prev + 1)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => prev - 1)
  }

  // Helper function to get the correct slide data, handling infinite scroll bounds
  const getCurrentSlideData = () => {
    const normalizedIndex = ((currentSlide % supportOptions.length) + supportOptions.length) % supportOptions.length
    return supportOptions[normalizedIndex]
  }

  // Handle infinite scroll by resetting position when out of bounds
  useEffect(() => {
    if (currentSlide >= supportOptions.length) {
      // Temporarily disable transition, reset to start, then re-enable transition
      setIsTransitioning(false)
      setTimeout(() => {
        setCurrentSlide(0)
        setTimeout(() => setIsTransitioning(true), 50)
      }, 500) // Wait for transition to complete
    } else if (currentSlide < 0) {
      // Temporarily disable transition, reset to end, then re-enable transition
      setIsTransitioning(false)
      setTimeout(() => {
        setCurrentSlide(supportOptions.length - 1)
        setTimeout(() => setIsTransitioning(true), 50)
      }, 500) // Wait for transition to complete
    }
  }, [currentSlide, supportOptions.length])

  // Manual scrolling handlers
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true)
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    setDragStart(clientX)
  }

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return

    e.preventDefault()
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    const diff = dragStart - clientX

    // Only trigger slide change if dragged more than 50px
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide()
      } else {
        prevSlide()
      }
      setIsDragging(false)
    }
  }

  const handleDragEnd = () => {
    setIsDragging(false)
  }


  return (
    <section className="relative py-8 bg-white overflow-hidden">
      <div className="w-full flex flex-col lg:flex-row items-center gap-8">
        {/* Left Side - Content */}
        <div className="w-full lg:w-auto lg:flex-shrink-0 px-8 lg:px-16 lg:pr-8">
          <div className="max-w-md">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              How do you want to <br />
              <span className="text-blue-600">make an impact</span> today?
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
              Your smallest contribution makes a big difference to rural communities. We count on the generosity of people like you to be able to create real change for India&apos;s future.
            </p>

            {/* Donate Button */}
            <Link href="/donate" className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <Heart className="w-5 h-5" />
              Donate For Better Tomorrow
            </Link>
          </div>
        </div>

        {/* Right Side - Carousel (takes remaining space) */}
        <div className="w-full lg:flex-1 relative px-8">
          {/* Navigation Buttons */}
          <div className="absolute left-4 lg:left-0 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-300"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>

            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-300"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          {/* Slides Container */}
          <div className="overflow-hidden">
            {/* Mobile/Tablet View - Show one card */}
            <div
              className="lg:hidden cursor-grab active:cursor-grabbing select-none"
              onMouseDown={handleDragStart}
              onMouseMove={handleDragMove}
              onMouseUp={handleDragEnd}
              onMouseLeave={handleDragEnd}
              onTouchStart={handleDragStart}
              onTouchMove={handleDragMove}
              onTouchEnd={handleDragEnd}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
                <div className="relative h-64 w-full">
                  <Image
                    src={getCurrentSlideData().image}
                    alt={getCurrentSlideData().title}
                    fill
                    className="object-cover"
                  />
                  {/* Tax Save Badge */}
                  <div className="absolute top-4 right-4 bg-yellow-400 text-black font-bold px-4 py-2 rounded-lg shadow-lg">
                    <div className="text-xs">SAVE TAX</div>
                    <div className="text-sm">ON YOUR</div>
                    <div className="text-xs">DONATION</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-blue-600 text-sm font-bold mb-2">
                    {getCurrentSlideData().title}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">
                    {getCurrentSlideData().subtitle}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {getCurrentSlideData().description}
                  </p>
                </div>
              </div>
            </div>

            {/* Desktop View - Show three cards */}
            <div className="hidden lg:flex py-5 gap-6 overflow-hidden relative">
              {/*
                Infinite scroll:
                - We render the slides as [...supportOptions, ...supportOptions, ...supportOptions] (3x) to allow seamless infinite scroll.
                - The parent logic should keep currentSlide in the middle set and jump to the same index in the middle set when reaching the start/end.
                - Here, we only render the correct structure for infinite scroll.
              */}
              <div
                className={`flex gap-6 cursor-grab active:cursor-grabbing select-none ${isTransitioning ? 'transition-transform duration-500' : ''}`}
                style={{
                  // Allow currentSlide to go beyond bounds for smooth infinite effect
                  transform: `translateX(-${(currentSlide + supportOptions.length) * (340 + 24)}px)`,
                }}
                onMouseDown={handleDragStart}
                onMouseMove={handleDragMove}
                onMouseUp={handleDragEnd}
                onMouseLeave={handleDragEnd}
                onTouchStart={handleDragStart}
                onTouchMove={handleDragMove}
                onTouchEnd={handleDragEnd}
              >
                {/* Render 3x slides for infinite effect */}
                {[
                  ...supportOptions,
                  ...supportOptions,
                  ...supportOptions,
                ].map((slide, idx) => {
                  // Calculate the real index in the original array
                  const realIdx = idx % supportOptions.length;
                  return (
                    <div
                      key={`${slide.id}-${Math.floor(idx / supportOptions.length)}`}
                      className="min-w-[340px] max-w-xs bg-white rounded-2xl overflow-hidden shadow-xl transition-all duration-300 flex-shrink-0"
                    >
                      <div className="relative h-64 w-full">
                        <Image
                          src={slide.image}
                          alt={slide.title}
                          fill
                          className="object-cover"
                        />
                        {/* Tax Save Badge - only on first card of each set */}
                        {realIdx === 0 && (
                          <div className="absolute top-4 right-4 bg-yellow-400 text-black font-bold px-4 py-2 rounded-lg shadow-lg">
                            <div className="text-xs">SAVE TAX</div>
                            <div className="text-sm">ON YOUR</div>
                            <div className="text-xs">DONATION</div>
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        <div className="text-blue-600 text-sm font-bold mb-2">
                          {slide.title}
                        </div>
                        <h3 className="text-xl font-bold text-black mb-3">
                          {slide.subtitle}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-3">
                          {slide.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {supportOptions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-blue-600 w-8' : 'bg-gray-300'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

