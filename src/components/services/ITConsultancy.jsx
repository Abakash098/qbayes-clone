import React from 'react';
import { FaCogs, FaDatabase, FaChartLine, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

const ITConsultancy = () => {
  const solutions = [
    {
      title: "Enterprise Resource Planning (ERP) Systems",
      desc: "Streamline your entire business operation with a centralized ERP solution. We help you integrate finance, HR, manufacturing, and supply chain into one cohesive system.",
      features: ["Real-time Data Sync", "Automated Workflows", "Custom Module Development", "Cross-department Integration"],
      icon: <FaDatabase className="text-purple-600" size={40} />,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Inventory Management Solutions",
      desc: "Stop overstocking or running out of essentials. Our custom inventory systems provide precise tracking, automated reordering, and warehouse optimization.",
      features: ["Barcode/QR Integration", "Stock Level Alerts", "Supplier Management", "Multi-warehouse Support"],
      icon: <FaCogs className="text-blue-600" size={40} />,
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="font-sans bg-white pt-[90px]">
      {/* --- HERO SECTION --- */}
      <section className="relative bg-[#020b24] text-white py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
              Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">IT Consultancy</span>
            </h1>
            <p className="text-slate-300 text-xl mb-10 leading-relaxed">
              We align your technology infrastructure with your long-term business goals, transforming IT from a cost center into a powerful growth engine.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-10 rounded-full transition-all flex items-center gap-3 shadow-lg">
              Start Free Consultation <FaArrowRight />
            </button>
          </div>
        </div>
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
          <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover" alt="Consultancy" />
        </div>
      </section>

      {/* --- SOLUTIONS SECTION --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black text-slate-900 mb-4">Core Products & Solutions</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Scalable digital tools designed to optimize your internal processes and drive efficiency.</p>
        </div>

        <div className="space-y-32">
          {solutions.map((sol, index) => (
            <div key={index} className={`flex flex-col lg:items-center gap-16 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
              <div className="lg:w-1/2">
                <div className="mb-6">{sol.icon}</div>
                <h3 className="text-3xl font-black text-slate-900 mb-6">{sol.title}</h3>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">{sol.desc}</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {sol.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-slate-700 font-semibold">
                      <FaCheckCircle className="text-green-500" /> {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/2">
                <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50">
                  <img src={sol.image} alt={sol.title} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- BENEFITS STATS --- */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <div className="text-4xl font-black text-purple-700 mb-2">30%</div>
            <p className="text-slate-600 font-bold uppercase tracking-widest text-sm">Efficiency Gain</p>
          </div>
          <div>
            <div className="text-4xl font-black text-blue-600 mb-2">24/7</div>
            <p className="text-slate-600 font-bold uppercase tracking-widest text-sm">System Monitoring</p>
          </div>
          <div>
            <div className="text-4xl font-black text-purple-700 mb-2">Zero</div>
            <p className="text-slate-600 font-bold uppercase tracking-widest text-sm">Data Redundancy</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITConsultancy;