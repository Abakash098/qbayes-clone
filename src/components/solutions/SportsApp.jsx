import React from 'react';
import { FaRunning, FaArrowRight, FaTrophy, FaVideo, FaComments } from 'react-icons/fa';

const SportsApp = () => {
  return (
    <div className="w-full bg-white font-sans animate-fadeIn pt-[90px]">
      
      {/* Hero Section */}
      <div className="relative bg-[#020b2d] py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=1600" alt="Sports Tech" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020b2d] via-[#020b2d]/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:w-[60%]">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-cyan-400 font-bold text-xs uppercase tracking-wider mb-8 w-fit">
             <FaRunning /> Sports & Athletics
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            Sports App Development
          </h1>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed font-medium">
            Engage fans with real-time score updates, fantasy leagues, and interactive community platforms built for high concurrency.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full transition-all flex items-center gap-2 w-fit">
            Launch Your App <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Advanced Features */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-black text-slate-900 mb-12 text-center">Core Features We Build</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all">
             <FaTrophy className="text-4xl text-orange-500 mb-6" />
             <h3 className="text-xl font-bold mb-3">Live Scoring APIs</h3>
             <p className="text-slate-500">Sub-second latency integrations with major sports data providers.</p>
          </div>
          <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all">
             <FaVideo className="text-4xl text-orange-500 mb-6" />
             <h3 className="text-xl font-bold mb-3">Video Streaming</h3>
             <p className="text-slate-500">Adaptive bitrate streaming for live matches and highlight reels.</p>
          </div>
          <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all">
             <FaComments className="text-4xl text-orange-500 mb-6" />
             <h3 className="text-xl font-bold mb-3">Fan Communities</h3>
             <p className="text-slate-500">Real-time chat, forums, and interactive polls to drive engagement.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsApp;