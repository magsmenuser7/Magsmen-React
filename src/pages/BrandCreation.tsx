import React, { useState, useEffect } from 'react';
import {
  ArrowLeft, ChevronDown, Zap, Lightbulb, PenTool, Layout, Aperture, Megaphone,
  Compass, // New icon for Brand Discovery
  Palette, // New icon for Brand Identity
  MessageCircle, // New icon for Brand Positioning & Messaging
  Rocket // New icon for Brand Launch
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import brandcreation from '../../public/assets/services/brand-creation.png';




// Data for the Brand Creation page with updated features from your image
const serviceData = {
  details: {
    title: 'Brand ',
    title_two: 'Creation',
    subtitle: 'From Concept to Reality',
    heroDescription: 'Turn your ideas into reality in 90 days with Brand Creation—from concept to creation. Because every unique brand deserves a unique approach!',
    features: [
      {
        name: 'Brand Discovery:',
        icon: <Compass className="w-6 h-6" />,
        description: " We help you define your brand's essence, mission, and target audience by conducting in-depth market research to identify trends and opportunities."
      },
      {
        name: 'Brand Identity:',
        icon: <Palette className="w-6 h-6" />,
        description: " We create a visual identity that reflects your brand's personality with a logo, color palette, typography, and other brand elements."
      },
      {
        name: 'Brand Positioning & Messaging:',
        icon: <MessageCircle className="w-6 h-6" />,
        description: "We aid you craft a clear market position statement that highlights your brand's unique strengths and develop a clear and consistent messaging across all channels."
      },
      {
        name: 'Brand Launch:',
        icon: <Rocket className="w-6 h-6" />,
        description: 'We execute a strategic launch plan to maximize visibility by leverage marketing channels and PR to generate buzz for a brand that is Market Ready.'
      }
    ]
  },
  animationIcon: <Zap className="w-24 h-24" />,
  gradient: 'from-black to-purple-600'
};

// Reusable component for the collapsible features section
type FeatureItem = {
  name: string;
  icon: React.ReactNode;
  description: string;
};

type CollapsibleFeatureProps = {
  feature: FeatureItem;
};

const CollapsibleFeature: React.FC<CollapsibleFeatureProps> = ({ feature }) => {
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

// const BrandCreationPage = () => {
//   const handleBack = () => {
//     window.history.back();
//   };

  const BrandCreationPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/expertise');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-16">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <button
          onClick={handleBack}
          className="flex items-center text-gray-600 hover:text-purple-600 transition-all duration-300 mb-8 group bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Services
        </button>

        <div className="bg-white shadow-xl overflow-hidden mb-12">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="">
              <img src={brandcreation} alt="brand-expresso" />
            </div>
          
            <div className="p-12 flex flex-col justify-center">
              <div className="mb-6">
                <h1 className="text-4xl lg:text-8xl font-bold text-black mb-4 leading-tight">
                  {serviceData.details.title} <span className='lg:text-8xl font-thin'>{serviceData.details.title_two}</span> 
                </h1>
                <p className="text-xl text-purple-600 font-medium">
                  {serviceData.details.subtitle}
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {serviceData.details.heroDescription}
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white shadow-xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">What's Included</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive solutions designed to deliver exceptional results and drive your success forward.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
            {serviceData.details.features.map((feature, index) => (
              <CollapsibleFeature key={index} feature={feature} />
            ))}
          </div>
        </div>


        <div className="py-28 bg-gray-100">
          <div className="grid grid-cols-2 mx-auto items-center justify-center max-w-6xl">
            <div>
              <h1 className="text-5xl md:text-8xl font-bold text-black">
                Related <br /> <span className="font-thin">Works</span>
              </h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ea suscipit accusantium nobis hic voluptatum alias iusto quis, maxime debitis, tempora doloremque maiores. Non et ex fugiat. Minima, expedita delectus?</p>
            </div>

            <div className="w-full h-full shadow-xl">
              <img src={brandcreation} alt="image-1" />
            </div>

            <div className="w-full h-full shadow-xl">
              <img src={brandcreation} alt="image-2" />
            </div>

            {/* Hidden but space preserved */}
            <div className="w-full h-full shadow-xl invisible">
              <img src={brandcreation} alt="image-3" />
            </div>

            {/* Hidden but space preserved */}
            <div className="w-full h-full shadow-xl invisible">
              <img src={brandcreation} alt="image-4" />
            </div>

            <div className="w-full h-full shadow-xl">
              <img src={brandcreation} alt="image-5" />
            </div>
          </div>
        </div>





        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-black to-purple-900 p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-transparent"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">Ready to Build Your Brand?</h3>
            <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
              Let's discuss how we can bring your brand to life and set you up for long-term success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Schedule a Free Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-black transition-all duration-300">
                View Our Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandCreationPage;

















// import React, { useState } from 'react';
// import { ArrowLeft, Palette, Target, Eye, Star, Award, TrendingUp, Zap, Rocket, ChevronDown } from 'lucide-react';

// interface BrandCreationProps {
//   onBack: () => void;
// }

// const features = [
//   {
//     name: 'Brand Foundation',
//     icon: <Target className="w-5 h-5" />,
//     description: 'Establish mission, vision, values, and core brand principles from the ground up.'
//   },
//   {
//     name: 'Market Research & Analysis',
//     icon: <Eye className="w-5 h-5" />,
//     description: 'Comprehensive market analysis to inform strategic brand decisions.'
//   },
//   {
//     name: 'Brand Naming',
//     icon: <Star className="w-5 h-5" />,
//     description: 'Creative naming process including trademark research and domain availability.'
//   },
//   {
//     name: 'Visual Identity System',
//     icon: <Palette className="w-5 h-5" />,
//     description: 'Complete visual system including logos, typography, color palette, and guidelines.'
//   },
//   {
//     name: 'Brand Guidelines',
//     icon: <Award className="w-5 h-5" />,
//     description: 'Comprehensive brand standards document for consistent application.'
//   },
//   {
//     name: 'Marketing Collateral',
//     icon: <TrendingUp className="w-5 h-5" />,
//     description: 'Design and development of essential marketing materials and touchpoints.'
//   },
//   {
//     name: 'Digital Asset Creation',
//     icon: <Zap className="w-5 h-5" />,
//     description: 'Website, social media templates, and digital brand assets.'
//   },
//   {
//     name: 'Launch Strategy',
//     icon: <Rocket className="w-5 h-5" />,
//     description: 'Comprehensive go-to-market strategy for successful brand introduction.'
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

// const BrandCreation: React.FC<BrandCreationProps> = ({ onBack }) => {
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
//                   <Palette className="w-8 h-8" />
//                 </div>
//                 <div className="absolute top-2 right-2 w-2 h-2 bg-purple-300 rounded-full animate-ping"></div>
//                 <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-purple-200 rounded-full animate-pulse"></div>
//               </div>
//             </div>

//             {/* Right Side - Content */}
//             <div className="p-8">
//               <h1 className="text-3xl font-bold text-black mb-2">
//                 Brand Creation
//               </h1>
//               <p className="text-purple-600 font-medium mb-4 text-lg">
//                 Complete Brand Development Journey
//               </p>
//               <p className="text-gray-700 mb-6 leading-relaxed">
//                 From concept to reality - comprehensive brand development for new ventures and rebrands. We guide you through every step of creating a powerful, memorable brand that resonates with your audience.
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
//               Let's discuss how our brand creation services can help you achieve your goals and create lasting impact.
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

// export default BrandCreation;