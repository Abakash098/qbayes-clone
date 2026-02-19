import React from 'react';
import { FaHeartbeat, FaArrowRight, FaRunning, FaAppleAlt, FaDumbbell } from 'react-icons/fa';

const FitnessApp = () => {
  return (
    <div className="w-full bg-white font-sans animate-fadeIn pt-[90px]">
      <div className="relative bg-[#020b2d] py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1600" alt="Fitness" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020b2d] via-[#020b2d]/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:w-[60%]">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-red-500 font-bold text-xs uppercase tracking-wider mb-8 w-fit"><FaHeartbeat /> Health & Wellness</div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">Fitness Applications</h1>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed font-medium">Health tracking, virtual coaching, AI diet plans, and wearable device integrations for the modern fitness enthusiast.</p>
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-full transition-all flex items-center gap-2 w-fit">Develop Fitness Tech <FaArrowRight /></button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-black text-slate-900 mb-12 text-center">Wellness Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all"><FaRunning className="text-4xl text-red-500 mb-6" /><h3 className="text-xl font-bold mb-3">Wearable Sync</h3><p className="text-slate-500">Integrations with Apple Health, Google Fit, Fitbit, and Garmin APIs.</p></div>
          <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all"><FaAppleAlt className="text-4xl text-red-500 mb-6" /><h3 className="text-xl font-bold mb-3">Dietary AI</h3><p className="text-slate-500">Machine learning models to generate custom macro-nutrient plans.</p></div>
          <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all"><FaDumbbell className="text-4xl text-red-500 mb-6" /><h3 className="text-xl font-bold mb-3">VOD Workouts</h3><p className="text-slate-500">Video-on-Demand infrastructure for streaming guided workout classes.</p></div>
        </div>
      </div>
    </div>
  );
};
export default FitnessApp;