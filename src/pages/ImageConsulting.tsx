import React, { useState, useEffect } from 'react';
import {
  ChevronDown, ArrowLeft, Image, Sparkles, Award, TrendingUp,
  Camera, // For IMAGE CREATION/INITIAL CONSULTING
  Shirt, // For PERSONALIZED OUTFIT GUIDE
  RefreshCcw, // For CLOSET EDIT WARDROBE STYLING AUDIT (refresh/update)
  MessageCircle // For WE DRIVE CONVERSATIONS
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Data for the Image Consulting page
const serviceData = {
  details: {
    title: 'Image Consulting',
    subtitle: 'Professional Visual Presence Optimization',
    heroDescription: 'Explore and learn about your own power of image and style, leverage it to the best use, while having fun doing it.',
    features: [
      {
        name: 'Image Creation/Initial Consulting',
        icon: <Camera className="w-6 h-6" />, // New icon
        description: 'Our image consulting starts with digging into who you are, what sets you apart, what you want to communicate by your visual appearance and more.'
      },
      {
        name: 'Personalized Outfit Guide',
        icon: <Shirt className="w-6 h-6" />, // New icon
        description: 'You’ll never again have to ask yourself ‘what should I wear today?’ You’ll receive a customized outfit guide - based off of items that you currently own, love and are hanging in your closet.'
      },
      {
        name: 'Closet Edit Wardrobe Styling Audit',
        icon: <RefreshCcw className="w-6 h-6" />, // New icon
        description: 'We’ll go through your closet piece by piece to figure out what you should keep, or donate. You’ll try garments to get advice on fit, we’ll identify what the gaps are in your closet and organize in a way so you can wear everything.'
      },
      {
        name: 'We Drive Conversations',
        icon: <MessageCircle className="w-6 h-6" />, // New icon
        description: 'Engage your audience with topics that would interest them. Create a dialogue with your audience and exchange thoughts.'
      }
    ]
  },
  animationIcon: <Sparkles className="w-24 h-24" />,
  gradient: 'from-black to-purple-600'
};

// Reusable component for the collapsible features section (updated to remove index as it's not strictly needed here)
const CollapsibleFeature: React.FC<{ feature: { name: string; icon: React.ReactNode; description: string } }> = ({ feature }) => {
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

// const ImageConsultingPage = () => {
//   const handleBack = () => {
//     window.history.back();
//   };

  const ImageConsultingPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/expertise');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <button
          onClick={handleBack}
          className="flex items-center text-gray-600 hover:text-purple-600 transition-all duration-300 mb-8 group bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Services
        </button>

        {/* Hero Section */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Side - Animated Icon */}
            <div className="bg-gradient-to-br from-black to-purple-900 p-12 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
              <AnimatedIcon icon={serviceData.animationIcon} gradient={serviceData.gradient} />
            </div>

            {/* Right Side - Content */}
            <div className="p-12">
              <div className="mb-6">
                <h1 className="text-4xl lg:text-5xl font-bold text-black mb-4 leading-tight">
                  {serviceData.details.title}
                </h1>
                <p className="text-xl text-purple-600 font-medium mb-6">
                  {serviceData.details.subtitle}
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {serviceData.details.heroDescription}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Get Started Today
                </button>
                <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-3xl shadow-xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">What's Included</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive solutions designed to deliver exceptional results and drive your success forward.
            </p>
          </div>
          <div className="grid gap-6 max-w-4xl mx-auto">
            {serviceData.details.features.map((feature, index) => (
              <CollapsibleFeature key={index} feature={feature} />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-black to-purple-900 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-transparent"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Brand?</h3>
            <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
              Let's discuss how our image consulting services can help you achieve your goals and create lasting impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Schedule Free Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-black transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageConsultingPage;









// import React, { useState } from 'react';
// import { ArrowLeft, Image, Eye, Palette, Users, Star, TrendingUp, Award, ChevronDown } from 'lucide-react';

// interface ImageConsultingProps {
//   onBack: () => void;
// }

// const features = [
//   {
//     name: 'Style Assessment',
//     icon: <Eye className="w-5 h-5" />,
//     description: 'Comprehensive analysis of your current image and alignment with professional goals.'
//   },
//   {
//     name: 'Wardrobe Strategy',
//     icon: <Palette className="w-5 h-5" />,
//     description: 'Curate a versatile, professional wardrobe that enhances your personal brand.'
//   },
//   {
//     name: 'Color Analysis',
//     icon: <Star className="w-5 h-5" />,
//     description: 'Identify colors that enhance your natural features and project confidence.'
//   },
//   {
//     name: 'Body Language Coaching',
//     icon: <Users className="w-5 h-5" />,
//     description: 'Master non-verbal communication to project authority and approachability.'
//   },
//   {
//     name: 'Professional Photography',
//     icon: <Image className="w-5 h-5" />,
//     description: 'Coordinate professional photo shoots for headshots and brand imagery.'
//   },
//   {
//     name: 'Grooming Standards',
//     icon: <Star className="w-5 h-5" />,
//     description: 'Establish consistent grooming routines that enhance your professional image.'
//   },
//   {
//     name: 'Special Event Styling',
//     icon: <Award className="w-5 h-5" />,
//     description: 'Prepare for important presentations, meetings, and networking events.'
//   },
//   {
//     name: 'Image Maintenance',
//     icon: <TrendingUp className="w-5 h-5" />,
//     description: 'Ongoing guidance to maintain and evolve your professional image.'
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

// const ImageConsulting: React.FC<ImageConsultingProps> = ({ onBack }) => {
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
//                   <Image className="w-8 h-8" />
//                 </div>
//                 <div className="absolute top-2 right-2 w-2 h-2 bg-purple-300 rounded-full animate-ping"></div>
//                 <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-purple-200 rounded-full animate-pulse"></div>
//               </div>
//             </div>

//             {/* Right Side - Content */}
//             <div className="p-8">
//               <h1 className="text-3xl font-bold text-black mb-2">
//                 Image Consulting
//               </h1>
//               <p className="text-purple-600 font-medium mb-4 text-lg">
//                 Professional Visual Presence Optimization
//               </p>
//               <p className="text-gray-700 mb-6 leading-relaxed">
//                 Refine your visual presence to align perfectly with your professional goals and personal brand. Our comprehensive image consulting ensures you project confidence, credibility, and success in every interaction.
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
//               Let's discuss how our image consulting services can help you achieve your goals and create lasting impact.
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

// export default ImageConsulting;