import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Collections', href: '/collections' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

const Header: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <motion.div
          className="text-3xl font-bold text-pink-600"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          luxury FashionTV cosmetics
        </motion.h1>
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <motion.div
              key={item.label}
              href={item.href}
              className="text-lg text-gray-800 hover:text-pink-600 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {item.label}
            </motion.a>
          ))}
        </nav>
        <button
          className="md:hidden flex items-center text-pink-600"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <svg
            className={w-6 h-6 transition-transform duration-300 ${isMobileMenuOpen ? 'transform rotate-90' : ''}}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white p-4">
          {navItems.map((item) => (
            <motion.div
              key={item.label}
              href={item.href}
              className="block text-lg text-gray-800 hover:text-pink-600 mb-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </motion.a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;