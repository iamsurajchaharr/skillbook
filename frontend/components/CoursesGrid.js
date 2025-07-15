import React, { useState } from 'react'
import CourseCard from './CourseCard'

export default function CoursesGrid({ courses, section }) {
  const [activeTab, setActiveTab] = useState('all')
  
  const heading = section?.heading || 'Trending Certification Courses by Scaled Agile Framework®';
  const description = section?.description || 'Scaled Agile offers a variety of courses designed to help individuals and organizations successfully implement Agile methodologies at scale. These courses are led by experienced instructors and cover a range of topics, including Agile principles and practices, Lean-Agile leadership, DevOps, and more.';
  const tabs = section?.tabs || [
    { label: 'All', value: 'all', isDefault: true },
    { label: 'Foundational', value: 'foundational', isDefault: false },
    { label: 'Advance', value: 'advance', isDefault: false }
  ];

  // Set default active tab
  React.useEffect(() => {
    const defaultTab = tabs.find(tab => tab.isDefault);
    if (defaultTab) {
      setActiveTab(defaultTab.value);
    }
  }, [tabs]);

  // Filter courses based on active tab
  const filteredCourses = React.useMemo(() => {
    if (!courses) return [];
    if (activeTab === 'all') return courses;
    return courses.filter(course => course.category === activeTab);
  }, [courses, activeTab]);

    if (!courses || courses.length === 0) {
    return (
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            <div className="flex items-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                {heading}
              </h2>
            </div>
            <div className="flex items-center">
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                {description}
              </p>
            </div>
          </div>
          
          {/* Tabs */}
          <div className="flex justify-start space-x-6 mb-8 border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`pb-3 px-2 font-medium text-base transition-colors duration-200 ${
                  activeTab === tab.value
                    ? 'text-red-600 border-b-2 border-red-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          
          <div className="text-center py-8">
            <p className="text-gray-600">No courses available at the moment. Check back soon!</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <div className="flex items-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
              {heading}
            </h2>
          </div>
          <div className="flex items-center">
            <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="flex justify-start space-x-6 mb-8 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`pb-3 px-2 font-medium text-base transition-colors duration-200 ${
                activeTab === tab.value
                  ? 'text-red-600 border-b-2 border-red-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        
        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map(course => (
            <CourseCard key={course._id} course={course} />
          ))}
        </div>
        
        {/* Show message if no courses in selected category */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-600">No courses available in this category. Please try another tab.</p>
          </div>
        )}
      </div>
    </section>
  )
}
