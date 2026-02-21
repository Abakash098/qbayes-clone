import React from 'react';

const HazeRainRemoval = () => {
  return (
    <div className="min-h-screen bg-[#0a192f] text-white pt-[120px] pb-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Visuals */}
        <div className="relative group" data-aos="fade-right">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-[#112240] rounded-2xl overflow-hidden border border-slate-700">
            <img 
              src="/haze-removal.png" 
              alt="Haze and Rain Removal Technology" 
              className="w-full h-auto object-cover transform transition duration-500 group-hover:scale-105"
            />
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="bg-[#1d3557] p-4 rounded-xl border border-blue-500/30">
              <p className="text-blue-400 font-bold text-2xl">Real-Time</p>
              <p className="text-gray-400 text-sm">Video Processing</p>
            </div>
            <div className="bg-[#1d3557] p-4 rounded-xl border border-blue-500/30">
              <p className="text-blue-400 font-bold text-2xl">12V</p>
              <p className="text-gray-400 text-sm">Battery Deployment</p>
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="space-y-8" data-aos="fade-left">
          <div className="inline-block px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold tracking-widest uppercase">
            Product 04
          </div>
          
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
              Portable Real-Time <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Haze and Rain Removal</span>
            </h1>
            <p className="text-2xl text-gray-300 font-semibold">
              Device for Enhanced Video Surveillance
            </p>
          </div>

          <div className="space-y-6">
            <FeatureItem 
              title="Real-Time Haze & Rain Removal" 
              desc="Experience immediate and significant improvements in video clarity, ensuring that adverse weather conditions like haze and rain don't compromise surveillance footage." 
            />
            <FeatureItem 
              title="Enhanced Visual Clarity" 
              desc="Drastically improves video quality for accurate detection and informed decision-making, even in challenging environmental conditions." 
            />
            <FeatureItem 
              title="Integrated System Design" 
              desc="A compact and efficient system featuring a camera, processing unit, vision processing unit, and display, all working seamlessly to deliver superior image quality." 
            />
            <FeatureItem 
              title="Portable & Flexible Deployment" 
              desc="Designed for on-the-go use, its low power consumption and 12V battery enable easy deployment in diverse environments without reliance on fixed power sources." 
            />
          </div>

          <div className="pt-6">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white px-10 py-4 rounded-full font-bold transition-all shadow-lg shadow-blue-500/20">
              Request Technical Specs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Sub-component for clean code
const FeatureItem = ({ title, desc }) => (
  <div className="flex gap-4 group">
    <div className="flex-shrink-0 w-1 bg-gradient-to-b from-blue-500 to-transparent rounded-full transition-all group-hover:h-full h-8"></div>
    <div>
      <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default HazeRainRemoval;