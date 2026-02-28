import React, { useState } from 'react';
import { FaArrowRight, FaMicrochip, FaRobot, FaTools, FaTruck, FaShoppingCart, FaCogs } from 'react-icons/fa';

const Service2 = () => {
  // Content sourced from your IoT/Electronics list image
  const iotServices = [
    { 
      id: "01", 
      title: "Consultancy", 
      desc: "Computer Components", 
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      id: "02", 
      title: "Manufacture & Assembling", 
      desc: "Electronic gadgets, items, and products", 
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      id: "03", 
      title: "Configuration", 
      desc: "Internet of Things (IoT) based devices and components", 
      image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      id: "04", 
      title: "Supply Chain Solutions", 
      desc: "Drone Technologies", 
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      id: "05", 
      title: "Wholesale & Retail Sales", 
      desc: "Robotics (Small and Medium Scale)", 
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      id: "06", 
      title: "Servicing & Maintenance", 
      desc: "Other IoT based Technological Solutions", 
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" 
    }
  ];

  const [activeId, setActiveId] = useState("01");

  return (
    <section id="iot-section" className="w-full bg-white py-24 relative overflow-hidden font-sans">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-100/30 rounded-full blur-[120px] -z-10 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="mb-20 max-w-4xl">
          <div className="flex items-center gap-2 text-violet-700 font-bold text-xs uppercase tracking-[0.3em] mb-4">
             <div className="w-8 h-[2px] bg-violet-700"></div> HARDWARE INNOVATION
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
            Electronics and <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
              Internet of Things (IoT)
            </span>
          </h2>
          <p className="text-slate-500 text-lg font-medium border-l-4 border-violet-100 pl-6">
            Connecting the physical and digital worlds through smart gadgets, advanced robotics, and drone technologies.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-stretch">
          
          {/* LEFT: Interactive Service List */}
          <div className="w-full lg:w-5/12 max-h-[600px] overflow-y-auto pr-6 custom-services-scrollbar space-y-3">
            {iotServices.map((service) => (
              <div 
                key={service.id}
                onMouseEnter={() => setActiveId(service.id)}
                className={`group relative p-8 rounded-[2rem] transition-all duration-500 border cursor-pointer
                  ${activeId === service.id 
                    ? 'bg-white border-violet-100 shadow-[0_20px_50px_rgba(124,58,237,0.08)]' 
                    : 'bg-transparent border-transparent hover:bg-slate-50'
                  }`}
              >
                <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-12 bg-violet-600 rounded-r-full transition-all duration-500
                  ${activeId === service.id ? 'opacity-100' : 'opacity-0'}`}></div>

                <div className="flex items-start gap-6">
                  <span className={`text-xl font-black mt-1 ${activeId === service.id ? 'text-violet-600' : 'text-slate-200 group-hover:text-slate-400'}`}>
                    {service.id}
                  </span>
                  
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${activeId === service.id ? 'text-slate-900' : 'text-slate-400'}`}>
                      {service.title}
                    </h3>
                    <div className={`overflow-hidden transition-all duration-500 ${activeId === service.id ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
                       <p className="text-slate-500 text-sm leading-relaxed font-medium">
                        {service.desc}
                      </p>
                    </div>
                  </div>

                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500
                    ${activeId === service.id ? 'bg-violet-600 text-white shadow-lg' : 'bg-slate-100 text-slate-400 group-hover:bg-violet-50 group-hover:text-violet-600'}`}>
                    <FaArrowRight size={14} className={`transform transition-transform duration-500 ${activeId === service.id ? 'rotate-0' : '-rotate-45'}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: Visual Preview with Items list */}
          <div className="hidden lg:block w-7/12 relative h-[600px]">
            <div className="absolute inset-0 bg-slate-100 rounded-[3rem] overflow-hidden group shadow-2xl border-8 border-white">
              <img 
                key={activeId}
                src={iotServices.find(s => s.id === activeId).image} 
                alt="IoT Preview" 
                className="w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-110"
              />
              
              <div className="absolute bottom-10 left-10 right-10 bg-slate-900/60 backdrop-blur-xl border border-white/20 p-8 rounded-[2rem] shadow-2xl">
                 <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="text-violet-300 text-xs font-bold uppercase tracking-widest mb-1">IoT Solutions</p>
                      <h3 className="text-3xl font-black text-white">{iotServices.find(s => s.id === activeId).title}</h3>
                    </div>
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-violet-600 shadow-xl">
                       <FaMicrochip size={24}/>
                    </div>
                 </div>
                 {/* Itemized tags from image */}
                 <div className="flex flex-wrap gap-2">
                    {["Drones", "Robotics", "Smart Gadgets", "Sensors"].map(tag => (
                      <span key={tag} className="text-[10px] px-3 py-1 bg-white/10 text-white rounded-full border border-white/10">{tag}</span>
                    ))}
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service2;