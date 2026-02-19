import React from 'react';
import { FaRobot, FaNetworkWired, FaMicrochip, FaSatelliteDish, FaArrowRight } from 'react-icons/fa';

const IoTService = () => {
  const features = [
    {
      icon: FaRobot,
      title: "Advanced Robotics",
      desc: "Autonomous systems and robotic arms for precision industrial automation."
    },
    {
      icon: FaNetworkWired,
      title: "Smart Connectivity",
      desc: "Seamless M2M (Machine-to-Machine) communication frameworks."
    },
    {
      icon: FaMicrochip,
      title: "Embedded Systems",
      desc: "Custom firmware and hardware design for edge computing devices."
    },
    {
      icon: FaSatelliteDish,
      title: "Remote Sensing",
      desc: "Real-time telemetry and long-range sensor data acquisition."
    }
  ];

  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden font-sans">
      
      {/* Background Tech Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.05]" 
           style={{ backgroundImage: 'linear-gradient(#7e22ce 1px, transparent 1px), linear-gradient(90deg, #7e22ce 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* --- LEFT: ROBOTIC VISUAL --- */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="relative rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl">
              {/* Robotic Image */}
              <img 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800" 
                alt="Futuristic Robot" 
                className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Glass Overlay Data Card */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-purple-300 text-xs font-bold uppercase tracking-widest mb-1">System Status</p>
                    <h4 className="text-white text-xl font-bold">Autonomy Active</h4>
                  </div>
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center animate-pulse">
                    <div className="w-4 h-4 bg-green-400 rounded-full shadow-[0_0_15px_#4ade80]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Orbit */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border-2 border-purple-200 rounded-full border-dashed animate-spin-slow"></div>
          </div>

          {/* --- RIGHT: CONTENT --- */}
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-purple-100 rounded-full shadow-sm mb-8">
              <FaMicrochip className="text-purple-600" />
              <span className="text-slate-600 font-bold text-xs uppercase tracking-[0.2em]">Industry 4.0 Solutions</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
              IoT & <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-600">
                Robotics Intelligence
              </span>
            </h2>
            
            <p className="text-slate-500 text-lg mb-10 leading-relaxed font-medium">
              We engineer the nervous system of the future. From smart sensors to fully autonomous robotic units, we bridge the physical and digital worlds to create hyper-efficient ecosystems.
            </p>

            {/* Feature Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {features.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-purple-200 transition-all duration-300 group/card">
                  <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-4 group-hover/card:bg-purple-600 group-hover/card:text-white transition-colors">
                    <item.icon size={20} />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <button className="flex items-center gap-3 text-slate-900 font-black text-sm uppercase tracking-widest hover:text-purple-700 transition-colors group">
              Explore Hardware Solutions 
              <FaArrowRight className="group-hover:translate-x-2 transition-transform"/>
            </button>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default IoTService;