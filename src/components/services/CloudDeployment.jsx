import React from 'react';
const CloudDeployment = () => (
  <div className="bg-white font-sans pt-[90px]">
    <section className="bg-[#020b24] py-24 text-white text-center px-6">
      <h1 className="text-5xl lg:text-7xl font-black mb-6">Deployment & <span className="text-blue-500">Cloud</span></h1>
      <p className="text-xl text-slate-300 max-w-3xl mx-auto">Scalable, secure, and high-availability cloud infrastructure management on AWS, Azure, and Google Cloud.</p>
    </section>
    <section className="py-20 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="p-10 bg-slate-50 rounded-3xl shadow-sm border border-slate-100">
        <h2 className="text-3xl font-bold mb-4 text-slate-900">Cloud Migration</h2>
        <p className="text-slate-600">Seamlessly transition your legacy on-premise servers to the cloud with zero downtime and complete data integrity.</p>
      </div>
      <div className="p-10 bg-slate-50 rounded-3xl shadow-sm border border-slate-100">
        <h2 className="text-3xl font-bold mb-4 text-slate-900">DevOps & CI/CD</h2>
        <p className="text-slate-600">Automate your deployment pipelines for faster releases, reliable updates, and robust server architecture.</p>
      </div>
    </section>
  </div>
);
export default CloudDeployment;