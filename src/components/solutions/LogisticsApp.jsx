import React from 'react';
import { FaBox, FaArrowRight, FaTruckMoving, FaRoute, FaClipboardCheck } from 'react-icons/fa';

const LogisticsApp = () => {
  return (
    <div className="w-full bg-white font-sans animate-fadeIn pt-[90px]">
      <div className="relative bg-[#020b2d] py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1600" alt="Logistics" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020b2d] via-[#020b2d]/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:w-[60%]">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-slate-300 font-bold text-xs uppercase tracking-wider mb-8 w-fit"><FaBox /> Supply Chain</div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">Logistics & Distribution</h1>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed font-medium">Enterprise fleet management, supply chain optimization, IoT sensors, and real-time global shipment tracking software.</p>
          <button className="bg-slate-400 hover:bg-slate-500 text-slate-900 font-bold py-4 px-8 rounded-full transition-all flex items-center gap-2 w-fit">Optimize Supply Chain <FaArrowRight /></button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-black text-slate-900 mb-12 text-center">Logistics Engineering</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all"><FaRoute className="text-4xl text-slate-400 mb-6" /><h3 className="text-xl font-bold mb-3">AI Route Optimization</h3><p className="text-slate-500">Minimize fuel costs and delivery times using predictive route planning.</p></div>
          <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all"><FaTruckMoving className="text-4xl text-slate-400 mb-6" /><h3 className="text-xl font-bold mb-3">Fleet Telematics</h3><p className="text-slate-500">Real-time GPS tracking and vehicle diagnostic data via IoT sensors.</p></div>
          <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all"><FaClipboardCheck className="text-4xl text-slate-400 mb-6" /><h3 className="text-xl font-bold mb-3">Digital Proof of Delivery</h3><p className="text-slate-500">E-signatures, photo capture, and automated invoicing upon drop-off.</p></div>
        </div>
      </div>
    </div>
  );
};
export default LogisticsApp;