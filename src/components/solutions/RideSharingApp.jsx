import React from 'react';
import { FaCar, FaArrowRight, FaMapMarkerAlt, FaMoneyBillWave, FaStar } from 'react-icons/fa';

const RideSharingApp = () => {
  return (
    <div className="w-full bg-white font-sans animate-fadeIn pt-[90px]">
      <div className="relative bg-[#020b2d] py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1600" alt="Ride Sharing" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020b2d] via-[#020b2d]/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:w-[60%]">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-yellow-400 font-bold text-xs uppercase tracking-wider mb-8 w-fit"><FaCar /> Transportation</div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">Ride Sharing Platforms</h1>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed font-medium">Advanced GPS tracking, real-time routing algorithms, and secure payment gateways for modern, Uber-like ride-hailing applications.</p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold py-4 px-8 rounded-full transition-all flex items-center gap-2 w-fit">Start Your Fleet <FaArrowRight /></button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-black text-slate-900 mb-12 text-center">Mobility Engineering</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all"><FaMapMarkerAlt className="text-4xl text-yellow-500 mb-6" /><h3 className="text-xl font-bold mb-3">Dynamic Routing</h3><p className="text-slate-500">Google Maps & Mapbox APIs for turn-by-turn navigation and traffic prediction.</p></div>
          <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all"><FaMoneyBillWave className="text-4xl text-yellow-500 mb-6" /><h3 className="text-xl font-bold mb-3">Surge Pricing</h3><p className="text-slate-500">Machine learning models that adjust fares based on real-time supply and demand.</p></div>
          <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all"><FaStar className="text-4xl text-yellow-500 mb-6" /><h3 className="text-xl font-bold mb-3">Driver Telematics</h3><p className="text-slate-500">Track driver behavior, speed, and safety ratings for quality assurance.</p></div>
        </div>
      </div>
    </div>
  );
};
export default RideSharingApp;