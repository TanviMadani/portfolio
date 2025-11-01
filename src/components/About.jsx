import React from 'react';

const About = () => {
  return (
    <div id="about" className="py-16 px-4 md:pl-24 md:pr-8 overflow-hidden" style={{ backgroundColor: 'var(--background)', color: 'var(--text)' }}>
      <div className="max-w-full mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 pb-4" style={{ borderBottom: '1px solid var(--border)' }}>About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="order-2 md:order-1">
            <p className="mb-6">
              Hello! I'm Tanvi Madani, a pre-final year Computer Science Engineering student at Nirma University, Ahmedabad. 
              I'm passionate about creating elegant solutions to complex problems through code.
            </p>
            <p className="mb-6">
              My journey in tech began with curiosity about how digital experiences are built, 
              which led me to explore various programming languages and frameworks. I enjoy the 
              process of turning ideas into functional applications that provide value to users.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, reading books or expanding my knowledge through online courses and tech communities.
            </p>
            <h3 className="text-xl font-semibold my-6">Interests</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>Problem Solving</li>
              <li>Artificial Intelligence</li>
              <li>Machine Learning</li>
            </ul>
          </div>
          
          <div className="order-1 md:order-2">
            <h3 className="text-xl font-semibold text-text mb-4">Education</h3>
            
            <div className="relative border-l-2 border-border pl-6 pb-6 space-y-10">
              {/* Bachelor's Degree */}
              <div className="relative">
                <div className="absolute -left-[30px] bg-secondary p-1 rounded-full border-4 border-border">
                  <span className="text-white text-xl">🎓</span>
                </div>
                <div className="bg-cardBg p-4 rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold text-text">Bachelor in Computer Science and Engineering</h4>
                  <p className="text-text">Nirma University, Ahmedabad </p>
                  <div className="inline-block bg-secondary text-xs px-2 py-1 rounded-full mt-2">
                    2023 - 2027
                  </div>
                </div>
              </div>
              
              {/* Higher School Certificate */}
              <div className="relative">
                <div className="absolute -left-[30px] bg-secondary p-1 rounded-full border-4 border-border">
                  <span className="text-xl">🎓</span>
                </div>
                <div className="bg-cardBg p-4 rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold">Higher School Certificate (HSC)</h4>
                  <p>Advait Vidyaniketan, Bharuch </p>
                  <div className="inline-block bg-secondary text-xs px-2 py-1 rounded-full mt-2">
                    2021-2023
                  </div>
                </div>
              </div>
              
              {/* Secondary School Certificate */}
              <div className="relative">
                <div className="absolute -left-[30px] bg-secondary p-1 rounded-full border-4 border-border">
                  <span className="text-xl">🎓</span>
                </div>
                <div className="bg-cardBg p-4 rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold">Secondary School Certificate (SSC)</h4>
                  <p>Shree Gattu Vidyalaya, Ankleshwar</p>
                  <div className="inline-block bg-secondary text-xs px-2 py-1 rounded-full mt-2">
                    2011-2021
                  </div>
                </div>
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;