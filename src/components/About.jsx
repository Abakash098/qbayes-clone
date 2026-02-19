import React from 'react';
import { FaCheckCircle, FaArrowRight, FaBrain, FaMicrochip, FaBookOpen, FaFileSignature, FaCalendarCheck } from 'react-icons/fa';

const About = () => {
  return (
    <div className="w-full bg-white font-sans animate-fadeIn">
      
      {/* 1. Header Section */}
      <div className="max-w-7xl mx-auto px-6 py-24 border-b border-slate-50">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-200 rounded-full text-purple-700 font-bold text-sm mb-10 uppercase tracking-wider shadow-sm">
              🚀 Accelerating Digital Transformation
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 leading-[0.95] tracking-tighter">
              Innovate with <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-600">Intelligence</span>
            </h1>
            <p className="text-slate-500 text-xl font-medium leading-relaxed max-w-xl">
              Building the core of your digital future with data-driven AI ecosystems and specialized IT consultancy.
            </p>
          </div>
          <div className="relative rounded-[3rem] overflow-hidden border-[10px] border-slate-50 shadow-2xl">
             <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" alt="Consultancy" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* 2. Full Bio Section */}
      <div className="py-24 bg-slate-50/50">
        <div className="max-w-4xl mx-auto px-6">
           <h2 className="text-3xl font-black text-slate-900 mb-8">Our Identity</h2>
           <p className="text-slate-600 text-lg leading-relaxed mb-10 font-medium">
             We are a startup that provides <span className="text-purple-700 font-bold">Consultancy Services for Software/Web and other IT Solutions</span> along with Data Analytics and Artificial Intelligence (AI). Our expertise focuses on Information Retrieval, Forecasting/Prediction, Intelligent systems, Machine/Deep Learning, Smart Optimization, and Sustainable AI. 
           </p>
           <p className="text-slate-600 text-lg leading-relaxed mb-10 font-medium">
             Additionally, we serve as a hub for <span className="text-blue-600 font-bold">Electronics & IoT Solutions</span>. We conduct Research and Development through the pursuit of novelty in investigation, design, and implementation of methodology.
           </p>
        </div>
      </div>

      {/* 3. Detailed Service Categories */}
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
         
         {/* Education */}
         <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl hover:shadow-2xl transition-all group">
            <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-all"><FaBookOpen size={24}/></div>
            <h4 className="text-xl font-bold mb-4">Academics & Training</h4>
            <p className="text-slate-500 text-sm leading-relaxed">Assisting in Vocational Training, Education Technology deployment, and Career Counselling to impart technical knowledge.</p>
         </div>

         {/* Documentation */}
         <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl hover:shadow-2xl transition-all group">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all"><FaFileSignature size={24}/></div>
            <h4 className="text-xl font-bold mb-4">Technical Documentation</h4>
            <p className="text-slate-500 text-sm leading-relaxed">Specialized reporting for Financial, Commercial, Legal, and Academic Research (Dissertations, Thesis, Papers).</p>
         </div>

         {/* Event Management */}
         <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl hover:shadow-2xl transition-all group">
            <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition-all"><FaCalendarCheck size={24}/></div>
            <h4 className="text-xl font-bold mb-4">Event Management</h4>
            <p className="text-slate-500 text-sm leading-relaxed">Organizing professional Conferences, Workshops, and Seminars with ethical compliance and knowledge incubation.</p>
         </div>

      </div>

    </div>
  );
};

export default About;