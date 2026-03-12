import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  ChartOptions,
  ChartData
} from 'chart.js';
import { Bar, Pie, Doughnut, Line } from 'react-chartjs-2';

// --- 1. Register ChartJS Components ---
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

// --- 2. Styles (Injecting EXACT CSS from HTML & Custom Colors) ---
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

    body {
        font-family: 'Inter', sans-serif;
        background-color: #f9fafb;
    }

    /* --- Custom Color Utility Classes to match Tailwind Config --- */
    .bg-tdh-primary { background-color: #6d28d9; }
    .text-tdh-primary { color: #6d28d9; }
    .border-tdh-primary { border-color: #6d28d9; }
    
    .bg-tdh-secondary { background-color: #a78bfa; }
    .text-tdh-secondary { color: #a78bfa; }
    .border-tdh-secondary { border-color: #a78bfa; }
    .hover-text-tdh-secondary:hover { color: #a78bfa; }
    .hover-border-tdh-secondary:hover { border-color: #a78bfa; }
    
    .bg-tdh-light { background-color: #f3e8ff; }
    .text-tdh-light { color: #f3e8ff; }
    
    .text-tdh-accent { color: #f97316; }
    .border-tdh-accent { border-color: #f97316; }

    /* --- Custom Scrollbar --- */
    ::-webkit-scrollbar { width: 8px; }
    ::-webkit-scrollbar-thumb { background-color: #a78bfa; border-radius: 4px; }
    ::-webkit-scrollbar-track { background-color: #f3f4f6; }

    /* --- Chart Container --- */
    .chart-container {
        height: 300px;
        margin: 1rem 0;
        position: relative;
        width: 100%;
    }

    /* --- Mobile Overrides (Preserved from original CSS) --- */
    @media (max-width: 480px) {
        .bg-tdh-light { margin-top: 70px !important; }
        .bg-yellow-50 { margin-top: 70px !important; }
        .chart-container { margin-top: 50px !important; }
        .bg-red-50 { margin-top: 70px !important; }
        .tdh-sku-opportunity-section .bg-green-50 {
           padding: 50px !important;
           min-width: 100px !important;
        }
    }
  `}</style>
);

export default function TdhProtienDashboard() {
  // --- State Management ---
  const [activeTab, setActiveTab] = useState('overview');
  const [showSweetTable, setShowSweetTable] = useState(false);
  const [showSavouryTable, setShowSavouryTable] = useState(false);
  const [showLadduTable, setShowLadduTable] = useState(false);

  // --- Data Structures (Preserved) ---
  const sweetData = [
    { brand: 'RiteBite Max', priceMin: 45, type: 'Bars' },
    { brand: 'Yogabar', priceMin: 40, type: 'Bars' },
    { brand: 'Whole Truth', priceMin: 60, type: 'Bars' },
    { brand: 'MyFitness', priceMin: 300, type: 'Protein PB' },
    { brand: 'MuscleBlaze', priceMin: 60, type: 'Powders' },
    { brand: 'AndMe', priceMin: 100, type: 'Shakes' },
    { brand: 'Hershey’s', priceMin: 70, type: 'Shakes' },
  ];

  const savouryData = [
    { brand: 'RiteBite Max', priceMin: 35, type: 'Chips/Namkeen' },
    { brand: 'Green Snack Co.', priceMin: 40, type: 'Chips/Makhana' },
    { brand: 'YogaBar', priceMin: 300, type: 'Muesli/Breakfast' },
    { brand: 'Habbit Health', priceMin: 50, type: 'Savoury Snacks' },
    { brand: 'MuscleBlaze', priceMin: 80, type: 'Pasta/Snacks' },
    { brand: 'Wellversed', priceMin: 50, type: 'Low-Carb Snacks' },
  ];

  const ladduData = [
    { brand: 'Artinci', protein: 5.5, price: 150 },
    { brand: 'EAT Anytime', protein: 9.3, price: 441 },
    { brand: 'Healthy Belly', protein: 4, price: 329 },
    { brand: 'TDH (New SKU)', protein: 15, price: 500 }, // TDH Target
    { brand: 'Meethi Kahani', protein: 4.5, price: 749 },
  ];

  // --- Chart Configurations ---
  const commonOptions: ChartOptions<any> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { position: 'bottom' } }
  };

  // 1. Sweet Segment Charts
  const sweetPriceConfig: ChartData<'bar'> = {
    labels: sweetData.map(d => d.brand),
    datasets: [{
      label: 'Min Price (INR)',
      data: sweetData.map(d => d.priceMin),
      backgroundColor: '#a78bfa',
      borderRadius: 6,
    }]
  };

  const sweetTypeCounts = sweetData.reduce((acc: any, curr) => {
    acc[curr.type] = (acc[curr.type] || 0) + 1;
    return acc;
  }, {});

  const sweetProductConfig: ChartData<'pie'> = {
    labels: Object.keys(sweetTypeCounts),
    datasets: [{
      data: Object.values(sweetTypeCounts),
      backgroundColor: ['#6d28d9', '#a78bfa', '#c4b5fd', '#e9d5ff', '#a5f3fc', '#818cf8', '#38bdf8'],
    }]
  };

  // 2. Savoury Segment Charts
  const savouryPriceConfig: ChartData<'bar'> = {
    labels: savouryData.map(d => d.brand),
    datasets: [{
      label: 'Min Price (INR)',
      data: savouryData.map(d => d.priceMin),
      backgroundColor: '#34d399',
      borderRadius: 6,
    }]
  };

  const savouryTypeCounts = savouryData.reduce((acc: any, curr) => {
    acc[curr.type] = (acc[curr.type] || 0) + 1;
    return acc;
  }, {});

  const savouryProductConfig: ChartData<'doughnut'> = {
    labels: Object.keys(savouryTypeCounts),
    datasets: [{
      data: Object.values(savouryTypeCounts),
      backgroundColor: ['#10b981', '#34d399', '#6ee7b7', '#a7f3d0', '#ecfdf5', '#065f46'],
    }]
  };

  // 3. Laddu Segment Charts
  const ladduProteinConfig: ChartData<'bar'> = {
    labels: ladduData.map(d => d.brand),
    datasets: [{
      label: 'Protein (grams per serving)',
      data: ladduData.map(d => d.protein),
      backgroundColor: ladduData.map(d => d.brand === 'TDH (New SKU)' ? '#ef4444' : '#f87171'),
      borderRadius: 6,
    }]
  };

  const ladduPriceConfig: ChartData<'bar'> = {
    labels: ladduData.map(d => d.brand),
    datasets: [{
      label: 'Price (INR)',
      data: ladduData.map(d => d.price),
      backgroundColor: '#fb923c',
      borderRadius: 6,
    }]
  };

  // 4. TDH Opportunity Chart
  const positioningConfig: ChartData<'line'> = {
    labels: ['Sunnundalu (Current)', 'Protein Laddu (New)'],
    datasets: [{
      label: 'Protein Content (g)',
      data: [3.9, 15],
      borderColor: '#6d28d9',
      backgroundColor: 'rgba(109, 40, 217, 0.1)',
      fill: true,
      tension: 0.4,
      pointRadius: 5,
      pointBackgroundColor: ['#a78bfa', '#6d28d9']
    }]
  };

  return (
    <>
      <GlobalStyles />
      <div className="bg-gray-50 font-sans p-4 md:p-8 min-h-screen">
        <div className="max-w-7xl mx-auto bg-white shadow-xl overflow-hidden rounded-lg">
          
          {/* Header */}
          <header className="p-6 bg-tdh-primary text-white">
            <h1 className="text-3xl font-extrabold tracking-tight">TDH Protein Market Opportunity Dashboard</h1>
            <p className="mt-1 text-tdh-light">Analysis of the Indian Protein Market & Strategy for New Protein Laddu SKU</p>
          </header>

          {/* Sticky Tab Navigation */}
          <nav className="border-b border-gray-200 sticky top-0 bg-white z-10 overflow-x-auto">
            <div className="flex flex-wrap -mb-px text-sm font-medium text-center min-w-max">
              {[
                { id: 'overview', label: '1. Market Overview' },
                { id: 'behavior', label: '2. Consumer Behavior' },
                { id: 'segment_sweet', label: '3. Sweet Segment' },
                { id: 'segment_savoury', label: '4. Savoury Segment' },
                { id: 'segment_laddu', label: '5. Laddu Segment' },
                { id: 'tdh_opportunity', label: '6. TDH SKU Opportunity' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg transition duration-150 ease-in-out
                    ${activeTab === tab.id 
                      ? 'border-tdh-primary text-tdh-primary font-semibold' 
                      : 'border-transparent text-gray-500 hover:text-tdh-secondary hover:border-tdh-secondary'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </nav>

          {/* Tab Content Area */}
          <div className="p-6 md:p-8 space-y-8">

            {/* TAB 1: Market Overview */}
            {activeTab === 'overview' && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold text-tdh-primary mb-4 border-b pb-2">1. India's Evolving Protein Market Landscape</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2 bg-tdh-light p-5 rounded-xl shadow-inner">
                    <h3 className="text-xl font-semibold mb-2">Market Overview & Shift</h3>
                    <p className="text-gray-700 leading-relaxed">
                      India’s protein market is rapidly shifting from traditional sources (pulses, dairy) to new, convenient forms (bars, chips, ready-to-eat). People demand protein that is great-tasting, easy to consume daily, and functional. This presents a key opportunity for TDH to modernize traditional foods and appeal to the fitness-aware demographic.
                    </p>
                  </div>
                  <div className="bg-white p-5 rounded-xl shadow border border-gray-100">
                    <h3 className="text-xl font-semibold text-tdh-primary mb-3">Key Market Drivers</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start"><span className="text-tdh-secondary mr-2 font-bold">»</span>Increasing gym culture & fitness awareness.</li>
                      <li className="flex items-start"><span className="text-tdh-secondary mr-2 font-bold">»</span>Vegetarian population seeking non-meat options.</li>
                      <li className="flex items-start"><span className="text-tdh-secondary mr-2 font-bold">»</span>Influence of social media and influencers.</li>
                      <li className="flex items-start"><span className="text-tdh-secondary mr-2 font-bold">»</span>Shift to convenient, fortified foods.</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: Consumer Behavior */}
            {activeTab === 'behavior' && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold text-tdh-primary mb-4 border-b pb-2">2. Consumer Behavior and Purchase Patterns</h2>
                
                <div className="bg-tdh-light p-6 rounded-xl shadow-lg mb-8">
                  <h3 className="text-xl font-bold text-tdh-primary mb-3">Awareness & Inspiration (The Rapid Trial Cycle)</h3>
                  <p className="text-gray-700 mb-4">
                    A huge driver of awareness is social media and influencer culture. When famous individuals endorse a protein snack for muscle recovery or weight control, it builds trust and motivates fans to try it.
                  </p>
                  <div className="p-4 bg-white rounded-lg border-l-4 border-tdh-accent">
                    <p className="text-tdh-accent font-semibold">
                      Insight: The "average time for an Indian consumer to try a new protein product has dropped from ~6 months to just 2-3 months." This means marketing campaigns and influencer tie-ups can yield quick spikes in sales.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-6 border border-gray-200 rounded-xl shadow-md space-y-4">
                    <h3 className="text-xl font-bold text-tdh-primary">Channels of Discovery</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-lg mr-3 text-tdh-secondary">🛒</span>
                        <div><strong className="text-gray-900">E-commerce & Quick Commerce:</strong> Dedicated health snack sections are key. Reviews and ratings on these platforms significantly influence purchase decisions.</div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-lg mr-3 text-tdh-secondary">🏪</span>
                        <div><strong className="text-gray-900">Modern Trade Supermarkets:</strong> Attractive packaging in the health food aisle can catch the eyes of passive shoppers.</div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-lg mr-3 text-tdh-secondary">🏋️</span>
                        <div><strong className="text-gray-900">Gyms & Sports Stores:</strong> Direct counter display targets the core fitness demographic.</div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-lg mr-3 text-tdh-secondary">⚕️</span>
                        <div><strong className="text-gray-900">Pharmacies (Underrated):</strong> Can be an effective channel if the product is positioned as a health supplement (e.g., for older or diabetic customers).</div>
                      </li>
                    </ul>
                  </div>

                  <div className="p-6 bg-green-50 rounded-xl shadow-md border border-green-200 space-y-4">
                    <h3 className="text-xl font-bold text-green-700">Core Decision Factors</h3>
                    <p className="text-gray-700">When choosing a product, consumers prioritize:</p>
                    <ul className="space-y-3">
                      <li><strong className="text-green-700">1. Familiar Taste:</strong> Snacks must taste good, especially a traditional treat like a laddu. TDH must maintain a delicious traditional flavor.</li>
                      <li><strong className="text-green-700">2. Nutrition (Scrutiny):</strong> Savvy buyers check protein content (e.g., 15g per laddu), added sugar, and calorie count.</li>
                      <li><strong className="text-green-700">3. Trust & Transparency:</strong> <span className="font-semibold text-tdh-primary">64% of Indian consumers prioritize transparency.</span> TDH must clearly list its protein per piece and use of natural ingredients.</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 p-6 border-t-2 border-tdh-secondary">
                  <h3 className="text-xl font-bold text-tdh-primary mb-3">Purchase Habits & Occasions</h3>
                  <p className="text-gray-700 mb-4">
                    For the average consumer, protein snacks are occasional or supplemental. However, laddus have an advantage as Indian consumers are accustomed to buying them in boxes for home consumption or gifting.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 bg-gray-100 rounded-lg">
                      <strong className="text-tdh-primary">Gifting & Family Consumption:</strong> Reordering larger packs or gifting to relatives as a “healthy sweet.”
                    </div>
                    <div className="p-4 bg-gray-100 rounded-lg">
                      <strong className="text-tdh-primary">Seasonality:</strong> Demand for sweets spikes during festivals. A “protein-rich laddu” could be marketed as a modern festive twist.
                    </div>
                    <div className="p-4 bg-gray-100 rounded-lg">
                      <strong className="text-tdh-primary">Workplace Tie-ups:</strong> Explore corporate programs (cafeteria, snack boxes, gift hampers) as office consumption of healthy snacks is rising.
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: Sweet Segment */}
            {activeTab === 'segment_sweet' && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold text-tdh-primary mb-4 border-b pb-2">3. Sweet Protein Segment Analysis (Bars, Shakes, Desserts)</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="chart-container">
                    <h3 className="text-xl font-semibold mb-3 text-gray-700">Segment Product Categories (Mix)</h3>
                    <Pie data={sweetProductConfig} options={commonOptions} />
                  </div>
                  <div className="chart-container">
                    <h3 className="text-xl font-semibold mb-3 text-gray-700">Competitive Landscape (Min Price INR)</h3>
                    <Bar data={sweetPriceConfig} options={{ ...commonOptions, scales: { y: { beginAtZero: true, title: { display: true, text: 'Price (INR)' } } } }} />
                  </div>
                </div>

                <div className="p-4 bg-yellow-50 rounded-lg shadow-inner mt-10">
                  <p className="font-medium text-yellow-700">
                    <span className="font-bold">Finding:</span> Bars and Powders/Shakes dominate, targeting both 'on-the-go' and dedicated 'fitness' consumption. TDH's Laddu can offer a unique "Traditional Indulgence" angle.
                  </p>
                </div>

                <div className="mt-6">
                  <button 
                    onClick={() => setShowSweetTable(!showSweetTable)}
                    className="flex items-center justify-between w-full p-3 bg-tdh-secondary text-white font-bold rounded-lg hover:bg-tdh-primary transition duration-150 text-sm"
                  >
                    <span>Toggle Full Sweet Segment Data Table</span>
                    <svg className={`w-4 h-4 transform transition-transform ${showSweetTable ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </button>
                  {showSweetTable && (
                    <div className="mt-3 overflow-x-auto shadow-lg rounded-xl border border-gray-200">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-tdh-light">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Brand</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Type</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Popular SKUs</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price Range (INR)</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 text-sm">
                          {sweetData.map((row, idx) => (
                            <tr key={idx}>
                              <td className="px-6 py-4 whitespace-nowrap">{row.brand}</td>
                              <td className="px-6 py-4 whitespace-nowrap">{row.type}</td>
                              <td className="px-6 py-4 whitespace-nowrap">Various SKUs</td>
                              <td className="px-6 py-4 whitespace-nowrap">{row.priceMin} - ...</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* TAB 4: Savoury Segment */}
            {activeTab === 'segment_savoury' && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold text-tdh-primary mb-4 border-b pb-2">4. Savoury Protein Segment Analysis (Chips, Meals, Pasta)</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="chart-container">
                    <h3 className="text-xl font-semibold mb-3 text-gray-700">Segment Product Categories (Mix)</h3>
                    <Doughnut data={savouryProductConfig} options={commonOptions} />
                  </div>
                  <div className="chart-container mt-10 md:mt-0">
                    <h3 className="text-xl font-semibold mb-3 text-gray-700">Competitive Landscape (Min Price INR)</h3>
                    <Bar data={savouryPriceConfig} options={{ ...commonOptions, scales: { y: { beginAtZero: true, title: { display: true, text: 'Price (INR)' } } } }} />
                  </div>
                </div>

                <div className="p-4 bg-tdh-light rounded-lg shadow-inner mt-10">
                  <p className="font-medium text-tdh-primary">
                    <span className="font-bold">Finding:</span> This segment focuses on replacing high-carb staples and snacks (e.g., Chips, Pasta) with protein-fortified, convenient alternatives.
                  </p>
                </div>

                <div className="mt-6">
                  <button 
                    onClick={() => setShowSavouryTable(!showSavouryTable)}
                    className="flex items-center justify-between w-full p-3 bg-tdh-secondary text-white font-semibold rounded-lg hover:bg-tdh-primary transition duration-150 text-sm"
                  >
                    <span>Toggle Full Savoury Segment Data Table</span>
                    <svg className={`w-4 h-4 transform transition-transform ${showSavouryTable ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </button>
                  {showSavouryTable && (
                    <div className="mt-3 overflow-x-auto shadow-lg rounded-xl border border-gray-200">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-tdh-light">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Brand</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Type</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Popular SKUs</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price Range (INR)</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 text-sm">
                          {savouryData.map((row, idx) => (
                            <tr key={idx}>
                              <td className="px-6 py-4 whitespace-nowrap">{row.brand}</td>
                              <td className="px-6 py-4 whitespace-nowrap">{row.type}</td>
                              <td className="px-6 py-4 whitespace-nowrap">Various SKUs</td>
                              <td className="px-6 py-4 whitespace-nowrap">{row.priceMin} - ...</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* TAB 5: Laddu Segment */}
            {activeTab === 'segment_laddu' && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold text-tdh-primary mb-4 border-b pb-2">5. Existing Protein Laddu Segment Analysis</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="chart-container">
                    <h3 className="text-xl font-semibold mb-3 text-gray-700">Protein Content Comparison (grams)</h3>
                    <Bar data={ladduProteinConfig} options={{ ...commonOptions, scales: { y: { beginAtZero: true, max: 18, title: { display: true, text: 'Protein (g)' } } } }} />
                  </div>
                  <div className="chart-container">
                    <h3 className="text-xl font-semibold mb-3 text-gray-700">Price Comparison (Smallest Listed SKU in INR)</h3>
                    <Bar data={ladduPriceConfig} options={{ ...commonOptions, scales: { y: { beginAtZero: true, title: { display: true, text: 'Price (INR)' } } } }} />
                  </div>
                </div>

                <div className="mt-10 p-4 bg-red-50 rounded-lg shadow-inner">
                  <p className="font-medium text-red-700">
                    <span className="font-bold">CRITICAL GAP:</span> Most listed laddus have unspecified or lower protein content (4-8g). TDH's 15g target is a clear market differentiator and positions it as the high-protein category leader.
                  </p>
                </div>

                <div className="mt-6">
                  <button 
                    onClick={() => setShowLadduTable(!showLadduTable)}
                    className="flex items-center justify-between w-full p-3 bg-tdh-secondary text-white font-semibold rounded-lg hover:bg-tdh-primary transition duration-150"
                  >
                    <span>Toggle Full Laddu Segment Data Table</span>
                    <svg className={`w-4 h-4 transform transition-transform ${showLadduTable ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </button>
                  {showLadduTable && (
                    <div className="mt-3 overflow-x-auto shadow-lg rounded-xl border border-gray-200">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-tdh-light">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Brand</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Key Ingredients</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price (INR)</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Protein (g)</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 text-sm">
                          {ladduData.map((row, idx) => (
                            <tr key={idx}>
                              <td className="px-6 py-4 whitespace-nowrap">{row.brand}</td>
                              <td className="px-6 py-4 whitespace-nowrap">{row.brand === 'TDH (New SKU)' ? 'Protein Laddu' : 'Laddu Variant'}</td>
                              <td className="px-6 py-4 whitespace-nowrap">Various</td>
                              <td className="px-6 py-4 whitespace-nowrap">₹{row.price}</td>
                              <td className="px-6 py-4 whitespace-nowrap">{row.protein}g</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* TAB 6: TDH Opportunity */}
            {activeTab === 'tdh_opportunity' && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold text-tdh-primary mb-4 border-b pb-2">6. New SKU Opportunity: TDH Protein Laddu (15g)</h2>
                
                <div className="grid md:grid-cols-3 gap-6 tdh-sku-opportunity-section items-center">
                  <div className="md:col-span-2 bg-green-50 p-6 rounded-xl shadow-lg border border-green-200">
                    <h3 className="text-xl font-bold text-green-700 mb-3">Product Proposition & Competitive Edge</h3>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                      <div className="col-span-2 p-3 bg-white rounded-lg border-2 border-green-500 text-center">
                        <p className="text-4xl font-extrabold text-tdh-primary">15g</p>
                        <p className="text-sm text-gray-600">Protein per Laddu (Target)</p>
                      </div>
                      <div className="col-span-2 p-3 bg-white rounded-lg border-2 border-green-500 text-center">
                        <p className="text-4xl font-extrabold text-tdh-primary">₹400–₹600</p>
                        <p className="text-sm text-gray-600">Target Price Range (200g)</p>
                      </div>
                    </div>

                    <ul className="text-gray-700 space-y-2 list-disc list-inside">
                      <li>Base Ingredients: Urad dal (trusted traditional base), Whey/Pea Protein Isolate (functional addition), jaggery, ghee.</li>
                      <li>Positioning: Functional Indulgence (The high-protein sweet that blends authenticity with modern nutritional demands).</li>
                      <li>Competitive Advantage: The highest protein offering in the traditional sweets category.</li>
                    </ul>
                  </div>

                  <div className="bg-tdh-light p-6 rounded-xl shadow-lg chart-container">
                    <h3 className="text-xl font-bold text-tdh-primary mb-3">Protein Upgrade</h3>
                    <Line data={positioningConfig} options={{ ...commonOptions, scales: { y: { beginAtZero: true, max: 18, title: { display: true, text: 'Protein (g)' } } } }} />
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-gray-700 mb-3">Customer Impact & New Audience Reach</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-5 border-l-4 border-tdh-primary bg-white shadow-md rounded-lg">
                      <h4 className="text-lg font-semibold text-tdh-primary mb-2">Impact on Existing Customers</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>Families/Health-Conscious: Get a healthier, protein-fortified version of a sweet they already love and trust.</li>
                        <li>Parents: Easy, worry-free, and nutritious snack for children.</li>
                      </ul>
                    </div>
                    <div className="p-5 border-l-4 border-green-500 bg-white shadow-md rounded-lg">
                      <h4 className="text-lg font-semibold text-green-700 mb-2">Attracting New Customers</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>Fitness Lovers/Gym-Goers: High-protein sweet that fits macro goals but still feels Indian.</li>
                        <li>Millennials/Gen Z: Appeals to the demand for snacks that are both healthy and genuinely tasty.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </>
  );
}