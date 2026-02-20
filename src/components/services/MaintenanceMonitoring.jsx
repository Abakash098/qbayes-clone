import React from 'react';
const MaintenanceMonitoring = () => (
  <div className="bg-white font-sans pt-[90px]">
    <section className="bg-[#020b24] py-24 text-white text-center px-6">
      <h1 className="text-5xl lg:text-7xl font-black mb-6">Maintenance & <span className="text-blue-500">Monitoring</span></h1>
      <p className="text-xl text-slate-300 max-w-3xl mx-auto">24/7 proactive support. We keep your digital assets running smoothly with real-time health checks and instant bug fixes.</p>
    </section>
    <section className="py-20 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="p-10 bg-slate-50 rounded-3xl shadow-sm border border-slate-100">
        <h2 className="text-3xl font-bold mb-4 text-slate-900">Real-time Monitoring</h2>
        <p className="text-slate-600">Track server uptime, traffic spikes, and error logs instantly to prevent crashes before they impact users.</p>
      </div>
      <div className="p-10 bg-slate-50 rounded-3xl shadow-sm border border-slate-100">
        <h2 className="text-3xl font-bold mb-4 text-slate-900">Continuous Support</h2>
        <p className="text-slate-600">Dedicated engineering teams on standby to roll out hotfixes, feature updates, and technical assistance.</p>
      </div>
    </section>
  </div>
);
export default MaintenanceMonitoring;