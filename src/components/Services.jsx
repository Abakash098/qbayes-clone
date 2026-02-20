import React, { useState } from 'react';
import { FaArrowRight, FaRocket } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  const services = [
    { 
      id: "01", 
      title: "IT Consultancy", 
      path: "/it-consultancy", 
      desc: "Strategic guidance to align IT infrastructure with your business goals and roadmap.", 
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      id: "02", 
      title: "UI/UX Design", 
      path: "/ui-ux-design", 
      desc: "Crafting intuitive, user-centric interfaces and robust system architectures.", 
      image: "https://images.unsplash.com/photo-1586717791821-3f44a5638d48?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      id: "03", 
      title: "Web & App Development", 
      path: "/web-development", 
      desc: "Building scalable Web, Mobile (iOS/Android), and custom IT applications.", 
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      id: "04", 
      title: "Artificial Intelligence (AI)", 
      path: "/ai-services", 
      desc: "Developing intelligent systems, Machine Learning models, and Smart Optimization.", 
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      id: "05", 
      title: "Data Analytics & Science", 
      path: "/data-analytics", // Updated path
      desc: "Data Collection, Curation, Visualization, and Advanced Forecasting.", 
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      id: "06", 
      title: "Deployment & Cloud", 
      path: "/cloud-deployment", // Updated path
      desc: "Secure Cloud and On-Premise deployment services for high availability.", 
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      id: "07", 
      title: "API & IoT Integration", 
      path: "/iot-development", 
      desc: "Seamless connectivity between software, hardware, and third-party APIs.", 
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      id: "08", 
      title: "System Upgradation", 
      path: "/system-upgradation", // Updated path
      desc: "Modernizing legacy systems to the latest tech stack for performance.", 
      image: "https://images.unsplash.com/photo-1504384308090-c54be3855485?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      id: "09", 
      title: "Testing & QA", 
      path: "/testing-qa", // Updated path
      desc: "Comprehensive Quality Assurance, Automation, and Security testing.", 
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      id: "10", 
      title: "Maintenance & Monitoring", 
      path: "/maintenance-monitoring", // Updated path
      desc: "24/7 Support, bug fixes, and real-time system health monitoring.", 
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" 
    }
  ];

  const [activeId, setActiveId] = useState("01");

  return (
    <section className="w-full bg-white py-24 relative overflow-hidden font-sans">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-100/50 rounded-full blur-[100px] -z-10 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-20 max-w-3xl">
          <div className="flex items-center gap-2 text-purple-700 font-bold text-xs uppercase tracking-[0.3em] mb-4">
             <div className="w-8 h-[2px] bg-purple-700"></div> EXCELLENCE IN DELIVERY
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
            Our Core Services To <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-600">
              Accelerate Growth
            </span>
          </h2>
          <p className="text-slate-500 text-lg font-medium border-l-4 border-purple-100 pl-6">
            We provide end-to-end digital solutions, from strategic consultancy to advanced AI integration, ensuring your business stays ahead of the curve.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-stretch">
          
          {/* LEFT: Scrollable Menu */}
          <div className="w-full lg:w-5/12 max-h-[600px] overflow-y-auto pr-6 custom-services-scrollbar space-y-3">
            {services.map((service) => (
              <div 
                key={service.id}
                onMouseEnter={() => setActiveId(service.id)}
                onClick={() => navigate(service.path)} // Navigation logic added here
                className={`group relative p-8 rounded-[2rem] transition-all duration-500 border cursor-pointer
                  ${activeId === service.id 
                    ? 'bg-white border-purple-100 shadow-[0_20px_50px_rgba(126,34,206,0.08)]' 
                    : 'bg-transparent border-transparent hover:bg-slate-50'
                  }`}
              >
                {/* Visual indicator for active tab */}
                <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-12 bg-purple-700 rounded-r-full transition-all duration-500
                  ${activeId === service.id ? 'opacity-100' : 'opacity-0'}`}></div>

                <div className="flex items-start gap-6">
                  <span className={`text-xl font-black mt-1 ${activeId === service.id ? 'text-purple-700' : 'text-slate-200 group-hover:text-slate-400'}`}>
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
                    ${activeId === service.id ? 'bg-purple-700 text-white shadow-lg' : 'bg-slate-100 text-slate-400 group-hover:bg-purple-100 group-hover:text-purple-700'}`}>
                    <FaArrowRight size={14} className={`transform transition-transform duration-500 ${activeId === service.id ? 'rotate-0' : '-rotate-45'}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: Dynamic Image Preview */}
          <div className="hidden lg:block w-7/12 relative h-[600px]">
            <div className="absolute inset-0 bg-slate-100 rounded-[3rem] overflow-hidden group shadow-2xl border-8 border-white">
              <img 
                key={activeId}
                src={services.find(s => s.id === activeId).image} 
                alt="Service Preview" 
                className="w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-110"
              />
              
              {/* Glassmorphism Overlay */}
              <div className="absolute bottom-10 left-10 right-10 bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[2rem] shadow-2xl">
                 <div className="flex justify-between items-center">
                    <div>
                      <p className="text-purple-200 text-xs font-bold uppercase tracking-widest mb-1">Service Spotlight</p>
                      <h3 className="text-3xl font-black text-white">{services.find(s => s.id === activeId).title}</h3>
                    </div>
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-purple-700 shadow-xl">
                       <FaRocket size={24}/>
                    </div>
                 </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full blur-3xl opacity-20 -z-10"></div>
          </div>

        </div>
      </div>

      <style>{`
        .custom-services-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-services-scrollbar::-webkit-scrollbar-track { background: #f8fafc; border-radius: 10px; }
        .custom-services-scrollbar::-webkit-scrollbar-thumb { background-color: #cbd5e1; border-radius: 20px; }
        .custom-services-scrollbar::-webkit-scrollbar-thumb:hover { background-color: #7e22ce; }
      `}</style>
    </section>
  );
};

export default Services;