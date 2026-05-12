import React from "react";
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


const services = [
  {
    number: "Service 01",
    title: "OTC — One-Time Consulting",
    badge: "From ₹35,000",
    desc:
      "A rapid, 3-step diagnostic service where we check your brand, identify the exact problem, and deliver a precise solution fast. No long-term commitment required.",
    audience:
      "Businesses that have hit a growth block and need a quick, clear fix.",
    pricing: [
      {
        level: "Variable (based on complexity)",
        amount: "₹35,000 – ₹95,000",
      },
    ],
  },
  {
    number: "Service 02",
    title: "Linkfluence",
    badge: "₹35,000 Flat",
    desc:
      "A digital narrative and reputation product that builds leadership presence, establishes unmatched credibility online, and puts you in control of your digital story.",
    audience:
      "Influencers, celebrities, CEOs, chairmen, NGOs, and companies wanting to manage and grow their online reputation.",
    pricing: [
      {
        level: "Flat Rate",
        amount: "₹35,000",
      },
    ],
  },
  {
    number: "Service 03",
    title: "Brand Creation",
    badge: "From ₹5,00,000",
    desc:
      "A comprehensive 90-day transformation that builds your brand entirely from the ground up covering brand naming, identity design, pricing strategy, launch theme, and long-term consistency guidelines.",
    audience:
      "New ventures, startups, or businesses entering a new market who need a complete brand foundation built right the first time.",
    pricing: [
      {
        level: "Starting from",
        amount: "₹5,00,000",
      },
    ],
  },
  {
    number: "Service 04",
    title: "Advisor Consulting — Annual Advisory Programme",
    badge: "From ₹5,00,000 / yr",
    desc:
      "A 12-month preventative partnership where Magsmen serves as your senior strategic mind reviewing every major decision before it is made.",
    audience:
      "Founders and SME owners making critical, interconnected decisions.",
    levels: [
      {
        name: "Level 1 — Brand Advisory",
        desc:
          "For stable companies making decisions around brand alignment, messaging, and identity.",
        price: "₹5,00,000 / year",
      },
      {
        name: "Level 2 — Brand + Legal Advisory",
        desc:
          "For growing brands needing legal coordination and crisis response.",
        price: "₹7,50,000 / year",
      },
      {
        name: "Level 3 — Full Business Advisory",
        desc:
          "For founders navigating interconnected brand, legal, and business decisions.",
        price: "₹10,00,000 / year",
      },
    ],
  },
];

const additionalServices = [
  {
    number: "Service 05",
    title: "Brand Expresso",
    badge: "From ₹3,00,000",
    desc:
      "A focused 90-day consulting sprint to energize an existing brand.",
    audience:
      "Brands that have lost energy or stalled in growth.",
    amount: "₹3,00,000",
  },
  {
    number: "Service 06",
    title: "Brand Consulting",
    badge: "From ₹1,00,000",
    desc:
      "A strategy-focused service to differentiate your business.",
    audience:
      "Stable businesses looking to elevate their market presence.",
    amount: "₹1,00,000",
  },
  {
    number: "Service 07",
    title: "Stature by Magsmen",
    badge: "₹1.5L – ₹20L+",
    desc:
      "A personal legacy-building framework that uncovers your unique brand value.",
    audience:
      "Chairmen, CEOs, and influential leaders.",
    amount: "₹1.5 Lakhs – ₹20 Lakhs+",
  },
  {
    number: "Service 08",
    title: "Corporate Rebranding",
    badge: "From ₹3,00,000",
    desc:
      "A full strategic overhaul that reimagines your company.",
    audience:
      "Established companies needing a fresh identity.",
    amount: "₹3,00,000",
  },
];

const ecosystem = [
  {
    number: "Service 11",
    title: "MIBBS.ai",
    badge: "Proprietary Tool",
    desc:
      "A proprietary AI-powered budget allocation tool.",
  },
  {
    number: "Service 12",
    title: "Intalks Podcast",
    badge: "130M+ Views",
    desc:
      "A massively popular platform that brings together leaders and legends.",
  },
];

