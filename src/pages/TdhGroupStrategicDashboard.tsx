import React, { useState } from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ChartOptions,
  ChartData
} from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';

// --- 1. Register ChartJS Components ---
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

// --- 2. Styles (Injecting EXACT CSS from HTML) ---
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
    body {
        font-family: 'Inter', sans-serif;
        background-color: #f4f7f9;
    }
    /* Custom scrollbar for better look */
    ::-webkit-scrollbar {
        width: 8px;
    }
    ::-webkit-scrollbar-thumb {
        background: #9ca3af;
        border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #6b7280;
    }
    .tab-button.active {
        color: #ffffff;
        background-color: #d97706; /* Amber-700 */
    }
    .accordion-header {
        cursor: pointer;
        transition: background-color 0.2s;
    }
    .accordion-header:hover {
        background-color: #f3f4f6;
    }
    .chart-container {
        position: relative;
        height: 300px;
        width: 100%;
        margin-bottom: 2rem;
    }
    .chart-container-lg {
        height: 400px;
    }
  `}</style>
);

// --- 3. Sub-Components (Accordion) ---
const AccordionItem = ({ 
  title, 
  children, 
  headerClass = "bg-gray-50 text-gray-800" 
}: { 
  title: string, 
  children: React.ReactNode, 
  headerClass?: string 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-lg mb-4">
      <div 
        className={`accordion-header p-4 font-semibold ${headerClass}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span className={`float-right transform transition-transform duration-200 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>+</span>
      </div>
      {isOpen && (
        <div className="accordion-content p-4 text-gray-600 border-t">
          {children}
        </div>
      )}
    </div>
  );
};

export default function TdhGroupStrategicDashboard() {
  const [activeTab, setActiveTab] = useState('brand-overview');

  // --- DATA OBJECTS ---
  const CHART_DATA = {
    proteinDrivers: {
      labels: ['Gym/Fitness Awareness', 'Vegetarian Protein Seekers', 'Fortified/Convenient Foods', 'Social Media Influence'],
      datasets: [{
        label: 'Market Share (%)',
        data: [35, 30, 20, 15],
        backgroundColor: ['#f59e0b', '#10b981', '#3b82f6', '#ef4444'],
        hoverOffset: 4
      }]
    },
    sweetProteinPrice: {
      labels: ['RiteBite Max Protein', 'Yogabar', 'The Whole Truth', 'AndMe Shake', 'Hershey\'s Shake'],
      datasets: [{
        label: 'Avg Price (INR/100g)',
        data: [80, 75, 90, 70, 60],
        backgroundColor: '#6366f1',
      }]
    },
    savouryProteinPrice: {
      labels: ['Max Protein Chips', 'Green Snack Co. Chips', 'YogaBar Muesli', 'MuscleBlaze Pasta'],
      datasets: [{
        label: 'Avg Price (INR/Unit)',
        data: [45, 60, 350, 150],
        backgroundColor: '#14b8a6',
      }]
    },
    ladduProtein: {
      labels: ['TDH Sunnundalu (Current)', 'Artinci Ladoo', 'Nuskha Kitchen (Est.)', 'EAT Anytime Balls (Est.)', 'TDH Protein Laddu (Proposed)'],
      datasets: [{
        label: 'Protein Content (g)',
        data: [3.9, 5.5, 4.0, 5.0, 15.0],
        backgroundColor: ['#4ade80', '#fbbf24', '#f87171', '#f87171', '#3b82f6'],
      }]
    }
  };

  const commonChartOptions: ChartOptions<any> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'bottom' },
    }
  };

  const horizontalChartOptions: ChartOptions<any> = {
    ...commonChartOptions,
    indexAxis: 'y',
    scales: {
      x: { beginAtZero: true, title: { display: true, text: 'Protein (grams per unit)' } },
      y: { grid: { display: false } }
    }
  };

  return (
    <>
      <GlobalStyles />
      <div className="min-h-screen max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        
        {/* Header */}
        <header className="mb-8 p-4 bg-white shadow-lg rounded-xl">
          <h1 className="text-3xl font-extrabold text-gray-800">TDH Group Strategic Analysis Dashboard</h1>
          <p className="text-gray-500 mt-1">Detailed overview of brand architecture, market opportunities, and channel execution.</p>
        </header>

        {/* Navigation Tabs */}
        <nav className="flex space-x-1 p-1 bg-white rounded-xl shadow-md mb-8 overflow-x-auto">
          {[
            { id: 'brand-overview', label: 'Brand Overview & Perception' },
            { id: 'market-protein', label: 'Market Analysis: Protein & New SKU' },
            { id: 'kiosk-strategy', label: 'Kiosk Channel Strategy' },
            { id: 'product-communication', label: 'Product Communication Analysis' },
            { id: 'celebrity-usage', label: 'Celebrity Usage Guidelines' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`tab-button flex-shrink-0 px-4 py-2 text-sm font-medium rounded-lg transition duration-200 
                ${activeTab === tab.id ? 'active' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Content Area */}
        <div id="dashboard-content">

          {/* 1. Brand Overview & Perception Tab */}
          {activeTab === 'brand-overview' && (
            <div className="grid md:grid-cols-3 gap-6 animate-fade-in">
              
              {/* Brand Overview & Limitations Card */}
              <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">TDH Group Core Analysis</h2>

                <AccordionItem title="Overview & Core Challenges">
                  <p className="mb-2">Tenali Double Horse (TDH) is strongly associated with <strong>Urad Dal</strong> due to focused, long-term promotion, granting high trust but limiting broader multi-category perception.</p>
                  <ul className="list-disc ml-5 space-y-1">
                    <li><strong>Brand Ambiguity:</strong> Inconsistency in naming (TDH Foods Rishika / TDH Rishika) fragments consumer understanding.</li>
                    <li><strong>Millets Vertical:</strong> TDH Millets (post-Millet Marvels acquisition) requires a clear strategy: standalone identity vs. consolidation under the master brand.</li>
                    <li><strong>Digital Dilution:</strong> Overlap and repetition of content across separate brand accounts leads to brand dilution.</li>
                  </ul>
                </AccordionItem>

                <AccordionItem title="Strengthening Perception: Key Aspects & Limitations">
                  <h4 className="font-bold text-md text-orange-600 mb-2">Aspects to Consider</h4>
                  <ul className="list-disc ml-5 mb-4 space-y-1">
                    <li><strong>Advertising Metrics:</strong> Evaluate channel performance and message connectivity; need a dedicated campaign differentiating TDH Foods and TDH Rishika.</li>
                    <li><strong>Consumer Access:</strong> Assess availability across General Trade, E-commerce, and Quick-commerce for key SKU distribution.</li>
                    <li><strong>Brand Consistency:</strong> Must resolve the naming overlap (TDH Foods vs. TDH Rishika) and define the position of TDH Millets.</li>
                  </ul>
                  <h4 className="font-bold text-md text-red-600 mb-2">Limitations to Address</h4>
                  <ul className="list-disc ml-5 space-y-1">
                    <li><strong>Limited Availability:</strong> Key SKUs are not widely available across general trade and quick commerce.</li>
                    <li><strong>Over-Association:</strong> Strong Urad Dal recall restricts growth towards a multi-category brand identity.</li>
                    <li><strong>Inconsistent Representation:</strong> Naming overlaps and repetitive digital communication dilute impact.</li>
                  </ul>
                </AccordionItem>
              </div>

              {/* Vertical Perception Table */}
              <div className="md:col-span-1 bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Vertical Perception & Opportunities</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vertical</th>
                        <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Insight</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 text-sm">
                      <tr className="hover:bg-yellow-50/50">
                        <td className="px-3 py-2 font-semibold">TDH Group (Corporate)</td>
                        <td className="px-3 py-2">Trusted Telugu-rooted brand. Opportunity to connect with younger, aspirational families.</td>
                      </tr>
                      <tr className="hover:bg-yellow-50/50">
                        <td className="px-3 py-2 font-semibold">TDH Pulses</td>
                        <td className="px-3 py-2">Strongly linked with Urad Dal. Refresh communication beyond Urad Dal for modern audiences.</td>
                      </tr>
                      <tr className="hover:bg-yellow-50/50">
                        <td className="px-3 py-2 font-semibold">TDH Foods (Rishika)</td>
                        <td className="px-3 py-2">Confusion in naming. Fix name, position as innovative/modern side of TDH, focusing on convenience.</td>
                      </tr>
                      <tr className="hover:bg-yellow-50/50">
                        <td className="px-3 py-2 font-semibold">TDH Millets</td>
                        <td className="px-3 py-2">New category, low awareness. Use TDH trust to promote health benefits and decide on branding (standalone vs. co-branded).</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Consumer Profiles */}
              <div className="md:col-span-3 bg-white p-6 rounded-xl shadow-md mt-4">
                <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Consumer Profiles (By Brand)</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg bg-indigo-50/50">
                    <h3 className="font-bold text-lg text-indigo-700 mb-2">🏛️ TDH Group (Corporate)</h3>
                    <p className="text-sm"><strong>Persona:</strong> Socially conscious consumers who respect legacy, quality, and community-driven innovation.</p>
                    <ul className="text-xs mt-2 space-y-1">
                      <li><strong>Age:</strong> 25–65.</li>
                      <li><strong>Goals:</strong> Engage with reliable, heritage-rich brands.</li>
                      <li><strong>Pain Points:</strong> Skepticism toward companies lacking community focus.</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg bg-green-50/50">
                    <h3 className="font-bold text-lg text-green-700 mb-2">🍲 Tenali Double Horse (Pulses)</h3>
                    <p className="text-sm"><strong>Persona:</strong> Health-conscious homemakers prioritizing family well-being, nutrition, and tradition.</p>
                    <ul className="text-xs mt-2 space-y-1">
                      <li><strong>Age:</strong> 28–45 (Primary Female).</li>
                      <li><strong>Goals:</strong> Provide healthy, authentic meals.</li>
                      <li><strong>Pain Points:</strong> Uncertainty about quality and sourcing.</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg bg-orange-50/50">
                    <h3 className="font-bold text-lg text-orange-700 mb-2">🍛 TDH Rishika (Foods)</h3>
                    <p className="text-sm"><strong>Persona:</strong> Busy professionals and young adults seeking convenient, authentic, and time-saving meal solutions.</p>
                    <ul className="text-xs mt-2 space-y-1">
                      <li><strong>Age:</strong> 24–40.</li>
                      <li><strong>Goals:</strong> Cook delicious meals quickly with traditional flavor.</li>
                      <li><strong>Pain Points:</strong> Lack of time; difficulty finding authentic-tasting instant products.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 2. Market Analysis: Protein & New SKU Tab */}
          {activeTab === 'market-protein' && (
            <div className="animate-fade-in">
              <div className="bg-white p-6 rounded-xl shadow-md mb-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Protein Market Landscape in India: Opportunity & Competition</h2>

                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Drivers of Preference Chart */}
                  <div className="border rounded-lg p-4 shadow-sm chart-container-lg">
                    <h3 className="text-lg font-semibold mb-2 text-gray-700">Protein Preference Drivers & Segment Distribution</h3>
                    <div className="h-3/4 w-full">
                      <Doughnut data={CHART_DATA.proteinDrivers} options={commonChartOptions} />
                    </div>
                  </div>

                  {/* New SKU Proposition */}
                  <div className="border rounded-lg p-4 shadow-sm space-y-4 chart-container-lg overflow-y-auto">
                    <h3 className="text-lg font-semibold text-orange-700 mb-2">New SKU Proposition: TDH Protein Laddu (15g)</h3>
                    <p className="text-gray-600 text-sm">TDH currently offers <strong>Sunnundalu (3.9g protein)</strong>. The market has a clear gap for a high-protein traditional sweet. Most competitors offer 4-8g. The <strong>15g Protein Laddu</strong> allows TDH to blend authentic taste with functional nutrition.</p>

                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <strong className="text-lg text-yellow-800 block mb-1">Target Proposition:</strong>
                      <ul className="list-disc ml-5 text-sm">
                        <li><strong>Name:</strong> TDH Protein Laddu</li>
                        <li><strong>Protein Content:</strong> <strong>15g per laddu</strong> (clear market differentiator)</li>
                        <li><strong>Base Ingredients:</strong> Urad dal, Whey/Pea protein isolate, jaggery, ghee.</li>
                        <li><strong>Ideal Pricing:</strong> ₹400–₹600 per 200g pack.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4 border-b pb-2">Competitive Market Segmentation Visuals</h3>

                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Sweet Protein Segment */}
                  <div className="border rounded-lg p-4 shadow-sm chart-container">
                    <h4 className="font-semibold text-sm mb-2 text-gray-700">Sweet Protein: Avg. Price per 100g (INR)</h4>
                    <Bar data={CHART_DATA.sweetProteinPrice} options={commonChartOptions} />
                  </div>

                  {/* Savoury Protein Segment */}
                  <div className="border rounded-lg p-4 shadow-sm chart-container">
                    <h4 className="font-semibold text-sm mb-2 text-gray-700">Savoury Protein: Avg. Price per Unit (INR)</h4>
                    <Bar data={CHART_DATA.savouryProteinPrice} options={commonChartOptions} />
                  </div>

                  {/* Laddu Protein Segment */}
                  <div className="border rounded-lg p-4 shadow-sm chart-container">
                    <h4 className="font-semibold text-sm mb-2 text-gray-700">Protein Laddu: Protein per Unit (g)</h4>
                    <Bar data={CHART_DATA.ladduProtein} options={horizontalChartOptions} />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 3. Kiosk Channel Strategy Tab */}
          {activeTab === 'kiosk-strategy' && (
            <div className="animate-fade-in">
              <div className="bg-white p-6 rounded-xl shadow-md mb-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">TDH Smart Kiosk Channel Strategy (Gated Communities)</h2>
                

                <div className="grid lg:grid-cols-3 gap-6 mb-6">
                  <div className="lg:col-span-1">
                    <h3 className="text-lg font-semibold mb-4 text-gray-700">Channel Differentiation vs. Quick-commerce</h3>
                    <table className="w-full text-sm border border-gray-200 rounded-lg">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="p-2 text-left">Feature</th>
                          <th className="p-2 text-left">Kiosks</th>
                          <th className="p-2 text-left">Quick-commerce</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td className="p-2 font-medium">Experience</td><td className="p-2 text-green-600">Tactile Demo & AI Counsel</td><td className="p-2 text-red-600">Purely Transactional</td></tr>
                        <tr><td className="p-2 font-medium">Fulfillment</td><td className="p-2 text-green-600">Hyperlocal (Distributor)</td><td className="p-2 text-red-600">Centralized Warehouse</td></tr>
                        <tr><td className="p-2 font-medium">Purpose</td><td className="p-2 text-green-600">Loyalty, High-Touch Recruit</td><td className="p-2 text-red-600">Volume, Broad Reach</td></tr>
                      </tbody>
                    </table>
                    <div className="p-4 mt-4 border border-orange-200 rounded-lg bg-orange-50/50">
                      <strong className="text-sm block text-orange-700">Key Value Prop:</strong> Personalized AI guidance, instant local delivery, and permanent brand presence.
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <h3 className="text-lg font-semibold mb-4 text-gray-700">Phase-wise Execution Plan</h3>
                    <div className="space-y-3">
                      <AccordionItem title="Phase 1: Pilot & Proof of Concept (20 Kiosks)" headerClass="bg-blue-50 text-blue-800">
                        <div className="text-sm space-y-2">
                          <p><strong>Deployment:</strong> Launch 20 kiosks across 5-10 diverse communities (1-2 kiosks/site).</p>
                          <p><strong>Features:</strong> Multi-category display, touch-screen browsing, <strong>AI-based nutrition engine</strong>, simple QR/UPI payment.</p>
                          <p><strong>Fulfillment:</strong> Hyperlocal delivery via nearest TDH distributor (orders sent via SMS/app). Same-day delivery focus.</p>
                          <p><strong>Success Metrics:</strong> Track unique users, orders placed, conversion rate, <strong>repeat users</strong>, and fulfillment efficiency.</p>
                        </div>
                      </AccordionItem>

                      <AccordionItem title="Phase 2: Feature & Network Scale-Up" headerClass="bg-blue-50 text-blue-800">
                        <div className="text-sm space-y-2">
                          <p><strong>Functionality:</strong> Introduce <strong>loyalty features</strong> (QR-code login, points), recipe content, multi-language support. Integrate click-and-collect option.</p>
                          <p><strong>Network:</strong> Onboard and train more distributors. Optimize stock levels and delivery routes based on Phase 1 KPIs.</p>
                          <p><strong>Improvement:</strong> Refine model based on metrics (e.g., if AI advice is used but few orders, investigate UI/product issues).</p>
                        </div>
                      </AccordionItem>

                      <AccordionItem title="Phase 3: Brand Integration & Strategic Expansion" headerClass="bg-blue-50/70 text-blue-800">
                        <div className="text-sm space-y-2">
                          <p><strong>Rollout:</strong> Full-scale expansion to all targeted gated communities over 1-2 years.</p>
                          <p><strong>Integration:</strong> Develop a <strong>unified loyalty program</strong> spanning Kiosks, Quick Commerce, and distributor sales.</p>
                          <p><strong>Maturity:</strong> Build a data platform for consolidated interactions. Use analytics to personalize offers and optimize assortment per location.</p>
                          <p><strong>Benchmarks:</strong> Track LCV (Lifetime Customer Value) and target break-even within 12-18 months per kiosk.</p>
                        </div>
                      </AccordionItem>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 4. Product Communication Analysis Tab */}
          {activeTab === 'product-communication' && (
            <div className="animate-fade-in">
              <div className="bg-white p-6 rounded-xl shadow-md mb-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Product Communication & Packaging Insights</h2>

                <div className="grid lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-1">
                    <h3 className="font-semibold text-lg text-gray-700 mb-2">Pulses & Dals</h3>
                    <div className="p-3 border rounded-lg bg-green-50/50 text-sm">
                      <p><strong>Current:</strong> Simple, generic packs with "premium" word.</p>
                      <p><strong>Insight:</strong> Communicates trust/quality, but <strong>premium aesthetics are not visible</strong>. Logo inconsistency needs to be fixed.</p>
                      
                    </div>
                  </div>
                  <div className="lg:col-span-1">
                    <h3 className="font-semibold text-lg text-gray-700 mb-2">TDH Foods/Rishika (Ladoos, Mixes, Pickles)</h3>
                    <div className="p-3 border rounded-lg bg-orange-50/50 text-sm">
                      <p><strong>Current:</strong> Homemade, emotional connection (Amma outline). "RISHIKA" font differs across SKUs.</p>
                      <p><strong>Insight:</strong> Strong nostalgia and authenticity. <strong>RISHIKA font consistency is crucial</strong>. Pickles could emphasize preservative/artificial-free claims.</p>
                    </div>
                  </div>
                  <div className="lg:col-span-1">
                    <h3 className="font-semibold text-lg text-gray-700 mb-2">TDH Millets (Grains, Noodles, Pasta)</h3>
                    <div className="p-3 border rounded-lg bg-blue-50/50 text-sm">
                      <p><strong>Current:</strong> Focus on health, "superfood" tag, unpolished nature.</p>
                      <p><strong>Insight:</strong> Appeals to health-conscious. <strong>Redirection to milletmarvels socials causes confusion</strong>. Logo placement is inconsistent across SKUs.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 5. Celebrity Usage Guidelines Tab */}
          {activeTab === 'celebrity-usage' && (
            <div className="animate-fade-in">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">TDH | Usage of Celebrity Guidelines</h2>
                <div className="space-y-6">

                  <div className="p-4 bg-yellow-100 border border-yellow-300 rounded-lg">
                    <h3 className="text-lg font-semibold text-yellow-800 mb-2">1. Brand-Level Association: Suma Kanakala</h3>
                    <p className="text-sm">Suma Kanakala is the official Brand Ambassador for <strong>Tenali Double Horse (TDH) master brand</strong>. She showcases trust, appeals to Telugu households, and ensures quality assurance. Her endorsement extends to all product lines under TDH unless a specific sub-brand introduces a separate, focused celebrity association.</p>
                  </div>

                  <div className="border rounded-lg p-4 bg-gray-50">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">2. Sub-Brand & Category-Level Celebrity Usage</h3>
                    <p className="text-sm text-gray-600 mb-3">While TDH stands for trust and heritage, each sub-brand carries its own personality and audience segment. Celebrity usage at this level must be highly targeted:</p>
                    <ul className="list-disc ml-5 text-sm space-y-1">
                      <li><strong>Persona Alignment:</strong> The celebrity must align naturally with the sub-brand’s persona (e.g., cultural appeal, health consciousness, or aspirational lifestyle).</li>
                      <li><strong>Impact:</strong> Partnership should strengthen the emotional and functional connection, not merely bring visibility.</li>
                      <li><strong>Example:</strong> TDH Millet Marvels should consider a celebrity known for <strong>health, wellness, and a modern lifestyle</strong>.</li>
                    </ul>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border rounded-lg p-4 shadow-sm">
                      <h4 className="font-semibold text-md text-gray-700 mb-2">3. Consideration of Celebrity</h4>
                      <ul className="list-disc ml-5 text-sm space-y-1 text-gray-600">
                        <li>Chosen celebrity must mirror TDH’s core brand traits and maintain credibility.</li>
                        <li><strong>Avoid Conflicting Opinions:</strong> Prevent regional/cultural mismatch (e.g., the Tamannaah Bhatia/Mysore Sandal Soap case).</li>
                      </ul>
                    </div>
                    <div className="border rounded-lg p-4 shadow-sm">
                      <h4 className="font-semibold text-md text-gray-700 mb-2">4. Frequency & Visibility</h4>
                      <ul className="list-disc ml-5 text-sm space-y-1 text-gray-600">
                        <li>Ambassadors should appear in <strong>planned cycles</strong> tied to key launches and promotions.</li>
                        <li>Goal is to ensure each ambassador remains fresh and relevant, lessening consumer fatigue.</li>
                      </ul>
                    </div>
                  </div>

                  <h4 className="font-semibold text-gray-700 mt-4">Successful Endorsement Benchmarks</h4>
                  <table className="w-full divide-y divide-gray-200 text-sm">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="p-2 text-left">Brand</th>
                        <th className="p-2 text-left">Ambassador</th>
                        <th className="p-2 text-left">Key Insight</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50"><td className="p-2">Aashirvaad Masalas</td><td className="p-2">Nani (Tollywood)</td><td className="p-2">Strong regional connect; category relevance (home-cooking).</td></tr>
                      <tr className="hover:bg-gray-50"><td className="p-2">Godrej Jersey Badam Milk</td><td className="p-2">Rana Daggubati</td><td className="p-2">Strong regional & lifestyle fit (taste, health, refreshment).</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
}