// src/components/Achievements.js

import React from 'react';

// SVG Icons (using inline components for cleanliness)
const TrophyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-primary mr-3">
    <path fillRule="evenodd" d="M16.5 3.75a.75.75 0 0 1 .75.75v1.5h1.5a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-1.5v1.5a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1-.75-.75V10.5H6a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 .75-.75h1.5V4.5a.75.75 0 0 1 .75-.75h9Zm-9 1.5V6h9V5.25h-9ZM7.5 7.5v1.5h9V7.5h-9Zm3 6a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75v-6Z" clipRule="evenodd" />
    <path d="M6 16.5a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 .75.75v.75a2.25 2.25 0 0 1-2.25 2.25h-6.75A2.25 2.25 0 0 1 6 17.25v-.75Z" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-primary mr-3">
    <path d="M5.625 4.5c-1.036 0-1.875.84-1.875 1.875v11.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V6.375c0-1.036-.84-1.875-1.875-1.875H5.625ZM9 7.5A.75.75 0 0 0 9 9h6a.75.75 0 0 0 0-1.5H9Z" />
    <path d="M3 9.375c0-1.036.84-1.875 1.875-1.875h1.313a.75.75 0 0 1 0 1.5H4.875A.375.375 0 0 0 4.5 9.375v9.375c0 .207.168.375.375.375h14.25a.375.375 0 0 0 .375-.375V9.375a.375.375 0 0 0-.375-.375h-1.313a.75.75 0 0 1 0-1.5h1.313c1.036 0 1.875.84 1.875 1.875v9.375A1.875 1.875 0 0 1 19.125 21H4.875A1.875 1.875 0 0 1 3 18.75V9.375Z" />
  </svg>
);

const CertificateIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-primary mr-3">
      <path fillRule="evenodd" d="M12.75 3a.75.75 0 0 0-1.5 0v1.5A1.5 1.5 0 0 1 9.75 6H6a.75.75 0 0 0 0 1.5h3.75a1.5 1.5 0 0 1 1.5 1.5v1.5A.75.75 0 0 0 12 11.25v6a.75.75 0 0 0 1.5 0v-6a.75.75 0 0 0-.75-.75V9A1.5 1.5 0 0 1 14.25 7.5H18a.75.75 0 0 0 0-1.5h-3.75a1.5 1.5 0 0 1-1.5-1.5V3ZM11.25 6h1.5v1.5h-1.5V6Z" clipRule="evenodd" />
      <path d="M3.75 9.75a.75.75 0 0 0 0 1.5h3v9.75a.75.75 0 0 0 .75.75h10.5a.75.75 0 0 0 .75-.75V11.25h3a.75.75 0 0 0 0-1.5h-3v-1.5a.75.75 0 0 0-.75-.75H7.5a.75.75 0 0 0-.75.75v1.5h-3Z" />
    </svg>
);


const Achievements = () => {
  return (
    <div id="achievements" className="py-16 px-4 md:pl-24 md:pr-8 overflow-hidden" style={{ backgroundColor: 'var(--background)', color: 'var(--text)' }}>
      <div className="max-w-full mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 pb-4" style={{ borderBottom: '1px solid var(--border)' }}>
          Achievements & Roles
        </h2>

        {/* Sections Wrapper */}
        <div className="space-y-12">

          {/* Hackathons Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center">
              <TrophyIcon />
              Hackathons
            </h3>
            <div className="space-y-6">
              {/* Hackathon Card */}
              <div className="p-6 rounded-lg shadow-md border-l-4 border-primary" style={{ backgroundColor: 'var(--cardBg)' }}>
                <h4 className="text-lg font-semibold">
                  <span className="text-primary">First Prize Winner – "Breach 2025" — FinTech Hackathon (PDEU)</span>
                </h4>
                <span className="text-accent text-sm">March 2025</span>
                
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li><span className="font-medium">Project:</span> Automated Compliance Management System (<a href="#" className="text-primary hover:underline">Live Demo</a>)</li>
                  <li><span className="font-medium">Role:</span> Full Stack Developer in a 5-member team</li>
                  <li>Developed a system to automate compliance checks for financial regulations that reduced manual checks by average 70%.</li>
                  <li>Deployed on Vercel (Frontend) and Render (Backend).</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Position of Responsibility Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center">
              <BriefcaseIcon />
              Positions of Responsibility
            </h3>
            <div className="space-y-6">
              {/* Role Card 1 */}
              <div className="p-6 rounded-lg shadow-md border-l-4 border-primary" style={{ backgroundColor: 'var(--cardBg)' }}>
                <h4 className="text-lg font-semibold flex justify-between">
                  <span>Technical Director – Association of Computer Engineering Students (ACES)</span>
                  <span className="text-accent text-sm flex-shrink-0 ml-4">Oct 2025 - Present</span>
                </h4>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>Organized technical events, workshops, and seminars, fostering collaborative learning.</li>
                </ul>
              </div>

              {/* Role Card 2 */}
              <div className="p-6 rounded-lg shadow-md border-l-4 border-primary" style={{ backgroundColor: 'var(--cardBg)' }}>
                <h4 className="text-lg font-semibold flex justify-between">
                  <span>Executive Member – Association of Computer Engineering Students (ACES)</span>
                  <span className="text-accent text-sm flex-shrink-0 ml-4">Jan 2025 - Oct 2025</span>
                </h4>
                {/* You can add description bullet points here if you have any */}
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center">
              <CertificateIcon />
              Certifications
            </h3>
            <div className="space-y-6">
              {/* Certification Card */}
              <div className="p-6 rounded-lg shadow-md border-l-4 border-primary" style={{ backgroundColor: 'var(--cardBg)' }}>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    <span className="font-medium">Certificate Portfolio</span> – All hackathon and competition certificates 
                    <a href="#" className="text-primary hover:underline font-medium ml-2">
                      View Collection
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Achievements;