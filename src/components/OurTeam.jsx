import React, { useEffect } from 'react';
import { FaLinkedinIn, FaTwitter, FaEnvelope } from 'react-icons/fa';

const OurTeam = () => {
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      name: 'Sarah Jenkins',
      role: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
      bio: 'Visionary leader driving QBayes forward with 15+ years in AI tech.',
    },
    {
      name: 'David Chen',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600',
      bio: 'The architectural mind behind our scalable machine learning models.',
    },
    {
      name: 'Priya Sharma',
      role: 'Head of AI Research',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600',
      bio: 'Pioneering new methodologies in LLMs and generative AI.',
    },
    {
      name: 'Michael Ross',
      role: 'Lead IoT Engineer',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600',
      bio: 'Bridging the gap between software intelligence and physical hardware.',
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-24 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h4 className="text-purple-600 font-bold uppercase tracking-widest text-sm mb-3">Our People</h4>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Meet the Minds Behind <span className="text-purple-600">QBayes</span>
          </h1>
          <p className="text-slate-500 text-lg leading-relaxed">
            We are a team of passionate engineers, researchers, and strategists dedicated to delivering cutting-edge AI and IoT solutions that transform enterprises.
          </p>
        </div>

        {/* TEAM GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-[2rem] p-6 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300 border border-slate-100 group"
            >
              {/* Image Container */}
              <div className="w-full h-64 rounded-3xl overflow-hidden mb-6 relative">
                <div className="absolute inset-0 bg-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Text Info */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-purple-600 text-sm font-semibold mb-4">{member.role}</p>
                <p className="text-slate-500 text-sm mb-6 line-clamp-2">{member.bio}</p>

                {/* Social Links */}
                <div className="flex justify-center gap-4">
                  <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-purple-600 hover:text-white transition-colors">
                    <FaLinkedinIn size={16} />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-purple-600 hover:text-white transition-colors">
                    <FaTwitter size={16} />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-purple-600 hover:text-white transition-colors">
                    <FaEnvelope size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* JOIN THE TEAM CTA */}
        <div className="mt-24 bg-purple-900 rounded-[3rem] p-12 text-center relative overflow-hidden">
          {/* Decorative background blurs */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-purple-600/40 rounded-full blur-[80px]"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-400/20 rounded-full blur-[80px]"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Want to work with us?</h2>
            <p className="text-purple-200 mb-8 max-w-xl mx-auto">
              We are always looking for brilliant minds in AI, Data Science, and IoT. Check out our open positions and join the revolution.
            </p>
            <button className="bg-white text-purple-900 px-8 py-4 rounded-full font-bold hover:bg-purple-50 transition-colors shadow-xl">
              View Open Positions
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OurTeam;