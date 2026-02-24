import React from 'react';
import { FaBuilding, FaLightbulb, FaGlobe, FaCogs } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="w-full bg-white font-sans pt-24 pb-12 overflow-hidden">
      
      {/* --- ANIMATIONS --- */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
      `}</style>

      {/* --- HERO SECTION (Based on your design) --- */}
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Text Content */}
        <div className="flex flex-col items-start z-10 opacity-0 animate-fade-up">
          {/* Badge */}
          <div className="px-4 py-2 inline-flex items-center gap-2 bg-purple-50 border border-purple-100 rounded-full text-purple-700 font-bold text-xs uppercase tracking-widest mb-8">
            <span className="text-orange-500">🚀</span> Accelerating Digital Transformation
          </div>
          
          {/* Headline */}
          <h1 className="text-6xl md:text-7xl font-black text-slate-900 mb-6 leading-[1.05] tracking-tight">
            Innovate
            <br />
            with
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
              Intelligence
            </span>
          </h1>
          
          {/* Sub-headline */}
          <p className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-lg font-medium">
            Building the core of your digital future with data-driven AI ecosystems and specialized IT consultancy.
          </p>
        </div>

        {/* Right: Hero Image */}
        <div className="relative z-10 opacity-0 animate-fade-up delay-200">
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100 bg-white p-2">
             <img 
               src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
               alt="QBayes Team Collaborating" 
               className="rounded-[1.5rem] w-full h-auto object-cover"
             />
          </div>
          {/* Decorative Blobs */}
          <div className="absolute top-1/2 left-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-purple-100/40 to-blue-50/40 rounded-full blur-3xl -z-10 -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>

      {/* --- CORPORATE IDENTITY SECTION --- */}
      <div className="bg-slate-50 py-20 border-y border-slate-100 mt-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 opacity-0 animate-fade-up delay-100">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Who We Are</h2>
              <div className="w-20 h-1.5 bg-orange-500 mb-8 rounded-full"></div>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 text-purple-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaBuilding size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Official Registration</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    <strong>QBAYES LLP</strong> (LLP Identification Number: ACV-5906) is incorporated pursuant to section 12(1) of the Limited Liability Partnership Act 2008, Ministry of Corporate Affairs, Government of India.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 opacity-0 animate-fade-up delay-200">
              <p className="text-xl md:text-2xl text-slate-700 font-medium leading-relaxed mb-6">
                "We aim to innovate and provide intelligent solutions that can achieve an ease of efficiency and performance no matter the complexity of the concerned task(s)."
              </p>
              <p className="text-slate-500 text-lg leading-relaxed">
                In times where the quest for smart execution of different applications is being heavily pursued, QBayes is equipped with the necessary skills, deep industry knowledge, and advanced resources to help your enterprise thrive.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- CORE PILLARS SECTION --- */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16 opacity-0 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Commitment</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">The principles and goals that drive every line of code we write and every solution we build.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Pillar 1 */}
          <div className="bg-white border border-slate-100 p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-300 opacity-0 animate-fade-up delay-100">
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-2xl mb-6">
              <FaLightbulb />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Smart Execution</h3>
            <p className="text-slate-600 leading-relaxed">
              We are dedicated to building smooth, hassle-free, user-friendly, and harmless intelligent products that solve complex real-world problems.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white border border-slate-100 p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-300 opacity-0 animate-fade-up delay-200">
            <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center text-2xl mb-6">
              <FaCogs />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Unmatched Efficiency</h3>
            <p className="text-slate-600 leading-relaxed">
              Our engineering team ensures peak performance and scalable architecture, allowing your business to operate effortlessly regardless of task complexity.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white border border-slate-100 p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-300 opacity-0 animate-fade-up delay-300">
            <div className="w-14 h-14 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center text-2xl mb-6">
              <FaGlobe />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Global Impact</h3>
            <p className="text-slate-600 leading-relaxed">
              Furthermore, we are committed to the development of society and the environment globally, which we believe governs daily lives in a healthy and systematic manner.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default AboutUs;