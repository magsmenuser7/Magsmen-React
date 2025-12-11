import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { style } from "framer-motion/client";
import MainFileWhitePage from "/assets/banners/Main-File-White-Page.jpg";
import servicebannertwo from "/assets/banners/services-banner.png";
import monogramlatest from "/assets/banners/monogram-latest.png";




// Use local images or illustrations as needed
const services = [
  {
    id: "brand-consulting",
    title: "Brand",
    title_two: "Consulting",
    description:
      "We work with brands as a true strategic partner, applying rigorous standards and creative ingenuity to build it up.",
    icon: "/assets/icons/strategy.svg",
    href: "/brand-consulting",
    bg: "bg-[#e8e6e6] text-white",
    hoverBg: "hover:bg-[#000200]",
    hoverText: "hover:text-white",
    style: {
    background:
    "linear-gradient(#333333)",
  },
  },
  {
    id: "personal-brand-consulting",
    title: "Personal",
    title_two: "Brand Consulting",
    description:
      "We help an individual understand which platforms are best for their business and how to use them to reach their target audience. Don’t just build a brand..!",
    icon: "/assets/icons/identity.svg",
    href: "/personal-brand-consulting",
    bg: "bg-[#e8e6e6] text-white",
    hoverBg: "hover:bg-[#000200]",
    hoverText: "hover:text-white",
    style: {
   background:
     "linear-gradient(#333333)",
  },
  },
   {
    id: "image-consulting",
    title: "Image ",
    title_two: "Consulting",
    description:
      "Explore and learn about your own power of image and style, leverage it to the best use, while having fun doing it.",
    icon: "/assets/icons/identity.svg",
    href: "/image-consulting",
    bg: "bg-[#e8e6e6] text-white",
    hoverBg: "hover:bg-[#000200]",
    hoverText: "hover:text-white",
    style: {
   background:
     "linear-gradient(#333333)",
  },
  },
    {
    id: "corporate-rebranding",
    title: "Corporate ",
    title_two: "Rebranding",
    description:
      "We give your brand a refresh to keep up your brand with changes in the marketplace by tweaking your brand’s existing assets.",
    icon: "/assets/icons/identity.svg",
    href: "/corporate-rebranding",
    bg: "bg-[#e8e6e6] text-white",
    hoverBg: "hover:bg-[#000200]",
    hoverText: "hover:text-white",
    style: {
    background:
      "linear-gradient(#333333)",
  },
  },
  {
    id: "brand-expresso",
    title: "Brand ",
    title_two: "Expresso",
    description:
      "Transform your brand in 90 days with Brand Expresso! We’ll refresh your identity, enhance market presence, and help you stand out for a bold comeback.",
    icon: "/assets/icons/identity.svg",
    href: "/brand-expresso",
    bg: "bg-[#e8e6e6] text-white",
    hoverBg: "hover:bg-[#000200]",
    hoverText: "hover:text-white",
    style: {
    background:
      "linear-gradient(#333333)",
  },
  },
   {
    id: "brand-creation",
    title: "Brand",
    title_two: "Creation",
    description:
      "Turn your ideas into reality in 90 days with Brand Creation from concept to creation. Because every unique brand deserves a unique approach!",
    icon: "/assets/icons/identity.svg",
    href: "/brand-creation",
    bg: "bg-[#e8e6e6] text-white",
    hoverBg: "hover:bg-[#000200]",
    hoverText: "hover:text-white",
    style: {
   background:
       "linear-gradient(#333333)",
  },
  },
  {
    id: "link-fluence",
    title: "Link",
    title_two: "Fluence",
    description:
      "LinkFluence's Personal Brand Management solution is tailored for top-level executives who want to establish a commanding presence on LinkedIn.",
    icon: "/assets/icons/identity.svg",
    href: "/link-fluence",
    bg: "bg-[#000] text-white",
    hoverBg: "hover:bg-[#000200]",
    hoverText: "hover:text-white",
    style: {
   background:
      "linear-gradient(#333333)",
  },
   hoverStyle: {
    background: "black",
    color: "white",
  },
  }, 
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen w-full bg-white">
      {/* HERO */}
      <section
        className="relative min-h-[530px] bg-gray-200 bg-cover bg-center flex justify-center items-center h-full text-center"
        // style={{ backgroundImage: `url(${servicebannertwo})` }}
        >
        <div className="absolute max-w-6xl mx-auto w-full px-6 ">
           {/* <div className="absolute w-[4px] h-32 bg-purple-600 mr-6 rounded-full md:bottom-[10px] md:right-[500px] bottom-10 right-80"></div> */}
          {/* <h1 className="md:text-4xl font-thin leading-tight max-w-7xl  text-black text-2xl flex items-center justify-center word-spaceing"
          style={{ wordSpacing: "0.3rem" }}
          >
            our consultants combines  <span className="text-purple-500 px-1 mx-1"> impactful strategy </span>   with stellar designz
          </h1> */}
          <h1 className="text-6xl">From identity to execution, we build brands that stand out, scale, and stay unforgettable.</h1>
          <p className="pt-5">We shape every touchpoint of your brand with strategy, storytelling, and design that elevate your presence.
Our approach blends market insight with creative precision to deliver impact that lasts.
From launch to long-term growth, we ensure your brand remains powerful, consistent, and impossible to ignore.</p>
        </div>
      </section>

      {/* CARDS LIST */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={` relative p-10 overflow-hidden flex flex-col justify-between min-h-[350px] ${service.bg}`}
              style={service.style}
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight tracking-tight">
                  {service.title} 
                  <span className="font-thin"> {service.title_two} </span>
                </h2>
                <p className="text-lg opacity-90 max-w-xs mb-12">
                  {service.description}
                </p>
              </div>
              {/* Illustration */}
              {/* <img
                src={service.icon}
                alt=""
                className="absolute bottom-8 right-8 w-28 h-28 object-contain opacity-90"
              /> */}
              <Link
                className="block absolute left-8 bottom-8 text-inherit"
                to={service.href}
                aria-label={`Visit ${service.title}`}
              >
                <ArrowUpRight className="w-7 h-7 hover:stroke-purple-800 transition" />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}


















// import React, { useState, useEffect } from 'react';
// import { MessageSquare, User, Image, Coffee, Palette, Link, Rocket, ArrowRight, ArrowLeft, ChevronDown, ChevronUp, Sparkles, Target, Zap, Star, TrendingUp, Users, Eye, Award, RefreshCcw, BookOpen, Box, ClipboardList, Compass, Layers, MessageCircle, Paintbrush, BarChart2, Briefcase, Heart, Repeat, Camera, Shirt, FileText, Edit, Search, DollarSign, Globe } from 'lucide-react';

// interface Service {
//   id: string;
//   name: string;
//   icon: React.ReactNode;
//   description: string;
//   gradient: string;
//   animationIcon: React.ReactNode;
//   details: {
//     title: string;
//     subtitle: string;
//     heroDescription: string;
//     heroBulletPoints?: React.ReactNode | React.ReactNode[];
//     features: Array<{
//       name: string;
//       description: string;
//       icon: React.ReactNode;
//     }>;
//   };
// }

// const services: Service[] = [
//   {
//     id: 'brand-consulting',
//     name: 'Brand Consulting',
//     icon: <MessageSquare className="w-8 h-8" />,
//     animationIcon: <Target className="w-24 h-24" />,
//     gradient: 'from-purple-600 to-purple-800',
//     description: 'We work with brands as a true strategic partner, applying rigorous standards and creative ingenuity to build it up.',
//     details: {
//       title: 'Brand Consulting',
//       subtitle: 'Strategic Partnership for Brand Excellence',
//       heroDescription: 'We work with brands as a true strategic partner, applying rigorous standards and creative ingenuity to build it up',
//       features: [
//         {
//           name: 'Brand Strategy',
//           icon: <Target className="w-6 h-6" />,
//           description: 'Crystallize who your brand is for – and who it\'s not for. We\'ll map when, where and how your customers interact with your brand - and areas of critical impact to guide future brand strategy and creative development.'
//         },
//         {
//           name: 'Brand Architecture',
//           icon: <TrendingUp className="w-6 h-6" />,
//           description: 'Structure your brand portfolio for maximum clarity and market impact with systematic organization.'
//         },
//         {
//           name: 'Brand Identity and Design',
//           icon: <Palette className="w-6 h-6" />,
//           description: 'Create compelling visual systems that resonate with your target audience and drive engagement.'
//         },
//         {
//           name: 'Designing Customer Experience',
//           icon: <Users className="w-6 h-6" />,
//           description: 'Map and optimize every touchpoint in your customer journey for maximum satisfaction.'
//         },
//         {
//           name: 'Building & Maintaining Brand Dynamics',
//           icon: <Zap className="w-6 h-6" />,
//           description: 'Establish systems for consistent brand evolution and market responsiveness.'
//         },
//         {
//           name: 'Maintaining Brand Voice & Messaging',
//           icon: <MessageSquare className="w-6 h-6" />,
//           description: 'Develop and sustain authentic communication across all channels.'
//         },
//         {
//           name: 'Brand Positioning',
//           icon: <Star className="w-6 h-6" />,
//           description: 'Define your unique market position and competitive advantage.'
//         },
//         {
//           name: 'Brand Tracking',
//           icon: <Eye className="w-6 h-6" />,
//           description: 'Monitor brand performance and market perception with precision analytics.'
//         }
//       ]
//     }
//   },
//   {
//     id: 'personal-brand-consulting',
//     name: 'Personal Brand Consulting',
//     icon: <User className="w-8 h-8" />,
//     animationIcon: <Award className="w-24 h-24" />,
//     gradient: 'from-purple-700 to-black',
//     description: 'We help an individual understand which platforms are best for their business and how to use them to reach their target audience. Don’t just build a brand, we help you build a legacy!',
//     details: {
//       title: 'Personal Brand Consulting',
//       subtitle: 'Elevate Your Professional Presence',
//       heroDescription: 'We help an individual understand which platforms are best for their business and how to use them to reach their target audience. Don’t just build a brand, we help you build a legacy!',
//       features: [
//              {
//         name: 'We Tell Your Story',
//         icon: <BookOpen className="w-6 h-6" />, // Changed icon
//         description: 'We identify your position in the industry and how we can make you stand out. We work on developing your strengths into a story and present it to your audience.'
//       },
//       {
//         name: 'We Add Consistency',
//         icon: <Repeat className="w-6 h-6" />, // Changed icon
//         description: 'We add a method to the madness while building your story. We chalk out the to-dos and the plan to reach your goals. We do this consistently to create a pattern of communication.'
//       },
//       {
//         name: 'We Make It Genuine',
//         icon: <Heart className="w-6 h-6" />, // Changed icon
//         description: 'Being true to yourself is the basis of building your personal brand. We showcase the true you, your beliefs, your thoughts, and expertise and make your digital profile absolutely genuine.'
//       },
//       {
//         name: 'We Drive Conversations',
//         icon: <MessageCircle className="w-6 h-6" />, // Changed icon
//         description: 'Engage your audience with topics that would interest them. Create a dialogue with your audience and exchange thoughts.'
//       },
//       {
//         name: 'We Measure Results',
//         icon: <BarChart2 className="w-6 h-6" />, // Changed icon
//         description: 'Whether your goal is to become a digital influencer or drive more revenue, we map the plan and monitor to drive results.'
//       },
//       {
//         name: 'Who We Work With',
//         icon: <Briefcase className="w-6 h-6" />, // Changed icon
//         description: 'Bring your brand story to life with unique and authentic language tailored by audience, channel, and different stages of your marketing funnel.'
//       },
//       ]
//     }
//   },
//   {
//     id: 'image-consulting',
//     name: 'Image Consulting',
//     icon: <Image className="w-8 h-8" />,
//     animationIcon: <Sparkles className="w-24 h-24" />,
//     gradient: 'from-black to-purple-600',
//     description: 'Explore and learn about your own power of image and style, leverage it to the best use, while having fun doing it.',
//     details: {
//       title: 'Image Consulting',
//       subtitle: 'Professional Visual Presence Optimization',
//       heroDescription: 'Explore and learn about your own power of image and style, leverage it to the best use, while having fun doing it.',
//       features: [
//       {
//         name: 'Image Creation/Initial Consulting',
//         icon: <Camera className="w-6 h-6" />, // New icon
//         description: 'Our image consulting starts with digging into who you are, what sets you apart, what you want to communicate by your visual appearance and more.'
//       },
//       {
//         name: 'Personalized Outfit Guide',
//         icon: <Shirt className="w-6 h-6" />, // New icon
//         description: 'You’ll never again have to ask yourself ‘what should I wear today?’ You’ll receive a customized outfit guide - based off of items that you currently own, love and are hanging in your closet.'
//       },
//       {
//         name: 'Closet Edit Wardrobe Styling Audit',
//         icon: <RefreshCcw className="w-6 h-6" />, // New icon
//         description: 'We’ll go through your closet piece by piece to figure out what you should keep, or donate. You’ll try garments to get advice on fit, we’ll identify what the gaps are in your closet and organize in a way so you can wear everything.'
//       },
//       {
//         name: 'We Drive Conversations',
//         icon: <MessageCircle className="w-6 h-6" />, // New icon
//         description: 'Engage your audience with topics that would interest them. Create a dialogue with your audience and exchange thoughts.'
//       }
//       ]
//     }
//   },
//   {
//     id: 'corporate-rebranding',
//     name: 'Corporate Rebranding',
//     icon: <RefreshCcw className="w-8 h-8" />,
//     animationIcon: <RefreshCcw className="w-24 h-24" />,
//     gradient: 'from-purple-600 to-black',
//     description: 'We give your brand a refresh to keep up your brand with changes in the marketplace by tweaking your brand’s existing assets.',
//       details: {
//       title: 'Corporate Rebranding',
//       subtitle: 'Changing the way people see',
//       heroDescription: 'We give your brand a refresh to keep up your brand with changes in the marketplace by tweaking your brand’s existing assets.',
//       features: [
//         {
//           name: 'Rebranding Research',
//           icon: <RefreshCcw className="w-6 h-6" />,
//           description: 'Research on the rebranding opportunity and the specific challenges facing the brand to ensure informed decisions.'
//         },
//         {
//           name: 'Identity Revamp',
//           icon: <Palette className="w-6 h-6" />,
//           description: 'Revamping the entire identity including logo, typography, and visual language for a contemporary and cohesive system.'
//         },
//         {
//           name: 'Voice & Messaging',
//           icon: <MessageSquare className="w-6 h-6" />,
//           description: 'Rephrasing the entire brand voice and messaging to better reflect your strategic positioning and audience.'
//         },
//         {
//           name: 'Brand Transformation',
//           icon: <Zap className="w-6 h-6" />,
//           description: 'Changing your brand inside out by aligning culture, strategy, and visual identity across the organization.'
//         },
//         {
//           name: 'Packaging & Product Patterns',
//           icon: <Box className="w-6 h-6" />,
//           description: 'Designing packaging patterns and product systems that communicate brand value and improve shelf presence.'
//         },
//         {
//           name: 'Brand Stationery',
//           icon: <ClipboardList className="w-6 h-6" />,
//           description: 'Creating cohesive brand stationery and collateral for consistent professional communications.'
//         },
//         {
//           name: 'Positioning Refresh',
//           icon: <TrendingUp className="w-6 h-6" />,
//           description: 'Revamped brand positioning to better capture market opportunity and drive growth.'
//         }
//       ]
//     }
//   },
//   {
//     id: 'brand-expresso',
//     name: 'Brand Expresso',
//     icon: <Coffee className="w-8 h-8" />,
//     animationIcon: <Zap className="w-24 h-24" />,
//     gradient: 'from-purple-800 to-black',
//     description: 'Transform your brand in 90 days with Brand Expresso! We’ll refresh your identity, enhance market presence, and help you stand out for a bold comeback.',
//     details: {
//       title: 'Brand Expresso',
//       subtitle: 'Fast-Track Brand Development',
//       heroDescription: 'Revitalize your brand in just 90 days with Brand Expresso—transforming identity, boosting presence, and standing out boldly in the market!',
//       features: [
//              {
//         name: 'Initial Consultation And Assessment:',
//         icon: <ClipboardList className="w-6 h-6" />,
//         description: "We begin with a comprehensive consultation to understand your brand's current status, challenges, and goals." // Removed description content as per the image
//       },
//       {
//         name: 'Customized Strategy Development:',
//         icon: <Layers className="w-6 h-6" />,
//         description: " Based on the assessment, we craft a tailored strategy to elevate your brand's identity, market positioning, and customer engagement." // Removed description content
//       },
//       {
//         name: 'Implementation And Execution:',
//         icon: <Rocket className="w-6 h-6" />,
//         description: 'This phase involves putting the strategy into action, which includes redesigning brand elements, refining messaging, and optimizing marketing channels.' // Removed description content
//       },
//       {
//         name: 'Monitoring And Optimization:',
//         icon: <Eye className="w-6 h-6" />,
//         description: 'Throughout the 90 days, we closely monitor the performance metrics, gather feedback, and make necessary adjustments to enhance effectiveness.' // Removed description content
//       },
//       {
//         name: 'Evaluation And Reporting:',
//         icon: <FileText className="w-6 h-6" />,
//         description: 'At the end of the 90 days, we provide a detailed evaluation report highlighting the transformation achieved, key insights gained, and recommendations for ongoing brand success.' // Removed description content
//       }
//       ]
//     }
//   },
//   {
//     id: 'brand-creation',
//     name: 'Brand Creation',
//     icon: <Palette className="w-8 h-8" />,
//     animationIcon: <Star className="w-24 h-24" />,
//     gradient: 'from-black to-purple-700',
//     description: 'Turn your ideas into reality in 90 days with Brand Creation—from concept to creation. Because every unique brand deserves a unique approach!',
//     details: {
//       title: 'Brand Creation',
//       subtitle: 'Complete Brand Development Journey',
//       heroDescription: 'Turn your ideas into reality in 90 days with Brand Creation—from concept to creation. Because every unique brand deserves a unique approach!',
//       features: [
//         {
//           name: 'Brand Discovery:',
//           icon: <Compass className="w-6 h-6" />,
//           description: " We help you define your brand's essence, mission, and target audience by conducting in-depth market research to identify trends and opportunities."
//         },
//         {
//           name: 'Brand Identity:',
//           icon: <Palette className="w-6 h-6" />,
//           description: " We create a visual identity that reflects your brand's personality with a logo, color palette, typography, and other brand elements."
//         },
//         {
//           name: 'Brand Positioning & Messaging:',
//           icon: <MessageCircle className="w-6 h-6" />,
//           description: "We aid you craft a clear market position statement that highlights your brand's unique strengths and develop a clear and consistent messaging across all channels."
//         },
//         {
//           name: 'Brand Launch:',
//           icon: <Rocket className="w-6 h-6" />,
//           description: 'We execute a strategic launch plan to maximize visibility by leverage marketing channels and PR to generate buzz for a brand that is Market Ready.'
//         }
//       ]
//     }
//   },
//   {
//     id: 'link-fluence',
//     name: 'Link Fluence',
//     icon: <Link className="w-8 h-8" />,
//     animationIcon: <Users className="w-24 h-24" />,
//     gradient: 'from-purple-600 to-black',
//     description: "LinkFluence's Personal Brand Management solution is tailored for top-level executives who want to establish a commanding presence on LinkedIn.",
//     details: {
//       title: 'Link Fluence',
//       subtitle: 'Strategic Networking & Influence Expansion',
//       heroDescription: "LinkFluence's Personal Brand Management solution is tailored for top-level executives who want to establish a commanding presence on LinkedIn.",
//       features: [
//              {
//         name: 'Comprehensive Profile Optimization',
//         icon: <Edit className="w-6 h-6" />,
//         description: 'We fine-tune every aspect of your LinkedIn profile, ensuring you make an impactful first impression and reflect your personal brand.'
//       },
//       {
//         name: 'Content Strategy',
//         icon: <MessageCircle className="w-6 h-6" />,
//         description: 'We create a custom content plan aligned with your objectives, posting frequency, and style, helping you engage your audience with powerful storytelling and thought leadership.'
//       },
//       {
//         name: 'Strategic Networking & Relationship Building',
//         icon: <Users className="w-6 h-6" />,
//         description: 'Our approach focuses on building relationships that drive long-term influence and professional growth.'
//       },
//       {
//         name: 'Positioning Your Thought Leadership',
//         icon: <TrendingUp className="w-6 h-6" />,
//         description: 'Using our deep industry expertise, we craft content that resonates with your target audience, elevating your positioning as a thought leader within your niche.'
//       },
//       {
//         name: 'Performance Monitoring & Optimization',
//         icon: <Search className="w-6 h-6" />,
//         description: 'We track your LinkedIn performance and engagement metrics, making necessary adjustments to your content strategy to keep your voice relevant and effective in the ever-evolving digital landscape.'
//       }
//       ]
//     }
//   },
//   {
//     id: 'launchpad',
//     name: 'Launchpad',
//     icon: <Rocket className="w-8 h-8" />,
//     animationIcon: <Rocket className="w-24 h-24" />,
//     gradient: 'from-purple-700 to-purple-900',
//     description: 'Comprehensive launch preparation and execution for new brands, products, or career transitions.',
//     details: {
//       title: 'Launchpad',
//       subtitle: 'Launchpad by MAGSMEN: Your Partner in Building Successful Ventures',
//       heroBulletPoints: [
//         "Transform Your Idea into Reality with Launchpad", <br />,
//         "Take Your Business to New Heights with MAGSMEN's Launchpad", <br />,
//         "Experience the Power of Partnership with Launchpad"
//       ],
//       features: [
//          {
//         name: 'Quality Mentorship',
//         icon: <Users className="w-6 h-6" />,
//         description: 'Our experienced mentors will provide you with expert guidance and support, helping you to develop your business idea and navigate the challenges of starting a new venture. They will share their knowledge and expertise, provide feedback on your business plan, and help you to identify and overcome any obstacles you may face along the way'
//       },
//       {
//         name: 'Business Consultation',
//         icon: <Briefcase className="w-6 h-6" />,
//         description: 'Our experienced consultants will work with you to develop a tailored business strategy that is designed to help you achieve your goals. They will provide you with expert advice on all aspects of starting and growing a business, from market research and product development to branding and marketing'
//       },
//       {
//         name: 'International Networking',
//         icon: <Globe className="w-6 h-6" />,
//         description: 'At Launchpad, we understand the importance of building a strong network of contacts, and we will help you to connect with like-minded entrepreneurs, investors, and business leaders from around the world. Our international networking events and platforms will provide you with opportunities to share your ideas, collaborate with others, and build valuable relationships that can help to take your business to the next level.'
//       },
//       {
//         name: 'Financial Planning',
//         icon: <DollarSign className="w-6 h-6" />,
//         description: 'Launching a new business can be expensive, and financial planning is essential to ensure that you have the resources you need to succeed. Our financial experts will work with you to develop a realistic budget and financial plan, helping you to manage your cash flow, raise capital, and make informed financial decisions that will help your business to grow'
//       }
//       ],
//       heroDescription: ''
//     }
//   }
// ];

// interface CollapsibleFeatureProps {
//   feature: {
//     name: string;
//     description: string;
//     icon: React.ReactNode;
//   };
//   index: number;
// }

// const CollapsibleFeature: React.FC<CollapsibleFeatureProps> = ({ feature, index }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:border-purple-300 hover:shadow-lg">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="w-full p-6 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-200"
//       >
//         <div className="flex items-center space-x-4">
//           <div className="text-purple-600 bg-purple-100 p-2 rounded-lg">
//             {feature.icon}
//           </div>
//           <h3 className="text-lg font-semibold text-black">{feature.name}</h3>
//         </div>
//         <div className="text-purple-600 transition-transform duration-300" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
//           <ChevronDown className="w-5 h-5" />
//         </div>
//       </button>
//       <div 
//         className={`overflow-hidden transition-all duration-300 ease-in-out ${
//           isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
//         }`}
//       >
//         <div className="p-6 pt-0 bg-gray-50">
//           <p className="text-gray-700 leading-relaxed">{feature.description}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// interface AnimatedIconProps {
//   icon: React.ReactNode;
//   gradient: string;
// }

// const AnimatedIcon: React.FC<AnimatedIconProps> = ({ icon, gradient }) => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   return (
//     <div className="relative">
//       <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-full blur-xl opacity-30 animate-pulse`}></div>
//       <div 
//         className={`relative bg-gradient-to-br ${gradient} p-8 rounded-full text-white transform transition-all duration-1000 ${
//           isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
//         }`}
//       >
//         {icon}
//       </div>
//       <div className="absolute -top-2 -right-2">
//         <div className="w-4 h-4 bg-purple-400 rounded-full animate-ping"></div>
//       </div>
//     </div>
//   );
// };

// function App() {
//   const [currentView, setCurrentView] = useState<'home' | string>('home');

//   const currentService = services.find(service => service.id === currentView);

//   const handleServiceClick = (serviceId: string) => {
//     setCurrentView(serviceId);
//   };

//   const handleBackToHome = () => {
//     setCurrentView('home');
//   };

//   if (currentView !== 'home' && currentService) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
//         <div className="max-w-7xl mx-auto px-4 py-8">
//           <button
//             onClick={handleBackToHome}
//             className="flex items-center text-gray-600 hover:text-purple-600 transition-all duration-300 mb-8 group bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg"
//           >
//             <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
//             Back to Services
//           </button>

//           {/* Hero Section */}
//           <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12">
//             <div className="grid lg:grid-cols-2 gap-0">
//               {/* Left Side - Animated Icon */}
//               <div className="bg-gradient-to-br from-black to-purple-900 p-12 flex items-center justify-center relative overflow-hidden">
//                 <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent"></div>
//                 <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full -translate-y-16 translate-x-16"></div>
//                 <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
//                 <AnimatedIcon icon={currentService.animationIcon} gradient={currentService.gradient} />
//               </div>

//               {/* Right Side - Content */}
//               <div className="p-12">
//                 <div className="mb-6">
//                   <h1 className="text-4xl lg:text-5xl font-bold text-black mb-4 leading-tight">
//                     {currentService.details.title}
//                   </h1>
//                   <p className="text-xl text-purple-600 font-medium mb-6">
//                     {currentService.details.subtitle}
//                   </p>
//                   <p className="text-gray-700 text-lg leading-relaxed">
//                     {currentService.details.heroDescription}
//                   </p>
//                 </div>
                
//                 <div className="flex flex-col sm:flex-row gap-4">
//                   <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
//                     Get Started Today
//                   </button>
//                   <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300">
//                     Learn More
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Features Section */}
//           <div className="bg-white rounded-3xl shadow-xl p-12">
//             <div className="text-center mb-12">
//               <h2 className="text-3xl font-bold text-black mb-4">What's Included</h2>
//               <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//                 Comprehensive solutions designed to deliver exceptional results and drive your success forward.
//               </p>
//             </div>

