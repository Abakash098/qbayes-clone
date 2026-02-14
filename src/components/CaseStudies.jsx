import React from 'react';

const CaseStudies = () => {
  const projects = [
    { id: 1, title: 'Rad Golf', category: 'Mobile App', image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=500&q=60' },
    { id: 2, title: 'Alokozay', category: 'Web Development', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=60' },
    { id: 3, title: 'Enviro Waste', category: 'Marketing', image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=500&q=60' },
    { id: 4, title: 'Mercedes', category: 'Automotive', image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=500&q=60' },
  ];

  return (
    <div className="w-full py-20 bg-white">
      <div className="max-w-[1240px] mx-auto px-4">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h3 className="text-brand-blue font-bold uppercase tracking-widest mb-2">Case Studies</h3>
            <h2 className="text-4xl font-bold text-gray-900">Dive into Webskitters <br/> Remarkable Portfolio</h2>
          </div>
          <button className="hidden md:block border-2 border-brand-blue text-brand-blue px-6 py-2 rounded-full font-bold hover:bg-brand-blue hover:text-white transition">
            View All Projects
          </button>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer h-80">
              {/* Background Image */}
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 duration-500"
              />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-1 translate-y-4 group-hover:translate-y-0 transition duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition duration-300 delay-100">
                  {project.category}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default CaseStudies;