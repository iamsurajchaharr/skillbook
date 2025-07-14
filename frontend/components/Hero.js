import React, { useEffect } from 'react'
import anime from 'animejs'
import { urlFor } from '../utils/imageBuilder'

export default function Hero({ data }) {
  useEffect(() => {
    anime({
      targets: '.hero-title',
      opacity: [0,1],
      translateY: [-20,0],
      duration: 1000,
      easing: 'easeOutExpo'
    })
    anime({
      targets: '.hero-subtitle',
      opacity: [0,1],
      translateY: [-10,0],
      delay: 400,
      duration: 800,
      easing: 'easeOutExpo'
    })
    anime({
      targets: '.hero-cta',
      opacity: [0,1],
      scale: [0.95,1],
      delay: 800,
      duration: 600,
      easing: 'easeOutExpo'
    })
  }, [])

  // Handle case when data is null or undefined
  if (!data) {
    return (
      <section className="relative h-screen bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="relative z-10 container mx-auto px-6 py-32 text-white text-center md:text-left">
          <h1 className="hero-title text-5xl font-bold">Welcome to Our Course Platform</h1>
          <p className="hero-subtitle mt-4 text-xl opacity-0">Discover amazing courses and enhance your skills</p>
          <a href="#courses" className="hero-cta mt-8 inline-block bg-red-600 px-6 py-3 rounded opacity-0">
            Explore Courses
          </a>
        </div>
      </section>
    )
  }

  return (
    <section className="relative h-screen">
      <img
        src={data.background ? urlFor(data.background).width(1920).url() : '/placeholder-hero.jpg'}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 container mx-auto px-6 py-32 text-white text-center md:text-left">
        <h1 className="hero-title text-5xl font-bold">{data.title || 'Welcome to Our Course Platform'}</h1>
        <p className="hero-subtitle mt-4 text-xl opacity-0">{data.subtitle || 'Discover amazing courses and enhance your skills'}</p>
        {data.badges && data.badges.length > 0 && (
          <div className="flex flex-row justify-center md:justify-start gap-4 mt-4">
            {data.badges.map((badge, idx) => (
              <img
                key={idx}
                src={urlFor(badge).width(80).height(80).url()}
                alt={`Accreditation badge ${idx + 1}`}
                className="h-12 w-12 object-contain bg-white rounded shadow"
              />
            ))}
          </div>
        )}
        <a href={data.buttonLink || '#courses'} className="hero-cta mt-8 inline-block bg-red-600 px-6 py-3 rounded opacity-0">
          {data.buttonText || 'Explore Courses'}
        </a>
      </div>
    </section>
  )
}
