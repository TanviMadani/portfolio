import React from 'react';

const About = () => {
  return (
    <div id="about" className="bg-[#17191A] py-16 px-4 md:px-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#B8B8CA] mb-8 border-b border-[#272930] pb-4">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-[#B8B8CA] mb-6">
              Hello! I'm Tanvi Madani, a pre-final year Computer Science Engineering student at Nirma University, Ahmedabad. 
              I'm passionate about creating elegant solutions to complex problems through code.
            </p>
            <p className="text-[#B8B8CA] mb-6">
              My journey in tech began with curiosity about how digital experiences are built, 
              which led me to explore various programming languages and frameworks. I enjoy the 
              process of turning ideas into functional applications that provide value to users.
            </p>
            <p className="text-[#B8B8CA]">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or expanding my knowledge through online courses and tech communities.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-[#B8B8CA] mb-4">Education</h3>
            
            <div className="relative border-l-2 border-[#272930] pl-6 pb-6 space-y-10">
              {/* Bachelor's Degree */}
              <div className="relative">
                <div className="absolute -left-[30px] bg-[#17191A] p-1 rounded-full border-4 border-[#272930]">
                  <span className="text-[#B8B8CA] text-xl">🎓</span>
                </div>
                <div className="bg-[#272930] p-4 rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold text-[#B8B8CA]">Bachelor in Computer Science and Engineering</h4>
                  <p className="text-[#B8B8CA]">Northern University Bangladesh (NUB)</p>
                  <div className="inline-block bg-[#121315] text-[#B8B8CA] text-xs px-2 py-1 rounded-full mt-2">
                    2020 - 2022
                  </div>
                </div>
              </div>
              
              {/* Higher School Certificate */}
              <div className="relative">
                <div className="absolute -left-[30px] bg-[#17191A] p-1 rounded-full border-4 border-[#272930]">
                  <span className="text-[#B8B8CA] text-xl">🎓</span>
                </div>
                <div className="bg-[#272930] p-4 rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold text-[#B8B8CA]">Higher School Certificate (HSC)</h4>
                  <p className="text-[#B8B8CA]">Feni Government College</p>
                  <div className="inline-block bg-[#121315] text-[#B8B8CA] text-xs px-2 py-1 rounded-full mt-2">
                    2020
                  </div>
                </div>
              </div>
              
              {/* Secondary School Certificate */}
              <div className="relative">
                <div className="absolute -left-[30px] bg-[#17191A] p-1 rounded-full border-4 border-[#272930]">
                  <span className="text-[#B8B8CA] text-xl">🎓</span>
                </div>
                <div className="bg-[#272930] p-4 rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold text-[#B8B8CA]">Secondary School Certificate (SSC)</h4>
                  <p className="text-[#B8B8CA]">Shaheen Academy School</p>
                  <div className="inline-block bg-[#121315] text-[#B8B8CA] text-xs px-2 py-1 rounded-full mt-2">
                    2018
                  </div>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-[#B8B8CA] my-6">Interests</h3>
            <ul className="list-disc list-inside text-[#B8B8CA] space-y-2">
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