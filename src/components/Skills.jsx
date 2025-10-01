import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 75 },
    { name: 'Node.js', level: 70 },
    { name: 'Python', level: 65 },
    { name: 'Java', level: 60 },
    { name: 'SQL', level: 75 },
  ];

  return (
    <div id="skills" className="py-16 bg-[#17191A]">
      <div className="container mx-auto px-4 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#B8B8CA] mb-10 text-center">
          My Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between mb-1">
                <span className="text-[#B8B8CA] font-medium">{skill.name}</span>
                <span className="text-[#B8B8CA]">{skill.level}%</span>
              </div>
              <div className="w-full bg-[#121315] rounded-full h-2.5">
                <div 
                  className="bg-[#272930] h-2.5 rounded-full transition-all duration-500 ease-in-out" 
                  style={{ width: `${skill.level}%` }}
                  data-aos="slide-right"
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;