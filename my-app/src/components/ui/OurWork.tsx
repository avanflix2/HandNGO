'use client'

import Image from 'next/image'

export default function OurWorkSection() {
  const images1 = [
    '/ourwork/1.jpg',
    '/ourwork/2.jpg',
    '/ourwork/3.jpg',
    '/ourwork/4.jpg',
    '/ourwork/5.jpg',
    '/ourwork/6.jpg'
  ]
  const images2 = [
    '/ourwork/7.jpg',
    '/ourwork/8.jpg',
    '/ourwork/9.jpg',
    '/ourwork/10.jpg',
    '/ourwork/11.jpg',
    '/ourwork/12.jpg',
  ]

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Our <span className="text-blue-600">Work</span>
        </h2>
        <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full" />
      </div>

      <div className="w-[85%] mx-auto space-y-8">
        {/* Row 1 */}
        <div className="relative w-full overflow-hidden rounded-xl">
          <div className="flex w-[200%] animate-scroll-auto hover:pause">
            {/* First set of images */}
            <div className="flex w-1/2">
              {images1.map((src, index) => (
                <div key={`row1-img-1-${index}`} className="w-1/4 px-2 relative aspect-[4/3]">
                  <div className="relative w-full h-full rounded-xl overflow-hidden shadow-md">
                    <Image
                      src={src}
                      alt={`Project ${index + 1}`}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              ))}
            </div>
            {/* Duplicate set for infinite loop */}
            <div className="flex w-1/2">
              {images1.map((src, index) => (
                <div key={`row1-img-2-${index}`} className="w-1/4 px-2 relative aspect-[4/3]">
                  <div className="relative w-full h-full rounded-xl overflow-hidden shadow-md">
                    <Image
                      src={src}
                      alt={`Project ${index + 1}`}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="relative w-full overflow-hidden rounded-xl">
          <div className="flex w-[200%] animate-scroll-auto-reverse hover:pause">
            {/* First set of images */}
            <div className="flex w-1/2">
              {images2.map((src, index) => (
                <div key={`row2-img-1-${index}`} className="w-1/4 px-2 relative aspect-[4/3]">
                  <div className="relative w-full h-full rounded-xl overflow-hidden shadow-md">
                    <Image
                      src={src}
                      alt={`Project ${index + 1}`}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              ))}
            </div>
            {/* Duplicate set for infinite loop */}
            <div className="flex w-1/2">
              {images2.map((src, index) => (
                <div key={`row2-img-2-${index}`} className="w-1/4 px-2 relative aspect-[4/3]">
                  <div className="relative w-full h-full rounded-xl overflow-hidden shadow-md">
                    <Image
                      src={src}
                      alt={`Project ${index + 1}`}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
