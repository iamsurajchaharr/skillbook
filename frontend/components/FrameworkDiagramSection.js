import React, { useEffect, useRef } from 'react'
import { urlFor } from '../utils/imageBuilder'
import anime from 'animejs'

export default function FrameworkDiagramSection({ data }) {
  const sectionRef = useRef()



  useEffect(() => {
    if (sectionRef.current) {
      // anime({
      //   targets: sectionRef.current.querySelectorAll('.diagram-element'),
      //   opacity: [0,1],
      //   translateY: [20,0],
      //   delay: anime.stagger(100),
      //   duration: 800,
      //   easing: 'easeOutExpo'
      // })
    }
  }, [data])

  if (!data) {
    return (
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Diagrammatic Representation of the SAFe® 6.0 Framework
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              A comprehensive visual representation of the SAFe® 6.0 Framework showing all competencies, flows, and foundational elements.
            </p>
          </div>
          
          {/* Placeholder for diagram */}
          <div className="bg-white rounded-lg p-8 shadow-2xl">
            <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 text-lg">SAFe Framework Diagram</p>
            </div>
            
            {/* Copyright */}
            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500">Leffingwell et al. © Scaled Agile, Inc.</p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className={`py-16 ${data.backgroundColor === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`} ref={sectionRef}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="flex items-center">
            <h2 className={`text-3xl lg:text-4xl font-bold ${data.backgroundColor === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {data.title || 'Diagrammatic Representation of the SAFe® 6.0 Framework'}
            </h2>
          </div>
          <div className="flex flex-col items-start justify-center">
            <p className={`text-lg ${data.backgroundColor === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              {data.description || 'A comprehensive visual representation of the SAFe® 6.0 Framework showing all competencies, flows, and foundational elements.'}
            </p>
            
            {/* Button positioned below description */}
            {data.buttonText && data.buttonLink && data.buttonLink.trim() !== '' && data.buttonLink !== 'Where should the button link to?' && (
              <div className="mt-4">
                <a
                  href={data.buttonLink}
                  className="inline-block bg-coral-red hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg"
                >
                  {data.buttonText}
                </a>
              </div>
            )}
          </div>
        </div>
        
        {/* Diagram Image */}
        <div className="flex justify-center px-4">
          {data.diagramImage ? (
            <div className="diagram-element opacity-100">
              <img
                src={urlFor(data.diagramImage).width(1200).height(800).url()}
                alt="SAFe Framework Diagram"
                className="w-full max-w-5xl h-auto"
                style={{ maxWidth: '90%' }}
              />
            </div>
          ) : (
            <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 text-lg">Upload SAFe Framework Diagram</p>
            </div>
          )}
        </div>
        

        
        {/* Text Above Button */}
        {data.textAboveButton && (
          <div className="mt-8 text-center">
            <p className={`text-lg ${data.backgroundColor === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              {data.textAboveButton}
            </p>
          </div>
        )}
        
        {/* Simple debug info */}
        {data.buttonText && (!data.buttonLink || data.buttonLink === 'Where should the button link to?') && (
          <div className="mt-4 text-center">
            <p className="text-yellow-400 text-xs">
              Button text: "{data.buttonText}" | Link: "{data.buttonLink || 'empty'}"
            </p>
          </div>
        )}
      </div>
    </section>
  )
} 