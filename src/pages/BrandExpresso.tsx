import React, { useState, useEffect } from 'react';
import {
  ArrowLeft, ChevronDown, Coffee, Zap, BarChart2, MessageCircle,
  ClipboardList, // For Initial Consultation and Assessment
  Layers, // For Customized Strategy Development
  Rocket, // For Implementation and Execution
  Eye, // For Monitoring and Optimization
  FileText // For Evaluation and Reporting
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import brandexpresso from '../../public/assets/services/BRAND-EXPRESSO-1.png';




// Data for the Brand Expresso page with updated features matching the image
const serviceData = {
  details: {
    title: 'Brand ',
    title_two: 'Expresso',
    subtitle: 'Quick, Concentrated Brand Solutions',
    heroDescription: 'Revitalize your brand in just 90 days with Brand Expresso transforming identity, boosting presence, and standing out boldly in the market!',
    features: [
      {
        name: 'Initial Consultation And Assessment:',
        icon: <ClipboardList className="w-6 h-6" />,
        description: "We begin with a comprehensive consultation to understand your brand's current status, challenges, and goals." // Removed description content as per the image
      },
      {
        name: 'Customized Strategy Development:',
        icon: <Layers className="w-6 h-6" />,
        description: " Based on the assessment, we craft a tailored strategy to elevate your brand's identity, market positioning, and customer engagement." // Removed description content
      },
      {
        name: 'Implementation And Execution:',
        icon: <Rocket className="w-6 h-6" />,
        description: 'This phase involves putting the strategy into action, which includes redesigning brand elements, refining messaging, and optimizing marketing channels.' // Removed description content
      },
      {
        name: 'Monitoring And Optimization:',
        icon: <Eye className="w-6 h-6" />,
        description: 'Throughout the 90 days, we closely monitor the performance metrics, gather feedback, and make necessary adjustments to enhance effectiveness.' // Removed description content
      },
      {
        name: 'Evaluation And Reporting:',
        icon: <FileText className="w-6 h-6" />,
        description: 'At the end of the 90 days, we provide a detailed evaluation report highlighting the transformation achieved, key insights gained, and recommendations for ongoing brand success.' // Removed description content
      }
    ]
  },
  animationIcon: <Coffee className="w-24 h-24" />,
  gradient: 'from-purple-900 to-black'
};

// Reusable component for the collapsible features section
interface Feature {
  name: string;
  icon: React.ReactNode;
  description?: string;
}

const CollapsibleFeature: React.FC<{ feature: Feature }> = ({ feature }) => {
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
  const [isVisible, setIsVisible] = useState<boolean>(false);
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

const BrandExpressoPage = () => {
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
              <img src={brandexpresso} alt="brand-expresso" />
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
              <img src={brandexpresso} alt="image-1" />
            </div>

            <div className="w-full h-full shadow-xl">
              <img src={brandexpresso} alt="image-2" />
            </div>

            {/* Hidden but space preserved */}
            <div className="w-full h-full shadow-xl invisible">
              <img src={brandexpresso} alt="image-3" />
            </div>

            {/* Hidden but space preserved */}
            <div className="w-full h-full shadow-xl invisible">
              <img src={brandexpresso} alt="image-4" />
            </div>

            <div className="w-full h-full shadow-xl">
              <img src={brandexpresso} alt="image-5" />
            </div>
          </div>
        </div>




        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-black to-purple-900  p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-transparent"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">Ready for a Brand Boost?</h3>
            <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
              Get in touch to learn how Brand Expresso can give your business the kickstart it needs.
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

export default BrandExpressoPage;