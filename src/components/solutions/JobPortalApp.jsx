import React from 'react';
import { FaBriefcase, FaArrowRight, FaSearchDollar, FaUserTie, FaFileAlt } from 'react-icons/fa';

const JobPortalApp = () => {
  return (
    <div className="w-full bg-white font-sans animate-fadeIn pt-[90px]">
      <div className="relative bg-[#020b2d] py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1600" alt="Job Portal" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020b2d] via-[#020b2d]/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:w-[60%]">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-indigo-400 font-bold text-xs uppercase tracking-wider mb-8 w-fit"><FaBriefcase /> Human Resources</div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">Job Portal Development</h1>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed font-medium">AI-driven resume parsing, automated candidate matchmaking, and secure video interviewing platforms for modern recruitment.</p>
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-4 px-8 rounded-full transition-all flex items-center gap-2 w-fit">Build HR Tech <FaArrowRight /></button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-black text-slate-900 mb-12 text-center">Recruitment Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all"><FaFileAlt className="text-4xl text-indigo-500 mb-6" /><h3 className="text-xl font-bold mb-3">AI Resume Parsing</h3><p className="text-slate-500">Automatically extract skills and experience from uploaded PDF/Word docs.</p></div>
          <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all"><FaUserTie className="text-4xl text-indigo-500 mb-6" /><h3 className="text-xl font-bold mb-3">Smart Matchmaking</h3><p className="text-slate-500">Machine learning algorithms to pair candidates with ideal job postings.</p></div>
          <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all"><FaSearchDollar className="text-4xl text-indigo-500 mb-6" /><h3 className="text-xl font-bold mb-3">Employer CRM</h3><p className="text-slate-500">Applicant tracking systems (ATS) with pipeline management and scheduling.</p></div>
        </div>
      </div>
    </div>
  );
};
export default JobPortalApp;