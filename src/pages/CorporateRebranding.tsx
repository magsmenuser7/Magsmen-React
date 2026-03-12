import React, { useState, useEffect } from 'react';
import {
  ArrowLeft, RefreshCcw, BookOpen, Paintbrush, MessageSquare, Layers, Package, ClipboardList, Compass
} from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import corporaterebranding from '/assets/services/corporate_rebranding.jpg';

import magsmencorporaterebrandingconsultingservice from "/assets/services/magsmen-corporate-rebranding-consulting-service-850x400.mp4"


import zavainevideo from "/assets/works/zavaine-video.mp4"
import telugufoods from "/assets/works/telugu-foods.mp4"
import suryacolorsvideo from "/assets/works/surya-colors-video.mp4"


// Data for the Corporate Rebranding page
const serviceData = {
  details: {
    title: 'Corporate ',
    title_two: 'Rebranding',
    subtitle: 'Changing the way people see',
    heroDescription: ' We refresh and realign your brand to keep pace with evolving markets , refining what exists while strengthening what’s next.',
    features: [
      'Research on the rebranding opportunity and challenges for the brand',
      'Revamping the entire identity',
      'Rephrasing the entire brand voice',
      'Changing your brand inside out',
      'Packaging patterns and product patterns',
      'Brand stationery',
      'Revamped brand positioning'
    ]
  },
  animationIcon: <RefreshCcw className="w-24 h-24" />,
  gradient: 'from-black to-purple-600'
};

// Reusable component for the animated icon in the hero section
type AnimatedIconProps = {
  icon: React.ReactNode;
  gradient: string;
};

const AnimatedIcon: React.FC<AnimatedIconProps> = ({ icon, gradient }) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-full blur-xl opacity-30 animate-pulse`}></div>
      <div
        className={`relative bg-gradient-to-br ${gradient} p-8 rounded-full text-white transform transition-all duration-1000 ${
          isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
        }`}
      >
        {icon}
      </div>
      <div className="absolute -top-2 -right-2">
        <div className="w-4 h-4 bg-purple-400 rounded-full animate-ping"></div>
      </div>
    </div>
  );
};

const CorporateRebrandingPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/expertise');
  };




  return (
    <div className="min-h-screen  pt-16">
      {/* bg-gradient-to-br from-gray-200 to-white */}
      <div className="max-w-8xl mx-auto py-8 mt-4">
        {/* <button
                  onClick={handleBack}
                  className="flex items-center text-gray-600 hover:text-purple-600 ml-24 transition-all duration-300 mt-6  mb-8 group bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg"
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

      <h1 className="text-black md:text-6xl leading-relaxed max-w-xl ">
        {serviceData.details.heroDescription}
      </h1>
    </div>

   {/* RIGHT VISUAL (BRAND ELEMENT IMAGE) */}
<div className="flex justify-end items-end">
  <video
    src={magsmencorporaterebrandingconsultingservice}
    className="max-w-full max-h-[420px] object-contain"
    autoPlay
    loop
    muted
    playsInline
  />
</div>

  </div>
</section>



        {/* Features Section - Static Points */}
        <div className="bg-gray-200 shadow-xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">What's Included</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive solutions designed to deliver exceptional results and drive your success forward.
            </p>
          </div>
          <ul className="grid grid-cols-2 space-y-4 max-w-4xl mx-auto">
            {serviceData.details.features.map((point, index) => (
              <li key={index} className="flex items-start text-lg text-gray-800 space-x-3">
                <span className="flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>



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
 <div className="relative w-full h-full shadow-xl group overflow-hidden rounded-3xl">
      <video
        src={zavainevideo}
        className="w-full h-full object-contain"
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
          to="/case-studies/zavaine"
          className="text-white text-2xl font-semibold tracking-wide hover:underline"
        >
          zavaine
        </Link>
      </div>
    </div>


   
{/* video 2 */}
   <div className="relative shadow-xl group overflow-hidden rounded-3xl">
      <video
        src={telugufoods}
        className="w-full h-full object-contain"
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
          to="/case-studies/telugu-foods"
          className="text-white text-2xl font-semibold tracking-wide hover:underline"
        >
          Swetha Telugu Foods
        </Link>
      </div>
    </div>


        {/* video 3 */}
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


  </div>
</div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-black to-purple-900 p-12 text-center text-white relative overflow-hidden mb-[-35px]">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-transparent"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Brand?</h3>
            <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
              Let's discuss how our corporate rebranding services can help you achieve your goals and create lasting impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <button className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
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

export default CorporateRebrandingPage;