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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-right bg-no-repeat bg-gradient-to-br from-black h-[450px] bg-cover bg-no-repeat bg-center via-gray-900 to-black text-white py-20 overflow-hidden"
      style={{ backgroundImage: `url(${aboutbackgroundimage})`}} 
      >
        <div className=''></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-7 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-left"
          >
            <motion.h1 
              className="text-5xl md:text-5xl font-light mb-6 text-black"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              crafting­ businesses­ that­ make­ waves<br/>­ we're ­ the­ architects­ at ­play 
              <motion.span 
                className="text-[#000]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-0 max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
             At Magsmen, we bring together strategy and innovation to make a real <br/>
             difference globally. We're not just about building brands; we're all about <br/>
             creating connections that stick.
            </motion.p>
          </motion.div>
        </div>
        
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-20 right-20 w-3 h-3 bg-[#683FBF] rounded-full opacity-60"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-32 left-20 w-2 h-2 bg-white rounded-full opacity-40"
          animate={{ 
            scale: [1, 2, 1],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </section>


<section className="py-16 bg-black">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
            <h2 className="text-4xl text-white font-bold text-gray-900 mb-4 md:text-5xl font-light tracking-tight">Our Story</h2>

      </div>
      {/* Left paragraph */}
      <div className=''>
        <p className="text-lg text-white leading-relaxed">
          We saw Indian businesses struggling to articulate their value in a crowded market. Magsmen was built to bring strategic clarity to help brands stand out, scale up, and sustain in an ever-changing business environment.
        </p>
         <p className="text-lg text-white leading-relaxed pt-4">
          Every business has a story worth telling. Our mission is to help you tell it in a way that resonates, converts, and creates lasting impact.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* Why We Exist */}
<section className="py-16 bg-black">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-bold text-gray-900 mb-4 md:text-5xl font-light tracking-tight text-white">why we exist</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Left paragraph */}
      <div>
        <p className="text-lg text-white leading-relaxed">
          We saw Indian businesses struggling to articulate their value in a crowded market. Magsmen was built to bring strategic clarity to help brands stand out, scale up, and sustain in an ever-changing business environment.
        </p>
      </div>
      {/* Right paragraph */}
      <div className="border-l-2 border-gray-200 pl-32">
        <p className="text-lg text-white leading-relaxed">
          Every business has a story worth telling. Our mission is to help you tell it in a way that resonates, converts, and creates lasting impact.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Vision, Mission & Promise */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-purple-100">
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
              our foundation
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
      </section>

      {/* Our Framework */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Framework</h2>
            <p className="text-lg text-gray-600">A proven methodology that delivers results</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: 'Discover', description: 'Deep brand audit and market research' },
              { step: 'Strategize', description: 'Positioning and narrative development' },
              { step: 'Activate', description: 'Implementation and launch execution' },
              { step: 'Sustain', description: 'Ongoing optimization and growth' }
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="bg-[#683FBF] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.step}</h3>
                <p className="text-gray-600">{phase.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-yellow-200 transform -translate-y-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

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
              <h2 className="text-4xl font-bold text-white mb-4 md:text-5xl font-light tracking-tight">Meet the Founder</h2>
              <h3 className="text-2xl text-[#683FBF] font-semibold mb-4">Sandeep N</h3>
              <div className="space-y-4 text-gray-300">
                <p>Founder of Magsmen Brand Consultants and visionary behind India's most strategic brand transformations.</p>
                <p>Magsmen's journey began in 2020, led by the visionary Mr. N. Sandeep. Leveraging his 8+ years of brand-building expertise, his innovative approach has positioned Magsmen as a leading force in the industry within four years.</p>
                <p>Honored with several prestigious awards, Mr. Sandeep goes beyond formulas, believing in the power of brand storytelling to unlock growth potential for businesses of all sectors.</p>
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

 <section className="py-24 bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left mb-10"
          >
            <h2 className="text-6xl text-gray-900 mb-6 tracking-tight md:text-5xl font-light">our process</h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl">
              A proven framework that transforms businesses into memorable brands
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: '01',
                title: 'Discover',
                description: 'We audit, research, and decode your brand\'s current position in the market.',
                icon: <Users className="w-8 h-8 text-[#683FBF]" />
              },
              {
                step: '02',
                title: 'Strategize',
                description: 'We design your unique market positioning and compelling brand narrative.',
                icon: <TrendingUp className="w-8 h-8 text-[#683FBF]" />
              },
              {
                step: '03',
                title: 'Activate',
                description: 'We build, launch, and scale your brand experience across all touchpoints.',
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
              </motion.div>
            ))}
          </div>

          {/* <div className="text-center mt-16">
            <Link
              to="/services"
              className="inline-flex items-center text-black font-medium hover:text-gray-700 transition-colors group"
            >
              See How We Work
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div> */}
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










{/* 
{/* Trust Section */ }
<section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto ml-12">

    <div className="text-left -mb-5">
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
        const isLastRow = index >= total - (total % 6 || 6); 
        const isNotFullRow = total % 6 !== 0;

        return (
          <div
            key={index}
            className={`p-6 text-center flex justify-center items-center
              ${isLastRow && isNotFullRow ? "lg:col-span-2" : ""}
            `}
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