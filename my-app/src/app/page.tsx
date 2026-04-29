'use client'

import { useState } from 'react'
import FloatingNavbar from '@/components/ui/FloatingNavbar'
import About from '@/components/ui/About'
import Landing from '@/components/ui/Landing'
import SupportSection from '@/components/ui/SupportSection'
import Stats from '@/components/ui/Stats'
import OurWork from '@/components/ui/OurWork'
// import JoinUs from '@/components/ui/JoinUs'
import Footer from '@/components/ui/Footer'
import Impact from '@/components/ui/Impact'
// import News from '@/components/ui/News'
import Partners from '@/components/ui/Partners'

import Image from 'next/image'
import WhatWeDo from '@/components/ui/WhatWeDo'

export default function Home() {
  const [showModal, setShowModal] = useState(false)

  // useEffect(() => {
  //   let hasVisited = false

  //   const handleVisibilityChange = () => {
  //     if (document.hidden) {
  //       hasVisited = true
  //     } else if (hasVisited) {
  //       // User has returned to the page
  //       setTimeout(() => {
  //         setShowModal(true)
  //       }, 1000) // Show modal after 1 second
  //     }
  //   }

  //   document.addEventListener('visibilitychange', handleVisibilityChange)

  //   return () => {
  //     document.removeEventListener('visibilitychange', handleVisibilityChange)
  //   }
  // }, [])

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <div className="w-full">
      <FloatingNavbar />
      <Landing />
      <About />
      <div id="our-impact-section">
        {/* Our Impact Section (Stats) */}
        <Stats />
      </div>
      {/* <Impact /> */}
      <WhatWeDo />
      <OurWork />
      <Partners />
      <SupportSection />
      <Footer />

      {/* Return Visitor Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md mx-4 relative transform animate-fade-in-up overflow-hidden">
            {/* Full Width Image */}
            <div className="w-full relative">
              <Image
                src="https://images.unsplash.com/photo-1544568100-847a948585b9?w=1200&h=600&fit=crop"
                alt="HAND Logo"
                width={1200}
                height={400}
                className="w-full h-48 object-cover"
              />
              {/* Close button on top of image */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 hover:bg-white transition-colors shadow-lg z-10"
              >
                <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="text-center p-8">

              {/* Title */}
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Invest in India&apos;s true strength – Our Villages 🇮🇳
              </h2>

              {/* Message */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                Let&apos;s empower the future of India! Support rural development and community growth.
              </p>

              {/* CTA Button */}
              <a
                href="/donate"
                onClick={closeModal}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center space-x-2"
              >
                <span>Donate and save tax</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>

              {/* Footer text */}
              <p className="text-sm text-gray-500 mt-4">
                For supporting Indian villages and rural communities
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
