import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Website',
      description: 'A full-stack e-commerce platform with product catalog, shopping cart, and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: 'https://via.placeholder.com/300x200',
      link: '#'
    },
    {
      title: 'Task Management App',
      description: 'A productivity application for managing tasks, projects, and deadlines with team collaboration features.',
      technologies: ['React', 'Firebase', 'Material UI'],
      image: 'https://via.placeholder.com/300x200',
      link: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather application with forecast data, location search, and interactive maps.',
      technologies: ['JavaScript', 'Weather API', 'HTML/CSS'],
      image: 'https://via.placeholder.com/300x200',
      link: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website showcasing projects, skills, and professional experience.',
      technologies: ['React', 'Tailwind CSS', 'Vite'],
      image: 'https://via.placeholder.com/300x200',
      link: '#'
    }
  ];

  return (
    <div id="projects" className="py-16 bg-[#272930]">
      <div className="container mx-auto px-4 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#B8B8CA] mb-10 text-center">
          My Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-[#17191A] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#B8B8CA] mb-2">{project.title}</h3>
                <p className="text-[#B8B8CA] mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-[#121315] text-[#B8B8CA] text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  className="inline-block px-4 py-2 bg-[#272930] text-[#B8B8CA] font-medium rounded hover:bg-[#121315] transition-colors"
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