import React from 'react';
import { 
  FaMicrochip, FaLeaf, FaRobot, FaDatabase, FaVideo, 
  FaWifi, FaTractor, FaChartLine, FaCheckCircle, FaArrowRight 
} from 'react-icons/fa';

const AgriculturalAiBot = () => {

  const features = [
    {
      icon: FaVideo,
      title: "Computer Vision Diagnostics",
      description: "Equipped with high-resolution cameras that scan crop leaves to identify diseases, pests, and nutrient deficiencies with 81.8% accuracy."
    },
    {
      icon: FaDatabase,
      title: "Real-Time Soil Analysis",
      description: "Integrated IoT sensors penetrate the topsoil to instantly measure Nitrogen, Phosphorus, Potassium (NPK), moisture levels, and pH balance."
    },
    {
      icon: FaTractor,
      title: "Autonomous Navigation",
      description: "Utilizes GPS mapping and obstacle avoidance algorithms to autonomously navigate through complex crop rows without human intervention."
    },
    {
      icon: FaWifi,
      title: "Cloud Telemetry Sync",
      description: "Processes data locally via Edge AI and transmits lightweight telemetry to a centralized dashboard for real-time remote monitoring."
    }
  ];

  const techSpecs = [
    "Edge AI Processing Unit (Optimized for low power)",
    "High-Torque DC Motors with precise rotary encoders",
    "Deep Learning Architecture (CNNs for leaf analysis)",
    "Industrial-grade NPK and Soil Moisture Probes",
    "LiDAR & Ultrasonic sensors for collision avoidance",
    "Ruggedized, weather-resistant all-terrain chassis"
  ];

  return (
    <div className="bg-white font-sans overflow-hidden">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-green-50/50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <div className="animate-fadeIn">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                IoT & AI Innovation
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-[1.1] tracking-tight">
                Agricultural AI Bot: <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-400">
                  The Future of Farming
                </span>
              </h1>
              <p className="text-slate-600 text-lg md:text-xl mb-10 leading-relaxed max-w-lg">
                A revolutionary autonomous hardware solution designed to monitor crop health, 
                detect diseases in real-time, and analyze soil parameters using advanced edge computing.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-green-100 flex items-center justify-center flex-shrink-0">
                    <FaRobot className="text-green-500 text-2xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">81.8%</h4>
                    <p className="text-sm text-slate-500 font-medium">Detection Accuracy</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-green-100 flex items-center justify-center flex-shrink-0">
                    <FaMicrochip className="text-green-500 text-2xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Edge AI</h4>
                    <p className="text-sm text-slate-500 font-medium">Zero-latency processing</p>
                  </div>
                </div>
              </div>

              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-green-600/30 transition-all flex items-center gap-3 group">
                Request Hardware Demo
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Hero Image */}
            <div className="relative animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              {/* Decorative blobs */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-green-200/40 to-emerald-100/40 rounded-full blur-3xl -z-10"></div>
              
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/50 bg-white p-2">
                  <img 
                    src="/agri-bot.png" 
                    alt="Agricultural AI Bot" 
                    className="rounded-xl w-full h-auto object-cover transform transition-transform duration-700 hover:scale-[1.02]"
                  />
                  
                  {/* Floating Tech Tag */}
                  <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3">
                    <FaLeaf className="text-green-500 text-xl" />
                    <div>
                      <p className="text-slate-900 font-bold leading-none">Smart Agriculture</p>
                      <p className="text-slate-500 text-xs mt-1">Ready for deployment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- 2. CORE CAPABILITIES GRID --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Autonomous Intelligence on the Field</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">Replacing manual scouting with continuous, precise, and automated crop monitoring to secure your harvest.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors duration-300">
                  <feature.icon className="text-green-600 text-2xl group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3. TECH SPECS & ROI SECTION --- */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500 rounded-full blur-[150px] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Tech Specs */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Hardware & Software Specifications</h2>
              <p className="text-slate-400 mb-10 text-lg">Built with industrial-grade components to withstand harsh outdoor farming environments while running complex AI models locally.</p>
              
              <ul className="space-y-4">
                {techSpecs.map((spec, index) => (
                  <li key={index} className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-xl border border-slate-700 backdrop-blur-sm">
                    <FaCheckCircle className="text-green-400 flex-shrink-0 text-lg" />
                    <span className="text-slate-200 font-medium">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Business Value / ROI */}
            <div className="bg-white rounded-3xl p-10 text-slate-900 shadow-2xl">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <FaChartLine className="text-green-600" /> Business Value
              </h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-lg mb-2">Reduce Crop Loss</h4>
                  <p className="text-slate-600 text-sm">Early detection of blights and pests allows for targeted treatment before an entire harvest is compromised.</p>
                </div>
                <div className="w-full h-px bg-slate-100"></div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Optimize Fertilizer Usage</h4>
                  <p className="text-slate-600 text-sm">Precise NPK mapping prevents over-fertilization, cutting chemical costs and reducing environmental runoff.</p>
                </div>
                <div className="w-full h-px bg-slate-100"></div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Solve Labor Shortages</h4>
                  <p className="text-slate-600 text-sm">Automate the tedious and time-consuming process of manual field scouting across hundreds of acres.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default AgriculturalAiBot;