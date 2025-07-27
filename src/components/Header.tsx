import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, Brain } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import MobileNavigation from './MobileNavigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navigation = [
    { name: 'Platform', href: '/features' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Survey', href: '/survey' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const scrollToBeta = () => {
    if (location.pathname !== '/') {
      window.location.href = '/#beta';
    } else {
      document.getElementById('beta')?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Navigation Component */}
      <MobileNavigation />
      
      {/* Desktop Header */}
      <header className="fixed w-full top-0 z-50 bg-white/80 dark:bg-dark-900/80 backdrop-blur-md border-b border-gray-200 dark:border-dark-700 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <img 
                src="/Exotiq%20Lockup.png" 
                alt="ExotIQ.ai" 
                className="h-9 w-auto transition-all duration-200 group-hover:opacity-80 group-hover:scale-105 object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-inter font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Theme Toggle & CTA */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-dark-800 hover:bg-gray-200 dark:hover:bg-dark-700 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <Moon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                ) : (
                  <Sun className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                )}
              </button>
              <button
                onClick={scrollToBeta}
                className="font-poppins font-bold text-sm uppercase tracking-wide px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-all duration-200 hover:scale-105 min-h-[44px] flex items-center justify-center"
              >
                Join Beta
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}