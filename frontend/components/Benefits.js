import React, { useEffect, useRef } from 'react'
import { urlFor } from '../utils/imageBuilder'
import anime from 'animejs'
import { AnimatedStaggerContainer, AnimatedItem } from './PageAnimations'

export default function Benefits({ data }) {
  const sectionRef = useRef()

  useEffect(() => {
    if (sectionRef.current) {
      // anime({
      //   targets: '.benefit-item',
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
            {/* Left Column - Content */}
            <div className="lg:ml-16 lg:max-w-md">
              <span className="text-sm font-semibold text-coral-red uppercase tracking-wide mb-2 block">
                EXPLORE
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Benefits of SAFe®
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                SAFe® offers a range of benefits that help organizations achieve their objectives more efficiently:
              </p>
              
              {/* Benefits List */}
              <div className="space-y-6">
                {[
                  {
                    title: 'Improved Communication and Collaboration',
                    description: 'Facilitates frequent communication between teams and stakeholders, ensuring everyone is aligned.'
                  },
                  {
                    title: 'Faster Time-to-Market',
                    description: 'Streamlines development processes to deliver value to customers more quickly.'
                  },
                  {
                    title: 'Customer-Centric Development',
                    description: 'Focuses on delivering solutions that meet customer needs and expectations.'
                  },
                  {
                    title: 'Enhanced Productivity',
                    description: 'Optimizes workflows and reduces waste to improve overall team performance.'
                  }
                ].map((benefit, idx) => (
                  <div key={idx} className="benefit-item opacity-100">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">
                      {benefit.title}:
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                    {idx === 0 && (
                      <div className="w-16 h-px bg-coral-red mt-4"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Mobile Phone Mockup */}
            <div className="relative">
              {/* Mobile Phone */}
              <div className="relative">
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
                
                {/* Mobile Phone Content */}
                <div className="relative z-10">
                 <div className="mobile-phone w-64 h-96 bg-white border-4 border-amber-800 rounded-3xl mx-auto shadow-2xl p-4">
                  {/* Phone Screen Content */}
                  <div className="h-full bg-gray-50 rounded-2xl p-4">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center mb-4 text-xs text-gray-600">
                      <span>9:41</span>
                      <div className="flex space-x-1">
                        <div className="w-4 h-2 bg-gray-400 rounded"></div>
                        <div className="w-4 h-2 bg-gray-400 rounded"></div>
                      </div>
                    </div>
                    
                    {/* Benefits List */}
                    <div className="space-y-3">
                      {[
                        { number: '01', text: 'Faster time-to-market' },
                        { number: '02', text: 'Improvements in quality' },
                        { number: '03', text: 'Increase in productivity' },
                        { number: '04', text: 'Better employee engagement' }
                      ].map((item, idx) => (
                        <div key={idx} className="bg-blue-100 rounded-lg p-3 shadow-sm">
                          <div className="flex items-center space-x-3">
                            <span className="text-sm font-bold text-blue-600">{item.number}</span>
                            <span className="text-sm text-gray-700">{item.text}</span>
                          </div>
                        </div>
                      ))}
                    </div>
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
    <section className="py-16 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="lg:ml-16 lg:max-w-md">
            {data.category && (
              <span className="text-sm font-semibold text-coral-red uppercase tracking-wide mb-2 block">
                {data.category}
              </span>
            )}
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {data.title || 'Benefits of SAFe®'}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {data.description || 'SAFe® offers a range of benefits that help organizations achieve their objectives more efficiently:'}
            </p>
            
            {/* Benefits List */}
            <AnimatedStaggerContainer className="space-y-6">
              {data.benefits && data.benefits.map((benefit, idx) => (
                <AnimatedItem key={idx}>
                  <div className="benefit-item opacity-100">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    {typeof benefit === 'string' ? benefit : benefit.title}:
                  </h3>
                  {typeof benefit === 'object' && benefit.description && (
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  )}
                  {idx === 0 && (
                    <div className="w-16 h-px bg-coral-red mt-4"></div>
                  )}
                  </div>
                </AnimatedItem>
              ))}
            </AnimatedStaggerContainer>
          </div>

          {/* Right Column - Mobile Phone Mockup */}
          <div className="relative">
            {/* Mobile Phone */}
            <div className="relative">
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
              
              {/* Mobile Phone Content */}
              <div className="relative z-10">
              {data.mobileMockup ? (
                <img
                  src={urlFor(data.mobileMockup).width(400).height(600).url()}
                  alt="Mobile phone mockup"
                  className="w-64 h-96 mx-auto object-contain"
                />
              ) : (
                                 <div className="mobile-phone w-64 h-96 bg-white border-4 border-amber-800 rounded-3xl mx-auto shadow-2xl p-4">
                  {/* Phone Screen Content */}
                  <div className="h-full bg-gray-50 rounded-2xl p-4">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center mb-4 text-xs text-gray-600">
                      <span>9:41</span>
                      <div className="flex space-x-1">
                        <div className="w-4 h-2 bg-gray-400 rounded"></div>
                        <div className="w-4 h-2 bg-gray-400 rounded"></div>
                      </div>
                    </div>
                    
                    {/* Benefits List */}
                    <div className="space-y-3">
                      {data.mobileBenefits && data.mobileBenefits.map((item, idx) => (
                        <div key={idx} className="bg-blue-100 rounded-lg p-3 shadow-sm">
                          <div className="flex items-center space-x-3">
                            <span className="text-sm font-bold text-blue-600">{item.number}</span>
                            <span className="text-sm text-gray-700">{item.text}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 