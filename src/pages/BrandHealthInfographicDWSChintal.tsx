import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions
} from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';

// --- 1. Register ChartJS Components ---
ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// --- 2. Constants (Colors & Data) ---
const COLORS = {
  brandDark: '#004AAD',
  brandMid: '#0077B6',
  brandLight: '#00B4D8',
  brandLighter: '#90E0EF',
  brandLightest: '#CAF0F8',
  success: '#16a34a',
  warning: '#f97316',
  danger: '#dc2626',
  gray: '#e5e7eb',
  slateText: '#475569'
};

const brandHealthData = {
  score: 5.8,
  subScores: {
    labels: ['Awareness', 'Perception', 'Consistency', 'Performance'],
    data: [8, 6, 4, 5]
  }
};

const vciData = {
  score: 55
};

// --- 3. Styles (Injecting Fonts & Custom CSS) ---
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');
    body { font-family: 'Inter', sans-serif; background-color: #f1f5f9; }
    
    .chart-container {
      position: relative;
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
      height: 250px;
      max-height: 350px;
    }
    @media (min-width: 768px) {
      .chart-container { height: 300px; }
    }
    
    .gauge-container {
      position: relative;
      width: 100%;
      max-width: 300px;
      height: 180px;
      margin: 0 auto;
    }
    
    .gauge-text {
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 3.5rem;
      font-weight: 800;
    }
  `}</style>
);

export default function BrandHealthInfographicDWSChintal() {
  
  // --- Chart Configurations ---

  // 1. BHI Gauge (Doughnut)
  const bhiScore = brandHealthData.score * 10;
  const bhiColor = bhiScore >= 80 ? COLORS.success : bhiScore >= 60 ? COLORS.warning : COLORS.danger;

  const bhiChartData = {
    labels: ['Score', 'Remaining'],
    datasets: [{
      data: [bhiScore, 100 - bhiScore],
      backgroundColor: [bhiColor, COLORS.gray],
      borderWidth: 0,
      circumference: 180,
      rotation: 270,
    }]
  };

  const bhiChartOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '75%',
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false }
    }
  };

  // 2. Sub-Scores (Bar)
  const subScoreChartData = {
    labels: brandHealthData.subScores.labels,
    datasets: [{
      label: 'Score (out of 10)',
      data: brandHealthData.subScores.data,
      backgroundColor: (context: any) => {
        const value = context.raw;
        return value >= 8 ? COLORS.brandMid : value >= 6 ? COLORS.brandLight : COLORS.danger;
      },
      borderRadius: 4,
      barPercentage: 0.6
    }]
  };

  const subScoreChartOptions: ChartOptions<'bar'> = {
    indexAxis: 'y' as const,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }
    },
    scales: {
      x: {
        beginAtZero: true,
        max: 10,
        grid: { display: false },
        ticks: { stepSize: 2 }
      },
      y: {
        grid: { display: false }
      }
    }
  };

  // 3. VCI Chart (Horizontal Stacked Bar)
  const vciScore = vciData.score;
  const vciColor = vciScore >= 80 ? COLORS.success : vciScore >= 60 ? COLORS.warning : COLORS.danger;

  const vciChartData = {
    labels: ['VCI Score'],
    datasets: [
      {
        label: 'Score',
        data: [vciScore],
        backgroundColor: vciColor,
        borderWidth: 0,
        borderRadius: 4,
        barPercentage: 0.4
      },
      {
        label: 'Gap',
        data: [100 - vciScore],
        backgroundColor: COLORS.gray,
        borderWidth: 0,
        borderRadius: 4,
        barPercentage: 0.4
      }
    ]
  };

  const vciChartOptions: ChartOptions<'bar'> = {
    indexAxis: 'y' as const,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false }
    },
    scales: {
      x: {
        beginAtZero: true,
        max: 100,
        stacked: true,
        display: false
      },
      y: {
        stacked: true,
        display: false
      }
    }
  };

  return (
    <>
      <GlobalStyles />
      <div className="font-sans text-gray-800 bg-slate-100 min-h-screen pb-12">
        
        {/* Header */}
        <header className="bg-[#004AAD] text-white p-8 text-center rounded-b-lg shadow-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold">Brand Health Infographic</h1>
          <p className="text-xl md:text-2xl font-light text-[#90E0EF]">Delhi World School, Chintal</p>
        </header>

        <main className="container mx-auto max-w-5xl p-4 md:p-8 space-y-12">

          {/* Section 1: Diagnosis */}
          <section className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <h2 className="text-3xl font-bold text-[#004AAD] mb-2 text-center">1. The Diagnosis: Brand Health Index</h2>
            <p className="text-center text-slate-600 mb-8 max-w-3xl mx-auto">
              This illustrative score synthesizes all audit phases. A score below 6.0 indicates significant strategic risks and a disconnect between the brand's price point and its perceived value.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="gauge-container">
                  <Doughnut data={bhiChartData} options={bhiChartOptions} />
                  <div className="gauge-text" style={{ color: bhiColor }}>{brandHealthData.score}</div>
                </div>
                <p className="text-center text-slate-800 font-semibold text-2xl -mt-4">Overall BHI (Illustrative)</p>
              </div>
              <div>
                <div className="chart-container" style={{ height: '250px' }}>
                  <Bar data={subScoreChartData} options={subScoreChartOptions} />
                </div>
                <p className="text-center text-slate-800 font-semibold text-lg mt-2">BHI Sub-Scores (out of 10)</p>
              </div>
            </div>
          </section>

          {/* Section 2: Core Gap */}
          <section className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <h2 className="text-3xl font-bold text-[#004AAD] mb-2 text-center">2. The Core Gap: Promise vs. Experience</h2>
            <p className="text-center text-slate-600 mb-8 max-w-3xl mx-auto">
              The low BHI score is driven by a central strategic disconnect. The brand leverages its strong national name but fails at the local level, creating a gap between its premium promise and the actual parent experience.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-around space-y-4 md:space-y-0">
              <div className="text-center p-6 bg-[#CAF0F8] border-l-8 border-[#0077B6] rounded-lg shadow-md w-full md:w-auto">
                <h3 className="text-2xl font-bold text-[#0077B6]">NATIONAL BRAND PROMISE</h3>
                <p className="text-slate-700 text-lg">Premium, Holistic, Nurturing</p>
              </div>
              <div className="text-6xl font-bold text-red-500 transform md:rotate-0 rotate-90 animate-pulse">➔</div>
              <div className="text-center p-6 bg-red-50 border-l-8 border-red-500 rounded-lg shadow-md w-full md:w-auto">
                <h3 className="text-2xl font-bold text-red-600">LOCAL BRAND EXPERIENCE</h3>
                <p className="text-slate-700 text-lg">Inconsistent, Poor Digital, Unclear Value</p>
              </div>
            </div>
          </section>

          {/* Section 3: Persona */}
          <section className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <h2 className="text-3xl font-bold text-[#004AAD] mb-2 text-center">3. The Persona: "The Aspirational & Anxious Parent"</h2>
            <p className="text-center text-slate-600 mb-8 max-w-3xl mx-auto">
              This gap directly impacts the target parent, who is caught between two conflicting emotions. They buy on aspiration but judge on their daily experience.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-8 border-green-500 bg-green-50 p-6 rounded-r-lg shadow">
                <h3 className="text-2xl font-bold text-green-700 mb-3">ASPIRATION (The Buy-In)</h3>
                <ul className="list-disc list-outside ml-5 text-slate-700 space-y-2 text-base">
                  <li>"I want my child to have the 'brand name' advantage."</li>
                  <li>"They must be confident and future-ready."</li>
                  <li>Driven by: CBSE affiliation, modern campus, safety.</li>
                </ul>
              </div>
              <div className="border-l-8 border-red-500 bg-red-50 p-6 rounded-r-lg shadow">
                <h3 className="text-2xl font-bold text-red-700 mb-3">FEAR (The Risk)</h3>
                <ul className="list-disc list-outside ml-5 text-slate-700 space-y-2 text-base">
                  <li>"My child must not fall behind."</li>
                  <li>"I fear making the wrong choice in a competitive area."</li>
                  <li>"I fear a lack of transparency from the school."</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4: Key Issues */}
          <section className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <h2 className="text-3xl font-bold text-[#004AAD] mb-2 text-center">4. Key Issues: The Evidence</h2>
            <p className="text-center text-slate-600 mb-8 max-w-3xl mx-auto">
              Two key failures in the "Local Experience" provide clear evidence of the gap. These issues erode trust and make the brand feel less professional than its price point suggests.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-2xl font-semibold text-[#004AAD] text-center mb-4">Visual Consistency Index (VCI)</h3>
                <div className="chart-container" style={{ height: '120px', maxWidth: '400px' }}>
                  <Bar data={vciChartData} options={vciChartOptions} />
                </div>
                <p className="text-center text-red-600 font-bold text-6xl my-4">55<span className="text-4xl font-semibold">/100</span></p>
                <p className="text-slate-600 text-center max-w-xs mx-auto">This low score is due to clashing fonts, colors, and logos across the website, social media, and ads, signaling a lack of internal governance.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#004AAD] text-center mb-4">Digital Infrastructure Gap</h3>
                <div className="space-y-6">
                  <div className="p-6 bg-red-50 border-2 border-red-200 rounded-lg shadow-inner">
                    <h4 className="text-xl font-bold text-red-700">CURRENT STACK (The Problem)</h4>
                    <p className="text-lg text-slate-700 font-semibold">Basic Website (CMS)</p>
                    <p className="text-slate-600 text-sm mt-2">Only broadcasts info. Fails to manage leads or enable parent communication, causing frustration.</p>
                  </div>
                  <div className="text-center text-4xl font-bold text-[#0077B6]">▼</div>
                  <div className="p-6 bg-green-50 border-2 border-green-200 rounded-lg shadow-inner">
                    <h4 className="text-xl font-bold text-green-700">STANDARD (The Solution)</h4>
                    <p className="text-lg text-slate-700 font-semibold">Marketing CRM + Parent App</p>
                    <p className="text-slate-600 text-sm mt-2">Solves the #1 parent pain point (communication) and proves the brand's professionalism.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Strategic Blueprint */}
          <section className="bg-[#004AAD] text-white rounded-xl shadow-lg p-6 md:p-8">
            <h2 className="text-3xl font-bold text-white mb-2 text-center">5. The Strategic Blueprint: The Cure</h2>
            <p className="text-center text-[#90E0EF] mb-8 max-w-3xl mx-auto">
              A 3-pillar strategy to close the gap and shift perception from "just another franchise" to "the best-executed DWS in Hyderabad."
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white text-slate-800 p-6 rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-2xl">
                <h3 className="text-xl font-bold text-[#004AAD] mb-3">Pillar 1: The DWS Standard, Delivered Locally</h3>
                <p className="text-base"><strong>Action:</strong> Invest in and heavily market a unified Parent App. This proves the commitment to transparency and fixes the #1 parent pain point.</p>
              </div>
              <div className="bg-white text-slate-800 p-6 rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-2xl">
                <h3 className="text-xl font-bold text-[#004AAD] mb-3">Pillar 2: From Teachers to Mentors</h3>
                <p className="text-base"><strong>Action:</strong> Refocus all content. Shift from "event photos" to "thought leadership." Showcase faculty as "Sages" and student success stories as the "Hero's Journey."</p>
              </div>
              <div className="bg-white text-slate-800 p-6 rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-2xl">
                <h3 className="text-xl font-bold text-[#004AAD] mb-3">Pillar 3: Build the Local Tribe</h3>
                <p className="text-base"><strong>Action:</strong> Launch a hyper-local SEO & Content Strategy that answers the specific, anxious questions of the Chintal parent persona.</p>
              </div>
            </div>
          </section>

          {/* Section 6: Measured Outcome */}
          <section className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <h2 className="text-3xl font-bold text-[#004AAD] mb-2 text-center">6. The Measured Outcome: The Goal</h2>
            <p className="text-center text-slate-600 mb-8 max-w-3xl mx-auto">
              Success will be measured against clear business, brand, and performance KPIs.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
              {[
                { val: '+25%', label: 'New Inquiries' },
                { val: '+15%', label: 'Conversion Rate' },
                { val: 'Top 3', label: 'Local SEO Rank' },
                { val: '4.5/5', label: 'Parent Comms Score' },
                { val: '7.5/10', label: 'Target BHI', sub: '/10' }
              ].map((item, idx) => (
                <div key={idx} className={`bg-[#CAF0F8] p-4 rounded-lg shadow ${idx === 4 ? 'col-span-2 md:col-span-1 lg:col-span-1' : ''}`}>
                  <div className="text-4xl font-bold text-[#004AAD]">
                    {item.val.split('/')[0]}
                    {item.sub && <span className="text-2xl">{item.sub}</span>}
                  </div>
                  <p className="text-slate-700 font-medium">{item.label}</p>
                </div>
              ))}
            </div>
          </section>

        </main>

        <footer className="text-center p-6 text-slate-500 text-sm">
          Infographic SPA based on the Comprehensive Brand Audit by Magsmen Brand Consultants.
        </footer>
      </div>
    </>
  );
}