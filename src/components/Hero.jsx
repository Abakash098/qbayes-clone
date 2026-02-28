import React from 'react';
import { FaArrowRight, FaShieldAlt, FaLeaf, FaMicrochip, FaLightbulb, FaChevronRight } from 'react-icons/fa';

const Hero = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking-section');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.location.href = "/#booking-section"; 
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center pt-28 lg:pt-32 pb-16 bg-[#FAFAFC] overflow-hidden font-sans">
      
      {/* --- PREMIUM AMBIENT BACKGROUND --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.3]" 
             style={{ backgroundImage: 'linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>
        {/* Glowing Orbs */}
        <div className="absolute top-[-15%] right-[-5%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-300/30 to-indigo-300/30 blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-blue-200/30 to-purple-200/30 blur-[100px] animate-pulse-slow delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10 w-full">
        
        {/* --- LEFT SIDE: TIGHTENED & REFINED CONTENT --- */}
        <div className="lg:col-span-7 flex flex-col items-start z-20 pt-8 lg:pt-0">
          
          {/* Tagline Badge - Made smaller and sleeker */}
          <div className="animate-fade-in-up flex items-center gap-2 px-4 py-2 bg-white border border-purple-100 rounded-full shadow-sm mb-8 inline-flex">
             <span className="flex items-center justify-center w-5 h-5 bg-amber-100 text-amber-600 rounded-full">
               <FaLightbulb size={10} />
             </span>
             <span className="text-[11px] font-black text-slate-600 tracking-[0.2em] uppercase">
               Intelligence in Solutions
             </span>
          </div>

          {/* Headline - Improved line height and gradient */}
          <h1 className="text-[3.5rem] sm:text-6xl lg:text-[5rem] font-extrabold text-slate-900 mb-6 leading-[1.05] tracking-tight animate-fade-in-up delay-100">
            Who we <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-600">
              are?
            </span>
          </h1>
          
          {/* Editorial Text - Tightened spacing and improved border accent */}
          <div className="relative pl-6 border-l-4 border-purple-500/60 animate-fade-in-up delay-200 mb-10 max-w-2xl">
            <p className="text-slate-700 text-[16px] sm:text-lg leading-relaxed mb-4">
              <strong className="text-slate-900 font-extrabold">QBAYES LLP</strong> is incorporated pursuant to the Limited Liability Partnership Act 2008. We aim to innovate and provide intelligent solutions that achieve effortless efficiency and performance, no matter the complexity of the task.
            </p>
            <p className="text-slate-500 text-[15px] sm:text-base leading-relaxed">
              In an era driven by smart execution, we are equipped with the skills and resources to help you build smooth, hassle-free, user-centric, and intelligent digital products.
            </p>
          </div>

          {/* Action Buttons - Modernized */}
          <div className="animate-fade-in-up delay-300 w-full sm:w-auto flex flex-col sm:flex-row items-center gap-4">
            <button 
              onClick={scrollToBooking}
              className="relative group overflow-hidden w-full sm:w-auto px-8 py-4 bg-slate-900 rounded-full font-bold text-base text-white transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(79,70,229,0.5)] flex items-center justify-center gap-3"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">Partner With Us Today</span>
              <FaArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </button>
            
            {/* Added a secondary "Learn More" style button for balance */}
            <button 
              onClick={() => document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-6 py-4 rounded-full font-bold text-slate-600 hover:text-purple-700 hover:bg-purple-50 transition-colors flex items-center justify-center gap-2 group"
            >
              Explore Services <FaChevronRight className="text-[12px] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
        </div>

        {/* --- RIGHT SIDE: COMPACT PREMIUM IMAGE --- */}
        <div className="lg:col-span-5 relative animate-fade-in-up delay-200 mt-10 lg:mt-0">
          
          <div className="relative rounded-[2rem] overflow-hidden bg-white shadow-2xl shadow-indigo-900/10 ring-1 ring-slate-200/50 group z-10 mx-auto max-w-[500px]">
             <img 
               src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000" 
               alt="QBayes Global Innovation" 
               className="w-full h-[450px] lg:h-[550px] object-cover transition-transform duration-[2000ms] group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
             
             {/* Info Card inside Image - Compacted */}
             <div className="absolute bottom-6 left-6 right-6">
               <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl">
                 <div className="flex items-start gap-4">
                   <div className="p-3 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl shadow-inner mt-1">
                      <FaLeaf className="text-lg text-white" />
                   </div>
                   <div>
                     <h3 className="text-white font-bold text-base mb-1">Global Commitment</h3>
                     <p className="text-slate-200 text-xs leading-relaxed font-medium">
                       Committed to the development of society and the environment globally, governing daily lives in a healthy and systematic manner.
                     </p>
                   </div>
                 </div>
               </div>
             </div>
          </div>

          {/* Floating UI Element (Tech Accent) - Adjusted position */}
          <div className="hidden sm:flex absolute top-10 -left-12 bg-white p-4 rounded-2xl shadow-xl shadow-purple-900/5 border border-slate-100 items-center gap-3 z-20 animate-bounce-slow">
             <div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center text-purple-600">
               <FaMicrochip size={18} />
             </div>
             <div>
               <p className="text-slate-900 font-extrabold text-xs">Smart Execution</p>
               <p className="text-slate-500 text-[10px] font-medium">Next-Gen Architecture</p>
             </div>
          </div>
          
          {/* REGISTRATION BADGE - Adjusted position */}
          <div className="absolute -bottom-5 -right-2 sm:-right-6 px-4 py-2 bg-white border border-purple-100 rounded-xl shadow-lg z-30 animate-fade-in-up flex items-center gap-2">
            <FaShieldAlt className="text-purple-600" size={14} />
            <span className="text-slate-700 font-bold text-[11px]">LLP ID: <span className="text-purple-700">ACV-5906</span></span>
          </div>

        </div>

      </div>

      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulseSlow { 0%, 100% { transform: scale(1); opacity: 0.8; } 50% { transform: scale(1.05); opacity: 0.5; } }
        @keyframes bounceSlow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .animate-fade-in-up { animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
        .animate-pulse-slow { animation: pulseSlow 8s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounceSlow 5s ease-in-out infinite; }
        .delay-100 { animation-delay: 0.1s; } .delay-200 { animation-delay: 0.2s; } .delay-300 { animation-delay: 0.3s; } .delay-1000 { animation-delay: 1s; }
      `}</style>
    </section>
  );
};

export default Hero;