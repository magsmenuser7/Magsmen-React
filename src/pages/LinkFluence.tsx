import React, { useState, useEffect } from 'react';
import {
  ArrowLeft, ChevronDown, Edit, Users, Search, TrendingUp, MessageCircle
} from 'lucide-react';
import { useNavigate,Link} from 'react-router-dom';
import linkfluence from '/assets/services/linkfluence.jpg';


import LINKFLUENCEvideo from "/assets/services/LINK-FLUENCE.mp4" 
import suryacolorsvideo from "/assets/works/surya-colors-video.mp4"
import tdhrishika from "/assets/works/tdh-rishika.mp4"
import tenalidoublehorsevideo from "/assets/works/tenali-double-horse.mp4"



// Data for the Link Fluence page with features from the image
const serviceData = {
  details: {
    title: 'Link ',
    title_two: 'Fluence',
    subtitle: 'Strategic Networking & Influence Building',
    heroDescription: "Designed for top executives, LinkFluence builds a powerful LinkedIn presence that positions you as a credible, consistent thought leader.",
    features: [
      {
        name: 'Comprehensive Profile Optimization',
        icon: <Edit className="w-6 h-6" />,
        description: 'We fine-tune every aspect of your LinkedIn profile, ensuring you make an impactful first impression and reflect your personal brand.'
      },
      {
        name: 'Content Strategy',
        icon: <MessageCircle className="w-6 h-6" />,
        description: 'We create a custom content plan aligned with your objectives, posting frequency, and style, helping you engage your audience with powerful storytelling and thought leadership.'
      },
      {
        name: 'Strategic Networking & Relationship Building',
        icon: <Users className="w-6 h-6" />,
        description: 'Our approach focuses on building relationships that drive long-term influence and professional growth.'
      },
      {
        name: 'Positioning Your Thought Leadership',
        icon: <TrendingUp className="w-6 h-6" />,
        description: 'Using our deep industry expertise, we craft content that resonates with your target audience, elevating your positioning as a thought leader within your niche.'
      },
      {
        name: 'Performance Monitoring & Optimization',
        icon: <Search className="w-6 h-6" />,
        description: 'We track your LinkedIn performance and engagement metrics, making necessary adjustments to your content strategy to keep your voice relevant and effective in the ever-evolving digital landscape.'
      }
    ]
  },
  animationIcon: <Link className="w-24 h-24" />,
  gradient: 'from-purple-900 to-blue-500' // Custom gradient for this service
};

// Reusable component for the collapsible features section
interface Feature {
  name: string;
  icon: React.ReactNode;
  description: string;
}

const CollapsibleFeature: React.FC<{ feature: Feature }> = ({ feature }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:border-purple-300 hover:shadow-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-200"
      >
        <div className="flex items-center space-x-4">
          <div className="text-purple-600 bg-purple-100 p-2 rounded-lg">
            {feature.icon}
          </div>
          <h3 className="text-lg font-semibold text-black">{feature.name}</h3>
        </div>
        <div className="text-purple-600 transition-transform duration-300" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-6 pt-0 bg-gray-50">
          <p className="text-gray-700 leading-relaxed">{feature.description}</p>
        </div>
      </div>
    </div>
  );
};

// Reusable component for the animated icon in the hero section
const AnimatedIcon: React.FC<{ icon: React.ReactNode; gradient: string }> = ({ icon, gradient }) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-full blur-xl opacity-30 animate-pulse`}></div>
      <div
        className={`relative bg-gradient-to-br ${gradient} p-8 rounded-full text-white transform transition-all duration-1000 ${isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-180'}`}
      >
        {icon}
      </div>
      <div className="absolute -top-2 -right-2">
        <div className="w-4 h-4 bg-purple-400 rounded-full animate-ping"></div>
      </div>
    </div>
  );
};

