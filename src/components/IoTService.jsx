import React from 'react';
import { 
  FaRobot, FaNetworkWired, FaMicrochip, FaSatelliteDish, 
  FaArrowRight, FaBrain, FaCogs, FaProjectDiagram 
} from 'react-icons/fa';

const IoTService = () => {
  // Expanded features array for a more comprehensive service offering
  const features = [
    {
      icon: FaRobot,
      title: "Advanced Robotics",
      desc: "Autonomous systems and robotic arms for precision industrial automation."
    },
    {
      icon: FaNetworkWired,
      title: "Smart Connectivity",
      desc: "Seamless M2M communication frameworks via 5G, LoRaWAN, and Zigbee."
    },
    {
      icon: FaBrain,
      title: "Edge AI Computing",
      desc: "Deploying machine learning models directly onto local hardware for zero-latency decisions."
    },
    {
      icon: FaMicrochip,
      title: "Embedded Systems",
      desc: "Custom firmware and hardware PCB design for specialized edge devices."
    },
    {
      icon: FaCogs,
      title: "Predictive Maintenance",
      desc: "Identify equipment wear-and-tear before failure using vibration and thermal sensors."
    },
    {
      icon: FaSatelliteDish,
      title: "Remote Telemetry",
      desc: "Real-time, long-range sensor data acquisition for agriculture and logistics."
    }
  ];

  // Smooth scroll to the global contact section
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking-section');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-24 lg:py-32 bg-[#0B0F1A] overflow-hidden font-sans text-white">
      
      {/* Background Tech Grid & Glow */}
      <div className="absolute inset-0 z-0 opacity-10" 
           style={{ backgroundImage: 'linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* --- LEFT: ROBOTIC VISUAL --- */}
          <div className="w-full lg:w-5/12 relative group perspective-1000">
            <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl shadow-purple-900/50 transform transition-transform duration-700 group-hover:rotate-y-2">
              
              <img 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800" 
                alt="Futuristic Robot" 
                className="w-full h-[650px] object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A] via-transparent to-transparent"></div>
              
              {/* Glass Overlay Data Card */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-lg">
                <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-4">
                  <div>
                    <p className="text-purple-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-1">System Status</p>
                    <h4 className="text-white text-xl font-black tracking-tight">Autonomy Active</h4>
                  </div>
                  <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center animate-pulse border border-green-500/30">
                    <div className="w-4 h-4 bg-green-400 rounded-full shadow-[0_0_15px_#4ade80]"></div>
                  </div>
                </div>
                
                {/* Simulated Telemetry Data */}
                <div className="grid grid-cols-2 gap-4">
                   <div>
                      <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest mb-1">Active Nodes</p>
                      <p className="text-white font-bold">2,048</p>
                   </div>
                   <div>
                      <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest mb-1">Edge Latency</p>
                      <p className="text-white font-bold">4.2ms</p>
                   </div>
                </div>
              </div>
            </div>

            {/* Decorative Orbit */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border-2 border-purple-500/30 rounded-full border-dashed animate-[spin_20s_linear_infinite]"></div>
          </div>

          {/* --- RIGHT: CONTENT --- */}
          <div className="w-full lg:w-7/12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-400/20 rounded-full mb-8">
              <FaProjectDiagram className="text-purple-400" />
              <span className="text-purple-300 font-bold text-[10px] md:text-xs uppercase tracking-[0.2em]">Industry 4.0 Ecosystems</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tighter">
              IoT & <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Robotics Intelligence
              </span>
            </h2>
            
            <p className="text-slate-400 text-lg mb-12 leading-relaxed font-medium">
              We engineer the nervous system of the future. From smart sensors to fully autonomous robotic units, we bridge the physical and digital worlds to create hyper-efficient, self-monitoring ecosystems.
            </p>

            {/* Expanded Feature Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {features.map((item, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-3xl border border-white/10 hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300 group/card">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-purple-400 mb-5 group-hover/card:bg-purple-500 group-hover/card:text-white transition-colors duration-300 shadow-inner">
                    <item.icon size={20} />
                  </div>
                  <h4 className="font-bold text-white mb-2 tracking-wide group-hover/card:text-cyan-300 transition-colors">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
               <button 
                 onClick={scrollToBooking}
                 className="w-full sm:w-auto bg-purple-600 hover:bg-purple-500 text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-lg shadow-purple-600/30 flex items-center justify-center gap-3 group"
               >
                 Consult IoT Experts 
                 <FaArrowRight className="group-hover:translate-x-1 transition-transform"/>
               </button>
               <button className="flex items-center gap-3 text-slate-300 font-black text-sm uppercase tracking-widest hover:text-white transition-colors group">
                 View Hardware Specs
               </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IoTService;