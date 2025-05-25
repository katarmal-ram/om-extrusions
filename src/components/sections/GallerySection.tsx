import React from 'react'

interface GallerySectionProps {
  data?: any
}

export const GallerySection = ({ data }: GallerySectionProps) => {
  const title = data?.title || 'Our Gallery'
  const images = data?.images || []

  if (!data?.enabled || images.length === 0) {
    return null
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Gallery</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((image: any, index: number) => (
              <div key={index} className="relative group">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-64 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
                />
                {image.caption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
                    <p className="text-sm">{image.caption}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}