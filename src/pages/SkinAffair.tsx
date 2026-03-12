/* eslint-disable react/prop-types */
import React, { useState, useEffect, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { 
  Hexagon, 
  Layers, 
  Building2, 
  TrendingUp, 
  Compass, 
  Menu, 
  X, 
  Target, 
  Rocket, 
  PenTool, 
  Scale, 
  Armchair, 
  UserCheck, 
  ShieldCheck, 
  ChevronRight, 
  Star, 
  Clock,
  AlertCircle,
  LayoutDashboard,
  Loader2,
  Mail
} from 'lucide-react';



interface UserData {
  email: string;
}


// --- STYLES INJECTION ---
// Injecting custom CSS variables and animations to mimic the original setup.
const customStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');

  body {
    background-color: #050505;
    color: #c9d1d9;
    overflow: hidden;
  }

  .font-sans { font-family: 'Inter', sans-serif; }
  .font-display { font-family: 'Urbanist', sans-serif; }

  ::-webkit-scrollbar { width: 6px; height: 6px; }
  ::-webkit-scrollbar-track { background: #050505; }
  ::-webkit-scrollbar-thumb { background: #30363d; border-radius: 4px; }
  ::-webkit-scrollbar-thumb:hover { background: #d4af37; }

  .dashboard-card {
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    position: relative;
  }
  
  .dashboard-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    background: radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(212, 175, 55, 0.06), transparent 40%);
    opacity: 0;
    transition: opacity 0.4s;
    pointer-events: none;
    z-index: 0;
    border-radius: inherit;
  }

  @media (hover: hover) {
    .dashboard-card:hover {
      transform: translateY(-4px);
      border-color: #d4af37;
      box-shadow: 0 10px 30px -10px rgba(212, 175, 55, 0.15);
    }
    .dashboard-card:hover::before {
      opacity: 1;
    }
  }

  .interactive-li {
    transition: all 0.2s ease;
    position: relative;
    padding-left: 28px;
  }
  .interactive-li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 6px;
    height: 6px;
    background-color: #30363d;
    border-radius: 50%;
    transition: all 0.3s ease;
  }
  
  @media (hover: hover) {
    .interactive-li:hover {
      color: #ffffff;
      transform: translateX(4px);
    }
    .interactive-li:hover::before {
      background-color: #d4af37;
      box-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
    }
  }

  @keyframes fadeInUp {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in-up {
    animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
  }
  .animate-float {
    animation: float 4s ease-in-out infinite;
  }

  @keyframes pulseSlow {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.7; transform: scale(0.95); }
  }
  .animate-pulse-slow {
    animation: pulseSlow 3s ease-in-out infinite;
  }

  @keyframes spinSlow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  .animate-spin-slow {
    animation: spinSlow 8s linear infinite;
  }

  @media (hover: hover) {
    .dashboard-card:hover .trigger-float { animation: float 2s ease-in-out infinite; }
    .dashboard-card:hover .trigger-spin { animation: spinSlow 4s linear infinite; }
    .dashboard-card:hover .trigger-pulse { animation: pulseSlow 1.5s ease-in-out infinite; }
  }

  .glass-overlay {
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
  }
`;

// --- DATA ---
const sectionMeta = {
  phase1: {
    badge: 'Phase 1',
    title: 'The Core Architecture',
    desc: 'Establishing the fundamental business strategy, market positioning, and experiential rollout strategy.'
  },
  phase2: {
    badge: 'Phase 2',
    title: 'The Structure',
    desc: 'Translating strategic positioning into a cohesive premium visual identity and securing legal brand readiness.'
  },
  phase3: {
    badge: 'Phase 3',
    title: 'Complete Brand',
    desc: 'Manifesting the brand promise through physical space alignment and executive founder branding.'
  },
  commercials: {
    badge: 'Commercials',
    title: 'Investment Overview',
    desc: 'Transparent, tiered commercial architecture based on the exact depth of strategic execution required.'
  }
};

// --- COMPONENTS ---
const DashboardCard = ({ children }: { children: React.ReactNode }) => {
  const handleMouseMove = (e: { currentTarget: { getBoundingClientRect: () => any; style: { setProperty: (arg0: string, arg1: string) => void; }; }; clientX: number; clientY: number; }) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div 
      className="dashboard-card bg-[#161b22] border border-[#30363d] rounded-xl p-6 lg:p-8 z-10"
      onMouseMove={handleMouseMove}
    >
      {children}
    </div>
  );
};

const InteractiveLi = ({ title, subtitle = '', isGold = false }: { title: string; subtitle?: string; isGold?: boolean }) => (
  <li className="interactive-li text-sm lg:text-base">
    <span className={isGold ? "text-[#d4af37]" : "text-white"}>{title}</span>
    {subtitle && (
      <span className="text-[#8b949e] text-[13px] lg:text-sm font-normal block mt-1">
        {subtitle}
      </span>
    )}
  </li>
);

const NavItem = ({ id, icon: Icon, label, activeTab, onClick, className }: { id: string; icon: React.ComponentType<any>; label: string; activeTab: string; onClick: (id: string) => void; className?: string }) => {
  const isActive = activeTab === id;
  return (
    <button
      onClick={() => onClick(id)}
      className={`w-full flex items-center gap-4 px-4 py-3 md:py-4 lg:py-3 rounded-lg transition-all text-left font-medium ${
        isActive 
          ? 'bg-[#161b22] border-r-[3px] border-[#d4af37] text-white' 
          : 'text-[#c9d1d9] hover:bg-[#161b22] hover:text-white'
      } ${className || ''}`}
    >
      <Icon className={`w-5 h-5 transition-colors ${isActive ? 'text-[#d4af37]' : 'text-[#8b949e]'}`} />
      <span>{label}</span>
    </button>
  );
};


export default function SkinAffair() {
  const [activeTab, setActiveTab] = useState('phase1');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
      const [isLoggedIn, setIsLoggedIn] = useState(false);
      const [error, setError] = useState('');
      const [isLoading, setIsLoading] = useState(false);
      const [successMessage, setSuccessMessage] = useState('');

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleTabSwitch = (id: React.SetStateAction<string>) => {
    setActiveTab(id);
    if (window.innerWidth < 1024 && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  // Provide a safe fallback to prevent object indexing errors
  const currentMeta = sectionMeta[activeTab as keyof typeof sectionMeta] || sectionMeta['phase1'];



    // ================= USER STORAGE LOGIC =================

  const getUsers = (): UserData[] => {
    return JSON.parse(localStorage.getItem('registeredUsers') || '[]');
  };

  const saveUserToLocalStorage = (user: UserData): void => {
    const users = getUsers();
    users.push(user);
    localStorage.setItem('registeredUsers', JSON.stringify(users));
  };

  const findUserByEmail = (email: string): UserData | undefined => {
    const users = getUsers();
    return users.find((u) => u.email === email);
  };

  // ================= LOGIN LOGIC (EMAIL ONLY) =================

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

    const existingUser = findUserByEmail(email);

    // ================= EXISTING USER =================
    if (existingUser) {
      setSuccessMessage('👋 Welcome back!');
      setTimeout(() => setIsLoggedIn(true), 800);
      setIsLoading(false);
      return;
    }

    // ================= NEW USER =================
    try {

      await emailjs.send(
        'service_ztfkvtu',
        'template_zhvk3r4',
        { email },
        'lGEySRjC5bz4G2JLr'
      );

      saveUserToLocalStorage({ email });

      setSuccessMessage('✅ Registered successfully!');
      setTimeout(() => setIsLoggedIn(true), 1000);

    } catch (err) {
      console.error(err);
      setError('⚠️ Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };



 // ================= LOGIN SCREEN =================

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6 font-sans md:pt-28">
        <div className="w-full max-w-md bg-white rounded-[2rem] shadow-xl p-10 border border-slate-200">

          <div className="flex flex-col items-center mb-8">
            <div className="p-4 bg-slate-100 rounded-2xl mb-4 text-[#1E293B]">
              <LayoutDashboard className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-black text-[#1E293B] uppercase tracking-tight text-center">
              Strategic Dashboard
            </h1>
            <p className="text-slate-500 text-sm mt-2 font-medium text-center">
              Enter your details to access the platform
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">

            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-[11px] font-black text-slate-400 uppercase tracking-wider pl-1">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400">
                  <Mail className="w-5 h-5" />
                </div>
                <input 
                  type="email" 
                  name="email"
                  required 
                  className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E293B]/20 focus:border-[#1E293B] font-semibold"
                  placeholder="example@email.com"
                />
              </div>
            </div>

            {/* Password Field */}
{/* <div className="space-y-2">
  <label className="text-[11px] font-black text-slate-400 uppercase tracking-wider pl-1">
    Password
  </label>

  <div className="relative">
    
   
    <div className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400">
      <Lock className="w-5 h-5" />
    </div>


    <input 
      type={showPassword ? "text" : "password"}
      name="password"
      required 
      className="w-full pl-12 pr-12 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E293B]/20 focus:border-[#1E293B] font-semibold"
      placeholder="Enter password"
    />

    <div 
      className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer text-slate-400 hover:text-slate-600"
      onClick={() => setShowPassword(!showPassword)}
    >
      {showPassword ? (
        <EyeOff className="w-5 h-5" />
      ) : (
        <Eye className="w-5 h-5" />
      )}
    </div>

  </div>
</div> */}

            {error && (
              <div className="flex items-center gap-2 text-red-500 bg-red-50 p-3 rounded-xl border border-red-100">
                <AlertCircle className="w-4 h-4" />
                <p className="text-[12px] font-bold">{error}</p>
              </div>
            )}

            {successMessage && (
              <div className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-xl border border-green-200">
                <p className="text-[12px] font-bold">{successMessage}</p>
              </div>
            )}

            <button 
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#1E293B] text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <span>Access Dashboard</span>
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
    <div className="flex flex-col lg:flex-row h-screen font-sans antialiased text-[#c9d1d9] bg-[#050505]">
      <style>{customStyles}</style>

      {/* Mobile Header */}
      <header className="lg:hidden bg-[#0d1117] border-b border-[#30363d] px-6 py-4 flex items-center justify-between z-30 shadow-md">
        <h1 className="font-display font-bold text-xl text-white tracking-tight flex items-center gap-2">
          <Compass className="text-[#d4af37] w-6 h-6" />
          MAGSMEN
        </h1>
        <button 
          onClick={toggleMobileMenu} 
          className="text-[#c9d1d9] hover:text-white transition-colors focus:outline-none p-1"
        >
          <Menu className="w-6 h-6" />
        </button>
      </header>

      {/* Mobile Overlay */}
      <div 
        onClick={toggleMobileMenu} 
        className={`fixed inset-0 bg-black/60 glass-overlay z-40 transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 block' : 'opacity-0 hidden'
        }`}
      />

      {/* Sidebar Navigation */}
      <aside className={`fixed lg:static inset-y-0 left-0 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out w-72 bg-[#0d1117] border-r border-[#30363d] flex flex-col z-50 shadow-2xl h-full`}>
        <div className="p-8 pb-4 flex justify-between items-center">
          <div>
            <h1 className="font-display font-bold text-2xl text-white tracking-tight flex items-center gap-3">
              <Compass className="text-[#d4af37] w-8 h-8 animate-pulse-slow" />
              MAGSMEN
            </h1>
            <p className="text-xs tracking-[0.2em] text-[#8b949e] uppercase mt-2">Brand Creation</p>
          </div>
          <button onClick={toggleMobileMenu} className="lg:hidden text-[#8b949e] hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          <p className="px-4 text-xs font-semibold text-[#8b949e] uppercase tracking-wider mb-4">Architecture Phases</p>
          
          <NavItem id="phase1" icon={Hexagon} label="Phase 1: The Core" activeTab={activeTab} onClick={handleTabSwitch} />
          <NavItem id="phase2" icon={Layers} label="Phase 2: The Structure" activeTab={activeTab} onClick={handleTabSwitch} />
          <NavItem id="phase3" icon={Building2} label="Phase 3: Complete Brand" activeTab={activeTab} onClick={handleTabSwitch} />

          <div className="my-6 border-t border-[#30363d] mx-4"></div>
          
          <p className="px-4 text-xs font-semibold text-[#8b949e] uppercase tracking-wider mb-4">Commercials</p>
          <NavItem id="commercials" icon={TrendingUp} label="Investment Overview" activeTab={activeTab} onClick={handleTabSwitch} />
        </nav>

        <div className="p-6 border-t border-[#30363d] bg-[#050505]/50">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-sm font-medium text-[#8b949e]">System Active</span>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 bg-[#050505] relative overflow-y-auto" id="main-scroll">
        <div className="absolute top-0 right-0 w-full lg:w-3/4 h-1/2 lg:h-3/4 bg-[#d4af37] opacity-[0.02] blur-[80px] lg:blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-6xl mx-auto p-6 md:p-10 lg:p-16">
          
          {/* Dynamic Header */}
          <header className="mb-10 lg:mb-12 border-b border-[#30363d] pb-6 lg:pb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="animate-fade-in-up" key={`header-${activeTab}`}>
              <div className="flex flex-wrap items-center gap-3 lg:gap-4 mb-4 lg:mb-3">
                <span className="px-3 py-1 text-[10px] lg:text-xs font-bold uppercase tracking-widest bg-[#0d1117] text-[#8b949e] rounded-full border border-[#30363d]">
                  {currentMeta.badge}
                </span>
                <span className="px-3 py-1 text-[10px] lg:text-xs font-bold uppercase tracking-widest bg-[#d4af37]/10 text-[#d4af37] rounded-full border border-[#d4af37]/20 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 hidden sm:inline-block" /> 45 Days Timeline
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 lg:mb-4 leading-tight">
                {currentMeta.title}
              </h2>
              <p className="text-lg lg:text-xl text-[#8b949e] font-light max-w-3xl">
                {currentMeta.desc}
              </p>
            </div>
          </header>

          {/* Key prop ensures the wrapper remounts and re-triggers the CSS fade-in animation */}
          <section key={`content-${activeTab}`} className="animate-fade-in-up">
            
            {/* PHASE 1 */}
            {activeTab === 'phase1' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                <DashboardCard>
                  <div className="flex items-start justify-between mb-6 lg:mb-8">
                    <h3 className="font-display text-xl lg:text-2xl font-semibold text-white">Strategy & Positioning</h3>
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#0d1117] border border-[#30363d] flex items-center justify-center flex-shrink-0">
                      <Target className="w-5 h-5 lg:w-6 lg:h-6 text-[#d4af37] trigger-pulse" />
                    </div>
                  </div>
                  <p className="text-[#8b949e] text-sm mb-6">Defining the fundamental "why" and "where" of the brand to ensure a precise, authoritative market entry.</p>
                  <ul className="space-y-4 font-medium text-[#c9d1d9]">
                    <InteractiveLi title="Brand Name" subtitle="Nomenclature and identity logic" />
                    <InteractiveLi title="Brand Positioning" subtitle="Market stance and competitive differentiation" />
                    <InteractiveLi title="Brand Communication" subtitle="Messaging framework and verbal identity" />
                  </ul>
                </DashboardCard>

                <DashboardCard>
                  <div className="flex items-start justify-between mb-6 lg:mb-8">
                    <h3 className="font-display text-xl lg:text-2xl font-semibold text-white">Experience & Activation</h3>
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#0d1117] border border-[#30363d] flex items-center justify-center flex-shrink-0">
                      <Rocket className="w-5 h-5 lg:w-6 lg:h-6 text-[#d4af37] trigger-float" />
                    </div>
                  </div>
                  <p className="text-[#8b949e] text-sm mb-6">Structuring how the brand behaves, goes to market, and aligns its internal culture.</p>
                  <ul className="space-y-4 font-medium text-[#c9d1d9]">
                    <InteractiveLi title="Brand Experience" subtitle="Customer touchpoint mapping and delivery" />
                    <InteractiveLi title="Brand Launch Strategy" subtitle="Comprehensive go-to-market rollout plan" />
                    <InteractiveLi title="Brand Training" subtitle="Internal culture alignment and staff readiness" />
                  </ul>
                </DashboardCard>
              </div>
            )}

            {/* PHASE 2 */}
            {activeTab === 'phase2' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                <DashboardCard>
                  <div className="flex items-start justify-between mb-6 lg:mb-8">
                    <h3 className="font-display text-xl lg:text-2xl font-semibold text-white">Visual Identity</h3>
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#0d1117] border border-[#30363d] flex items-center justify-center flex-shrink-0">
                      <PenTool className="w-5 h-5 lg:w-6 lg:h-6 text-[#d4af37] trigger-spin" />
                    </div>
                  </div>
                  <p className="text-[#8b949e] text-sm mb-6">Translating the strategic core into a compelling, premium visual architecture.</p>
                  <ul className="space-y-4 font-medium text-[#c9d1d9]">
                    <InteractiveLi title="Design (Brand Identity)" subtitle="Logo, typography, color palettes, and visual system" />
                    <InteractiveLi title="Visual Guidelines" subtitle="Comprehensive brand rulebook for design execution" />
                  </ul>
                </DashboardCard>

                <DashboardCard>
                  <div className="flex items-start justify-between mb-6 lg:mb-8">
                    <h3 className="font-display text-xl lg:text-2xl font-semibold text-white">Legal Architecture</h3>
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#0d1117] border border-[#30363d] flex items-center justify-center flex-shrink-0">
                      <Scale className="w-5 h-5 lg:w-6 lg:h-6 text-[#d4af37] trigger-float" />
                    </div>
                  </div>
                  <p className="text-[#8b949e] text-sm mb-6">Ensuring the brand is protected, compliant, and structurally secure for the long term.</p>
                  <ul className="space-y-4 font-medium text-[#c9d1d9]">
                    <InteractiveLi title="Legal Readiness" subtitle="Brand IP and trademark viability consultation" />
                    <InteractiveLi title="Compliance Strategy" subtitle="Ensuring brand standards meet industry regulations" />
                  </ul>
                </DashboardCard>
              </div>
            )}

            {/* PHASE 3 */}
            {activeTab === 'phase3' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                <DashboardCard>
                  <div className="flex items-start justify-between mb-6 lg:mb-8">
                    <h3 className="font-display text-xl lg:text-2xl font-semibold text-white">Spatial Integration</h3>
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#0d1117] border border-[#30363d] flex items-center justify-center flex-shrink-0">
                      <Armchair className="w-5 h-5 lg:w-6 lg:h-6 text-[#d4af37] trigger-float" />
                    </div>
                  </div>
                  <p className="text-[#8b949e] text-sm mb-6">Aligning the physical environment with the premium brand strategy.</p>
                  <ul className="space-y-4 font-medium text-[#c9d1d9]">
                    <InteractiveLi title="Interior Designer Collaboration" isGold={true} />
                    <InteractiveLi title="Sourcing & onboarding of specialized interior partners" />
                    <InteractiveLi title="Strategic consultation to ensure physical spaces reflect brand positioning" />
                  </ul>
                </DashboardCard>

                <DashboardCard>
                  <div className="flex items-start justify-between mb-6 lg:mb-8">
                    <h3 className="font-display text-xl lg:text-2xl font-semibold text-white">Executive Presence</h3>
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#0d1117] border border-[#30363d] flex items-center justify-center flex-shrink-0">
                      <UserCheck className="w-5 h-5 lg:w-6 lg:h-6 text-[#d4af37] trigger-pulse" />
                    </div>
                  </div>
                  <p className="text-[#8b949e] text-sm mb-6">Elevating the leadership behind the business to drive trust and authority.</p>
                  <ul className="space-y-4 font-medium text-[#c9d1d9]">
                    <InteractiveLi title="Personal Branding to Founder" isGold={true} />
                    <InteractiveLi title="Leadership positioning and PR strategy mapping" />
                    <InteractiveLi title="Aligning founder narrative with corporate brand messaging" />
                  </ul>
                </DashboardCard>
              </div>
            )}

            {/* COMMERCIALS */}
            {activeTab === 'commercials' && (
              <div className="bg-[#161b22] border border-[#30363d] rounded-2xl overflow-hidden shadow-2xl relative z-10">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-50"></div>
                
                <div className="p-6 md:p-8 lg:p-12">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                    <div className="flex items-center gap-4">
                      <ShieldCheck className="w-8 h-8 lg:w-10 lg:h-10 text-[#d4af37]" />
                      <div>
                        <h3 className="font-display text-2xl lg:text-3xl font-bold text-white">Investment Overview</h3>
                        <p className="text-[#8b949e] text-sm lg:text-base mt-1">Structured pricing based on scope depth.</p>
                      </div>
                    </div>
                    <div className="bg-[#0d1117] border border-[#30363d] px-5 py-3 rounded-lg text-center flex flex-col justify-center">
                      <span className="text-[10px] lg:text-xs font-semibold text-[#8b949e] uppercase tracking-widest mb-1">Project Timeline</span>
                      <span className="font-display text-xl lg:text-2xl font-bold text-[#d4af37]">45 Days</span>
                    </div>
                  </div>

                  <div className="-mx-6 md:mx-0 overflow-x-auto pb-4 md:pb-0">
                    <table className="w-full text-left border-collapse min-w-[600px] md:min-w-full">
                      <thead>
                        <tr>
                          <th className="py-4 px-6 bg-[#0d1117] text-[#d4af37] font-display font-semibold text-sm lg:text-base uppercase tracking-wider border-y md:border-t-0 md:border-b border-[#30363d] md:rounded-tl-lg">Proposal Inclusion Tier</th>
                          <th className="py-4 px-6 bg-[#0d1117] text-[#d4af37] font-display font-semibold text-sm lg:text-base uppercase tracking-wider border-y md:border-t-0 md:border-b border-[#30363d] md:rounded-tr-lg text-right w-32 md:w-48">Investment</th>
                        </tr>
                      </thead>
                      <tbody className="text-[#c9d1d9] font-medium divide-y divide-[#30363d]">
                        
                        <tr className="hover:bg-[#0d1117]/50 transition-colors group">
                          <td className="py-5 lg:py-6 px-6">
                            <div className="flex items-start gap-3">
                              <ChevronRight className="w-5 h-5 text-[#8b949e] group-hover:text-[#d4af37] transition-colors mt-0.5" />
                              <div>
                                <span className="text-white font-semibold text-base lg:text-lg">The Core</span>
                                <p className="text-xs lg:text-sm text-[#8b949e] mt-1 lg:mt-2 leading-relaxed">Brand Name, Brand Experience, Brand Positioning, Brand Launch Strategy, Brand Communication, Brand Training.</p>
                              </div>
                            </div>
                          </td>
                          <td className="py-5 lg:py-6 px-6 text-right font-display text-xl lg:text-2xl text-white align-top pt-6 lg:pt-8 whitespace-nowrap">3 Lakhs</td>
                        </tr>

                        <tr className="hover:bg-[#0d1117]/50 transition-colors group">
                          <td className="py-5 lg:py-6 px-6">
                            <div className="flex items-start gap-3">
                              <ChevronRight className="w-5 h-5 text-[#8b949e] group-hover:text-[#d4af37] transition-colors mt-0.5" />
                              <div>
                                <span className="text-white font-semibold text-base lg:text-lg">The Structure</span>
                                <p className="text-xs lg:text-sm text-[#8b949e] mt-1 lg:mt-2 leading-relaxed">
                                  All deliverables from the 3 Lakh scope <br />
                                  <span className="text-white mt-1 block">+ Design (Brand Identity)</span> 
                                  <span className="text-white block">+ Legal consultation</span>
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="py-5 lg:py-6 px-6 text-right font-display text-xl lg:text-2xl text-white align-top pt-6 lg:pt-8 whitespace-nowrap">5 Lakhs</td>
                        </tr>

                        <tr className="bg-[#1f2015] md:hover:bg-[#1f2015] transition-colors group relative overflow-hidden">
                          <td className="py-5 lg:py-6 px-6 relative z-10 border-y-2 border-l-2 border-r-0 border-[#d4af37]/20">
                            <div className="flex items-start gap-3">
                              <Star className="w-5 h-5 text-[#d4af37] mt-0.5 animate-pulse-slow fill-current" />
                              <div>
                                <span className="text-[#d4af37] font-semibold text-base lg:text-lg">
                                  Comprehensive Architecture <span className="md:hidden block text-xs font-normal opacity-80 mt-1">(Recommended)</span><span className="hidden md:inline font-normal"> (Recommended)</span>
                                </span>
                                <p className="text-xs lg:text-sm text-[#8b949e] mt-2 leading-relaxed">
                                  All deliverables from the 3 Lakh & 5 Lakh scopes <br /> 
                                  <span className="text-[#d4af37] mt-1 block">+ Interior Designer (Sourcing & involvement)</span> 
                                  <span className="text-[#d4af37] block">+ Personal Branding to Founder</span>
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="py-5 lg:py-6 px-6 text-right font-display text-2xl lg:text-3xl text-[#d4af37] font-bold relative z-10 align-top pt-6 lg:pt-8 whitespace-nowrap border-y-2 border-r-2 border-l-0 border-[#d4af37]/20">7 Lakhs</td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </section>

        </div>
        
        {/* Bottom padding for mobile scrolling */}
        <div className="h-12 lg:hidden"></div>
      </main>
    </div>
  );
}