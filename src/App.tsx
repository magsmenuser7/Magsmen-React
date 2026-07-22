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
import ScrollToTopWithHash from './components/ScrollToTopWithHash.tsx';
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
import SkinAffairSubBrandName from './pages/SkinAffairSubBrandName.tsx';
import SkinAffairStrategicAnalysis from './pages/SkinAffairStrategicAnalysis.tsx';
import BiomInnovations from './pages/BiomInnovations.tsx'
import BrandAssesment from './pages/BrandAssesment.tsx';
import ServicesDeck from './pages/ServiceDeck.tsx'
import GrowthPartnerBriefing from "./pages/GrowthPartnerBriefing.tsx"
import Kalanikethan from "./pages/Kalanekithan.tsx"
import FoodBrandArchitecture from './pages/MultiCategoryFoodBrandArchitecture.tsx';
import StremedyProposal from './pages/StremedyProposal.tsx';
import MagsmenAnnaulAdvisoryProgramme from "./pages/AnnaulAdvisoryProgramme.tsx"
import NirvaFranchiseProposal from './pages/NirvaFranchiseProposal.tsx';
import TungabhadraWarriorsProposal from './pages/Tungabhadra.tsx';
import SiyaraBrandIdentity from './pages/SiyaraBrandIdentity.tsx'
import MagsmenServices from './pages/MagsmenServices.tsx'
import MagsmenPresentation from './pages/Presentation.tsx'
import DoubleHorseOrganicsProposal from './pages/DobuleHorseOrganics.tsx'
import SorvetAdvisoryProposal from './pages/SorvetAdvisoryProposal.tsx';
import StatureByMagsmen from './pages/StatureByMagsmen.tsx';
import ZoomRedirect from './pages/ZoomRedirect.tsx';
import { HelmetProvider } from 'react-helmet-async'; // ✅ NEW
import SEOHead from './components/SEOHead.tsx'; // ✅ NEW
import MagsmenBrandJourney from './pages/MagsmenBrandJourney.tsx';
import SEOCommandCenter from './pages/SEOCommandCenter.tsx';
import SkinAffairProposal from './pages/SkinAffairProposal.tsx';
import FinalHomePage from './pages/FinalHomePage.tsx';
import MagsmenSVPProposal from './pages/MagsmenSVPProposal.tsx';
import FareEagleStrategicAnalysis from './pages/FareEagleStrategicAnalysis.tsx'


// 2. Define a Layout Component that includes Header and Footer
const MainLayout = () => {
  return (
    <>
      <SEOHead /> {/* ✅ Canonical + Meta title + Meta description — automatic */}
      {/* <Header /> */}
      <main>
        <Outlet /> {/* This renders the child route's element (Home, About, etc.) */}
      </main>
      {/* <Footer /> */}
    </>
  );
};


// ── Layout 2: No Header, No Footer + SEOHead ─────────────────
// Client pages కి కూడా canonical tag వస్తుంది
const BareLayout = () => {
  return (
    <>
      <SEOHead /> {/* ✅ Client pages కి కూడా canonical tag */}
      <Outlet />
    </>
  );
};

function App() {
  return (

    // ✅ HelmetProvider — SEOHead.tsx పని చేయాలంటే ఇది mandatory
    <HelmetProvider>
    <Router>

      <div className="min-h-screen bg-white">
        <ScrollToTopWithHash />
        
        <Routes>
          {/* GROUP 1: All pages that REQUIRE Header & Footer */}
          {/* We wrap them in the MainLayout route */}
          <Route element={<MainLayout />}>

            
            {/* <Route path="/" element={<Home />} />
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
            <Route path="/stature-by-magsmen" element={<PersonalBrandConsultingPage />} />
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
            <Route path="/blog/:slug" element={<BlogDetail />} /> */}
            <Route path="/" element={<FinalHomePage />} />

          </Route>

          {/* GROUP 2: Pages WITHOUT Header & Footer */}
          {/* This sits outside the MainLayout */}
          <Route element={<BareLayout />}>
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
          <Route path="/skin-affair-strategic-analysis" element={<SkinAffairStrategicAnalysis />} />
          <Route path="/strategic-proposal-for-biom-innovations-pvt-ltd" element={<BiomInnovations />} />
          <Route path="/brand-assessment" element={<BrandAssesment />} />
          <Route path="/service-deck" element={<ServicesDeck />} />
          <Route path="/growth-partner-briefing" element={<GrowthPartnerBriefing />} />
          <Route path="/kalanikethan-brand-creation-proposal" element={<Kalanikethan />} />
          <Route path="/subbayya-gari-hotel-multi-category-barnd-architecture-example" element={<FoodBrandArchitecture />} />
          <Route path="/stremedy-proposal" element={<StremedyProposal />} />
           <Route path="/annual-advisory-programme" element={<MagsmenAnnaulAdvisoryProgramme />} />
           <Route path="/nirva-franchise-proposal" element={<NirvaFranchiseProposal />} />
           <Route path="/tungabhadra-warriors-proposal" element={<TungabhadraWarriorsProposal />} />
           <Route path="/siyara-brand-identity" element={<SiyaraBrandIdentity />} />
           <Route path="/services-internal-document" element={<MagsmenServices />} />
           <Route path="/presentation" element={<MagsmenPresentation />} />
           <Route path="/tdh-brand-creation-proposal" element={<DoubleHorseOrganicsProposal />} />
           <Route path="/sorvet-advisory-proposal" element={<SorvetAdvisoryProposal />} />
           <Route path="/stature-strategic-identity-architecture-magsmen" element={<StatureByMagsmen />} />
           <Route path="/magsmen-brand-journey" element={<MagsmenBrandJourney />} />
           <Route path="/zoom" element={<ZoomRedirect />} />
           <Route path="/seo-command-center" element={<SEOCommandCenter />} />
           <Route path="/skin-affair-proposal" element={<SkinAffairProposal />} />
           <Route path="/magsmen-svp-proposal" element={<MagsmenSVPProposal />} />
           <Route path="/fare-eagle-strategic-analysis" element={<FareEagleStrategicAnalysis />} />

           

           </Route>
        </Routes>
      </div>
    </Router>
    </HelmetProvider>
  );
}

export default App;












