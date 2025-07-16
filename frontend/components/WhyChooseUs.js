import React, { useEffect, useRef } from 'react'
import { urlFor } from '../utils/imageBuilder'
import anime from 'animejs'
import { AnimatedStaggerContainer, AnimatedItem } from './PageAnimations'

export default function WhyChooseUs({ data }) {
  const sectionRef = useRef()

  useEffect(() => {
    if (sectionRef.current) {
      // anime({
      //   targets: sectionRef.current.querySelectorAll('.benefit-card'),
      //   opacity: [0,1],
      //   translateY: [40,0],
      //   delay: anime.stagger(200),
      //   duration: 800,
      //   easing: 'easeOutExpo'
      // })
    }
  }, [data])

  const getSectionBackground = (color) => {
    switch (color) {
      case 'gray':
        return 'bg-gray-50'
      case 'light-blue':
        return 'bg-blue-50'
      default:
        return 'bg-white'
    }
  }

  const getLayoutClass = (layout) => {
    switch (layout) {
      case 'grid-2':
        return 'grid-cols-1 md:grid-cols-2'
      case 'list':
        return 'grid-cols-1'
      default:
        return 'grid-cols-1 md:grid-cols-3'
    }
  }

  const getCategoryColor = (sectionType) => {
    return sectionType === 'why-choose-us' ? 'text-coral-red' : 'text-blue-600'
  }

  if (!data) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-row items-start justify-center gap-8 max-w-7xl mx-auto mb-12">
            {/* Left Column - Title */}
            <div className="w-1/2">
              <span className="text-sm font-semibold text-coral-red uppercase tracking-wide mb-2 block">
                EXPLORE
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why SAFe®?
              </h2>
            </div>
            {/* Right Column - Description */}
            <div className="w-1/2">
              <p className="text-lg text-gray-600 leading-relaxed">
                Organizations often face challenges as they scale, especially in coordinating efforts across multiple teams. SAFe® bridges this gap by creating a common framework that fosters flexibility and collaboration across all levels. With its structured approach to planning, SAFe® enables:
              </p>
            </div>
          </div>
          <AnimatedStaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Seamless integration between teams',
                description: '',
                icon: null
              },
              {
                title: 'A focus on delivering consistent value to the customer.',
                description: '',
                icon: null
              },
              {
                title: 'Better alignment with business goals.',
                description: '',
                icon: null
              }
            ].map((benefit, idx) => (
              <AnimatedItem key={idx}>
                <div className="benefit-card relative h-[500px] rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 opacity-100 transform hover:-translate-y-1">
                  {/* Background Image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-red-200">
                    <div className="w-full h-full bg-coral-red opacity-20"></div>
                  </div>
                  {/* Overlay Text */}
                  <div className="absolute bottom-0 left-0 p-6 text-left">
                    <h3 className="text-3xl font-bold text-white mb-3 leading-tight drop-shadow-lg">
                      {benefit.title}
                    </h3>
                    {benefit.description && (
                      <p className="text-white text-xl leading-relaxed drop-shadow-lg">
                        {benefit.description}
                      </p>
                    )}
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedStaggerContainer>
        </div>
      </section>
    )
  }

  const isStepSection = data.sectionType === 'step-section'

  return (
    <section className={`py-16 ${getSectionBackground(data.backgroundColor)}`} ref={sectionRef}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-row items-start justify-center gap-8 max-w-7xl mx-auto mb-12">
          {/* Left Column - Title */}
          <div className="w-1/2">
            {data.sectionType === 'why-choose-us' && (
              <span className={`text-sm font-semibold ${getCategoryColor(data.sectionType)} uppercase tracking-wide mb-2 block`}>
                EXPLORE
              </span>
            )}
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {data.title || (isStepSection ? 'Our Process' : 'Why SAFe®?')}
            </h2>
          </div>
          {/* Right Column - Description */}
          <div className="w-1/2">
            <p className="text-lg text-gray-600 leading-relaxed">
              {data.description || (isStepSection 
                ? 'Follow our proven process to implement SAFe® successfully in your organization.' 
                : 'Discover the key benefits and advantages of implementing the Scaled Agile Framework in your organization. SAFe® provides proven methodologies that drive success in large-scale Agile transformations.'
              )}
            </p>
          </div>
        </div>

        {/* Benefits/Steps Grid */}
        <div className={`grid ${getLayoutClass(data.layout)} gap-8`}>
          {data.reasons && data.reasons.map((reason, idx) => (
            <div key={idx} className="benefit-card relative h-[500px] rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 opacity-100 transform hover:-translate-y-1">
              {/* Background Image */}
              {reason.icon ? (
                <img
                  src={urlFor(reason.icon).width(350).height(500).url()}
                  alt={typeof reason === 'string' ? reason : reason.text}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-red-200">
                  <div className="w-full h-full bg-coral-red opacity-20"></div>
                </div>
              )}
              {/* Overlay Text */}
              <div className="absolute bottom-0 left-0 p-6 text-left">
                <h3 className="text-3xl font-bold text-white mb-3 leading-tight drop-shadow-lg">
                  {typeof reason === 'string' ? reason : reason.text}
                </h3>
                {reason.description && (
                  <p className="text-white text-xl leading-relaxed drop-shadow-lg">
                    {reason.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 