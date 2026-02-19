import React from 'react';
import { FaCut, FaArrowRight, FaCalendarCheck, FaRegSmile, FaBell } from 'react-icons/fa';

const SalonSpaApp = () => {
  return (
    <div className="w-full bg-white font-sans animate-fadeIn pt-[90px]">
      <div className="relative bg-[#020b2d] py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1600" alt="Salon" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020b2d] via-[#020b2d]/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:w-[60%]">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-pink-400 font-bold text-xs uppercase tracking-wider mb-8 w-fit"><FaCut /> Wellness & Beauty</div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">Salon & Spa Booking</h1>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed font-medium">Streamline appointment scheduling, staff management, and customer relationship management (CRM) for the wellness industry.</p>
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-8 rounded-full transition-all flex items-center gap-2 w-fit">Digitize Your Salon <FaArrowRight /></button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-black text-slate-900 mb-12 text-center">Business Management</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all"><FaCalendarCheck className="text-4xl text-pink-500 mb-6" /><h3 className="text-xl font-bold mb-3">Smart Scheduling</h3><p className="text-slate-500">Conflict-free calendar management for multiple stylists and resources.</p></div>
          <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all"><FaRegSmile className="text-4xl text-pink-500 mb-6" /><h3 className="text-xl font-bold mb-3">Loyalty Programs</h3><p className="text-slate-500">Automated points, rewards, and membership tiers to retain customers.</p></div>
          <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all"><FaBell className="text-4xl text-pink-500 mb-6" /><h3 className="text-xl font-bold mb-3">Push Reminders</h3><p className="text-slate-500">Reduce no-shows with automated SMS and email appointment reminders.</p></div>
        </div>
      </div>
    </div>
  );
};
export default SalonSpaApp;