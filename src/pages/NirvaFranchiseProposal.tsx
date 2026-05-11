import React, { useEffect, useRef, useState } from 'react';
import logo from "/assets/blacklogohorizontal.png"

import  FormEvent from 'react';
import { 
  ChevronRight, 
  ChevronLeft, 
  Target, 
  TrendingUp, 
  Shield, 
  Zap, 
  Briefcase, 
  Mic, 
  Cpu, 
  Building, 
  Scale, 
  Award,
  Lightbulb
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import { 
  Hexagon, 
  Layers, 
  Building2, 
  
  Compass, 
  Menu, 
  X, 
 
  Rocket, 
  PenTool, 
 
  Armchair, 
  UserCheck, 
  ShieldCheck, 
 
  Star, 
  Clock,
  AlertCircle,
  LayoutDashboard,
  Loader2,
  Mail
} from 'lucide-react';

export default function NirvaFranchiseProposal() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [activePhase, setActivePhase] = useState(0);

  // Custom Cursor & Reveal Logic
  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0;
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const animateCursor = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (cursorRef.current && ringRef.current) {
        cursorRef.current.style.left = `${mx}px`;
        cursorRef.current.style.top = `${my}px`;
        ringRef.current.style.left = `${rx}px`;
        ringRef.current.style.top = `${ry}px`;
      }
      animationFrameId = requestAnimationFrame(animateCursor);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animateCursor();

    // Intersection Observer for reveals
    const reveals = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('opacity-100', 'translate-y-0');
            e.target.classList.remove('', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1 }
    );
    reveals.forEach((el) => obs.observe(el));

    // Intersection Observer for score bars
    const scoreBars = document.querySelectorAll('.score-bar-fill');
    const scoreObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).style.animation = 'none';
            void (e.target as HTMLElement).offsetHeight; // Trigger reflow
            (e.target as HTMLElement).style.animation = 'growBar 1.5s ease-out forwards';
          }
        });
      },
      { threshold: 0.5 }
    );
    scoreBars.forEach((b) => scoreObs.observe(b));

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      obs.disconnect();
      scoreObs.disconnect();
    };
  }, []);

  const phases = [
    {
      num: '01',
      name: 'Franchise Readiness Audit',
      duration: 'Weeks 1 to 4',
      detail: 'Structured diagnostic of brand operation, legal standing, IP status, and competitive context. Produces the Franchise Readiness Report that defines every gap between today and franchise-ready.',
    },
    {
      num: '02',
      name: 'System and Standards Design',
      duration: 'Weeks 3 to 10',
      detail: 'Brand Standards Manual, Operations Manual framework, franchisee qualification system, fee and royalty model design, financial disclosure structure, and legal brief for the franchise agreement.',
    },
    {
      num: '03',
      name: 'Legal and Commercial Framework',
      duration: 'Weeks 6 to 14',
      detail: 'Trademark registration brief, franchise agreement coordination, IP protection framework, fee model finalisation, and franchisee disclosure documentation. No franchise is sold before this is complete.',
    },
    {
      num: '04',
      name: 'Pilot Outlet Support',
      duration: 'Weeks 10 to 22',
      detail: 'Brand governance during pilot launch, visual standards review, training framework delivery, performance dashboard setup, and 90-day pilot documentation for franchisee disclosure.',
    },
    {
      num: '05',
      name: 'Franchisee Acquisition Tools',
      duration: 'Weeks 18 to 24',
      detail: 'Franchise pitch deck, franchisee qualification playbook, marketing governance system, audit framework, and performance scorecard for network governance. Nirva is now franchise-ready.',
    },
  ];
