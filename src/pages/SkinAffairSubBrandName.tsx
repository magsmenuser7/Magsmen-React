import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { 
  BookOpen, X, Tag, ShieldCheck, Gem, Star, Phone, Mail, Globe 
} from 'lucide-react';
import logo from "/assets/white_logo22.png"
import horizontallogo from "/assets/magsmen-new-logo-white-landscape.png"

Chart.defaults.font.family = "'DM Sans', sans-serif";
Chart.defaults.color = '#64748b';

// --- Animated Counter Component ---
const AnimatedCounter: React.FC<{ target: number; duration?: number; suffix?: string }> = ({ target, duration = 1200, suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = performance.now();
    let animationFrame: number;

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - start;
      if (elapsed < duration) {
        const progress = 1 - Math.pow(2, -10 * elapsed / duration);
        setCount(Math.floor(target * progress));
        animationFrame = requestAnimationFrame(updateCounter);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration]);

  return <>{count}{suffix}</>;
};

// --- Chart Components ---
const TrendChart = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['2020', '2021', '2022', '2023', '2024', '2025', '2026 (Proj)'],
        datasets: [
          {
            label: 'Clinical/Functional Clinics Search Vol.',
            data: [100, 105, 110, 108, 105, 100, 95],
            borderColor: '#94A3B8',
            backgroundColor: 'rgba(148, 163, 184, 0.1)',
            borderWidth: 2,
            tension: 0.4,
            fill: true,
            pointRadius: 0
          },
          {
            label: 'Experiential/Conceptual Aesthetic Brands',
            data: [20, 25, 40, 70, 120, 180, 250],
            borderColor: '#7C3AED',
            backgroundColor: 'rgba(124, 58, 237, 0.1)',
            borderWidth: 3,
            tension: 0.4,
            fill: true,
            pointBackgroundColor: '#7C3AED',
            pointRadius: [0, 0, 0, 0, 0, 4, 6]
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 1000, easing: 'easeOutQuart' },
        plugins: {
          legend: { position: 'bottom', labels: { usePointStyle: true, boxWidth: 8 } },
          datalabels: { display: false },
          tooltip: {
            backgroundColor: '#1e1b4b',
            titleColor: '#fff',
            bodyColor: '#DDD6FE',
            borderColor: '#7C3AED',
            borderWidth: 1,
            padding: 10
          }
        },
        scales: {
          y: { beginAtZero: true, grid: { color: 'rgba(124, 58, 237, 0.05)' }, ticks: { display: false } },
          x: { grid: { display: false } }
        }
      }
    });

    return () => chart.destroy();
  }, []);

  return <canvas ref={canvasRef}></canvas>;
};

const CategoryDoughnut = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    const chart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Functional (Generic)', 'Pseudo-Scientific (Med)', 'Conceptual Studios (Premium)'],
        datasets: [{
          data: [65, 25, 10],
          backgroundColor: ['#E2E8F0', '#94A3B8', '#7C3AED'],
          borderWidth: 0,
          hoverOffset: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '75%',
        animation: { duration: 1000, easing: 'easeOutQuart', delay: 200 },
        plugins: {
          legend: { display: false },
          datalabels: {
            color: '#fff',
            font: { weight: 'bold', size: 14 },
            formatter: (value, context) => context.dataIndex === 2 ? value + '%' : ''
          },
          tooltip: {
            callbacks: { label: (context) => ` ${context.label}: ${context.raw}%` }
          }
        }
      }
    });

    return () => chart.destroy();
  }, []);

  return <canvas ref={canvasRef}></canvas>;
};

const ScatterChart = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    const chart = new Chart(ctx, {
      type: 'bubble',
      data: {
        datasets: [
          {
            label: 'Generic Clinics (High Volume, Low Margin)',
            data: [{ x: 20, y: 30, r: 15 }, { x: 25, y: 20, r: 10 }, { x: 35, y: 40, r: 20 }, { x: 15, y: 50, r: 12 }],
            backgroundColor: 'rgba(148, 163, 184, 0.5)',
            borderColor: '#94A3B8'
          },
          {
            label: 'Doctor-Led Brands (High Trust, Medium Premium)',
            data: [{ x: 60, y: 40, r: 15 }, { x: 70, y: 50, r: 18 }, { x: 55, y: 65, r: 12 }],
            backgroundColor: 'rgba(76, 29, 149, 0.2)',
            borderColor: '#4C1D95'
          },
          {
            label: 'Proposed: Vivarna / Tilottama (High Premium, Conceptual)',
            data: [{ x: 85, y: 85, r: 25 }],
            backgroundColor: 'rgba(124, 58, 237, 0.8)',
            borderColor: '#7C3AED',
            borderWidth: 2
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 1000, easing: 'easeOutQuart' },
        plugins: {
          legend: { position: 'bottom', labels: { usePointStyle: true } },
          datalabels: {
            color: '#fff',
            font: { weight: 'bold', family: '"Playfair Display", serif' },
            formatter: (value, context) => context.datasetIndex === 2 ? 'SKIN AFFAIR\n(Future State)' : '',
            textAlign: 'center'
          },
          tooltip: { enabled: false }
        },
        scales: {
          y: {
            title: { display: true, text: 'Experience & Lifestyle Integration (Low to High)', color: '#4C1D95', font: { weight: 'bold' } },
            min: 0, max: 100,
            grid: { color: 'rgba(124, 58, 237, 0.05)' }
          },
          x: {
            title: { display: true, text: 'Brand Meaning & Storytelling (Functional to Conceptual)', color: '#4C1D95', font: { weight: 'bold' } },
            min: 0, max: 100,
            grid: { color: 'rgba(124, 58, 237, 0.05)' }
          }
        }
      }
    });

    return () => chart.destroy();
  }, []);

  return <canvas ref={canvasRef}></canvas>;
};

