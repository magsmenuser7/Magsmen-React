import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

// --- 1. Global Styles (Injecting EXACT CSS from HTML) ---
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
    body {
        font-family: 'Inter', sans-serif;
        background-color: #f8fafc; /* Slate 50 */
        color: #0f172a; /* Slate 900 */
    }
    .section-title {
        position: relative;
        padding-bottom: 0.5rem;
        color: #0284c7; /* Sky 600 */
    }
    .section-title::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 50px;
        height: 3px;
        background-color: #059669; /* Emerald 600 */
        border-radius: 9999px;
    }
    .card-bg {
        background-color: #ffffff;
        transition: all 0.4s ease;
        cursor: pointer;
        border: 1px solid #e2e8f0;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
    }
    .card-bg:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        border-color: #38bdf8;
    }
    /* Modal Styles */
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(15, 23, 42, 0.7);
        backdrop-filter: blur(5px);
        z-index: 1000;
        display: flex; /* Changed from none for React conditional rendering */
        justify-content: center;
        align-items: center;
    }
    .modal-content {
        background-color: #ffffff;
        width: 95%;
        max-width: 900px;
        max-height: 90vh;
        overflow-y: auto;
        border-radius: 16px;
        padding: 2.5rem;
        border: 1px solid #cbd5e1;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        animation: modalPop 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        color: #1e293b;
    }
    @keyframes modalPop {
        from { transform: scale(0.95) translateY(20px); opacity: 0; }
        to { transform: scale(1) translateY(0); opacity: 1; }
    }
    
    /* Scroll Animation */
    .reveal {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s ease-out;
    }
    .reveal.active {
        opacity: 1;
        transform: translateY(0);
    }

    .chart-container {
        position: relative;
        height: 300px;
        width: 100%;
    }
    
    /* Custom Scrollbar */
    ::-webkit-scrollbar { width: 8px; }
    ::-webkit-scrollbar-track { background: #f1f5f9; }
    ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
    ::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
  `}</style>
);

// --- 2. Data Content ---
const detailData: Record<string, { title: string; content: string }> = {
  tech: {
    title: "Tech-Enabled Platforms",
    content: `<p><strong>Primary Function:</strong> Low-cost, scalable portfolio management using algorithms and quantitative models.</p><p><strong>Gap:</strong> Often fail to integrate complex NRI-specific compliance and localized property needs. Self-service model lacks the high-touch advisory sought by HNIs.</p>`
  },
  fee: {
    title: "Fee-Based (SEBI RAs)",
    content: `<p><strong>Primary Function:</strong> Conflict-free, holistic financial planning based on a fiduciary model.</p><p><strong>Gap:</strong> Regional RAs often have small teams and lack the logistical/physical support (documentation, property checks) that NRIs need.</p>`
  },
  commission: {
    title: "Commission-Based MSPs",
    content: `<p><strong>Primary Function:</strong> Distributors for MFs, Insurance, FDs. One-stop-shop for execution.</p><p><strong>Gap:</strong> Product-led, not planning-led. Conflict of interest due to commissions. Transparency is often opaque.</p>`
  },
  boutique: {
    title: "Boutique Family Offices",
    content: `<p><strong>Primary Function:</strong> Comprehensive wealth management for UHNW families, estate planning, and private assets.</p><p><strong>Gap:</strong> High entry barrier (AUM). Do not scale to serve the wider cohort of tech/pharma professionals.</p>`
  },
  opp_community: {
    title: "Focused Community Engagement",
    content: `<p><strong>Strategy:</strong> Frame wealth services with an understanding of Telugu-rooted investors—language comfort, regional investment familiarity, and cultural expectations.</p><p><strong>Impact:</strong> Creates clarity and alignment for NRIs who prefer working with institutions familiar with their background, a key differentiator against generic national players.</p>`
  },
  opp_integrated: {
    title: "Integrated NRI Support",
    content: `<p><strong>Strategy:</strong> Combine wealth management with assistance on India-based responsibilities: property oversight, documentation support, repatriation steps, and family coordination.</p><p><strong>Impact:</strong> Solves the "logistical headache" for NRIs. Integrating these with formal advisory creates a sticky, high-value relationship.</p>`
  },
  opp_fees: {
    title: "Flexible & Transparent Fees",
    content: `<p><strong>Strategy:</strong> A balanced, transparent fee structure aligned with a public-purpose organisation.</p><p><strong>Impact:</strong> Widens accessibility for mid-to-senior professionals abroad who may not yet meet private-bank criteria (e.g., $1M+) but still seek guided, professional management.</p>`
  },
  opp_reporting: {
    title: "Consolidated Digital Reporting",
    content: `<p><strong>Strategy:</strong> A unified dashboard that consolidates financial investments, compliance status, and real estate asset overviews.</p><p><strong>Impact:</strong> Addresses the "fragmented visibility" pain point where NRIs currently check multiple portals. Provides a single source of truth.</p>`
  },
  opp_trust: {
    title: "Trust via APNRT Linkage",
    content: `<p><strong>Strategy:</strong> Leverage the alignment with a recognised state-supported body (APNRT) to signal safety and stability.</p><p><strong>Impact:</strong> Naturally enhances confidence for overseas investors who prioritise governance, accountability, and consistency in communication over pure marketing.</p>`
  },
  opp_legal: {
    title: "", // Title handled inside content
    content: `
      <div class="flex flex-col md:flex-row items-start justify-between mb-8 pb-6 border-b border-slate-200 gap-6">
          <div>
              <h2 class="text-3xl font-extrabold text-red-700 tracking-tight">Legal Regulatory Information</h2>
              <p class="text-slate-500 mt-2">Comprehensive Risk & Compliance Analysis</p>
          </div>
      </div>

      <div class="overflow-x-auto mb-10 rounded-xl shadow-sm border border-slate-200">
          <table class="min-w-full bg-white">
              <thead>
                  <tr class="bg-slate-50 border-b border-slate-200">
                      <th class="py-4 px-6 text-left text-sm font-bold text-slate-700 uppercase tracking-wider">Regulatory Body</th>
                      <th class="py-4 px-6 text-left text-sm font-bold text-slate-700 uppercase tracking-wider">Key Constraint</th>
                      <th class="py-4 px-6 text-left text-sm font-bold text-slate-700 uppercase tracking-wider">Risk Level</th>
                  </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                  <tr class="hover:bg-slate-50 transition-colors">
                      <td class="py-4 px-6 text-sm font-medium text-slate-900">SEBI</td>
                      <td class="py-4 px-6 text-sm text-slate-600">Unregistered Intermediary / Inv. Advisor</td>
                      <td class="py-4 px-6 text-sm"><span class="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold">CRITICAL</span></td>
                  </tr>
                  <tr class="hover:bg-slate-50 transition-colors">
                      <td class="py-4 px-6 text-sm font-medium text-slate-900">Company Law</td>
                      <td class="py-4 px-6 text-sm text-slate-600">Public Solicitation (>200 persons)</td>
                      <td class="py-4 px-6 text-sm"><span class="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold">CRITICAL</span></td>
                  </tr>
                  <tr class="hover:bg-slate-50 transition-colors">
                      <td class="py-4 px-6 text-sm font-medium text-slate-900">FEMA / RBI</td>
                      <td class="py-4 px-6 text-sm text-slate-600">PIS Limits (5% Indiv / 10% Agg)</td>
                      <td class="py-4 px-6 text-sm"><span class="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-bold">MODERATE</span></td>
                  </tr>
                  <tr class="hover:bg-slate-50 transition-colors">
                      <td class="py-4 px-6 text-sm font-medium text-slate-900">RERA</td>
                      <td class="py-4 px-6 text-sm text-slate-600">Unregistered Real Estate Brokering</td>
                      <td class="py-4 px-6 text-sm"><span class="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold">HIGH</span></td>
                  </tr>
              </tbody>
          </table>
      </div>

      <div class="space-y-8 text-slate-700 leading-relaxed">
          <div>
              <h4 class="text-xl font-bold text-red-800 mb-4 flex items-center">
                  <span class="bg-red-100 p-1 rounded mr-3 text-red-600 text-sm">1</span> 
                  Legal and Regulatory Limitations under Indian Law
              </h4>
              <p class="mb-4">Aquimerge’s model (a peer-to-peer investment facilitation platform for NRIs) operates in a gray area of Indian financial regulation. Indian law tightly regulates entities that solicit or facilitate investments, even if no funds are pooled. Key limitations include:</p>
              <ul class="list-disc pl-5 space-y-3 marker:text-red-400">
                  <li><strong>Unregistered Intermediary Restrictions:</strong> Under the SEBI Act and Intermediaries Regulations, no person can act as a securities market intermediary without SEBI registration. If Aquimerge connects investors to deals involving securities (shares, etc.), it risks being deemed an unregistered intermediary (e.g., an unregistered broker, merchant banker, or investment advisor). This could violate Section 12 of the SEBI Act, 1992 and trigger enforcement action.</li>
                  <li><strong>No Public Solicitation or “Investment Exchange”:</strong> Indian securities laws prohibit operating any platform that facilitates buying/selling of securities to the public outside regulated exchanges. SEBI has cautioned that online investment platforms offering equity or deals open to public investors are unauthorized and illegal. The Companies Act, 2013 limits any offer of securities to max 200 offerees in a private placement (beyond that it’s treated as a public offer requiring full regulatory compliance). Aquimerge must therefore keep deal introductions strictly private and limited to club members.</li>
                  <li><strong>Collective Investment and Fund Regulations:</strong> While Aquimerge does not pool funds, it must be careful not to facilitate any arrangement that looks like a collective investment scheme (CIS) or an unregistered fund. If multiple NRI club members invest together in one asset or venture with a common understanding of sharing profits, it could be construed as a de-facto CIS, which is prohibited unless registered with SEBI.</li>
                  <li><strong>Licensing for Advice or Transactions:</strong> Aquimerge explicitly is not a SEBI-registered advisor, fund manager, broker, or Portfolio Management Service (PMS). It cannot provide “investment advice for a consideration” without registering as an Investment Adviser. It cannot handle securities transactions or earn transaction-based commissions without a broker or merchant banker license.</li>
                  <li><strong>Real Estate Brokerage Regulations:</strong> For land or real estate deals, Aquimerge must heed real estate laws. Under the Real Estate (Regulation and Development) Act, 2016 (RERA), any person who facilitates or brokers transactions in real estate projects must register as a real estate agent with the state RERA authority.</li>
              </ul>
          </div>

          <hr class="border-slate-200">

          <div>
              <h4 class="text-xl font-bold text-red-800 mb-4 flex items-center">
                  <span class="bg-red-100 p-1 rounded mr-3 text-red-600 text-sm">2</span>
                  SEBI Regulations and Securities Law Triggers
              </h4>
              <p class="mb-4">Several SEBI regulations could be triggered if Aquimerge’s NRI members invest in equity deals:</p>
              <ul class="list-disc pl-5 space-y-3 marker:text-red-400">
                  <li><strong>Securities Broker/Merchant Banker Regulations:</strong> Facilitating investments in listed company shares (especially off-market deals or block trades) may be seen as brokerage or investment banking activity. Notably, any acquisition of a substantial stake in a listed company (≥25% or control) will trigger the SEBI Takeover Code (SAST Regulations, 2011), forcing the acquirer to make an open offer to public shareholders.</li>
                  <li><strong>Investment Adviser Regulations:</strong> If Aquimerge offers any investment curation or guidance (e.g. vetting deals, suggesting “high-return” opportunities), it risks being deemed an unregistered Investment Adviser. SEBI’s Investment Advisers Regulations, 2013 prohibit providing securities or portfolio advice to clients for remuneration without registration.</li>
                  <li><strong>Unregulated Investment Schemes:</strong> SEBI is vigilant about schemes that promise returns or involve multiple investors without registration. Past cases show SEBI has cracked down on “investment clubs” and online platforms that pool or aggregate investor money into ventures without authorization.</li>
                  <li><strong>Fraud and Misrepresentation:</strong> Aquimerge must avoid any actions that could fall under SEBI’s anti-fraud rules. Promising fixed returns or “guaranteed” outcomes on investments is a classic red flag. SEBI’s Prohibition of Fraudulent and Unfair Trade Practices (PFUTP) regulations bar making any untrue or misleading statements to induce investments.</li>
              </ul>
          </div>

          <hr class="border-slate-200">

          <div>
              <h4 class="text-xl font-bold text-amber-800 mb-4 flex items-center">
                  <span class="bg-amber-100 p-1 rounded mr-3 text-amber-600 text-sm">3</span>
                  FEMA and RBI Rules for NRI Investments
              </h4>
              <p class="mb-4">When NRIs invest in India through Aquimerge’s introductions, they individually must comply with Foreign Exchange Management Act (FEMA) regulations and RBI guidelines.</p>
              
              <div class="bg-amber-50 p-5 rounded-xl border border-amber-100">
                  <h5 class="font-bold text-slate-800 mb-2">Investment Route for Listed Equity</h5>
                  <ul class="list-disc pl-5 space-y-2 text-sm">
                      <li><strong>Portfolio Investment Scheme (PIS):</strong> An individual NRI/OCI may acquire up to 5% of a listed company’s paid-up equity capital. All NRIs/OCIs combined cannot hold more than 10%.</li>
                      <li><strong>Banking Channels:</strong> NRIs must trade through a designated PIS bank account and demat account. Every purchase/sale is reported by the bank to RBI.</li>
                      <li><strong>FDI Route:</strong> If an NRI investor (or a group acting in concert) aims to acquire a significant stake beyond these portfolio limits, it may have to be done under the FDI route, complying with sectoral FDI caps and pricing guidelines.</li>
                  </ul>
              </div>
          </div>

          <p class="text-sm text-slate-500 italic border-t border-slate-200 pt-4">
              <strong>Disclaimer:</strong> This overview is for informational purposes only and does not constitute legal advice. Aquimerge is a facilitator and must strictly adhere to the role of a connector to avoid regulatory penalties.
          </p>
      </div>`
  }
};

export default function WealthManagementLandscape() {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeModalData, setActiveModalData] = useState<{ title: string; content: string } | null>(null);

  // --- Modal Handlers ---
  const openModal = (key: string) => {
    if (detailData[key]) {
      setActiveModalData(detailData[key]);
      setModalOpen(true);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveModalData(null);
    document.body.style.overflow = '';
  };

  // --- Scroll Animation Logic ---
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll(".reveal");
      const windowHeight = window.innerHeight;
      const elementVisible = 150;

      reveals.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- Chart Initialization ---
  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      chartInstance.current = new Chart(chartRef.current, {
        type: 'doughnut',
        data: {
          labels: ['Distributors (Banks/Agents)', 'Tech Platforms', 'Boutique Offices', 'Fee-Only Advisors'],
          datasets: [{
            data: [55, 25, 15, 5],
            backgroundColor: [
              'rgba(245, 158, 11, 0.8)', // Amber
              'rgba(99, 102, 241, 0.8)',  // Indigo
              'rgba(244, 63, 94, 0.8)',   // Rose
              'rgba(14, 165, 233, 0.8)'   // Sky
            ],
            borderColor: '#ffffff',
            borderWidth: 2
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
              labels: { color: '#475569', boxWidth: 10, padding: 20, font: { family: 'Inter' } }
            }
          },
          cutout: '70%'
        }
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <>
      <GlobalStyles />
      <div className="container mx-auto px-4 py-12 max-w-7xl">

        {/* Header */}
        <header className="text-center mb-10 reveal active">
          <h1 className="text-6xl font-extrabold tracking-tight text-slate-900 mb-4">
            Wealth Management Landscape
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
            Hyderabad/AP/Telangana for NRI/HNI Clients: A CXO Strategic Overview
          </p>
        </header>

        {/* Legal Regulatory Information (Infographic Card) */}
        <section className="mb-20 reveal active">
          <div 
            className="card-bg p-0 rounded-2xl border-none shadow-2xl overflow-hidden group" 
            onClick={() => openModal('opp_legal')}
          >
            <div className="flex flex-col md:flex-row">
              {/* Left Warning Strip */}
              <div className="bg-red-600 w-full md:w-3 flex items-center justify-center"></div>

              {/* Content Area */}
              <div className="p-8 flex-1 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-start gap-6">
                  <div className="bg-red-100 p-4 rounded-full flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-extrabold text-2xl text-slate-800 tracking-tight">Legal Regulatory Information</h3>
                    </div>
                    <p className="text-slate-600 leading-relaxed max-w-2xl">
                      Aquimerge's model operates in a regulated 'gray area' under Indian law. Click to view the <span className="font-semibold text-red-600">Compliance & Risk Analysis</span> covering SEBI, FEMA, and RERA limitations.
                    </p>
                  </div>
                </div>

                {/* Mini Stats / Visual Cues */}
                <div className="flex gap-4 md:border-l md:border-slate-100 md:pl-6">
                  <div className="text-center">
                    <div className="text-xs text-slate-400 uppercase font-semibold mb-1">SEBI</div>
                    <div className="h-2 w-12 bg-red-200 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-red-500"></div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-slate-400 uppercase font-semibold mb-1">FEMA</div>
                    <div className="h-2 w-12 bg-amber-200 rounded-full overflow-hidden">
                      <div className="h-full w-1/2 bg-amber-500"></div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-slate-400 uppercase font-semibold mb-1">RERA</div>
                    <div className="h-2 w-12 bg-orange-200 rounded-full overflow-hidden">
                      <div className="h-full w-2/3 bg-orange-500"></div>
                    </div>
                  </div>
                </div>

                <div className="text-red-500 group-hover:translate-x-1 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 1. Overview: AP & Telangana as Key Wealth Regions */}
        <section className="mb-24 reveal">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title text-3xl font-bold mb-8">1. Regional Wealth Overview</h2>
              <div className="card-bg p-8 rounded-2xl border-l-4 border-teal-500 hover:transform-none">
                <p className="text-lg leading-relaxed text-slate-700 mb-6">
                  The combined regions of Andhra Pradesh and Telangana are strengthening as centres for wealth creation. <strong className="text-teal-600">Hyderabad</strong> functions as the operational hub, while <strong className="text-indigo-600">Amaravati</strong> emerges as a strategic reference.
                </p>
                <p className="text-sm text-slate-500">
                  Rapid advancements in Pharma, Tech, and Real Estate are driving a surge in HNI population and repatriation of funds.
                </p>
              </div>
            </div>

            {/* Stylized Wealth Corridor Map/Visual */}
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-200 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-teal-50 z-0"></div>
              <h3 className="text-center text-slate-500 text-sm mb-4 relative z-10 font-mono tracking-widest uppercase">Wealth Corridor & Flow</h3>

              {/* SVG Map Schematic */}
              <svg viewBox="0 0 400 300" className="w-full h-auto drop-shadow-md relative z-10" fill="none" stroke="currentColor">
                {/* Background Grid */}
                <path d="M0 50 H400 M0 150 H400 M0 250 H400 M50 0 V300 M150 0 V300 M250 0 V300 M350 0 V300" stroke="#cbd5e1" strokeWidth="0.5" strokeDasharray="4 4" />

                {/* Telangana Region (Stylized) */}
                <path d="M100 80 L180 60 L220 120 L140 160 Z" fill="#e2e8f0" stroke="#0ea5e9" strokeWidth="2" className="opacity-90" />
                {/* AP Region (Stylized) */}
                <path d="M140 160 L220 120 L300 140 L320 220 L200 240 Z" fill="#e2e8f0" stroke="#10b981" strokeWidth="2" className="opacity-90" />

                {/* Hyderabad Hub */}
                <circle cx="160" cy="110" r="6" fill="#0ea5e9" className="animate-pulse">
                  <animate attributeName="r" values="6;10;6" dur="3s" repeatCount="indefinite" />
                </circle>
                <text x="175" y="115" fill="#334155" fontSize="12" fontWeight="bold">Hyderabad (Hub)</text>

                {/* Amaravati Hub */}
                <circle cx="260" cy="180" r="5" fill="#10b981">
                  <animate attributeName="opacity" values="0.6;1;0.6" dur="4s" repeatCount="indefinite" />
                </circle>
                <text x="275" y="185" fill="#334155" fontSize="12" fontWeight="bold">Amaravati (Growth)</text>

                {/* Connections */}
                <path d="M160 110 Q 210 145 260 180" stroke="url(#gradientLine)" strokeWidth="2" strokeDasharray="4 4" />
                <defs>
                  <linearGradient id="gradientLine" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#0ea5e9', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#10b981', stopOpacity: 1 }} />
                  </linearGradient>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#64748b" />
                  </marker>
                </defs>

                {/* Global Inflow Arrows */}
                <path d="M40 40 L140 100" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                <path d="M350 50 L170 105" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
              </svg>
              <div className="text-xs text-center text-slate-500 mt-2">Schematic representation of investment flow</div>
            </div>
          </div>
        </section>

        {/* 2. Snapshot of the Current Advisory Landscape */}
        <section className="mb-24 reveal">
          <h2 className="section-title text-3xl font-bold mb-8">2. Advisory Landscape Snapshot</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
            {/* Text Intro & Cards */}
            <div className="lg:col-span-2">
              <p className="text-slate-600 mb-6 text-lg">Current market segmentation reveals a fragmented landscape. Click a category card for a detailed operational brief:</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Card 1 */}
                <div id="card-tech" className="card-bg p-5 rounded-xl border-t-4 border-indigo-500" onClick={() => openModal('tech')}>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-slate-800">Tech Platforms</h3>
                    <span className="text-2xl">🤖</span>
                  </div>
                  <p className="text-slate-500 text-xs">Low Cost, Algo-driven. Good for simple portfolios.</p>
                </div>

                {/* Card 2 */}
                <div id="card-fee" className="card-bg p-5 rounded-xl border-t-4 border-sky-500" onClick={() => openModal('fee')}>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-slate-800">Fee-Based (SEBI)</h3>
                    <span className="text-2xl">⚖️</span>
                  </div>
                  <p className="text-slate-500 text-xs">Unbiased, Conflict-free planning. Planning centric.</p>
                </div>

                {/* Card 3 */}
                <div id="card-commission" className="card-bg p-5 rounded-xl border-t-4 border-amber-500" onClick={() => openModal('commission')}>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-slate-800">Distributors</h3>
                    <span className="text-2xl">🤝</span>
                  </div>
                  <p className="text-slate-500 text-xs">Multi-service, convenient, but product-led.</p>
                </div>

                {/* Card 4 */}
                <div id="card-boutique" className="card-bg p-5 rounded-xl border-t-4 border-rose-500" onClick={() => openModal('boutique')}>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-slate-800">Family Offices</h3>
                    <span className="text-2xl">🏰</span>
                  </div>
                  <p className="text-slate-500 text-xs">High-touch, legacy focused. Very high entry barrier.</p>
                </div>
              </div>
            </div>

            {/* Market Distribution Chart */}
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-200 flex flex-col items-center justify-center">
              <h4 className="text-slate-600 font-semibold mb-4 text-sm uppercase tracking-wide">Market Coverage Estimation</h4>
              <div className="chart-container" style={{ height: '250px' }}>
                <canvas ref={chartRef}></canvas>
              </div>
            </div>
          </div>
          <p className="text-center text-slate-500 text-sm italic">
            Gap: No specific player currently owns the "Global Telugu Diaspora" segment effectively.
          </p>
        </section>

        {/* 4. Aquimerge Positioning Areas */}
        <section className="mb-24 reveal">
          <h2 className="section-title text-3xl font-bold mb-8">4. Aquimerge Positioning Areas</h2>
          <p className="text-slate-600 mb-6 text-center">Click on any strategic pillar below to explore the detailed value proposition:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">

            {/* Opportunity Card A */}
            <div className="card-bg p-6 rounded-xl border-b-4 border-blue-600 flex flex-col items-center text-center transition-all hover:scale-105" onClick={() => openModal('opp_community')}>
              <div className="text-3xl mb-3 text-blue-600">🌏</div>
              <h3 className="text-slate-800 text-md font-bold">Community Engagement</h3>
              <p className="text-xs text-slate-500 mt-2">Cultural & Regional Alignment</p>
            </div>

            {/* Opportunity Card B */}
            <div className="card-bg p-6 rounded-xl border-b-4 border-blue-600 flex flex-col items-center text-center transition-all hover:scale-105" onClick={() => openModal('opp_integrated')}>
              <div className="text-3xl mb-3 text-blue-600">🧩</div>
              <h3 className="text-slate-800 text-md font-bold">Integrated Support</h3>
              <p className="text-xs text-slate-500 mt-2">Beyond just Investments</p>
            </div>

            {/* Opportunity Card C */}
            <div className="card-bg p-6 rounded-xl border-b-4 border-blue-600 flex flex-col items-center text-center transition-all hover:scale-105" onClick={() => openModal('opp_fees')}>
              <div className="text-3xl mb-3 text-blue-600">🔎</div>
              <h3 className="text-slate-800 text-md font-bold">Transparent Fees</h3>
              <p className="text-xs text-slate-500 mt-2">Balanced & Accessible</p>
            </div>

            {/* Opportunity Card D */}
            <div className="card-bg p-6 rounded-xl border-b-4 border-blue-600 flex flex-col items-center text-center transition-all hover:scale-105" onClick={() => openModal('opp_reporting')}>
              <div className="text-3xl mb-3 text-blue-600">📱</div>
              <h3 className="text-slate-800 text-md font-bold">Consolidated Reporting</h3>
              <p className="text-xs text-slate-500 mt-2">One Unified Dashboard</p>
            </div>

            {/* Opportunity Card E */}
            <div className="card-bg p-6 rounded-xl border-b-4 border-blue-600 flex flex-col items-center text-center transition-all hover:scale-105" onClick={() => openModal('opp_trust')}>
              <div className="text-3xl mb-3 text-blue-600">🏛️</div>
              <h3 className="text-slate-800 text-md font-bold">State-Backed Trust</h3>
              <p className="text-xs text-slate-500 mt-2">APNRT Linkage</p>
            </div>
          </div>
        </section>

        {/* 5. Summary */}
        <section className="mb-12 reveal">
          <div className="card-bg p-10 rounded-2xl shadow-2xl border-r-4 border-green-500 relative overflow-hidden bg-white">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-green-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Executive Summary</h2>
            <p className="text-xl leading-relaxed text-slate-600 italic font-light">
              "Aquimerge can occupy a <strong className="text-green-600 font-semibold">distinct position</strong> by combining community understanding with structured digital access and extended NRI-oriented support, filling the gap left by purely commercial players."
            </p>
          </div>
        </section>

      </div>

      {/* Modal */}
      {modalOpen && activeModalData && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 text-2xl transition-colors">&times;</button>
            
            {/* Conditional Title (Some sections handle title inside content HTML) */}
            {activeModalData.title && (
              <h3 className="text-3xl font-bold text-sky-600 mb-6 border-b border-slate-200 pb-2">
                {activeModalData.title}
              </h3>
            )}
            
            {/* Content Injection */}
            <div 
              className="text-lg leading-relaxed text-slate-600 space-y-4"
              dangerouslySetInnerHTML={{ __html: activeModalData.content }}
            ></div>
            
            <div className="mt-8 pt-4 border-t border-slate-200">
              <button onClick={closeModal} className="w-full bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200">Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}