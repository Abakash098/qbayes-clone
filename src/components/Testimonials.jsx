import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  // Data transcribed from your screenshots
  const reviews = [
    {
      name: "Enzo Blumer",
      role: "Founder, Enzee",
      quote: "Highly recommended for app development, they communicate clearly & deliver as required.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Tim Lewis",
      role: "Entrepreneur, Lewis Consulting LLC",
      quote: "Webskitters' professional team solves challenges creatively and supports long-term business growth.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Pinki Patel",
      role: "President, Vasanti Cosmetics",
      quote: "Webskitters boosted traffic, engagement, and sales with a user-friendly, appealing website design.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Ilaria Russo",
      role: "Director, Unigestion",
      quote: "Their focus on data security and client privacy was paramount throughout the project.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Kel Dickson",
      role: "Owner, The Big Giraffe",
      quote: "They knew their stuff, and it was refreshing to be involved with such a good company.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Andrew Ranck",
      role: "IT Developer, Professional Staffing",
      quote: "Their industry expertise, hands-on approach, and dedication to excellence set them apart.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200"
    }
  ];

  return (
    <div className="w-full bg-[#f8f9fa] py-24 overflow-hidden">
      
      {/* --- HEADER SECTION --- */}
      <div className="max-w-[1300px] mx-auto px-6 mb-16">
        <h4 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-3">
          CLIENT TESTIMONIALS
        </h4>
        <h2 className="text-4xl md:text-5xl font-bold text-[#4a90e2] mb-6">
          What Our Clients Say <br />
          <span className="text-gray-800">About Webskitters</span>
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl">
          We go beyond maintaining operations. We empower businesses with data, insights, 
          and best practices to stay ahead in an ever-evolving digital landscape.
        </p>
      </div>

      {/* --- MOVING CARDS SECTION --- */}
      <div className="relative w-full">
        
        {/* The Scrolling Track */}
        <div className="flex animate-scroll-slow hover:pause">
          
          {/* Set 1 */}
          <div className="flex gap-8 px-8">
            {reviews.map((item, index) => (
              <ReviewCard key={index} item={item} />
            ))}
          </div>

          {/* Set 2 (Duplicate for Loop) */}
          <div className="flex gap-8 px-8">
            {reviews.map((item, index) => (
              <ReviewCard key={`dup-${index}`} item={item} />
            ))}
          </div>

        </div>

      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-slow {
          animation: scroll 60s linear infinite; /* Slower for reading */
          width: max-content;
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

// --- Single Review Card Component ---
const ReviewCard = ({ item }) => (
  <div className="w-[400px] md:w-[500px] bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between relative overflow-hidden group">
    
    {/* Blue Quote Icon */}
    <FaQuoteLeft className="text-[#4a90e2] text-5xl mb-6 opacity-80" />
    
    {/* Quote Text */}
    <p className="text-gray-600 text-xl leading-relaxed font-medium mb-8">
      "{item.quote}"
    </p>
    
    <div className="flex items-end justify-between mt-auto">
      {/* Client Info */}
      <div>
        <h4 className="text-gray-900 font-bold text-lg">{item.name}</h4>
        <p className="text-gray-500 text-sm">{item.role}</p>
      </div>

      {/* Client Image (Bottom Right Arc) */}
      <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
      </div>
    </div>
    
    {/* Soft Blue Gradient Circle Decoration */}
    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-50 rounded-full z-0 pointer-events-none opacity-50 group-hover:scale-110 transition-transform"></div>
  </div>
);

export default Testimonials;