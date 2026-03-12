import React from "react";

export default function WorkDetails() {
  return (
    <div className="w-full min-h-screen bg-white">
      
      {/* ================= HERO + STICKY META ================= */}
      <section className="relative w-full h-screen overflow-hidden">
        
        {/* ---------- TOP 80% HERO ---------- */}
        <div className="h-[90vh] w-full bg-gradient-to-br from-black via-gray-900 to-black text-white">
          <div className="max-w-7xl mx-auto px-8 h-full flex flex-col justify-center">
            
            {/* Category Tag */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur text-sm text-white/80">
                🛒 Retail FMCG
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-semibold leading-tight max-w-4xl">
              NatureCraft: From Regional Player to National Category Leader
            </h1>

            {/* Sub Tag */}
            <div className="mt-5">
              <span className="inline-block px-5 py-2 rounded-full bg-white/10 text-xs tracking-widest uppercase">
                Brand Transformation
              </span>
            </div>

            {/* Description */}
            <p className="mt-8 text-lg text-white/70 max-w-3xl leading-relaxed">
              How we repositioned a legacy brand for Gen Z without losing its heritage
              audience—achieving{" "}
              <span className="text-white font-medium">
                42% increase in brand recall
              </span>{" "}
              and expanding into{" "}
              <span className="text-white font-medium">8 new markets</span> in
              just 6 months.
            </p>
          </div>
        </div>

        {/* ---------- BOTTOM 20% STICKY STRIP ---------- */}
        {/* <div className="sticky top-0 z-30 h-[20vh] w-full bg-white border-t border-black/10">
          <div className="max-w-7xl mx-auto px-8 h-full grid grid-cols-2 md:grid-cols-5 gap-6 items-center text-sm">
            
            <div>
              <p className="text-black/50 uppercase tracking-wide">Client</p>
              <p className="font-medium text-black">NatureCraft Foods</p>
            </div>

            <div>
              <p className="text-black/50 uppercase tracking-wide">Industry</p>
              <p className="font-medium text-black">FMCG / Natural Foods</p>
            </div>

            <div>
              <p className="text-black/50 uppercase tracking-wide">Services</p>
              <p className="font-medium text-black">
                Strategy, Identity,<br />Packaging, Digital
              </p>
            </div>

            <div>
              <p className="text-black/50 uppercase tracking-wide">Timeline</p>
              <p className="font-medium text-black">6 Months</p>
            </div>

            <div>
              <p className="text-black/50 uppercase tracking-wide">Outcome</p>
              <p className="font-semibold text-orange-500">
                42% Increase in Brand Recall
              </p>
            </div>

          </div>
        </div> */}
      </section>

      {/* ================= NEXT SECTIONS (SCROLL NORMALLY) ================= */}
      {/* STICKY META + DELIVERABLES SECTION */}
       <div className="sticky top-[0px] z-30 bg-white border-b border-gray-200">
    <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-5 gap-6 text-sm">
      
      <div>
        <p className="uppercase tracking-widest text-gray-400 mb-1">Client</p>
        <p className="font-medium text-gray-900">NatureCraft Foods</p>
      </div>

      <div>
        <p className="uppercase tracking-widest text-gray-400 mb-1">Industry</p>
        <p className="font-medium text-gray-900">FMCG / Natural Foods</p>
      </div>

      <div>
        <p className="uppercase tracking-widest text-gray-400 mb-1">Services</p>
        <p className="font-medium text-gray-900">
          Strategy, Identity,<br />Packaging, Digital
        </p>
      </div>

      <div>
        <p className="uppercase tracking-widest text-gray-400 mb-1">Timeline</p>
        <p className="font-medium text-gray-900">6 Months</p>
      </div>

      <div>
        <p className="uppercase tracking-widest text-gray-400 mb-1">Outcome</p>
        <p className="font-medium text-orange-500">
          42% Increase in Brand Recall
        </p>
      </div>

    </div>
  </div>
<section className="relative bg-white">
  
  {/* STICKY TOP BAR */}
 

  {/* SCROLLING CONTENT */}
  <div className="max-w-6xl mx-auto px-6 py-28">
    
    <h2 className="text-5xl font-semibold text-center mb-6">
      What We Delivered
    </h2>

    {/* Accent line */}
    <div className="w-16 h-[3px] bg-gradient-to-r from-orange-400 to-green-400 mx-auto mb-16 rounded-full" />

    {/* PILLS GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
      
      {[
        'Brand Immersion & Discovery',
        'Competitive Analysis & Market Mapping',
        'Brand Strategy & Positioning',
        'Visual Identity System Design',
        'Packaging & Collateral Design',
        'Website Design & Development',
        'Brand Messaging & Copywriting',
        'Brand Film & Campaign Creative',
        'Go-To-Market Strategy',
      ].map((item) => (
        <div
          key={item}
          className="px-8 py-4 rounded-full border border-gray-300 text-gray-800 text-sm font-medium hover:border-gray-900 transition"
        >
          {item}
        </div>
      ))}

    </div>
  </div>

</section>


{/* <section className="max-w-6xl">
    <img
        src={telugufoods}
        className="w-full h-auto"
      />
</section> */}




{/* THE CHALLENGE SECTION */}
{/* THE CHALLENGE SECTION */}
<section className="bg-white py-2">
  <div className="max-w-5xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-2">
      <h2 className="text-5xl font-semibold text-gray-900 mb-6">
        The Challenge
      </h2>

      {/* Accent line */}
      <div className="w-16 h-[3px] bg-gradient-to-r from-orange-400 to-green-400 mx-auto rounded-full" />
    </div>

    {/* Intro paragraph */}
    <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-20 text-center">
      NatureCraft Foods is a 15-year-old FMCG brand with strong South India presence,
      known for authentic organic products and traditional recipes. They had loyal
      customers who trusted their quality, but struggled with brand differentiation
      in expanding metro markets.
    </p>

    {/* Highlight Card */}
    <div className="bg-white rounded-2xl shadow-xl px-12 py-14 max-w-4xl mx-auto mb-24">
      <h3 className="text-3xl font-semibold text-gray-900 mb-6">
        But times changed. The category evolved. And so did consumers.
      </h3>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        The organic food market exploded with new-age D2C brands speaking the language
        of modern wellness — sleek packaging, Instagram-worthy aesthetics, and bold
        health claims. NatureCraft&apos;s traditional identity felt dated.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Their packaging blended into shelves. Their messaging was functional but not
        inspiring.
      </p>

      <p className="text-lg font-semibold text-gray-900">
        They had authenticity and heritage. But they lacked brand salience.
      </p>
    </div>

    {/* THE STAKES */}
    <div className="max-w-4xl mx-auto">
      <div className="rounded-2xl bg-gradient-to-br from-orange-500 to-orange-700 px-14 py-12 shadow-2xl">
        <h4 className="text-white text-2xl font-semibold mb-6">
          The Stakes
        </h4>

        <p className="text-white/95 text-lg leading-relaxed">
          Without a clear, contemporary brand narrative, NatureCraft risked being
          outpaced by venture-backed competitors with sophisticated marketing and
          losing shelf relevance in the rapidly growing urban wellness segment —
          their biggest growth opportunity.
        </p>
      </div>
    </div>

  </div>
</section>

{/* THE MAGSMEN APPROACH */}
<section className="bg-white py-12">
  <div className="max-w-6xl mx-auto px-6">

    {/* Section Heading */}
    <div className="text-center mb-24">
      <h2 className="text-5xl font-semibold text-gray-900 mb-6">
        The Magsmen Approach
      </h2>

      {/* Accent line */}
      <div className="w-16 h-[3px] bg-gradient-to-r from-orange-400 to-green-400 mx-auto rounded-full" />
    </div>

    {/* STEP 01 */}
    <div className="grid grid-cols-1 lg:grid-cols-[120px_1fr] gap-12 items-start">

      {/* Step Number */}
      <div className="text-6xl font-light text-orange-200 leading-none">
        01
      </div>

      {/* Content */}
      <div>
        <h3 className="text-3xl font-semibold text-gray-900 mb-6">
          Discovery &amp; Immersion
        </h3>

        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mb-14">
          We began with deep ethnographic research—visiting production facilities,
          interviewing farmers, shadowing retail buyers, and conducting focus groups
          with both loyal customers and target Gen Z consumers. We mapped the competitive
          landscape, analyzed category trends, and audited NatureCraft&apos;s brand
          touchpoints.
        </p>

        {/* Tools / Methods Box */}
        <div className="border border-dashed border-gray-300 rounded-2xl p-10 bg-gray-50 max-w-4xl">
          <div className="flex flex-wrap gap-6">

            <div className="bg-white rounded-xl px-6 py-4 shadow-sm flex items-center gap-3">
              <span>📊</span>
              <span className="text-gray-800 font-medium">
                Workshop whiteboard sessions
              </span>
            </div>

            <div className="bg-white rounded-xl px-6 py-4 shadow-sm flex items-center gap-3">
              <span>🔍</span>
              <span className="text-gray-800 font-medium">
                Consumer insights mapping
              </span>
            </div>

            <div className="bg-white rounded-xl px-6 py-4 shadow-sm flex items-center gap-3">
              <span>📈</span>
              <span className="text-gray-800 font-medium">
                Competitive audit dashboards
              </span>
            </div>

          </div>
        </div>
      </div>
    </div>

    {/* Divider */}
    <div className="mt-32 border-t border-gray-200" />

  </div>
</section>

{/* STRATEGIC FOUNDATION */}
<section className="bg-white py-0">
  <div className="max-w-6xl mx-auto px-6">

    {/* STEP HEADER */}
    <div className="grid grid-cols-1 lg:grid-cols-[120px_1fr] gap-12 items-start mb-24">
      
      {/* Step Number */}
      <div className="text-6xl font-light text-orange-200 leading-none">
        02
      </div>

      {/* Title */}
      <h3 className="text-4xl font-semibold text-gray-900">
        Strategic Foundation
      </h3>
    </div>

    {/* CORE INSIGHT BOX */}
    <div className="bg-[#f6f2e8] rounded-2xl p-12 border-l-4 border-green-700 max-w-5xl mb-20">
      <p className="text-sm tracking-widest text-green-700 font-semibold mb-6">
        CORE INSIGHT
      </p>

      <p className="text-2xl text-gray-800 leading-relaxed">
        “Gen Z consumers don&apos;t want another &apos;wellness brand&apos;—they want
        radical transparency, proof of craft, and brands that feel like cultural
        movements, not just products.”
      </p>
    </div>

    {/* STRATEGIC PIVOT */}
    <div className="max-w-4xl mb-20">
      <p className="text-sm tracking-widest text-gray-500 font-semibold mb-4">
        STRATEGIC PIVOT
      </p>

      <p className="text-lg text-gray-700 leading-relaxed">
        We repositioned NatureCraft from{" "}
        <span className="font-semibold text-gray-900">
          “affordable organic quality”
        </span>{" "}
        to{" "}
        <span className="font-semibold text-gray-900">
          “transparent craftsmanship for conscious consumers”
        </span>
        —a brand that celebrates the messy, beautiful reality of real food made by
        real people.
      </p>
    </div>

    {/* BRAND PROMISE */}
    <div className="max-w-4xl">
      <p className="text-sm tracking-widest text-gray-500 font-semibold mb-6">
        BRAND PROMISE
      </p>

      <div className="bg-black rounded-2xl px-12 py-10 shadow-lg">
        <p className="text-2xl md:text-3xl font-semibold text-white text-center">
          “Real Food. Real Stories. Zero Compromise.”
        </p>
      </div>
    </div>

    {/* Divider */}
    <div className="mt-12 border-t border-gray-200" />

  </div>
</section>

{/* VISUAL PHILOSOPHY */}
<section className="bg-white py-12">
  <div className="max-w-6xl mx-auto px-6">

    {/* HEADER */}
    <div className="grid grid-cols-1 lg:grid-cols-[120px_1fr] gap-12 items-start mb-16">
      
      {/* Step Number */}
      <div className="text-6xl font-light text-orange-200 leading-none">
        03
      </div>

      {/* Title + Intro */}
      <div>
        <h3 className="text-4xl font-semibold text-gray-900 mb-6">
          Visual Philosophy
        </h3>

        <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
          We needed to balance heritage with modernity—retaining trust while
          feeling fresh and culturally relevant. The visual identity had to
          work across traditional retail and digital-first touchpoints.
        </p>
      </div>
    </div>

    {/* CARDS GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl ml-auto">

      {/* CARD 1 */}
      <div className="border border-gray-200 rounded-2xl p-10">
        <h4 className="text-xl font-semibold text-gray-900 mb-4">
          Color Strategy
        </h4>
        <p className="text-gray-600 leading-relaxed">
          Earthy terracotta and sage green evoke natural authenticity, paired
          with bold black for modern confidence and premium positioning.
        </p>
      </div>

      {/* CARD 2 */}
      <div className="border border-gray-200 rounded-2xl p-10">
        <h4 className="text-xl font-semibold text-gray-900 mb-4">
          Typography
        </h4>
        <p className="text-gray-600 leading-relaxed">
          Clean geometric sans-serif (DM Sans) for headlines signals precision
          and modernity. Humanist secondary font adds warmth for storytelling.
        </p>
      </div>

      {/* CARD 3 */}
      <div className="border border-gray-200 rounded-2xl p-10 md:col-span-1">
        <h4 className="text-xl font-semibold text-gray-900 mb-4">
          Visual Language
        </h4>
        <p className="text-gray-600 leading-relaxed">
          Hand-drawn botanical illustrations meet structured grid systems—craft
          meets clarity. Photography style: unfiltered, documentary-real.
        </p>
      </div>

    </div>

    {/* DIVIDER */}
    <div className="mt-32 border-t border-gray-200" />

  </div>
</section>

{/* THE WORK */}
<section className="bg-white py-12">
  <div className="max-w-7xl mx-auto px-6">

    {/* SECTION HEADER */}
    <div className="text-center mb-20">
      <h2 className="text-4xl font-semibold text-gray-900 mb-4">
        The Work
      </h2>
      <div className="w-12 h-[3px] mx-auto bg-gradient-to-r from-orange-500 to-green-500 rounded-full" />
    </div>

    {/* SUB HEADING */}
    <div className="mb-12">
      <h3 className="text-2xl font-semibold text-gray-900 mb-3">
        Logo & Brand Identity
      </h3>
      <div className="w-48 h-[2px] bg-orange-500" />
    </div>

    {/* CONTENT GRID */}
    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 items-start">

      {/* LEFT — BRAND MOCK */}
      <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-gradient-to-br from-black via-gray-900 to-slate-800">
        <div className="h-[420px] flex flex-col items-center justify-center text-white">
          <div className="w-24 h-24 rounded-2xl bg-white flex items-center justify-center mb-6">
            <span className="text-3xl font-semibold text-orange-500">
              NC
            </span>
          </div>
          <h4 className="text-2xl font-medium">
            NatureCraft
          </h4>
        </div>

        <div className="bg-white px-6 py-4 text-sm text-gray-600">
          Primary logo lockup with monogram—designed for versatility across
          packaging and digital
        </div>
      </div>

      {/* RIGHT — COLOR PALETTE CARD */}
      <div className="rounded-2xl border border-gray-200 shadow-md bg-gray-50 p-6">
        <h4 className="text-sm font-semibold text-gray-700 mb-4">
          Color Palette
        </h4>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-lg bg-[#D27A43]" />
          <div className="w-12 h-12 rounded-lg bg-[#7F9C75]" />
          <div className="w-12 h-12 rounded-lg bg-[#111111]" />
          <div className="w-12 h-12 rounded-lg bg-[#F6F1E8]" />
        </div>

        <div className="bg-white rounded-xl p-4 text-sm text-gray-600">
          Brand color system
        </div>
      </div>

      {/* TYPOGRAPHY SYSTEM CARD */}
<div className="rounded-2xl border border-gray-200 shadow-md bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden">
  
  {/* TOP */}
  <div className="p-6 text-center">
    <p className="text-sm font-semibold text-gray-500 mb-4">
      Typography System
    </p>

    <h3 className="text-2xl font-semibold text-gray-800 mb-2">
      DM Sans Bold
    </h3>

    <p className="text-lg text-gray-600">
      Inter Regular
    </p>
  </div>

  {/* DIVIDER */}
  <div className="h-px bg-gray-200" />

  {/* FOOTER */}
  <div className="bg-white p-4 text-sm text-gray-600">
    Type hierarchy and font pairings
  </div>

</div>


    </div>

  </div>
</section>

<section className="w-full bg-white py-24">
  <div className="max-w-7xl mx-auto px-6">

    {/* Section Heading */}
    <div className="mb-10">
      <h2 className="text-2xl font-semibold text-black">
        Packaging System
      </h2>
      <div className="mt-2 w-24 h-[2px] bg-[#D97745]" />
    </div>

    {/* Main Packaging Visual */}
    <div className="relative rounded-2xl overflow-hidden shadow-sm bg-gradient-to-b from-[#f6f2ea] to-[#fbfaf7]">

      {/* Placeholder visual area */}
      <div className="h-[420px] flex items-end justify-end p-6">
        <span className="px-5 py-2 bg-white rounded-full text-sm font-medium shadow">
          Product Range
        </span>
      </div>

      {/* Caption */}
      <div className="bg-white px-6 py-4 text-sm text-gray-600">
        Complete packaging system across 12 SKUs—unified visual language with
        product-specific color coding
      </div>
    </div>

    {/* Supporting Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-w-3xl">

      {/* Shelf Impact */}
      <div className="rounded-xl overflow-hidden shadow-sm bg-white">
        <div className="h-36 bg-gradient-to-b from-gray-100 to-gray-50 flex items-center justify-center text-sm font-medium text-gray-600">
          Shelf Impact
        </div>
        <div className="px-5 py-4 text-sm text-gray-600">
          Before/after shelf presence comparison — 350% improvement in standout
        </div>
      </div>

      {/* Sustainability Story */}
      <div className="rounded-xl overflow-hidden shadow-sm bg-white">
        <div className="h-36 bg-gradient-to-b from-gray-100 to-gray-50 flex items-center justify-center text-sm font-medium text-gray-600">
          Sustainability Story
        </div>
        <div className="px-5 py-4 text-sm text-gray-600">
          100% recyclable materials with transparent sourcing information
        </div>
      </div>
    </div>

    {/* Key Innovation Callout */}
    <div className="mt-12 rounded-xl bg-[#f5efe6] border-l-4 border-[#D97745] px-6 py-5 text-sm text-gray-800 max-w-5xl">
      <span className="font-semibold">Key Innovation:</span> QR codes linking to
      farmer video stories—connecting consumers directly to source, building
      trust through radical transparency.
    </div>

  </div>
</section>

<section className="w-full bg-white py-2">
  <div className="max-w-7xl mx-auto px-6">

    {/* Section Heading */}
    <div className="mb-10">
      <h2 className="text-2xl font-semibold text-black">
        Website & Digital Experience
      </h2>
      <div className="mt-2 w-40 h-[2px] bg-[#D97745]" />
    </div>

    {/* Main Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

      {/* Main Website Preview */}
      <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-sm bg-white">

        {/* Browser chrome */}
        <div className="h-10 bg-gray-200 flex items-center px-4 gap-2">
          <span className="w-2.5 h-2.5 bg-gray-400 rounded-full" />
          <span className="w-2.5 h-2.5 bg-gray-400 rounded-full" />
          <span className="w-2.5 h-2.5 bg-gray-400 rounded-full" />
        </div>

        {/* Website visual */}
        <div className="h-[360px] bg-gradient-to-b from-[#f6f2ea] to-[#fbfaf7] flex items-center justify-center text-sm font-medium text-gray-500">
          naturecraft.com
        </div>

        {/* Caption */}
        <div className="px-6 py-4 text-sm text-gray-600 border-t">
          Homepage redesign—storytelling-first architecture with immersive
          product discovery
        </div>
      </div>

      {/* Mobile Experience Card */}
      <div className="rounded-2xl overflow-hidden shadow-sm bg-white">
        <div className="h-40 bg-gradient-to-b from-gray-100 to-gray-50 flex items-center justify-center text-sm font-medium text-gray-600">
          Mobile Experience
        </div>
        <div className="px-5 py-4 text-sm text-gray-600">
          Mobile-first design with 78% improvement in conversion rate
        </div>
      </div>

      {/* Product Pages Card */}
      <div className="rounded-2xl overflow-hidden shadow-sm bg-white lg:col-span-1">
        <div className="h-40 bg-gradient-to-b from-gray-100 to-gray-50 flex items-center justify-center text-sm font-medium text-gray-600">
          Product Pages
        </div>
        <div className="px-5 py-4 text-sm text-gray-600">
          Enhanced product storytelling with video, sourcing details, and
          reviews
        </div>
      </div>

    </div>

  </div>
</section>


<section className="w-full bg-white py-12">
  <div className="max-w-7xl mx-auto px-6">

    {/* =========================
        Brand Film & Campaign
    ========================= */}
    <div className="mb-24">

      {/* Heading */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-black">
          Brand Film & Campaign
        </h2>
        <div className="mt-2 w-40 h-[2px] bg-[#D97745]" />
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* Video Placeholder */}
        <div className="relative rounded-xl overflow-hidden shadow-sm bg-gradient-to-br from-gray-700 to-gray-900 h-[320px] flex items-center justify-center">

          {/* Play Button */}
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
            <div className="w-0 h-0 border-l-[10px] border-l-black border-y-[6px] border-y-transparent ml-1" />
          </div>

          {/* Caption */}
          <div className="absolute bottom-6 left-6 text-white text-sm font-medium">
            “From Soil to Soul” Brand Film
          </div>
        </div>

        {/* Description */}
        <div className="text-gray-700 leading-relaxed text-base">
          <p className="mb-6">
            A 90-second documentary-style brand film celebrating real farmers,
            real processes, and the messy beauty of organic food production.
            No actors, no scripting—just authentic stories that build trust and
            emotional connection.
          </p>

          <p className="font-semibold text-gray-900">
            Result: 2.4M views, 86% completion rate, featured by Campaign India
            as “authenticity-first marketing done right.”
          </p>
        </div>

      </div>
    </div>

    {/* =========================
        Marketing Collateral
    ========================= */}
    <div>

      {/* Heading */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-black">
          Marketing Collateral
        </h2>
        <div className="mt-2 w-40 h-[2px] bg-[#D97745]" />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {[
          "Social Media Templates",
          "Retail POS Materials",
          "Trade Presentation Deck",
          "Brand Guidelines",
        ].map((item) => (
          <div
            key={item}
            className="h-[180px] rounded-xl bg-gradient-to-b from-gray-100 to-gray-50 flex items-center justify-center text-sm font-medium text-gray-600 shadow-sm"
          >
            {item}
          </div>
        ))}

      </div>
    </div>

  </div>
</section>

<section className="w-full bg-white py-28">
  <div className="max-w-7xl mx-auto px-6">

    {/* Header */}
    <div className="text-center mb-20">
      <h2 className="text-4xl font-semibold text-black mb-4">
        What Changed
      </h2>

      <div className="mx-auto mb-6 w-12 h-[2px] bg-[#D97745]" />

      <p className="max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed">
        Within 6 months of launch, NatureCraft transformed from regional player
        to national category contender—backed by measurable business impact and
        market recognition.
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

      {/* Card 1 */}
      <div className="rounded-2xl bg-white shadow-sm border border-gray-100 p-8">
        <h3 className="text-lg font-semibold text-[#D97745] mb-6">
          Brand Perception Metrics
        </h3>

        <ul className="space-y-6 text-sm text-gray-700 leading-relaxed">
          <li className="flex gap-4">
            <span className="text-green-500 text-lg">✔</span>
            <span>
              <strong>42% increase</strong> in aided brand recall among target
              demographic (18–35 urban consumers)
            </span>
          </li>

          <li className="flex gap-4">
            <span className="text-green-500 text-lg">✔</span>
            <span>
              <strong>Perceived quality rating</strong> jumped from 6.2 to 8.7
              (out of 10) in post-launch surveys
            </span>
          </li>

          <li className="flex gap-4">
            <span className="text-green-500 text-lg">✔</span>
            <span>
              <strong>78% of consumers</strong> identified transparency and
              authenticity as key brand differentiators
            </span>
          </li>
        </ul>
      </div>

      {/* Card 2 */}
      <div className="rounded-2xl bg-white shadow-sm border border-gray-100 p-8">
        <h3 className="text-lg font-semibold text-[#D97745] mb-6">
          Business Impact
        </h3>

        <ul className="space-y-6 text-sm text-gray-700 leading-relaxed">
          <li className="flex gap-4">
            <span className="text-green-500 text-lg">✔</span>
            <span>
              <strong>31% sales growth</strong> in first quarter post-launch
              (vs. 8% category average)
            </span>
          </li>

          <li className="flex gap-4">
            <span className="text-green-500 text-lg">✔</span>
            <span>
              <strong>Expanded into 8 new markets</strong> within 6 months —
              Delhi NCR, Mumbai, Pune, Bengaluru
            </span>
          </li>

          <li className="flex gap-4">
            <span className="text-green-500 text-lg">✔</span>
            <span>
              <strong>Average order value increased 23%</strong> through improved
              product storytelling and premiumization
            </span>
          </li>
        </ul>
      </div>

      {/* Card 3 */}
      <div className="rounded-2xl bg-white shadow-sm border border-gray-100 p-8">
        <h3 className="text-lg font-semibold text-[#D97745] mb-6">
          Market Position
        </h3>

        <ul className="space-y-6 text-sm text-gray-700 leading-relaxed">
          <li className="flex gap-4">
            <span className="text-green-500 text-lg">✔</span>
            <span>
              <strong>Achieved category leadership</strong> in organic snacks
              segment in South India (23% market share)
            </span>
          </li>

          <li className="flex gap-4">
            <span className="text-green-500 text-lg">✔</span>
            <span>
              <strong>Transitioned from regional to national contender</strong>
              with distribution in 450+ premium retail outlets
            </span>
          </li>

          <li className="flex gap-4">
            <span className="text-green-500 text-lg">✔</span>
            <span>
              <strong>Featured in “Top 10 Food Brands to Watch”</strong> by
              Economic Times and Business Standard
            </span>
          </li>
        </ul>
      </div>

      <div className="rounded-2xl bg-white shadow-sm border border-gray-100 p-8">
  <h3 className="text-lg font-semibold text-[#D97745] mb-6">
    Operational Efficiency
  </h3>

  <ul className="space-y-6 text-sm text-gray-700 leading-relaxed">
    <li className="flex gap-4">
      <span className="text-green-500 text-lg">✔</span>
      <span>
        <strong>Reduced SKU complexity by 35%</strong> through strategic
        portfolio rationalization
      </span>
    </li>

    <li className="flex gap-4">
      <span className="text-green-500 text-lg">✔</span>
      <span>
        <strong>Streamlined go-to-market</strong> with unified brand
        architecture—cutting marketing costs by 18%
      </span>
    </li>

    <li className="flex gap-4">
      <span className="text-green-500 text-lg">✔</span>
      <span>
        <strong>Improved retailer satisfaction score</strong> from 6.8 to 9.1
        through clearer brand positioning and merchandising support
      </span>
    </li>
  </ul>
</div>


    </div>
  </div>
</section>

<section className="py-32 bg-gray-50">
  <div className="max-w-5xl mx-auto px-6">
    <div className="bg-white rounded-3xl shadow-xl p-12 md:p-16 relative">

      {/* Quote icon */}
      <div className="absolute top-8 left-8 text-[#F2D6C9] text-6xl leading-none select-none">
        “
      </div>

      {/* Quote text */}
      <p className="text-lg md:text-xl text-gray-800 leading-relaxed italic">
        Magsmen didn't just redesign our brand—they redefined how we see
        ourselves. Their strategic clarity gave us the confidence to compete at
        a national level, and their creative execution made us culturally
        relevant overnight. The transparency-first positioning they developed
        isn't just marketing—it's become our operating philosophy. Six months
        in, we're no longer the 'regional organic brand.' We're category
        challengers.
      </p>

      {/* Divider */}
      <div className="my-10 h-px bg-gray-200" />

      {/* Author */}
      <div>
        <p className="font-semibold text-gray-900">
          Rajesh Kumar
        </p>
        <p className="text-sm text-gray-600 mt-1">
          Founder & CEO, NatureCraft Foods
        </p>
      </div>

    </div>
  </div>
</section>

<section className="py-12 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-20">
      <h2 className="text-4xl font-semibold text-gray-900">
        More Work
      </h2>
      <div className="mt-4 flex justify-center">
        <span className="h-[3px] w-16 bg-gradient-to-r from-[#E07A3F] to-[#7BA36A] rounded-full" />
      </div>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

      {/* Card 1 */}
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
        <div className="h-52 bg-gradient-to-b from-gray-100 to-gray-200 flex items-center justify-center text-4xl">
          🏦
        </div>

        <div className="p-8">
          <span className="inline-block mb-4 px-4 py-1 text-xs font-semibold tracking-widest text-[#E07A3F] bg-[#FDEEE5] rounded-full">
            FINTECH
          </span>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            SecurePay: Redefining Trust in Digital Banking
          </h3>

          <p className="text-gray-600 mb-6">
            Building brand credibility for a challenger digital bank in a skeptical market
          </p>

          <a
            href="/workdetails"
            className="inline-flex items-center text-[#E07A3F] font-medium hover:gap-2 transition-all"
          >
            View Case Study →
          </a>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
        <div className="h-52 bg-gradient-to-b from-gray-100 to-gray-200 flex items-center justify-center text-4xl">
          🏃‍♂️
        </div>

        <div className="p-8">
          <span className="inline-block mb-4 px-4 py-1 text-xs font-semibold tracking-widest text-[#E07A3F] bg-[#FDEEE5] rounded-full">
            HEALTH & WELLNESS
          </span>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            FlexFit: From Gym to Lifestyle Movement
          </h3>

          <p className="text-gray-600 mb-6">
            Transforming a fitness chain into a cultural brand for millennials
          </p>

          <a
            href="/workdetails"
            className="inline-flex items-center text-[#E07A3F] font-medium hover:gap-2 transition-all"
          >
            View Case Study →
          </a>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
        <div className="h-52 bg-gradient-to-b from-gray-100 to-gray-200 flex items-center justify-center text-4xl">
          🏠
        </div>

        <div className="p-8">
          <span className="inline-block mb-4 px-4 py-1 text-xs font-semibold tracking-widest text-[#E07A3F] bg-[#FDEEE5] rounded-full">
            REAL ESTATE
          </span>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            UrbanNest: Premium Living Redefined
          </h3>

          <p className="text-gray-600 mb-6">
            Positioning a luxury real estate brand for ultra-high-net-worth individuals
          </p>

          <a
            href="/workdetails"
            className="inline-flex items-center text-[#E07A3F] font-medium hover:gap-2 transition-all"
          >
            View Case Study →
          </a>
        </div>
      </div>

    </div>
  </div>
</section>

<section className="relative py-40 overflow-hidden">
  {/* Gradient Background */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#3A2A22] via-[#1F2328] to-[#0E1E26]" />

  {/* Content */}
  <div className="relative max-w-5xl mx-auto px-6 text-center text-white">
    <h2 className="text-4xl md:text-5xl font-semibold mb-6">
      Ready to Transform Your Brand?
    </h2>

    <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed">
      Let’s build a brand that doesn’t just compete—it leads.
      Strategic clarity meets creative excellence.
    </p>

    <a
      href="magsmenreact/contact"
      className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-gray-900 bg-white rounded-full shadow-lg hover:scale-[1.03] hover:shadow-xl transition-all duration-300"
    >
      Let’s Talk About Your Brand →
    </a>
  </div>
</section>




    </div>
  );
}
