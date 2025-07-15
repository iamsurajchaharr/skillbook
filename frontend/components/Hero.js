import React, { useEffect } from 'react'
import anime from 'animejs'
import { urlFor } from '../utils/imageBuilder'

export default function Hero({ data }) {
  // useEffect(() => {
  //   anime({
  //     targets: '.hero-title',
  //     opacity: [0,1],
  //     translateY: [-20,0],
  //     duration: 1000,
  //     easing: 'easeOutExpo'
  //   })
  //   anime({
  //     targets: '.hero-subtitle',
  //     opacity: [0,1],
  //     translateY: [-10,0],
  //     delay: 400,
  //     duration: 800,
  //     easing: 'easeOutExpo'
  //   })
  //   anime({
  //     targets: '.hero-cta',
  //     opacity: [0,1],
  //     scale: [0.95,1],
  //     delay: 800,
  //     duration: 600,
  //     easing: 'easeOutExpo'
  //   })
  // }, [])

  // Handle case when data is null or undefined
  if (!data) {
    return (
      <section className="relative min-h-screen bg-black">
        <div className="container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="hero-title text-5xl lg:text-6xl font-bold leading-tight">
                SAFe® 6.0 Framework Training & Certification
              </h1>
              <p className="hero-subtitle mt-6 text-xl opacity-0 text-gray-300">
                SAFe® certifications validate your skills and open new doors for career advancement
              </p>
              <a href="#courses" className="hero-cta mt-8 inline-block bg-red-600 px-8 py-4 rounded-lg font-semibold opacity-0 hover:bg-red-700 transition-colors">
                Explore Courses
              </a>
            </div>
            <div className="hidden lg:block">
              <div className="bg-gray-800 h-96 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative min-h-screen bg-black">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="text-white">
            <h1 className="hero-title text-5xl lg:text-6xl font-bold leading-tight">
              {data.title || 'SAFe® 6.0 Framework Training & Certification'}
            </h1>
            <p className="hero-subtitle mt-6 text-xl opacity-0 text-gray-300">
              {data.subtitle || 'SAFe® certifications validate your skills and open new doors for career advancement'}
            </p>
            
            {/* Review Ratings */}
            {data.reviewRatings && data.reviewRatings.length > 0 && (
              <div className="mt-8 space-y-4">
                {data.reviewRatings.map((rating, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold" style={{ color: rating.platformColor || '#4285F4' }}>
                        {rating.rating}
                      </span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5" fill="currentColor" style={{ color: rating.platformColor || '#4285F4' }} viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <span className="text-gray-400">Based on {rating.reviewCount}</span>
                    {rating.platformLogo && (
                      <img 
                        src={urlFor(rating.platformLogo).width(60).url()} 
                        alt={rating.platform}
                        className="h-6 w-auto"
                      />
                    )}
                  </div>
                ))}
              </div>
            )}
            
            {/* Accreditation Badges */}
            {data.accreditationBadges && data.accreditationBadges.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-4">
                {data.accreditationBadges.map((badge, idx) => (
                  <div key={idx} className="flex items-center space-x-2 bg-white bg-opacity-10 rounded-lg p-3">
                    <img
                      src={urlFor(badge.badge).width(60).height(60).url()}
                      alt={badge.name}
                      className="h-12 w-12 object-contain"
                    />
                    <div>
                      <p className="text-sm font-semibold">{badge.name}</p>
                      <p className="text-xs text-gray-400">{badge.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            <a href={data.buttonLink || '#courses'} className="hero-cta mt-8 inline-block bg-red-600 px-8 py-4 rounded-lg font-semibold opacity-0 hover:bg-red-700 transition-colors">
              {data.buttonText || 'Explore Courses'}
            </a>
          </div>
          
          {/* Right Side - Image */}
          <div className="hidden lg:block">
            {data.heroImage ? (
              <img
                src={urlFor(data.heroImage).width(600).height(700).url()}
                alt="Hero"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            ) : (
              <div className="bg-gray-800 h-96 rounded-lg"></div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
