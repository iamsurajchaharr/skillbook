import React from 'react';
import { searchCourses } from '../utils/searchCourses';

export default function Navbar({ logo, links, showSearch }) {
  const [search, setSearch] = React.useState('');
  const [results, setResults] = React.useState([]);
  const [dropdown, setDropdown] = React.useState(false);

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
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow">
      <div className="flex items-center">
        {logo && (
          <img src={logo} alt="Skillbook Logo" className="h-10 w-auto mr-6" />
        )}
        <ul className="flex space-x-6">
          {links.map(link => (
            <li key={link.label}>
              <a href={link.url} className="text-gray-700 hover:text-blue-600 font-medium">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {showSearch && (
        <div className="relative">
          <input
            type="text"
            className="border rounded px-3 py-1"
            placeholder="Search courses..."
            value={search}
            onChange={e => {
              setSearch(e.target.value);
              setDropdown(true);
            }}
            onBlur={() => setTimeout(() => setDropdown(false), 200)}
            onFocus={() => setDropdown(true)}
          />
          {dropdown && results.length > 0 && (
            <ul className="absolute left-0 mt-1 w-full bg-white border rounded shadow z-10">
              {results.map(course => (
                <li key={course._id}>
                  <a href={`/courses/${course.slug}`} className="block px-4 py-2 hover:bg-gray-100">
                    {course.title}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </nav>
  );
} 