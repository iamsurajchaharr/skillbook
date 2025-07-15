import React from 'react'
import { urlFor } from '../utils/imageBuilder'

export default function Features({ items }) {
  if (!items || items.length === 0) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-red-600 uppercase tracking-wide mb-2 block">
                EXPLORE
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                What is SAFe®?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                The Scaled Agile Framework (SAFe®) is a proven methodology designed to help large organizations streamline their software development processes. It integrates Agile principles and Lean thinking to deliver high-quality, customer-centric products faster. SAFe® is particularly effective for managing complex, large-scale projects where multiple teams collaborate on different components. By providing a clear structure, SAFe® aligns teams with a shared vision and ensures continuous improvement.
              </p>
              <div className="flex items-center space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 bg-gray-300 rounded-full"></div>
                ))}
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                  +2
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-64 h-96 bg-gray-200 rounded-lg mx-auto"></div>
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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 space-y-16">
        {items.map(item => (
          <div
            key={item._id}
            className={`safe-section grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${item.invert ? 'lg:grid-flow-col-dense' : ''}`}
          >
            {/* Left Column - Content */}
            <div className={`${item.invert ? 'lg:col-start-2' : ''}`}>
              {item.category && (
                <span className="text-sm font-semibold text-red-600 uppercase tracking-wide mb-2 block">
                  {item.category}
                </span>
              )}
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {item.title || 'What is SAFe®?'}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
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

            {/* Right Column - Video Call Interface */}
            <div className={`relative ${item.invert ? 'lg:col-start-1' : ''}`}>
              <div className="relative">
                {/* Background Decorative Shape */}
                {item.backgroundShape && (
                  <div className="absolute -right-20 -top-20 w-80 h-80 opacity-10">
                    <img
                      src={urlFor(item.backgroundShape).width(320).height(320).url()}
                      alt="Background decoration"
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
                
                {/* Video Call Interface */}
                {item.videoCallImage ? (
                                     <div className="relative z-10">
                     <img
                       src={urlFor(item.videoCallImage).width(400).height(600).url()}
                       alt="Video call interface"
                       className="video-call-interface w-64 h-96 mx-auto object-contain"
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
                ) : (
                  <div className="relative z-10">
                    <div className="w-64 h-96 bg-gray-200 rounded-lg mx-auto flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4"></div>
                        <p className="text-gray-500">Video Call Interface</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
