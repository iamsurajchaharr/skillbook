import React, { useEffect, useRef } from 'react'
import { urlFor } from '../utils/imageBuilder'
import anime from 'animejs'

export default function AgileExcellenceCTA({ data }) {
  const sectionRef = useRef()

  useEffect(() => {
    if (sectionRef.current) {
      // anime({
      //   targets: sectionRef.current.querySelectorAll('.cta-element'),
      //   opacity: [0,1],
      //   translateY: [30,0],
      //   delay: anime.stagger(200),
      //   duration: 800,
      //   easing: 'easeOutExpo'
      // })
    }
  }, [data])

  if (!data) {
    return (
      <section className="relative py-20 bg-gray-900 rounded-lg overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700">
          <div className="w-full h-full bg-gradient-to-br from-gray-800/80 to-gray-900/90"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 cta-element opacity-0">
              Leading the Way in Agile Excellence
            </h2>
            <p className="text-lg text-gray-200 leading-relaxed mb-8 cta-element opacity-0">
              As a Scaled Agile Gold Partner, we offer world-class SAFe® training, mentorship, and tools to help businesses excel in their Agile transformation.
            </p>
            <div className="cta-element opacity-0">
              <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 text-lg">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  const getOverlayColor = (color) => {
    switch (color) {
      case 'black':
        return 'bg-black'
      case 'dark-blue':
        return 'bg-blue-900'
      default:
        return 'bg-gray-900'
    }
  }

  const getTextColor = (color) => {
    switch (color) {
      case 'light-gray':
        return 'text-gray-200'
      default:
        return 'text-white'
    }
  }

  const getButtonColor = (style) => {
    switch (style) {
      case 'orange':
        return 'bg-orange-500 hover:bg-orange-600'
      case 'red':
        return 'bg-red-600 hover:bg-red-700'
      default:
        return 'bg-red-500 hover:bg-red-600'
    }
  }

  const getSectionHeight = (height) => {
    switch (height) {
      case 'small':
        return 'py-16'
      case 'large':
        return 'py-24'
      default:
        return 'py-20'
    }
  }

  const overlayOpacity = data.overlayOpacity || 70
  const overlayStyle = {
    backgroundColor: `rgba(0, 0, 0, ${overlayOpacity / 100})`
  }

  return (
    <section className={`relative ${getSectionHeight(data.sectionHeight)} bg-gray-900 rounded-lg overflow-hidden`} ref={sectionRef}>
      {/* Background Image */}
      {data.backgroundImage ? (
        <div className="absolute inset-0">
          <img
            src={urlFor(data.backgroundImage).width(1200).height(600).url()}
            alt="People collaborating around a table with sticky notes"
            className="w-full h-full object-cover"
          />
          <div 
            className={`absolute inset-0 ${getOverlayColor(data.overlayColor)}`}
            style={overlayStyle}
          ></div>
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700">
          <div className="w-full h-full bg-gradient-to-br from-gray-800/80 to-gray-900/90"></div>
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-6 cta-element opacity-0 ${getTextColor(data.textColor)}`}>
            {data.title || 'Leading the Way in Agile Excellence'}
          </h2>
          <p className={`text-lg leading-relaxed mb-8 cta-element opacity-0 ${getTextColor(data.textColor)}`}>
            {data.description || 'As a Scaled Agile Gold Partner, we offer world-class SAFe® training, mentorship, and tools to help businesses excel in their Agile transformation.'}
          </p>
          {data.ctaButton && (
            <div className="cta-element opacity-0">
              <a 
                href={data.ctaButton.link || '#'}
                className={`${getButtonColor(data.buttonStyle)} text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 text-lg inline-block`}
              >
                {data.ctaButton.text || 'Register Now'}
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  )
} 