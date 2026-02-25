import React from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Import the navigation hook

const Stats = () => {
  const navigate = useNavigate(); // 2. Initialize the hook

  const statsData = [
    { number: "2026", label: "Founded & Growing Fast" },
    { number: "20+", label: "Skilled Professionals" },
    { number: "98.5%", label: "Client Retention Rate" },
    { number: "1", label: "Global Location Presence" }
  ];

  return (
    <section className="py-28 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden font-sans">
      
      {/* Background Decorative Pattern */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
         <div className="absolute top-0 right-1/4 text-blue-100 opacity-60">
            <svg width="120" height="120" viewBox="0 0 100 100" fill="currentColor">
               <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="2"></circle>
               </pattern>
               <rect width="100" height="100" fill="url(#dots)"></rect>
            </svg>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        
        {/* --- LEFT SIDE: STATS GRID --- */}
        <div className="grid grid-cols-2 gap-8 relative z-10">
          {statsData.map((stat, index) => (
            <div 
              key={index} 
              className={`bg-white p-8 rounded-3xl shadow-xl border border-blue-50 flex flex-col sm:flex-row items-center sm:items-start gap-5 hover:-translate-y-2 transition-transform duration-300
                ${index % 2 !== 0 ? 'lg:translate-y-16' : ''} 
              `}
            >
              <div className="h-20 w-20 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 font-bold text-2xl shrink-0">
                 <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                   <div className="h-4 w-4 bg-blue-500 rounded-full"></div>
                 </div>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-4xl font-extrabold text-blue-700 mb-1">{stat.number}</h3>
                <p className="text-gray-600 font-medium text-base">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* --- RIGHT SIDE: CONTENT --- */}
        <div className="text-left relative z-10 lg:pl-10">
          <h4 className="text-orange-500 font-bold uppercase tracking-[0.2em] text-sm mb-6">OUR STATS</h4>
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-8">
            Expertise To <br/>
            Transform Business <br/>
            With <span className="text-blue-600">Technology</span> <br/>
            <span className="text-[#4a90e2]">And Marketing</span>
          </h2>
          <p className="text-gray-500 text-xl leading-relaxed mb-10 max-w-lg">
            We move beyond maintenance, giving businesses sharp insights, useful data, and real momentum to stay ahead in a constantly shifting digital world.
          </p>
          
          {/* 3. Add the onClick event to trigger the navigation */}
          <button 
            onClick={() => navigate('/about')} 
            className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg shadow-orange-500/30 transition-all transform hover:scale-105"
          >
            Learn More About Us
          </button>
        </div>

      </div>
    </section>
  );
};

export default Stats;