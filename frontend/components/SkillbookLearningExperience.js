import React, { useEffect, useRef } from 'react'
import { urlFor } from '../utils/imageBuilder'
import anime from 'animejs'

export default function SkillbookLearningExperience({ data }) {
  const sectionRef = useRef()

  useEffect(() => {
    if (sectionRef.current) {
      anime({
        targets: sectionRef.current.querySelectorAll('.benefit-item'),
        opacity: [0,1],
        translateX: [-20,0],
        delay: anime.stagger(200),
        duration: 800,
        easing: 'easeOutExpo'
      })
    }
  }, [data])

  if (!data) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                The Skillbook Learning Experience
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                As a Scaled Agile Gold Partner, we have access to the latest tools, resources, and best practices, allowing us to offer our clients the most advanced Agile solutions for their business needs.
              </p>
              
              {/* CTA Button */}
              <div className="text-center mb-4">
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300">
                  Register Now
                </button>
              </div>
              
              {/* Discount Info */}
              <div className="text-center mb-8">
                <p className="text-sm text-gray-600">
                  Save <span className="font-bold">$500</span> with <span className="text-orange-500">Early Bird Tickets</span>
                </p>
              </div>
              
              {/* Benefits List */}
              <div className="space-y-4">
                {[
                  'Recognition as a trusted and credible partner by Scaled Agile, Inc.',
                  'Trained and mentored 20,000+ individuals across the globe',
                  'Highly interactive workshops and curated course materials',
                  'Rated 5-star reviews on Google and Trustpilot'
                ].map((benefit, idx) => (
                  <div key={idx} className="benefit-item opacity-0 bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-500 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        {benefit}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Illustrative Images */}
            <div className="relative space-y-6">
              {/* Top Image - Man at desk */}
              <div className="relative">
                <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-b from-gray-300 to-white"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
              </div>
              
              {/* Middle Image - Video call */}
              <div className="relative">
                <div className="w-full h-48 bg-gray-200 rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-b from-gray-300 to-white"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
              </div>
              
              {/* Bottom Image - Woman with headphones */}
              <div className="relative">
                <div className="w-full h-56 bg-gray-200 rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-b from-gray-300 to-white"></div>
                </div>
                <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  const getBackgroundColor = (color) => {
    switch (color) {
      case 'light-gray':
        return 'bg-gray-50'
      case 'light-blue':
        return 'bg-blue-50'
      default:
        return 'bg-white'
    }
  }

  const getTextColor = (color) => {
    switch (color) {
      case 'gray':
        return 'text-gray-600'
      default:
        return 'text-gray-900'
    }
  }

  const getButtonColor = (color) => {
    switch (color) {
      case 'coral-red':
        return 'bg-red-500 hover:bg-red-600'
      default:
        return 'bg-red-500 hover:bg-red-600'
    }
  }

  return (
    <section className={`py-16 ${getBackgroundColor(data.backgroundColor)}`} ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className={`text-3xl lg:text-4xl font-bold mb-6 ${getTextColor(data.textColor)}`}>
              {data.title || 'The Skillbook Learning Experience'}
            </h2>
            <p className={`text-lg leading-relaxed mb-8 ${getTextColor(data.textColor)}`}>
              {data.description || 'As a Scaled Agile Gold Partner, we have access to the latest tools, resources, and best practices, allowing us to offer our clients the most advanced Agile solutions for their business needs.'}
            </p>
            
            {/* CTA Button */}
            {data.ctaButton && (
              <div className="text-center mb-4">
                <a 
                  href={data.ctaButton.link || '#'}
                  className={`${getButtonColor(data.ctaButton.backgroundColor)} text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 inline-block`}
                >
                  {data.ctaButton.text || 'Register Now'}
                </a>
              </div>
            )}
            
            {/* Discount Info */}
            {data.discountInfo && (
              <div className="text-center mb-8">
                <p className="text-sm text-gray-600">
                  {data.discountInfo.text ? (
                    data.discountInfo.text.replace(
                      data.discountInfo.amount,
                      `<span class="font-bold">${data.discountInfo.amount}</span>`
                    ).replace(
                      'Early Bird Tickets',
                      '<span class="text-orange-500">Early Bird Tickets</span>'
                    )
                  ) : (
                    <>
                      Save <span className="font-bold">{data.discountInfo.amount || '$500'}</span> with <span className="text-orange-500">Early Bird Tickets</span>
                    </>
                  )}
                </p>
              </div>
            )}
            
            {/* Benefits List */}
            <div className="space-y-4">
              {data.benefits && data.benefits.map((benefit, idx) => (
                <div key={idx} className="benefit-item opacity-0 bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                  <div className="flex items-start space-x-3">
                    {benefit.icon ? (
                      <img
                        src={urlFor(benefit.icon).width(24).height(24).url()}
                        alt="Benefit icon"
                        className="w-6 h-6 flex-shrink-0 mt-0.5"
                      />
                    ) : (
                      <div className="w-6 h-6 bg-red-500 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                    <p className="text-gray-700 leading-relaxed">
                      {benefit.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Illustrative Images */}
          <div className="relative space-y-6">
            {data.illustrativeImages && data.illustrativeImages.map((imageData, idx) => (
              <div key={idx} className="relative">
                <div className="w-full h-48 md:h-56 lg:h-64 rounded-lg overflow-hidden">
                  <img
                    src={urlFor(imageData.image).width(400).height(300).url()}
                    alt={imageData.altText || 'Learning experience illustration'}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Fade effect based on position */}
                {imageData.position === 'top' && (
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
                )}
                {imageData.position === 'middle' && (
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
                )}
                {imageData.position === 'bottom' && (
                  <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent"></div>
                )}
              </div>
            ))}
            
            {/* Fallback images if no data provided */}
            {(!data.illustrativeImages || data.illustrativeImages.length === 0) && (
              <>
                {/* Top Image - Man at desk */}
                <div className="relative">
                  <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-b from-gray-300 to-white"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
                </div>
                
                {/* Middle Image - Video call */}
                <div className="relative">
                  <div className="w-full h-48 bg-gray-200 rounded-lg overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-b from-gray-300 to-white"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
                </div>
                
                {/* Bottom Image - Woman with headphones */}
                <div className="relative">
                  <div className="w-full h-56 bg-gray-200 rounded-lg overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-b from-gray-300 to-white"></div>
                  </div>
                  <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent"></div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
} 