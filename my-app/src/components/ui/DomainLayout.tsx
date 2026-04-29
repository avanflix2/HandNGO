'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import FloatingNavbar from './FloatingNavbar'
import Footer from './Footer'

import ImageMarquee from './ImageMarquee'
import DonateSection from './DonateSection'

interface CardData {
  id: string
  title: string
  description: string
  image: string
  fullDescription?: string
}

interface DomainLayoutProps {
  // Hero Section
  heroImage: string
  heroTitle: string
  heroSubtitle: string
  heroButtonText: string
  heroButtonLink: string

  // Overview Section (Why {domain})
  overviewTitle: string
  overviewDescription: string

  // Overview Cards (What We Do)
  whatWeDoDescription: string
  overviewCards: CardData[]

  // Image Marquee
  marqueeImages?: string[]
}

function ReadMoreModal({
  isOpen,
  onClose,
  title,
  content
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto animate-fade-in-up">
        <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex justify-between items-center">
          <h3 className="text-2xl font-heading font-bold text-gray-900">{title}</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-8">
          <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-wrap">
            {content}
          </p>
        </div>
        <div className="sticky bottom-0 bg-white border-t border-gray-100 p-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default function DomainLayout(props: DomainLayoutProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('domain-layout-section')
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
    <div className="min-h-screen bg-white">
      <FloatingNavbar />

      {/* 1. Hero Section */}
      <section className="relative h-[85vh] mt-25 overflow-hidden">
        <Image
          src={props.heroImage}
          alt={props.heroTitle}
          fill
          className="object-cover"
          priority
        />
        {/* Wave Overlay */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 fill-white">
            <path d="M0,60 C300,100 600,20 900,60 C1050,80 1200,40 1200,60 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
        {/* Content Overlay */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white z-10 px-4">
            <h1 className="text-4xl md:text-6xl mb-4 font-heading font-bold">
              {props.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              {props.heroSubtitle}
            </p>

          </div>
        </div>
      </section>

      <section id="domain-layout-section">

        {/* 2. Why {domain} (Overview) Section */}
        <div className="py-16 w-[80%]  mx-auto">
          <div className={` ${isVisible ? 'animate-fade-in-up' : ''}`}>
            <div className=" mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4 font-heading font-bold">
                Why {props.overviewTitle}
              </h2>
              {/* <div className="h-1 w-60 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mb-4 m" /> */}
            </div>
            <p className="text-base md:text-lg text-gray-700 mx-auto leading-relaxed">
              {props.overviewDescription}
            </p>
          </div>
        </div>

        {/* 3. What We Do (Overview Cards) Section */}
        <div className="py-8 bg-gray-50">
          <div className="w-[80%]  mx-auto ">
            <div className=" mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl  font-heading font-bold text-gray-900 mb-4">What We Do</h2>
              {/* <div className="h-1 w-50 bg-blue-600 rounded-full" /> */}
            </div>

            {/* Added: Description before cards */}
            <p className="text-base md:text-lg text-gray-700  pb-12 leading-relaxed">
              {props.whatWeDoDescription}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {props.overviewCards.map((card) => (
                <div key={card.id} className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow group flex flex-col h-full">
                  <div className="relative h-56 overflow-hidden flex-shrink-0">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-xl text-black mb-3 font-heading font-semibold">{card.title}</h3>
                    <p className="text-gray-700 leading-relaxed mb-4 flex-grow">{card.description}</p>

                    {card.fullDescription && (
                      <button
                        onClick={() => setSelectedCard(card)}
                        className="self-start text-blue-600 font-medium hover:text-blue-700 hover:underline inline-flex items-center gap-1 mt-auto"
                      >
                        Read More
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4. Global Stats Image Marquee Section */}
        <ImageMarquee images={props.marqueeImages} />

        {/* 5. Donate Section */}
        <DonateSection />

      </section>

      <Footer />

      {/* Modal */}
      <ReadMoreModal
        isOpen={!!selectedCard}
        onClose={() => setSelectedCard(null)}
        title={selectedCard?.title || ''}
        content={selectedCard?.fullDescription || ''}
      />
    </div>
  )
}
