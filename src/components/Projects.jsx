import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'EAT4U: Recipe Recommendation System',
      description: 'Developed a full-stack recipe platform with authentication, recipe CRUD, and review features. Integrated an AI-based recommendation engine for personalized recipe suggestions. Implemented error handling, logging, and security measures (rate limiting, CORS, helmet). Designed a responsive frontend with forms, reviews, and recommendation UI for better UX.',
      technologies: ['MERN Stack', 'JWT', 'Tailwind CSS', 'Python'],
      image: 'https://via.placeholder.com/300x200',
      link: 'https://eat-4-u.vercel.app/'
    },
    {
      title: '5ive: AI-Powered Microlearning Platform ',
      description: 'Developed microlearning app delivering daily 5-minute AI-generated lessons. Added adaptive quizzes, flashcards, streak tracking, and gamification for engagement that improved user retention by 35%. Optimized caching with Redis, reducing API response time by 50%.',
      technologies: ['MERN Stack', 'Tailwind CSS', 'Redis', 'Groq API', 'JWT'],
      image: 'https://via.placeholder.com/300x200',
      link: '#'
    },
    {
      title: 'Candy-Fall Frenzy',
      description: '• Created a Web-app and console game both with 20+ levels, lifelines, color-coded candies, sound effects.',
      technologies: ['JavaScript', 'HTML/CSS'],
      image: 'https://via.placeholder.com/300x200',
      link: 'https://candy-game-lemon.vercel.app/'
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website showcasing projects, skills, and professional experience.',
      technologies: ['React', 'Tailwind CSS', 'Vite'],
      image: 'https://via.placeholder.com/300x200',
      link: 'https://tanvi-madani-portfolio.vercel.app/'
    }
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