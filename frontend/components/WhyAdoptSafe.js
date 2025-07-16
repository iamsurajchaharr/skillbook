import React, { useEffect, useRef } from 'react'
import { urlFor } from '../utils/imageBuilder'
import anime from 'animejs'

export default function WhyAdoptSafe({ data }) {
  const sectionRef = useRef()

  // Debug logging
  console.log('WhyAdoptSafe data:', data)
  console.log('Benefits:', data?.benefits)

  useEffect(() => {
    if (sectionRef.current) {
      // anime({
      //   targets: sectionRef.current.querySelectorAll('.benefit-item'),
      //   opacity: [0,1],
      //   translateX: [-20,0],
      //   delay: anime.stagger(200),
      //   duration: 800,
      //   easing: 'easeOutExpo'
      // })
    }
  }, [data])

  if (!data) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Video Call Interface */}
            <div className="relative">
              {/* Video Call Interface */}
              <div className="relative bg-white rounded-lg shadow-lg p-6 max-w-sm mx-auto">
                {/* Background Decorative Shape - Always visible */}
                <div className="absolute inset-0 flex items-center justify-center z-0">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="relative">
                      <div className="w-80 h-80 bg-red-500 rounded-full opacity-20"></div>
                      {/* Default decorative pattern */}
                      <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                        <svg className="w-64 h-64 text-red-400 opacity-30" fill="currentColor" viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2"/>
                          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1"/>
                          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                <div className="text-center mb-4">
                  <p className="text-sm text-gray-600">5:00 PM - 15 mins</p>
                  <h3 className="font-semibold text-gray-900">Courses</h3>
                </div>
                
                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: 38 }, (_, i) => (
                    <div 
                      key={i} 
                      className={`w-4 h-4 rounded-sm ${
                        i < 2 ? 'bg-teal-400' : 'bg-gray-200'
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

            {/* Right Column - Content */}
            <div>
              <span className="text-sm font-semibold text-red-600 uppercase tracking-wide mb-2 block">
                EXPLORE
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Adopt SAFe®?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Adopting SAFe® brings immediate and long-term benefits to organizations, particularly those struggling with managing multiple teams, scaling operations, or meeting tight deadlines. The framework:
              </p>
              
              {/* Benefits List */}
              <div className="space-y-4">
                {[
                  'Aligns business goals with IT and software development teams',
                  'Ensures a clear direction for all teams through Program Increment (PI) Planning.',
                  'Increases transparency and accountability, helping teams stay focused on delivering results.',
                  'Minimizes risk by improving communication and reducing dependencies between teams.'
                ].map((benefit, idx) => (
                  <div key={idx} className="benefit-item opacity-100 bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-500 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-black text-lg font-medium leading-relaxed">
                        {benefit}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  const getBackgroundColor = (color) => {
    switch (color) {
      case 'gray':
        return 'bg-gray-50'
      case 'light-blue':
        return 'bg-blue-50'
      default:
        return 'bg-white'
    }
  }

  return (
    <section className={`py-16 ${getBackgroundColor(data.backgroundColor)}`} ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Video Call Interface */}
          <div className="relative">
            {/* Video Call Interface */}
            <div className="relative bg-white rounded-lg shadow-lg p-6 max-w-sm mx-auto">
              {/* Background Decorative Shape - Always visible */}
              <div className="absolute inset-0 flex items-center justify-center z-0">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="relative">
                    <div className="w-80 h-80 bg-red-500 rounded-full opacity-20"></div>
                    {data.backgroundShape ? (
                      <img
                        src={urlFor(data.backgroundShape).width(320).height(320).url()}
                        alt="Background decoration"
                        className="absolute inset-0 w-full h-full object-contain opacity-30"
                      />
                    ) : (
                      /* Default decorative pattern */
                      <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                        <svg className="w-64 h-64 text-red-400 opacity-30" fill="currentColor" viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2"/>
                          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1"/>
                          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1"/>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                {data.videoCallImage ? (
                  <img
                    src={urlFor(data.videoCallImage).width(300).height(400).url()}
                    alt="Video call interface"
                    className="w-full h-auto rounded"
                  />
                ) : (
                  <>
                    <div className="text-center mb-4">
                      <p className="text-sm text-gray-600">5:00 PM - 15 mins</p>
                      <h3 className="font-semibold text-gray-900">Courses</h3>
                    </div>
                    
                    {/* Calendar Grid */}
                    <div className="grid grid-cols-7 gap-1">
                      {Array.from({ length: 38 }, (_, i) => (
                        <div 
                          key={i} 
                          className={`w-4 h-4 rounded-sm ${
                            i < 2 ? 'bg-teal-400' : 'bg-gray-200'
                          }`}
                        ></div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            {data.category && (
              <span className="text-sm font-semibold text-red-600 uppercase tracking-wide mb-2 block">
                {data.category}
              </span>
            )}
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {data.title || 'Why Adopt SAFe®?'}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {data.description || 'Adopting SAFe® brings immediate and long-term benefits to organizations, particularly those struggling with managing multiple teams, scaling operations, or meeting tight deadlines. The framework:'}
            </p>
            
            {/* Benefits List */}
            <div className="space-y-4">
              {data.benefits && data.benefits.map((benefit, idx) => (
                <div key={idx} className="benefit-item opacity-100 bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-black text-lg font-medium leading-relaxed">
                      {typeof benefit === 'string' ? benefit : (benefit.text || benefit)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 