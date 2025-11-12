import React, { useState } from 'react';

const navLinks = [
  {
    href: '#',
    label: 'Home',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    href: '#about',
    label: 'About',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    href: '#skills',
    label: 'Skills',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    href: '#projects',
    label: 'Projects',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    href: '#achievements',
    label: 'Achievements',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8m-4-4a5 5 0 0 0 5-5V4H7v8a5 5 0 0 0 5 5zm7-13h1a2 2 0 0 1 2 2v1a4 4 0 0 1-4 4h-1M5 4H4a2 2 0 0 0-2 2v1a4 4 0 0 0 4 4h1" />
      </svg>
    ),
  },
  {
    href: '#contact',
    label: 'Contact',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);
  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 md:right-auto md:bottom-0 md:w-24 z-30"
      style={{ backgroundColor: 'var(--secondary)' }}
    >
      {/* Mobile top bar */}
      <div className="flex items-center justify-between px-4 py-3 md:hidden">
        <span className="text-sm font-semibold uppercase tracking-wide text-white">
          Menu
        </span>
        <button
          type="button"
          className="text-white hover:text-primary transition-colors duration-200"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="mobile-nav-links"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Desktop navigation */}
      <div className="hidden md:flex h-full flex-col items-center justify-center space-y-12">
        {navLinks.map(link => (
          <a
            key={link.label}
            href={link.href}
            className="text-white hover:text-primary transition-colors duration-300 flex flex-col items-center"
          >
            {link.icon}
            <span className="mt-1 text-xs">{link.label}</span>
          </a>
        ))}
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div
          id="mobile-nav-links"
          className="md:hidden fixed top-16 left-0 right-0 bottom-0 overflow-y-auto px-6 py-8"
          style={{
            backgroundColor: 'var(--background)',
            borderTop: '1px solid var(--border)',
          }}
        >
          <div className="flex flex-col space-y-6">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="py-2 text-base font-medium transition-colors duration-200 hover:text-primary"
                style={{ color: 'var(--text)' }}
                onClick={handleLinkClick}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;