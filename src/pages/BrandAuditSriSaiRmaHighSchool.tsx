import React, { useState } from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Radar, Bar, Doughnut } from 'react-chartjs-2';

// --- 1. Register ChartJS Components ---
ChartJS.register(
  RadialLinearScale,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
  Filler
);

// --- 2. Styles & Animations ---
// We inject the exact CSS from the HTML file
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
    body { font-family: 'Inter', sans-serif; background-color: #f9fafb; color: #1e293b; }
    
    .chart-container {
      position: relative;
      width: 100%;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
      height: 300px;
      max-height: 400px;
    }
    @media (min-width: 768px) {
      .chart-container { height: 350px; }
    }
    
    .content-section {
      animation: fadeIn 0.5s ease-in-out;
    }
    
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `}</style>
);

export default function SriSairamAudit() {
  // --- State for Navigation ---
  const [activeSection, setActiveSection] = useState('overview');

  // --- Chart Data Configuration ---

  // 1. Brand Health (Radar)
  const brandHealthData = {
    labels: ['Visual Consistency', 'Message Clarity', 'Digital Experience', 'Market Positioning', 'Audience Engagement'],
    datasets: [{
      label: 'Brand Health Score (out of 10)',
      data: [3, 7, 4, 8, 2],
      fill: true,
      backgroundColor: 'rgba(37, 99, 235, 0.2)',
      borderColor: 'rgba(37, 99, 235, 1)',
      pointBackgroundColor: 'rgba(37, 99, 235, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(37, 99, 235, 1)'
    }]
  };

  const radarOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        beginAtZero: true,
        max: 10,
        pointLabels: { font: { size: 12 } }
      }
    },
    plugins: {
      legend: { position: 'top' as const }
    }
  };

  // 2. Visual Consistency (Bar)
  const visualData = {
    labels: ['Logo Usage', 'Color Palette', 'Typography'],
    datasets: [{
      label: 'Consistency Score (out of 10)',
      data: [5, 2, 4],
      backgroundColor: [
        'rgba(239, 68, 68, 0.6)',
        'rgba(59, 130, 246, 0.6)',
        'rgba(234, 179, 8, 0.6)',
      ],
      borderColor: [
        'rgba(239, 68, 68, 1)',
        'rgba(59, 130, 246, 1)',
        'rgba(234, 179, 8, 1)',
      ],
      borderWidth: 1
    }]
  };

  const barOptions = {
    indexAxis: 'y' as const,
    responsive: true,
    maintainAspectRatio: false,
    scales: { x: { beginAtZero: true, max: 10 } },
    plugins: { legend: { display: false } }
  };

  // 3. Archetype (Doughnut)
  const archetypeData = {
    labels: ['The Sage', 'The Everyman'],
    datasets: [{
      label: 'Archetype Mix',
      data: [60, 40],
      backgroundColor: [
        'rgba(37, 99, 235, 0.8)',
        'rgba(22, 163, 74, 0.8)',
      ],
      hoverOffset: 4
    }]
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { position: 'bottom' as const } }
  };

  // --- Navigation Items ---
  const navItems = [
    { id: 'overview', icon: '📊', label: 'Overview & Health' },
    { id: 'identity', icon: '🎨', label: 'Brand Identity' },
    { id: 'market', icon: '🌍', label: 'Market & Audience' },
    { id: 'benchmarking', icon: '⚖️', label: 'Competitive Analysis' },
    { id: 'digital', icon: '💻', label: 'Digital & Web Audit' },
    { id: 'legal', icon: '📜', label: 'Comms & Legal' },
    { id: 'strategy', icon: '🚀', label: 'Recommendations' },
  ];

  return (
    <>
      <GlobalStyles />
      <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 text-slate-800">
        
        {/* Sidebar Navigation */}
        <nav className="md:w-64 bg-white shadow-lg p-4 md:p-6 shrink-0">
          <h2 className="text-2xl font-bold text-blue-700 mb-6">Brand Audit</h2>
          <h3 className="text-sm font-semibold text-gray-500 mb-2">Sri Sairam High School</h3>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center p-3 rounded-lg transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-blue-50 text-blue-600 font-semibold'
                      : 'hover:bg-gray-100 text-slate-700'
                  }`}
                >
                  <span className="mr-3">{item.icon}</span> {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Main Content Area */}
        <main className="flex-1 p-6 md:p-10 overflow-auto">
          
          {/* Section: Overview */}
          {activeSection === 'overview' && (
            <section className="content-section">
              <h1 className="text-4xl font-bold text-slate-900 mb-4">Audit Overview</h1>
              <p className="text-lg text-slate-600 mb-8">
                This section provides a high-level summary of the brand audit for Sri Sairam High School, based on its public-facing digital presence. The "Brand Health Index" offers a quantitative baseline for key areas, identifying immediate strengths and opportunities for improvement.
              </p>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4 text-center">Brand Health Index 

[Image of Radar Chart]
</h2>
                <p className="text-center text-slate-600 mb-6">A qualitative assessment (out of 10) based on the current website and positioning.</p>
                <div className="chart-container">
                  <Radar data={brandHealthData} options={radarOptions} />
                </div>
              </div>
            </section>
          )}

          {/* Section: Identity */}
          {activeSection === 'identity' && (
            <section className="content-section">
              <h1 className="text-4xl font-bold text-slate-900 mb-4">Brand Identity & Positioning</h1>
              <p className="text-lg text-slate-600 mb-8">
                A brand's identity is its core personality, promise, and visual representation. This section analyzes Sri Sairam's current positioning, its emotional appeal (archetype), and the coherence of its visual and verbal messaging.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-semibold mb-4">Positioning Analysis</h2>
                  <ul className="space-y-3 text-slate-700">
                    <li><strong className="text-slate-900">Current Position:</strong> "Affordable, Results-Oriented Local School."</li>
                    <li><strong className="text-slate-900">Key Messaging:</strong> "Quality Education at Affordable Cost," "Nurturing Future Citizens," "STATE 1st, 2nd, 3rd RANKS."</li>
                    <li><strong className="text-slate-900">Analysis:</strong> The positioning is clear and practical, appealing directly to budget-conscious parents who prioritize academic achievement (state ranks) as the primary metric of success. It is a functional, not an emotional, positioning.</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-semibold mb-4">Brand Archetype Analysis </h2>
                  <p className="text-slate-600 mb-4">Brands, like people, have personalities. Archetypes help define this. Sri Sairam presents a mix of two primary archetypes.</p>
                  <div className="chart-container" style={{ height: '300px', maxHeight: '300px' }}>
                    <Doughnut data={archetypeData} options={doughnutOptions} />
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong className="text-blue-700">The Sage (60%):</strong>
                      <p className="text-slate-600">Embodied by the focus on "Quality Education," faculty, and state ranks. The Sage promises wisdom and truth.</p>
                    </div>
                    <div>
                      <strong className="text-green-700">The Everyman (40%):</strong>
                      <p className="text-slate-600">Embodied by "Affordable Cost" and a no-frills presentation. The Everyman promises accessibility and belonging.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Section: Market */}
          {activeSection === 'market' && (
            <section className="content-section">
              <h1 className="text-4xl font-bold text-slate-900 mb-4">Market & Audience</h1>
              <p className="text-lg text-slate-600 mb-8">
                Understanding the target market and the ideal customer is fundamental. This section explores the specific regional context, the needs of the market, and the emotional persona of the target parent.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-semibold mb-4">Regional Market Analysis</h2>
                  <ul className="space-y-3 text-slate-700">
                    <li><strong className="text-slate-900">Location:</strong> Palavancha, Bhadradri Kothagudem Dist, Telangana.</li>
                    <li><strong className="text-slate-900">Industry Insight:</strong> In this region, the private school market is highly competitive. Parents seek English Medium (EM) schools as a key to upward mobility.</li>
                    <li><strong className="text-slate-900">Market Need:</strong> The primary market need is not for holistic, "whole-child" development (a more urban concept) but for tangible, measurable academic results (ranks) that provide a clear ROI on school fees.</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 bg-gradient-to-br from-blue-50 to-white">
                  <h2 className="text-2xl font-semibold mb-4">Emotional Consumer Persona</h2>
                  <h3 className="text-xl font-semibold text-blue-800">"The Aspirational Provider"</h3>
                  <p className="text-slate-600 mt-2 mb-4">This parent is practical, hard-working, and places immense value on their child's future. Their own success is measured by their ability to provide a better life for their children.</p>
                  <ul className="space-y-2 text-slate-700">
                    <li><strong>Wants:</strong> "A safe school that gets good marks."</li>
                    <li><strong>Fears:</strong> "Wasting money on a school that doesn't deliver results."</li>
                    <li><strong>Values:</strong> Discipline, tangible proof (ranks), affordability, respect for teachers.</li>
                    <li><strong>Trigger:</strong> Seeing "STATE 1st RANK" is more powerful than seeing pictures of a playground.</li>
                  </ul>
                </div>
              </div>
            </section>
          )}

          {/* Section: Benchmarking */}
          {activeSection === 'benchmarking' && (
            <section className="content-section">
              <h1 className="text-4xl font-bold text-slate-900 mb-4">Competitive Analysis</h1>
              <p className="text-lg text-slate-600 mb-8">
                No brand exists in a vacuum. This section analyzes Sri Sairam's position relative to its likely competitors and identifies gaps in the market. Analysis is limited as no public competitor data is available.
              </p>

              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-2xl font-semibold mb-4">Benchmarking vs. Local Competitor</h2>
                <p className="text-slate-600 mb-4">A comparative analysis based on a 'Typical' local private school in the same segment.</p>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feature</th>
                        <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sri Sairam (Observed)</th>
                        <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Typical Local Competitor</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="p-3">Positioning</td>
                        <td className="p-3 font-medium text-blue-700">Ranks + Affordability</td>
                        <td className="p-3">Ranks + Discipline</td>
                      </tr>
                      <tr>
                        <td className="p-3">Digital Presence</td>
                        <td className="p-3">Basic informational website</td>
                        <td className="p-3">Basic website or Facebook page</td>
                      </tr>
                      <tr>
                        <td className="p-3">Key Differentiator</td>
                        <td className="p-3">Explicit focus on "State Ranks"</td>
                        <td className="p-3">May focus on facilities or legacy</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-semibold mb-4">Market Gap vs. Market Need</h2>
                  <p className="text-slate-700">
                    There is a <strong className="text-red-600">Market Gap</strong> for high-tech, premium, international-style schools in this region.
                    <br /><br />
                    However, Sri Sairam correctly targets the <strong className="text-green-600">Market Need</strong>, which is for affordable, results-driven education.
                    <br /><br />
                    <strong className="text-slate-900">Conclusion:</strong> The brand should not pursue the "gap" but should instead focus on dominating the "need" it currently serves.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-semibold mb-4">Pricing Comparative Analysis</h2>
                  <div className="text-center p-6 bg-red-50 rounded-lg">
                    <span className="text-5xl">⚠️</span>
                    <p className="text-red-700 font-semibold mt-4">
                      No public pricing data is available from the website or competitors. A full pricing analysis cannot be completed.
                    </p>
                    <p className="text-red-600 text-sm mt-2">This is a critical gap for a brand that positions itself on "affordability."</p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Section: Digital */}
          {activeSection === 'digital' && (
            <section className="content-section">
              <h1 className="text-4xl font-bold text-slate-900 mb-4">Digital & Web Audit</h1>
              <p className="text-lg text-slate-600 mb-8">
                The website is the brand's digital front door. This audit examines the effectiveness of the visual identity, the consistency of its application, and the underlying digital infrastructure.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-semibold mb-4">Visual Identity Analysis</h2>
                  <ul className="space-y-3 text-slate-700">
                    <li><strong className="text-slate-900">Logo:</strong> Simple 'S' monogram. Functional but lacks distinction or memorable character.</li>
                    <li><strong className="text-slate-900">Colors:</strong> No consistent brand palette. Uses bright red, blue, and yellow somewhat randomly. This creates a chaotic and unprofessional visual impression.</li>
                    <li><strong className="text-slate-900">Typography:</strong> Standard system fonts. Legible, but no defined typographic hierarchy.</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-semibold mb-4">Visual Consistency Index 

[Image of Horizontal Bar Chart]
</h2>
                  <p className="text-slate-600 mb-4">A score (out of 10) for how consistently brand elements are applied.</p>
                  <div className="chart-container" style={{ height: '250px', maxHeight: '250px' }}>
                    <Bar data={visualData} options={barOptions} />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4">Digital Infrastructure Analysis</h2>
                <p className="text-slate-600 mb-6">Comparing the school's current infrastructure to modern industry standards for parent communication and engagement.</p>
                <div className="flex flex-col md:flex-row justify-around">
                  <div className="text-center p-4">
                    <h3 className="text-lg font-semibold text-red-600 mb-2">Current State</h3>
                    <div className="p-4 border-2 border-red-500 rounded-lg bg-red-50">
                      <span className="text-2xl">🖥️</span>
                      <p className="font-medium">Basic Website</p>
                      <p className="text-sm text-slate-600">(WordPress)</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center text-4xl text-slate-400 my-4 md:my-0">
                    →
                  </div>
                  <div className="text-center p-4">
                    <h3 className="text-lg font-semibold text-green-600 mb-2">Industry Standard</h3>
                    <div className="flex flex-wrap gap-2 p-4 border-2 border-green-500 rounded-lg bg-green-50">
                      <div className="p-2 bg-white rounded shadow-sm">
                        <span className="text-2xl">🖥️</span>
                        <p className="font-medium">Website</p>
                      </div>
                      <div className="p-2 bg-white rounded shadow-sm">
                        <span className="text-2xl">📱</span>
                        <p className="font-medium">Parent Portal</p>
                      </div>
                      <div className="p-2 bg-white rounded shadow-sm">
                        <span className="text-2xl">🎓</span>
                        <p className="font-medium">LMS</p>
                      </div>
                      <div className="p-2 bg-white rounded shadow-sm">
                        <span className="text-2xl">👍</span>
                        <p className="font-medium">Social Media</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-center text-slate-700 mt-6">
                  <strong className="text-slate-900">Gap:</strong> The lack of a parent portal or active social media means the brand cannot engage with its primary audience (parents) digitally. The website is a static brochure, not a tool for communication.
                </p>
              </div>
            </section>
          )}

          {/* Section: Legal */}
          {activeSection === 'legal' && (
            <section className="content-section">
              <h1 className="text-4xl font-bold text-slate-900 mb-4">Communications & Legal</h1>
              <p className="text-lg text-slate-600 mb-8">
                This section audits public-facing communications channels and adherence to advertising and intellectual property standards. The findings are based solely on information available on the website.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-semibold mb-2">Social Monitoring</h2>
                  <div className="text-center p-4 bg-gray-100 rounded-lg">
                    <span className="text-5xl">🚫</span>
                    <p className="text-slate-700 font-semibold mt-4">No social media links (Facebook, Instagram, YouTube, etc.) are present on the website.</p>
                    <p className="text-slate-600 text-sm mt-2">This is a major missed opportunity for parent engagement, community building, and showcasing results.</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-semibold mb-2">Legal & IPR</h2>
                  <div className="text-center p-4 bg-gray-100 rounded-lg">
                    <span className="text-5xl">📄</span>
                    <p className="text-slate-700 font-semibold mt-4">No public-facing information on:</p>
                    <ul className="text-slate-600 text-sm mt-2 list-disc list-inside">
                      <li>Trademark status of logo/name</li>
                      <li>Data privacy policy (for forms)</li>
                      <li>Terms of Use</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-semibold mb-2">ASCI Standards</h2>
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <span className="text-5xl">📢</span>
                    <p className="text-yellow-800 font-semibold mt-4">Potential ASCI (Advertising Standards Council of India) risk.</p>
                    <p className="text-yellow-700 text-sm mt-2">Claims like "STATE 1st RANK" must be substantiated with clear, verifiable data (e.g., year, student name, exam name) as per ASCI guidelines to avoid being misleading.</p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Section: Strategy */}
          {activeSection === 'strategy' && (
            <section className="content-section">
              <h1 className="text-4xl font-bold text-slate-900 mb-4">Strategic Recommendations</h1>
              <p className="text-lg text-slate-600 mb-8">
                Based on the audit findings, this section outlines a high-level strategy for brand improvement. The goal is to build a stronger, more consistent, and more engaging brand to solidify its position as a market leader.
              </p>

              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-2xl font-semibold mb-4">Perception Building Strategy</h2>
                <p className="text-slate-600 mb-6">The strategy must evolve the brand from "affordable and gets ranks" to "the most trusted, professional, and reliable choice for academic excellence in the region."</p>
                
                <div className="space-y-4">
                  <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <span className="text-3xl mr-4">1️⃣</span>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">Define Brand Standards</h3>
                      <p className="text-slate-700">Establish a professional "Brand Standard" document. This includes a refined logo, a consistent color palette (e.g., a strong, academic blue and a warm, trustworthy cream), and official typography. This is the foundation for all other activities.</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <span className="text-3xl mr-4">2️⃣</span>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">Redesign Digital Front Door</h3>
                      <p className="text-slate-700">Commission a new, professional website that reflects the new brand standards. The website must be mobile-first, easy to navigate, and clearly showcase "proof" (student testimonials, detailed rank info) and "process" (faculty qualifications, academic approach).</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <span className="text-3xl mr-4">3️⃣</span>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">Implement Digital Infrastructure</h3>
                      <p className="text-slate-700">Introduce a simple Parent Portal (for results, notices) and an official Facebook/WhatsApp channel for communication. This transforms the brand from a static entity to an active partner in the child's education.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4">Outcome of Strategy</h2>
                <p className="text-slate-600 mb-4">By executing this strategy, Sri Sairam High School can expect the following outcomes:</p>
                <ul className="space-y-3 text-slate-700 list-disc list-inside">
                  <li><strong className="text-green-700">Increased Trust:</strong> A professional, consistent brand is perceived as more trustworthy and reliable.</li>
                  <li><strong className="text-green-700">Justified "Affordability":</strong> Professionalism prevents "affordable" from being perceived as "cheap." It signals "high value," not just "low cost."</li>
                  <li><strong className="text-green-700">Improved Parent Engagement:</strong> Digital tools create a stickier, more positive relationship with parents, reducing student churn.</li>
                  <li><strong className="text-green-700">Stronger Competitive Moat:</strong> A strong brand is harder to copy than a low price. It builds a long-term, defensible market position.</li>
                </ul>
              </div>
            </section>
          )}

        </main>
      </div>
    </>
  );
}
