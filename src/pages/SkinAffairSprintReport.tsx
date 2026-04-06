import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  Target, 
  Activity, 
  UserCheck, 
  Map as MapIcon, 
  Store, 
  User, 
  Smartphone, 
  Layout, 
  Palette, 
  ShieldCheck, 
  Zap, 
  GitMerge, 
  Layers,
  ChevronRight,
  Info
} from 'lucide-react';
import { 
  Chart as ChartJS, 
  RadialLinearScale, 
  PointElement, 
  LineElement, 
  Filler, 
  Tooltip, 
  Legend 
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { motion, AnimatePresence } from 'framer-motion';

import logo from "/assets/Artboard 1 copy 5@72x-8.png"
import whitelogo from "/assets/white_logo.png"

// Register ChartJS
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const App = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tabs = [
    { id: 'overview', label: 'Executive Overview' },
    { id: 'intelligence', label: 'Market Intelligence' },
    { id: 'architecture', label: 'Brand Architecture' },
    { id: 'pipeline', label: 'Strategic Pipeline' },
    { id: 'about', label: 'About Magsmen' },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-[#F9F8FC] font-sans text-slate-900 selection:bg-purple-100 selection:text-purple-900">
      {/* Hero Header */}
      <header className="relative overflow-hidden bg-gradient-to-br from-black via-[#1E1037] to-[#4C1D95] pt-16 pb-24 text-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-400 via-transparent to-transparent"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div className="space-y-4">
              {/* <div className="animate-pulse">
                <h2 className="mb-1 text-sm font-bold tracking-[0.2em] text-white uppercase">M A G S M E N</h2>
                <p className="text-[10px] tracking-[0.4em] text-purple-300/80 uppercase">Strategy Consultants</p>
              </div> */}
              
              <img src={whitelogo} alt="Magsmen Logo" className="h-46 w-36" />
             
              <h1 className="font-serif text-4xl font-semibold leading-tight md:text-6xl">
                Skin Affair <span className="mt-2 block font-sans text-2xl font-light tracking-wider text-purple-200 uppercase md:text-3xl">Sprint Diagnostics</span>
              </h1>
            </div>
            <div className="border-l-2 border-purple-500 pl-6 text-left">
              <p className="text-sm font-medium text-purple-200">Prepared for Skin Affair</p>
              <p className="mt-1 text-xs text-purple-300/70">Phase 1: Discovery (Day 1-15)</p>
              <p className="mt-0.5 text-xs text-purple-400">{new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 shadow-lg backdrop-blur-md' : 'bg-white border-b border-purple-100'}`}>
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center space-x-8 overflow-x-auto scrollbar-hide py-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative py-5 text-sm font-semibold tracking-wide transition-all whitespace-nowrap ${
                  activeTab === tab.id ? 'text-purple-700' : 'text-slate-500 hover:text-purple-400'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 h-1 w-full rounded-t-full bg-purple-600"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Content Area */}
      <main className="mx-auto max-w-7xl px-6 py-12">
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20 }}
              variants={containerVariants}
              className="space-y-10"
            >
              {/* Stats Grid */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {[
                  { label: 'Metros Audited', val: '04', sub: 'HYD, BLR, BOM, DEL', icon: MapPin },
                  { label: 'Strategic Milestones', val: '08', sub: '100% Delivery Rate', icon: CheckCircle2 },
                  { label: 'Sprint Duration', val: '15', sub: 'Days - Phase 1 Complete', icon: Clock },
                ].map((stat, i) => (
                  <motion.div key={i} variants={itemVariants} className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#110C1D] to-[#2D1B69] p-8 shadow-xl">
                    <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-purple-500/10 blur-2xl group-hover:bg-purple-500/20 transition-all"></div>
                    <p className="text-xs font-bold uppercase tracking-widest text-purple-300">{stat.label}</p>
                    <div className="mt-2 text-5xl font-serif text-white">{stat.val}</div>
                    <div className="mt-4 flex items-center gap-2 text-xs text-purple-200/60">
                      <stat.icon className="h-3 w-3" /> {stat.sub}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Thesis Card */}
              <motion.div variants={itemVariants} className="rounded-2xl border-l-4 border-purple-600 bg-white p-10 shadow-sm ring-1 ring-purple-50">
                <div className="flex gap-6 items-start">
                  <div className="rounded-full bg-purple-100 p-3">
                    <Target className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-sm font-bold uppercase tracking-widest text-purple-900">The Strategic Thesis</h3>
                    <p className="text-xl font-medium leading-relaxed text-slate-800">
                      Over the initial 15-day sprint, we have transitioned Skin Affair from abstract ambition to a concrete architectural foundation. We have identified a critical <span className="cursor-help border-b border-dashed border-purple-400 font-bold text-purple-700 decoration-2 underline-offset-4">White Space</span> in "holistic skin health," positioning Dr. Srujana as the definitive category authority.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Insights */}
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <motion.div variants={itemVariants} className="rounded-2xl bg-[#1A1A1A] p-8 text-white shadow-2xl ring-1 ring-white/5">
                  <div className="flex items-center gap-3 text-purple-300">
                    <Activity className="h-5 w-5" />
                    <h3 className="font-serif text-xl font-semibold">Positioning Gap Detected</h3>
                  </div>
                  <p className="mt-4 text-sm font-light leading-relaxed text-slate-300">
                    Premium clinics across audited metros rely heavily on functional, procedural communication. Emotional connection and long-term skin health narratives are underserved.
                  </p>
                  <div className="mt-6 border-t border-white/10 pt-4 text-xs italic text-purple-400/80">
                    Implication: Capture market share by shifting from "treatments" to "architectural dermatology."
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="rounded-2xl bg-[#1A1A1A] p-8 text-white shadow-2xl ring-1 ring-white/5">
                  <div className="flex items-center gap-3 text-purple-300">
                    <UserCheck className="h-5 w-5" />
                    <h3 className="font-serif text-xl font-semibold">Physician Authority</h3>
                  </div>
                  <p className="mt-4 text-sm font-light leading-relaxed text-slate-300">
                    Analysis shows a saturation of "influencer-first" doctors lacking deep clinical gravitas. Dr. Srujana's brand must bridge this gap with clinical supremacy.
                  </p>
                  <div className="mt-6 border-t border-white/10 pt-4 text-xs italic text-purple-400/80">
                    Implication: Personal brand engineering must prioritize clinical authority over social vanity.
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}

          {activeTab === 'intelligence' && (
            <motion.div
              key="intelligence"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="space-y-12"
            >
              <div className="grid gap-8 lg:grid-cols-2">
                <motion.div variants={itemVariants} className="group rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-xl ring-1 ring-slate-100">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-purple-50 text-purple-600 transition-colors group-hover:bg-purple-600 group-hover:text-white">
                    <MapIcon className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Pan-India Mapping</h3>
                  <p className="mt-4 text-slate-600 leading-relaxed">
                    Intelligence gathering across premium aesthetic clinics in <span className="font-bold text-purple-700">Hyderabad, Bangalore, Mumbai, and Delhi</span>.
                  </p>
                  <ul className="mt-8 space-y-4">
                    {['Evaluated top-tier doctors', 'Identified holistic whitespace', 'Insights formalized'].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-slate-700">
                        <CheckCircle2 className="h-4 w-4 text-purple-500" /> {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div variants={itemVariants} className="group rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-xl ring-1 ring-slate-100">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-purple-50 text-purple-600 transition-colors group-hover:bg-purple-600 group-hover:text-white">
                    <Store className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Experiential Audits</h3>
                  <p className="mt-4 text-slate-600 leading-relaxed">
                    Rigorous on-ground surveys of premium spaces to benchmark standard of care and spatial patient journeys.
                  </p>
                  <div className="mt-8 rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200/50">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-purple-600">Output Summary</p>
                    <p className="mt-2 text-sm text-slate-800">Experiential blueprint generated to outpace local premium competitors.</p>
                  </div>
                </motion.div>
              </div>

              {/* Radar Chart */}
              <motion.div variants={itemVariants} className="rounded-2xl bg-white p-10 shadow-sm ring-1 ring-slate-100">
                <div className="mb-8 flex items-end justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Brand Communication Saturation</h3>
                    <p className="text-sm text-slate-500">Directional mapping of competitor messaging themes</p>
                  </div>
                  <div className="hidden items-center gap-4 text-xs md:flex">
                    <div className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-slate-400"></span> Competitors</div>
                    <div className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-purple-600"></span> Skin Affair</div>
                  </div>
                </div>
                <div className="h-[400px]">
                  <Radar 
                    data={{
                      labels: ['Clinical Focus', 'Holistic Health', 'Influencer', 'Aesthetics', 'Patient Exp.', 'Digital Authority'],
                      datasets: [
                        {
                          label: 'Market Average',
                          data: [85, 30, 90, 75, 60, 80],
                          backgroundColor: 'rgba(107, 114, 128, 0.2)',
                          borderColor: 'rgba(107, 114, 128, 0.8)',
                          borderWidth: 2,
                        },
                        {
                          label: 'Skin Affair Opportunity',
                          data: [95, 90, 60, 95, 90, 85],
                          backgroundColor: 'rgba(124, 58, 237, 0.2)',
                          borderColor: 'rgba(124, 58, 237, 1)',
                          borderWidth: 3,
                        }
                      ]
                    }}
                    options={{
                      maintainAspectRatio: false,
                      scales: {
                        r: {
                          angleLines: { display: true, color: '#F1F5F9' },
                          grid: { color: '#F1F5F9' },
                          pointLabels: { font: { size: 12, family: 'sans-serif' }, color: '#64748b' },
                          ticks: { display: false }
                        }
                      },
                      plugins: { legend: { display: false } }
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          )}

          {activeTab === 'architecture' && (
            <motion.div
              key="architecture"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="grid gap-6 md:grid-cols-2"
            >
              {[
                { title: 'Personal Brand Audit', icon: User, text: 'Engineered a framework aligning Dr. Srujana’s personal stature with clinical authority.' },
                { title: 'Digital Content Architecture', icon: Smartphone, text: 'Analyzed engagement patterns to develop foundational content pillars for systematic authority.' },
                { title: 'Sub-Brand Review', icon: Layout, text: 'Review of sub-brand interiors to ensure cohesive translation into the physical space.' },
                { title: 'Visual Identity Alignment', icon: Palette, text: 'Secured a cohesive color palette that anchors physical space to the brand identity.' },
              ].map((item, i) => (
                <motion.div key={i} variants={itemVariants} className="group rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-lg ring-1 ring-slate-100 flex gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
                  </div>
                </motion.div>
              ))}
              <motion.div variants={itemVariants} className="md:col-span-2 rounded-2xl bg-gradient-to-r from-purple-900 to-indigo-900 p-8 text-white flex gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <ShieldCheck className="h-6 w-6 text-purple-300" />
                </div>
                <div>
                  <h4 className="text-lg font-bold">Verbal Identity & IP Assurance</h4>
                  <p className="mt-2 text-sm text-purple-100/80">Conducted preliminary domain and trademark feasibility checks to safeguard the brand assets and nomenclature.</p>
                </div>
              </motion.div>
            </motion.div>
          )}

          {activeTab === 'pipeline' && (
            <motion.div
              key="pipeline"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="space-y-12"
            >
              <div className="rounded-3xl bg-gradient-to-br from-purple-50 to-indigo-100 p-12 text-center shadow-inner">
                <Zap className="mx-auto h-12 w-12 text-purple-600" />
                <h2 className="mt-6 font-serif text-3xl font-bold text-slate-900">Next Phase: Execution Readiness</h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
                  Shifting focus to operationalization, financial positioning, and final asset lock-in.
                </p>
              </div>

              <div className="relative space-y-12 before:absolute before:left-6 before:top-2 before:h-full before:w-0.5 before:bg-purple-200 md:before:left-1/2">
                {[
                  { title: 'Complete Clinical Surveys', desc: 'Finalize remaining on-ground audits for solid benchmark data.', side: 'left' },
                  { title: 'Strategic Pricing Analysis', desc: 'Develop a premium pricing matrix based on market gap diagnostics.', side: 'right' },
                  { title: 'Palette Confirmation', desc: 'Final lock-in of visual assets for both Skin Affair and the Sub-brand.', side: 'left' },
                  { title: 'Upgradation Strategy', desc: 'Execute the elevation brief prepared by the strategy team.', side: 'right' },
                ].map((step, i) => (
                  <motion.div key={i} variants={itemVariants} className={`relative flex flex-col md:flex-row ${step.side === 'right' ? 'md:flex-row-reverse' : ''} gap-12`}>
                    <div className="absolute left-6 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full bg-purple-600 ring-4 ring-purple-100 md:left-1/2"></div>
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${step.side === 'left' ? 'md:text-right md:pr-16' : 'md:pl-16'}`}>
                      <h4 className="text-xl font-bold text-slate-900">{step.title}</h4>
                      <p className="mt-2 text-slate-600">{step.desc}</p>
                    </div>
                    <div className="hidden md:block md:w-1/2"></div>
                  </motion.div>
                ))}
              </div>

              <div className="rounded-2xl border-l-4 border-amber-400 bg-amber-50 p-6 flex gap-4">
                <Info className="h-6 w-6 text-amber-600 shrink-0" />
                <p className="text-sm font-medium text-amber-900">
                  <span className="font-bold">DECISION REQUIRED:</span> Proceed with pricing analysis concurrent to final clinic surveys. Locking the sub-brand nomenclature is the immediate priority.
                </p>
              </div>
            </motion.div>
          )}

          {activeTab === 'about' && (
            <motion.div
              key="about"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="space-y-12"
            >
              <div className="rounded-3xl bg-slate-900 p-16 text-center text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <h2 className="relative z-10 font-serif text-5xl font-bold">Performance-Driven Branding</h2>
                <p className="relative z-10 mx-auto mt-6 max-w-2xl text-xl text-slate-400">
                  Magsmen transforms businesses into category leaders through rigorous strategy, identity, and market alignment.
                </p>
                <div className="relative z-10 mt-12 flex flex-wrap justify-center gap-12">
                  {[
                    { l: 'Brands', v: '30+' }, { l: 'Industries', v: '16+' }, 
                    { l: 'Views', v: '90M+' }, { l: 'Rating', v: '4.9' }
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-3xl font-bold text-purple-400">{stat.v}</div>
                      <div className="text-[10px] uppercase tracking-widest text-slate-500">{stat.l}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-12 md:grid-cols-2">
                <div className="space-y-8">
                  <div className="flex items-center gap-3 text-slate-900">
                    <GitMerge className="h-6 w-6 text-purple-600" />
                    <h3 className="text-2xl font-bold">The Methodology</h3>
                  </div>
                  <div className="space-y-4">
                    {['Understand the Problem', 'Define Direction', 'Build the System', 'Enable Implementation'].map((step, i) => (
                      <div key={i} className="flex items-center gap-4 rounded-xl border border-slate-100 bg-white p-4 shadow-sm transition-transform hover:scale-[1.02]">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-sm font-bold text-purple-700">{i + 1}</span>
                        <span className="font-semibold text-slate-800">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-8">
                  <div className="flex items-center gap-3 text-slate-900">
                    <Layers className="h-6 w-6 text-purple-600" />
                    <h3 className="text-2xl font-bold">The Ecosystem</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {['Magsmen (Branding)', 'MIBBS (Scale)', 'InTalks (Media)', 'SanStrategies (Ventures)'].map((sys, i) => (
                      <div key={i} className="flex h-32 flex-col items-center justify-center rounded-2xl bg-slate-50 border border-slate-200 text-center p-4">
                        <span className="font-bold text-slate-900">{sys.split(' (')[0]}</span>
                        <span className="text-xs text-slate-500 mt-1">{sys.split(' (')[1].replace(')', '')}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="mt-24 border-t border-slate-200 bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
            <div>
              <h2 className="text-xl font-bold tracking-[0.2em] text-slate-900 uppercase">M A G S M E N</h2>
              <p className="mt-2 text-sm text-slate-500">Strategy Consultants | HYD · GNT · AUS</p>
            </div>
            <div className="flex gap-8">
              <button className="rounded-full bg-purple-600 px-8 py-3 text-sm font-bold text-white shadow-lg shadow-purple-200 transition-all hover:bg-purple-700 hover:shadow-xl">Contact Strategy Team</button>
            </div>
          </div>
          <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-8 text-[10px] font-bold uppercase tracking-widest text-slate-400 md:flex-row">
            <p>© 2026 Skin Affair Diagnostics - Confidential</p>
            <p>A division of Grofesion Innovations Pvt Ltd.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;