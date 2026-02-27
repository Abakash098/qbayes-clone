import React from 'react';
import { FaCheckCircle, FaArrowRight, FaBrain, FaMicrochip, FaBookOpen, FaFileSignature, FaCalendarCheck } from 'react-icons/fa';

const About = () => {
  return (
    <div className="w-full bg-white font-sans animate-fadeIn">
      
      {/* 1. Header Section */}
      <div className="max-w-7xl mx-auto px-6 py-24 border-b border-slate-50">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-200 rounded-full text-purple-700 font-bold text-sm mb-10 uppercase tracking-wider shadow-sm">
              🚀 Accelerating Digital Transformation
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 leading-[0.95] tracking-tighter">
              Innovate with <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-600">Intelligence</span>
            </h1>
            <p className="text-slate-500 text-xl font-medium leading-relaxed max-w-xl">
              Building the core of your digital future with data-driven AI ecosystems and specialized IT consultancy.
            </p>
          </div>
          <div className="relative rounded-[3rem] overflow-hidden border-[10px] border-slate-50 shadow-2xl">
             <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" alt="Consultancy" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* 2. Professional "About Us" Bio Section */}
      <div className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Decorative background blurs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-50"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-50"></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          
          {/* Centered Heading */}
          <div className="text-center mb-12">
            <h4 className="text-purple-600 font-bold uppercase tracking-widest text-sm mb-3">Discover Our Roots</h4>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Us</span></h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mt-6 rounded-full"></div>
          </div>
          
          {/* Content Card */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-2xl shadow-slate-200/50 border border-slate-100 relative">
            
            {/* Subtle Quote Icon Background */}
            <div className="absolute top-8 left-8 text-purple-50 opacity-60">
              <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.896 3.456-8.352 9.12-8.352 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
            </div>

            <div className="relative z-10 space-y-8 text-slate-600 text-lg leading-relaxed md:text-[1.1rem] md:leading-loose">
              <p className="text-justify">
                <strong className="text-slate-900 font-extrabold text-xl mr-1">QBAYES LLP</strong> 
                (LLP Identification Number: ACV-5906) is incorporated pursuant to section 12(1) of the Limited Liability Partnership Act 2008, Ministry of Corporate Affairs, Government of India. We aim to innovate and provide intelligent solutions that can achieve an ease of efficiency and performance no matter the complexity of the concerned task(s).
              </p>
              <p className="text-justify">
                In the times where the quest for smart execution of different applications is being pursued, we are equipped with the necessary skills and resources to help you build smooth, hassle free, user-friendly, harmless, intelligent products. Furthermore, we are committed to the development of the society and the environment globally which we believe govern daily lives in a healthy and systematic manner.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Detailed Service Categories */}
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
         
         {/* Education */}
         <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl hover:shadow-2xl transition-all group hover:-translate-y-2 cursor-pointer duration-300">
            <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-sm"><FaBookOpen size={28}/></div>
            <h4 className="text-xl font-bold mb-4 text-slate-900">Academics & Training</h4>
            <p className="text-slate-500 text-sm leading-relaxed">Assisting in Vocational Training, Education Technology deployment, and Career Counselling to impart technical knowledge.</p>
         </div>

         {/* Documentation */}
         <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl hover:shadow-2xl transition-all group hover:-translate-y-2 cursor-pointer duration-300">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm"><FaFileSignature size={28}/></div>
            <h4 className="text-xl font-bold mb-4 text-slate-900">Technical Documentation</h4>
            <p className="text-slate-500 text-sm leading-relaxed">Specialized reporting for Financial, Commercial, Legal, and Academic Research (Dissertations, Thesis, Papers).</p>
         </div>

         {/* Event Management */}
         <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl hover:shadow-2xl transition-all group hover:-translate-y-2 cursor-pointer duration-300">
            <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition-all duration-300 shadow-sm"><FaCalendarCheck size={28}/></div>
            <h4 className="text-xl font-bold mb-4 text-slate-900">Event Management</h4>
            <p className="text-slate-500 text-sm leading-relaxed">Organizing professional Conferences, Workshops, and Seminars with ethical compliance and knowledge incubation.</p>
         </div>

      </div>

    </div>
  );
};

export default About;