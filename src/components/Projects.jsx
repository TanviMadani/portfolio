import React from 'react';


const Projects = () => {
  const projects = [
    {
      title: 'EAT4U: Recipe Recommendation System',
      description:
        'Developed a full-stack recipe platform with authentication, recipe CRUD, and review features. Integrated an AI-based recommendation engine for personalized recipe suggestions.',
      technologies: ['MERN Stack', 'Tailwind CSS', 'JWT', 'Python'],
      image:
        'https://i.postimg.cc/T3yM65d7/Screenshot-2025-11-01-141858.png',
      link: 'https://eat-4-u.vercel.app/',
      github: 'https://github.com/TanviMadani/EAT4U',
    },

    {
      title: '5ive: AI-Powered Microlearning Platform',
      description:
        'Developed a microlearning app delivering daily 5-minute AI-generated lessons. Added adaptive quizzes, flashcards, streak tracking, and gamification for engagement. Optimized caching with Redis, reducing API response time.',
      technologies: [
        'MERN Stack',
        'Tailwind CSS',
        'Redis',
        'OpenAI API',
        'JWT',
      ],
      image:
        'https://i.postimg.cc/nLgqP5RZ/Screenshot-2025-11-01-143152.png',
      link: '#',
      github: 'https://github.com/TanviMadani/5ive',
    },

    {
      title: 'impactXI: ImpactMetric for Cricketers',
      description:
        'Developed a data-driven Impact Metric using IPL ball-by-ball data to measure player influence on match outcomes. Modeled impact as Performance × Match Context × Game Pressure, normalized to a 0–100 scale, and applied a rolling last-10-innings algorithm across 1,170 IPL matches.',
      technologies: [
        'ReactJS',
        'FastAPI',
        'Python',
        'Scikit-learn',
        'IPL Dataset',
      ],
      image:
        'https://i.postimg.cc/bv3rsX8Q/Screenshot-2026-03-11-113634.png',
      link: 'https://impact-xi-bay.vercel.app/',
      github: 'https://github.com/TanviMadani/impactXI',
    },

    {
      title: 'MusicGen',
      description:
        "Built an end-to-end AI music generation system using an LLM agent to plan structured song compositions and Meta's MusicGen model to render and stitch them into full tracks. Exposed the system through a FastAPI backend and Streamlit UI.",
      technologies: [
        'Generative AI',
        'LLMs',
        'Prompt Engineering',
        'Python',
        'PyTorch',
        'Streamlit',
      ],
      image:
        'https://placehold.co/600x400/1E90FF/FFFFFF?text=MusicGen',
      link: '#',
      github: 'https://github.com/TanviMadani/MusicGen.git',
    },

    {
      title: 'FinGenius',
      description:
        'Built a Retrieval-Augmented Generation system that ingests company and regulatory documents, indexes them with FAISS, and uses a multi-agent LLM pipeline to generate structured compliance reports, SWOT analyses, and scored audit reports enriched with live financial data.',
      technologies: [
        'RAG',
        'LLMs',
        'Vector Databases',
        'LangChain',
        'Python',
        'Groq LLM API',
      ],
      image:
        'https://placehold.co/600x400/1E90FF/FFFFFF?text=FinGenius',
      link: '#',
      github: 'https://github.com/TanviMadani/FinGenius-AI.git',
    },

    {
      title: 'Cricket-Analysis-Dashboard',
      description:
        'Designed and built an interactive Tableau dashboard analyzing 13 seasons of IPL cricket data by joining ball-by-ball delivery records with match-level results. Implemented a dynamic season selector to surface match winners, toss decision trends, and season-wise Orange Cap and Purple Cap leaders.',
      technologies: [
        'Tableau',
        'Data Visualization',
        'Dashboard Design',
        'IPL Dataset',
      ],
      image:
        'https://placehold.co/600x400/1E90FF/FFFFFF?text=Cricket+Analysis',
      link: '#',
      github:
        'https://github.com/TanviMadani/Cricket-Analysis-Tableau.git',
    },

    {
      title: 'Candy-Fall Frenzy',
      description:
        'Created a web-app and console game featuring 20+ levels, lifelines, color-coded candies, and sound effects.',
      technologies: ['JavaScript', 'HTML/CSS'],
      image:
        'https://i.postimg.cc/7YGmP3zG/Screenshot-2025-11-01-142810.png',
      link: 'https://candy-game-lemon.vercel.app/',
      github: '',
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
                <div className="flex flex-wrap gap-2 mb-4">
                  <a
                    href={project.link}
                    className="inline-block px-4 py-2 font-medium rounded transition-colors bg-secondary text-white hover-primary"
                  >
                    View Project
                  </a>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 font-medium rounded transition-colors bg-secondary text-white hover-primary"
                    >
                      {/* GitHub Icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.797 24 17.3 24 12 24 5.373 18.627 0 12 0z" />
                      </svg>

                      GitHub
                    </a>
                  )}
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;