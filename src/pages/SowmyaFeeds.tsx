import React, { useState } from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  RadialLinearScale,
  Filler,
  Tooltip,
  Legend,
  ChartOptions
} from 'chart.js';
import { Doughnut, Bar, Line, Radar } from 'react-chartjs-2';

// --- 1. Register ChartJS Components ---
ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  RadialLinearScale,
  Filler,
  Tooltip,
  Legend
);

// --- 2. Styles (Injecting EXACT CSS from HTML) ---
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap');

    body {
        font-family: 'Inter', sans-serif;
        background-color: #f9fafb;
        color: #1f2937;
    }

    /* --- General Utilities --- */
    .chart-container {
        position: relative;
        width: 100%;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
        height: 300px;
        max-height: 350px;
    }
    @media (min-width: 640px) {
        .chart-container {
            height: 350px;
            max-height: 400px;
        }
    }

    .nav-link {
        transition: all 0.3s ease;
        border-bottom: 2px solid transparent;
        cursor: pointer;
    }
    .nav-link.active {
        border-bottom-color: #d97706;
        color: #d97706;
        font-weight: 600;
    }

    .card {
        background-color: #ffffff;
        border-radius: 0.75rem;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
        padding: 1.5rem;
        overflow: hidden;
    }

    .stat-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
    .stat-card h3 {
        margin-top: 1rem;
        font-size: 1.125rem;
        font-weight: 600;
    }
    .stat-card p {
        font-size: 2.5rem;
        font-weight: 700;
        color: #d97706;
    }

    .info-card h3 {
        font-size: 1.125rem;
        font-weight: 600;
        color: #d97706;
        margin-bottom: 0.75rem;
    }
    .info-card p, .info-card li {
        color: #4b5563;
    }

    /* --- Arrow Diagram (Strategy Section) --- */
    .arrow-diagram {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 1.5rem 0;
        flex-direction: column;
        gap: 1rem;
    }
    .arrow-diagram .box {
        border: 1px solid #d1d5db;
        padding: 1rem;
        border-radius: 0.5rem;
        background-color: #f9fafb;
        text-align: center;
        width: 100%;
        max-width: 300px;
    }
    .arrow-diagram .arrow {
        font-size: 2rem;
        color: #d97706;
        transform: rotate(90deg);
    }
    @media (min-width: 768px) {
        .arrow-diagram {
            flex-direction: row;
            gap: 0;
        }
        .arrow-diagram .arrow {
            transform: rotate(0deg);
            margin: 0 1.5rem;
        }
    }

    /* --- STRATEGY MAPPING BLOCK STYLES --- */
    .strategy-map-root {
        --primary-purple: #7F3DFF;
        --bg-color: #F9F9FA;
        --text-dark: #333333;
        --white: #FFFFFF;
        --transition-speed: 0.5s;

        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
        background-color: var(--bg-color);
        background-image: radial-gradient(#e5e5e5 1px, transparent 1px);
        background-size: 20px 20px;
        overflow: hidden;
        width: 100%;
        height: calc(100vh - 64px); /* Full height minus header */
        min-height: 700px;
        color: var(--text-dark);
        position: relative;
        border: 1px solid #e5e5e5;
    }

    /* Branding Logos */
    .brand-logo {
        position: absolute;
        top: 40px;
        z-index: 100;
        user-select: none;
    }
    .logo-left {
        left: 50px;
        display: flex;
        align-items: center;
    }
    .otc-text {
        font-weight: 800;
        font-size: 2rem;
        letter-spacing: -1px;
        color: #000;
        line-height: 1;
    }
    .otc-sub {
        font-size: 0.6rem;
        color: #666;
        margin-left: 5px;
        text-transform: uppercase;
        font-weight: 600;
        line-height: 1.2;
        display: flex;
        flex-direction: column;
    }
    .logo-right {
        right: 50px;
        text-align: right;
        border-left: 3px solid #000;
        padding-left: 15px;
    }
    .magsmen-title {
        font-weight: 800;
        font-size: 1.1rem;
        color: #000;
        letter-spacing: 1px;
        text-transform: uppercase;
        line-height: 1;
    }
    .magsmen-sub {
        font-size: 0.65rem;
        color: #555;
        text-transform: uppercase;
        letter-spacing: 2px;
        margin-top: 3px;
    }

    /* Slide Container */
    .slide-container {
        position: relative;
        width: 100%;
        height: 100%;
    }
    .slide {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        pointer-events: none;
        transform: scale(0.9);
        transition: all 0.5s ease-in-out;
        background: #F9F9FA;
    }
    .slide.active {
        opacity: 1;
        pointer-events: all;
        transform: scale(1);
        z-index: 10;
    }

    /* Map Elements */
    .map-wrapper {
        position: relative;
        width: 1200px;
        height: 800px;
    }
    .connector-layer {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        pointer-events: none;
    }
    .connector-line {
        stroke: #7F3DFF;
        stroke-width: 2px;
        fill: none;
    }
    .connector-dot {
        fill: #7F3DFF;
    }

    /* Nodes */
    .node {
        position: absolute;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-weight: 700;
        box-shadow: 0 4px 10px rgba(127, 61, 255, 0.2);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        z-index: 2;
        cursor: pointer;
    }
    .node:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 20px rgba(127, 61, 255, 0.4);
    }
    .node-center {
        width: 220px;
        height: 220px;
        background: #FFFFFF;
        border: 4px solid #7F3DFF;
        color: #333333;
        font-size: 1.5rem;
        letter-spacing: 1px;
        left: 50%;
        top: 50%;
        margin-left: -110px;
        margin-top: -110px;
        z-index: 5;
        cursor: default;
        text-transform: uppercase;
    }
    .node-center:hover {
        transform: scale(1);
        box-shadow: 0 4px 10px rgba(127, 61, 255, 0.2);
    }
    .node-outer {
        width: 140px;
        height: 140px;
        background: #7F3DFF;
        color: #FFFFFF;
        font-size: 1.1rem;
    }

    /* Positioning Outer Nodes */
    .pos-top { left: 50%; top: 15%; margin-left: -70px; }
    .pos-right { left: 85%; top: 50%; margin-left: -70px; margin-top: -70px; }
    .pos-bottom { left: 50%; bottom: 15%; margin-left: -70px; }
    .pos-left { left: 15%; top: 50%; margin-left: -70px; margin-top: -70px; }

    /* Labels */
    .label-text {
        position: absolute;
        font-size: 0.85rem;
        color: #333333;
        background: #FFFFFF;
        padding: 6px 12px;
        border-radius: 6px;
        border: 1px solid #eee;
        max-width: 160px;
        z-index: 1;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
        font-weight: 500;
    }

    /* Detail Slides */
    .detail-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 80%;
        max-width: 900px;
    }
    .detail-header-node {
        width: 160px;
        height: 160px;
        background: #7F3DFF;
        color: #FFFFFF;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.4rem;
        font-weight: 800;
        margin-bottom: 50px;
        box-shadow: 0 10px 25px rgba(127, 61, 255, 0.3);
        text-transform: uppercase;
    }
    .detail-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 40px;
        width: 100%;
    }
    .detail-item {
        position: relative;
        background: #FFFFFF;
        padding: 25px 25px 25px 35px;
        border-radius: 8px;
        border-left: 4px solid #7F3DFF;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        transition: transform 0.2s;
    }
    .detail-item:hover { transform: translateX(5px); }
    .detail-item::before {
        content: '';
        position: absolute;
        left: -10px;
        top: 50%;
        width: 12px;
        height: 12px;
        background: #7F3DFF;
        border-radius: 50%;
        transform: translateY(-50%);
        border: 2px solid white;
    }
    .detail-title {
        font-weight: 700;
        color: #7F3DFF;
        margin-bottom: 8px;
        display: block;
        font-size: 1.2rem;
    }
    .detail-desc {
        font-size: 1rem;
        color: #555;
        line-height: 1.6;
        font-weight: 400;
    }

    /* Back Button */
    .back-btn {
        position: absolute;
        top: 120px;
        left: 50px;
        background: transparent;
        border: 2px solid #7F3DFF;
        color: #7F3DFF;
        padding: 10px 20px;
        border-radius: 30px;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.3s;
        display: flex;
        align-items: center;
        gap: 8px;
        z-index: 101;
        text-transform: uppercase;
        font-size: 0.8rem;
        letter-spacing: 1px;
    }
    .back-btn:hover {
        background: #7F3DFF;
        color: #FFFFFF;
    }

    /* Mobile Handling for Strategy Map */
    @media (max-width: 768px) {
        .map-wrapper {
            transform: scale(0.5);
            transform-origin: center;
        }
        .pos-right { left: 90%; }
        .pos-left { left: 10%; }
        .detail-grid { grid-template-columns: 1fr; }
        .slide {
            overflow-y: auto;
            display: block;
            padding: 20px;
        }
        .detail-content { margin: 120px auto 0; }
        .brand-logo { transform: scale(0.8); }
        .logo-left { left: 20px; top: 20px; }
        .logo-right { right: 20px; top: 20px; }
        .back-btn { top: 80px; left: 20px; }
    }
  `}</style>
);

export default function SowmyaFeeds() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [activeSlide, setActiveSlide] = useState('slide-main');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // --- CHART CONFIGURATIONS ---
  const commonChartOptions: ChartOptions<any> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { 
        backgroundColor: '#FFFFFF',
        titleColor: '#1f2937',
        bodyColor: '#4b5563',
        borderColor: '#d1d5db',
        borderWidth: 1
      }
    }
  };

  const brandHealthData = {
    datasets: [{
      data: [65, 35],
      backgroundColor: ['#d97706', '#e5e7eb'],
      borderWidth: 0,
      cutout: '70%'
    }]
  };

  const visualConsistencyData = {
    datasets: [{
      data: [60, 40],
      backgroundColor: ['#2563eb', '#e5e7eb'],
      borderWidth: 0,
      cutout: '70%'
    }]
  };

  const competitorData = {
    labels: ['Perceived Quality', 'Price', 'Innovation', 'Farmer Support'],
    datasets: [
      { label: 'Sowmya Feeds', data: [8, 6, 5, 7], backgroundColor: '#d97706', borderRadius: 4 },
      { label: 'Competitor A (Price)', data: [5, 9, 4, 5], backgroundColor: '#dc2626', borderRadius: 4 },
      { label: 'Competitor B (Innovator)', data: [7, 4, 9, 8], backgroundColor: '#2563eb', borderRadius: 4 }
    ]
  };

  const marketGrowthData = {
    labels: ['2021', '2022', '2023', '2024', '2025 (Est.)', '2026 (Est.)'],
    datasets: [
      {
        label: 'Total Market (INR Cr)',
        data: [100, 104, 109, 114, 119, 124],
        borderColor: '#2563eb',
        backgroundColor: 'rgba(37, 99, 235, 0.1)',
        fill: true,
        tension: 0.3
      },
      {
        label: 'Specialty Feeds (INR Cr)',
        data: [15, 17, 20, 24, 28, 33],
        borderColor: '#16a34a',
        backgroundColor: 'rgba(22, 163, 74, 0.1)',
        fill: true,
        tension: 0.3
      }
    ]
  };

  const webAuditData = {
    labels: ['UI/UX', 'Content Quality', 'SEO', 'Performance', 'Interactivity'],
    datasets: [{
      label: 'sowmyafeeds.com Audit',
      data: [4, 8, 6, 7, 2],
      backgroundColor: 'rgba(217, 119, 6, 0.2)',
      borderColor: '#d97706',
      pointBackgroundColor: '#d97706',
      pointBorderColor: '#fff'
    }]
  };

  const sentimentData = {
    labels: ['Sowmya Feeds', 'Competitor A', 'Competitor B'],
    datasets: [
      { label: 'Positive', data: [40, 20, 50], backgroundColor: '#16a34a' },
      { label: 'Neutral', data: [50, 30, 20], backgroundColor: '#d1d5db' },
      { label: 'Negative', data: [10, 50, 30], backgroundColor: '#dc2626' }
    ]
  };

  // Helper for Nav Links
  const NavLink = ({ id, label }: { id: string; label: string }) => (
    <a
      href={`#${id}`}
      onClick={(e) => {
        e.preventDefault();
        setActiveSection(id);
        setIsMobileMenuOpen(false);
        window.scrollTo(0,0);
      }}
      className={`nav-link px-3 py-2 rounded-md text-sm font-medium ${
        activeSection === id ? 'active' : 'text-gray-700 hover:text-amber-600'
      }`}
    >
      {label}
    </a>
  );

  return (
    <>
      <GlobalStyles />
      
      {/* --- HEADER --- */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-amber-600">Sowmya Feeds: Brand Audit</h1>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink id="dashboard" label="Dashboard" />
                <NavLink id="market" label="Market Landscape" />
                <NavLink id="brand" label="Brand Deep Dive" />
                <NavLink id="consumer" label="Consumer & Sentiment" />
                <NavLink id="strategy" label="Strategic Path" />
                <NavLink id="strategy-mapping" label="Sowmya Feeds Strategy Mapping" />
              </div>
            </nav>

            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex items-center px-3 py-2 border rounded text-gray-700 border-gray-400 hover:text-amber-600 hover:border-amber-600"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-2 pb-3 space-y-1 border-t border-gray-200">
                <NavLink id="dashboard" label="Dashboard" />
                <NavLink id="market" label="Market Landscape" />
                <NavLink id="brand" label="Brand Deep Dive" />
                <NavLink id="consumer" label="Consumer & Sentiment" />
                <NavLink id="strategy" label="Strategic Path" />
                <NavLink id="strategy-mapping" label="Sowmya Feeds Strategy Mapping" />
            </div>
          )}
        </div>
      </header>

      {/* --- MAIN CONTENT --- */}
      {activeSection !== 'strategy-mapping' && (
        <main className="container mx-auto p-4 sm:p-6 lg:p-8">
          
          {/* DASHBOARD */}
          {activeSection === 'dashboard' && (
            <section className="space-y-6">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Audit Dashboard</h2>
                <p className="text-lg text-gray-600">An executive summary of the Sowmya Feeds brand audit. This section provides the key metrics and qualitative assessments at a glance.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="card stat-card">
                  <h3 className="text-gray-700">Brand Health Index</h3>
                  <div className="chart-container" style={{ height: '200px', maxHeight: '200px' }}>
                    <Doughnut data={brandHealthData} options={commonChartOptions} />
                  </div>
                  <p className="text-amber-600">65/100</p>
                  <span className="text-sm text-gray-500">Solid, but lacks strong advocacy.</span>
                </div>
                <div className="card stat-card">
                  <h3 className="text-gray-700">Visual Consistency Index</h3>
                  <div className="chart-container" style={{ height: '200px', maxHeight: '200px' }}>
                    <Doughnut data={visualConsistencyData} options={commonChartOptions} />
                  </div>
                  <p className="text-blue-600">60%</p>
                  <span className="text-sm text-gray-500">Inconsistent across digital assets.</span>
                </div>
                <div className="card info-card">
                  <h3>Primary Consumer Persona</h3>
                  <p className="font-semibold text-lg text-gray-800 mb-2">The 'Anxious Achiever' Farmer</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Values reliability and proven ROI.</li>
                    <li>Worries about yield, cost, & animal health.</li>
                    <li>Seeks a trusted partner, not just a supplier.</li>
                    <li>Emotionally driven by pride and financial pressure.</li>
                  </ul>
                </div>
                <div className="card info-card">
                  <h3>Brand Archetype Analysis</h3>
                  <p className="font-semibold text-lg text-gray-800 mb-2">Current: The Caregiver</p>
                  <p className="text-sm mb-3">Nurturing, supportive, reliable. Focused on protecting the farmer's livelihood. This is a strong foundation.</p>
                  <h3 className="text-green-600">Opportunity: The Sage</h3>
                  <p className="text-sm">Evolve by adding expertise. Become the source of truth for animal nutrition, using data and innovation to guide farmers to success.</p>
                </div>
              </div>
            </section>
          )}

          {/* MARKET LANDSCAPE */}
          {activeSection === 'market' && (
            <section className="space-y-6">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Market Landscape</h2>
                <p className="text-lg text-gray-600">Analysis of the external environment, including market trends, competitor benchmarking, and identified opportunities.</p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="card">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Competitor Benchmarking</h3>
                  <div className="chart-container">
                    <Bar data={competitorData} options={{...commonChartOptions, plugins: { legend: { position: 'bottom' } }, scales: { y: { beginAtZero: true, max: 10 } } }} />
                  </div>
                  <p className="text-sm text-gray-600 mt-4">Sowmya leads in 'Perceived Quality' among its direct competitors but trails in 'Innovation' and 'Price Competitiveness'. This highlights the mid-market 'quality' position.</p>
                </div>
                <div className="card">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Regional Market Analysis</h3>
                  <div className="chart-container">
                    <Line data={marketGrowthData} options={{...commonChartOptions, plugins: { legend: { position: 'bottom' } } }} />
                  </div>
                  <p className="text-sm text-gray-600 mt-4">The animal feed market shows steady growth (CAGR 4.5%), driven by demand for protein. The 'Specialty Feeds' (aqua, high-performance) segment is growing fastest.</p>
                </div>
                <div className="card lg:col-span-2">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Market Gap & Need Analysis</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-lg font-semibold text-amber-600">Identified Market Gap</h4>
                      <p className="text-gray-600">A significant gap exists for data-driven, holistic nutrition solutions for small-to-medium farms. Competitors focus on large-scale operations or basic feeds, leaving a "missing middle."</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-blue-600">Identified Market Need</h4>
                      <p className="text-gray-600">Farmers need more than bags of feed. They need a partner that provides provable ROI calculators, localized feed strategies, and support that demonstrates a clear path from feed cost to profit.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* BRAND DEEP DIVE */}
          {activeSection === 'brand' && (
            <section className="space-y-6">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Brand Deep Dive</h2>
                <p className="text-lg text-gray-600">An internal audit of Sowmya's brand assets, including visual identity, digital presence, and brand story.</p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="card">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Web & Digital Audit</h3>
                  <div className="chart-container">
                    <Radar data={webAuditData} options={{...commonChartOptions, scales: { r: { beginAtZero: true, max: 10, pointLabels: { font: { size: 12 } } } } }} />
                  </div>
                  <p className="text-sm text-gray-600 mt-4">The current website acts as a static "brochure." It scores well on basic 'Content' (product info) but poorly on 'UI/UX' (mobile experience) and 'Interactivity' (tools, resources).</p>
                </div>
                <div className="card">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Visual Identity & Standards</h3>
                  <p className="text-gray-600 mb-4">Visuals are inconsistent. The logo is used well, but color palettes, typography, and imagery (stock photos) vary across the website, social media, and packaging.</p>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold mb-2">Analysis: Visual Consistency Index (60%)</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      <li><span className="font-semibold text-red-600">Low Point:</span> Social media graphics feel disconnected from website.</li>
                      <li><span className="font-semibold text-red-600">Low Point:</span> Photography is generic, lacking emotional connection.</li>
                      <li><span className="font-semibold text-green-600">High Point:</span> Packaging design is consistent and recognizable.</li>
                    </ul>
                  </div>
                </div>
                <div className="card lg:col-span-2">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Story & Personality Analysis</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-700">Current Story (Implicit)</h4>
                      <p className="text-gray-600 text-sm">"We are Sowmya Feeds. We make quality cattle feed that is reliable and good for your animals. We have been doing this for a long time."</p>
                      <p className="text-sm mt-2 italic text-gray-500">Analysis: Fact-based, safe, and trustworthy, but lacks emotion and a clear "why."</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-amber-600">Future Story (Opportunity)</h4>
                      <p className="text-gray-600 text-sm">"We understand the pressure you face. Sowmya Feeds is your partner, combining decades of care with nutritional science to deliver proven results you can see in your herd and on your bottom line."</p>
                      <p className="text-sm mt-2 italic text-gray-500">Analysis: Empathetic, outcome-focused, and positions the brand as a partner (Caregiver + Sage).</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* CONSUMER & SENTIMENT */}
          {activeSection === 'consumer' && (
            <section className="space-y-6">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Consumer & Sentiment Analysis</h2>
                <p className="text-lg text-gray-600">Understanding the target farmer persona, their emotional drivers, and their sentiment towards Sowmya and its competitors.</p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="card lg:col-span-2">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Consumer Sentiment Analysis (Social Monitoring)</h3>
                  <div className="chart-container" style={{ height: '400px', maxHeight: '450px' }}>
                    <Bar data={sentimentData} options={{...commonChartOptions, indexAxis: 'y', plugins: { legend: { position: 'bottom' } }, scales: { x: { stacked: true }, y: { stacked: true } } }} />
                  </div>
                  <p className="text-sm text-gray-600 mt-4">Sowmya enjoys a high level of 'Neutral' to 'Positive' sentiment, centered on 'Reliability'. Competitor 'A' (low price) has higher 'Negative' (quality complaints). Competitor 'B' (innovator) has more 'Positive' (excitement) but also 'Negative' (high price).</p>
                </div>
                <div className="flex items-center justify-center">
                    <h1 className="text-4xl lg:text-5xl font-bold text-amber-600 text-center">Sowmya Feeds:<br/>Brand Audit</h1>
                </div>
              </div>
            </section>
          )}

          {/* STRATEGIC PATH */}
          {activeSection === 'strategy' && (
            <section className="space-y-6">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Strategic Path Forward</h2>
                <p className="text-lg text-gray-600">Actionable recommendations based on the audit, focusing on brand building, perception, and digital infrastructure.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="card">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Recommended Perception Building</h3>
                  <p className="text-gray-600 mb-4">Shift the brand perception from a 'Reliable Supplier' to an 'Expert Partner' by closing the innovation gap.</p>
                  <div className="arrow-diagram">
                    <div className="box">
                      <h4 className="font-semibold">FROM: The Caregiver</h4>
                      <p className="text-sm">"We provide quality feed to protect your animals."</p>
                    </div>
                    <div className="arrow">+</div>
                    <div className="box">
                      <h4 className="font-semibold">TO: Caregiver + Sage</h4>
                      <p className="text-sm">"We partner with you, using science to prove our quality and grow your profit."</p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Legal & ASCI Standards</h3>
                  <p className="text-gray-600 mb-4">The brand is fully compliant. No IPR or legal issues found. This is a strong positive.</p>
                  <p className="text-gray-600">Future Strategy: Leverage ASCI compliance in marketing. As we move to data-driven claims ("Increase milk yield by X%"), all claims must be rigorously tested and documented to maintain this high standard.</p>
                </div>
                <div className="card md:col-span-2">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Recommended Digital Infrastructure</h3>
                  <p className="text-gray-600 mb-4">To bridge the gap and support the 'Sage' archetype, the digital infrastructure must evolve from a static website to an interactive ecosystem.</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <span className="text-3xl">🖥️</span>
                      <h4 className="font-semibold mt-2">1. Revamped Website</h4>
                      <p className="text-sm text-gray-600">Focus on case studies, clear data, and farmer testimonials. (Addresses 'Uncertainty').</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <span className="text-3xl">📱</span>
                      <h4 className="font-semibold mt-2">2. Farmer App</h4>
                      <p className="text-sm text-gray-600">Simple tools: Feed ROI Calculator, Localized Feed Guides, Support Chat. (Builds 'Trust').</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <span className="text-3xl">📊</span>
                      <h4 className="font-semibold mt-2">3. Content Engine</h4>
                      <p className="text-sm text-gray-600">Create expert content (blogs, videos) on animal health, new tech, and market news. (Demonstrates 'Expertise').</p>
                    </div>
                  </div>
                </div>
                <div className="card md:col-span-2">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Outcome of This Strategy</h3>
                  <p className="text-gray-600">By evolving the brand archetype and investing in a supportive digital ecosystem, Sowmya Feeds can achieve three primary outcomes:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                    <li><span className="font-semibold text-gray-800">Increased Customer Loyalty:</span> Move from a transactional relationship to a partnership, making price a less critical factor.</li>
                    <li><span className="font-semibold text-gray-800">Stronger Brand Advocacy:</span> Empower farmers with data-driven success stories they are proud to share.</li>
                    <li><span className="font-semibold text-gray-800">Sustainable Market Differentiation:</span> Create a durable competitive advantage based on expertise and trust that low-price competitors cannot easily replicate.</li>
                  </ul>
                </div>
              </div>
            </section>
          )}
        </main>
      )}

      {/* --- STRATEGY MAPPING (Custom Interactive Slide) --- */}
      {activeSection === 'strategy-mapping' && (
        <section className="content-section active">
          <div className="strategy-map-root">
            
            {/* Branding Overlay */}
            <div className="brand-logo logo-left">
              <div className="otc-text">OTC</div>
              <div className="otc-sub">
                <span>One Time</span>
                <span>Consulting</span>
              </div>
            </div>
            <div className="brand-logo logo-right">
              <div className="magsmen-title">MAGSMEN</div>
              <div className="magsmen-sub">Brand Consultants</div>
            </div>

            <div className="slide-container">
              
              {/* SLIDE 1: MAIN MAP */}
              <div className={`slide ${activeSlide === 'slide-main' ? 'active' : ''}`}>
                <div className="map-wrapper">
                  {/* SVG Layer */}
                  <svg className="connector-layer">
                    {/* Main Curved Lines */}
                    <path d="M 600 290 Q 600 220 600 150" className="connector-line" />
                    <path d="M 710 400 Q 780 400 1020 400" className="connector-line" />
                    <path d="M 600 510 Q 600 580 600 680" className="connector-line" />
                    <path d="M 490 400 Q 420 400 180 400" className="connector-line" />

                    {/* Top Branches */}
                    <path d="M 530 150 L 450 150" className="connector-line" />
                    <circle cx="450" cy="150" r="5" className="connector-dot" />
                    <path d="M 670 150 L 750 150" className="connector-line" />
                    <circle cx="750" cy="150" r="5" className="connector-dot" />

                    {/* Right Branches */}
                    <path d="M 1090 400 L 1150 300" className="connector-line" />
                    <circle cx="1150" cy="300" r="5" className="connector-dot" />
                    <path d="M 1090 400 L 1150 366" className="connector-line" />
                    <circle cx="1150" cy="366" r="5" className="connector-dot" />
                    <path d="M 1090 400 L 1150 433" className="connector-line" />
                    <circle cx="1150" cy="433" r="5" className="connector-dot" />
                    <path d="M 1090 400 L 1150 500" className="connector-line" />
                    <circle cx="1150" cy="500" r="5" className="connector-dot" />

                    {/* Left Branches */}
                    <path d="M 110 400 L 50 350" className="connector-line" />
                    <circle cx="50" cy="350" r="5" className="connector-dot" />
                    <path d="M 110 400 L 50 450" className="connector-line" />
                    <circle cx="50" cy="450" r="5" className="connector-dot" />

                    {/* Bottom Branches */}
                    <path d="M 530 680 L 450 680" className="connector-line" />
                    <circle cx="450" cy="680" r="5" className="connector-dot" />
                    <path d="M 450 680 L 450 620" className="connector-line" />
                    <circle cx="450" cy="620" r="5" className="connector-dot" />
                    <path d="M 450 680 L 450 740" className="connector-line" />
                    <circle cx="450" cy="740" r="5" className="connector-dot" />
                    <path d="M 670 680 L 750 680" className="connector-line" />
                    <circle cx="750" cy="680" r="5" className="connector-dot" />
                  </svg>

                  {/* Nodes */}
                  <div className="node node-center">SOWMYA<br/>FEEDS</div>

                  {/* Team Node */}
                  <div className="node node-outer pos-top" onClick={() => setActiveSlide('slide-team')}>
                    Team
                  </div>
                  <div className="label-text" style={{top: '130px', left: '350px', textAlign: 'right'}}>No Team<br/>Required</div>
                  <div className="label-text" style={{top: '130px', left: '760px'}}>Adding a<br/>Layer</div>

                  {/* Management Node */}
                  <div className="node node-outer pos-right" onClick={() => setActiveSlide('slide-mgmt')}>
                    Management
                  </div>
                  <div className="label-text" style={{top: '280px', left: '1160px'}}>Decision<br/>Making</div>
                  <div className="label-text" style={{top: '350px', left: '1160px'}}>Individual<br/>Process</div>
                  <div className="label-text" style={{top: '420px', left: '1160px'}}>Key<br/>Performance</div>
                  <div className="label-text" style={{top: '490px', left: '1160px'}}>Process<br/>Streamline</div>

                  {/* Ops Node */}
                  <div className="node node-outer pos-left" onClick={() => setActiveSlide('slide-ops')}>
                    Operations<br/>& Tech
                  </div>
                  <div className="label-text" style={{top: '330px', left: '20px', textAlign: 'right'}}>Semi-<br/>Automation</div>
                  <div className="label-text" style={{top: '440px', left: '20px', textAlign: 'right'}}>Phase-Wise<br/>Reporting</div>

                  {/* Sales Node */}
                  <div className="node node-outer pos-bottom" onClick={() => setActiveSlide('slide-sales')}>
                    Sales
                  </div>
                  <div className="label-text" style={{top: '660px', left: '380px', textAlign: 'right'}}>Awareness</div>
                  <div className="label-text" style={{top: '600px', left: '380px', textAlign: 'right'}}>Brand</div>
                  <div className="label-text" style={{top: '720px', left: '380px', textAlign: 'right'}}>Acquisition</div>
                  <div className="label-text" style={{top: '670px', left: '760px'}}>Relationship</div>
                </div>
              </div>

              {/* SLIDE 2: TEAM DETAILS */}
              <div className={`slide ${activeSlide === 'slide-team' ? 'active' : ''}`}>
                <button className="back-btn" onClick={() => setActiveSlide('slide-main')}>← Back to Map</button>
                <div className="detail-content">
                  <div className="detail-header-node">Team</div>
                  <div className="detail-grid">
                    <div className="detail-item">
                      <span className="detail-title">No Additional Team</span>
                      <span className="detail-desc">At this stage, no new hiring. Sandeep will be directly involved to understand root problems independently, including auto-upgrading and competitor assessment.</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-title">Adding a Layer</span>
                      <span className="detail-desc">Introducing hierarchy to build organizational standards with proper reporting, performance tracking, and enabling employees to operate independently.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* SLIDE 3: MANAGEMENT DETAILS */}
              <div className={`slide ${activeSlide === 'slide-mgmt' ? 'active' : ''}`}>
                <button className="back-btn" onClick={() => setActiveSlide('slide-main')}>← Back to Map</button>
                <div className="detail-content">
                  <div className="detail-header-node" style={{fontSize: '1.2rem'}}>Management</div>
                  <div className="detail-grid">
                    <div className="detail-item">
                      <span className="detail-title">Decision Making</span>
                      <span className="detail-desc">A structured hierarchy will eliminate individual dependence and establish a clear tracking mechanism for performance.</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-title">Individual Process</span>
                      <span className="detail-desc">Rigorous training required so every individual can make decisions confidently and operate independently during execution.</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-title">Key Performance</span>
                      <span className="detail-desc">Understanding data structuring, consumer demand, and market size to help bridge gaps in the market.</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-title">Process Streamline</span>
                      <span className="detail-desc">Evaluating semi-automation and its impact on current management processes for better integration.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* SLIDE 4: OPS DETAILS */}
              <div className={`slide ${activeSlide === 'slide-ops' ? 'active' : ''}`}>
                <button className="back-btn" onClick={() => setActiveSlide('slide-main')}>← Back to Map</button>
                <div className="detail-content">
                  <div className="detail-header-node" style={{fontSize: '1.2rem'}}>Ops & Tech</div>
                  <div className="detail-grid">
                    <div className="detail-item">
                      <span className="detail-title">Semi-Automation</span>
                      <span className="detail-desc">Provides real-time data projection and highlights areas where roles can be optimized or replaced if needed.</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-title">Phase-Wise Reporting</span>
                      <span className="detail-desc">Gaining visibility into efficiency metrics via automation. Allows the team to review individual and overall performance through data.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* SLIDE 5: SALES DETAILS */}
              <div className={`slide ${activeSlide === 'slide-sales' ? 'active' : ''}`}>
                <button className="back-btn" onClick={() => setActiveSlide('slide-main')}>← Back to Map</button>
                <div className="detail-content">
                  <div className="detail-header-node">Sales</div>
                  <div className="detail-grid">
                    <div className="detail-item">
                      <span className="detail-title">Brand</span>
                      <span className="detail-desc">Establish strong recognition for the product. The brand name should be consistently associated with quality.</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-title">Awareness</span>
                      <span className="detail-desc">Market awareness needs to be strengthened by communicating effectively with distributors and farmers.</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-title">Acquisition</span>
                      <span className="detail-desc">Consumer acquisition must be prioritized to build a robust market presence.</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-title">Relationship</span>
                      <span className="detail-desc">Building healthy and strong relationships with farmers and distributors will enhance familiarity, trust, and authenticity.</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      )}
    </>
  );
}