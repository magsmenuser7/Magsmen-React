
import React from 'react';
import magsmenlogo from '/assets/magsmen-new-logo-black-horizontal-landscape.png';



export default function SakethGroupArchitecture() {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#222] font-sans text-xs antialiased p-4 md:p-8 select-none">
      <div className="max-w-[1600px] mx-auto space-y-6">
        
        {/* TOP HEADER */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-gray-200 pb-3">
          <div className="flex items-center gap-1.5 font-bold tracking-wider text-[11px] text-[#111]">
            <span className="text-[13px] font-black tracking-tighter"></span> 
            <img src={magsmenlogo} alt="Magsmen Logo" className="h-5 w-auto" />
          </div>
          <div className="text-[10px] tracking-widest text-gray-500 uppercase font-semibold">
            ECOSYSTEM MAPPING OF ENTIRE GROUP AND ENTITIES
          </div>
        </header>

        {/* MAIN DOCUMENT TITLE */}
        <div className="text-[10px] font-bold tracking-widest text-gray-700 uppercase">
          SAKETH GROUP — COMPLETE BRAND, LEGAL AND ENGAGEMENT ARCHITECTURE
        </div>

        {/* ========================================================================= */}
        {/* BAND 1 — THE PERSON */}
        {/* ========================================================================= */}
        <section className="space-y-3">
          <div className="text-[10px] font-bold tracking-wider text-gray-500 uppercase">
            BAND 1 — THE PERSON
          </div>

          <div className="flex flex-col items-center justify-center space-y-4 pt-1 pb-3">
            {/* Person Card */}
            <div className="w-full max-w-sm bg-[#321c4d] text-white text-center rounded-md py-3 px-6 shadow-md border border-[#231238]">
              <div className="text-base font-extrabold tracking-widest uppercase">
                MR. B. SAKETH
              </div>
              <div className="text-[11px] text-gray-200 font-medium mt-0.5">
                Chairman — Saketh Group
              </div>
              <div className="text-[9px] text-gray-400 mt-1">
                Personal brand architect — Stature engagement
              </div>
            </div>

            {/* Sub-Pills / Horizontal Tags */}
            <div className="flex flex-wrap justify-center gap-2 w-full max-w-6xl">
              {[
                "LinkedIn strategy and management — 12 months full year",
                "Positioning and authority architecture",
                "Speaking and media presence roadmap",
                "Content calendar and thought leadership",
                "Network and ecosystem positioning",
                "Visual identity and personal brand guidelines"
              ].map((pill, idx) => (
                <div
                  key={idx}
                  className="bg-[#f0e8f8] text-[#49226d] border border-[#d9c7ed] text-[10px] font-semibold px-3 py-1.5 rounded-full shadow-sm"
                >
                  {pill}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* BAND 2 — THE HOLDING STRUCTURE */}
        {/* ========================================================================= */}
        <section className="space-y-3">
          <div className="text-[10px] font-bold tracking-wider text-gray-500 uppercase">
            BAND 2 — THE HOLDING STRUCTURE
          </div>

          {/* Group Main Container */}
          <div className="border border-gray-300 bg-white rounded-lg p-5 shadow-sm space-y-5">
            <div>
              <div className="text-sm font-extrabold text-black uppercase tracking-wide">
                SAKETH GROUP
              </div>
              <div className="text-[10.5px] text-gray-600 font-normal mt-0.5">
                Master holding structure — brand architecture governs all entities below
              </div>
              <div className="text-[9.5px] text-gray-500 italic mt-0.5">
                ↑ Governed by Saketh personal brand (Band 1)
              </div>
            </div>

            {/* 5 Vertical Pillar Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3.5 items-stretch">
              
              {/* Pillar 1: IARE */}
              <div className="border-2 border-[#16917b] bg-[#f7fcfb] rounded-md p-3.5 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div>
                    <div className="font-bold text-[11px] text-[#0f6858]">IARE</div>
                    <div className="text-[9.5px] text-gray-600 leading-tight">Institute of Aeronautical Engineering</div>
                  </div>
                  <span className="inline-block bg-[#e5f6f3] text-[#0f6858] border border-[#a1ded2] text-[8.5px] font-semibold px-2 py-0.5 rounded">
                    Education institution
                  </span>
                  <ul className="text-[9.5px] text-gray-700 space-y-1.5 pt-1">
                    <li className="flex items-start gap-1"><span>–</span><span>Established institution — strong regional presence</span></li>
                    <li className="flex items-start gap-1"><span>–</span><span>Current: NPS program, IP strengthening, EIR design</span></li>
                    <li className="flex items-start gap-1"><span>–</span><span>Phase 2 advisory: entrepreneurship division</span></li>
                    <li className="flex items-start gap-1"><span>–</span><span>Business school vision — 3 year plan</span></li>
                    <li className="flex items-start gap-1"><span>–</span><span>Content strategy overhaul</span></li>
                  </ul>
                </div>
              </div>

              {/* Pillar 2: Saketh Family Office */}
              <div className="border-2 border-[#1959a8] bg-[#f6f9fc] rounded-md p-3.5 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div>
                    <div className="font-bold text-[11px] text-[#123e75]">Saketh Family Office</div>
                    <div className="text-[9.5px] text-gray-600 leading-tight">Investment and capital arm</div>
                  </div>
                  <span className="inline-block bg-[#e8f1fb] text-[#123e75] border border-[#b2d2f7] text-[8.5px] font-semibold px-2 py-0.5 rounded">
                    Private family office
                  </span>
                  <ul className="text-[9.5px] text-gray-700 space-y-1.5 pt-1">
                    <li className="flex items-start gap-1"><span>–</span><span>Structured as private trust or AIF</span></li>
                    <li className="flex items-start gap-1"><span>–</span><span>SEBI-compliant framework</span></li>
                    <li className="flex items-start gap-1"><span>–</span><span>Focuses on startup ecosystem investment</span></li>
                    <li className="flex items-start gap-1"><span>–</span><span>University and incubation centre partnerships</span></li>
                    <li className="flex items-start gap-1"><span>–</span><span>Due diligence per startup: Rs 75K to 1.5L per evaluation</span></li>
                  </ul>
                </div>
              </div>

              {/* Pillar 3: Saketh Trust */}
              <div className="border-2 border-[#6d2ab8] bg-[#faf6fc] rounded-md p-3.5 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div>
                    <div className="font-bold text-[11px] text-[#4d1a85]">Saketh Trust</div>
                    <div className="text-[9.5px] text-gray-600 leading-tight">Philanthropic arm</div>
                  </div>
                  <span className="inline-block bg-[#f1e6fc] text-[#4d1a85] border border-[#d6b7f7] text-[8.5px] font-semibold px-2 py-0.5 rounded">
                    Education and CSR
                  </span>
                  <ul className="text-[9.5px] text-gray-700 space-y-1.5 pt-1">
                    <li className="flex items-start gap-1"><span>–</span><span>Registered charitable trust</span></li>
                    <li className="flex items-start gap-1"><span>–</span><span>Focus: education and skill development</span></li>
                    <li className="flex items-start gap-1"><span>–</span><span>Connected to IARE institutional mission</span></li>
                    <li className="flex items-start gap-1"><span>–</span><span>Class 41 trademark protection</span></li>
                    <li className="flex items-start gap-1"><span>–</span><span>Separate brand identity from commercial entities</span></li>
                  </ul>
                </div>
              </div>

              {/* Pillar 4: Real Estate Firm 1 */}
              <div className="border-2 border-[#b57317] bg-[#fdfaf5] rounded-md p-3.5 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div>
                    <div className="font-bold text-[11px] text-[#7d4d09]">Real Estate Firm 1</div>
                    <div className="text-[9.5px] text-gray-600 leading-tight">Construction and development</div>
                  </div>
                  <span className="inline-block bg-[#faefdf] text-[#7d4d09] border border-[#f2d09b] text-[8.5px] font-semibold px-2 py-0.5 rounded">
                    Commercial entity
                  </span>
                  <ul className="text-[9.5px] text-gray-700 space-y-1.5 pt-1">
                    <li className="flex items-start gap-1"><span>–</span><span>Complete rebranding — Year 1</span></li>
                    <li className="flex items-start gap-1"><span>–</span><span>Parent brand identity and project level branding</span></li>
                    <li className="flex items-start gap-1"><span>–</span><span>Annual marketing budget: Rs 12,00,000</span></li>
                    <li className="flex items-start gap-1"><span>–</span><span>Agency assigned and governed by Magsmen</span></li>
                    <li className="flex items-start gap-1"><span>–</span><span>Website and digital presence — new</span></li>
                  </ul>
                </div>
              </div>

              {/* Pillar 5: Real Estate Firm 2 */}
              <div className="border-2 border-[#80501b] bg-[#faf7f2] rounded-md p-3.5 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div>
                    <div className="font-bold text-[11px] text-[#59350d]">Real Estate Firm 2</div>
                    <div className="text-[9.5px] text-gray-600 leading-tight">Construction and development</div>
                  </div>
                  <span className="inline-block bg-[#f5ecdf] text-[#59350d] border border-[#e8cead] text-[8.5px] font-semibold px-2 py-0.5 rounded">
                    Commercial entity
                  </span>
                  <ul className="text-[9.5px] text-gray-700 space-y-1.5 pt-1">
                    <li className="flex items-start gap-1"><span>–</span><span>Complete rebranding — Year 1</span></li>
                    <li className="flex items-start gap-1"><span>–</span><span>Parent brand identity and project level branding</span></li>
                    <li className="flex items-start gap-1"><span>–</span><span>Annual marketing budget: Rs 12,00,000</span></li>
                    <li className="flex items-start gap-1"><span>–</span><span>Agency assigned and governed by Magsmen</span></li>
                    <li className="flex items-start gap-1"><span>–</span><span>Website and digital presence — new</span></li>
                  </ul>
                </div>
              </div>

            </div>

            {/* ENGAGEMENT PHASES */}
            <div className="pt-2 border-t border-gray-200">
              <div className="text-[10px] font-bold text-gray-600 uppercase tracking-wider mb-2.5">
                ENGAGEMENT PHASES
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {/* Phase 1 */}
                <div className="border border-gray-200 bg-gray-50/70 rounded p-3 space-y-2">
                  <div className="font-bold text-[10.5px] text-gray-800">
                    Phase 1 — Month 1 to 3
                  </div>
                  <ul className="text-[9.5px] text-gray-600 space-y-1">
                    <li>– Holding structure advisory</li>
                    <li>– Group brand architecture</li>
                    <li>– Entity naming confirmation</li>
                    <li>– Trademark filing initiated</li>
                    <li>– Saketh personal brand strategy</li>
                    <li>– IP documentation begins</li>
                  </ul>
                </div>

                {/* Phase 2 */}
                <div className="border border-gray-200 bg-gray-50/70 rounded p-3 space-y-2">
                  <div className="font-bold text-[10.5px] text-gray-800">
                    Phase 2 — Month 4 to 9
                  </div>
                  <ul className="text-[9.5px] text-gray-600 space-y-1">
                    <li>– IARE institutional positioning</li>
                    <li>– Real estate firm 1 rebranding</li>
                    <li>– Real estate firm 2 rebranding</li>
                    <li>– Family office brand and communication</li>
                    <li>– Agency selection and briefing</li>
                    <li>– In-house team hired and onboarded</li>
                  </ul>
                </div>

                {/* Phase 3 */}
                <div className="border border-gray-200 bg-gray-50/70 rounded p-3 space-y-2">
                  <div className="font-bold text-[10.5px] text-gray-800">
                    Phase 3 — Month 10 to 18
                  </div>
                  <ul className="text-[9.5px] text-gray-600 space-y-1">
                    <li>– Full group brand governance</li>
                    <li>– Content audit across all entities</li>
                    <li>– IARE entrepreneurship division advisory</li>
                    <li>– Chairman personal brand active</li>
                    <li>– Year 2 scope planning — renewal discussion</li>
                    <li>– Month 11 final payment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* MAGSMEN STRATEGY CONSULTING SCOPE ROW */}
        {/* ========================================================================= */}
        <section className="space-y-2">
          <div className="flex flex-col sm:flex-row justify-between text-[10px] font-bold text-gray-700 uppercase tracking-wider">
            <span>MAGSMEN STRATEGY CONSULTING — RS 30,00,000 PLUS GST — ANNUAL</span>
          </div>
          <div className="text-[9px] text-gray-500 italic">
            ↑ Governs all five Band 2 entities: IARE, Family Office, Trust, Real Estate Firm 1, Real Estate Firm 2
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 pt-1 border-t border-gray-200">
            <div>
              <div className="font-bold text-[10px] text-black">Saketh Group</div>
              <div className="text-[8.5px] text-gray-500 mt-1">Brand architecture, entity hierarchy, group narrative, visual identity direction</div>
            </div>
            <div>
              <div className="font-bold text-[10px] text-black">Saketh Family Office</div>
              <div className="text-[8.5px] text-gray-500 mt-1">Brand identity, positioning, ecosystem partnership strategy, incubation outreach design</div>
            </div>
            <div>
              <div className="font-bold text-[10px] text-black">Saketh Trust</div>
              <div className="text-[8.5px] text-gray-500 mt-1">Brand identity, philanthropic positioning, aligned to group architecture</div>
            </div>
            <div>
              <div className="font-bold text-[10px] text-black">Real Estate Firm 1</div>
              <div className="text-[8.5px] text-gray-500 mt-1">Complete rebranding, market positioning, content direction, agency governance</div>
            </div>
            <div>
              <div className="font-bold text-[10px] text-black">Real Estate Firm 2</div>
              <div className="text-[8.5px] text-gray-500 mt-1">Complete rebranding, market positioning, content direction, agency governance</div>
            </div>
            <div>
              <div className="font-bold text-[10px] text-black">Saketh Personal Brand</div>
              <div className="text-[8.5px] text-gray-500 mt-1">Stature engagement, authority architecture, LinkedIn strategy, 12 month management</div>
            </div>
            <div>
              <div className="font-bold text-[10px] text-black">IARE Advisory</div>
              <div className="text-[8.5px] text-gray-500 mt-1">EIR program structure, IP strengthening framework, business school vision planning</div>
            </div>
            <div>
              <div className="font-bold text-[10px] text-black">Family Office Due Diligence</div>
              <div className="text-[8.5px] text-gray-500 mt-1">Brand, business structure, IP and market positioning per startup — billed separately at Rs 75K to 1.5L per startup</div>
              <div className="text-[8px] text-blue-700 font-medium mt-0.5">-- Linked to Saketh Family Office entity</div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-3 border-t border-gray-100">
            <div>
              <div className="font-bold text-[10px] text-black">Vendor and Agency Management</div>
              <div className="text-[8.5px] text-gray-500 mt-0.5">Selection, briefing, negotiation, monthly governance across all verticals</div>
            </div>
            <div>
              <div className="font-bold text-[10px] text-black">Brand Governance</div>
              <div className="text-[8.5px] text-gray-500 mt-0.5">Monthly review across all entities, consistency audit, course corrections, documentation</div>
            </div>
            <div>
              <div className="font-bold text-[10px] text-black">Single Point of Contact</div>
              <div className="text-[8.5px] text-gray-500 mt-0.5">Sandeep N as one point of accountability across every vertical, every decision, every vendor</div>
            </div>
          </div>
        </section>

        {/* NOTIFICATION BANNER */}
        <div className="bg-[#f7f2fb] text-[#4d1f7c] border border-[#e5d5f2] rounded text-center py-1.5 text-[10px] font-medium">
          Magsmen coordinates all layers. Saketh deals with no vendor or professional directly.
        </div>

        {/* ========================================================================= */}
        {/* IP STRATEGY, LEGAL STRUCTURING AND TRADEMARK PROTECTION */}
        {/* ========================================================================= */}
        <section className="space-y-2">
          <div className="text-[10px] font-bold text-gray-700 uppercase tracking-wider">
            IP STRATEGY, LEGAL STRUCTURING AND TRADEMARK PROTECTION — RS 10,00,000 TO RS 20,00,000
          </div>
          <div className="text-[9px] text-gray-500 italic">
            ↑ Governs the Saketh Group entity structure itself (Band 2)
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
            {/* Left 7 Cols: Entity Creation Boxes */}
            <div className="lg:col-span-7 space-y-2">
              <div className="text-[9.5px] font-bold text-gray-700 uppercase tracking-wider">
                ENTITY CREATION
              </div>
              
              <div className="border border-blue-900 bg-[#f8faff] rounded p-2.5">
                <div className="font-bold text-[10px] text-[#123e75]">Saketh Group Pvt Ltd</div>
                <div className="text-[9px] text-gray-600 mt-0.5">
                  – Incorporation, ROC filing, CA and CS fees, shareholder agreements, IP assignment clauses
                </div>
              </div>

              <div className="border border-blue-900 bg-[#f8faff] rounded p-2.5">
                <div className="font-bold text-[10px] text-[#123e75]">Saketh Family Office</div>
                <div className="text-[9px] text-gray-600 mt-0.5">
                  – Private trust deed or AIF structure, legal documentation, SEBI advisory coordination
                </div>
              </div>

              <div className="border border-blue-900 bg-[#f8faff] rounded p-2.5">
                <div className="font-bold text-[10px] text-[#123e75]">Saketh Trust</div>
                <div className="text-[9px] text-gray-600 mt-0.5">
                  – Trust deed drafting, registration with authority, Class 41 philanthropic trademark
                </div>
              </div>
            </div>

            {/* Right 5 Cols: Trademark Mapping */}
            <div className="lg:col-span-5 space-y-2">
              <div className="text-[9.5px] font-bold text-gray-700 uppercase tracking-wider">
                TRADEMARK CLASS MAPPING
              </div>
              <div className="text-[9.5px] text-gray-700 space-y-1.5 pt-1">
                <div><span className="font-bold">Saketh Group</span> — As advised by Aditya saha</div>
                <div><span className="font-bold">Family Office</span> — As advised by Aditya saha</div>
                <div><span className="font-bold">Trust</span> — As advised by Aditya saha</div>
                <div><span className="font-bold">Real Estate Firm 1</span> — As advised by Aditya saha</div>
                <div><span className="font-bold">Real Estate Firm 2</span> — As advised by Aditya saha</div>
              </div>
            </div>
          </div>

          {/* 4 Bottom Support Pillars */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
            <div className="border border-gray-200 bg-[#faf6f0] text-center py-2 px-1 rounded text-[9.5px] font-semibold text-gray-800">
              Shareholder agreements
            </div>
            <div className="border border-gray-200 bg-[#faf6f0] text-center py-2 px-1 rounded text-[9.5px] font-semibold text-gray-800">
              Investment framework and MOU templates
            </div>
            <div className="border border-gray-200 bg-[#faf6f0] text-center py-2 px-1 rounded text-[9.5px] font-semibold text-gray-800">
              Vendor and agency agreements
            </div>
            <div className="border border-gray-200 bg-[#faf6f0] text-center py-2 px-1 rounded text-[9.5px] font-semibold text-gray-800">
              IP audit and domain protection
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* AGENCY EXECUTION */}
        {/* ========================================================================= */}
        <section className="space-y-2">
          <div className="text-[10px] font-bold text-gray-700 uppercase tracking-wider">
            AGENCY EXECUTION — RS 30,00,000 TO RS 33,00,000 — PAID DIRECTLY TO AGENCY — GOVERNED BY MAGSMEN
          </div>
          <div className="text-[9px] text-gray-500 italic">
            ↑ Executes for Real Estate Firm 1 and Real Estate Firm 2 only — not IARE or the Trust
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
            {/* Box 1 */}
            <div className="border-2 border-[#b57317] bg-[#fdfaf5] rounded-md p-3 space-y-2">
              <div className="font-bold text-[10.5px] text-[#7d4d09]">Real Estate Firm 1 Agency Scope</div>
              <ul className="text-[9px] text-gray-700 space-y-1">
                <li>– Annual budget: Rs 12,00,000</li>
                <li>– Social media content production and management</li>
                <li>– Project level marketing materials</li>
                <li>– Digital advertising campaigns</li>
                <li>– Photography and videography for active projects</li>
                <li>– Website maintenance and updates</li>
              </ul>
            </div>

            {/* Box 2 */}
            <div className="border-2 border-[#b57317] bg-[#fdfaf5] rounded-md p-3 space-y-2">
              <div className="font-bold text-[10.5px] text-[#7d4d09]">Real Estate Firm 2 Agency Scope</div>
              <ul className="text-[9px] text-gray-700 space-y-1">
                <li>– Annual budget: Rs 12,00,000</li>
                <li>– Same scope as Firm 1 above</li>
                <li>– Separate agency brief and brand guidelines</li>
                <li>– Distinct visual identity from Firm 1</li>
              </ul>
            </div>

            {/* Box 3 */}
            <div className="border border-gray-300 bg-[#fdfaf5] rounded-md p-3 space-y-2">
              <div className="font-bold text-[10.5px] text-gray-800">Group and Personal Brand Content</div>
              <ul className="text-[9px] text-gray-700 space-y-1">
                <li>– Annual budget: Rs 3,00,000 to 4,00,000</li>
                <li>– Saketh Group content production</li>
                <li>– Personal brand content for LinkedIn</li>
                <li>– Graphic design for group communications</li>
                <li>– One time: Website development for all entities — Rs 3,00,000 to 5,00,000</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SAKETH IN-HOUSE TEAM */}
        {/* ========================================================================= */}
        <section className="space-y-2">
          <div className="text-[10px] font-bold text-gray-700 uppercase tracking-wider">
            SAKETH IN-HOUSE TEAM — RS 15,00,000 TO RS 20,00,000 — EMPLOYED DIRECTLY BY SAKETH GROUP
          </div>
          <div className="text-[9px] text-gray-500 italic">
            ↑ Supports IARE, Family Office, Real Estate Firm 1, Real Estate Firm 2 — one role per area
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
            {/* Role 1 */}
            <div className="border border-gray-300 bg-white rounded p-3 space-y-2">
              <div>
                <div className="font-bold text-[10px] text-black">Group Brand and Operations Coordinator</div>
              </div>
              <ul className="text-[8.5px] text-gray-600 space-y-1">
                <li>– Reports to: Sandeep N (Magsmen)</li>
                <li>– CTC: Rs 4,00,000 to 5,00,000</li>
                <li>– Day to day brand governance across all entities</li>
                <li>– Single internal liaison with Magsmen</li>
                <li>– Brand consistency monitoring — document management</li>
              </ul>
            </div>

            {/* Role 2 */}
            <div className="border border-gray-300 bg-white rounded p-3 space-y-2">
              <div>
                <div className="font-bold text-[10px] text-black">Content and Social Media Executive</div>
              </div>
              <ul className="text-[8.5px] text-gray-600 space-y-1">
                <li>– Reports to: Magsmen content strategy</li>
                <li>– CTC: Rs 2,40,000 to 3,60,000</li>
                <li>– Executes content direction across group platforms</li>
                <li>– Social media management</li>
                <li>– Coordinates with agency under Magsmen content architecture</li>
              </ul>
            </div>

            {/* Role 3 */}
            <div className="border border-gray-300 bg-white rounded p-3 space-y-2">
              <div>
                <div className="font-bold text-[10px] text-black">Family Office Operations Executive</div>
              </div>
              <ul className="text-[8.5px] text-gray-600 space-y-1">
                <li>– Reports to: Sandeep N (Magsmen)</li>
                <li>– CTC: Rs 3,60,000 to 4,80,000</li>
                <li>– Manages university and incubation centre outreach</li>
                <li>– Handles startup documentation and coordination</li>
                <li>– Supports due diligence — manages partnership MOUs</li>
              </ul>
            </div>

            {/* Role 4 */}
            <div className="border border-gray-300 bg-white rounded p-3 space-y-2">
              <div>
                <div className="font-bold text-[10px] text-black">Business Development Executive</div>
              </div>
              <ul className="text-[8.5px] text-gray-600 space-y-1">
                <li>– Reports to: Magsmen strategic direction</li>
                <li>– CTC: Rs 4,80,000 to 6,00,000</li>
                <li>– Leads real estate commercial partnership outreach</li>
                <li>– Supports family office deal pipeline</li>
                <li>– Coordinates market entry strategy — IARE industry connections</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#f7f2fb] text-[#4d1f7c] border border-[#e5d5f2] rounded text-center py-1.5 text-[9.5px] font-medium mt-2">
            Magsmen advises on hiring brief and reviews candidates. All four roles begin between Month 2 and Month 4 as architecture is completed.
          </div>
        </section>

        {/* ========================================================================= */}
        {/* BAND 7 — INVESTMENT SUMMARY */}
        {/* ========================================================================= */}
        <section className="space-y-2 pt-2">
          <div className="text-[10px] font-bold text-gray-600 uppercase tracking-wider">
            BAND 7 — INVESTMENT SUMMARY
          </div>

          <div className="bg-[#121212] text-white rounded-md p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Table Rows Left Side */}
            <div className="lg:col-span-8 space-y-3.5 divide-y divide-gray-800 text-[10px]">
              <div className="flex justify-between items-center pt-1 font-medium">
                <span className="text-gray-200">Magsmen Strategy Consultants</span>
                <span className="font-bold text-white">Rs 30,00,000 plus GST — Annual Consulting fees</span>
              </div>
              <div className="flex justify-between items-center pt-3 font-medium">
                <span className="text-gray-300">IP, Legal and Trademarks</span>
                <span className="text-gray-300">Rs 10,00,000 to Rs 20,00,000 — estimated</span>
              </div>
              <div className="flex justify-between items-center pt-3 font-medium">
                <span className="text-gray-300">Auditor and Compliance</span>
                <span className="text-gray-300">Rs 6,00,000 to Rs 9,00,000 — estimated</span>
              </div>
              <div className="flex justify-between items-center pt-3 font-medium">
                <span className="text-gray-300">Agency Execution</span>
                <span className="text-gray-300">Rs 30,00,000 to Rs 33,00,000 — estimated</span>
              </div>
              <div className="flex justify-between items-center pt-3 font-medium">
                <span className="text-gray-300">Saketh In-House Team</span>
                <span className="text-gray-300">Rs 15,00,000 to Rs 20,00,000 — estimated</span>
              </div>
            </div>

            {/* Right Summary Total Box */}
            <div className="lg:col-span-4 lg:border-l border-gray-800 lg:pl-6 text-center space-y-2 py-2">
              <div className="text-xl md:text-2xl font-black tracking-tight text-white">
                Rs 91,00,000 to Rs 1,12,00,000
              </div>
              <div className="text-[10px] font-semibold text-gray-400">
                Total Year 1 investment across all five layers
              </div>
              <div className="text-[8.5px] text-gray-500">
                Layers 2 through 5 paid directly by client to respective professionals and vendors
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER METADATA */}
        <footer className="text-right text-[8.5px] text-gray-400 pt-2">
          Prepared by Magsmen Strategy Consultants — Sandeep N — sandeep@magsmen.com
        </footer>

      </div>
    </div>
  );
}