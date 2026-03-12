
import {useParams, Link} from 'react-router-dom';
import { motion } from 'framer-motion';
 import React, { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle, TrendingUp, Award, Calendar, Building } from 'lucide-react';
import { title } from 'framer-motion/client';
import tenalidoublehorsevideo from '/assets/casestudies/tenali-double-horse.mp4'
import suryacolorsvideo from '/assets/casestudies/surya-colors-video.mp4'
import tdhrishikavideo from '/assets/casestudies/tdh-rishika.mp4'
import telugufoodsvideo from '/assets/casestudies/telugu-foods.mp4'
import triplexvideo from '/assets/casestudies/triplex-video.mp4'
import vsbvideo from '/assets/casestudies/vsbgroup.mp4'
import zavainevideo from '/assets/casestudies/zavaine-video.mp4'
import tenalidoublehorseImage1 from '/assets/casestudies/urad-gota.png';
import tenalidoublehorseImage2 from '/assets/casestudies/suma-packets.png';
import tenalidoublehorseImage3 from '/assets/casestudies/tenali-double-products.png';
import suryacolorsImage1 from '/assets/casestudies/surya-color-one.png';
import suryacolorsImage2 from '/assets/casestudies/surya-color-two.png';
import suryacolorsImage3 from '/assets/casestudies/surya-color-three.png';
import tdhrishikaImage1 from '/assets/casestudies/tdh-sunnundalu.png';
import tdhrishikaImage2 from '/assets/casestudies/tdh-dosa.png';
import tdhrishikaImage3 from '/assets/casestudies/tdh-garalu.png';
import telugufoodsImage1 from '/assets/casestudies/telugu-ginger-garlic.png';
import telugufoodsImage2 from '/assets/casestudies/telugu-tomato.png';
import telugufoodsImage3 from '/assets/casestudies/telugu-chicken-garam-meat.png';
import triplexImage1 from '/assets/casestudies/triplex-one.png';
import triplexImage2 from '/assets/casestudies/triplex-two.png';
import triplexImage3 from '/assets/casestudies/triplex-three.png';
import vsbImage1 from '/assets/casestudies/vsb-one.png';
import vsbImage2 from '/assets/casestudies/vsb-two.png';
import vsbImage3 from '/assets/casestudies/vsb-three.png';
import zavaineImage1 from '/assets/casestudies/zavaine-one.png';
import zavaineImage2 from '/assets/casestudies/zavaine-two.png';
import zavaineImage3 from '/assets/casestudies/zavaine-three.png';
import BrandingPatternLYN from '/assets/works/Branding-Pattern-LYN.jpg'
import { ChevronLeft, ChevronRight } from "lucide-react";
import telugutomato from '/assets/works/telugu-tomato.png'
import ConsultantLogoDesign1024x1024 from '/assets/services/Consultant_Logo_Design_3_1024x1024.webp';


import telugufoods from "/assets/works/surya-color-one.png"




import { caseStudies } from "../data/caseStudies";



const VIDEOS_BY_SLUG: Record<string, string> = {
  suryacolorsvideo: suryacolorsvideo,
  tenalidoublehorsevideo: tenalidoublehorsevideo,
  triplexvideo: triplexvideo,
  telugufoods: telugufoods,
  rishika: tdhrishikavideo,
  vsbgroup: vsbvideo,
  zavaine: zavainevideo,
};



