import React from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaPlay } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Malcolm Riley",
      role: "Founder & CEO, The Golfers App",
      text: "Their response time was a perfect 10/10, and they were consistently available whenever we needed. The transition to QBayes was seamless.",
      image: "https://i.pravatar.cc/150?u=malcolm",
      hasVideo: false
    },
    {
      id: 2,
      name: "Adam Hiner",
      role: "Owner, Acrolove",
      text: "QBayes successfully completed design and build, migrated data, and delivered a fully functional backend that exceeded our expectations.",
      image: "https://i.pravatar.cc/150?u=adam",
      hasVideo: false
    },
    {
      id: 3,
      name: "Roger Wesley",
      role: "Founder, RogerWesley.com",
      text: "QBayes delivered a stunning, high-quality website with exceptional creativity and service. We saw immediate growth after launch.",
      image: "https://i.pravatar.cc/150?u=roger",
      hasVideo: true
    }
  ];

  return (
    <section className="py-24 bg-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header with Navigation Arrows */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h4 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">CLIENT TESTIMONIALS</h4>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              What Our Client Say <br/>
              About <span className="text-[#00c2ff]">QBayes</span>
            </h2>
            <p className="text-gray-500 text-lg">
              We go beyond maintaining operations we empower businesses with data, insights, and best practices to stay ahead in an ever-evolving digital landscape.
            </p>
          </div>
          
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-100 transition-colors">
              <FaChevronLeft />
            </button>
            <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-100 transition-colors">
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Testimonials Grid/Slider */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div key={item.id} className="bg-white p-10 rounded-[40px] shadow-2xl shadow-blue-100/50 border border-gray-50 flex flex-col relative overflow-hidden group">
              
              {/* Quote Icon */}
              <div className="text-[#00c2ff] opacity-20 mb-6">
                <FaQuoteLeft size={50} />
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 text-lg leading-relaxed mb-10 flex-grow">
                {item.text}
              </p>

              {/* Client Info Section */}
              <div className="flex items-center gap-4 mt-auto">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg relative z-10">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  {/* Decorative Circle Background */}
                  <div className="absolute -top-2 -left-2 w-24 h-24 bg-blue-50 rounded-full -z-0"></div>
                  
                  {/* Video Play Button Overlay */}
                  {item.hasVideo && (
                    <div className="absolute bottom-0 right-0 z-20 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100">
                      <FaPlay className="text-[#00c2ff] text-xs ml-0.5" />
                    </div>
                  )}
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-900 text-xl">{item.name}</h4>
                  <p className="text-gray-400 text-sm">{item.role}</p>
                </div>
              </div>

              {/* Floating Background Bubble */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-50/50 rounded-full -z-0"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;