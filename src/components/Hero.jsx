import React from 'react';

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* --- THE RUNNING VIDEO --- */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-4100-large.mp4"
      />

      {/* --- THE DARK OVERLAY (Matches your current screenshot) --- */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#0b1c38]/75 z-10"></div>

      {/* --- THE TEXT CONTENT --- */}
      <div className="relative z-20 text-center px-4 max-w-5xl">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
          Transforming Ideas Into <br />
          Cutting-Edge <span className="text-orange-500">Digital Solutions</span>
        </h1>

        <p className="text-gray-200 text-lg md:text-xl mb-10 max-w-3xl mx-auto opacity-0 animate-slide-up delay-200" style={{animationFillMode: 'forwards'}}>
          Creating innovative, high-impact web design and digital solutions that accelerate growth and redefine your business online.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center opacity-0 animate-slide-up delay-400" style={{animationFillMode: 'forwards'}}>
          <button className="bg-[#0056b3] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg">
            Schedule a Call
          </button>
          <button className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all">
            View Work
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;