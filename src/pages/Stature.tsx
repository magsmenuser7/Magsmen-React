import React, { useState, useEffect, useRef, FormEvent, useMemo } from 'react';
import {
  TrendingUp,
  Crosshair,
  Compass,
  CheckCircle2,
  Zap,
  ArrowRight,
  Shield,
  Building2,
  Cpu,
  Mic,
  Scale,
  ArrowDown,
  Mail,
  Loader2,
  LayoutDashboard,
  AlertCircle,
  ChevronRight
} from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip as ChartTooltip,
  Legend,
  Filler,
  ScatterController
} from 'chart.js';
import { Line, Scatter } from 'react-chartjs-2';
import emailjs from '@emailjs/browser';

// Register Chart.js modules
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  ChartTooltip,
  Legend,
  Filler,
  ScatterController
);

const glossary: Record<string, string> = {
  "stature": "The governed, architectural authority built from professional identity.",
  "share-of-voice": "A brand's visibility compared to competitors in the same market.",
  "brand-capital": "The accumulated trust and goodwill a brand can spend during a crisis.",
  "institutional-trust": "Trust based on structural guarantees and proven governance, not just personal relationships."
};

// Custom Styles block to be injected
const customStyles = `
  :root {
      --mg-black: #0A0A0A;
      --mg-white: #FAFAF8;
      --mg-purple: #7C3AED;
      --mg-purple-deep: #5B21B6;
      --mg-purple-dark: #4C1D95;
      --mg-purple-light: #EDE9FE;
      --mg-purple-muted: #A78BFA;
      --mg-purple-soft: #DDD6FE;
      
      --mg-gradient-hero: linear-gradient(135deg, #0A0A0A 0%, #1E1037 30%, #2D1B69 60%, #4C1D95 100%);
      --mg-gradient-accent: linear-gradient(135deg, #7C3AED 0%, #A78BFA 50%, #C4B5FD 100%);
      --mg-gradient-surface: linear-gradient(180deg, #FAFAF8 0%, #F5F3FF 50%, #EDE9FE 100%);
      --mg-gradient-insight: linear-gradient(135deg, #1A1A1A 0%, #1E1037 50%, #2D1B69 100%);
      --mg-gradient-card: linear-gradient(180deg, #FFFFFF 0%, #FAFAFE 100%);
      --mg-gradient-dark: linear-gradient(135deg, #0A0A0A 0%, #110C1D 50%, #0A0A0A 100%);
      --mg-gradient-cta: linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%);
      --mg-gradient-metric: linear-gradient(135deg, #110C1D 0%, #1E1037 50%, #2D1B69 100%);
      --mg-gradient-opportunity: linear-gradient(135deg, #EDE9FE 0%, #DDD6FE 50%, #C4B5FD 100%);
      
      --mg-glow-card: 0 2px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(124, 58, 237, 0.08);
      --mg-glow-hover: 0 4px 24px rgba(124, 58, 237, 0.15), 0 0 0 1px rgba(124, 58, 237, 0.2);
      
      --mg-slate: #2D2D2D;
      --mg-slate-light: #6B7280;
      --mg-border: #E5E0F0;
      --mg-surface: #F9F8FC;
      
      --mg-font-display: 'Playfair Display', Georgia, serif;
      --mg-font-body: 'DM Sans', system-ui, sans-serif;
      
      --mg-noise: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
  }

  body {
      font-family: var(--mg-font-body);
      background: var(--mg-gradient-surface);
      background-image: var(--mg-noise);
      color: var(--mg-slate);
      -webkit-font-smoothing: antialiased;
      overflow-x: hidden;
      margin: 0;
      padding: 0;
  }

  h1, h2, h3, .font-display { font-family: var(--mg-font-display); }
  
  .dashboard-container { max-width: 1320px; margin: 0 auto; padding: 0 24px; }
  .gradient-hero { background: var(--mg-gradient-hero); }
  .gradient-dark { background: var(--mg-gradient-dark); }
  .gradient-insight { background: var(--mg-gradient-insight); }
  .gradient-opportunity { background: var(--mg-gradient-opportunity); }
  .gradient-cta { background: var(--mg-gradient-cta); }
  
  .mg-card {
      background: var(--mg-gradient-card);
      border-radius: 12px;
      box-shadow: var(--mg-glow-card);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      border: 1px solid var(--mg-border);
  }
  .mg-card:hover {
      box-shadow: var(--mg-glow-hover);
      border-color: rgba(124, 58, 237, 0.3);
      transform: translateY(-2px);
  }

  .tab-content { display: block; margin-bottom: 4rem; padding-bottom: 4rem; border-bottom: 1px solid var(--mg-border); animation: fadeIn 0.5s ease-out forwards; }
  .tab-content:last-of-type { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }

  @keyframes fadeIn {
      from { opacity: 0; transform: translateY(12px); }
      to { opacity: 1; transform: translateY(0); }
  }

  .term {
      border-bottom: 1px dashed var(--mg-purple);
      cursor: help; position: relative; color: var(--mg-purple-dark); font-weight: 500;
  }

  ::-webkit-scrollbar { width: 8px; height: 8px; }
  ::-webkit-scrollbar-track { background: var(--mg-surface); }
  ::-webkit-scrollbar-thumb { background: var(--mg-border); border-radius: 4px; }
  ::-webkit-scrollbar-thumb:hover { background: var(--mg-purple-muted); }
`;

