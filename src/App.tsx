import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'; // 1. Added Outlet import
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Expertise from './pages/Expertise';
import CaseStudies from './pages/CaseStudies';
import CaseStudyDetail from './pages/CaseStudyDetail';
import BrandAudit from './pages/BrandAudit';
import Insights from './pages/Blogs';
import Careers from './pages/Careers';
import PartnerWithUs from './pages/PartnerWithUs';
import Contact from './pages/Contact';
import BrandConsultingPage from './pages/BrandConsulting';
import PersonalBrandConsultingPage from './pages/PersonalBrandConsulting';
import ImageConsultingPage from './pages/ImageConsulting';
import CorporateRebrandingPage from './pages/CorporateRebranding';
import BrandExpressoPage from './pages/BrandExpresso';
import BrandCreationPage from './pages/BrandCreation';
import LinkFluencePage from './pages/LinkFluence';
import LaunchpadPage from './pages/Launchpad';
import BlogDetail from './pages/BlogDetails';
import ScrollToTopWithHash from './components/ScrollToTopWithHash';
import WorkDetails from './pages/workDetails'
import Media from './pages/Media';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Faqs from './pages/Faqs';
import NewsletterViewer from "./pages/NewsletterViewer";
import AndhrapradeshAviationNetwork from "./pages/AndhrapradeshAviationNetwork";
import BrandaAditSreenidhiGlobalSchool from './pages/BrandaAditSreenidhiGlobalSchool';
import BrandAuditSriSaiRmaHighSchool from './pages/BrandAuditSriSaiRmaHighSchool';
import MagsmenBrandAuditSystem from './pages/MagsmenBrandAuditSystem';
import DelhiWorldSchoolBrandAndDigitalAudit from './pages/DelhiWorldSchoolBrandAndDigitalAudit';
import BrandHealthInfographicDWSChintal from './pages/BrandHealthInfographicDWSChintal';
import InfiniteAndhraStrategicTourismBlueprint from './pages/InfiniteAndhraStrategicTourismBlueprint';
import SowmyaFeeds from './pages/SowmyaFeeds';
import TdhXPureONatural from './pages/TdhXPureONatural';
import TdhProtienDashboard from './pages/TdhProtienDashboard';
import TdhProductCommunicationAnalysis from './pages/TdhProductCommunicationAnalysis';
import TdhGroupStrategicDashboard from './pages/TdhGroupStrategicDashboard';
import TdhContentCalendarJAN2026 from './pages/TdhContentCalendarJAN2026';
import WealthManagementLandscape from './pages/WealthManagementLandscape';
import MagsmenStrategicProposal from './pages/MagsmenStrategicProposal';
import SorvetIceCreamBrandPositioningAndMarketEntryStrategy from './pages/SorvetIceCreamBrandPositioningAndMarketEntryStrategy';
import ZohoForm from './pages/ZohoForm';
import SkinAffair from './pages/SkinAffair';
import TdhContentCalendarApril from './pages/TdhContentCalenderApril';
import Blogs from './pages/Blogs';
import Stature from './pages/Stature';
import SkinAffairSelect from './pages/SkinAffairStrategy.tsx';
import SkinAffairSprintReport from './pages/SkinAffairSprintReport.tsx';
import BctProposal from './pages/BctProposal.tsx';
import SnigdhaProposal from './pages/SnigdhaProposal.tsx';
import SubbayaGariHotel from './pages/SubbayiGariHotel.tsx';
import  SkinAffairSubBrandName from './pages/SkinAffairSubBrandName.tsx';

