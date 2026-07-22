import React, { useEffect, useRef, useState, useMemo } from "react";
import Chart from "chart.js/auto";

import magsmennewlogowhitelandscape from "../../public/assets/magsmen-new-logo-white-landscape.png"

/**
 * FARE EAGLE — Strategic Brand Analysis | Magsmen Brand Consultants
 * (Dark-theme edition with Light/Dark toggle)
 * Converted 1:1 from the original static HTML report into a single React component.
 * Layout, copy, color palette, and chart data are unchanged.
 *
 * Requires: chart.js (npm install chart.js), Tailwind CSS, and the fonts:
 *   DM Sans + Playfair Display (Google Fonts) — add the <link> tags to your
 *   document head, or import via your CSS entrypoint.
 */

const TABS = [
  { id: "exec-overview", label: "Executive Overview" },
  { id: "category-pricing", label: "Pricing Benchmarks" },
  { id: "perception-friction", label: "Perception & Friction Map" },
  { id: "competitive-white-space", label: "Competitive White Space" },
  { id: "strategic-opportunity", label: "Strategic Opportunity ◆" },
  { id: "brand-health", label: "Brand Scorecard" },
  { id: "about-magsmen", label: "About Magsmen" },
];

// ────────────────────────────────────────────────────────────────
// Global CSS (verbatim port of the original <style> block).
// Scoped to `.fe-root` instead of `body`, and the light-theme
// override targets `.fe-root.fe-light-theme` instead of `body.light-theme`.
// ────────────────────────────────────────────────────────────────
const GLOBAL_CSS = `
  .fe-root {
    /* ─── Core Magsmen Identity (Purple Spectrum) ─── */
    --mg-black:          #080512;
    --mg-white:          #FAFAF8;
    --mg-purple:         #8B5CF6;
    --mg-purple-deep:    #6D28D9;
    --mg-purple-dark:    #4C1D95;
    --mg-purple-light:   #1E1538;
    --mg-purple-muted:   #C4B5FD;
    --mg-purple-soft:    #371E6D;

    --mg-bg-body:        #080512;
    --mg-bg-card:        #120C24;
    --mg-border-card:    #2A184A;
    --mg-text-primary:   #FFFFFF;
    --mg-text-secondary: #CBD5E1;
    --mg-text-muted:     #94A3B8;

    --mg-gradient-hero:        linear-gradient(135deg, #05030A 0%, #150A2A 35%, #2A1254 70%, #4C1D95 100%);
    --mg-gradient-accent:      linear-gradient(135deg, #8B5CF6 0%, #C4B5FD 50%, #DDD6FE 100%);
    --mg-gradient-surface:     linear-gradient(180deg, #080512 0%, #0E0920 50%, #120C24 100%);
    --mg-gradient-insight:     linear-gradient(135deg, #120C24 0%, #1A1033 50%, #2A1254 100%);
    --mg-gradient-card:        linear-gradient(180deg, #120C24 0%, #170F2E 100%);
    --mg-gradient-dark:        linear-gradient(135deg, #05030A 0%, #0E0920 50%, #05030A 100%);
    --mg-gradient-cta:         linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%);
    --mg-gradient-metric:      linear-gradient(135deg, #120926 0%, #1A1033 50%, #2B1254 100%);

    --mg-glow-purple:   0 0 40px rgba(139, 92, 246, 0.2);
    --mg-glow-dark:     0 8px 32px rgba(0, 0, 0, 0.5);
    --mg-glow-card:     0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(139, 92, 246, 0.18);
    --mg-glow-hover:    0 8px 28px rgba(139, 92, 246, 0.25), 0 0 0 1px rgba(139, 92, 246, 0.4);

    --mg-font-display: 'Playfair Display', Georgia, serif;
    --mg-font-body:    'DM Sans', system-ui, sans-serif;

    font-family: var(--mg-font-body);
    background-color: var(--mg-bg-body);
    color: var(--mg-text-secondary);
    overflow-x: hidden;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  /* Light Theme Overrides */
  .fe-root.fe-light-theme {
    --mg-bg-body:        #F5F3FF;
    --mg-bg-card:        #FFFFFF;
    --mg-border-card:    #E2D9F3;
    --mg-text-primary:   #0F172A;
    --mg-text-secondary: #334155;
    --mg-text-muted:     #64748B;
    --mg-gradient-surface: linear-gradient(180deg, #F5F3FF 0%, #EDE9FE 100%);
    --mg-gradient-card:  linear-gradient(180deg, #FFFFFF 0%, #FAFAFE 100%);
    --mg-gradient-insight: linear-gradient(135deg, #2D1B69 0%, #1E1037 100%);
  }

  .font-display { font-family: var(--mg-font-display); }

  .bg-noise {
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.02'/%3E%3C/svg%3E");
  }

  .term-tooltip {
    border-bottom: 1.5px dashed var(--mg-purple-muted);
    cursor: help;
    position: relative;
    display: inline-block;
  }

  .term-tooltip:hover::after {
    content: attr(data-definition);
    position: absolute;
    bottom: 125%;
    left: 50%;
    transform: translateX(-50%);
    background: #1A1033;
    color: #FAFAF8;
    padding: 8px 14px;
    border-radius: 8px;
    font-size: 0.75rem;
    white-space: normal;
    width: 240px;
    z-index: 100;
    box-shadow: 0 10px 25px rgba(0,0,0,0.5);
    border-left: 3px solid var(--mg-purple);
    pointer-events: none;
    line-height: 1.35;
  }

  .tab-btn {
    position: relative;
    transition: all 0.3s ease;
    color: var(--mg-text-muted);
  }

  .tab-btn.active {
    color: var(--mg-text-primary);
    font-weight: 700;
  }

  .tab-btn.active::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 3px;
    background-color: var(--mg-purple);
    border-radius: 3px 3px 0 0;
    box-shadow: 0 0 12px var(--mg-purple);
  }

  .mg-card {
    background: var(--mg-bg-card);
    border: 1px solid var(--mg-border-card);
    box-shadow: var(--mg-glow-card);
    border-radius: 12px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .mg-card:hover {
    border-color: rgba(139, 92, 246, 0.4);
    box-shadow: var(--mg-glow-hover);
    transform: translateY(-2px);
  }

  .mg-insight-card {
    background: var(--mg-gradient-insight);
    border-radius: 12px;
    border: 1px solid rgba(139, 92, 246, 0.3);
    color: #FAFAF8;
    box-shadow: var(--mg-glow-card);
  }

  .fe-root ::-webkit-scrollbar { width: 8px; height: 8px; }
  .fe-root ::-webkit-scrollbar-track { background: #05030A; }
  .fe-root ::-webkit-scrollbar-thumb { background: #4C1D95; border-radius: 4px; }
  .fe-root ::-webkit-scrollbar-thumb:hover { background: #8B5CF6; }

  @media print {
    .no-print { display: none !important; }
    .tab-content { display: block !important; opacity: 1 !important; page-break-after: always; }
    .fe-root { background: white; color: black; }
    .mg-card, .mg-insight-card { border: 1px solid #ccc; box-shadow: none; background: white; color: black; }
  }
`;

