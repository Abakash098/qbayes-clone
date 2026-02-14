import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Portfolio = () => {
  // Data extracted directly from your screenshots
  const cases = [
    {
      title: "Boosting Organic Growth for a Pet Brand with Smart SEO Strategies",
      image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=800", // Dog image
      category: "SEO Strategy"
    },
    {
      title: "Swing, Score, Scale: BlueTees Golf's Mobile App Journey",
      image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&q=80&w=800", // Golf
      category: "Mobile App"
    },
    {
      title: "Crafting A Dynamic Digital Platform To Boost Sales For An FMCG Brand",
      image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=800", // Retail/Sales
      category: "E-Commerce"
    },
    {
      title: "Revolutionizing Mental Healthcare Through Seamless Digital Transformation",
      image: "https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?auto=format&fit=crop&q=80&w=800", // Counseling
      category: "Healthcare"
    },
    {
      title: "Elevating LuvLap's Ecommerce Presence With Strategic Shopify Development",
      image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=800", // Baby/Stroller
      category: "Shopify Dev"
    },
    {
      title: "A Dynamic Pay-Per-Click Marketing Campaign for a Waste Management Company",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800", // Truck/Waste
      category: "Digital Marketing"
    }
  ];

  return (
    <div className="w-full bg-gradient-to-r from-[#081226] to-[#0b1c38] py-24 overflow-hidden relative">
      
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        
        {/* --- LEFT SIDE: STATIC CONTENT --- */}
        <div className="lg:w-1/3 z-10">
          <h4 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
            CASE STUDIES
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Dive Into <br />
            Webskitters <br />
            <span className="text-[#4a90e2]">Remarkable Portfolio</span>
          </h2>
          
          <button className="bg-[#4a90e2] text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/30">
            View All Case Studies <FaArrowRight />
          </button>
        </div>

        {/* --- RIGHT SIDE: MOVING SLIDER --- */}
        <div className="lg:w-2/3 w-full overflow-hidden relative">
          {/* Gradient Overlays to fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-[#0b1c38] to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-[#0b1c38] to-transparent z-10"></div>

          {/* The Sliding Track */}
          <div className="flex animate-scroll hover:pause">
            
            {/* Set 1 */}
            <div className="flex gap-6 pr-6">
              {cases.map((item, index) => (
                <Card key={index} item={item} />
              ))}
            </div>

            {/* Set 2 (Duplicate for Seamless Loop) */}
            <div className="flex gap-6 pr-6">
              {cases.map((item, index) => (
                <Card key={`dup-${index}`} item={item} />
              ))}
            </div>

          </div>
        </div>

      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } /* Moves half total width */
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
          width: max-content;
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

// --- Single Card Component ---
const Card = ({ item }) => (
  <div className="w-[350px] md:w-[400px] h-[450px] bg-[#112240] rounded-3xl overflow-hidden flex-shrink-0 group cursor-pointer border border-white/5 hover:border-[#4a90e2]/50 transition-all">
    {/* Image Section */}
    <div className="h-[60%] w-full overflow-hidden">
      <img 
        src={item.image} 
        alt={item.title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
    </div>
    
    {/* Content Section */}
    <div className="h-[40%] p-6 flex flex-col justify-between relative">
      <div>
         <p className="text-xs text-orange-500 font-bold mb-2 uppercase tracking-wide">{item.category}</p>
         <h3 className="text-white font-bold text-lg leading-snug line-clamp-3">
           {item.title}
         </h3>
      </div>
      
      {/* Circle Arrow Button */}
      <div className="w-10 h-10 rounded-full bg-[#4a90e2] flex items-center justify-center text-white absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
        <FaArrowRight size={14} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300"/>
      </div>
    </div>
  </div>
);

export default Portfolio;