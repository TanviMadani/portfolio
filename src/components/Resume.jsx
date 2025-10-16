import React from 'react';

const Resume = () => {
  const experiences = [
    {
      title: 'Frontend Developer Intern',
      company: 'Tech Solutions Inc.',
      period: 'May 2022 - August 2022',
      description: 'Developed responsive user interfaces using React and implemented state management with Redux. Collaborated with the design team to ensure pixel-perfect implementation of UI designs.'
    },
    {
      title: 'Web Development Intern',
      company: 'Creative Digital Agency',
      period: 'January 2022 - April 2022',
      description: 'Assisted in building and maintaining client websites using HTML, CSS, and JavaScript. Implemented responsive designs and ensured cross-browser compatibility.'
    }
  ];
  
  const certifications = [
    {
      name: 'React - The Complete Guide',
      issuer: 'Udemy',
      date: 'September 2022'
    },
    {
      name: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      date: 'July 2022'
    },
    {
      name: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      date: 'May 2022'
    }
  ];

  return (
    <div id="resume" className="py-16 bg-background">
      <div className="container mx-auto px-4 md:pl-24 md:pr-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-primary">
          Resume
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {/* Download Resume Button */}
          <div className="flex justify-center mb-10">
            <a 
              href="#" 
              className="px-6 py-3 font-medium rounded-full transition-colors flex items-center gap-2 bg-secondary text-white hover-primary"
              data-aos="fade-up"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Resume
            </a>
          </div>
          
          {/* Experience Section */}
          <div className="mb-12" data-aos="fade-up">
            <h3 className="text-2xl font-semibold mb-6 pb-2 text-primary border-theme" style={{ borderBottom: '1px solid var(--border)' }}>
              Experience
            </h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="p-6 rounded-lg shadow-md bg-card border-theme" style={{ border: '1px solid var(--border)' }}>
                  <h4 className="text-xl font-medium text-primary">{exp.title}</h4>
                  <p className="font-medium mb-2">{exp.company}</p>
                  <p className="text-sm mb-4 text-accent">{exp.period}</p>
                  <p>{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications Section */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-2xl font-semibold mb-6 pb-2 text-primary border-theme" style={{ borderBottom: '1px solid var(--border)' }}>
              Certifications
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-card p-4 rounded-lg shadow-md border-theme" style={{ border: '1px solid var(--border)' }}>
                  <h4 className="text-lg font-medium text-primary">{cert.name}</h4>
                  <p className="font-medium">{cert.issuer}</p>
                  <p className="text-accent text-sm">{cert.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;