import React, { useEffect } from 'react';
import avatar from '../assets/photo.png';
import SocialLinks from './SocialLinks';
import { WordRotate } from "./ui/WordRotate"

const Hero = () => {
  // Add smooth scroll effect when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // You can add additional scroll effects here if needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="home" className="bg-background min-h-screen px-4 md:px-16 flex items-center">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-5xl mx-auto w-full">
        {/* Left side - Text content */}
        <div className="md:w-2/5 mb-6 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold text-text mb-6">
            Hii, I'm<br />
            <span className="block mt-2">Tanvi Madani</span>
            <WordRotate 
              words={["Web Developer", "UI/UX Designer", "Full Stack Developer", "React Enthusiast"]} 
              className="text-primary text-3xl md:text-4xl mt-2"
            />
          </h1>

          <div className="my-4">
            <p className="text-sm md:text-base text-[#B8B8CA]">
              Pre-Final year Student of B.Tech CSE in Nirma University, Ahmedabad.
            </p>
            {/* Resume link */}
            <a
              href="#resume"
              className="inline-flex items-center gap-2 mt-4 px-5 py-2 rounded-full bg-secondary text-white hover-primary transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>View Resume</span>
            </a>
          </div>
          <div className="w-full border-t border-dashed border-[#272930] mt-6"></div>
        </div>
        
        {/* Image */}
        <div className="md:w-2/5 flex justify-center relative">
          <div className="relative mx-auto">
            {/* Circular image */}
            <div className="relative z-10 overflow-hidden w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full">
              <img 
                src={avatar} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Social Links - Right side */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 md:translate-x-full md:mr-[-40px]">
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;