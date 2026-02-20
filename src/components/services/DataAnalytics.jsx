import React from 'react';
const DataAnalytics = () => (
  <div className="bg-white font-sans pt-[90px]">
    <section className="bg-[#020b24] py-24 text-white text-center px-6">
      <h1 className="text-5xl lg:text-7xl font-black mb-6">Data Analytics & <span className="text-blue-500">Science</span></h1>
      <p className="text-xl text-slate-300 max-w-3xl mx-auto">Transform raw data into actionable intelligence. We provide predictive modeling, data visualization, and advanced forecasting to drive your business decisions.</p>
    </section>
    <section className="py-20 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="p-10 bg-slate-50 rounded-3xl shadow-sm border border-slate-100">
        <h2 className="text-3xl font-bold mb-4 text-slate-900">Predictive Analytics</h2>
        <p className="text-slate-600">Forecast trends, understand customer behavior, and optimize operations using machine learning algorithms and historical data sets.</p>
      </div>
      <div className="p-10 bg-slate-50 rounded-3xl shadow-sm border border-slate-100">
        <h2 className="text-3xl font-bold mb-4 text-slate-900">Data Visualization</h2>
        <p className="text-slate-600">Complex data made simple. We build intuitive, real-time dashboards using PowerBI, Tableau, and custom React charts.</p>
      </div>
    </section>
  </div>
);
export default DataAnalytics;