import React, { useEffect } from 'react';
import { FaCheckCircle, FaBrain, FaChartPie } from 'react-icons/fa';

const DataAnalyticsAI = () => {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    "Consultancy",
    "Data Collection",
    "Data Curation",
    "Data Processing",
    "Data Visualization",
    "Data Analysis/Interpretation/Understanding",
    "Database Design, Development and Maintenance",
    "Artificial Intelligence (AI)"
  ];

  const products = [
    "Statistical Analysis, Inferencing, Regression",
    "Knowledge/Information Processing and Retrieval",
    "Forecasting/Prediction",
    "Intelligent Systems",
    "Machine/Deep Learning Solutions",
    "Smart Optimization",
    "Explainable AI, Sustainable AI, Responsible AI",
    "Other Advanced Analytics and Solutions"
  ];

  return (
    <div className="bg-white font-sans w-full animate-fadeIn pt-[90px]">
      
      {/* 1. Purple Hero Section */}
      <div className="bg-purple-700 py-24 md:py-32 relative overflow-hidden">
        {/* Decorative background blurs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-60"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-60"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h4 className="text-purple-200 font-bold uppercase tracking-widest text-sm mb-4">Core Expertise</h4>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Data Analytics and <br /> Artificial Intelligence
          </h1>
          <p className="text-purple-100 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Transforming raw data into actionable insights and building intelligent systems to drive your enterprise forward.
          </p>
        </div>
      </div>

      {/* 2. Content Layout (Premium Cards) */}
      <div className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          
          {/* Services Card */}
          <div className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
            <div className="flex items-center gap-5 mb-10">
              <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 shadow-sm">
                <FaChartPie size={28} />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Services</h2>
            </div>
            
            <ul className="space-y-6">
              {services.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 group">
                  <FaCheckCircle className="text-purple-500 mt-1.5 flex-shrink-0 text-xl group-hover:text-purple-700 transition-colors" />
                  <span className="text-slate-600 text-lg font-medium leading-relaxed group-hover:text-slate-900 transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Products & Solutions Card */}
          <div className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
            <div className="flex items-center gap-5 mb-10">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shadow-sm">
                <FaBrain size={28} />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Products & Solutions</h2>
            </div>
            
            <ul className="space-y-6">
              {products.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 group">
                  <FaCheckCircle className="text-blue-500 mt-1.5 flex-shrink-0 text-xl group-hover:text-blue-700 transition-colors" />
                  <span className="text-slate-600 text-lg font-medium leading-relaxed group-hover:text-slate-900 transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DataAnalyticsAI;