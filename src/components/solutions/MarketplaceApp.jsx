import React from 'react';
import { FaStore, FaArrowRight, FaUsers, FaMoneyCheck, FaPercentage } from 'react-icons/fa';

const MarketplaceApp = () => {
  return (
    <div className="w-full bg-white font-sans animate-fadeIn pt-[90px]">
      <div className="relative bg-[#020b2d] py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1600" alt="Marketplace" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020b2d] via-[#020b2d]/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:w-[60%]">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-purple-400 font-bold text-xs uppercase tracking-wider mb-8 w-fit"><FaStore /> E-Commerce</div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">Multivendor Marketplace</h1>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed font-medium">Robust digital marketplaces akin to Amazon or Etsy, enabling thousands of sellers, complex catalogs, and automated commission payouts.</p>
          <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-4 px-8 rounded-full transition-all flex items-center gap-2 w-fit">Launch Marketplace <FaArrowRight /></button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-black text-slate-900 mb-12 text-center">Marketplace Architecture</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all"><FaUsers className="text-4xl text-purple-500 mb-6" /><h3 className="text-xl font-bold mb-3">Vendor Dashboards</h3><p className="text-slate-500">Dedicated portals for sellers to manage products, orders, and analytics.</p></div>
          <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all"><FaPercentage className="text-4xl text-purple-500 mb-6" /><h3 className="text-xl font-bold mb-3">Commission Engine</h3><p className="text-slate-500">Automated split-payments and tiered commission routing algorithms.</p></div>
          <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all"><FaMoneyCheck className="text-4xl text-purple-500 mb-6" /><h3 className="text-xl font-bold mb-3">Secure Escrow</h3><p className="text-slate-500">Hold funds securely until buyer confirmation utilizing Stripe Connect.</p></div>
        </div>
      </div>
    </div>
  );
};
export default MarketplaceApp;