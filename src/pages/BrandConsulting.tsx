import React, { useState, useEffect } from 'react';
import { ChevronDown, ArrowLeft, Target, TrendingUp, Palette, Users, Zap, MessageSquare, Star, Eye, Award, Rocket, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ConsultantLogoDesign1024x1024 from '../../public/assets/services/Consultant_Logo_Design_3_1024x1024.webp';





// Data for the Brand Consulting page, based on your original snippet
const serviceData = {
  details: {
    title: 'Brand',
    title_two: 'Consulting',
    subtitle: 'Strategic Partnership for Brand Excellence',
    heroDescription: 'We work with brands as a true strategic partner, applying rigorous standards and creative ingenuity to build it up',
    features: [
      {
        name: 'Brand Strategy',
        icon: <Target className="w-6 h-6" />,
        description: 'Crystalize who your brand is for – and who it’s not for. We’ll map when, where and how your customers interact with your brand - and areas of critical impact to guide future brand strategy and creative development.'
      },
      {
        name: 'Brand Architecture',
        icon: <TrendingUp className="w-6 h-6" />,
        description: 'Maximize the equity of your brand portfolio by defining the organizing principles, relationships, and hierarchies for your company, products, and services.'
      },
      {
        name: 'Brand Identity and Design',
        icon: <Palette className="w-6 h-6" />,
        description: 'Your brand identity is so much more than a logo. We’ll deliver the visual brand language elements across digital and physical experiences that will connect with your audience and bring your essential brand to life.'
      },
      {
        name: 'Designing Customer Experience',
        icon: <Users className="w-6 h-6" />,
        description: 'We help improve your customer experience at every touchpoint with an accurate snapshot of all the ways shoppers interact with your brand.'
      },
      {
        name: 'Building & Maintaining Brand Dynamics',
        icon: <Zap className="w-6 h-6" />,
        description: 'We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.'
      },
      {
        name: 'Maintaining Brand Voice & Messaging',
        icon: <MessageSquare className="w-6 h-6" />,
        description: 'Bring your brand story to life with unique and authentic language tailored by audience, channel, and different stages of your marketing funnel.'
      },
      {
        name: 'Brand Positioning',
        icon: <Star className="w-6 h-6" />,
        description: 'Understanding a 360° view of your brand’s current state and future potential to identify the critical drivers of success. Understand product and market realities,competitive landscape, cultural trends and consumer needs...'
      },
      {
        name: 'Brand Tracking',
        icon: <Eye className="w-6 h-6" />,
        description: 'We power your entire research system with a brand health tracker that delivers actionable context that give and creates a more holistic brand tracking system.'
      }
    ]
  },
  animationIcon: <Target className="w-24 h-24" />,
  gradient: 'from-purple-600 to-purple-800'
};

// Reusable component for the collapsible features section
interface Feature {
  name: string;
  icon: React.ReactNode;
  description: string;
}
const CollapsibleFeature: React.FC<{ feature: Feature }> = ({ feature }) => {
  const [isOpen, setIsOpen] = useState(false);
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
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-6 pt-0 bg-gray-50">
          <p className="text-gray-700 leading-relaxed">{feature.description}</p>
        </div>
      </div>
    </div>
  );
};

// Reusable component for the animated icon in the hero section
interface AnimatedIconProps {
  icon: React.ReactNode;
  gradient: string;
}
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

// const BrandConsultingPage = () => {
//   const handleBack = () => {
//     window.history.back();
//   };

  const BrandConsultingPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/expertise');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-200 to-white pt-16">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <button
          onClick={handleBack}
          className="flex items-center text-gray-600 hover:text-purple-600 transition-all duration-300 mb-8 group bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Services
        </button>

   
        <div className="bg-gray-200 shadow-xl overflow-hidden mb-12">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="">
              <img src={ConsultantLogoDesign1024x1024} alt="brand-consulting" />
            </div>
          
            <div className="p-12">
              <div className="mb-6">
                <h1 className="text-4xl lg:text-8xl font-bold text-black mb-4 leading-tight">
                  {serviceData.details.title} <span className='lg:text-8xl font-thin'>{serviceData.details.title_two}</span> 
                </h1>
                <p className="text-xl text-purple-600 font-medium mb-6">
                  {serviceData.details.subtitle}
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {serviceData.details.heroDescription}
                </p>
              </div>

            </div>
          </div>
        </div>


        <div className="bg-white shadow-xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">What's Included</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive solutions designed to deliver exceptional results and drive your success forward.
            </p>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {serviceData.details.features.map((feature, index) => (
              <CollapsibleFeature key={index} feature={feature} />
            ))}
          </div>
        </div>

        <div className="py-28 bg-gray-150">
          <div className="grid grid-cols-2 mx-auto items-center justify-center max-w-6xl">
            <div>
              <h1 className="text-5xl md:text-8xl font-bold text-black">
                Related <br /> <span className="font-thin">Work</span>
              </h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ea suscipit accusantium nobis hic voluptatum alias iusto quis, maxime debitis, tempora doloremque maiores. Non et ex fugiat. Minima, expedita delectus?</p>
            </div>

            <div className="w-full h-full shadow-xl">
              <img src={ConsultantLogoDesign1024x1024} alt="image-1" />
            </div>

            <div className="w-full h-full shadow-xl">
              <img src={ConsultantLogoDesign1024x1024} alt="image-2" />
            </div>

            {/* Hidden but space preserved */}
            <div className="w-full h-full shadow-xl invisible">
              <img src={ConsultantLogoDesign1024x1024} alt="image-3" />
            </div>

            {/* Hidden but space preserved */}
            <div className="w-full h-full shadow-xl invisible">
              <img src={ConsultantLogoDesign1024x1024} alt="image-4" />
            </div>

            <div className="w-full h-full shadow-xl">
              <img src={ConsultantLogoDesign1024x1024} alt="image-5" />
            </div>
          </div>
        </div>



 
        <div className="bg-gradient-to-r from-black to-purple-900 p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-transparent"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 -translate-y-32 translate-x-32"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Brand?</h3>
            <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
              Let's discuss how our brand consulting services can help you achieve your goals and create lasting impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-black px-8 py-4 font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Schedule Free Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 font-semibold hover:bg-white hover:text-black transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </div>


        
      </div>
    </div>
  );
};

