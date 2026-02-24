import React from 'react';
import { 
  FaCamera, FaRecycle, FaSignal, FaTrash, FaWater, 
  FaRobot, FaMicrochip, FaChartLine, FaCheckCircle, FaArrowRight, FaGlobe 
} from 'react-icons/fa';

const AutonomousBeachCleaner = () => {

  const features = [
    {
      icon: FaCamera,
      title: "CV-Based Detection",
      description: "Utilizes advanced Computer Vision to instantly identify and classify scattered waste in real-time without human intervention."
    },
    {
      icon: FaRecycle,
      title: "Automated Segregation",
      description: "Features an intelligent dual-shovel system to physically separate biodegradable materials from non-biodegradable plastics on the spot."
    },
    {
      icon: FaTrash,
      title: "Sand-Filtration System",
      description: "Built-in vibratory mechanics automatically shake off excess sand and dust, ensuring only targeted debris is collected into the bins."
    },
    {
      icon: FaSignal,
      title: "IoT Data Logging",
      description: "Continuously monitors bin capacity levels and GPS locations, transmitting live updates to a centralized cloud dashboard."
    }
  ];

  const techSpecs = [
    "Computer Vision Module (Real-time waste detection)",
    "Dual-shovel mechanical segregation system",
    "Vibratory sand-filtration mechanism",
    "Cloud-synced IoT telemetry (Bin levels & GPS)",
    "High-torque drivetrain for sandy terrain navigation",
    "Corrosion-resistant marine-grade chassis"
  ];

  return (
    <div className="bg-white font-sans overflow-hidden">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <div className="animate-fadeIn">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                IoT & Marine Conservation
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-[1.1] tracking-tight">
                Autonomous <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                  Beach Cleaner
                </span>
              </h1>
              <p className="text-slate-600 text-lg md:text-xl mb-10 leading-relaxed max-w-lg">
                Our IoT-based robotic system offers a real-time solution for coastal waste management. 
                Leveraging autonomous navigation and precision segregation to ensure cleaner beaches while optimizing the recycling chain.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-blue-100 flex items-center justify-center flex-shrink-0">
                    <FaRobot className="text-blue-500 text-2xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Auto-Nav</h4>
                    <p className="text-sm text-slate-500 font-medium">Smart obstacle avoidance</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-blue-100 flex items-center justify-center flex-shrink-0">
                    <FaMicrochip className="text-blue-500 text-2xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Live Telemetry</h4>
                    <p className="text-sm text-slate-500 font-medium">Cloud-synced analytics</p>
                  </div>
                </div>
              </div>

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-blue-600/30 transition-all flex items-center gap-3 group">
                Request Hardware Demo
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Hero Image */}
            <div className="relative animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              {/* Decorative blobs */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-cyan-200/40 to-blue-100/40 rounded-full blur-3xl -z-10"></div>
              
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/50 bg-white p-2">
                  <img 
                    src="/beach-cleaner.png" 
                    alt="Beach Cleaner Robot" 
                    className="rounded-xl w-full h-auto object-cover transform transition-transform duration-700 hover:scale-[1.02]"
                    onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1618477461853-cf6ed80f4175?auto=format&fit=crop&q=80&w=800" }}
                  />
                  
                  {/* Floating Tech Tag */}
                  <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3">
                    <FaWater className="text-blue-500 text-xl" />
                    <div>
                      <p className="text-slate-900 font-bold leading-none">Coastal Tech</p>
                      <p className="text-slate-500 text-xs mt-1">Eco-friendly operations</p>
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Advanced Marine Capabilities</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">Replacing manual beach combing with continuous, intelligent, and automated waste segregation to protect coastal ecosystems.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <feature.icon className="text-blue-600 text-2xl group-hover:text-white transition-colors duration-300" />
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
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[150px] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Tech Specs */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Hardware & Software Specifications</h2>
              <p className="text-slate-400 mb-10 text-lg">Engineered with marine-grade components to withstand saltwater environments while running complex CV models locally.</p>
              
              <ul className="space-y-4">
                {techSpecs.map((spec, index) => (
                  <li key={index} className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-xl border border-slate-700 backdrop-blur-sm">
                    <FaCheckCircle className="text-cyan-400 flex-shrink-0 text-lg" />
                    <span className="text-slate-200 font-medium">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Business Value / ROI */}
            <div className="bg-white rounded-3xl p-10 text-slate-900 shadow-2xl">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <FaChartLine className="text-blue-600" /> Business Value
              </h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-lg mb-2">Reduce Cleanup Costs</h4>
                  <p className="text-slate-600 text-sm">Automates the highly labor-intensive process of manual beach combing, significantly lowering municipal and resort operational costs.</p>
                </div>
                <div className="w-full h-px bg-slate-100"></div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Optimize Recycling Chains</h4>
                  <p className="text-slate-600 text-sm">Pre-segregates bio and non-bio waste at the source, streamlining downstream recycling processes and improving sustainability metrics.</p>
                </div>
                <div className="w-full h-px bg-slate-100"></div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Data-Driven Operations</h4>
                  <p className="text-slate-600 text-sm">Live dashboards map out waste hotspots along the coastline, allowing authorities to deploy resources more effectively based on real data.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default AutonomousBeachCleaner;