export default function FareEagleStrategicAnalysis() {
  const [activeTab, setActiveTab] = useState("exec-overview");
  const [isDark, setIsDark] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Interactive simulator state
  const [simTraffic, setSimTraffic] = useState(300000);
  const [simRecovery, setSimRecovery] = useState(15);
  const [simTicket, setSimTicket] = useState(6500);

  // Chart canvas refs
  const execChartCanvas = useRef<HTMLCanvasElement | null>(null);
  const priceIndexCanvas = useRef<HTMLCanvasElement | null>(null);
  const positioningScatterCanvas = useRef<HTMLCanvasElement | null>(null);
  const capabilityRadarCanvas = useRef<HTMLCanvasElement | null>(null);
  const brandHealthRadarCanvas = useRef<HTMLCanvasElement | null>(null);

  const chartInstances = useRef<{
    execOverview?: Chart;
    priceIndex?: Chart;
    positioningScatter?: Chart;
    capabilityRadar?: Chart;
    brandHealth?: Chart;
  }>({});

  function switchTab(tabId: string): void {
    setActiveTab(tabId);
    window.scrollTo({ top: 120, behavior: "smooth" });
  }

  function toggleTheme() {
    setIsDark((prev) => !prev);
  }

  // Reading scroll progress
  useEffect(() => {
    function onScroll() {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolled);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Initialize all charts once on mount
  useEffect(() => {
    Chart.defaults.font.family = "'DM Sans', sans-serif";
    Chart.defaults.color = "#CBD5E1";

    // Chart 1: Exec Overview Bar Chart
    if (execChartCanvas.current) {
      chartInstances.current.execOverview = new Chart(execChartCanvas.current.getContext("2d")!, {
        type: "bar",
        data: {
          labels: ["Cleartrip", "Ixigo", "MakeMyTrip", "Goibibo", "Agoda", "Fare Eagle"],
          datasets: [
            {
              label: "Base Listed Fare (₹)",
              data: [6077, 6077, 6077, 6077, 6281, 6381],
              backgroundColor: "#A78BFA",
            },
            {
              label: "Final Checkout Fare (₹)",
              data: [6093, 6145, 6441, 6536, 5937, 7137],
              backgroundColor: "#7C3AED",
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: "top", labels: { color: "#E2E8F0" } },
            tooltip: {
              callbacks: {
                label: function (context) {
                  return context.dataset.label + ": ₹" + Number(context.raw).toLocaleString("en-IN");
                },
              },
            },
          },
          scales: {
            y: {
              min: 5000,
              max: 7500,
              ticks: { color: "#CBD5E1", callback: (v) => "₹" + v },
              grid: { color: "rgba(255, 255, 255, 0.08)" },
            },
            x: { ticks: { color: "#CBD5E1" }, grid: { color: "rgba(255, 255, 255, 0.08)" } },
          },
        },
      });
    }

    // Chart 2: Category Price Index
    if (priceIndexCanvas.current) {
      chartInstances.current.priceIndex = new Chart(priceIndexCanvas.current.getContext("2d")!, {
        type: "bar",
        data: {
          labels: ["Agoda", "Cleartrip", "Ixigo", "MakeMyTrip", "Goibibo", "Fare Eagle"],
          datasets: [
            {
              label: "Price Index Score (100 = Category Avg)",
              data: [93, 96, 96, 101, 103, 112],
              backgroundColor: ["#DDD6FE", "#C4B5FD", "#A78BFA", "#8B5CF6", "#6D28D9", "#EF4444"],
              borderRadius: 6,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            y: { min: 80, max: 125, ticks: { color: "#CBD5E1" }, grid: { color: "rgba(255, 255, 255, 0.08)" } },
            x: { ticks: { color: "#CBD5E1" }, grid: { color: "rgba(255, 255, 255, 0.08)" } },
          },
        },
      });
    }

    // Chart 3: Positioning Scatter Plot
    if (positioningScatterCanvas.current) {
      chartInstances.current.positioningScatter = new Chart(positioningScatterCanvas.current.getContext("2d")!, {
        type: "scatter",
        data: {
          datasets: [
            { label: "Fare Eagle (Current)", data: [{ x: 25, y: 88 }], backgroundColor: "#EF4444", pointRadius: 10 },
            { label: "MakeMyTrip", data: [{ x: 80, y: 70 }], backgroundColor: "#8B5CF6", pointRadius: 8 },
            { label: "Cleartrip", data: [{ x: 85, y: 45 }], backgroundColor: "#C4B5FD", pointRadius: 8 },
            { label: "Agoda", data: [{ x: 90, y: 35 }], backgroundColor: "#6D28D9", pointRadius: 8 },
            {
              label: "Fare Eagle (Target White Space)",
              data: [{ x: 90, y: 85 }],
              backgroundColor: "#10B981",
              pointRadius: 12,
              pointStyle: "star",
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              min: 0,
              max: 100,
              ticks: { color: "#CBD5E1" },
              grid: { color: "rgba(255, 255, 255, 0.08)" },
              title: { display: true, text: "Price Transparency & Traveller Insight →", color: "#E2E8F0" },
            },
            y: {
              min: 0,
              max: 100,
              ticks: { color: "#CBD5E1" },
              grid: { color: "rgba(255, 255, 255, 0.08)" },
              title: { display: true, text: "Price Premiumness Scale →", color: "#E2E8F0" },
            },
          },
        },
      });
    }

    // Chart 4: Competitor Capability Radar
    if (capabilityRadarCanvas.current) {
      chartInstances.current.capabilityRadar = new Chart(capabilityRadarCanvas.current.getContext("2d")!, {
        type: "radar",
        data: {
          labels: ["Base Price", "Checkout Transparency", "Value Tier Clarity", "Cashback/Incentives", "Unique Traveller Insight"],
          datasets: [
            {
              label: "Fare Eagle",
              data: [40, 30, 25, 20, 85],
              borderColor: "#EF4444",
              backgroundColor: "rgba(239, 68, 68, 0.25)",
            },
            {
              label: "MakeMyTrip / Cleartrip Avg",
              data: [80, 85, 80, 85, 40],
              borderColor: "#8B5CF6",
              backgroundColor: "rgba(139, 92, 246, 0.25)",
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            r: {
              min: 0,
              max: 100,
              pointLabels: { color: "#E2E8F0" },
              ticks: { display: false },
              grid: { color: "rgba(255, 255, 255, 0.15)" },
            },
          },
        },
      });
    }

    // Chart 5: Brand Health Radar
    if (brandHealthRadarCanvas.current) {
      chartInstances.current.brandHealth = new Chart(brandHealthRadarCanvas.current.getContext("2d")!, {
        type: "radar",
        data: {
          labels: ["Strategy", "Identity", "Culture", "CX/Journey", "Communication", "Perception", "Governance"],
          datasets: [
            {
              label: "Fare Eagle Rating (Out of 100)",
              data: [36, 50, 60, 30, 30, 40, 50],
              borderColor: "#8B5CF6",
              backgroundColor: "rgba(139, 92, 246, 0.3)",
              borderWidth: 2,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            r: {
              min: 0,
              max: 100,
              pointLabels: { color: "#E2E8F0" },
              ticks: { display: false },
              grid: { color: "rgba(255, 255, 255, 0.15)" },
            },
          },
        },
      });
    }

    return () => {
      Object.values(chartInstances.current).forEach((c) => c && c.destroy());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Theme-aware chart color updates (mirrors original updateChartTheme)
  useEffect(() => {
    const textColor = isDark ? "#E2E8F0" : "#334155";
    const gridColor = isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)";

    Object.values(chartInstances.current).forEach((chart) => {
      if (!chart) return;
      if (chart.options.scales) {
        Object.values(chart.options.scales).forEach((scale) => {
          if (scale?.ticks) scale.ticks.color = textColor;
          if (scale && scale.grid) scale.grid.color = gridColor;
          if (scale && "pointLabels" in scale && scale.pointLabels) {
            scale.pointLabels.color = textColor;
          }
        });
      }
      chart.update();
    });
  }, [isDark]);

  // Interactive Financial Simulator (Module A Logic)
  const { recoveredBookings, gbvText } = useMemo(() => {
    const recoveryPct = simRecovery / 100;
    const dropoffPool = simTraffic * 0.15;
    const bookings = Math.round(dropoffPool * recoveryPct);
    const gbv = bookings * simTicket;

    let gbv_text = "";
    if (gbv >= 10000000) {
      gbv_text = "₹" + (gbv / 10000000).toFixed(2) + " Cr";
    } else if (gbv >= 100000) {
      gbv_text = "₹" + (gbv / 100000).toFixed(2) + " L";
    } else {
      gbv_text = "₹" + gbv.toLocaleString("en-IN");
    }

    return { recoveredBookings: bookings.toLocaleString("en-IN"), gbvText: gbv_text };
  }, [simTraffic, simRecovery, simTicket]);

  return (
    <div
      className={`fe-root bg-noise min-h-screen flex flex-col justify-between selection:bg-purple-900 selection:text-purple-100 ${
        isDark ? "" : "fe-light-theme"
      }`}
    >
      <style>{GLOBAL_CSS}</style>

      {/* Top Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-purple-600 via-purple-400 to-purple-300 z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      <header
        className="text-white pt-8 pb-10 px-4 md:px-12 relative overflow-hidden shadow-2xl border-b border-purple-900/40"
        style={{ background: "var(--mg-gradient-hero)" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
          {/* Brand Mark */}
          <div>
            <div className="flex items-center gap-2">
              <span className="text-white text-lg font-black tracking-[0.2em]">
                <img src={magsmennewlogowhitelandscape} alt="magsmen white logo" className="w-[300px]" />
              </span>
              {/* <img src={magsmennewlogowhitelandscape} alt="magsmen white logo" /> */}
              <span className="text-xs bg-purple-950/80 text-purple-300 px-2.5 py-1 rounded border border-purple-500/40 uppercase font-mono tracking-wider font-semibold">
                Strategic Intelligence
              </span>
            </div>
            {/* <div className="text-[10px] tracking-[0.3em] text-purple-300 font-semibold uppercase mt-1 opacity-90">
              BRAND CONSULTANTS
            </div> */}
          </div>

          {/* Report Meta */}
          <div className="text-left md:text-right">
            <h1 className="text-2xl md:text-4xl font-bold font-display text-white tracking-tight">
              FARE EAGLE — Strategic Analysis
            </h1>
            <p className="text-xs md:text-sm text-purple-200 mt-1 font-medium tracking-wide uppercase">
              A Magsmen Strategic Analysis & Market Diagnosis
            </p>
            <div className="flex items-center md:justify-end gap-3 mt-2 text-xs text-gray-300 font-mono">
              <span>
                PREPARED FOR: <strong className="text-purple-300">Fare Eagle Leadership Team</strong>
              </span>
              <span>•</span>
              <span>JULY 2026</span>
              <span>•</span>
              <span className="text-purple-400 font-bold bg-purple-950/80 px-2 py-0.5 rounded border border-purple-500/30">
                CONFIDENTIAL
              </span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-purple-800/40 relative z-10">
          <div className="bg-[#120926]/90 border border-purple-800/50 p-4 rounded-xl backdrop-blur shadow-lg">
            <div className="text-xs text-purple-300 uppercase tracking-wider font-semibold">Listed Price Gap</div>
            <div className="text-2xl md:text-3xl font-bold font-display text-white mt-1 flex items-baseline gap-2">
              +12.4%
              <span className="text-xs text-red-400 font-sans font-semibold">vs Category Avg</span>
            </div>
            <p className="text-[11px] text-gray-300 mt-1">Priced higher before search filters apply</p>
          </div>

          <div className="bg-[#120926]/90 border border-purple-800/50 p-4 rounded-xl backdrop-blur shadow-lg">
            <div className="text-xs text-purple-300 uppercase tracking-wider font-semibold">Checkout Price Jump</div>
            <div className="text-2xl md:text-3xl font-bold font-display text-white mt-1 flex items-baseline gap-2">
              +₹756
              <span className="text-xs text-red-400 font-sans font-semibold">Highest Jump</span>
            </div>
            <p className="text-[11px] text-gray-300 mt-1">Highest hidden add-on jump in HYD-DED test</p>
          </div>

          <div className="bg-[#120926]/90 border border-purple-800/50 p-4 rounded-xl backdrop-blur shadow-lg">
            <div className="text-xs text-purple-300 uppercase tracking-wider font-semibold">Value+ Tier Visibility</div>
            <div className="text-2xl md:text-3xl font-bold font-display text-purple-300 mt-1">
              0%<span className="text-xs text-gray-400 font-sans font-normal"> Pre-checkout</span>
            </div>
            <p className="text-[11px] text-gray-300 mt-1">Features hidden until payment step</p>
          </div>

          <div className="bg-[#120926]/90 border border-purple-800/50 p-4 rounded-xl backdrop-blur shadow-lg">
            <div className="text-xs text-purple-300 uppercase tracking-wider font-semibold">Unclaimed Differentiator</div>
            <div className="text-2xl md:text-3xl font-bold font-display text-purple-400 mt-1">Quick Facts</div>
            <p className="text-[11px] text-purple-200 mt-1">Seed USP ignored by all incumbents</p>
          </div>
        </div>
      </header>

      <nav className="sticky top-0 bg-[#0C081A]/95 backdrop-blur-md border-b border-purple-900/40 z-40 shadow-xl no-print">
        <div className="max-w-7xl mx-auto flex items-center justify-between overflow-x-auto no-scrollbar px-4">
          <div className="flex space-x-1 md:space-x-3 py-2 min-w-max">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => switchTab(tab.id)}
                className={`tab-btn px-3.5 py-2.5 text-xs md:text-sm font-medium hover:text-purple-300 ${
                  activeTab === tab.id ? "active" : ""
                } ${tab.id === "strategic-opportunity" ? "text-purple-300 font-semibold" : ""}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3 pl-4 border-l border-purple-900/50 text-xs text-purple-300 font-mono">
            <button
              onClick={toggleTheme}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-purple-500/40 bg-purple-950/60 text-purple-200 hover:text-white hover:border-purple-400 text-xs transition shadow-sm"
            >
              <span>{isDark ? "☀️" : "🌙"}</span> <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
            </button>
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
            <span>OTA Benchmark Engine v2.4</span>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT AREA */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8 flex-grow w-full">
        {/* ========================================== */}
        {/* TAB 1: EXECUTIVE OVERVIEW                  */}
        {/* ========================================== */}
        <section id="exec-overview" className={`tab-content space-y-8 ${activeTab === "exec-overview" ? "" : "hidden"}`}>
          <div className="p-6 md:p-8 rounded-xl bg-[#1B1033] border-l-4 border-purple-500 shadow-xl">
            <div className="text-xs font-bold uppercase tracking-wider text-purple-300 mb-1">Core Strategic Thesis</div>
            <h2 className="text-xl md:text-2xl font-display font-bold text-white">
              Fare Eagle is not suffering from a product deficiency, but from a positioning and education breakdown.
            </h2>
            <p className="mt-3 text-sm md:text-base text-gray-200 leading-relaxed">
              Fare Eagle currently occupies the most dangerous quadrant in the Indian OTA market:{" "}
              <strong className="text-purple-300">priced above the market baseline while delivering below-market price transparency</strong>.
              In a hyper-commoditized category where 84% of consumers tab-compare before purchase, Fare Eagle hides its true value
              proposition (such as its Value+ tier) until checkout, while simultaneously exposing customers to steep add-on jumps.
              However, its undeveloped "Quick Facts" feature holds the seed of an ownable, traveller-first USP that incumbents have
              completely missed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="mg-insight-card p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-purple-300 uppercase tracking-widest mb-2">01. Pricing Vulnerability</div>
                <h3 className="text-lg font-bold font-display text-white mb-2">Base Fare Over-pricing & Hidden Checkout Jumps</h3>
                <p className="text-xs text-gray-200 leading-relaxed">
                  <strong>Evidence:</strong> In live testing (HYD to DED, Aug 4), Fare Eagle listed at ₹6,381 vs market standard ₹6,077,
                  and jumped +₹756 at checkout (final ₹7,137 vs Agoda's ₹5,937).
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-purple-800/60 text-xs italic text-purple-300">
                <strong>Implication:</strong> Price-sensitive domestic travellers abandon cart instantly during multi-tab price checks.
              </div>
            </div>

            <div className="mg-insight-card p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-purple-300 uppercase tracking-widest mb-2">02. Value Communication Gap</div>
                <h3 className="text-lg font-bold font-display text-white mb-2">The "Value+" Tier Education Deficit</h3>
                <p className="text-xs text-gray-200 leading-relaxed">
                  <strong>Evidence:</strong> Competitors like MakeMyTrip and Cleartrip clearly present itemized add-on seating and meal
                  upgrades early. Fare Eagle delays this explanation until the final payment step.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-purple-800/60 text-xs italic text-purple-300">
                <strong>Implication:</strong> Extra charges feel punitive rather than value-adding, creating acute distrust.
              </div>
            </div>

            <div className="mg-insight-card p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-purple-300 uppercase tracking-widest mb-2">03. Differentiated Seed Asset</div>
                <h3 className="text-lg font-bold font-display text-white mb-2">Unclaimed "Quick Facts" Differentiator</h3>
                <p className="text-xs text-gray-200 leading-relaxed">
                  <strong>Evidence:</strong> Fare Eagle's proprietary "Quick Facts" surfaces crucial traveller context upfront—a feature
                  zero incumbents (MMT, Cleartrip, Ixigo) currently provide.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-purple-800/60 text-xs italic text-purple-300">
                <strong>Implication:</strong> Fare Eagle can pivot from a transactional aggregator to a "Traveller Insight Platform".
              </div>
            </div>
          </div>

          <div className="mg-card p-6">
            <div className="flex flex-col md:flex-row justify-between md:items-center mb-4 gap-2">
              <div>
                <h3 className="text-lg font-bold font-display text-white">Domestic Route Price Jump Comparison</h3>
                <p className="text-xs text-gray-300">Comparing Base Listed Fare vs. Final Checkout Fare (Add-on Seating Included)</p>
              </div>
              <span className="text-xs bg-purple-950/80 text-purple-300 px-3 py-1 rounded-full font-semibold border border-purple-500/30">
                Live Benchmark: Aug 4, 2026 Test Route
              </span>
            </div>
            <div className="h-72 w-full">
              <canvas ref={execChartCanvas}></canvas>
            </div>
            <div className="mt-4 p-3 bg-[#1B1033] rounded-lg text-xs text-gray-200 flex items-center justify-between border border-purple-900/40">
              <span>
                <strong>So What?</strong> While Agoda applies incentives to drop final price (-₹344), Fare Eagle expands the gap (+₹756),
                penalizing the customer at checkout.
              </span>
              <button onClick={() => switchTab("category-pricing")} className="text-purple-300 font-bold hover:underline ml-2">
                View Deep Dive &rarr;
              </button>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* TAB 2: CATEGORY & PRICING BENCHMARKS      */}
        {/* ========================================== */}
        <section id="category-pricing" className={`tab-content space-y-8 ${activeTab === "category-pricing" ? "" : "hidden"}`}>
          <div className="border-b border-purple-900/50 pb-4">
            <span className="text-xs font-bold text-purple-300 uppercase tracking-widest">Pricing Intelligence</span>
            <h2 className="text-2xl font-bold font-display text-white mt-1">Domestic & International Price Discrepancy Diagnostics</h2>
            <p className="text-sm text-gray-300 mt-1">
              Benchmarking Fare Eagle's pricing behavior at the most decisive customer drop-off point: the listing-to-checkout gap.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Case 1 */}
            <div className="mg-card p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-[10px] font-mono bg-purple-950 text-purple-300 px-2.5 py-1 rounded uppercase font-bold border border-purple-800">
                    Case Study 01
                  </span>
                  <h3 className="text-lg font-bold font-display text-white mt-2">Hyderabad to Goa (IndiGo)</h3>
                  <p className="text-xs text-gray-400">Travel Date: 23rd July 2026 | Direct Comparison</p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-red-400 font-bold block">+₹1,656 Difference</span>
                  <span className="text-[10px] text-gray-400">Fare Eagle More Expensive</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-[#1A1033] rounded-lg border border-purple-900/50">
                  <div>
                    <span className="text-xs font-bold text-white block">Fare Eagle</span>
                    <span className="text-[11px] text-gray-300">Listed: ₹11,761</span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-bold text-white">Final: ₹12,177</span>
                    <span className="text-[10px] text-purple-300 block">+₹416 Seat Fee</span>
                  </div>
                </div>

                <div className="flex justify-between items-center p-3 bg-purple-950/40 rounded-lg border border-purple-800/40">
                  <div>
                    <span className="text-xs font-bold text-purple-200 block">Cleartrip</span>
                    <span className="text-[11px] text-purple-300">Listed: ₹9,801</span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-bold text-white">Final: ₹10,521</span>
                    <span className="text-[10px] text-purple-300 block">+₹720 Seat Fee</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-gray-200 mt-4 leading-relaxed bg-[#1B1033] p-3 rounded border border-purple-800/50">
                <strong>Insight:</strong> Although Cleartrip's add-on fee was higher, its lower base listing fare made the final checkout
                price <strong>13.6% cheaper</strong> than Fare Eagle.
              </p>
            </div>

            {/* Case 2 Table */}
            <div className="mg-card p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-[10px] font-mono bg-purple-950 text-purple-300 px-2.5 py-1 rounded uppercase font-bold border border-purple-800">
                    Case Study 02
                  </span>
                  <h3 className="text-lg font-bold font-display text-white mt-2">Hyderabad to Dehradun</h3>
                  <p className="text-xs text-gray-400">Travel Date: 4th August 2026 | Multi-OTA Benchmark</p>
                </div>
                <span className="text-xs font-mono text-purple-300 font-bold bg-purple-950 px-2.5 py-1 rounded border border-purple-800">
                  6 OTAs Compared
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="text-[11px] uppercase tracking-wider text-purple-300 border-b border-purple-900/60 bg-[#160B2E]">
                      <th className="p-2.5">Platform</th>
                      <th className="p-2.5">Listed</th>
                      <th className="p-2.5">Final</th>
                      <th className="p-2.5 text-right">Gap Impact</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs divide-y divide-purple-900/30 text-gray-200">
                    <tr className="hover:bg-purple-950/30">
                      <td className="p-2.5 font-medium text-white">MakeMyTrip</td>
                      <td className="p-2.5">₹6,077</td>
                      <td className="p-2.5">₹6,441</td>
                      <td className="p-2.5 text-right text-amber-400">+₹364</td>
                    </tr>
                    <tr className="hover:bg-purple-950/30">
                      <td className="p-2.5 font-medium text-white">Cleartrip</td>
                      <td className="p-2.5">₹6,077</td>
                      <td className="p-2.5">₹6,093</td>
                      <td className="p-2.5 text-right text-emerald-400">+₹16</td>
                    </tr>
                    <tr className="hover:bg-purple-950/30">
                      <td className="p-2.5 font-medium text-white">Ixigo</td>
                      <td className="p-2.5">₹6,077</td>
                      <td className="p-2.5">₹6,145</td>
                      <td className="p-2.5 text-right text-emerald-400">+₹68</td>
                    </tr>
                    <tr className="hover:bg-purple-950/30">
                      <td className="p-2.5 font-medium text-white">Goibibo</td>
                      <td className="p-2.5">₹6,077</td>
                      <td className="p-2.5">₹6,536</td>
                      <td className="p-2.5 text-right text-amber-400">+₹459</td>
                    </tr>
                    <tr className="bg-emerald-950/40 text-white font-medium border-l-2 border-emerald-500">
                      <td className="p-2.5 font-bold text-emerald-300">Agoda</td>
                      <td className="p-2.5">₹6,281</td>
                      <td className="p-2.5 font-bold text-emerald-300">₹5,937</td>
                      <td className="p-2.5 text-right font-bold text-emerald-400">−₹344</td>
                    </tr>
                    <tr className="bg-purple-900/40 font-bold border-l-2 border-purple-500">
                      <td className="p-2.5 text-white">Fare Eagle</td>
                      <td className="p-2.5 text-white">₹6,381</td>
                      <td className="p-2.5 text-white">₹7,137</td>
                      <td className="p-2.5 text-right text-red-400 font-bold">+₹756</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Price Index Spectrum Chart */}
          <div className="mg-card p-6">
            <div className="mb-4">
              <h3 className="text-lg font-bold font-display text-white">
                Category{" "}
                <span
                  className="term-tooltip"
                  data-definition="A standardized benchmark setting market average price to 100 to measure relative cost power."
                >
                  Price Index
                </span>{" "}
                (Market Average = 100)
              </h3>
              <p className="text-xs text-gray-300">
                Fare Eagle operates at Index 112 (12% above market standard) without a matching premium service perception.
              </p>
            </div>
            <div className="h-64 w-full">
              <canvas ref={priceIndexCanvas}></canvas>
            </div>
          </div>

          {/* International Routes Dynamics Callout */}
          <div className="mg-insight-card p-6">
            <div className="flex items-center gap-2 text-purple-300 font-mono text-xs uppercase mb-2">
              <span>International Long-Haul Benchmarks</span>
              <span>•</span>
              <span>July & August 23rd Routes</span>
            </div>
            <h3 className="text-xl font-bold font-display text-white mb-3">
              Long-Haul Friction Amplification (DEL-NYC, BOM-LHR, BLR-SFO)
            </h3>
            <p className="text-sm text-gray-200 leading-relaxed max-w-4xl">
              On high-ticket international routes, price opacity and lack of baggage/seat tier clarity hit conversion exponentially
              harder. While competitors upfront-bundle seat preferences or display baggage allowance tags directly on search result
              cards, Fare Eagle forces long-haul travellers into speculative booking steps—causing catastrophic checkout abandonments
              on high-yield international fares.
            </p>
          </div>
        </section>

        {/* ========================================== */}
        {/* TAB 3: PERCEPTION & FRICTION MAP           */}
        {/* ========================================== */}
        <section id="perception-friction" className={`tab-content space-y-8 ${activeTab === "perception-friction" ? "" : "hidden"}`}>
          <div className="border-b border-gray-200 pb-4">
            <span className="text-xs font-bold text-purple-700 uppercase tracking-widest">Customer Experience Diagnosis</span>
            <h2 className="text-2xl font-bold font-display text-gray-900 mt-1">
              The{" "}
              <span
                className="term-tooltip"
                data-definition="The gap between what a brand believes its product delivers vs. what customers actually experience."
              >
                Perception Gap
              </span>{" "}
              & Friction Journey Map
            </h2>
            <p className="text-sm text-gray-600 mt-1">Analyzing where user trust breaks down during the search-to-payment lifecycle.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="mg-card p-5 border-t-4 border-purple-400">
              <span className="text-xs font-mono text-gray-400">STEP 01</span>
              <h4 className="font-bold text-sm text-gray-900 mt-1">Initial Search</h4>
              <div className="mt-3 text-xs text-gray-600 space-y-2">
                <p className="text-emerald-700 font-semibold">✓ Quick Facts visible (Positive Signal)</p>
                <p className="text-red-600">✗ Base fare listed 3-5% above market baseline</p>
              </div>
            </div>

            <div className="mg-card p-5 border-t-4 border-purple-600">
              <span className="text-xs font-mono text-gray-400">STEP 02</span>
              <h4 className="font-bold text-sm text-gray-900 mt-1">Flight Selection</h4>
              <div className="mt-3 text-xs text-gray-600 space-y-2">
                <p className="text-gray-500">• Shows Saver & Flexible options</p>
                <p className="text-red-600">✗ Value+ tier benefits remain un-explained</p>
              </div>
            </div>

            <div className="mg-card p-5 border-t-4 border-purple-800">
              <span className="text-xs font-mono text-gray-400">STEP 03</span>
              <h4 className="font-bold text-sm text-gray-900 mt-1">Add-on Seating</h4>
              <div className="mt-3 text-xs text-gray-600 space-y-2">
                <p className="text-red-600 font-semibold">✗ Mandatory seat charge added automatically</p>
                <p className="text-red-600">✗ Competitors absorb or discount seating</p>
              </div>
            </div>

            <div className="mg-card p-5 border-t-4 border-purple-950">
              <span className="text-xs font-mono text-gray-400">STEP 04</span>
              <h4 className="font-bold text-sm text-gray-900 mt-1">Final Checkout</h4>
              <div className="mt-3 text-xs text-gray-600 space-y-2">
                <p className="text-red-700 font-bold">⚡ Severe Price Jump (+₹756)</p>
                <p className="text-red-600">✗ Zero cashback/incentive offset</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mg-card p-6">
              <div className="flex items-center gap-2 text-red-600 font-bold text-xs uppercase tracking-wider mb-2">
                <span>Communication Failure</span>
              </div>
              <h3 className="text-lg font-bold font-display text-gray-900 mb-2">The Value+ Tier Education Deficit</h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                Fare Eagle's Value+ tier includes key privileges like meal selection and preferred seat allocation. However, because
                this value is hidden until the payment page, customers perceive the price jump as an aggressive penalty rather than a
                premium upgrade.
              </p>

              <div className="space-y-2 text-xs">
                <div className="p-3 bg-red-50 text-red-900 rounded border border-red-200">
                  <strong>Cleartrip / Ixigo Model:</strong> Shows transparent "Inclusions: Baggage + Free Seats + Meals" on flight card
                  before selection.
                </div>
                <div className="p-3 bg-gray-100 text-gray-800 rounded border border-gray-200">
                  <strong>Fare Eagle Model:</strong> Obscures tier benefits until payment page, resulting in immediate tab-abandonment.
                </div>
              </div>
            </div>

            <div className="mg-card p-6 bg-gradient-to-br from-purple-900 to-purple-950 text-white border-purple-800">
              <div className="flex items-center gap-2 text-purple-300 font-bold text-xs uppercase tracking-wider mb-2">
                <span>Unclaimed Competitive Advantage</span>
              </div>
              <h3 className="text-lg font-bold font-display text-white mb-2">"Quick Facts": The Seed of a True USP</h3>
              <p className="text-xs text-purple-200 leading-relaxed mb-4">
                While incumbents focus solely on price-undercutting wars, Fare Eagle possesses "Quick Facts"—surfacing crucial travel
                contextual intelligence (on-time reliability, gate proximity, baggage wait estimates, legroom metrics) before booking.
              </p>

              <div className="p-4 bg-purple-900/60 rounded-lg border border-purple-700 text-xs text-purple-100 space-y-2">
                <div className="font-bold text-purple-300 uppercase tracking-wide text-[10px]">Strategic Path Forward</div>
                <p>
                  Elevate "Quick Facts" from an underdeveloped sidebar widget to the core brand identity:{" "}
                  <strong>The Smart Traveller's Honest Guide.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* TAB 4: COMPETITIVE WHITE SPACE             */}
        {/* ========================================== */}
        <section
          id="competitive-white-space"
          className={`tab-content space-y-8 ${activeTab === "competitive-white-space" ? "" : "hidden"}`}
        >
          <div className="border-b border-gray-200 pb-4">
            <span className="text-xs font-bold text-purple-700 uppercase tracking-widest">Market Landscape</span>
            <h2 className="text-2xl font-bold font-display text-gray-900 mt-1">
              Competitive Positioning Matrix &{" "}
              <span
                className="term-tooltip"
                data-definition="Unclaimed, highly profitable market territory with unaddressed consumer needs."
              >
                White Space
              </span>
            </h2>
            <p className="text-sm text-gray-600 mt-1">Mapping price perception against transparency & traveller insight.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="mg-card p-6">
              <h3 className="text-base font-bold font-display text-gray-900 mb-1">2x2 Category Positioning Map</h3>
              <p className="text-xs text-gray-500 mb-4">Fare Eagle sits isolated in the high-cost, low-transparency quadrant.</p>

              <div className="h-72 w-full relative">
                <canvas ref={positioningScatterCanvas}></canvas>
              </div>

              <div className="mt-4 p-3 bg-purple-50 rounded border border-purple-200 text-xs text-purple-900">
                <strong>Target White Space:</strong> Transition from top-left quadrant (Overpriced & Opacity) to top-right quadrant
                (High Transparency & High Traveller Insight).
              </div>
            </div>

            <div className="mg-card p-6">
              <h3 className="text-base font-bold font-display text-gray-900 mb-1">Competitor Capability Spectrum</h3>
              <p className="text-xs text-gray-500 mb-4">Multi-dimensional benchmarking across key market expectations.</p>

              <div className="h-72 w-full">
                <canvas ref={capabilityRadarCanvas}></canvas>
              </div>
            </div>
          </div>

          <div className="mg-card p-6">
            <h3 className="text-base font-bold font-display text-gray-900 mb-4">Competitive Tier Analysis Table</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-purple-900 text-white uppercase text-[10px] tracking-wider">
                    <th className="p-3">Competitor Tier</th>
                    <th className="p-3">Key Players</th>
                    <th className="p-3">Core Weapon</th>
                    <th className="p-3">Transparency Score</th>
                    <th className="p-3">Fare Eagle Counter-Strategy</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="p-3 font-bold text-gray-900">Primary Domestic OTAs</td>
                    <td className="p-3 text-gray-600">MakeMyTrip, Cleartrip, Ixigo, Goibibo, Yatra</td>
                    <td className="p-3 text-gray-600">Aggressive inventory, transparent upgrade tiers, flight tracking</td>
                    <td className="p-3 font-semibold text-emerald-700">High (8/10)</td>
                    <td className="p-3 text-purple-900 font-medium">
                      Own "Traveller Insight & Quick Facts" rather than price discounting wars.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-gray-900">International OTAs</td>
                    <td className="p-3 text-gray-600">Booking.com, Agoda</td>
                    <td className="p-3 text-gray-600">Global supply, loyalty discounting, bundled hotel cross-sells</td>
                    <td className="p-3 font-semibold text-emerald-700">Very High (9/10)</td>
                    <td className="p-3 text-purple-900 font-medium">Eliminate hidden seating add-ons on long-haul routes.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-gray-900">Secondary / Super-Apps</td>
                    <td className="p-3 text-gray-600">Paytm, PhonePe, Amazon Travel</td>
                    <td className="p-3 text-gray-600">Massive ecosystem cashback, zero convenience fees for wallet users</td>
                    <td className="p-3 font-semibold text-amber-700">Moderate (6/10)</td>
                    <td className="p-3 text-purple-900 font-medium">Introduce clear, honest final-price guarantees.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* TAB 5: THE STRATEGIC OPPORTUNITY           */}
        {/* ========================================== */}
        <section
          id="strategic-opportunity"
          className={`tab-content space-y-8 ${activeTab === "strategic-opportunity" ? "" : "hidden"}`}
        >
          <div className="border-b border-gray-200 pb-4">
            <span className="text-xs font-bold text-purple-700 uppercase tracking-widest">Magsmen Strategic Recommendation</span>
            <h2 className="text-2xl font-bold font-display text-gray-900 mt-1">
              The Differentiated Positioning Roadmap & Financial Model
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Transforming Fare Eagle from an expensive aggregator into India's premier "Transparent Traveller-First Advocate".
            </p>
          </div>

          <div
            className="p-8 rounded-2xl text-white shadow-xl relative overflow-hidden border border-purple-800"
            style={{ background: "var(--mg-gradient-hero)" }}
          >
            <div className="text-xs font-mono text-purple-300 uppercase tracking-widest mb-2">Core Positioning Framework</div>
            <h3 className="text-xl md:text-3xl font-display font-bold leading-tight mb-4">
              "For smart Indian travellers who value clarity over hidden surprises, Fare Eagle is the OTA that provides upfront flight
              intelligence and honest pricing—so you never pay hidden checkout penalties."
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-purple-800/60 text-xs">
              <div>
                <span className="text-purple-400 font-bold block uppercase">Target Audience</span>
                <span className="text-gray-300">Frequent domestic & international travellers comparing multi-tabs</span>
              </div>
              <div>
                <span className="text-purple-400 font-bold block uppercase">Category Frame</span>
                <span className="text-gray-300">Transparent Flight & Insight Platform</span>
              </div>
              <div>
                <span className="text-purple-400 font-bold block uppercase">Reason to Believe</span>
                <span className="text-gray-300">Proprietary "Quick Facts" & Upfront Value+ inclusions</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="mg-insight-card p-6 border-l-4 border-purple-500">
              <div className="text-xs font-mono text-purple-300 uppercase font-bold">Phase 1: 90 Days</div>
              <h4 className="text-lg font-bold font-display text-white mt-1 mb-3">Fix Conversion Drag</h4>
              <ul className="space-y-2 text-xs text-gray-300 list-disc list-inside">
                <li>Eliminate auto-added paid seats at checkout.</li>
                <li>Expose Value+ tier benefits (meals, seats) directly on search results cards.</li>
                <li>Standardize listed prices within 1% of market floor.</li>
              </ul>
              <div className="mt-4 text-[11px] text-purple-300 font-semibold bg-purple-900/40 p-2 rounded">
                Goal: Stop checkout drop-offs & restore baseline trust.
              </div>
            </div>

            <div className="mg-insight-card p-6 border-l-4 border-purple-400">
              <div className="text-xs font-mono text-purple-300 uppercase font-bold">Phase 2: 180 Days</div>
              <h4 className="text-lg font-bold font-display text-white mt-1 mb-3">Own "Quick Facts" USP</h4>
              <ul className="space-y-2 text-xs text-gray-300 list-disc list-inside">
                <li>Expand Quick Facts to include baggage wait times, gate distance & seat pitch.</li>
                <li>Launch "No Hidden Fee" Price Guarantee badge.</li>
                <li>Implement simple loyalty cashback program for repeat travellers.</li>
              </ul>
              <div className="mt-4 text-[11px] text-purple-300 font-semibold bg-purple-900/40 p-2 rounded">
                Goal: Establish clear, ownable reason to switch.
              </div>
            </div>

            <div className="mg-insight-card p-6 border-l-4 border-purple-300" style={{ background: "var(--mg-gradient-cta)" }}>
              <div className="text-xs font-mono text-purple-100 uppercase font-bold">Phase 3: 365 Days</div>
              <h4 className="text-lg font-bold font-display text-white mt-1 mb-3">Category Dominance</h4>
              <ul className="space-y-2 text-xs text-purple-100 list-disc list-inside">
                <li>Position Fare Eagle as India's premier transparent travel portal.</li>
                <li>Scale B2B enterprise travel tie-ups in AP/Telangana tech hubs.</li>
                <li>Achieve top-3 customer satisfaction NPS in domestic OTA sector.</li>
              </ul>
              <div className="mt-4 text-[11px] text-white font-semibold bg-purple-950/60 p-2 rounded">
                Goal: Sustainable market share capture above category baseline.
              </div>
            </div>
          </div>

          <div className="mg-card p-6 border-2 border-purple-200">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-2">
              <div>
                <span className="text-xs font-bold text-purple-700 uppercase tracking-widest">Module A: Interactive Simulator</span>
                <h3 className="text-xl font-bold font-display text-gray-900">Conversion Impact & Financial Recovery Model</h3>
                <p className="text-xs text-gray-500">
                  Estimate monthly revenue impact by fixing checkout friction and price transparency.
                </p>
              </div>
              <span className="text-xs bg-purple-100 text-purple-800 font-mono px-3 py-1 rounded font-bold">Interactive Calculator</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-4 col-span-1 bg-gray-50 p-4 rounded-xl border border-gray-200">
                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">Monthly Search Traffic</label>
                  <input
                    type="range"
                    min="50000"
                    max="1000000"
                    step="50000"
                    value={simTraffic}
                    onChange={(e) => setSimTraffic(Number(e.target.value))}
                    className="w-full accent-purple-600"
                  />
                  <span className="text-xs font-mono font-bold text-purple-900 block mt-1">
                    {simTraffic.toLocaleString("en-IN")} searches/mo
                  </span>
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">Checkout Abandonment Reduction</label>
                  <input
                    type="range"
                    min="5"
                    max="35"
                    step="1"
                    value={simRecovery}
                    onChange={(e) => setSimRecovery(Number(e.target.value))}
                    className="w-full accent-purple-600"
                  />
                  <span className="text-xs font-mono font-bold text-purple-900 block mt-1">{simRecovery}% Drop-off Recovery</span>
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">Avg Ticket Size (₹)</label>
                  <input
                    type="range"
                    min="3000"
                    max="15000"
                    step="500"
                    value={simTicket}
                    onChange={(e) => setSimTicket(Number(e.target.value))}
                    className="w-full accent-purple-600"
                  />
                  <span className="text-xs font-mono font-bold text-purple-900 block mt-1">
                    ₹{simTicket.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>

              <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 flex items-center">
                <div className="text-white p-6 rounded-xl border border-purple-800" style={{ background: "var(--mg-gradient-metric)" }}>
                  <span className="text-xs text-purple-300 font-mono uppercase">Recovered Monthly Bookings</span>
                  <div className="text-3xl font-bold font-display text-white mt-2">{recoveredBookings}</div>
                  <p className="text-[11px] text-gray-400 mt-1">Incremental bookings preserved from cart abandonment</p>
                </div>

                <div className="text-white p-6 rounded-xl border border-purple-800" style={{ background: "var(--mg-gradient-metric)" }}>
                  <span className="text-xs text-purple-300 font-mono uppercase">Recovered Gross Booking Value</span>
                  <div className="text-3xl font-bold font-display text-purple-300 mt-2">{gbvText}</div>
                  <p className="text-[11px] text-gray-400 mt-1">Monthly top-line recovery in Indian Rupee format</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-purple-900 text-white flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h4 className="font-bold font-display text-lg">Boardroom Recommendation Prompt</h4>
              <p className="text-xs text-purple-200 mt-1">
                The recommendation is to immediately standardize domestic listed fares and reposition Fare Eagle around Quick Facts.
                The window to execute before competitors mimic flight context features is <strong>90 to 120 days</strong>.
              </p>
            </div>
            <button
              onClick={() => switchTab("about-magsmen")}
              className="px-6 py-3 bg-white text-purple-950 font-bold rounded-lg text-xs hover:bg-purple-100 transition whitespace-nowrap"
            >
              Engage Magsmen Strategy Team &rarr;
            </button>
          </div>
        </section>

        {/* ========================================== */}
        {/* TAB 6: BRAND HEALTH SCORECARD             */}
        {/* ========================================== */}
        <section id="brand-health" className={`tab-content space-y-8 ${activeTab === "brand-health" ? "" : "hidden"}`}>
          <div className="border-b border-gray-200 pb-4">
            <span className="text-xs font-bold text-purple-700 uppercase tracking-widest">Diagnostic Audit</span>
            <h2 className="text-2xl font-bold font-display text-gray-900 mt-1">
              Magsmen 7-Pillar{" "}
              <span
                className="term-tooltip"
                data-definition="A weighted 100-point composite score evaluating brand performance across 7 core pillars."
              >
                Brand Health Index
              </span>
            </h2>
            <p className="text-sm text-gray-600 mt-1">Evaluating Fare Eagle's institutional brand health readiness.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="mg-card p-6 flex flex-col items-center justify-center text-center bg-gradient-to-b from-purple-50 to-white">
              <span className="text-xs font-mono font-bold text-purple-800 uppercase tracking-widest">Composite Score</span>
              <div className="relative my-4 flex items-center justify-center">
                <div className="w-36 h-36 rounded-full border-8 border-purple-200 border-t-purple-700 flex items-center justify-center">
                  <span className="text-4xl font-black font-display text-purple-950">
                    38<span className="text-lg font-normal text-gray-400">/100</span>
                  </span>
                </div>
              </div>
              <span className="px-3 py-1 bg-red-100 text-red-800 text-xs font-bold rounded-full border border-red-200 uppercase">
                Critical Strategic Intervention Required
              </span>
              <p className="text-xs text-gray-500 mt-3 leading-relaxed">
                Deficits in price transparency and brand positioning depress Fare Eagle's overall health index despite strong backend
                product infrastructure.
              </p>
            </div>

            <div className="mg-card p-6 col-span-2">
              <h3 className="text-base font-bold font-display text-gray-900 mb-2">7-Pillar Audit Radar</h3>
              <div className="h-64 w-full">
                <canvas ref={brandHealthRadarCanvas}></canvas>
              </div>
            </div>
          </div>

          <div className="mg-card p-6">
            <h3 className="text-base font-bold font-display text-gray-900 mb-4">7-Pillar Scoring & Gap Breakdown</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs divide-y divide-gray-200">
                <thead className="bg-gray-50 text-gray-500 uppercase text-[10px]">
                  <tr>
                    <th className="p-3">Pillar</th>
                    <th className="p-3">Weight</th>
                    <th className="p-3">Score (1-5)</th>
                    <th className="p-3">Weighted Rating</th>
                    <th className="p-3">Primary Strategic Gap</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="p-3 font-bold text-gray-900">1. Strategy & Positioning</td>
                    <td className="p-3">15%</td>
                    <td className="p-3 font-bold text-red-600">1.8 / 5</td>
                    <td className="p-3 font-mono">5.4%</td>
                    <td className="p-3 text-gray-600">Unclear USP; functionally identical to MakeMyTrip/Cleartrip.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-gray-900">2. Identity & System</td>
                    <td className="p-3">15%</td>
                    <td className="p-3 font-bold text-amber-600">2.5 / 5</td>
                    <td className="p-3 font-mono">7.5%</td>
                    <td className="p-3 text-gray-600">Generic travel branding; fails to communicate premium Value+ tier.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-gray-900">3. Brand Culture</td>
                    <td className="p-3">10%</td>
                    <td className="p-3 font-bold text-gray-600">3.0 / 5</td>
                    <td className="p-3 font-mono">6.0%</td>
                    <td className="p-3 text-gray-600">Need stronger customer-first transparency culture internally.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-gray-900">4. Customer Experience (CX)</td>
                    <td className="p-3">20%</td>
                    <td className="p-3 font-bold text-red-600">1.5 / 5</td>
                    <td className="p-3 font-mono">6.0%</td>
                    <td className="p-3 text-gray-600">Severe checkout friction due to unexpected seat add-on jumps.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-gray-900">5. Communication & Marketing</td>
                    <td className="p-3">15%</td>
                    <td className="p-3 font-bold text-red-600">1.5 / 5</td>
                    <td className="p-3 font-mono">4.5%</td>
                    <td className="p-3 text-gray-600">Lack of aggressive reward/cashback acquisition positioning.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-gray-900">6. Market Perception</td>
                    <td className="p-3">15%</td>
                    <td className="p-3 font-bold text-amber-600">2.0 / 5</td>
                    <td className="p-3 font-mono">6.0%</td>
                    <td className="p-3 text-gray-600">Perceived as expensive and less transparent than incumbents.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-gray-900">7. Brand Governance</td>
                    <td className="p-3">10%</td>
                    <td className="p-3 font-bold text-gray-600">2.5 / 5</td>
                    <td className="p-3 font-mono">5.0%</td>
                    <td className="p-3 text-gray-600">Pricing algorithms operate without brand positioning guardrails.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* TAB 7: ABOUT MAGSMEN                       */}
        {/* ========================================== */}
        <section id="about-magsmen" className={`tab-content space-y-8 ${activeTab === "about-magsmen" ? "" : "hidden"}`}>
          <div
            className="text-white p-8 md:p-12 rounded-2xl shadow-2xl relative overflow-hidden"
            style={{ background: "var(--mg-gradient-hero)" }}
          >
            <div className="max-w-3xl">
              <span className="text-xs font-mono text-purple-300 uppercase tracking-widest block mb-2">ABOUT MAGSMEN BRAND CONSULTANTS</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight text-white mb-4">
                "We don't just build brands.
                <br />
                <span className="text-purple-300">We build brands that perform."</span>
              </h2>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                Magsmen is a strategic brand consulting firm that helps organizations strengthen how they are perceived, chosen, and
                valued in the market. We identify the real issues limiting brand performance, clarify the position a business can own,
                and design the strategic frameworks that unlock measurable growth.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold font-display text-gray-900 mb-4">The Magsmen Methodology</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="mg-card p-5 border-t-4 border-purple-700">
                <span className="text-xs font-mono text-purple-800 font-bold">STAGE 01</span>
                <h4 className="font-bold text-sm text-gray-900 mt-1">Understand the Problem</h4>
                <p className="text-xs text-gray-600 mt-2">
                  Deep research diagnostics to isolate root causes limiting performance, not just surface symptoms.
                </p>
              </div>

              <div className="mg-card p-5 border-t-4 border-purple-600">
                <span className="text-xs font-mono text-purple-800 font-bold">STAGE 02</span>
                <h4 className="font-bold text-sm text-gray-900 mt-1">Define Direction</h4>
                <p className="text-xs text-gray-600 mt-2">
                  Clarify an ownable market position and core strategic thesis that sets the brand apart.
                </p>
              </div>

              <div className="mg-card p-5 border-t-4 border-purple-500">
                <span className="text-xs font-mono text-purple-800 font-bold">STAGE 03</span>
                <h4 className="font-bold text-sm text-gray-900 mt-1">Build Brand System</h4>
                <p className="text-xs text-gray-600 mt-2">
                  Craft comprehensive identity, pricing architecture, and communication guidelines.
                </p>
              </div>

              <div className="mg-card p-5 border-t-4 border-purple-400">
                <span className="text-xs font-mono text-purple-800 font-bold">STAGE 04</span>
                <h4 className="font-bold text-sm text-gray-900 mt-1">Enable Implementation</h4>
                <p className="text-xs text-gray-600 mt-2">Orchestrate execution partners and maintain long-term strategic consistency.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mg-card p-6">
              <h3 className="text-lg font-bold font-display text-gray-900 mb-2">Where Magsmen Sits: The Strategy Layer</h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                Magsmen sits directly between leadership teams and execution partners, orchestrating specialized agencies across
                advertising, PR, technology, social media, and offline media.
              </p>
              <div className="p-4 bg-purple-50 rounded-lg text-xs space-y-2 text-purple-950 font-medium">
                <div className="flex items-center gap-2">
                  <span>•</span> <strong>Advertising (A) & PR (B) Alignment</strong>
                </div>
                <div className="flex items-center gap-2">
                  <span>•</span> <strong>Software & IT (C) Integration</strong>
                </div>
                <div className="flex items-center gap-2">
                  <span>•</span> <strong>Digital Marketing (D) & Legal (E)</strong>
                </div>
                <div className="flex items-center gap-2">
                  <span>•</span> <strong>Offline Media Buying (F) Direction</strong>
                </div>
              </div>
            </div>

            <div className="mg-card p-6 bg-gradient-to-br from-gray-900 to-purple-950 text-white">
              <h3 className="text-lg font-bold font-display text-white mb-2">The Magsmen Ecosystem</h3>
              <div className="space-y-3 text-xs mt-4">
                <div className="p-3 bg-purple-900/50 rounded border border-purple-700">
                  <strong className="text-purple-300 block">Magsmen Brand Consultants</strong>
                  <span>Core brand strategy, positioning, differentiation, and competitive advisory.</span>
                </div>
                <div className="p-3 bg-purple-900/50 rounded border border-purple-700">
                  <strong className="text-purple-300 block">MIBBS (mibbs.ai)</strong>
                  <span>"Budget Smarter, Grow Faster" — AI-powered brand budget allocation tool.</span>
                </div>
                <div className="p-3 bg-purple-900/50 rounded border border-purple-700">
                  <strong className="text-purple-300 block">InTalks Podcast</strong>
                  <span>"Leaders, Legends & Lessons" — 90M+ viewership, 30+ episodes, 100K+ community.</span>
                </div>
                <div className="p-3 bg-purple-900/50 rounded border border-purple-700">
                  <strong className="text-purple-300 block">SanStrategies</strong>
                  <span>Brand Strategy, Business Intelligence, Legal & Compliance thought leadership.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="mg-card p-4">
              <div className="text-2xl font-black font-display text-purple-900">30+</div>
              <div className="text-xs text-gray-500 mt-1">Brands Transformed</div>
            </div>
            <div className="mg-card p-4">
              <div className="text-2xl font-black font-display text-purple-900">16+</div>
              <div className="text-xs text-gray-500 mt-1">Industries Covered</div>
            </div>
            <div className="mg-card p-4">
              <div className="text-2xl font-black font-display text-purple-900">4.9 ★</div>
              <div className="text-xs text-gray-500 mt-1">Google (133 Reviews) & Clutch</div>
            </div>
            <div className="mg-card p-4">
              <div className="text-2xl font-black font-display text-purple-900">3 Out of 4</div>
              <div className="text-xs text-gray-500 mt-1">Clients 100% Referral Willing</div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold font-display text-gray-900 mb-3">Proven Transformation Case Studies</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="mg-card p-4">
                <strong className="text-purple-900 block font-bold">Tenali Double Horse</strong>
                <p className="text-gray-600 mt-1">
                  Repositioned regional FMCG leader for pan-India expansion and US market entry with corporate architecture.
                </p>
              </div>
              <div className="mg-card p-4">
                <strong className="text-purple-900 block font-bold">Chakrasiddh</strong>
                <p className="text-gray-600 mt-1">
                  Shifted brand positioning from elite-only clinic to trusted holistic healing center of national prominence.
                </p>
              </div>
              <div className="mg-card p-4">
                <strong className="text-purple-900 block font-bold">MR Constructions</strong>
                <p className="text-gray-600 mt-1">
                  Created market-leading real estate brand presence via experience redesign in Tier-3 markets.
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl text-white text-center space-y-6" style={{ background: "var(--mg-gradient-hero)" }}>
            <div className="text-2xl md:text-3xl font-display font-bold">"When clarity leads, brands win."</div>
            <div className="text-xs text-purple-300 tracking-wider font-mono">CLEAR VISION. CALM APPROACH. BOLD MOVES.</div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
              <a
                href="https://www.magsmen.com"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 bg-[var(--mg-purple)] hover:bg-purple-600 text-white font-bold rounded-lg text-xs transition shadow-lg w-full sm:w-auto"
              >
                Schedule a Strategic Call
              </a>
              <a
                href="https://www.magsmen.com"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 border border-white hover:bg-white/10 text-white font-bold rounded-lg text-xs transition w-full sm:w-auto"
              >
                Take the Brand Audit
              </a>
              <a
                href="https://www.magsmen.com"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 border border-purple-400 hover:bg-purple-900/50 text-purple-200 font-bold rounded-lg text-xs transition w-full sm:w-auto"
              >
                Assess My Brand Now
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer
        className="text-gray-400 text-xs py-10 px-4 md:px-12 border-t border-purple-900/50 mt-12"
        style={{ background: "var(--mg-gradient-dark)" }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-white font-black tracking-widest text-sm mb-1">
                <img src={magsmennewlogowhitelandscape} alt="magsmen white logo" className="w-[300px]" />
            </div>
            <p className="text-[11px] text-gray-400 leading-relaxed">
              A strategic brand consulting firm helping business leaders define, build, and scale performant brands across AP,
              Telangana, and Pan-India.
            </p>
            <div className="mt-3 text-[10px] text-purple-400">Parent Company: Grofessors Innovations Pvt Ltd</div>
          </div>

          <div className="space-y-1 text-[11px]">
            <div className="font-bold text-white uppercase tracking-wider text-[10px] mb-2">Office Locations</div>
            <p>
              <strong>Corporate Office:</strong> Madhapur, Hyderabad, Telangana 500081
            </p>
            <p>
              <strong>Head Office:</strong> Brodipet, Guntur, Andhra Pradesh 522002
            </p>
            <p>
              <strong>International:</strong> Rowville, VIC 3178, Australia
            </p>
          </div>

          <div className="space-y-1 text-[11px] md:text-right">
            <div className="font-bold text-white uppercase tracking-wider text-[10px] mb-2">Direct Contact</div>
            <p>Phone: +91 90449 10449</p>
            <p>Email: connect@magsmen.com</p>
            <p>Web: www.magsmen.com | @magsmenindia</p>
            <div className="mt-4 text-[10px] text-gray-500 uppercase tracking-widest">
              CONFIDENTIAL — PREPARED FOR FARE EAGLE — JULY 2026
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-6 mt-6 border-t border-gray-900 text-[10px] text-center text-gray-600">
          Magsmen® is a registered trademark. A division of Grofessors Innovations Pvt Ltd. All rights reserved.
        </div>
      </footer>
    </div>
  );
}