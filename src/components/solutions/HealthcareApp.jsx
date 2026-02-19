import React from 'react';
import { FaHandHoldingHeart, FaArrowRight, FaStethoscope, FaFileMedical, FaLaptopMedical } from 'react-icons/fa';

const HealthcareApp = () => {
  return (
    <div className="w-full bg-white font-sans animate-fadeIn pt-[90px]">
      <div className="relative bg-[#020b2d] py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1600" alt="Healthcare" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020b2d] via-[#020b2d]/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:w-[60%]">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-teal-400 font-bold text-xs uppercase tracking-wider mb-8 w-fit"><FaHandHoldingHeart /> Medical Tech</div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">Healthcare Solutions</h1>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed font-medium">HIPAA-compliant telemedicine platforms, Electronic Health Records (EHR), and secure patient portals engineered for clinical excellence.</p>
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-8 rounded-full transition-all flex items-center gap-2 w-fit">Build Medical Software <FaArrowRight /></button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-black text-slate-900 mb-12 text-center">Clinical Capabilities</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all"><FaLaptopMedical className="text-4xl text-teal-500 mb-6" /><h3 className="text-xl font-bold mb-3">Telemedicine</h3><p className="text-slate-500">Secure, encrypted video consultations and digital prescription issuance.</p></div>
          <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all"><FaFileMedical className="text-4xl text-teal-500 mb-6" /><h3 className="text-xl font-bold mb-3">EHR/EMR Systems</h3><p className="text-slate-500">Centralized patient data management compliant with HL7 standards.</p></div>
          <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all"><FaStethoscope className="text-4xl text-teal-500 mb-6" /><h3 className="text-xl font-bold mb-3">IoT Health Tracking</h3><p className="text-slate-500">Integration with remote patient monitoring devices and vital sensors.</p></div>
        </div>
      </div>
    </div>
  );
};
export default HealthcareApp;