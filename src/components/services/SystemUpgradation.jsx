import React from 'react';
const SystemUpgradation = () => (
  <div className="bg-white font-sans pt-[90px]">
    <section className="bg-[#020b24] py-24 text-white text-center px-6">
      <h1 className="text-5xl lg:text-7xl font-black mb-6">System <span className="text-blue-500">Upgradation</span></h1>
      <p className="text-xl text-slate-300 max-w-3xl mx-auto">Modernize your legacy systems. We upgrade outdated tech stacks to improve speed, security, and scalability.</p>
    </section>
    <section className="py-20 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="p-10 bg-slate-50 rounded-3xl shadow-sm border border-slate-100">
        <h2 className="text-3xl font-bold mb-4 text-slate-900">Legacy Modernization</h2>
        <p className="text-slate-600">Rebuild old applications using modern frameworks like React and Node.js to meet current performance standards.</p>
      </div>
      <div className="p-10 bg-slate-50 rounded-3xl shadow-sm border border-slate-100">
        <h2 className="text-3xl font-bold mb-4 text-slate-900">Database Migration</h2>
        <p className="text-slate-600">Upgrade your data storage solutions for faster querying, better security compliance, and massive scalability.</p>
      </div>
    </section>
  </div>
);
export default SystemUpgradation;