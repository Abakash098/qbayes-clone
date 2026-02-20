import React from 'react';
const TestingQA = () => (
  <div className="bg-white font-sans pt-[90px]">
    <section className="bg-[#020b24] py-24 text-white text-center px-6">
      <h1 className="text-5xl lg:text-7xl font-black mb-6">Testing & <span className="text-blue-500">QA</span></h1>
      <p className="text-xl text-slate-300 max-w-3xl mx-auto">Flawless performance guaranteed. Comprehensive automated and manual testing to ensure your software is bug-free.</p>
    </section>
    <section className="py-20 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="p-10 bg-slate-50 rounded-3xl shadow-sm border border-slate-100">
        <h2 className="text-3xl font-bold mb-4 text-slate-900">Automated Testing</h2>
        <p className="text-slate-600">We utilize tools like Selenium and Cypress to run thousands of test cases instantly, ensuring code stability.</p>
      </div>
      <div className="p-10 bg-slate-50 rounded-3xl shadow-sm border border-slate-100">
        <h2 className="text-3xl font-bold mb-4 text-slate-900">Security Penetration</h2>
        <p className="text-slate-600">Identify and patch vulnerabilities before hackers do. We conduct rigorous security audits on all applications.</p>
      </div>
    </section>
  </div>
);
export default TestingQA;