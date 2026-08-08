import React from 'react';

const BriefcaseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-primary mr-3">
        <path d="M5.625 4.5c-1.036 0-1.875.84-1.875 1.875v11.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V6.375c0-1.036-.84-1.875-1.875-1.875H5.625ZM9 7.5A.75.75 0 0 0 9 9h6a.75.75 0 0 0 0-1.5H9Z" />
        <path d="M3 9.375c0-1.036.84-1.875 1.875-1.875h1.313a.75.75 0 0 1 0 1.5H4.875A.375.375 0 0 0 4.5 9.375v9.375c0 .207.168.375.375.375h14.25a.375.375 0 0 0 .375-.375V9.375a.375.375 0 0 0-.375-.375h-1.313a.75.75 0 0 1 0-1.5h1.313c1.036 0 1.875.84 1.875 1.875v9.375A1.875 1.875 0 0 1 19.125 21H4.875A1.875 1.875 0 0 1 3 18.75V9.375Z" />
    </svg>
);

const Experience = () => {
    return (
        <div id="experience" className="py-16 px-4 md:pl-24 md:pr-8 overflow-hidden" style={{ backgroundColor: 'var(--background)', color: 'var(--text)' }}>
            <div className="max-w-full mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 pb-4 text-primary flex items-center" style={{ borderBottom: '1px solid var(--border)' }}>
                    <BriefcaseIcon />
                    Work Experience
                </h2>

                <div className="p-6 rounded-lg shadow-md border-l-4 border-primary" style={{ backgroundColor: 'var(--cardBg)' }}>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <h3 className="text-lg md:text-xl font-semibold text-primary">
                            Full Stack Web Developer Intern — iFourTechnoLab Pvt. Ltd, Ahmedabad
                        </h3>
                        <span className="text-secondary text-sm mt-1 md:mt-0">4 May 2026 – 14 June 2026</span>
                    </div>
                    <ul className="list-disc list-inside space-y-2 mt-4">
                        <li>Completed a 6-week Summer Internship designing and building full-stack applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).</li>
                        <li>Collaborated with the engineering team on real production features, from API design through to deployment.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Experience;