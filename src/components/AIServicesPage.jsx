import React, { useEffect } from 'react';
import AISolutions from './AISolutions'; 
import ContactSection from './ContactSection';
import Clients from './Clients';       
import Stats from './Stats';           
import Testimonials from './Testimonials'; 

const AIServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-[90px] font-sans bg-white min-h-screen">
      
      {/* Reusable Content Component */}
      <AISolutions />

      {/* Reusable Proof Components */}
      <Clients />
      <div className="bg-slate-50 py-10">
        <Stats />
      </div>
      <Testimonials />

      {/* Global Footer Gateway */}
      <ContactSection />
    </div>
  );
};

export default AIServicesPage;