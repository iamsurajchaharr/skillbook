import React, { useEffect, useRef } from 'react'
import anime from 'animejs'
import { urlFor } from '../utils/imageBuilder'

export default function StepSection({ data }) {
  const sectionRef = useRef()
  useEffect(() => {
    if (sectionRef.current) {
      anime({
        targets: sectionRef.current.querySelectorAll('.step-card'),
        opacity: [0,1],
        translateY: [40,0],
        delay: anime.stagger(200),
        duration: 800,
        easing: 'easeOutExpo'
      })
    }
  }, [data])
  return (
    <section className="py-16" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4 text-center">{data.heading}</h2>
        <p className="text-lg text-gray-600 mb-12 text-center">{data.subheading}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data?.steps.map((step, idx) => (
            <div key={idx} className="step-card flex flex-col items-center bg-white rounded shadow p-6 opacity-0">
              <img
                src={step.icon ? urlFor(step.icon).width(64).url() : '/placeholder-icon.png'}
                alt={step.title}
                className="h-16 mb-4 object-contain"
              />
              <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
              <p className="text-gray-600 text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 