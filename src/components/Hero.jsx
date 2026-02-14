import React from 'react';
// Make sure you have your icons imported if you use them
// import { FaGoogle, FaArrowRight } from 'react-icons/fa'; 

const Hero = () => {
  return (
    <div 
      className="relative w-full min-h-screen bg-cover bg-center flex items-center"
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069')" 
      }}
    >
      {/* This creates the Dark Blue Overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a202c] via-[#1a202c]/90 to-blue-900/40"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Text Section */}
        <div className="text-white space-y-6 mt-20">
          
          {/* Awards Badges (Optional - add your images here) */}
          <div className="flex gap-4 mb-4">
             {/* Add your Google/Clutch rating images here */}
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Transforming Ideas <br />
            Into <span className="text-white">Cutting-Edge</span> <br />
            <span className="text-orange-500">Digital Solutions</span>
          </h1>

          <p className="text-gray-300 text-lg max-w-lg">
            Creating innovative, High-Impact Web-Design And Digital Solutions That Accelerate Growth And Redefine Your Business Online.
          </p>

          {/* Button - Exact Match to Original */}
          <button className="mt-8 px-8 py-3 bg-[#38bdf8] hover:bg-cyan-400 text-white font-semibold rounded-full flex items-center gap-2 transition-all">
            Schedule A Call 
            {/* Add an arrow icon here if you want: <FaArrowRight /> */}
          </button>
        </div>

        {/* Right Side (Empty for now to let the image show) */}
        <div className="hidden md:block"></div>
      </div>
    </div>
  );
};

export default Hero;