// const LinkFluencePage = () => {
//   const handleBack = () => {
//     window.history.back();
//   };



  const LinkFluencePage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/expertise');
  };

  return (
    <div className="min-h-screen  py-16">
      {/* bg-gradient-to-br from-gray-200 to-white  */}
      <div className="max-w-8xl mx-auto py-8 mt-4">
        {/* <button
          onClick={handleBack}
          className="flex items-center text-gray-600 mt-5 ml-24 hover:text-purple-600 transition-all duration-300 mb-8 group bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Services
        </button> */}

        



{/* REDESIGNED MIDDLE SECTION */}
<section className="w-full flex justify-center py-24">
  <div className="w-[80%] grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
    
    {/* LEFT CONTENT */}
    <div>
      <h1 className="text-4xl lg:text-6xl text-black mb-6 leading-tight">
        {/* {serviceData.details.title}{" "} */}
        {/* <span className="font-thin opacity-80">
          {serviceData.details.title }{serviceData.details.title_two}
        </span> */}
      </h1>

      <h1 className="text-black md:text-6xl leading-relaxed max-w-xl">
        {serviceData.details.heroDescription}
      </h1>
    </div>

   {/* RIGHT VISUAL (BRAND ELEMENT IMAGE) */}
<div className="flex justify-end items-end">
  <video
    src={LINKFLUENCEvideo}
    className="max-w-full max-h-[420px] object-contain"
    autoPlay
    loop
    muted
    playsInline
  />
</div>

  </div>
</section>


       



{/* WHAT'S INCLUDED – STICKY LEFT / SCROLL RIGHT */}
<section className="w-full bg-gray-200 py-24">
  <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-40">

    {/* LEFT — STICKY INTRO */}
    <div className="lg:col-span-1">
      <div className="lg:sticky lg:top-32">
        <h2 className="text-3xl lg:text-8xl font-light text-black mb-6">
          What's Included
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed max-w-sm">
          Comprehensive solutions designed to deliver exceptional results and
          drive your success forward.
        </p>
      </div>
    </div>

    {/* RIGHT — SCROLLING FEATURES */}
    <div className="lg:col-span-2 space-y-8">
      {serviceData.details.features.map((feature, index) => (
        <div
          key={index}
          className=" border-gray-200 rounded-xl p-2 hover:border-purple-500 transition-all duration-300"
        >
          <CollapsibleFeature feature={feature} />
        </div>
      ))}
    </div>

  </div>
</section>




<div className="py-28 bg-gray-150">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-6 mx-auto items-start justify-center max-w-7xl px-4 md:px-0">
     {/* TEXT BLOCK */}
    <div>
      <h1 className="text-5xl md:text-8xl font-bold text-black pl-5">
        Related <br /> <span className="font-thin">Work</span>
      </h1>

      <p className="mt-6 pl-5">
       We explore how strategy, identity, and execution come together to shape meaningful brands. From positioning frameworks to visual systems, this work reflects our approach to building brands with clarity and long-term intent.
      </p>
    </div>


        {/* video 1 */}
 <div className="relative shadow-xl group overflow-hidden rounded-3xl">
      <video
        src={suryacolorsvideo}
        className="object-contain"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Smooth overlay animation */}
      <div
        className="
          absolute inset-0
          bg-black/60
          transform -translate-x-full opacity-0
          group-hover:translate-x-0 group-hover:opacity-100
          transition-all duration-700
          ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
          flex items-center justify-center
          will-change-transform
        "
      >
        <Link
          to="/case-studies/surya-colors"
          className="text-white text-2xl font-semibold tracking-wide hover:underline"
        >
          Surya Colors
        </Link>
      </div>
    </div>


   
{/* video 2 */}
   <div className="relative shadow-xl group overflow-hidden rounded-3xl">
      <video
        src={tdhrishika}
        className=" object-contain"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Smooth overlay animation */}
      <div
        className="
          absolute inset-0
          bg-black/60
          transform -translate-x-full opacity-0
          group-hover:translate-x-0 group-hover:opacity-100
          transition-all duration-700
          ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
          flex items-center justify-center
          will-change-transform
        "
      >
        <Link
          to="/case-studies/tenali-double-horse"
          className="text-white text-2xl font-semibold tracking-wide hover:underline"
        >
          TDH Rishika
        </Link>
      </div>
    </div>


        {/* video 3 */}
 <div className="relative shadow-xl group overflow-hidden rounded-3xl">
      <video
        src={tenalidoublehorsevideo}
        className="object-contain"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Smooth overlay animation */}
      <div
        className="
          absolute inset-0
          bg-black/60
          transform -translate-x-full opacity-0
          group-hover:translate-x-0 group-hover:opacity-100
          transition-all duration-700
          ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
          flex items-center justify-center
          will-change-transform
        "
      >
        <Link
          to="/case-studies/tenali-double-horse"
          className="text-white text-2xl font-semibold tracking-wide hover:underline"
        >
          Tenali Double Horse
        </Link>
      </div>
    </div>


  </div>
