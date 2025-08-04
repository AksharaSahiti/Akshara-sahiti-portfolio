
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export default function NavBar() {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow z-50">
      <div className="max-w-5xl mx-auto px-4 flex justify-between items-center h-16">
        <div className="flex space-x-4">
          {navLinks.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors " +
                (location.pathname === path ? 'bg-gray-300 dark:bg-gray-800' : '')`}
            >
              {name}
            </Link>
          ))}
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
        </button>
      </div>
    </nav>
  );
}
  