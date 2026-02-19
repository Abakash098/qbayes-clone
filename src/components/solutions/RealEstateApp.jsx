import React from 'react';
import { FaHome, FaArrowRight, FaMapMarkedAlt, FaVrCardboard, FaFileContract } from 'react-icons/fa';

const RealEstateApp = () => {
  return (
    <div className="w-full bg-white font-sans animate-fadeIn pt-[90px]">
      
      {/* Hero Section */}
      <div className="relative bg-[#020b2d] py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1600" alt="Real Estate" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020b2d] via-[#020b2d]/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:w-[60%]">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-cyan-400 font-bold text-xs uppercase tracking-wider mb-8 w-fit">
             <FaHome /> Property Technology
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            Real Estate Portals
          </h1>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed font-medium">
            Immersive property listing platforms featuring AR tours, interactive maps, and sophisticated broker dashboards.
          </p>
          <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-4 px-8 rounded-full transition-all flex items-center gap-2 w-fit">
            Build Your Portal <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Advanced Features */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-black text-slate-900 mb-12 text-center">PropTech Capabilities</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all">
             <FaMapMarkedAlt className="text-4xl text-purple-500 mb-6" />
             <h3 className="text-xl font-bold mb-3">Interactive Mapping</h3>
             <p className="text-slate-500">Custom Google Maps APIs with neighborhood data and transit overlays.</p>
          </div>
          <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all">
             <FaVrCardboard className="text-4xl text-purple-500 mb-6" />
             <h3 className="text-xl font-bold mb-3">3D Virtual Tours</h3>
             <p className="text-slate-500">Web-based WebGL environments for remote property walk-throughs.</p>
          </div>
          <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all">
             <FaFileContract className="text-4xl text-purple-500 mb-6" />
             <h3 className="text-xl font-bold mb-3">Smart Contracts</h3>
             <p className="text-slate-500">Blockchain-verified leasing agreements and document management.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealEstateApp;