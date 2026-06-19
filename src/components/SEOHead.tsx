// SEOHead.tsx
// Place this file in: src/components/SEOHead.tsx
//
// ఈ component ప్రతి page కి automatically:
// 1. Correct canonical tag set చేస్తుంది
// 2. Meta title set చేస్తుంది
// 3. Meta description set చేస్తుంది

import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const BASE_URL = 'https://www.magsmen.com';

// ── ప్రతి page కి SEO data ──────────────────────────────────────
const PAGE_SEO: Record<string, { title: string; description: string }> = {

  // CORE PAGES
  '/': {
    title: 'Magsmen Strategy Consulting Firm India | Magsmen Strategy Consultants',
    description: 'Magsmen is a leading brand consulting firm in India helping founders, MSMEs, and corporates build strategic brands. Brand strategy, positioning, naming, and legal brand protection — trusted by IPL sponsors and Fortune 25 clients.',
  },
  '/about': {
    title: 'About Magsmen Strategy Consultants | Strategy Consultants',
    description: 'Magsmen is one of India\'s most differentiated strategy consulting practices. Learn about our approach, our founder Sandeep N, and our work with IPL sponsors and Fortune 25 clients.',
  },
  '/contact': {
    title: 'Contact Magsmen | Strategy Consulting Enquiry India',
    description: 'Get in touch with Magsmen Strategy Consultants. Reach us at connect@magsmen.com or +91 90449 10449. Based in Hyderabad, serving founders and businesses across India.',
  },
  '/expertise': {
    title: 'Our Expertise | Brand Strategy & Consulting | Magsmen',
    description: 'Explore Magsmen\'s expertise in brand strategy, brand positioning, personal branding, corporate rebranding, and legal brand protection for Indian businesses.',
  },
  '/careers': {
    title: 'Careers at Magsmen | Join Our Strategy Consulting Team',
    description: 'Join Magsmen Strategy Consultants. We are looking for strategic thinkers, brand builders, and creative professionals to grow with us.',
  },
  '/partner-with-us': {
    title: 'Partner With Magsmen | Strategy Consulting Partnerships India',
    description: 'Partner with Magsmen Strategy Consultants. Explore collaboration opportunities with one of India\'s leading strategy firms.',
  },
  '/media': {
    title: 'Magsmen in the Media | Press & Coverage',
    description: 'Magsmen Strategy Consultants in the press. Read our media coverage, press mentions, and thought leadership features across Indian business publications.',
  },
  '/faqs': {
    title: 'FAQs | Magsmen Strategy Consultants',
    description: 'Frequently asked questions about Magsmen\'s strategy consulting services, process, pricing, and engagement models.',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Magsmen Strategy Consultants',
    description: 'Magsmen Strategy Consultants privacy policy. Learn how we collect, use, and protect your personal information.',
  },
  '/workdetails': {
    title: 'Work Details | Magsmen Strategy Consultants',
    description: 'Detailed case work and strategy consulting outcomes from Magsmen Strategy Consultants.',
  },

  // SERVICE PAGES
  '/brand-consulting': {
    title: 'Brand Consulting Hyderabad India | Magsmen',
    description: 'Strategic brand consulting for businesses in Hyderabad and across India. Magsmen helps founders and corporates build brands that earn market leadership.',
  },
  '/personal-brand-consulting': {
    title: 'Personal Brand Consultant India | Magsmen',
    description: 'Build a powerful personal brand as a founder, leader, or professional. Magsmen\'s personal brand consulting helps you own your market position in India.',
  },
  '/corporate-rebranding': {
    title: 'Corporate Rebranding Firm India | Magsmen',
    description: 'Strategic corporate rebranding for Indian businesses. Magsmen helps companies reposition, rename, and rebuild their brand for growth.',
  },
  '/brand-expresso': {
    title: 'Brand Expresso | Brand Strategy for Startups India | Magsmen',
    description: 'Brand Expresso by Magsmen — a focused brand strategy package for startups and early-stage businesses in India. Build your brand foundation fast.',
  },
  '/brand-creation': {
    title: 'Brand Naming Consultant India | Brand Creation | Magsmen',
    description: 'Professional brand naming and brand creation services in India. Magsmen creates brand names, identities, and positioning that stand out in competitive markets.',
  },
  '/image-consulting': {
    title: 'Image Consulting for Executives India | Magsmen',
    description: 'Executive image consulting by Magsmen. Build the visual and personal presence that matches your brand authority as a leader in India.',
  },
  '/link-fluence': {
    title: 'LinkFluence | Digital Brand Presence | Magsmen',
    description: 'LinkFluence by Magsmen — strategic digital brand presence building for founders and businesses across India.',
  },
  '/launchpad': {
    title: 'Launchpad | Brand Launch Strategy India | Magsmen',
    description: 'Magsmen Launchpad — a structured brand launch programme for new businesses and products entering the Indian market.',
  },
  '/brand-audit': {
    title: 'Brand Audit India | Brand Health Check | Magsmen',
    description: 'Magsmen\'s brand audit service gives you a complete health check of your brand — positioning, identity, communication, and digital presence. Based in India.',
  },

  // WORKS & BLOG
  '/case-studies': {
    title: 'Brand Consulting Case Studies India | Magsmen',
    description: 'Explore Magsmen\'s brand consulting case studies. Real outcomes for real businesses — from MSMEs to IPL sponsors across India.',
  },
  '/blogs': {
    title: 'Brand Strategy Insights | Ideas | Magsmen',
    description: 'Brand strategy insights, ideas, and thought leadership from Magsmen Brand Consultants. Written for founders and business leaders in India.',
  },
  '/stature': {
    title: 'Stature | Executive Presence Programme | Magsmen',
    description: 'Stature by Magsmen — an executive presence and personal brand programme for senior leaders and founders in India.',
  },

  // CLIENT PAGES & REPORTS
  '/andhra-pradesh-aviation-network': {
    title: 'Andhra Pradesh Aviation Network | Magsmen',
    description: 'Strategic brand and positioning report for Andhra Pradesh Aviation Network by Magsmen Brand Consultants.',
  },
  '/brand-audit-sreenidhi-global-school': {
    title: 'Brand Audit — Sreenidhi Global School | Magsmen',
    description: 'Brand audit report for Sreenidhi Global School by Magsmen Brand Consultants.',
  },
  '/brand-audit-sri-sai-rma-high-school': {
    title: 'Brand Audit — Sri Sai RMA High School | Magsmen',
    description: 'Brand audit report for Sri Sai RMA High School by Magsmen Brand Consultants.',
  },
  '/brand-audit-magsmen': {
    title: 'Magsmen Brand Audit System',
    description: 'Magsmen internal brand audit system and assessment framework.',
  },
  '/brand-audit-delhi-world-school': {
    title: 'Brand Audit — Delhi World School | Magsmen',
    description: 'Brand and digital audit report for Delhi World School by Magsmen Brand Consultants.',
  },
  '/brand-health-infographic-delhi-world-school': {
    title: 'Brand Health Infographic — Delhi World School | Magsmen',
    description: 'Brand health infographic for Delhi World School Chintal by Magsmen Brand Consultants.',
  },
  '/infinite-andhra-strategic-tourism-blueprint': {
    title: 'Infinite Andhra Strategic Tourism Blueprint | Magsmen',
    description: 'Strategic tourism brand blueprint for Infinite Andhra by Magsmen Brand Consultants.',
  },
  '/sowmya-feeds': {
    title: 'Sowmya Feeds | Brand Strategy | Magsmen',
    description: 'Brand strategy and consulting report for Sowmya Feeds by Magsmen Brand Consultants.',
  },
  '/tdh-x-pure-o-natural': {
    title: 'TDH x Pure O Natural | Brand Strategy | Magsmen',
    description: 'Strategic brand collaboration report for TDH x Pure O Natural by Magsmen Brand Consultants.',
  },
  '/tdh-protien-dashboard': {
    title: 'TDH Protein Dashboard | Magsmen',
    description: 'TDH protein product brand dashboard by Magsmen Brand Consultants.',
  },
  '/tdh-product-communication-analysis': {
    title: 'TDH Product Communication Analysis | Magsmen',
    description: 'Product communication analysis for TDH Group by Magsmen Brand Consultants.',
  },
  '/tdh-group-strategic-dashboard': {
    title: 'TDH Group Strategic Dashboard | Magsmen',
    description: 'Strategic brand dashboard for TDH Group by Magsmen Brand Consultants.',
  },
  '/tdh-content-calendar-jan-2026': {
    title: 'TDH Content Calendar January 2026 | Magsmen',
    description: 'TDH Group content calendar for January 2026 by Magsmen Brand Consultants.',
  },
  '/tdh-content-calendar-april-2026': {
    title: 'TDH Content Calendar April 2026 | Magsmen',
    description: 'TDH Group content calendar for April 2026 by Magsmen Brand Consultants.',
  },
  '/wealth-management-landscape': {
    title: 'Wealth Management Landscape | Brand Strategy | Magsmen',
    description: 'Wealth management industry brand landscape analysis by Magsmen Brand Consultants.',
  },
  '/magsmen-strategic-proposal': {
    title: 'Magsmen Strategic Proposal',
    description: 'Strategic brand consulting proposal by Magsmen Brand Consultants.',
  },
  '/sorvet-ice-cream-brand-positioning-and-market-entry-strategy': {
    title: 'Sorvet Ice Cream — Brand Positioning & Market Entry | Magsmen',
    description: 'Brand positioning and market entry strategy for Sorvet Ice Cream by Magsmen Brand Consultants.',
  },
  '/sri-padmavati-mahila-visvavidyalayam-trupati-audit-form': {
    title: 'Sri Padmavati Mahila Visvavidyalayam — Brand Audit | Magsmen',
    description: 'Brand audit form for Sri Padmavati Mahila Visvavidyalayam, Tirupati by Magsmen Brand Consultants.',
  },
  '/skin-affair': {
    title: 'Skin Affair | Brand Strategy | Magsmen',
    description: 'Brand strategy and consulting for Skin Affair by Magsmen Brand Consultants.',
  },
  '/skin-affair-strategy': {
    title: 'Skin Affair Strategy | Magsmen',
    description: 'Strategic brand analysis and positioning for Skin Affair by Magsmen Brand Consultants.',
  },
  '/skin-affair-sprint-report': {
    title: 'Skin Affair Sprint Report | Magsmen',
    description: 'Brand sprint report for Skin Affair by Magsmen Brand Consultants.',
  },
  '/skin-affair-sub-brand-name': {
    title: 'Skin Affair Sub Brand Naming | Magsmen',
    description: 'Sub brand naming strategy for Skin Affair by Magsmen Brand Consultants.',
  },
  '/skin-affair-strategic-analysis': {
    title: 'Skin Affair Strategic Analysis | Magsmen',
    description: 'Strategic brand analysis for Skin Affair by Magsmen Brand Consultants.',
  },
  '/bct-proposal': {
    title: 'BCT Strategic Proposal | Magsmen',
    description: 'Strategic brand consulting proposal for BCT by Magsmen Brand Consultants.',
  },
  '/snigdha-strategic-proposal': {
    title: 'Snigdha Strategic Proposal | Magsmen',
    description: 'Strategic brand consulting proposal for Snigdha by Magsmen Brand Consultants.',
  },
  '/subbayya-gari-hotel-consulting-proposal': {
    title: 'Subbayya Gari Hotel — Brand Consulting Proposal | Magsmen',
    description: 'Brand consulting proposal for Subbayya Gari Hotel by Magsmen Brand Consultants.',
  },
  '/subbayya-gari-hotel-multi-category-barnd-architecture-example': {
    title: 'Subbayya Gari Hotel — Multi Category Brand Architecture | Magsmen',
    description: 'Multi category food brand architecture example for Subbayya Gari Hotel by Magsmen Brand Consultants.',
  },
  '/strategic-proposal-for-biom-innovations-pvt-ltd': {
    title: 'Biom Innovations — Strategic Brand Proposal | Magsmen',
    description: 'Strategic brand consulting proposal for Biom Innovations Pvt Ltd by Magsmen Brand Consultants.',
  },
  '/brand-assessment': {
    title: 'Brand Assessment | Magsmen',
    description: 'Comprehensive brand assessment tool and report by Magsmen Brand Consultants.',
  },
  '/service-deck': {
    title: 'Magsmen Services Deck | Brand Consulting India',
    description: 'Complete services deck for Magsmen Brand Consultants — brand strategy, positioning, naming, and consulting services across India.',
  },
  '/growth-partner-briefing': {
    title: 'Growth Partner Briefing | Magsmen',
    description: 'Growth partner briefing document by Magsmen Brand Consultants.',
  },
  '/kalanikethan-brand-creation-proposal': {
    title: 'Kalanikethan — Brand Creation Proposal | Magsmen',
    description: 'Brand creation consulting proposal for Kalanikethan by Magsmen Brand Consultants.',
  },
  '/stremedy-proposal': {
    title: 'Stremedy — Strategic Proposal | Magsmen',
    description: 'Strategic brand consulting proposal for Stremedy by Magsmen Brand Consultants.',
  },
  '/annual-advisory-programme': {
    title: 'Annual Advisory Programme | Magsmen',
    description: 'Magsmen Annual Advisory Programme — year-long strategic brand consulting and advisory for founders and businesses in India.',
  },
  '/nirva-franchise-proposal': {
    title: 'Nirva Franchise — Brand Proposal | Magsmen',
    description: 'Brand consulting and franchise strategy proposal for Nirva by Magsmen Brand Consultants.',
  },
  '/tungabhadra-warriors-proposal': {
    title: 'Tungabhadra Warriors — Brand Proposal | Magsmen',
    description: 'Strategic brand proposal for Tungabhadra Warriors by Magsmen Brand Consultants.',
  },
  '/siyara-brand-identity': {
    title: 'Siyara Brand Identity | Magsmen',
    description: 'Brand identity creation and strategy for Siyara by Magsmen Brand Consultants.',
  },
  '/services-internal-document': {
    title: 'Magsmen Services | Internal Document',
    description: 'Internal services document for Magsmen Brand Consultants.',
  },
  '/presentation': {
    title: 'Magsmen Presentation | Brand Consulting India',
    description: 'Magsmen Brand Consultants — strategic brand consulting presentation for Indian businesses.',
  },
   
};

// ── Default fallback — page SEO data లేకపోతే ──────────────────
const DEFAULT_SEO = {
  title: 'Magsmen Brand Consultants | Brand Consulting Firm India',
  description: 'Magsmen is a leading brand consulting firm in India. Brand strategy, positioning, naming, and legal brand protection for founders and businesses.',
};

// ── SEOHead Component ──────────────────────────────────────────
const SEOHead = () => {
  const { pathname } = useLocation();

  // Current page SEO data తీసుకోవడం
  const seo = PAGE_SEO[pathname] || DEFAULT_SEO;

  // Current page యొక్క correct canonical URL
  const canonicalUrl = `${BASE_URL}${pathname}`;

  return (
    <Helmet>
      {/* Page Title */}
      <title>{seo.title}</title>

      {/* Meta Description */}
      <meta name="description" content={seo.description} />

      {/* ✅ Canonical Tag — ప్రతి page కి దాని సొంత URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Magsmen Brand Consultants" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:url" content={canonicalUrl} />
    </Helmet>
  );
};

export default SEOHead;