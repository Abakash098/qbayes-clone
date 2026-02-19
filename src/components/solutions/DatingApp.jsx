import React from 'react';
import { FaHeart, FaArrowRight, FaComments, FaVideo, FaUserShield } from 'react-icons/fa';

const DatingApp = () => {
  return (
    <div className="w-full bg-white font-sans animate-fadeIn pt-[90px]">
      <div className="relative bg-[#020b2d] py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?auto=format&fit=crop&q=80&w=1600" alt="Dating" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020b2d] via-[#020b2d]/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:w-[60%]">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-rose-400 font-bold text-xs uppercase tracking-wider mb-8 w-fit"><FaHeart /> Social Discovery</div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">Dating Applications</h1>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed font-medium">Algorithm-driven matchmaking, secure video calling, and high-performance dating ecosystems built for massive concurrency.</p>
          <button className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-4 px-8 rounded-full transition-all flex items-center gap-2 w-fit">Launch Dating App <FaArrowRight /></button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-black text-slate-900 mb-12 text-center">Matchmaking Tech</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all"><FaHeart className="text-4xl text-rose-500 mb-6" /><h3 className="text-xl font-bold mb-3">AI Matching</h3><p className="text-slate-500">Complex compatibility algorithms based on user behavior and preferences.</p></div>
          <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all"><FaUserShield className="text-4xl text-rose-500 mb-6" /><h3 className="text-xl font-bold mb-3">Identity Verification</h3><p className="text-slate-500">Automated photo verification and anti-catfishing security measures.</p></div>
          <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all"><FaVideo className="text-4xl text-rose-500 mb-6" /><h3 className="text-xl font-bold mb-3">In-App Video Dates</h3><p className="text-slate-500">Secure, end-to-end encrypted WebRTC video chat for virtual dates.</p></div>
        </div>
      </div>
    </div>
  );
};
export default DatingApp;