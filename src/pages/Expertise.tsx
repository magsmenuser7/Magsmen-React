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
    title: "Brand Consulting",
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
    title: "Personal Brand Consulting",
     slug: "/personal-brand-consulting",
    description:
      " We help individuals identify the right platforms for their goals and craft a powerful presence that connects with the right audience. Don’t just build a brand, build influence.",
    leftItems: ["Positioning", "Narrative", "Platform Strategy"],
    rightItems: ["Visual Identity", "Brand Systems", "Growth Enablement"],
    image:
      "public/assets/services/personal_brand_consulting.jpg",
     
      
  },
  {
    id: "corporate",
    number: "03",
    title: "Corporate Rebranding",
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
    title: "Brand Expresso",
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
    title: "Brand Creation",
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
    title: "Link Fluence",
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
    title: "Launchpad",
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

      {/* new layout 1 */}

      {/* <section className="w-full bg-white text-black py-24 px-6 md:px-16">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

   
    <div className="md:sticky md:top-32 h-fit">
      <h2 className="text-4xl md:text-6xl font-light leading-tight">
        What we<br />
        <span className="font-bold">actually do</span>
      </h2>

      <p className="mt-6 text-lg text-gray-600 max-w-md">
        We don’t offer services. We build systems that make your brand impossible to ignore.
      </p>
    </div>

    
    <div className="space-y-20">
      {services.map((service, index) => (
        <div
          key={service.id}
          className="group border-l-2 border-black/20 pl-8 hover:border-purple-600 transition-all duration-300"
        >
         
          <span className="text-sm text-gray-400 mb-4 block">
            0{index + 1}
          </span>

         
          <h3 className="text-3xl md:text-4xl font-light mb-4 group-hover:text-purple-600 transition">
            {service.title}
          </h3>

         
          <p className="text-lg text-gray-700 mb-6 max-w-lg">
            {service.description}
          </p>

         
          <div className="grid grid-cols-2 gap-6 text-sm text-gray-600">
            <ul className="space-y-2">
              {service.leftItems.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>

            <ul className="space-y-2">
              {service.rightItems.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>

         
          <button
            onClick={() => navigate(service.slug)}
            className="mt-6 inline-block text-sm font-medium text-purple-600 border-b border-transparent hover:border-purple-600 transition"
          >
            Inquire now →
          </button>
        </div>
      ))}
    </div>
  </div>
</section> */}

{/* new lyout 2 */}

{/* <section className="w-full bg-white text-black py-28 px-6 md:px-16">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">

   
    <div className="md:sticky md:top-32 h-fit">
      <h2 className="text-4xl md:text-5xl font-light leading-tight tracking-tight">
        What we<br />
        <span className="font-medium">actually do</span>
      </h2>

      <p className="mt-6 text-base md:text-lg text-neutral-500 max-w-sm leading-relaxed">
        We design thoughtful systems that shape how your brand is perceived, experienced, and remembered.
      </p>
    </div>

   
    <div className="flex flex-col divide-y divide-neutral-200">
      {services.map((service, index) => (
        <div
          key={service.id}
          className="py-12 group transition-all duration-300"
        >
        
          <div className="flex items-start justify-between mb-6">
            <h3 className="text-2xl md:text-3xl font-light tracking-tight group-hover:text-neutral-900 transition">
              {service.title}
            </h3>

            <span className="text-sm text-neutral-400">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          
          <p className="text-base md:text-lg text-neutral-600 leading-relaxed max-w-xl mb-8">
            {service.description}
          </p>

         
          <div className="grid grid-cols-2 gap-8 text-sm text-neutral-500">
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
            className="mt-8 text-sm text-neutral-700 relative inline-block"
          >
            <span className="after:block after:h-[1px] after:bg-neutral-400 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100">
              Inquire now
            </span>
          </button>
        </div>
      ))}
    </div>
  </div>
</section> */}

{/* <section className="w-full bg-white text-black py-24 px-6 md:px-16">
  <div className="max-w-7xl mx-auto">

   
    <div className="mb-16 max-w-2xl">
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
        Our Services
      </h2>
      <p className="text-base md:text-lg text-gray-600 leading-relaxed">
        We provide structured, strategic solutions to help brands grow with clarity, consistency, and impact.
      </p>
    </div>

   
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

      {services.map((service, index) => (
        <div
  key={service.id}
  className="group border border-gray-200 rounded-xl p-8 hover:shadow-sm transition duration-300"
>
  
  <div className="flex justify-between items-start mb-6">
    <h3 className="text-xl md:text-2xl font-medium transition-colors duration-300 group-hover:text-purple-600">
      {service.title}
    </h3>
    <span className="text-sm text-gray-400">
      {String(index + 1).padStart(2, "0")}
    </span>
  </div>

          
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            {service.description}
          </p>

         
          <div className="border-t border-gray-200 my-6"></div>

         
          <div className="grid grid-cols-2 gap-6 text-sm text-gray-500">
            <ul className="space-y-2">
              {service.leftItems.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>

            <ul className="space-y-2">
              {service.rightItems.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>

         
          <button
            onClick={() => navigate(service.slug)}
            className="mt-8 text-sm font-medium text-black hover:underline hover:text-purple-600 transition"
          >
            Inquire now
          </button>
        </div>
      ))}

    </div>
  </div>
</section> */}


    {/* existing layout */}
 <section className="w-full text-black px-6 md:px-16 py-24 mx-auto max-w-7xl">
        
       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {services.map((service) => (
            <div
              key={service.id}
              className="border-b border-black/40 pb-24"
            >
             
              <div className="flex justify-between items-start mb-10">
                <h1 className="text-3xl md:text-4xl font-extrathin tracking-tight leading-none">
                  {service.title.toUpperCase()}
                </h1>
                
              </div>

            
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








