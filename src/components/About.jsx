import React from 'react';

const About = () => {
  return (
    <div id="about" className="py-16 px-4 md:pl-24 md:pr-8 overflow-hidden" style={{ backgroundColor: 'var(--background)', color: 'var(--text)' }}>
      <div className="max-w-full mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 pb-4" style={{ color: 'var(--primary)', borderBottom: '1px solid var(--border)' }}>About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="order-2 md:order-1">
            <p className="text-accent mb-6">
              Hello! I'm Tanvi Madani, a pre-final year Computer Science Engineering student at Nirma University, Ahmedabad. 
              I'm passionate about creating elegant solutions to complex problems through code.
            </p>
            <p className="text-accent mb-6">
              My journey in tech began with curiosity about how digital experiences are built, 
              which led me to explore various programming languages and frameworks. I enjoy the 
              process of turning ideas into functional applications that provide value to users.
            </p>
            <p className="text-accent">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or expanding my knowledge through online courses and tech communities.
            </p>
          </div>
          
          <div className="order-1 md:order-2">
            <h3 className="text-xl font-semibold text-primary mb-4">Education</h3>
            
            <div className="relative border-l-2 border-border pl-6 pb-6 space-y-10">
              {/* Bachelor's Degree */}
              <div className="relative">
                <div className="absolute -left-[30px] bg-secondary p-1 rounded-full border-4 border-border">
                  <span className="text-white text-xl">🎓</span>
                </div>
                <div className="bg-cardBg p-4 rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold text-primary">Bachelor in Computer Science and Engineering</h4>
                  <p className="text-accent">Northern University Bangladesh (NUB)</p>
                  <div className="inline-block bg-secondary text-white text-xs px-2 py-1 rounded-full mt-2">
                    2020 - 2022
                  </div>
                </div>
              </div>
              
              {/* Higher School Certificate */}
              <div className="relative">
                <div className="absolute -left-[30px] bg-secondary p-1 rounded-full border-4 border-border">
                  <span className="text-white text-xl">🎓</span>
                </div>
                <div className="bg-cardBg p-4 rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold text-primary">Higher School Certificate (HSC)</h4>
                  <p className="text-accent">Feni Government College</p>
                  <div className="inline-block bg-secondary text-white text-xs px-2 py-1 rounded-full mt-2">
                    2020
                  </div>
                </div>
              </div>
              
              {/* Secondary School Certificate */}
              <div className="relative">
                <div className="absolute -left-[30px] bg-secondary p-1 rounded-full border-4 border-border">
                  <span className="text-white text-xl">🎓</span>
                </div>
                <div className="bg-cardBg p-4 rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold text-primary">Secondary School Certificate (SSC)</h4>
                  <p className="text-accent">Shaheen Academy School</p>
                  <div className="inline-block bg-secondary text-white text-xs px-2 py-1 rounded-full mt-2">
                    2018
                  </div>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-primary my-6">Interests</h3>
            <ul className="list-disc list-inside text-accent space-y-2">
              <li>Web Development</li>
              <li>Machine Learning</li>
              <li>UI/UX Design</li>
              <li>Open Source Contribution</li>
              <li>Problem Solving</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;