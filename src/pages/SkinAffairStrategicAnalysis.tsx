import React, { useState, useEffect, useRef, FormEvent } from 'react';
import Chart from 'chart.js/auto';
import { 
  TrendingUp, 
  ArrowDown, 
  Zap, 
  Check, 
  Phone, 
  Globe, 
  MapPin 
} from 'lucide-react';
import logo from '/assets/magsmen-new-logo-white-landscape.png';
import { 
  BarChart, Target, Users, Eye, Share2, 
  ShieldCheck, ChevronRight, AlertCircle,
  CheckCircle2, XCircle, Clock, Gavel, Minus
} from 'lucide-react';
import { Star, Instagram, Youtube, Lock, Mail, Loader2, LayoutDashboard } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface UserData {
  email: string;
}

export default function SkinAffairStrategicAnalysis() {
  const [activeTab, setActiveTab] = useState('overview');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [reachCount, setReachCount] = useState(0);
  const [viewCount, setViewCount] = useState(0);

  const categoryChartRef = useRef<HTMLCanvasElement>(null);
  const competitorChartRef = useRef<HTMLCanvasElement>(null);
  const categoryChartInstance = useRef<Chart | null>(null);
  const competitorChartInstance = useRef<Chart | null>(null);

  // Scroll Progress
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

  // Counters Animation
  useEffect(() => {
    const animateValue = (
      setter: React.Dispatch<React.SetStateAction<number>>, 
      target: number, 
      duration: number
    ) => {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setter(Math.floor(progress * target));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    if (activeTab === 'overview') {
      animateValue(setReachCount, 1250, 1200);
    }
    if (activeTab === 'magsmen') {
      animateValue(setViewCount, 90, 1200);
    }
  }, [activeTab]);

  // Chart Initializations
  useEffect(() => {
    if (activeTab === 'category' && categoryChartRef.current) {
      if (categoryChartInstance.current) {
        categoryChartInstance.current.destroy();
      }
      categoryChartInstance.current = new Chart(categoryChartRef.current, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [
            {
              label: 'Organic Demand (Search Traffic)',
              data: [12, 19, 45, 60, 75, 120],
              borderColor: '#7C3AED',
              backgroundColor: 'rgba(124, 58, 237, 0.1)',
              fill: true,
              tension: 0.4
            },
            {
              label: 'Competitor Stature (Avg)',
              data: [80, 82, 81, 85, 83, 84],
              borderColor: '#0A0A0A',
              borderDash: [5, 5],
              fill: false,
              tension: 0
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { position: 'bottom' } }
        }
      });
    }

    if (activeTab === 'competitor' && competitorChartRef.current) {
      if (competitorChartInstance.current) {
        competitorChartInstance.current.destroy();
      }
      competitorChartInstance.current = new Chart(competitorChartRef.current, {
        type: 'bubble',
        data: {
          datasets: [
            { label: 'Dr. Srujana (Current)', data: [{ x: 40, y: 30, r: 15 }], backgroundColor: '#7C3AED' },
            { label: 'Zaha Clinic', data: [{ x: 80, y: 50, r: 25 }], backgroundColor: '#A78BFA' },
            { label: 'Pooja Reddy', data: [{ x: 60, y: 80, r: 20 }], backgroundColor: '#6B7280' },
            { label: 'National Benchmarks', data: [{ x: 90, y: 90, r: 10 }], backgroundColor: '#0A0A0A' }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: { title: { display: true, text: 'Clinical Depth / Educational Trust' }, min: 0, max: 100 },
            y: { title: { display: true, text: 'Market Stature / Digital Presence' }, min: 0, max: 100 }
          },
          plugins: {
            legend: { position: 'bottom' }
          }
        }
      });
    }

    return () => {
      if (categoryChartInstance.current) categoryChartInstance.current.destroy();
      if (competitorChartInstance.current) competitorChartInstance.current.destroy();
    };
  }, [activeTab]);

  const customStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600;700&display=swap');

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
        --mg-gradient-cta: linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%);
        --mg-font-display: 'Playfair Display', serif;
        --mg-font-body: 'DM Sans', sans-serif;
        --mg-noise: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
    }

    body {
        font-family: var(--mg-font-body);
        background: var(--mg-gradient-surface);
        color: var(--mg-black);
        overflow-x: hidden;
        scroll-behavior: smooth;
    }

    body::before {
        content: "";
        position: fixed;
        top: 0; left: 0; width: 100%; height: 100%;
        background-image: var(--mg-noise);
        pointer-events: none;
        z-index: 10;
    }

    .serif { font-family: var(--mg-font-display); }
    .hero-gradient { background: var(--mg-gradient-hero); }
    .insight-card { background: var(--mg-gradient-insight); border-left: 4px solid var(--mg-purple); }
    
    .tab-btn {
        position: relative;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        color: #6B7280;
    }
    .tab-btn.active { color: var(--mg-black); font-weight: 600; }
    .tab-btn.active::after {
        content: '';
        position: absolute;
        bottom: -2px; left: 0; width: 100%; height: 3px;
        background: var(--mg-purple);
    }

    .magsmen-card {
        background: white;
        border: 1px solid #E5E7EB;
        box-shadow: 0 2px 16px rgba(0, 0, 0, 0.04);
        transition: all 0.3s ease;
    }
    .magsmen-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 24px rgba(124, 58, 237, 0.12);
        border-color: rgba(124, 58, 237, 0.3);
    }

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in {
        animation: fadeIn 0.4s ease-out forwards;
    }

    @media print {
        .no-print { display: none; }
        .tab-content { display: block !important; }
        body { background: white; }
    }
  `;


  // Authentication / Registration state
const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
const [error, setError] = useState<string>('');
const [successMessage, setSuccessMessage] = useState<string>('');
const [isLoading, setIsLoading] = useState<boolean>(false);

    
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
   
    await emailjs.send(
      'service_9gmlg2q',
      'template_p0q050i',
      { email },
      '-ePIcI6qQCURx5hAM'
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
  return (
    <div className="antialiased min-h-screen flex flex-col relative">
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />

      {/* Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-600 z-[100] transition-all duration-150" 
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Header Section */}
      <header className="hero-gradient text-white py-12 px-8 md:px-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative z-20">
          <div>
            <img src={logo} alt="logo" className="h-12 mb-6"/>
            <h1 className="serif text-4xl md:text-5xl font-black mb-2">Dr. Srujana Adabala — Strategic Analysis</h1>
            <p className="text-purple-300 text-sm tracking-widest uppercase font-medium">Healthcare Stature Positioning | Hyderabad Market</p>
          </div>
          <div className="text-left md:text-right">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Prepared for</p>
            <p className="serif text-xl font-bold mb-4">Clinic Leadership Team</p>
            <p className="text-xs text-purple-200">APRIL 2024</p>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-gray-200 z-50 overflow-x-auto no-print">
        <div className="max-w-7xl mx-auto flex justify-between px-8">
          <div className="flex items-center gap-8 h-[56px] whitespace-nowrap">
            {[
              { id: 'overview', label: 'EXECUTIVE OVERVIEW' },
              { id: 'category', label: 'CATEGORY DEEP DIVE' },
              { id: 'demand', label: 'DEMAND LANDSCAPE' },
              { id: 'competitor', label: 'COMPETITIVE MAP' },
              { id: 'opportunity', label: 'STRATEGIC OPPORTUNITY', hasIcon: true },
            //   { id: 'magsmen', label: 'ABOUT MAGSMEN' },
            ].map((tab) => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id)} 
                className={`tab-btn text-sm h-full px-2 ${tab.hasIcon ? 'flex items-center gap-1' : ''} ${activeTab === tab.id ? 'active' : ''}`}
              >
                {tab.label}
                {tab.hasIcon && <span className="text-purple-600 text-[10px]">◆</span>}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 md:px-8 py-12 relative z-20 flex-grow w-full">

        {/* Tab 1: Executive Overview */}
        {activeTab === 'overview' && (
          <section className="space-y-12 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-[#110C1D] p-6 rounded-xl border border-purple-900/30">
                <p className="text-purple-400 text-[10px] font-bold tracking-widest uppercase mb-1">Market Reach</p>
                <h3 className="text-3xl font-black text-white">{reachCount}+</h3>
                <p className="text-green-400 text-[10px] mt-2 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> Emerging Presence
                </p>
              </div>
              <div className="bg-[#110C1D] p-6 rounded-xl border border-purple-900/30">
                <p className="text-purple-400 text-[10px] font-bold tracking-widest uppercase mb-1">Clinic Tenure</p>
                <h3 className="text-3xl font-black text-white">EST. 2023</h3>
                <p className="text-gray-400 text-[10px] mt-2 italic">Hyper-growth Phase</p>
              </div>
              <div className="bg-[#110C1D] p-6 rounded-xl border border-purple-900/30">
                <p className="text-purple-400 text-[10px] font-bold tracking-widest uppercase mb-1">Social Proof Gap</p>
                <h3 className="text-3xl font-black text-white">-82%</h3>
                <p className="text-red-400 text-[10px] mt-2">Vs. Market Leaders</p>
              </div>
              <div className="bg-[#110C1D] p-6 rounded-xl border border-purple-900/30">
                <p className="text-purple-400 text-[10px] font-bold tracking-widest uppercase mb-1">Clinical Value</p>
                <h3 className="text-3xl font-black text-white">PREMIUM</h3>
                <p className="text-purple-400 text-[10px] mt-2">Target Positioning</p>
              </div>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-600 p-8 rounded-r-xl">
              <h4 className="text-purple-900 font-black text-xs tracking-widest uppercase mb-4">The Strategic Thesis</h4>
              <p className="serif text-2xl md:text-3xl text-gray-900 leading-tight">
                "Dr. Srujana's brand must shift from providing <span className="text-purple-600">Dermatological Services</span> to owning the <span className="text-purple-600 italic">Root-Cause Narrative</span>. In a market crowded with procedure-pushers, the authority belongs to the one who explains the 'Why' before the 'What'."
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="insight-card p-8 rounded-xl text-white">
                <h5 className="text-purple-400 font-bold uppercase tracking-tighter text-sm mb-4">The Perception Gap</h5>
                <p className="text-lg font-medium mb-3">Patients see high clinical trust but low social stature.</p>
                <p className="text-gray-400 text-sm italic">Implication: High-value patients (HVP) are choosing inferior doctors with better digital packaging. We are losing the conversion battle at the research stage.</p>
              </div>
              <div className="insight-card p-8 rounded-xl text-white">
                <h5 className="text-purple-400 font-bold uppercase tracking-tighter text-sm mb-4">Procedural Fatigue</h5>
                <p className="text-lg font-medium mb-3">The market is saturated with "offers" and "packages."</p>
                <p className="text-gray-400 text-sm italic">Implication: Deep differentiation lies in the 'Mind-Body-Skin' axis. By claiming this intellectual space, Dr. Srujana exits the price war entirely.</p>
              </div>
            </div>
          </section>
        )}

        {/* Tab 2: Category Deep Dive */}
        {activeTab === 'category' && (
          <section className="space-y-12 animate-fade-in">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="serif text-xl font-bold mb-6">Market Share vs. Perception Stature</h3>
                <div className="h-[350px]">
                  <canvas ref={categoryChartRef}></canvas>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="bg-gray-900 text-white p-6 rounded-xl">
                  <h4 className="text-purple-400 font-bold text-xs mb-2 uppercase">Positioning Note</h4>
                  <p className="text-sm">The "Holistic Root-Cause" lane is currently at 0% saturation in Hyderabad. National players like Dr. Rashmi Shetty own this in Mumbai, but the regional throne is vacant.</p>
                </div>
                <div className="bg-purple-600 text-white p-6 rounded-xl">
                  <h4 className="text-white/80 font-bold text-xs mb-2 uppercase">The Shift</h4>
                  <p className="text-lg serif font-bold">From: Service Provider</p>
                  <ArrowDown className="w-4 h-4 my-2" />
                  <p className="text-lg serif font-bold">To: Intellectual Authority</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Tab 3: Demand Landscape */}
        {activeTab === 'demand' && (
          <section className="space-y-12 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="magsmen-card rounded-xl overflow-hidden flex flex-col">
                <div className="bg-[#1A1A1A] p-4 text-white">
                  <p className="text-purple-400 text-[10px] font-bold uppercase tracking-widest">Persona A</p>
                  <h4 className="serif text-lg">The Skeptical High-Net-Worth</h4>
                </div>
                <div className="p-6 flex-grow bg-white">
                  <p className="text-xs text-gray-500 mb-4 font-medium uppercase">Behavioral Trigger</p>
                  <p className="text-sm mb-6">Tried 3+ generic dermatologists. Tired of short-term fixes. Values clinical depth over clinic decor.</p>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="text-[10px] font-bold text-purple-700 uppercase mb-1">Demand Gap</p>
                    <p className="text-xs italic">Wants to know the 'Why' behind the acne/hairfall.</p>
                  </div>
                </div>
              </div>
              <div className="magsmen-card rounded-xl overflow-hidden flex flex-col">
                <div className="bg-[#1A1A1A] p-4 text-white">
                  <p className="text-purple-400 text-[10px] font-bold uppercase tracking-widest">Persona B</p>
                  <h4 className="serif text-lg">The Preventive Millennial</h4>
                </div>
                <div className="p-6 flex-grow bg-white">
                  <p className="text-xs text-gray-500 mb-4 font-medium uppercase">Behavioral Trigger</p>
                  <p className="text-sm mb-6">Invested in wellness, supplements, and gut health. Follows national experts online.</p>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="text-[10px] font-bold text-purple-700 uppercase mb-1">Demand Gap</p>
                    <p className="text-xs italic">Needs a local doctor who speaks 'Lifestyle Medicine'.</p>
                  </div>
                </div>
              </div>
              <div className="magsmen-card rounded-xl overflow-hidden flex flex-col">
                <div className="bg-[#1A1A1A] p-4 text-white">
                  <p className="text-purple-400 text-[10px] font-bold uppercase tracking-widest">Persona C</p>
                  <h4 className="serif text-lg">The Event-Driven Patient</h4>
                </div>
                <div className="p-6 flex-grow bg-white">
                  <p className="text-xs text-gray-500 mb-4 font-medium uppercase">Behavioral Trigger</p>
                  <p className="text-sm mb-6">Weddings/Portfolios. High urgency. Needs immediate visual results + long-term trust.</p>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="text-[10px] font-bold text-purple-700 uppercase mb-1">Demand Gap</p>
                    <p className="text-xs italic">Needs 'Treatment Transparency' to reduce fear.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Tab 4: Competitive Map */}
        {activeTab === 'competitor' && (
          <section className="space-y-12 animate-fade-in">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                  <h3 className="serif text-2xl font-bold">The White Space Map</h3>
                  <p className="text-sm text-gray-500">Mapping clinical depth against approachability.</p>
                </div>
                <div className="bg-purple-50 px-4 py-2 rounded-full text-xs font-bold text-purple-700 flex items-center gap-2">
                  <Zap className="w-3 h-3" /> DR. SRUJANA'S TARGET: TOP RIGHT QUADRANT
                </div>
              </div>
              <div className="h-[450px]">
                <canvas ref={competitorChartRef}></canvas>
              </div>
            </div>
          </section>
        )}

        {/* Tab 5: Strategic Opportunity */}
        {activeTab === 'opportunity' && (
          <section className="space-y-12 animate-fade-in">
            <div className="bg-gradient-to-br from-[#EDE9FE] to-[#C4B5FD] p-12 rounded-3xl text-center">
              <h3 className="text-xs font-black tracking-[0.3em] text-purple-800 uppercase mb-4">The Magsmen Recommendation</h3>
              <p className="serif text-3xl md:text-5xl text-gray-900 leading-tight mb-8">
                Claim the <span className="underline decoration-purple-500 underline-offset-8 font-black">"Mind-Body-Skin"</span> Axis
              </p>
              <div className="max-w-2xl mx-auto bg-white/60 backdrop-blur p-6 rounded-2xl border border-white">
                <p className="text-lg font-medium text-purple-900">
                  "For the discerning Hyderabad resident, Dr. Srujana is the <strong>Skin Authority</strong> who uncovers the <strong>biochemical story</strong> of your skin, ensuring transformations that last because they are rooted in science, not just procedures."
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#1A1A1A] p-8 rounded-2xl text-white">
                <div className="h-1 w-12 bg-purple-600 mb-6"></div>
                <h4 className="serif text-xl mb-4">90 Days: Reset</h4>
                <ul className="text-sm space-y-4 text-gray-400">
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" /> Launch "Root-Cause" Reel Series.</li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" /> High-stature profile photoshoot.</li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" /> Implement "Journey Story" posts.</li>
                </ul>
              </div>
              <div className="bg-[#1E1037] p-8 rounded-2xl text-white border-b-4 border-purple-500">
                <div className="h-1 w-12 bg-purple-400 mb-6"></div>
                <h4 className="serif text-xl mb-4">180 Days: Reach</h4>
                <ul className="text-sm space-y-4 text-purple-100">
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-purple-300 mt-1 flex-shrink-0" /> Strategic PR in TOI/Deccan Chronicle.</li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-purple-300 mt-1 flex-shrink-0" /> Corporate Wellness Panels in HITEC City.</li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-purple-300 mt-1 flex-shrink-0" /> Launch YouTube "Deep Dive" cases.</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-600 to-indigo-800 p-8 rounded-2xl text-white shadow-xl">
                <div className="h-1 w-12 bg-white mb-6"></div>
                <h4 className="serif text-xl mb-4">365 Days: Reign</h4>
                <ul className="text-sm space-y-4 text-purple-50">
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-white mt-1 flex-shrink-0" /> Own the "Skin-Health Summit" locally.</li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-white mt-1 flex-shrink-0" /> Peer-Referral Network (GP/Gynac).</li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-white mt-1 flex-shrink-0" /> Top-tier Stature across South India.</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* Tab 6: About Magsmen */}
        {activeTab === 'magsmen' && (
          <section className="space-y-12 animate-fade-in">
            <div className="hero-gradient text-white p-12 rounded-3xl relative overflow-hidden">
              <div className="relative z-20">
                <h3 className="serif text-4xl mb-6 italic">"We don't just build brands. We build brands that perform."</h3>
                <p className="max-w-3xl text-purple-200 text-lg mb-8 leading-relaxed">
                  Magsmen is a strategic brand consulting firm that identifies the real issues limiting brand performance, clarifies the position a business can own, and designs the strategic frameworks that unlock measurable growth.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div>
                    <p className="text-3xl font-black text-white">{viewCount}M+</p>
                    <p className="text-[10px] text-purple-300 uppercase tracking-widest font-bold">InTalks Viewership</p>
                  </div>
                  <div>
                    <p className="text-3xl font-black text-white">4.9/5</p>
                    <p className="text-[10px] text-purple-300 uppercase tracking-widest font-bold">Google Rating</p>
                  </div>
                  <div>
                    <p className="text-3xl font-black text-white">16+</p>
                    <p className="text-[10px] text-purple-300 uppercase tracking-widest font-bold">Industries</p>
                  </div>
                  <div>
                    <p className="text-3xl font-black text-white">100%</p>
                    <p className="text-[10px] text-purple-300 uppercase tracking-widest font-bold">Clarity Guaranteed</p>
                  </div>
                </div>
              </div>
              <div className="absolute right-[-50px] top-[-50px] w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                <Phone className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                <h4 className="font-bold mb-2">Connect</h4>
                <p className="text-sm text-gray-500">+91 90449 10449</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                <Globe className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                <h4 className="font-bold mb-2">Explore</h4>
                <p className="text-sm text-gray-500">www.magsmen.com</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                <MapPin className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                <h4 className="font-bold mb-2">Presence</h4>
                <p className="text-sm text-gray-500">Hyderabad | Guntur | Australia</p>
              </div>
            </div>
            
            <div className="text-center">
              <h4 className="serif text-2xl mb-8">Ready to evolve your brand?</h4>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-[#7C3AED] hover:bg-[#5B21B6] text-white px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105">Schedule a Call</button>
                <button className="border border-[#7C3AED] text-[#7C3AED] hover:bg-purple-50 px-8 py-3 rounded-full font-bold transition-all">Take the Brand Audit</button>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-[#0A0A0A] text-white py-16 px-8 mt-12 relative overflow-hidden mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 relative z-20">
          <div>
            <img src={logo} alt="logo" className="h-12" />
            <p className="text-xs text-gray-500 max-w-sm">Magsmen is a registered trademark. A division of Grofessors Innovations Pvt Ltd. All rights reserved &copy; 2024.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h5 className="text-[10px] text-purple-400 font-black uppercase mb-4 tracking-widest">OFFICES</h5>
              <p className="text-xs text-gray-400">Madhapur, Hyderabad</p>
              <p className="text-xs text-gray-400 mt-2">Brodipet, Guntur</p>
              <p className="text-xs text-gray-400 mt-2">Rowville, Australia</p>
            </div>
            <div>
              <h5 className="text-[10px] text-purple-400 font-black uppercase mb-4 tracking-widest">ECOSYSTEM</h5>
              <p className="text-xs text-gray-400">MIBBS AI</p>
              <p className="text-xs text-gray-400 mt-2">InTalks Podcast</p>
              <p className="text-xs text-gray-400 mt-2">SanStrategies</p>
            </div>
            <div className="md:col-span-1 col-span-2">
              <h5 className="text-[10px] text-purple-400 font-black uppercase mb-4 tracking-widest">SOCIAL</h5>
              <p className="text-xs text-gray-400">@magsmenindia</p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between text-[10px] text-gray-600 uppercase tracking-widest">
          <p>CONFIDENTIAL — Prepared for Clinic Leadership Team</p>
          <p>When clarity leads, brands win.</p>
        </div>
      </footer>
    </div>
  );
}