// Chart configurations
const MAGSMEN_CHART = {
  series: ['#0A0A0A', '#7C3AED', '#A78BFA', '#B8B5AE', '#5B21B6', '#C4B5FD'],
  fills: ['rgba(10,10,10,0.2)', 'rgba(124,58,237,0.2)'],
  grid: 'rgba(229, 224, 240, 0.4)',
  tooltip_bg: '#1E1037',
  tooltip_text: '#FAFAF8',
  tooltip_border: '#7C3AED'
};

const commonChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: 'bottom' as const, labels: { usePointStyle: true, padding: 20, font: { family: "'DM Sans', sans-serif" } } },
    tooltip: {
      backgroundColor: MAGSMEN_CHART.tooltip_bg,
      titleColor: MAGSMEN_CHART.tooltip_text,
      bodyColor: MAGSMEN_CHART.tooltip_text,
      borderColor: MAGSMEN_CHART.tooltip_border,
      borderWidth: 1,
      padding: 12,
      displayColors: false,
      titleFont: { family: "'DM Sans', sans-serif" },
      bodyFont: { family: "'DM Sans', sans-serif" }
    }
  },
  animation: { duration: 1000 }
};

const lineChartData = {
  labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
  datasets: [
    {
      label: 'Visibility (Noise)',
      data: [20, 45, 75, 80, 82],
      borderColor: MAGSMEN_CHART.series[3],
      borderDash: [5, 5],
      tension: 0.4,
      pointRadius: 0
    },
    {
      label: 'Structural Authority',
      data: [10, 15, 40, 75, 120],
      borderColor: MAGSMEN_CHART.series[1],
      backgroundColor: MAGSMEN_CHART.fills[1],
      fill: true,
      tension: 0.4,
      pointBackgroundColor: MAGSMEN_CHART.series[1],
      pointRadius: 4
    }
  ]
};

const lineChartOptions = {
  ...commonChartOptions,
  scales: {
    y: { display: false, grid: { display: false } },
    x: { grid: { color: MAGSMEN_CHART.grid }, ticks: { font: { family: "'DM Sans', sans-serif" } } }
  }
};

const scatterChartData = {
  datasets: [
    {
      label: 'Competitors (Noise)',
      data: [{ x: 80, y: 30 }, { x: 65, y: 40 }, { x: 90, y: 20 }],
      backgroundColor: MAGSMEN_CHART.series[3],
      pointRadius: 8
    },
    {
      label: 'Legacy Operators',
      data: [{ x: 20, y: 80 }, { x: 30, y: 70 }],
      backgroundColor: MAGSMEN_CHART.series[0],
      pointRadius: 8
    },
    {
      label: 'Target Stature Zone',
      data: [{ x: 85, y: 85 }],
      backgroundColor: MAGSMEN_CHART.series[1],
      pointRadius: 12,
      pointHoverRadius: 15,
      pointStyle: 'rectRot'
    }
  ]
};

const scatterChartOptions = {
  ...commonChartOptions,
  scales: {
    x: { min: 0, max: 100, title: { display: true, text: 'Market Visibility (PR/Ads)' }, grid: { color: MAGSMEN_CHART.grid }, ticks: { font: { family: "'DM Sans', sans-serif" } } },
    y: { min: 0, max: 100, title: { display: true, text: 'Structural Credibility (Trust)' }, grid: { color: MAGSMEN_CHART.grid }, ticks: { font: { family: "'DM Sans', sans-serif" } } }
  }
};

// Type definitions
type TabType = 'millets';

interface UserData {
  email: string;
}

