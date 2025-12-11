import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Award, Users, TrendingUp, CheckCircle, Star, Play, ChevronRight, Trophy, Sparkles, ChevronUp, ChevronDown, ArrowUpRight, ArrowLeft } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import Navigation from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';
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
import statsimage from '/assets/banners/stats-image.jpeg';
import logo01 from '/assets/banners/logo-01.svg';
import Favi01 from '/assets/banners/Favi-01.svg';

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
// import bannersix from "/assets/banners/banner-six.jpeg";
import bannerseven from "/assets/banners/banner-seven.jpeg";
import { image } from 'framer-motion/client';




import BrandingPatternLYN from '/assets/works/Branding-Pattern-LYN.jpg'
import chickengarammeat from '/assets/works/chicken-garam-meat.png'
import suryacolorthree from '/assets/works/surya-color-three.png'
import tdhdosa from '/assets/works/tdh-dosa.png'
import tenalidoubleproducts from '/assets/works/tenali-double-products.png'
import triplexthree from '/assets/works/triplex-three.png'
import vsbthree from '/assets/works/vsb-three.png'
import zavainethree from '/assets/works/zavaine-three.png'




const Home = () => {
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


  const services = [
    { name: 'Brand Consulting', href: '/brand-consulting' },
    { name: 'Personal Brand Consulting', href: '/personal-brand-consulting' },
    { name: 'Image Consulting', href: '/image-consulting' },
    { name: 'Corporate Rebranding', href: '/corporate-rebranding' },
    { name: 'Launchpad', href: '/launchpad' },
    { name: 'Brand Expresso', href: '/brand-expresso' },
    { name: 'Brand Creation', href: '/brand-creation' },
    { name: 'Link Fluence', href: '/link-fluence' }
  ];


  const sectionBg = {
    background: 'linear-gradient(120deg, #AC92E0 0%, #CBB4F6 100%)',
  };




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
  ];

  
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

  //   const backgroundImages = [
  //    { src: natureimage, alt: 'natureimage' },
  // clients array moved above to avoid using it before declaration


  //  const clients = [
  //   { src: magsmenSweatTeluguFoods, alt: 'telugu-foods' },
  //   { src: magsmenColors, alt: 'surya-colors' },
  //   { src: magsmenTenaliDoubleHorse, alt: 'tenali-double-horse' },
  //   { src: magsmenTriplexxx, alt: 'triplex' },
  //   { src: magsmenVsb, alt: 'vsb' },
  //   { src: sumaFilmyArts, alt: 'suma-filmy-arts' },
  //   { src: instantFoods, alt: 'instant-foods' },
  //   { src: sumaKanakala, alt: 'suma-kanakala' },
  //   { src: cargil, alt: 'cargil' },
  //   { src: magsmenZavane, alt: 'zavaine' },
  //   { src: pronted, alt: 'prontend' },
  //   { src: chakrasiddh, alt: 'chakrasiddh' },
  //   { src: logo4, alt: '19builders' },
  //   { src: magsenJayalakshmi, alt: 'jayalakshmi' },
  //   { src: rootcapLion, alt: 'lion' },
  //   { src: rootcapLogo, alt: 'rootcap' },
  //   { src: magsenMvrLogo, alt: 'partner' },
  //   { src: logo6, alt: 'bniguntur' },
  //   { src: bdLogo1, alt: 'BD-Logo-1' },
  //   { src: karumaunchi, alt: 'karumaunchi' },
  //   { src: greatindia, alt: 'greatindia' },
  //   { src: siri, alt: 'siri' },
  //   { src: crown, alt: 'crown' },
  //   { src: pemmasaniAssociates, alt: 'pemmasani-associates' },
  //   { src: jayacottonProducts, alt: 'jayacotton-products' },
  //   { src: manna, alt: 'manna' },
  //   { src: theBox, alt: 'the-box' },
  // ];

  // const awards = [
  //   {
  //     title: "Consultant of the Year 2023",
  //     image: award1,
  //   },
  //   {
  //     title: "Top 100 Admiring Marketing Leaders",
  //     image: award2,
  //   },
  //   {
  //     title: "MMA Global Jury Member",
  //     image: award3,
  //   },{
  //     id: 1,
  //     icon: <Trophy className="w-full h-full text-purple-200" />,
  //     label: 'Consultant of the Year 2023',
  //     description: 'Recognized for outstanding advisory services and client results.', // Added description
  //     image: award1
  //   },
  //   {
  //     id: 2,
  //     icon: <Award className="w-full h-full text-purple-200" />,
  //     label: 'Top 100 Admiring Marketing Leaders',
  //     description: 'Acknowledged among global leaders for innovative marketing strategies.', // Added description
  //     image: award2
  //   },
  //   {
  //     id: 3,
  //     icon: <Sparkles className="w-full h-full text-purple-200" />,
  //     label: 'MMA Global Jury Member',
  //     description: 'Serving on the Mobile Marketing Association Global awards judging panel.', // Added description
  //     image: award3
  //   },
  // ];

  const hengeItems = [
    {
      id: 1,
      icon: <Trophy className="w-full h-full text-purple-200" />,
      label: 'Consultant of the Year 2023',
      description: 'Recognized for outstanding advisory services and client results.', // Added description
      image: award1
    },
    {
      id: 2,
      icon: <Award className="w-full h-full text-purple-200" />,
      label: 'Top 100 Admiring Marketing Leaders',
      description: 'Acknowledged among global leaders for innovative marketing strategies.', // Added description
      image: award2
    },
    {
      id: 3,
      icon: <Sparkles className="w-full h-full text-purple-200" />,
      label: 'MMA Global Jury Member',
      description: 'Serving on the Mobile Marketing Association Global awards judging panel.', // Added description
      image: award3
    },
  ];






  const testimonialsData = [
    { id: 1, rating: 5, name: 'Nikitha Muvva', title: 'Business Analyst', company: '', quote: " Telugu Foods is a renowned brand in over 24+ countries with more than a million happy customers. We hired Magsmen for brand consulting and help us build a digital strategy for Telugu Foods.", imageUrl: telugufoodstestimonial },
    { id: 2, rating: 5, name: 'Manickavel', title: 'Chairman & Managing Director', company: '', quote: "We have been associated with Magsmen for two years. They helped our brand Triplex, a pioneer in the detergent market for 30 years, enter the digital space and proposed a digital strategy.", imageUrl: xxxtestimonial },
    { id: 3, rating: 5, name: 'Kranthi Kiran', title: 'International Business Manager', company: '', quote: "Thanks to Magsmen, we discovered brand architecture and a fresh strategy for VSB. Their rebranding and LinkedIn approach have tripled our followers and marked a new growth phase.", imageUrl: vsbtestimonial },
    { id: 4, rating: 5, name: '', title: '', company: '', quote: "Magsmen guided our brand identity with unmatched insight. They solved challenges effortlessly, offering clarity and solutions. Truly transformed our brand with strategy and execution.", imageUrl: bhramaratestimonial },
    { id: 5, rating: 5, name: '', title: '', company: '', quote: "Magsmen is my go-to for reputation management. Their research and rebranding transformed my brand and strategies. The Maheswari Movies launch shows their creativity.", imageUrl: sumatestimonial },
    { id: 6, rating: 5, name: 'Krishnaprasad N.V', title: 'General Manager', company: 'Nexatech', quote: "We hired Magsmen as our brand consultants in March 2021. Thanks to their strategy of bringing a new phase to the brand, we've seen a whole new Tenali Double Horse with a redefined vision.", imageUrl: tenalidoublehorsetestimonial },
  ];


  const RatingStars: React.FC<{ count: number }> = ({ count }) => (
    <div className="flex space-x-0.5 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-xl text-black">
          ★
        </span>
      ))}
    </div>
  );

  const swiperRef = React.useRef<any>(null);

  // const testimonialsData = [
  //   {
  //     id: 1,
  //     rating: 5,
  //     // avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Example image URL
  //     name: 'Nikitha Muvva ',
  //     title: 'Business Analyst',
  //     company: '',
  //     quote: " Telugu Foods is a renowned brand in over 24+ countries with more than a million happy customers. We hired Magsmen for brand consulting and help us build a digital strategy for Telugu Foods.",
  //     imageUrl: telugufoodstestimonial
  //   },
  //   {
  //     id: 2,
  //     rating: 5,
  //     // avatar: 'https://images.unsplash.com/photo-1507003211169-e6955a6d8023?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Example image URL
  //     name: 'Manickavel',
  //     title: 'Chairman & Managing Director',
  //     company: '',
  //     quote: "We have been associated with Magsmen for two years. They helped our brand Triplex, a pioneer in the detergent market for 30 years, enter the digital space and proposed a digital strategy.",
  //     imageUrl: xxxtestimonial
  //   },
  //   {
  //     id: 3,
  //     rating: 5,
  //     // avatar: 'https://images.unsplash.com/photo-1599566150163-29194d699579?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Example image URL
  //     name: 'Kranthi Kiran',
  //     title: 'International Business Manager',
  //     company: '',
  //     quote: "Thanks to Magsmen, we discovered brand architecture and a fresh strategy for VSB. Their rebranding and LinkedIn approach have tripled our followers and marked a new growth phase.",
  //     imageUrl: vsbtestimonial
  //   },
  //   {
  //     id: 4,
  //     rating: 5,
  //     // avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2561&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Example image URL
  //     name: '',
  //     title: '',
  //     company: '',
  //     quote: "Magsmen guided our brand identity with unmatched insight. They solved challenges effortlessly, offering clarity and solutions. Truly transformed our brand with strategy and execution.",
  //     imageUrl: bhramaratestimonial
  //   },
  //   {
  //     id: 5,
  //     rating: 5,
  //     // avatar: 'https://images.unsplash.com/photo-1599566150163-29194d699579?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Example image URL
  //     name: '',
  //     title: '',
  //     company: '',
  //     quote: "Magsmen is my go-to for reputation management. Their research and rebranding transformed my brand and strategies. The Maheswari Movies launch shows their creativity.",
  //     imageUrl: sumatestimonial
  //   },
  //   {
  //     id: 6,
  //     rating: 5,
  //     // avatar: 'https://images.unsplash.com/photo-1599566150163-29194d699579?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Example image URL
  //     name: 'Krishnaprasad N.V',
  //     title: 'General Manager',
  //     // company: 'Nexatech',
  //     quote: "We hired Magsmen as our brand consultants in March 2021. Thanks to their strategy of bringing a new phase to the brand, we've seen a whole new Tenali Double Horse with a redefined vision.",
  //     imageUrl: tenalidoublehorsetestimonial
  //   },
  // ];

  const caseStudies = [
    {
      client: 'Telugu Foods',
      industry: 'FMCG',
      description: 'Telugu Foods was struggling to increase brand awareness and sales in the highly competitive food industry. ',
      metric: 'Achieved +25% brand awareness and +15% sales growth within 3 months',
      slug: 'telugu-foods',
      imageUrl: magsmentelugufoods

    },
    {
      client: 'Surya Colors',
      industry: 'Paints & Coatings',
      description: 'Surya Colors was struggling to increase brand stability and awareness in the highly competitive market. They lacked a clear digital and brand strategy, resulting in low engagement and product awareness.',
      metric: 'Improved brand stability by 40% and increased digital engagement by 50% within 4 months',
      slug: 'surya-colors',
      imageUrl: magsmensuryacolors
    },
    {
      client: 'TDH Rishika',
      industry: 'FMCG – Younder Generation',
      description: 'TDH, a Younder Generation brand from Tenali Double Horse focused on the FMCG industry, faced the challenge of establishing a unique brand identity and launching the product across India in a cost-efficient manner. The brand needed to develop a comprehensive strategy for package design, brand strategy, and content & influencer marketing to improve brand awareness and sales.',
      metric: 'Achieved +35% brand awareness and +20% sales growth in the first 6 months through strategic packaging, influencer marketing, and digital campaigns',
      slug: 'tdh-rishika',
      imageUrl: magsmentdhrishika
    },
    {
      client: 'Tenali Double Horse',
      industry: 'FMCG - Food Products',
      description: 'Tenali Double Horse, one of the biggest brands in South India, needed to focus on consistency, brand positioning, and clear strategy for new markets. With multiple teams handling the brand, there was a lack of unified brand guidelines and digital strategy.',
      metric: '+30% engagement, US market entry via Amazon, unified brand guidelines implemented',
      slug: 'tenali-double-horse',
      imageUrl: magsmenTenaliDoubleHorse
    },
    {
      client: 'Triplex',
      industry: 'FMCG, Laundry & Cleaning Products',
      description: 'Triplex, as a top detergent company in the Telugu states, faced the challenge of establishing a strong digital and social media presence to increase brand awareness and reach.',
      metric: '+25% social media followers, +30% engagement, +35% website traffic, 500k+ video views',
      slug: 'triplex',
      imageUrl: magsmentriplex
    },
    {
      client: 'VSB Surface',
      industry: 'Granite & Quartz Export',
      description: 'VSB Group, one of the top exporters of granites and quartz in South India, faced the challenge of improving their brand presence both online and offline. The brand needed a complete revamp to create a tailored approach for each of the 45 countries they export to.',
      metric: 'Brand revamp across 45 countries, +40% digital visibility, +25% client inquiries',
      slug: 'vsb',
      imageUrl: magsmenvsb
    },
    {
      client: 'Zavaine',
      industry: 'FMCG,Laundry & Cleaning Products',
      description: "Zavaine, India's first detergent tablet and a sister brand of Triplex, South India's biggest detergent brand, needed to establish itself as a market leader and increase product awareness and sales.",
      metric: '+20% brand awareness, +15% sales growth, successful product launch campaigns',
      slug: 'zavaine',
      imageUrl: magsmenzavaine
    }
  ];

  const blogs = [
    {
      title: 'Hyper-Personalization: Crafting Brand Experiences That Speak to Gen Z’s Individuality',
      slug: 'crafting-brand-experiences-that-speak-to-gen-zs-individuality',
      description: "Gen Z demands more than just generic ads they seek personalization and authenticity in every brand interaction. To connect with this audience, brands must deliver hyper-personalized experiences that cater to their unique preferences and values. Here's how to do it.",
      imageUrl: hyperpersonalizationcraftingbrandexperiences
    },
    {
      title: 'The Future of Branding: Trends Shaping the Next Decade',
      slug: 'the-future-of-branding-trends-shaping-the-next-decade',
      description: 'In the world of branding, what resonates with consumers is evolving quickly. To thrive, brands must not only keep up with these shifts but set the pace for what’s next. At Magsmen Brand Consultants, we’re diving into the top trends set to define branding in the coming decade.',
      imageUrl: thefutureofbrandingtrendsshapingthenextdecade
    },
    {
      title: 'The Brand Journey: Guiding Startups from Idea to Iconic',
      slug: 'the-brand-journey-guiding-startups-from-idea-to-iconic',
      description: 'Building an iconic brand doesn’t just happen overnight. It’s a journey that takes a clear purpose, creative consistency, and the right strategy to grow into something people truly recognize and trust.',
      imageUrl: thebrandjourneyguidingstartupsfromideatoiconic
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero section old  */}
      <section className="relative text-black overflow-hidden lg:py-20 bg-gray-100">

        {/* <Link to="/" className="flex items-center justify-center">
          <img
            src={logo01}
            alt="MagsmenLogo"
            className="h-16 sm:h-10 md:h-[14rem] w-auto"
          />
        </Link> */}

        <div className="absolute inset-0 top-0 left-0 mx-auto">
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            // style={{ backgroundImage: `url(${backgroundImages[currentBgIndex]})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0 }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-0 lg:px-0 ml-12 flex flex-col justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-4xl"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold lg:text-6xl mb-10 mt-10 leading-[1.1] tracking-wide text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              Struggling to  Build  Your  Brand? {" "} Strategy Starts Here.
              {/* <AnimatePresence>
                <motion.span
                  key={currentTextIndex}
                  className="absolute text-right ml-4 font-normal font-semibold tracking-normal text-[#683FBF]"
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.8 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  {clients[currentTextIndex] ? (
                    <img
                      src={clients[currentTextIndex].src}
                      alt={clients[currentTextIndex].alt || 'client logo'}
                      className="inline-block w-12 h-12 object-contain -mt-1"
                    />
                  ) : null}
                </motion.span>
              </AnimatePresence> */}

              <p className='md:text-2xl tracking-wider py-5 font-thin text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit beatae a dolor fuga minima qui recusandae perspiciatis officia? Soluta quae nam inventore consectetur id itaque?</p>
            </motion.h1>

            <motion.div
              className="flex justify-center sm:flex-row gap-6 items-center "
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="bg-black tracking-wide text-white px-8 py-4 font-semibold hover:bg-[#5a35a3] transition-all duration-300 flex justify-center items-center group shadow-xl hover:shadow-2xl"
                >
                  Book Your Free Brand Discovery Call
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/brand-audit"
                  className="bg-black border tracking-wide border-white/30 text-white px-8 py-4 font-semibold bg-[#683FBF]  hover:bg-[#683FBF] hover:text-white transition-all duration-300 flex items-center group  hover:border-[#683FBF]"
                >
                  Take the 2-Minute Brand Audit
                  <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>


        <motion.div
          className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
        />
        <motion.div
          className="absolute top-20 right-20 w-2 h-2 bg-[#683FBF] rounded-full opacity-60"
          animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-32 left-20 w-1 h-1 bg-white rounded-full opacity-40"
          animate={{ scale: [1, 2, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </section>


      {/* new success stories section */}
      <section className="py-24">
        <div className="grid md:grid-cols-2 gap-10 mx-auto items-center justify-center max-w-7xl px-6 md:px-14">
          {/* Left Text Section */}
          <div>
            <h1 className="text-4xl md:text-6xl font-light text-black tracking-tight mb-6">
              Success <br />
              <span className="font-thin">Stories</span>
            </h1>
            <p className="text-gray-600 text-black leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ea
              suscipit accusantium nobis hic voluptatum alias iusto quis, maxime
              debitis, tempora doloremque maiores. Non et ex fugiat. Minima,
              expedita delectus?
            </p>
          </div>

          {/* Right Image Grid */}

          {/* Image Card 1 */}
          <div className="relative group overflow-hidden">
            <video className="w-full h-full object-cover" autoPlay muted loop>
              <source src="/assets/banners/magsmen-home-page-show-reel-building-brands-company-introduction-India12.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></div>
            {/* Title */}
            <h3 className="absolute bottom-4 left-4 text-white text-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              Telugu Foods
            </h3>
          </div>


          <div className="relative group overflow-hidden">
            <video className="w-full h-full object-cover" autoPlay muted loop>
              <source src="/assets/banners/magsmen-home-page-show-reel-building-brands-company-introduction-India12.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></div>
            <h3 className="absolute bottom-4 left-4 text-white text-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              Surya Colors
            </h3>
          </div>


          <div className="relative group overflow-hidden">
            <video className="w-full h-full object-cover" controls autoPlay muted loop>
              <source src="/assets/banners/magsmen-home-page-show-reel-building-brands-company-introduction-India12.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></div>
            <h3 className="absolute bottom-4 left-4 text-white text-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              TDH Rishika
            </h3>
          </div>


          <div className="relative group overflow-hidden">
            <video className="w-full h-full object-cover" autoPlay muted loop>
              <source src="/assets/banners/magsmen-home-page-show-reel-building-brands-company-introduction-India12.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></div>
            <h3 className="absolute bottom-4 left-4 text-white text-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              Tenali Double Horse
            </h3>
          </div>


          <div className="relative group overflow-hidden">
            <video className="w-full h-full object-cover" autoPlay muted loop>
              <source src="/assets/banners/magsmen-home-page-show-reel-building-brands-company-introduction-India12.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></div>
            <h3 className="absolute bottom-4 left-4 text-white text-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                XXX
            </h3>
          </div>


          <div className="relative group overflow-hidden">
            <video className="w-full h-full object-cover" autoPlay muted loop>
              <source src="/assets/banners/magsmen-home-page-show-reel-building-brands-company-introduction-India12.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></div>
            <h3 className="absolute bottom-4 left-4 text-white text-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              VSB Surface
            </h3>
          </div>

          <div className="relative group overflow-hidden">
            <video className="w-full h-full object-cover" autoPlay muted loop>
              <source src="/assets/banners/magsmen-home-page-show-reel-building-brands-company-introduction-India12.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></div>
            <h3 className="absolute bottom-4 left-4 text-white text-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              ZAVAINE
            </h3>
          </div>
        </div>
      </section>




      {/* Our services */}
      <section
        className="w-full flex items-center justify-center px-2 h-full bg-black py-32">
        <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-start md:items-start gap-8">
          <div className="w-full md:w-5/4 flex flex-col justify-center md:justify-start md:items-start my-auto">
            <h2 className='text-4xl text-white text-white/60'>From sharpening your brand’s core narrative to delivering it consistently across design, communication, and customer experience, we ensure your brand stands out with intention and scales with clarity.</h2>
          </div>
          <div className="w-full md:w-4/5 bg-black  shadow py-4 relative" style={{ minHeight: 420 }}>
            <ul className="w-full">
              {services.map((service, idx) => (
                <li key={service.name} className="flex flex-col">
                  <div className="flex items-center justify-between group">
                    <span className="text-white/60 text-2xl md:text-3xl py-4 pl-2">{service.name}</span>
                    <Link
                      to={service.href}
                      className="ml-4 flex items-center text-white/60 hover:text-[#683FBF] transition-colors"
                      aria-label={`Go to ${service.name}`}
                    >
                      <ArrowUpRight size={28} />
                    </Link>
                  </div>
                  {idx !== services.length - 0 && <hr className="border-b border-gray-500 w-full" />}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>


      {/* trusted brands section */}
      <section className=" pt-36 bg-white ">
        <div className="max-w-6xl mx-auto ml-12 ">
          {/* Heading */}
          <div className="text-left">
            <h2 className="text-6xl font-light text-gray-900 mb-4 tracking-tight">
              Trusted by India's Fastest Growing Brands
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-2xl">
              Over 100 brands across 15 industries have trusted Magsmen to guide their transformation.
            </p>
          </div>

          {/* LOGO GRID — EXACTLY 17 logos */}
          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 gap-0 items-center justify-center">

            {clients.slice(0, 17).map((client, index) => (
              <React.Fragment key={index}>

                {/* FIRST 12 LOGOS → NORMAL GRID */}
                {index < 12 && (
                  <div className="p-6 text-center flex justify-center items-center">
                    <img
                      src={client.src}
                      alt={client.alt}
                      className="h-[90px] w-[90px] object-contain filter grayscale hover:grayscale-0"
                    />
                  </div>
                )}

                {/* DIVIDER AFTER 6 & 12 LOGOS */}
                {(index === 5 || index === 11) && (
                  <div className="col-span-full -my-0">
                    <hr className="border-gray-300" />
                  </div>
                )}

                {/* LAST 5 LOGOS → CENTERED ROW */}
                {index === 12 && (
                  <div className="col-span-full flex justify-center gap-10 py-6 flex-wrap pb-32">
                    {clients.slice(12, 17).map((lastClient, lastIndex) => (
                      <div
                        key={lastIndex}
                        className="p-6 text-center flex justify-center items-center"
                      >
                        <img
                          src={lastClient.src}
                          alt={lastClient.alt}
                          className="h-[90px] w-[90px] object-contain filter grayscale hover:grayscale-0"
                        />
                      </div>
                    ))}
                  </div>
                )}

              </React.Fragment>
            ))}

          </div>
        </div>
      </section>


      {/* about section */}
      <section className="bg-gray-100 min-h-screen flex items-center justify-center"> {/* bg-[#f3f3f1] */}
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center md:items-start px-8 md:px-12 py-16 mx-auto">
          <div className="md:w-1/2 w-full md:pr-16">
            <h1 className="text-black font-bold text-5xl md:text-6xl font-light leading-tight mb-8" style={{ fontFamily: "inherit" }}>
              Your Brand's Secret Weapon The Right Strategy.

            </h1>
            <p className="mb-8 text-xl font-normal text-black">

              Get more from your brand. We're your strategic partner, offering expert
              guidance to propel your brand forward.

              Already have marketing muscle? We complement your team, providing the
              missing piece for a truly impactful brand strategy.
            </p>
          </div>
          <div className="md:w-1/2 w-full flex flex-col justify-center mt-12 md:mt-0">
            <div className="w-full max-w-2xl aspect-video bg-black">
              <video className="w-full h-full object-cover" controls autoPlay muted loop>
                <source src="/assets/banners/magsmen-home-page-show-reel-building-brands-company-introduction-India12.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-white px-7 py-4 mt-8 text-black text-lg font-bold shadow hover:bg-gray-100 transition"
              >

                About
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

          </div>
        </div>
      </section>


      {/* testimonils */}
      <section className="py-32 bg-gray-200 testimonials-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0">

          <div className="flex justify-between items-center mb-12 md:mb-10">
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl text-gray-900 tracking-tight font-light">
                What Our Clients Say
              </h2>
              <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl">
                Hear directly from the brands and businesses we’ve helped grow.
              </p>
            </div>


            <div className="flex flex-col space-y-2 text-gray-500">
              <button
                aria-label="Previous testimonial"
                onClick={() => swiperRef.current?.slidePrev()}
                className="w-8 h-8 flex items-center justify-center border border-gray-400 hover:border-gray-900 transition-colors"
              >
                &larr;
              </button>
              <button
                aria-label="Next testimonial"
                onClick={() => swiperRef.current?.slideNext()}
                className="w-8 h-8 flex items-center justify-center border border-gray-400 hover:border-gray-900 transition-colors"
              >
                &rarr;
              </button>
            </div>
          </div>

          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Pagination, Autoplay]}
            spaceBetween={32}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 32 },
              1024: { slidesPerView: 2, spaceBetween: 32 },
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            className="pb-2"
          >
            {testimonialsData.map((testimonial, index) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  viewport={{ once: true, amount: 0.4 }}
                  className="relative flex flex-col justify-between p-10 lg:p-12 bg-white shadow-md border border-gray-200"
                  style={{ minHeight: "450px" }}
                >

                  <RatingStars count={testimonial.rating} />

                  <div className="relative z-10 flex-1">
                    <p className="text-gray-800 text-xl leading-relaxed mb-8">
                      {testimonial.quote}
                    </p>
                  </div>

                  <div className="relative z-20 flex justify-between items-end mt-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.imageUrl}
                        alt={testimonial.name || "Client"}
                        className="w-20 h-20 rounded-full object-contain"
                      />
                      <div className="flex flex-col">
                        <span className="font-bold text-gray-900 text-lg">
                          {testimonial.name || ''}
                        </span>
                        {(testimonial.title || testimonial.company) && (
                          <span className="text-gray-600 text-base">
                            {testimonial.title} {testimonial.company ? `@ ${testimonial.company}` : ''}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* FIX: Replaced &rdquo; with the Font Awesome icon */}
                    {/* <i
                      className="fas fa-quote-right text-[100px]  text-black select-none z-0 pointer-events-none leading-none"
                      aria-hidden="true"
                    ></i> */}
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

{/* awards section */}
<section
  className="pt-24 pb-10 text-white"
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
    <div className="w-full text-left mb-14">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-col items-start"
      >
        <h2 className="text-4xl md:text-6xl font-light leading-snug tracking-tight text-white/70">
          Professional
        </h2>
        <span className="text-6xl md:text-4xl font-bold tracking-tight text-white">
          Awards
        </span>
      </motion.div>
    </div>

    {/* AWARDS LIST */}
    <div className="w-full">
      <ul className="space-y-0">
        {hengeItems.map((item, index) => (
          <motion.li
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
            className="py-14 border-b border-white/20 last:border-b-0"
          >

            {/* GRID ROW (ICON + TITLE + DESCRIPTION) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">

              {/* ICON COLUMN */}
              <div className="md:col-span-1 flex md:justify-start justify-center">
                <div className="relative w-14 h-14 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.label}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* TITLE COLUMN */}
              <div className="md:col-span-4">
                <p className="text-xl font-bold uppercase text-white tracking-wide leading-snug">
                  {item.label}
                </p>
              </div>

              {/* DESCRIPTION COLUMN */}
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




      {/* Stats Section */}
      <div className="p-12 relative overflow-hidden"
        // style={{
        //   backgroundImage: `url(${statsimage})`,
        //   backgroundSize: 'cover',
        //   backgroundPosition: 'center',
        //   // backgroundRepeat: 'no-repeat',
        // }}
      >
        <div className="absolute inset-0"></div>
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full -translate-y-32 translate-x-32"></div>

        <div className="relative z-10 bg-black py-8  rounded-full">
          <div className="text-center mb-0 pt-16">
            <h2 className="text-3xl font-bold mb-4 text-white">Trusted by Industry Leaders</h2>
            <p className="text-gray-300 text-lg">Results that speak for themselves</p>
          </div>

          <div className="grid md:grid-cols-4 gap-0 text-center flex items-center pb-14 pt-12">
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">11</div>
              <div className="text-gray-300">Sectors</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">312+</div>
              <div className="text-gray-300">Brand Strategies Built</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">14</div>
              <div className="text-gray-300">Awards Achievement</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">412M</div>
              <div className="text-gray-300">Impressions Reached</div>
            </div>
          </div>
        </div>
      </div>







      {/* Final CTA */}
      <section
        className="py-24 bg-gray-50 bg-cover bg-center getstarted-section"
        style={{ backgroundImage: `url(${getstartedimage})` }}
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-light text-gray-900 mb-8 tracking-tight text-white">Your brand deserves strategic clarity.</h2>
            <p className="text-xl text-gray-600 mb-12 font-light max-w-2xl mx-auto text-white">
              Let's transform your business into an iconic brand that customers remember and trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-[#683FBF] text-white px-8 py-4 font-medium hover:bg-[#5a35a3] transition-colors"
              >
                Schedule a Call
              </Link>
              <Link
                to="/brand-audit"
                className="border border-gray-300 text-purple-200 px-8 py-4 font-medium hover:bg-[#683FBF] hover:text-white transition-colors"
              >
                Take the Brand Audit
              </Link>
            </div>
          </motion.div>
        </div>
      </section>




      {/* Blogs Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-12">
          <h2 className="text-3xl font-bold md:text-6xl text-left mb-12">Insights & Blogs</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {blogs.map((blog) => (
              <div key={blog.slug} className="bg-white  shadow-lg overflow-hidden">
                <img src={blog.imageUrl} alt={blog.title} className="w-full h-48 object-contain" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 line-clamp-2">{blog.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{blog.description}</p>
                  <a href={`/blog/${blog.slug}`} className="text-purple-600 font-medium">
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};






{/* banners slider Hero Section */ }
{/* <section className="relative bg-black text-white py-32 lg:py-40 overflow-hidden">
     
      <div className="absolute inset-0">
        {backgroundImages.map((img, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${img})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentBgIndex ? 1 : 0 }}
            transition={{ duration: 1 }}
          />
        ))}

        
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        />
      </div>

    
      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-4xl"
        >
         

         
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-light mb-8 leading-[1.1] tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            We Transform Indian Businesses into {' '}
            <AnimatePresence>
              <motion.span
                key={currentTextIndex}
                className="absolute text-right ml-4 font-normal italic text-[#683FBF]"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.8 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                {animatedHomeTexts[currentTextIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.h1>

     
          <motion.div
            className="flex flex-col sm:flex-row gap-6 items-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="bg-[#683FBF] text-white px-8 py-4 font-semibold hover:bg-[#5a35a3] transition-all duration-300 flex items-center group shadow-xl hover:shadow-2xl rounded-lg"
              >
                Book Your Free Brand Discovery Call
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/brand-audit"
                className="border border-white/30 text-white px-8 py-4 font-semibold hover:bg-[#683FBF] hover:text-white transition-all duration-300 flex items-center group rounded-lg hover:border-[#683FBF]"
              >
                Take the 2-Minute Brand Audit
                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
    
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
      />
      <motion.div 
        className="absolute top-20 right-20 w-2 h-2 bg-[#683FBF] rounded-full opacity-60"
        animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-32 left-20 w-1 h-1 bg-white rounded-full opacity-40"
        animate={{ scale: [1, 2, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
  </section> */}



{/* hero section new */ }
{/* <section className="relative bg-[#1a1a1a] text-white py-20 md:py-32 overflow-hidden h-auto min-h-[570px]">


    <div className="absolute inset-0 top-0 left-0">
        <div className="absolute inset-0 bg-black/0"></div> 
        

        <div className="absolute top-0 left-0 h-full w-2/5 bg-gradient-to-r from-black via-[#382626]/80 to-black/0"></div>
        

        <div className="absolute top-0 right-0 h-full w-1/4 bg-gradient-to-l from-[#382626]/80 to-black/0"></div>
    </div>


    <div className="relative max-w-7xl mx-auto px-6 lg:px-8"> 
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}

            className="grid md:grid-cols-2 gap-10 md:gap-20 items-center" 
        >
     
            <div className="md:col-span-1">
                <motion.h1
                    className="text-5xl sm:text-7xl lg:text-7xl font-bold leading-tight tracking-tight text-white mb-0" 
                    initial={{ opacity: 0, x: -50 }} 
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                   Struggling to Build Your Brand? The Strategy Starts Here.
                    
              
                    
                </motion.h1>
              
            </div>


       
            <div className="md:col-span-1 pt-10 md:pt-16">
                
            
                <motion.p
                    className="text-lg mb-8 max-w-sm"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                >
                    Struggling with digital growth? We help boost your online success!
                </motion.p>

      
                <motion.div
                    className="flex flex-row gap-4 items-center" 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                >
                 
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                       
                        <a 
                            href="#learn-more"
                            className="bg-[#8cc63f] tracking-wide text-black px-6 py-3 font-semibold hover:bg-[#72a333] transition-colors duration-300 shadow-md"
                        >
                            Learn More
                        </a>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <a 
                            href="#watch-video"
                            className="border border-[#444] tracking-wide text-white px-6 py-3 font-semibold hover:bg-[#2c2c2c] transition-colors duration-300"
                        >
                            Watch Our Video
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    </div>

    <motion.div
        className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
    />
    <motion.div
        className="absolute top-20 right-20 w-2 h-2 bg-[#683FBF] rounded-full opacity-60"
        animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
        className="absolute bottom-32 left-20 w-1 h-1 bg-white rounded-full opacity-40"
        animate={{ scale: [1, 2, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
    />
</section> */}



{/* our services grid view section */ }
{/* <section className="py-24">
  <div className="grid md:grid-cols-2 gap-10 mx-auto items-center justify-center max-w-7xl px-6 md:px-14">
  
    <div>
      <h1 className="text-4xl md:text-6xl font-light text-black tracking-tight mb-6 leading-tight">
        Our <br />
        <span className="font-thin">Services</span>
      </h1>
    </div>

    <div className="relative group overflow-hidden">
      <p className="text-gray-600 leading-relaxed text-base sm:text-lg md:text-xl">
        We get it customer expectations are soaring, and the business world is always changing. That's why we team up with brands as true partners, using our expertise and creativity to uncover game-changing insights about your brand, your customers, your industry, and the ever-evolving culture around you.
      </p>
    </div>
  </div>


  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-0 mt-14 mx-auto items-center justify-center max-w-7xl px-6 md:px-14">

   
    <div className="relative group overflow-hidden bg-black py-14 md:py-20 px-6 md:px-10">
      <h1 className="text-white text-3xl md:text-4xl font-light">01.</h1>
      <h2 className="text-white text-2xl md:text-3xl mt-2">Brand Consulting</h2>
      <p className="text-white text-sm md:text-md mt-4 leading-relaxed">
        Transform your business into a brand powerhouse with Magsmen.
        <br />Because in this game, strategy is everything.
      </p>
    </div>

    <div className="relative group overflow-hidden flex justify-center">
      <img
        src={brandconsulting}
        alt="brand-consulting"
        className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 object-contain"
      />
    </div>


    <div className="relative group overflow-hidden flex justify-center">
      <img
        src={brandconsulting}
        alt="brand-consulting"
        className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 object-contain"
      />
    </div>

    <div className="relative group overflow-hidden bg-black py-14 md:py-20 px-6 md:px-10">
      <h1 className="text-white text-3xl md:text-4xl font-light">02.</h1>
      <h2 className="text-white text-2xl md:text-3xl mt-2">Brand Consulting</h2>
      <p className="text-white text-sm md:text-md mt-4 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Officiis sunt tempore facere nisi enim eveniet?
      </p>
    </div>


    <div className="relative group overflow-hidden bg-black py-14 md:py-20 px-6 md:px-10">
      <h1 className="text-white text-3xl md:text-4xl font-light">03.</h1>
      <h2 className="text-white text-2xl md:text-3xl mt-2">Brand Consulting</h2>
      <p className="text-white text-sm md:text-md mt-4 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Officiis sunt tempore facere nisi enim eveniet?
      </p>
    </div>


    <div className="relative group overflow-hidden flex justify-center">
      <img
        src={brandconsulting}
        alt="brand-consulting"
        className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 object-contain"
      />
    </div>
  </div>
</section> */}



{/* Our Services purple background color view */ }
{/* <section
      className="w-full flex items-center justify-center px-2 h-[360px] mt-20"
      style={sectionBg}
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-start md:items-start gap-8">
        <div className="w-full md:w-1/3 flex flex-col justify-center md:justify-start md:items-start my-auto">
          <span className="block text-white text-7xl md:text-6xl font-light leading-none text-left tracking-tight">
            Our
          </span>
          <span className="block text-white text-7xl md:text-6xl font-light tracking-tight leading-none text-left ">
            Services
          </span>
        </div>
        <div className="w-full md:w-2/3 bg-white/90  border shadow py-4 px-10 relative" style={{ minHeight: 420 }}>
          <ul className="w-full">
            {services.map((service, idx) => (
              <li key={service.name} className="flex flex-col">
                <div className="flex items-center justify-between group">
                  <span className="text-gray-700 text-2xl md:text-3xl py-4 pl-2">{service.name}</span>
                  <Link
                    to={service.href}
                    className="ml-4 flex items-center text-gray-400 hover:text-[#683FBF] transition-colors"
                    aria-label={`Go to ${service.name}`}
                  >
                    <ArrowUpRight size={28} />
                  </Link>
                </div>
                {idx !== services.length - 1 && <hr className="border-b border-gray-300 w-full" />}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section> */}



{/* Featured Case Studies */ }
// <section className="py-24 bg-white">
//   <div className="max-w-6xl mx-auto">
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       className="text-center mb-11"
//     >
//     <div className="text-left mb-12 md:mb-10">
//       <h2 className="text-3xl sm:text-4xl text-gray-900 tracking-tight text-7xl md:text-6xl font-light">
//         Success Stories
//       </h2>
//       <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl">
//         Hear directly from the brands and businesses we’ve helped grow.
//       </p>
//     </div>
//     </motion.div>

//     <Swiper
//       modules={[Autoplay]}
//       spaceBetween={0}
//       slidesPerView={3}
//       navigation
//       autoplay={{ delay: 1500 }}
//       loop={true}
//       breakpoints={{
//         640: { slidesPerView: 1 },
//         768: { slidesPerView: 2 },
//         1024: { slidesPerView: 3 },
//       }}
//     >
//       {caseStudies.map((study, index) => (
//         <SwiperSlide key={study.client}>
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: index * 0.2 }}
//             className="group bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
//           >
//             <div className="h-56 relative overflow-hidden">
//               <img
//                 src={study.imageUrl}
//                 alt={study.client}
//                 className="absolute inset-0 left-20 -top-5 w-full h-full object-contain"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-500"></div>
//               <div className="absolute bottom-6 left-6 text-white">
//                 <div className="text-md font-medium text-black/80 mb-2 tracking-wide font-semibold">{study.industry}</div>
//                 <div className="text-4xl font-semibold font-light tracking-tight text-black">{study.client}</div>
//               </div>
//             </div>
//             <div className="p-8">
//               <p className="text-gray-700 mb-6 font-light text-lg leading-relaxed line-clamp-2">{study.description}</p>
//               <div className="flex items-center text-black font-medium mb-6">
//                 <span className="text-sm tracking-wide line-clamp-2">{study.metric}</span>
//               </div>
//               <Link
//                 to={`/case-studies/${study.slug}`}
//                 className="inline-flex items-center text-gray-900 font-medium hover:text-black transition-colors group"
//               >
//                 Read Full Case Study
//                 <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
//               </Link>
//             </div>
//           </motion.div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   </div>
// </section>



{/* Trust Section */ }
{/* <section className="py-20 bg-white ">
        <div className="max-w-6xl mx-auto ml-12 ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left -mb-5"
          >
            <h2 className="text-6xl font-light text-gray-900 mb-4 tracking-tight">
              Trusted by India's Fastest Growing Brands
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-2xl">
              Over 100 brands across 15 industries have trusted Magsmen to guide their transformation.
            </p>
          </motion.div>

   
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-0 flex items-center justify-center ">
            {displayedClients.map((client, index) => (
              <React.Fragment key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 text-center transition-all duration-300 overflow-hidden flex justify-center items-center"
                >
                  <img
                    src={client.src}
                    alt={client.alt}
                    className="h-[90px] w-[90px] object-contain filter grayscale hover:grayscale-0 transition duration-500"
                  />
                </motion.div>

             
                {showAll
                  ? 
                  (index + 1) % 6 === 0 && index !== displayedClients.length - 1 && (
                    <div className="col-span-full -my-2">
                      <hr className="border-gray-300" />
                    </div>
                  )
                  : 
                  index === 5 && (
                    <div className="col-span-full -my-2">
                      <hr className="border-gray-300" />
                    </div>
                  )}
              </React.Fragment>
            ))}
          </div>

      
          {clients.length > 12 && (
            <div className="text-center -mt-4">
              <button
                onClick={() => setShowAll(!showAll)}
                className="flex items-center justify-center w-12 h-12 mx-auto text-black bg-transparent border border-purple-300 rounded-full hover:bg-purple-600 hover:text-white transition duration-300"
              >
                {showAll ? (
                  <ChevronUp className="w-6 h-6" /> // 👆 Up arrow when expanded
                ) : (
                  <ChevronDown className="w-6 h-6" /> // 👇 Down arrow when collapsed
                )}
              </button>
            </div>
          )}
        </div>
      </section> */}



// awards section
//   <section className="py-20 text-white"
//     style={{
//       backgroundImage: `
//   linear-gradient(to top left, rgba(255, 255, 255, 0.5),rgba(104, 63, 191, 0.7) ),
//   url('/assets/awards/Main-File-White-Page.jpg')
// `,
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       backgroundRepeat: 'no-repeat',
//     }}
//   >
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-11 flex flex-col md:flex-row items-center justify-between">

//       <motion.div
//         initial={{ opacity: 0, x: -50 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true, amount: 0.5 }}
//         className="flex flex-col items-center md:items-start text-center md:text-left mb-12 md:mb-0"
//       >
//         <h2 className="flex text-6xl md:text-6xl font-light leading-none tracking-tight capitalize text-white">
//           Our

//         </h2>
//         <span className='md:text-6xl font-light tracking-tight'>Achievements</span>

//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, x: 50 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8, delay: 0.3 }}
//         viewport={{ once: true, amount: 0.5 }}
//         className="flex flex-wrap justify-center md:justify-end gap-x-12 gap-y-8 md:w-2/3 lg:w-3/5 xl:w-2/3"
//       >
//         {hengeItems.map((item, index) => (
//           <motion.div
//             key={item.id}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
//             viewport={{ once: true, amount: 0.5 }}
//             className="flex flex-col items-center group cursor-pointer text-center w-40" // w-40 to give a fixed width for alignment
//           >
//             <div className="w-32 h-32 rounded-full ">
//               <img
//                 src={item.image}
//                 alt={item.alt}
//                 className={`object-contain mx-auto ${item.id === 3 ? "w-16 h-16" : "w-28 h-28"
//                   }`} 
//               />
//             </div>
//             <span className="text-sm font-bold group-hover:text-white transition-colors duration-300 text-[#805ccb] whitespace-pre-line">
//               {item.label}
//             </span>
//           </motion.div>
//         ))}
//       </motion.div>

//     </div>
//   </section>





{/* Testimonilas */ }
//   <section className="py-32 bg-gray-100 testimonials-section">
//     <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0">
//       <div className="text-left mb-12 md:mb-10">
//         <h2 className="sm:text-4xl text-gray-900 tracking-tight text-7xl md:text-6xl font-light">
//           What Our Clients Say
//         </h2>
//         <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl">
//           Hear directly from the brands and businesses we’ve helped grow.
//         </p>
//       </div>
//       <Swiper
//         modules={[Pagination, Autoplay]}
//         spaceBetween={2}
//         slidesPerView={1}
//         breakpoints={{
//           768: { slidesPerView: 2 }, 
//           1024: { slidesPerView: 2 }, 
//         }}
//         autoplay={{ delay: 4000 }}
//         pagination={{ clickable: true }}
//         loop={true}
//       >
//         {testimonialsData.map((testimonial, index) => (
//           <SwiperSlide key={testimonial.id}>
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: index * 0.15 }}
//               viewport={{ once: true, amount: 0.4 }}
//               className="relative flex flex-col justify-between px-8 py-12"
//               style={{
//                 background: "#4a4d53ff",
//                 minHeight: "420px",

//               }}
//             >

//               <span className="absolute left-4 top-2 text-[120px] text-white/15 select-none z-0 pointer-events-none" aria-hidden>
//                 &ldquo;
//               </span>


//               <div className="relative z-10">
//                 <p className="text-white text-xl leading-relaxed font-medium mb-10" >
//                   {testimonial.quote}
//                 </p>
//               </div>


//               <div className="flex items-center gap-3">
//                 <img
//                   src={testimonial.imageUrl}
//                   alt={testimonial.name || "User"}
//                   className="w-20 h-20 rounded-full object-contain"
//                 />
//                 <div className="flex flex-col">
//                   <span className="font-bold text-white text-lg" >
//                     {testimonial.name}
//                   </span>
//                   {testimonial.title && (
//                     <span className="text-white text-base">{testimonial.title}</span>
//                   )}
//                 </div>
//               </div>
//               <button className="mt-8 bg-white text-[#175b5c] px-8 py-3 rounded font-bold text-lg">
//   Cristo &gt;
// </button>
//             </motion.div>
//           </SwiperSlide>

//         ))}
//       </Swiper>
//     </div>
//   </section>





      {/* Stats Section */}
      // <div className="bg-gradient-to-r from-black to-purple-900  p-12 text-white relative overflow-hidden">
      //   <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-transparent"></div>
      //   <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full -translate-y-32 translate-x-32"></div>

      //   <div className="relative z-10">
      //     <div className="text-center mb-12">
      //         <h2 className="text-3xl font-bold mb-4">Trusted by Industry Leaders</h2>
      //         <p className="text-gray-300 text-lg">Results that speak for themselves</p>
      //       </div>

      //     <div className="grid md:grid-cols-4 gap-8 text-center h-[250px] flex items-center ">
      //       <div>
      //         <div className="text-4xl font-bold text-purple-400 mb-2">11</div>
      //         <div className="text-gray-300">Sectors</div>
      //       </div>
      //       <div>
      //         <div className="text-4xl font-bold text-purple-400 mb-2">312+</div>
      //         <div className="text-gray-300">Brand Strategies Built</div>
      //       </div>
      //       <div>
      //         <div className="text-4xl font-bold text-purple-400 mb-2">14</div>
      //         <div className="text-gray-300">Awards Achievement</div>
      //       </div>
      //       <div>
      //         <div className="text-4xl font-bold text-purple-400 mb-2">412M</div>
      //         <div className="text-gray-300">Impressions Reached</div>
      //       </div>
      //     </div>
      //   </div>
      // </div>



export default Home;


