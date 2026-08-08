import React from 'react';
import { SkillText } from './sub/SkillText';
import { SkillDataProvider } from './sub/SkillDataProvider';

const Skills = () => {
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

  // Helper array chunking to build the inverted pyramid look
  const rowCounts = [7, 6, 5, 4, 1];
  let startIndex = 0;
  const chunkedSkills = rowCounts.map(count => {
    const chunk = skills.slice(startIndex, startIndex + count);
    startIndex += count;
    return chunk;
  });

  return (
    <section
      id="skills"
      style={{ backgroundColor: 'var(--background)' }}
      className="w-full h-full relative py-20 text-text"
    >
      <div className="reveal flex flex-col items-center justify-center gap-3 w-full">
        <div style={{ transform: "scale(0.9)" }} className="flex flex-col items-center justify-center w-full">
          <SkillText />

          <div className="flex flex-col items-center justify-center w-full max-w-[90%] z-10 px-4 mt-8 gap-4 md:gap-8">
            {chunkedSkills.map((row, rowIndex) => (
              <div key={`row-${rowIndex}`} className="flex flex-row justify-center flex-wrap gap-4 md:gap-8 lg:gap-12 items-center w-full">
                {row.map((skill, i) => (
                  <SkillDataProvider
                    key={`${skill.name}-${i}`}
                    src={skill.image}
                    name={skill.name}
                    index={i}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
