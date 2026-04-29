'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Twitter, Facebook, Linkedin, Instagram, ChevronDown } from 'lucide-react'
import { HeartIcon } from '@/components/HeartIcon'

export default function FloatingNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const whatWeDoItems = [
    { name: "Education", href: "/domains/education" },
    { name: "Livelihood", href: "/domains/livelihood" },
    { name: "Rural Development", href: "/domains/rural-development" },
    { name: "Skill Development", href: "/domains/skill-development" },
    { name: "Climate Change", href: "/domains/climate-change" },
  ]

  const whoAreWeItems = [
    { name: "About Us", href: "/about-us" },
  ]

  const getInvolvedItems = [
    { name: "Volunteer", href: "/volunteer" },
    // { name: "Internships", href: "/internships" },
    { name: "Corporate Partners", href: "/partners" },
  ]

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Main Navigation Row */}
      <nav className="bg-gray-50 w-full shadow-lg border-b border-gray-200">
        <div className="w-[90%] mx-auto py-4">
          <div className="flex justify-between items-center h-24">

            {/* Logo Section */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <div className="w-28 h-28 overflow-hidden rounded-md">
                  <Image
                    src="/logo_bg.png"
                    alt="HAND Logo"
                    width={80}
                    height={80}
                    className="object-cover h-full w-full p-1"
                  />
                </div>
              </Link>
            </div>

            {/* Navigation Links and Donate Button */}
            <div className="hidden md:flex items-center space-x-8">
              {/* Home */}
              <Link
                href="/"
                className="text-base font-bold text-black transition-colors duration-200 hover:text-blue-600"
              >
                Home
              </Link>

              {/* Who Are We? Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('who-are-we')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 text-base font-bold text-black transition-colors duration-200 hover:text-blue-600 py-2">
                  <span>Who We Are</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {activeDropdown === 'who-are-we' && (
                  <div className="absolute top-full overflow-hidden left-0 w-48 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                    <Link
                      href="/about-us"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      About Us
                    </Link>
                  </div>
                )}
              </div>

              {/* What We Do? Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('what-we-do')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center  space-x-1 text-base font-bold text-black transition-colors duration-200 hover:text-blue-600 py-2">
                  <span>What We Do</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {activeDropdown === 'what-we-do' && (
                  <div className="absolute top-full overflow-hidden left-0 w-64 bg-white rounded-lg shadow-xl border border-gray-200  z-50">
                    <Link href="/domains/education" className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">Education</Link>
                    <Link href="/domains/livelihood" className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">Livelihood</Link>
                    <Link href="/domains/rural-development" className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">Rural Development</Link>
                    <Link href="/domains/skill-development" className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">Skill Development</Link>
                    <Link href="/domains/climate-change" className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">Climate Change</Link>
                  </div>
                )}
              </div>

              {/* Get Involved Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('get-involved')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 text-base font-bold text-black transition-colors duration-200 hover:text-blue-600 py-2">
                  <span>Get Involved</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {activeDropdown === 'get-involved' && (
                  <div className="absolute top-full overflow-hidden left-0 w-56 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                    {getInvolvedItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Contact Us */}
              <Link
                href="/contact"
                className="text-base font-bold text-black transition-colors duration-200 hover:text-blue-600"
              >
                Contact Us
              </Link>

              {/* Donate Button - Now inside the links container */}
              <Link
                href="/donate"
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold text-base hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
              >
                <HeartIcon className="w-5 h-5" />
                <span>Donate Us</span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden relative">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-black hover:bg-gray-100 transition-colors duration-200 hover:cursor-pointer"
              >
                {!isMobileMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>

              {/* Mobile Navigation Menu */}
              <div className={`absolute top-full right-0 mt-2 w-80 overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                }`}>
                <div className="border border-gray-200 bg-white/95 backdrop-blur-lg shadow-xl rounded-lg">
                  <div className="px-1 pt-2 pb-3 space-y-1">
                    {/* Home */}
                    <Link
                      href="/"
                      className="block w-full text-left px-3 py-3 text-base font-medium rounded-lg text-black hover:text-blue-600 hover:bg-gray-50 hover:underline hover:underline-offset-4 transition-all duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                        <span>Home</span>
                      </div>
                    </Link>

                    {/* What We Do? Section */}
                    <div className="px-3 py-2">
                      <div className="text-sm font-semibold text-gray-900 mb-2">What We Do?</div>
                      <div className="space-y-1 pl-4">
                        {whatWeDoItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block py-2 text-sm text-gray-700 hover:text-blue-600 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Who Are We? Section */}
                    <div className="px-3 py-2">
                      <div className="text-sm font-semibold text-gray-900 mb-2">Who Are We?</div>
                      <div className="space-y-1 pl-4">
                        {whoAreWeItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block py-2 text-sm text-gray-700 hover:text-blue-600 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Get Involved Section */}
                    <div className="px-3 py-2">
                      <div className="text-sm font-semibold text-gray-900 mb-2">Get Involved</div>
                      <div className="space-y-1 pl-4">
                        {getInvolvedItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block py-2 text-sm text-gray-700 hover:text-blue-600 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Contact Us */}
                    <Link
                      href="/contact"
                      className="block w-full text-left px-3 py-3 text-base font-medium rounded-lg text-black hover:text-blue-600 hover:bg-gray-50 hover:underline hover:underline-offset-4 transition-all duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                        <span>Contact Us</span>
                      </div>
                    </Link>

                    {/* Donate Button */}
                    <Link
                      href="/donate"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block w-full text-left px-3 py-3 text-base font-medium rounded-lg bg-blue-600 backdrop-blur-sm text-white hover:bg-blue-700 flex items-center space-x-2 transition-all duration-200"
                    >
                      <HeartIcon className="w-5 h-5" />
                      <span>Donate Us</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
