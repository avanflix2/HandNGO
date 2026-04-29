'use client'

import { TwitterIcon, LinkedinIcon, InstagramIcon, YoutubeIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {

  return (
    <footer className="relative bg-gradient-to-br from-black via-gray-900 to-black border-t border-gray-700 overflow-hidden">
      {/* Background Pattern */}


      {/* Main footer content */}
      <div className="relative z-10 w-[90vw] max-w-none mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                <Image src="/logo.png" alt="HAND" width={64} height={64} className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">HAND</h3>
                <p className="text-blue-400 text-sm">Empowering Rural India</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md text-sm">
              We&apos;re committed to creating sustainable change through community-driven solutions and global partnerships that empower rural communities across India.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center text-white transition-colors">
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center text-white transition-colors">
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center text-white transition-colors">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center text-white transition-colors">
                <YoutubeIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1 lg:col-span-1">
            <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-white border-b border-gray-600 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2 md:space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about-us' },
                { name: 'Contact Us', href: '/contact' },
                { name: 'Donate', href: '/donate' }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-blue-600 transition-colors duration-300 text-sm md:text-base hover:translate-x-1 inline-block cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Programs */}
          <div className="md:col-span-1 lg:col-span-1">
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-white border-b border-gray-600 pb-2">Our Programs</h4>
            <ul className="space-y-2 md:space-y-3">
              {[
                { name: 'Education', href: '/domains/education' },
                { name: 'Livelihood', href: "/domains/livelihood" },
                { name: 'Rural Development', href: '/domains/rural-development' },
                { name: 'Skill Development', href: '/domains/skill-development' },
                { name: 'Climate Change', href: '/domains/climate-change' },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="text-gray-300 text-sm hover:text-blue-400 transition-colors duration-300 cursor-pointer flex items-center space-x-2"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div className="md:col-span-1 lg:col-span-1">
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-white border-b border-gray-600 pb-2">Get Involved</h4>
            <ul className="space-y-2 md:space-y-3">
              {[
                { name: 'Volunteer', href: '/volunteer' },
                { name: 'Corporate Partners', href: '/partners' },
                { name: 'Contact Us', href: '/contact' }
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="text-gray-300 text-sm hover:text-blue-400 transition-colors duration-300 cursor-pointer flex items-center space-x-2"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div >

      {/* Bottom footer */}
      < div className="relative border-t border-gray-600/50 bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm" >
        {/* Subtle bottom pattern */}
        < div className="absolute inset-0 opacity-5" >
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="footer-bottom" width="15" height="15" patternUnits="userSpaceOnUse">
                <circle cx="7.5" cy="7.5" r="0.8" fill="hsl(var(--hand-neutral-400))" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#footer-bottom)" />
          </svg>
        </div >

        <div className="relative z-10 w-[90vw] max-w-none mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white text-sm mb-4 md:mb-0 font-medium">
              © {new Date().getFullYear()} HAND - Human Action For Need and Development. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy-policy" className="text-white hover:text-blue-600 transition-colors duration-300 font-medium hover:underline">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-white hover:text-blue-600 transition-colors duration-300 font-medium hover:underline">
                Terms of Service
              </a>
              <a href="/cookie-policy" className="text-white hover:text-blue-600 transition-colors duration-300 font-medium hover:underline">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div >
    </footer >
  )
}