const RadarChart = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    const chart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ['Memorability', 'Storytelling Depth', 'Distinctiveness (IP)', 'Premium Perception', 'Phonetic Elegance'],
        datasets: [
          {
            label: 'Vivarna',
            data: [8, 9, 10, 10, 9],
            backgroundColor: 'rgba(124, 58, 237, 0.2)',
            borderColor: '#7C3AED',
            pointBackgroundColor: '#7C3AED',
            borderWidth: 2
          },
          {
            label: 'Tilottama',
            data: [7, 10, 9, 10, 8],
            backgroundColor: 'rgba(76, 29, 149, 0.1)',
            borderColor: '#4C1D95',
            pointBackgroundColor: '#4C1D95',
            borderWidth: 2,
            borderDash: [5, 5]
          },
          {
            label: 'Chavi',
            data: [10, 6, 7, 8, 10],
            backgroundColor: 'rgba(167, 139, 250, 0.1)',
            borderColor: '#A78BFA',
            pointBackgroundColor: '#A78BFA',
            borderWidth: 1
          },
          {
            label: 'Ghritachi',
            data: [6, 10, 8, 9, 6],
            backgroundColor: 'rgba(148, 163, 184, 0.1)',
            borderColor: '#64748b',
            pointBackgroundColor: '#64748b',
            borderWidth: 1,
            borderDash: [2, 2]
          },
          {
            label: 'Aavaran',
            data: [7, 8, 6, 7, 9],
            backgroundColor: 'rgba(15, 23, 42, 0.05)',
            borderColor: '#0f172a',
            pointBackgroundColor: '#0f172a',
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom', labels: { usePointStyle: true } },
          datalabels: { display: false }
        },
        scales: {
          r: {
            min: 0, max: 10,
            ticks: { display: false },
            grid: { color: 'rgba(124, 58, 237, 0.1)' },
            angleLines: { color: 'rgba(124, 58, 237, 0.1)' },
            pointLabels: { font: { family: '"DM Sans", sans-serif', size: 12 }, color: '#1e293b' }
          }
        }
      }
    });

    return () => chart.destroy();
  }, []);

  return <canvas ref={canvasRef}></canvas>;
};

