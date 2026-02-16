import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#061229] text-white py-16 px-6 border-t border-white/5">
      <div className="max-w-[1300px] mx-auto">
        
        {/* Top Row: Logo and Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-blue-400">QBayes</h2>
            <p className="text-xs uppercase tracking-widest text-gray-400 mt-1">A National Award Winning Company</p>
          </div>
          
          <div className="flex gap-4">
            {['f', 't', 'i', 'y', 'in'].map((social) => (
              <div key={social} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-500 cursor-pointer transition">
                <span className="text-sm font-bold uppercase">{social}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Middle Row: Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 border-t border-white/10 pt-12">
          <div>
            <h4 className="font-bold mb-6 text-lg">Company</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Awards</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Services</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer">Solutions</li>
              <li className="hover:text-white cursor-pointer">Case Studies</li>
              <li className="hover:text-white cursor-pointer">Resources</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Life @ QBayes</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer">Career</li>
              <li className="hover:text-white cursor-pointer">CSR</li>
              <li className="hover:text-white cursor-pointer">Contact Us</li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <div className="opacity-50 grayscale hover:grayscale-0 transition cursor-pointer">
               <span className="font-bold">FORBES</span>
            </div>
            <div className="opacity-50 grayscale hover:grayscale-0 transition cursor-pointer">
               <span className="font-bold">CRISIL</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;