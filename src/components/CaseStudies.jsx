import React, { useEffect, useRef } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const CaseStudies = () => {
  const scrollRef = useRef(null);

  const projects = [
    { 
      id: 1, 
      title: 'Revolutionizing Mental Healthcare Through Seamless Digital Transformation', 
      category: 'Healthcare', 
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80' 
    },
    { 
      id: 2, 
      title: 'Embrace the Extraordinary Automotive Website Design for Mercedes', 
      category: 'Automotive', 
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80' 
    },
    // --- REMOVED THE E-COMMERCE PROJECT FROM HERE ---
    { 
      id: 4, 
      title: 'AI-Powered FinTech Solutions for Modern Banking', 
      category: 'FinTech', 
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80' 
    },
    // --- DUPLICATES FOR INFINITE SCROLL ---
    { 
      id: 5, 
      title: 'Revolutionizing Mental Healthcare Through Seamless Digital Transformation', 
      category: 'Healthcare', 
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80' 
    },
    { 
      id: 6, 
      title: 'Embrace the Extraordinary Automotive Website Design for Mercedes', 
      category: 'Automotive', 
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80' 
    },
    // --- REMOVED THE E-COMMERCE DUPLICATE FROM HERE TOO ---
  ];

  // --- AUTO SCROLL LOGIC ---
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;
    const speed = 1; // Speed of the auto-scroll

    const scrollInterval = setInterval(() => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += speed;
        scrollAmount += speed;

        // Infinite Scroll Reset: If we've scrolled past the first set of items, snap back
        if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth / 2)) {
           scrollContainer.scrollLeft = 0;
        }
      }
    }, 20); 

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section className="py-24 bg-[#0b1c38] font-sans relative overflow-hidden">
      
      {/* Background Grid Decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="h-full w-full" 
             style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* --- LEFT SIDE: TEXT CONTENT --- */}
        <div className="lg:col-span-4">
          <h4 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">CASE STUDIES</h4>
          
          <h2 className="text-5xl font-extrabold text-white leading-tight mb-8">
            Dive Into <br/>
            QBayes <br/>
            <span className="text-[#00c2ff]">Remarkable Portfolio</span>
          </h2>
          
          <button className="bg-[#00c2ff] hover:bg-[#00a0d6] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-blue-500/30 transition-all flex items-center gap-2 group w-fit">
            View All Case Studies 
            <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* --- RIGHT SIDE: AUTO-SCROLLING SLIDER --- */}
        <div 
          ref={scrollRef}
          className="lg:col-span-8 flex gap-8 overflow-x-hidden pb-8 whitespace-nowrap"
        >
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="min-w-[350px] md:min-w-[400px] bg-[#102a52] rounded-3xl overflow-hidden shadow-2xl border border-white/5 hover:border-[#00c2ff]/50 transition-all duration-300 group inline-block whitespace-normal cursor-pointer"
            >
              {/* Card Image */}
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  {project.category}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8 relative">
                <h3 className="text-xl font-bold text-white leading-snug mb-6 group-hover:text-[#00c2ff] transition-colors line-clamp-2">
                  {project.title}
                </h3>
                
                {/* Arrow Button Circle */}
                <div className="w-12 h-12 rounded-full bg-[#00c2ff] flex items-center justify-center text-white shadow-lg shadow-blue-500/40 transform group-hover:scale-110 transition-transform">
                  <FaArrowRight className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CaseStudies;