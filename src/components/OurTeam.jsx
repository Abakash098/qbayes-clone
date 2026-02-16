import React from 'react';

const OurTeam = () => {
  return (
    <div className="w-full bg-white animate-fadeIn">
      <div className="relative bg-black py-24 px-6 text-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-black opacity-90"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Our Team</h1>
          <p className="text-xl text-gray-300 mb-8">Meet the passionate minds behind our success.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-8">
         {/* Team Placeholders */}
         {[1,2,3].map(i => (
           <div key={i} className="bg-gray-50 p-6 rounded-xl text-center">
             <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
             <h3 className="font-bold text-xl">Team Member {i}</h3>
             <p className="text-gray-500">Senior Developer</p>
           </div>
         ))}
      </div>
    </div>
  );
};
export default OurTeam;