//             <div className="grid gap-6 max-w-4xl mx-auto">
//               {currentService.details.features.map((feature, index) => (
//                 <CollapsibleFeature key={index} feature={feature} index={index} />
//               ))}
//             </div>
//           </div>

//           {/* CTA Section */}
//           <div className="mt-12 bg-gradient-to-r from-black to-purple-900 rounded-3xl p-12 text-center text-white relative overflow-hidden">
//             <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-transparent"></div>
//             <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full -translate-y-32 translate-x-32"></div>
//             <div className="relative z-10">
//               <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Brand?</h3>
//               <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
//                 Let's discuss how our {currentService.name.toLowerCase()} services can help you achieve your goals and create lasting impact.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <button className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
//                   Schedule Free Consultation
//                 </button>
//                 <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-black transition-all duration-300">
//                   View Case Studies
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
//       <div className="max-w-7xl mx-auto px-4 py-16">
//         {/* Hero Section */}
//         <div className="text-center mb-20">
//           {/* <div className="inline-flex items-center bg-purple-100 text-purple-700 px-6 py-2 rounded-full text-sm font-medium mb-6">
//             <Sparkles className="w-4 h-4 mr-2" />
//             Premium Brand Consulting Services
//           </div> */}
//           <h1 className="text-6xl lg:text-4xl font-bold text-black mb-8 leading-tight">
//             Elevate­ Your­ Brand­ with­ South­ India's­ Premier <span className='text-purple-600'>Brand ­Consultants</span>­ 
//             {/* <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent"> Brand</span> */}
//           </h1>
//           {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
//             Comprehensive brand and consulting solutions designed to elevate your presence, 
//             amplify your influence, and accelerate your success in today's competitive landscape.
//           </p> */}
//           {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
//               Explore Services
//             </button>
//             <button className="border-2 border-black text-black px-8 py-4 rounded-xl font-semibold hover:bg-black hover:text-white transition-all duration-300">
//               Book Consultation
//             </button>
//           </div> */}
//         </div>

