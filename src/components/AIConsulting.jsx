import React from 'react';

const AIPage = () => {
  // CHANGE THESE 3 VARIABLES FOR EACH FILE
  const pageTitle = "AI Service Name"; // e.g. "AI Development"
  const pageDesc = "We build advanced AI solutions to automate your business.";
  const features = [
    { title: "Smart Automation", text: "Reduce manual work by 50%." },
    { title: "Data Insights", text: "Predict future trends accurately." },
    { title: "24/7 Availability", text: "Systems that never sleep." },
    { title: "Custom Scalability", text: "Grow as your business grows." }
  ];

  return (
    <div className="w-full bg-white animate-fadeIn">
      {/* Hero Section */}
      <div className="relative bg-black py-24 px-6 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-black to-orange-900 opacity-80"></div>
        <div className="relative max-w-4xl mx-auto z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">{pageTitle}</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">{pageDesc}</p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-full transition-all hover:scale-105 shadow-lg shadow-orange-500/30">
            Consult Our Experts
          </button>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Text */}
          <div>
             <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our {pageTitle}?</h2>
             <p className="text-gray-600 text-lg leading-relaxed mb-8">
               Our solutions are designed to integrate seamlessly with your existing infrastructure, ensuring zero downtime and maximum efficiency from day one.
             </p>
             <div className="grid grid-cols-1 gap-6">
               {features.map((f, i) => (
                 <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                   <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold shrink-0">✓</div>
                   <div>
                     <h4 className="font-bold text-gray-900">{f.title}</h4>
                     <p className="text-sm text-gray-500">{f.text}</p>
                   </div>
                 </div>
               ))}
             </div>
          </div>

          {/* Right Image Placeholder */}
          <div className="h-[500px] bg-gray-100 rounded-3xl overflow-hidden relative shadow-2xl group">
            {/* You can replace this URL with a specific image for each page */}
            <img 
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="AI Technology" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-sm opacity-80">Client Satisfaction Rate</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AIPage;