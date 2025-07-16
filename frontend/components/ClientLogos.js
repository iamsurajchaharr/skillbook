import React, { useEffect, useRef } from 'react'
import { urlFor } from '../utils/imageBuilder'
import anime from 'animejs'
import { AnimatedStaggerContainer, AnimatedItem } from './PageAnimations'

export default function ClientLogos({ data }) {
  const sectionRef = useRef()

  useEffect(() => {
    if (sectionRef.current) {
      const animationType = data?.animation || 'fade'
      
      if (animationType === 'none') return

      const targets = sectionRef.current.querySelectorAll('.logo-item')
      // const animationConfig = {
      //   targets,
      //   delay: anime.stagger(100),
      //   duration: 800,
      //   easing: 'easeOutExpo'
      // }

      // switch (animationType) {
      //   case 'fade':
      //     animationConfig.opacity = [0, 1]
      //     break
      //   case 'slide-up':
      //     animationConfig.opacity = [0, 1]
      //     animationConfig.translateY = [30, 0]
      //     break
      //   case 'scale':
      //     animationConfig.opacity = [0, 1]
      //     animationConfig.scale = [0.8, 1]
      //     break
      //   default:
      //     animationConfig.opacity = [0, 1]
      // }

      // anime(animationConfig)
    }
  }, [data])

  const getBackgroundColor = (color) => {
    // All logos now have completely transparent backgrounds
    return ''
  }

  const getLogoStyle = (style) => {
    switch (style) {
      case 'circular-shadow':
        return 'rounded-full'
      case 'circular':
        return 'rounded-full'
      case 'rounded-shadow':
        return 'rounded-lg'
      case 'rounded':
        return 'rounded-lg'
      default:
        return 'rounded-full'
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

  const getCircularPosition = (index, total) => {
    // Calculate angle for each logo in a circle
    const angle = (index / total) * 2 * Math.PI
    const radius = 180 // Adjust this value to change circle size
    
    // Calculate x and y positions on the circle
    const x = Math.cos(angle) * radius
    const y = Math.sin(angle) * radius
    
    // Add some predefined randomness to make it less perfect
    const randomOffsets = [
      { x: -15, y: 10 }, { x: 20, y: -5 }, { x: -10, y: -20 }, { x: 25, y: 15 },
      { x: -20, y: -10 }, { x: 15, y: 20 }, { x: -5, y: -25 }, { x: 30, y: -15 },
      { x: -25, y: 5 }, { x: 10, y: -30 }, { x: -15, y: 25 }, { x: 20, y: 10 }
    ]
    
    const offset = randomOffsets[index % randomOffsets.length]
    
    return {
      x: x + offset.x,
      y: y + offset.y
    }
  }

  if (!data) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Clients who trust us
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our clients have achieved remarkable success across key business metrics, from boosting adaptability and efficiency to driving innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8 max-w-4xl mx-auto">
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
              <div 
                key={idx} 
                className="logo-item opacity-0 flex justify-center"
              >
                <div className={`${getLogoSize('medium')} ${getLogoStyle('circular-shadow')} ${getBackgroundColor(logo.color)} flex items-center justify-center`}>
                  <div className="w-16 h-16 rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold text-gray-700">{logo.name.charAt(0)}</span>
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
        <AnimatedStaggerContainer className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8 max-w-4xl mx-auto">
          {sortedLogos.map((logo, idx) => (
            <AnimatedItem 
              key={idx} 
              className="logo-item opacity-0 flex justify-center"
            >
              <div 
                className={`${getLogoSize(data.logoSize)} ${getLogoStyle(data.logoStyle)} ${getBackgroundColor(logo.backgroundColor)} flex items-center justify-center transition-transform duration-300 hover:scale-110 relative group`}
              >
                {logo.logo ? (
                  <img
                    src={urlFor(logo.logo).width(64).height(64).url()}
                    alt={logo.name}
                    className="w-16 h-16 object-contain"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold text-gray-700">{logo.name.charAt(0)}</span>
                  </div>
                )}
                
                {/* Hover tooltip */}
                {data.showLogoNames && (
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                    {logo.name}
                  </div>
                )}
              </div>
            </AnimatedItem>
          ))}
        </AnimatedStaggerContainer>
      </div>
    </section>
  )
} 