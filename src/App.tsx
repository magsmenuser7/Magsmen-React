import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Expertise from './pages/Expertise';
import CaseStudies from './pages/CaseStudies';
import CaseStudyDetail from './pages/CaseStudyDetail';
import BrandAudit from './pages/BrandAudit';
import Insights from './pages/Insights';
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




function App() {
  return (
    <Router basename={import.meta.env.DEV ? "/Magsmen-React" : "/"}>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
            <Route path="/brand-audit" element={<BrandAudit />} />
            <Route path="/insights" element={<Insights />} />
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
            {/* <Route path="/blog-details" element={<BlogDetail />} /> */}
            <Route path="/blog/:slug" element={<BlogDetail />} />
            
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;