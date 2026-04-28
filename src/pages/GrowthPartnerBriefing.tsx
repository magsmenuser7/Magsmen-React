import React from 'react';
import emailjs from '@emailjs/browser';
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


export default function GrowthPartnerBriefing() {
  const services = [
    {
      name: 'Brand Expresso',
      desc: '90-day brand transformation programme. Full brand audit, strategy, positioning, and communication structure.',
      price: 'From ₹3,00,000',
    },
    {
      name: 'Brand Consulting',
      desc: 'Strategic advisory for businesses building or restructuring their brand identity and market presence.',
      price: 'From ₹1,00,000',
    },
    {
      name: 'Brand Creation',
      desc: 'Full brand build from zero — naming, identity, positioning, and go-to-market strategy.',
      price: 'From ₹5,00,000',
    },
    {
      name: 'Corporate Rebranding',
      desc: 'Strategic repositioning for established businesses needing to reset their brand perception.',
      price: 'From ₹3,00,000',
    },
    {
      name: 'Stature by Magsmen',
      desc: 'Personal brand consulting for founders, executives, and professionals building individual authority.',
      price: '₹1.5L – ₹20L+',
    },
    {
      name: 'Brand Naming',
      desc: 'Strategic naming and trademark class structuring for new ventures and product lines.',
      price: 'From ₹25,000',
    },
  ];

  const clients = [
    {
      initial: 'NRT',
      name: 'AP NRT — AP Government Supported Organisation',
      desc: 'Official strategic partners. When the organisation needs to make a significant direction-setting decision, we advise on the strategic path forward. Ongoing engagement.',
      tag: 'Strategic Advisory · Government',
    },
    {
      initial: 'HH',
      name: 'Habitat Hypermarkets — AP Retail Chain',
      desc: 'Launched flagship store with full positioning and brand identity. Revenue of ₹8 crore in year one. Category leader in the region.',
      tag: 'Brand Launch · Retail · AP',
    },
    {
      initial: 'LU',
      name: 'LVL UP — Multi-Brand Fashion Retail, Khammam',
      desc: 'Positioned and launched from ground up. ₹16 crore in revenue within 17 months of opening. Break-even achieved in 7 months.',
      tag: 'Brand Launch · Retail · AP & TG',
    },
  ];

  const idealClients = [
    {
      label: 'Business stage',
      text: 'Operating and generating revenue. Not a startup idea. A real business that is ready to grow but lacks the structure to scale.',
    },
    {
      label: 'Mindset',
      text: 'They understand what a consultant does. They don\'t expect us to run their social media. They know strategy is the gap.',
    },
    {
      label: 'Geography',
      text: 'Primarily Andhra Pradesh and Telangana. Regional businesses with ambitions beyond their current market.',
    },
    {
      label: 'Budget readiness',
      text: 'Has a budget for brand operations. Not looking for the cheapest option. Understands that strategy has a cost.',
    },
  ];

  const rightFit = [
    'Businesses that know they need to scale but don\'t know how',
    'Founders who want to build a brand, not just a business',
    'Companies with no brand communication structure',
    'Businesses entering a new market or repositioning',
    'Entrepreneurs building personal authority',
  ];

  const notFit = [
    'Looking only for design, logo, or social media',
    'No budget for strategic investment',
    'Not yet operational or revenue-generating',
    'Wants execution, not strategy',
    'Expects quick-fix results',
  ];

  const journeySteps = [
    {
      num: '1',
      tag: 'Your responsibility',
      title: 'Identify the lead',
      desc: 'Use this document to filter your network. If a business fits the profile they\'re operating, they want to scale, they understand strategy they are a potential lead. You approach them first.',
    },
    {
      num: '2',
      tag: 'Your responsibility',
      title: 'Warm them up and qualify',
      desc: 'Have an initial conversation. Understand their business, what they\'re struggling with, and whether they\'re open to strategic help. You can share Magsmen\'s approved materials and quote from the approved pricing list. You do not close alone, your job is to warm them up and confirm the fit.',
    },
    {
      num: '3',
      tag: 'Your responsibility',
      title: 'Bring them into a Magsmen-led conversation',
      desc: 'Once they\'re ready, you bring them to a discovery meeting led by Magsmen. You are present in this meeting. You do not present, Magsmen leads. Your role here is relationship continuity the lead already trusts you, and you keep that bridge strong.',
    },
    {
      num: '4',
      tag: 'Your responsibility',
      title: 'Stay through every meeting',
      desc: 'You attend every follow-up conversation, proposal presentation, and closing discussion. You are the constant. Magsmen handles the strategy and commercial conversation you manage the relationship and the prospect\'s confidence.',
    },
    {
      num: '5',
      tag: 'Your responsibility',
      title: 'Re-engage if they go cold',
      desc: 'If the prospect goes quiet or pulls back, re-engagement is your responsibility. You know them you have the relationship. Magsmen will support you with context and materials, but the follow-through is yours.',
    },
    {
      num: '6',
      tag: 'Magsmen\'s responsibility',
      title: 'Close and onboard',
      desc: 'Once the prospect is ready, Magsmen handles the proposal, contract, and onboarding. You earn your commission as the client pays tranche by tranche.',
    },
  ];

  const boundaries = [
    'You can quote from Magsmen\'s approved pricing list. You cannot negotiate or offer discounts without Founder approval.',
    'You cannot make commitments on scope, deliverables, or timelines on Magsmen\'s behalf. All scope is set by the Head of Operations.',
    'Every lead must be logged in Magsmen\'s system before any meeting happens. No log means no commission claim.',
    'You do not share Magsmen\'s internal pricing structure, commission rates, or this briefing document with any lead or third party.',
  ];


  // Authentication / Registration state
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [successMessage, setSuccessMessage] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

  // Dashboard State management
  const [activeTab, setActiveTab] = useState<TabType>('millets');

    // ================= USER STORAGE =================
type UserData = {
  email: string;
};
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


  return (
    <div className="min-h-screen bg-white font-[\'Inter\',sans-serif] text-[15px] leading-relaxed text-gray-900 p-12 max-w-4xl mx-auto">
      {/* Logo Bar */}
      <div className="flex justify-between items-center pb-7 border-b border-gray-300 mb-10">
        <div>
          <img className='w-80 h-110' src='/assets/blacklogohorizontal.png'/>
        </div>
        <div className="text-xs tracking-wider uppercase text-gray-600 border border-gray-300 px-3 py-1 rounded">
          Growth Partner Briefing
        </div>
      </div>

      {/* Headline */}
      <h1 className="text-2xl font-semibold leading-tight mb-2.5 text-gray-950">
        What Magsmen does and your role in growing it
      </h1>
      <p className="text-sm text-gray-500 mb-10 leading-relaxed">
        This document tells you everything you need to know to identify the right businesses, have the right conversation, and stay involved through every stage until they become a client.
      </p>

      {/* Who we are section */}
      <div className="text-xs tracking-widest uppercase text-gray-600 mb-3.5 font-medium">Who we are</div>
      <h2 className="text-base font-semibold text-gray-950 mb-3">Not an agency. A consultancy.</h2>
      <p className="text-gray-700 mb-3.5 text-sm">
        Magsmen is a strategy consultancy based in Andhra Pradesh. We work at the level of a founder's vision helping businesses that are ready to grow but don't have the structure to do it correctly.
      </p>
      <p className="text-gray-700 mb-5 text-sm">
        Most businesses confuse branding with design or social media. We don't work at that level. We work on brand equity, market positioning, communication architecture, and long-term business identity the things that determine how a business is perceived, valued, and chosen in the market.
      </p>

      {/* Highlight Box */}
      <div className="bg-gray-50 border-l-4 border-gray-950 px-5 py-4 my-5 rounded-r-lg">
        <p className="text-sm text-gray-700 m-0">
          We are strategy first. We don't take on execution-only work. The businesses that work best with us already understand what a consultant does they come to us because strategy is the missing piece, not just design or content.
        </p>
      </div>

      <div className="h-px bg-gray-100 my-9" />

      {/* Services Section */}
      <div className="text-xs tracking-widest uppercase text-gray-600 mb-3.5 font-medium">What we do</div>
      <h2 className="text-base font-semibold text-gray-950 mb-4">Our services</h2>

      <div className="grid grid-cols-2 gap-3 my-4">
        {services.map((service, idx) => (
          <div key={idx} className="border border-gray-200 rounded-lg p-3.5">
            <div className="text-sm font-semibold text-gray-950 mb-1">{service.name}</div>
            <div className="text-xs text-gray-600 leading-relaxed">{service.desc}</div>
            <div className="text-xs text-gray-500 mt-1.5">{service.price}</div>
          </div>
        ))}
      </div>

      <div className="h-px bg-gray-100 my-9" />

      {/* Clients Section */}
      <div className="text-xs tracking-widest uppercase text-gray-600 mb-3.5 font-medium">Our work</div>
      <h2 className="text-base font-semibold text-gray-950 mb-4">Businesses we have worked with</h2>

      <div className="flex flex-col gap-3 my-4">
        {clients.map((client, idx) => (
          <div key={idx} className="flex gap-4 items-start border border-gray-200 rounded-lg p-3.5">
            <div className="w-10 h-10 rounded-md bg-gray-950 text-white text-sm font-semibold flex items-center justify-center flex-shrink-0">
              {client.initial}
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-950">{client.name}</div>
              <div className="text-xs text-gray-600 leading-relaxed mt-0.5">{client.desc}</div>
              <div className="inline-block text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded mt-1.5">
                {client.tag}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="h-px bg-gray-100 my-9" />

      {/* Ideal Client Section */}
      <div className="text-xs tracking-widest uppercase text-gray-600 mb-3.5 font-medium">Who to bring</div>
      <h2 className="text-base font-semibold text-gray-950 mb-4">The right client for Magsmen</h2>

      <div className="grid grid-cols-2 gap-3 my-4">
        {idealClients.map((client, idx) => (
          <div key={idx} className="border border-gray-200 rounded-lg p-3.5">
            <div className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">{client.label}</div>
            <div className="text-sm text-gray-700 leading-relaxed">{client.text}</div>
          </div>
        ))}
      </div>

      {/* Right Fit vs Not Fit */}
      <div className="grid grid-cols-2 gap-3 my-4">
        <div className="bg-green-50 border border-green-200 rounded-lg p-3.5">
          <div className="text-xs font-semibold tracking-wider text-green-900 mb-2">Right fit</div>
          {rightFit.map((item, idx) => (
            <div key={idx} className="text-sm text-gray-700 mb-1.5 pl-3 relative">
              <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-gray-400"></span>
              {item}
            </div>
          ))}
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-3.5">
          <div className="text-xs font-semibold tracking-wider text-red-900 mb-2">Not a fit</div>
          {notFit.map((item, idx) => (
            <div key={idx} className="text-sm text-gray-700 mb-1.5 pl-3 relative">
              <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-gray-400"></span>
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="h-px bg-gray-100 my-9" />

      {/* Journey Section */}
      <div className="text-xs tracking-widest uppercase text-gray-600 mb-3.5 font-medium">Your role</div>
      <h2 className="text-base font-semibold text-gray-950 mb-4">The full journey — from lead to client</h2>
      <p className="text-xs text-gray-600 mb-5">
        You are not just making an introduction. You stay in the room from the first conversation to the signed contract. Here is exactly what that looks like.
      </p>

      <div className="my-4">
        {journeySteps.map((step, idx) => (
          <div key={idx} className="grid grid-cols-[32px_1fr] gap-4 mb-0">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-gray-950 text-white text-xs font-semibold flex items-center justify-center">
                {step.num}
              </div>
              {idx < journeySteps.length - 1 && (
                <div className="w-px bg-gray-300 flex-1 min-h-[24px] my-1"></div>
              )}
            </div>
            <div className="pb-6">
              <div className="inline-block text-xs bg-gray-950 text-white px-2 py-0.5 rounded mb-1.5">
                {step.tag}
              </div>
              <div className="text-sm font-semibold text-gray-950 mb-0.5">{step.title}</div>
              <div className="text-sm text-gray-600 leading-relaxed">{step.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="h-px bg-gray-100 my-9" />

      {/* Boundaries Section */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 my-4">
        <div className="text-xs font-semibold uppercase tracking-wider text-amber-900 mb-2.5">
          Important — know your boundaries
        </div>
        {boundaries.map((item, idx) => (
          <div key={idx} className="text-sm text-gray-700 mb-1.5 pl-4 relative">
            <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-amber-600"></span>
            {item}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-12 pt-6 border-t border-gray-300 flex justify-between items-start text-xs">
        <div className="text-gray-600">
          <div className="font-medium">Magsmen Strategy Consultants</div>
          <div className="text-gray-500">Grofesion Innovations Private Limited</div>
          <div className="text-gray-400 tracking-wider mt-1.5">Confidential · For Growth Partner use only</div>
        </div>
        <div className="text-gray-600 text-right">
          <div>connect@magsmen.com</div>
          <div>+91 90449 10449</div>
          <div>magsmen.com</div>
        </div>
      </div>
    </div>
  );
}