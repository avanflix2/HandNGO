import FloatingNavbar from '@/components/ui/FloatingNavbar'
import Footer from '@/components/ui/Footer'
import Image from 'next/image'

export default function Partners() {
  return (
    <div className="w-full">
      <FloatingNavbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-100 pt-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Corporate <span className="text-indigo-600">Partnerships</span>
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-indigo-600 mx-auto rounded-full mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join India&apos;s leading corporations in creating sustainable impact through strategic partnerships that drive rural development.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Partner with HAND?</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Measurable social impact aligned with CSR goals</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Brand visibility through co-branded initiatives</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Employee engagement through volunteering opportunities</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Tax benefits through Section 80G contributions</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Partner?</h3>
                <p className="mb-6 opacity-90">
                  Let&apos;s discuss how we can collaborate to create meaningful impact in rural India.
                </p>
                <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Contact Us
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop"
                  alt="Corporate partnership handshake"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Models */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Partnership <span className="text-blue-600">Models</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full mb-4" />
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from our flexible partnership models designed to meet different CSR objectives and budgets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Financial Partnership</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Direct funding support for specific projects or general operations. Tax-deductible contributions through Section 80G.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Project-specific funding</li>
                <li>• General donations</li>
                <li>• Annual sponsorships</li>
                <li>• Emergency relief support</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Project Partnership</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Co-develop and implement specific projects with your brand identity. Complete project ownership and branding opportunities.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Co-branded initiatives</li>
                <li>• Joint project development</li>
                <li>• Impact measurement</li>
                <li>• Media coverage</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border border-purple-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Employee Engagement</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Employee volunteering programs, skill-based volunteering, and team-building activities with social impact.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Volunteer day programs</li>
                <li>• Skill-based contributions</li>
                <li>• Team building events</li>
                <li>• Leadership development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Partners</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full mb-4" />
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trusted by leading corporations and organizations committed to rural development.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {/* Placeholder logos - replace with actual partner logos */}
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-full h-12 bg-gradient-to-r from-blue-100 to-blue-200 rounded flex items-center justify-center">
                <span className="text-blue-600 font-bold text-sm">TCS</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-full h-12 bg-gradient-to-r from-green-100 to-green-200 rounded flex items-center justify-center">
                <span className="text-green-600 font-bold text-sm">Infosys</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-full h-12 bg-gradient-to-r from-purple-100 to-purple-200 rounded flex items-center justify-center">
                <span className="text-purple-600 font-bold text-sm">Wipro</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-full h-12 bg-gradient-to-r from-orange-100 to-orange-200 rounded flex items-center justify-center">
                <span className="text-orange-600 font-bold text-sm">HCL</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-full h-12 bg-gradient-to-r from-red-100 to-red-200 rounded flex items-center justify-center">
                <span className="text-red-600 font-bold text-sm">Reliance</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-full h-12 bg-gradient-to-r from-indigo-100 to-indigo-200 rounded flex items-center justify-center">
                <span className="text-indigo-600 font-bold text-sm">Tata</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Partner Success <span className="text-blue-600">Stories</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full mb-4" />
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how our partnerships have created lasting impact in rural communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 border border-indigo-200">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <span className="text-indigo-600 font-bold">TCS</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Digital Literacy Program</h3>
                  <p className="text-indigo-600 text-sm">Technology Partner</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                &ldquo;Partnering with HAND to establish 50 smart classrooms across rural Maharashtra. Our joint initiative has trained 2,500 students in digital skills, with 85% placement rate in technology jobs.&rdquo;
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-indigo-600">50</div>
                  <div className="text-sm text-gray-600">Smart Classrooms</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-indigo-600">2,500</div>
                  <div className="text-sm text-gray-600">Students Trained</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-indigo-600">85%</div>
                  <div className="text-sm text-gray-600">Job Placement</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-green-600 font-bold">Reliance</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Sustainable Agriculture Initiative</h3>
                  <p className="text-green-600 text-sm">Agriculture Partner</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                &ldquo;Our partnership focuses on sustainable farming in drought-prone areas. We&apos;ve implemented rainwater harvesting and organic farming techniques benefiting 15,000 farmers across 200 villages.&rdquo;
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-600">200</div>
                  <div className="text-sm text-gray-600">Villages</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">15,000</div>
                  <div className="text-sm text-gray-600">Farmers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">40%</div>
                  <div className="text-sm text-gray-600">Yield Increase</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      {/* <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Partnership Journey</h2>
          <p className="text-xl mb-8 opacity-90">
            Let&apos;s discuss how we can collaborate to create sustainable impact in rural India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule a Call
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
              Download Partnership Kit
            </button>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  )
}
