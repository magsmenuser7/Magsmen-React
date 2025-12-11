import React, { useState, useEffect } from 'react';
import {
  ArrowLeft, ChevronDown, Rocket, Lightbulb, Users, BarChart2, DollarSign,
  Briefcase, Globe, CheckCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import launchpad from '../../public/assets/services/launchpad.png';




// Data for the Launchpad page
const serviceData = {
  details: {
    title: 'Launchpad',
    title_two: '',
    subtitle: 'Launchpad by MAGSMEN: Your Partner in Building Successful Ventures',
    // heroDescription: 'Launchpad is a comprehensive service for new brands, products, or career transitions. We handle the entire process from ideation to execution, ensuring your venture takes off with a solid foundation and a clear path to success.',
    heroBulletPoints: [ // Added new field for bullet points
      "Transform Your Idea into Reality with Launchpad", <br />,
      "Take Your Business to New Heights with MAGSMEN's Launchpad",<br />,
      "Experience the Power of Partnership with Launchpad"
    ],
    
    features: [
      {
        name: 'Quality Mentorship',
        icon: <Users className="w-6 h-6" />,
        description: 'Our experienced mentors will provide you with expert guidance and support, helping you to develop your business idea and navigate the challenges of starting a new venture. They will share their knowledge and expertise, provide feedback on your business plan, and help you to identify and overcome any obstacles you may face along the way'
      },
      {
        name: 'Business Consultation',
        icon: <Briefcase className="w-6 h-6" />,
        description: 'Our experienced consultants will work with you to develop a tailored business strategy that is designed to help you achieve your goals. They will provide you with expert advice on all aspects of starting and growing a business, from market research and product development to branding and marketing'
      },
      {
        name: 'International Networking',
        icon: <Globe className="w-6 h-6" />,
        description: 'At Launchpad, we understand the importance of building a strong network of contacts, and we will help you to connect with like-minded entrepreneurs, investors, and business leaders from around the world. Our international networking events and platforms will provide you with opportunities to share your ideas, collaborate with others, and build valuable relationships that can help to take your business to the next level.'
      },
      {
        name: 'Financial Planning',
        icon: <DollarSign className="w-6 h-6" />,
        description: 'Launching a new business can be expensive, and financial planning is essential to ensure that you have the resources you need to succeed. Our financial experts will work with you to develop a realistic budget and financial plan, helping you to manage your cash flow, raise capital, and make informed financial decisions that will help your business to grow'
      }
    ]
  },
  animationIcon: <Rocket className="w-24 h-24" />,
  gradient: 'from-purple-900 to-black'
};

// Content for the "How it works" section, based on your image
const howItWorksContent = [
  'To participate in Launchpad, Magismen offers an attractive proposition for entrepreneurs and businesses by taking a stake in their ventures without charging any fees. This means that we share the risk and rewards with you, and our success is linked to your success. We believe that this aligns our interests and helps us work together towards a common goal.',
  'Dev online. From website design implementation world of digital. Our stake in your venture is a testament to our confidence in your business and our commitment to help you achieve your goals. We are not just another service provider, but a partner in your journey. Our investment in your venture means that we have a vested interest in its success, and we work tirelessly to help you achieve that success.',
  'We understand that taking an equity stake in your venture is a big decision, and that is why we ensure that our evaluation process is rigorous, transparent and fair. We assess each venture on its own merit and take into account various factors such as market potential, team capabilities, and financial viability.',
  'At Magismen, we are committed to building long-term relationships with our clients, and our stake in your venture is a reflection of that commitment. We believe that by sharing the risk and rewards with you, we can work together to create value and achieve success.'
];

// Reusable component for the collapsible features section
interface Feature {
  name: string;
  icon: React.ReactNode;
  description: string;
}

interface CollapsibleFeatureProps {
  feature: Feature;
}

const CollapsibleFeature: React.FC<CollapsibleFeatureProps> = ({ feature }) => {
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

// const LaunchpadPage = () => {
//   const handleBack = () => {
//     window.history.back();
//   };


    const LaunchpadPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/expertise');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16">
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
              <img src={launchpad} alt="brand-expresso" />
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

        {/* How it works section */}
        <div className="bg-white shadow-xl p-12 mt-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Here's how it works - Sharing risks and rewards with you!</h2>
          </div>
          <div className="space-y-8 max-w-4xl mx-auto">
            {howItWorksContent.map((paragraph, index) => (
              <div key={index} className="flex items-start space-x-3">
                <span className="flex-shrink-0 mt-1 text-purple-600">
                  <CheckCircle className="w-5 h-5" />
                </span>
                <p className="text-gray-700 text-lg">{paragraph}</p>
              </div>
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
              <img src={launchpad} alt="image-1" />
            </div>

            <div className="w-full h-full shadow-xl">
              <img src={launchpad} alt="image-2" />
            </div>

            {/* Hidden but space preserved */}
            <div className="w-full h-full shadow-xl invisible">
              <img src={launchpad} alt="image-3" />
            </div>

            {/* Hidden but space preserved */}
            <div className="w-full h-full shadow-xl invisible">
              <img src={launchpad} alt="image-4" />
            </div>

            <div className="w-full h-full shadow-xl">
              <img src={launchpad} alt="image-5" />
            </div>
          </div>
      </div>


        
        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-black to-purple-900 p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-transparent"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">Ready to Launch Your Venture?</h3>
            <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
              Let's build a partnership and launch your next great idea into the market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Schedule a Consultation
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

export default LaunchpadPage;


















// import React, { useState } from 'react';
// import { ArrowLeft, Rocket, Target, TrendingUp, Eye, Star, Users, Award, Zap, ChevronDown } from 'lucide-react';

// interface LaunchpadProps {
//   onBack: () => void;
// }

// const features = [
//   {
//     name: 'Pre-Launch Strategy',
//     icon: <Target className="w-5 h-5" />,
//     description: 'Comprehensive planning for successful market entry and maximum impact.'
//   },
//   {
//     name: 'Launch Timeline Development',
//     icon: <TrendingUp className="w-5 h-5" />,
//     description: 'Detailed project management and milestone tracking for launch success.'
//   },
//   {
//     name: 'Market Readiness Assessment',
//     icon: <Eye className="w-5 h-5" />,
//     description: 'Evaluate market conditions and optimize timing for maximum reception.'
//   },
//   {
//     name: 'PR & Media Strategy',
//     icon: <Star className="w-5 h-5" />,
//     description: 'Coordinate media coverage and public relations for launch visibility.'
//   },
//   {
//     name: 'Stakeholder Engagement',
//     icon: <Users className="w-5 h-5" />,
//     description: 'Prepare and engage key stakeholders, partners, and early adopters.'
//   },
//   {
//     name: 'Launch Event Planning',
//     icon: <Award className="w-5 h-5" />,
//     description: 'Design and execute memorable launch events and experiences.'
//   },
//   {
//     name: 'Performance Monitoring',
//     icon: <Zap className="w-5 h-5" />,
//     description: 'Track launch metrics and adjust strategy for optimal results.'
//   },
//   {
//     name: 'Post-Launch Optimization',
//     icon: <Rocket className="w-5 h-5" />,
//     description: 'Continuous improvement and momentum building after initial launch.'
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

// const Launchpad: React.FC<LaunchpadProps> = ({ onBack }) => {
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
//                   <Rocket className="w-8 h-8" />
//                 </div>
//                 <div className="absolute top-2 right-2 w-2 h-2 bg-purple-300 rounded-full animate-ping"></div>
//                 <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-purple-200 rounded-full animate-pulse"></div>
//               </div>
//             </div>

//             {/* Right Side - Content */}
//             <div className="p-8">
//               <h1 className="text-3xl font-bold text-black mb-2">
//                 Launchpad
//               </h1>
//               <p className="text-purple-600 font-medium mb-4 text-lg">
//                 Complete Launch Preparation & Execution
//               </p>
//               <p className="text-gray-700 mb-6 leading-relaxed">
//                 Comprehensive launch preparation and execution for new brands, products, or career transitions. We ensure your launch creates maximum impact and sets the foundation for long-term success.
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
//               Let's discuss how our Launchpad services can help you achieve your goals and create lasting impact.
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

// export default Launchpad;