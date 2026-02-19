import React from 'react';
import { FaMobileAlt, FaArrowRight, FaApple, FaAndroid, FaReact } from 'react-icons/fa';

const MobileAppDevelopment = () => {
  const platforms = [
    { title: "iOS Development", desc: "Native iOS applications built with Swift and Objective-C for unparalleled performance on Apple devices.", icon: FaApple },
    { title: "Android Development", desc: "Robust and secure native Android apps utilizing Kotlin and Java to reach billions of users.", icon: FaAndroid },
    { title: "Cross-Platform (Hybrid)", desc: "Cost-effective, write-once-run-anywhere applications using React Native and Flutter.", icon: FaReact },
    { title: "Enterprise Mobility", desc: "Secure, scalable mobile solutions designed specifically to optimize your internal business operations.", icon: FaMobileAlt }
  ];

  return (
    <div className="w-full bg-white font-sans animate-fadeIn pt-[90px]">
      {/* Hero */}
      <div className="relative bg-[#020b2d] py-32 px-6 overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1600" alt="Mobile App Development" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020b2d] via-[#020b2d]/90 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:w-[60%]">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1]">
            Next-Gen <span className="text-orange-500">Mobile Apps</span>
          </h1>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed font-medium">
            Transform your vision into a stunning mobile experience. We build high-performance, user-centric native and hybrid mobile applications for iOS and Android that dominate the app stores.
          </p>
          <button className="bg-[#00c2ff] hover:bg-[#00a0d6] text-white font-bold py-4 px-8 rounded-full transition-all flex items-center gap-2 w-fit">
            Start Your App <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Mobile App <span className="text-[#00c2ff]">Expertise</span></h2>
          <p className="text-slate-500 font-medium text-lg max-w-3xl mx-auto">Whether you need native performance or cross-platform efficiency, our engineering team delivers.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((plat, idx) => (
            <div key={idx} className="p-8 rounded-[2rem] border border-slate-100 bg-white hover:shadow-2xl hover:border-[#00c2ff]/30 transition-all duration-300 group">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-[#00c2ff] group-hover:bg-[#00c2ff] group-hover:text-white transition-colors">
                <plat.icon size={28} />
              </div>
              <h4 className="text-xl font-bold mb-3 text-slate-900">{plat.title}</h4>
              <p className="text-sm leading-relaxed text-slate-500">{plat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileAppDevelopment;