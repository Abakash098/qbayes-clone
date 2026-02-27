import React from 'react';
import { FaArrowRight, FaShieldAlt, FaLeaf, FaMicrochip, FaLightbulb } from 'react-icons/fa';

const Hero = () => {
  // --- HELPER: Smooth scroll to the contact/booking section ---
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking-section');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.location.href = "/#booking-section"; 
    }
  };

  return (
    <section className="relative w-full pt-32 lg:pt-40 pb-16 lg:pb-24 bg-[#FAFAFC] overflow-hidden font-sans">
      
      {/* --- PREMIUM AMBIENT BACKGROUND --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 opacity-[0.4]" 
             style={{ backgroundImage: 'linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full bg-gradient-to-br from-purple-200/40 to-indigo-200/40 blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-blue-200/40 to-purple-200/40 blur-[100px] animate-pulse-slow delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 lg:gap-12 items-center relative z-10">
        
        {/* --- LEFT SIDE: UPGRADED TEXT CONTENT --- */}
        <div className="lg:col-span-7 flex flex-col items-start z-20">
          
          {/* TAGLINE BADGE */}
          <div className="animate-fade-in-up flex items-center gap-3 px-4 py-2 bg-white border border-slate-200 rounded-full shadow-sm mb-6">
            <span className="flex items-center justify-center w-5 h-5 bg-amber-100 text-amber-600 rounded-full">
              <FaLightbulb size={10} />
            </span>
            <span className="text-[10px] sm:text-[12px] font-black text-slate-500 tracking-[0.15em] uppercase">
              Intelligence in Solutions
            </span>
          </div>

          {/* HEADLINE */}
          <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-extrabold text-slate-900 mb-8 leading-[1.05] tracking-tight animate-fade-in-up delay-100">
            who we<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-500">
              are ?
            </span>
          </h1>
          
          {/* PROFESSIONAL EDITORIAL TEXT BLOCK */}
          <div className="relative pl-6 sm:pl-8 border-l-4 border-purple-500 animate-fade-in-up delay-200 mb-10">
            <p className="text-slate-700 text-[15px] sm:text-[17px] leading-relaxed mb-5 text-justify">
              <strong className="text-slate-900 font-extrabold">QBAYES LLP</strong> is incorporated pursuant to section 12(1) of the Limited Liability Partnership Act 2008, Ministry of Corporate Affairs, Government of India. We aim to innovate and provide intelligent solutions that can achieve an ease of efficiency and performance no matter the complexity of the concerned task(s).
            </p>
            
            <p className="text-slate-600 text-[15px] sm:text-[16px] leading-relaxed text-justify">
              In the times where the quest for smart execution of different applications is being pursued, we are equipped with the necessary skills and resources to help you build smooth, hassle free, user-friendly, harmless, intelligent products.
            </p>
          </div>

          {/* --- UPGRADED MEGA CALL TO ACTION BUTTON --- */}
          <div className="animate-fade-in-up delay-300 w-full sm:w-auto">
            <button 
              onClick={scrollToBooking}
              className="relative group overflow-hidden w-full sm:w-auto px-12 py-6 bg-slate-900 rounded-[2rem] font-black text-xl text-white transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_50px_-10px_rgba(79,70,229,0.5)] flex items-center justify-center gap-4"
            >
              {/* Animated Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Shimmer Effect Animation */}
              <div className="absolute inset-0 w-1/2 h-full bg-white/20 -skew-x-[45deg] -translate-x-full group-hover:animate-shimmer pointer-events-none"></div>
              
              <span className="relative z-10 tracking-tight">Partner With Us Today</span>
              <div className="relative z-10 p-2 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                 <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </button>
          </div>
          
        </div>

        {/* --- RIGHT SIDE: PREMIUM HERO IMAGE --- */}
        <div className="lg:col-span-5 relative animate-fade-in-up delay-200">
          
          {/* Image Container */}
          <div className="relative rounded-[2.5rem] overflow-hidden bg-white shadow-2xl shadow-indigo-900/10 ring-1 ring-slate-900/5 group z-10">
             <img 
               src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000" 
               alt="QBayes Global Innovation" 
               className="w-full h-[500px] lg:h-[600px] object-cover transition-transform duration-[2000ms] group-hover:scale-110"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
             
             {/* Bottom Info Card inside Image */}
             <div className="absolute bottom-6 left-6 right-6">
               <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl">
                 <div className="flex items-start gap-4">
                   <div className="p-3 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl shadow-inner mt-1">
                      <FaLeaf className="text-xl text-white" />
                   </div>
                   <div>
                     <h3 className="text-white font-bold text-lg mb-1 flex items-center gap-2">
                       Global Commitment
                     </h3>
                     <p className="text-slate-200 text-sm leading-relaxed font-medium">
                       Committed to the development of society and the environment globally, governing daily lives in a healthy and systematic manner.
                     </p>
                   </div>
                 </div>
               </div>
             </div>
          </div>

          {/* Floating UI Element (Tech Accent) */}
          <div className="absolute -top-8 -right-8 bg-white p-4 rounded-2xl shadow-xl shadow-purple-900/5 border border-slate-100 flex items-center gap-4 z-20 animate-bounce-slow">
             <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center text-purple-600">
               <FaMicrochip size={24} />
             </div>
             <div>
               <p className="text-slate-900 font-extrabold text-sm">Smart Execution</p>
               <p className="text-slate-500 text-xs font-medium">Next-Gen Architecture</p>
             </div>
          </div>
          
          {/* REGISTRATION BADGE */}
          <div className="absolute -bottom-6 -right-6 px-4 py-2 bg-white border border-purple-100 rounded-xl text-slate-700 font-bold text-[10px] shadow-lg z-30 animate-fade-in-up">
            <div className="flex items-center gap-2">
              <FaShieldAlt className="text-purple-600" />
              <span> <span className="text-purple-700"></span></span>
            </div>
          </div>

        </div>

      </div>

      {/* --- COMPONENT LEVEL ANIMATION STYLES --- */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseSlow {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.05); opacity: 0.5; }
        }
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-150%) skewX(-45deg); }
          100% { transform: translateX(250%) skewX(-45deg); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .animate-pulse-slow {
          animation: pulseSlow 8s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounceSlow 5s ease-in-out infinite;
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-1000 { animation-delay: 1s; }
      `}</style>
    </section>
  );
};

export default Hero;