export default function CaseStudyDetail() {
  const { slug } = useParams();

  const caseStudy =
    caseStudies.find((cs) => cs.slug === slug) || caseStudies[0];

  return (
    <div className="w-full min-h-screen bg-white">

      {/* ================= HERO ================= */}
      <section className="relative w-full h-screen overflow-hidden"
      style={{ }}
      
      >
        <div className="h-[90vh] w-full bg-gradient-to-br from-black via-gray-900 to-black text-white">
          <div className="max-w-7xl mx-auto px-8 h-full flex flex-col justify-center">

           <span className="inline-flex self-start px-4 py-2 bg-white/10 mb-6 rounded-md">
  {caseStudy.category}
</span>

            <h1 className="text-5xl md:text-6xl font-semibold max-w-4xl">
              {caseStudy.title}
            </h1>

           <span className="mt-5 inline-flex self-start px-5 py-2 bg-white/10 text-xs tracking-widest uppercase rounded-md">
  {caseStudy.tag}
</span>

            <p className="mt-8 text-lg text-white/70 max-w-3xl">
              {caseStudy.description}
            </p>
          </div>
        </div>
      </section>

      {/* ================= STICKY META ================= */}
      <div className=" top-0 z-30 bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-5 gap-6 text-sm">
          <Meta label="Client" value={caseStudy.client} />
          <Meta label="Industry" value={caseStudy.industry} />
          <Meta label="Services" value={caseStudy.services.join(", ")} />
          <Meta label="Timeline" value={caseStudy.timeline} />
          <Meta label="Outcome" value={caseStudy.outcome}  />
        </div>
      </div>

      {/* ================= WHAT WE DELIVERED ================= */}
      <section className="py-28 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl mb-16">What We Delivered</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudy.services.map((item) => (
            <div
              key={item}
              className="px-8 py-4 rounded-full border text-sm font-medium"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* ================= CHALLENGE ================= */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-5xl mb-10">The Challenge</h2>

          <p className="text-xl text-gray-600 mb-16">
            {caseStudy.challengeIntro}
          </p>

          <div className="bg-white shadow-xl rounded-2xl p-12 mb-20">
            <p className="text-2xl mb-6 font-semibold">
              {caseStudy.challengeHighlight}
            </p>
            <p className="text-gray-700">{caseStudy.stakes}</p>
          </div>
        </div>
      </section>

      {/* ================= STRATEGY ================= */}
      <section className="py2 max-w-6xl mx-auto px-6">

  {/* ================= SECTION HEADER ================= */}
  <div className="text-center mb-24 mt-5">
    <h2 className="text-5xl font-semibold text-gray-900 mb-6">
      The Magsmen Approach
    </h2>

    <div className="w-16 h-[3px] bg-gradient-to-r from-purple-400 to-purple-400 mx-auto rounded-full" />
  </div>

  {/* ================= STEPS ================= */}
  {caseStudy.strategy.map((item, i) => (
    <div key={i}>

      {/* ================= STEP 01 : DISCOVERY ================= */}
      {item.type === "discovery" && (
        <div className="grid grid-cols-1 lg:grid-cols-[120px_1fr] gap-14 mb-40">

          {/* STEP NUMBER */}
          <div className="text-7xl font-light text-purple-500 leading-none">
            {String(i + 1).padStart(2, "0")}
          </div>

          {/* CONTENT */}
          <div>
            <h3 className="text-4xl font-semibold text-gray-900 mb-8">
              {item.title}
            </h3>

            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mb-16">
              {item.description}
            </p>

            {/* TOOLS BOX */}
            <div className="border border-dashed border-gray-300 rounded-2xl p-10 bg-gray-50 max-w-4xl">
              <div className="flex flex-wrap gap-6">

                {Array.isArray(item.tools) &&
                  item.tools.map((tool: string, idx: number) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl px-6 py-4 shadow-sm flex items-center gap-3"
                    >
                      <span className="text-lg">📊</span>
                      <span className="text-gray-800 font-medium">
                        {tool}
                      </span>
                    </div>
                  ))}

              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= STEP 02 : STRATEGIC FOUNDATION ================= */}
      {item.type === "foundation" && (
        <div className="grid grid-cols-1 lg:grid-cols-[120px_1fr] gap-14 mb-40">

          {/* STEP NUMBER */}
          <div className="text-7xl font-light text-purple-500 leading-none">
            {String(i + 1).padStart(2, "0")}
          </div>

          {/* CONTENT */}
          <div>
            <h3 className="text-4xl font-semibold text-gray-900 mb-20">
              {item.title}
            </h3>

            {/* CORE INSIGHT */}
            <div className="bg-[#f6f2e8] rounded-2xl p-12 border-l-4 border-green-700 max-w-5xl mb-24">
              <p className="text-sm tracking-widest text-green-700 font-semibold mb-6">
                CORE INSIGHT
              </p>

              <p className="text-2xl text-gray-800 leading-relaxed">
                “{item.coreInsight}”
              </p>
            </div>

            {/* STRATEGIC PIVOT */}
            <div className="max-w-4xl mb-20">
              <p className="text-sm tracking-widest text-gray-500 font-semibold mb-4">
                STRATEGIC PIVOT
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                {item.strategicPivot}
              </p>
            </div>

            {/* BRAND PROMISE */}
            <div className="max-w-4xl">
              <p className="text-sm tracking-widest text-gray-500 font-semibold mb-6">
                BRAND PROMISE
              </p>

              <div className="bg-black rounded-2xl px-12 py-10 shadow-lg">
                <p className="text-2xl md:text-3xl font-semibold text-white text-center">
                  “{item.brandPromise}”
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= STEP 03 : VISUAL PHILOSOPHY ================= */}
{item.type === "visual" && (
  <div className="grid grid-cols-1 lg:grid-cols-[120px_1fr] gap-14 mb-40">

    {/* STEP NUMBER */}
    <div className="text-7xl font-light text-purple-500 leading-none">
      {String(i + 1).padStart(2, "0")}
    </div>

    {/* CONTENT */}
    <div>
      <h3 className="text-4xl font-semibold text-gray-900 mb-6">
        {item.title}
      </h3>

      <p className="text-lg text-gray-600 max-w-3xl leading-relaxed mb-20">
        {item.description}
      </p>

      {/* CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl">

        {Array.isArray(item.pillars) &&
          item.pillars.map(
            (
              pillar: { title: string; description: string },
              idx: number
            ) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-2xl p-10 bg-white"
              >
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  {pillar.title}
                </h4>

                <p className="text-gray-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            )
          )}

      </div>
    </div>
  </div>
)}


    </div>
  ))}
</section>


{/* ================= THE WORK ================= */}
<section className="py-2 bg-white">

  {/* SECTION HEADER */}
  <div className="text-center mb-24">
    <h2 className="text-4xl font-semibold text-gray-900 mb-4">
      {caseStudy.work?.title}
    </h2>
    <div className="w-12 h-[3px] mx-auto bg-gradient-to-r from-purple-500 to-purple-500 rounded-full" />
  </div>

  {Array.isArray(caseStudy.work?.sections) &&
    caseStudy.work.sections.map((section: any, idx: number) => {

      /* ================= LOGO & BRAND IDENTITY ================= */
      if (section.type === "branding") {
        return (
          <div key={idx} className="max-w-7xl mx-auto px-6 mb-32">

            {/* SUB HEADING */}
            <div className="mb-12">
              <h3 className="text-3xl font-semibold text-gray-900 mb-3">
                {section.heading}
              </h3>
              <div className="w-48 h-[2px] bg-purple-500" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 items-start">

              {/* LOGO MOCK */}
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-gradient-to-br from-white via-white-900 to-white-800">
                <div className="h-[420px] flex flex-col items-center justify-center text-white">
                  <div className="w-full h-[320px] rounded-2xl bg-white flex items-center justify-center mb-6 overflow-hidden">
  <img
    src={section.logo?.image}
    alt={`${section.logo?.brandName} logo`}
    className="w-full h-full object-contain"
  />
</div>

                  <h4 className="text-2xl font-medium">
                    {section.logo?.brandName}
                  </h4>
                </div>

                <div className="bg-white px-6 py-4 text-sm text-gray-600">
                  {section.logo?.caption}
                </div>
              </div>

              {/* SIDE SYSTEMS */}
              <div className="space-y-8">

                {/* COLOR PALETTE */}
                <div className="rounded-2xl border border-gray-200 shadow-md bg-gray-50 p-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-4">
                    Color Palette
                  </h4>

                  <div className="flex items-center gap-4 mb-6">
                    {section.colorPalette?.colors?.map((color: string, i: number) => (
                      <div
                        key={i}
                        className="w-12 h-12 rounded-lg"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>

                  <div className="bg-white rounded-xl p-4 text-sm text-gray-600">
                    {section.colorPalette?.label}
                  </div>
                </div>

                {/* TYPOGRAPHY */}
                {/* <div className="rounded-2xl border border-gray-200 shadow-md bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden">
                  <div className="p-6 text-center">
                    <p className="text-sm font-semibold text-gray-500 mb-4">
                      Typography System
                    </p>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                      {section.typography?.primary}
                    </h3>
                    <p className="text-lg text-gray-600">
                      {section.typography?.secondary}
                    </p>
                  </div>

                  <div className="h-px bg-gray-200" />

                  <div className="bg-white p-4 text-sm text-gray-600">
                    {section.typography?.caption}
                  </div>
                </div> */}

              </div>
            </div>
          </div>
        );
      }

      /* ================= PACKAGING SYSTEM (EXACT MATCH) ================= */
//       if (section.type === "packaging") {
//         return (
//           <div key={idx} className="max-w-7xl mx-auto px-6 mb-40">

            
//             <div className="mb-10">
//               <h3 className="text-2xl font-semibold text-gray-900 mb-2">
//                 {section.heading}
//               </h3>
//               <div className="w-32 h-[2px] bg-purple-500" />
//             </div>

//             <div className="rounded-2xl bg-[#fffff] border border-gray-200 overflow-hidden mb-14">
//               <div className="relative h-[420px]">
//   <img
//     src={section.hero?.image}
//     alt={`${section.heading} showcase`}
//     className="absolute inset-0 w-50 h-45 object-cover"
//   />

//   <div className="absolute inset-0 flex items-end justify-end p-6">
//     <span className="bg-white rounded-full px-5 py-2 text-sm shadow">
//       {section.hero?.cta}
//     </span>
//   </div>
// </div>


//               <div className="bg-white px-6 py-24 text-sm text-gray-600 border-t">
//                 {section.hero?.caption}
//               </div>
//             </div>

         
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
//               {section.cards?.map((card: any, i: number) => (
//                 <div
//                   key={i}
//                   className="bg-gray-50 border border-gray-200 rounded-xl p-8"
//                 >
//                   <h4 className="text-sm font-semibold text-gray-800 mb-4">
//                     {card.title}
//                   </h4>
//                   <p className="text-gray-600 leading-relaxed">
//                     {card.description}
//                   </p>
//                 </div>
//               ))}
//             </div>

         

//           </div>
//         );
//       }

      /* ================= WEBSITE & DIGITAL EXPERIENCE ================= */
if (section.type === "website") {
  return (
    <div key={idx} className="max-w-7xl mx-auto px-6 mb-40">

      {/* HEADING */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">
          {section.heading}
        </h3>
        <div className="w-48 h-[2px] bg-purple-500" />
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 items-start mb-14">

        {/* WEBSITE MOCK */}
        <div className="rounded-2xl border border-gray-200 overflow-hidden bg-white shadow-sm">

          {/* BROWSER BAR */}
          <div className="h-10 bg-gray-100 flex items-center gap-2 px-4">
            <span className="w-3 h-3 rounded-full bg-red-400" />
            <span className="w-3 h-3 rounded-full bg-yellow-400" />
            <span className="w-3 h-3 rounded-full bg-green-400" />
          </div>

          {/* SCREEN */}
          <div className="relative h-[380px] overflow-hidden bg-[#f7f3ea]">
  <img
    src={section.hero?.image}
    alt={`${section.heading} preview`}
    className="absolute inset-0 w-full h-full object-contain"
  />
</div>


          {/* CAPTION */}
          <div className="px-6 py-4 text-sm text-gray-600 border-t">
            {section.hero.caption}
          </div>
        </div>

        
      </div>

     

    </div>
  );
}

/* ================= BRAND FILM & CAMPAIGN ================= */
if (section.type === "campaign") {
  return (
    <div key={idx} className="max-w-7xl mx-auto px-6 mb-40">

     
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">
          {section.heading}
        </h3>
        <div className="w-40 h-[2px] bg-purple-500" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 mb-32 items-start">

        <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 border border-gray-200 shadow-lg relative">

         <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg bg-black relative">
  <video
     autoPlay loop playsInline muted
    poster={section.film?.poster}
    className="w-full h-[450px] object-cover"
  >
    <source src={section.film?.video} type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <div className="absolute bottom-4 left-6 text-sm text-white/80">
    “{section.film?.title}” Brand Film
  </div>
</div>


          <div className="absolute bottom-4 left-6 text-sm text-white/80">
            “{section.film.title}” Brand Film
          </div>
        </div>

        {/* FILM CONTENT */}
        <div>
          <p className="text-gray-600 leading-relaxed mb-6">
            {section.film.description}
          </p>

          <p className="text-gray-900 font-semibold leading-relaxed">
            {section.film.result}
          </p>
        </div>
      </div>

      {/* MARKETING COLLATERAL */}
      {/* <div className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">
          {section.collateral.heading}
        </h3>
        <div className="w-40 h-[2px] bg-purple-500" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {section.collateral.items.map((item: string, i: number) => (
          <div
            key={i}
            className="rounded-2xl bg-gray-50 border border-gray-200 h-[140px] flex items-center justify-center text-sm font-medium text-gray-700"
          >
            {item}
          </div>
        ))}
      </div> */}

    </div>
  );
}


      return null;
    })}
</section>

{/* ================= WHAT CHANGED ================= */}
<section className="py-2 bg-white">

  {/* HEADER */}
  <div className="text-center max-w-3xl mx-auto mb-24">
    <h2 className="text-4xl font-semibold text-gray-900 mb-4">
      {caseStudy.impact?.title}
    </h2>

    <div className="w-12 h-[3px] mx-auto bg-purple-500 rounded-full mb-6" />

    <p className="text-lg text-gray-600 leading-relaxed">
      {caseStudy.impact?.subtitle}
    </p>
  </div>

  {/* GRID */}
  <div className="max-w-7xl mx-auto px-6 justify-center flex ">

    {caseStudy.impact?.blocks.map(
      (
        block: { heading: string; items: string[] },
        idx: number
      ) => (
        <div
          key={idx}
          className={`rounded-2xl border border-gray-200 bg-white p-8 ${
            idx === 3 ? "lg:col-span-1 md:col-span-2" : ""
          }`}
        >
          <h3 className="text-lg font-semibold text-purple-600 mb-6">
            {block.heading}
          </h3>

          <ul className="space-y-4">
            {block.items.map((item, i) => (
              <li key={i} className="flex gap-3 text-gray-700 leading-relaxed">
                <span className="text-green-500 mt-1">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )
    )}

  </div>
</section>




      

      {/* ================= TESTIMONIAL ================= */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-16">
          <p className="italic text-lg mb-10">
            “{caseStudy.testimonial.quote}”
          </p>
          <p className="font-semibold">
            {caseStudy.testimonial.author}
          </p>
          <p className="text-sm text-gray-500">
            {caseStudy.testimonial.role}
          </p>
        </div>
      </section>

      {/* ================= MORE WORK ================= */}
{/* <section className="py-2 bg-white">

  <div className="text-center mb-24">
    <h2 className="text-4xl font-semibold text-gray-900 mb-4">
      {caseStudy.moreWork?.title}
    </h2>
    <div className="w-14 h-[3px] mx-auto bg-gradient-to-r from-purple-500 to-purple-500 rounded-full" />
  </div>

 
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

  {caseStudy.moreWork?.items.map(
    (
      item: {
        slug: string;
        category: string;
        emoji: string;
        title: string;
        description: string;
      },
      idx: number
    ) => (
      <div
        key={idx}
        className="rounded-3xl bg-white shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition mb-20"
      >

     
        <div className="h-[200px] w-full overflow-hidden bg-black ">
          <video
            src={VIDEOS_BY_SLUG[item.slug]}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

      
        <div className="p-8">
          <span className="inline-block mb-4 px-4 py-1 rounded-full text-xs font-semibold tracking-wide text-purple-600 bg-purple-100 uppercase">
            {item.category}
          </span>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            {item.title}
          </h3>

          <p className="text-gray-600 leading-relaxed mb-6">
            {item.description}
          </p>

          <a
            href={`/case-studies/${item.slug}`}
            className="inline-flex items-center gap-2 text-purple-600 font-medium hover:underline"
          >
            View Case Study <span>→</span>
          </a>
        </div>

      </div>
    )
  )}

</div>



  
</section> */}

{/* ================= FINAL CTA ================= */}
<section className="relative py-40 overflow-hidden">

  {/* BACKGROUND GRADIENT */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#3a2a22] via-[#1b1f23] to-[#0c1a23]" />

  {/* CONTENT */}
  <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">

    <h2 className="text-4xl md:text-5xl font-semibold mb-6">
      Ready to Transform Your Brand?
    </h2>

    <p className="text-lg text-white/80 leading-relaxed mb-12">
      Let’s build a brand that doesn’t just compete—it leads.
      Strategic clarity meets creative excellence.
    </p>

    {/* CTA BUTTON */}
   <Link
  to="/contact"
  className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-white text-gray-900 font-semibold text-lg hover:bg-gray-100 transition"
>
  Let’s Talk About Your Brand <span className="ml-2">→</span>
</Link>


  </div>
</section>



    </div>
  );
}

function Meta({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div>
      <p className="uppercase tracking-widest text-gray-400 mb-1">
        {label}
      </p>
      <p
        className={`font-medium ${
          highlight ? "text-orange-500" : "text-gray-900"
        }`}
      >
        {value}
      </p>
    </div>
  );
}




