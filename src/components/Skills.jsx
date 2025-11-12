import React, { useEffect, useState } from 'react';

const Skills = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Get the current theme from localStorage
    const currentTheme = localStorage.getItem('theme-mode') || 'light';
    setTheme(currentTheme);

    // Listen for theme changes
    const handleThemeChange = () => {
      setTheme(localStorage.getItem('theme-mode') || 'light');
    };
    
    window.addEventListener('storage', handleThemeChange);
    return () => window.removeEventListener('storage', handleThemeChange);
  }, []);

  const skills = [
    { name: 'C', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
    { name: 'C++', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { name: 'Java', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Python', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'ReactJS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'MongoDB', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Bootstrap', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    { name: 'TailwindCSS', image: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/tailwind-css-icon.png' },
    { name: 'Chart.js', image: 'https://www.chartjs.org/img/chartjs-logo.svg' },
    { name: 'D3.js', image: 'https://raw.githubusercontent.com/d3/d3-logo/master/d3.svg' },
    { name: 'REST APIs', image: 'https://www.svgrepo.com/show/375531/api.svg' },
    { name: 'WebSockets', image: 'https://www.svgrepo.com/show/354553/websocket.svg' },
    { name: 'PostgreSQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'SQL', image: 'https://www.svgrepo.com/show/331760/sql-database-generic.svg' },
    { name: 'Git', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Postman', image: 'https://www.svgrepo.com/show/354202/postman-icon.svg' },
    { name: 'Excel', image: 'https://www.svgrepo.com/show/373589/excel.svg' },
    { name: 'Render', image: 'https://images.seeklogo.com/logo-png/53/1/render-logo-png_seeklogo-532232.png' },
    { name: 'Vercel', image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAABKElEQVR4AcyUsWoCQRRFhwQCqVIHUoRAikDaVIEUQbGwFgVRLET/QBAR/Q4re//Jf/APPHfXdWd1ZndWV1DunXnvzcyZ58Lug7nh767gnTJ/tGznM+A/OEhl4BOI33iBgxQKf4W2xFKToY0LFQpXt88WTbmVusMQ+C9Hx9jWF8kU5yoE7utSj+ktj14E73G4jl16oui7mCVjiuDqLtroGYbU/7BTeXB19eE8lS1qX7ZyyHxwQYu6PiDMP8EAn8kH93ZzRogL2v8Yh+nogtdY7uMyemezLmBK5YKHPo6UEkdzpk981Cl8xIpeGqaLlOnehuv1vrTrpJMuQQNHsuG6VR+oaOGKQZzoeAJ/IdtifUOu9RpOC5sEviNZVegNrCNcceVOOq8cLOAeAAD//8DP9LoAAAAGSURBVAMAAO8oL+JQbwAAAAAASUVORK5CYII=' },
    { name: 'Jupyter', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg' },
  ];

  return (
    <div id="skills" className="py-16 text-text " style={{ 
      backgroundColor: 'var(--background)'
    }}>
      <div className="container mx-auto px-4 md:pl-24 md:pr-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-text">
          Skills
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3 mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center p-2 sm:p-4 rounded-lg transition-all duration-300 aspect-square bg-card border-theme"
              style={{ 
                border: '1px solid var(--border)',
                transform: 'translateY(0)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div className="flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 rounded-full mb-2 p-2">
                <img 
                  src={skill.image} 
                  alt={skill.name} 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-sm sm:text-base font-medium text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;