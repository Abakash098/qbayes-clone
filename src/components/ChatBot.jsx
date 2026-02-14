import React, { useState } from 'react';
import { FaComments, FaTimes, FaPaperPlane } from 'react-icons/fa';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-[100] font-sans">
      
      {/* --- CHAT WINDOW --- */}
      {isOpen && (
        <div className="bg-white w-[350px] h-[520px] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 transition-all duration-300 transform scale-100">
          
          {/* Support Agent Header */}
          <div className="bg-[#0b1c38] p-5 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full border-2 border-white/20 overflow-hidden bg-gray-200">
                  <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=100" alt="Agent" className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#0b1c38] rounded-full"></div>
              </div>
              <div>
                <h4 className="font-bold text-sm">Akarshan</h4>
                <p className="text-[10px] text-blue-300">We typically reply in a few minutes</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-orange-500 transition-colors">
              <FaTimes />
            </button>
          </div>

          {/* Message Area */}
          <div className="flex-1 p-5 bg-gray-50 overflow-y-auto flex flex-col gap-4">
            <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm text-xs text-gray-700 max-w-[85%] leading-relaxed">
              Got any questions? I'm happy to help you with our services!
            </div>
          </div>

          {/* Footer Input */}
          <div className="p-4 bg-white border-t border-gray-100 flex items-center gap-3">
            <input 
              type="text" 
              placeholder="Ask me anything..." 
              className="flex-1 bg-gray-100 py-3 px-5 rounded-full text-xs outline-none focus:ring-1 focus:ring-blue-400"
            />
            <button className="bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-orange-600 shadow-md">
              <FaPaperPlane size={14} />
            </button>
          </div>
        </div>
      )}

      {/* --- FLOATING TOGGLE BUTTON --- */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-orange-600 transition-all group"
        >
          <FaComments size={30} />
          {/* Tooltip */}
          <div className="absolute right-20 bg-white text-[#0b1c38] px-4 py-2 rounded-xl shadow-2xl text-xs font-black whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all border border-gray-100">
             Talk to an Expert
          </div>
        </button>
      )}
    </div>
  );
};

export default ChatBot;