import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import OneSignal from 'react-onesignal'; 
import AOS from 'aos';            // --- ADDED AOS ---
import 'aos/dist/aos.css';       // --- ADDED AOS CSS ---

// --- CORE COMPONENTS ---
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import ContactSection from './components/ContactSection'; 

// --- MAIN PAGES ---
import Hero from './components/Hero';
import About from './components/About'; 
import HowWeWork from './components/HowWeWork'; 
import Services from './components/Services';
import Blog from './components/Blog';
import CaseStudies from './components/CaseStudies'; 

// --- CORE SERVICES ---
import UIUXDesign from './components/services/UIUXDesign'; 
import DigitalMarketing from './components/services/DigitalMarketing'; 
import WebDevelopment from './components/services/WebDevelopment'; 
import MobileAppDevelopment from './components/services/MobileAppDevelopment'; 
import IoTDevelopment from './components/services/IoTDevelopment'; 
import GameDevelopment from './components/services/GameDevelopment'; 
import ITConsultancy from './components/services/ITConsultancy'; 

// --- MISCELLANEOUS SERVICES ---
import AcademicsEducation from './components/misc/AcademicsEducation';
import Documentation from './components/misc/Documentation';
import EventManagement from './components/misc/EventManagement';

// --- AI PAGES ---
import AISolutions from './components/AISolutions'; 
import AIDevelopment from './components/AIDevelopment';
import AIConsulting from './components/AIConsulting'; 
import AIChatbot from './components/AIChatbot'; 
import AIIntegration from './components/AIIntegration'; 
import GenAIDevelopment from './components/GenAIDevelopment'; 

// --- SECTION COMPONENTS ---
import Clients from './components/Clients';
import MiscellaneousServices from './components/MiscellaneousServices'; 
import Stats from './components/Stats';
import FutureProofAI from './components/FutureProofAI';
import BookingSection from './components/BookingSection';
import ResearchInnovation from './components/ResearchInnovation';
import IoTService from './components/IoTService'; 
import PortfolioGrid from './components/PortfolioGrid'; 
import Testimonials from './components/Testimonials'; 
import ROISection from './components/ROISection'; 
import Technologies from './components/Technologies'; 
import Locations from './components/Locations'; 

// --- SOLUTIONS ---
import SportsApp from './components/solutions/SportsApp';
import SocialMediaApp from './components/solutions/SocialMediaApp';
import RideSharingApp from './components/solutions/RideSharingApp';
import FintechApp from './components/solutions/FintechApp';
import BFSIApp from './components/solutions/BFSIApp';
import FoodDeliveryApp from './components/solutions/FoodDeliveryApp';
import SalonSpaApp from './components/solutions/SalonSpaApp';
import RealEstateApp from './components/solutions/RealEstateApp';
import OnlineOrderingApp from './components/solutions/OnlineOrderingApp';
import OnDemandApp from './components/solutions/OnDemandApp';
import ElearningApp from './components/solutions/ElearningApp';
import CrowdfundingApp from './components/solutions/CrowdfundingApp';
import FitnessApp from './components/solutions/FitnessApp';
import LogisticsApp from './components/solutions/LogisticsApp';
import MarketplaceApp from './components/solutions/MarketplaceApp';
import TravelEngineApp from './components/solutions/TravelEngineApp';
import TravelTourismApp from './components/solutions/TravelTourismApp';
import DatingApp from './components/solutions/DatingApp';
import HealthcareApp from './components/solutions/HealthcareApp';
import JobPortalApp from './components/solutions/JobPortalApp';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

