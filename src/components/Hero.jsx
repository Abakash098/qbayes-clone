import React, { useState } from 'react';
import { FaArrowRight, FaPlay, FaTimes, FaChartLine } from 'react-icons/fa';

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  // --- HELPER: Smooth scroll to the booking section ---
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.location.href = "/#booking"; 
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center pt-24 pb-12 bg-white overflow-hidden font-sans">
      
      {/* --- PROFESSIONAL ANIMATIONS --- */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-up-1 { animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards; opacity: 0; }
        .animate-fade-up-2 { animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards; opacity: 0; }
        .animate-fade-up-3 { animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.5s forwards; opacity: 0; }
        .animate-fade-up-4 { animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.7s forwards; opacity: 0; }

        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float-slow {
          animation: floatSlow 7s ease-in-out infinite;
        }
      `}</style>

      {/* --- SUBTLE GRID BACKGROUND --- */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', 
            backgroundSize: '48px 48px' 
          }}
        ></div>
      </div>

      {/* --- BRAND COLOR BLOBS (Kept exactly as requested) --- */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-100 rounded-full blur-[120px] opacity-60 -translate-y-1/2 translate-x-1/3 mix-blend-multiply pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-50 rounded-full blur-[120px] opacity-60 translate-y-1/3 -translate-x-1/3 mix-blend-multiply pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        
        {/* --- LEFT SIDE: TEXT CONTENT --- */}
        <div className="flex flex-col items-start z-20">
          
          {/* Badge */}
          <div className="animate-fade-up-1 px-5 py-2 inline-flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full text-slate-700 font-semibold text-xs sm:text-sm mb-8 uppercase tracking-widest shadow-sm">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span> 
            Accelerating Digital Transformation
          </div>
          
          {/* HEADLINE */}
          <h1 className="animate-fade-up-2 text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-6 leading-[1.1] tracking-tight">
            Empower Your Enterprise
            <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 pb-2 inline-block mt-2">
               With Intelligent AI
            </span>
          </h1>
          
          {/* PARAGRAPH */}
          <p className="animate-fade-up-3 text-slate-500 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl font-medium">
            QBayes delivers cutting-edge AI solutions, seamless IT infrastructure, and data-driven strategies to automate workflows and secure your competitive advantage.
          </p>

          {/* BUTTONS */}
          <div className="animate-fade-up-4 flex flex-col sm:flex-row w-full sm:w-auto gap-5">
            <button 
              onClick={scrollToBooking}
              className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-purple-700/20 transition-all flex items-center justify-center gap-3 group"
            >
              Partner With Us
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
              onClick={() => setShowVideo(true)}
              className="bg-white border border-slate-200 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600 text-slate-700 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-3 group"
            >
              <div className="w-10 h-10 bg-slate-50 group-hover:bg-orange-100 rounded-full flex items-center justify-center text-sm transition-colors shadow-sm">
                <FaPlay className="text-orange-500 ml-1" />
              </div>
              See How It Works
            </button>
          </div>
        </div>

        {/* --- RIGHT SIDE: HERO IMAGE --- */}
        <div className="relative hidden lg:block animate-fade-up-2 z-10">
          <div className="relative rounded-[2rem] overflow-hidden border border-slate-100 shadow-2xl bg-white p-2">
             <img 
               src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" 
               alt="QBayes Enterprise Dashboard" 
               className="rounded-[1.5rem] w-full h-auto object-cover"
             />
             
             {/* Floating Stats Card */}
             <div className="animate-float-slow absolute -bottom-8 -left-8 bg-white/95 backdrop-blur-xl p-6 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100 flex items-center gap-5 z-20">
               <div className="w-14 h-14 bg-purple-50 rounded-full flex items-center justify-center text-purple-600 shadow-inner">
                 <FaChartLine size={24} />
               </div>
               <div>
                 <p className="text-slate-400 text-[11px] font-bold uppercase tracking-widest mb-1">Guaranteed Results</p>
                 <p className="text-slate-900 font-extrabold text-xl leading-none">98% Client Success</p>
               </div>
             </div>
          </div>
          
          {/* Decorative Behind-Image Elements */}
          <div className="absolute -top-6 -right-6 w-full h-full border border-slate-200 rounded-[2.5rem] -z-10"></div>
          <div className="absolute top-1/2 left-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-purple-100/30 to-orange-50/30 rounded-full blur-3xl -z-20 -translate-x-1/2 -translate-y-1/2"></div>
        </div>

      </div>

      {/* --- VIDEO MODAL POPUP --- */}
      {showVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/95 backdrop-blur-md p-4 animate-fade-up-1">
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <button 
              onClick={() => setShowVideo(false)}
              className="absolute top-6 right-6 z-10 bg-white/10 hover:bg-white/30 text-white p-3 rounded-full transition-all backdrop-blur-md"
              aria-label="Close video"
            >
              <FaTimes size={20} />
            </button>
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1&rel=0" 
              title="QBayes Innovation Video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

    </section>
  );
};

export default Hero;