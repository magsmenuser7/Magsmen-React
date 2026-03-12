import React, { useState, useEffect, FormEvent } from 'react';
import { 
  Menu, X, ChevronRight, AlertCircle, Target, 
  TrendingUp, Briefcase, Calendar, CheckCircle, 
  ShieldCheck, ArrowRight, DollarSign, Clock, 
  LayoutDashboard,
  Mail,Lock,
  Loader2
} from 'lucide-react';
import { Eye, EyeOff } from "lucide-react";
import emailjs from '@emailjs/browser';



interface UserData {
  email: string;
}


export default function SorvetIceCreamBrandPositioningAndMarketEntryStrategy() {
  const [activeTab, setActiveTab] = useState('executive-summary');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const [showPassword, setShowPassword] = useState(false);



  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const tabs = [
    { id: 'executive-summary', label: 'Executive Summary', icon: Briefcase },
    { id: 'the-problem', label: 'What We Are Solving For', icon: AlertCircle },
    { id: 'why-magsmen', label: 'Why Magsmen', icon: ShieldCheck },
    { id: 'the-solution', label: 'Engagement Phases', icon: Target },
    { id: 'commitments', label: 'Your Commitments', icon: CheckCircle },
    { id: 'investment', label: 'Investment', icon: DollarSign },
    { id: 'timeline', label: 'What Happens Next', icon: Calendar },
  ];

  const handleTabChange = (id: React.SetStateAction<string>) => {
    setActiveTab(id);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


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
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row font-sans text-slate-800 relative w-full overflow-x-hidden">
      
      {/* Mobile Header (Fixed) */}
      <div className="md:hidden bg-slate-900 text-white h-16 px-5 flex justify-between items-center sticky top-0 z-[60] shadow-md w-full">
        <div className="font-bold text-lg tracking-tight">MAGSMEN</div>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          className="p-2 -mr-2 text-slate-300 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Navigation (Sidebar on Desktop, Overlay Drawer on Mobile) */}
      <nav className={`
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        fixed md:sticky top-16 md:top-0 left-0 w-full md:w-72 h-[calc(100vh-4rem)] md:h-screen 
        bg-slate-900 text-slate-300 flex-shrink-0 overflow-y-auto z-50 
        transition-transform duration-300 ease-in-out border-r border-slate-800 flex flex-col
      `}>
        <div className="p-8 hidden md:block border-b border-slate-800">
          <h1 className="text-2xl font-bold text-white tracking-tight">MAGSMEN</h1>
          <p className="text-xs text-slate-400 mt-2 font-medium tracking-widest uppercase">Brand Consulting</p>
        </div>
        <div className="p-4 md:p-6 space-y-2 flex-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`w-full flex items-center space-x-4 px-4 py-4 md:py-3 rounded-lg text-left transition-all duration-200 ${
                  isActive 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'hover:bg-slate-800 hover:text-white'
                }`}
              >
                <Icon size={20} className={isActive ? 'text-blue-200' : 'text-slate-500 shrink-0'} />
                <span className="font-medium text-base md:text-sm">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-5 pb-20 md:p-12 lg:p-16 w-full">
        <div className="max-w-4xl mx-auto">
          
          {/* 1. Executive Summary */}
          {activeTab === 'executive-summary' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="border-b border-slate-200 pb-8">
                <span className="text-blue-600 font-semibold tracking-wider text-xs md:text-sm uppercase">Strategic Consulting Proposal</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mt-4 leading-tight">
                  Sorvet Ice Cream <br/>
                  <span className="text-slate-500 text-2xl sm:text-3xl md:text-4xl font-light">Brand Positioning & Market Entry Strategy</span>
                </h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 mt-8">
                <div className="bg-white p-5 md:p-6 rounded-xl shadow-sm border border-slate-100">
                  <h3 className="text-xs text-slate-400 uppercase tracking-widest font-semibold mb-1">Prepared For</h3>
                  <p className="text-base md:text-lg font-medium text-slate-900">Sorvet Leadership Team</p>
                </div>
                <div className="bg-white p-5 md:p-6 rounded-xl shadow-sm border border-slate-100">
                  <h3 className="text-xs text-slate-400 uppercase tracking-widest font-semibold mb-1">Prepared By</h3>
                  <p className="text-base md:text-lg font-medium text-slate-900">Magsmen Brand Consulting</p>
                  <p className="text-sm text-slate-500">Sandeep N</p>
                </div>
                <div className="bg-white p-5 md:p-6 rounded-xl shadow-sm border border-slate-100">
                  <h3 className="text-xs text-slate-400 uppercase tracking-widest font-semibold mb-1">Date</h3>
                  <p className="text-base md:text-lg font-medium text-slate-900">February 2026</p>
                </div>
                <div className="bg-blue-50 p-5 md:p-6 rounded-xl shadow-sm border border-blue-100">
                  <h3 className="text-xs text-blue-500 uppercase tracking-widest font-semibold mb-1">Engagement Model</h3>
                  <p className="text-base md:text-lg font-semibold text-blue-900">90-Day Intensive + 12-Month Strategic Partnership</p>
                </div>
              </div>

              <div className="bg-slate-900 text-white p-6 md:p-8 rounded-xl mt-8 shadow-lg">
                <p className="text-lg md:text-xl font-light leading-relaxed">
                  Sorvet operates in a ₹30,000 crore market growing at 12-15% annually. That growth rate attracts capital, competition, and aggressive incumbents. Right now, Sorvet is caught in the middle of a strategic fog.
                </p>
                <div className="mt-6 pt-6 border-t border-slate-700">
                  <p className="font-medium text-blue-200 text-base md:text-lg">
                    You are positioned as premium without proof, distributing through impulse retail without the capital to compete, and invisible in a market where visibility determines survival.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 2. What We Are Solving For */}
          {activeTab === 'the-problem' && (
            <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">What We Are Solving For</h2>
                <p className="text-base md:text-lg text-slate-600 mt-4 leading-relaxed">
                  The problem is not that you lack ambition. The problem is that you lack strategic clarity. Without it, every rupee spent is a bet on hope, not execution. And hope does not compound.
                </p>
                <p className="text-sm md:text-base text-slate-500 mt-2">Here is what we diagnosed after analyzing your brand, the competitive landscape, and the economics of India's ice cream market:</p>
              </div>

              <div className="space-y-4 mt-8">
                {[
                  {
                    title: "Generic Positioning",
                    desc: "\"Finest ice cream, premium ingredients, innovative techniques\" could describe Amul, Walls, Havmor, or any regional player. It doesn't answer: Why you, why now, why pay more?"
                  },
                  {
                    title: "Unclear Distribution Model",
                    desc: "Hedging across impulse retail, owned outlets, B2B, and online-first. Each requires different capital and margins. Trying to win in all guarantees winning in none."
                  },
                  {
                    title: "Unproven Differentiation",
                    desc: "Customers don't believe \"premium ingredients\" claims anymore. They believe taste tests, transparency, and word-of-mouth. Premium pricing without proof has no justification."
                  },
                  {
                    title: "Unsustainable Unit Economics",
                    desc: "Impulse retail runs on tight margins. If gross margin after cuts, distribution, and spoilage is under 20%, you are burning capital faster than building a business."
                  },
                  {
                    title: "Invisible Brand",
                    desc: "Minimal online presence, no reviews, no content. In 2026, a consumer brand without digital proof is not a brand. It is a rumor."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row gap-4 p-5 md:p-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 sm:w-8 sm:h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-sm">
                        0{idx + 1}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-slate-900">{item.title}</h3>
                      <p className="text-sm md:text-base text-slate-600 mt-2 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-slate-100 p-5 md:p-6 rounded-lg border-l-4 border-slate-900 mt-8">
                <p className="font-semibold text-slate-800 text-sm md:text-base">
                  These are foundational cracks. And foundational cracks do not get fixed with better marketing or a new packaging design. They get fixed with strategy.
                </p>
              </div>
            </div>
          )}

          {/* 3. Why Magsmen */}
          {activeTab === 'why-magsmen' && (
            <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Why Magsmen</h2>
                <p className="text-base md:text-lg text-slate-600 mt-4 leading-relaxed">
                  Most brand consultants will tell you what sounds good. We tell you what works. That distinction matters because what sounds good in a boardroom often dies in the market.
                </p>
                <p className="text-sm md:text-base text-slate-500 mt-2">
                  We operate in Hyderabad and across Telangana and AP. We know which retailers move volume, which neighborhoods pay premium, what flavors resonate locally, and how regional FMCG distribution actually works.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-8">
                {[
                  {
                    title: "We force decisions.",
                    desc: "We narrow your options to the ones that are financially viable and strategically defensible, and then we make you pick one. Doing everything guarantees accomplishing nothing."
                  },
                  {
                    title: "We build for economics.",
                    desc: "We start with unit economics, distribution feasibility, and competitive positioning before visual identity and messaging. If the model is broken, design means nothing."
                  },
                  {
                    title: "Embedded partners.",
                    desc: "We don't deliver a 60-slide deck and disappear. We work with your team weekly, iterating based on pilot results, and solving execution problems in real time."
                  },
                  {
                    title: "Zero tolerance for vagueness.",
                    desc: "If you can't explain your positioning in one sentence, it doesn't exist. If you can't calculate contribution margin, you are guessing."
                  },
                  {
                    title: "We've done this before.",
                    desc: "We took brands like Tenali Double Horse from strategic ambiguity to market relevance. We know what breaks under pressure and what holds."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-5 md:p-6 rounded-xl border border-slate-200 shadow-sm">
                    <h3 className="text-base md:text-lg font-bold text-blue-700 flex items-center gap-2">
                      <ChevronRight size={20} className="shrink-0" />
                      {item.title}
                    </h3>
                    <p className="text-slate-600 mt-3 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-blue-900 text-white p-6 md:p-8 rounded-xl text-center md:text-left mt-8 shadow-lg">
                <p className="text-lg md:text-xl font-medium leading-relaxed">
                  We do not make you feel better about your business. We make your business better. If that is what you need, we should work together. If you want validation, hire someone else.
                </p>
              </div>
            </div>
          )}

          {/* 4. Engagement Phases */}
          {activeTab === 'the-solution' && (
            <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">What This Engagement Solves</h2>
                <p className="text-base md:text-lg text-slate-600 mt-4">
                  Over the next 90 days, we take Sorvet from strategic ambiguity to operational clarity. Making hard choices, killing weak ideas, and building a scalable model.
                </p>
              </div>

              {/* Responsive Timeline */}
              <div className="space-y-8 mt-10 relative before:absolute before:inset-0 before:ml-[1.125rem] md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-slate-200 before:via-slate-300 before:to-slate-200">
                
                {/* Phase 1 */}
                <div className="relative flex items-start md:items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-600 text-white font-bold text-sm shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    I
                  </div>
                  <div className="w-[calc(100%-3.5rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 md:p-6 rounded-xl border border-slate-200 shadow-sm ml-auto md:ml-0">
                    <div className="text-xs md:text-sm text-blue-600 font-bold mb-1 uppercase tracking-wider">Days 1-30</div>
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 md:mb-4">Strategic Foundation</h3>
                    <ul className="space-y-3 text-sm text-slate-600">
                      <li className="flex gap-3"><ArrowRight size={16} className="text-blue-500 shrink-0 mt-0.5"/> <span><strong>Business Model Workshop:</strong> Evaluate artisanal scoop shops, B2B supply, niche D2C, or contract mfg. Commit to one.</span></li>
                      <li className="flex gap-3"><ArrowRight size={16} className="text-blue-500 shrink-0 mt-0.5"/> <span><strong>Financial Modeling:</strong> COGS, production, retailer margins, CAC, LTV. If the math doesn't work, we fix or pivot.</span></li>
                      <li className="flex gap-3"><ArrowRight size={16} className="text-blue-500 shrink-0 mt-0.5"/> <span><strong>Product Validation:</strong> Blind taste tests against Amul, Walls, local premiums. Justify the premium pricing.</span></li>
                    </ul>
                  </div>
                </div>

                {/* Phase 2 */}
                <div className="relative flex items-start md:items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-600 text-white font-bold text-sm shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    II
                  </div>
                  <div className="w-[calc(100%-3.5rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 md:p-6 rounded-xl border border-slate-200 shadow-sm ml-auto md:ml-0">
                    <div className="text-xs md:text-sm text-blue-600 font-bold mb-1 uppercase tracking-wider">Days 31-60</div>
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 md:mb-4">Brand Repositioning</h3>
                    <ul className="space-y-3 text-sm text-slate-600">
                      <li className="flex gap-3"><ArrowRight size={16} className="text-blue-500 shrink-0 mt-0.5"/> <span><strong>Rebuild the Brand:</strong> Ensure communication reinforces the chosen business model (craft/experience for shops, consistency for B2B).</span></li>
                      <li className="flex gap-3"><ArrowRight size={16} className="text-blue-500 shrink-0 mt-0.5"/> <span><strong>Signature Portfolios:</strong> Develop 3-5 defensible unique flavors (e.g., Hyderabadi figs, Irani chai, Nizami pista).</span></li>
                      <li className="flex gap-3"><ArrowRight size={16} className="text-blue-500 shrink-0 mt-0.5"/> <span><strong>Communication Guidelines:</strong> Tone, messaging, and platform-specific strategies.</span></li>
                    </ul>
                  </div>
                </div>

                {/* Phase 3 */}
                <div className="relative flex items-start md:items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-600 text-white font-bold text-sm shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    III
                  </div>
                  <div className="w-[calc(100%-3.5rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 md:p-6 rounded-xl border border-slate-200 shadow-sm ml-auto md:ml-0">
                    <div className="text-xs md:text-sm text-blue-600 font-bold mb-1 uppercase tracking-wider">Days 61-90</div>
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 md:mb-4">Go-to-Market Strategy</h3>
                    <ul className="space-y-3 text-sm text-slate-600">
                      <li className="flex gap-3"><ArrowRight size={16} className="text-blue-500 shrink-0 mt-0.5"/> <span><strong>Pilot Launch:</strong> Identify locations, build B2B target accounts, or launch D2C based on the selected model.</span></li>
                      <li className="flex gap-3"><ArrowRight size={16} className="text-blue-500 shrink-0 mt-0.5"/> <span><strong>Digital Infrastructure:</strong> Catalog, ordering capability, GMB, Instagram strategy to create digital proof.</span></li>
                      <li className="flex gap-3"><ArrowRight size={16} className="text-blue-500 shrink-0 mt-0.5"/> <span><strong>Demand Generation:</strong> Influencer partnerships, sampling, paid social, local PR. Measure and iterate fast.</span></li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* 5. Commitments */}
          {activeTab === 'commitments' && (
            <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">What You Need to Commit</h2>
                <p className="text-base md:text-lg text-slate-600 mt-4 leading-relaxed">
                  This engagement only works if you are willing to do three things. If you can commit to these, this engagement will transform your business. If you cannot, we will waste each other's time.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white p-6 md:p-8 rounded-xl border-t-4 border-blue-600 shadow-sm flex flex-col sm:flex-row md:flex-col items-center sm:items-start md:items-center text-center sm:text-left md:text-center">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex shrink-0 items-center justify-center mb-4 sm:mb-0 md:mb-6 sm:mr-6 md:mr-0 text-blue-600">
                    <Target size={32} />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3">Be honest about data</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      We need real numbers: current revenue, sales per outlet, margins, cash burn. If you hide it, the strategy we build will be fiction.
                    </p>
                  </div>
                </div>
                
                <div className="bg-white p-6 md:p-8 rounded-xl border-t-4 border-blue-600 shadow-sm flex flex-col sm:flex-row md:flex-col items-center sm:items-start md:items-center text-center sm:text-left md:text-center">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex shrink-0 items-center justify-center mb-4 sm:mb-0 md:mb-6 sm:mr-6 md:mr-0 text-blue-600">
                    <TrendingUp size={32} />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3">Make hard decisions</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      No hedging, no trying multiple models at once, no "let's see how it goes." Focus is execution power.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 md:p-8 rounded-xl border-t-4 border-blue-600 shadow-sm flex flex-col sm:flex-row md:flex-col items-center sm:items-start md:items-center text-center sm:text-left md:text-center">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex shrink-0 items-center justify-center mb-4 sm:mb-0 md:mb-6 sm:mr-6 md:mr-0 text-blue-600">
                    <AlertCircle size={32} />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3">Execute with discipline</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Strategy without execution is theater. The day-to-day execution is yours. If results are weak, we kill it. But move fast.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 6. Investment */}
          {activeTab === 'investment' && (
            <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Investment</h2>
                <p className="text-base md:text-lg text-slate-600 mt-4 leading-relaxed">
                  The investment is significant because the work is significant. If you want a cheaper option, hire a freelance designer. If you want to fix foundational problems, this is the engagement.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8">
                
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
                  <div className="bg-slate-900 p-6 md:p-8 text-white">
                    <h3 className="text-xl md:text-2xl font-bold">90-Day Brand Expresso</h3>
                    <p className="text-slate-400 text-sm mt-1">Phases I, II, and III Full Execution</p>
                    <div className="mt-4 md:mt-6 text-3xl md:text-4xl font-bold">₹7,00,000 <span className="text-sm md:text-base font-normal text-slate-400">+ GST</span></div>
                  </div>
                  <div className="p-6 md:p-8 flex-1 text-sm md:text-base text-slate-600 space-y-4">
                    <p className="flex items-start gap-3"><CheckCircle size={20} className="text-green-500 shrink-0 mt-0.5"/> <span>Business model & financial validation</span></p>
                    <p className="flex items-start gap-3"><CheckCircle size={20} className="text-green-500 shrink-0 mt-0.5"/> <span>Brand repositioning & flavor portfolio</span></p>
                    <p className="flex items-start gap-3"><CheckCircle size={20} className="text-green-500 shrink-0 mt-0.5"/> <span>Go-to-market pilot & digital infrastructure</span></p>
                    <p className="flex items-start gap-3"><CheckCircle size={20} className="text-green-500 shrink-0 mt-0.5"/> <span>Weekly strategic calls & full Magsmen access</span></p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
                  <div className="bg-blue-600 p-6 md:p-8 text-white">
                    <h3 className="text-xl md:text-2xl font-bold">12-Month Partnership</h3>
                    <p className="text-blue-200 text-sm mt-1">Post-Pilot Scaling & Strategy</p>
                    <div className="mt-4 md:mt-6 text-3xl md:text-4xl font-bold">₹1,50,000<span className="text-sm md:text-base font-normal text-blue-200">/mo + GST</span></div>
                  </div>
                  <div className="p-6 md:p-8 flex-1 text-sm md:text-base text-slate-600 space-y-4">
                    <p className="flex items-start gap-3"><CheckCircle size={20} className="text-green-500 shrink-0 mt-0.5"/> <span>Monthly reviews & quarterly audits</span></p>
                    <p className="flex items-start gap-3"><CheckCircle size={20} className="text-green-500 shrink-0 mt-0.5"/> <span>Campaign oversight & expansion planning</span></p>
                    <p className="flex items-start gap-3"><CheckCircle size={20} className="text-green-500 shrink-0 mt-0.5"/> <span>Competitive intelligence & team training</span></p>
                    <p className="flex items-start gap-3"><CheckCircle size={20} className="text-green-500 shrink-0 mt-0.5"/> <span>Investor pitch development (if raising capital)</span></p>
                  </div>
                </div>

              </div>

              <div className="bg-slate-100 p-6 md:p-8 rounded-xl border border-slate-200 mt-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                {/* <div>
                  <p className="text-sm text-slate-500 uppercase tracking-wider font-bold mb-1">Combined Engagement</p>
                  <p className="text-2xl sm:text-3xl font-bold text-slate-900">₹25,00,000 <span className="text-base sm:text-lg font-normal text-slate-500">+ GST</span></p>
                </div> */}
                <div className="w-full lg:w-auto flex-1 lg:ml-8 border-t lg:border-t-0 lg:border-l border-slate-300 pt-6 lg:pt-0 lg:pl-8">
                  <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2 text-lg"><Clock size={20}/> Payment Terms</h4>
                  <div className="flex flex-wrap gap-2 md:gap-3 text-xs md:text-sm font-medium">
                    <span className="bg-white px-3 py-2 rounded-md border border-slate-200 shadow-sm flex-1 sm:flex-none text-center">50% Upfront</span>
                    <span className="bg-white px-3 py-2 rounded-md border border-slate-200 shadow-sm flex-1 sm:flex-none text-center">25% at Day 45</span>
                    <span className="bg-white px-3 py-2 rounded-md border border-slate-200 shadow-sm flex-1 sm:flex-none text-center">25% at Day 90</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-500 mt-4 leading-relaxed">
                    * We de-risk as we go. If the first 45 days do not deliver clarity, you can walk away.
                  </p>
                </div>
              </div>

            </div>
          )}

          {/* 7. Timeline & Conclusion */}
          {activeTab === 'timeline' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">What Happens Next</h2>
                <div className="mt-8 space-y-6 md:space-y-4 text-slate-700">
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start">
                    <div className="bg-slate-200 px-3 py-1.5 rounded-md font-bold text-sm shrink-0 w-auto sm:w-24 text-left sm:text-center inline-block">Week 1</div>
                    <p className="text-sm md:text-base leading-relaxed"><strong className="text-slate-900">Discovery Call:</strong> You share current state (revenue, distribution, financials). We assess fit.</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start">
                    <div className="bg-slate-200 px-3 py-1.5 rounded-md font-bold text-sm shrink-0 w-auto sm:w-24 text-left sm:text-center inline-block">Week 2</div>
                    <p className="text-sm md:text-base leading-relaxed"><strong className="text-slate-900">Finalize:</strong> Agree on scope of work and sign the engagement agreement.</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start">
                    <div className="bg-slate-200 px-3 py-1.5 rounded-md font-bold text-sm shrink-0 w-auto sm:w-24 text-left sm:text-center inline-block">Week 3</div>
                    <p className="text-sm md:text-base leading-relaxed"><strong className="text-slate-900">Kick Off:</strong> Competitive audit and business model workshop begin.</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start">
                    <div className="bg-slate-200 px-3 py-1.5 rounded-md font-bold text-sm shrink-0 w-auto sm:w-24 text-left sm:text-center inline-block">Weeks 4-12</div>
                    <p className="text-sm md:text-base leading-relaxed"><strong className="text-slate-900">Execution:</strong> Full rollout of Phases I, II, and III with weekly Friday strategic calls.</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start mt-6">
                    <div className="bg-blue-600 text-white px-3 py-1.5 rounded-md font-bold text-sm shrink-0 w-auto sm:w-24 text-left sm:text-center inline-block shadow-sm">Day 90</div>
                    <p className="text-sm md:text-base leading-relaxed"><strong className="text-slate-900">Review & Decide:</strong> Review pilot results, validate scaling. Decide on the 12-month partnership.</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 text-white p-6 md:p-10 rounded-xl shadow-xl mt-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5 md:opacity-10 pointer-events-none">
                  <Target size={180} />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Final Word</h2>
                <div className="relative z-10">
                  <p className="text-base md:text-lg font-light leading-relaxed mb-6">
                    Sorvet is at a decision point. Noto raised funding with John Abraham. Hocco raised $10 million with the Havmor family behind it. Amul is expanding aggressively. Kwality Walls is now a standalone listed company. Regional players like Huber & Holly and NIC are established in Hyderabad.
                  </p>
                  <p className="text-lg md:text-xl font-medium text-blue-300 mb-8">
                    The window to carve out a defensible position is narrowing.
                  </p>
                  <div className="border-t border-slate-700 pt-6 md:pt-8">
                    <p className="font-bold text-lg md:text-xl leading-relaxed">You can keep doing what you are doing and hope it works. Or you can force clarity, fix the model, and build something that lasts.</p>
                    <p className="mt-4 text-base md:text-lg text-slate-300">Magsmen exists for the second option. We do not make brands feel good. We make brands work.</p>
                    <p className="mt-8 text-xl md:text-2xl font-bold text-white flex items-center gap-2">If that is what you need, let's start. <ArrowRight className="text-blue-400" /></p>
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>
      </main>
    </div>
  );
}