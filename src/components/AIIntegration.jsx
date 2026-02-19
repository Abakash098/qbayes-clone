import React from 'react';
import { FaCheckCircle, FaArrowRight, FaPlug, FaDatabase, FaCloud, FaNetworkWired } from 'react-icons/fa';

const AIIntegration = () => {
  const benefits = [
    { title: "Seamless Connectivity", text: "Connect GPT-4, Claude, or custom models directly into your CRM & ERP.", icon: FaPlug },
    { title: "Data Synchronization", text: "Real-time data flow between your legacy systems and new AI engines.", icon: FaDatabase },
    { title: "Hybrid Cloud Ready", text: "Deploy across AWS, Azure, or on-premise servers with ease.", icon: FaCloud },
    { title: "Zero Disruption", text: "Upgrade your tech stack without downtime or operational lag.", icon: FaNetworkWired }
  ];

  return (
    <div className="w-full bg-white animate-fadeIn font-sans">
      
      {/* --- HERO SECTION (Dark Theme as requested) --- */}
      <div className="relative bg-slate-900 py-24 px-6 text-center text-white overflow-hidden">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-slate-900 to-purple-900 opacity-90"></div>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-blue-300 font-bold text-xs uppercase tracking-wider mb-8 backdrop-blur-md">
             🚀 Accelerating Digital Transformation
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight leading-tight">
            Make Your Business <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Agile & Innovative
            </span>
          </h1> 
          
          <p className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
            Seamlessly embed artificial intelligence into your existing software ecosystem. We bridge the gap between legacy systems and the future.
          </p>
          
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-10 rounded-full transition-all hover:scale-105 shadow-lg shadow-blue-500/30 flex items-center gap-2">
            Consult Our AI Experts <FaArrowRight />
          </button>
        </div>
      </div>
      
      {/* --- CONTENT SECTION --- */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
           {/* Left: Text & Grid */}
           <div>
              <h2 className="text-4xl font-black text-slate-900 mb-6">Why Integration Matters?</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-10">
                You don't need to rebuild your software from scratch. Our integration services inject intelligence directly into your current workflows, saving time and capital.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {benefits.map((item, i) => (
                  <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-all">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                      <item.icon />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-xs text-slate-500">{item.text}</p>
                  </div>
                ))}
              </div>
           </div>

           {/* Right: Robotic Visual */}
           <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800" 
                alt="AI Handshake" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                 <p className="font-bold text-xl">System Synced</p>
                 <p className="text-blue-300 text-sm">Latency: 12ms</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default AIIntegration;