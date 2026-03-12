import React, { useState, useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ChartOptions
} from 'chart.js';
import { Radar, Bar } from 'react-chartjs-2';

// --- 1. Register ChartJS Components ---
ChartJS.register(
  RadialLinearScale,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

// --- 2. Styles (Injecting exact CSS from your HTML) ---
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
    body { font-family: 'Inter', sans-serif; background-color: #f9fafb; color: #1f2937; }
    
    .chart-container {
      position: relative;
      width: 100%;
      max-width: 500px;
      margin-left: auto;
      margin-right: auto;
      height: 300px;
      max-height: 350px;
    }
    @media (min-width: 768px) {
      .chart-container { height: 350px; }
    }
    
    /* Animation classes */
    .fade-in {
      animation: fadeIn 0.5s;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `}</style>
);

export default function DelhiWorldSchoolBrandAndDigitalAudit() {
  // --- State Management ---
  const [activeTab, setActiveTab] = useState('dashboard');
  const [activePersona, setActivePersona] = useState('priya');

  // --- Chart Configuration ---
  const commonChartOptions: ChartOptions<any> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: { font: { family: 'Inter' } }
      },
      tooltip: {
        enabled: true,
        bodyFont: { family: 'Inter' },
        titleFont: { family: 'Inter' }
      }
    }
  };

  const radarOptions: ChartOptions<'radar'> = {
    ...commonChartOptions,
    scales: {
      r: {
        angleLines: { color: 'rgba(0, 0, 0, 0.1)' },
        grid: { color: 'rgba(0, 0, 0, 0.1)' },
        pointLabels: {
          font: { family: 'Inter', size: 13 },
          color: '#1f2937'
        },
        ticks: {
          backdropColor: 'transparent',
          beginAtZero: true,
          max: 10,
          stepSize: 2,
          font: { size: 10 }
        }
      }
    },
    plugins: {
      ...commonChartOptions.plugins,
      legend: { position: 'top' }
    }
  };

  const barOptions: ChartOptions<'bar'> = {
    ...commonChartOptions,
    scales: {
      y: {
        beginAtZero: true,
        max: 10,
        ticks: { font: { family: 'Inter' } }
      },
      x: {
        ticks: { font: { family: 'Inter' } }
      }
    },
    plugins: {
      ...commonChartOptions.plugins,
      title: { display: false }
    }
  };

  // --- Chart Data ---
  const brandHealthData = {
    labels: ['Awareness', 'Perception', 'Consistency', 'Differentiation', 'Loyalty (Online)'],
    datasets: [{
      label: 'Brand Health',
      data: [7, 6, 8, 4, 5],
      backgroundColor: 'rgba(29, 78, 216, 0.2)',
      borderColor: 'rgba(29, 78, 216, 1)',
      pointBackgroundColor: 'rgba(29, 78, 216, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(29, 78, 216, 1)',
      borderWidth: 2
    }]
  };

  const webAuditData = {
    labels: ['Performance', 'On-Page SEO', 'UX/UI', 'Content Quality', 'CTA Effectiveness'],
    datasets: [{
      label: 'Website Audit',
      data: [6, 5, 6, 4, 5],
      backgroundColor: 'rgba(202, 138, 4, 0.2)',
      borderColor: 'rgba(202, 138, 4, 1)',
      pointBackgroundColor: 'rgba(202, 138, 4, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(202, 138, 4, 1)',
      borderWidth: 2
    }]
  };

  const competitiveData = {
    labels: ['Academic Perception', 'Infra Perception', 'Digital Presence'],
    datasets: [
      {
        label: 'DWS Chintal',
        data: [8, 8, 6],
        backgroundColor: 'rgba(29, 78, 216, 0.8)',
        borderColor: '#1D4ED8',
        borderWidth: 1
      },
      {
        label: 'Competitor A',
        data: [9, 9, 8],
        backgroundColor: 'rgba(107, 114, 128, 0.8)',
        borderColor: '#6B7280',
        borderWidth: 1
      }
    ]
  };

  const benchmarkData = {
    labels: ['Academics (Perception)', 'Infrastructure (Perception)', 'Brand Equity', 'Affordability'],
    datasets: [
      {
        label: 'DWS Chintal',
        data: [8, 8, 7, 6],
        backgroundColor: 'rgba(29, 78, 216, 0.8)',
        borderColor: '#1D4ED8',
        borderWidth: 1
      },
      {
        label: 'Competitor A (Premium Brand)',
        data: [9, 9, 9, 5],
        backgroundColor: 'rgba(107, 114, 128, 0.8)',
        borderColor: '#6B7280',
        borderWidth: 1
      },
      {
        label: 'Competitor B (Local Leader)',
        data: [7, 6, 5, 8],
        backgroundColor: 'rgba(202, 138, 4, 0.8)',
        borderColor: '#CA8A04',
        borderWidth: 1
      }
    ]
  };

  // --- Render ---
  return (
    <>
      <GlobalStyles />
      <div className="container mx-auto p-4 md:p-8 max-w-7xl bg-gray-50 text-gray-800 min-h-screen">
        
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-2">Brand & Digital Audit</h1>
          <p className="text-lg text-gray-600">Delhi World School, Chintal</p>
        </header>

        {/* Tab Navigation */}
        <div className="mb-6 border-b border-gray-300">
          <nav className="flex flex-wrap -mb-px" aria-label="Tabs">
            {['dashboard', 'brand', 'market', 'digital', 'strategy'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-3 md:px-6 text-sm md:text-base font-medium transition-colors border-b-[3px] 
                  ${activeTab === tab 
                    ? 'border-blue-700 text-blue-900 font-semibold' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1).replace('brand', 'Brand Identity').replace('market', 'Market Position').replace('digital', 'Digital Audit').replace('strategy', 'Strategic Plan')}
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content Area */}
        <main>
          
          {/* Dashboard Tab */}
          {activeTab === 'dashboard' && (
            <div className="fade-in">
              <p className="text-gray-700 mb-6">This executive dashboard provides a multi-dimensional summary of the audit. It visualizes the core components of brand health, digital performance, and the competitive landscape to provide a complete diagnostic overview. Strategic imperatives are presented as a direct outcome of this analysis.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Brand Health Radar */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4 text-center">Brand Health Indicators 

[Image of Radar Chart]
</h3>
                  <p className="text-center text-gray-600 text-sm mb-4">Multi-factor assessment of brand position (Score / 10).</p>
                  <div className="chart-container">
                    <Radar data={brandHealthData} options={radarOptions} />
                  </div>
                </div>

                {/* Digital Audit Radar */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4 text-center">Digital Performance Audit 

[Image of Radar Chart]
</h3>
                  <p className="text-center text-gray-600 text-sm mb-4">Multi-factor assessment of web presence (Score / 10).</p>
                  <div className="chart-container">
                    <Radar data={webAuditData} options={radarOptions} />
                  </div>
                </div>

                {/* Competitive Snapshot */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4 text-center">Competitive Snapshot 

[Image of Bar Chart]
</h3>
                  <p className="text-center text-gray-600 text-sm mb-4">Perception scores vs. key regional competitor.</p>
                  <div className="chart-container">
                    <Bar data={competitiveData} options={barOptions} />
                  </div>
                </div>

                {/* Strategic Imperatives */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">Key Strategic Imperatives</h3>
                  <ul className="space-y-3 text-gray-700">
                    {[
                      { title: "Localize the Story:", desc: "Develop a unique \"Why Chintal\" narrative beyond the main franchise brand." },
                      { title: "Demonstrate, Don't Claim:", desc: "Use video and student work to showcase facilities in action." },
                      { title: "Build Emotional Connection:", desc: "Invest in authentic photography/videography to replace stock-like images." },
                      { title: "Optimize Digital Infrastructure:", desc: "Implement a dedicated parent portal and activate local social media." }
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-blue-600 font-bold mr-2 mt-1">&#10003;</span>
                        <span><strong>{item.title}</strong> {item.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Brand Identity Tab */}
          {activeTab === 'brand' && (
            <div className="fade-in">
              <p className="text-gray-700 mb-6">This section analyzes the core components of the DWS Chintal brand, from its underlying personality to the emotional profiles of its target audience. Understanding this is key to building a compelling and differentiated brand story.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">Brand Archetypes</h3>
                  <p className="text-gray-700 mb-2"><strong>Primary: The Sage</strong> (Knowledge, Wisdom, Expertise). This is projected through the "Delhi World" brand, CBSE affiliation, and academic focus.</p>
                  <p className="text-gray-700"><strong>Secondary: The Caregiver</strong> (Nurturing, Safety, Support). This is the expected archetype for any school but needs to be more actively communicated to build trust.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">Story Analysis: The Gap</h3>
                  <p className="text-gray-700 mb-2"><strong>Current Story:</strong> The website tells the story of the Delhi World Foundation (the franchise). It's a national, corporate story of quality and standards.</p>
                  <p className="text-gray-700"><strong>Missing Story:</strong> The local story is absent. Why DWS in Chintal? Who are the local teachers? What are the specific achievements of this campus? This is the primary storytelling gap.</p>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-blue-800 mt-8 mb-4 text-center">Emotional Consumer Personas</h2>
              <p className="text-gray-700 mb-6 text-center max-w-2xl mx-auto">To build perception, we must understand the two primary parent personas in the Chintal region. Use the buttons to toggle between them.</p>

              <div className="flex justify-center gap-4 mb-6">
                <button 
                  onClick={() => setActivePersona('priya')}
                  className={`py-2 px-6 rounded-full font-medium transition-all ${activePersona === 'priya' ? 'bg-blue-900 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                >
                  Persona 1: The Anxious Achiever
                </button>
                <button 
                  onClick={() => setActivePersona('rohan')}
                  className={`py-2 px-6 rounded-full font-medium transition-all ${activePersona === 'rohan' ? 'bg-blue-900 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                >
                  Persona 2: The Holistic Believer
                </button>
              </div>

              <div className="max-w-3xl mx-auto">
                {activePersona === 'priya' && (
                  <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600 fade-in">
                    <h3 className="text-xl font-semibold text-blue-800 mb-3">"Priya", 35, IT Professional</h3>
                    <p className="text-gray-600 font-medium mb-4">"Is this school good enough to get my child into a top university?"</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li><strong>Motivation:</strong> Academic rigor, exam results, and competitive advantage.</li>
                      <li><strong>Research:</strong> Researches heavily online. Compares exam toppers, faculty qualifications, and tech facilities (robotics, labs).</li>
                      <li><strong>Needs to See:</strong> Hard proof of academic excellence, modern infrastructure, and clear communication channels.</li>
                      <li><strong>Current Gap:</strong> The site claims these things but doesn't prove them with specific data or visual evidence.</li>
                    </ul>
                  </div>
                )}
                
                {activePersona === 'rohan' && (
                  <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500 fade-in">
                    <h3 className="text-xl font-semibold text-yellow-700 mb-3">"Rohan", 40, Small Business Owner</h3>
                    <p className="text-gray-600 font-medium mb-4">"Will my child be happy, safe, and grow as a good person here?"</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li><strong>Motivation:</strong> Holistic development, character building, safety, and a nurturing environment.</li>
                      <li><strong>Research:</strong> Looks for photos of school life, sports, arts, and reads parent reviews. Wants a "community feel".</li>
                      <li><strong>Needs to See:</strong> Authentic photos of happy students, accessible faculty, and a focus on values and extra-curriculars.</li>
                      <li><strong>Current Gap:</strong> The site feels corporate and lacks the warmth and authenticity Rohan is looking for.</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Market Position Tab */}
          {activeTab === 'market' && (
            <div className="fade-in">
              <p className="text-gray-700 mb-6">This section benchmarks DWS Chintal against its key competitors in the highly crowded regional market. It identifies the primary needs of the market and the "gap" where DWS can create a unique position.</p>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">Regional Market Insight</h3>
                  <p className="text-gray-700">The Chintal / Kompally / Suchitra region is a hyper-competitive education market. Parents are brand-conscious and have many choices, from established national chains to affordable local schools.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">Identified Market Need</h3>
                  <p className="text-gray-700">Parents are seeking a "balanced" school: one that has the brand and academic rigor of a national chain but also offers the safety, individual attention, and values of a community school.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">Identified Market Gap</h3>
                  <p className="text-gray-700">The gap lies in tangible proof. Many schools claim "holistic education," but few demonstrate it effectively online. The winner will be the school that best proves its claims visually and with data.</p>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-blue-800 mt-8 mb-4 text-center">Competitive Benchmarking (Perception Score / 10) 

[Image of Bar Chart]
</h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-center text-gray-600 text-sm mb-4">How DWS Chintal's online perception stacks up against key competitor types.</p>
                <div className="chart-container" style={{ maxWidth: '800px', height: '400px' }}>
                  <Bar data={benchmarkData} options={barOptions} />
                </div>
              </div>
            </div>
          )}

          {/* Digital Audit Tab */}
          {activeTab === 'digital' && (
            <div className="fade-in">
              <p className="text-gray-700 mb-6">This section details the audit of the school's digital assets, starting with the website and visual identity. It assesses technical performance, usability, and visual consistency, which are foundational to building a strong digital presence.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">Web & Technical Audit</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-gray-700">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="p-3 font-medium">Metric</th>
                          <th className="p-3 font-medium">Finding</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="p-3">Platform</td>
                          <td className="p-3">WordPress (Standard Template)</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-3">Mobile Friendliness</td>
                          <td className="p-3">Good (Responsive), but some tables overflow.</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-3">Performance (Lighthouse)</td>
                          <td className="p-3">Average. Images are large and unoptimized.</td>
                        </tr>
                        <tr>
                          <td className="p-3">On-Page SEO</td>
                          <td className="p-3">Basic. Lacks local keywords and content marketing (e.g., blog, news).</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">Visual Identity & Consistency</h3>
                  <p className="text-gray-700 mb-4">The site adheres strictly to the DWS corporate brand guidelines (blue, yellow, white). This is good for brand recognition but bad for local differentiation.</p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-gray-700">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="p-3 font-medium">Metric</th>
                          <th className="p-3 font-medium">Score / Finding</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="p-3">Visual Consistency</td>
                          <td className="p-3">High (Follows template)</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-3">Local Differentiation</td>
                          <td className="p-3">Very Low (Looks like any other DWS)</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-3">Emotional Connection</td>
                          <td className="p-3">Low (Relies on generic/stock photos)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md md:col-span-2">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">Digital Infrastructure & Social</h3>
                  <p className="text-gray-700 mb-2"><strong>Current:</strong> The digital infrastructure is basic: a public-facing website. Social media presence (Facebook) appears to be franchise-level or inactive locally.</p>
                  <p className="text-gray-700"><strong>Recommendation:</strong> A robust digital infrastructure is required. This includes a secure <strong>Parent Portal</strong> (for communication, results, fees) and an active, <strong>localized social media strategy</strong> (Facebook, Instagram) to engage the parent community in the Chintal region.</p>
                </div>
              </div>
            </div>
          )}

          {/* Strategic Plan Tab */}
          {activeTab === 'strategy' && (
            <div className="fade-in">
              <p className="text-gray-700 mb-6">Based on the complete audit, this section outlines a clear, four-part strategic plan. The goal is to move from a generic franchise presence to a distinct, trusted local brand that resonates with both "Achiever" and "Holistic" parent personas.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">1. Localize the Story</h3>
                  <p className="text-gray-700">Stop relying on the national brand. Develop a unique "Why Chintal?" narrative. Introduce the Principal and key faculty. Showcase the specific campus environment. Make the website feel like it belongs to the local community.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-yellow-500">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">2. Demonstrate, Don't Claim</h3>
                  <p className="text-gray-700">Move beyond text claims like "Best Labs." Create a "See it in Action" section. Show a 1-minute video from the robotics lab. Post a gallery of the art-class projects. Show the sports teams practicing. This builds trust and tangible proof.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">3. Build Emotional Connection</h3>
                  <p className="text-gray-700">Invest in a professional photo and video shoot focused on authentic interactions not staged, stock-like photos. Capture genuine moments in the classroom, playground, and labs. This directly targets the "Holistic Believer" persona.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-yellow-500">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">4. Optimize Digital Infrastructure</h3>
                  <p className="text-gray-700">Implement a modern Parent Portal (LMS/ERP) for existing parents. This improves retention and word-of-mouth. Launch active, localized social media (Facebook/Instagram) targeting parents in the Chintal-Kompally belt with success stories and event news.</p>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>
    </>
  );
}