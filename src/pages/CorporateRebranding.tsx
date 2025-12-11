import React, { useState, useEffect } from 'react';
import {
  ArrowLeft, RefreshCcw, BookOpen, Paintbrush, MessageSquare, Layers, Package, ClipboardList, Compass
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import corporaterebranding from '../../public/assets/services/CORPORATE-REBRANDING.png';




// Data for the Corporate Rebranding page
const serviceData = {
  details: {
    title: 'Corporate ',
    title_two: 'Rebranding',
    subtitle: 'Changing the way people see',
    heroDescription: 'We give your brand a refresh to keep up your brand with changes in the marketplace by tweaking your brand’s existing assets.',
    features: [
      'Research on the rebranding opportunity and challenges for the brand',
      'Revamping the entire identity',
      'Rephrasing the entire brand voice',
      'Changing your brand inside out',
      'Packaging patterns and product patterns',
      'Brand stationery',
      'Revamped brand positioning'
    ]
  },
  animationIcon: <RefreshCcw className="w-24 h-24" />,
  gradient: 'from-black to-purple-600'
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

const CorporateRebrandingPage = () => {
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
              <img src={corporaterebranding} alt="brand-consulting" />
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

        {/* Features Section - Static Points */}
        <div className="bg-white  shadow-xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">What's Included</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive solutions designed to deliver exceptional results and drive your success forward.
            </p>
          </div>
          <ul className="grid grid-cols-2 space-y-4 max-w-4xl mx-auto">
            {serviceData.details.features.map((point, index) => (
              <li key={index} className="flex items-start text-lg text-gray-800 space-x-3">
                <span className="flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
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
              <img src={corporaterebranding} alt="image-1" />
            </div>

            <div className="w-full h-full shadow-xl">
              <img src={corporaterebranding} alt="image-2" />
            </div>

            {/* Hidden but space preserved */}
            <div className="w-full h-full shadow-xl invisible">
              <img src={corporaterebranding} alt="image-3" />
            </div>

            {/* Hidden but space preserved */}
            <div className="w-full h-full shadow-xl invisible">
              <img src={corporaterebranding} alt="image-4" />
            </div>

            <div className="w-full h-full shadow-xl">
              <img src={corporaterebranding} alt="image-5" />
            </div>
          </div>
        </div>


        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-black to-purple-900 p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-transparent"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Brand?</h3>
            <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
              Let's discuss how our corporate rebranding services can help you achieve your goals and create lasting impact.
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

export default CorporateRebrandingPage;