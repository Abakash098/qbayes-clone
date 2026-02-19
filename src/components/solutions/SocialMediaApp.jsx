import React from 'react';
import { FaShareAlt, FaArrowRight, FaComments, FaVideo, FaUserShield } from 'react-icons/fa';

const SocialMediaApp = () => {
  return (
    <div className="w-full bg-white font-sans animate-fadeIn pt-[90px]">
      <div className="relative bg-[#020b2d] py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1600" alt="Social Media" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020b2d] via-[#020b2d]/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:w-[60%]">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-blue-400 font-bold text-xs uppercase tracking-wider mb-8 w-fit"><FaShareAlt /> Networking</div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">Social Media Solutions</h1>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed font-medium">Build highly scalable, engaging, and secure social networking platforms with real-time chat, live streaming, and AI-driven content feeds.</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full transition-all flex items-center gap-2 w-fit">Build Your Network <FaArrowRight /></button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-black text-slate-900 mb-12 text-center">Platform Capabilities</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all"><FaComments className="text-4xl text-blue-500 mb-6" /><h3 className="text-xl font-bold mb-3">Real-Time Messaging</h3><p className="text-slate-500">WebSocket-based chat architectures supporting millions of concurrent users.</p></div>
          <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all"><FaVideo className="text-4xl text-blue-500 mb-6" /><h3 className="text-xl font-bold mb-3">Live Streaming</h3><p className="text-slate-500">WebRTC integration for seamless, low-latency live video broadcasting.</p></div>
          <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all"><FaUserShield className="text-4xl text-blue-500 mb-6" /><h3 className="text-xl font-bold mb-3">Content Moderation</h3><p className="text-slate-500">AI algorithms to filter NSFW content and maintain community guidelines.</p></div>
        </div>
      </div>
    </div>
  );
};
export default SocialMediaApp;