// 2. Define a Layout Component that includes Header and Footer
const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* This renders the child route's element (Home, About, etc.) */}
      </main>
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>

      <div className="min-h-screen bg-white">
        <ScrollToTopWithHash headerOffset={80} />
        
        <Routes>
          {/* GROUP 1: All pages that REQUIRE Header & Footer */}
          {/* We wrap them in the MainLayout route */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
            <Route path="/brand-audit" element={<BrandAudit />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/partner-with-us" element={<PartnerWithUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/brand-consulting" element={<BrandConsultingPage />} />
            <Route path="/personal-brand-consulting" element={<PersonalBrandConsultingPage />} />
            <Route path="/image-consulting" element={<ImageConsultingPage />} />
            <Route path="/corporate-rebranding" element={<CorporateRebrandingPage />} />
            <Route path="/brand-expresso" element={<BrandExpressoPage />} />
            <Route path="/brand-creation" element={<BrandCreationPage />} />
            <Route path="/link-fluence" element={<LinkFluencePage />} />
            <Route path="/launchpad" element={<LaunchpadPage />} />
            <Route path="/workdetails" element={<WorkDetails />} />
            <Route path="/media" element={<Media />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />

          </Route>

          {/* GROUP 2: Pages WITHOUT Header & Footer */}
          {/* This sits outside the MainLayout */}
          <Route path="/:slug" element={<NewsletterViewer />} />
          <Route path="/andhra-pradesh-aviation-network" element={<AndhrapradeshAviationNetwork />} />
          <Route path="/brand-audit-sreenidhi-global-school" element={<BrandaAditSreenidhiGlobalSchool />} />
          <Route path="/brand-audit-sri-sai-rma-high-school" element={<BrandAuditSriSaiRmaHighSchool />} />
          <Route path="/brand-audit-magsmen" element={<MagsmenBrandAuditSystem />} />
          <Route path="/brand-audit-delhi-world-school" element={<DelhiWorldSchoolBrandAndDigitalAudit />} />
          <Route path="/brand-health-infographic-delhi-world-school" element={<BrandHealthInfographicDWSChintal />} />
          <Route path="/infinite-andhra-strategic-tourism-blueprint" element={<InfiniteAndhraStrategicTourismBlueprint />} />
          <Route path="/sowmya-feeds" element={<SowmyaFeeds />} />
          <Route path="/tdh-x-pure-o-natural" element={<TdhXPureONatural />} />
          <Route path="/tdh-protien-dashboard" element={<TdhProtienDashboard />} />
          <Route path="/tdh-product-communication-analysis" element={<TdhProductCommunicationAnalysis />} />
          <Route path="/tdh-group-strategic-dashboard" element={<TdhGroupStrategicDashboard />} />
          <Route path="/tdh-content-calendar-jan-2026" element={<TdhContentCalendarJAN2026 />} />
          <Route path="/wealth-management-landscape" element={<WealthManagementLandscape />} />
          <Route path="/magsmen-strategic-proposal" element={<MagsmenStrategicProposal />} />
          <Route path="/sorvet-ice-cream-brand-positioning-and-market-entry-strategy" element={<SorvetIceCreamBrandPositioningAndMarketEntryStrategy />} />
          <Route path="/sri-padmavati-mahila-visvavidyalayam-trupati-audit-form" element={<ZohoForm />} />
          <Route path="/skin-affair" element={<SkinAffair />} />
          <Route path="/tdh-content-calendar-april-2026" element={<TdhContentCalendarApril />} />
          <Route path="/stature" element={<Stature />} />
          <Route path="/skin-affair-strategy" element={<SkinAffairSelect />} />
          <Route path="/skin-affair-sprint-report" element={<SkinAffairSprintReport />} />
          <Route path="/bct-proposal" element={<BctProposal />} />
          <Route path="/snigdha-strategic-proposal" element={<SnigdhaProposal />} />
          <Route path="/subbayya-gari-hotel-consulting-proposal" element={<SubbayaGariHotel />} />
          <Route path="/skin-affair-sub-brand-name" element={<SkinAffairSubBrandName />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;





// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import About from './pages/About';
// import Expertise from './pages/Expertise';
// import CaseStudies from './pages/CaseStudies';
// import CaseStudyDetail from './pages/CaseStudyDetail';
// import BrandAudit from './pages/BrandAudit';
// import Insights from './pages/Insights';
// import Careers from './pages/Careers';
// import PartnerWithUs from './pages/PartnerWithUs';
// import Contact from './pages/Contact';
// import BrandConsultingPage from './pages/BrandConsulting';
// import PersonalBrandConsultingPage from './pages/PersonalBrandConsulting';
// import ImageConsultingPage from './pages/ImageConsulting';
// import CorporateRebrandingPage from './pages/CorporateRebranding';
// import BrandExpressoPage from './pages/BrandExpresso';
// import BrandCreationPage from './pages/BrandCreation';
// import LinkFluencePage from './pages/LinkFluence';
// import LaunchpadPage from './pages/Launchpad';
// import BlogDetail from './pages/BlogDetails';
// import ScrollToTopWithHash from './components/ScrollToTopWithHash';
// import WorkDetails from './pages/workDetails'
// import Media from './pages/Media';
// import PrivacyPolicy from './pages/PrivacyPolicy';
// import Faqs from './pages/Faqs';
// import NewsletterViewer from "./pages/NewsletterViewer";
// import { useLocation } from "react-router-dom";




// function App() {
  
//   return (
//     <Router basename="/magsmenreact/">
//       <div className="min-h-screen bg-white">
//         <ScrollToTopWithHash headerOffset={80} />
//         <Header />
//         <main>
//           <Routes>

//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/expertise" element={<Expertise />} />
//             <Route path="/case-studies" element={<CaseStudies />} />
//             <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
//             <Route path="/brand-audit" element={<BrandAudit />} />
//             <Route path="/insights" element={<Insights />} />
//             <Route path="/careers" element={<Careers />} />
//             <Route path="/partner-with-us" element={<PartnerWithUs />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/brand-consulting" element={<BrandConsultingPage />} />
//             <Route path="/personal-brand-consulting" element={<PersonalBrandConsultingPage />} />
//             <Route path="/image-consulting" element={<ImageConsultingPage />} />
//             <Route path="/corporate-rebranding" element={<CorporateRebrandingPage />} />
//             <Route path="/brand-expresso" element={<BrandExpressoPage />} />
//             <Route path="/brand-creation" element={<BrandCreationPage />} />
//             <Route path="/link-fluence" element={<LinkFluencePage />} />
//             <Route path="/launchpad" element={<LaunchpadPage />} />
//             <Route path="/workdetails" element={<WorkDetails />} />
//             <Route path="/media" element={<Media />} />
//             <Route path="/faqs" element={<Faqs />} />
//             <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//             <Route path="/:slug" element={<NewsletterViewer />} />
//             <Route path="/blog/:slug" element={<BlogDetail />} />
            
            
            
//             {/* <Route path="/blog-details" element={<BlogDetail />} /> */}
//           </Routes>
//         </main>
//        <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;







