import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Award,ChevronUp,ChevronDown, Users, Target, TrendingUp, CheckCircle, Star, Link, ChevronRight, Eye, Handshake, Rocket, Sparkles, Trophy } from 'lucide-react';
import aboutbackgroundimage from '/assets/banners/888787834.jpeg';

import telugufoodstestimonial from '/assets/testimonials/telugu-foods.png'
import xxxtestimonial from '/assets/testimonials/xxx.png'
import vsbtestimonial from '/assets/testimonials/homepage-testimonial-vsb-168-150.png'
import bhramaratestimonial from '/assets/testimonials/bhramara.png'
import sumatestimonial from '/assets/testimonials/suma.png'
import tenalidoublehorsetestimonial from '/assets/testimonials/tenali-double-horse-200x100.png'
import getstartedimage from "/assets/testimonials/getstartted-image.jpg";
import monogramlatestlogo from "/assets/banners/monogram-latest.png";
import servicebrand from "/assets/banners/service-brand.png";
import brandconsulting from "/assets/services/brand-consulting.png";
import award1 from '/assets/awards/awards1.png'
import award2 from '/assets/awards/awards2.png'
import award3 from '/assets/awards/awards3.png'
import aboutimage from '/assets/banners/aboutimage.png';


import magsmenSweatTeluguFoods from '/assets/Telugu-foods.jpg';
import magsmenColors from '/assets/magsmen-homepage-clients-colors-168x168.png';
import magsmenTenaliDoubleHorse from '/assets/magsmen-homepage-clients-tenalidoublehorse-168x168.png';
import magsmenTriplexxx from '/assets/magsmen-homepage-clients-triplexxx-168x168.png';
import magsmenVsb from '/assets/magsmen-homepage-clients-vsb-168x168.png';
import sumaFilmyArts from '/assets/suma-filmy-arts.png';
import instantFoods from '/assets/34.png';
import sumaKanakala from '/assets/suma-kanakala.png';
import cargil from '/assets/cargil.png';
import magsmenZavane from '/assets/magsmen-homepage-clients-zavane-168x168.png';
import logo4 from '/assets/logo4.png';
import magsenJayalakshmi from '/assets/magsen-our-partner-jayalakshmi-168x168.png';
import pronted from '/assets/pronted.png';
import chakrasiddh from '/assets/chakrasiddh.png';
import rootcapLion from '/assets/magsen-our-partner-rootcap-lion-168x168.png';
import rootcapLogo from '/assets/magsen-our-partner-rootcap-logo-168x168.png';
import magsenMvrLogo from '/assets/magsen-our-partner-mvr-logo-168x168.png';
import logo6 from '/assets/6.png';
import bdLogo1 from '/assets/BD-Logo-1.png';
import karumaunchi from '/assets/17.png';
import greatindia from '/assets/12.png';
import siri from '/assets/31.png';
import crown from '/assets/8.png';
import pemmasaniAssociates from '/assets/27.png';
import jayacottonProducts from '/assets/magsmen-homepage-clients-jayacotton-168x168.png';
import manna from '/assets/21.png';
import theBox from '/assets/the-box.png';
import natureimage from '/assets/NATURE-IMAGE-TWO.png';
import magsmentelugufoods from '/assets/Telugu-foods.jpg'
import magsmensuryacolors from '/assets/Surya-Colours.jpg'
import magsmentdhrishika from '/assets/tdh-rishika.png'
import magsmentriplex from '/assets/Triplex.jpg'
import magsmenvsb from '/assets/VSB.png'
import magsmenzavaine from '/assets/Zavaiine.jpg'
import hyperpersonalizationcraftingbrandexperiences from '/assets/blogs/hyper-personalization-crafting-brand-experiences-that-speak-to-gen-zs-individuality.jpg'
import thefutureofbrandingtrendsshapingthenextdecade from '/assets/blogs/the-future-of-branding-trends-shaping-the-next-decade.jpg'
import thebrandjourneyguidingstartupsfromideatoiconic from '/assets/blogs/the-brand-journey-guiding-startups-from-idea-to-iconic.jpg'
import bannerone from "/assets/banners/banner-one1.png";
import bannertwo from "/assets/banners/banner-two.png";
import bannerfive from "/assets/banners/banner-five.jpeg";
import bannersix from "/assets/banners/banner-six.jpeg";
import bannerseven from "/assets/banners/banner-seven.jpeg";
import { image } from 'framer-motion/client';
import artbliss from '/assets/5.png'
import ssvbuilders from '/assets/2.png'
import apcotton from '/assets/3.png'
import arjunsaiesports from '/assets/4.png'
import coastal from '/assets/7.png'
import jsolutionsa from '/assets/9.png'
import goldencharriot from '/assets/10.png'
import gowrishankaragencies from '/assets/11.png'
import happyhome from '/assets/13.png'
import ideabox from '/assets/14.png'
import integrityglobalservices from '/assets/15.png'
import kamadhenuuniforms from '/assets/16.png'
import kiroula from '/assets/18.png'
import kothamasdentalcare from '/assets/19.png'
import lakshimisrinivasjewellery from '/assets/20.png'
import maneathesaloon from '/assets/21.png'
import manoharam from '/assets/22.png'
import navyagrand from '/assets/23.png'
import nikithmarketing from '/assets/24.png'
import nut from '/assets/25.png'
import pangea from '/assets/26.png'
import pharmairos from '/assets/28.png'
import sahajadryfruits from '/assets/29.png'
import pkprimestudios from '/assets/30.png'
import sikharanirman from '/assets/32.png'
import thinkbiz from '/assets/36.png'
import tufftrom from '/assets/38.png'
import vignatafertility from '/assets/39.png'
import vihasdesignstudio from '/assets/40.png'
import dhruthihealthcare from '/assets/dhruthi-logo.png'
import workmen from '/assets/logo2.png'
import ninteenbuildersdevelopers from '/assets/logo4.png'
import rootcap from '/assets/magsen-our-partner-rootcap-logo-168x168.png'
import suparnaassociates from '/assets/magsen-our-partner-rootcap-suparna-168x168.png'
import psk from '/assets/psk-logo-copy.png'
import bhramaratownships from '/assets/works/bhramara.png'
import lvlup from '/assets/logo.webp'
import swargaseema from '/assets/swargaseema-logo-official.png'
import sadananda from '/assets/sadananda-Final-Logo--orange.png'





  const clients = [
    { src: magsmenSweatTeluguFoods, alt: 'telugu-foods' },
    { src: magsmenColors, alt: 'surya-colors' },
    { src: magsmenTenaliDoubleHorse, alt: 'tenali-double-horse' },
    { src: magsmenTriplexxx, alt: 'triplex' },
    { src: magsmenVsb, alt: 'vsb' },
    { src: sumaFilmyArts, alt: 'suma-filmy-arts' },
    { src: instantFoods, alt: 'instant-foods' },
    { src: sumaKanakala, alt: 'suma-kanakala' },
    { src: cargil, alt: 'cargil' },
    { src: magsmenZavane, alt: 'zavaine' },
    { src: pronted, alt: 'prontend' },
    { src: chakrasiddh, alt: 'chakrasiddh' },
    { src: logo4, alt: '19builders' },
    { src: magsenJayalakshmi, alt: 'jayalakshmi' },
    { src: rootcapLion, alt: 'lion' },
    { src: rootcapLogo, alt: 'rootcap' },
    { src: magsenMvrLogo, alt: 'partner' },
    { src: logo6, alt: 'bniguntur' },
    { src: bdLogo1, alt: 'BD-Logo-1' },
    { src: karumaunchi, alt: 'karumaunchi' },
    { src: greatindia, alt: 'greatindia' },
    { src: siri, alt: 'siri' },
    { src: crown, alt: 'crown' },
    { src: pemmasaniAssociates, alt: 'pemmasani-associates' },
    { src: jayacottonProducts, alt: 'jayacotton-products' },
    { src: manna, alt: 'manna' },
    { src: theBox, alt: 'the-box' },
    {src: artbliss, alt: 'art-bliss'},
    {src: ssvbuilders, alt: 'ssv-builders'},
    {src: apcotton, alt: 'ap-cotton'},
    {src: arjunsaiesports, alt: 'arjunsaiesports'},
    {src: coastal, alt: 'coastal'},
    {src: jsolutionsa, alt: 'jsolutionsa'},
    {src: goldencharriot, alt: 'goldencharriot'},
    {src: gowrishankaragencies, alt: 'gowrishankaragencies'},
    {src: happyhome, alt: 'happyhome'},
    {src: ideabox, alt: 'ideabox'},
    {src: integrityglobalservices, alt: 'integrityglobalservices'},
    {src: kamadhenuuniforms, alt: 'kamadhenuuniforms'},
    {src: kiroula, alt: 'kiroula'},
    {src: kothamasdentalcare, alt: 'kothamasdentalcare'},
    {src: lakshimisrinivasjewellery, alt: 'lakshimisrinivasjewellery'},
    {src: maneathesaloon, alt: 'maneathesaloon'},
    {src: manoharam, alt: 'manoharam'},
    {src: navyagrand, alt: 'navyagrand'},
    {src: nikithmarketing, alt: 'nikithmarketing'},
    {src: nut, alt: 'nut'},
    {src: pangea, alt: 'pangea'},
    {src: pharmairos, alt: 'pharmairos'},
    {src: sahajadryfruits, alt: 'sahajadryfruits'},
    {src: pkprimestudios, alt: 'pkprimestudios'},
    {src: sikharanirman, alt: 'sikharanirman'},
    {src: thinkbiz, alt: 'thinkbiz'},
    {src: tufftrom, alt: 'tufftrom'},
    {src: vignatafertility, alt: 'vignatafertility'},
    {src: vihasdesignstudio, alt: 'vihasdesignstudio'},
    {src: dhruthihealthcare, alt: 'dhruthihealthcare'},
    {src: workmen, alt: 'workmen'},
    {src: ninteenbuildersdevelopers, alt: 'ninteenbuildersdevelopers'},
    {src: suparnaassociates, alt: 'suparnaassociates'},
    {src: psk, alt: 'psk'},
    {src: bhramaratownships, alt: 'bhramaratownships'},
    {src: lvlup, alt: 'lvlup'},
    {src: swargaseema, alt: 'swargaseema'},
    {src: sadananda, alt: 'sadananda'},

  ];

  

    const hengeItems = [
    {
      id: 1,
      icon: <Trophy className="w-full h-full text-purple-200" />,
      label: 'Consultant of the Year 2023',
      shortDescription: 'Indian Brand Consultants Association', // Added short description
      description: 'For outstanding advisory services and measurable client outcomes.', // Added description
      image: award1
    },
    {
      id: 2,
      icon: <Award className="w-full h-full text-purple-200" />,
      label: 'Top 100 Admiring Marketing Leaders',
      shortDescription: 'Global Admiring Council', // Added short description
      description: 'Acknowledged among the world\'s most innovative marketing strategists.', // Added description
      image: award2
    },
    {
      id: 3,
      icon: <Sparkles className="w-full h-full text-purple-200" />,
      label: 'Jury Member, MMA Global',
      shortDescription: 'Mobile Marketing Association', // Added short description
      description: 'Invited to evaluate global excellence in mobile marketing.', // Added description
      image: award3
    },
  ];

  


