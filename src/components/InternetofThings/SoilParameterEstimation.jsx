import React from 'react';

const SoilParameterEstimation = () => {
  return (
    <div className="min-h-screen bg-[#0a192f] text-white pt-[120px] pb-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Visuals */}
        <div className="relative group" data-aos="fade-right">
          <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-[#112240] rounded-2xl overflow-hidden border border-slate-700">
            <img 
              src="/soil-estimation.png" 
              alt="AI-Powered Soil Parameter Estimation" 
              className="w-full h-auto object-cover transform transition duration-500 group-hover:scale-105"
            />
            {/* Absolute overlay for tech feel */}
            <div className="absolute top-4 right-4 bg-emerald-500/80 text-white text-xs px-2 py-1 rounded font-bold tracking-wider">
              AI ANALYZED
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="bg-[#1d3557] p-4 rounded-xl border border-emerald-500/30">
              <p className="text-emerald-400 font-bold text-2xl">NPK</p>
              <p className="text-gray-400 text-sm">Real-Time Estimation</p>
            </div>
            <div className="bg-[#1d3557] p-4 rounded-xl border border-emerald-500/30">
              <p className="text-emerald-400 font-bold text-2xl">&gt;90%</p>
              <p className="text-gray-400 text-sm">AI Accuracy</p>
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="space-y-8" data-aos="fade-left">
          <div className="inline-block px-4 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-bold tracking-widest uppercase">
            Product 05
          </div>
          
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
              AI-Powered <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">Soil Parameter Estimation</span>
            </h1>
            <p className="text-2xl text-gray-300 font-semibold">
              Instant Fertility Analysis for Precision Agriculture
            </p>
          </div>

          <div className="space-y-6">
            <FeatureItem 
              title="Instant NPK Analysis" 
              desc="Get real-time estimations of Nitrogen (N), Phosphorus (P), and Potassium (K) levels directly in the field without waiting for lab results." 
            />
            <FeatureItem 
              title="AI-Driven Accuracy" 
              desc="Utilizes advanced machine learning models to analyze soil data with high precision, ensuring optimal fertilizer application." 
            />
            <FeatureItem 
              title="Portable Field Hardware" 
              desc="Compact, rugged, and designed for agricultural environments, making it easy for farmers and agronomists to carry and use anywhere." 
            />
            <FeatureItem 
              title="Data-Driven Crop Yields" 
              desc="Make informed decisions about soil health and crop requirements, directly translating to improved yields and reduced chemical waste." 
            />
          </div>

          <div className="pt-6">
            <button className="bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-500 hover:to-emerald-400 text-white px-10 py-4 rounded-full font-bold transition-all shadow-lg shadow-emerald-500/20">
              Explore Specifications
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
    <div className="flex-shrink-0 w-1 bg-gradient-to-b from-emerald-500 to-transparent rounded-full transition-all group-hover:h-full h-8"></div>
    <div>
      <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default SoilParameterEstimation;