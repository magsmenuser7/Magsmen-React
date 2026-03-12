import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Filter, TrendingUp, Award, Users,ArrowUpRight, ArrowRight } from 'lucide-react';
import magsmentelugufoods from '/assets/Telugu-foods.jpg'
import magsmensuryacolors from '/assets/works/surya-colors-new.png'
import suryacolorone from "/assets/works/surya-color-one.png"
import magsmentdhrishika from '/assets/tdh-rishika.png'
import tdhsunnundalu from "/assets/works/tdh-sunnundalu.png"
import magsmentriplex from '/assets/Triplex.jpg'
import magsmenvsb from '/assets/VSB.png'
import magsmenzavaine from '/assets/Zavaiine.jpg'
import magsmenTenaliDoubleHorse from '/assets/magsmen-homepage-clients-tenalidoublehorse-168x168.png';
import tenalidoublehorseuradgota from "/assets/works/urad-gota.png"
import BrandingPatternLYN from '/assets/works/Branding-Pattern-LYN.jpg'
import chickengarammeat from '/assets/works/chicken-garam-meat.png'
import suryacolorthree from '/assets/works/surya-color-three.png'
import tdhdosa from '/assets/works/tdh-dosa.png'
import tenalidoubleproducts from '/assets/works/tenali-double-products.png'
import triplexthree from '/assets/works/triplex-three.png'
import vsbthree from '/assets/works/vsb-three.png'
import zavainethree from '/assets/works/zavaine-three.png'
import bhramaratownships from '/assets/works/bhramara.png'
import pronted from '/assets/works/Pronted Logomain copy.png'
import sumafimlyarts from '/assets/suma-filmy-arts.png'
import mrconstructions from '/assets/magsen-our-partner-mvr-logo-168x168.png'
import cargill from '/assets/works/cargil.png'
// import lvlup from '/assets/logo.webp'
import swargaseema from '/assets/swargaseema-logo-official.png'
import levelupkhammam from '/assets/levelupone.png'
import sadananda from '/assets/sadananda.jpg'
import chakrasiddh from '/assets/Chakrasiddh-logo-final-horizontal-copy.png'




 
const CaseStudies = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  // const filters = ['All', 'FMCG', 'Ed-Tech', 'Real Estate', 'Media', 'Skincare', 'Healthcare'];
 const works = [
    {
      title: "Brand Consulting",
      description:
        "We help brands discover their unique voice and identity through a strategic consulting process tailored to your market goals.",
      image: BrandingPatternLYN,
    },
    {
      title: "Design Strategy",
      description:
        "Our team crafts design systems that blend creativity with functionality, delivering timeless brand experiences.",
      image: BrandingPatternLYN,
      reverse: true, // flips layout
    },
    {
      title: "Visual Identity",
      description:
        "From logos to brand palettes, we create distinctive and consistent visuals that make your brand stand out.",
      image: BrandingPatternLYN,
    },
  ];

  const caseStudies = [
   {
  id: 1,
  title: 'Telugu Foods',
  industry: 'FMCG',
  stage: 'Growth',
  description: 'Telugu Foods was struggling to increase brand awareness and sales in the highly competitive food industry.',
  challenge: 'Telugu Foods was struggling to increase brand awareness and sales in a highly competitive food industry. They lacked a clear digital and social media strategy, and their B2B business was underperforming.',
  outcome: '+25% brand awareness and +15% sales growth within 3 months',
  metrics: ['25% Brand Awareness Increase', '15% Sales Growth', 'Pan-India Expansion'],
  slug: 'telugu-foods',
  imageUrl: magsmentelugufoods
},
{
  id: 2,
  title: 'Surya Colors',
  industry: 'Paints & Coatings',
  stage: 'Growth',
  description: 'Surya Colors was struggling to increase brand stability and awareness in the highly competitive market. They lacked a clear digital and brand strategy, resulting in low engagement and product awareness.',
  challenge: 'Surya Colors faced difficulties in building brand stability and awareness. The absence of a strong digital and branding strategy led to weak customer engagement and limited visibility in a crowded market.',
  outcome: 'Improved brand stability by 40% and increased digital engagement by 50% within 4 months',
  metrics: ['40% Brand Stability Improvement', '50% Digital Engagement Growth', 'Enhanced Market Awareness'],
  slug: 'surya-colors',
  imageUrl: magsmensuryacolors
},
{
  id: 3,
  title: 'TDH Rishika',
  industry: 'FMCG – Younger Generation',
  stage: 'Launch',
  description: 'TDH, a Younger Generation brand from Tenali Double Horse focused on the FMCG industry, faced the challenge of establishing a unique brand identity and launching the product across India in a cost-efficient manner.',
  challenge: 'The brand needed to develop a comprehensive strategy for package design, brand strategy, and content & influencer marketing to improve brand awareness and sales while keeping costs optimized.',
  outcome: 'Achieved +35% brand awareness and +20% sales growth in the first 6 months through strategic packaging, influencer marketing, and digital campaigns',
  metrics: ['35% Brand Awareness Growth', '20% Sales Growth', 'Successful Pan-India Launch'],
  slug: 'tdh-rishika',
  imageUrl: magsmentdhrishika
    },
    {
      id: 4,
      title: 'Tenali Double Horse',
      industry: 'FMCG – Food Products',
      stage: 'Expansion',
      description: 'Tenali Double Horse, one of the biggest brands in South India, needed to focus on consistency, brand positioning, and clear strategy for new markets.',
      challenge: 'With multiple teams handling the brand, there was a lack of unified brand guidelines and digital strategy. This created inconsistencies in brand communication and slowed down expansion into new markets.',
      outcome: '+30% engagement, US market entry via Amazon, and unified brand guidelines implemented',
      metrics: ['30% Engagement Growth', 'US Market Entry via Amazon', 'Unified Brand Guidelines'],
      slug: 'tenali-double-horse',
      imageUrl: magsmenTenaliDoubleHorse
    },
    {
      id: 5,
      title: 'Triplex',
      industry: 'FMCG – Laundry & Cleaning Products',
      stage: 'Growth',
      description: 'Triplex, as a top detergent company in the Telugu states, faced the challenge of establishing a strong digital and social media presence to increase brand awareness and reach.',
      challenge: 'The brand needed to strengthen its online presence, build awareness in a highly competitive detergent market, and engage audiences through impactful digital and social media strategies.',
      outcome: '+25% social media followers, +30% engagement, +35% website traffic, and 500k+ video views',
      metrics: ['25% Social Media Growth', '30% Engagement Increase', '35% Website Traffic Boost', '500k+ Video Views'],
      slug: 'triplex',
      imageUrl: magsmentriplex
    },
    {
      id: 6,
      title: 'VSB Group',
      industry: 'Granite & Quartz Export',
      stage: 'Expansion',
      description: 'VSB Group, one of the top exporters of granites and quartz in South India, faced the challenge of improving their brand presence both online and offline.',
      challenge: 'The brand needed a complete revamp to establish a strong digital identity and create a tailored branding approach for each of the 45 countries they export to, while maintaining global consistency.',
      outcome: 'Brand revamp across 45 countries, +40% digital visibility, and +25% client inquiries',
      metrics: ['45-Country Brand Revamp', '40% Digital Visibility Growth', '25% Increase in Client Inquiries'],
      slug: 'vsb-group',
      imageUrl: magsmenvsb
    },
    {
      id: 7,
      title: 'Zavaine',
      industry: 'FMCG – Laundry & Cleaning Products',
      stage: 'Launch',
      description: "Zavaine, India's first detergent tablet and a sister brand of Triplex, South India's biggest detergent brand, needed to establish itself as a market leader and increase product awareness and sales.",
      challenge: 'As a new product category in India, Zavaine needed to educate customers about detergent tablets, build trust as an innovative solution, and drive awareness and adoption through effective branding and launch campaigns.',
      outcome: '+20% brand awareness, +15% sales growth, and successful product launch campaigns',
      metrics: ['20% Brand Awareness Growth', '15% Sales Growth', 'Successful Product Launch Campaigns'],
      slug: 'zavaine',
      imageUrl: magsmenzavaine
    },



  ];

  const filteredCaseStudies = selectedFilter === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === selectedFilter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}

      {/* Case Studies Grid */}
      <section className="bg-white md:py-24 py-10">
        <div className='max-w-7xl px-4 sm:px-6 lg:px-8 mb-0 mx-auto '>
          <div className='flex md:flex-row justify-around mx-auto md:gap-24 gap-5 items-center mt-6 flex-col'>
            <h1 className='text-black text-8xl font-bold'>Works <br /> <span className='text-8xl font-thin'></span></h1>
           <p className='max-w-2xl'>Each project represents a strategic challenge solved through insight, clarity, and execution. Our work spans brand creation, transformation, and growth built to deliver relevance, consistency, and long term impact.</p>
          </div>
        </div>
      </section>


