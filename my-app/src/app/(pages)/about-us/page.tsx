import FloatingNavbar from '@/components/ui/FloatingNavbar'
import Footer from '@/components/ui/Footer'
import Image from 'next/image'
import TeamSection from '@/components/ui/Team'
import StatsSection from '@/components/ui/Stats'

export default function AboutUs() {
  return (
    <div className="w-full">
      <FloatingNavbar />

      {/* Hero Section */}
      <section className="relative h-[100vh] flex items-center justify-center pt-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Side - Text about HAND */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                About <span className="text-blue-600">HAND</span>
              </h1>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" />
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                <span className="font-semibold text-blue-600">HAND</span> (Human Action for Need and Development) is a non-profit organization dedicated to transforming rural India through sustainable development initiatives.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                We believe in empowering rural communities by providing access to education, healthcare, sustainable livelihoods, and digital connectivity. Our approach fosters self-reliance and creates lasting positive change across villages in India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="/donate"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 text-center"
                >
                  Support Our Mission
                </a>
                <a
                  href="/volunteer"
                  className="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 text-center"
                >
                  Get Involved
                </a>
              </div>
            </div>

            {/* Right Side - Logo */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-square">
                {/* <div className="absolute inset-0 bg-blue-200 rounded-3xl blur-3xl opacity-30 animate-pulse"></div> */}
                <div className="relative w-full h-full bg-black rounded-3xl shadow-2xl flex items-center justify-center">
                  <Image
                    src="/logo.png"
                    alt="HAND Logo"
                    width={400}
                    height={400}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Mission & <span className="text-blue-600">Vision</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full mb-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg p-8 border border-blue-200">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                To empower rural communities across India by providing access to education, healthcare, sustainable livelihoods, and digital connectivity, fostering self-reliance and long-term development.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl shadow-lg p-8 border border-indigo-200">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                A future where every rural Indian has equal opportunities for education, healthcare, and economic prosperity, creating sustainable and thriving communities.
              </p>
            </div>
          </div>
        </div>
      </section>
      <TeamSection />
      <StatsSection />

      {/* Stats Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50,000+</div>
              <div className="text-gray-600">Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">85+</div>
              <div className="text-gray-600">Villages Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-600">Years of Service</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Team Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full mb-8" />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated professionals leading HAND&apos;s mission to transform rural India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 border-4 border-blue-100">
                <Image
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
                  alt="Founder"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Rajesh Kumar</h3>
              <p className="text-blue-600 font-medium mb-4">Founder & CEO</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Former UNDP consultant with 15+ years in rural development. PhD in Development Economics from IIT Delhi.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 border-4 border-blue-100">
                <Image
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face"
                  alt="Operations Director"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Priya Sharma</h3>
              <p className="text-blue-600 font-medium mb-4">Operations Director</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Experienced project manager specializing in community-led development initiatives across rural India.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 border-4 border-blue-100">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                  alt="Programs Director"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Amit Patel</h3>
              <p className="text-blue-600 font-medium mb-4">Programs Director</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Education specialist with expertise in digital learning solutions and community health programs.
              </p>
            </div>
          </div>
        </div>
      </section> */}


      <Footer />
    </div>
  )
}
