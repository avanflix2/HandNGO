'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function TeamSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('team-section')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const teamMembers = [
    {
      id: 'member1',
      name: 'Dr. Sarah Johnson',
      role: 'Executive Director',
      location: 'New York, USA',
      bio: 'Leading HAND\'s global operations with 15+ years of humanitarian experience.',
      expertise: 'Strategic Leadership',
      avatar: 'https://avatar.iran.liara.run/public/49',
      linkedin: 'https://linkedin.com/in/sarah-johnson',
      twitter: 'https://twitter.com/sarahjohnson'
    },
    {
      id: 'member2',
      name: 'Ahmed Hassan',
      role: 'Program Director',
      location: 'Cairo, Egypt',
      bio: 'Overseeing education and healthcare programs in MENA region.',
      expertise: 'Program Management',
      avatar: 'https://avatar.iran.liara.run/public/50',
      linkedin: 'https://linkedin.com/in/ahmed-hassan',
      twitter: 'https://twitter.com/ahmedhassan'
    },
    {
      id: 'member3',
      name: 'Maria Rodriguez',
      role: 'Finance Director',
      location: 'Mexico City, Mexico',
      bio: 'Managing financial operations and ensuring transparency.',
      expertise: 'Financial Management',
      avatar: 'https://avatar.iran.liara.run/public/51',
      linkedin: 'https://linkedin.com/in/maria-rodriguez',
      twitter: 'https://twitter.com/mariarodriguez'
    },
    {
      id: 'member4',
      name: 'David Chen',
      role: 'Technology Lead',
      location: 'Singapore',
      bio: 'Implementing innovative technology solutions for program efficiency.',
      expertise: 'Technology Innovation',
      avatar: 'https://avatar.iran.liara.run/public/52',
      linkedin: 'https://linkedin.com/in/david-chen',
      twitter: 'https://twitter.com/davidchen'
    },
    {
      id: 'member5',
      name: 'Fatima Al-Zahra',
      role: 'Community Outreach',
      location: 'Nairobi, Kenya',
      bio: 'Building strong partnerships with local communities.',
      expertise: 'Community Relations',
      avatar: 'https://avatar.iran.liara.run/public/53',
      linkedin: 'https://linkedin.com/in/fatima-alzahra',
      twitter: 'https://twitter.com/fatimaalzahra'
    },
    {
      id: 'member6',
      name: 'James O\'Connor',
      role: 'Emergency Response',
      location: 'London, UK',
      bio: 'Coordinating rapid response teams for humanitarian crises.',
      expertise: 'Crisis Management',
      avatar: 'https://avatar.iran.liara.run/public/54',
      linkedin: 'https://linkedin.com/in/james-oconnor',
      twitter: 'https://twitter.com/jamesoconnor'
    },
    {
      id: 'member7',
      name: 'Dr. Sarah Johnson',
      role: 'Executive Director',
      location: 'New York, USA',
      bio: 'Leading HAND\'s global operations with 15+ years of humanitarian experience.',
      expertise: 'Strategic Leadership',
      avatar: 'https://avatar.iran.liara.run/public/49',
      linkedin: 'https://linkedin.com/in/sarah-johnson',
      twitter: 'https://twitter.com/sarahjohnson'
    },
    {
      id: 'member8',
      name: 'Maria Rodriguez',
      role: 'Finance Director',
      location: 'Mexico City, Mexico',
      bio: 'Managing financial operations and ensuring transparency.',
      expertise: 'Financial Management',
      avatar: 'https://avatar.iran.liara.run/public/51',
      linkedin: 'https://linkedin.com/in/maria-rodriguez',
      twitter: 'https://twitter.com/mariarodriguez'
    }
  ]

  const teamStats = [
    { label: 'Team Members', value: '50+' },
    { label: 'Countries', value: '25' },
    { label: 'Years Experience', value: '15+' },
    { label: 'Global Support', value: '24/7' }
  ]

  return (
    <section
      id="team-section"
      className="relative py-12 md:py-24 px-4 md:px-8 flex items-center justify-center bg-white"
    >
      <div className="w-[90vw] max-w-none mx-auto px-4 relative z-10 h-full flex flex-col">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className={`text-2xl md:text-3xl lg:text-5xl text-gray-900 mb-3 md:mb-4 font-heading font-bold ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            Meet Our <span className="text-hand-neutral-600">Team</span>
          </h2>
          <div className="h-1 w-16 md:w-24 bg-gradient-to-r from-hand-neutral-500 to-hand-neutral-600 mx-auto rounded-full mb-3 md:mb-4" />
          <p className={`text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`} style={{ animationDelay: '0.2s' }}>
            Dedicated professionals committed to creating positive change in communities worldwide.
          </p>
        </div>

        {/* Team stats */}
        <div
          className={`grid grid-cols-4  gap-2 md:gap-4 mb-6 md:mb-8 max-w-4xl mx-auto ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}
          style={{ animationDelay: '0.4s' }}
        >
          {teamStats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-gray-100 rounded-lg px-2 py-3 md:px-4 md:py-4 flex flex-col items-center"
            >
              <div className="text-xl md:text-2xl font-bold text-hand-neutral-700 mb-0.5">{stat.value}</div>
              <div className="text-xs md:text-sm text-gray-700">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Team members - centered avatar layout */}
        <div className="flex-grow flex items-center">
          <div className="w-full">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {teamMembers.slice(0, showAll ? teamMembers.length : 4).map((member, index) => (
              <div 
                key={member.id}
                className={`group relative bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                {/* Profile header with centered avatar */}
                <div className="p-3 md:p-4 text-center border-b border-gray-100">
                  <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-2 md:mb-3 rounded-full overflow-hidden border-4 border-hand-neutral-200">
                    <Image 
                      src={member.avatar} 
                      alt={member.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-base text-gray-900 group-hover:text-hand-neutral-700 transition-colors duration-300 mb-1 font-heading font-semibold">
                    {member.name}
                  </h3>
                  <p className="text-hand-neutral-700 text-xs mb-1 font-heading font-semibold">{member.role}</p>
                  <p className="text-gray-500 text-xs">📍 {member.location}</p>
                </div>

                {/* Profile content */}
                <div className="p-2 md:p-3">
                  <p className="text-gray-700 leading-relaxed text-xs mb-2 text-center">
                    {member.bio}
                  </p>

                  {/* Expertise badge */}
                  {/* <div className="inline-block px-2 py-1 bg-hand-neutral-100 text-hand-neutral-700 text-xs font-semibold rounded-full mb-3 mx-auto block text-center">
                    {member.expertise}
                  </div> */}

                  {/* Social links */}
                  <div className="flex justify-center space-x-2">
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-7 h-7 bg-gray-100 hover:bg-hand-neutral-700 text-gray-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      title="LinkedIn Profile"
                    >
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a 
                      href={member.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-7 h-7 bg-gray-100 hover:bg-hand-neutral-700 text-gray-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      title="Twitter Profile"
                    >
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <button className="text-hand-neutral-600 p-4 shadow-md rounded-lg text-base transition-colors duration-300 font-body font-medium" onClick={() => setShowAll(!showAll)}>
              {showAll ? 'Show Less' : 'Show All'}
            </button>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}
