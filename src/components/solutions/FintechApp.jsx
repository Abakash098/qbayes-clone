import React from 'react';
import { FaCoins, FaArrowRight, FaLock, FaChartPie, FaMobileAlt } from 'react-icons/fa';

const FintechApp = () => {
  return (
    <div className="w-full bg-white font-sans animate-fadeIn pt-[90px]">
      
      {/* Hero Section */}
      <div className="relative bg-[#020b2d] py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600" alt="Fintech" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020b2d] via-[#020b2d]/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:w-[60%]">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-cyan-400 font-bold text-xs uppercase tracking-wider mb-8 w-fit">
             <FaCoins /> Financial Technology
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            Fintech Development
          </h1>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed font-medium">
            Secure, compliant, and robust financial software. From digital wallets and neobanks to blockchain trading platforms.
          </p>
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-8 rounded-full transition-all flex items-center gap-2 w-fit">
            Secure Your Platform <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Advanced Features */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-black text-slate-900 mb-12 text-center">Bank-Grade Engineering</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all">
             <FaLock className="text-4xl text-cyan-500 mb-6" />
             <h3 className="text-xl font-bold mb-3">Military Encryption</h3>
             <p className="text-slate-500">PCI-DSS compliance and multi-factor authentication systems.</p>
          </div>
          <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all">
             <FaChartPie className="text-4xl text-cyan-500 mb-6" />
             <h3 className="text-xl font-bold mb-3">Wealth Management</h3>
             <p className="text-slate-500">AI-driven robo-advisors and portfolio tracking dashboards.</p>
          </div>
          <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all">
             <FaMobileAlt className="text-4xl text-cyan-500 mb-6" />
             <h3 className="text-xl font-bold mb-3">Digital Wallets</h3>
             <p className="text-slate-500">NFC payments, QR integrations, and peer-to-peer transfers.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FintechApp;