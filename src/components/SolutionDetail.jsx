import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowRight, FaCheckCircle, FaChartLine, FaShieldAlt, FaMobileAlt, FaCogs } from 'react-icons/fa';

// --- MASSIVE DATA DICTIONARY FOR ALL 20 SOLUTIONS ---
const solutionsData = {
  "sports": { title: "Sports App Development", desc: "Engage fans with real-time score updates, fantasy leagues, and interactive sports platforms.", img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=1600" },
  "social-media": { title: "Social Media Solutions", desc: "Build highly scalable, engaging, and secure social networking platforms with real-time chat and media sharing.", img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1600" },
  "ride-sharing": { title: "Ride Sharing Platforms", desc: "Advanced GPS tracking, real-time routing, and secure payment gateways for modern ride-hailing apps.", img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1600" },
  "fintech": { title: "Fintech Development", desc: "Secure, compliant, and robust financial software, from digital wallets to blockchain trading platforms.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600" },
  "bfsi": { title: "BFSI Software Solutions", desc: "Enterprise-grade software for Banking, Financial Services, and Insurance sectors ensuring data integrity.", img: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&q=80&w=1600" },
  "food-delivery": { title: "Food Delivery Apps", desc: "End-to-end food delivery ecosystems connecting users, restaurants, and delivery partners seamlessly.", img: "https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&q=80&w=1600" },
  "salon-spa": { title: "Salon & Spa Booking", desc: "Streamline appointment scheduling, staff management, and CRM for the wellness industry.", img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1600" },
  "real-estate": { title: "Real Estate Portals", desc: "Immersive property listing platforms featuring AR tours, interactive maps, and broker dashboards.", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1600" },
  "online-ordering": { title: "Online Ordering Systems", desc: "Customized digital catalogs and frictionless checkout systems for retail and wholesale.", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1600" },
  "on-demand": { title: "On-Demand Services", desc: "Dynamic platforms designed to deliver household, mechanical, or professional services instantly.", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1600" },
  "elearning": { title: "eLearning Platforms", desc: "Interactive Learning Management Systems (LMS) with live classes, assessments, and progress tracking.", img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1600" },
  "crowdfunding": { title: "Crowdfunding Apps", desc: "Secure investment and donation platforms to help startups and creators raise capital globally.", img: "https://images.unsplash.com/photo-1531538512164-9b3c3bd29eb2?auto=format&fit=crop&q=80&w=1600" },
  "fitness": { title: "Fitness Applications", desc: "Health tracking, virtual coaching, and wearable device integration for the modern fitness enthusiast.", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1600" },
  "logistics": { title: "Logistics & Distribution", desc: "Fleet management, supply chain optimization, and real-time shipment tracking software.", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1600" },
  "marketplace": { title: "Multivendor Marketplace", desc: "Robust digital marketplaces akin to Amazon, enabling multiple sellers and automated payouts.", img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1600" },
  "travel-engine": { title: "Travel Booking Engines", desc: "Aggregated flight, hotel, and car rental booking systems with dynamic pricing APIs.", img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1600" },
  "travel-tourism": { title: "Travel & Tourism Apps", desc: "Immersive itinerary planners, local guides, and AR-based tourism exploration apps.", img: "https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&q=80&w=1600" },
  "dating": { title: "Dating Applications", desc: "Algorithm-driven matchmaking, secure video calling, and high-performance dating ecosystems.", img: "https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?auto=format&fit=crop&q=80&w=1600" },
  "healthcare": { title: "Healthcare IT Solutions", desc: "HIPAA-compliant telemedicine platforms, electronic health records (EHR), and patient portals.", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1600" },
  "job-portal": { title: "Job Portal Development", desc: "AI-driven resume parsing, automated matchmaking, and secure interviewing platforms.", img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1600" }
};

const defaultData = { title: "Custom Industry Solution", desc: "We build advanced, scalable solutions tailored to your specific industry requirements.", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600" };

const SolutionDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const data = solutionsData[id] || defaultData;

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  const features = [
    { icon: FaMobileAlt, title: "Omnichannel Experience", text: "Seamless performance across web, iOS, and Android." },
    { icon: FaShieldAlt, title: "Enterprise Security", text: "End-to-end encryption and strict regulatory compliance." },
    { icon: FaChartLine, title: "Scalable Architecture", text: "Cloud-native infrastructure designed for high traffic." },
    { icon: FaCogs, title: "Custom Integrations", text: "API connections to your existing CRM and ERP systems." }
  ];

  return (
    <div className="w-full bg-white font-sans animate-fadeIn pt-[90px]">
      
      {/* Dynamic Hero Section */}
      <div className="relative bg-[#020b2d] py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={data.img} alt={data.title} className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020b2d] via-[#020b2d]/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:w-[60%]">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-cyan-400 font-bold text-xs uppercase tracking-wider mb-8 backdrop-blur-md w-fit">
             Industry Specific Solution
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            {data.title}
          </h1>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed font-medium">
            {data.desc} Transform your operational capabilities with our dedicated, enterprise-grade engineering designed exclusively for your niche.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#00c2ff] hover:bg-[#00a0d6] text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg flex items-center gap-2">
              Start Your Project <FaArrowRight />
            </button>
            <button onClick={() => navigate(-1)} className="border-2 border-white/30 text-white font-bold py-4 px-8 rounded-full hover:bg-white/10 transition-all">
              Go Back
            </button>
          </div>
        </div>
      </div>

      {/* Advanced Features Grid */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-4">Why Choose Our <span className="text-[#00c2ff]">Solution?</span></h2>
          <p className="text-slate-500 font-medium text-lg">We deliver high-performance ecosystems tailored to your business model.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => (
            <div key={idx} className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:border-[#00c2ff]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#00c2ff] shadow-sm mb-6">
                <feat.icon size={24} />
              </div>
              <h4 className="font-bold text-lg text-slate-900 mb-3">{feat.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed">{feat.text}</p>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default SolutionDetail;