//         {/* Services Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
//           {services.map((service, index) => (
//             <div
//               key={service.id}
//               onClick={() => handleServiceClick(service.id)}
//               className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-purple-300 transition-all duration-500 cursor-pointer hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden"
//               style={{ animationDelay: `${index * 100}ms` }}
//             >
//               <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
//               <div className="relative z-10">
//                 <div className="flex items-center mb-6">
//                   <div className={`bg-gradient-to-br ${service.gradient} p-3 rounded-xl text-white mr-4 group-hover:scale-110 transition-transform duration-300`}>
//                     {service.icon}
//                   </div>
//                   <h3 className="text-xl font-bold text-black group-hover:text-purple-700 transition-colors duration-300">
//                     {service.name}
//                   </h3>
//                 </div>
                
//                 <p className="text-gray-600 text-sm leading-relaxed mb-6">
//                   {service.description}
//                 </p>

//                 <div className="flex items-center text-purple-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
//                   <span className="mr-2">Explore Service</span>
//                   <ArrowRight className="w-4 h-4" />
//                 </div>
//               </div>

//               <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Stats Section */}
//         <div className="bg-gradient-to-r from-black to-purple-900 rounded-3xl p-12 text-white mb-20 relative overflow-hidden">
//           <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-transparent"></div>
//           <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full -translate-y-32 translate-x-32"></div>
          
