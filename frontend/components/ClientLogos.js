import React, { useEffect, useRef } from 'react'
import { urlFor } from '../utils/imageBuilder'
import anime from 'animejs'

export default function ClientLogos({ data }) {
  const sectionRef = useRef()

  useEffect(() => {
    if (sectionRef.current) {
      const animationType = data?.animation || 'fade'
      
      if (animationType === 'none') return

      const targets = sectionRef.current.querySelectorAll('.logo-item')
      const animationConfig = {
        targets,
        delay: anime.stagger(100),
        duration: 800,
        easing: 'easeOutExpo'
      }

      switch (animationType) {
        case 'fade':
          animationConfig.opacity = [0, 1]
          break
        case 'slide-up':
          animationConfig.opacity = [0, 1]
          animationConfig.translateY = [30, 0]
          break
        case 'scale':
          animationConfig.opacity = [0, 1]
          animationConfig.scale = [0.8, 1]
          break
        default:
          animationConfig.opacity = [0, 1]
      }

      anime(animationConfig)
    }
  }, [data])

  const getBackgroundColor = (color) => {
    switch (color) {
      case 'blue':
        return 'bg-blue-500'
      case 'green':
        return 'bg-green-500'
      case 'red':
        return 'bg-red-500'
      case 'yellow':
        return 'bg-yellow-500'
      case 'purple':
        return 'bg-purple-500'
      case 'pink':
        return 'bg-pink-500'
      case 'dark-blue':
        return 'bg-blue-700'
      case 'light-green':
        return 'bg-green-300'
      case 'white':
        return 'bg-white border border-gray-200'
      default:
        return 'bg-gray-500'
    }
  }

  const getLogoStyle = (style) => {
    switch (style) {
      case 'circular-shadow':
        return 'rounded-full shadow-lg'
      case 'circular':
        return 'rounded-full'
      case 'rounded-shadow':
        return 'rounded-lg shadow-lg'
      case 'rounded':
        return 'rounded-lg'
      default:
        return 'rounded-full shadow-lg'
    }
  }

  const getLogoSize = (size) => {
    switch (size) {
      case 'small':
        return 'w-16 h-16'
      case 'large':
        return 'w-24 h-24'
      default:
        return 'w-20 h-20'
    }
  }

  const getSectionBackground = (color) => {
    switch (color) {
      case 'light-gray':
        return 'bg-gray-50'
      case 'light-blue':
        return 'bg-blue-50'
      default:
        return 'bg-white'
    }
  }

  const getScatteredPosition = (index) => {
    const positions = [
      'transform translate-x-0 translate-y-0',
      'transform translate-x-4 translate-y-2',
      'transform -translate-x-2 translate-y-4',
      'transform translate-x-6 -translate-y-1',
      'transform -translate-x-4 translate-y-1',
      'transform translate-x-2 -translate-y-3',
      'transform -translate-x-1 translate-y-5',
      'transform translate-x-5 translate-y-3',
      'transform -translate-x-3 -translate-y-2',
      'transform translate-x-1 translate-y-6',
      'transform -translate-x-5 translate-y-2',
      'transform translate-x-3 -translate-y-4'
    ]
    return positions[index % positions.length]
  }

  if (!data) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Clients who trust us
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our clients have achieved remarkable success across key business metrics, from boosting adaptability and efficiency to driving innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: 'LinkedIn', color: 'blue' },
              { name: 'GitHub', color: 'green' },
              { name: 'Jira', color: 'green' },
              { name: 'Discord', color: 'dark-blue' },
              { name: 'Trello', color: 'pink' },
              { name: 'Google', color: 'blue' },
              { name: 'YouTube', color: 'red' },
              { name: 'Twitter', color: 'blue' },
              { name: 'Slack', color: 'green' },
              { name: 'VMware', color: 'white' },
              { name: 'Quora', color: 'blue' },
              { name: 'Python', color: 'red' }
            ].map((logo, idx) => (
              <div key={idx} className="logo-item opacity-0 flex justify-center">
                <div className={`${getLogoSize('medium')} ${getLogoStyle('circular-shadow')} ${getBackgroundColor(logo.color)} flex items-center justify-center`}>
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-gray-700">{logo.name.charAt(0)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  const logos = data.logos || []
  const sortedLogos = logos.sort((a, b) => (a.order || 0) - (b.order || 0))

  return (
    <section className={`py-16 ${getSectionBackground(data.backgroundColor)}`} ref={sectionRef}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            {data.title || 'Clients who trust us'}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {data.description || 'Our clients have achieved remarkable success across key business metrics, from boosting adaptability and efficiency to driving innovation.'}
          </p>
        </div>
        
        {/* Logos Grid */}
        <div className={`${
          data.layout === 'scattered' 
            ? 'grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8' 
            : 'grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8'
        }`}>
          {sortedLogos.map((logo, idx) => (
            <div 
              key={idx} 
              className={`logo-item opacity-0 flex justify-center ${
                data.layout === 'scattered' ? getScatteredPosition(idx) : ''
              }`}
            >
              <div 
                className={`${getLogoSize(data.logoSize)} ${getLogoStyle(data.logoStyle)} ${getBackgroundColor(logo.backgroundColor)} flex items-center justify-center transition-transform duration-300 hover:scale-110 relative group`}
              >
                {logo.logo ? (
                  <img
                    src={urlFor(logo.logo).width(48).height(48).url()}
                    alt={logo.name}
                    className="w-8 h-8 object-contain"
                  />
                ) : (
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-gray-700">{logo.name.charAt(0)}</span>
                  </div>
                )}
                
                {/* Hover tooltip */}
                {data.showLogoNames && (
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                    {logo.name}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 