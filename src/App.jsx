import React from 'react';
import { Routes, Route } from 'react-router-dom';

// GLOBAL COMPONENTS
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import ContactSection from './components/ContactSection'; 

// PAGE COMPONENTS
import Hero from './components/Hero';
import Clients from './components/Clients';
import AISolutions from './components/AISolutions'; 
import Services from './components/Services';
import MiscellaneousServices from './components/MiscellaneousServices'; 
import Stats from './components/Stats';
import FutureProofAI from './components/FutureProofAI';
import BookingSection from './components/BookingSection';
import ResearchInnovation from './components/ResearchInnovation';
import CaseStudies from './components/CaseStudies'; 
import PortfolioGrid from './components/PortfolioGrid'; 
import Testimonials from './components/Testimonials'; 
import ROISection from './components/ROISection'; 
import Technologies from './components/Technologies'; 
import Locations from './components/Locations'; // Import for Kolkata HQ location

function App() {
  return (
    <div className="font-sans text-white bg-[#0b1c38] min-h-screen overflow-x-hidden">
      
      <Navbar />

      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            
            {/* 1. Services & Expertise */}
            <Services />
            <MiscellaneousServices />
            <ResearchInnovation />
            <Technologies />
            <Stats />
            <Clients />
            
            {/* 2. Portfolio & Proof */}
            <FutureProofAI />
            <CaseStudies />
            <PortfolioGrid />
            <Testimonials />
            <ROISection />
            <BookingSection />

            {/* 3. LOCATIONS (Moved here, directly above Contact) */}
            <div id="location">
               <Locations /> 
            </div>

            {/* 4. FINAL CONTACT SECTION */}
            <ContactSection />
          </>
        } />

        <Route path="/services" element={
          <div className="pt-[90px]">
            <Services />
            <MiscellaneousServices />
            <Locations /> 
            <ContactSection />
          </div>
        } />
        
        <Route path="/ai-services" element={
          <div className="pt-[90px]">
            <AISolutions />
            <ContactSection />
          </div>
        } />
      </Routes>

      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;