//           <div className="relative z-10">
//             <div className="text-center mb-12">
//               <h2 className="text-3xl font-bold mb-4">Trusted by Industry Leaders</h2>
//               <p className="text-gray-300 text-lg">Results that speak for themselves</p>
//             </div>
            
//             <div className="grid md:grid-cols-4 gap-8 text-center">
//               <div>
//                 <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>
//                 <div className="text-gray-300">Brands Transformed</div>
//               </div>
//               <div>
//                 <div className="text-4xl font-bold text-purple-400 mb-2">98%</div>
//                 <div className="text-gray-300">Client Satisfaction</div>
//               </div>
//               <div>
//                 <div className="text-4xl font-bold text-purple-400 mb-2">15+</div>
//                 <div className="text-gray-300">Years Experience</div>
//               </div>
//               <div>
//                 <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
//                 <div className="text-gray-300">Industry Awards</div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Final CTA */}
//         <div className="bg-white rounded-3xl p-12 text-center border border-gray-200 shadow-xl">
//           <h2 className="text-3xl font-bold text-black mb-6">Ready to Transform Your Brand?</h2>
//           <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
//             Let's discuss how our services can help you achieve your goals and create lasting impact in your industry.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
//               Schedule Free Consultation
//             </button>
//             <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300">
//               View Portfolio
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;




















