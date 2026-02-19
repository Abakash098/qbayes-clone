import React, { useState } from 'react';
import { FaArrowRight, FaPlay, FaTimes } from 'react-icons/fa';

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  // --- HELPER: Splits text into animated words ---
  const WordReveal = ({ text, delayStart = 0, className = "" }) => {
    return text.split(" ").map((word, index) => (
      <span
        key={index}
        className={`inline-block opacity-0 animate-reveal ${className}`}
        style={{ animationDelay: `${delayStart + (index * 0.1)}s`, marginRight: '0.25em' }}
      >
        {word}
      </span>
    ));
  };

  return (
    <section className="relative w-full min-h-screen flex items-center pt-20 bg-white overflow-hidden font-sans">
      
      {/* --- 1. DEFINE ANIMATIONS (Internal CSS) --- */}
      <style>{`
        @keyframes reveal {
          from { opacity: 0; transform: translateY(20px); filter: blur(10px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        
        .animate-reveal {
          animation: reveal 0.8s cubic-bezier(0.2, 0.65, 0.3, 0.9) forwards;
        }

        /* Continuous float animation for the image */
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      {/* --- BACKGROUND DECORATION --- */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', 
            backgroundSize: '50px 50px' 
          }}
        ></div>
      </div>

      {/* Glowing Blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100 rounded-full blur-[120px] opacity-60 -translate-y-1/2 translate-x-1/2 mix-blend-multiply"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100 rounded-full blur-[120px] opacity-60 translate-y-1/3 -translate-x-1/3 mix-blend-multiply"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* --- LEFT SIDE: TEXT CONTENT --- */}
        <div>
          {/* Badge */}
          <div className="opacity-0 animate-reveal px-4 py-2 inline-block bg-purple-50 border border-purple-200 rounded-full text-purple-700 font-bold text-sm mb-8 uppercase tracking-wider shadow-sm">
            🚀 Accelerating Digital Transformation
          </div>
          
          {/* HEADLINE: UPDATED TO USE WordReveal AND PURE BLACK */}
          <h2 className="text-5xl md:text-7xl font-black text-black mb-6 leading-tight flex flex-wrap">
            <WordReveal text="Future-Proof With" delayStart={0.2} />
            <br/>
            <span className="w-full text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-600">
               <WordReveal text="Intelligent AI" delayStart={0.5} />
            </span>
          </h2>
          
          {/* PARAGRAPH: WORD BY WORD ANIMATION */}
          <div className="text-slate-600 text-lg md:text-xl leading-relaxed mb-10 max-w-xl font-medium flex flex-wrap">
            <WordReveal 
              text="QBayes empowers enterprises with cutting-edge AI, seamless IT solutions, and data-driven strategies." 
              delayStart={0.8} 
            />
          </div>

          {/* Buttons (Fade in last) */}
          <div className="opacity-0 animate-reveal flex flex-col sm:flex-row gap-4" style={{ animationDelay: '1.8s' }}>
            <button className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-purple-200 transition-all flex items-center justify-center gap-2 group active:scale-[0.98]">
              Get Started 
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
              onClick={() => setShowVideo(true)}
              className="border border-slate-200 hover:border-purple-300 hover:bg-purple-50 text-slate-700 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
            >
              <div className="w-8 h-8 bg-purple-700 text-white rounded-full flex items-center justify-center text-xs pl-0.5 shadow-md">
                <FaPlay />
              </div>
              Watch Video
            </button>
          </div>
        </div>

        {/* --- RIGHT SIDE: HERO IMAGE (Floating Animation) --- */}
        <div className="relative hidden lg:block opacity-0 animate-reveal" style={{ animationDelay: '1.2s' }}>
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-2xl bg-white p-3 transform transition-transform hover:scale-[1.01] duration-500">
             <img 
               src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" 
               alt="Analytics Dashboard" 
               className="rounded-[2rem] w-full h-auto object-cover"
             />
             
             {/* Floating Stats Card */}
             <div className="animate-float absolute -bottom-8 -left-8 bg-white p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-50 flex items-center gap-4">
               <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center text-green-600 font-bold text-xl border border-green-100">
                 98%
               </div>
               <div>
                 <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Client Satisfaction</p>
                 <p className="text-slate-900 font-bold text-lg">Guaranteed Results</p>
               </div>
             </div>
          </div>
          
          {/* Decorative Backdrops */}
          <div className="absolute -top-8 -right-8 w-full h-full border-2 border-purple-100 rounded-[3rem] -z-10"></div>
          <div className="absolute top-1/2 left-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-purple-100/50 to-blue-50/50 rounded-full blur-3xl -z-20 -translate-x-1/2 -translate-y-1/2"></div>
        </div>

      </div>

      {/* --- VIDEO MODAL POPUP --- */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4 animate-reveal">
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <button 
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-all backdrop-blur-md"
            >
              <FaTimes size={24} />
            </button>
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1&rel=0" 
              title="Innovation Video" 
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