import React from 'react';

const Contact = () => {
  return (
    <div id="contact" className="py-16 bg-[#272930]">
      <div className="container mx-auto px-4 md:pl-24 md:pr-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#B8B8CA] mb-10 text-center">
          Get In Touch
        </h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-[#17191A] p-6 rounded-lg shadow-lg" data-aos="fade-right">
            <h3 className="text-2xl font-semibold text-[#B8B8CA] mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="text-[#B8B8CA] mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#B8B8CA]/70 text-sm">Email</p>
                  <p className="text-[#B8B8CA]">tanvi.madani@example.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-[#B8B8CA] mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#B8B8CA]/70 text-sm">Location</p>
                  <p className="text-[#B8B8CA]">Ahmedabad, Gujarat, India</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-[#B8B8CA] mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#B8B8CA]/70 text-sm">Phone</p>
                  <p className="text-[#B8B8CA]">+91 98765 43210</p>
                </div>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className="mt-8">
              <h4 className="text-lg font-medium text-[#B8B8CA] mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-[#B8B8CA] hover:text-[#272930] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                  </svg>
                </a>
                <a href="#" className="text-[#B8B8CA] hover:text-[#272930] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="#" className="text-[#B8B8CA] hover:text-[#272930] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-[#17191A] p-6 rounded-lg shadow-lg" data-aos="fade-left">
            <h3 className="text-2xl font-semibold text-[#B8B8CA] mb-6">Send Me a Message</h3>
            
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-[#B8B8CA] mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-[#272930] text-[#B8B8CA] border border-[#272930] rounded py-2 px-3 focus:outline-none focus:border-[#B8B8CA]"
                  placeholder="Your Name"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-[#B8B8CA] mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-[#272930] text-[#B8B8CA] border border-[#272930] rounded py-2 px-3 focus:outline-none focus:border-[#B8B8CA]"
                  placeholder="Your Email"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="message" className="block text-[#B8B8CA] mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full bg-[#272930] text-[#B8B8CA] border border-[#272930] rounded py-2 px-3 focus:outline-none focus:border-[#B8B8CA]"
                  placeholder="Your Message"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="px-6 py-3 bg-[#272930] text-[#B8B8CA] font-medium rounded hover:bg-[#121315] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
              