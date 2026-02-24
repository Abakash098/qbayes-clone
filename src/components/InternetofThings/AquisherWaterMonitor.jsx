import React from 'react';
import { 
  FaTint, FaFish, FaChartLine, FaMicrochip, FaWater,
  FaCheckCircle, FaArrowRight, FaServer 
} from 'react-icons/fa';

const AquisherWaterMonitor = () => {

  const features = [
    {
      icon: FaTint,
      title: "Real-Time Quality Logging",
      description: "Continuously monitors critical aquatic parameters including TDS, Dissolved Oxygen (DO), Temperature, and pH levels."
    },
    {
      icon: FaFish,
      title: "AI Species Suitability",
      description: "Advanced machine learning algorithms predict and recommend the best fish species for your specific water environment."
    },
    {
      icon: FaChartLine,
      title: "Predictive Analytics",
      description: "Analyzes historical and current water health trends to forecast and prevent potential disease outbreaks before they happen."
    },
    {
      icon: FaServer,
      title: "Seamless IoT Integration",
      description: "Features 24/7 automated data logging with robust sensor connectivity, transmitting live data directly to your dashboard."
    }
  ];

  const techSpecs = [
    "Multi-parameter submerged sensor probes (pH, DO, TDS, Temp)",
    "IP68 Corrosion-resistant waterproof housing",
    "Solar-powered edge computing node for off-grid use",
    "AI models calibrated for species-environment mapping",
    "LoRaWAN and Cellular telemetry modules for remote sync",
    "Automated alert system via SMS and Dashboard notifications"
  ];

  return (
    <div className="bg-white font-sans overflow-hidden">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-teal-50/50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <div className="animate-fadeIn">
              <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
                IoT & Aquaculture Innovation
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-[1.1] tracking-tight">
                Aquisher: Smart <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-500">
                  Water Monitoring
                </span>
              </h1>
              <p className="text-slate-600 text-lg md:text-xl mb-10 leading-relaxed max-w-lg">
                A comprehensive IoT solution for sustainable fish cultivation. Aquisher uses advanced submerged sensors to ensure optimal aquatic environments, boosting yield and reducing mortality rates.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-teal-100 flex items-center justify-center flex-shrink-0">
                    <FaWater className="text-teal-500 text-2xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">24/7</h4>
                    <p className="text-sm text-slate-500 font-medium">Continuous tracking</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-teal-100 flex items-center justify-center flex-shrink-0">
                    <FaMicrochip className="text-teal-500 text-2xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">AI Driven</h4>
                    <p className="text-sm text-slate-500 font-medium">Species prediction</p>
                  </div>
                </div>
              </div>

              <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-teal-600/30 transition-all flex items-center gap-3 group">
                View Live Dashboard
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Hero Image */}
            <div className="relative animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              {/* Decorative blobs */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-cyan-200/40 to-teal-100/40 rounded-full blur-3xl -z-10"></div>
              
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/50 bg-white p-2">
                  <img 
                    src="/aquisher.png" 
                    alt="Aquisher System" 
                    className="rounded-xl w-full h-auto object-cover transform transition-transform duration-700 hover:scale-[1.02]"
                    onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&q=80&w=800" }}
                  />
                  
                  {/* Floating Tech Tag */}
                  <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3">
                    <FaFish className="text-teal-500 text-xl" />
                    <div>
                      <p className="text-slate-900 font-bold leading-none">Aquaculture</p>
                      <p className="text-slate-500 text-xs mt-1">Yield optimization</p>
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Core Capabilities</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">Empowering fish farmers with military-grade sensors and artificial intelligence to create the perfect underwater ecosystem.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors duration-300">
                  <feature.icon className="text-teal-600 text-2xl group-hover:text-white transition-colors duration-300" />
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
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500 rounded-full blur-[150px] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Tech Specs */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Hardware & Software Specifications</h2>
              <p className="text-slate-400 mb-10 text-lg">Built with industrial, anti-corrosive probes that deliver lab-quality aquatic measurements directly to your mobile device or control room.</p>
              
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
                <FaChartLine className="text-teal-600" /> Business Value
              </h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-lg mb-2">Drastically Reduce Mortality</h4>
                  <p className="text-slate-600 text-sm">Real-time alerts for dangerous drops in Dissolved Oxygen or pH spikes allow you to intervene before a mass die-off occurs.</p>
                </div>
                <div className="w-full h-px bg-slate-100"></div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Optimize Harvest Yields</h4>
                  <p className="text-slate-600 text-sm">Maintaining the perfect environmental parameters accelerates fish growth cycles and improves overall harvest quality.</p>
                </div>
                <div className="w-full h-px bg-slate-100"></div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Resource Efficiency</h4>
                  <p className="text-slate-600 text-sm">Eliminates the need for manual, error-prone chemical water testing kits, saving hours of labor and chemical costs.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default AquisherWaterMonitor;