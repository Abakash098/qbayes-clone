import React from 'react';
import { FaUniversity, FaArrowRight, FaShieldAlt, FaChartLine, FaPiggyBank } from 'react-icons/fa';

const BFSIApp = () => {
  return (
    <div className="w-full bg-white font-sans animate-fadeIn pt-[90px]">
      <div className="relative bg-[#020b2d] py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&q=80&w=1600" alt="BFSI" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020b2d] via-[#020b2d]/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:w-[60%]">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-emerald-400 font-bold text-xs uppercase tracking-wider mb-8 w-fit"><FaUniversity /> BFSI Sector</div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">BFSI Software Solutions</h1>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed font-medium">Enterprise-grade software for Banking, Financial Services, and Insurance sectors ensuring data integrity, fraud detection, and regulatory compliance.</p>
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-full transition-all flex items-center gap-2 w-fit">Upgrade Legacy Systems <FaArrowRight /></button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-black text-slate-900 mb-12 text-center">Institutional Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all"><FaShieldAlt className="text-4xl text-emerald-500 mb-6" /><h3 className="text-xl font-bold mb-3">Fraud Detection AI</h3><p className="text-slate-500">Identify anomalous transaction patterns in milliseconds to prevent loss.</p></div>
          <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all"><FaChartLine className="text-4xl text-emerald-500 mb-6" /><h3 className="text-xl font-bold mb-3">Insurance Tech</h3><p className="text-slate-500">Automated claims processing, underwriting models, and risk assessment.</p></div>
          <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all"><FaPiggyBank className="text-4xl text-emerald-500 mb-6" /><h3 className="text-xl font-bold mb-3">Core Banking APIs</h3><p className="text-slate-500">Seamless integration with legacy mainframes to modernize user experiences.</p></div>
        </div>
      </div>
    </div>
  );
};
export default BFSIApp;