type UserData = {
  email: string;
};
  // Authentication / Registration state
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [successMessage, setSuccessMessage] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

  // Dashboard State management
  const [activeTab, setActiveTab] = useState<TabType>('millets');

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
      <div
    className="relative min-h-screen bg-cover 
               bg-[position:90%_center] 
               md:bg-center 
               flex items-center justify-center md:justify-end 
               p-4 md:p-6 font-sans"
    style={{
      backgroundImage: `url('/assets/bg-for-lock.png')`
    }}
  >
        {/* Optional overlay for better readability */}
        <div className="absolute inset-0 bg-black/20"></div>
  
        {/* LOGIN CARD */}
        <div className="relative w-full max-w-md mr-0 md:mr-28 ">
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/30">
  
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
      </div>
    );
  }

  return (
    <div className="font-body bg-[#FDFCFF] text-[#0F0A1A] overflow-x-hidden cursor-default relative">
      {/* Noise Overlay */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-40 mix-blend-multiply"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E\")" }}
      />

      {/* Custom Cursor */}
      <div ref={cursorRef} className="fixed w-2 h-2 bg-violet-600 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-100" />
      <div ref={ringRef} className="fixed w-8 h-8 border border-violet-600/40 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ease-out" />

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 md:py-5 bg-[#FDFCFF]/90 backdrop-blur-xl border-b border-violet-800/15">
        <div className="flex items-center gap-2.5">
          <img src={logo} className="h-10"/>
          <div className="flex flex-col leading-tight">
            
          </div>
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <span className="text-[11px] tracking-[0.1em] text-[#7C6A9A] uppercase">Proposal · Nirva</span>
          <span className="text-[11px] tracking-[0.1em] text-[#7C6A9A] uppercase">Confidential</span>
          <span className="text-[11px] tracking-[0.1em] text-[#7C6A9A] uppercase">May 2026</span>
        </div>
        <a 
          href="mailto:connect@magsmen.com?subject=Nirva%20%E2%80%94%20Proposal%20Accepted%3A%20Please%20Move%20Forward" 
          className="bg-violet-800 text-white px-5 py-2 font-body text-[11px] tracking-[0.1em] uppercase rounded-sm cursor-pointer transition-colors duration-200 hover:bg-violet-600 inline-block no-underline"
        >
          Accept Proposal
        </a>
      </nav>

      {/* HERO */}
      <section className="relative z-10 min-h-screen bg-violet-950 grid grid-rows-[1fr_auto] px-6 md:px-12 pt-28 md:pt-32 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute -right-[8vw] top-1/2 -translate-y-1/2 font-display text-[42vw] font-light text-white/5 leading-none pointer-events-none select-none">N</div>
        <div>
          <div className="reveal  translate-y-8 transition-all duration-700 ease-out flex items-center gap-4 mb-10">
            <span className="text-[10px] tracking-[0.2em] uppercase text-violet-400 py-1 px-3 border border-violet-400/30 rounded-sm">Consulting Proposal</span>
            <span className="flex-1 h-px bg-violet-400/20 max-w-[80px]"></span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-violet-400 py-1 px-3 border border-violet-400/30 rounded-sm">Franchise Architecture</span>
          </div>
          <h1 className="reveal  translate-y-8 transition-all duration-700 delay-100 ease-out font-display text-[clamp(3rem,7vw,7rem)] font-light leading-none text-white mb-4">
            Building India's<br /><em className="italic text-violet-400">First</em> Branded<br />9-Carat Franchise
          </h1>
          <p className="reveal  translate-y-8 transition-all duration-700 delay-200 ease-out font-display text-[clamp(1.1rem,2vw,1.6rem)] font-light italic text-white/50 mb-12 max-w-[680px]">
            What you are about to read is not a growth plan. It is an architecture brief for the most complex move a jewelry brand can make.
          </p>
          <div className="reveal  translate-y-8 transition-all duration-700 delay-300 ease-out grid grid-cols-2 md:grid-cols-4 border-t border-white/10 pt-8 mt-8">
            <div className="py-5 pr-6 md:border-r border-b md:border-b-0 border-white/10">
              <div className="text-[9px] tracking-[0.18em] uppercase text-white/35 mb-1.5">Prepared For</div>
              <div className="font-display text-[1.05rem] font-light text-white/85">Nirva</div>
            </div>
            <div className="py-5 pr-6 md:border-r border-b md:border-b-0 border-white/10 pl-6 md:pl-0">
              <div className="text-[9px] tracking-[0.18em] uppercase text-white/35 mb-1.5">Engagement</div>
              <div className="font-display text-[1.05rem] font-light text-white/85">Franchise Architecture</div>
            </div>
            <div className="py-5 pr-6 md:border-r border-white/10">
              <div className="text-[9px] tracking-[0.18em] uppercase text-white/35 mb-1.5">Investment</div>
              <div className="font-display text-[1.05rem] font-light text-white/85">INR 5,50,000 + GST</div>
            </div>
            <div className="py-5 pr-6 pl-6 md:pl-0">
              <div className="text-[9px] tracking-[0.18em] uppercase text-white/35 mb-1.5">Valid Until</div>
              <div className="font-display text-[1.05rem] font-light text-white/85">30 Days · June 2025</div>
            </div>
          </div>
        </div>
        <div className="reveal  flex items-center gap-3 text-white/30 text-[11px] tracking-[0.1em] uppercase mt-12 animate-float">
          <span className="w-6 h-px bg-white/20"></span> Scroll to read the proposal
        </div>
      </section>

      {/* TRUTH */}
      <section className="relative z-10 bg-[#F8F5FF] py-16 md:py-28 px-6 md:px-12">
        <div className="max-w-[900px] mx-auto">
          <div className="reveal  translate-y-8 transition-all duration-700 inline-flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase text-violet-800 mb-8 before:content-[''] before:w-6 before:h-px before:bg-violet-800">
            01 · The One Truth Your Industry Is Facing
          </div>
          <h2 className="reveal  translate-y-8 transition-all duration-700 delay-100 font-display text-[clamp(1.6rem,3.5vw,3rem)] font-light leading-snug text-[#0F0A1A] mb-10">
            Jewelry in India is not short of brands.<br />
            <strong className="font-semibold text-violet-950">It is short of brands that can be trusted to be the same everywhere you find them.</strong>
          </h2>
          <p className="reveal  translate-y-8 transition-all duration-700 delay-200 text-[15px] leading-relaxed text-[#3D2D5C] mb-6 max-w-[720px]">
            The Indian jewelry market is one of the oldest and most emotionally complex consumer categories in the world. It is also one of the most fragmented. Tens of thousands of local jewelers operate across the country, each anchored in community trust and geographic familiarity. They do well in their home market. They cannot exist without it.
          </p>
          <p className="reveal  translate-y-8 transition-all duration-700 delay-200 text-[15px] leading-relaxed text-[#3D2D5C] mb-6 max-w-[720px]">
            The organised, branded segment is growing. A younger buying cohort wants price transparency, design consistency, and the assurance that what they buy in one city holds the same standard in another. This shift is structural, not seasonal.
          </p>
          <div className="reveal  translate-y-8 transition-all duration-700 border-l-4 border-violet-800 px-8 py-5 bg-white my-10 font-display text-xl md:text-2xl font-normal italic text-violet-950 leading-relaxed max-w-[800px] shadow-sm">
            The brand that builds the franchise system first in 9-carat jewelry does not compete for the market. It defines the category standard. Every brand that enters after it will be measured against it.
          </div>
          <p className="reveal  translate-y-8 transition-all duration-700 text-[15px] leading-relaxed text-[#3D2D5C] max-w-[720px]">
            This is a rare positioning opportunity. It is also a significant execution challenge. Building a franchise system in jewelry requires a level of standardisation, legal rigour, and brand governance that most jewelry founders underestimate because they have never had to transfer what they know to someone they cannot supervise daily.
          </p>
        </div>
      </section>

      {/* LETTER */}
      <section className="relative z-10 bg-white py-16 md:py-28 px-6 md:px-12">
        <div className="max-w-[900px] mx-auto">
          <div className="reveal  translate-y-8 transition-all duration-700 inline-flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase text-violet-800 mb-8 before:content-[''] before:w-6 before:h-px before:bg-violet-800">
            02 · A Note from Sandeep N
          </div>
          <div className="reveal  translate-y-8 transition-all duration-700 delay-100 max-w-[720px] mx-auto bg-[#F8F5FF] border border-violet-800/15 p-8 md:p-14 relative before:content-['\201C'] before:absolute before:top-6 before:left-8 before:font-display before:text-8xl before:leading-none before:font-light before:text-violet-100 before:pointer-events-none">
            <div className="relative z-10">
              <p className="font-display text-[1.1rem] font-light leading-loose text-[#3D2D5C] mb-6">What you have built is rare. A jewelry brand with a defined identity, a clear aesthetic, and a positioning that speaks to an audience the organised market has not served well. That is harder than it sounds.</p>
              <p className="font-display text-[1.1rem] font-light leading-loose text-[#3D2D5C] mb-6">The franchise question is the right question to be asking at this stage. It signals that you see the potential of the brand beyond your personal reach. But I want to be direct with you, because that is the only way this conversation has value.</p>
              <p className="font-display text-[1.1rem] font-light leading-loose text-[#3D2D5C] mb-6">Franchising a jewelry brand is not a growth tactic. It is a complete operating architecture. It requires you to build systems you do not currently have, protect intellectual property you may not yet have registered, and trust a third party with something that carries your name and your reputation.</p>
              <p className="font-display text-[1.1rem] font-light leading-loose text-[#3D2D5C] mb-6">Done without structure, it damages brands permanently. Done with the right architecture, it builds them into category institutions. What Magsmen brings is a structured system for converting what you know into what others can replicate. That is the work.</p>
              <div className="mt-8">
                <div className="font-display text-2xl font-normal text-[#0F0A1A]">Sandeep N</div>
                <div className="text-[12px] tracking-[0.08em] text-[#7C6A9A] uppercase mt-1">Founder, Magsmen Strategy Consultants</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SITUATION */}
      <section className="relative z-10 bg-violet-950 py-16 md:py-28 px-6 md:px-12 text-white">
        <div className="max-w-[1100px] mx-auto">
          <div className="reveal  translate-y-8 transition-all duration-700 inline-flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase text-violet-400 mb-8 before:content-[''] before:w-6 before:h-px before:bg-violet-400">
            03 · Where Your Business Stands Today
          </div>
          <h2 className="reveal  translate-y-8 transition-all duration-700 delay-100 font-display text-[clamp(1.8rem,4vw,3.5rem)] font-light text-white mb-12 max-w-[700px]">
            A Brand Built. A System Not Yet.
          </h2>
          <div className="reveal  translate-y-8 transition-all duration-700 delay-200 grid grid-cols-1 md:grid-cols-2 border border-white/10 rounded-sm overflow-hidden">
            <div className="border-b md:border-b-0 md:border-r border-white/10">
              <div className="px-6 py-4 text-[10px] tracking-[0.15em] uppercase bg-white/5 text-white/50">What Exists Today</div>
              {[
                'Brand identity and visual assets complete',
                'Product range developed',
                'Market positioning defined',
                'Founding team\'s operational knowledge',
                'Basic sales and service approach',
                'Informal supplier relationships',
                'Direct-owned outlet model',
                'Founder-led customer engagement'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 px-6 py-4 border-t border-white/5 text-[13.5px] text-white/70 hover:bg-white/5 transition-colors">
                  <span className="text-violet-400 shrink-0 mt-0.5">✓</span> {item}
                </div>
              ))}
            </div>
            <div>
              <div className="px-6 py-4 text-[10px] tracking-[0.15em] uppercase bg-violet-800 text-white/85">What Must Be Built Before Franchise Launch</div>
              {[
                'Brand Standards Manual with franchise-specific rules',
                'Mandatory core range and approved local range structure',
                'Franchisee pitch and financial disclosure model',
                'Operations Manual covering every outlet procedure',
                'Franchisee training system with certification',
                'Formalised approved vendor agreements',
                'Franchise agreement and IP registration',
                'Centralised marketing governance system'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 px-6 py-4 border-t border-white/5 text-[13.5px] text-white/70 hover:bg-white/5 transition-colors">
                  <span className="text-[#C5A572] shrink-0 mt-0.5">→</span> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PERCEPTION GAP */}
      <section className="relative z-10 bg-white py-16 md:py-28 px-6 md:px-12">
        <div className="max-w-[1100px] mx-auto">
          <div className="reveal  translate-y-8 transition-all duration-700 inline-flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase text-violet-800 mb-8 before:content-[''] before:w-6 before:h-px before:bg-violet-800">
            09 · How Nirva Is Seen vs How It Needs to Be Seen
          </div>
          <h2 className="reveal  translate-y-8 transition-all duration-700 delay-100 font-display text-[clamp(1.8rem,4vw,3.2rem)] font-light text-[#0F0A1A] mb-4 max-w-[700px]">
            The Perception Gap <strong className="font-semibold">Is the Strategic Gap.</strong>
          </h2>
          <div className="reveal  translate-y-8 transition-all duration-700 delay-200 grid grid-cols-1 md:grid-cols-3 gap-px bg-violet-800/15 border border-violet-800/15 rounded-sm mt-10 overflow-hidden">
            <div className="p-10 bg-[#F8F5FF]">
              <div className="text-[9px] tracking-[0.2em] uppercase text-[#7C6A9A] mb-4">Current Perception</div>
              <p className="font-display text-[1.05rem] font-light leading-relaxed text-[#3D2D5C]">A new jewelry brand with strong identity but limited proof of franchise replicability or operational depth. A promising concept, not yet a proven system.</p>
            </div>
            <div className="p-10 bg-violet-950 text-white">
              <div className="text-[9px] tracking-[0.2em] uppercase text-violet-400 mb-4">Desired Perception</div>
              <p className="font-display text-[1.05rem] font-light leading-relaxed text-white/90">India's first purpose-built 9-carat jewelry franchise brand. A structured, quality-consistent network that serious investors want to be part of.</p>
            </div>
            <div className="p-10 bg-[#F8F5FF]">
              <div className="text-[9px] tracking-[0.2em] uppercase text-[#7C6A9A] mb-4">Competitor Territory</div>
              <p className="font-display text-[1.05rem] font-light leading-relaxed text-[#3D2D5C]">Established trust in 22K and 18K. Scale signals in high-value bridal. No credible 9K franchise competitor has staked territory yet.</p>
            </div>
          </div>
          <p className="reveal  translate-y-8 transition-all duration-700 text-[15px] leading-relaxed text-[#3D2D5C] mt-10 max-w-[1100px]">
            Closing this perception gap is what this engagement is designed to do. By the time the franchise is offered externally, Nirva will not be asking investors to believe in a concept. It will be showing them a documented system, a live pilot, financial projections grounded in real data, and a legal framework that protects their investment.
          </p>
        </div>
      </section>

      {/* OPPORTUNITY CORRIDOR */}
      <section className="relative z-10 bg-[#F8F5FF] py-16 md:py-28 px-6 md:px-12">
        <div className="max-w-[1100px] mx-auto">
          <div className="reveal  translate-y-8 transition-all duration-700 inline-flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase text-violet-800 mb-8 before:content-[''] before:w-6 before:h-px before:bg-violet-800">
            11 · Where Nirva Can Win
          </div>
          <h2 className="reveal  translate-y-8 transition-all duration-700 delay-100 font-display text-[clamp(1.8rem,4vw,3.2rem)] font-light text-[#0F0A1A] mb-4 max-w-[700px]">
            The Category Window <strong className="font-semibold">Is Open. Not Permanent.</strong>
          </h2>
          <div className="reveal  translate-y-8 transition-all duration-700 delay-200 grid grid-cols-1 md:grid-cols-3 border border-violet-800/15 rounded-sm mt-10 overflow-hidden bg-[#FDFCFF]">
            <div className="p-10 md:border-r border-b md:border-b-0 border-violet-800/15">
              <div className="text-[9px] tracking-[0.2em] uppercase font-medium text-[#7C6A9A] mb-5">Crowded Space</div>
              <p className="text-[13.5px] leading-relaxed text-[#7C6A9A]">Price-driven unorganised jewelry. High-volume 22K traditional retail. Margins under pressure. No differentiated brand system.</p>
            </div>
            <div className="p-10 md:border-r border-b md:border-b-0 border-violet-800/15">
              <div className="text-[9px] tracking-[0.2em] uppercase font-medium text-violet-800 mb-5">Emerging Space</div>
              <p className="text-[13.5px] leading-relaxed text-[#3D2D5C]">Branded accessible jewelry for aspirational buyers. Curated 9K design with consistent retail experience. Underserved Tier 2 and Tier 3 markets.</p>
            </div>
            <div className="p-10 bg-violet-950 md:border-l-4 border-violet-800">
              <div className="text-[9px] tracking-[0.2em] uppercase font-medium text-violet-400 mb-5">White Space Leadership</div>
              <p className="text-[13.5px] leading-relaxed text-white/85">Category-defining 9K franchise network. First brand to establish consistent outlets in aspirational non-metro markets. The standard every competitor is measured against.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PHASES */}
      <section className="relative z-10 bg-white py-16 md:py-28 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="reveal  translate-y-8 transition-all duration-700 inline-flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase text-violet-800 mb-8 before:content-[''] before:w-6 before:h-px before:bg-violet-800">
            13 · The Engagement in Phases
          </div>
          <h2 className="reveal  translate-y-8 transition-all duration-700 delay-100 font-display text-[clamp(1.8rem,4vw,3.2rem)] font-light text-[#0F0A1A] mb-4 max-w-[700px]">
            Six Months. Five Phases. <strong className="font-semibold">One Franchise-Ready Brand.</strong>
          </h2>
          <div className="reveal  translate-y-8 transition-all duration-700 delay-200 grid grid-cols-1 md:grid-cols-5 border border-violet-800/15 rounded-sm mt-10 overflow-hidden">
            {phases.map((phase, idx) => (
              <div 
                key={idx}
                onClick={() => setActivePhase(idx)}
                className={`group relative p-8 cursor-pointer transition-all duration-300 md:border-r border-b md:border-b-0 border-violet-800/15 last:border-r-0 hover:bg-[#F8F5FF] ${activePhase === idx ? 'bg-violet-950 hover:bg-violet-950' : ''}`}
              >
                <div className={`font-display text-5xl font-light leading-none mb-3 transition-colors duration-300 ${activePhase === idx ? 'text-white/15' : 'text-violet-100'}`}>
                  {phase.num}
                </div>
                <div className={`text-[12px] font-medium tracking-[0.04em] mb-2 transition-colors duration-300 ${activePhase === idx ? 'text-white' : 'text-[#0F0A1A]'}`}>
                  {phase.name}
                </div>
                <div className={`text-[10px] tracking-[0.06em] uppercase mb-4 transition-colors duration-300 ${activePhase === idx ? 'text-violet-400' : 'text-[#7C6A9A]'}`}>
                  {phase.duration}
                </div>
                <div className={`text-[12.5px] leading-relaxed transition-all duration-300 ${activePhase === idx ? 'block text-white/65' : 'hidden group-hover:block text-[#7C6A9A]'}`}>
                  {phase.detail}
                </div>
                <div className={`absolute bottom-0 left-0 right-0 h-[3px] bg-violet-800 origin-left transition-transform duration-400 ease-out ${activePhase === idx ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="relative z-10 bg-violet-950 py-16 md:py-28 px-6 md:px-12 text-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="reveal  translate-y-8 transition-all duration-700 inline-flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase text-violet-400 mb-8 before:content-[''] before:w-6 before:h-px before:bg-violet-400">
            14 · What You Will Receive
          </div>
          <h2 className="reveal  translate-y-8 transition-all duration-700 delay-100 font-display text-[clamp(1.8rem,4vw,3.2rem)] font-light text-white mb-12">
            Ten Deliverables That Build the System
          </h2>
          <div className="reveal  translate-y-8 transition-all duration-700 delay-200 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-sm overflow-hidden">
            {[
              { num: '01', name: 'Franchise Readiness Report', desc: 'Gap analysis across brand, legal, operational, and commercial dimensions with a prioritised action roadmap.' },
              { num: '02', name: 'Brand Standards Manual', desc: 'Every visual and communication standard adapted for franchise application. No outlet deviates from this.' },
              { num: '03', name: 'Operations Manual Framework', desc: 'Structural outline and section templates for the complete operations manual. The franchisee\'s operating bible.' },
              { num: '04', name: 'Fee and Royalty Architecture', desc: 'Commercial structure for franchise fee, royalty, marketing fund, and financial disclosure model with projections.' },
              { num: '05', name: 'Franchisee Qualification Framework', desc: 'Ideal franchisee profile, application format, interview guide, and disqualification criteria. Selection is a brand decision.' },
              { num: '06', name: 'Legal Brief for Franchise Agreement', desc: 'Comprehensive brief covering all clauses required in the franchise agreement for external legal drafting.' },
              { num: '07', name: 'Franchise Pitch Deck', desc: 'Presentation for prospective franchisees positioning the Nirva opportunity with financial model and market rationale.' },
              { num: '08', name: 'Marketing Governance System', desc: 'Brand fund protocol, local marketing guidelines, central campaign calendar, and franchisee communication playbook.' },
              { num: '09', name: 'Pilot Performance Dashboard', desc: 'KPI framework measuring pilot outlet performance across footfall, conversion, basket value, and compliance.' },
              { num: '10', name: 'Quarterly Brand Audit Framework', desc: 'Audit checklist, scoring system, and performance improvement protocol for ongoing network governance.' }
            ].map((del, idx) => (
              <div key={idx} className="bg-white/5 p-7 md:p-8 flex items-start gap-5 transition-colors duration-250 hover:bg-white/10 cursor-default">
                <div className="font-display text-3xl font-light text-violet-400 shrink-0 leading-none pt-0.5">{del.num}</div>
                <div>
                  <div className="text-[14px] font-medium text-white mb-1">{del.name}</div>
                  <div className="text-[12.5px] text-white/50 leading-relaxed">{del.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCORECARD */}
      <section className="relative z-10 bg-[#F8F5FF] py-16 md:py-28 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="reveal  translate-y-8 transition-all duration-700 inline-flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase text-violet-800 mb-8 before:content-[''] before:w-6 before:h-px before:bg-violet-800">
            18 · How We Will Measure Progress
          </div>
          <h2 className="reveal  translate-y-8 transition-all duration-700 delay-100 font-display text-[clamp(1.8rem,4vw,3.2rem)] font-light text-[#0F0A1A] mb-4 max-w-[700px]">
            Brand Health Measurement Scorecard
          </h2>
          <p className="reveal  translate-y-8 transition-all duration-700 delay-200 text-[15px] leading-relaxed text-[#3D2D5C] mb-10 max-w-[600px]">
            Five metrics tracked across the engagement to ensure the franchise architecture builds brand capital, not just operational infrastructure.
          </p>
          <div className="reveal  translate-y-8 transition-all duration-700 grid grid-cols-2 md:grid-cols-5 gap-6 mt-10">
            {[
              { metric: 'Franchise Readiness', val: '15%', dir: 'Building' },
              { metric: 'Brand Consistency', val: '40%', dir: 'Standardising' },
              { metric: 'Legal Protection', val: '10%', dir: 'Registering' },
              { metric: 'Commercial Model', val: '20%', dir: 'Designing' },
              { metric: 'Market Authority', val: '35%', dir: 'Positioning' },
            ].map((score, idx) => (
              <div key={idx} className="p-8 bg-white border border-violet-800/15 border-t-[3px] border-t-violet-800 text-center cursor-default transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(91,33,182,0.1)]">
                <div className="text-[10px] tracking-[0.15em] uppercase text-[#7C6A9A] mb-4">{score.metric}</div>
                <div className="h-1 bg-violet-100 rounded-sm mb-2 overflow-hidden">
                  <div className="score-bar-fill h-full bg-violet-800 rounded-sm" style={{ width: score.val }}></div>
                </div>
                <div className="text-[11px] text-violet-800 font-medium mt-3 italic font-display">{score.dir}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INVESTMENT */}
      <section className="relative z-10 bg-white py-16 md:py-28 px-6 md:px-12">
        <div className="max-w-[900px] mx-auto">
          <div className="reveal  translate-y-8 transition-all duration-700 inline-flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase text-violet-800 mb-8 before:content-[''] before:w-6 before:h-px before:bg-violet-800">
            20 · The Investment and What It Means
          </div>
          <h2 className="reveal  translate-y-8 transition-all duration-700 delay-100 font-display text-[clamp(1.8rem,4vw,3.2rem)] font-light text-[#0F0A1A] mb-4 max-w-[700px]">
            This Is Not a Cost. <strong className="font-semibold">It Is the Foundation Fee.</strong>
          </h2>
          <p className="reveal  translate-y-8 transition-all duration-700 delay-200 text-[15px] leading-relaxed text-[#3D2D5C] mb-10">
            Every rupee of this engagement goes toward building an architecture that prevents the two most expensive outcomes in franchise: brand dilution from an underprepared franchisee, and legal exposure from an undocumented franchise relationship. The investment protects multiples of itself.
          </p>
          <div className="reveal  translate-y-8 transition-all duration-700 max-w-[800px] mx-auto border border-violet-800/15 rounded-sm overflow-hidden">
            <div className="bg-violet-950 p-10 md:p-12 flex flex-col md:flex-row md:justify-between items-start md:items-end gap-6">
              <div className="font-display text-base font-light italic text-violet-400">Magsmen Franchise Architecture Engagement</div>
              <div className="font-display text-5xl md:text-6xl font-light text-white leading-none">
                <sup className="text-xl align-top mr-1">₹</sup>5,50,000 <span className="text-base text-violet-400 font-body ml-2">+ GST</span>
              </div>
            </div>
            <div className="p-10 md:p-12 bg-white">
              <div className="flex justify-between items-center py-4 text-[15px] font-medium border-b-0">
                <span className="text-[#0F0A1A]">Total Engagement Fee</span>
                <span className="text-lg text-violet-800">₹ 5,50,000 + GST</span>
              </div>
              <div className="mt-6 pt-6 border-t border-violet-800/15 text-[12px] text-[#7C6A9A] leading-relaxed">
                Payment structured across milestones aligned to phase delivery. Travel for site visits billed at actuals. Legal drafting, store design, and technology implementation are separate engagements coordinated but not executed by Magsmen. Validity of this proposal: 30 days from date of issue.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY MAGSMEN */}
      <section className="relative z-10 bg-white py-16 md:py-28 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="reveal  translate-y-8 transition-all duration-700 inline-flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase text-violet-800 mb-8 before:content-[''] before:w-6 before:h-px before:bg-violet-800">
            21 · Why Magsmen
          </div>
          <h2 className="reveal  translate-y-8 transition-all duration-700 delay-100 font-display text-[clamp(1.8rem,4vw,3.2rem)] font-light text-[#0F0A1A] mb-4 max-w-[700px]">
            We Build Systems, <strong className="font-semibold">Not Stories.</strong>
          </h2>
          <div className="reveal  translate-y-8 transition-all duration-700 delay-200 grid grid-cols-1 md:grid-cols-2 gap-[2px] bg-violet-800/15 border border-violet-800/15 rounded-sm mt-10 overflow-hidden">
            {[
              { num: '01', title: 'Category Intelligence Without Conflict of Interest', desc: 'Magsmen has no financial stake in how many franchisees you sign. Our engagement ends when the system is built correctly, not when the target number is achieved. That independence is what makes the advice trustworthy.' },
              { num: '02', title: 'The 13-Stage Framework Applies Here', desc: 'The same discipline that structures brand creation from scratch governs how we build franchise systems. Every stage has a gate. No gate is skipped. Magsmen has applied this framework across consumer, retail, and services categories including regional brands expanding into new markets.' },
              { num: '03', title: 'We Understand the Indian Franchise Market', desc: 'Franchise in India is governed by contract law, not dedicated franchise legislation. The commercial and legal architecture must be designed specifically for Indian operating conditions, community dynamics, and regional consumer behavior. We do not apply a global template to an Indian problem.' },
              { num: '04', title: 'We Tell You What You Need to Hear', desc: 'If the franchise readiness audit reveals that the brand is not ready, we will say so and define exactly what must change before moving forward. Our value is in the precision of the diagnosis, not in the comfort of the conclusion.' },
            ].map((card, idx) => (
              <div key={idx} className="bg-white p-10 transition-colors duration-250 hover:bg-[#F8F5FF]">
                <div className="font-display text-4xl font-light text-violet-100 mb-2">{card.num}</div>
                <div className="text-[14px] font-medium text-[#0F0A1A] mb-3">{card.title}</div>
                <div className="text-[13px] text-[#7C6A9A] leading-relaxed">{card.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="relative z-10 bg-violet-950 py-32 px-6 md:px-12 text-center overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[60vw] font-light text-white/5 pointer-events-none select-none">N</div>
        <div className="relative z-10">
          <div className="text-[10px] tracking-[0.2em] uppercase text-violet-400 mb-8">22 · What Happens Next</div>
          <h2 className="font-display text-[clamp(2rem,5vw,5rem)] font-light text-white mb-6 leading-tight">
            The path is clear.<br />
            The <em className="italic text-violet-400">decision</em> is yours.
          </h2>
          <p className="text-[15px] text-white/50 max-w-[560px] mx-auto mb-12 leading-relaxed">
            Confirm the engagement. We begin the Franchise Readiness Audit within ten business days. Every week you move without the system, the brand carries the risk. Every week you build with it, the brand builds the category.
          </p>
          <a 
            href="mailto:connect@magsmen.com?subject=Nirva%20%E2%80%94%20Proposal%20Accepted%3A%20Please%20Move%20Forward" 
            className="inline-block bg-white text-violet-950 px-12 py-4 font-body text-[12px] font-medium tracking-[0.12em] uppercase border-none rounded-sm cursor-pointer transition-all duration-200 hover:bg-violet-400 hover:text-white hover:-translate-y-0.5 no-underline"
          >
            Confirm This Engagement
          </a>
          <div className="mt-10 text-[12px] text-white/25 tracking-[0.06em]">
            Proposal valid until 7 June 2025 · Prepared exclusively for Nirva
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 bg-[#0F0A1A] py-10 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="text-[11px] tracking-[0.12em] uppercase text-white/30 text-center md:text-left">
          Magsmen Strategy Consultants · A division of Grofesion Innovations Pvt Ltd
        </div>
        <div className="text-[11px] text-white/20 italic font-display text-center md:text-right">
         
        </div>
      </footer>
    </div>
  );
}