import React, { useState, useEffect, useMemo } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  RadialLinearScale,
  PointElement,
  LineElement,
  ChartOptions
} from 'chart.js';
import { Bar, Radar, Doughnut } from 'react-chartjs-2';

// --- 1. Register ChartJS Components ---
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  RadialLinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

// --- 2. Styles & Constants ---
// We define the custom colors here to ensure exact UI matching
const COLORS = {
  primary: '#0a3d62',
  primaryLight: '#1e6091',
  accent1: '#184e77',
  accent2: '#1a759f',
  accent3: '#1e83a8',
  bgMain: '#f8f9fa',
  bgCard: '#ffffff',
  textPrimary: '#212529',
};

// Global Font Injection
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
    body { font-family: 'Inter', sans-serif; background-color: ${COLORS.bgMain}; color: ${COLORS.textPrimary}; }
    .chart-container { position: relative; width: 100%; margin: 0 auto; }
    /* Custom Scrollbar for horizontal nav */
    .hide-scrollbar::-webkit-scrollbar { display: none; }
    .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
  `}</style>
);

export default function BrandAuditReport() {
  // --- State ---
  const [activeSection, setActiveSection] = useState('section-intro');
  const [activePersona, setActivePersona] = useState<'persona-1' | 'persona-2'>('persona-1');

  // --- Scroll Spy Logic ---
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      const offset = 180; // Adjustment for sticky headers

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.scrollY >= sectionTop - offset) {
          current = section.getAttribute('id') || '';
        }
      });

      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  // --- Smooth Scroll Helper ---
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 150;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  // --- Chart Data & Options ---

  // 1. Pricing Chart (Horizontal Bar)
  const pricingData = {
    labels: ['Sreenidhi Global', 'Competitor A', 'Competitor B', 'Competitor C'],
    datasets: [{
      label: 'Annual Tuition (Lakhs)',
      data: [4.5, 5.0, 4.8, 5.2],
      backgroundColor: [COLORS.primary, COLORS.accent1, COLORS.accent2, COLORS.accent3],
      borderRadius: 4,
    }]
  };
  const pricingOptions: ChartOptions<'bar'> = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } }
  };

  // 2. Benchmark Chart (Radar)
  const radarData = {
    labels: ['Academics', 'Infrastructure', 'Faculty', 'Digital', 'Brand'],
    datasets: [
      {
        label: 'SGS',
        data: [4, 5, 4, 3, 4],
        backgroundColor: 'rgba(10, 61, 98, 0.2)',
        borderColor: COLORS.primary,
        pointBackgroundColor: COLORS.primary,
        pointBorderColor: '#fff',
      },
      {
        label: 'Competitor Avg.',
        data: [4, 4, 3, 4, 4],
        backgroundColor: 'rgba(26, 117, 159, 0.2)',
        borderColor: COLORS.accent2,
        pointBackgroundColor: COLORS.accent2,
        pointBorderColor: '#fff',
      }
    ]
  };
  const radarOptions: ChartOptions<'radar'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: { color: '#e0e0e0' },
        grid: { color: '#e0e0e0' },
        pointLabels: { font: { family: "'Inter', sans-serif", size: 12 } },
        min: 0,
        max: 5,
        ticks: { stepSize: 1, backdropColor: 'transparent' }
      }
    }
  };

  // 3. Health Chart (Doughnut)
  const healthData = {
    labels: ['BHI Score', 'Gap'],
    datasets: [{
      data: [78, 22],
      backgroundColor: [COLORS.primary, '#e0e0e0'],
      borderWidth: 0,
    }]
  };
  const doughnutOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%',
    plugins: { legend: { position: 'bottom' } }
  };

  // 4. Sentiment Chart (Stacked Bar)
  const sentimentData = {
    labels: ['Aug-Sep', 'Oct-Nov', 'Dec-Jan'],
    datasets: [
      { label: 'Positive', data: [120, 150, 180], backgroundColor: '#2e7d32' },
      { label: 'Neutral', data: [40, 50, 30], backgroundColor: '#fdd835' },
      { label: 'Negative', data: [20, 15, 25], backgroundColor: '#d32f2f' },
    ]
  };
  const sentimentOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { stacked: true, grid: { display: false } },
      y: { stacked: true, grid: { color: '#f1f5f9' } }
    }
  };

  // 5. Consistency Chart (Doughnut)
  const consistencyData = {
    labels: ['Consistent', 'Inconsistent'],
    datasets: [{
      data: [65, 35],
      backgroundColor: [COLORS.primary, '#d32f2f'],
      borderWidth: 0,
    }]
  };

  // --- Render ---
  return (
    <>
      <GlobalStyles />
      <div className="antialiased min-h-screen pb-12">
        
        {/* Header */}
        <header className="w-full bg-white shadow-md p-4 sticky top-0 z-50">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl md:text-3xl font-bold" style={{ color: COLORS.primary }}>
              Brand Audit: Sreenidhi Global School
            </h1>
          </div>
        </header>

        {/* Navigation */}
        <nav className="sticky top-[73px] md:top-[73px] bg-white shadow-sm z-40 overflow-x-auto whitespace-nowrap hide-scrollbar">
          <div className="container mx-auto px-4">
            <div className="flex space-x-6 py-4">
              {[
                { id: 'section-intro', label: 'Introduction' },
                { id: 'section-market', label: 'Market Analysis' },
                { id: 'section-competitive', label: 'Competitive' },
                { id: 'section-perception', label: 'Perception' },
                { id: 'section-identity', label: 'Brand Identity' },
                { id: 'section-audit', label: 'Visual & Digital' },
                { id: 'section-legal', label: 'Compliance' },
                { id: 'section-reco', label: 'Recommendations' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-semibold px-2 py-1 border-b-2 transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'border-[#0a3d62] text-[#0a3d62]'
                      : 'border-transparent text-gray-600 hover:text-[#0a3d62]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </nav>

        <main className="container mx-auto p-4 md:p-8 space-y-12">

          {/* 1. Introduction */}
          <section id="section-intro" className="bg-white rounded-lg shadow-sm p-6 md:p-8">
            <h2 className="text-3xl font-bold mb-4" style={{ color: COLORS.primary }}>1. Introduction & Audit Framework</h2>
            <p className="text-lg text-gray-700 mb-6">
              This interactive report presents a comprehensive brand audit for Sreenidhi Global School (SGS). The objective is to analyze the brand's current health, market position, and digital presence to identify strengths, weaknesses, and strategic opportunities.
            </p>
            <h3 className="text-xl font-semibold mb-4">Brand Audit Process</h3>
            <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4">
              {[
                { num: 1, title: 'Discovery', color: COLORS.primaryLight, desc: 'Market Research & Stakeholder Interviews' },
                { num: 2, title: 'Analysis', color: COLORS.accent1, desc: 'Benchmarking, Perception & Digital Audit' },
                { num: 3, title: 'Synthesis', color: COLORS.accent2, desc: 'Identifying Core Identity, Gaps & Archetypes' },
                { num: 4, title: 'Strategy', color: COLORS.accent3, desc: 'Developing Positioning & Actionable Recommendations' }
              ].map((step) => (
                <div key={step.num} className="flex-1 text-center p-4 bg-gray-100 rounded-lg shadow-sm">
                  <div className="text-4xl mb-2">{step.num}</div>
                  <h4 className="font-semibold text-lg" style={{ color: step.color }}>{step.title}</h4>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 2. Market Analysis */}
          <section id="section-market" className="bg-white rounded-lg shadow-sm p-6 md:p-8">
            <h2 className="text-3xl font-bold mb-4" style={{ color: COLORS.primary }}>2. Market & Industry Analysis</h2>
            <p className="text-lg text-gray-700 mb-6">
              Understanding the regional educational landscape is crucial for positioning. The Hyderabad international school market is highly competitive.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
                <h3 className="text-xl font-semibold mb-3" style={{ color: COLORS.primaryLight }}>Industry Insights</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Shift from "global" to "future-ready" curriculum.</li>
                  <li>Increased demand for tech integration (AI, coding).</li>
                  <li>Parental focus on holistic development & mental well-being.</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
                <h3 className="text-xl font-semibold mb-3" style={{ color: COLORS.primaryLight }}>Market Gap</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Lack of schools that provably balance high academic rigor with student well-being.</li>
                  <li>Few institutions effectively communicate a unique "story" beyond facilities.</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
                <h3 className="text-xl font-semibold mb-3" style={{ color: COLORS.primaryLight }}>Market Need</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Parents seek clear, transparent communication.</li>
                  <li>A desire for a strong, safe, and inclusive community.</li>
                  <li>Proof of student success beyond just exam scores.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 3. Competitive Landscape */}
          <section id="section-competitive" className="bg-white rounded-lg shadow-sm p-6 md:p-8">
            <h2 className="text-3xl font-bold mb-4" style={{ color: COLORS.primary }}>3. Competitive Landscape</h2>
            <p className="text-lg text-gray-700 mb-6">
              We benchmarked SGS against three key regional competitors across primary pricing and brand perception metrics.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-center">Pricing Comparative Analysis (Annual Tuition, Lakhs)</h3>
                <div className="h-[300px] md:h-[350px] w-full relative">
                  <Bar data={pricingData} options={pricingOptions} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-center">Brand Attribute Benchmarking</h3>
                <div className="h-[300px] md:h-[350px] w-full relative">
                  <Radar data={radarData} options={radarOptions} />
                </div>
              </div>
            </div>
          </section>

          {/* 4. Perception */}
          <section id="section-perception" className="bg-white rounded-lg shadow-sm p-6 md:p-8">
            <h2 className="text-3xl font-bold mb-4" style={{ color: COLORS.primary }}>4. Brand Perception & Health</h2>
            <p className="text-lg text-gray-700 mb-6">
              This section analyzes how stakeholders (parents, public) perceive the SGS brand using a Brand Health Index (BHI) and sentiment tracking.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-center">Brand Health Index (BHI)</h3>
                <div className="h-[300px] md:h-[350px] w-full relative">
                  <Doughnut data={healthData} options={doughnutOptions} />
                </div>
                <p className="text-center text-gray-600 mt-2">A score of 78 indicates a strong but not yet dominant brand.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-center">Social Media Sentiment (Last 6 Months)</h3>
                <div className="h-[300px] md:h-[350px] w-full relative">
                  <Bar data={sentimentData} options={sentimentOptions} />
                </div>
                <p className="text-center text-gray-600 mt-2">Sentiment is overwhelmingly positive, with low negative volume.</p>
              </div>
            </div>
          </section>

          {/* 5. Brand Identity */}
          <section id="section-identity" className="bg-white rounded-lg shadow-sm p-6 md:p-8">
            <h2 className="text-3xl font-bold mb-4" style={{ color: COLORS.primary }}>5. Brand Identity & Story</h2>
            <p className="text-lg text-gray-700 mb-6">
              At its core, who is SGS? This section defines the brand's personality and the emotional personas of its target audience.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Archetype Card */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
                <h3 className="text-xl font-semibold mb-3" style={{ color: COLORS.primaryLight }}>Brand Archetype</h3>
                <div className="text-center">
                  <div className="text-6xl mb-3">🎓</div>
                  <h4 className="text-2xl font-bold">The Sage</h4>
                  <p className="text-gray-700 mt-2">The brand's identity is rooted in being a source of knowledge, wisdom, and truth. It values expertise and critical thinking.</p>
                </div>
              </div>

              {/* Persona Tabs Card */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
                <h3 className="text-xl font-semibold mb-3" style={{ color: COLORS.primaryLight }}>Emotional Consumer Personas</h3>
                <div className="flex border-b border-gray-300">
                  <button 
                    onClick={() => setActivePersona('persona-1')}
                    className={`flex-1 p-3 font-semibold rounded-t-lg transition-all duration-200 ${
                      activePersona === 'persona-1' 
                      ? 'bg-[#0a3d62] text-white' 
                      : 'text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    The Ambitious Parent
                  </button>
                  <button 
                    onClick={() => setActivePersona('persona-2')}
                    className={`flex-1 p-3 font-semibold rounded-t-lg transition-all duration-200 ${
                      activePersona === 'persona-2' 
                      ? 'bg-[#0a3d62] text-white' 
                      : 'text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    The Holistic Parent
                  </button>
                </div>
                <div className="p-4 bg-white border-l border-r border-b border-gray-200 rounded-b-lg min-h-[160px]">
                  {activePersona === 'persona-1' && (
                    <div className="animate-fade-in">
                      <h4 className="font-semibold text-lg mb-2">Wants:</h4>
                      <p className="text-gray-700">Top-tier academics, Ivy League/IIT prep, competitive edge, quantifiable results.</p>
                      <h4 className="font-semibold text-lg mt-4 mb-2">Pains:</h4>
                      <p className="text-gray-700">Fear of child falling behind, unclear ROI, "soft" programs with no clear outcome.</p>
                    </div>
                  )}
                  {activePersona === 'persona-2' && (
                    <div className="animate-fade-in">
                      <h4 className="font-semibold text-lg mb-2">Wants:</h4>
                      <p className="text-gray-700">Balanced development, emotional well-being, strong values, diverse experiences (arts, sports).</p>
                      <h4 className="font-semibold text-lg mt-4 mb-2">Pains:</h4>
                      <p className="text-gray-700">Overly competitive "pressure-cooker" environments, lack of individual attention.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* 6. Visual & Digital Audit */}
          <section id="section-audit" className="bg-white rounded-lg shadow-sm p-6 md:p-8">
            <h2 className="text-3xl font-bold mb-4" style={{ color: COLORS.primary }}>6. Visual & Digital Audit</h2>
            <p className="text-lg text-gray-700 mb-6">
              We analyzed the consistency of visual assets and the performance of the current website and digital infrastructure.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-center">Visual Consistency Index (VCI)</h3>
                <div className="h-[300px] md:h-[350px] w-full relative">
                  <Doughnut data={consistencyData} options={doughnutOptions} />
                </div>
                <p className="text-center text-gray-600 mt-2">A 65% consistency score shows significant room for improvement.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-center">Web & Digital Infrastructure</h3>
                <h4 className="font-semibold mb-2">Website Audit (Key Page Heatmap):</h4>
                <p className="text-sm text-gray-600 mb-2">High traffic on "Admissions", low engagement on "Philosophy".</p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 text-center text-sm md:text-base">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="p-2 border border-gray-300">Page</th>
                        <th className="p-2 border border-gray-300">Engagement</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 border border-gray-300">Home</td>
                        <td className="p-2 border border-gray-300 bg-[#fdd835]">Medium</td>
                      </tr>
                      <tr>
                        <td className="p-2 border border-gray-300">Admissions</td>
                        <td className="p-2 border border-gray-300 bg-[#e53935] text-white">High</td>
                      </tr>
                      <tr>
                        <td className="p-2 border border-gray-300">Philosophy</td>
                        <td className="p-2 border border-gray-300 bg-[#81d4fa]">Low</td>
                      </tr>
                      <tr>
                        <td className="p-2 border border-gray-300">Blog</td>
                        <td className="p-2 border border-gray-300 bg-[#81d4fa]">Low</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h4 className="font-semibold mt-6 mb-2">Digital Infrastructure:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><span className="font-bold text-green-600">✓</span> Basic CRM: In place.</li>
                  <li><span className="font-bold text-green-600">✓</span> Parent Portal: Functional.</li>
                  <li><span className="font-bold text-yellow-600">!</span> SEO: Under-optimized.</li>
                  <li><span className="font-bold text-red-600">✗</span> Admissions Funnel: Not automated.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 7. Compliance */}
          <section id="section-legal" className="bg-white rounded-lg shadow-sm p-6 md:p-8">
            <h2 className="text-3xl font-bold mb-4" style={{ color: COLORS.primary }}>7. Compliance & Legal</h2>
            <p className="text-lg text-gray-700 mb-6">
              Ensuring all brand communications are ethical, legal, and compliant is non-negotiable.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
                <h3 className="text-xl font-semibold mb-3" style={{ color: COLORS.primaryLight }}>Legal & IPR</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><span className="font-bold text-green-600">SECURE:</span> Trademark for wordmark "Sreenidhi Global School".</li>
                  <li><span className="font-bold text-yellow-600">PENDING:</span> Trademark for the school's crest/logo.</li>
                  <li><span className="font-bold text-green-600">CLEAR:</span> All website imagery properly licensed.</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
                <h3 className="text-xl font-semibold mb-3" style={{ color: COLORS.primaryLight }}>ASCI Standards</h3>
                <p className="text-gray-700">
                  An audit of 5 recent digital ad campaigns and the current prospectus found 100% compliance with ASCI guidelines. All claims are substantiated.
                </p>
                <p className="font-semibold text-green-700 mt-4 text-2xl">STATUS: Compliant</p>
              </div>
            </div>
          </section>

          {/* 8. Recommendations */}
          <section id="section-reco" className="bg-white rounded-lg shadow-sm p-6 md:p-8">
            <h2 className="text-3xl font-bold mb-4" style={{ color: COLORS.primary }}>8. Strategic Recommendations</h2>
            <p className="text-lg text-gray-700 mb-6">
              Based on the complete audit, we propose the following strategic direction to strengthen the Sreenidhi Global School brand.
            </p>
            <div className="space-y-6">
              {[
                { 
                  title: '1. Solidify Brand Positioning', 
                  desc: 'Lean into "The Sage" archetype. Shift messaging from just "global" to "Nurturing Wise, Future-Ready Citizens."',
                  color: COLORS.primary 
                },
                { 
                  title: '2. Launch "SGS Stories" Campaign', 
                  desc: 'Create content that focuses on student/teacher narratives. Highlight holistic development to address the "Holistic Parent" persona needs.',
                  color: COLORS.accent1 
                },
                { 
                  title: '3. Enforce Visual & Digital Standards', 
                  desc: 'Develop a mandatory Brand Standards Guide. Consolidate digital assets and invest in technical SEO.',
                  color: COLORS.accent2 
                },
                { 
                  title: '4. Upgrade Digital Infrastructure', 
                  desc: 'Implement an automated admissions funnel to track and nurture leads. Enhance the parent portal features.',
                  color: COLORS.accent3 
                },
              ].map((reco, idx) => (
                <div key={idx} className="bg-gray-50 p-6 rounded-lg shadow-inner border-l-4" style={{ borderColor: reco.color }}>
                  <h3 className="text-xl font-semibold mb-2">{reco.title}</h3>
                  <p className="text-gray-700">{reco.desc}</p>
                </div>
              ))}
            </div>
          </section>

        </main>

        <footer className="text-center py-6 mt-12 bg-white shadow-inner">
          <p className="text-gray-600">&copy; 2025 Brand Audit Report. For internal use only.</p>
        </footer>
      </div>
    </>
  );
}