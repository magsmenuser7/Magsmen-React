import React, { useState, useEffect, FormEvent } from 'react';
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


// --- Structural Components ---

const SlideHeader = ({ title, subtitle, centered }) => (
  <div className={`mb-6 md:mb-10 shrink-0 ${centered ? 'flex flex-col items-center text-center' : ''}`}>
    <h2 className="text-2xl md:text-4xl font-bold text-slate-900 tracking-tight mb-2 leading-tight">{title}</h2>
    {subtitle && <p className="text-base md:text-xl text-slate-500 leading-snug max-w-3xl">{subtitle}</p>}
    <div className="w-16 md:w-20 h-1 bg-amber-500 mt-4 rounded-full"></div>
  </div>
);
// const [activeTab, setActiveTab] = useState<string>('millets');

// Standardized layout wrapper to ensure pixel-perfect consistency across all slides
const SlideLayout = ({
  title,
  subtitle,
  children,
  centered = false
}: {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  centered?: boolean;
}) => (
  <div className={`flex flex-col h-full w-full max-w-5xl mx-auto animate-fade-in ${centered ? 'justify-center items-center text-center' : ''}`}>
    {title && <SlideHeader title={title} subtitle={subtitle} centered={centered} />}
    <div className={`flex-1 w-full flex ${centered ? 'flex-col justify-center items-center' : 'flex-col'}`}>
      {children}
    </div>
  </div>
);

const ServiceCard = ({ icon: Icon, title, target, desc, price, highlight = false }) => (
  <div className={`p-5 md:p-6 rounded-2xl border flex flex-col h-full ${highlight ? 'border-amber-500 bg-amber-50 shadow-lg' : 'border-slate-200 bg-white shadow-sm'} transition-all hover:shadow-md`}>
    <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4 shrink-0">
      <div className={`p-2.5 md:p-3 rounded-lg ${highlight ? 'bg-amber-100 text-amber-600' : 'bg-slate-100 text-slate-700'}`}>
        <Icon size={20} className="md:w-6 md:h-6" />
      </div>
      <h3 className="text-lg md:text-xl font-bold text-slate-900 leading-tight">{title}</h3>
    </div>
    
    <p className="text-slate-700 mb-4 text-sm leading-relaxed flex-1">{desc}</p>
    
    <div className="mt-auto flex flex-col gap-3 shrink-0">
      <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
        <span className="text-[10px] md:text-xs font-bold uppercase text-slate-500 tracking-wider">Target Audience</span>
        <p className="text-xs md:text-sm font-medium text-slate-800 mt-1 leading-snug">{target}</p>
      </div>
      <div className="text-xs md:text-sm font-bold text-slate-900 bg-slate-100 self-start px-3 py-1.5 rounded-full">
        {price}
      </div>
    </div>
  </div>
);

// --- Slides Data ---

type UserData = {
  email: string;
};

