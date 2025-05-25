import React from 'react'

interface HeroSectionProps {
  data?: any
}

export const HeroSection = ({ data }: HeroSectionProps) => {
  const headline = data?.headline || 'Welcome to Our Business'
  const subheadline = data?.subheadline || 'Providing exceptional services for your success'
  const primaryCTA = data?.primaryCTA || { text: 'Get Started', link: '#contact' }
  const secondaryCTA = data?.secondaryCTA || { text: 'Learn More', link: '#about' }
  const backgroundImage = data?.backgroundImage

  return (
    <section 
      className="relative bg-gray-50 py-20 min-h-screen flex items-center"
      style={backgroundImage ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      } : {}}
    >
      {backgroundImage && (
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      )}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className={`text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl ${backgroundImage ? 'text-white' : 'text-gray-900'}`}>
          {headline}
        </h1>
        <p className={`mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl ${backgroundImage ? 'text-gray-200' : 'text-gray-500'}`}>
          {subheadline}
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8 space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="rounded-md shadow">
            <a
              href={primaryCTA.link}
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-colors"
            >
              {primaryCTA.text}
            </a>
          </div>
          <div className="rounded-md shadow">
            <a
              href={secondaryCTA.link}
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition-colors"
            >
              {secondaryCTA.text}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}