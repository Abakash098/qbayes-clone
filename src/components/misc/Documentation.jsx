import React from 'react';
import { FaFileAlt, FaPenNib, FaSearch, FaArrowRight } from 'react-icons/fa';

const Documentation = () => (
  <div className="bg-white font-sans pt-[90px]">
    <section className="bg-[#0b1c38] py-24 text-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl lg:text-7xl font-black mb-6">Professional <span className="text-[#4a90e2]">Documentation</span></h1>
        <p className="text-xl text-gray-300 max-w-2xl">From complex research papers to high-stakes business presentations, we handle your documentation with precision.</p>
      </div>
    </section>

    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold text-slate-900 mb-8">Comprehensive Writing Services</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0"><FaPenNib /></div>
              <div><h4 className="font-bold text-lg">Thesis & Dissertation</h4><p className="text-gray-500">Academic writing support for students and researchers across multiple domains.</p></div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0"><FaSearch /></div>
              <div><h4 className="font-bold text-lg">Research Papers</h4><p className="text-gray-500">Methodology-driven research and technical writing for industry journals.</p></div>
            </div>
          </div>
        </div>
        <div className="bg-slate-100 rounded-[3rem] p-12">
          <FaFileAlt size={100} className="text-[#4a90e2] mb-6" />
          <h3 className="text-2xl font-bold mb-4">Business Presentations</h3>
          <p className="text-gray-600 mb-8">Professional brochures and corporate reports that leave a lasting impression on your clients.</p>
          <button className="bg-[#4a90e2] text-white px-8 py-3 rounded-full font-bold">Inquire Now</button>
        </div>
      </div>
    </section>
  </div>
);

export default Documentation;