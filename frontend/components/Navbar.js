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
  const courseDropdownRef = useRef(null);

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

  // Click outside handler for course dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (courseDropdownRef.current && !courseDropdownRef.current.contains(event.target)) {
        setCourseDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
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
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm border-b">
      {/* Logo */}
      {logo && (
        <div className="flex items-center">
          <img 
            src={urlFor(logo).width(150).url()} 
            alt="Skillbook Academy" 
            className="h-8 w-auto" 
          />
        </div>
      )}

      {/* Right side with Navigation Links and Search */}
      <div className="flex items-center space-x-8">
        {/* Navigation Links */}
        <ul className="flex space-x-6">
          {links && links.map((link, index) => (
            <li key={index} className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium py-2"
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
                className="flex-1 pl-2 pr-4 py-2 bg-transparent border-none focus:outline-none focus:ring-0"
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
                  <span>{selectedCourse}</span>
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
    </nav>
  );
} 