import React from 'react'
import { urlFor } from '../utils/imageBuilder'

export default function FeaturesStrip({ data }) {
  if (!data || !data.features || data.features.length === 0) {
    return (
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-5 gap-8">
            {[
              { label: 'All Levels', icon: null },
              { label: '24 Weeks', icon: null },
              { label: 'Continuous learning', icon: null },
              { label: 'Industry Immersion', icon: null },
              { label: 'Exam Prep', icon: null }
            ].map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-orange-500 rounded-lg mb-3 flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded"></div>
                </div>
                <span className="text-sm font-medium text-gray-700">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  const getBackgroundColor = () => {
    switch (data.backgroundColor) {
      case 'gray':
        return 'bg-gray-50'
      case 'light-blue':
        return 'bg-blue-50'
      default:
        return 'bg-white'
    }
  }

  return (
    <section className={`py-8 ${getBackgroundColor()} border-b`}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-5 gap-8">
          {data.features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              {feature.icon ? (
                <img
                  src={urlFor(feature.icon).width(48).height(48).url()}
                  alt={feature.label}
                  className="w-12 h-12 object-contain mb-3"
                />
              ) : (
                <div className="w-12 h-12 bg-orange-500 rounded-lg mb-3 flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded"></div>
                </div>
              )}
              <span className="text-sm font-medium text-gray-700">{feature.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 