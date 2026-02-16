import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const MiscellaneousServices = () => {
  // Data derived from your Screenshot
  const miscServices = [
    { 
      id: "1", 
      title: "Academics/Education", 
      desc: "Imparting Technical Knowledge, Vocational Training, EdTech Development, and Career Counselling.", 
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800" // Education Image
    },
    { 
      id: "2", 
      title: "Documentation", 
      desc: "Reports, Presentations, Brochures, Research Papers, Dissertations, and Thesis writing.", 
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800" // Writing/Paperwork Image
    },
    { 
      id: "3", 
      title: "Event Management", 
      desc: "Conferences, Workshops, Seminars, Corporate Meetings, and Tech Fests.", 
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800" // Event Image
    }
  ];

  const [activeId, setActiveId] = useState("1");

  return (
    // Used the same background color #0b1c38 to match your theme
    // Added 'border-t border-white/10' to create a subtle line between the two service sections
    <div className="w-full bg-[#0b1c38] py-20 relative overflow-hidden font-sans border-t border-white/10">
      
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0b1c38] via-[#112d5a] to-[#0b1c38] opacity-50"></div>

      <div className="max-w-[1300px] mx-auto px-6 relative z-10">
        
        {/* Header - Updated Title for Miscellaneous */}
        <div className="mb-12">
          <h4 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-2">ADDITIONAL EXPERTISE</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Miscellaneous Services <br /> <span className="text-[#4a90e2]">For Your Business</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* --- LEFT COLUMN: SCROLLABLE LIST --- */}
          <div className="w-full lg:w-1/2 h-[400px] overflow-y-auto pr-4 custom-scrollbar space-y-4">
            {miscServices.map((service) => (
              <div 
                key={service.id}
                onMouseEnter={() => setActiveId(service.id)}
                className={`group relative p-6 rounded-xl transition-all duration-300 border cursor-pointer flex items-center gap-6
                  ${activeId === service.id 
                    ? 'bg-[#102a52] border-blue-500 shadow-xl' 
                    : 'bg-transparent border-white/5 hover:bg-[#102a52]/50 hover:border-white/20'
                  }`}
              >
                {/* Number */}
                <span className={`text-3xl font-bold font-sans ${activeId === service.id ? 'text-[#4a90e2]' : 'text-white/20'}`}>
                  {service.id}.
                </span>
                
                {/* Text Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#4a90e2] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                    {service.desc}
                  </p>
                </div>

                {/* Arrow */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0
                      ${activeId === service.id ? 'bg-orange-500 text-white' : 'bg-white/10 text-white group-hover:bg-orange-500'}`}>
                   <FaArrowRight className={`transform transition-transform duration-300 ${activeId === service.id ? 'rotate-0' : '-rotate-45 group-hover:rotate-0'}`} />
                </div>
              </div>
            ))}
          </div>

          {/* --- RIGHT COLUMN: STATIC IMAGE PREVIEW --- */}
          <div className="w-full lg:w-1/2 hidden lg:block h-[400px] relative rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl">
            {/* Added a key here to force re-render animation when image changes */}
            <img 
              key={activeId}
              src={miscServices.find(s => s.id === activeId).image} 
              alt="Service Preview" 
              className="w-full h-full object-cover transition-all duration-500 transform animate-fadeIn"
            />
            {/* Overlay Text on Image */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-8">
               <h3 className="text-3xl font-bold text-white mb-2">{miscServices.find(s => s.id === activeId).title}</h3>
               <div className="h-1 w-20 bg-orange-500 rounded-full"></div>
            </div>
          </div>

        </div>
      </div>

      {/* --- CUSTOM SCROLLBAR CSS (Same as your Services.jsx) --- */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #0b1c38; 
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #4a90e2; 
          border-radius: 20px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #f97316; 
        }
        @keyframes fadeIn {
          from { opacity: 0.5; transform: scale(1.05); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default MiscellaneousServices;