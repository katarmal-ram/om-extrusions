import React from 'react'

interface ProductsSectionProps {
  data?: any
  productsData?: any
}

export const ProductsSection = ({ data, productsData }: ProductsSectionProps) => {
  const title = data?.title || 'Our Products'
  const subtitle = data?.subtitle || 'Quality products for your needs'
  const categories = data?.categories || productsData?.categories || []
  const featured = productsData?.featured || []

  if (!data?.enabled) {
    return null
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Products</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {subtitle}
          </p>
        </div>

        {categories.length > 0 && (
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
              {categories.map((category: any, index: number) => (
                <div key={index} className="group relative">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">
                      {category.description}
                    </p>
                    {category.productCount && (
                      <p className="text-sm text-blue-600 font-medium">
                        {category.productCount} products
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {featured.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-10">
              Featured Products
            </h3>
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
              {featured.map((product: any, index: number) => (
                <div key={index} className="group relative">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">
                      {product.description}
                    </p>
                    {product.price && (
                      <p className="text-lg font-bold text-blue-600">
                        {product.price}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}