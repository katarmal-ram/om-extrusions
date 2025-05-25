import { useState, useEffect } from 'react'
import { Navigation } from './components/Navigation'
import { HeroSection } from './components/sections/HeroSection'
import { AboutSection } from './components/sections/AboutSection'
import { FeaturesSection } from './components/sections/FeaturesSection'
import { ServicesSection } from './components/sections/ServicesSection'
import { ProductsSection } from './components/sections/ProductsSection'
import { WhyChooseUsSection } from './components/sections/WhyChooseUsSection'
import { GallerySection } from './components/sections/GallerySection'
import { TestimonialsSection } from './components/sections/TestimonialsSection'
import { ContactSection } from './components/sections/ContactSection'
import { Footer } from './components/sections/Footer'

function App() {
  const [config, setConfig] = useState(null)
  const [products, setProducts] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      fetch('/config.json').then(res => res.json()),
      fetch('/products.json').then(res => res.json())
    ]).then(([configData, productsData]) => {
      setConfig(configData)
      setProducts(productsData)
      setLoading(false)
    }).catch(error => {
      console.error('Failed to load configuration:', error)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <h2 className="text-2xl font-semibold text-gray-700 mt-4">Loading...</h2>
        </div>
      </div>
    )
  }

  if (!config) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-700">Failed to load site configuration</h2>
        </div>
      </div>
    )
  }

  const theme = config.theme || {
    colors: {
      primary: '#2563eb',
      secondary: '#64748b',
      accent: '#f59e0b',
      background: '#ffffff',
      text: '#1f2937'
    }
  }

  return (
    <div className="min-h-screen" style={{ 
      backgroundColor: theme.colors.background,
      color: theme.colors.text 
    }}>
      <Navigation 
        data={config.navigation} 
        siteName={config.site?.title?.split(' - ')[0] || 'Business'} 
        logo={config.site?.logo}
        theme={theme}
      />
      <div id="hero">
        <HeroSection data={{ ...config.sections?.hero, layout: theme.hero?.layout }} />
      </div>
      <div id="about">
        <AboutSection data={config.sections?.about} />
      </div>
      <div id="features">
        <FeaturesSection data={config.sections?.features} />
      </div>
      {config.sections?.services?.enabled && (
        <div id="services">
          <ServicesSection data={config.sections.services} />
        </div>
      )}
      {config.sections?.products?.enabled && (
        <div id="products">
          <ProductsSection data={config.sections.products} productsData={products} />
        </div>
      )}
      <div id="why-choose-us">
        <WhyChooseUsSection data={config.sections?.whyChooseUs} />
      </div>
      <div id="gallery">
        <GallerySection data={config.sections?.gallery} />
      </div>
      <div id="testimonials">
        <TestimonialsSection data={config.sections?.testimonials} />
      </div>
      <div id="contact">
        <ContactSection data={config.sections?.contact} />
      </div>
      <Footer data={config.footer} />
    </div>
  )
}

export default App