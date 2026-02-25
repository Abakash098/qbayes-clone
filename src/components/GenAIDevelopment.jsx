import React, { useState, useEffect } from 'react'; 
import { FaCheckCircle, FaArrowRight, FaPlay, FaMagic, FaImage, FaVideo, FaCode, FaBrain } from 'react-icons/fa';
import HireUsModal from './HireUsModal'; 

const GenAIDevelopment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Smooth scroll to your global booking/contact section
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking-section');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const capabilities = [
    { title: "Synthetic Content", text: "Generate high-quality text, reports, and documentation automatically at scale.", icon: FaMagic },
    { title: "Image Generation", text: "Create hyper-realistic custom visuals and marketing assets with advanced diffusion models.", icon: FaImage },
    { title: "Video Synthesis", text: "Transform text scripts into realistic, studio-quality video content effortlessly.", icon: FaVideo },
    { title: "Automated Coding", text: "Accelerate software development lifecycles with AI-driven code generation and debugging.", icon: FaCode }
  ];

  return (
    <div className="w-full bg-white animate-fadeIn font-sans relative selection:bg-purple-100">
      
      {/* --- BRANDED HERO OPENING --- */}
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-100 rounded-full text-purple-700 font-bold text-[10px] md:text-xs mb-8 uppercase tracking-[0.2em] shadow-sm">
              <FaBrain className="animate-pulse" />
              Next-Gen Generative AI
            </div>
            
            {/* Updated Typography: Tighter tracking, adjusted line-height, dynamic sizing */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 mb-8 leading-[0.9] tracking-tighter">
              Create with <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-fuchsia-600 to-blue-600">
                Limitless Scale
              </span>
            </h1>
            
            {/* Updated Typography: Medium weight, slate-500, relaxed line-height */}
            <p className="text-lg md:text-xl text-slate-500 mb-12 leading-relaxed font-medium max-w-xl">
              Harness the power of foundational models to generate high-fidelity images, text, and code that redefines your enterprise operations and creative output.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
               <button 
                 onClick={() => setIsModalOpen(true)}
                 className="bg-purple-700 text-white px-8 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-purple-200 hover:bg-slate-900 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 group cursor-pointer"
               >
                 Launch GenAI Project <FaArrowRight className="group-hover:translate-x-1 transition-transform"/>
               </button>
               
               <button 
                 onClick={scrollToBooking}
                 className="border-2 border-slate-100 text-slate-800 px-8 py-5 rounded-2xl font-bold text-lg flex items-center gap-4 justify-center hover:bg-slate-50 transition-all"
               >
                 Discuss Feasibility
               </button>
            </div>
          </div>

          {/* Right Visual Image */}
          <div className="order-1 lg:order-2 relative group perspective-1000">
            <div className="relative rounded-[2.5rem] md:rounded-[4rem] overflow-hidden border-[8px] md:border-[16px] border-slate-50 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02] group-hover:rotate-y-2">
              <img 
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200" 
                alt="Generative AI Neural Network" 
                className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-transparent"></div>
            </div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
          </div>
        </div>
      </div>
      
      

      {/* Capabilities Grid */}
      <div className="bg-slate-50 py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Our Creative Ecosystem</h2>
            <p className="text-slate-500 text-lg font-medium max-w-2xl mx-auto">
              We build custom Generative AI pipelines tailored for industry leaders, ensuring brand consistency and enterprise-level security.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-[2rem] border border-slate-100 hover:border-purple-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                 <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-purple-600 mb-8 group-hover:bg-gradient-to-br group-hover:from-purple-600 group-hover:to-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    <item.icon size={28}/>
                 </div>
                 {/* Updated Grid Typography */}
                 <h4 className="text-xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-purple-700 transition-colors">{item.title}</h4>
                 <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. The Modal Component rendered at the bottom */}
      <HireUsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </div>
  );
};

export default GenAIDevelopment;