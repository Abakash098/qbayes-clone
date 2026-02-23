import React, { useState } from 'react'; // Added useState
import { FaCheckCircle, FaArrowRight, FaPlay, FaMagic, FaImage, FaVideo, FaCode } from 'react-icons/fa';
import HireUsModal from './HireUsModal'; // Ensure this path matches your folder structure!

const GenAIDevelopment = () => {
  // 1. State to control the Hire Us popup
  const [isModalOpen, setIsModalOpen] = useState(false);

  const capabilities = [
    { title: "Synthetic Content", text: "Generate high-quality text and documentation automatically.", icon: FaMagic },
    { title: "Image Generation", text: "Create custom visuals and marketing assets with DALL-E and Midjourney.", icon: FaImage },
    { title: "Video Synthesis", text: "Transform scripts into realistic video content effortlessly.", icon: FaVideo },
    { title: "Automated Coding", text: "Accelerate software development with AI-driven code generation.", icon: FaCode }
  ];

  return (
    <div className="w-full bg-white animate-fadeIn font-sans relative">
      
      {/* --- BRANDED HERO OPENING --- */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-200 rounded-full text-purple-700 font-bold text-sm mb-10 uppercase tracking-wider shadow-sm">
              🚀 Accelerating Digital Transformation
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 leading-[0.95] tracking-tighter">
              Innovate with <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-600">
                Intelligence
              </span>
            </h1>
            
            <p className="text-slate-500 text-xl mb-12 leading-relaxed font-medium max-w-xl">
              Harness the power of Creative AI to generate high-fidelity images, text, and code that redefines your business operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
               {/* 2. Added onClick event here */}
               <button 
                 onClick={() => setIsModalOpen(true)}
                 className="bg-purple-700 text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl shadow-purple-200 hover:bg-slate-900 transition-all flex items-center justify-center gap-2 group cursor-pointer"
               >
                 Launch GenAI Project <FaArrowRight className="group-hover:translate-x-1 transition-transform"/>
               </button>
               
               <button className="border-2 border-slate-100 text-slate-800 px-10 py-5 rounded-full font-bold text-lg flex items-center gap-4 justify-center hover:bg-slate-50 transition-all">
                 <div className="w-10 h-10 bg-purple-700 text-white rounded-full flex items-center justify-center">
                   <FaPlay className="ml-1 text-[10px]"/>
                 </div>
                 Watch Possibilities
               </button>
            </div>
          </div>

          {/* Right Visual Image */}
          <div className="relative group">
            <div className="relative rounded-[3.5rem] overflow-hidden border-[12px] border-slate-50 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
              <img 
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200" 
                alt="Generative AI Neural Network" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent"></div>
            </div>
            <div className="absolute -top-12 -right-12 w-48 h-48 border-2 border-purple-100 rounded-full -z-10 animate-pulse"></div>
          </div>
        </div>
      </div>
      
      

      {/* Capabilities Grid */}
      <div className="max-w-7xl mx-auto px-6 py-24 border-t border-slate-100 bg-slate-50/50">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-4">Our Creative Ecosystem</h2>
          <p className="text-slate-500 font-medium">We build custom Generative AI pipelines for industry leaders.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 hover:border-purple-200 hover:shadow-2xl transition-all group">
               <div className="w-16 h-16 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <item.icon size={28}/>
               </div>
               <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
               <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. The Modal Component rendered at the bottom */}
      <HireUsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </div>
  );
};

export default GenAIDevelopment;