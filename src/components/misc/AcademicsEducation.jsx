import React from 'react';
import { FaGraduationCap, FaChalkboardTeacher, FaUserGraduate, FaArrowRight } from 'react-icons/fa';

const AcademicsEducation = () => (
  <div className="bg-white font-sans pt-[90px]">
    <section className="bg-[#0b1c38] py-24 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h1 className="text-5xl lg:text-7xl font-black mb-6">Academics & <span className="text-orange-500">Education</span></h1>
        <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
          Empowering the next generation with technical knowledge, vocational training, and specialized EdTech development.
        </p>
      </div>
      <div className="absolute -right-20 -bottom-20 opacity-10 text-white"><FaGraduationCap size={400} /></div>
    </section>

    <section className="py-20 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-xl transition-all">
        <FaChalkboardTeacher className="text-orange-500 mb-6" size={40} />
        <h3 className="text-2xl font-bold mb-4">Vocational Training</h3>
        <p className="text-gray-600">Practical, hands-on training sessions designed to bridge the gap between academic theory and industry reality.</p>
      </div>
      <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-xl transition-all">
        <FaUserGraduate className="text-orange-500 mb-6" size={40} />
        <h3 className="text-2xl font-bold mb-4">Career Counselling</h3>
        <p className="text-gray-600">Expert guidance to help students and professionals navigate their career paths in the tech ecosystem.</p>
      </div>
      <div className="p-8 bg-[#0b1c38] text-white rounded-3xl flex flex-col justify-center items-center text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to Learn?</h3>
        <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-bold flex items-center gap-2">Contact Us <FaArrowRight /></button>
      </div>
    </section>
  </div>
);

export default AcademicsEducation;