const slides = [
  {
    id: 'intro',
    content: () => (
      <SlideLayout centered>
        <div className="inline-block px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs md:text-sm font-bold tracking-widest text-slate-500 uppercase mb-4 md:mb-6">
          Grofesion Innovations Pvt. Ltd.
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
          MAGSMEN <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-slate-400">
            STRATEGY CONSULTANTS
          </span>
        </h1>
        <div className="text-lg md:text-2xl font-light text-slate-600 mt-4 md:mt-6 max-w-2xl px-4">
          The best way to increase your brand growth.
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 mt-8 md:mt-12 w-full md:w-auto px-6 md:px-0">
          <div className="px-6 py-3 bg-slate-900 text-white rounded-lg font-medium shadow-lg w-full md:w-auto">Clear Vision</div>
          <div className="px-6 py-3 bg-slate-900 text-white rounded-lg font-medium shadow-lg w-full md:w-auto">Calm Approaches</div>
          <div className="px-6 py-3 bg-amber-500 text-slate-900 rounded-lg font-bold shadow-lg w-full md:w-auto">Bold Moves</div>
        </div>
      </SlideLayout>
    )
  },
  {
    id: 'major-services',
    content: () => (
      <SlideLayout 
        title="Major Services" 
        subtitle="High-impact products for rapid & long-term transformation."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 pb-4">
          <ServiceCard 
            icon={Zap}
            title="1. OTC (One-Time Consulting)"
            desc="A rapid, transactional 3-step diagnostic process. We check the brand, find the problem, and give the exact right solution."
            target="Businesses hitting a growth block needing a fast, precise fix."
            price="₹35,000 - ₹95,000 + GST"
            highlight={true}
          />
          <ServiceCard 
            icon={Shield}
            title="2. Linkfluence"
            desc="Digital narrative and reputation product. Cultivates leadership and controls the online narrative."
            target="Influencers, CEOs, NGOs, and reputation-conscious companies."
            price="Flat ₹35,000 + GST"
          />
          <ServiceCard 
            icon={Lightbulb}
            title="3. Brand Creation"
            desc="Comprehensive 90-day transformation: naming, identity, pricing strategy, launch theme, and guidelines."
            target="New ventures needing a solid foundation for market entry."
            price="From ₹5,00,000 + GST"
          />
          <ServiceCard 
            icon={Briefcase}
            title="4. Advisor Consulting"
            desc={
              <div className="flex flex-col gap-2">
                <p>12-month preventative partnership acting as a senior strategic mind.</p>
                <div className="text-xs bg-slate-50 p-2.5 rounded border border-slate-100 flex flex-col gap-1">
                  <p><span className="font-bold text-slate-900">L1 (Brand):</span> Stable companies; brand alignment & messaging.</p>
                  <p><span className="font-bold text-slate-900">L2 (+ Legal):</span> Growing brands; IP, contracts, 72h crisis response.</p>
                  <p><span className="font-bold text-slate-900">L3 (Business):</span> Deep audits, expansion, direct Sandeep N. meetings.</p>
                </div>
              </div>
            }
            target="Founders making critical brand, legal, and business decisions."
            price="L1: ₹5L | L2: ₹7.5L | L3: ₹10L /yr (+ GST)"
          />
        </div>
      </SlideLayout>
    )
  },
  {
    id: 'additional-services-1',
    content: () => (
      <SlideLayout 
        title="Additional Services (1/2)" 
        subtitle="Specialized interventions for established brands."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 pb-4">
          <ServiceCard 
            icon={TrendingUp}
            title="5. Brand Expresso"
            desc="A 90-day consulting sprint designed to energize an existing brand, revitalizing its identity with a new sense of purpose."
            target="Existing brands that have lost momentum and need a rapid refresh."
            price="From ₹3,00,000 + GST"
          />
          <ServiceCard 
            icon={Target}
            title="6. Brand Consulting"
            desc="Focused on powering up the overall brand strategy to differentiate the business from competitors and drive customer preference."
            target="Stable businesses looking to elevate their market presence."
            price="From ₹1,00,000 + GST"
          />
          <ServiceCard 
            icon={Award}
            title="7. Stature by Magsmen"
            desc="Personal branding & image consulting. Legacy building, uncovering unique brand value, and wardrobe editing."
            target="Chairmen and CEOs needing their personal image aligned with purpose."
            price="₹1.5L - ₹20L+ + GST"
          />
          <ServiceCard 
            icon={Building}
            title="8. Corporate Rebranding"
            desc="A strategic overhaul to revitalize a company for the modern world, communicating updated values and vision."
            target="Established companies disconnected from their current market position."
            price="From ₹3,00,000 + GST"
          />
        </div>
      </SlideLayout>
    )
  },
  {
    id: 'additional-services-2',
    content: () => (
      <SlideLayout 
        title="Additional Services (2/2)" 
        subtitle="Naming structures and offshore legal frameworks."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 pb-4">
          <ServiceCard 
            icon={Mic}
            title="9. Brand Naming"
            desc="Creating unique, resonant names for sub-brands or entirely new entities."
            target="Businesses needing a specific identity for a new vertical or product line."
            price="₹25k - ₹50k (+₹10k/class) + GST"
          />
          <ServiceCard 
            icon={Scale}
            title="10. Legal Consulting"
            desc="Building a highly structured 'India Delivery Arm' for offshore estate planning, trust drafting, and paralegal documentation."
            target="US-based solo practices and boutique legal/tax firms."
            price="Invoiced in USD (+ GST)"
          />
        </div>
      </SlideLayout>
    )
  },
  {
    id: 'ecosystem',
    content: () => (
      <SlideLayout 
        title="The Magsmen Ecosystem" 
        subtitle="Understanding our organizational structure."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 pb-4 flex-1">
          <div className="bg-slate-900 text-white p-6 md:p-8 rounded-2xl relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 p-6 opacity-10"><Target size={100} className="md:w-[120px] md:h-[120px]"/></div>
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 flex items-center gap-2"><Target className="text-amber-500" size={24}/> Magsmen</h3>
            <p className="text-slate-300 mb-4 md:mb-6 text-sm md:text-base leading-relaxed flex-1">
              We operate as strategic brand consultants. We approach every brand as a business system that requires positioning, perception, and performance alignment. Our goal is to strengthen the brand's clarity, credibility, and connection.
            </p>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm font-medium shrink-0">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> Discovery & Diagnosis</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> Design & Strategy</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> Measurable Delivery</li>
            </ul>
          </div>
          
          <div className="bg-slate-50 border border-slate-200 p-6 md:p-8 rounded-2xl relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 p-6 opacity-5"><Building size={100} className="text-slate-900 md:w-[120px] md:h-[120px]"/></div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 md:mb-4 flex items-center gap-2"><Building className="text-slate-700" size={24}/> Grofesion</h3>
            <p className="text-slate-600 mb-4 md:mb-6 text-sm md:text-base leading-relaxed flex-1">
              The parent ecosystem. Grofesion houses our proprietary innovations, technological tools, and platforms that empower the strategies Magsmen deploys. 
            </p>
            <div className="space-y-3 shrink-0">
              <div className="bg-white p-3 md:p-4 rounded-xl shadow-sm border border-slate-100 flex items-start gap-3">
                <Cpu className="text-indigo-500 shrink-0 mt-0.5 md:mt-1" size={18} />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm md:text-base leading-tight mb-1">MIBBS.ai</h4>
                  <p className="text-xs md:text-sm text-slate-500 leading-snug">Proprietary marketing budget allocation tool.</p>
                </div>
              </div>
              <div className="bg-white p-3 md:p-4 rounded-xl shadow-sm border border-slate-100 flex items-start gap-3">
                <Mic className="text-red-500 shrink-0 mt-0.5 md:mt-1" size={18} />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm md:text-base leading-tight mb-1">Intalks Podcast</h4>
                  <p className="text-xs md:text-sm text-slate-500 leading-snug">Platform with 130M+ views for leaders to share legacies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SlideLayout>
    )
  },
  {
    id: 'intern-manifesto',
    content: () => (
      <SlideLayout centered>
  {/* Icon */}
  <div className="p-3 sm:pt-6 bg-amber-100 text-amber-600 rounded-full mb-4">
    <Award size={28} className="md:w-12 md:h-12" />
  </div>

  {/* Heading */}
  <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-3 px-2">
    How to Think Like a Magsmen
  </h2>

  {/* Subtitle */}
  <p className="text-sm sm:text-base md:text-xl text-slate-600 leading-relaxed max-w-xl md:max-w-3xl px-4">
    To our team members: you are strategic brand consultants. Operate with clarity, logic, and purpose. No hype, no filler.
  </p>

  {/* Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full mt-6 md:mt-12 px-2 md:px-0 text-left">
    
    <div className="p-4 md:p-6 bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col">
      <h4 className="text-base md:text-lg font-bold text-slate-900 mb-1">
        1. Logic over Emotion
      </h4>
      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
        Every response must reflect structured reasoning and deep research. Assess both rational and emotional triggers.
      </p>
    </div>

    <div className="p-4 md:p-6 bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col">
      <h4 className="text-base md:text-lg font-bold text-slate-900 mb-1">
        2. Business First
      </h4>
      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
        We don't just draw logos. We map brand health, pricing, and consumer behavior to drive measurable growth.
      </p>
    </div>

    <div className="p-4 md:p-6 bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col">
      <h4 className="text-base md:text-lg font-bold text-slate-900 mb-1">
        3. Ethical Standards
      </h4>
      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
        Maintain strict awareness of ASCI guidelines and IPR. We build credibility that lasts.
      </p>
    </div>

  </div>

  {/* CTA */}
  <div className="mt-6 md:mt-8 w-full flex justify-center px-4">
    <div className="w-full sm:w-auto text-center px-5 py-3 bg-slate-900 text-white rounded-full text-xs sm:text-sm md:text-base font-bold shadow-lg">
      Goal: Strengthen clarity, credibility, and connection.
    </div>
  </div>
</SlideLayout>
    )
  }
];

