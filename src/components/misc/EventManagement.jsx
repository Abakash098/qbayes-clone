import React from 'react';
import { FaCalendarCheck, FaUsers, FaMicrophone, FaArrowRight, FaLaptopCode, FaHandshake } from 'react-icons/fa';

const EventManagement = () => (
  <div className="bg-white font-sans pt-[90px]">
    
    {/* --- HERO SECTION --- */}
    <section className="relative bg-[#020b24] py-24 lg:py-32 text-white overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1920" 
          alt="Event Management" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020b24] via-[#020b24]/90 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
          Event <span className="text-[#ff5c00]">Management</span>
        </h1>
        <p className="text-xl text-slate-300 max-w-2xl leading-relaxed mb-10">
          Seamlessly organized conferences, tech fests, and corporate meetings that drive engagement and leave a lasting impression.
        </p>
        <button className="bg-[#ff5c00] hover:bg-orange-600 transition-colors text-white font-bold py-4 px-10 rounded-full flex items-center gap-3 shadow-lg shadow-orange-500/30 w-max">
          Plan Your Event <FaArrowRight />
        </button>
      </div>
    </section>

    {/* --- SERVICES GRID --- */}
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-6">Our Event Expertise</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            From technical workshops to large-scale conferences, we manage every detail so you can focus entirely on your audience.
          </p>
        </div>

        {/* Expertise Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: 'Conferences', icon: FaUsers, desc: 'Large-scale corporate and industry conferences with end-to-end event management.' },
            { title: 'Workshops', icon: FaLaptopCode, desc: 'Interactive, hands-on technical workshops designed for active skill-building.' },
            { title: 'Seminars', icon: FaMicrophone, desc: 'Professional seminars featuring guest speakers and smooth A/V tech setups.' },
            { title: 'Tech Fests', icon: FaCalendarCheck, desc: 'High-energy college and corporate tech festivals with engaging activities.' }
          ].map((event, index) => (
            <div key={index} className="bg-white p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-[#ff5c00]/10 rounded-2xl flex items-center justify-center text-[#ff5c00] mb-6">
                <event.icon size={28}/>
              </div>
              <h4 className="font-bold text-2xl text-slate-900 mb-4">{event.title}</h4>
              <p className="text-slate-500 leading-relaxed">{event.desc}</p>
            </div>
          ))}
        </div>
        
        {/* --- BOTTOM CTA BANNER --- */}
        <div className="mt-24 bg-gradient-to-br from-[#020b24] to-[#01358d] rounded-[3rem] p-12 lg:p-20 text-white flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-2xl">
          
          {/* Decorative Glowing Element */}
          <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at top right, #ff5c00, transparent 50%)' }}></div>
          
          {/* Left Text */}
          <div className="lg:w-2/3 relative z-10">
            <div className="flex items-center gap-3 text-orange-400 font-bold tracking-widest text-sm uppercase mb-4">
              <FaHandshake size={20} /> Corporate Events
            </div>
            <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">Hosting a Corporate Meeting?</h2>
            <p className="text-blue-100 text-lg leading-relaxed max-w-2xl">
              We handle everything from venue selection and cutting-edge tech support to itinerary management and catering, so you can focus on the agenda.
            </p>
          </div>
          
          {/* Right Button */}
          <div className="relative z-10 shrink-0 self-start lg:self-center">
            <button className="bg-[#ff5c00] hover:bg-orange-600 transition-all transform hover:scale-105 text-white px-10 py-5 rounded-full font-bold text-lg flex items-center gap-3 shadow-xl shadow-orange-500/30">
              Consult Our Team <FaArrowRight />
            </button>
          </div>

        </div>
      </div>
    </section>
  </div>
);

export default EventManagement;