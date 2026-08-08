import React, { useEffect, useState } from "react";
import "../styles/Loading.css";

const Loading = ({ onComplete }) => {
  const [percent, setPercent] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    let currentPercent = 0;
    
    // Simulate loading progress
    const interval = setInterval(() => {
      if (currentPercent < 50) {
        currentPercent += Math.round(Math.random() * 5);
      } else if (currentPercent < 90) {
        currentPercent += Math.round(Math.random() * 3);
      } else if (currentPercent < 100) {
        currentPercent += 1;
      }

      if (currentPercent >= 100) {
        currentPercent = 100;
        clearInterval(interval);
        
        // When it reaches 100%, set loaded true
        setTimeout(() => {
          setLoaded(true);
        }, 500);
      }
      setPercent(currentPercent);
    }, 40); // Slightly faster for better UX during dev

    return () => clearInterval(interval);
  }, []);

  // When loaded, trigger standard 'out' sequence automatically
  useEffect(() => {
    if (loaded) {
      const timeout1 = setTimeout(() => {
        setClicked(true);
        setTimeout(() => {
          setIsFadingOut(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 800);
        }, 900);
      }, 800);

      return () => clearTimeout(timeout1);
    }
  }, [loaded, onComplete]);

  return (
    <div className={`fixed inset-0 z-50 flex flex-col justify-between transition-opacity duration-700 ease-in-out ${isFadingOut ? "opacity-0" : "opacity-100"}`} style={{ backgroundColor: 'var(--background)' }}>
      {/* Header section with Name and animated bars */}
      <div className="loading-header px-4 md:px-12 pt-8 md:pt-12 flex justify-between items-start w-full">
        <a href="/#" className="loader-title text-xl md:text-3xl font-black font-sans tracking-[0.2em] relative z-20 pointer-events-none" style={{ color: 'var(--text)' }}>
          TANVI <span className="text-primary">MADANI</span>
        </a>
        
      </div>
      
      {/* Background Marquee */}
      <div className="loading-screen flex-1 flex flex-col justify-center items-center pb-20 px-8 relative overflow-hidden">
        <div className="loading-marquee absolute top-[40%] left-0 w-[200%] opacity-5 pointer-events-none transform -rotate-2 mix-blend-difference dark:mix-blend-normal">
          <div className="animate-marquee text-[12vw] md:text-[8vw] font-black uppercase tracking-tight leading-none" style={{ color: 'var(--text)' }}>
            <span> FULL STACK DEVELOPER </span> <span className="text-primary"> SOFTWARE ENGINEER </span>
            <span> FULL STACK DEVELOPER </span> <span className="text-secondary"> SOFTWARE ENGINEER </span>
            <span> FULL STACK DEVELOPER </span> <span className="text-primary"> SOFTWARE ENGINEER </span>
            <span> FULL STACK DEVELOPER </span> <span className="text-secondary"> SOFTWARE ENGINEER </span>
          </div>
        </div>
        
        {/* Center Typography / Status */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none transition-all duration-1000 ease-in-out transform ${clicked ? "scale-150 opacity-0 blur-md" : "scale-100 opacity-100 blur-0"}`}>
          
          {/* Floating Quote */}
          <div className={`overflow-hidden mb-2 md:mb-6 transition-all duration-500 delay-100 ${loaded ? "opacity-0 -translate-y-8" : "opacity-100 translate-y-0"}`}>
            <span className="block text-xs md:text-sm text-primary tracking-[0.3em] md:tracking-[0.5em] uppercase font-semibold">
              Loading the stuff I'm proud of...
            </span>
          </div>

          {/* Huge Animated Number & Welcome */}
          <div className="relative flex items-center justify-center h-[120px] md:h-[250px]">
             {/* Percent */}
             <div className="absolute flex items-baseline transition-all duration-300">
               <span className="text-[25vw] md:text-[220px] font-black leading-none tracking-tighter" style={{ color: 'var(--text)' }}>
                 {Math.floor(percent)}
               </span>
               <span className="text-[6vw] md:text-[60px] font-bold text-primary ml-2 md:ml-4">
                 %
               </span>
             </div>
          </div>
          
          {/* Minimalist Progress Line */}
          <div className={`w-[250px] md:w-[500px] h-[3px] bg-primary/20 mt-8 md:mt-12 rounded-full overflow-hidden transition-opacity duration-1000 ${loaded ? "opacity-0" : "opacity-100"}`}>
            <div 
              className="h-full bg-primary transition-all duration-100 ease-out shadow-[0_0_10px_rgba(30,144,255,0.8)]"
              style={{ width: `${percent}%` }}
            ></div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Loading;
