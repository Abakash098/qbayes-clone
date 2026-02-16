import React from 'react';
import { FaCheck, FaArrowRight, FaStar } from 'react-icons/fa';

const FutureProofAI = () => {
  
  // Function to handle smooth scroll to the Booking Section
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking-section');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-white font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* ========================================== */}
        {/* LEFT SIDE: IMAGE COMPOSITION WITH BADGES   */}
        {/* ========================================== */}
        <div className="relative group">
          
          {/* Main Image - Robot Hand & Human Hand */}
          <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl transform transition-transform duration-700 hover:scale-[1.01]">
            <img 
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800" 
              alt="AI Technology Handshake" 
              className="w-full h-auto object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>

          {/* FLOAT 1: Happy Customers Badge (Top Left) */}
          <div className="absolute top-8 left-0 lg:-left-10 z-20 bg-white p-4 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] flex items-center gap-4 animate-float">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <img key={i} className="w-10 h-10 rounded-full border-2 border-white" src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
              ))}
            </div>
            <div>
              <div className="flex text-yellow-400 text-xs mb-1">
                <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
              </div>
              <span className="text-sm font-bold text-gray-800">Happy Customers</span>
            </div>
          </div>

          {/* FLOAT 2: Successful Projects Badge (Bottom Right) */}
          <div className="absolute bottom-8 right-0 lg:-right-6 z-20 bg-white p-4 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] flex flex-col items-center gap-2 animate-float-delayed border-l-4 border-[#00c2ff]">
             <img 
               src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=150" 
               alt="Graph" 
               className="w-24 h-16 object-cover rounded-lg"
             />
             <span className="text-sm font-bold text-gray-900">20+ Successful Projects</span>
          </div>

          {/* Background Blue Blob (Decoration) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50 rounded-full blur-3xl -z-10 opacity-70"></div>
        </div>

        {/* ========================================== */}
        {/* RIGHT SIDE: TEXT CONTENT                   */}
        {/* ========================================== */}
        <div className="lg:pl-10">
          <h4 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">LET'S TALK AI</h4>
          
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-[1.1] mb-6">
            Future-Proof Your <br/>
            Business With Our <br/>
            <span className="text-[#00c2ff]">Intelligent AI Tech</span>
          </h2>
          
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            Take advantage of our complete range of AI services, built to drive tangible business impact. Our robust AI systems are designed using industry best practices to streamline your business operations, strengthen customer loyalty, unlock new capabilities, and create opportunities in untapped markets.
          </p>

          {/* Checklist Grid */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2 mb-10">
            {[
              "AI service solutions", 
              "AI development", 
              "AI chatbot development", 
              "Generative AI consulting"
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs shrink-0">
                  <FaCheck />
                </div>
                <span className="text-gray-800 font-bold text-lg">{item}</span>
              </li>
            ))}
          </ul>

          {/* Call To Action Button */}
          <button 
            onClick={scrollToBooking}
            className="bg-[#00c2ff] hover:bg-[#00a0d6] text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg shadow-blue-400/30 transition-all flex items-center gap-3 group transform hover:-translate-y-1"
          >
            Explore AI Tech With Us 
            <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>

      {/* CSS Animations for Floating Badges */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 5s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default FutureProofAI;