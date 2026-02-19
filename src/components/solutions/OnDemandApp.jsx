import React from 'react';
import { FaCogs, FaArrowRight, FaUserClock, FaTools, FaMapMarked } from 'react-icons/fa';

const OnDemandApp = () => {
  return (
    <div className="w-full bg-white font-sans animate-fadeIn pt-[90px]">
      <div className="relative bg-[#020b2d] py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1600" alt="On Demand" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020b2d] via-[#020b2d]/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:w-[60%]">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-teal-400 font-bold text-xs uppercase tracking-wider mb-8 w-fit"><FaCogs /> Service Industry</div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">On-Demand Services</h1>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed font-medium">Dynamic platforms designed to deliver household, mechanical, or professional services instantly connecting providers with customers.</p>
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-8 rounded-full transition-all flex items-center gap-2 w-fit">Build Your Platform <FaArrowRight /></button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-black text-slate-900 mb-12 text-center">Service Ecosystem</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all"><FaUserClock className="text-4xl text-teal-500 mb-6" /><h3 className="text-xl font-bold mb-3">Instant Booking</h3><p className="text-slate-500">Algorithm-driven allocation of nearest available service professionals.</p></div>
          <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all"><FaTools className="text-4xl text-teal-500 mb-6" /><h3 className="text-xl font-bold mb-3">Provider App</h3><p className="text-slate-500">Job acceptance, calendar syncing, and integrated navigation for workers.</p></div>
          <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all"><FaMapMarked className="text-4xl text-teal-500 mb-6" /><h3 className="text-xl font-bold mb-3">Live Tracking</h3><p className="text-slate-500">Allow customers to track professional ETA and location in real-time.</p></div>
        </div>
      </div>
    </div>
  );
};
export default OnDemandApp;