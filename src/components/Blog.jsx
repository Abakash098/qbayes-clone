import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: "Search Engine Basics for Small Businesses [+ Debunking Myths]",
    author: "Atanu Sarkar",
    date: "February 19, 2026",
    img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    title: "Web Design: A Complete Guide to Modern, High-Converting Websites in 2026",
    author: "Ayan Sarkar",
    date: "February 6, 2026",
    img: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "Choosing the Right Astrology App Developer: Avoid These 5 Mistakes",
    author: "Ayan Sarkar",
    date: "January 28, 2026",
    img: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    title: "Why SEO Matters for WordPress Websites: Core Benefits Explained",
    author: "Ayan Sarkar",
    date: "January 19, 2026",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    title: "Search Engine Optimization (SEO): The Complete Guide to Ranking in 2026",
    author: "Ayan Sarkar",
    date: "January 15, 2026",
    img: "https://images.unsplash.com/photo-1572177812156-58036aae439c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    title: "11 Essential UX Design Principles To Help Startups Succeed",
    author: "Ayan Sarkar",
    date: "January 7, 2026",
    img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=600&q=80"
  }
];

const Blog = () => {
  return (
    <div className="font-sans bg-white pt-[90px]">
      
      {/* --- HERO SECTION --- */}
      <section className="relative bg-[#020b24] text-white overflow-hidden flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 px-6 lg:px-20 py-20 z-10">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            Our <span className="text-[#ff5c00]">Blogs</span>
          </h1>
          <p className="text-slate-300 text-lg mb-8 max-w-lg leading-relaxed">
            Stay In The Loop About All The Emerging Trends And Innovative Strategies In The World Of Technology.
          </p>
          <button className="bg-[#00b0f0] hover:bg-cyan-500 transition-colors text-white font-semibold py-4 px-8 rounded-full flex items-center gap-2 shadow-lg shadow-cyan-500/30">
            Consult Our AI Experts 
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"></path></svg>
          </button>
        </div>

        {/* Right Image Background */}
        <div className="w-full lg:w-1/2 h-[400px] lg:h-[600px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#020b24] via-[#020b24]/80 to-transparent z-10 lg:hidden"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#020b24] to-transparent z-10 hidden lg:block w-32 left-0"></div>
          <img 
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80" 
            alt="Typing on laptop" 
            className="w-full h-full object-cover opacity-80"
          />
        </div>
      </section>

      {/* --- BLOG CONTENT AREA --- */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        
        {/* Featured Blog Card */}
        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col md:flex-row mb-12 group cursor-pointer hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all">
          <div className="w-full md:w-5/12 bg-blue-50 relative p-8 flex items-center justify-center overflow-hidden">
             {/* Replace with your exact asset for the dark patterns image */}
             <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&q=80" alt="Ecommerce" className="w-full h-full object-cover rounded-xl z-10 relative transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="w-full md:w-7/12 p-8 lg:p-12 flex flex-col justify-center">
            <span className="bg-[#00b0f0]/10 text-[#00b0f0] font-bold px-4 py-1.5 rounded-full text-sm w-max mb-6">Featured Blog</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-[#00b0f0] transition-colors">Dark Patterns in Ecommerce are Rising: Here's How to Build Website Ethically</h2>
            
            <div className="flex items-center gap-4 text-slate-500 text-sm font-medium mb-6">
              <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg> Ayan Sarkar</span>
              <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg> June 16, 2025</span>
            </div>
            
            <p className="text-slate-500 mb-8 leading-relaxed">Dark patterns manipulate e-commerce shoppers. Learn the 10 deceptive tactics plaguing sites...</p>
            
            <a href="#" className="text-[#00b0f0] font-bold flex items-center gap-2 hover:underline">
              Read More
              <svg className="w-4 h-4 transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
          </div>
        </div>

        {/* 3-Column Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col group transition-transform hover:-translate-y-2 cursor-pointer">
              
              <div className="h-56 overflow-hidden relative">
                <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-4 leading-snug group-hover:text-[#00b0f0] transition-colors">{post.title}</h3>
                
                <div className="flex items-center gap-4 text-slate-500 text-[13px] font-medium mt-auto mb-6">
                  <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg> {post.author}</span>
                  <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg> {post.date}</span>
                </div>

                <a href="#" className="text-[#00b0f0] font-bold flex items-center gap-2 hover:underline text-sm">
                  Read More
                  <svg className="w-4 h-4 transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-16">
          <button className="bg-[#00b0f0] hover:bg-cyan-500 transition-colors text-white font-bold py-3 px-8 rounded-full flex items-center gap-2 shadow-lg shadow-cyan-500/30">
            Load More
            <svg className="w-4 h-4 transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </button>
        </div>
      </section>

      {/* --- NEWSLETTER SECTION --- */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-20">
        <div className="bg-gradient-to-br from-[#020b24] to-[#01358d] rounded-[2rem] p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl">
          
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(45deg, transparent 48%, rgba(255,255,255,0.2) 50%, transparent 52%)', backgroundSize: '20px 20px' }}></div>
          
          <div className="lg:w-1/2 relative z-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Subscribe To The Webskitters Newsletter</h2>
            <p className="text-blue-100 text-sm md:text-base">Stay ahead of the curve with our latest blogs and insights delivered straight to your inbox</p>
          </div>

          <div className="w-full lg:w-1/2 relative z-10 flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter your email here" 
              className="w-full bg-[#11244d] text-white placeholder-blue-300 border border-blue-800/50 rounded-full px-6 py-4 focus:outline-none focus:border-[#00b0f0] transition-colors"
            />
            <button className="bg-[#00b0f0] hover:bg-cyan-500 transition-colors text-white font-bold py-4 px-8 rounded-full flex items-center justify-center gap-2 shrink-0">
              Subscribe 
              <svg className="w-4 h-4 transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Blog;