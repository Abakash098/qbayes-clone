import React, { useState } from 'react';
import { FaArrowRight, FaRocket } from 'react-icons/fa';

const Service1 = () => {
  // Updated with distinct Data/AI themed images
  const dataServices = [
    { 
      id: "01", 
      title: "Consultancy", 
      desc: "Statistical Analysis, Inferencing, Regression,", 
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800" // Data meeting/charts
    },
    { 
      id: "02", 
      title: "Data Collection", 
      desc: "Knowledge/Information Processing and Retrieval,", 
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800" // Server racks/data center
    },
    { 
      id: "03", 
      title: "Data Curation", 
      desc: "Forecasting/Prediction,", 
      image: "https://images.unsplash.com/photo-1507925922873-b4c1cd051835?auto=format&fit=crop&q=80&w=800" // Digital nodes/connections
    },
    { 
      id: "04", 
      title: "Data Processing", 
      desc: "Intelligent Systems", 
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800" // Code and data algorithms
    },
    { 
      id: "05", 
      title: "Data Visualization", 
      desc: "Machine/Deep Learning Solutions,", 
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" // Digital analytics dashboard
    },
    { 
      id: "06", 
      title: "Data Analysis & Interpretation", 
      desc: "Smart Optimization", 
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800" // Data charts on screen
    },
    { 
      id: "07", 
      title: "Database Design & Maintenance", 
      desc: "Explainable AI, Sustainable AI, Responsible AI", 
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" // Hardware/circuit board
    },
    { 
      id: "08", 
      title: "Artificial Intelligence (AI)", 
      desc: "Other Advanced Analytics and Solutions,", 
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800" // AI neural network graphic
    }
  ];

  const [activeId, setActiveId] = useState("01");

  return (
    <section className="w-full bg-[#FAFAFC] py-24 relative overflow-hidden font-sans">
      
      {/* Background Decor to match theme */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-100/40 rounded-full blur-[120px] -z-10 translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-20 max-w-3xl">
          <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-[0.3em] mb-4">
             <div className="w-8 h-[2px] bg-indigo-600"></div> DATA-DRIVEN INSIGHTS
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
            Data Analytics and <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Artificial Intelligence
            </span>
          </h2>
          <p className="text-slate-500 text-lg font-medium border-l-4 border-indigo-200 pl-6">
            From raw data collection to advanced AI modeling, we empower your business to make intelligent, predictive decisions.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-stretch">
          
          {/* LEFT: Scrollable Menu */}
          <div className="w-full lg:w-5/12 max-h-[600px] overflow-y-auto pr-6 custom-services-scrollbar space-y-3">
            {dataServices.map((service) => (
              <div 
                key={service.id}
                onMouseEnter={() => setActiveId(service.id)}
                className={`group relative p-8 rounded-[2rem] transition-all duration-500 border cursor-pointer
                  ${activeId === service.id 
                    ? 'bg-white border-indigo-100 shadow-[0_20px_50px_rgba(79,70,229,0.08)]' 
                    : 'bg-transparent border-transparent hover:bg-white/50'
                  }`}
              >
                {/* Visual indicator for active tab */}
                <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-12 bg-indigo-600 rounded-r-full transition-all duration-500
                  ${activeId === service.id ? 'opacity-100' : 'opacity-0'}`}></div>

                <div className="flex items-start gap-6">
                  <span className={`text-xl font-black mt-1 ${activeId === service.id ? 'text-indigo-600' : 'text-slate-300 group-hover:text-slate-400'}`}>
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
                    ${activeId === service.id ? 'bg-indigo-600 text-white shadow-lg' : 'bg-slate-100 text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600'}`}>
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
                src={dataServices.find(s => s.id === activeId).image} 
                alt="Service Preview" 
                className="w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-110"
              />
              
              {/* Glassmorphism Overlay */}
              <div className="absolute bottom-10 left-10 right-10 bg-slate-900/40 backdrop-blur-xl border border-white/20 p-8 rounded-[2rem] shadow-2xl">
                 <div className="flex justify-between items-center">
                    <div>
                      <p className="text-indigo-300 text-xs font-bold uppercase tracking-widest mb-1">Data & Analytics</p>
                      <h3 className="text-3xl font-black text-white">{dataServices.find(s => s.id === activeId).title}</h3>
                    </div>
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-indigo-600 shadow-xl">
                       <FaRocket size={24}/>
                    </div>
                 </div>
              </div>
            </div>
            {/* Soft glow behind the image box */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full blur-3xl opacity-20 -z-10"></div>
          </div>

        </div>
      </div>

      <style>{`
        .custom-services-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-services-scrollbar::-webkit-scrollbar-track { background: transparent; border-radius: 10px; }
        .custom-services-scrollbar::-webkit-scrollbar-thumb { background-color: #cbd5e1; border-radius: 20px; }
        .custom-services-scrollbar::-webkit-scrollbar-thumb:hover { background-color: #4f46e5; }
      `}</style>
    </section>
  );
};

export default Service1;