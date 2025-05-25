import React from 'react'

interface NavigationProps {
  data?: any
  siteName: string
  logo?: string
  theme: any
}

export const Navigation = ({ data, siteName, logo, theme }: NavigationProps) => {
  const navItems = data?.items || [
    { text: 'Home', link: '#hero' },
    { text: 'About', link: '#about' },
    { text: 'Services', link: '#services' },
    { text: 'Contact', link: '#contact' }
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            {logo && (
              <img src={logo} alt={siteName} className="h-8 w-8 mr-3" />
            )}
            <h1 className="text-2xl font-bold" style={{ color: theme.colors.primary }}>
              {siteName}
            </h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item: any, index: number) => (
                <a
                  key={index}
                  href={item.link}
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  style={{ 
                    ':hover': { color: theme.colors.primary } 
                  }}
                >
                  {item.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}