<section className="bg-gray-100 py-16">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">    

     {/* CARD START 1*/}
      <div className="border-[6px] border-black bg-black">

  {/* Image */}
  <div className="w-full">
    <img
      src={chickengarammeat}
      alt="Telugufoods"
      className="
        w-full
        h-auto               
        md:h-[270px]         
        object-contain      
        md:object-cover      
      "
    />
  </div>

  {/* Content */}
  <div className="
    bg-black text-white
    p-5 md:p-8             
    flex flex-col justify-between
    min-h-[220px] md:min-h-[280px]  
  ">
    <div>
      <h6 className="text-purple-500 mb-4 md:mb-6 text-sm md:text-base">
        Brand Consulting | Digital Media
      </h6>

      <p className="text-base md:text-xl leading-relaxed">
        A legacy brand known for delivering the true taste of South India
        through its premium range of traditional snacks and spice blends.
      </p>
    </div>

    <Link to="/case-studies/telugu-foods" className="mt-6 md:mt-8">
      <ArrowRight className="w-12 h-12 md:w-14 md:h-14 bg-purple-600 p-3 md:p-4 rounded-full" />
    </Link>
  </div>

      </div>
    {/* CARD END */}


      {/* CARD START 2*/}
       <div className="border-[6px] border-black bg-black">

  {/* Image */}
  <div className="w-full">
    <img
      src={suryacolorone}
      alt="Surya Color One"
      className="
        w-full
        h-auto               
        md:h-[270px]         
        object-contain      
        md:object-cover      
      "
    />
  </div>

  {/* Content */}
  <div className="
    bg-black text-white
    p-5 md:p-8             
    flex flex-col justify-between
    min-h-[220px] md:min-h-[280px]  
  ">
    <div>
      <h6 className="text-purple-500 mb-4 md:mb-6 text-sm md:text-base">
        Brand Consulting
      </h6>

      <p className="text-base md:text-xl leading-relaxed">
        A heritage paint brand dedicated to