// import React from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { 
//   Target, 
//   Users, 
//   Palette, 
//   Linkedin, 
//   RefreshCw, 
//   Zap, 
//   Rocket, 
//   ArrowRight,
//   CheckCircle,
//   Clock,
//   Award
// } from 'lucide-react';

// const Expertise = () => {
//   const services = [
//     {
//       title: 'Brand Consulting',
//       description: 'We work with brands as a true strategic partner, applying rigorous standards and creative ingenuity to build it up.',
//       features: ['Brand Positioning', 'Brand Architecture', 'Messaging Strategy', 'Market Research'],
//       icon: <Target className="w-8 h-8" />,
//       color: 'from-blue-500 to-blue-600'
//     },
//     {
//       title: 'Personal Brand Consulting',
//       description: 'We help an individual understand which platforms are best for their business and how to use them to reach their target audience. Don\'t just build a brand..!',
//       features: ['LinkedIn Strategy', 'Thought Leadership', 'Content Planning', 'Network Building'],
//       icon: <Users className="w-8 h-8" />,
//       color: 'from-green-500 to-green-600'
//     },
//     {
//       title: 'Image Consulting',
//       description: 'Explore and learn about your own power of image and style, leverage it to the best use, while having fun doing it.',
//       features: ['Style Assessment', 'Wardrobe Planning', 'Color Analysis', 'Professional Styling'],
//       icon: <Palette className="w-8 h-8" />,
//       color: 'from-purple-500 to-purple-600'
//     },
//     {
//       title: 'Corporate Rebranding',
//       description: 'We give your brand a refresh to keep up your brand with changes in the marketplace by tweaking your brand\'s existing assets.',
//       features: ['Brand Audit', 'Identity Refresh', 'Asset Redesign', 'Implementation'],
//       icon: <RefreshCw className="w-8 h-8" />,
//       color: 'from-orange-500 to-orange-600'
//     },
//     {
//       title: 'Brand Creation',
//       description: 'Turn your ideas into reality in 90 days with Brand Creation—from concept to creation. Because every unique brand deserves a unique approach!',
//       features: ['Concept Development', 'Identity Design', 'Brand Guidelines', 'Launch Strategy'],
//       icon: <Rocket className="w-8 h-8" />,
//       color: 'from-red-500 to-red-600'
//     },
//     {
//       title: 'LinkFluence',
//       description: 'LinkFluence\'s Personal Brand Management solution is tailored for top-level executives who want to establish a commanding presence on LinkedIn.',
//       features: ['Profile Optimization', 'Content Strategy', 'Engagement Management', 'Network Growth'],
//       icon: <Linkedin className="w-8 h-8" />,
//       color: 'from-indigo-500 to-indigo-600'
//     }
//   ];

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 overflow-hidden">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 50, scale: 0.95 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
//             className="text-center"
//           >
//             <motion.h1 
//               className="text-5xl md:text-6xl font-bold mb-6"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.3 }}
//             >
//               Our <motion.span 
//                 className="text-[#683FBF]"
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.6, delay: 0.6 }}
//               >
//                 Solutions
//               </motion.span>
//             </motion.h1>
//             <motion.p 
//               className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.5 }}
//             >
//               Strategic brand solutions designed to transform your business into an iconic brand that customers remember and trust.
//             </motion.p>
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.8 }}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <Link
//                 to="/contact"
//                 className="bg-[#683FBF] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#5a35a3] transition-all duration-300 inline-flex items-center shadow-xl hover:shadow-2xl"
//               >
//                 Get Started Today
//                 <ArrowRight className="ml-2 w-5 h-5" />
//               </Link>
//             </motion.div>
//           </motion.div>
//         </div>
        
