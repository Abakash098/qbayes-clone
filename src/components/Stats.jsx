import React from 'react';

const Stats = () => {
  const stats = [
    { id: 1, value: "2022", label: "A National Award-Winning Company" },
    { id: 2, value: "1500+", label: "Clients Worldwide" },
    { id: 3, value: "800+", label: "Professionals" },
    { id: 4, value: "98.5%", label: "Retention Rate" },
    { id: 5, value: "8000+", label: "Projects Executed" },
    { id: 6, value: "4", label: "Location Presence" },
  ];

  return (
    <div className="w-full py-20 bg-[#f3f6fa] overflow-hidden relative">
      {/* Decorative Dotted Pattern (Top Right) */}
      <div className="absolute top-10 right-10 opacity-20 hidden lg:block">
        <svg width="100" height="100" fill="#4a90e2">
          <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" />
          </pattern>
          <rect width="100" height="100" fill="url(#dots)" />
        </svg>
      </div>

      <div className="max-w-[1300px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* --- LEFT SIDE: THE WIDE CARDS GRID --- */}
        <div className="grid md:grid-cols-2 gap-6">
          {stats.map((item) => (
            <div 
              key={item.id} 
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-center space-x-4 border border-blue-50/50"
            >
              {/* Number with Blue Circle Background */}
              <div className="relative flex-shrink-0 w-20 h-20 flex items-center justify-center">
                 <div className="absolute inset-0 bg-blue-50 rounded-full opacity-70"></div>
                 <span className="relative text-2xl md:text-3xl font-bold text-[#4a90e2] z-10">
                   {item.value}
                 </span>
              </div>
              
              {/* Label Text (Side by Side) */}
              <p className="text-gray-600 font-semibold text-sm leading-tight">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* --- RIGHT SIDE: CONTENT --- */}
        <div className="flex flex-col justify-center">
          <h4 className="text-orange-500 font-bold tracking-widest uppercase mb-4 text-sm">
            OUR STATS
          </h4>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-8 leading-tight">
            Expertise To <br />
            Transform Business <br />
            With Technology <br />
            <span className="text-[#4a90e2]">And Marketing</span>
          </h2>

          <p className="text-gray-500 text-lg leading-relaxed">
            We move beyond maintenance, giving businesses sharp insights, useful data, 
            and real momentum to stay ahead in a constantly shifting digital world.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Stats;