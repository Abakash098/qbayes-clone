import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import OneSignal from 'react-onesignal'; 
import AOS from 'aos';            
import 'aos/dist/aos.css';       

// --- CORE COMPONENTS ---
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import ContactSection from './components/ContactSection'; 

// --- MAIN PAGES ---
import Hero from './components/Hero';
import AboutUs from './components/AboutUs'; 
import OurTeam from './components/OurTeam'; 
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

// --- IOT SPECIFIC PAGES ---
import AgriculturalAiBot from './components/InternetofThings/AgriculturalAIBot';
import AquisherWaterMonitor from './components/InternetofThings/AquisherWaterMonitor'; 
import AutonomousBeachCleaner from './components/InternetofThings/AutonomousBeachCleaner'; 
import HazeRainRemoval from './components/InternetofThings/HazeAndRainRemoval';
import SoilParameterEstimation from './components/InternetofThings/SoilParameterEstimation'; 
import GPSAssetTracking from './components/InternetofThings/GPSAssetTracking'; 
import RFIDInventorySystem from './components/InternetofThings/RFIDInventorySystem';
import SolarAgriDashboard from './components/InternetofThings/SolarAgriDashboard';
import PatientMonitoring from './components/InternetofThings/PatientMonitoring'; 

// --- SECTION COMPONENTS ---
import About from './components/About'; 
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

// --- HELPER COMPONENTS ---
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

// Professional Page Wrapper to clean up repetitive code
const PageLayout = ({ children, showPadding = true }) => (
  <div className={showPadding ? "pt-[90px]" : ""}>
    {children}
    <ContactSection />
  </div>
);

