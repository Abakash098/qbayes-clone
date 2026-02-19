import React from 'react';
import { FaMotorcycle, FaArrowRight, FaHamburger, FaMapPin, FaCreditCard } from 'react-icons/fa';

const FoodDeliveryApp = () => {
  return (
    <div className="w-full bg-white font-sans animate-fadeIn pt-[90px]">
      <div className="relative bg-[#020b2d] py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&q=80&w=1600" alt="Food Delivery" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020b2d] via-[#020b2d]/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:w-[60%]">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-red-400 font-bold text-xs uppercase tracking-wider mb-8 w-fit"><FaMotorcycle /> Food & Beverage</div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">Food Delivery Apps</h1>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed font-medium">End-to-end food delivery ecosystems connecting users, restaurants, and delivery partners seamlessly with live tracking and order management.</p>
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-full transition-all flex items-center gap-2 w-fit">Develop Your App <FaArrowRight /></button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-black text-slate-900 mb-12 text-center">3-Tier Architecture</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all"><FaHamburger className="text-4xl text-red-500 mb-6" /><h3 className="text-xl font-bold mb-3">Restaurant Panel</h3><p className="text-slate-500">Menu management, order accepting, and revenue analytics dashboard.</p></div>
          <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all"><FaMapPin className="text-4xl text-red-500 mb-6" /><h3 className="text-xl font-bold mb-3">Rider App</h3><p className="text-slate-500">Live GPS tracking, route optimization, and automated payout systems.</p></div>
          <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all"><FaCreditCard className="text-4xl text-red-500 mb-6" /><h3 className="text-xl font-bold mb-3">Customer App</h3><p className="text-slate-500">Intuitive UI, advanced search filters, and multi-gateway payment integration.</p></div>
        </div>
      </div>
    </div>
  );
};
export default FoodDeliveryApp;