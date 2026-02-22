import React, { useEffect } from 'react';

const SolarAgriDashboard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a192f] text-white pt-[120px] pb-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Technical Schematic */}
        <div className="relative group" data-aos="fade-right">
          <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-orange-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-[#112240] rounded-2xl overflow-hidden border border-slate-700 p-8">
            <img 
              src="/agri-dashboard.png" 
              alt="Agricultural Monitoring System Workflow" 
              className="w-full h-auto object-contain rounded-lg"
            />
            <div className="absolute top-6 right-6 bg-yellow-500 text-slate-900 text-xs px-3 py-1 rounded-full font-bold tracking-widest">
              SOLAR POWERED
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="space-y-8" data-aos="fade-left">
          <div className="inline-block px-4 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-sm font-bold tracking-widest uppercase">
            Product 06
          </div>
          
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
              Solar-Powered <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-300">Agri-Monitoring System</span>
            </h1>
            <p className="text-xl text-gray-300">
              Continuous off-grid field surveillance with real-time nutrient and climate analytics.
            </p>
          </div>

          <div className="space-y-6">
            <AgriFeature 
              title="Nutrient Tracking (NPK)" 
              desc="Advanced sensors monitor Nitrogen, Phosphorus, and Potassium levels to ensure optimal soil fertility."
            />
            <AgriFeature 
              title="Wi-Fi & LoRa Connectivity" 
              desc="Dual-mode wireless transmission ensures reliable data flow even in remote locations without cellular coverage."
            />
            <AgriFeature 
              title="Battery Backup System" 
              desc="Solar-powered design with integrated battery storage for uninterrupted 24/7 analysis and reporting."
            />
          </div>

          <div className="pt-6">
            <button className="bg-gradient-to-r from-yellow-600 to-orange-500 hover:from-yellow-500 hover:to-orange-400 text-white px-10 py-4 rounded-full font-bold transition-all shadow-lg shadow-yellow-500/20">
              Explore Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const AgriFeature = ({ title, desc }) => (
  <div className="flex gap-4 group">
    <div className="flex-shrink-0 w-1 bg-gradient-to-b from-yellow-500 to-transparent rounded-full h-8 group-hover:h-full transition-all"></div>
    <div>
      <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
      <p className="text-gray-400 leading-relaxed text-sm">{desc}</p>
    </div>
  </div>
);

export default SolarAgriDashboard;