bringing walls to life through rich colours, smooth finishes, and a deep understanding of Indian homes and spaces.
      </p>
    </div>

    <Link to="/case-studies/surya-colors" className="mt-6 md:mt-8">
      <ArrowRight className="w-12 h-12 md:w-14 md:h-14 bg-purple-600 p-3 md:p-4 rounded-full" />
    </Link>
  </div>

      </div>
      {/* CARD END */}

      {/* CARD START 3*/}
       <div className="border-[6px] border-black bg-black">

  {/* Image */}
  <div className="w-full">
    <img
      src={triplexthree}
      alt="Triplex Three"
      className="
        w-full
        h-auto               
        md:h-[270px]         
        object-contain      
        md:object-cover      
      "
    />
  </div>

  {/* Content */}
  <div className="
    bg-black text-white
    p-5 md:p-8             
    flex flex-col justify-between
    min-h-[220px] md:min-h-[280px]  
  ">
    <div>
      <h6 className="text-purple-500 mb-4 md:mb-6 text-sm md:text-base">
         Digital Media
      </h6>

      <p className="text-base md:text-xl leading-relaxed">
        A powerful detergent brand engineered to deliver deep cleaning and long-lasting freshness, trusted for tackling tough stains in everyday laundry.
      </p>
    </div>

    <Link to="/case-studies/triplex" className="mt-6 md:mt-8">
      <ArrowRight className="w-12 h-12 md:w-14 md:h-14 bg-purple-600 p-3 md:p-4 rounded-full" />
    </Link>
  </div>

      </div>
      {/* CARD END */}
      
      
      {/* CARD START 4*/}
      <div className="border-[6px] border-black bg-black">

  {/* Image */}
  <div className="w-full">
    <img
      src={vsbthree}
      alt="VSB Three"
      className="
        w-full
        h-auto               
        md:h-[270px]         
        object-contain      
        md:object-cover      
      "
    />
  </div>

  {/* Content */}
  <div className="
    bg-black text-white
    p-5 md:p-8             
    flex flex-col justify-between
    min-h-[220px] md:min-h-[280px]  
  ">
    <div>
      <h6 className="text-purple-500 mb-4 md:mb-6 text-sm md:text-base">
        Brand Consulting | Digital Media
      </h6>

      <p className="text-base md:text-xl leading-relaxed">
        A leading stone and surfaces brand specializing in premium granite solutions for modern kitchens, flooring, and architectural spaces.
      </p>
    </div>

    <Link to="/case-studies/vsb-group" className="mt-6 md:mt-8">
      <ArrowRight className="w-12 h-12 md:w-14 md:h-14 bg-purple-600 p-3 md:p-4 rounded-full" />
    </Link>
  </div>

      </div>
      {/* CARD END */}


       {/* CARD START 5*/}
      <div className="border-[6px] border-black bg-black">

  {/* Image */}
  <div className="w-full">
    <img
      src={zavainethree}
      alt="Zavainethree"
      className="
        w-full
        h-auto               
        md:h-[270px]         
        object-contain      
        md:object-cover      
      "
    />
  </div>

  {/* Content */}
  <div className="
    bg-black text-white
    p-5 md:p-8             
    flex flex-col justify-between
    min-h-[220px] md:min-h-[280px]  
  ">
    <div>
      <h6 className="text-purple-500 mb-4 md:mb-6 text-sm md:text-base">
        Digital Media
      </h6>

      <p className="text-base md:text-xl leading-relaxed">
        An innovative laundry care brand introducing India’s first detergent tablets, designed for precise dosing, powerful cleaning, and modern washing machines.
      </p>
    </div>

    <Link to="/case-studies/zavaine" className="mt-6 md:mt-8">
      <ArrowRight className="w-12 h-12 md:w-14 md:h-14 bg-purple-600 p-3 md:p-4 rounded-full" />
    </Link>
  </div>

      </div>
      {/* CARD END */}

      {/* CARD START 6*/}
       <div className="border-[6px] border-black bg-black">

  {/* Image */}
  <div className="w-full">
    <img
      src={levelupkhammam}
      alt="LevelUp Khammam"
      className="
        w-full
        h-auto               
        md:h-[270px]         
        object-contain      
        md:object-cover      
      "
    />
  </div>

  {/* Content */}
  <div className="
    bg-black text-white
    p-5 md:p-8             
    flex flex-col justify-between
    min-h-[220px] md:min-h-[280px]  
  ">
    <div>
      <h6 className="text-purple-500 mb-4 md:mb-6 text-sm md:text-base">
        Brand Consulting
      </h6>

      <p className="text-base md:text-xl leading-relaxed">
        A fashion retail brand offering stylish, accessible clothing that blends current trends with everyday wearability.
      </p>
    </div>

    <Link to="/case-studies/lvl-up" className="mt-6 md:mt-8">
      <ArrowRight className="w-12 h-12 md:w-14 md:h-14 bg-purple-600 p-3 md:p-4 rounded-full" />
    </Link>
  </div>

      </div>
      {/* CARD END */}

      {/* CARD START 7*/}
      <div className="border-[6px] border-black bg-black">

  {/* Image */}
  <div className="w-full">
    <img
      src={tenalidoublehorseuradgota}
      alt="tenalidoublehorse"
      className="
        w-full
        h-auto               
        md:h-[260px]         
        object-contain      
        md:object-cover      
      "
    />
  </div>

  {/* Content */}
  <div className="
    bg-black text-white
    p-5 md:p-8             
    flex flex-col justify-between
    min-h-[220px] md:min-h-[280px]  
  ">
    <div>
      <h6 className="text-purple-500 mb-4 md:mb-6 text-sm md:text-base">
      Digital Media
      </h6>

      <p className="text-base md:text-xl leading-relaxed">
        A trusted household name known for delivering purity and consistency through its wide range of premium pulses and essential staples.
      </p>
    </div>

    <Link to="/case-studies/tenali-double-horse" className="mt-6 md:mt-8">
      <ArrowRight className="w-12 h-12 md:w-14 md:h-14 bg-purple-600 p-3 md:p-4 rounded-full" />
    </Link>
  </div>

      </div>
      {/* CARD END */}
      

    </div>
  </div>
