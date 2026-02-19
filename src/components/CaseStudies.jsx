import React from 'react';

const caseStudiesData = [
  {
    id: 1,
    title: "A Dynamic Pay-Per-Click Marketing Campaign for a UK-based Waste Management Company",
    desc: "Webskitters' Strategic PPC for Waste Management Delivering Big Wins In Lead Growth",
    img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80",
    logoText: "enviro",
    stats: [
      { value: "45%", label: "Increase in Leads" },
      { value: "35%", label: "Improved Lead Quality" },
      { value: "28%", label: "Increased Conversion Rate" }
    ]
  },
  {
    id: 2,
    title: "A High-Performance Fashion PPC Strategy Crafted By Webskitters",
    desc: "Webskitters' Dynamic PPC Services For UK-Based Luxury Fashion Brand Delivered Strong Growth",
    img: "https://images.unsplash.com/photo-1550614000-4b95dd2449bb?auto=format&fit=crop&w=800&q=80",
    logoText: "BLACK",
    stats: [
      { value: "30%", label: "ROAS Increase" },
      { value: "22%", label: "Reduced CPS" },
      { value: "27%", label: "Sales Volume" }
    ]
  },
  {
    id: 3,
    title: "Revolutionizing Mental Healthcare Through Seamless Digital Transformation",
    desc: "Webskitters Transformed MHISA to Redefine Mental Healthcare through Strategic Web Development and Design Solutions",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
    logoText: "MHISA",
    stats: [
      { value: "200%", label: "Web Traffic Boost" },
      { value: "45%", label: "Increased Engagement" },
      { value: "76%", label: "More Leads" }
    ]
  },
  {
    id: 4,
    title: "Embrace the Extraordinary Automotive Website Design for Mercedes with Webskitters",
    desc: "Experience Excellence in Car Buying with High-end Interactive Web Development",
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80",
    logoText: "Mercedes",
    stats: [
      { value: "233%", label: "Boost in Web Traffic" },
      { value: "42%", label: "Reduced Bounce Rate" },
      { value: "16%", label: "Boost in Engaged Session" }
    ]
  },
  {
    id: 5,
    title: "Elevating LuvLap's Ecommerce Presence With Strategic Shopify Development",
    desc: "Webskitters Helped Luvlap Dominate the Market with Top-Notch Baby Products Ecommerce Website Development Services",
    img: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80",
    logoText: "LuvLap",
    stats: [
      { value: "58%", label: "Reduction in Bounce Rate" },
      { value: "10%", label: "Boost in Engaged Session" },
      { value: "15%", label: "Increase in CTR" }
    ]
  },
  {
    id: 6,
    title: "Revamping Liori Diamonds: Elevating E-commerce Success with Shopify",
    desc: "How Strategic Web Design & Development Transformed Traffic, Sales & Brand Presence",
    img: "https://images.unsplash.com/photo-1599643478524-fb66f54fce05?auto=format&fit=crop&w=800&q=80",
    logoText: "LIORI",
    stats: [
      { value: "73%", label: "Surge in Web Traffic" },
      { value: "35%", label: "Increase in Lead Conversion" },
      { value: "40%", label: "Boost in Engaged Session" }
    ]
  }
];

const CaseStudies = () => {
  return (
    <div className="font-sans bg-white pt-[90px]">
      
      {/* --- HERO SECTION --- */}
      <section className="relative bg-[#020b24] text-white overflow-hidden flex flex-col lg:flex-row items-center">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 px-6 lg:px-20 py-20 z-10">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            Case <span className="text-[#ff5c00]">Studies</span>
          </h1>
          <p className="text-slate-300 text-lg mb-8 max-w-lg leading-relaxed">
            Take A Closer Look At How We've Helped Businesses Like Yours Achieve Measurable Results. Our Success Stories Show The Real Impact Of Our Work, Be It Web Development And Software Design To Digital Marketing Strategies That Deliver Lasting Value And Business Growth.
          </p>
          <button className="bg-[#00b0f0] hover:bg-cyan-500 transition-colors text-white font-semibold py-4 px-8 rounded-full flex items-center gap-2">
            Consult Our AI Experts 
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"></path></svg>
          </button>
        </div>

        {/* Right Image Background */}
        <div className="w-full lg:w-1/2 h-[400px] lg:h-[600px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#020b24] via-[#020b24]/50 to-transparent z-10 lg:hidden"></div>
          <img 
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80" 
            alt="Typing on laptop" 
            className="w-full h-full object-cover opacity-70"
          />
        </div>
      </section>

      {/* --- CASE STUDIES GRID --- */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {caseStudiesData.map((study) => (
            <div key={study.id} className="bg-white rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col group transition-transform hover:-translate-y-2">
              
              {/* Image & Logo */}
              <div className="relative h-72 overflow-hidden">
                <img src={study.img} alt={study.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute bottom-6 left-6 bg-white px-4 py-2 rounded-xl shadow-lg font-bold text-slate-800">
                  {study.logoText}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight">{study.title}</h3>
                <p className="text-slate-500 mb-8 flex-1">{study.desc}</p>
                
                {/* Footer / Stats Block */}
                <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6 border-t border-slate-100 pt-6">
                  <a href="#" className="text-[#00b0f0] font-bold flex items-center gap-2 hover:underline">
                    View Case Study
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </a>
                  
                  <div className="bg-[#f4f7fe] rounded-2xl p-4 flex items-center gap-6 xl:gap-8">
                    {study.stats.map((stat, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="text-[#00b0f0] font-bold text-xl">{stat.value}</span>
                        <span className="text-slate-500 text-[11px] font-medium max-w-[70px] leading-tight">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-16">
          <button className="bg-[#00b0f0] hover:bg-cyan-500 transition-colors text-white font-bold py-4 px-10 rounded-full flex items-center gap-2 shadow-lg shadow-cyan-500/30">
            Load More
            <svg className="w-4 h-4 transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"></path></svg>
          </button>
        </div>
      </section>

      {/* --- BOTTOM CTA SPLIT SECTION --- */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-20">
        <div className="flex flex-col lg:flex-row rounded-[2rem] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
          
          {/* Left CTA */}
          <div className="lg:w-1/2 bg-gradient-to-br from-[#0b5bb1] to-[#0092d6] p-12 lg:p-20 text-white flex flex-col justify-center relative overflow-hidden">
             {/* Decorative background lines/shapes could go here */}
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight relative z-10">Let's Build Something Extraordinary Together!</h2>
            <p className="text-blue-100 text-lg relative z-10">Get a wide range of expert services from web development, software solutions, and digital strategies that drive measurable business growth.</p>
          </div>

          {/* Right CTA */}
          <div className="lg:w-1/2 bg-[#fafbfd] p-12 lg:p-20 flex flex-col justify-center border border-slate-100">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Ready To Get Started?</h2>
            <p className="text-slate-500 text-lg mb-8">Share your goals, and we'll help you design the right digital path.</p>
            <button className="bg-[#de3275] hover:bg-pink-600 transition-colors text-white font-bold py-4 px-8 rounded-full self-start">
              Consult Our AI Experts
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};

export default CaseStudies;