</div>

        

        {/* CTA Section */}
       <div className="bg-gradient-to-r from-black to-purple-900 p-12 text-center text-white relative overflow-hidden mb-[-99px]">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-transparent"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 -translate-y-32 translate-x-32"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Brand?</h3>
            <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
              Let's discuss how our brand consulting services can help you achieve your goals and create lasting impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <button className="bg-white text-black px-8 py-4 font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Schedule Free Consultation
              </button> */}
              <button 
              onClick={() => navigate('/case-studies')}
              className="border-2 border-white text-white px-8 py-4 font-semibold hover:bg-white hover:text-black transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default LinkFluencePage;













// import React, { useState } from 'react';
// import { ArrowLeft, Link, Users, Star, Target, MessageSquare, Award, TrendingUp, Zap, Eye, ChevronDown } from 'lucide-react';

// interface LinkFluenceProps {
//   onBack: () => void;
// }

// const features = [
//   {
//     name: 'Network Mapping',
//     icon: <Users className="w-5 h-5" />,
//     description: 'Analyze and optimize your current professional network for maximum impact.'
//   },
//   {
//     name: 'Influence Strategy',
//     icon: <Star className="w-5 h-5" />,
//     description: 'Develop systematic approach to building industry influence and thought leadership.'
//   },
//   {
//     name: 'Strategic Partnerships',
//     icon: <Target className="w-5 h-5" />,
//     description: 'Identify and cultivate key partnership opportunities for mutual growth.'
//   },
//   {
//     name: 'Content Collaboration',
//     icon: <MessageSquare className="w-5 h-5" />,
//     description: 'Create strategic content partnerships that amplify your reach and credibility.'
//   },
//   {
//     name: 'Event Networking',
//     icon: <Award className="w-5 h-5" />,
//     description: 'Maximize networking opportunities at industry events and conferences.'
//   },
//   {
//     name: 'Digital Community Building',
//     icon: <TrendingUp className="w-5 h-5" />,
//     description: 'Build and nurture online communities around your expertise and interests.'
//   },
//   {
//     name: 'Referral System Development',
//     icon: <Zap className="w-5 h-5" />,
//     description: 'Create systems for generating and managing professional referrals.'
//   },
//   {
//     name: 'Relationship Maintenance',
//     icon: <Eye className="w-5 h-5" />,
//     description: 'Ongoing strategies for maintaining and deepening professional relationships.'
//   }
// ];

