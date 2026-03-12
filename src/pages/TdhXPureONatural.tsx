import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

// --- Styles (Injecting EXACT CSS from HTML) ---
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

    :root {
      --tdh-primary: #FF5722; /* Deep Orange/Earthy Tone */
      --pon-secondary: #4CAF50; /* Green/Natural Tone */
    }

    body { font-family: 'Inter', sans-serif; background-color: #f8f8f8; color: #1f2937; }

    /* General Card Styling */
    .consultant-card {
      background-color: #ffffff;
      border-radius: 12px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.06);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .consultant-card:hover {
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
    }

    /* D3/SVG Styles */
    .bar { fill: var(--tdh-primary); opacity: 0.8; }
    .bar:hover { opacity: 1; }
    
    .flow-node {
      fill: #fff;
      stroke: #374151;
      stroke-width: 2px;
      rx: 6;
      ry: 6;
      transition: fill 0.3s ease;
    }
    .flow-text { font-size: 7px; font-weight: 500; fill: #1f2937; pointer-events: none; }
    .flow-link { stroke: #d1d5db; stroke-width: 2px; fill: none; marker-end: url(#arrowhead); }

    /* Table Styling */
    .sku-table th { background-color: #FF5722; color: white; }
  `}</style>
);

export default function TdhXPureONatural() {
  const barChartRef = useRef<SVGSVGElement>(null);
  const flowChartRef = useRef<SVGSVGElement>(null);

  // --- Data ---
  const planData = [
    { phase: "PRE-LAUNCH", week: "Week 0-1", activities: [
        { task: "Rack Branding Preparation", plan: "20 TDH-branded racks prepared...", objective: "Visibility foundation" },
        { task: "Product Hierarchy Setup", plan: "Slab 1 Sunnundalu; Slabs for Millets/Savoury.", objective: "Proper categorisation + flagship highlight" },
        { task: "Teaser POS Materials", plan: "Teaser 'Tradition arriving soon' posters in 10 stores", objective: "Curiosity before launch" },
        { task: "Shelf Placeholders", plan: "Block space with mock placeholders & 'Coming Soon: TDH Sunnundalu'", objective: "Anticipation + brand spotlight" },
        { task: "Store Staff Training", plan: "10-store staff trained on TDH story, how to push Sunnundalu, upsell packs", objective: "Internal advocacy boosts conversions" },
        { task: "Pre-Launch Social Media", plan: "5 Co-branded posts: Countdown, Sunnundalu heritage story.", objective: "Digital expectation" },
    ]},
    { phase: "LAUNCH", week: "Week 1-2", activities: [
        { task: "Full Rack Installation", plan: "All 20 racks installed Slab 1 fully stacked with Sunnundalu; Snacks near checkout", objective: "Premium presence" },
        { task: "Impulse Checkout Setup", plan: "Mini-packs (₹20-₹40) near checkout.", objective: "High-frequency impulse triggers and sample distribution" },
        { task: "Launch Offer (14 Days)", plan: "Small discounts (10%, 20%) on products purchased", objective: "Pushes cross-category movement" },
        { task: "Launch Social Media", plan: "Mega reel (PON + TDH); 'Now Available Across 10 Stores' static, In-store video of sampling.", objective: "Drive awareness & store visits" },
        { task: "Store front Pop-Ups", plan: "Micro pop-up near each store (Total: 10 pop-ups)", objective: "Converts walk-ins and Awareness of product availability" },
    ]},
    { phase: "POST-LAUNCH", week: "Week 2-4", activities: [
        { task: "Repeat Purchase Drivers", plan: "'Sunnundalu of the Week' branding at shelves; Millet offers for weekends", objective: "Sustained momentum" },
        { task: "In-Store A5 Tent Cards", plan: "Placed near vegetables 'Complete Your Healthy Basket with TDH Millets'", objective: "Behavioural nudge at key zones" },
        { task: "Influencer Visits (Micro Local)", plan: "1-2 local mom/health influencers do store walk-throughs", objective: "High trust-building" },
        { task: "Post Launch Social Media", plan: "Store photos, customer reviews, 'Why Sunnundalu is our flagship' carousel, walk-in reminder posts", objective: "Extend visibility" },
        { task: "Google Maps + Discovery", plan: "Tag all 10 stores with: 'Now selling TDH Traditional Foods'", objective: "Digital discovery" },
    ]},
  ];

  const skuData = [
    { position: "Slab 1 (Eye-Level)", category: "Flagship Sunnundalu", reason: "Most emotional + trial product must be first visible" },
    { position: "Slab 2", category: "Daily Staples (Atta, Sattu, Podis)", reason: "High frequency repeat to grows basket value" },
    { position: "Slab 3", category: "Millets (Raw + Instant)", reason: "PON's core consumer aligns perfectly" },
    { position: "Slab 4 (Bottom)", category: "Snacks & Savouries", reason: "Easy pickup + high impulse" },
  ];

  // --- D3 Logic for Bar Chart ---
  useEffect(() => {
    if (!barChartRef.current) return;

    const data = [
        { category: "PRE-LAUNCH", start: 0, end: 1, color: "#FF5722", label: "Week 0-1" },
        { category: "LAUNCH", start: 1, end: 2, color: "#4CAF50", label: "Week 1-2" },
        { category: "POST-LAUNCH", start: 2, end: 4, color: "#2196F3", label: "Week 2-4" }
    ];

    const svg = d3.select(barChartRef.current);
    svg.selectAll("*").remove(); // Clear previous renders

    const width = 700;
    const height = 300;
    const margin = { top: 20, right: 30, bottom: 50, left: 120 };
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

    const g = svg.append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

    const x = d3.scaleLinear()
        .domain([0, 4])
        .range([0, chartWidth]);

    const y = d3.scaleBand()
        .domain(data.map(d => d.category))
        .range([0, chartHeight])
        .paddingInner(0.4);

    // X Axis
    g.append("g")
        .attr("transform", `translate(0, ${chartHeight})`)
        .call(d3.axisBottom(x).ticks(4).tickFormat(d => `Week ${d}`))
        .selectAll("text")
        .attr("font-size", "12px");

    // Y Axis
    g.append("g")
        .call(d3.axisLeft(y).tickSize(0).tickPadding(10))
        .selectAll("text")
        .attr("font-size", "14px")
        .attr("font-weight", "bold");

    // Bars
    g.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", (d: { start: any; }) => x(d.start))
        .attr("y", d => y(d.category) || 0)
        .attr("height", y.bandwidth())
        .attr("width", (d: { start: number; end: number }) => x(d.end) - x(d.start))
        .attr("fill", d => d.color);

    // Labels
    g.selectAll(".bar-label")
        .data(data)
        .enter().append("text")
        .attr("x", d => x((d.start + d.end) / 2))
        .attr("y", d => (y(d.category) || 0) + y.bandwidth() / 2 + 4)
        .attr("text-anchor", "middle")
        .attr("fill", "white")
        .attr("font-size", "12px")
        .attr("font-weight", "bold")
        .text(d => d.label);

    // Axis Title
    svg.append("text")
        .attr("transform", `translate(${width/2}, ${height - 5})`)
        .style("text-anchor", "middle")
        .style("font-size", "12px")
        .style("fill", "#6b7280")
        .text("Project Duration (Weeks)");

  }, []);

  // --- D3 Logic for Flow Chart ---
  useEffect(() => {
    if (!flowChartRef.current) return;

    const walkinFlowData = [
        { id: 1, name: "Hyperlocal Digital Ads (2-3km)", x: 50, y: 50, trigger: "Digital Expectation" },
        { id: 2, name: "Teaser/Launch Social Media", x: 250, y: 50, trigger: "Digital Expectation" },
        { id: 3, name: "Coupon Distribution (Sampling)", x: 450, y: 50, trigger: "Offline Push" },
        { id: 4, name: "Store Front Pop-Ups (Walk-in Conv.)", x: 50, y: 150, trigger: "In-Street Presence" },
        { id: 5, name: "Google Maps Tagging + Seasonal Call-Outs", x: 450, y: 150, trigger: "Digital Discovery" },
        { id: 6, name: "Customer Enters Pure O Natural Store", x: 250, y: 250, trigger: "Walk-in Success" },
        { id: 7, name: "Flagship Slab Magnet (Sunnundalu)", x: 150, y: 350, trigger: "In-Store Attraction (Slab 1)" },
        { id: 8, name: "Staff Upsell + Tent Cards Nudge", x: 350, y: 350, trigger: "Conversion Trigger" },
        { id: 9, name: "Impulse Checkout Mini-Packs", x: 250, y: 410, trigger: "Final Purchase" },
    ];

    const walkinFlowLinks = [
        { source: 1, target: 6 }, { source: 2, target: 6 }, { source: 3, target: 6 },
        { source: 4, target: 6 }, { source: 5, target: 6 },
        { source: 6, target: 7 }, { source: 6, target: 8 },
        { source: 7, target: 9 }, { source: 8, target: 9 },
    ];

    const svg = d3.select(flowChartRef.current);
    svg.selectAll("*").remove();

    // Arrowhead Marker
    svg.append("defs").append("marker")
        .attr("id", "arrowhead")
        .attr("viewBox", "0 -5 10 10")
        .attr("refX", 5)
        .attr("refY", 0)
        .attr("markerWidth", 6)
        .attr("markerHeight", 6)
        .attr("orient", "auto")
        .append("path")
        .attr("d", "M0,-5L10,0L0,5")
        .attr("fill", "#d1d5db");

    // Links
    svg.selectAll(".flow-link")
        .data(walkinFlowLinks)
        .enter().append("line")
        .attr("class", "flow-link")
        .attr("x1", (d: { source: number; }) => (walkinFlowData.find(n => n.id === d.source)?.x || 0) + 75)
        .attr("y1", d => (walkinFlowData.find(n => n.id === d.source)?.y || 0) + 20)
        .attr("x2", d => (walkinFlowData.find(n => n.id === d.target)?.x || 0) + 75)
        .attr("y2", d => (walkinFlowData.find(n => n.id === d.target)?.y || 0) - 20);

    // Node Groups
    const nodes = svg.selectAll(".flow-node-group")
        .data(walkinFlowData)
        .enter().append("g")
        .attr("class", "flow-node-group")
        .attr("transform", d => `translate(${d.x}, ${d.y})`);

    // Rectangles
    nodes.append("rect")
        .attr("class", "flow-node")
        .attr("width", 150)
        .attr("height", 40)
        .attr("fill", d => d.id === 6 ? '#FEF3C7' : d.id === 9 ? '#D1FAE5' : '#E5E7EB');

    // Text Labels
    nodes.append("text")
        .attr("class", "flow-text")
        .attr("x", 75)
        .attr("y", 25)
        .attr("text-anchor", "middle")
        .text(d => d.name);

    // Trigger Text
    nodes.append("text")
        .attr("x", 75)
        .attr("y", -5)
        .attr("text-anchor", "middle")
        .attr("font-size", "9px")
        .attr("font-style", "italic")
        .attr("fill", "#6B7280")
        .text(d => d.trigger);

  }, []);

  return (
    <>
      <GlobalStyles />
      <div className="p-4 md:p-8">
        
        {/* Header */}
        <header className="mb-8 p-6 consultant-card bg-white border-t-4 border-orange-500">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 flex items-center">
            TDH x Pure O Natural: Phase 1 Consultant Report
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Structured Execution Plan for 10-Store Launch (4-Week Cycle)
          </p>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Timeline */}
            <section className="consultant-card p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4 border-b-2 pb-2">1. DESIGN: Execution Timeline (Gantt Chart Simulation) 

[Image of Gantt Chart]
</h2>
              <div className="w-full h-auto overflow-x-auto">
                <p className="text-sm text-gray-500 mb-2">Visual mapping of the 4-week execution flow.</p>
                <svg ref={barChartRef} className="w-full" viewBox="0 0 700 300" preserveAspectRatio="xMidYMid meet"></svg>
              </div>
            </section>

            {/* Flowchart */}
            <section className="consultant-card p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4 border-b-2 pb-2">2. DELIVERY: Walk-in & Conversion Flowchart 

[Image of Customer Journey Map]
</h2>
              <div className="w-full h-auto overflow-x-auto">
                <p className="text-sm text-gray-500 mb-4">The path from initial awareness to in-store purchase conversion.</p>
                <svg ref={flowChartRef} className="w-full" viewBox="0 0 600 450" preserveAspectRatio="xMidYMid meet"></svg>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* SKU Table */}
            <section className="consultant-card p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4 border-b-2 pb-2">3. DIAGNOSIS: SKU Hierarchy & Placement</h2>
              <p className="text-sm text-gray-500 mb-4">Strategic product placement for optimized visibility and basket value.</p>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 sku-table text-sm rounded-lg overflow-hidden">
                  <thead>
                    <tr>
                      <th className="px-3 py-2 text-left tracking-wider">Slab Position</th>
                      <th className="px-3 py-2 text-left tracking-wider">SKU Category</th>
                      <th className="px-3 py-2 text-left tracking-wider">Reasoning</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 text-gray-700">
                    {skuData.map((item, idx) => (
                      <tr key={idx} className="hover:bg-gray-50">
                        <td className="px-3 py-2">{item.position}</td>
                        <td className="px-3 py-2">{item.category}</td>
                        <td className="px-3 py-2">{item.reason}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Key Insights */}
            <section className="consultant-card p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4 border-b-2 pb-2">4. DISCOVERY: Key Objectives & Metrics</h2>
              <ul className="space-y-3 text-gray-700 list-disc ml-5">
                <li>Primary Goal: Establish TDH Sunnundalu as the flagship 'Walk-in Magnet'.</li>
                <li>Conversion Metric: Internal Advocacy (Staff Training) to boost cross-category movement.</li>
                <li>Digital Strategy: Hyperlocal Ads & Google Maps tagging for Digital Discovery.</li>
                <li>Tactical Focus: Impulse Mini-Packs at Checkout for high-frequency triggers.</li>
                <li>Sustained Momentum: Utilizing 'Sunnundalu of the Week' and seasonal call-outs for Repeat Purchase Drivers.</li>
              </ul>
            </section>
          </div>

          {/* Detailed Plan Mapping */}
          <div className="lg:col-span-3">
            <section className="consultant-card p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4 border-b-2 pb-2">5. PLAN MAPPING: Detailed Execution Breakdown</h2>
              <div className="space-y-6">
                {planData.map((phaseItem, idx) => (
                  <div key={idx} className={`consultant-card p-4 border-l-4 shadow-md ${phaseItem.phase === 'PRE-LAUNCH' ? 'border-orange-500 bg-orange-50' : phaseItem.phase === 'LAUNCH' ? 'border-green-500 bg-green-50' : 'border-blue-500 bg-blue-50'}`}>
                    <h3 className="text-lg font-extrabold text-gray-900">{phaseItem.phase} <span className="text-base font-normal text-gray-500">({phaseItem.week})</span></h3>
                    <ul className="mt-3 space-y-3">
                      {phaseItem.activities.map((act, i) => (
                        <li key={i} className="p-3 bg-white rounded-lg border border-gray-100 shadow-sm">
                          <p className="font-semibold text-sm text-gray-800">{act.task}</p>
                          <p className="text-xs text-gray-600 mt-1"><span className="font-medium text-orange-600">Plan:</span> {act.plan}</p>
                          <p className="text-xs text-gray-500 mt-1"><span className="font-medium text-green-600">Objective:</span> {act.objective}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>

        </main>

        <footer className="mt-8 p-4 text-center text-sm text-gray-500">
          TDH x Pure O Natural Phase 1 | Structured Report Generated by Magsmen Consultant (Prototype)
        </footer>
      </div>
    </>
  );
}