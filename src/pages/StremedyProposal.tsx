import React from 'react';
import logo from "/assets/magsmen-new-logo-white-landscape.png"
import { useState, useEffect, FormEvent } from 'react';
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

const StremedyProposal = () => {

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
    <div className="font-sans text-[#111] bg-white min-h-screen">
      {/* COVER */}
      <div className="bg-[#0d0d0d] min-h-screen flex flex-col justify-between py-12 px-14 relative overflow-hidden">
        {/* Angled Background Shape */}
        <div 
          className="absolute -left-[60px] top-0 bottom-0 w-[220px] bg-gradient-to-b from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] opacity-60 z-0"
          style={{ clipPath: 'polygon(30% 0%, 60% 0%, 100% 100%, 70% 100%)' }}
        />

        <div className="relative z-10 ">
          <img className="w-40 h-10" src={logo}/>
        </div>

        <div className="relative z-10 my-16">
          <div className="text-[#666] text-[11px] tracking-[3px] uppercase mb-[18px]">Strategic Proposal · Confidential</div>
          <div className="text-white text-[52px] font-bold leading-[1.1] mb-2 tracking-[-1px]">
            Brand Strategy<br />
            <span className="text-[#888] font-light">&amp; Growth</span><br />
            Proposal
          </div>
          <div className="text-[#c8c8c8] text-[18px] mt-4 font-light">
            Prepared exclusively for <strong className="text-white font-bold">Stremedy</strong>
          </div>
          <div className="text-[#555] text-[12px] mt-[6px]">Founder: Rakshith Kumar M &nbsp;·&nbsp; May 2025</div>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="text-white text-[22px] font-light leading-[1.3]">
            Clear Vision.<br />
            <strong className="font-bold">Calm Approach.</strong><br />
            <strong className="font-bold text-[26px]">Bold Moves.</strong>
          </div>
          <div className="text-left md:text-right text-[#555] text-[11px] leading-[1.8]">
            connect@magsmen.com<br />
            +91 90449 10449<br />
            www.magsmen.com
          </div>
        </div>
      </div>

      {/* 01 CONTEXT */}
      <div className="py-[60px] px-14 border-b border-[#f0f0f0]">
        <div className="text-[10px] tracking-[3px] text-[#aaa] uppercase mb-[6px]">01 — Context</div>
        <div className="text-[30px] font-bold text-[#0d0d0d] mb-[6px] tracking-[-0.5px]">Why we're here</div>
        <div className="text-[14px] text-[#666] mb-[36px] max-w-[600px] leading-[1.6]">
          Following our recent conversation, we have summarised Stremedy's requirements and mapped them to Magsmen's strategic capabilities in building credible, high-performing brands.
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-[#f8f8f8] rounded-[10px] p-6">
            <h4 className="text-[11px] tracking-[2px] uppercase text-[#aaa] mb-[10px]">The Brief</h4>
            <p className="text-[14px] text-[#333] leading-[1.7]">
              Stremedy is looking to build a strong and credible brand in the health and wellness space. The goal is a brand that commands trust, drives growth, and is built to scale not just look good.
            </p>
          </div>
          <div className="bg-[#f8f8f8] rounded-[10px] p-6">
            <h4 className="text-[11px] tracking-[2px] uppercase text-[#aaa] mb-[10px]">The Challenge</h4>
            <p className="text-[14px] text-[#333] leading-[1.7]">
              Health and wellness is a crowded and increasingly sceptical market. Without a clear strategy, a defined voice, and a disciplined go-to-market approach, even great products remain invisible. Stremedy needs all of that built as one system.
            </p>
          </div>
        </div>
      </div>

      {/* 02 WHO WE ARE */}
      <div className="py-[60px] px-14 border-b border-[#f0f0f0]">
        <div className="text-[10px] tracking-[3px] text-[#aaa] uppercase mb-[6px]">02 — About Magsmen</div>
        <div className="text-[30px] font-bold text-[#0d0d0d] mb-[6px] tracking-[-0.5px]">Who we are</div>
        <div className="text-[14px] text-[#666] mb-[36px] max-w-[600px] leading-[1.6]">
          We are strategy consultants that help businesses perform with clarity. We don't add activity. We remove confusion.
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          <div>
            <div className="flex gap-[14px] items-start mb-[18px]">
              <div className="w-[6px] h-[6px] rounded-full bg-[#0d0d0d] mt-[6px] shrink-0"></div>
              <p className="text-[14px] text-[#444] leading-[1.6]">We work across brand, business structure, and leadership as one integrated system — not separate functions.</p>
            </div>
            <div className="flex gap-[14px] items-start mb-[18px]">
              <div className="w-[6px] h-[6px] rounded-full bg-[#0d0d0d] mt-[6px] shrink-0"></div>
              <p className="text-[14px] text-[#444] leading-[1.6]">We identify what is slowing the business down, fix the structure, and align decision-making.</p>
            </div>
            <div className="flex gap-[14px] items-start mb-[18px]">
              <div className="w-[6px] h-[6px] rounded-full bg-[#0d0d0d] mt-[6px] shrink-0"></div>
              <p className="text-[14px] text-[#444] leading-[1.6]">We work directly with leadership to ensure strategy is not just defined but applied and lived every day.</p>
            </div>
            <div className="flex gap-[14px] items-start mb-[18px]">
              <div className="w-[6px] h-[6px] rounded-full bg-[#0d0d0d] mt-[6px] shrink-0"></div>
              <p className="text-[14px] text-[#444] leading-[1.6]">Recognised by Clutch (4.9 rating, 133 reviews), IMA, and Entrepreneur Magazine. 3 out of 4 clients actively refer us.</p>
            </div>
          </div>
          <div>
            <p className="text-[12px] text-[#aaa] tracking-[2px] uppercase mb-3">Selected Clients</p>
            <div className="flex flex-wrap gap-[10px] mt-5">
              {['Tenali Double Horse', 'Cargill', 'Telugu Foods', 'Chakrasiddh', 'MR Constructions', 'Swargaseema', 'LVLUP', 'VSB Group', 'Suma Filmy Arts', 'Pronted', 'Disney+ Hotstar', 'VIT-AP University'].map(client => (
                <span key={client} className="text-[11px] font-medium text-[#444] bg-[#f2f2f2] rounded-full py-[5px] px-[14px]">
                  {client}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 03 HOW WE WORK */}
      <div className="py-[60px] px-14 border-b border-[#f0f0f0]">
        <div className="text-[10px] tracking-[3px] text-[#aaa] uppercase mb-[6px]">03 — Our Approach</div>
        <div className="text-[30px] font-bold text-[#0d0d0d] mb-[6px] tracking-[-0.5px]">How we work</div>
        <div className="text-[14px] text-[#666] mb-[36px] max-w-[600px] leading-[1.6]">
          Structured. Direct. Execution-focused. Every step is tied to a business outcome.
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[14px]">
          {[
            { num: '01', title: 'Diagnose', desc: 'We study your business, market, customers, and challenges before suggesting anything.' },
            { num: '02', title: 'Position', desc: 'We identify the position your brand must own value proposition, target segments, and market role.' },
            { num: '03', title: 'Build', desc: 'We translate strategy into tangible components identity, messaging, and digital presence.' },
            { num: '04', title: 'Apply', desc: 'We guide your team and ensure the brand lives consistently across every touchpoint.' }
          ].map((step) => (
            <div key={step.num} className="border border-[#e8e8e8] rounded-[10px] py-5 px-4">
              <div className="text-[28px] font-bold text-[#e8e8e8] mb-2">{step.num}</div>
              <div className="text-[13px] font-semibold text-[#0d0d0d] mb-[6px]">{step.title}</div>
              <div className="text-[12px] text-[#888] leading-[1.5]">{step.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 04 SCOPE OF WORK */}
      <div className="py-[60px] px-14 border-b border-[#f0f0f0]">
        <div className="text-[10px] tracking-[3px] text-[#aaa] uppercase mb-[6px]">04 — Scope of Work</div>
        <div className="text-[30px] font-bold text-[#0d0d0d] mb-[6px] tracking-[-0.5px]">What we will deliver</div>
        <div className="text-[14px] text-[#666] mb-[36px] max-w-[600px] leading-[1.6]">
          Five strategic pillars, each with a defined deliverable, timeline, and investment.
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse min-w-[700px]">
            <thead>
              <tr>
                <th className="w-[28%] text-[10px] tracking-[2px] uppercase text-[#aaa] text-left py-2.5 px-4 border-b border-[#e8e8e8]">Strategic Pillar</th>
                <th className="w-[38%] text-[10px] tracking-[2px] uppercase text-[#aaa] text-left py-2.5 px-4 border-b border-[#e8e8e8]">Core Deliverable</th>
                <th className="w-[14%] text-[10px] tracking-[2px] uppercase text-[#aaa] text-left py-2.5 px-4 border-b border-[#e8e8e8]">Timeline</th>
                <th className="w-[20%] text-[10px] tracking-[2px] uppercase text-[#aaa] text-left py-2.5 px-4 border-b border-[#e8e8e8]">Investment</th>
              </tr>
            </thead>
            <tbody>
              {[
                { num: '01', name: 'Brand Strategy & Positioning', desc: 'A strategic framework document containing brand purpose, target audience personas, and unique selling proposition.', time: '3 weeks', price: '₹2,00,000', note: 'One-time' },
                { num: '02', name: 'Brand Identity & Guidelines', desc: 'A comprehensive brand book featuring the logo, colour palette, typography, and rules for visual application.', time: '4–6 weeks', price: 'from ₹70,000', note: 'Starts at' },
                { num: '03', name: 'Go-to-Market Strategy', desc: 'A launch plan detailing distribution channels, pricing models, and specific sales objectives.', time: '3 weeks', price: '₹75,000', note: 'One-time' },
                { num: '04', name: 'Content & Communication', desc: 'A content calendar and messaging matrix that outlines what to say across different platforms.', time: '3 weeks', price: '₹75,000', note: 'One-time' },
              ].map((row, idx) => (
                <tr key={idx} className="border-b border-[#f2f2f2] hover:bg-[#fafafa]">
                  <td className="py-[18px] px-4 align-middle">
                    <div className="text-[10px] text-[#ccc] font-medium mb-1">{row.num}</div>
                    <div className="text-[15px] font-semibold text-[#0d0d0d]">{row.name}</div>
                  </td>
                  <td className="py-[18px] px-4 align-middle">
                    <div className="text-[12px] text-[#777] leading-[1.6]">{row.desc}</div>
                  </td>
                  <td className="py-[18px] px-4 align-middle">
                    <div className="inline-block text-[11px] font-semibold text-[#0d0d0d] bg-[#f0f0f0] rounded-full py-1 px-3">{row.time}</div>
                  </td>
                  <td className="py-[18px] px-4 align-middle">
                    <div className="text-[16px] font-bold text-[#0d0d0d]">{row.price}</div>
                    <div className="text-[11px] text-[#aaa] mt-[2px]">{row.note}</div>
                  </td>
                </tr>
              ))}
              <tr className="border-b border-[#f2f2f2] hover:bg-[#fafafa]">
                <td className="py-[18px] px-4 align-middle">
                  <div className="text-[10px] text-[#ccc] font-medium mb-1">05</div>
                  <div className="text-[15px] font-semibold text-[#0d0d0d]">Digital Marketing &amp; Lead Generation</div>
                </td>
                <td className="py-[18px] px-4 align-middle">
                  <div className="text-[12px] text-[#777] leading-[1.6]">Active ad campaigns and landing pages designed to capture qualified leads via a trusted agency partner.</div>
                  <div className="inline-block text-[10px] bg-[#fff3cd] text-[#8a6600] rounded py-[2px] px-2 mt-1">Requires external agency — cost TBD</div>
                </td>
                <td className="py-[18px] px-4 align-middle">
                  <div className="inline-block text-[11px] font-semibold text-[#0d0d0d] bg-[#f0f0f0] rounded-full py-1 px-3">TBD</div>
                </td>
                <td className="py-[18px] px-4 align-middle">
                  <div className="text-[16px] font-bold text-[#0d0d0d]">Variable</div>
                  <div className="text-[11px] text-[#aaa] mt-[2px]">Agency-dependent</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex flex-wrap gap-5 mt-7">
          <div className="flex-1 min-w-[160px] bg-[#f8f8f8] text-[#0d0d0d] rounded-[10px] py-5 px-6">
            <div className="text-[10px] tracking-[2px] uppercase text-[#aaa] mb-[6px]">Confirmed Investment (excl. Digital)</div>
            <div className="text-[24px] font-bold">₹4,20,000+</div>
          </div>
          <div className="flex-1 min-w-[160px] bg-[#0d0d0d] text-white rounded-[10px] py-5 px-6">
            <div className="text-[10px] tracking-[2px] uppercase text-[#666] mb-[6px]">Total Project Duration</div>
            <div className="text-[24px] font-bold">10–15 weeks</div>
          </div>
          <div className="flex-1 min-w-[160px] bg-[#f8f8f8] text-[#0d0d0d] rounded-[10px] py-5 px-6">
            <div className="text-[10px] tracking-[2px] uppercase text-[#aaa] mb-[6px]">Business Growth Focus</div>
            <div className="text-[24px] font-bold">Health &amp; Wellness</div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#0d0d0d] py-[60px] px-14 text-center">
        <h2 className="text-white text-[32px] font-bold mb-3 tracking-[-0.5px]">Let's build Stremedy together.</h2>
        <p className="text-[#888] text-[15px] mb-8">When clarity leads, brands win. We are ready to begin as soon as you are.</p>
        
        <div className="flex justify-center gap-10 flex-wrap">
          <div className="text-center">
            <div className="text-[10px] tracking-[2px] uppercase text-[#555] mb-1">Email</div>
            <div className="text-[15px] text-white font-medium">connect@magsmen.com</div>
          </div>
          <div className="text-center">
            <div className="text-[10px] tracking-[2px] uppercase text-[#555] mb-1">Phone</div>
            <div className="text-[15px] text-white font-medium">+91 90449 10449</div>
          </div>
          <div className="text-center">
            <div className="text-[10px] tracking-[2px] uppercase text-[#555] mb-1">Website</div>
            <div className="text-[15px] text-white font-medium">www.magsmen.com</div>
          </div>
          <div className="text-center">
            <div className="text-[10px] tracking-[2px] uppercase text-[#555] mb-1">Offices</div>
            <div className="text-[15px] text-white font-medium">Guntur · Hyderabad · Australia</div>
          </div>
        </div>
        
        <div className="mt-10 text-[#444] text-[11px]">
          © 2025 Magsmen Strategy Consultants · Grofesion Innovations Pvt. Ltd. · Confidential — prepared exclusively for Stremedy / Rakshith Kumar M
        </div>
      </div>
    </div>
  );
};

export default StremedyProposal;