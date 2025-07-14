import React from 'react'
import { urlFor } from '../utils/imageBuilder'

export default function CTA({ data }) {
  return (
    <section className="relative py-16">
      <img
        src={data.background ? urlFor(data.background).width(1920).url() : '/placeholder-cta.jpg'}
        alt="CTA background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative container mx-auto px-6 text-center text-white">
        <h2 className="text-4xl font-bold">{data.heading}</h2>
        <p className="mt-4">{data.subheading}</p>
        <a href={data.buttonLink} className="mt-8 inline-block bg-red-600 px-6 py-3 rounded">
          {data.buttonText}
        </a>
      </div>
    </section>
  )
}
