import React from 'react';
import { FaGraduationCap, FaArrowRight, FaVideo, FaBookOpen, FaCertificate } from 'react-icons/fa';

const ElearningApp = () => {
  return (
    <div className="w-full bg-white font-sans animate-fadeIn pt-[90px]">
      <div className="relative bg-[#020b2d] py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1600" alt="eLearning" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020b2d] via-[#020b2d]/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:w-[60%]">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-green-400 font-bold text-xs uppercase tracking-wider mb-8 w-fit"><FaGraduationCap /> EdTech</div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">eLearning Platforms</h1>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed font-medium">Interactive Learning Management Systems (LMS) with live classes, AI grading, secure DRM content, and progress tracking.</p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full transition-all flex items-center gap-2 w-fit">Transform Education <FaArrowRight /></button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-black text-slate-900 mb-12 text-center">EdTech Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all"><FaVideo className="text-4xl text-green-500 mb-6" /><h3 className="text-xl font-bold mb-3">Live Virtual Classrooms</h3><p className="text-slate-500">Interactive whiteboards and high-definition video conferencing.</p></div>
          <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all"><FaBookOpen className="text-4xl text-green-500 mb-6" /><h3 className="text-xl font-bold mb-3">Course Authoring</h3><p className="text-slate-500">Drag-and-drop syllabus creation for educators and administrators.</p></div>
          <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all"><FaCertificate className="text-4xl text-green-500 mb-6" /><h3 className="text-xl font-bold mb-3">Automated Certification</h3><p className="text-slate-500">Blockchain-verified credentials issued upon course completion.</p></div>
        </div>
      </div>
    </div>
  );
};
export default ElearningApp;