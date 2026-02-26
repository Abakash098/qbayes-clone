import React from 'react';

const ContactSection = () => {
  const contactData = [ 
    {
      title: "Mobile No.",
      value: "+91 9038389108",
      gradient: "from-orange-500 to-red-500",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      title: "Email",
      value: "info@qbayes.com",
      gradient: "from-blue-500 to-purple-600",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Address",
      value: "Jadavpur University Campus, Gate No. 3, 188, Raja S.C. Mallick Road, Kolkata - 700032, India",
      gradient: "from-purple-500 to-pink-500",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative py-24 bg-[#0b1c38] overflow-hidden">
      {/* Dynamic Background Blurs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"></div>

      <div className="max-w-[1300px] mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h4 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-3">Get In Touch</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Connect With <span className="text-blue-400">QBayes</span></h2>
          <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactData.map((item, index) => (
            <div 
              key={index} 
              className="group relative p-1 rounded-3xl transition-all duration-500 hover:scale-105"
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-3xl opacity-20 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Card Content */}
              <div className="relative h-full bg-[#112d5a]/90 backdrop-blur-xl rounded-[22px] p-8 flex flex-col items-center text-center">
                <div className={`mb-6 p-4 rounded-2xl bg-gradient-to-br ${item.gradient} text-white shadow-lg shadow-black/20`}>
                  {item.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base mb-6">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;