export default BrandConsultingPage;








// import React, { useState } from 'react';
// import { ArrowLeft, Target, TrendingUp, Palette, Users, Zap, MessageSquare, Star, Eye, ChevronDown } from 'lucide-react';
// import brandconsulting from '/assets/services/magsmen-brand-consulting-service-850x400.mp4'
 


// interface BrandConsultingProps {
//   onBack: () => void;
// }

// const features = [
//   {
//     name: 'Brand Strategy',
//     icon: <Target className="w-5 h-5" />,
//     description: 'Crystallize who your brand is for – and who it\'s not for. We\'ll map when, where and how your customers interact with your brand - and areas of critical impact to guide future brand strategy and creative development.'
//   },
//   {
//     name: 'Brand Architecture',
//     icon: <TrendingUp className="w-5 h-5" />,
//     description: 'Structure your brand portfolio for maximum clarity and market impact with systematic organization.'
//   },
//   {
//     name: 'Brand Identity and Design',
//     icon: <Palette className="w-5 h-5" />,
//     description: 'Create compelling visual systems that resonate with your target audience and drive engagement.'
//   },
//   {
//     name: 'Designing Customer Experience',
//     icon: <Users className="w-5 h-5" />,
//     description: 'Map and optimize every touchpoint in your customer journey for maximum satisfaction.'
//   },
//   {
//     name: 'Building & Maintaining Brand Dynamics',
//     icon: <Zap className="w-5 h-5" />,
//     description: 'Establish systems for consistent brand evolution and market responsiveness.'
//   },
//   {
//     name: 'Maintaining Brand Voice & Messaging',
//     icon: <MessageSquare className="w-5 h-5" />,
//     description: 'Develop and sustain authentic communication across all channels.'
//   },
//   {
//     name: 'Brand Positioning',
//     icon: <Star className="w-5 h-5" />,
//     description: 'Define your unique market position and competitive advantage.'
//   },
//   {
//     name: 'Brand Tracking',
//     icon: <Eye className="w-5 h-5" />,
//     description: 'Monitor brand performance and market perception with precision analytics.'
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

// const BrandConsulting: React.FC<BrandConsultingProps> = ({ onBack }) => {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6 py-8">
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
//           <div className="grid lg:grid-cols-2 gap-0 h-[400px]">
//             {/* Left Side - Purple Section with Icon */}
//             <div className="bg-gradient-to-br from-purple-900 to-purple-900 p-12 flex items-center justify-center relative overflow-hidden">
//               <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent"></div>
//               <div className="absolute top-0 right-0 w-20 h-20 bg-purple-400/20 rounded-full -translate-y-10 translate-x-10"></div>
//               <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8"></div>

//               {/* Animated Icon */}

//               {/* <video
//                 src="/assets/services/magsmen-brand-consulting-service-850x400.mp4"
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 className="absolute inset-0 w-[50%] h-full object-contain"
//               /> */}


//               <div className="relative w-full h-full">
//   <video
//     src="/assets/services/magsmen-brand-consulting-service-850x400.mp4"
//     autoPlay
//     loop
//     muted
//     playsInline
//     className="absolute inset-0 w-full h-full object-contain"
//   />
//   <div className="absolute inset-0 bg-purple-900 opacity-60"></div>  {/* Semi-transparent overlay */}
// </div>

//                {/* <img
//                   src={brandconsulting}
//                   alt="Animated Text"
//                   className="relative w-32 h-32 object-contain"
//                 /> */}
//               <div className="relative flex items-center justify-center">
               
//                 {/* <div className="absolute w-32 h-32 border-4 border-purple-400/30 rounded-full animate-spin-slow"></div>
//                 <div className="absolute w-24 h-24 border-2 border-purple-300/50 rounded-full animate-pulse"></div>
//                 <div className="relative w-16 h-16 bg-white rounded-full flex items-center justify-center text-purple-600">
//                   <Target className="w-8 h-8" />
//                 </div>
//                 <div className="absolute top-2 right-2 w-2 h-2 bg-purple-300 rounded-full animate-ping"></div>
//                 <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-purple-200 rounded-full animate-pulse"></div> */}
//               </div>
//             </div>

//             {/* Right Side - Content */}
//             <div className="p-8 my-auto">
//               <h1 className="text-3xl font-bold text-black mb-2">
//                 Brand Consulting
//               </h1>
//               <p className="text-purple-600 font-medium mb-4 text-lg">
//                 Strategic Partnership for Brand Excellence
//               </p>
//               <p className="text-gray-700 mb-6 leading-relaxed">
//                 We work with brands as a true strategic partner, applying rigorous standards and creative ingenuity to build it up. Our comprehensive approach ensures your brand not only stands out but creates lasting impact in your market.
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

//           <div className="grid gap-4 max-w-4xl mx-auto">
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
//               Let's discuss how our brand consulting services can help you achieve your goals and create lasting impact.
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

// export default BrandConsulting;