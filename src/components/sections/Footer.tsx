import React from 'react'

interface FooterProps {
  data?: any
}

export const Footer = ({ data }: FooterProps) => {
  const copyright = data?.copyright || '© 2024 Business Name. All rights reserved.'
  const socialLinks = data?.socialLinks || []
  const quickLinks = data?.quickLinks || []

  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {quickLinks.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Quick Links
              </h3>
              <ul className="mt-4 space-y-4">
                {quickLinks.map((link: any, index: number) => (
                  <li key={index}>
                    <a href={link.url} className="text-base text-gray-300 hover:text-white">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {socialLinks.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Follow Us
              </h3>
              <ul className="mt-4 space-y-4">
                {socialLinks.map((link: any, index: number) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      {link.platform}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Contact
            </h3>
            <p className="mt-4 text-base text-gray-300">
              Get in touch with us for more information about our services.
            </p>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            {copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}