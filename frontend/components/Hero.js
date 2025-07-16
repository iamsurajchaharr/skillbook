import React, { useEffect } from 'react'
import anime from 'animejs'
import { urlFor } from '../utils/imageBuilder'

export default function Hero({ data }) {
  // Handle case when data is null or undefined
  if (!data) {
    return (
      <section className="relative h-screen bg-black">
        {/* Background Image with Fade Effect */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-full md:w-1/2 h-full overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800"></div>
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-20 h-screen flex items-center">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto lg:mx-0 lg:ml-4 xl:ml-6 text-center lg:text-left">
              <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                SAFe® 6.0 Framework<br />
                Training &<br />
                Certification
              </h1>
              <p className="hero-subtitle mt-6 text-lg sm:text-xl text-gray-300">
                SAFe® certifications validate your skills and open new doors for career advancement
              </p>
              
              {/* Review Ratings and Badges */}
              <div className="mt-8 flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-8">
                {/* Google Reviews */}
                <div className="flex flex-col items-start space-y-2">
                  <span className="text-gray-400 text-sm">Based on 2,900 reviews</span>
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

                {/* Trustpilot Reviews */}
                <div className="flex flex-col items-start space-y-2">
                  <span className="text-gray-400 text-sm">Based on 2,900 reviews</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 font-semibold text-sm">Trustpilot</span>
                  </div>
                </div>

                {/* Accreditation Badges */}
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                  <div className="flex items-center space-x-3">
                    <div className="h-12 sm:h-16 w-12 sm:w-16 bg-white rounded-lg flex items-center justify-center">
                      <span className="text-black font-bold text-sm sm:text-lg">SAFe</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">SAFe Partner</p>
                      <p className="text-xs text-gray-400">Authorized Training</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-12 sm:h-16 w-12 sm:w-16 bg-white rounded-lg flex items-center justify-center">
                      <span className="text-black font-bold text-sm sm:text-lg">ISO</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">ISO Certified</p>
                      <p className="text-xs text-gray-400">Quality Management</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative h-screen bg-black">
      {/* Background Image with Fade Effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
        {data.heroImage ? (
          <div className="absolute right-0 top-0 w-full md:w-1/2 h-full overflow-hidden">
            <img
              src={urlFor(data.heroImage).width(1200).height(1600).url()}
              alt="Hero"
              className="w-full h-full object-cover object-center"
            />
          </div>
        ) : (
          <div className="absolute right-0 top-0 w-full md:w-1/2 h-full overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800"></div>
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="relative z-20 h-screen flex items-center">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto lg:mx-0 lg:ml-4 xl:ml-6 text-center lg:text-left">
            <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              {data.title ? (
                <>
                  {data.title.split(' ').slice(0, 3).join(' ')}<br />
                  {data.title.split(' ').slice(3, 5).join(' ')}<br />
                  {data.title.split(' ').slice(5).join(' ')}
                </>
              ) : (
                <>
                  SAFe® 6.0 Framework<br />
                  Training &<br />
                  Certification
                </>
              )}
            </h1>
            <p className="hero-subtitle mt-6 text-lg sm:text-xl text-gray-300">
              {data.subtitle || 'SAFe® certifications validate your skills and open new doors for career advancement'}
            </p>
            
            {/* Review Ratings and Badges */}
            <div className="mt-8 flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-8">
              {/* Google Reviews */}
              <div className="flex flex-col items-start space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400 text-sm">
                    Based on {data.reviewRatings?.[0]?.reviewCount || '2,900'} reviews
                  </span>
                  <span className="text-blue-500 font-semibold text-base">4.9</span>
                </div>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
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

              {/* Trustpilot Reviews */}
              <div className="flex flex-col items-start space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400 text-sm">
                    Based on {data.reviewRatings?.[1]?.reviewCount || '2,900'} reviews
                  </span>
                  <span className="text-green-500 font-semibold text-base">4.9</span>
                </div>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 font-semibold text-sm">Trustpilot</span>
                </div>
              </div>

              {/* Accreditation Badges */}
              {data.accreditationBadges && data.accreditationBadges.length > 0 ? (
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
                  {data.accreditationBadges.map((badge, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <img
                        src={urlFor(badge.badge).width(96).height(96).url()}
                        alt={badge.name}
                        className="h-16 sm:h-24 w-16 sm:w-24 object-contain"
                      />
                      <div>
                        <p className="text-sm font-semibold text-white">{badge.name}</p>
                        <p className="text-xs text-gray-400">{badge.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                  <div className="flex items-center space-x-3">
                    <div className="h-12 sm:h-16 w-12 sm:w-16 bg-white rounded-lg flex items-center justify-center">
                      <span className="text-black font-bold text-sm sm:text-lg">SAFe</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">SAFe Partner</p>
                      <p className="text-xs text-gray-400">Authorized Training</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-12 sm:h-16 w-12 sm:w-16 bg-white rounded-lg flex items-center justify-center">
                      <span className="text-black font-bold text-sm sm:text-lg">ISO</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">ISO Certified</p>
                      <p className="text-xs text-gray-400">Quality Management</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