//         {/* Animated background elements */}
//         <motion.div 
//           className="absolute top-20 right-20 w-3 h-3 bg-[#683FBF] rounded-full opacity-60"
//           animate={{ 
//             scale: [1, 1.5, 1],
//             opacity: [0.6, 1, 0.6]
//           }}
//           transition={{ 
//             duration: 3,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />
//       </section>

//       {/* Services Grid */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <motion.div
//                 key={service.title}
//                 initial={{ opacity: 0, y: 50, scale: 0.9 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ 
//                   duration: 0.8, 
//                   delay: index * 0.1,
//                   ease: [0.25, 0.46, 0.45, 0.94]
//                 }}
//                 whileHover={{ 
//                   y: -10,
//                   scale: 1.02,
//                   transition: { duration: 0.3 }
//                 }}
//                 className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer"
//               >
//                 <motion.div 
//                   className={`bg-gradient-to-r ${service.color} p-6 text-white`}
//                   whileHover={{ scale: 1.02 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <motion.div 
//                     className="flex items-center mb-4"
//                     whileHover={{ scale: 1.05 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     {service.icon}
//                     <h3 className="text-xl font-bold ml-3">{service.title}</h3>
//                   </motion.div>
//                 </motion.div>
//                 <div className="p-6">
//                   <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{service.description}</p>
//                   <ul className="space-y-2 mb-6">
//                     {service.features.map((feature, idx) => (
//                       <motion.li 
//                         key={idx} 
//                         className="flex items-center text-sm text-gray-700 group-hover:text-gray-800 transition-colors duration-300"
//                         initial={{ opacity: 0, x: -10 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.4, delay: idx * 0.1 }}
//                       >
//                         <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
//                         {feature}
//                       </motion.li>
//                     ))}
//                   </ul>
//                   <motion.div
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <Link
//                       to="/contact"
//                       className="text-[#683FBF] font-semibold hover:text-[#5a35a3] transition-colors inline-flex items-center group"
//                     >
//                       Learn More
//                       <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
//                     </Link>
//                   </motion.div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Brand Expresso Highlight */}
//       <section className="py-20 bg-gradient-to-r from-[#683FBF] to-[#5a35a3] text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <div className="flex items-center mb-6">
//                 <Zap className="w-12 h-12 mr-4" />
//                 <h2 className="text-4xl font-bold">Brand Expresso</h2>
//               </div>
//               <h3 className="text-2xl font-semibold mb-4">90 Days to Transformation</h3>
//               <p className="text-lg mb-6 opacity-90">
//                 Like a shot of espresso for your brand—fast, energizing, and impactful. We analyze your brand, find what's blocking growth, and give you the right solution.
//               </p>
//               <div className="grid grid-cols-2 gap-4 mb-8">
//                 <div className="bg-black bg-opacity-10 p-4 rounded-lg">
//                   <Clock className="w-6 h-6 mb-2 text-white" />
//                   <div className="font-semibold">90 Days</div>
//                   <div className="text-sm opacity-80">Complete transformation</div>
//                 </div>
//                 <div className="bg-black bg-opacity-10 p-4 rounded-lg">
//                   <Award className="w-6 h-6 mb-2 text-white" />
//                   <div className="font-semibold">Full Package</div>
//                   <div className="text-sm opacity-80">Everything included</div>
//                 </div>
//               </div>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               className="bg-black bg-opacity-10 p-8 rounded-2xl"
//             >
//               <h4 className="text-2xl font-bold mb-6">Package Includes:</h4>
//               <ul className="space-y-4">
//                 {[
//                   'Brand Naming & Strategy',
//                   'Complete Identity Design',
//                   'Pricing Strategy Development',
//                   'Go-to-Market Launch Plan',
//                   'Brand Guidelines & Assets',
//                   'Implementation Support'
//                 ].map((item, index) => (
//                   <li key={index} className="flex items-center">
//                     <CheckCircle className="w-5 h-5 mr-3" />
//                     <span className="font-medium">{item}</span>
//                   </li>
//                 ))}
//               </ul>
//               <div className="mt-8">
//                 <Link
//                   to="/contact"
//                   className="bg-white text-[#683FBF] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
//                 >
//                   Start Your Transformation
//                   <ArrowRight className="ml-2 w-5 h-5" />
//                 </Link>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Process Overview */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">How We Work</h2>
//             <p className="text-lg text-gray-600">Our proven process ensures your brand transformation is strategic, impactful, and sustainable</p>
//           </motion.div>

