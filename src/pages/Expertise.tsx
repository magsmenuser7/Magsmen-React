import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { section, style } from "framer-motion/client";
import MainFileWhitePage from "/assets/banners/Main-File-White-Page.jpg";
import servicebannertwo from "/assets/banners/services-banner.png";
import monogramlatest from "/assets/banners/monogram-latest.png";
import React from "react";
import { useNavigate } from "react-router-dom";


import brandconsultingbanner from '/assets/services/brand-consulting-banner.jpg';
import personalbrandconsultingbanner from '/assets/services/personal-brand-consulting-banner.jpg';
import corporaterebrandingbanner from '/assets/services/corporate-rebranding-banner.jpg';
import brandexpressobanner from '/assets/services/brand-expresso-banner.jpg';
import brandcreationbanner from '/assets/services/brand-creation-banner.jpg';
import linkfluencebanner from '/assets/services/link-fluence-banner.jpg';
import launchpadbanner from '/assets/services/launchpad-banner.jpg';


type Service = {
  id: string;
  number: string;
  title: string;
  description: string;
  leftItems: string[];
  rightItems: string[];
  image: string;
  slug: string;
};




const services: Service[] = [
  {
    id: "branding",
    number: "01",
    title: "brand consulting",
     slug: "/brand-consulting",
    description:
      "We partner with brands as strategic allies, blending sharp thinking with creative firepower to build strong, scalable foundations.",
    leftItems: [
      "Research & Insights",
      "Brand Positioning",
      "Strategic Workshops",
    ],
    rightItems: [
      "Vision & Purpose",
      "Strategic Narrative",
      "Brand Architecture",
    ],
    image:
      "public/assets/services/brand_consulting.jpg",
     
      
  },
  {
    id: "personal",
    number: "02",
    title: "personal brand consulting",
     slug: "/personal-brand-consulting",
    description:
      " We help individuals identify the right platforms for their goals and craft a powerful presence that connects with the right audience. Don’t just build a brand — build influence.",
    leftItems: ["Positioning", "Narrative", "Platform Strategy"],
    rightItems: ["Visual Identity", "Brand Systems", "Growth Enablement"],
    image:
      "public/assets/services/personal_brand_consulting.jpg",
     
      
  },
  {
    id: "corporate",
    number: "03",
    title: "corporate rebranding",
     slug: "/corporate-rebranding",
    description:
      "We refresh and realign your brand to keep pace with evolving markets , refining what exists while strengthening what’s next.",
    leftItems: ["Brand Audit", "Identity Evolution", "Narrative Alignment"],
    rightItems: ["Architecture", "Naming", "Brand Governance"],
    image:
      "public/assets/services/corporate_rebranding.jpg",
     
      
  },
  {
    id: "expresso",
    number: "04",
    title: "brand expresso",
       slug: "/brand-expresso",
    description:
      "Re-energize your brand in 90 days. We refine your identity, sharpen your presence, and prepare you for a confident, comeback-ready launch.",
    leftItems: ["Rapid Brand Audit", "Identity Refresh", "Core Messaging & Tone"],
    rightItems: ["Visual System Optimisation", "Brand Guidelines", "Launch-Ready Brand Assets"],
    image:
      "public/assets/services/brand_expresso.jpg",
   
      
  },
  {
    id: "creation",
    number: "05",
    title: "brand creation",
     slug: "/brand-creation",
    description:
      "An idea to a lasting impact in 90 days, we shape distinctive brands with thoughtful strategy and a tailored approach built around your vision.",
    leftItems: ["Brand Strategy & Positioning", "Naming & Brand Foundations", "Visual Identity Design"],
    rightItems: ["Tone of Voice & Messaging", "Brand Systems & Guidelines", "Launch-Ready Brand Assets"],
    image:
      "public/assets/services/barnd_creation.jpg",
     
      
  },
  {
    id: "linkfluence",
    number: "06",
    title: "link fluence",
    slug: "/link-fluence",
    description:
      "Designed for top executives, LinkFluence builds a powerful LinkedIn presence that positions you as a credible, consistent thought leader.",
    leftItems: ["LinkedIn Profile Optimisation", "Personal Brand Positioning", "Thought Leadership Strategy"],
    rightItems: ["Content Pillars & Narrative", "Tone of Voice & Messaging", "Visual Direction for LinkedIn"],
    image:
      "public/assets/services/linkfluence.jpg",
      
      
   },
   {
    id: "launch",
    number: "07",
    title: "launchpad",
      slug: "/launchpad",
    description:
      "We craft brands with clarity, confidence, and cohesion,  built to stand out today and scale tomorrow.",
    leftItems: ["Strategy", "Positioning", "Identity"],
    rightItems: ["Voice", "Systems", "Launch Toolkit"],
    image:
      "public/assets/services/launchpad.jpg",
  
  },
];

