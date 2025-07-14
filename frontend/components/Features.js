import React from 'react'
import { urlFor } from '../utils/imageBuilder'

export default function Features({ items }) {
  if (!items || items.length === 0) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Our Features</h2>
          <div className="text-center py-12">
            <p className="text-gray-600">No features available at the moment.</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 space-y-16">
        {items.map(item => (
          <div
            key={item._id}
            className={`flex flex-col md:flex-row ${item.invert ? 'md:flex-row-reverse' : ''} items-center`}
          >
            <div className="md:w-1/2">
              <img
                src={item.image ? urlFor(item.image).width(600).url() : '/placeholder-feature.jpg'}
                alt={item.title}
                className="rounded-lg shadow"
              />
            </div>
            <div className="md:w-1/2 md:px-12 mt-8 md:mt-0">
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="mt-4 text-gray-700">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
