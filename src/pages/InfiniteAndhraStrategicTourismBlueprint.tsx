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
import { Doughnut, Bar, Radar, Line } from 'react-chartjs-2';

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

// --- 2. Chart Configurations & Data ---

// Common Options
const commonOptions: ChartOptions<any> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: 'bottom', labels: { usePointStyle: true, font: { family: "'Inter', sans-serif" } } },
    tooltip: { bodyFont: { family: "'Inter', sans-serif" }, titleFont: { family: "'Inter', sans-serif" } }
  }
};

// Executive Chart (Doughnut)
const execData = {
  labels: ['Sports & Adventure', 'Heritage & Culture', 'Spiritual', 'Eco/Retreats'],
  datasets: [{
    data: [25, 30, 25, 20],
    backgroundColor: ['#3b82f6', '#eab308', '#a855f7', '#10b981'],
    borderWidth: 2,
    borderColor: '#ffffff',
    hoverOffset: 4
  }]
};
const execOptions = {
  ...commonOptions,
  plugins: { legend: { position: 'right' as const, labels: { usePointStyle: true, boxWidth: 10 } } }
};

// Sector Chart (Bar)
const sectorData = {
  labels: ['Current Product Mix', 'Target Strategy Mix'],
  datasets: [
    { label: 'Spiritual', data: [70, 40], backgroundColor: '#a855f7' },
    { label: 'Sports', data: [5, 25], backgroundColor: '#3b82f6' },
    { label: 'Eco/Heritage', data: [25, 35], backgroundColor: '#10b981' }
  ]
};
const sectorOptions = {
  ...commonOptions,
  scales: {
    x: { stacked: true, grid: { display: false } },
    y: { stacked: true, grid: { color: '#f1f5f9' } }
  }
};

// Gap Chart (Radar)
const gapData = {
  labels: ['Brand Consistency', 'Digital Reach', 'Infrastructure Uniformity', 'Safety Perception', 'Event Frequency'],
  datasets: [{
    label: 'Current Status',
    data: [40, 50, 60, 70, 30],
    fill: true,
    backgroundColor: 'rgba(239, 68, 68, 0.2)',
    borderColor: 'rgb(239, 68, 68)',
    pointBackgroundColor: 'rgb(239, 68, 68)',
  }, {
    label: 'Target Goal',
    data: [90, 95, 90, 95, 85],
    fill: true,
    backgroundColor: 'rgba(79, 70, 229, 0.2)',
    borderColor: 'rgb(79, 70, 229)',
    pointBackgroundColor: 'rgb(79, 70, 229)',
  }]
};
const gapOptions = {
  ...commonOptions,
  scales: {
    r: {
      angleLines: { color: '#e2e8f0' },
      grid: { color: '#e2e8f0' },
      pointLabels: { color: '#475569', font: { size: 12 } },
      ticks: { display: false, backdropColor: 'transparent' }
    }
  }
};

// Impact Chart (Line)
const impactData = {
  labels: ['Y1 (Foundation)', 'Y2 (Launch)', 'Y3 (Growth)', 'Y4 (Scale)', 'Y5 (Dominance)'],
  datasets: [{
    label: 'Projected Tourist Footfall (Index)',
    data: [100, 130, 200, 350, 500],
    borderColor: '#0ea5e9',
    backgroundColor: 'rgba(14, 165, 233, 0.1)',
    fill: true,
    tension: 0.4
  }]
};
const impactOptions = {
  ...commonOptions,
  scales: {
    y: { grid: { color: '#f1f5f9' } },
    x: { grid: { display: false } }
  }
};

