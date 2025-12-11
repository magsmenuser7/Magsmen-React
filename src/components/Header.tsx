import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "/assets/magsmen-new-version.png";
import Logo2 from "/assets/magsmen-footer-logo2.png";
import monogramlatestlogo from "/assets/banners/monogram-latest.png";
import logo01 from '/assets/banners/logo-01.svg';
import Favi01 from '/assets/banners/Favi-01.svg';

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Expertise",
    href: "/expertise",
    dropdown: [
      { name: "Brand Consulting", href: "/brand-consulting" },
      { name: "Personal Brand Consulting", href: "/personal-brand-consulting" },
      { name: "Image Consulting", href: "/image-consulting" },
      { name: "Corporate Rebranding", href: "/corporate-rebranding" },
      { name: "Brand Expresso", href: "/brand-expresso" },
      { name: "Brand Creation", href: "/brand-creation" },
      { name: "Link Fluence", href: "/link-fluence" },
      { name: "Launchpad", href: "/launchpad" },
    ],
  },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Insights", href: "/insights" },
  { name: "Careers", href: "/careers" },
  { name: "Partner With Us", href: "/partner-with-us" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExpertiseOpen, setIsExpertiseOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Scroll effect for background color
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
     
      <header className="fixed top-0 left-0 w-full z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 sm:px-6 lg:px-12">

          <Link to="/" className="flex items-center">
            <img
              src={logo01}
              alt="MagsmenLogo"
              className="h-8 sm:h-10 md:h-20 md:w-20"
            />
          </Link>

       
          <button
            className="p-2 flex items-end justify-end"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu
              className={`w-8 h-8 ${scrolled ? "text-white" : "text-black"}`}
            />
          </button>
        </div>
      </header>

      {/* Side Navbar */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.aside
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 h-full text-right w-full sm:w-[350px] md:w-[400px] bg-[#000000] text-white z-[99] overflow-y-auto"
          >
            {/* Close Button */}
            <div className="flex justify-end p-4">
              <button
                className="p-2"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-8 h-8 text-white" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 flex flex-col space-y-2 px-8 pt-4 font-medium">
              {navigation.map((item) => (
                <div key={item.name} className="text-right">
                  {item.dropdown ? (
                    <>
                      {/* Dropdown Trigger */}
                      <button
                        className="flex items-center justify-end w-full py-2 text-lg font-semibold"
                        onClick={() => setIsExpertiseOpen(!isExpertiseOpen)}
                        aria-expanded={isExpertiseOpen}
                      >
                        <span className="ml-2">{item.name}</span>
                        <ChevronDown
                          className={`w-5 h-5 mr-2 ${
                            isExpertiseOpen ? "rotate-180" : ""
                          } transition-transform`}
                        />
                      </button>

                      {/* Dropdown Links */}
                      <AnimatePresence>
                        {isExpertiseOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="mr-5 mb-2"
                          >
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                to={dropdownItem.href}
                                className="block py-2 text-base text-white/80 hover:text-white text-right"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className={`block py-2 text-lg font-semibold text-white hover:text-gray-100 ${
                        location.pathname === item.href ? "text-white" : ""
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              {/* CTA */}
              <Link
                to=""
                className="mt-8 bg-white text-[#683FBF] px-6 py-3 rounded-lg font-semibold text-center hover:bg-[#5a35a3] hover:text-white transition-colors shadow-lg w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;


















// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Menu, X, ChevronDown } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';
// import Logo from '/assets/magsmen-new-version.png';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isServicesOpen, setIsServicesOpen] = useState(false);
//   const [currentTextIndex, setCurrentTextIndex] = useState(0);
//   const location = useLocation();

//   const animatedTexts = [
//     "Strategic Brand Transformation for Business Leaders",
//     "From Vision to Market Dominance in 90 Days",
//     "Trusted by 100+ CEOs Across South India",
//     "Where Strategy Meets Execution Excellence"
//   ];

  

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTextIndex((prev) => (prev + 1) % animatedTexts.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   const navigation = [
//     { name: 'Home', href: '/' },
//     { name: 'About', href: '/about' },
//     { 
//       name: 'Expertise', 
//       href: '/expertise',
//       dropdown: [
//         { name: 'Brand Consulting', href: '/brand-consulting' },
//         { name: 'Personal Brand Consulting', href: '/personal-brand-consulting' },
//         { name: 'Image Consulting', href: '/image-consulting' },
//         { name: 'Corporate Rebranding', href: '/corporate-rebranding' },
//         { name: 'Brand Expresso', href: '/brand-expresso' },
//         { name: 'Brand Creation', href: '/brand-creation' },
//         { name: 'Link Fluence', href: '/link-fluence' },
//         { name: 'Launchpad', href: '/launchpad' },  
//         // { name: 'Brand Expresso', href: '/expertise#brand-expresso' }
//       ]
//     },
//     { name: 'Case Studies', href: '/case-studies' },
//     { name: 'Insights', href: '/insights' },
//     { name: 'Careers', href: '/careers' },
//     { name: 'Partner With Us', href: '/partner-with-us' },
//     { name: 'Contact', href: '/contact' }
//   ];

//   return (
//     <>
//       {/* Animated Header Bar */}
//       {/* <motion.div 
//         className="bg-[#683FBF] text-white py-2 text-center text-sm font-medium overflow-hidden"
//         initial={{ y: -50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6 }}
//       >
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentTextIndex}
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: -20, opacity: 0 }}
//             transition={{ duration: 0.5 }}
//             className="px-4"
//           >
//             {animatedTexts[currentTextIndex]}
//           </motion.div>
//         </AnimatePresence>
//       </motion.div> */}

//       {/* Main Navigation */}
// <motion.header 
//   className="bg-transparent absolute top-0 left-0 w-full z-50"
//   initial={{ y: -100, opacity: 0 }}
//   animate={{ y: 0, opacity: 1 }}
//   transition={{ duration: 0.8, delay: 0.2 }}
// >
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//     <div className="flex justify-between items-center py-4">
      
//       {/* Logo */}
//       <motion.div 
//         className="flex items-center"
//         whileHover={{ scale: 1.05 }}
//         transition={{ duration: 0.3 }}
//       >
//         <Link to="/" className="flex items-center">
//           <div className="p-2 rounded-lg mr-3">
//             <img src={Logo} alt="MagsmenLogo" className="h-8 w-auto" />
//           </div>
//         </Link>
//       </motion.div>

//       {/* Desktop Navigation */}
//       <nav className="hidden lg:flex items-center space-x-8">
//         {navigation.map((item, index) => (
//           <div key={item.name} className="relative">
//             {item.dropdown ? (
//               <div
//                 className="relative"
//                 onMouseEnter={() => setIsServicesOpen(true)}
//                 onMouseLeave={() => setIsServicesOpen(false)}
//               >
//                 <motion.button
//                   className={`flex items-center text-white hover:text-[#683FBF] font-medium transition-colors ${
//                     location.pathname === item.href ? 'text-[#683FBF]' : ''
//                   }`}
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ duration: 0.2 }}
//                 >
//                   {item.name}
//                   <ChevronDown className="ml-1 w-4 h-4" />
//                 </motion.button>
                
//                 <AnimatePresence>
//                   {isServicesOpen && (
//                     <motion.div
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: 10 }}
//                       transition={{ duration: 0.2 }}
//                       className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50"
//                     >
//                       {item.dropdown.map((dropdownItem) => (
//                         <Link
//                           key={dropdownItem.name}
//                           to={dropdownItem.href}
//                           className="block px-4 py-2 text-gray-700 hover:text-[#683FBF] hover:bg-gray-50 transition-colors"
//                         >
//                           {dropdownItem.name}
//                         </Link>
//                       ))}
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             ) : (
//               <motion.div
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <Link
//                   to={item.href}
//                   className={`text-white hover:text-[#683FBF] font-medium transition-colors ${
//                     location.pathname === item.href ? 'text-[#683FBF]' : ''
//                   }`}
//                 >
//                   {item.name}
//                 </Link>
//               </motion.div>
//             )}
//           </div>
//         ))}
//       </nav>

//       {/* CTA Button */}
//       <motion.div 
//         className="hidden lg:block"
//         initial={{ opacity: 0, x: 20 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.6, delay: 0.4 }}
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//       >
//         <Link
//           to=""
//           className="bg-[#683FBF] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#5a35a3] transition-all duration-300 shadow-lg hover:shadow-xl"
//         >
//           Get Started
//         </Link>
//       </motion.div>

//       {/* Mobile menu button */}
//       <motion.button
//         className="lg:hidden p-2"
//         onClick={() => setIsMenuOpen(!isMenuOpen)}
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//       >
//         {isMenuOpen ? (
//           <X className="w-6 h-6 text-white" />
//         ) : (
//           <Menu className="w-6 h-6 text-white" />
//         )}
//       </motion.button>
//     </div>
//   </div>

//   {/* Mobile Navigation */}
//   <AnimatePresence>
//     {isMenuOpen && (
//       <motion.div
//         initial={{ opacity: 0, height: 0 }}
//         animate={{ opacity: 1, height: 'auto' }}
//         exit={{ opacity: 0, height: 0 }}
//         transition={{ duration: 0.3 }}
//         className="lg:hidden bg-white border-t border-gray-200"
//       >
//         <div className="px-4 py-4 space-y-4">
//           {navigation.map((item, index) => (
//             <motion.div
//               key={item.name}
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.3, delay: index * 0.1 }}
//             >
//               <Link
//                 to={item.href}
//                 className={`block text-gray-700 hover:text-[#683FBF] font-medium transition-colors ${
//                   location.pathname === item.href ? 'text-[#683FBF]' : ''
//                 }`}
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {item.name}
//               </Link>
//               {item.dropdown && (
//                 <div className="ml-4 mt-2 space-y-2">
//                   {item.dropdown.map((dropdownItem) => (
//                     <Link
//                       key={dropdownItem.name}
//                       to={dropdownItem.href}
//                       className="block text-sm text-gray-600 hover:text-[#683FBF] transition-colors"
//                       onClick={() => setIsMenuOpen(false)}
//                     >
//                       {dropdownItem.name}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </motion.div>
//           ))}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.3, delay: navigation.length * 0.1 }}
//             className="pt-4"
//           >
//             <Link
//               to=""
//               className="block bg-[#683FBF] text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-[#5a35a3] transition-colors"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Get Started
//             </Link>
//           </motion.div>
//         </div>
//       </motion.div>
//     )}
//   </AnimatePresence>
// </motion.header>

//     </>
//   );
// };

// export default Header;