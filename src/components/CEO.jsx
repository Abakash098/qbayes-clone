import React from 'react';

const CEO = () => {
  return (
    <div className="w-full py-20 bg-white">
      <div className="max-w-[1300px] mx-auto px-6">
        
        {/* Main Card Container */}
        <div className="flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-2xl">
          
          {/* --- LEFT SIDE: CEO IMAGE --- */}
          <div className="lg:w-2/5 h-[400px] lg:h-auto relative">
            <img 
              // Using a placeholder that looks like a professional CEO
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
              alt="Atanu Sarkar, CEO" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* --- RIGHT SIDE: CONTENT --- */}
          <div className="lg:w-3/5 bg-[#0b1c38] p-10 md:p-16 text-white flex flex-col justify-center">
            
            <h4 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
              A WORD FROM OUR CEO
            </h4>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
              A Brief Message From <br />
              Atanu Sarkar, Our <span className="text-[#4a90e2]">Founder & CEO</span>
            </h2>

            <div className="space-y-6 text-gray-300 text-base md:text-lg leading-relaxed">
              <p>
                At Webskitters, we believe in your ideas and leverage our extensive 
                knowledge to bring them to life. Our success is not defined only by numbers 
                or projects, but by the impact we create. We are transforming ideas into 
                digital power, helping businesses adapt, grow, and thrive in this rapidly 
                changing world.
              </p>
              <p>
                The future holds immense opportunities, and we are ready to embrace 
                them with confidence. Together, we will continue to innovate, lead, and 
                shape a brighter tomorrow.
              </p>
            </div>

            {/* Signature Area */}
            <div className="mt-10">
              <div className="text-4xl font-serif italic text-white/80" style={{ fontFamily: 'Cursive, serif' }}>
                A. Sarkar
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default CEO;