const About = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const backgroundImages = [bannerseven]; // bannerone, bannertwo,bannersix,bannerfive  
  const [showAll, setShowAll] = useState(false);



  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % animatedHomeTexts.length);
      setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 4000); // every 4 seconds

    return () => clearInterval(interval);
  }, []);
  // const [showAll, setShowAll] = useState(false);

const displayedClients = showAll ? clients : clients.slice(0, 12);
  const animatedHomeTexts = [
    magsmenSweatTeluguFoods,
    magsmenColors,
    magsmenTenaliDoubleHorse,
    magsmenTriplexxx,
    magsmenVsb,
    sumaFilmyArts,
    instantFoods,
    sumaKanakala,
    cargil,
    magsmenZavane,
    logo4,
    magsenJayalakshmi,
    pronted,
    chakrasiddh,
    rootcapLion,
    rootcapLogo,
    magsenMvrLogo,
    logo6,
    bdLogo1,
    karumaunchi,
    greatindia,
    siri,
    crown,
    pemmasaniAssociates,
    jayacottonProducts,
    manna,
    theBox,
    natureimage,
    magsmentelugufoods,
    magsmensuryacolors,
    magsmentdhrishika,
    magsmentriplex,
    magsmenvsb,
    magsmenzavaine
    
  ]





  const teamMembers = [
    {
      name: 'Sandeep N',
      role: 'Founder & Chief Brand Strategist',
      bio: 'Creator of InTalks & Sanstrategies. Consultant to IPL sponsors & Fortune 25 brands.',
      image: 'SN'
    },
    {
      name: 'Priya Sharma',
      role: 'Senior Brand Strategist',
      bio: 'Expert in FMCG and retail brand positioning with 6+ years experience.',
      image: 'PS'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Creative Director',
      bio: 'Award-winning designer specializing in brand identity and visual systems.',
      image: 'RK'
    },
    {
      name: 'Anita Reddy',
      role: 'Client Partner',
      bio: 'Relationship management expert ensuring seamless brand transformations.',
      image: 'AR'
    }
  ];

  const achievements = [
    'Consultant of the Year 2023',
    'Top 100 Admiring Marketing Leaders',
    'MMA Global Jury Member',
    '100+ Brands Transformed',
    '15+ Industries Served',
    '8+ Years of Excellence'
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-right bg-no-repeat bg-gradient-to-br from-black h-[540px] bg-cover bg-no-repeat bg-center via-gray-900 to-black text-white py-20 overflow-hidden "
      style={{ backgroundImage: `url(${aboutbackgroundimage})`}} 
      >
        {/* OVERLAY */}
  <div className="absolute inset-0 bg-black/40"></div>
        <div className=''></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-7 h-full flex items-center ">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-left"
          >
            <motion.h1 
              className="text-3xl md:text-5xl font-light mb-6 text-black"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              We don't build brands.<br/>
We build what brands are built on.
              <motion.span 
                className="text-[#000]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-xl  max-w-3xl text-[#ffffff]/70 font-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
            Strategic clarity. Market positioning. Long-term advantage.
For Indian businesses ready to stop competing on price and start competing on meaning.

            </motion.p>
          </motion.div>
        </div>
        
      </section>

<section className="bg-black py-36">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className='my-auto'>
            <h2 className="text-4xl text-white font-bold text-gray-900 mb-4 md:text-5xl font-light tracking-tight">Our Beginning:</h2>
      </div>
      {/* Left paragraph */}
      <div className='mt-5'>
        <p className="text-lg text-white leading-relaxed text-white">
          We’ve observed a pattern over the years…
Ambitious Indian businesses were investing in marketing, hiring agencies, launching campaigns and yet struggling to articulate their true value.
The problem wasn’t effort,
It was direction.

        </p>
         <p className="text-lg text-gray-100 leading-relaxed pt-5">
          Magsmen was founded to bring strategic clarity into brand building by replacing guesswork with structure and short-term noise with long-term positioning.
We don’t just build brands,
We architect growth systems.

        </p>
      </div>
      
    </div>
  </div>
</section>





{/* Why We Exist */}
 {/* <section className="py-16 bg-black">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-bold text-gray-900 mb-4 md:text-5xl font-light tracking-tight text-white">Why we exist</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

      <div>
        <p className="text-lg text-white leading-relaxed">
          We saw Indian businesses struggling to articulate their value in a crowded market. Magsmen was built to bring strategic clarity to help brands stand out, scale up, and sustain in an ever-changing business environment.
        </p>
      </div>

      <div className="border-l-2 border-gray-200 pl-32">
        <p className="text-lg text-white leading-relaxed">
          Every business has a story worth telling. Our mission is to help you tell it in a way that resonates, converts, and creates lasting impact.
        </p>
      </div>
    </div>
  </div>
</section> */}


      {/* Vision, Mission & Promise */}
      {/* <section className="py-20 bg-gradient-to-br from-purple-50 to-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-left mb-10"
          >
            <motion.h2
              className="text-4xl font-bold text-gray-900 mb-4 md:text-5xl font-light tracking-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our foundation
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              The principles that guide everything we do
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3">
            {[
              {
                title: 'Vision',
                description:
                  'At Magsmen, we envision a world where brands are not just seen but felt. We strive to create connections that resonate deeply, transforming ordinary interactions into memorable experiences.',
                icon: <Eye className="w-8 h-8" />,
              },
              {
                title: 'Mission',
                description:
                  'Our mission is to blend strategy with creativity, constructing smooth roads that lead brands to new heights. We are dedicated to understanding the unique essence of each brand and crafting bespoke solutions that amplify their presence.',
                icon: <Rocket className="w-8 h-8" />,
              },
              {
                title: 'Promise',
                description:
                  'We promise to be the bridge between your brand’s essence and its audience, turning strategies into meaningful experiences. With creativity, precision, and dedication, we ensure that every interaction strengthens your brand’s presence and leaves a lasting impact.',
                icon: <Handshake className="w-8 h-8" />,
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{ 
                  y: -10,
                  scale: 0.9,
                  transition: { duration: 0.3 }
                }}
                className="bg-white p-8 shadow-lg text-left hover:shadow-2xl transition-all duration-500 group cursor-pointer h-[500px]"
              >
                <motion.div 
                  className="bg-purple-100 p-4 rounded-lg inline-block mb-4 text-[#683FBF] group-hover:bg-[#683FBF] group-hover:text-white transition-all duration-100"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#683FBF] transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 mt-20">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}







{/* <section className="relative overflow-hidden bg-white py-0 ">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
    <div className="lg:col-span-3 mt-36 relative z-10">
      <h3 className="text-3xl font-semibold text-gray-900 mb-3">
        Values
      </h3>
      <div className="w-14 h-[4px] bg-purple-400 rounded-full" />
    </div>

  
    <div className="lg:col-span-9 relative z-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 place-items-center">

 
        <div className="w-40 h-40 rounded-full bg-gray-100 flex items-center justify-center text-center px-6 text-gray-800 font-medium shadow-sm">
          Purpose driven
        </div>

        <div className="w-40 h-40 rounded-full bg-gray-100 flex items-center justify-center text-center px-6 text-gray-800 font-medium shadow-sm">
          Insight-Led
        </div>

        <div className="w-40 h-40 rounded-full bg-gray-100 flex items-center justify-center text-center px-6 text-gray-800 font-medium shadow-sm">
          Human-First
        </div>

       <div className="sm:col-span-3 flex flex-col sm:flex-row justify-center gap-10 sm:gap-40">
          <div className="w-40 h-40 rounded-full bg-gray-100 flex items-center justify-center text-center px-6 text-gray-800 font-medium shadow-sm">
            Collaborative
          </div>

          <div className="w-40 h-40 rounded-full bg-gray-100 flex items-center justify-center text-center px-6 text-gray-800 font-medium shadow-sm">
            Impact-Focused
          </div>
        </div>

      </div>
    </div>

  </div>
</section> */}




<section className="relative overflow-hidden bg-gray-50 py-28 overflow-x-hidden bg-gray-300 py-20">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">

    {/* LEFT LABEL */}
    <div className="lg:col-span-3">
      <h3 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-3">
        Vision
      </h3>
      <div className="w-14 h-[4px] bg-purple-400 rounded-full" />
    </div>

    {/* RIGHT CONTENT */}
    {/* RIGHT CONTENT */}
<div className="lg:col-span-9">
  <p className="leading-tight font-medium text-gray-900 max-w-5xl text-lg">
    At Magsmen, we envision a world where brands are not just seen but felt.
  </p>
</div>
  </div>
</section>

<section className="relative overflow-hidden bg-gray-50 py-5 overflow-hidden bg-gray-300 pb-20">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">

    {/* LEFT LABEL */}
    <div className="lg:col-span-3">
      <h3 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-3">
        Mission
      </h3>
      <div className="w-14 h-[4px] bg-purple-400 rounded-full" />
    </div>

    {/* RIGHT CONTENT */}
    {/* RIGHT CONTENT */}
<div className="lg:col-span-9">
  <p className="text-lg leading-tight font-medium text-gray-900 max-w-5xl">
    We combine strategy and creativity to help your brand stand out, connect deeply and grow with purpose.

    </p>
    </div>
    </div>
</section>


   <section className="relative bg-white py-20 overflow-hidden">
  <div className="max-w-6xl mx-auto px-4 sm:px-6">

    {/* Header */}
    <div className="text-center mb-20">
      <h2 className="text-4xl md:text-5xl font-semibold mb-4">Our Journey</h2>
      <p className="text-gray-500 max-w-2xl mx-auto">
        From a regional brand consultancy to a strategic growth partner for ambitious brands.
      </p>
      <div className="w-16 h-[3px] bg-purple-400 mx-auto mt-6 rounded-full" />
    </div>

    {/* Timeline Container */}
    <div className="relative">

      {/* Vertical Line (VISIBLE ON MOBILE) */}
      <div
        className="
          absolute
          top-0
          bottom-0
          left-4
          md:left-1/2
          w-[2px]
          bg-gray-200
          md:-translate-x-1/2
        "
      />

      <div className="space-y-20">

        {/* ITEM */}
        {[
          {
            year: "2019",
            title: "The Beginning",
            desc: "Magsmen was founded with one belief: brands deserve more than last-minute logos and borrowed frameworks. We started small, but we started with the purpose of helping businesses grow with clarity, strategy, and depth.",
          },
          {
            year: "2020",
            title: "The Growth",
            desc: "We expanded our offerings and partnered with fast-growing regional brands across FMCG and services. Founders began trusting us not just with campaigns, but with their long-term positioning. Our team grew. So did their results.",
          },
          {
            year: "2022",
            title: "The Recognition",
            desc: "Category leaders and challenger brands came to us. We delivered positioning shifts that translated into measurable business impact. National visibility followed. Not because we chased awards—but because we chased outcomes.",
          },
          {
            year: "Today — The Future",
            title: "Building the Future",
            desc: "We continue to partner with ambitious founders and leadership teams.Not for a single project. For the long haul.",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="
              relative
              flex
              flex-col
              md:flex-row
              md:items-center
            "
          >
            {/* DOT */}
            <div
              className="
                absolute
                left-4
                md:left-1/2
                w-6
                h-6
                bg-white
                border-4
                border-purple-400
                rounded-full
                -translate-x-1/2
                mt-1
              "
            />

            {/* CONTENT */}
            <div
              className={`
                ml-12
                md:ml-0
                md:w-1/2
                ${idx % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"}
              `}
            >
              <span className="inline-block px-4 py-1 text-xs font-medium bg-purple-100 text-purple-600 rounded-full mb-4">
                {item.year}
              </span>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}

      </div>
    </div>
  </div>
</section>



      {/* Founder Profile */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-square bg-gradient-to-br from-[#683FBF] to-[#5a35a3] rounded-2xl max-w-md mx-auto">
                <div className="w-full h-full bg-gray-800 rounded-xl flex items-center justify-center">
                  {/* <div className="text-8xl font-bold text-[#683FBF]">SN</div> */}
                  <img src={aboutimage} alt="sandeep-img-oo" />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4 md:text-5xl font-light tracking-tight">The Founder</h2>
              <h3 className="text-2xl text-[#683FBF] font-semibold mb-4">Sandeep N</h3>
              <div className="space-y-4 text-gray-300">
                
                <p>Eight years ago, Sandeep stopped following the formula.</p>
                <p>While the industry chased viral moments and short-term wins, he asked a different question:
What does it take for a brand to outlive its founder?</p>

                <p>He spent nearly a decade in deep research not just studying brand strategy, but market psychology, consumer behavior, and why some brands fade while others become legacy.</p>

                <p>Today his innovative approach has positioned Magsmen as a leading force in the industry.</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Star className="w-5 h-5 text-[#683FBF] mr-3" />
                    Creator of InTalks & Sanstrategies
                  </li>
                  <li className="flex items-center">
                    <Star className="w-5 h-5 text-[#683FBF] mr-3" />
                    Consultant to IPL sponsors & Fortune 25 brands
                  </li>
                  <li className="flex items-center">
                    <Star className="w-5 h-5 text-[#683FBF] mr-3" />
                    Recognized as Consultant of the Year 2023
                  </li>
                  <li className="flex items-center">
                    <Star className="w-5 h-5 text-[#683FBF] mr-3" />
                    8+ years of research in brand strategy
                  </li>
                </ul>
              </div>
              <blockquote className="text-xl italic text-purple-100 mt-6 border-l-4 border-[#683FBF] pl-4">
                "Branding is about trust, identity, and connection. It's about building something that lives beyond you."
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>


{/* our process */}
 <section className="py-24 bg-gray-50/50 ">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left mb-10"
          >
            <h2 className="text-6xl text-gray-900 mb-6 tracking-tight md:text-5xl font-light">The Process</h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl">
              A disciplined progression from ambiguity to advantage.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: '01',
                title: 'DIAGNOSE',
                description: 'We audit. We decode. We listen to what the market won\'t tell you directly.',
                bullets: [
                  'Brand audit & competitive landscape',
                  'Consumer perception research',
                  'Strategic gap analysis'
                ],
                icon: <Users className="w-8 h-8 text-[#683FBF]" />
              },
              {
                step: '02',
                title: 'BLUEPRINT',
                description: 'We architect. We position. We give your brand a spine.',
                bullets: [
                  'Market positioning & narrative',
                  'Brand architecture',
                  'Visual & verbal identity systems'
                ],
                icon: <TrendingUp className="w-8 h-8 text-[#683FBF]" />
              },
              {
                step: '03',
                title: 'FLIGHT',
                description: 'We launch. We scale. We stay as your strategic mentors.',
                  bullets: [
                    'Go-to-market activation',
                    'Brand experience design',
                    'Ongoing strategy stewardship'
                  ],
                icon: <CheckCircle className="w-8 h-8 text-[#683FBF]" />
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-10 hover:shadow-xl transition-all duration-300 border border-gray-100 rounded-sm"
                style={{
    background: "linear-gradient(to top left, rgba(255, 255, 255, 0.6), rgba(104, 63, 191, 0.7))",
  }}
                
              >
                <div className="flex items-center mb-8">
                  <div className="bg-[#683FBF]/0 p-4 text-[#683FBF] mr-6">
                    {process.icon}
                  </div>
                  <span className="text-5xl font-light text-gray-200 tracking-tight">{process.step}</span>
                </div>
                <h3 className="text-2xl font-medium text-gray-900 mb-4 tracking-tight">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed font-light text-lg">{process.description}</p>
                {process.bullets && (
                  <ul className="mt-4 space-y-2">
                    {process.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#683FBF] mt-1 mr-3" />
                        <span className="text-gray-600">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>




{/* awards section */}
<section
  className="pt-14 text-white rounded-3xl mx-10 mt-[5rem]"
  style={{
    backgroundImage: `
        linear-gradient(to top left, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)),
        url('/assets/awards/Main-File-White-Page.jpg')
      `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-11">

    {/* FULL WIDTH TITLE */}
    <div className="w-full text-left">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-col items-start"
      >
        <h2 className="text-4xl md:text-5xl font-light leading-snug tracking-tight text-white">
          Professional
        </h2>
        <span className="text-6xl md:text-4xl font-bold tracking-tight text-white/70">
          Awards
        </span>
      </motion.div>
    </div>

    {/* awards List */}
    <div className="w-full">
      <ul className="space-y-0">
        {hengeItems.map((item, index) => (
          <motion.li
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
            className="py-10 border-b border-white/20 last:border-b-0"
          >

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">

             
              <div className="md:col-span-1 flex md:justify-start justify-center">
                <div className="relative w-14 h-14 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.label}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div className="md:col-span-4">
                <p className="text-xl font-bold uppercase text-white tracking-wide leading-snug">
                  {item.label}
                </p>
                <p className="text-sm text-white/70 font-medium mt-1">
                  {item.shortDescription}
                </p>
              </div>
              

          
              <div className="md:col-span-7">
                <p className="text-base text-white/70 font-light leading-relaxed">
                  {item.description ||
                    "Details about this professional recognition or achievement."}
                </p>
              </div>

            </div>

          </motion.li>
        ))}
      </ul>
    </div>
  </div>
</section>




{/* Trust Section */ }
<section className="py-20 bg-white ">
  <div className="max-w-8xl mx-auto px-4 text-center ">

    <div className="text-left ml-8">
      <h2 className="text-6xl font-light text-gray-900 mb-4 tracking-tight">
        Trusted by India's Fastest Growing Brands
      </h2>
      <p className="text-xl text-gray-600 font-light max-w-2xl">
        Over 100 brands across 15 industries have trusted Magsmen to guide their transformation.
      </p>
    </div>

    {/* STATIC LOGO GRID WITH CENTERED LAST ROW */}
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-0 items-center justify-center">
      {clients.map((client, index) => {
        const total = clients.length;
        // const isLastRow = index >= total - (total % 6 || 6); 
        const isNotFullRow = total % 6 !== 0;

        return (
          <div
            key={index}
            className={`p-6 text-center flex justify-center items-center
              
            `}
            // ${isLastRow && isNotFullRow ? "lg:col-span-2" : ""}
          >
            <img
              src={client.src}
              alt={client.alt}
              className="h-[90px] w-[90px] object-contain filter  transition duration-500"
            />
          </div>
        );
      })}

      {/* Divider Lines After Each Full Row */}
      {clients.length > 6 &&
        clients.map((_, index) =>
          (index + 1) % 6 === 0 && index !== clients.length - 1 ? (
            <div key={`divider-${index}`} className="col-span-full -my-2">
              {/* <hr className="border-gray-300" /> */}
            </div>
          ) : null
        )}
    </div>

  </div>
</section>


    </div>
  );
};

export default About;