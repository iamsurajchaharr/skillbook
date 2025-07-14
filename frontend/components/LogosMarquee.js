import React from 'react'
import { urlFor } from '../utils/imageBuilder'

export default function LogosMarquee({ logos }) {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 overflow-x-auto">
        <div className="flex items-center space-x-8 animate-marquee">
          {logos.map(logo => (
            <a key={logo._id} href={logo.link || '#'} className="flex-shrink-0">
              <img
                src={logo.logo ? urlFor(logo.logo).width(120).url() : '/placeholder-logo.png'}
                alt={logo.altText}
                className="h-12 object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