</section>



{/* <section className='max-w-8xl'>
  <div className='py-2 bg-white sm:px-4 lg:px-11'>

   
    <div className='grid grid-cols-1 md:grid-cols-2 gap-0'>
      
    
      <div className='order-1 md:order-2 w-full'>
        <img 
          src={chickengarammeat} 
          alt="Telugufoods" 
          className='w-full h-auto md:h-[320px] object-contain md:object-cover p-4 md:p-0 mx-auto'
        />
      </div>

    
      <div className='order-2 md:order-1 my-auto px-5'>
        <h6 className='text-purple-600 mb-7'>Brand Consulting | Digital Media</h6>
        <p className='text-black text-2xl'>
          A legacy brand known for delivering <br /> 
          the true taste of South India through its premium <br /> 
          range of traditional snacks and spice blends.
        </p>
        <Link to={`/case-studies/telugu-foods`} className='mt-5 flex items-center gap-2'>
          <ArrowRight className="w-16 h-16 text-white bg-purple-500 rounded-full p-5" />
        </Link>
      </div>
    </div>

   
    <div className='grid grid-cols-1 md:grid-cols-2 gap-0 md:mt-0 mt-16'>

      <div className='order-1 md:order-1 w-full'>
        <img 
          src={suryacolorone} 
          alt="suryacolors" 
          className='w-full h-auto md:h-[320px] object-contain md:object-cover p-4 md:p-0 mx-auto' 
        />
      </div>

      <div className='order-2 md:order-2 my-auto mx-0 md:mx-14 px-5'>
        <h6 className='text-purple-600 mb-7'>Brand Consulting</h6>
        <p className='text-black text-2xl'>
          A heritage paint brand dedicated to <br />
          bringing walls to life through rich colours, smooth finishes, 
          and a deep understanding of Indian homes and spaces.
        </p>
        <Link to={`/case-studies/surya-colors`} className='mt-5 flex items-center gap-2'>
          <ArrowRight className="w-16 h-16 text-white bg-purple-500 rounded-full p-5" />
        </Link>
      </div>
    </div>

    
    

    
    <div className='grid grid-cols-1 md:grid-cols-2 gap-0 md:mt-0 mt-16'>
      <div className='order-1 md:order-2 w-full'>
        <img 
          src={triplexthree} 
          alt="triplex"  
          className='w-full h-auto md:h-[320px] object-contain md:object-cover p-4 md:p-0 mx-auto' 
        />
      </div>

      <div className='order-2 md:order-1 my-auto px-5'>
        <h6 className='text-purple-600 mb-7'>Digital Media</h6>
        <p className='text-black text-2xl'>
          A powerful detergent brand engineered to deliver deep cleaning 
          and long-lasting freshness, trusted for tackling tough stains in everyday laundry.
        </p>
        <Link to={`/case-studies/triplex`} className='mt-5 flex items-center gap-2'>
          <ArrowRight className="w-16 h-16 text-white bg-purple-500 rounded-full p-5" />
        </Link>
      </div>
    </div>


   
    <div className='grid grid-cols-1 md:grid-cols-2 gap-0 md:mt-0 mt-16'>
      <div className='order-1 md:order-1 w-full'>
        <img 
          src={vsbthree} 
          alt="vsbgroup"  
          className='w-full h-auto md:h-[320px] object-contain md:object-cover p-4 md:p-0 mx-auto' 
        />
      </div>

      <div className='order-2 md:order-2 my-auto mx-0 md:mx-14 px-5'>
        <h6 className='text-purple-600 mb-7'>Brand Consulting | Digital Media </h6>
        <p className='text-black text-2xl'>
          A leading stone and surfaces brand specializing in premium granite solutions 
          for modern kitchens, flooring, and architectural spaces.
        </p>
        <Link to={`/case-studies/vsb-group`} className='mt-5 flex items-center gap-2'>
          <ArrowRight className="w-16 h-16 text-white bg-purple-500 rounded-full p-5" />
        </Link>
      </div>
    </div>

  
    <div className='grid grid-cols-1 md:grid-cols-2 gap-0 md:mt-0 mt-16'>
      <div className='order-1 md:order-2 w-full'>
        <img 
          src={zavainethree} 
          alt="zavaine"  
          className='w-full h-auto md:h-[320px] object-contain md:object-cover p-4 md:p-0 mx-auto' 
        />
      </div>

      <div className='order-2 md:order-1 my-auto mx-0 md:mx-14 px-5'>
        <h6 className='text-purple-600 mb-7'>Digital Media</h6>
        <p className='text-black text-2xl'>
          An innovative laundry care brand introducing India’s first detergent tablets, 
          designed for precise dosing, powerful cleaning, and modern washing machines.
        </p>
        <Link to={`/case-studies/zavaine`} className='mt-5 flex items-center gap-2'>
          <ArrowRight className="w-16 h-16 text-white bg-purple-500 rounded-full p-5" />
        </Link>
      </div>
    </div>

     <div className='grid grid-cols-1 md:grid-cols-2 gap-0 md:mt-0 mt-16'>

      <div className='order-1 md:order-1 w-full'>
        <img 
          src={levelupkhammam} 
          alt="lvlup" 
          className='w-full h-auto md:h-[320px] object-contain md:object-cover p-4 md:p-0 mx-auto' 
        />
      </div>

      <div className='order-2 md:order-2 my-auto mx-0 md:mx-14 px-5'>
        <h6 className='text-purple-600 mb-7'>Brand Consulting</h6>
        <p className='text-black text-2xl'>
          A fashion retail brand offering stylish, accessible clothing that blends current trends with everyday wearability.
        </p>
        <Link to={`/case-studies/lvl-up`} className='mt-5 flex items-center gap-2'>
          <ArrowRight className="w-16 h-16 text-white bg-purple-500 rounded-full p-5" />
        </Link>
      </div>
    </div>

   <div className='grid grid-cols-1 md:grid-cols-2 gap-0 md:mt-0 mt-16'>
  <div className='order-1 md:order-2 w-full'>
    <img 
      src={tenalidoublehorseuradgota} 
      alt="tenalidoublehorse" 
      className='w-full h-auto md:h-[320px] object-contain md:object-cover p-4 md:p-0 mx-auto' 
    />
  </div>

  <div className='order-2 md:order-1 my-auto mx-0 md:mx-14 px-5'>
    <h6 className='text-purple-600 mb-7'>Brand Consulting</h6>
    <p className='text-black text-2xl'>
      A trusted household name known for delivering purity and consistency 
      through its wide range of premium pulses and essential staples.
    </p>
    <Link to={`/case-studies/tenali-double-horse`} className='mt-5 flex items-center gap-2'>
      <ArrowRight className="w-16 h-16 text-white bg-purple-500 rounded-full p-5" />
    </Link>
  </div>
</div>

 </div>
</section> */}



