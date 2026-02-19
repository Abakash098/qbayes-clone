import React from 'react';
import { FaUsers, FaArrowRight, FaDonate, FaChartPie, FaGlobe } from 'react-icons/fa';

const CrowdfundingApp = () => {
  return (
    <div className="w-full bg-white font-sans animate-fadeIn pt-[90px]">
      <div className="relative bg-[#020b2d] py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1531538512164-9b3c3bd29eb2?auto=format&fit=crop&q=80&w=1600" alt="Crowdfunding" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020b2d] via-[#020b2d]/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:w-[60%]">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-emerald-400 font-bold text-xs uppercase tracking-wider mb-8 w-fit"><FaUsers /> Finance & Charity</div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">Crowdfunding Apps</h1>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed font-medium">Secure investment, equity, and donation platforms to help startups, NGOs, and creators raise capital globally.</p>
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-full transition-all flex items-center gap-2 w-fit">Build Your Platform <FaArrowRight /></button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-black text-slate-900 mb-12 text-center">Funding Infrastructure</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all"><FaDonate className="text-4xl text-emerald-500 mb-6" /><h3 className="text-xl font-bold mb-3">Secure Escrow</h3><p className="text-slate-500">Automated fund holding and milestone-based payout capabilities.</p></div>
          <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all"><FaChartPie className="text-4xl text-emerald-500 mb-6" /><h3 className="text-xl font-bold mb-3">Campaign Analytics</h3><p className="text-slate-500">Real-time data visualization for creators to track funding goals.</p></div>
          <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all"><FaGlobe className="text-4xl text-emerald-500 mb-6" /><h3 className="text-xl font-bold mb-3">Multi-Currency</h3><p className="text-slate-500">Global payment gateways supporting fiat and cryptocurrency donations.</p></div>
        </div>
      </div>
    </div>
  );
};
export default CrowdfundingApp;