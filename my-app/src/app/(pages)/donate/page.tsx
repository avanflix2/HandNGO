'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Users, Shield, Heart, ArrowDown } from 'lucide-react'
import FloatingNavbar from '@/components/ui/FloatingNavbar'
import Footer from '@/components/ui/Footer'
import DonorMarquee from '@/components/ui/DonorMarquee'

// Hero Section Component
function HeroSection() {
  return (
    <section className="relative h-[95vh] flex items-center justify-center overflow-hidden pt-32">
      {/* Full Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1582515073490-39981397c445?w=1200&h=800&fit=crop"
          alt="Rural Indian village community and development"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Tagline */}
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
              Empowering People.<br />
              <span className="text-blue-300">Enhancing Livelihoods. Enabling Development.</span>
            </h1>

            {/* Decorative line */}
            <div className="flex justify-center mb-8">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
            </div>

            {/* Impact highlight */}
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20">
              <div className="flex items-center gap-4 text-white">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-300">50,000+</div>
                  <div className="text-sm opacity-90">Lives Impacted</div>
                </div>
                <div className="w-px h-12 bg-white/30"></div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-300">85+</div>
                  <div className="text-sm opacity-90">Villages Served</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Donate Now */}
      <div
        className="absolute bottom-32 right-0 transform -translate-x-1/2 z-10 cursor-pointer"
        onClick={() => {
          const donateSection = document.getElementById('donate-form-section');
          if (donateSection) {
            donateSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        <div className="flex flex-col items-center space-y-4  hover:animate-none transition-all duration-1000">
          {/* Donate Now Button */}
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-white/20 hover:bg-white hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-2 text-gray-800">
              <Heart className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold">Donate Now</span>
            </div>
          </div>

          {/* Downward Arrow */}
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg border border-white/20 hover:bg-white hover:scale-105 transition-all duration-300">
            <ArrowDown className="w-5 h-5 text-blue-600" />
          </div>

          {/* Scroll hint text */}
          <p className="text-white/80 text-xs font-medium drop-shadow-sm">Click to scroll down</p>
        </div>
      </div>

      {/* Enhanced Blue curved bottom - 100% width */}
      <div className="absolute bottom-0 left-0 right-0 w-screen">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-20 md:h-28" preserveAspectRatio="none">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#2563eb" />
        </svg>
      </div>
    </section>
  )
}

// Why Villages Component
function WhyVillagesSection() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
      <div className="text-center lg:text-left">
        <h3 className="text-2xl font-bold text-black mb-4">
          Grassroots-Driven Change
        </h3>
        <p className="text-base text-black leading-relaxed mb-6">
          HAND (Human Action for Need and Development) is a dedicated non-profit organization working to transform the underserved through sustainable and inclusive development. We focus on empowering the most underserved populations—especially women, children, and youth.
        </p>

        {/* Key Statistics */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4 mb-6 border border-blue-200">
          <h4 className="text-lg font-semibold text-black mb-3 text-center">HAND&apos;s Impact</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-xl font-bold text-blue-600">85+</div>
              <div className="text-xs text-black">Villages</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-blue-600">50K+</div>
              <div className="text-xs text-black">People</div>
            </div>
          </div>
        </div>

        <h4 className="text-lg font-semibold text-black mb-3">Our Key Areas of Development</h4>
        <div className="space-y-2">
          {[
            'Education',
            'Livelihood',
            'Rural Development',
            'Smart Village',
            'Skill Development'
          ].map((pillar, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
              <span className="text-sm text-black">{pillar}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Donation Form Component
function DonationForm() {
  const [amount, setAmount] = useState('')
  const [customAmount, setCustomAmount] = useState('')

  const presetAmounts = ['500', '1000', '2500', '5000']

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
      {/* Header */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-black mb-2">Make a Difference Today</h3>
        <p className="text-gray-600">Your donation transforms rural lives</p>
      </div>

      {/* Tax Benefit Badge */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-6 text-center">
        <span className="text-green-700 font-semibold text-sm">80G Tax Exempted</span>
      </div>

      {/* Amount Selection */}
      <div className="mb-8">
        <label className="block text-sm font-semibold text-black mb-4">Choose Your Impact Amount</label>
        <div className="grid grid-cols-2 gap-3 mb-5">
          {presetAmounts.map((presetAmount) => (
            <button
              key={presetAmount}
              onClick={() => setAmount(presetAmount)}
              className={`py-3 px-4 rounded-lg border font-semibold transition-all ${amount === presetAmount
                ? 'border-blue-600 bg-blue-50 text-blue-700'
                : 'border-gray-300 text-black hover:border-blue-400 bg-white'
                }`}
            >
              ₹{presetAmount}
            </button>
          ))}
        </div>

        {/* Custom Amount */}
        <div className="relative">
          <input
            type="text"
            placeholder="Or enter custom amount"
            value={customAmount}
            onChange={(e) => {
              setCustomAmount(e.target.value)
              setAmount('')
            }}
            className="w-full py-2 px-0 border-0 border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none transition-all bg-transparent"
          />
          <span className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
        </div>
      </div>

      {/* Personal Information */}
      <div className="space-y-6 mb-8">
        <div>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full py-2 px-0 border-0 border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none transition-all bg-transparent"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full py-2 px-0 border-0 border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none transition-all bg-transparent"
          />
        </div>
        <div>
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full py-2 px-0 border-0 border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none transition-all bg-transparent"
          />
        </div>
      </div>

      {/* PAN Card for tax exemption */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="PAN Card Number (for tax exemption)"
          className="w-full py-2 px-0 border-0 border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none transition-all bg-transparent text-sm"
        />
      </div>

      {/* Payment Methods */}
      <div className="mb-8">
        <div className="text-center">
          <p className="text-gray-600 text-sm mb-3">We accept</p>
          <div className="flex justify-center gap-6 text-sm font-medium">
            <span className="text-black">Credit Card</span>
            <span className="text-black">UPI</span>
            <span className="text-black">Net Banking</span>
          </div>
          <p className="text-xs text-gray-500 mt-2">Secure payments via external portal</p>
        </div>
      </div>

      {/* Donate Button */}
      <button className="w-full py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
        Donate Now
      </button>

      <p className="text-xs text-gray-500 mt-4 text-center">
        By donating, you agree to our terms and conditions. All donations are tax-exempted under 80G.
      </p>
    </div>
  )
}

// Who We Are Component
function WhoWeAreSection() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
      <div className="text-center lg:text-left">
        <h3 className="text-2xl font-bold text-black mb-4">
          Who We Are
        </h3>
        <p className="text-base text-black leading-relaxed mb-6">
          HAND (Human Action for Need and Development) transforms rural India through comprehensive development initiatives,
          focusing on education, healthcare, skill development, and sustainable infrastructure to create lasting positive change.
        </p>
        <div className="space-y-3">
          <div className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-lg">
            <Shield className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <span className="text-black font-medium">80G Certified</span>
          </div>
          <div className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-lg">
            <Users className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <span className="text-black font-medium">15+ Years Experience</span>
          </div>
        </div>
      </div>
    </div>
  )
}


// India Map Section Component
function IndiaMapSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="w-[90vw] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Our Presence
            </h2>
            <p className="text-lg text-black leading-relaxed">
              HAND works with project partners at the grassroots level to create sustainable change for India&apos;s rural communities. We currently have partnerships across multiple districts that work on various development issues including education, healthcare, skill development, and sustainable infrastructure.
            </p>
            <div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">85</div>
                  <div className="text-sm text-black">Villages Reached</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">15+</div>
                  <div className="text-sm text-black">States</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            {/* Increased the container width. h-auto allows the height to adjust automatically. */}
            <div className="w-96">
              <Image
                src="/india.png"
                alt="India map showing rural development areas"
                // Increased the base resolution to avoid blurriness at a larger size
                width={500}
                height={500}
                // Added w-full and h-auto to make the image fill its container
                className="object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

// Main Donation Page Component
export default function DonatePage() {
  return (
    <div className="w-full">
      <FloatingNavbar />
      <HeroSection />

      {/* Donation Form & Villages Info - Side by Side */}
      <section id="donate-form-section" className="py-8 md:py-4 bg-gray-50">
        <div className="w-[90vw] max-w-none mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
              Make a <span className="text-blue-600">Difference</span> Today
            </h2>
            <div className="h-1 w-16 md:w-20 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full mb-4" />
            <p className="text-base md:text-lg text-black max-w-2xl mx-auto leading-relaxed">
              Your contribution helps transform rural communities and creates lasting positive change. Every donation matters.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Donation Form - Left Side */}
            <div className="order-2 lg:order-1">
              <DonationForm />
            </div>

            {/* Who We Are & Villages Information - Right Side */}
            <div className="order-1 lg:order-2 space-y-12">
              <WhoWeAreSection />
              <WhyVillagesSection />
            </div>
          </div>
        </div>
      </section>

      {/* Donor Marquee Section */}
      <DonorMarquee />

      <IndiaMapSection />

      <Footer />
    </div>
  )
}