const serviceRouteMap: Record<string, string> = {
  branding: "/brand-consulting",
  personal: "/personal-brand-consulting",
  corporate: "/corporate-rebranding",
  expresso: "/brand-expresso",
  creation: "/brand-creation",
  linkfluence: "/link-fluence",
  launch: "/launchpad",
};

export default function ServicesPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-white">

      {/* HERO */}
      <section
        className="relative min-h-[530px] bg-gray-200 bg-cover bg-center flex justify-center items-center h-full text-center"
      >
        <div className="absolute max-w-6xl mx-auto w-full px-6 ">
          <h1 className="text-4xl md:text-6xl leading-tight md:leading-none">
            From figuring out your <span className="font-bold"> WHO </span> to flexing your <span className="font-bold"> WOW </span>we build brands that don’t just exist they stand out, scale up, and stick around.
          </h1>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="w-full text-black px-6 md:px-16 py-24 mx-auto max-w-7xl">
        
        {/* GRID WRAPPER */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {services.map((service) => (
            <div
              key={service.id}
              className="border-b border-black/40 pb-24"
            >
              {/* Top row */}
              <div className="flex justify-between items-start mb-10">
                <h1 className="text-3xl md:text-4xl font-extrathin tracking-tight leading-none">
                  {service.title.toUpperCase()}
                </h1>
                {/* <span className="text-xl md:text-3xl font-medium text-purple-600">
                  {service.number}
                </span> */}
              </div>

              {/* Content */}
              <div>
                <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
                  {service.description}
                </p>

                <div className="grid grid-cols-2 gap-6 text-sm md:text-base">
                  <ul className="space-y-2">
                    {service.leftItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <ul className="space-y-2">
                    {service.rightItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => navigate(service.slug)}
                  className="mt-10 border-b border-black pb-1 text-sm font-medium hover:opacity-70 transition text-purple-600"
                >
                  Inquire now
                </button>

                {/* Image */}
                {/* <div className="w-full h-[300px] md:h-[350px] bg-black/5 overflow-hidden mt-10">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}





// export default function ServicesPage() {

//   const navigate = useNavigate();
//   return (
//     <div className="min-h-screen w-full bg-white">
//       {/* HERO */}
//       <section
//         className="relative min-h-[530px] bg-gray-200 bg-cover bg-center flex justify-center items-center h-full text-center"

//         >
//         <div className="absolute max-w-6xl mx-auto w-full px-6 ">
         
//           <h1 className="text-4xl md:text-6xl leading-tight md:leading-none">From identity to execution, we build brands that stand out, scale, and stay unforgettable.</h1>
           
//           </div>
//         </section>

//       {/* CARDS LIST */}
//       <section className="w-full bg-[#f5f5f4] text-black">
//       {services.map((service) => (
//         <div
//           key={service.id}
//           className="border-b border-black/10 px-6 md:px-16 py-24"
//         >
//           {/* Top row */}
//           <div className="flex justify-between items-start mb-16">
//             <h1 className="text-4xl md:text-6xl font-extrathin tracking-tight leading-none ">
//               {service.title.toUpperCase()}
//             </h1>

//             <span className="text-xl md:text-5xl font-medium text-purple-600">
//               {service.number}
//             </span>
//           </div>

//           {/* Content */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
//             {/* Left */}
//             <div>
//               <p className="text-xl md:text-2xl leading-relaxed mb-12 max-w-xl">
//                 {service.description}
//               </p>

//               <div className="grid grid-cols-2 gap-8 text-sm md:text-base">
//                 <ul className="space-y-2">
//                   {service.leftItems.map((item) => (
//                     <li key={item}>{item}</li>
//                   ))}
//                 </ul>

//                 <ul className="space-y-2">
//                   {service.rightItems.map((item) => (
//                     <li key={item}>{item}</li>
//                   ))}
//                 </ul>
//               </div>

//   <button
//   onClick={() => navigate(service.slug)}
//   className="mt-10 border-b border-black pb-1 text-sm font-medium hover:opacity-70 transition text-purple-600"
// >
//   Inquire now
// </button>

//             </div>

//             {/* Right image */}
//             <div className="w-full h-[420px] bg-black/5 overflow-hidden">
//               <img
//                 src={service.image}
//                 alt={service.title}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       ))}
//     </section>

//   </div>
//   )};








