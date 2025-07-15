import React, { useEffect, useRef } from 'react'
import { urlFor } from '../utils/imageBuilder'
import anime from 'animejs'

export default function FrameworkDiagramSection({ data }) {
  const sectionRef = useRef()

  useEffect(() => {
    if (sectionRef.current) {
      anime({
        targets: sectionRef.current.querySelectorAll('.diagram-element'),
        opacity: [0,1],
        translateY: [20,0],
        delay: anime.stagger(100),
        duration: 800,
        easing: 'easeOutExpo'
      })
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
          
          {/* Business Agility Banner */}
          <div className="bg-teal-600 text-white p-6 rounded-lg mb-8 text-center">
            <h3 className="text-2xl font-bold">BUSINESS AGILITY</h3>
          </div>

          {/* Main Diagram Container */}
          <div className="bg-white rounded-lg p-8 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Competency Columns */}
              {[
                {
                  name: 'Organizational Agility',
                  subElements: ['Enterprise', 'Government'],
                  flow: 'Operational Value Streams'
                },
                {
                  name: 'Lean Portfolio Management',
                  subElements: ['Epic Owners', 'Enterprise Architect'],
                  flow: 'Portfolio Flow',
                  flowElements: ['Strategic Themes', 'Portfolio Vision', 'Portfolio Backlog', 'Lean Budgets', 'Guardrails', 'Big Data', 'Value Stream Management', 'Coordination', 'Development Value Streams']
                },
                {
                  name: 'Agile Product Delivery',
                  subElements: ['Business Owners', 'Product Mgmt', 'System Architect', 'RTE'],
                  flow: 'ART Flow',
                  flowElements: ['Customer Centricity', 'Design Thinking', 'Lean UX', 'ART Backlog'],
                  additionalContent: 'Continuous Delivery Pipeline'
                },
                {
                  name: 'Team and Technical Agility',
                  subElements: ['Agile Teams', 'Product Owner', 'Scrum Master / Team Coach'],
                  flow: 'Team Flow',
                  flowElements: ['SAFe Scrum', 'Built-in Quality', 'SAFe Team Kanban', 'Team Backlogs']
                }
              ].map((competency, idx) => (
                <div key={idx} className="diagram-element opacity-0">
                  <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <h4 className="font-bold text-gray-900 mb-2">{competency.name}</h4>
                    <div className="space-y-2">
                      {competency.subElements.map((element, i) => (
                        <div key={i} className="text-sm text-gray-700 bg-white p-2 rounded">
                          {element}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {competency.flow && (
                    <div className="bg-gray-50 p-3 rounded mb-4">
                      <h5 className="font-semibold text-gray-800 mb-2">{competency.flow}</h5>
                      {competency.flowElements && (
                        <div className="grid grid-cols-2 gap-1">
                          {competency.flowElements.map((element, i) => (
                            <div key={i} className="text-xs bg-white p-1 rounded text-center">
                              {element}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                  
                  {competency.additionalContent && (
                    <div className="bg-teal-50 p-3 rounded border border-teal-200">
                      <p className="text-sm text-teal-800">{competency.additionalContent}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Foundational Layer */}
            <div className="mt-8 pt-8 border-t-2 border-gray-200">
              <div className="grid grid-cols-2 md:grid-cols-7 gap-4">
                {[
                  'Lean-Agile Leadership',
                  'Lean-Agile Mindset',
                  'Core Values',
                  'SAFe Principles',
                  'Implementation Roadmap',
                  'SPC',
                  'Continuous Learning Culture'
                ].map((element, idx) => (
                  <div key={idx} className="text-center">
                    <div className="w-12 h-12 bg-teal-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <div className="w-6 h-6 bg-white rounded"></div>
                    </div>
                    <p className="text-xs text-gray-700 font-medium">{element}</p>
                  </div>
                ))}
              </div>
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
        <div className="text-center mb-12">
          <h2 className={`text-3xl lg:text-4xl font-bold mb-6 ${data.backgroundColor === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            {data.title || 'Diagrammatic Representation of the SAFe® 6.0 Framework'}
          </h2>
          <p className={`text-lg max-w-4xl mx-auto ${data.backgroundColor === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            {data.description || 'A comprehensive visual representation of the SAFe® 6.0 Framework showing all competencies, flows, and foundational elements.'}
          </p>
        </div>
        
        {/* Business Agility Banner */}
        {data.businessAgility && (
          <div className="bg-teal-600 text-white p-6 rounded-lg mb-8 text-center diagram-element opacity-0">
            <div className="flex items-center justify-center space-x-4">
              <h3 className="text-2xl font-bold">{data.businessAgility.title || 'BUSINESS AGILITY'}</h3>
              {data.businessAgility.icon && (
                <img
                  src={urlFor(data.businessAgility.icon).width(32).height(32).url()}
                  alt="Business Agility"
                  className="w-8 h-8"
                />
              )}
            </div>
          </div>
        )}

        {/* Main Diagram Container */}
        <div className="bg-white rounded-lg p-8 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Competency Columns */}
            {data.competencies && data.competencies.map((competency, idx) => (
              <div key={idx} className="diagram-element opacity-0">
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <div className="flex items-center mb-3">
                    {competency.icon && (
                      <img
                        src={urlFor(competency.icon).width(24).height(24).url()}
                        alt={competency.name}
                        className="w-6 h-6 mr-2"
                      />
                    )}
                    <h4 className="font-bold text-gray-900">{competency.name}</h4>
                  </div>
                  
                  <div className="space-y-2">
                    {competency.subElements && competency.subElements.map((element, i) => (
                      <div key={i} className="text-sm text-gray-700 bg-white p-2 rounded flex items-center">
                        <div className="w-3 h-3 bg-gray-400 rounded-full mr-2"></div>
                        {element}
                      </div>
                    ))}
                  </div>
                </div>
                
                {competency.flow && (
                  <div className="bg-gray-50 p-3 rounded mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2">{competency.flow}</h5>
                    {competency.flowElements && competency.flowElements.length > 0 && (
                      <div className="grid grid-cols-2 gap-1">
                        {competency.flowElements.map((element, i) => (
                          <div key={i} className="text-xs bg-white p-1 rounded text-center border border-gray-200">
                            {element}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
                
                {competency.additionalContent && (
                  <div className="bg-teal-50 p-3 rounded border border-teal-200">
                    <p className="text-sm text-teal-800 font-medium">{competency.additionalContent}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Sidebars */}
          {data.sidebars && data.sidebars.length > 0 && (
            <div className="absolute right-8 top-8 space-y-6">
              {data.sidebars.map((sidebar, idx) => (
                <div key={idx} className="bg-gray-100 p-4 rounded-lg w-48">
                  <h5 className="font-bold text-gray-900 mb-3 text-center">{sidebar.title}</h5>
                  <div className="space-y-2">
                    {sidebar.items && sidebar.items.map((item, i) => (
                      <div key={i} className="text-sm text-gray-700 bg-white p-2 rounded text-center">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Foundational Layer */}
          {data.foundationalLayer && data.foundationalLayer.length > 0 && (
            <div className="mt-8 pt-8 border-t-2 border-gray-200">
              <div className="grid grid-cols-2 md:grid-cols-7 gap-4">
                {data.foundationalLayer.map((element, idx) => (
                  <div key={idx} className="text-center">
                    <div className="w-12 h-12 bg-teal-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                      {element.icon ? (
                        <img
                          src={urlFor(element.icon).width(24).height(24).url()}
                          alt={element.name}
                          className="w-6 h-6"
                        />
                      ) : (
                        <div className="w-6 h-6 bg-white rounded"></div>
                      )}
                    </div>
                    <p className="text-xs text-gray-700 font-medium">{element.name}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Copyright */}
          {data.showCopyright && (
            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500">
                {data.copyrightText || 'Leffingwell et al. © Scaled Agile, Inc.'}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
} 