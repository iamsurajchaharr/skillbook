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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="lg:col-span-1 text-white">
              <h1 className="hero-title text-5xl lg:text-6xl font-bold leading-tight">
                SAFe® 6.0 Framework Training & Certification
              </h1>
              <p className="hero-subtitle mt-6 text-xl text-gray-300">
                SAFe® certifications validate your skills and open new doors for career advancement
              </p>
              <a href="#courses" className="hero-cta mt-8 inline-block bg-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                Explore Courses
              </a>
            </div>
            <div className="hidden lg:block lg:col-span-1">
              <div className="bg-gray-800 h-full w-full rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative min-h-screen bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="lg:col-span-1 text-white">
            <h1 className="hero-title text-5xl lg:text-6xl font-bold leading-tight">
              {data.title || 'SAFe® 6.0 Framework Training & Certification'}
            </h1>
            <p className="hero-subtitle mt-6 text-xl text-gray-300">
              {data.subtitle || 'SAFe® certifications validate your skills and open new doors for career advancement'}
            </p>
            
            {/* Review Ratings */}
            {data.reviewRatings && data.reviewRatings.length > 0 && (
              <div className="mt-8 flex items-center space-x-8">
                {/* First Rating - Google */}
                <div className="flex flex-col items-start space-y-2">
                  <span className="text-gray-400 text-sm">Based on 2900 reviews</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 font-semibold text-sm mr-1">G</span>
                    <span className="text-red-600 font-semibold text-sm mr-1">o</span>
                    <span className="text-yellow-600 font-semibold text-sm mr-1">o</span>
                    <span className="text-blue-600 font-semibold text-sm mr-1">g</span>
                    <span className="text-green-600 font-semibold text-sm mr-1">l</span>
                    <span className="text-red-600 font-semibold text-sm">e</span>
                  </div>
                </div>

                {/* Second Rating - Trustpilot */}
                <div className="flex flex-col items-start space-y-2">
                  <span className="text-gray-400 text-sm">Based on 1500 reviews</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="flex items-center space-x-3">
                    {data.reviewRatings[1]?.platformLogo && (
                      <img 
                        src={urlFor(data.reviewRatings[1].platformLogo).width(80).url()} 
                        alt={data.reviewRatings[1].platform}
                        className="h-8 w-auto"
                      />
                    )}
                    {data.reviewRatings[2]?.platformLogo && (
                      <img 
                        src={urlFor(data.reviewRatings[2].platformLogo).width(80).url()} 
                        alt={data.reviewRatings[2].platform}
                        className="h-8 w-auto"
                      />
                    )}
                  </div>
                </div>
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
            
            <a href={data.buttonLink || '#courses'} className="hero-cta mt-8 inline-block bg-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors">
              {data.buttonText || 'Explore Courses'}
            </a>
          </div>
          
          {/* Right Side - Image */}
          <div className="hidden lg:block lg:col-span-1">
            {data.heroImage ? (
              <img
                src={urlFor(data.heroImage).width(500).height(600).url()}
                alt="Hero"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            ) : (
              <div className="bg-gray-800 h-full w-full rounded-lg"></div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
