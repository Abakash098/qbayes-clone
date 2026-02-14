import React from 'react';

const TopBar = () => {
  return (
    <div className="bg-[#0b1c38] text-white py-2 overflow-hidden border-b border-white/10">
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="text-sm font-medium px-10">★ Webskitters Emerges as Runners-Up at the Great British Entrepreneur Awards</span>
        <span className="text-sm font-medium px-10">★ Webskitters Enters the Forbes Select 200 List - Shining at DGEMS 2025</span>
        <span className="text-sm font-medium px-10">★ Award-Winning Web Design & Development Company</span>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default TopBar;