import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'C', icon: 'C', color: 'text-[#A8B9CC]', bgColor: 'bg-[#121315]' },
    { name: 'C++', icon: 'C++', color: 'text-[#00599C]', bgColor: 'bg-[#121315]' },
    { name: 'Java', icon: '☕', color: 'text-[#007396]', bgColor: 'bg-[#121315]' },
    { name: 'Python', icon: '🐍', color: 'text-[#3776AB]', bgColor: 'bg-[#121315]' },
    { name: 'ReactJS', icon: '⚛️', color: 'text-[#61DAFB]', bgColor: 'bg-[#121315]' },
    { name: 'Bootstrap', icon: 'B', color: 'text-[#7952B3]', bgColor: 'bg-[#121315]' },
    { name: 'TailwindCSS', icon: '🌊', color: 'text-[#06B6D4]', bgColor: 'bg-[#121315]' },
    { name: 'Chart.js', icon: '📊', color: 'text-[#FF6384]', bgColor: 'bg-[#121315]' },
    { name: 'D3.js', icon: 'D3', color: 'text-[#F9A03C]', bgColor: 'bg-[#121315]' },
    { name: 'Node.js', icon: 'N', color: 'text-[#339933]', bgColor: 'bg-[#121315]' },
    { name: 'Express.js', icon: 'E', color: 'text-[#000000]', bgColor: 'bg-[#121315]' },
    { name: 'REST APIs', icon: '🔄', color: 'text-[#FF5733]', bgColor: 'bg-[#121315]' },
    { name: 'WebSockets', icon: '🔌', color: 'text-[#4353FF]', bgColor: 'bg-[#121315]' },
    { name: 'MongoDB', icon: '🍃', color: 'text-[#47A248]', bgColor: 'bg-[#121315]' },
    { name: 'PostgreSQL', icon: '🐘', color: 'text-[#336791]', bgColor: 'bg-[#121315]' },
    { name: 'SQL', icon: '🗃️', color: 'text-[#CC2927]', bgColor: 'bg-[#121315]' },
    { name: 'Git', icon: '🔄', color: 'text-[#F05032]', bgColor: 'bg-[#121315]' },
    { name: 'GitHub', icon: '🐙', color: 'text-[#181717]', bgColor: 'bg-[#121315]' },
    { name: 'Postman', icon: '📮', color: 'text-[#FF6C37]', bgColor: 'bg-[#121315]' },
    { name: 'Excel', icon: '📊', color: 'text-[#217346]', bgColor: 'bg-[#121315]' },
    { name: 'Render', icon: '🚀', color: 'text-[#46E3B7]', bgColor: 'bg-[#121315]' },
    { name: 'Jupyter', icon: '📓', color: 'text-[#F37626]', bgColor: 'bg-[#121315]' },
  ];

  return (
    <div id="skills" className="py-16 bg-[#17191A] jagged-border jagged-border-dark">
      <div className="container mx-auto px-4 md:pl-24 md:pr-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#B8B8CA] mb-10 text-center">
          Skills
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-2 sm:p-4 rounded-lg bg-[#0A0A0A] border border-[#272930] hover:border-[#B8B8CA]/30 transition-all duration-300 aspect-square">
              <div className={`flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full mb-2 ${skill.bgColor}`}>
                <span className={`text-xl sm:text-2xl font-bold ${skill.color}`}>{skill.icon}</span>
              </div>
              <span className="text-[#B8B8CA] text-sm sm:text-base font-medium text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;