//           <div className="grid md:grid-cols-4 gap-8">
//             {[
//               {
//                 step: '01',
//                 title: 'Discovery',
//                 description: 'Deep dive into your business, market, and competitive landscape'
//               },
//               {
//                 step: '02',
//                 title: 'Strategy',
//                 description: 'Develop positioning, messaging, and brand architecture'
//               },
//               {
//                 step: '03',
//                 title: 'Design',
//                 description: 'Create visual identity and brand experience touchpoints'
//               },
//               {
//                 step: '04',
//                 title: 'Launch',
//                 description: 'Implement and activate your new brand across all channels'
//               }
//             ].map((phase, index) => (
//               <motion.div
//                 key={phase.step}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.2 }}
//                 className="text-center"
//               >
//                 <div className="bg-[#683FBF] text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
//                   {phase.step}
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-3">{phase.title}</h3>
//                 <p className="text-gray-600">{phase.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-black text-white">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Brand?</h2>
//             <p className="text-xl text-gray-300 mb-8">
//               Let's discuss how our strategic approach can help your business become an iconic brand.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Link
//                 to="/contact"
//                 className="bg-[#683FBF] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#5a35a3] transition-colors"
//               >
//                 Schedule a Consultation
//               </Link>
//               <Link
//                 to="/brand-audit"
//                 className="border-2 border-[#683FBF] text-[#683FBF] px-8 py-4 rounded-lg font-semibold hover:bg-[#683FBF] hover:text-white transition-colors"
//               >
//                 Take Brand Audit
//               </Link>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Expertise;