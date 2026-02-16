import React from 'react';

const Awards = () => {
  const awards = [
    { name: "Forbes", color: "text-black", font: "font-serif" },
    { name: "Clutch", color: "text-blue-600", font: "font-sans" },
    { name: "Economic Times", color: "text-gray-800", font: "font-serif" },
    { name: "Entrepreneur", color: "text-orange-600", font: "font-sans" },
    { name: "GoodFirms", color: "text-blue-500", font: "font-sans" },
    { name: "Zee News", color: "text-red-600", font: "font-sans" },
    { name: "Silicon India", color: "text-gray-700", font: "font-sans" },
    { name: "Business Standard", color: "text-red-800", font: "font-serif" },
  ];

  return (
    <div className="w-full bg-white py-12 border-b border-gray-200 overflow-hidden relative">
      
      {/* Container for the sliding track */}
      <div className="flex w-[200%] animate-marquee">
        
        {/* First List of Items */}
        {/* ADDED 'gap-32' (Big Gap) and 'justify-evenly' */}
        <div className="flex w-1/2 justify-evenly items-center gap-32 px-10">
          {awards.map((item, index) => (
            <span key={index} className={`text-3xl font-bold opacity-60 hover:opacity-100 transition-all cursor-pointer whitespace-nowrap flex-shrink-0 ${item.color} ${item.font}`}>
              {item.name}
            </span>
          ))}
        </div> 

        {/* Second List of Items (Duplicate) */}
        {/* ADDED 'gap-32' (Big Gap) and 'justify-evenly' */}
        <div className="flex w-1/2 justify-evenly items-center gap-32 px-10">
          {awards.map((item, index) => (
            <span key={`dup-${index}`} className={`text-3xl font-bold opacity-60 hover:opacity-100 transition-all cursor-pointer whitespace-nowrap flex-shrink-0 ${item.color} ${item.font}`}>
              {item.name}
            </span>
          ))}
        </div>

      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite; /* Slowed down slightly for better readability */
        }
      `}</style>
    </div>
  );
};

export default Awards;