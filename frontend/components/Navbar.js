import React, { useState, useEffect, useRef } from 'react';
import { searchCourses } from '../utils/searchCourses';
import { urlFor } from '../utils/imageBuilder';

export default function Navbar({ logo, links, showSearch, searchPlaceholder }) {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const [dropdown, setDropdown] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [courseDropdownOpen, setCourseDropdownOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('Courses');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const courseDropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Hardcoded course options for the dropdown
  const courseOptions = [
    'All Courses',
    'SAFe® 6.0 Agilist',
    'SAFe® 6.0 Practitioner',
    'SAFe® 6.0 Advanced Scrum Master',
    'SAFe® 6.0 Product Owner/Product Manager',
    'SAFe® 6.0 DevOps Practitioner',
    'SAFe® 6.0 Release Train Engineer',
    'SAFe® 6.0 Lean Portfolio Management'
  ];

  // Click outside handler for course dropdown and mobile menu
  useEffect(() => {
    function handleClickOutside(event) {
      if (courseDropdownRef.current && !courseDropdownRef.current.contains(event.target)) {
        setCourseDropdownOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close mobile menu on window resize
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      if (search) {
        searchCourses(search).then(setResults);
      } else {
        setResults([]);
      }
    }, 300);
    return () => clearTimeout(handler);
  }, [search]);

  return (
    <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 bg-white shadow-sm border-b relative">
      {/* Logo */}
      {logo && (
        <div className="flex items-center">
          <img 
            src={urlFor(logo).width(150).url()} 
            alt="Skillbook Academy" 
            className="h-6 sm:h-8 w-auto" 
          />
        </div>
      )}

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
        {/* Navigation Links */}
        <ul className="flex space-x-4 lg:space-x-6">
          {links && links.map((link, index) => (
            <li key={index} className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium py-2 text-sm lg:text-base"
                onMouseEnter={() => link.hasDropdown && setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span>{link.label}</span>
                {link.hasDropdown && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </button>
              
              {/* Dropdown Menu */}
              {link.hasDropdown && activeDropdown === index && (
                <div 
                  className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50"
                  onMouseEnter={() => setActiveDropdown(index)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {link.dropdownItems && link.dropdownItems.map((item, itemIndex) => (
                    <a
                      key={itemIndex}
                      href={item.url}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Search Bar with Course Dropdown */}
        {showSearch && (
          <div className="relative">
            <div className="relative flex items-center bg-gray-50 border border-gray-300 rounded-2xl overflow-hidden">
              {/* Search Icon */}
              <div className="pl-3 pr-2 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              
              {/* Search Input */}
              <input
                type="text"
                className="flex-1 pl-2 pr-4 py-2 bg-transparent border-none focus:outline-none focus:ring-0 text-sm"
                placeholder={searchPlaceholder || "Search"}
                value={search}
                onChange={e => {
                  setSearch(e.target.value);
                  setDropdown(true);
                }}
                onBlur={() => setTimeout(() => setDropdown(false), 200)}
                onFocus={() => setDropdown(true)}
              />
              
              {/* Vertical Separator */}
              <div className="w-px h-6 bg-gray-300 mx-2"></div>
              
              {/* Course Dropdown */}
              <div className="relative" ref={courseDropdownRef}>
                <button
                  onClick={() => setCourseDropdownOpen(!courseDropdownOpen)}
                  className="flex items-center space-x-1 px-3 py-2 text-sm text-gray-700 hover:text-gray-900 focus:outline-none"
                >
                  <span className="hidden lg:inline">{selectedCourse}</span>
                  <span className="lg:hidden">All</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Course Dropdown Menu */}
                {courseDropdownOpen && (
                  <div className="absolute right-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                    {courseOptions.map((course, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setSelectedCourse(course);
                          setCourseDropdownOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                      >
                        {course}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            {/* Search Results Dropdown */}
            {dropdown && results.length > 0 && (
              <div className="absolute left-0 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg z-50">
                {results.map(course => (
                  <a
                    key={course._id}
                    href={`/courses/${course.slug}`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                  >
                    {course.title}
                  </a>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center space-x-4">
        {/* Mobile Search Icon */}
        {showSearch && (
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-600 hover:text-blue-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        )}
        
        {/* Hamburger Menu */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-gray-600 hover:text-blue-600"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div 
          ref={mobileMenuRef}
          className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-50 md:hidden"
        >
          <div className="px-4 py-6 space-y-6">
            {/* Mobile Search */}
            {showSearch && (
              <div className="relative">
                <div className="relative flex items-center bg-gray-50 border border-gray-300 rounded-2xl overflow-hidden">
                  <div className="pl-3 pr-2 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="flex-1 pl-2 pr-4 py-3 bg-transparent border-none focus:outline-none focus:ring-0"
                    placeholder={searchPlaceholder || "Search courses..."}
                    value={search}
                    onChange={e => {
                      setSearch(e.target.value);
                      setDropdown(true);
                    }}
                    onBlur={() => setTimeout(() => setDropdown(false), 200)}
                    onFocus={() => setDropdown(true)}
                  />
                </div>
                
                {/* Mobile Search Results */}
                {dropdown && results.length > 0 && (
                  <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                    {results.map(course => (
                      <a
                        key={course._id}
                        href={`/courses/${course.slug}`}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 border-b border-gray-100 last:border-b-0"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {course.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Mobile Navigation Links */}
            <ul className="space-y-4">
              {links && links.map((link, index) => (
                <li key={index} className="border-b border-gray-100 last:border-b-0">
                  <div className="py-3">
                    <button
                      className="flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-600 font-medium"
                      onClick={() => {
                        if (link.hasDropdown) {
                          setActiveDropdown(activeDropdown === index ? null : index);
                        } else {
                          setMobileMenuOpen(false);
                        }
                      }}
                    >
                      <span>{link.label}</span>
                      {link.hasDropdown && (
                        <svg 
                          className={`w-5 h-5 transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </button>
                    
                    {/* Mobile Dropdown Menu */}
                    {link.hasDropdown && activeDropdown === index && (
                      <div className="mt-3 ml-4 space-y-2">
                        {link.dropdownItems && link.dropdownItems.map((item, itemIndex) => (
                          <a
                            key={itemIndex}
                            href={item.url}
                            className="block py-2 text-sm text-gray-600 hover:text-blue-600"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            {/* Mobile Course Dropdown */}
            {showSearch && (
              <div className="border-t border-gray-100 pt-4">
                <div className="relative" ref={courseDropdownRef}>
                  <button
                    onClick={() => setCourseDropdownOpen(!courseDropdownOpen)}
                    className="flex items-center justify-between w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-left"
                  >
                    <span className="text-gray-700">{selectedCourse}</span>
                    <svg className={`w-5 h-5 transition-transform ${courseDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {courseDropdownOpen && (
                    <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                      {courseOptions.map((course, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setSelectedCourse(course);
                            setCourseDropdownOpen(false);
                          }}
                          className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 border-b border-gray-100 last:border-b-0"
                        >
                          {course}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
} 