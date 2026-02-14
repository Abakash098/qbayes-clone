import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const FAQ = () => {
  const faqs = [
    { q: "What Industries Do Webskitters Serve?", a: "We serve a wide range of industries including Healthcare, E-commerce, Finance, Education, and more." },
    { q: "What Makes Webskitters Different From Other Agencies?", a: "Our commitment to quality, award-winning expertise, and focus on delivering measurable ROI sets us apart." },
    { q: "How Do You Ensure Project Quality?", a: "We follow industry-standard QA processes and regular testing cycles to ensure every project is bug-free and optimized." },
    { q: "What Kind Of Support Do You Offer After Project Completion?", a: "We provide comprehensive post-launch support and maintenance to ensure your platform stays updated and secure." },
    { q: "What Software Development Services Do You Offer?", a: "Our services include custom software development, AI solutions, IoT, and mobile app development." },
    { q: "Does Webskitters Provide Web Development Services?", a: "Yes, we are a leading web development agency specializing in React, Node.js, PHP, and more." }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="w-full py-24 bg-[#f8f9fa]">
      <div className="max-w-[1300px] mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-3">FAQS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Frequently Asked Questions</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-gray-700">{faq.q}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${openIndex === index ? 'bg-blue-500 text-white rotate-180' : 'bg-blue-100 text-blue-500'}`}>
                  <FaChevronDown size={12} />
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-500 text-sm animate-fadeIn">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;