// --- Main Application Component ---
export default function SkinAffairSubBrandName() {
  const [activeTab, setActiveTab] = useState('tab-1');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });
  const currentDate = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Scroll Progress Tracking
  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress((winScroll / height) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update Tab Indicator Position
  useEffect(() => {
    const tabs = ['tab-1', 'tab-2', 'tab-3', 'tab-4', 'tab-5', 'tab-6', 'tab-7'];
    const activeIndex = tabs.indexOf(activeTab);
    const currentTabEl = tabRefs.current[activeIndex];
    
    if (currentTabEl) {
      setIndicatorStyle({
        width: currentTabEl.offsetWidth,
        left: currentTabEl.offsetLeft
      });
    }
  }, [activeTab]);

  const tabs = [
    { id: 'tab-1', label: 'Executive Overview' },
    { id: 'tab-2', label: 'Naming Landscape' },
    { id: 'tab-3', label: 'Demand Truths' },
    { id: 'tab-4', label: 'Positioning Space' },
    { id: 'tab-5', label: 'The Strategic Identity' },
    { id: 'tab-6', label: 'Nomenclature Scorecard' },
    { id: 'tab-7', label: 'About Magsmen' }
  ];

  return (
    <div className="bg-slate-50 min-h-screen relative overflow-x-hidden font-['DM_Sans',system-ui,sans-serif] text-slate-800">
      
      {/* Global CSS injected */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400..700;1,9..40,400..700&family=Playfair+Display:ital,wght@0,400..800;1,400..800&display=swap');

        :root {
          --mg-purple: #7C3AED;
          --mg-purple-dark: #4C1D95;
          --mg-purple-light: #DDD6FE;
          --mg-purple-muted: #A78BFA;
          
          --mg-gradient-hero: linear-gradient(135deg, #050505 0%, #1a0b2e 50%, #2e1065 100%);
          --mg-gradient-surface: linear-gradient(180deg, #ffffff 0%, #f5f3ff 100%);
          --mg-gradient-dark: linear-gradient(180deg, #050505 0%, #2e1065 50%, #050505 100%);
          --mg-gradient-metric: linear-gradient(145deg, #111827 0%, #2e1065 100%);
          --mg-gradient-insight: linear-gradient(145deg, #000000 0%, #1e1b4b 100%);
          --mg-gradient-opportunity: linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%);
          --mg-gradient-cta: linear-gradient(90deg, #6d28d9 0%, #7c3aed 100%);
          --mg-gradient-accent: linear-gradient(90deg, #c4b5fd 0%, #7c3aed 50%, #4c1d95 100%);
          
          --mg-glow-hover: 0 10px 25px -5px rgba(124, 58, 237, 0.4), 0 8px 10px -6px rgba(124, 58, 237, 0.1);
        }

        .font-hero { font-family: 'Playfair Display', Georgia, serif; }

        .fade-in-up {
          opacity: 0;
          transform: translateY(12px);
          animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        @keyframes fadeInUp {
          to { opacity: 1; transform: translateY(0); }
        }

        .stagger-1 { animation-delay: 100ms; }
        .stagger-2 { animation-delay: 200ms; }
        .stagger-3 { animation-delay: 300ms; }
        .stagger-4 { animation-delay: 400ms; }

        .mg-card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid transparent;
        }

        .mg-card-hover:hover {
          border-color: rgba(124, 58, 237, 0.3);
          box-shadow: var(--mg-glow-hover);
          transform: translateY(-2px);
        }

        .strat-term {
          border-bottom: 1px dashed var(--mg-purple);
          cursor: help;
          position: relative;
        }
        
        .strat-term:hover::after {
          content: attr(data-definition);
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(-8px);
          background: var(--mg-gradient-insight);
          color: white;
          padding: 8px 12px;
          border-radius: 4px;
          font-size: 0.6875rem;
          white-space: nowrap;
          z-index: 50;
          border-left: 3px solid var(--mg-purple);
          pointer-events: none;
          opacity: 0;
          animation: fadeIn 0.2s forwards;
        }

        @keyframes fadeIn { to { opacity: 1; } }

        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E");
        }

        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

        @media print {
          body { background: white; color: black; }
          .no-print { display: none !important; }
          .canvas-container { width: 100% !important; height: auto !important; page-break-inside: avoid; }
        }
      `}</style>

      {/* Scroll Progress */}
      <div 
        className="fixed top-0 left-0 h-[2px] z-[1000] transition-all duration-100 ease-out no-print"
        style={{ width: `${scrollProgress}%`, background: 'var(--mg-gradient-accent)' }}
      />

      {/* Brand Names Modal */}
      <div 
        className={`fixed inset-0 z-[100] bg-slate-50 overflow-y-auto transition-all duration-300 ${isModalOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'}`}
      >
        <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm z-50">
          <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <span className="p-2 bg-[#DDD6FE] text-[#7C3AED] rounded-full"><BookOpen size={20} /></span>
              <h2 className="font-hero text-2xl text-[#050505]">Nomenclature Briefing Document</h2>
            </div>
            <button onClick={() => setIsModalOpen(false)} className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm font-semibold transition-colors shadow-sm">
              Close Page <X size={16} />
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto py-12 px-6">
          <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-200 space-y-12 text-gray-800">
            {/* Modal Content Sections */}
            <div>
              <h3 className="font-hero text-2xl font-bold text-[#050505] mb-4">1. Chavi – A Skin Affair Select</h3>
              <p className="font-bold text-sm uppercase tracking-wider mb-2 text-[#4C1D95]">Core Meaning:</p>
              <p className="mb-4 leading-relaxed">“Chavi” (छवि / చవి) means reflection, image, or radiance. It is how one is seen and remembered—not just appearance, but presence and impression.</p>
              <p className="font-bold text-sm uppercase tracking-wider mb-2 text-[#4C1D95]">Brand Interpretations:</p>
              <ul className="space-y-2 list-disc pl-5">
                <li><strong>Chavi as Reflection</strong> – Skin as a mirror of inner health and balance, not just external beauty.</li>
                <li><strong>Chavi as Radiance</strong> – A natural glow that feels alive, soft, and effortlessly visible.</li>
                <li><strong>Chavi as Identity</strong> – Your skin as your personal signature—distinct, real, and expressive.</li>
                <li><strong>Chavi as Simplicity</strong> – Easy to say, easy to remember, yet deeply rooted in meaning.</li>
                <li><strong>Chavi as Everyday Beauty</strong> – Not perfection, but a consistent, confident version of yourself.</li>
              </ul>
            </div>

            <hr className="border-gray-200" />

            <div>
              <h3 className="font-hero text-2xl font-bold text-[#050505] mb-4">2. Vivarna – A Skin Affair Select</h3>
              <p className="font-bold text-sm uppercase tracking-wider mb-2 text-[#4C1D95]">Core Meaning:</p>
              <p className="mb-4 leading-relaxed">“Vivarna” comes from Sanskrit, meaning beyond color or free from artificial layers. It represents skin in its most real, untouched, and authentic form, unfiltered and honest.</p>
              <p className="font-bold text-sm uppercase tracking-wider mb-2 text-[#4C1D95]">Brand Interpretations:</p>
              <ul className="space-y-2 list-disc pl-5">
                <li><strong>Vivarna as Truth</strong> – Skin that exists beyond makeup, filters, or illusion. What you see is real, and that is enough.</li>
                <li><strong>Vivarna as Minimalism</strong> – A refined approach that removes excess, focusing only on what truly enhances skin health.</li>
                <li><strong>Vivarna as Liberation</strong> – Letting go of layers, expectations, and surface perfection to reveal natural beauty.</li>
                <li><strong>Vivarna as Modern Aesthetic</strong> – Clean, artistic, and quietly bold. A brand that feels editorial, not clinical.</li>
                <li><strong>Vivarna as Confidence</strong> – When nothing is hidden, confidence becomes effortless and deeply personal.</li>
              </ul>
            </div>

            <hr className="border-gray-200" />

            <div>
              <h3 className="font-hero text-2xl font-bold text-[#050505] mb-4">3. Aavaran Studio – A Skin Affair Select</h3>
              <p className="font-bold text-sm uppercase tracking-wider mb-2 text-[#4C1D95]">Core Meaning:</p>
              <p className="mb-4 leading-relaxed">“Aavaran” means covering, layer, or outer shell. In the context of skin, it represents everything that sits on the surface, what is applied, accumulated, or hides the true skin beneath.</p>
              <p className="font-bold text-sm uppercase tracking-wider mb-2 text-[#4C1D95]">Brand Interpretations:</p>
              <ul className="space-y-2 list-disc pl-5">
                <li><strong>Aavaran as Layers</strong> – Understanding skin not just on the surface, but through every layer that shapes it.</li>
                <li><strong>Aavaran as Transformation</strong> – A journey of gently removing what doesn’t belong to reveal clarity underneath.</li>
                <li><strong>Aavaran as Awareness</strong> – Recognizing the difference between covered beauty and real skin health.</li>
                <li><strong>Aavaran as Depth</strong> – A more thoughtful, almost philosophical take on skincare that goes beyond quick fixes.</li>
                <li><strong>Aavaran as Reveal</strong> – The clinic becomes a space where layers are not added, but consciously refined or taken away.</li>
              </ul>
            </div>

            <hr className="border-[#7C3AED]/30 border-2" />

            <div>
              <h2 className="font-hero text-3xl font-bold text-[#4C1D95] mb-8">Mythological References (Storytelling Possibility)</h2>
              
              <div className="mb-10">
                <h3 className="font-hero text-2xl font-bold text-[#050505] mb-2">4. Tilottama - Skin Affair Select</h3>
                <p className="font-semibold text-gray-500 mb-4 uppercase tracking-widest text-xs">Mahabharata / Vishwakarma</p>
                <div className="space-y-3 leading-relaxed">
                  <p>This is the most powerful reference for a dermatology clinic.</p>
                  <p>Brahma directed Vishwakarma the celestial architect to create a being of such exceptional beauty that her presence alone would change the world. Vishwakarma meticulously fashioned Tilottama by gathering the finest qualities from every element across the universe. Her beauty was so divine and radiant that even the gods were captivated.</p>
                  <p>Her name itself Tila + Uttama "the highest quality, gathered from the smallest particles."</p>
                  <p><strong>Why this matters for your brand:</strong> She was not born beautiful. She was constructed with precision, intention, using the best from everything available. That is exactly what a dermatology clinic does. The patient doesn't leave looking like someone else. They leave as the finest version of what they already were, assembled with expertise.</p>
                </div>
              </div>

              <hr className="border-gray-200 mb-10" />

              <div>
                <h3 className="font-hero text-2xl font-bold text-[#050505] mb-2">5. Ghritachi - Skin Affair Select</h3>
                <p className="font-semibold text-gray-500 mb-4 uppercase tracking-widest text-xs">Mahabharata</p>
                <div className="space-y-3 leading-relaxed">
                  <p>Ghritachi is described as possessing eternal youth, her celestial beauty never fading with the passage of time.</p>
                  <p>Among all apsaras, she alone carries the specific trait of timelessness. Not transformation. Not creation. Simply skin that does not yield to time.</p>
                  <p><strong>Why this matters:</strong> Every anti-ageing patient's deepest desire is not to look young again. It is to look like time didn't happen. Ghritachi is that idea made mythological.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <button onClick={() => setIsModalOpen(false)} className="px-8 py-3 bg-[#7C3AED] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all">
              Return to Presentation
            </button>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="w-full relative z-50 fade-in-up" style={{ background: 'var(--mg-gradient-hero)' }}>
        <div className="max-w-[1320px] mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 relative">
          <div className="z-10">
            {/* <div className="tracking-[0.15em] text-white uppercase text-[14px] font-bold mb-1">M A G S M E N</div>
            <div className="tracking-[0.3em] text-[#A78BFA] opacity-90 text-[9px] font-semibold mb-8">BRAND CONSULTANTS</div> */}
            <img src={logo} alt="Logo" className="w-32 h-auto mb-4" />
            <h1 className="text-white font-hero leading-tight text-[clamp(2.5rem,5vw,4rem)]">Skin Affair</h1>
            <p className="text-[#A78BFA] uppercase tracking-wider text-sm mt-2">Brand Identity & Nomenclature Strategy</p>
          </div>
          
          <div className="text-left md:text-right z-10 flex flex-col items-start md:items-end">
            <p className="text-[#94A3B8] text-sm mb-1">Prepared for <strong className="text-white">SKIN AFFAIR</strong></p>
            <p className="text-[#A78BFA] text-xs tracking-widest uppercase mb-4">{currentDate}</p>
          </div>
          
          <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[#7C3AED]/20 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-full h-[1px]" style={{ background: 'rgba(124, 58, 237, 0.2)' }} />
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm no-print">
        <div className="max-w-[1320px] mx-auto px-6 relative flex justify-between items-center">
          <div className="flex overflow-x-auto hide-scrollbar whitespace-nowrap h-[52px] w-full md:w-auto relative">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                ref={el => tabRefs.current[index] = el}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 text-sm transition-colors relative ${activeTab === tab.id ? 'text-[#050505] font-semibold' : 'text-[#94A3B8] hover:text-[#050505]'}`}
              >
                {tab.label}
              </button>
            ))}
            <div 
              className="absolute bottom-0 h-[3px] bg-[#7C3AED] transition-all duration-300"
              style={{ width: `${indicatorStyle.width}px`, left: `${indicatorStyle.left}px` }}
            />
          </div>
          
          <div className="hidden md:block py-2 ml-4 relative z-50">
            <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 bg-[#7C3AED] text-white px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md hover:bg-[#4C1D95] hover:shadow-lg transition-all animate-pulse">
              Brand Names ◆
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Button */}
      <div className="block md:hidden bg-white border-b border-gray-200 p-3 text-center sticky top-[52px] z-30 no-print">
        <button onClick={() => setIsModalOpen(true)} className="w-full flex justify-center items-center gap-2 bg-[#7C3AED] text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-md active:bg-[#4C1D95] transition-all">
          Open Brand Names Document ◆
        </button>
      </div>

      {/* Main Content */}
      <main className="max-w-[1320px] mx-auto min-h-[60vh] bg-noise pb-20" style={{ backgroundImage: 'var(--mg-gradient-surface)' }}>
        
        {/* TAB 1: Executive Overview */}
        {activeTab === 'tab-1' && (
          <section className="px-6 py-12 block">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="rounded-xl p-6 fade-in-up stagger-1 text-white relative overflow-hidden" style={{ background: 'var(--mg-gradient-metric)' }}>
                <div className="absolute right-[-10%] top-[-10%] opacity-10"><Tag size={120} /></div>
                <p className="text-[#A78BFA] text-xs uppercase tracking-wider mb-2">Strategic Goal</p>
                <div className="text-3xl font-hero mb-1">Brand Transition</div>
                <p className="text-sm text-gray-300">From functional clinic to conceptual aesthetic entity.</p>
              </div>
              <div className="rounded-xl p-6 fade-in-up stagger-2 text-white relative overflow-hidden mg-card-hover cursor-pointer" onClick={() => setIsModalOpen(true)} style={{ background: 'var(--mg-gradient-metric)' }}>
                <div className="absolute right-[-10%] top-[-10%] opacity-10"><BookOpen size={120} /></div>
                <p className="text-[#A78BFA] text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
                  Nomenclature Routes <span className="bg-[#7C3AED] px-2 py-0.5 rounded text-[9px] font-bold animate-pulse">CLICK TO VIEW</span>
                </p>
                <div className="text-4xl font-hero mb-1"><AnimatedCounter target={5} /></div>
                <p className="text-sm text-gray-300 mt-2 font-medium">Vivarna • Tilottama • Chavi • Aavaran • Ghritachi</p>
              </div>
              <div className="rounded-xl p-6 fade-in-up stagger-3 text-white relative overflow-hidden" style={{ background: 'var(--mg-gradient-metric)' }}>
                <div className="absolute right-[-10%] top-[-10%] opacity-10"><ShieldCheck size={120} /></div>
                <p className="text-[#A78BFA] text-xs uppercase tracking-wider mb-2">IP Viability Target</p>
                <div className="text-4xl font-hero mb-1"><AnimatedCounter target={100} suffix="%" /></div>
                <p className="text-sm text-gray-300">Designed for distinct trademark registration in Class 44.</p>
              </div>
            </div>

            <div className="mb-12 p-8 rounded-lg fade-in-up stagger-4" style={{ background: 'var(--mg-purple-light)', borderLeft: '4px solid var(--mg-purple)' }}>
              <p className="text-[#A78BFA] text-xs uppercase tracking-widest mb-2 font-bold text-[#4C1D95]">Strategic Thesis</p>
              <h2 className="font-hero text-2xl md:text-3xl text-[#050505] leading-snug">
                The Indian aesthetic market is maturing. Consumers are no longer buying mere dermatological interventions; they are seeking identity refinement. To command premium pricing, Skin Affair must shed generic clinical naming conventions and adopt a <span className="strat-term" data-definition="A brand name rooted in a specific idea or story, rather than just describing the service.">conceptual moniker</span> that signals depth, authenticity, and profound transformation.
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="font-hero text-xl border-b border-gray-200 pb-2">Diagnostic Findings</h3>
                <div className="rounded-lg p-6 shadow-lg" style={{ background: 'var(--mg-gradient-insight)' }}>
                  <h4 className="text-[#7C3AED] font-semibold mb-2">1. The "Doctor-Led" Ceiling</h4>
                  <p className="text-white text-sm mb-3">Clinics named after doctors or generic skin terms face an immediate value ceiling. They are perceived as transactional medical stops, not aspirational lifestyle destinations.</p>
                  <p className="text-[#DDD6FE] italic text-xs border-t border-[#7C3AED]/30 pt-3">Implication: The new name must step away from utility and move toward abstract value.</p>
                </div>
                <div className="rounded-lg p-6 shadow-lg" style={{ background: 'var(--mg-gradient-insight)' }}>
                  <h4 className="text-[#7C3AED] font-semibold mb-2">2. The Return to Roots</h4>
                  <p className="text-white text-sm mb-3">Premium Indian consumers are increasingly drawn to Sanskrit and mythological references that offer a sophisticated, indigenous narrative rather than faux-western luxury.</p>
                  <p className="text-[#DDD6FE] italic text-xs border-t border-[#7C3AED]/30 pt-3">Implication: Leverage deep cultural vocabulary to establish immediate gravitas and trust.</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="mb-4">
                  <h3 className="font-hero text-xl text-[#050505]">The Shift in Aesthetic Branding</h3>
                  <p className="text-sm text-gray-500">Consumer preference trajectory: Clinical Utility vs. Experiential Identity.</p>
                </div>
                <div className="relative h-64 w-full canvas-container">
                  <TrendChart />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* TAB 2: Naming Landscape */}
        {activeTab === 'tab-2' && (
          <section className="px-6 py-12 block fade-in-up">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="font-hero text-3xl text-[#050505] mb-4">The Naming Landscape in Dermatology</h2>
              <p className="text-gray-600">Analyzing the competitive nomenclature conventions across the Indian aesthetic sector reveals a massive whitespace for concept-driven brands.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative">
                <h3 className="font-hero text-lg mb-4 text-center">Current Naming Conventions</h3>
                <div className="relative h-72 w-full canvas-container">
                  <CategoryDoughnut />
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none flex-col mt-8">
                  <span className="text-3xl font-bold text-[#050505]">₹18K Cr</span>
                  <span className="text-xs text-gray-500 uppercase">Market Size</span>
                </div>
              </div>
              <div className="space-y-6">
                <div className="border-l-4 border-gray-300 pl-4 py-2 hover:border-[#7C3AED] transition-colors duration-300">
                  <h4 className="font-bold text-[#050505]">Tier 3: The Functional Descriptors (65%)</h4>
                  <p className="text-sm text-gray-600">Names like "Perfect Skin", "Glow Clinic", or Eponymous names. High trust locally, zero aspirational brand equity.</p>
                </div>
                <div className="border-l-4 border-gray-400 pl-4 py-2 hover:border-[#7C3AED] transition-colors duration-300">
                  <h4 className="font-bold text-[#050505]">Tier 2: The Pseudo-Scientific (25%)</h4>
                  <p className="text-sm text-gray-600">Names utilizing suffixes like "Derma", "Med", or "Clinique". Feels sterile, lacks emotional connection.</p>
                </div>
                <div className="border-l-4 border-[#7C3AED] pl-4 py-2 bg-[#7C3AED]/10 rounded-r-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold text-[#4C1D95]">Tier 1: The Conceptual Studios (10%)</h4>
                    <span className="bg-[#7C3AED] text-white text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider">Target Whitespace</span>
                  </div>
                  <p className="text-sm text-gray-800">Abstract, evocative names rooted in philosophy, art, or mythology. Commands the highest patient LTV (Lifetime Value).</p>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-xl text-white shadow-lg" style={{ background: 'var(--mg-gradient-insight)' }}>
              <h4 className="font-hero text-xl mb-2 text-[#DDD6FE]">What This Means for Positioning</h4>
              <p className="text-sm leading-relaxed">
                By bypassing Tier 2 and Tier 3 naming conventions, Skin Affair immediately bypasses price-shopping behavior. A conceptual name signals to the market that you are selling an <span className="strat-term" data-definition="The overall feeling and result of the treatment, not just the medical procedure itself.">aesthetic methodology</span>, not just laser sessions or injectables. It positions the clinic as an authority on beauty rather than just a repair shop for skin.
              </p>
            </div>
          </section>
        )}

        {/* TAB 3: Demand Truths */}
        {activeTab === 'tab-3' && (
          <section className="px-6 py-12 block fade-in-up">
            <div className="mb-12">
              <h2 className="font-hero text-3xl text-[#050505] mb-2">Audience Narrative Mapping</h2>
              <p className="text-gray-600 text-sm">Different aesthetic psychographics respond to different narrative hooks. The chosen name will attract a specific patient archetype.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { title: "The Honest Minimalist", arch: "Archetype 01", desc: "Seeks skin health over dramatic alteration. Rejects heavy makeup and filters. Wants to look like the best version of themselves.", desire: "Transparency & Health", fear: "Looking 'done' or artificial.", match: "Vivarna / Chavi" },
                { title: "The Discerning Perfectionist", arch: "Archetype 02", desc: "Views beauty as an architecture that can be refined. Understands the nuances of facial balancing and structural integrity.", desire: "Precision & Enhancement", fear: "Incompetence or asymmetry.", match: "Tilottama" },
                { title: "The Preservationist", arch: "Archetype 03", desc: "Focused entirely on longevity and anti-aging. Wants to freeze time or reverse damage gracefully without radical surgery.", desire: "Timelessness", fear: "Visible signs of aging.", match: "Ghritachi / Aavaran" }
              ].map((persona, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mg-card-hover flex flex-col">
                  <div className="p-4" style={{ background: 'var(--mg-gradient-insight)' }}>
                    <p className="text-[#A78BFA] text-[10px] uppercase tracking-widest mb-1">{persona.arch}</p>
                    <h3 className="text-white font-hero text-xl">{persona.title}</h3>
                  </div>
                  <div className="p-5 flex-grow flex flex-col justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-4">{persona.desc}</p>
                      <div className="text-xs bg-gray-50 p-3 rounded mb-4">
                        <strong>Core Desire:</strong> {persona.desire}<br />
                        <strong>Fear:</strong> {persona.fear}
                      </div>
                    </div>
                    <div className="border-t border-gray-100 pt-3">
                      <span className="text-[10px] uppercase text-[#7C3AED] font-bold tracking-widest">Resonates with:</span>
                      <p className="font-hero text-lg text-[#050505] mt-1">{persona.match}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="mb-4">
                <h3 className="font-hero text-xl text-[#050505]">Demand Motivation Matrix</h3>
                <p className="text-sm text-gray-500">Mapping the psychological drivers for clinic visits.</p>
              </div>
              <div className="relative h-80 w-full flex items-center justify-center p-4">
                <div className="grid grid-cols-2 grid-rows-2 w-full h-full border border-gray-200 relative">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-gray-500 uppercase tracking-widest">Transformational (Correction)</div>
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-bold text-gray-500 uppercase tracking-widest">Preventative (Maintenance)</div>
                  <div className="absolute top-1/2 -left-6 -translate-y-1/2 -rotate-90 text-xs font-bold text-gray-500 uppercase tracking-widest origin-center">Internal (Feel)</div>
                  <div className="absolute top-1/2 -right-6 -translate-y-1/2 rotate-90 text-xs font-bold text-gray-500 uppercase tracking-widest origin-center">External (Look)</div>
                  
                  <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gray-200"></div>
                  <div className="absolute left-0 right-0 top-1/2 h-px bg-gray-200"></div>

                  <div className="p-4 flex flex-col items-center justify-center text-center">
                    <span className="text-[#7C3AED] font-bold text-sm mb-1">"Fix My Problem"</span>
                    <span className="text-xs text-gray-500">Acne, Pigmentation<br />(High Churn)</span>
                  </div>
                  <div className="p-4 flex flex-col items-center justify-center text-center bg-[#7C3AED]/5">
                    <span className="text-[#4C1D95] font-bold text-sm mb-1">"Refine My Features"</span>
                    <span className="text-xs text-gray-500">Fillers, Sculpting<br />→ <em>Tilottama fits here</em></span>
                  </div>
                  <div className="p-4 flex flex-col items-center justify-center text-center bg-[#7C3AED]/10">
                    <span className="text-[#4C1D95] font-bold text-sm mb-1">"Reveal My Glow"</span>
                    <span className="text-xs text-gray-500">Skin Quality, Hydration<br />→ <em>Vivarna / Chavi fit here</em></span>
                    <div className="mt-2 text-[10px] text-white bg-[#7C3AED] px-2 py-1 rounded-full absolute bottom-12 left-1/4 hidden md:block">Highest Growth Opportunity</div>
                  </div>
                  <div className="p-4 flex flex-col items-center justify-center text-center bg-[#7C3AED]/5">
                    <span className="text-[#4C1D95] font-bold text-sm mb-1">"Protect My Youth"</span>
                    <span className="text-xs text-gray-500">Anti-aging, Lasers<br />→ <em>Ghritachi fits here</em></span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* TAB 4: Positioning Space */}
        {activeTab === 'tab-4' && (
          <section className="px-6 py-12 block fade-in-up">
            <div className="mb-8">
              <h2 className="font-hero text-3xl text-[#050505] mb-2">Positioning Space Analysis</h2>
              <p className="text-gray-600 text-sm">Where the proposed names sit relative to standard market competitors.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8 relative">
              <div className="absolute top-6 right-6 p-3 border-2 border-[#7C3AED] border-dashed bg-[#DDD6FE]/20 rounded-lg max-w-[200px] z-10 hidden md:block">
                <p className="text-xs font-bold text-[#4C1D95] mb-1">Strategic Whitespace</p>
                <p className="text-[10px] text-gray-600">The upper-right quadrant (High Meaning + High Experience) is virtually uncontested in the regional market.</p>
              </div>
              <div className="relative h-[400px] w-full canvas-container">
                <ScatterChart />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border border-gray-200 bg-white">
                <h4 className="font-bold text-[#050505] mb-3">The "Generic Clinic" Trap</h4>
                <p className="text-sm text-gray-600 mb-4">Competitors clustered in the bottom-left compete entirely on proximity, price, and doctor availability. Brand loyalty is zero; patient acquisition costs (CAC) remain perpetually high because the brand cannot attract organic, narrative-driven referrals.</p>
              </div>
              <div className="p-6 rounded-xl border-l-4 border-[#7C3AED]" style={{ background: 'var(--mg-purple-light)' }}>
                <h4 className="font-bold text-[#4C1D95] mb-3">The "Conceptual Brand" Advantage</h4>
                <p className="text-sm text-gray-800">By adopting a name like <strong>Vivarna</strong> or <strong>Tilottama</strong>, the clinic immediately shifts to the upper right. It establishes a premium moat. Price elasticity increases because the patient perceives they are paying for a specialized philosophy, not a commoditized medical service.</p>
              </div>
            </div>
          </section>
        )}

        {/* TAB 5: The Strategic Identity */}
        {activeTab === 'tab-5' && (
          <section className="px-6 py-12 block fade-in-up">
            <div className="text-center mb-16">
              <span className="inline-block p-3 rounded-full bg-[#DDD6FE] text-[#7C3AED] mb-4">
                <Gem size={32} />
              </span>
              <h2 className="font-hero text-4xl md:text-5xl text-[#050505] mb-4">Strategic Naming Concepts</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Click the <strong className="text-[#7C3AED] cursor-pointer" onClick={() => setIsModalOpen(true)}>"Brand Names ◆"</strong> button above to read the full, unedited briefing document for these identities.</p>
            </div>

            <div className="space-y-12">
              {[
                { letter: 'C', opt: 'Option 01', name: 'Chavi', tag: '"A Skin Affair Select"', overview: "Meaning reflection or radiance, Chavi positions the clinic as a space that enhances a patient's natural, everyday beauty and personal identity." },
                { letter: 'V', opt: 'Option 02', name: 'Vivarna', tag: '"A Skin Affair Select"', overview: 'Rooted in the idea of "beyond artificial layers," Vivarna leans heavily into the modern, premium trend of skin-minimalism and unfiltered truth.' },
                { letter: 'A', opt: 'Option 03', name: 'Aavaran', tag: '"Studio by Skin Affair"', overview: "Focusing on the \"outer shell\" or covering, Aavaran represents a deeply philosophical approach to gently removing what doesn't belong to reveal the clarity underneath." }
              ].map((concept, i) => (
                <div key={i} className="mg-card-hover rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-100 flex flex-col md:flex-row">
                  <div className="md:w-1/3 p-8 flex flex-col justify-center relative text-white" style={{ background: 'var(--mg-gradient-insight)' }}>
                    <div className="absolute top-0 right-0 text-9xl opacity-5 font-hero pointer-events-none">{concept.letter}</div>
                    <p className="text-[#A78BFA] text-xs uppercase tracking-widest font-bold mb-2">{concept.opt}</p>
                    <h3 className="font-hero text-4xl mb-2">{concept.name}</h3>
                    <p className="text-[#DDD6FE] text-sm italic">{concept.tag}</p>
                  </div>
                  <div className="md:w-2/3 p-8 flex flex-col justify-center">
                    <h4 className="font-bold text-[#050505] border-b border-gray-200 pb-2 mb-3 text-sm uppercase tracking-wider">Strategic Overview</h4>
                    <p className="text-sm text-gray-700 leading-relaxed mb-4">{concept.overview}</p>
                    <button onClick={() => setIsModalOpen(true)} className="self-start text-xs font-bold uppercase tracking-widest text-[#7C3AED] border border-[#7C3AED] px-4 py-2 rounded-full hover:bg-[#7C3AED] hover:text-white transition-colors">Read Full Brief in Doc →</button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 p-8 rounded-xl shadow-lg border border-[#7C3AED]/30 text-center" style={{ background: 'var(--mg-gradient-opportunity)' }}>
              <p className="text-xs uppercase tracking-widest text-[#4C1D95] font-bold mb-2">Decision Prompt</p>
              <h3 className="font-hero text-2xl text-[#050505] mb-4">The recommendation is <strong className="text-[#7C3AED]">Vivarna</strong> for modern minimalism, or <strong className="text-[#7C3AED]">Tilottama</strong> for premium architectural enhancement.</h3>
              <p className="text-sm text-gray-700">The first action is securing trademark availability in Class 44. The window to execute this rebrand effectively is the next 90 days before the Q3 aesthetic surge.</p>
            </div>
          </section>
        )}

        {/* TAB 6: Scorecard */}
        {activeTab === 'tab-6' && (
          <section className="px-6 py-12 block fade-in-up">
            <div className="mb-8 text-center max-w-2xl mx-auto">
              <h2 className="font-hero text-3xl text-[#050505] mb-2">Quantitative Naming Evaluation</h2>
              <p className="text-gray-600 text-sm">Evaluating the 5 options against Magsmen's proprietary naming pillars: Memorability, Depth (Storytelling), Distinctiveness (IP), Premium Feel, and Phonetic Ease.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative h-[450px] flex items-center justify-center">
                <RadarChart />
              </div>
              <div>
                <h3 className="font-hero text-xl mb-4 border-b border-gray-200 pb-2">Scoring Analysis</h3>
                <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-gray-50 text-gray-600 font-semibold uppercase text-[10px] tracking-wider">
                      <tr>
                        <th className="px-4 py-3">Name Concept</th>
                        <th className="px-4 py-3 text-center">Score (out of 50)</th>
                        <th className="px-4 py-3">Primary Strength</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {[
                        { name: 'Vivarna', score: 46, str: 'Modern Premium Feel', bg: 'bg-[#7C3AED]' },
                        { name: 'Tilottama', score: 44, str: 'Unmatched Storytelling', bg: 'bg-[#4C1D95]' },
                        { name: 'Chavi', score: 41, str: 'Simplicity & Recall', bg: 'bg-[#A78BFA]' },
                        { name: 'Ghritachi', score: 39, str: 'Niche Targeting (Anti-aging)', bg: 'bg-[#A78BFA]' },
                        { name: 'Aavaran', score: 37, str: 'Philosophical Depth', bg: 'bg-[#A78BFA]' }
                      ].map(row => (
                        <tr key={row.name} className="hover:bg-gray-50 transition-colors">
                          <td className="px-4 py-3 font-bold text-[#050505]">{row.name}</td>
                          <td className="px-4 py-3 text-center"><span className={`${row.bg} text-white px-2 py-1 rounded text-xs font-bold`}>{row.score}</span></td>
                          <td className="px-4 py-3 text-gray-600">{row.str}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* TAB 7: About */}
        {activeTab === 'tab-7' && (
          <section className="block fade-in-up">
            <div className="px-6 py-20 text-white relative overflow-hidden" style={{ background: 'var(--mg-gradient-hero)' }}>
              <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[140%] bg-[#7C3AED] rounded-full mix-blend-multiply filter blur-[100px] opacity-40 pointer-events-none" />
              
              <div className="max-w-4xl mx-auto text-center relative z-10 mb-16">
                <h2 className="font-hero text-3xl md:text-5xl leading-tight mb-6">"We don't just build brands.<br />We build brands that perform."</h2>
                <div className="inline-block border border-[#7C3AED] px-6 py-3 rounded-full mb-8">
                  <p className="text-sm tracking-widest uppercase font-semibold text-[#DDD6FE]">When clarity leads, brands win.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16 max-w-[1200px] mx-auto">
                {['Understand the Problem', 'Define Direction', 'Build the System', 'Enable Implementation'].map((step, i) => (
                  <div key={step} className={`bg-white/5 backdrop-blur-sm border border-white/10 p-5 rounded-lg text-center relative ${i > 0 ? "md:before:content-[''] md:before:absolute md:before:top-1/2 md:before:left-[-16px] md:before:w-4 md:before:h-[1px] md:before:bg-[#7C3AED]/50" : ''}`}>
                    <div className="text-[#A78BFA] font-hero text-2xl mb-2">0{i + 1}</div>
                    <h4 className="font-bold text-sm uppercase tracking-wider mb-2">{step}</h4>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-[1200px] mx-auto text-center border-y border-white/10 py-8 mb-16">
                <div>
                  <div className="text-3xl font-hero text-white mb-1"><AnimatedCounter target={30} />+</div>
                  <div className="text-[10px] uppercase tracking-wider text-[#A78BFA]">Brands Transformed</div>
                </div>
                <div>
                  <div className="text-3xl font-hero text-white mb-1"><AnimatedCounter target={16} />+</div>
                  <div className="text-[10px] uppercase tracking-wider text-[#A78BFA]">Industries</div>
                </div>
                <div>
                  <div className="text-3xl font-hero text-white mb-1"><AnimatedCounter target={16} />+</div>
                  <div className="text-[10px] uppercase tracking-wider text-[#A78BFA]">Brands Created</div>
                </div>
                <div>
                  <div className="text-3xl font-hero text-white mb-1"><AnimatedCounter target={90} />M+</div>
                  <div className="text-[10px] uppercase tracking-wider text-[#A78BFA]">InTalks Viewership</div>
                </div>
                <div>
                  <div className="text-3xl font-hero text-white mb-1 flex items-center justify-center gap-1">4.9 <Star size={16} className="text-[#DDD6FE] fill-[#DDD6FE]" /></div>
                  <div className="text-[10px] uppercase tracking-wider text-[#A78BFA]">Google (133 Reviews)</div>
                </div>
                <div>
                  <div className="text-3xl font-hero text-white mb-1"><AnimatedCounter target={3} /></div>
                  <div className="text-[10px] uppercase tracking-wider text-[#A78BFA]">Global Offices</div>
                </div>
              </div>

              <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="font-hero text-2xl mb-4 text-white">The Magsmen Ecosystem</h3>
                  <p className="text-sm text-gray-300 mb-6 leading-relaxed">A holistic approach to brand dominance, integrating core strategy, operational enablement, and industry thought leadership.</p>
                  <div className="flex flex-wrap gap-3">
                    {['Magsmen', 'MIBBS', 'InTalks', 'SanStrategies'].map(tag => (
                      <span key={tag} className="bg-white/10 border border-white/20 px-3 py-1 rounded text-xs font-semibold">{tag}</span>
                    ))}
                  </div>
                  <div className="mt-8 bg-white/5 border-l-4 border-[#7C3AED] p-4 rounded-r">
                    <p className="text-sm font-hero italic text-[#DDD6FE]">"3 out of 4 clients were 100% willing to refer Magsmen to their network."</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {['Brand Strategy', 'Nomenclature', 'Visual Identity', 'Go-to-Market'].map(srv => (
                    <div key={srv} className="bg-[#111111] p-4 rounded border border-white/5">
                      <span className="text-xs text-gray-400 block mb-1">Core Service</span>
                      <span className="text-sm font-semibold">{srv}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-20 text-center max-w-3xl mx-auto bg-black/40 p-8 rounded-2xl border border-white/10 backdrop-blur-md">
                <h3 className="font-hero text-2xl mb-6">Ready to position your brand for growth?</h3>
                <div className="flex flex-col md:flex-row justify-center gap-4">
                  <a href="#" className="px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(124,58,237,0.5)]" style={{ background: 'var(--mg-gradient-cta)', color: 'white' }}>Schedule a Call</a>
                  <a href="#" className="px-8 py-3 rounded-full font-semibold text-sm border border-white text-white hover:bg-white hover:text-black transition-all duration-300">Take the Brand Audit</a>
                </div>
              </div>
            </div>
          </section>
        )}

      </main>

      {/* Footer */}
      <footer className="text-white py-12 border-t border-gray-800 relative z-10" style={{ background: 'var(--mg-gradient-dark)' }}>
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <div>
              {/* <div className="tracking-[0.2em] text-white uppercase text-[16px] font-bold mb-2">MAGSMEN STRATEGY CONSULTANTS</div> */}
              <img src={horizontallogo} alt="Magsmen Logo" className="h-10 mb-2" />
              <p className="text-xs text-gray-400 max-w-sm">Operating across India and Australia, specializing in building brands that perform.</p>
            </div>
            <div className="text-left md:text-right text-sm text-gray-400 space-y-1">
              <p className="flex items-center md:justify-end gap-2"><Phone size={14} /> +91 90449 10449</p>
              <p className="flex items-center md:justify-end gap-2"><Mail size={14} /> connect@magsmen.com</p>
              <p className="flex items-center md:justify-end gap-2"><Globe size={14} /> www.magsmen.com</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-white/10 pt-8 text-xs text-gray-500">
            <div>
              <p className="font-semibold text-gray-300 mb-2 uppercase tracking-wider">Offices</p>
              <p>Hyderabad | Guntur | Australia</p>
            </div>
            <div className="text-left md:text-center">
              <p className="font-semibold text-gray-300 mb-2 uppercase tracking-wider">Confidentiality</p>
              <p>CONFIDENTIAL — Prepared for Skin Affair — {currentDate}</p>
            </div>
            <div className="text-left md:text-right">
              <p className="font-semibold text-gray-300 mb-2 uppercase tracking-wider">Legal</p>
              <p>Magsmen is a registered trademark.<br />A division of Grofessors Innovations Pvt Ltd.</p>
              <p className="mt-2 text-[#A78BFA]">@magsmenindia</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}