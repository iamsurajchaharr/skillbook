import React, { useState } from 'react'
import { urlFor } from '../utils/imageBuilder'

export default function FAQ({ data }) {
  const [openIdx, setOpenIdx] = useState(null)
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4 text-center">{data.heading}</h2>
        <p className="text-lg text-gray-600 mb-12 text-center">{data.subheading}</p>
        <div className="space-y-6 max-w-2xl mx-auto">
          {data.faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded shadow p-6 flex items-start">
              <img
                src={faq.icon ? urlFor(faq.icon).width(40).url() : '/placeholder-icon.png'}
                alt="FAQ icon"
                className="h-10 w-10 object-contain mr-4 mt-1"
              />
              <div className="flex-1">
                <button
                  className="w-full text-left font-semibold text-lg focus:outline-none"
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                >
                  {faq.question}
                </button>
                <div className={`mt-2 text-gray-600 transition-all duration-300 ${openIdx === idx ? 'max-h-40' : 'max-h-0 overflow-hidden'}`}>
                  {openIdx === idx && <p>{faq.answer}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 