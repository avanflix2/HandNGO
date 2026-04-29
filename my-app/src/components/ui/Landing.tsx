'use client'

import Image from 'next/image';
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function LandingSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const carouselSlides = [
    {
      src: '/livelihood/3.jpg',
      alt: 'Livelihood Programs - HAND',
      title: 'Livelihood',
      tagline: 'Sustainable livelihoods for stronger communities',
      description: 'Creating sustainable income opportunities for women and youth through practical skills in tailoring, handicrafts, digital media, and micro-enterprise development'
    },
    {
      src: '/education/1.jpg',
      alt: 'Education Programs - HAND',
      title: 'Education',
      tagline: 'Learning today, leading tomorrow',
      description: 'Breaking poverty cycles through inclusive learning environments with digital literacy and 21st-century skills for rural children'
    },
    {
      src: '/rural-development/1.jpeg',
      alt: 'Rural Development - HAND',
      title: 'Rural Development',
      tagline: 'Empowering Villages, building nations',
      description: 'Transforming villages through infrastructure, modern agriculture, and community-led initiatives for a self-sufficient rural India'
    },
    {
      src: '/skill-development/new1.jpg',
      alt: 'Skill Development - HAND',
      title: 'Skill Development',
      tagline: 'Creating impact through sustainable skilling',
      description: 'Bridging the digital divide by connecting remote villages with technology, internet access, and digital services'
    },
    {
      src: '/climate/1.jpg',
      alt: 'Climate Crisis Programs - HAND',
      title: 'Climate Crisis',
      tagline: 'Protecting Our Planet',
      description: 'Addressing climate change through sustainable practices, renewable energy, and community-based conservation initiatives'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [carouselSlides.length])

  useEffect(() => {
    const handleScroll = () => {
      // Scroll overlay functionality removed
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length)
  }

  return (
    <section id="home-section" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-30 pb-5 px-5">
      {/* Background Carousel */}
      <div className="relative w-[100%] h-[80vh] z-0 rounded-lg overflow-hidden">
        {carouselSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Domain Title - Bottom Right with Typing Animation */}
            {index === currentSlide && (
              <div className="absolute bottom-10 right-10 z-20">
                <TypingEffect text={slide.title} />
              </div>
            )}
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-transparent z-10"></div>

        {/* Content Container */}
        <div className="absolute inset-0 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Column - Dynamic Content */}
            <div className="text-left space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-5xl text-white leading-tight font-heading font-bold animate-fade-in whitespace-nowrap">
                {carouselSlides[currentSlide].tagline}
              </h1>

              {/* <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl animate-fade-in animation-delay-200">
                {carouselSlides[currentSlide].description}
              </p> */}

            </div>

            {/* Right Column - Visual balance */}
            <div className="hidden lg:block"></div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
          {carouselSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-blue-600 scale-125' : 'bg-white/50 hover:bg-white/80'
                }`}
            />
          ))}
        </div>

        {/* Floating decoration elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse hidden md:block"></div>
        <div className="absolute bottom-32 left-20 w-24 h-24 bg-blue-300/30 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  )
}

function TypingEffect({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    setDisplayText('')
    let i = 0
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prev) => text.substring(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 100) // Adjust typing speed here

    return () => clearInterval(timer)
  }, [text])

  return (
    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wide drop-shadow-lg">
      {displayText}
      <span className="animate-pulse"></span>
    </h2>
  )
}