export default function Stature() {
  // Authentication / Registration state
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Dashboard State management
  const [activeTab, setActiveTab] = useState<TabType>('millets');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [tooltip, setTooltip] = useState({ visible: false, text: '', x: 0, y: 0 });

  // Handle Scroll Progress (Moved ABOVE the early return)
  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ================= USER STORAGE =================
  const getUsers = (): UserData[] => {
    return JSON.parse(localStorage.getItem('registeredUsers') || '[]');
  };

  const saveUser = (user: UserData): void => {
    const users = getUsers();
    users.push(user);
    localStorage.setItem('registeredUsers', JSON.stringify(users));
  };

  const findUser = (email: string): UserData | undefined => {
    return getUsers().find((u) => u.email === email);
  };

  // ================= LOGIN =================
  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError('');
    setSuccessMessage('');
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = (formData.get('email') as string)?.trim();

    if (!email) {
      setError('Please enter your email address.');
      setIsLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      setIsLoading(false);
      return;
    }

    const existingUser = findUser(email);

    try {
      // 🔥 ALWAYS send email (both new + existing users)
      await emailjs.send(
        'service_ztfkvtu',
        'template_zhvk3r4',
        { email },
        'lGEySRjC5bz4G2JLr'
      );

      if (existingUser) {
        setSuccessMessage('Welcome back.');
        setTimeout(() => setIsLoggedIn(true), 800);
      } else {
        saveUser({ email });
        setSuccessMessage('Registered successfully.');
        setTimeout(() => setIsLoggedIn(true), 1000);
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Tooltip Handlers
  const handleTermMouseEnter = (e: React.MouseEvent<HTMLSpanElement>, termKey: string) => {
    if (glossary[termKey]) {
      const rect = (e.target as HTMLSpanElement).getBoundingClientRect();
      setTooltip({
        visible: true,
        text: glossary[termKey],
        x: rect.left,
        y: window.scrollY + rect.top - 40 // Adjusted slightly above the element
      });
    }
  };

  const handleTermMouseLeave = () => {
    setTooltip(prev => ({ ...prev, visible: false }));
  };

  const Term = ({ termKey, children }: { termKey: string; children: React.ReactNode }) => (
    <span
      className="term"
      onMouseEnter={(e) => handleTermMouseEnter(e, termKey)}
      onMouseLeave={handleTermMouseLeave}
    >
      {children}
    </span>
  );

  // ================= LOGIN SCREEN =================
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6 font-sans">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 border border-slate-200">
          <div className="flex flex-col items-center mb-8 text-center">
            <div className="p-4 bg-slate-100 rounded-2xl mb-4 text-[#1E293B]">
              <LayoutDashboard className="w-8 h-8" />
            </div>
            <h1 className="text-xl font-bold text-[#1E293B] uppercase">
              Strategic Dashboard
            </h1>
            <p className="text-slate-500 text-sm mt-2">
              Enter your email to access
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Email
              </label>
              <div className="relative mt-2">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400">
                  <Mail className="w-5 h-5" />
                </div>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#1E293B]/20"
                  placeholder="example@email.com"
                />
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-2 text-red-500 bg-red-50 p-3 rounded-xl text-xs">
                <AlertCircle className="w-4 h-4" />
                {error}
              </div>
            )}

            {successMessage && (
              <div className="text-green-600 bg-green-50 p-3 rounded-xl text-xs">
                {successMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#1E293B] text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  Access Dashboard
                  <ChevronRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ================= MAIN DASHBOARD =================
  return (
    <>
      {/* Global Fonts and Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        ${customStyles}
      `}</style>

      {/* Scroll Progress Bar */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: `${scrollProgress}%`,
          height: '3px',
          background: 'var(--mg-gradient-accent)',
          zIndex: 9999,
          transition: 'width 0.1s ease-out'
        }}
      />

      {/* Glossary Tooltip */}
      <div
        style={{
          position: 'absolute',
          background: 'var(--mg-gradient-insight)',
          color: 'var(--mg-white)',
          padding: '12px 16px',
          borderRadius: '6px',
          fontSize: '0.875rem',
          width: 'max-content',
          maxWidth: '300px',
          borderLeft: '4px solid var(--mg-purple)',
          boxShadow: 'var(--mg-glow-dark)',
          pointerEvents: 'none',
          opacity: tooltip.visible ? 1 : 0,
          top: `${tooltip.y}px`,
          left: `${tooltip.x}px`,
          transform: tooltip.visible ? 'translateY(-10px)' : 'translateY(0)',
          transition: 'opacity 0.2s, transform 0.2s',
          zIndex: 1000,
          fontFamily: 'var(--mg-font-body)'
        }}
      >
        {tooltip.text}
      </div>

      {/* Main Container */}
      <main className="dashboard-container py-10 min-h-[80vh]">
        
        {/* Header Section */}
        <header className="gradient-hero text-white pt-12 pb-10 px-6 relative overflow-hidden rounded-2xl shadow-xl mb-10 mt-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.05\'/%3E%3C/svg%3E')] mix-blend-overlay"></div>
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-1 text-[#FAFAF8]">STATURE</h1>
              <div className="flex flex-col mb-6">
                <span className="tracking-[0.15em] font-bold text-sm text-[#A78BFA]">BY MAGSMEN STRATEGY CONSULTANTS</span>
              </div>
              <p className="font-body text-[#EDE9FE] uppercase tracking-wider text-sm font-semibold">The Strategic Architecture of Professional Identity</p>
            </div>
            <div className="text-left md:text-right border-l-2 md:border-l-0 md:border-r-2 border-[#7C3AED]/30 pl-4 md:pr-4 md:pl-0">
              <p className="text-xs text-[#A78BFA] mb-1">Prepared for</p>
              <p className="font-display text-xl text-white">Executive Leadership Board</p>
            </div>
          </div>
        </header>

        {/* Executive Overview Section */}
        <section className="tab-content space-y-8">
          <div className="bg-[#EDE9FE] border-l-4 border-[#7C3AED] p-6 rounded-r-lg shadow-sm">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#5B21B6] mb-2">The Strategic Thesis</h3>
            <p className="text-lg text-[#0A0A0A] font-display leading-relaxed">
              Personal branding prioritizes visibility, creating market noise. <Term termKey="stature">Stature</Term> engineers structural credibility, creating undisputed market authority. For AP and Telangana business owners scaling to institutional levels, the founder's identity must evolve from a passive byproduct of success into a governed, strategic asset.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 mg-card p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-display text-xl text-[#0A0A0A]">The Divergence of Noise vs. Authority</h2>
                <TrendingUp className="w-5 h-5 text-[#7C3AED]" />
              </div>
              <p className="text-sm text-[#6B7280] mb-4">Without strategic governance, increased market visibility rapidly becomes mere noise, while structured authority yields compounding enterprise value.</p>
              <div className="h-80 w-full relative">
                <Line data={lineChartData} options={lineChartOptions} />
              </div>
            </div>
            <div className="space-y-4">
              <div className="gradient-insight p-5 rounded-xl border border-[#4C1D95]">
                <h4 className="text-[#A78BFA] font-semibold text-sm mb-2 uppercase tracking-wide">Insight 01: The Legacy Trap</h4>
                <p className="text-white text-sm mb-3">Founders in growing regional markets assume operational success automatically translates to public credibility.</p>
                <p className="text-[#DDD6FE] text-xs italic border-l-2 border-[#7C3AED] pl-2">Implication: Operations scale, but reputation fractures. Competitors with less substance but superior positioning steal <Term termKey="share-of-voice">Share of Voice</Term>.</p>
              </div>
              <div className="gradient-insight p-5 rounded-xl border border-[#4C1D95]">
                <h4 className="text-[#A78BFA] font-semibold text-sm mb-2 uppercase tracking-wide">Insight 02: Protection Deficit</h4>
                <p className="text-white text-sm mb-3">High-visibility leaders operate without a crisis framework or narrative baseline.</p>
                <p className="text-[#DDD6FE] text-xs italic border-l-2 border-[#7C3AED] pl-2">Implication: The brand is fragile. A single negative event dictates market perception because no prior <Term termKey="brand-capital">Brand Capital</Term> was deliberately banked.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Classification Section */}
        <section className="tab-content space-y-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display text-3xl text-[#0A0A0A] mb-4">The Stature Classification System</h2>
            <p className="text-[#6B7280]">Identifying where the leader currently sits dictates the exact strategic interventions required. Moving up tiers requires structural redesign, not just higher ad spend.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="mg-card p-6 flex flex-col h-full border-t-4 border-t-gray-300">
              <div className="text-4xl font-display text-gray-300 mb-2">I</div>
              <h3 className="font-bold text-[#0A0A0A] text-lg mb-2">Foundation</h3>
              <p className="text-xs text-[#7C3AED] font-semibold uppercase mb-4">Emerging Leaders</p>
              <p className="text-sm text-[#6B7280] flex-grow">Moving from invisible expertise to visible credibility. Setting up digital architecture and communication frameworks.</p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-xs font-medium text-[#0A0A0A]">Strategic Focus:</p>
                <p className="text-xs text-[#6B7280]">Positioning Setup & Validation</p>
              </div>
            </div>
            <div className="mg-card p-6 flex flex-col h-full border-t-4 border-t-[#A78BFA]">
              <div className="text-4xl font-display text-[#A78BFA] mb-2">II</div>
              <h3 className="font-bold text-[#0A0A0A] text-lg mb-2">Authority</h3>
              <p className="text-xs text-[#7C3AED] font-semibold uppercase mb-4">Senior Executives</p>
              <p className="text-sm text-[#6B7280] flex-grow">Scaling existing influence. Focus on competitive positioning, speaking placement, and establishing core content pillars.</p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-xs font-medium text-[#0A0A0A]">Strategic Focus:</p>
                <p className="text-xs text-[#6B7280]">Perception Mapping</p>
              </div>
            </div>
            <div className="mg-card p-6 flex flex-col h-full border-t-4 border-t-[#7C3AED]">
              <div className="text-4xl font-display text-[#7C3AED] mb-2">III</div>
              <h3 className="font-bold text-[#0A0A0A] text-lg mb-2">Prominence</h3>
              <p className="text-xs text-[#7C3AED] font-semibold uppercase mb-4">CEOs & Founders</p>
              <p className="text-sm text-[#6B7280] flex-grow">Governance for high-stakes reputations. Sentiment analysis, crisis preparedness, and visual identity lockdown.</p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-xs font-medium text-[#0A0A0A]">Strategic Focus:</p>
                <p className="text-xs text-[#6B7280]">Endorsement & Defense</p>
              </div>
            </div>
            <div className="mg-card p-6 flex flex-col h-full border-t-4 border-t-[#4C1D95]">
              <div className="text-4xl font-display text-[#4C1D95] mb-2">IV</div>
              <h3 className="font-bold text-[#0A0A0A] text-lg mb-2">Legacy</h3>
              <p className="text-xs text-[#7C3AED] font-semibold uppercase mb-4">Public Figures</p>
              <p className="text-sm text-[#6B7280] flex-grow">The individual's identity is a commercial ecosystem. Requires real-time monitoring and generational legacy planning.</p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-xs font-medium text-[#0A0A0A]">Strategic Focus:</p>
                <p className="text-xs text-[#6B7280]">Commercial Ecosystems</p>
              </div>
            </div>
          </div>
        </section>

        {/* Perception Mapping Section */}
        <section className="tab-content space-y-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-2/3 mg-card p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="font-display text-xl text-[#0A0A0A]">The Stature Matrix: AP Market</h2>
                  <p className="text-xs text-[#6B7280] mt-1">Mapping competitors on Visibility (X) vs. Structural Credibility (Y)</p>
                </div>
                <Crosshair className="w-5 h-5 text-[#7C3AED]" />
              </div>
              <div className="h-[400px] relative">
                <Scatter data={scatterChartData} options={scatterChartOptions} />
              </div>
            </div>
            
            <div className="w-full md:w-1/3 space-y-4 flex flex-col justify-center">
              <div className="bg-white border border-[#E5E0F0] p-5 rounded-lg shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-red-800"></div>
                <h4 className="font-bold text-[#0A0A0A] mb-1">The "Empty Suit" Quadrant</h4>
                <p className="text-sm text-[#6B7280]">High PR spend, low substance. Generates leads but struggles to close high-ticket B2B deals due to lack of <Term termKey="institutional-trust">Institutional Trust</Term>.</p>
              </div>
              <div className="bg-white border border-[#E5E0F0] p-5 rounded-lg shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gray-400"></div>
                <h4 className="font-bold text-[#0A0A0A] mb-1">The "Hidden Gem" Quadrant</h4>
                <p className="text-sm text-[#6B7280]">High operational excellence, low visibility. Relies entirely on legacy networks. Highly vulnerable to new, louder market entrants.</p>
              </div>
              <div className="gradient-opportunity p-5 rounded-lg shadow-sm relative overflow-hidden border border-[#A78BFA]">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#5B21B6]"></div>
                <h4 className="font-bold text-[#4C1D95] mb-1">The Stature White Space</h4>
                <p className="text-sm text-[#4C1D95] font-medium">High visibility anchored by unquestionable structural credibility. The objective of Magsmen's intervention.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Opportunity Section */}
        <section className="tab-content space-y-8">
          <div className="gradient-opportunity p-8 rounded-2xl border border-[#A78BFA] text-center shadow-lg">
            <Compass className="w-10 h-10 text-[#5B21B6] mx-auto mb-4" />
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#5B21B6] mb-3">Strategic Positioning Statement</h2>
            <p className="font-display text-2xl md:text-3xl text-[#0A0A0A] leading-tight max-w-3xl mx-auto italic">
              "For <span className="border-b-2 border-[#7C3AED] px-1">institutional partners & premium clients</span>, the Founder must be positioned not as a vendor, but as the <span className="border-b-2 border-[#7C3AED] px-1">definitive category authority</span> that <span className="border-b-2 border-[#7C3AED] px-1">de-risks major investments</span> because their <span className="border-b-2 border-[#7C3AED] px-1">governed reputation guarantees delivery</span>."
            </p>
          </div>

          <h3 className="font-display text-2xl text-center mt-12 mb-6">The Execution Roadmap</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="gradient-insight rounded-xl p-6 text-white border border-[#2D1B69] flex flex-col">
              <div className="text-[#A78BFA] font-bold text-xl mb-4">0—90 Days</div>
              <h4 className="font-display text-lg mb-2">Foundation & Purge</h4>
              <ul className="text-sm text-gray-300 space-y-3 flex-grow mb-6">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#7C3AED] mt-0.5 shrink-0" /> <span>Conduct complete brand perception audit.</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#7C3AED] mt-0.5 shrink-0" /> <span>Cleanse historical digital footprint of off-brand material.</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#7C3AED] mt-0.5 shrink-0" /> <span>Establish single-source-of-truth narrative document.</span></li>
              </ul>
            </div>
            <div className="gradient-insight rounded-xl p-6 text-white border-t-4 border-t-[#7C3AED] flex flex-col relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 opacity-10"><Zap className="w-40 h-40 text-white" /></div>
              <div className="text-[#C4B5FD] font-bold text-xl mb-4">90—180 Days</div>
              <h4 className="font-display text-lg mb-2">Architecture Activation</h4>
              <ul className="text-sm text-gray-300 space-y-3 flex-grow mb-6 relative z-10">
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-[#A78BFA] mt-0.5 shrink-0" /> <span>Deploy new visual identity across core channels.</span></li>
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-[#A78BFA] mt-0.5 shrink-0" /> <span>Secure 2 strategic speaking engagements/podcasts (e.g., InTalks).</span></li>
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-[#A78BFA] mt-0.5 shrink-0" /> <span>Publish core thesis framework for the industry.</span></li>
              </ul>
            </div>
            <div className="gradient-cta rounded-xl p-6 text-white shadow-[0_0_30px_rgba(124,58,237,0.3)] flex flex-col">
              <div className="text-white font-bold text-xl mb-4 flex justify-between items-center">
                <span>180—365 Days</span>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </div>
              <h4 className="font-display text-lg mb-2">Governance & Legacy</h4>
              <ul className="text-sm text-gray-200 space-y-3 flex-grow mb-6">
                <li className="flex items-start gap-2"><Shield className="w-4 h-4 text-white mt-0.5 shrink-0" /> <span>Implement real-time sentiment tracking.</span></li>
                <li className="flex items-start gap-2"><Shield className="w-4 h-4 text-white mt-0.5 shrink-0" /> <span>Formalize crisis protocol and communication lines.</span></li>
                <li className="flex items-start gap-2"><Shield className="w-4 h-4 text-white mt-0.5 shrink-0" /> <span>Begin commercialization/advisory board placements.</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* About Magsmen Section */}
        <section className="tab-content">
          <div className="gradient-hero rounded-3xl p-10 md:p-16 text-white text-center shadow-2xl relative overflow-hidden mb-12">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.05\'/%3E%3C/svg%3E')] mix-blend-overlay"></div>
            <div className="relative z-10">
              <span className="tracking-[0.2em] font-bold text-sm text-[#A78BFA] mb-6 block">ABOUT MAGSMEN</span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">We don't just build brands.<br /><span className="text-[#A78BFA]">We build brands that perform.</span></h2>
              <p className="max-w-3xl mx-auto text-[#DDD6FE] text-lg leading-relaxed">
                Magsmen is a strategic brand consulting firm that helps organizations strengthen how they are perceived, chosen, and valued in the market. We identify real issues, clarify positioning, and design frameworks that unlock measurable growth.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <div className="border border-[#7C3AED] bg-[#F5F3FF] p-8 rounded-xl text-center max-w-4xl mx-auto mb-12 shadow-sm">
              <h3 className="font-display text-3xl text-[#4C1D95] mb-2">"When clarity leads, brands win."</h3>
              <p className="text-[#6B7280] text-sm uppercase tracking-widest font-semibold">Clear Vision. Calm Approach. Bold Moves.</p>
            </div>

            <h3 className="font-display text-2xl text-center mb-8">Where Strategy Becomes Practice</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="mg-card p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-[#EDE9FE] flex items-center justify-center mx-auto mb-4 text-[#7C3AED]">1</div>
                <h4 className="font-bold mb-2">Understand the Problem</h4>
                <p className="text-xs text-[#6B7280]">Research, structured diagnostics, and category dynamics.</p>
              </div>
              <div className="mg-card p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-[#EDE9FE] flex items-center justify-center mx-auto mb-4 text-[#7C3AED]">2</div>
                <h4 className="font-bold mb-2">Define Direction</h4>
                <p className="text-xs text-[#6B7280]">Clarifying the position a business can own uniquely.</p>
              </div>
              <div className="mg-card p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-[#EDE9FE] flex items-center justify-center mx-auto mb-4 text-[#7C3AED]">3</div>
                <h4 className="font-bold mb-2">Build the System</h4>
                <p className="text-xs text-[#6B7280]">Translating direction into actionable brand frameworks.</p>
              </div>
              <div className="mg-card p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-[#EDE9FE] flex items-center justify-center mx-auto mb-4 text-[#7C3AED]">4</div>
                <h4 className="font-bold mb-2">Enable Implementation</h4>
                <p className="text-xs text-[#6B7280]">Long-term consistency and agency orchestration.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="font-display text-2xl mb-6">One Ecosystem. Multiple Solutions.</h3>
              <div className="space-y-4">
                <div className="p-5 bg-white border border-[#E5E0F0] rounded-lg shadow-sm flex items-start gap-4 hover:border-[#7C3AED] transition-colors">
                  <Building2 className="w-8 h-8 text-[#5B21B6] mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold text-[#0A0A0A]">Magsmen Strategy Consultants</h4>
                    <p className="text-sm text-[#6B7280]">Strategy and brand consulting (The Core).</p>
                  </div>
                </div>
                <div className="p-5 bg-white border border-[#E5E0F0] rounded-lg shadow-sm flex items-start gap-4 hover:border-[#7C3AED] transition-colors">
                  <Cpu className="w-8 h-8 text-[#5B21B6] mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold text-[#0A0A0A]">MIBBS (mibbs.ai)</h4>
                    <p className="text-sm text-[#6B7280]">Budget Smarter, Grow Faster. AI-powered budget allocation.</p>
                  </div>
                </div>
                <div className="p-5 bg-white border border-[#E5E0F0] rounded-lg shadow-sm flex items-start gap-4 hover:border-[#7C3AED] transition-colors">
                  <Mic className="w-8 h-8 text-[#5B21B6] mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold text-[#0A0A0A]">InTalks Podcast</h4>
                    <p className="text-sm text-[#6B7280]">Leaders, Legends & Lessons. 90M+ viewership, 100K+ community.</p>
                  </div>
                </div>
                <div className="p-5 bg-white border border-[#E5E0F0] rounded-lg shadow-sm flex items-start gap-4 hover:border-[#7C3AED] transition-colors">
                  <Scale className="w-8 h-8 text-[#5B21B6] mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold text-[#0A0A0A]">SanStrategies</h4>
                    <p className="text-sm text-[#6B7280]">Business Intelligence, Legal & Compliance thought leadership.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="gradient-insight rounded-xl p-8 text-white border border-[#4C1D95]">
              <h3 className="font-display text-2xl mb-2 text-[#FAFAF8]">Where Magsmen Sits</h3>
              <p className="text-sm text-[#A78BFA] mb-8">We orchestrate the execution. We do not compete with execution.</p>
              
              <div className="space-y-3">
                <div className="bg-white/10 p-3 rounded text-center border border-[#7C3AED] font-bold tracking-wide">THE BRAND / LEADERSHIP</div>
                <div className="flex justify-center"><ArrowDown className="w-5 h-5 text-[#A78BFA]" /></div>
                <div className="bg-gradient-to-r from-[#7C3AED] to-[#5B21B6] p-4 rounded text-center font-bold shadow-[0_0_15px_rgba(124,58,237,0.4)]">MAGSMEN (Strategy Layer)</div>
                <div className="flex justify-center"><ArrowDown className="w-5 h-5 text-[#A78BFA]" /></div>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-2 text-[10px] text-center font-medium">
                  <div className="bg-white/5 p-2 rounded border border-white/20">Advertising</div>
                  <div className="bg-white/5 p-2 rounded border border-white/20">PR</div>
                  <div className="bg-white/5 p-2 rounded border border-white/20">Tech/Web</div>
                  <div className="bg-white/5 p-2 rounded border border-white/20">Digital Mktg</div>
                  <div className="bg-white/5 p-2 rounded border border-white/20">Legal/Prod</div>
                  <div className="bg-white/5 p-2 rounded border border-white/20">Media Buy</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#E5E0F0] border border-[#E5E0F0] rounded-xl overflow-hidden mb-16">
            <div className="bg-white p-6 text-center hover:bg-[#F9F8FC] transition-colors">
              <div className="text-3xl font-display text-[#7C3AED] font-bold mb-1">3/4</div>
              <div className="text-xs text-[#6B7280] font-semibold uppercase">Clients 100% willing to refer (Clutch)</div>
            </div>
            <div className="bg-white p-6 text-center hover:bg-[#F9F8FC] transition-colors">
              <div className="text-3xl font-display text-[#7C3AED] font-bold mb-1">4.9</div>
              <div className="text-xs text-[#6B7280] font-semibold uppercase">Google Rating (133 Reviews)</div>
            </div>
            <div className="bg-white p-6 text-center hover:bg-[#F9F8FC] transition-colors">
              <div className="text-3xl font-display text-[#7C3AED] font-bold mb-1">16+</div>
              <div className="text-xs text-[#6B7280] font-semibold uppercase">Brands Created from Zero</div>
            </div>
            <div className="bg-white p-6 text-center hover:bg-[#F9F8FC] transition-colors">
              <div className="text-3xl font-display text-[#7C3AED] font-bold mb-1">90M+</div>
              <div className="text-xs text-[#6B7280] font-semibold uppercase">InTalks Viewership</div>
            </div>
          </div>

          <h3 className="font-display text-2xl text-center mb-8">Core Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            <div className="mg-card p-5 border-t-2 border-t-[#A78BFA]">
              <h4 className="font-bold text-sm mb-1">Brand Consulting</h4>
              <p className="text-xs text-[#6B7280]">Full strategy: positioning, differentiation, communication direction. (Ongoing)</p>
            </div>
            <div className="mg-card p-5 border-t-2 border-t-[#A78BFA]">
              <h4 className="font-bold text-sm mb-1">Personal Brand / Stature</h4>
              <p className="text-xs text-[#6B7280]">Image assessment, wardrobe evaluation, personal style, CSR, legacy. For CEOs & Public Figures. (Custom)</p>
            </div>
            <div className="mg-card p-5 border-t-2 border-t-[#A78BFA]">
              <h4 className="font-bold text-sm mb-1">Corporate Rebranding</h4>
              <p className="text-xs text-[#6B7280]">Values, vision realignment. Fresh, memorable identity. (Project)</p>
            </div>
            <div className="mg-card p-5 border-t-2 border-t-[#A78BFA]">
              <h4 className="font-bold text-sm mb-1">Brand Expresso</h4>
              <p className="text-xs text-[#6B7280]">90-day transformation — identity, presence, standout. (90 Days)</p>
            </div>
            <div className="mg-card p-5 border-t-2 border-t-[#A78BFA]">
              <h4 className="font-bold text-sm mb-1">Brand Creation</h4>
              <p className="text-xs text-[#6B7280]">Complete brand from zero — naming, identity, launch strategy. (90 Days)</p>
            </div>
            <div className="mg-card p-5 border-t-2 border-t-[#A78BFA]">
              <h4 className="font-bold text-sm mb-1">LinkFluence</h4>
              <p className="text-xs text-[#6B7280]">LinkedIn consulting for CEOs, brands, and NGOs. (Ongoing)</p>
            </div>
            <div className="mg-card p-5 border-t-2 border-t-[#A78BFA]">
              <h4 className="font-bold text-sm mb-1">One-Time Consulting</h4>
              <p className="text-xs text-[#6B7280]">Brand check, find the problem, provide the right solution. (OTC)</p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-[#E5E0F0] p-8 shadow-sm mb-12">
            <h3 className="font-display text-2xl mb-6">Proven Transformations</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold text-[#0A0A0A]">Tenali Double Horse</h4>
                <p className="text-sm text-[#6B7280]">Repositioned for pan-India, entered US market, structured corporate brand architecture.</p>
              </div>
              <div>
                <h4 className="font-bold text-[#0A0A0A]">Chakrasiddh</h4>
                <p className="text-sm text-[#6B7280]">From elite-only to an accessible, trusted holistic healing centre.</p>
              </div>
              <div>
                <h4 className="font-bold text-[#0A0A0A]">Sri Bhramara</h4>
                <p className="text-sm text-[#6B7280]">Established market dominance in the competitive AP real estate sector.</p>
              </div>
              <div>
                <h4 className="font-bold text-[#0A0A0A]">Suma Kanakala</h4>
                <p className="text-sm text-[#6B7280]">Strategic identity governance, transitioning from a beloved entertainment figure to a structured institutional brand and launchpad.</p>
              </div>
              <div>
                <h4 className="font-bold text-[#0A0A0A]">Mohan Shyam Prasad</h4>
                <p className="text-sm text-[#6B7280]">Personal brand architecture, establishing definitive category authority and strategic leadership in the regional market.</p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-[#E5E0F0] text-xs text-[#6B7280] text-center">
              Additional successes: Cargill, MR Constructions, LVLUP, Pronted, Swargaseema.
            </div>
          </div>
        </section>

      </main>

      {/* Footer Container */}
      <footer className="gradient-dark text-white py-12 border-t-4 border-[#7C3AED]">
        <div className="dashboard-container">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div>
              <span className="tracking-[0.15em] font-bold text-sm block mb-4">MAGSMEN STRATEGY CONSULTANTS</span>
              <p className="text-xs text-gray-400 mb-1">Corporate: Madhapur, Hyderabad, TS 500081</p>
              <p className="text-xs text-gray-400 mb-1">Head Office: Brodipet, Guntur, AP 522002</p>
              <p className="text-xs text-gray-400">Australia: Rowville, VIC 3178</p>
            </div>
            <div className="text-left md:text-right">
              <p className="text-sm font-semibold mb-2 text-[#A78BFA]">+91 90449 10449</p>
              <p className="text-sm mb-2 hover:text-[#A78BFA] cursor-pointer transition-colors">connect@magsmen.com</p>
              <p className="text-sm mb-2 hover:text-[#A78BFA] cursor-pointer transition-colors">www.magsmen.com</p>
              <p className="text-xs text-gray-500 mt-4">@magsmenindia</p>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 flex flex-col items-center text-[10px] text-gray-500 gap-4 text-center">
            <p>Magsmen is a registered trademark. A division of Grofesion Innovations Pvt Ltd.</p>
          </div>
        </div>
      </footer>
    </>
  );
}