{/* 3 */}
    {/* <div className='grid grid-cols-1 md:grid-cols-2 gap-0 md:mt-0 mt-16'>
      <div className='order-1 md:order-2 w-full'>
        <img 
          src={chakrasiddh} 
          alt="chakrasiddh" 
          className='w-full h-auto md:h-[400px] object-contain md:object-contain p-4 md:p-0 mx-auto' 
        />
      </div>

      <div className='order-2 md:order-1 my-auto px-5'>
        <h6 className='text-purple-400 mb-7'>Brand Consulting</h6>
        <p className='text-white text-2xl'>
          A holistic healthcare clinic integrating Siddha Vaidyam with preventive and modern wellness practices to support long-term healing and<br /> balanced living.
        </p>
        <Link to={`/case-studies/chakrasiddh`} className='mt-5 flex items-center gap-2'>
          <ArrowRight className="w-16 h-16 text-white bg-purple-500 rounded-full p-5" />
        </Link>
      </div>
    </div> */}

    {/* 4 */}


     {/* 8 */}
    {/* <div className='grid grid-cols-1 md:grid-cols-2 gap-0 md:mt-0 mt-16'>

      <div className='order-1 md:order-1 w-full'>
        <img 
          src={sumafimlyarts} 
          alt="sumafilmyarts" 
          className='w-full h-auto md:h-[400px] object-contain md:object-cover p-4 md:p-0 mx-auto' 
        />
      </div>

      <div className='order-2 md:order-2 my-auto mx-0 md:mx-14 px-5'>
        <h6 className='text-purple-400 mb-7'>Brand Consulting</h6>
        <p className='text-white text-2xl'>
          A creative film production house crafting compelling visual stories through cinema, content, and storytelling-driven experiences.
        </p>
        <Link to={`/case-studies/suma-filmy-arts`} className='mt-5 flex items-center gap-2'>
          <ArrowRight className="w-16 h-16 text-white bg-purple-500 rounded-full p-5" />
        </Link>
      </div>
    </div> */}

     {/* 9 */}
    {/* <div className='grid grid-cols-1 md:grid-cols-2 gap-0 md:mt-0 mt-16'>
      <div className='order-1 md:order-2 w-full'>
        <img 
          src={mrconstructions} 
          alt="mrconstructions"  
          className='w-full h-auto md:h-[400px] object-contain md:object-cover p-4 md:p-0 mx-auto' 
        />
      </div>

      <div className='order-2 md:order-1 my-auto px-5'>
        <h6 className='text-purple-400 mb-7'>Digital Media</h6>
        <p className='text-white text-2xl'>
          A reliable construction firm delivering quality-driven residential and commercial projects with a <br />focus on precision, durability, and timely<br /> execution.
        </p>
        <Link to={`/case-studies/mr-constructions`} className='mt-5 flex items-center gap-2'>
          <ArrowRight className="w-16 h-16 text-white bg-purple-500 rounded-full p-5" />
        </Link>
      </div>
    </div> */}

     {/* 10 */}
    {/* <div className='grid grid-cols-1 md:grid-cols-2 gap-0 md:mt-0 mt-16'>

      <div className='order-1 md:order-1 w-full'>
        <img 
          src={swargaseema} 
          alt="swargaseema" 
          className='w-full h-auto md:h-[400px] object-contain md:object-contain p-4 md:p-0 mx-auto' 
        />
      </div>

      <div className='order-2 md:order-2 my-auto mx-0 md:mx-14 px-5'>
        <h6 className='text-purple-400 mb-7'>Brand Consulting</h6>
        <p className='text-white text-2xl'>
          A real estate development brand crafting thoughtfully planned residential communities that balance quality construction with long-term livability.
        </p>
        <Link to={`/case-studies/swargaseema`} className='mt-5 flex items-center gap-2'>
          <ArrowRight className="w-16 h-16 text-white bg-purple-500 rounded-full p-5" />
        </Link>
      </div>
    </div> */}

     {/* 11 */}
    {/* <div className='grid grid-cols-1 md:grid-cols-2 gap-0 md:mt-0 mt-16'>
      <div className='order-1 md:order-2 w-full'>
        <img 
          src={cargill} 
          alt="cargill"  
          className='w-full h-auto md:h-[400px] object-contain md:object-cover p-4 md:p-0 mx-auto' 
        />
      </div>

      <div className='order-2 md:order-1 my-auto px-5'>
        <h6 className='text-purple-400 mb-7'>Digital Media</h6>
        <p className='text-white text-2xl'>
          A global agribusiness leader delivering sustainable solutions across agriculture and aquaculture, connecting farmers, producers, and markets worldwide.
        </p>
        <Link to={`/case-studies/cargill`} className='mt-5 flex items-center gap-2'>
          <ArrowRight className="w-16 h-16 text-white bg-purple-500 rounded-full p-5" />
        </Link>
      </div>
    </div> */}

     {/* 12 */}
    {/* <div className='grid grid-cols-1 md:grid-cols-2 gap-0 md:mt-0 mt-16'>

      <div className='order-1 md:order-1 w-full'>
        <img 
          src={pronted} 
          alt="pronted" 
          className='w-full h-auto md:h-[400px] object-contain md:object-cover p-4 md:p-0 mx-auto' 
        />
      </div>

      <div className='order-2 md:order-2 my-auto mx-0 md:mx-14 px-5'>
        <h6 className='text-purple-400 mb-7'>Brand Consulting</h6>
        <p className='text-white text-2xl'>
          An education technology platform empowering institutions with digital tools that simplify learning, operations, and student engagement.
        </p>
        <Link to={`/case-studies/pronted`} className='mt-5 flex items-center gap-2'>
          <ArrowRight className="w-16 h-16 text-white bg-purple-500 rounded-full p-5" />
        </Link>
      </div>
    </div> */}

     {/* 13 */}
    {/* <div className='grid grid-cols-1 md:grid-cols-2 gap-0 md:mt-0 mt-16'>
      <div className='order-1 md:order-2 w-full'>
        <img 
          src={sadananda} 
          alt="srisanthsadanandango"  
          className='w-full h-auto md:h-[400px] object-contain md:object-contain p-4 md:p-0 mx-auto' 
        />
      </div>

      <div className='order-2 md:order-1 my-auto px-5'>
        <h6 className='text-purple-400 mb-7'>Digital Media</h6>
        <p className='text-white text-2xl'>
          A non-profit organization dedicated to uplifting communities through compassionate service,<br /> social welfare initiatives, and sustainable impact programs.
        </p>
        <Link to={`/case-studies/sri-santh-sadananda-ngo`} className='mt-5 flex items-center gap-2'>
          <ArrowRight className="w-16 h-16 text-white bg-purple-500 rounded-full p-5" />
        </Link>
      </div>
    </div> */}

     {/* 14 */}
   
     {/* 15 */}
    {/* <div className='grid grid-cols-1 md:grid-cols-2 gap-0 md:mt-0 mt-16'>
      <div className='order-1 md:order-2 w-full'>
        <img 
          src={bhramaratownships} 
          alt="sribhramaratownships"  
          className='w-full h-auto md:h-[400px] object-contain md:object-contain p-4 md:p-0 mx-auto' 
        />
      </div>

      <div className='order-2 md:order-1 my-auto px-5'>
        <h6 className='text-purple-400 mb-7'>Digital Media</h6>
        <p className='text-white text-2xl'>
          A real estate development company in Andhra Pradesh focused on creating well-planned<br /> residential layouts and townships built on <br />trust, quality, and long-term value.
        </p>
        <Link to={`/case-studies/sri-bhramara-townships`} className='mt-5 flex items-center gap-2'>
          <ArrowRight className="w-16 h-16 text-white bg-purple-500 rounded-full p-5" />
        </Link>
      </div>
    </div> */}

 




      {/* <section className='max-w-8xl'>
        <div className='grid grid-cols-2 py-20 bg-black sm:px-4 lg:px-11 gap-0'>
          <div className='my-auto'>
            <h6 className='text-purple-400 mb-7'>Brand Consulting | Digital Media</h6>
            <p className='text-white text-2xl'>A legacy brand known for delivering <br /> the true taste of South India through its premium <br /> range of traditional snacks and spice blends.</p>
            <Link to={`/case-studies/telugu-foods`} className='mt-5 flex items-center gap-2'>
              <ArrowRight className="w-16 h-16 text-white bg-purple-500 rounded-full p-5" />
            </Link>
          </div>

          <div className='w-full'>
            <img src={chickengarammeat} alt="branding" className='w-full h-[400px]'/>
          </div>




          <div className='w-full'>
            <img src={suryacolorone} alt="branding"  className='w-full h-[400px]'/>
          </div>

           <div className='my-auto mx-14'>
            <h6 className='text-purple-400 mb-7'>Brand Consulting</h6>
            <p className='text-white text-2xl'>A heritage paint brand dedicated to <br /> bringing walls to life through rich colours, smooth finishes, and a deep understanding of Indian homes and spaces.</p>
            <Link to={`/case-studies/surya-colors`} className='mt-5 flex items-center gap-2'>
              <ArrowRight className="w-16 h-16 text-white bg-purple-500 rounded-full p-5" />
            </Link>
          </div>



           <div className='my-auto'>
            <h6 className='text-purple-400 mb-7'>Brand Consulting</h6>
            <p className='text-white text-2xl'>A contemporary food brand redefining everyday convenience with its instant dosa range, blending traditional taste with modern, time-saving innovation.</p>
            <Link to={`/case-studies/tdh-rishika`} className='mt-5 flex items-center gap-2'>
              <ArrowRight className="w-16 h-16 text-white bg-purple-500 rounded-full p-5" />
            </Link>
          </div>


           <div className='w-full'>
            <img src={tdhsunnundalu} alt="branding" className='w-full h-[400px]'/>
          </div>

          <div className='w-full'>
            <img src={tenalidoublehorseuradgota} alt="branding" className='w-full h-[400px]'/>
          </div>


          <div className='my-auto mx-14'>
            <h6 className='text-purple-400 mb-7'>Brand Consulting</h6>
            <p className='text-white text-2xl'>A trusted household name known for delivering purity and consistency through its wide range of premium pulses and essential staples.</p>
           <Link to={`/case-studies/tenali-double-horse`} className='mt-5 flex items-center gap-2'>
              <ArrowRight className="w-16 h-16 text-white bg-purple-500 rounded-full p-5" />
            </Link>
          </div>



            <div className='my-auto'>
            <h6 className='text-purple-400 mb-7'>Digital Media</h6>
            <p className='text-white text-2xl'>A powerful detergent brand engineered to deliver deep cleaning and long-lasting freshness, trusted for tackling tough stains in everyday laundry.</p>
             <Link to={`/case-studies/triplex`} className='mt-5 flex items-center gap-2'>
              <ArrowRight className="w-16 h-16 text-white bg-purple-500 rounded-full p-5" />
            </Link>
          </div>


           <div className='w-full'>
            <img src={triplexthree} alt="branding"  className='w-full h-[400px]'/>
          </div>


          <div className='w-full'>
            <img src={vsbthree} alt="branding"  className='w-full h-[400px]'/>
          </div>


           <div className='my-auto mx-14'>
            <h6 className='text-purple-400 mb-7'>Brand Consulting | Digital Media </h6>
            <p className='text-white text-2xl'>A leading stone and surfaces brand specializing in premium granite solutions for modern kitchens, flooring, and architectural spaces.</p>
            <Link to={`/case-studies/vsb`} className='mt-5 flex items-center gap-2'>
              <ArrowRight className="w-16 h-16 text-white bg-purple-500 rounded-full p-5" />
            </Link>
          </div>


          <div className='my-auto mx-14'>
            <h6 className='text-purple-400 mb-7'>Digital Media</h6>
            <p className='text-white text-2xl'>An innovative laundry care brand introducing India’s first detergent tablets, designed for precise dosing, powerful cleaning, and modern washing machines.</p>
            <Link to={`/case-studies/zavaine`} className='mt-5 flex items-center gap-2'>
              <ArrowRight className="w-16 h-16 text-white bg-purple-500 rounded-full p-5" />
            </Link>
          </div>


          <div className='w-full'>
            <img src={zavainethree} alt="branding"  className='w-full h-[400px]'/>
          </div>

          </div>  
      </section> */}





      {/* CTA Section */}
      <section className="py-20 bg-white text-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Your Brand Could Be Our Next Success Story</h2>
            <p className="text-xl text-gray-900 mb-8">
              Ready to transform your business into an iconic brand? Let's discuss your vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-[#683FBF] text-white px-8 py-4 font-semibold hover:bg-[#5a35a3] transition-colors"
              >
                Book a Strategy Call
              </Link>
              <Link
                to="/brand-audit"
                className="border-2 border-[#683FBF] text-[#683FBF] px-8 py-4 font-semibold hover:bg-[#683FBF] hover:text-white transition-colors"
              >
                Take the Brand Audit
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;

