import React from 'react';
import backgroungimage from "/assets/Final Brand presentation for printing.png" 
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


export default function MagsmensExplainer() {

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
    <div
  className="relative min-h-screen bg-cover 
             bg-[position:90%_center] 
             md:bg-center 
             flex items-center justify-center md:justify-end 
             p-4 md:p-6 font-sans"
  style={{
    backgroundImage: `url('/assets/Final Brand presentation for printing.png')`
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
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Header Section */}
      <div className="max-w-8xl mx-auto px-12 md:px-16 pt-12 pb-10 border-b border-gray-200">
        <div className="flex justify-between items-start mb-12">
          <div className="w-48 ">
           <img src='/assets/blacklogohorizontal.png'/>
          </div>
          <div className="text-xs font-medium tracking-tight px-3 py-2 border border-gray-300 rounded text-gray-600 bg-white">
            Growth Partner Briefing
          </div>
        </div>
      </div>
 
      {/* Main Content */}
      <div className="max-w-8xl mx-auto px-12 md:px-16 py-12 space-y-12">
        
        {/* Headline Section */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-gray-900 mb-4">
            What Magsmen does and your role in growing it
          </h2>
          <p className="text-base text-gray-600 leading-relaxed">
            This document tells you everything you need to know to identify the right businesses, have the right conversation, and stay involved through every stage until they become a client.
          </p>
        </div>
 
        {/* Section 1: Who We Are */}
        <div className="space-y-6">
          <div className="text-xs font-medium tracking-widest text-gray-500 uppercase">Who we are</div>
          <h3 className="text-lg font-semibold text-gray-900">Not an agency. A consultancy.</h3>
          <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
            <p>Magsmen is a strategy consultancy based in Andhra Pradesh. We work at the level of a founder's vision helping businesses that are ready to grow but don't have the structure to do it correctly.</p>
            <p>Most businesses confuse branding with design or social media. We don't work at that level. We work on brand equity, market positioning, communication architecture, and long term business identity the things that determine how a business is perceived, valued, and chosen in the market.</p>
          </div>
 
          {/* Highlight Box */}
          <div className="bg-gray-50 border-l-4 border-gray-900 pl-5 pr-5 py-4 rounded-r-lg my-6">
            <p className="text-sm text-gray-700 leading-relaxed">
              We are strategy first. We don't take on execution-only work. The businesses that work best with us already understand what a consultant does they come to us because strategy is the missing piece, not just design or content.
            </p>
          </div>
        </div>
 
        {/* Divider */}
        <div className="h-px bg-gray-100"></div>
 
        {/* Section 2: What We Do */}
        <div className="space-y-6">
          <div className="text-xs font-medium tracking-widest text-gray-500 uppercase">What we do</div>
          <h3 className="text-lg font-semibold text-gray-900">Our services</h3>
 
          {/* Services Grid */}
          <div className="space-y-4">
            <p className="text-xs text-gray-500 font-medium">Part 1 - Core Consulting</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <ServiceCard name="OTC — One-Time Consulting" desc="A rapid 3-step diagnostic: check the brand, find the problem, deliver the fix. No long-term commitment needed." price="₹35,000 – ₹95,000" />
              <ServiceCard name="Brand Expresso" desc="90-day sprint to revitalise an existing brand identity, strategy, purpose, and momentum." price="From ₹3,00,000" />
              <ServiceCard name="Brand Creation" desc="Full brand build from zero — naming, identity, pricing strategy, launch theme, and consistency guidelines." price="From ₹5,00,000" />
              <ServiceCard name="Brand Consulting" desc="Strategic advisory to differentiate the business and drive customer preference through aligned communication." price="From ₹1,00,000" />
              <ServiceCard name="Corporate Rebranding" desc="Strategic overhaul for established businesses whose identity no longer matches their ambition or market position." price="From ₹3,00,000" />
              <ServiceCard name="Brand Naming" desc="Creating unique, resonant names for new ventures, sub-brands, or product lines with trademark structuring." price="From ₹25,000 + ₹10K per class" />
              <ServiceCard name="Stature by Magsmen" desc="Personal brand and image consulting for founders, CEOs, and leaders. Legacy building, credibility, and presence." price="₹1.5L – ₹20L+" />
              <ServiceCard name="Linkfluence" desc="Digital narrative and reputation management for leaders, CEOs, NGOs, and companies controlling their online presence." price="Flat ₹35,000" />
            </div>
          </div>
 
          {/* Part 2: Advisory Consulting */}
          <div className="space-y-4 mt-12">
            <div className="space-y-3">
              <p className="text-sm text-gray-600 font-medium">Part 2 - Advisory Consulting (Annual Programme)</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                A 12-month preventative partnership where Magsmen acts as a senior strategic mind reviewing major decisions <span className="italic">before</span> they are made. For founders who understand that the cost of a wrong decision is far higher than the advisory fee.
              </p>
            </div>
 
            {/* Advisory Levels */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <AdvisoryCard level="Level 1 — Brand Advisory" desc="For stable companies making decisions around brand alignment, messaging, and identity." price="₹5,00,000 / year" />
                <AdvisoryCard level="Level 2 — Brand + Legal Advisory" desc="For growing brands needing legal coordination — contracts, trademarks, IP audits — alongside brand decisions. Includes 72-hour crisis response." price="₹7,50,000 / year" />
              </div>
              <div className="w-full">
                <AdvisoryCard level="Level 3 — Full Business Advisory" desc="For founders making interconnected brand, legal, and business decisions pricing changes, geographic expansion, business model audits. Includes direct meetings with the Founder." price="₹10,00,000 / year" isFullWidth={true} />
              </div>
            </div>
          </div>
 
          {/* Part 3: Legal Consulting */}
          <div className="space-y-4 mt-12">
            <p className="text-sm font-medium text-gray-600">Part 3 — Legal Consulting</p>
            <div className="border border-gray-200 rounded-lg p-5">
              <h4 className="text-base font-semibold text-gray-900 mb-3">Legal Consulting & Support</h4>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                Building structured back office legal infrastructure estate planning, trust drafting, paralegal documentation, and tax accounting. Primarily for offshore legal and tax firms needing an India delivery arm to scale without adding headcount.
              </p>
              <p className="text-xs text-gray-500 font-medium">Dedicated Team / Hourly Retainer / Per Deliverable — invoiced in USD</p>
            </div>
          </div>
        </div>
 
        {/* Divider */}
        <div className="h-px bg-gray-100"></div>
 
        {/* Section 3: Our Clients */}
        <div className="space-y-6">
          <div className="text-xs font-medium tracking-widest text-gray-500 uppercase">Recent work</div>
          <h3 className="text-lg font-semibold text-gray-900">Our clients have grown</h3>
 
          <div className="space-y-3">
            <ClientCard initials="BG" name="BrushGather — D2C Skincare, India" desc="Built brand from zero during a pandemic. Today, 3,000+ monthly repeat customers and recognized as a top indie skincare brand in the wellness community." tag="Brand Launch · D2C · Pan-India" />
            <ClientCard initials="VR" name="Vibe Retail — Fashion, Bengaluru" desc="Repositioned from generic retail to curated fashion destination. 120% growth YoY, expanded to 3 locations, waitlist driven launch events." tag="Brand Reposition · Retail · South India" />
            <ClientCard initials="SC" name="Samsuddha Collective — Furniture & Design, Hyderabad" desc="Premium positioning strategy and brand identity. From ₹12L annual revenue to ₹1.2 Cr in 18 months. High margin, design conscious customer base." tag="Brand Launch · Premium · Hyderabad" />
            <ClientCard initials="LU" name="LVL UP — Multi-Brand Fashion Retail, Khammam" desc="Positioned and launched from ground up. ₹16 crore in revenue within 17 months of opening. Break even achieved in 7 months." tag="Brand Launch · Retail · AP & TG" />
          </div>
        </div>
 
        {/* Divider */}
        <div className="h-px bg-gray-100"></div>
 
        {/* Section 4: Ideal Client */}
        <div className="space-y-6">
          <div className="text-xs font-medium tracking-widest text-gray-500 uppercase">Who to bring</div>
          <h3 className="text-lg font-semibold text-gray-900">The right client for Magsmen</h3>
 
          {/* Ideal Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="text-xs font-semibold tracking-wider text-gray-500 uppercase mb-3">Business stage</div>
              <p className="text-sm text-gray-700 leading-relaxed">Operating and generating revenue. Not a startup idea. A real business that is ready to grow but lacks the structure to scale.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="text-xs font-semibold tracking-wider text-gray-500 uppercase mb-3">Mindset</div>
              <p className="text-sm text-gray-700 leading-relaxed">They understand what a consultant does. They don't expect us to run their social media. They know strategy is the gap.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="text-xs font-semibold tracking-wider text-gray-500 uppercase mb-3">Geography</div>
              <p className="text-sm text-gray-700 leading-relaxed">Primarily Andhra Pradesh and Telangana. Regional businesses with ambitions beyond their current market.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="text-xs font-semibold tracking-wider text-gray-500 uppercase mb-3">Budget readiness</div>
              <p className="text-sm text-gray-700 leading-relaxed">Has a budget for brand operations. Not looking for the cheapest option. Understands that strategy has a cost.</p>
            </div>
          </div>
 
          {/* Yes/No Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="text-xs font-semibold text-green-800 uppercase tracking-wider mb-4">Right fit</div>
              <ul className="space-y-3">
                <li className="text-sm text-gray-700 flex items-start">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Businesses that know they need to scale but don't know how</span>
                </li>
                <li className="text-sm text-gray-700 flex items-start">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Founders who want to build a brand, not just a business</span>
                </li>
                <li className="text-sm text-gray-700 flex items-start">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Companies with no brand communication structure</span>
                </li>
                <li className="text-sm text-gray-700 flex items-start">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Businesses entering a new market or repositioning</span>
                </li>
                <li className="text-sm text-gray-700 flex items-start">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Entrepreneurs building personal authority</span>
                </li>
              </ul>
            </div>
 
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="text-xs font-semibold text-red-800 uppercase tracking-wider mb-4">Not a fit</div>
              <ul className="space-y-3">
                <li className="text-sm text-gray-700 flex items-start">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Looking only for design, logo, or social media</span>
                </li>
                <li className="text-sm text-gray-700 flex items-start">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>No budget for strategic investment</span>
                </li>
                <li className="text-sm text-gray-700 flex items-start">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Not yet operational or revenue generating</span>
                </li>
                <li className="text-sm text-gray-700 flex items-start">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Wants execution, not strategy</span>
                </li>
                <li className="text-sm text-gray-700 flex items-start">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Expects quick fix results</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
 
        {/* Divider */}
        <div className="h-px bg-gray-100"></div>
 
        {/* Section 5: The Journey */}
        <div className="space-y-6">
          <div className="text-xs font-medium tracking-widest text-gray-500 uppercase">Your role</div>
          <h3 className="text-lg font-semibold text-gray-900">The full journey from lead to client</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            You are not just making an introduction. You stay in the room from the first conversation to the signed contract. Here is exactly what that looks like.
          </p>
 
          {/* Journey Steps */}
          <div className="space-y-8 mt-8">
            <JourneyStep num="1" responsibility="Your responsibility" title="Identify the lead" desc="Use this document to filter your network. If a business fits the profile they're operating, they want to scale, they understand strategy they are a potential lead. You approach them first." />
            <JourneyStep num="2" responsibility="Your responsibility" title="Warm them up and qualify" desc="Have an initial conversation. Understand their business, what they're struggling with, and whether they're open to strategic help. You can share Magsmen's approved materials and quote from the approved pricing list. You do not close alone your job is to warm them up and confirm the fit." />
            <JourneyStep num="3" responsibility="Your responsibility" title="Bring them into a Magsmen led conversation" desc="Once they're ready, you bring them to a discovery meeting led by Magsmen. You are present in this meeting. You do not present Magsmen leads. Your role here is relationship continuity the lead already trusts you, and you keep that bridge strong." />
            <JourneyStep num="4" responsibility="Your responsibility" title="Stay through every meeting" desc="You attend every follow-up conversation, proposal presentation, and closing discussion. You are the constant. Magsmen handles the strategy and commercial conversation you manage the relationship and the prospect's confidence." />
            <JourneyStep num="5" responsibility="Your responsibility" title="Re-engage if they go cold" desc="If the prospect goes quiet or pulls back, re-engagement is your responsibility. You know them you have the relationship. Magsmen will support you with context and materials, but the follow-through is yours." />
            <JourneyStep num="6" responsibility="Magsmen's responsibility" title="Close and onboard" desc="Once the prospect is ready, Magsmen handles the proposal, contract, and onboarding. You earn your commission as the client pays tranche by tranche." />
          </div>
        </div>
 
        {/* Divider */}
        <div className="h-px bg-gray-100"></div>
 
        {/* Boundaries Section */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
          <div className="text-xs font-semibold text-amber-900 uppercase tracking-wider mb-4">Important — know your boundaries</div>
          <ul className="space-y-3">
            <li className="text-sm text-gray-700 flex items-start">
              <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>You can quote from Magsmen's approved pricing list. You cannot negotiate or offer discounts without Founder approval.</span>
            </li>
            <li className="text-sm text-gray-700 flex items-start">
              <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>You cannot make commitments on scope, deliverables, or timelines on Magsmen's behalf. All scope is set by the Head of Operations.</span>
            </li>
            <li className="text-sm text-gray-700 flex items-start">
              <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Every lead must be logged in Magsmen's system before any meeting happens. No log means no commission claim.</span>
            </li>
            <li className="text-sm text-gray-700 flex items-start">
              <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>You do not share Magsmen's internal pricing structure, commission rates, or this briefing document with any lead or third party.</span>
            </li>
          </ul>
        </div>
 
        {/* Footer */}
        <div className="pt-8 mt-12 border-t border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 text-xs">
          <div className="text-gray-600">
            <p className="font-medium">Magsmen Strategy Consultants</p>
            <p className="text-gray-400 text-xs mt-1">Grofesion Innovations Private Limited</p>
            <p className="text-gray-300 text-xs mt-2 tracking-wider uppercase">Confidential · For Growth Partner use only</p>
          </div>
          <div className="text-right text-gray-600 space-y-1">
            <p>connect@magsmen.com</p>
            <p>+91 90449 10449</p>
            <p>magsmen.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
 
// Component: Advisory Card
function AdvisoryCard({ level, desc, price, isFullWidth = false }) {
  return (
    <div className={`border border-gray-300 rounded-lg p-5 ${isFullWidth ? 'md:col-span-2' : ''} ${isFullWidth ? 'border-l-4 border-l-gray-900' : ''}`}>
      <h4 className="text-base font-semibold text-gray-900 mb-2">{level}</h4>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">{desc}</p>
      <p className="text-sm text-gray-600 font-medium">{price}</p>
    </div>
  );
}
 
// Component: Service Card
function ServiceCard({ name, desc, price }) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
      <h4 className="text-sm font-semibold text-gray-900 mb-2">{name}</h4>
      <p className="text-xs text-gray-600 leading-relaxed mb-3">{desc}</p>
      <p className="text-xs text-gray-500">{price}</p>
    </div>
  );
}
 
// Component: Client Card
function ClientCard({ initials, name, desc, tag }) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 flex gap-4">
      <div className="w-10 h-10 bg-gray-900 text-white rounded-md flex items-center justify-center text-xs font-semibold flex-shrink-0">
        {initials}
      </div>
      <div className="flex-1">
        <h4 className="text-sm font-semibold text-gray-900 mb-1">{name}</h4>
        <p className="text-xs text-gray-600 leading-relaxed mb-2">{desc}</p>
        <span className="inline-block text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
          {tag}
        </span>
      </div>
    </div>
  );
}
 
// Component: Journey Step
function JourneyStep({ num, responsibility, title, desc }) {
  const isLastStep = num === '6';
  return (
    <div className="flex gap-6">
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-xs font-semibold flex-shrink-0">
          {num}
        </div>
        {!isLastStep && <div className="w-0.5 h-24 bg-gray-200 my-2"></div>}
      </div>
      <div className="pb-4">
        <span className="inline-block text-xs bg-gray-900 text-white px-2 py-1 rounded-sm mb-2 font-medium">
          {responsibility}
        </span>
        <h4 className="text-sm font-semibold text-gray-900 mb-2">{title}</h4>
        <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}