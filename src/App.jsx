import { useState, useEffect } from 'react'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'

function App() {
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
    <div className="relative bg-[#121315]">
      <Navbar />
      <div className="ml-0 md:ml-24">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </div>
    </div>
  )
}

export default App

