import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Services = () => {
  const services = [
    { id: "1", title: "UI/UX Design", desc: "Crafting user-centric UX/UI designs that engage and convert.", image: "https://images.unsplash.com/photo-1586717791821-3f44a5638d48?auto=format&fit=crop&q=80&w=800" },
    { id: "2", title: "Web Development", desc: "Scalable and robust web solutions tailored to your business goals.", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800" },
    { id: "3", title: "Mobile App Development", desc: "Flawless iOS and Android apps with superior user experiences.", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800" },
    { id: "4", title: "Internet Of Things", desc: "Connecting devices to leverage the full power of IoT for business.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" },
    { id: "5", title: "Game Development", desc: "Immersive 2D/3D games that captivate and entertain audiences.", image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=800" },
    { id: "6", title: "Artificial Intelligence", desc: "Smart AI solutions to automate and elevate your business processes.", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800" },
    { id: "7", title: "Digital Marketing", desc: "Driving targeted traffic and visibility through SEO, PPC, and SMM.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" },
    { id: "8", title: "Data Science", desc: "Actionable insights from your data to drive strategic decisions.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" }
  ];

  const [activeId, setActiveId] = useState("1");

  return (
    <div className="w-full bg-[#0b1c38] py-20 relative overflow-hidden">
      
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0b1c38] via-[#112d5a] to-[#0b1c38] opacity-50"></div>

      <div className="max-w-[1300px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-12">
          <h4 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-2">OUR SERVICES</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Our Services To Grow <br /> <span className="text-[#4a90e2]">Your Brand</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* --- LEFT COLUMN: SCROLLABLE LIST (The Fix) --- */}
          {/* Added 'h-[500px]' and 'overflow-y-auto' to make it scroll internally */}
          <div className="w-full lg:w-1/2 h-[500px] overflow-y-auto pr-4 custom-scrollbar space-y-4">
            {services.map((service) => (
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
                <span className={`text-4xl font-bold font-sans ${activeId === service.id ? 'text-[#4a90e2]' : 'text-white/20'}`}>
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
          <div className="w-full lg:w-1/2 hidden lg:block h-[500px] relative rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl">
            <img 
              src={services.find(s => s.id === activeId).image} 
              alt="Service Preview" 
              className="w-full h-full object-cover transition-all duration-500 transform hover:scale-105"
            />
            {/* Overlay Text on Image */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-8">
               <h3 className="text-3xl font-bold text-white mb-2">{services.find(s => s.id === activeId).title}</h3>
               <div className="h-1 w-20 bg-orange-500 rounded-full"></div>
            </div>
          </div>

        </div>
      </div>

      {/* --- CUSTOM SCROLLBAR CSS --- */}
      <style>{`
        /* Thin, dark scrollbar to match the theme */
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
          background-color: #f97316; /* Orange on hover */
        }
      `}</style>
    </div>
  );
};

export default Services;