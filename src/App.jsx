import React from 'react';

// Navigation & Hero
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Trust & Services
import Awards from './components/Awards';
import Stats from './components/Stats';
import Services from './components/Services';
import AISolutions from './components/AISolutions';

// Portfolio & Evidence
import Portfolio from './components/Portfolio';
import CaseStudies from './components/CaseStudies';
import Technologies from './components/Technologies';
import ROI from './components/ROI';

// Proof & Identity
import Testimonials from './components/Testimonials';
import Clients from './components/Clients';
import CEO from './components/CEO';
import GlobalNetwork from './components/GlobalNetwork';

// Support & Final CTA
import FAQ from './components/FAQ';
import Locations from './components/Locations';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

// --- NEW COMPONENT ---
import ChatBot from './components/ChatBot'; 

function App() {
  return (
    <div className="font-sans text-gray-900 overflow-x-hidden relative">
      {/* Starting the page at the top */}
      <TopBar />
      <Navbar />
      <Hero />

      {/* Main Content Flow */}
      <Awards />
      <Stats />
      <Services />
      <AISolutions />
      <Portfolio />
      <CaseStudies />
      <Technologies />
      <ROI />
      <Testimonials />
      <Clients />
      <CEO />
      <GlobalNetwork />
      
      {/* Lower Sections */}
      <FAQ />
      <ContactSection />
      <Locations />
      <Footer />

      {/* Floating Chat Widget */}
      <ChatBot /> 
    </div>
  );
}

export default App;