export default function ServicesDeck() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? prev : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? prev : prev - 1));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const SlideContent = slides[currentSlide].content;

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
    // min-h-[100dvh] ensures it takes full mobile screen properly without URL bar jank
    <div className="min-h-[100dvh] bg-slate-100 flex items-center justify-center md:p-6 font-sans text-slate-900 overflow-hidden">
      
      {/* Presentation Container */}
      <div className="w-full h-[100dvh] md:h-[85vh] max-w-6xl md:rounded-3xl md:shadow-2xl flex flex-col bg-white border-0 md:border border-slate-200">
        
        {/* Top Progress Bar */}
        <div className="h-1 md:h-1.5 w-full bg-slate-100 shrink-0">
          <div 
            className="h-full bg-amber-500 transition-all duration-500 ease-in-out"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          ></div>
        </div>

        {/* Main Content Area - Scrollable internally if content overflows on tiny screens */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-6 md:p-12 lg:p-16 relative flex flex-col">
          <SlideContent />
        </div>

        {/* Footer Navigation */}
        <div className="h-16 md:h-20 shrink-0 border-t border-slate-100 flex items-center justify-between px-4 md:px-8 bg-slate-50/90 backdrop-blur-sm">
          <div className="text-xs md:text-sm font-bold text-slate-400 truncate mr-4">
            MAGSMEN <span className="mx-1 md:mx-2 text-slate-300">|</span> <span className="hidden sm:inline">Internal Onboarding</span>
          </div>
          
          <div className="flex items-center gap-2 md:gap-4 shrink-0">
            <span className="text-xs md:text-sm font-medium text-slate-500 mr-2 md:mr-4">
              {currentSlide + 1} / {slides.length}
            </span>
            <button 
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`p-2 rounded-full transition-colors ${currentSlide === 0 ? 'text-slate-300 cursor-not-allowed' : 'text-slate-700 hover:bg-slate-200 active:bg-slate-300'}`}
              aria-label="Previous Slide"
            >
              <ChevronLeft size={24} className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button 
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className={`p-2 rounded-full transition-colors ${currentSlide === slides.length - 1 ? 'text-slate-300 cursor-not-allowed' : 'text-slate-700 hover:bg-slate-200 active:bg-slate-300'}`}
              aria-label="Next Slide"
            >
              <ChevronRight size={24} className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </div>
      </div>
      
      {/* CSS for animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        /* Hide scrollbar for a cleaner presentation look while retaining functionality */
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}} />
    </div>
  );
}