import React from 'react';
import { FaNetworkWired, FaArrowRight, FaHome, FaIndustry, FaLock, FaMicrochip } from 'react-icons/fa';

const IoTDevelopment = () => {
  const services = [
    { title: "Smart Home Automation", desc: "Build connected ecosystems for consumer devices, enabling seamless control over lighting, security, and climate.", icon: FaHome },
    { title: "Industrial IoT (IIoT)", desc: "Optimize manufacturing pipelines with real-time sensor data, predictive maintenance, and automated logistics.", icon: FaIndustry },
    { title: "Embedded Systems", desc: "Custom firmware and micro-controller programming to bring your proprietary hardware to life.", icon: FaMicrochip },
    { title: "IoT Security & Architecture", desc: "Military-grade encryption and secure cloud architecture to protect your network of connected devices from edge to cloud.", icon: FaLock }
  ];

  return (
    <div className="w-full bg-white font-sans animate-fadeIn pt-[90px]">
      {/* Hero Section */}
      <div className="relative bg-[#020b2d] py-32 px-6 overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600" alt="IoT Circuit Board" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020b2d] via-[#020b2d]/90 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:w-[60%] lg:w-1/2">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1]">
            Connected <span className="text-orange-500">IoT Solutions</span>
          </h1>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed font-medium">
            Bridge the gap between physical hardware and digital intelligence. We design, build, and deploy scalable Internet of Things architectures that empower your business with real-time data and automated control.
          </p>
          <button className="bg-[#00c2ff] hover:bg-[#00a0d6] text-white font-bold py-4 px-8 rounded-full transition-all flex items-center gap-2 w-fit">
            Consult IoT Experts <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Our IoT <span className="text-[#00c2ff]">Expertise</span></h2>
          <p className="text-slate-500 font-medium text-lg max-w-3xl mx-auto">From sensors to the cloud, we provide end-to-end engineering for connected ecosystems.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((srv, idx) => (
            <div key={idx} className="p-8 rounded-3xl border border-blue-100 bg-white shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group flex items-start gap-6">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex-shrink-0 flex items-center justify-center text-[#00c2ff] group-hover:bg-[#00c2ff] group-hover:text-white transition-colors">
                <srv.icon size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-3 text-slate-900">{srv.title}</h4>
                <p className="text-sm leading-relaxed text-slate-500">{srv.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IoTDevelopment;