// --- 3. Styles (Injecting Custom CSS & Fonts) ---
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
    
    body { font-family: 'Inter', sans-serif; background-color: #ffffff; color: #0f172a; }
    
    .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
    .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
    
    @keyframes fadeInUp {
      0% { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes fadeIn {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }

    .tab-btn { color: #64748b; transition: all 0.3s ease; border-bottom: 2px solid transparent; }
    .tab-btn:hover { color: #4f46e5; }
    .tab-btn.active { border-bottom: 2px solid #4f46e5; color: #0f172a; font-weight: 600; }
    
    .card-hover:hover {
      transform: translateY(-4px);
      transition: transform 0.3s ease;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }
    
    .home-card:hover {
      border-color: #4f46e5;
      background-color: #f8fafc;
    }

    /* Hide Scrollbar for tabs */
    .no-scrollbar::-webkit-scrollbar { display: none; }
    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
  `}</style>
);

export default function InfiniteAndhraStrategicTourismBlueprint() {
  const [view, setView] = useState<'home' | 'dashboard'>('home');
  const [activeTab, setActiveTab] = useState('executive');
  const [showTable, setShowTable] = useState(false);

  const enterDashboard = (tab: string) => {
    setActiveTab(tab);
    setView('dashboard');
    window.scrollTo(0, 0);
  };

  const showHome = () => {
    setView('home');
  };

  return (
    <>
      <GlobalStyles />
      <div className="antialiased min-h-screen flex flex-col bg-white text-slate-900">

        {/* --- VIEW 1: HOME PAGE --- */}
        {view === 'home' && (
          <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden bg-white">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-60">
              <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-indigo-100 rounded-full blur-3xl"></div>
              <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-sky-100 rounded-full blur-3xl"></div>
            </div>

            <div className="z-10 text-center max-w-5xl w-full">
              {/* Title */}
              <div className="mb-16 animate-fade-in-up">
                <h1 className="text-6xl md:text-8xl font-bold text-slate-900 tracking-tighter mb-4">Infinite Andhra</h1>
                <div className="h-1 w-24 bg-[#4f46e5] mx-auto mb-6 rounded-full"></div>
                <p className="text-xl md:text-2xl text-slate-500 uppercase tracking-[0.2em] font-light">Tourism for Tomorrow Blueprint</p>
              </div>

              {/* Navigation Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                {/* Executive Summary */}
                <button onClick={() => enterDashboard('executive')} className="home-card group p-6 rounded-xl border border-gray-200 bg-white shadow-sm text-left transition-all duration-300 hover:shadow-md">
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Executive Summary</h3>
                  <p className="text-sm text-slate-500 group-hover:text-slate-600">Market landscape, shifts, and high-level drivers.</p>
                </button>

                {/* Focus Sectors */}
                <button onClick={() => enterDashboard('sectors')} className="home-card group p-6 rounded-xl border border-gray-200 bg-white shadow-sm text-left transition-all duration-300 hover:shadow-md">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path></svg>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Focus Sectors</h3>
                  <p className="text-sm text-slate-500 group-hover:text-slate-600">Sports, Heritage, Eco & Cultural deep dives.</p>
                </button>

                {/* Gap Analysis */}
                <button onClick={() => enterDashboard('gaps')} className="home-card group p-6 rounded-xl border border-gray-200 bg-white shadow-sm text-left transition-all duration-300 hover:shadow-md">
                  <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Gap Analysis</h3>
                  <p className="text-sm text-slate-500 group-hover:text-slate-600">Brand consistency & digital presence diagnostics.</p>
                </button>

                {/* Blueprint */}
                <button onClick={() => enterDashboard('blueprint')} className="home-card group p-6 rounded-xl border border-gray-200 bg-white shadow-sm text-left transition-all duration-300 hover:shadow-md">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">The 5X Strategy</h3>
                  <p className="text-sm text-slate-500 group-hover:text-slate-600">The Blueprint for Rebranding & Growth.</p>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* --- VIEW 2: DASHBOARD --- */}
        {view === 'dashboard' && (
          <div className="flex flex-col min-h-screen">
            
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                  {/* Branding */}
                  <button onClick={showHome} className="flex items-center gap-3 group focus:outline-none">
                    <div className="text-left group-hover:opacity-80 transition-opacity">
                      <h1 className="text-xl font-bold tracking-tight text-slate-900">Infinite Andhra</h1>
                      <p className="text-xs text-[#4f46e5] uppercase tracking-wider font-semibold">Tourism for Tomorrow Blueprint</p>
                    </div>
                  </button>
                  
                  {/* Mobile Home Icon */}
                  <button onClick={showHome} className="md:hidden text-gray-500 hover:text-slate-900">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                  </button>
                </div>

                {/* Tabs */}
                <nav className="flex space-x-8 overflow-x-auto pb-1 no-scrollbar mt-2">
                  {[
                    { id: 'executive', label: 'Executive Summary' },
                    { id: 'sectors', label: 'Focus Sectors' },
                    { id: 'gaps', label: 'Gap Analysis' },
                    { id: 'blueprint', label: 'The 5X Strategy' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`tab-btn pb-3 px-1 text-sm whitespace-nowrap ${activeTab === tab.id ? 'active' : ''}`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>
            </header>

            {/* Main Dashboard Content */}
            <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">

              {/* TAB 1: EXECUTIVE SUMMARY */}
              {activeTab === 'executive' && (
                <div className="space-y-6 animate-fade-in">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-white p-4 rounded-xl shadow border border-gray-200">
                      <p className="text-slate-500 text-sm">Current Status</p>
                      <p className="text-2xl font-bold text-slate-900 mt-1">Growing</p>
                      <p className="text-xs text-green-600 mt-2 flex items-center font-medium">↑ Focus on Safety & Eco</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow border border-gray-200">
                      <p className="text-slate-500 text-sm">Key Challenge</p>
                      <p className="text-2xl font-bold text-slate-900 mt-1">Fragmented</p>
                      <p className="text-xs text-red-500 mt-2 flex items-center font-medium">! Lack of Uniformity</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow border border-gray-200">
                      <p className="text-slate-500 text-sm">Strategic Goal</p>
                      <p className="text-2xl font-bold text-slate-900 mt-1">Global Hub</p>
                      <p className="text-xs text-[#4f46e5] mt-2 font-medium">Sports & Culture Integration</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow border border-gray-200">
                      <p className="text-slate-500 text-sm">Primary Action</p>
                      <p className="text-2xl font-bold text-slate-900 mt-1">Rebranding</p>
                      <p className="text-xs text-indigo-500 mt-2 font-medium">Visual & Repositioning</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow border border-gray-200">
                      <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <svg className="w-5 h-5 text-[#4f46e5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                        Market Landscape
                      </h2>
                      <div className="prose prose-slate max-w-none text-slate-600 mb-4 leading-relaxed">
                        <p className="mb-4">
                          Andhra Pradesh's tourism is currently in a growth phase, driven by popular destinations like <span className="text-slate-900 font-semibold">Tirupati</span> and <span className="text-slate-900 font-semibold">Araku Valley</span>. The state has established a baseline of safety and cultural richness.
                        </p>
                        <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 mb-4 rounded-r-lg">
                          <h4 className="text-indigo-700 font-bold text-sm uppercase mb-1">Critical Insight</h4>
                          <p className="text-sm text-slate-700 italic">"While branding efforts exist, there is a noticeable lack of leverage in potential impact due to gaps in visual consistency and digital uniformity."</p>
                        </div>
                        <p>The immediate opportunity lies in shifting from a generic "State Tourism" appeal to a specialized, niche-driven model focusing on Sports, Heritage, and Modern Recreation.</p>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow border border-gray-200 flex flex-col items-center justify-center">
                      <h3 className="text-lg font-semibold text-slate-900 mb-4 self-start">Strategic Focus Areas</h3>
                      <div className="w-full h-64 relative">
                        <Doughnut data={execData} options={execOptions} />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: SECTORS */}
              {activeTab === 'sectors' && (
                <div className="space-y-6 animate-fade-in">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-slate-900">Diversifying the Portfolio</h2>
                    <p className="text-slate-500 mt-2">Moving beyond Pilgrim Tourism to a Multi-Segment Model</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {/* Sports */}
                    <div className="card-hover bg-white rounded-xl border border-gray-200 overflow-hidden relative group shadow-sm">
                      <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-xl font-bold text-slate-900">Sports Tourism</h3>
                          <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded font-medium">High Growth</span>
                        </div>
                        <ul className="space-y-2 text-slate-600 text-sm">
                          <li className="flex items-start gap-2"><span className="text-blue-500 mt-1">●</span>Promote lesser-known sports (Handball, Gymnastics).</li>
                          <li className="flex items-start gap-2"><span className="text-blue-500 mt-1">●</span>Build world-class infrastructure.</li>
                          <li className="flex items-start gap-2"><span className="text-blue-500 mt-1">●</span>Sponsor international teams to boost global visibility.</li>
                        </ul>
                      </div>
                    </div>

                    {/* Culture */}
                    <div className="card-hover bg-white rounded-xl border border-gray-200 overflow-hidden relative group shadow-sm">
                      <div className="absolute top-0 left-0 w-1 h-full bg-purple-500"></div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-xl font-bold text-slate-900">Culture & Concerts</h3>
                          <span className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded font-medium">Gen Z Focus</span>
                        </div>
                        <ul className="space-y-2 text-slate-600 text-sm">
                          <li className="flex items-start gap-2"><span className="text-purple-500 mt-1">●</span>Establish <strong>Vizag</strong> as a modern concert hub.</li>
                          <li className="flex items-start gap-2"><span className="text-purple-500 mt-1">●</span>Blend traditional culture with modern events.</li>
                          <li className="flex items-start gap-2"><span className="text-purple-500 mt-1">●</span>Attract international performances.</li>
                        </ul>
                      </div>
                    </div>

                    {/* Heritage */}
                    <div className="card-hover bg-white rounded-xl border border-gray-200 overflow-hidden relative group shadow-sm">
                      <div className="absolute top-0 left-0 w-1 h-full bg-yellow-500"></div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-xl font-bold text-slate-900">Heritage Preservation</h3>
                          <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded font-medium">Core Asset</span>
                        </div>
                        <ul className="space-y-2 text-slate-600 text-sm">
                          <li className="flex items-start gap-2"><span className="text-yellow-500 mt-1">●</span>Focus on Araku Valley and Borra Caves.</li>
                          <li className="flex items-start gap-2"><span className="text-yellow-500 mt-1">●</span>Promote "Offbeat Destinations".</li>
                          <li className="flex items-start gap-2"><span className="text-yellow-500 mt-1">●</span>Create immersive heritage experiences.</li>
                        </ul>
                      </div>
                    </div>

                    {/* Eco-System */}
                    <div className="card-hover bg-white rounded-xl border border-gray-200 overflow-hidden relative group shadow-sm">
                      <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-xl font-bold text-slate-900">Eco-System</h3>
                          <span className="bg-emerald-100 text-emerald-700 text-xs px-2 py-1 rounded font-medium">Operations</span>
                        </div>
                        <ul className="space-y-2 text-slate-600 text-sm">
                          <li className="flex items-start gap-2"><span className="text-emerald-500 mt-1">●</span>Standardized eco-friendly kiosks.</li>
                          <li className="flex items-start gap-2"><span className="text-emerald-500 mt-1">●</span>Uniform pricing for foreign tourists.</li>
                          <li className="flex items-start gap-2"><span className="text-emerald-500 mt-1">●</span>Enhanced safety protocols for women.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Chart */}
                  <div className="bg-white p-6 rounded-xl shadow border border-gray-200 mt-6">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-lg font-bold text-slate-900">Market Evolution: Product Mix</h3>
                      <button onClick={() => setShowTable(!showTable)} className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1 rounded transition border border-gray-300">
                        Toggle Data View
                      </button>
                    </div>
                    <div className="w-full h-72">
                      <Bar data={sectorData} options={sectorOptions} />
                    </div>

                    {showTable && (
                      <div className="mt-6 overflow-x-auto">
                        <table className="w-full text-sm text-left text-slate-600">
                          <thead className="text-xs text-slate-700 uppercase bg-slate-100">
                            <tr>
                              <th className="px-6 py-3">Sector</th>
                              <th className="px-6 py-3">Current Allocation</th>
                              <th className="px-6 py-3">Target Allocation</th>
                              <th className="px-6 py-3">Growth Strategy</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="bg-white border-b border-gray-200">
                              <td className="px-6 py-4 font-medium text-slate-900">Religious/Spiritual</td>
                              <td className="px-6 py-4">60%</td>
                              <td className="px-6 py-4">40%</td>
                              <td className="px-6 py-4">Maintain & Optimize</td>
                            </tr>
                            <tr className="bg-white border-b border-gray-200">
                              <td className="px-6 py-4 font-medium text-slate-900">Sports/Adventure</td>
                              <td className="px-6 py-4">10%</td>
                              <td className="px-6 py-4">25%</td>
                              <td className="px-6 py-4">Aggressive Infrastructure</td>
                            </tr>
                            <tr className="bg-white border-b border-gray-200">
                              <td className="px-6 py-4 font-medium text-slate-900">Heritage/Eco</td>
                              <td className="px-6 py-4">30%</td>
                              <td className="px-6 py-4">35%</td>
                              <td className="px-6 py-4">Branding & Access</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* TAB 3: GAP ANALYSIS */}
              {activeTab === 'gaps' && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in">
                  <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow border border-gray-200">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Brand Health Diagnostic</h3>
                    <p className="text-sm text-slate-500 mb-6">Visualizing the gap between Current Reality and Strategic Aspirations.</p>
                    <div className="w-full h-80 relative">
                      <Radar data={gapData} options={gapOptions} />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-red-50 border border-red-200 p-5 rounded-xl">
                      <h4 className="text-red-600 font-bold mb-2">The Consistency Gap</h4>
                      <p className="text-slate-700 text-sm">"The digital presence of AP Tourism lacks consistency in both visual presentation and content."</p>
                      <p className="text-slate-500 text-xs mt-2 font-mono">&gt; Impact: Low leverage of brand assets.</p>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 p-5 rounded-xl">
                      <h4 className="text-blue-600 font-bold mb-2">The Uniformity Gap</h4>
                      <p className="text-slate-700 text-sm">Need for standardized pricing, kiosks, and licensing across all tourist spots to create a unified "Andhra Experience."</p>
                    </div>
                    <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                      <h4 className="text-slate-900 font-bold mb-2">Competitor Benchmarks</h4>
                      <ul className="text-sm text-slate-600 space-y-2">
                        <li className="flex justify-between"><span>Kerala</span><span className="text-green-600 font-medium">High Brand Recall</span></li>
                        <li className="flex justify-between"><span>Rajasthan</span><span className="text-green-600 font-medium">Strong Heritage Identity</span></li>
                        <li className="flex justify-between"><span>AP (Current)</span><span className="text-yellow-600 font-medium">High Potential / Low Cohesion</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 4: BLUEPRINT */}
              {activeTab === 'blueprint' && (
                <div className="space-y-6 animate-fade-in">
                  <div className="bg-gradient-to-r from-[#4f46e5] to-indigo-700 rounded-xl p-8 shadow-lg text-center">
                    <h2 className="text-3xl font-bold text-white mb-2">The 5X Tourism Blueprint</h2>
                    <p className="text-indigo-100 max-w-2xl mx-auto">A comprehensive strategy to Rebrand, Reposition, and Reimagine Andhra Pradesh.</p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Strategic Imperatives */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                      <h3 className="text-xl font-bold text-slate-900 mb-6">Strategic Imperatives</h3>
                      <div className="space-y-6">
                        <div className="flex gap-4">
                          <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold shrink-0">1</div>
                          <div>
                            <h4 className="text-slate-900 font-semibold">Rebranding & Repositioning</h4>
                            <p className="text-sm text-slate-600 mt-1">Shift from "State Tourism" to regional communication. Change the visual mechanism to target individual audience groups (Gen Z, Family, Solo).</p>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold shrink-0">2</div>
                          <div>
                            <h4 className="text-slate-900 font-semibold">Infrastructure Standardization</h4>
                            <p className="text-sm text-slate-600 mt-1">Implement eco-friendly kiosks (e.g., glass bottles at Tirupati). Standardize entry fees and licensing for souvenirs.</p>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 font-bold shrink-0">3</div>
                          <div>
                            <h4 className="text-slate-900 font-semibold">Strategic Partnerships (Magsmen)</h4>
                            <p className="text-sm text-slate-600 mt-1">Assist with digital initiatives, brand aesthetics, and communication mechanisms to ensure consistency.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Impact Chart */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Projected Impact</h3>
                      <p className="text-sm text-slate-500 mb-6">Estimated growth in tourist footfall with strategy implementation.</p>
                      <div className="flex-grow w-full relative h-64">
                        <Line data={impactData} options={impactOptions} />
                      </div>
                      <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                        <div className="bg-slate-50 p-2 rounded border border-gray-200">
                          <span className="block text-xs text-slate-500">Intl Arrivals</span>
                          <span className="text-slate-900 font-bold">+25%</span>
                        </div>
                        <div className="bg-slate-50 p-2 rounded border border-gray-200">
                          <span className="block text-xs text-slate-500">Rev per Tourist</span>
                          <span className="text-slate-900 font-bold">+40%</span>
                        </div>
                        <div className="bg-slate-50 p-2 rounded border border-gray-200">
                          <span className="block text-xs text-slate-500">Brand Equity</span>
                          <span className="text-slate-900 font-bold">High</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </main>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-200 py-6 mt-8">
              <div className="max-w-7xl mx-auto px-4 text-center">
                <p className="text-slate-500 text-sm">Confidential Strategy Document | Government of Andhra Pradesh</p>
              </div>
            </footer>
          </div>
        )}
      </div>
    </>
  );
}