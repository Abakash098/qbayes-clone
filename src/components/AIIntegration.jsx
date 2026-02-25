import React, { useState, useEffect } from 'react';
import { FaCheckCircle, FaArrowRight, FaPlug, FaDatabase, FaCloud, FaNetworkWired, FaServer, FaCogs } from 'react-icons/fa';
import HireUsModal from './HireUsModal'; 

const AIIntegration = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Smooth scroll to the global booking/contact section to capture leads for info@qbayes.com
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking-section');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    { title: "Seamless Connectivity", text: "Connect leading foundational models natively via API into your CRM, ERP, or custom SaaS platforms.", icon: FaPlug },
    { title: "Data Synchronization", text: "Establish bi-directional, real-time data pipelines between your legacy systems and new AI engines.", icon: FaDatabase },
    { title: "Hybrid Infrastructure", text: "Deploy across AWS, Azure, Google Cloud, or secure air-gapped on-premise servers.", icon: FaCloud },
    { title: "Zero Disruption", text: "Upgrade your enterprise tech stack iteratively without downtime, data loss, or operational lag.", icon: FaNetworkWired }
  ];

  return (
    <div className="w-full bg-white animate-fadeIn font-sans relative selection:bg-blue-200">
      
      {/* --- HIGH-IMPACT HERO SECTION --- */}
      <div className="relative bg-[#0A0F1C] py-24 lg:py-40 px-6 text-center text-white overflow-hidden">
        {/* Abstract Tech Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-[#0A0F1C] to-purple-900/40 opacity-90"></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '48px 48px' }}></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen translate-x-1/3 -translate-y-1/4"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-blue-500/10 border border-blue-400/20 rounded-full text-blue-300 font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.2)]">
            <FaServer className="animate-pulse" /> Enterprise Architecture
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
            Make Your Systems <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400">
              Think Faster
            </span>
          </h1> 
          
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl leading-relaxed font-medium">
            We don't just build AI; we embed it. Seamlessly inject artificial intelligence into your existing software ecosystem, bridging the gap between legacy code and cognitive processing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
             <button 
               onClick={scrollToBooking}
               className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-5 px-10 rounded-2xl transition-all shadow-2xl shadow-blue-600/20 flex items-center justify-center gap-3 group cursor-pointer"
             >
               Consult Architecture Experts <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
             </button>
             <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold py-5 px-10 rounded-2xl transition-all backdrop-blur-sm"
             >
               View Integration Specs
             </button>
          </div>
        </div>
      </div>
      
      [Image of API integration architecture diagram showing AI connecting to legacy systems]

      {/* --- CONTENT SECTION --- */}
      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
           
           {/* Left: Text & Grid */}
           <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
                 Integration <br/> Without Interruption.
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-12 font-medium">
                You don't need to rebuild your software from scratch. Our API integration services inject intelligence directly into your current workflows, maximizing utility while minimizing capital expenditure.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                {benefits.map((item, i) => (
                  <div key={i} className="group p-6 rounded-[2rem] border border-slate-100 bg-white hover:border-blue-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <item.icon size={20} />
                    </div>
                    <h4 className="font-black text-slate-900 mb-3 tracking-tight group-hover:text-blue-700 transition-colors">{item.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.text}</p>
                  </div>
                ))}
              </div>
           </div>

           {/* Right: Technical Visual */}
           <div className="order-1 lg:order-2 relative h-[500px] lg:h-[700px] rounded-[3rem] overflow-hidden shadow-2xl group perspective-1000 border border-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800" 
                alt="AI System Integration" 
                className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C]/90 via-[#0A0F1C]/20 to-transparent"></div>
              
              {/* Overlay Tech UI */}
              <div className="absolute bottom-10 left-10 right-10">
                 <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl">
                    <div className="flex justify-between items-center mb-4">
                       <div className="flex items-center gap-3">
                          <FaCogs className="text-blue-400 text-2xl animate-spin-slow" />
                          <p className="text-white font-bold text-lg tracking-tight">API Gateway Status</p>
                       </div>
                       <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full border border-green-500/30">ACTIVE SYNC</span>
                    </div>
                    
                    <div className="space-y-4">
                       <div>
                          <div className="flex justify-between text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-2">
                             <span>Data Throughput</span>
                             <span>98.5%</span>
                          </div>
                          <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                             <div className="bg-blue-400 h-full w-[98.5%] rounded-full relative">
                                <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
                             </div>
                          </div>
                       </div>
                       
                       <div className="flex items-center gap-6 pt-2">
                          <div>
                             <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest mb-1">Latency</p>
                             <p className="text-white font-black text-xl">12ms</p>
                          </div>
                          <div className="w-px h-8 bg-white/10"></div>
                          <div>
                             <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest mb-1">Nodes</p>
                             <p className="text-white font-black text-xl">1,024</p>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>

      <HireUsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </div>
  );
};

export default AIIntegration;