// const CollapsibleFeature: React.FC<{ feature: any; index: number }> = ({ feature, index }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:border-purple-300 hover:shadow-md">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="w-full p-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-200"
//       >
//         <div className="flex items-center space-x-3">
//           <div className="text-purple-600 bg-purple-100 p-2 rounded-lg">
//             {feature.icon}
//           </div>
//           <h3 className="text-base font-semibold text-black">{feature.name}</h3>
//         </div>
//         <div className="text-purple-600 transition-transform duration-300" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
//           <ChevronDown className="w-4 h-4" />
//         </div>
//       </button>
//       <div 
//         className={`overflow-hidden transition-all duration-300 ease-in-out ${
//           isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
//         }`}
//       >
//         <div className="p-4 pt-0 bg-gray-50">
//           <p className="text-gray-700 text-sm leading-relaxed">{feature.description}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// const LinkFluence: React.FC<LinkFluenceProps> = ({ onBack }) => {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="max-w-4xl mx-auto px-6 py-8">
//         {/* Back Button */}
//         <button
//           onClick={onBack}
//           className="flex items-center text-gray-600 hover:text-purple-600 transition-all duration-300 mb-6 group"
//         >
//           <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
//           Back to Services
//         </button>

//         {/* Hero Section */}
//         <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
//           <div className="grid lg:grid-cols-2 gap-0">
//             {/* Left Side - Purple Section with Icon */}
//             <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-12 flex items-center justify-center relative overflow-hidden">
//               <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent"></div>
//               <div className="absolute top-0 right-0 w-20 h-20 bg-purple-400/20 rounded-full -translate-y-10 translate-x-10"></div>
//               <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8"></div>
              
//               {/* Animated Icon */}
//               <div className="relative flex items-center justify-center">
//                 <div className="absolute w-32 h-32 border-4 border-purple-400/30 rounded-full animate-spin-slow"></div>
//                 <div className="absolute w-24 h-24 border-2 border-purple-300/50 rounded-full animate-pulse"></div>
//                 <div className="relative w-16 h-16 bg-white rounded-full flex items-center justify-center text-purple-600">
//                   <Link className="w-8 h-8" />
//                 </div>
//                 <div className="absolute top-2 right-2 w-2 h-2 bg-purple-300 rounded-full animate-ping"></div>
//                 <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-purple-200 rounded-full animate-pulse"></div>
//               </div>
//             </div>

//             {/* Right Side - Content */}
//             <div className="p-8">
//               <h1 className="text-3xl font-bold text-black mb-2">
//                 Link Fluence
//               </h1>
//               <p className="text-purple-600 font-medium mb-4 text-lg">
//                 Strategic Networking & Influence Expansion
//               </p>
//               <p className="text-gray-700 mb-6 leading-relaxed">
//                 Strategic networking and influence building to expand your reach and create meaningful connections. Build a powerful network that accelerates your success and opens new opportunities.
//               </p>
              
//               <div className="flex flex-col sm:flex-row gap-3">
//                 <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-all duration-300 transform hover:scale-105">
//                   Get Started Today
//                 </button>
//                 <button className="border border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-medium hover:bg-purple-600 hover:text-white transition-all duration-300">
//                   Learn More
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* What's Included Section */}
//         <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
//           <div className="text-center mb-8">
//             <h2 className="text-2xl font-bold text-black mb-2">What's Included</h2>
//             <p className="text-gray-600">
//               Comprehensive solutions designed to deliver exceptional results and drive your success forward.
//             </p>
//           </div>

//           <div className="grid gap-4">
//             {features.map((feature, index) => (
//               <CollapsibleFeature key={index} feature={feature} index={index} />
//             ))}
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-8 text-center text-white relative overflow-hidden">
//           <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent"></div>
//           <div className="absolute top-0 right-0 w-32 h-32 bg-purple-400/20 rounded-full -translate-y-16 translate-x-16"></div>
//           <div className="relative z-10">
//             <h3 className="text-2xl font-bold mb-3">Ready to Transform Your Brand?</h3>
//             <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
//               Let's discuss how our Link Fluence services can help you achieve your goals and create lasting impact.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-3 justify-center">
//               <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300">
//                 Schedule Free Consultation
//               </button>
//               <button className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-all duration-300">
//                 View Case Studies
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LinkFluence;