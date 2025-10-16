import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 left-0 bottom-0 z-10 w-20 md:w-24 flex flex-col items-center justify-center" style={{ backgroundColor: 'var(--secondary)' }}>
      {/* Navigation Links */}
      <div className="hidden md:flex flex-col space-y-12">
        <a href="#" className="text-white hover:text-primary transition-colors duration-300 flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span className="text-xs mt-1">Home</span>
        </a>
        <a href="#about" className="text-white hover:text-primary transition-colors duration-300 flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span className="text-xs mt-1">About</span>
        </a>
        <a href="#skills" className="text-white hover:text-primary transition-colors duration-300 flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          <span className="text-xs mt-1">Skills</span>
        </a>
        <a href="#projects" className="text-white hover:text-primary transition-colors duration-300 flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <span className="text-xs mt-1">Projects</span>
        </a>
        <a href="#resume" className="text-white hover:text-primary transition-colors duration-300 flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span className="text-xs mt-1">Resume</span>
        </a>
        <a href="#contact" className="text-white hover:text-primary transition-colors duration-300 flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span className="text-xs mt-1">Contact</span>
        </a>
      </div>
      
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-white hover:text-primary absolute top-4 right-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-0 left-0 right-0 bottom-0 py-4 z-20" style={{ backgroundColor: 'var(--background)', borderRight: '1px solid var(--border)' }}>
          <button 
            className="absolute top-4 right-4 hover:text-white"
            onClick={() => setIsOpen(false)}
            style={{ color: 'var(--text)' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="flex flex-col space-y-6 px-6 mt-16">
            <a href="#" className="py-2 hover:text-primary" onClick={() => setIsOpen(false)} style={{ color: 'var(--text)' }}>Home</a>
            <a href="#about" className="py-2 hover:text-primary" onClick={() => setIsOpen(false)} style={{ color: 'var(--text)' }}>About</a>
            <a href="#skills" className="py-2 hover:text-primary" onClick={() => setIsOpen(false)} style={{ color: 'var(--text)' }}>Skills</a>
            <a href="#projects" className="py-2 hover:text-primary" onClick={() => setIsOpen(false)} style={{ color: 'var(--text)' }}>Projects</a>
            <a href="#resume" className="py-2 hover:text-primary" onClick={() => setIsOpen(false)} style={{ color: 'var(--text)' }}>Resume</a>
            <a href="#contact" className="py-2 hover:text-primary" onClick={() => setIsOpen(false)} style={{ color: 'var(--text)' }}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;