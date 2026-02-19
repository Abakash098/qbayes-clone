import React from 'react';
import { FaCode, FaArrowRight, FaServer, FaShoppingCart, FaWordpress, FaDesktop, FaDatabase } from 'react-icons/fa';

const WebDevelopment = () => {
  const techStacks = [
    { title: "PHP Frameworks", desc: "Robust and scalable solutions using Laravel, Zend, and Cake PHP.", icon: FaServer },
    { title: "MERN & MEAN Stacks", desc: "Full-stack JavaScript development using MongoDB, Express, React, Angular, and Node.js for high-performance web apps.", icon: FaDatabase },
    { title: "E-Commerce Solutions", desc: "Custom online storefronts built on Magento, Shopify, and WooCommerce to maximize conversions.", icon: FaShoppingCart },
    { title: "CMS & WordPress", desc: "Easy-to-manage content systems and custom WordPress development tailored to your brand.", icon: FaWordpress },
    { title: "Open Source Tech", desc: "Leveraging the power of open-source communities to build cost-effective and secure platforms.", icon: FaDesktop }
  ];

  return (
    <div className="w-full bg-white font-sans animate-fadeIn pt-[90px]">
      {/* Hero */}
      <div className="relative bg-[#020b2d] py-32 px-6 overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1600" alt="Web Development" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020b2d] via-[#020b2d]/90 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:w-[60%]">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1]">
            Custom <span className="text-orange-500">Web Development</span>
          </h1>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed font-medium">
            From dynamic corporate websites to complex enterprise web applications. Our expert developers build scalable, secure, and blazing-fast web solutions using the latest tech stacks to accelerate your business growth.
          </p>
          <button className="bg-[#00c2ff] hover:bg-[#00a0d6] text-white font-bold py-4 px-8 rounded-full transition-all flex items-center gap-2 w-fit">
            Discuss Your Project <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Our Core <span className="text-[#00c2ff]">Technologies</span></h2>
          <p className="text-slate-500 font-medium text-lg max-w-3xl mx-auto">We utilize modern frameworks and architectures to deliver future-proof web applications.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStacks.map((stack, idx) => (
            <div key={idx} className="p-8 rounded-3xl border border-blue-100 bg-blue-50/30 hover:bg-white hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 border border-blue-50 text-[#00c2ff] group-hover:scale-110 transition-transform">
                <stack.icon size={24} />
              </div>
              <h4 className="text-xl font-bold mb-3 text-slate-900">{stack.title}</h4>
              <p className="text-sm leading-relaxed text-slate-500">{stack.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;