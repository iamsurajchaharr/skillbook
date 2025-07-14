import React from 'react'
import { urlFor } from '../utils/imageBuilder'

export default function LearningExperience({ data }) {
  if (!data) return null
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4 text-center">{data.heading}</h2>
        <p className="text-lg text-gray-600 mb-12 text-center">{data.subheading}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.items && data.items.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center bg-white rounded shadow p-6">
              <img
                src={item.icon ? urlFor(item.icon).width(64).url() : '/placeholder-icon.png'}
                alt={item.title}
                className="h-16 mb-4 object-contain"
              />
              <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
              <p className="text-gray-600 text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 