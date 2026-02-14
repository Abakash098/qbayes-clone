import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaWordpress, FaAndroid, FaApple, FaAngular, FaAws } from 'react-icons/fa';

const Technologies = () => {
  const techs = [
    { id: 1, name: 'React', icon: <FaReact size={50} className="text-blue-400"/> },
    { id: 2, name: 'Node.js', icon: <FaNodeJs size={50} className="text-green-500"/> },
    { id: 3, name: 'Angular', icon: <FaAngular size={50} className="text-red-500"/> },
    { id: 4, name: 'Python', icon: <FaPython size={50} className="text-yellow-500"/> },
    { id: 5, name: 'WordPress', icon: <FaWordpress size={50} className="text-blue-600"/> },
    { id: 6, name: 'Android', icon: <FaAndroid size={50} className="text-green-600"/> },
    { id: 7, name: 'iOS', icon: <FaApple size={50} className="text-gray-800"/> },
    { id: 8, name: 'AWS', icon: <FaAws size={50} className="text-orange-500"/> },
  ];

  return (
    <div className="w-full py-20 bg-gray-50 border-t border-gray-200">
      <div className="max-w-[1240px] mx-auto px-4 text-center">
        <h3 className="text-brand-blue font-bold uppercase tracking-widest mb-2">Technology</h3>
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Our Tech Capabilities</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {techs.map((tech) => (
            <div key={tech.id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300 flex flex-col items-center justify-center border border-gray-100">
              <div className="mb-4">{tech.icon}</div>
              <p className="font-bold text-gray-700 text-lg">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;