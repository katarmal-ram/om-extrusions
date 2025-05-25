import React from 'react'

interface TestimonialsSectionProps {
  data?: any
}

export const TestimonialsSection = ({ data }: TestimonialsSectionProps) => {
  const title = data?.title || 'What Our Clients Say'
  const items = data?.items || []

  if (!data?.enabled || items.length === 0) {
    return null
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Testimonials</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-1 md:gap-x-8 md:gap-y-10 lg:grid-cols-2">
            {items.map((testimonial: any, index: number) => (
              <div key={index} className="relative">
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <p className="text-base text-gray-500 italic mb-4">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center">
                    {testimonial.avatar && (
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                    )}
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {testimonial.author}
                      </p>
                      {testimonial.position && (
                        <p className="text-sm text-gray-500">
                          {testimonial.position}
                          {testimonial.company && `, ${testimonial.company}`}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}