import React, { useEffect } from 'react';

const GPSAssetTracking = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a192f] text-white pt-[120px] pb-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Visuals */}
        <div className="relative group" data-aos="fade-right">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-[#112240] rounded-2xl overflow-hidden border border-slate-700 p-4">
            <img 
              src="/gps-tracking.png" 
              alt="GPS Asset Tracking System Diagram" 
              className="w-full h-auto object-contain rounded-lg"
            />
            <div className="absolute top-6 right-6 bg-blue-500/80 text-white text-xs px-3 py-1 rounded-full font-bold tracking-widest">
              LIVE TRACKING
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="bg-[#1d3557] p-4 rounded-xl border border-blue-500/30">
              <p className="text-blue-400 font-bold text-2xl">Global</p>
              <p className="text-gray-400 text-sm">Satellite Coverage</p>
            </div>
            <div className="bg-[#1d3557] p-4 rounded-xl border border-blue-500/30">
              <p className="text-blue-400 font-bold text-2xl">Real-Time</p>
              <p className="text-gray-400 text-sm">Location Updates</p>
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="space-y-8" data-aos="fade-left">
          <div className="inline-block px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold tracking-widest uppercase">
            Product 10
          </div>
          
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
              GPS-Enabled <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Asset Tracking System</span>
            </h1>
            <p className="text-xl text-gray-300">
              Complete visibility and management of high-value items across geographies.
            </p>
          </div>

          <div className="space-y-6">
            <TrackingFeature 
              title="Live Location Updates" 
              desc="Monitor your assets in real-time with high-precision GPS coordinates delivered directly to your dashboard." 
            />
            <div className="flex gap-4 group">
              <div className="flex-shrink-0 w-1 bg-gradient-to-b from-blue-500 to-transparent rounded-full h-8 group-hover:h-full transition-all"></div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Movement History</h3>
                <p className="text-gray-400 leading-relaxed">Access detailed logs of past routes and stop durations for better logistical auditing.</p>
              </div>
            </div>
            <TrackingFeature 
              title="Multi-Satellite Support" 
              desc="Utilizes Galileo, IRNSS, and GLONASS satellite networks to ensure a stable connection even in remote areas." 
            />
            <TrackingFeature 
              title="Cloud Data Sync" 
              desc="Seamlessly transmits data from tracking devices to secure servers for instant user access via mobile or web." 
            />
          </div>

          <div className="pt-6">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white px-10 py-4 rounded-full font-bold transition-all shadow-lg shadow-blue-500/20">
              Request Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const TrackingFeature = ({ title, desc }) => (
  <div className="flex gap-4 group">
    <div className="flex-shrink-0 w-1 bg-gradient-to-b from-blue-500 to-transparent rounded-full h-8 group-hover:h-full transition-all"></div>
    <div>
      <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default GPSAssetTracking;