const Card = ({ item, ecosystemCard = false }) => (
  <div
    className={`bg-white rounded-xl p-7 mb-5 shadow-md border-l-4 ${
      ecosystemCard ? "border-red-600" : "border-black"
    }`}
  >
    <div className="text-[11px] tracking-[2px] uppercase text-gray-400 font-semibold mb-2">
      {item.number}
    </div>

    <div className="flex flex-wrap items-start justify-between gap-4">
      <h3 className="text-xl font-bold text-black">{item.title}</h3>

      <div
        className={`text-xs font-bold px-4 py-1 rounded-full text-white tracking-wide ${
          ecosystemCard ? "bg-red-600" : "bg-black"
        }`}
      >
        {item.badge}
      </div>
    </div>

    <p className="text-sm text-gray-700 leading-7 mt-4">{item.desc}</p>

    {item.audience && (
      <p className="text-sm text-gray-600 mt-3 leading-6">
        <span className="font-semibold text-black">Best for:</span>{" "}
        {item.audience}
      </p>
    )}

    {item.pricing && (
      <div className="mt-5 bg-gray-50 rounded-lg p-5">
        <div className="text-[11px] uppercase tracking-[2px] text-gray-400 mb-3">
          Pricing
        </div>

        {item.pricing.map((price, index) => (
          <div
            key={index}
            className="flex flex-wrap justify-between items-center border-b border-gray-200 py-2 last:border-none gap-2"
          >
            <div className="text-sm text-gray-700">{price.level}</div>
            <div className="text-sm font-bold text-black">
              {price.amount}
            </div>
          </div>
        ))}
      </div>
    )}

    {item.levels && (
      <div className="mt-5 bg-gray-50 rounded-lg p-5">
        <div className="text-[11px] uppercase tracking-[2px] text-gray-400 mb-4">
          Engagement Levels
        </div>

        <div className="space-y-4">
          {item.levels.map((level, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-4 last:border-none"
            >
              <h4 className="font-bold text-sm text-black">
                {level.name}
              </h4>

              <p className="text-sm text-gray-600 mt-1 leading-6">
                {level.desc}
              </p>

              <div className="text-sm font-bold text-black mt-2">
                {level.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    )}

    {item.amount && (
      <div className="mt-5 bg-gray-50 rounded-lg p-5">
        <div className="text-[11px] uppercase tracking-[2px] text-gray-400 mb-3">
          Pricing
        </div>

        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-700">Starting from</div>
          <div className="text-sm font-bold text-black">
            {item.amount}
          </div>
        </div>
      </div>
    )}
  </div>
);
type UserData = {
  email: string;
};

const MagsmenServices = () => {



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
    <div className="bg-[#f5f5f5] text-[#1a1a1a] min-h-screen">
      
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#111] text-white py-20 px-6 text-center">
        
        <div className="absolute top-0 left-[-40px] w-[180px] h-full bg-white/5 skew-x-[-10deg]" />

        <div className="relative z-10">
          <div className="uppercase tracking-[6px] text-gray-400 text-sm">
            <img
    src="/assets/Artboard 1 copy 272x-8 (1).png"
    alt="Magsmen Logo"
    className="w-[180px] sm:w-[220px] md:w-[260px] object-contain mx-auto"
  />
          </div>

          <div className="mt-10 space-y-3">
            <p className="text-2xl text-gray-300">
              Clear <strong className="text-white">Vision</strong> · Calm{" "}
              <strong className="text-white">Approaches</strong>
            </p>

            <p className="text-4xl font-black text-white">
              Bold Moves
            </p>
          </div>

          <div className="mt-8 text-xs uppercase tracking-[3px] text-gray-500">
            Complete Services Guide · All Prices Excl. GST
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-14">
        
        {/* PART 1 */}
        <div className="text-[11px] uppercase tracking-[4px] text-gray-500 border-b border-gray-300 pb-3 mb-8">
          Part 1 — Major Services
        </div>

        {services.map((service, index) => (
          <Card key={index} item={service} />
        ))}

        {/* PART 2 */}
        <div className="text-[11px] uppercase tracking-[4px] text-gray-500 border-b border-gray-300 pb-3 mt-16 mb-8">
          Part 2 — Additional Services
        </div>

        {additionalServices.map((service, index) => (
          <Card key={index} item={service} />
        ))}

        {/* PART 3 */}
        <div className="text-[11px] uppercase tracking-[4px] text-gray-500 border-b border-gray-300 pb-3 mt-16 mb-8">
          Part 3 — The Grofesion Ecosystem
        </div>

        {ecosystem.map((service, index) => (
          <Card key={index} item={service} ecosystemCard />
        ))}
      </div>

      {/* FOOTER */}
      <footer className="bg-[#111] text-center py-10 px-5 text-gray-500 uppercase tracking-[2px] text-xs">
        <strong className="block text-white text-xl tracking-[4px] mb-3">
          MAGSMEN
        </strong>

        Strategy Consultants · A Grofesion Innovations Pvt. Ltd.
        Company · All prices exclusive of GST
      </footer>
    </div>
  );
};

export default MagsmenServices;