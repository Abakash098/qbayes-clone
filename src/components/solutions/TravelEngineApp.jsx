import React from 'react';
import { FaCalendarAlt, FaArrowRight, FaPlane, FaHotel, FaTicketAlt } from 'react-icons/fa';

const TravelEngineApp = () => {
  return (
    <div className="w-full bg-white font-sans animate-fadeIn pt-[90px]">
      <div className="relative bg-[#020b2d] py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1600" alt="Travel Engine" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020b2d] via-[#020b2d]/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:w-[60%]">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sky-400 font-bold text-xs uppercase tracking-wider mb-8 w-fit"><FaCalendarAlt /> Travel Tech</div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">Travel Booking Engine</h1>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed font-medium">Aggregated flight, hotel, and car rental booking systems integrating multiple global APIs with dynamic pricing models.</p>
          <button className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-4 px-8 rounded-full transition-all flex items-center gap-2 w-fit">Build Booking Engine <FaArrowRight /></button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-black text-slate-900 mb-12 text-center">GDS & API Integrations</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all"><FaPlane className="text-4xl text-sky-500 mb-6" /><h3 className="text-xl font-bold mb-3">Amadeus/Sabre APIs</h3><p className="text-slate-500">Live integration with Global Distribution Systems for instant flight data.</p></div>
          <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all"><FaHotel className="text-4xl text-sky-500 mb-6" /><h3 className="text-xl font-bold mb-3">Hotel Aggregation</h3><p className="text-slate-500">Pulling inventory from Expedia, Booking.com, and local vendors.</p></div>
          <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all"><FaTicketAlt className="text-4xl text-sky-500 mb-6" /><h3 className="text-xl font-bold mb-3">Dynamic Packaging</h3><p className="text-slate-500">Allow users to combine flights, hotels, and activities in one checkout.</p></div>
        </div>
      </div>
    </div>
  );
};
export default TravelEngineApp;