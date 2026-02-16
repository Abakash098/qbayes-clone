import React, { useState } from 'react';
import { FaArrowRight, FaPlay, FaTimes } from 'react-icons/fa';

const Hero = () => {
  // State to manage the video modal visibility
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative w-full min-h-screen flex items-center pt-20 bg-[#0b1c38] overflow-hidden">
      
      {/* --- BACKGROUND DECORATION --- */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', 
            backgroundSize: '50px 50px' 
          }}
        ></div>
      </div>

      {/* Glowing Blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[150px] opacity-20 translate-y-1/3 -translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* --- LEFT SIDE: TEXT CONTENT --- */}
        <div>
          <div className="inline-block px-4 py-2 bg-blue-900/50 border border-blue-500/30 rounded-full text-blue-300 font-bold text-sm mb-6 uppercase tracking-wider backdrop-blur-sm">
            🚀 Accelerating Digital Transformation
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6">
            Innovate with <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c2ff] to-blue-500">
              Intelligence
            </span>
          </h1>
          
          <p className="text-blue-100 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            QBayes empowers enterprises with cutting-edge AI, seamless IT solutions, and data-driven strategies to build a future-proof business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#00c2ff] hover:bg-[#00a0d6] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-blue-500/30 transition-all flex items-center justify-center gap-2 group">
              Get Started 
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            {/* WATCH VIDEO BUTTON - Triggers Modal */}
            <button 
              onClick={() => setShowVideo(true)}
              className="border border-blue-400/50 hover:bg-blue-900/30 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-3"
            >
              <div className="w-8 h-8 bg-white text-blue-900 rounded-full flex items-center justify-center text-xs pl-0.5 animate-pulse">
                <FaPlay />
              </div>
              Watch Video
            </button>
          </div>
        </div>

        {/* --- RIGHT SIDE: HERO IMAGE --- */}
        <div className="relative hidden lg:block">
          <div className="relative z-10 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-blue-900/20 backdrop-blur-sm p-4">
             <img 
               src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" 
               alt="Analytics Dashboard" 
               className="rounded-[2.5rem] w-full h-auto object-cover shadow-inner"
             />
             <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl animate-bounce-slow">
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-xl">
                   98%
                 </div>
                 <div>
                   <p className="text-gray-500 text-xs font-bold uppercase">Client Satisfaction</p>
                   <p className="text-gray-900 font-bold text-lg">Guaranteed Results</p>
                 </div>
               </div>
             </div>
          </div>
          <div className="absolute -top-10 -right-10 w-full h-full border-2 border-[#00c2ff]/30 rounded-[3rem] -z-10"></div>
        </div>

      </div>

      {/* --- VIDEO MODAL POPUP --- */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fade-in">
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/20">
            
            {/* Close Button */}
            <button 
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-red-600 text-white p-2 rounded-full transition-all duration-300"
            >
              <FaTimes size={24} />
            </button>

            {/* YouTube Embed (Innovation/Tech Video) */}
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