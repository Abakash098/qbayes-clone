import React from 'react';
import { FaHandPointer, FaArrowRight, FaBoxOpen, FaShoppingCart, FaTruck } from 'react-icons/fa';

const OnlineOrderingApp = () => {
  return (
    <div className="w-full bg-white font-sans animate-fadeIn pt-[90px]">
      <div className="relative bg-[#020b2d] py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1600" alt="Online Ordering" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020b2d] via-[#020b2d]/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:w-[60%]">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-indigo-400 font-bold text-xs uppercase tracking-wider mb-8 w-fit"><FaHandPointer /> Retail & Wholesale</div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">Online Ordering Systems</h1>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed font-medium">Customized digital catalogs and frictionless checkout systems built to scale sales for retail, B2B, and wholesale businesses.</p>
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-4 px-8 rounded-full transition-all flex items-center gap-2 w-fit">Scale Your Sales <FaArrowRight /></button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-black text-slate-900 mb-12 text-center">E-Commerce Essentials</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all"><FaBoxOpen className="text-4xl text-indigo-500 mb-6" /><h3 className="text-xl font-bold mb-3">Inventory Sync</h3><p className="text-slate-500">Real-time stock management connected directly to your warehouse ERP.</p></div>
          <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all"><FaShoppingCart className="text-4xl text-indigo-500 mb-6" /><h3 className="text-xl font-bold mb-3">1-Click Checkout</h3><p className="text-slate-500">Frictionless payment flows to minimize cart abandonment rates.</p></div>
          <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all"><FaTruck className="text-4xl text-indigo-500 mb-6" /><h3 className="text-xl font-bold mb-3">Fulfillment Tracking</h3><p className="text-slate-500">Integrations with FedEx, UPS, and local couriers for order transparency.</p></div>
        </div>
      </div>
    </div>
  );
};
export default OnlineOrderingApp;