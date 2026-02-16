import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Services = () => {
  // Updated Data with your Specific IT & AI Services
  const services = [
    { 
      id: "1", 
      title: "IT Consultancy", 
      desc: "Strategic guidance to align IT infrastructure with your business goals and roadmap.", 
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      id: "2", 
      title: "UI/UX Design", 
      desc: "Crafting intuitive, user-centric interfaces and robust system architectures.", 
      image: "https://images.unsplash.com/photo-1586717791821-3f44a5638d48?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      id: "3", 
      title: "Web & App Development", 
      desc: "Building scalable Web, Mobile (iOS/Android), and custom IT applications.", 
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      id: "4", 
      title: "Artificial Intelligence (AI)", 
      desc: "Developing intelligent systems, Machine Learning models, and Smart Optimization.", 
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      id: "5", 
      title: "Data Analytics & Science", 
      desc: "Data Collection, Curation, Visualization, and Advanced Forecasting/Prediction.", 
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      id: "6", 
      title: "Deployment & Cloud", 
      desc: "Secure Cloud and On-Premise deployment services for high availability.", 
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      id: "7", 
      title: "API & IoT Integration", 
      desc: "Seamless connectivity between software, hardware, and third-party APIs.", 
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      id: "8", 
      title: "System Upgradation", 
      desc: "Modernizing legacy systems to the latest tech stack for better performance.", 
      image: "https://images.unsplash.com/photo-1504384308090-c54be3855485?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      id: "9", 
      title: "Testing & QA", 
      desc: "Comprehensive Quality Assurance, Automation, and Security testing.", 
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      id: "10", 
      title: "Maintenance & Monitoring", 
      desc: "24/7 Support, bug fixes, and real-time system health monitoring.", 
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" 
    }
  ];

  const [activeId, setActiveId] = useState("1");

  return (
    <div className="w-full bg-[#0b1c38] py-20 relative overflow-hidden font-sans">
      
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0b1c38] via-[#112d5a] to-[#0b1c38] opacity-50"></div>

      <div className="max-w-[1300px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-12">
          <h4 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-2">WHAT WE DO</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Our Core Services To <br /> <span className="text-[#4a90e2]">Accelerate Growth</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* --- LEFT COLUMN: SCROLLABLE LIST --- */}
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
      `}</style>
    </div>
  );
};

export default Services;