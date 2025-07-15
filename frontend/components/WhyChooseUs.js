import React, { useEffect, useRef } from 'react'
import { urlFor } from '../utils/imageBuilder'
import anime from 'animejs'

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
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-coral-red uppercase tracking-wide mb-2 block">
              EXPLORE
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why SAFe®?
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Organizations often face challenges as they scale, especially in coordinating efforts across multiple teams. SAFe® bridges this gap by creating a common framework that fosters flexibility and collaboration across all levels. With its structured approach to planning, SAFe® enables:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <div key={idx} className="benefit-card bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 opacity-100 transform hover:-translate-y-1">
                {benefit.icon ? (
                  <img
                    src={urlFor(benefit.icon).width(80).height(80).url()}
                    alt={benefit.title}
                    className="w-20 h-20 mb-6 mx-auto object-contain"
                  />
                ) : (
                  <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-xl mb-6 mx-auto flex items-center justify-center">
                    <div className="w-10 h-10 bg-coral-red rounded-lg"></div>
                  </div>
                )}
                <h3 className="text-lg font-bold text-gray-900 mb-3 text-center leading-tight">
                  {benefit.title}
                </h3>
                {benefit.description && (
                  <p className="text-gray-600 text-center leading-relaxed text-sm">
                    {benefit.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  const isStepSection = data.sectionType === 'step-section'

  return (
    <section className={`py-16 ${getSectionBackground(data.backgroundColor)}`} ref={sectionRef}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          {data.sectionType === 'why-choose-us' && (
            <span className={`text-sm font-semibold ${getCategoryColor(data.sectionType)} uppercase tracking-wide mb-2 block`}>
              EXPLORE
            </span>
          )}
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            {data.title || (isStepSection ? 'Our Process' : 'Why SAFe®?')}
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {data.description || (isStepSection 
              ? 'Follow our proven process to implement SAFe® successfully in your organization.' 
              : 'Discover the key benefits and advantages of implementing the Scaled Agile Framework in your organization. SAFe® provides proven methodologies that drive success in large-scale Agile transformations.'
            )}
          </p>
        </div>

        {/* Benefits/Steps Grid */}
        <div className={`grid ${getLayoutClass(data.layout)} gap-8`}>
          {data.reasons && data.reasons.map((reason, idx) => (
            <div key={idx} className="benefit-card bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 opacity-100 transform hover:-translate-y-1">
              {reason.icon ? (
                <img
                  src={urlFor(reason.icon).width(80).height(80).url()}
                  alt={typeof reason === 'string' ? reason : reason.text}
                  className="w-20 h-20 mb-6 mx-auto object-contain"
                />
              ) : (
                <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-xl mb-6 mx-auto flex items-center justify-center">
                  <div className="w-10 h-10 bg-coral-red rounded-lg"></div>
                </div>
              )}
              <h3 className="text-lg font-bold text-gray-900 mb-3 text-center leading-tight">
                {typeof reason === 'string' ? reason : reason.text}
              </h3>
              {reason.description && (
                <p className="text-gray-600 text-center leading-relaxed text-sm">
                  {reason.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 