function App() {
  // Initialize OneSignal
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

  // Initialize AOS (Animate on Scroll)
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      offset: 100,    
      once: false,    
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="font-sans text-slate-900 bg-white min-h-screen overflow-x-hidden selection:bg-purple-100 selection:text-purple-900">
      <ScrollToTop />
      <Navbar />

      <Routes>
        {/* 1. HOME PAGE */}
        <Route path="/" element={
          <div className="animate-fadeIn">
            <Hero />
            <About /> 
            <Services />
            <MiscellaneousServices />
            <ResearchInnovation />
            <IoTService />
            <Technologies />
            <Stats />
            
            <FutureProofAI />
            <CaseStudies />
            
            <ROISection />
            <div id="booking"><BookingSection /></div>
            <div id="location"><Locations /></div>
            <ContactSection />
          </div>
        } />

        {/* 2. CORPORATE PAGES */}
        <Route path="/about" element={<PageLayout showPadding={false}><AboutUs /><Clients /></PageLayout>} />
        <Route path="/our-team" element={<PageLayout showPadding={false}><OurTeam /></PageLayout>} /> 
        <Route path="/how-we-work" element={<PageLayout><HowWeWork /></PageLayout>} />
        <Route path="/services" element={<PageLayout><Services /></PageLayout>} />
        <Route path="/case-studies" element={<PageLayout showPadding={false}><CaseStudies /></PageLayout>} />
        <Route path="/blog" element={<PageLayout showPadding={false}><Blog /></PageLayout>} />

        {/* 3. CORE SERVICE ROUTES */}
        <Route path="/it-consultancy" element={<PageLayout showPadding={false}><ITConsultancy /></PageLayout>} />
        <Route path="/ui-ux-design" element={<PageLayout showPadding={false}><UIUXDesign /></PageLayout>} />
        <Route path="/digital-marketing" element={<PageLayout showPadding={false}><DigitalMarketing /></PageLayout>} /> 
        <Route path="/web-development" element={<PageLayout showPadding={false}><WebDevelopment /></PageLayout>} /> 
        <Route path="/mobile-app-development" element={<PageLayout showPadding={false}><MobileAppDevelopment /></PageLayout>} /> 
        <Route path="/iot-development" element={<PageLayout showPadding={false}><IoTDevelopment /></PageLayout>} /> 
        <Route path="/game-development" element={<PageLayout showPadding={false}><GameDevelopment /></PageLayout>} /> 

        {/* 4. IOT PRODUCT ROUTES - UPDATED FLAGSHIP PRODUCTS */}
        <Route 
          path="/agricultural-ai-bot" 
          element={
            <PageLayout showPadding={false}>
              <AgriculturalAiBot />
              <div className="bg-slate-50 py-10 border-t border-slate-100"><Clients /></div>
            </PageLayout>
          } 
        />

        <Route 
          path="/autonomous-beach-cleaner" 
          element={
            <PageLayout showPadding={false}>
              <AutonomousBeachCleaner />
              <div className="bg-slate-50 py-10 border-t border-slate-100"><Clients /></div>
            </PageLayout>
          } 
        />

        <Route 
          path="/aquisher-water-monitor" 
          element={
            <PageLayout showPadding={false}>
              <AquisherWaterMonitor />
              <div className="bg-slate-50 py-10 border-t border-slate-100"><Clients /></div>
            </PageLayout>
          } 
        />

        <Route 
          path="/patient-monitoring" 
          element={
            <PageLayout showPadding={false}>
              <PatientMonitoring />
              <div className="bg-slate-50 py-10 border-t border-slate-100"><Clients /></div>
            </PageLayout>
          } 
        />
        
        <Route 
          path="/soil-parameter-estimation" 
          element={
            <PageLayout showPadding={false}>
              <SoilParameterEstimation />
              <div className="bg-slate-50 py-10 border-t border-slate-100"><Clients /></div>
            </PageLayout>
          } 
        />

        <Route 
          path="/haze-rain-removal" 
          element={
            <PageLayout showPadding={false}>
              <HazeRainRemoval />
              <div className="bg-slate-50 py-10 border-t border-slate-100"><Clients /></div>
            </PageLayout>
          } 
        />
        
        <Route 
          path="/gps-asset-tracking" 
          element={
            <PageLayout showPadding={false}>
              <GPSAssetTracking />
              <div className="bg-slate-50 py-10 border-t border-slate-100"><Clients /></div>
            </PageLayout>
          } 
        />

        <Route 
          path="/rfid-inventory-system" 
          element={
            <PageLayout showPadding={false}>
              <RFIDInventorySystem />
              <div className="bg-slate-50 py-10 border-t border-slate-100"><Clients /></div>
            </PageLayout>
          } 
        />

        <Route 
          path="/solar-agri-dashboard" 
          element={
            <PageLayout showPadding={false}>
              <SolarAgriDashboard />
              <div className="bg-slate-50 py-10 border-t border-slate-100"><Clients /></div>
            </PageLayout>
          } 
        />

        {/* 5. AI PAGES */}
        <Route path="/ai-chatbot" element={<PageLayout><AIChatbot /></PageLayout>} />
        <Route path="/ai-consulting" element={<PageLayout><AIConsulting /></PageLayout>} />
        <Route path="/ai-services" element={<PageLayout><AISolutions /></PageLayout>} />
        <Route path="/ai-development" element={<PageLayout><AIDevelopment /></PageLayout>} />

        {/* 6. INDUSTRY SOLUTIONS */}
        <Route path="/solutions/sports" element={<PageLayout showPadding={false}><SportsApp /></PageLayout>} />
        <Route path="/solutions/social-media" element={<PageLayout showPadding={false}><SocialMediaApp /></PageLayout>} />
        <Route path="/solutions/ride-sharing" element={<PageLayout showPadding={false}><RideSharingApp /></PageLayout>} />
        <Route path="/solutions/fintech" element={<PageLayout showPadding={false}><FintechApp /></PageLayout>} />
        <Route path="/solutions/bfsi" element={<PageLayout showPadding={false}><BFSIApp /></PageLayout>} />
        <Route path="/solutions/food-delivery" element={<PageLayout showPadding={false}><FoodDeliveryApp /></PageLayout>} />
        <Route path="/solutions/salon-spa" element={<PageLayout showPadding={false}><SalonSpaApp /></PageLayout>} />
        <Route path="/solutions/real-estate" element={<PageLayout showPadding={false}><RealEstateApp /></PageLayout>} />
        <Route path="/solutions/online-ordering" element={<PageLayout showPadding={false}><OnlineOrderingApp /></PageLayout>} />
        <Route path="/solutions/on-demand" element={<PageLayout showPadding={false}><OnDemandApp /></PageLayout>} />
        <Route path="/solutions/elearning" element={<PageLayout showPadding={false}><ElearningApp /></PageLayout>} />
        <Route path="/solutions/crowdfunding" element={<PageLayout showPadding={false}><CrowdfundingApp /></PageLayout>} />
        <Route path="/solutions/fitness" element={<PageLayout showPadding={false}><FitnessApp /></PageLayout>} />
        <Route path="/solutions/logistics" element={<PageLayout showPadding={false}><LogisticsApp /></PageLayout>} />
        <Route path="/solutions/marketplace" element={<PageLayout showPadding={false}><MarketplaceApp /></PageLayout>} />
        <Route path="/solutions/travel-engine" element={<PageLayout showPadding={false}><TravelEngineApp /></PageLayout>} />
        <Route path="/solutions/travel-tourism" element={<PageLayout showPadding={false}><TravelTourismApp /></PageLayout>} />
        <Route path="/solutions/dating" element={<PageLayout showPadding={false}><DatingApp /></PageLayout>} />
        <Route path="/solutions/healthcare" element={<PageLayout showPadding={false}><HealthcareApp /></PageLayout>} />
        <Route path="/solutions/job-portal" element={<PageLayout showPadding={false}><JobPortalApp /></PageLayout>} />

        {/* 7. MISC ROUTES */}
        <Route path="/misc/academics" element={<PageLayout showPadding={false}><AcademicsEducation /></PageLayout>} />
        <Route path="/misc/documentation" element={<PageLayout showPadding={false}><Documentation /></PageLayout>} />
        <Route path="/misc/events" element={<PageLayout showPadding={false}><EventManagement /></PageLayout>} />
      </Routes>

      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;