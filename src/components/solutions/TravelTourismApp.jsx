import React from 'react';
import { FaPlane, FaArrowRight, FaMap, FaCamera, FaCompass } from 'react-icons/fa';

const TravelTourismApp = () => {
  return (
    <div className="w-full bg-white font-sans animate-fadeIn pt-[90px]">
      <div className="relative bg-[#020b2d] py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&q=80&w=1600" alt="Tourism" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020b2d] via-[#020b2d]/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:w-[60%]">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-cyan-400 font-bold text-xs uppercase tracking-wider mb-8 w-fit"><FaPlane /> Hospitality</div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">Travel & Tourism Apps</h1>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed font-medium">Immersive digital itinerary planners, localized audio guides, AI recommendations, and AR-based tourism exploration apps.</p>
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-8 rounded-full transition-all flex items-center gap-2 w-fit">Create Experience <FaArrowRight /></button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-black text-slate-900 mb-12 text-center">Tourism Enhancements</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all"><FaCompass className="text-4xl text-cyan-500 mb-6" /><h3 className="text-xl font-bold mb-3">AI Trip Planners</h3><p className="text-slate-500">Machine learning generates personalized day-by-day itineraries.</p></div>
          <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all"><FaCamera className="text-4xl text-cyan-500 mb-6" /><h3 className="text-xl font-bold mb-3">AR Landmarks</h3><p className="text-slate-500">Augmented reality overlays providing historical data via phone cameras.</p></div>
          <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all"><FaMap className="text-4xl text-cyan-500 mb-6" /><h3 className="text-xl font-bold mb-3">Offline Maps</h3><p className="text-slate-500">Downloadable city guides and GPS tracking without cellular data.</p></div>
        </div>
      </div>
    </div>
  );
};
export default TravelTourismApp;