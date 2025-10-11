import React from 'react';

const Resume = () => {
  // Sample resume data
  const experiences = [
    {
      title: 'Web Development Intern',
      company: 'Tech Solutions Inc.',
      period: 'May 2023 - July 2023',
      description: 'Developed responsive web applications using React and Node.js. Collaborated with the design team to implement UI/UX improvements.'
    },
    {
      title: 'Research Assistant',
      company: 'University Research Lab',
      period: 'Jan 2023 - April 2023',
      description: 'Assisted in data collection and analysis for machine learning projects. Implemented algorithms and documented research findings.'
    }
  ];

  const certifications = [
    {
      name: 'Full Stack Web Development',
      issuer: 'Udemy',
      date: 'August 2022'
    },
    {
      name: 'Python for Data Science',
      issuer: 'Coursera',
      date: 'March 2022'
    },
    {
      name: 'UI/UX Design Fundamentals',
      issuer: 'Google',
      date: 'January 2023'
    }
  ];

  return (
    <div id="resume" className="py-16 bg-[#17191A] jagged-border jagged-border-dark">
      <div className="container mx-auto px-4 md:pl-24 md:pr-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#B8B8CA] mb-10 text-center">
          Resume
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {/* Download Resume Button */}
          <div className="flex justify-center mb-10">
            <a 
              href="#" 
              className="px-6 py-3 bg-[#272930] text-[#B8B8CA] font-medium rounded-full hover:bg-[#121315] transition-colors flex items-center gap-2"
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
            <h3 className="text-2xl font-semibold text-[#B8B8CA] mb-6 border-b border-[#272930] pb-2">
              Experience
            </h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-[#272930] p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-medium text-[#B8B8CA]">{exp.title}</h4>
                  <p className="text-[#B8B8CA] font-medium mb-2">{exp.company}</p>
                  <p className="text-[#B8B8CA]/70 text-sm mb-4">{exp.period}</p>
                  <p className="text-[#B8B8CA]">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications Section */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-2xl font-semibold text-[#B8B8CA] mb-6 border-b border-[#272930] pb-2">
              Certifications
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-[#272930] p-4 rounded-lg shadow-md">
                  <h4 className="text-lg font-medium text-[#B8B8CA]">{cert.name}</h4>
                  <p className="text-[#B8B8CA] font-medium">{cert.issuer}</p>
                  <p className="text-[#B8B8CA]/70 text-sm">{cert.date}</p>
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