import React from 'react';


const Projects = () => {
  const projects = [
    {
      title: 'EAT4U: Recipe Recommendation System',
      description: 'Developed a full-stack recipe platform with authentication, recipe CRUD, and review features. Integrated an AI-based recommendation engine for personalized recipe suggestions. Implemented error handling, logging, and security measures (rate limiting, CORS, helmet). Designed a responsive frontend with forms, reviews, and recommendation UI for better UX.',
      technologies: ['MERN Stack', 'JWT', 'Tailwind CSS', 'Python'],
      image: 'https://i.postimg.cc/T3yM65d7/Screenshot-2025-11-01-141858.png',
      link: 'https://eat-4-u.vercel.app/'
    },
    {
      title: '5ive: AI-Powered Microlearning Platform ',
      description: 'Developed microlearning app delivering daily 5-minute AI-generated lessons. Added adaptive quizzes, flashcards, streak tracking, and gamification for engagement that improved user retention by 35%. Optimized caching with Redis, reducing API response time by 50%.',
      technologies: ['MERN Stack', 'Tailwind CSS', 'Redis', 'Groq API', 'JWT'],
      image: 'https://i.postimg.cc/nLgqP5RZ/Screenshot-2025-11-01-143152.png',
      link: '#'
    },
    {
      title: 'impactXI',
      description: 'Developed a data-driven Impact Metric (IM) using IPL ball-by-ball data from 1,170 matches to quantify player influence on match outcomes. Designed a Performance × Match Context × Game Pressure model, normalized to a 0–100 scale, and implemented a rolling last-10-innings algorithm with visualizations to analyze impact beyond traditional stats.',
      technologies: ['ReactJS', 'FastAPI', 'Python', 'Scikit-learn', 'IPL Ball-by-Ball Dataset'],
      image: 'https://i.postimg.cc/bv3rsX8Q/Screenshot-2026-03-11-113634.png',
      link: 'https://impact-xi-bay.vercel.app/'
    },
    {
      title: 'Candy-Fall Frenzy',
      description: 'Created a Web-app and console game both with 20+ levels, lifelines, color-coded candies, sound effects.',
      technologies: ['JavaScript', 'HTML/CSS'],
      image: 'https://i.postimg.cc/7YGmP3zG/Screenshot-2025-11-01-142810.png',
      link: 'https://candy-game-lemon.vercel.app/'
    },
    
  ];

  return (
    <div id="projects" className="py-16 bg-background">
      <div className="container mx-auto px-4 md:pl-24 md:pr-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-primary">
          My Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105 bg-card border-theme"
              style={{ border: '1px solid var(--border)' }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-2 py-1 text-xs rounded-full bg-accent text-white">
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  className="inline-block px-4 py-2 font-medium rounded transition-colors bg-secondary text-white hover-primary"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;