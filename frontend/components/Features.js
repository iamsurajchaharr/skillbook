import React from 'react'
import { urlFor } from '../utils/imageBuilder'
import { AnimatedStaggerContainer, AnimatedItem } from './PageAnimations'

export default function Features({ items }) {
  if (!items || items.length === 0) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start justify-center gap-8 max-w-7xl mx-auto">
            {/* Content Section */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <span className="text-sm font-semibold text-red-600 uppercase tracking-wide mb-2 block">
                EXPLORE
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                What is SAFe®?
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 max-w-lg">
                The Scaled Agile Framework (SAFe®) is a proven methodology designed to help large organizations streamline their software development processes. It integrates Agile principles and Lean thinking to deliver high-quality, customer-centric products faster. SAFe® is particularly effective for managing complex, large-scale projects where multiple teams collaborate on different components. By providing a clear structure, SAFe® aligns teams with a shared vision and ensures continuous improvement.
              </p>
              <div className="flex items-center space-x-2 mb-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 bg-gray-300 rounded-full"></div>
                ))}
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                  +2
                </div>
              </div>
            </div>
            
            {/* Video Call Interface */}
            <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">
              <div className="relative flex-shrink-0">
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
                  
                  {/* Main Content */}
                  <div className="relative z-10">
                    <div className="w-full max-w-sm sm:max-w-md lg:w-80 h-64 sm:h-80 lg:h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4"></div>
                        <p className="text-gray-500">Video Call Interface</p>
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
    <section className="py-16 bg-white min-h-screen flex items-center">
      <div className="container mx-auto px-6 space-y-16">
        <AnimatedStaggerContainer>
          {items.map((item, index) => (
            <AnimatedItem key={item._id}>
              <div className="safe-section flex flex-col lg:flex-row items-start justify-center gap-8 max-w-7xl mx-auto">
                {/* Content Section */}
                <div className="w-full lg:w-1/2 order-2 lg:order-1">
                  {item.category && (
                    <span className="text-sm font-semibold text-red-600 uppercase tracking-wide mb-2 block">
                      {item.category}
                    </span>
                  )}
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                    {item.title || 'What is SAFe®?'}
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 max-w-lg">
                    {item.text || 'The Scaled Agile Framework (SAFe®) is a proven methodology designed to help large organizations streamline their software development processes. It integrates Agile principles and Lean thinking to deliver high-quality, customer-centric products faster. SAFe® is particularly effective for managing complex, large-scale projects where multiple teams collaborate on different components. By providing a clear structure, SAFe® aligns teams with a shared vision and ensures continuous improvement.'}
                  </p>
                  {/* Team Avatars */}
                  {(item.teamAvatars && item.teamAvatars.length > 0) && (
                    <div className="flex items-center space-x-2">
                      {item.teamAvatars.map((member, idx) => (
                        <div key={idx} className="relative">
                          <img
                            src={urlFor(member.avatar).width(40).height(40).url()}
                            alt={member.name}
                            className="team-avatar w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                          />
                        </div>
                      ))}
                      {item.additionalCount && item.additionalCount > 0 && (
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold shadow-sm">
                          +{item.additionalCount}
                        </div>
                      )}
                    </div>
                  )}
                </div>
                
                {/* Video Call Interface */}
                <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">
                  <div className="relative flex-shrink-0">
                    {/* Video Call Interface */}
                    {item.videoCallImage ? (
                      <div className="relative">
                        {/* Background Decorative Shape - Always visible */}
                        <div className="absolute inset-0 flex items-center justify-center z-0">
                          <div className="w-full h-full flex items-center justify-center">
                            <div className="relative">
                              <div className="w-80 h-80 bg-red-500 rounded-full opacity-20"></div>
                              {item.backgroundShape ? (
                                <img
                                  src={urlFor(item.backgroundShape).width(320).height(320).url()}
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
                        
                        {/* Main Image */}
                        <div className="relative z-10 overflow-hidden rounded-lg">
                          <img
                            src={urlFor(item.videoCallImage).width(500).height(700).url()}
                            alt="Video call interface"
                            className="video-call-interface w-full max-w-sm sm:max-w-md lg:w-80 h-64 sm:h-80 lg:h-96 object-cover rounded-lg"
                            style={{ 
                              objectPosition: 'center 60%',
                              transform: 'scale(1.2) translateY(-10%)'
                            }}
                          />
                          {/* Overlay with team avatars */}
                          {(item.teamAvatars && item.teamAvatars.length > 0) && (
                            <div className="absolute top-20 left-4 bg-white rounded-lg p-2 shadow-lg">
                              <div className="flex items-center space-x-1">
                                {item.teamAvatars.slice(0, 3).map((member, idx) => (
                                  <div key={idx} className="relative">
                                    <img
                                      src={urlFor(member.avatar).width(24).height(24).url()}
                                      alt={member.name}
                                      className="w-6 h-6 rounded-full object-cover"
                                    />
                                  </div>
                                ))}
                                {item.additionalCount && item.additionalCount > 0 && (
                                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                                    +{item.additionalCount}
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div className="relative">
                        {/* Background Decorative Shape - Always visible */}
                        <div className="absolute inset-0 flex items-center justify-center z-0">
                          <div className="w-full h-full flex items-center justify-center">
                            <div className="relative">
                              <div className="w-80 h-80 bg-red-500 rounded-full opacity-20"></div>
                              {item.backgroundShape ? (
                                <img
                                  src={urlFor(item.backgroundShape).width(320).height(320).url()}
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
                        
                        {/* Placeholder */}
                        <div className="relative z-10">
                          <div className="w-full max-w-sm sm:max-w-md lg:w-80 h-64 sm:h-80 lg:h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                            <div className="text-center">
                              <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4"></div>
                              <p className="text-gray-500">Video Call Interface</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedStaggerContainer>
      </div>
    </section>
  )
}