function App() {
  // --- ONESIGNAL INITIALIZATION ---
  useEffect(() => {
    const runOneSignal = async () => {
      try {
        await OneSignal.init({
          appId: "d434a54a-a9ba-4edf-b905-dcd793a8e5e6", 
          allowLocalhostAsSecureOrigin: true, 
        });
        OneSignal.Slidedown.promptPush();
      } catch (error) {
        console.error("OneSignal error:", error);
      }
    };
    runOneSignal();
  }, []);

  // --- AOS ANIMATION INITIALIZATION (ADDED HERE) ---
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 100,    // Offset from the original trigger point
      once: false,    // Whether animation should happen only once - while scrolling down
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="font-sans text-slate-900 bg-white min-h-screen overflow-x-hidden">
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About /> 
            <Services />
            <MiscellaneousServices />
            <ResearchInnovation />
            <IoTService />
            <Technologies />
            <Stats />
            <Clients />
            <FutureProofAI />
            <CaseStudies />
            <PortfolioGrid />
            <Testimonials />
            <ROISection />
            <div id="booking"><BookingSection /></div>
            <div id="location"><Locations /></div>
            <ContactSection />
          </>
        } />

        <Route path="/about" element={<div className="pt-[90px]"><About /><ContactSection /></div>} />
        <Route path="/how-we-work" element={<div className="pt-[90px]"><HowWeWork /><ContactSection /></div>} />
        <Route path="/services" element={<div className="pt-[90px]"><Services /><ContactSection /></div>} />
        <Route path="/case-studies" element={<div><CaseStudies /><ContactSection /></div>} />
        <Route path="/blog" element={<div><Blog /><ContactSection /></div>} />

        <Route path="/it-consultancy" element={<div><ITConsultancy /><ContactSection /></div>} />
        <Route path="/ui-ux-design" element={<div><UIUXDesign /><ContactSection /></div>} />
        <Route path="/digital-marketing" element={<div><DigitalMarketing /><ContactSection /></div>} /> 
        <Route path="/web-development" element={<div><WebDevelopment /><ContactSection /></div>} /> 
        <Route path="/mobile-app-development" element={<div><MobileAppDevelopment /><ContactSection /></div>} /> 
        <Route path="/iot-development" element={<div><IoTDevelopment /><ContactSection /></div>} /> 
        <Route path="/game-development" element={<div><GameDevelopment /><ContactSection /></div>} /> 

        <Route path="/misc/academics" element={<div><AcademicsEducation /><ContactSection /></div>} />
        <Route path="/misc/documentation" element={<div><Documentation /><ContactSection /></div>} />
        <Route path="/misc/events" element={<div><EventManagement /><ContactSection /></div>} />

        <Route path="/ai-integration" element={<div className="pt-[90px]"><AIIntegration /><ContactSection /></div>} />
        <Route path="/ai-chatbot" element={<div className="pt-[90px]"><AIChatbot /><ContactSection /></div>} />
        <Route path="/gen-ai-development" element={<div className="pt-[90px]"><GenAIDevelopment /><ContactSection /></div>} />
        <Route path="/ai-consulting" element={<div className="pt-[90px]"><AIConsulting /><ContactSection /></div>} />
        <Route path="/ai-services" element={<div className="pt-[90px]"><AISolutions /><ContactSection /></div>} />
        <Route path="/ai-development" element={<div className="pt-[90px]"><AIDevelopment /><ContactSection /></div>} />

        <Route path="/solutions/sports" element={<div><SportsApp /><ContactSection /></div>} />
        <Route path="/solutions/social-media" element={<div><SocialMediaApp /><ContactSection /></div>} />
        <Route path="/solutions/ride-sharing" element={<div><RideSharingApp /><ContactSection /></div>} />
        <Route path="/solutions/fintech" element={<div><FintechApp /><ContactSection /></div>} />
        <Route path="/solutions/bfsi" element={<div><BFSIApp /><ContactSection /></div>} />
        <Route path="/solutions/food-delivery" element={<div><FoodDeliveryApp /><ContactSection /></div>} />
        <Route path="/solutions/salon-spa" element={<div><SalonSpaApp /><ContactSection /></div>} />
        <Route path="/solutions/real-estate" element={<div><RealEstateApp /><ContactSection /></div>} />
        <Route path="/solutions/online-ordering" element={<div><OnlineOrderingApp /><ContactSection /></div>} />
        <Route path="/solutions/on-demand" element={<div><OnDemandApp /><ContactSection /></div>} />
        <Route path="/solutions/elearning" element={<div><ElearningApp /><ContactSection /></div>} />
        <Route path="/solutions/crowdfunding" element={<div><CrowdfundingApp /><ContactSection /></div>} />
        <Route path="/solutions/fitness" element={<div><FitnessApp /><ContactSection /></div>} />
        <Route path="/solutions/logistics" element={<div><LogisticsApp /><ContactSection /></div>} />
        <Route path="/solutions/marketplace" element={<div><MarketplaceApp /><ContactSection /></div>} />
        <Route path="/solutions/travel-engine" element={<div><TravelEngineApp /><ContactSection /></div>} />
        <Route path="/solutions/travel-tourism" element={<div><TravelTourismApp /><ContactSection /></div>} />
        <Route path="/solutions/dating" element={<div><DatingApp /><ContactSection /></div>} />
        <Route path="/solutions/healthcare" element={<div><HealthcareApp /><ContactSection /></div>} />
        <Route path="/solutions/job-portal" element={<div><JobPortalApp /><ContactSection /></div>} />
      </Routes>

      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;