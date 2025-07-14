import React from 'react'
import { urlFor } from '../utils/imageBuilder'
export default function Accreditation({ items }) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Accreditations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map(item => (
            <div key={item._id} className="bg-white rounded shadow p-6 flex flex-col items-center">
              <img
                src={item.badge ? urlFor(item.badge).width(120).url() : '/placeholder-badge.png'}
                alt={item.name}
                className="h-20 object-contain mb-4"
              />
              <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
              <p className="text-gray-600 text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 