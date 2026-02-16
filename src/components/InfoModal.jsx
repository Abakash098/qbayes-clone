import React from 'react';
import { FaTimes } from 'react-icons/fa';

const InfoModal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
      {/* Dark backdrop with blur */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose}></div>
      
      {/* Modal Container */}
      <div className="relative bg-white w-full max-w-5xl max-h-[85vh] overflow-hidden rounded-3xl shadow-2xl flex flex-col animate-popupScale">
        
        {/* Header */}
        <div className="flex justify-between items-center p-8 border-b border-gray-100">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            {title} <span className="text-blue-600">Overview</span>
          </h2>
          <button onClick={onClose} className="p-3 hover:bg-gray-100 rounded-full transition">
            <FaTimes size={24} className="text-gray-400" />
          </button>
        </div>

        {/* Dynamic Content Area */}
        <div className="flex-1 overflow-y-auto p-2 custom-scrollbar">
          {children}
        </div>

        {/* Footer */}
        <div className="p-6 bg-gray-50 text-center text-xs text-gray-400 font-medium">
          © 2026 Bayes AI Solutions - National Award Winning Excellence
        </div>
      </div>
    </div>
  );
};

export default InfoModal;