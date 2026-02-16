import React from 'react';

const PortfolioGrid = () => {
  const projects = [
    { 
      id: 1, 
      title: 'Rad Golf', 
      category: 'Mobile App',
      image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=800&q=80' 
    },
    { 
      id: 2, 
      title: 'Alokozay', 
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80' 
    },
    { 
      id: 3, 
      title: 'Enviro Waste', 
      category: 'Marketing',
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80' 
    },
    { 
      id: 4, 
      title: 'Mercedes', 
      category: 'Automotive',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80' 
    },
  ];

  return (
    <section className="w-full py-24 bg-[#0b1c38] font-sans relative">
      
      {/* Background Grid Pattern (Optional decoration) */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="h-full w-full" 
             style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h4 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-2">
              PORTFOLIO
            </h4>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Dive into QBayes <br/> <span className="text-[#00c2ff]">Remarkable Portfolio</span>
            </h2>
          </div>
          
          <button className="border-2 border-[#00c2ff] text-[#00c2ff] px-8 py-3 rounded-full font-bold hover:bg-[#00c2ff] hover:text-white transition-colors duration-300">
            View All Projects
          </button>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer shadow-2xl border border-white/5 hover:border-[#00c2ff]/50">
              
              {/* Background Image */}
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1c38] via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 p-6 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-orange-500 text-xs font-bold uppercase mb-1 tracking-wider">{project.category}</p>
                <h3 className="text-2xl font-bold text-white mb-1">
                  {project.title}
                </h3>
                <div className="h-1 w-0 bg-[#00c2ff] group-hover:w-1/2 transition-all duration-500 rounded-full mt-3"></div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PortfolioGrid;