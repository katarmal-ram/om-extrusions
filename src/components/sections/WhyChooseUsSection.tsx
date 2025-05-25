import React from 'react'

interface WhyChooseUsSectionProps {
  data?: any
}

export const WhyChooseUsSection = ({ data }: WhyChooseUsSectionProps) => {
  const title = data?.title || 'Why Choose Us'
  const subtitle = data?.subtitle || 'The advantages of working with us'
  const points = data?.points || []

  if (!data?.enabled || points.length === 0) {
    return null
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Why Choose Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {points.map((point: any, index: number) => (
              <div key={index} className="relative">
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                  {point.image && (
                    <img
                      src={point.image}
                      alt={point.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                  )}
                  <h3 className="text-lg leading-6 font-medium text-gray-900 mb-2">
                    {point.title}
                  </h3>
                  <p className="text-base text-gray-500">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}