import React, { useState, useEffect } from 'react';
import { 
  MapPin, Stethoscope, Palette, Building, User, Target, 
  CheckCircle, Clock, ChevronRight, Activity, ShieldCheck, 
  TrendingUp, Sparkles, Map, Network, BarChart
} from 'lucide-react';

// --- Magsmen Strategic Client Report ---
// Designed for high-impact executive presentation.

const SkinAffairSprintReport = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeCity, setActiveCity] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Strategic Data Mapping
  const cities = [
    { id: 'delhi', name: 'Delhi', top: '15%', left: '45%', focus: 'Market Entry Gaps & Premium Positioning' },
    { id: 'mumbai', name: 'Mumbai', top: '50%', left: '30%', focus: 'Communication Strategies & Influencers' },
    { id: 'hyderabad', name: 'Hyderabad', top: '65%', left: '50%', focus: 'On-Ground Audits & Benchmark (Arna Clinic)' },
    { id: 'bangalore', name: 'Bangalore', top: '80%', left: '40%', focus: 'Holistic Skin Health Opportunities' },
  ];

  const completedMilestones = [
    {
      id: 1,
      icon: <Activity className="w-6 h-6 text-emerald-400" />,
      title: "Market & Positioning Intelligence",
      description: "Deep-dive analysis of premium aesthetic clinics across HYD, BLR, BOM, and DEL. Mapped communication strategies to expose strategic entry gaps for Skin Affair.",
    },
    {
      id: 2,
      icon: <Network className="w-6 h-6 text-blue-400" />,
      title: "Influencer Physician Mapping",
      description: "Evaluated top-tier doctors across 4 metros. Identified massive whitespace in 'holistic skin health'. Insights presented to Dr. Srujana.",
    },
    {
      id: 3,
      icon: <Building className="w-6 h-6 text-purple-400" />,
      title: "Sub-Brand Architectural Review",
      description: "Comprehensive review of sub-brand interiors and spatial direction. Aligned directly with Dr. Srujana to ensure cohesive brand translation.",
    },
    {
      id: 4,
      icon: <Palette className="w-6 h-6 text-pink-400" />,
      title: "Visual Identity & Chromatic Alignment",
      description: "Directed focused discussions with the interior designer. Secured a cohesive color palette that anchors the physical space to the overarching brand identity.",
    },
    {
      id: 5,
      icon: <MapPin className="w-6 h-6 text-red-400" />,
      title: "Experiential Clinic Audits (HYD)",
      description: "Conducted rigorous on-ground surveys of premium spaces. Benchmarked Arna Clinic to reverse-engineer optimal patient experiences. Detailed diagnostic report generated.",
    },
    {
      id: 6,
      icon: <User className="w-6 h-6 text-amber-400" />,
      title: "Personal Brand Positioning & Audit",
      description: "Executed a comprehensive audit and competitor mapping to establish Dr. Srujana's distinct archetype and tone. Engineered a robust positioning framework aligning her personal stature with clinical authority.",
    },
    {
      id: 7,
      icon: <ShieldCheck className="w-6 h-6 text-indigo-400" />,
      title: "Verbal Identity & IP Assurance",
      description: "Explored brand narratives and nomenclature options. Conducted preliminary domain and trademark feasibility checks to safeguard brand assets.",
    },
    {
      id: 8,
      icon: <BarChart className="w-6 h-6 text-cyan-400" />,
      title: "Digital Analytics & Content Architecture",
      description: "Analyzed historical social media performance metrics to diagnose engagement patterns and audience sentiment. Developed foundational content pillars to systematically amplify digital authority and market connection.",
    }
  ];

  const upcomingPipeline = [
    { id: 1, title: "Complete Clinical Experiential Surveys", desc: "Finalize remaining on-ground audits to solidify benchmark data." },
    { id: 2, title: "Strategic Pricing Analysis", desc: "Develop a premium pricing matrix based on market gap diagnostics." },
    { id: 3, title: "Palette Confirmation Execution", desc: "Final lock-in of visual assets for both Skin Affair and the Sub-brand." },
    { id: 4, title: "Skin Affair Upgradation Strategy", desc: "Execute the brief prepared by Koushik and Ajay to elevate current brand stature." },
    { id: 5, title: "Nomenclature Optimization", desc: "Finalize brand naming architecture with a refined 'Indian touch' as requested." }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-emerald-500/30 p-4 md:p-8 relative overflow-hidden">
      {/* Subtle Strategic Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>
      
      {/* Header */}
      <header className={`relative z-10 max-w-7xl mx-auto mb-12 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-800 pb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Sparkles className="w-8 h-8 text-emerald-400" />
              <h1 className="text-3xl font-light tracking-tight text-white">
                <span className="font-bold">Magsmen</span> Sprint Report
              </h1>
            </div>
            <p className="text-slate-400 text-sm tracking-widest uppercase ml-11">
              Client: Skin Affair | Phase: Discovery & Diagnosis (Day 1-15)
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-2">
            <button 
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'overview' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-slate-900 text-slate-400 hover:text-white'}`}
            >
              Strategic Overview
            </button>
            <button 
              onClick={() => setActiveTab('pipeline')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'pipeline' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-slate-900 text-slate-400 hover:text-white'}`}
            >
              Foresight Pipeline
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto">
        {activeTab === 'overview' && (
          <div className="space-y-12">
            
            {/* Top Section: Map & Executive Summary */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              
              {/* Executive Summary */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-all duration-700"></div>
                  <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-emerald-400" />
                    Executive Intelligence
                  </h2>
                  <p className="text-slate-400 leading-relaxed text-sm mb-4">
                    Over the initial 15-day sprint, Magsmen has executed a rigorous discovery protocol for Skin Affair. We have transition from abstract concepts to a concrete strategic foundation, mapping the competitive landscape across India's top four metropolitan markets.
                  </p>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    Our focus has been twofold: identifying critical white-space positioning in <strong className="text-slate-200">holistic skin health</strong> and architecting a cohesive visual, verbal, and experiential identity for Dr. Srujana's portfolio.
                  </p>
                </div>

                {/* Stat Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:-translate-y-1 transition-all duration-300">
                    <div className="text-3xl font-light text-white mb-1">04</div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider">Metros Audited</div>
                  </div>
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:-translate-y-1 transition-all duration-300">
                    <div className="text-3xl font-light text-white mb-1">07</div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider">Milestones Met</div>
                  </div>
                </div>
              </div>

              {/* Interactive Market Map */}
              <div className="lg:col-span-3 bg-slate-900 border border-slate-800 rounded-2xl p-6 relative flex flex-col items-center justify-center min-h-[400px] hover:border-slate-700 transition-colors duration-500">
                <h3 className="absolute top-6 left-6 text-sm font-semibold tracking-widest text-slate-300 uppercase flex items-center gap-2">
                  <Map className="w-4 h-4 text-emerald-500" />
                  Strategic Market Network
                </h3>
                
                {/* Abstract India Map Container */}
                <div className="relative w-full max-w-sm h-[350px] mt-8 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/40 via-slate-900/0 to-slate-900/0 border border-slate-800/50 rounded-xl group/map">
                  
                  {/* Connecting Lines (SVG) */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ filter: 'drop-shadow(0 0 8px rgba(16, 185, 129, 0.4))' }}>
                    <path d="M 45% 15% L 30% 50% L 50% 65% L 40% 80%" fill="none" stroke="#10b981" strokeWidth="1.5" strokeDasharray="150" strokeDashoffset="150" className="animate-draw-line opacity-60" />
                    <path d="M 45% 15% L 50% 65%" fill="none" stroke="#10b981" strokeWidth="1.5" strokeDasharray="150" strokeDashoffset="150" className="animate-draw-line opacity-60" style={{ animationDelay: '0.5s' }} />
                  </svg>

                  {/* City Nodes */}
                  {cities.map((city) => (
                    <div 
                      key={city.id}
                      className="absolute group cursor-pointer z-10"
                      style={{ top: city.top, left: city.left, transform: 'translate(-50%, -50%)' }}
                      onMouseEnter={() => setActiveCity(city.id)}
                      onMouseLeave={() => setActiveCity(null)}
                    >
                      {/* Pulse Effect */}
                      <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                      <div className={`relative z-10 w-4 h-4 rounded-full border-2 transition-all duration-500 ease-out ${activeCity === city.id ? 'bg-emerald-400 border-white scale-150 shadow-[0_0_20px_rgba(52,211,153,0.8)]' : 'bg-slate-900 border-emerald-500 shadow-[0_0_10px_rgba(52,211,153,0.3)] hover:scale-125'}`}></div>
                      
                      {/* Label */}
                      <span className="absolute top-6 left-1/2 -translate-x-1/2 text-xs font-semibold text-slate-300 tracking-wider drop-shadow-md">
                        {city.name}
                      </span>

                      {/* Tooltip */}
                      <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-48 bg-slate-800/90 backdrop-blur-md border border-slate-700 rounded-xl p-3 shadow-2xl transition-all duration-400 pointer-events-none z-20 ${activeCity === city.id ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}`}>
                        <div className="text-[10px] uppercase text-emerald-400 font-bold mb-1">Intelligence Area</div>
                        <div className="text-xs text-white leading-tight">{city.focus}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Milestones Grid */}
            <div className="relative z-10">
              <h3 className="text-xl font-light text-white mb-6 flex items-center gap-2 border-b border-slate-800 pb-4">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                Executed Diagnostics & Strategy
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {completedMilestones.map((milestone, index) => (
                  <div 
                    key={milestone.id} 
                    className="animate-fade-in-up group bg-slate-900/80 backdrop-blur-sm border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_-15px_rgba(16,185,129,0.3)] relative overflow-hidden cursor-default"
                    style={{ animationDelay: `${index * 150}ms`, opacity: 0, animationFillMode: 'forwards' }}
                  >
                    {/* Hover Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    <div className="relative z-10">
                      <div className="bg-slate-950/80 w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500 border border-slate-800 group-hover:border-emerald-500/50 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                        <div className="group-hover:animate-float drop-shadow-md">
                          {milestone.icon}
                        </div>
                      </div>
                      <h4 className="text-lg font-medium text-white mb-3 group-hover:text-emerald-300 transition-colors duration-300">
                        {milestone.title}
                      </h4>
                      <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'pipeline' && (
          <div className="max-w-4xl mx-auto space-y-8 relative z-10 animate-fade-in">
            <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 relative overflow-hidden hover:border-emerald-500/30 transition-colors duration-500">
              <div className="absolute right-0 top-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>
              <h2 className="text-2xl font-light text-white mb-2 flex items-center gap-3">
                <Target className="w-6 h-6 text-emerald-400 animate-pulse" />
                Strategic Delivery Pipeline
              </h2>
              <p className="text-slate-400 text-sm mb-8">
                The immediate action items engineered to transition from strategy to tangible brand architecture.
              </p>

              <div className="space-y-6">
                {upcomingPipeline.map((item, index) => (
                  <div key={item.id} className="flex gap-4 group">
                    <div className="flex flex-col items-center mt-1">
                      <div className="w-8 h-8 rounded-full border border-slate-700 bg-slate-800 flex items-center justify-center group-hover:border-emerald-500 group-hover:bg-emerald-500/20 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all duration-300">
                        <Clock className="w-4 h-4 text-slate-400 group-hover:text-emerald-400" />
                      </div>
                      {index !== upcomingPipeline.length - 1 && (
                        <div className="w-px h-full bg-slate-800 my-2 group-hover:bg-emerald-500/50 transition-colors duration-300"></div>
                      )}
                    </div>
                    <div className="bg-slate-950/50 border border-slate-800/50 rounded-xl p-5 flex-1 group-hover:border-emerald-500/30 group-hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_8px_20px_-10px_rgba(16,185,129,0.2)]">
                      <h4 className="text-white font-medium mb-1 group-hover:text-emerald-300 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Required CSS for custom animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-float {
          animation: float 2s ease-in-out infinite;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes drawLine {
          to { stroke-dashoffset: 0; }
        }
        .animate-draw-line {
          animation: drawLine 2s ease-out forwards;
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
};

export default SkinAffairSprintReport;