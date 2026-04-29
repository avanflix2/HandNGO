'use client'

import Image from 'next/image'

export default function OurWorkSection() {
  const images1 = ['/ourwork/1.jpg', '/ourwork/2.jpg', '/ourwork/3.jpg', '/ourwork/4.jpg', '/ourwork/5.jpg', '/ourwork/6.jpg']
  const images2 = ['/ourwork/7.jpg', '/ourwork/8.jpg', '/ourwork/9.jpg', '/ourwork/10.jpg', '/ourwork/11.jpg', '/ourwork/12.jpg']

  // Component to handle individual images with performance settings
  const ScrollingImage = ({ src, index }: { src: string; index: number }) => (
    <div className="w-1/4 px-2 relative aspect-[4/3] flex-shrink-0">
      <div className="relative w-full h-full rounded-xl overflow-hidden shadow-md bg-gray-100">
        <Image
          src={src}
          alt={`Project ${index + 1}`}
          fill
          loading="lazy"
          decoding="async"
          sizes="(max-width: 768px) 50vw, 25vw" // Tells browser to use a lower-res version if possible
          className="object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>
    </div>
  )

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
          {/* Added 'will-change-transform' to offload animation to the GPU */}
          <div className="flex w-[200%] animate-scroll-auto hover:pause will-change-transform">
            <div className="flex w-1/2">
              {images1.map((src, i) => <ScrollingImage key={`r1-a-${i}`} src={src} index={i} />)}
            </div>
            <div className="flex w-1/2">
              {images1.map((src, i) => <ScrollingImage key={`r1-b-${i}`} src={src} index={i} />)}
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="relative w-full overflow-hidden rounded-xl">
          <div className="flex w-[200%] animate-scroll-auto-reverse hover:pause will-change-transform">
            <div className="flex w-1/2">
              {images2.map((src, i) => <ScrollingImage key={`r2-a-${i}`} src={src} index={i} />)}
            </div>
            <div className="flex w-1/2">
              {images2.map((src, i) => <ScrollingImage key={`r2-b-${i}`} src={src} index={i} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
