import { useState, useEffect } from 'react'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ThemeToggle from './components/ThemeToggle'
import { applyTheme } from './theme'
import Achievements from './components/Achievements'

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme-mode');
    return savedTheme || 'dark';
  });

  // Apply theme when it changes
  useEffect(() => {
    applyTheme(theme);
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  // Smooth scrolling effect
  useEffect(() => {
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });

    // Add scroll reveal animations
    const revealElements = document.querySelectorAll('.reveal');
    const revealElementsOnScroll = () => {
      revealElements.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', revealElementsOnScroll);
    revealElementsOnScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', revealElementsOnScroll);
  }, []);

  return (
    <div className={`relative overflow-x-hidden ${theme}`} style={{ backgroundColor: 'var(--background)', color: 'var(--text)' }}>
      <ThemeToggle onToggle={toggleTheme} currentTheme={theme} />
      <Navbar />
      <div className="w-full overflow-x-hidden pt-16 md:pt-0 md:ml-24">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </div>
    </div>
  )
}

export default App

