import React from 'react'

interface ServicesSectionProps {
  data?: any
}

export const ServicesSection = ({ data }: ServicesSectionProps) => {
  const title = data?.title || 'Our Services'
  const items = data?.items || []

  if (!data?.enabled || items.length === 0) {
    return null
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-1 md:gap-x-8 md:gap-y-10 lg:grid-cols-2">
            {items.map((service: any, index: number) => (
              <div key={index} className="relative">
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                  {service.image && (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                  )}
                  <h3 className="text-lg leading-6 font-medium text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-base text-gray-500 mb-4">
                    {service.description}
                  </p>
                  {service.features && service.features.length > 0 && (
                    <div className="mt-4">
                      <ul className="space-y-2">
                        {service.features.map((feature: string, featureIndex: number) => (
                          <li key={featureIndex} className="flex items-center">
                            <span className="text-blue-500 mr-2">•</span>
                            <span className="text-sm text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}