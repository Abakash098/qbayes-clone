import React from 'react';
import { 
  FaCloudSun, FaEye, FaMicrochip, FaBatteryFull, 
  FaCamera, FaChartLine, FaCheckCircle, FaArrowRight, FaShieldAlt
} from 'react-icons/fa';

const HazeRainRemoval = () => {

  const features = [
    {
      icon: FaCloudSun,
      title: "Real-Time Weather Filtering",
      description: "Applies deep learning algorithms to instantly strip away visual noise from heavy rain, fog, and haze without dropping video frame rates."
    },
    {
      icon: FaEye,
      title: "Enhanced Visual Clarity",
      description: "Drastically improves video quality and contrast, ensuring accurate manual monitoring and reliable downstream AI detection."
    },
    {
      icon: FaMicrochip,
      title: "Integrated VPU Design",
      description: "A compact system featuring a dedicated Vision Processing Unit (VPU) tailored specifically for high-speed image reconstruction."
    },
    {
      icon: FaBatteryFull,
      title: "Off-Grid Portability",
      description: "Engineered for extremely low power consumption, allowing continuous operation on a standard 12V battery in remote locations."
    }
  ];

  const techSpecs = [
    "Dedicated Neural Vision Processing Unit (VPU)",
    "Ultra-low latency video passthrough (< 20ms)",
    "Deep Learning De-hazing and De-raining algorithms",
    "Plug-and-play integration with standard IP/CCTV cameras",
    "Ruggedized, weather-sealed IP67 deployment casing",
    "12V DC power management system for rapid field setup"
  ];

  return (
    <div className="bg-white font-sans overflow-hidden">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <div className="animate-fadeIn">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                Computer Vision & Edge AI
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-[1.1] tracking-tight">
                Portable Real-Time <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                  Haze & Rain Removal
                </span>
              </h1>
              <p className="text-slate-600 text-lg md:text-xl mb-10 leading-relaxed max-w-lg">
                Experience immediate and significant improvements in video clarity. Our portable hardware ensures that adverse weather conditions never compromise your critical surveillance footage.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-blue-100 flex items-center justify-center flex-shrink-0">
                    <FaBatteryFull className="text-blue-500 text-2xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">12V Power</h4>
                    <p className="text-sm text-slate-500 font-medium">Off-grid deployment</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-blue-100 flex items-center justify-center flex-shrink-0">
                    <FaCamera className="text-blue-500 text-2xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Zero Latency</h4>
                    <p className="text-sm text-slate-500 font-medium">Live video processing</p>
                  </div>
                </div>
              </div>

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-blue-600/30 transition-all flex items-center gap-3 group">
                Request Technical Specs
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
                    src="/haze-removal.png" 
                    alt="Haze and Rain Removal Technology" 
                    className="rounded-xl w-full h-auto object-cover transform transition-transform duration-700 hover:scale-[1.02]"
                    onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800" }}
                  />
                  
                  {/* Floating Tech Tag */}
                  <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3">
                    <FaShieldAlt className="text-blue-500 text-xl" />
                    <div>
                      <p className="text-slate-900 font-bold leading-none">Enhanced Security</p>
                      <p className="text-slate-500 text-xs mt-1">Clear vision guaranteed</p>
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Advanced Vision Processing</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">Engineered to restore critical visibility in environments where traditional optics and software fail.</p>
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
              <p className="text-slate-400 mb-10 text-lg">A self-contained edge device designed for flexibility, requiring minimal power while delivering maximum computational output.</p>
              
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
                  <h4 className="font-bold text-lg mb-2">Uninterrupted Surveillance</h4>
                  <p className="text-slate-600 text-sm">Maintain a 24/7 security perimeter. Ensure critical events are captured clearly, regardless of monsoons, smog, or heavy fog.</p>
                </div>
                <div className="w-full h-px bg-slate-100"></div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Boost AI Analytics Reliability</h4>
                  <p className="text-slate-600 text-sm">Prevent downstream AI systems (like License Plate Recognition or Facial ID) from failing due to weather-degraded input feeds.</p>
                </div>
                <div className="w-full h-px bg-slate-100"></div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Rapid Field Deployment</h4>
                  <p className="text-slate-600 text-sm">The 12V battery integration means you can deploy high-end vision processing at temporary sites, borders, or construction zones instantly.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default HazeRainRemoval;