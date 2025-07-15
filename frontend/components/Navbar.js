import React, { useState } from 'react';
import { searchCourses } from '../utils/searchCourses';
import { urlFor } from '../utils/imageBuilder';

export default function Navbar({ logo, links, showSearch, searchPlaceholder }) {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const [dropdown, setDropdown] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

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
      <div className="flex items-center space-x-8">
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
      </div>

      {/* Search Bar */}
      {showSearch && (
        <div className="relative">
          <div className="relative">
            <input
              type="text"
              className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder={searchPlaceholder || "Search"}
              value={search}
              onChange={e => {
                setSearch(e.target.value);
                setDropdown(true);
              }}
              onBlur={() => setTimeout(() => setDropdown(false), 200)}
              onFocus={() => setDropdown(true)}
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
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
    </nav>
  );
} 