import React, { useEffect, useRef } from 'react'
import { urlFor } from '../utils/imageBuilder'
import anime from 'animejs'

export default function WhyChooseUs({ data }) {
  const sectionRef = useRef()

  useEffect(() => {
    if (sectionRef.current) {
      anime({
        targets: sectionRef.current.querySelectorAll('.benefit-card'),
        opacity: [0,1],
        translateY: [40,0],
        delay: anime.stagger(200),
        duration: 800,
        easing: 'easeOutExpo'
      })
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

  if (!data) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why SAFe®?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover the key benefits and advantages of implementing the Scaled Agile Framework in your organization. SAFe® provides proven methodologies that drive success in large-scale Agile transformations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Proven Methodology',
                description: 'SAFe® has been successfully implemented in thousands of organizations worldwide, delivering measurable results and improved business outcomes.',
                icon: null
              },
              {
                title: 'Scalable Framework',
                description: 'Designed specifically for large organizations, SAFe® provides a structured approach to scaling Agile practices across multiple teams.',
                icon: null
              },
              {
                title: 'Continuous Improvement',
                description: 'Built on Lean-Agile principles, SAFe® promotes continuous learning and improvement at all levels of the organization.',
                icon: null
              }
            ].map((benefit, idx) => (
              <div key={idx} className="benefit-card bg-white rounded-lg shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300 opacity-0">
                {benefit.icon ? (
                  <img
                    src={urlFor(benefit.icon).width(64).height(64).url()}
                    alt={benefit.title}
                    className="w-16 h-16 mb-6 mx-auto object-contain"
                  />
                ) : (
                  <div className="w-16 h-16 bg-red-100 rounded-lg mb-6 mx-auto flex items-center justify-center">
                    <div className="w-8 h-8 bg-red-500 rounded"></div>
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {benefit.description}
                </p>
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
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            {data.title || (isStepSection ? 'Our Process' : 'Why SAFe®?')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {data.description || (isStepSection 
              ? 'Follow our proven process to implement SAFe® successfully in your organization.' 
              : 'Discover the key benefits and advantages of implementing the Scaled Agile Framework in your organization. SAFe® provides proven methodologies that drive success in large-scale Agile transformations.'
            )}
          </p>
        </div>

        {/* Benefits/Steps Grid */}
        <div className={`grid ${getLayoutClass(data.layout)} gap-8`}>
          {data.reasons && data.reasons.map((reason, idx) => (
            <div key={idx} className="benefit-card bg-white rounded-lg shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300 opacity-0">
              {reason.icon ? (
                <img
                  src={urlFor(reason.icon).width(64).height(64).url()}
                  alt={reason.text}
                  className="w-16 h-16 mb-6 mx-auto object-contain"
                />
              ) : (
                <div className="w-16 h-16 bg-red-100 rounded-lg mb-6 mx-auto flex items-center justify-center">
                  <div className="w-8 h-8 bg-red-500 rounded"></div>
                </div>
              )}
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                {reason.text}
              </h3>
              {reason.description && (
                <p className="text-gray-600 text-center leading-relaxed">
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