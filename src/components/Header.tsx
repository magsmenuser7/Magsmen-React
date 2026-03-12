// Header.jsx (or Header.tsx)
import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import logo01 from "/assets/banners/logo-01.svg";      // BLACK logo
import logolight from "/assets/banners/logo-light.svg"; // WHITE logo

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Expertise",
    href: "/expertise",
    dropdown: [
      { name: "Brand Consulting", href: "/brand-consulting" },
      { name: "Personal Brand Consulting", href: "/personal-brand-consulting" },
      { name: "Corporate Rebranding", href: "/corporate-rebranding" },
      { name: "Brand Expresso", href: "/brand-expresso" },
      { name: "Brand Creation", href: "/brand-creation" },
      { name: "Link Fluence", href: "/link-fluence" },
      { name: "Launchpad", href: "/launchpad" },
    ],
  },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Insights", href: "/insights" },
  { name: "Media", href: "/media" },
  { name: "Careers", href: "/careers" },
  { name: "Partner With Us", href: "/partner-with-us" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [useWhiteLogo, setUseWhiteLogo] = useState(false);

  // ⭐ NEW STATE: hide logo when scrolled down
  const [hideLogoOnScroll, setHideLogoOnScroll] = useState(false);

  const location = useLocation();
  const headerRef = useRef<HTMLDivElement | null>(null);

  // ⭐ SCROLL EFFECT: hide logo ONLY when scrolling down past threshold
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setHideLogoOnScroll(true);   // hide logo on scroll down
      } else {
        setHideLogoOnScroll(false);  // show logo near top
      }
    };

    handleScroll(); // run once on load
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const getRealBackgroundColor = (el: any) => {
      while (el) {
        const bg = window.getComputedStyle(el).backgroundColor;
        if (bg && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent") {
          return bg;
        }
        el = el.parentElement;
      }
      return "rgb(255,255,255)";
    };

    const checkBg = () => {
      const headerEl = document.getElementById("magsmen-header");
      if (!headerEl) return;

      const oldPointer = headerEl.style.pointerEvents;
      const oldZ = headerEl.style.zIndex;
      headerEl.style.pointerEvents = "none";
      headerEl.style.zIndex = "-1";

      const el = document.elementFromPoint(50, 10);

      headerEl.style.pointerEvents = oldPointer;
      headerEl.style.zIndex = oldZ;

      if (!el) return;

      const bg = getRealBackgroundColor(el);
      const rgb = bg.match(/\d+/g);
      if (!rgb) return;

      const [r, g, b] = rgb.map(Number);

      const luminance =
        0.2126 * (r / 255) +
        0.7152 * (g / 255) +
        0.0722 * (b / 255);

      setUseWhiteLogo(luminance < 0.5);
    };

    checkBg();
    window.addEventListener("scroll", checkBg);
    window.addEventListener("resize", checkBg);

    return () => {
      window.removeEventListener("scroll", checkBg);
      window.removeEventListener("resize", checkBg);
    };
  }, []);

  return (
    <>
      {/* Header bar */}
      <header
        id="magsmen-header"
        ref={headerRef}
        className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 sm:px-6">

          {/* ⭐ ONLY LOGO HIDES WHEN SCROLLED DOWN */}
          <Link
            to="/"
            className={`flex items-center transition-all duration-200 ${
              hideLogoOnScroll ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <div className="p-2 md:p-3">
              <img
                src={useWhiteLogo ? logolight : logo01}
                alt="MagsmenLogo"
                className="h-8 sm:h-10 md:h-20 md:w-20 object-contain"
              />
            </div>
          </Link>

          {/* Hamburger always visible */}
          <button
            className="p-2 flex items-end justify-end"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-8 h-8 text-[#5a35a3]" />
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
            transition={{ type: "tween", duration: 0.28 }}
            className="fixed top-0 right-0 h-full text-right w-full sm:w-[350px] md:w-[400px] bg-[#000000] text-white z-[99] overflow-y-auto"
          >
            <div className="flex justify-end p-4">
              <button
                className="p-2"
                onClick={() => {
                  setIsMenuOpen(false);
                  setOpenDropdown(null);
                }}
                aria-label="Close menu"
              >
                <X className="w-8 h-8 text-white" />
              </button>
            </div>

            <nav className="flex-1 flex flex-col space-y-2 px-8 pt-4 font-medium">
              {navigation.map((item) => (
                <div key={item.name} className="text-right">
                  {item.dropdown ? (
                    <>
                      <div className="flex items-center justify-end w-full">
                        <Link
                          to={item.href}
                          className="py-2 text-lg font-semibold mr-3"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setOpenDropdown(null);
                          }}
                        >
                          {item.name}
                        </Link>
                        <button
                          aria-expanded={openDropdown === item.name}
                          aria-controls={`${item.name}-dropdown`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setOpenDropdown((prev) =>
                              prev === item.name ? null : item.name
                            );
                          }}
                          className="p-2"
                        >
                          <ChevronDown
                            className={`w-5 h-5 text-white transition-transform ${
                              openDropdown === item.name ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>

                      <AnimatePresence>
                        {openDropdown === item.name && (
                          <motion.div
                            id={`${item.name}-dropdown`}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.18 }}
                            className="mr-5 mb-2"
                          >
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                to={dropdownItem.href}
                                className="block py-2 text-base text-white/80 hover:text-white text-right"
                                onClick={() => {
                                  setIsMenuOpen(false);
                                  setOpenDropdown(null);
                                }}
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

              <a
                href="/final-brand-presentation-for-printing"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 bg-white text-[#683FBF] px-6 py-3 rounded-lg font-semibold text-center hover:bg-[#5a35a3] hover:text-white transition-colors shadow-lg w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </a>

              {/* <Link
                to="https://schoolofstrategy.magsmen.com/"
                className="mt-8 bg-white text-[#683FBF] px-6 py-3 rounded-lg font-semibold text-center hover:bg-[#5a35a3] hover:text-white transition-colors shadow-lg w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link> */}
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;






// // Header.jsx (or Header.tsx)
// import React, { useEffect, useState, useRef } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Menu, X, ChevronDown } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// import logo01 from "/assets/banners/logo-01.svg";      // BLACK logo
// import logolight from "/assets/banners/logo-light.svg"; // WHITE logo

// const navigation = [
//   { name: "Home", href: "/" },
//   { name: "About", href: "/about" },
//   {
//     name: "Expertise",
//     href: "/expertise",
//     dropdown: [
//       { name: "Brand Consulting", href: "/brand-consulting" },
//       { name: "Personal Brand Consulting", href: "/personal-brand-consulting" },
//       { name: "Corporate Rebranding", href: "/corporate-rebranding" },
//       { name: "Brand Expresso", href: "/brand-expresso" },
//       { name: "Brand Creation", href: "/brand-creation" },
//       { name: "Link Fluence", href: "/link-fluence" },
//       { name: "Launchpad", href: "/launchpad" },
//     ],
//   },
//   { name: "Case Studies", href: "/case-studies" },
//   { name: "Insights", href: "/insights" },
//   { name: "Media", href: "/media" },
//   { name: "Careers", href: "/careers" },
//   { name: "Partner With Us", href: "/partner-with-us" },
//   { name: "Contact", href: "/contact" },
// ];

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);
//   const [useWhiteLogo, setUseWhiteLogo] = useState(false);
//   const location = useLocation();
//   const headerRef = useRef<HTMLDivElement | null>(null);
  

//   useEffect(() => {
//     const getRealBackgroundColor = (el: any) => {
//       while (el) {
//         const bg = window.getComputedStyle(el).backgroundColor;
//         if (bg && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent") {
//           return bg;
//         }
//         el = el.parentElement;
//       }
//       return "rgb(255,255,255)";
//     };

//     const checkBg = () => {
//       const headerEl = document.getElementById("magsmen-header");
//       if (!headerEl) return;

//       // temporarily hide header to detect background behind
//       const oldPointer = headerEl.style.pointerEvents;
//       const oldZ = headerEl.style.zIndex;
//       headerEl.style.pointerEvents = "none";
//       headerEl.style.zIndex = "-1";

//       const el = document.elementFromPoint(50, 10);

//       // restore header
//       headerEl.style.pointerEvents = oldPointer;
//       headerEl.style.zIndex = oldZ;

//       if (!el) return;

//       const bg = getRealBackgroundColor(el);
//       const rgb = bg.match(/\d+/g);
//       if (!rgb) return;

//       const [r, g, b] = rgb.map(Number);

//       const luminance =
//         0.2126 * (r / 255) +
//         0.7152 * (g / 255) +
//         0.0722 * (b / 255);

//       setUseWhiteLogo(luminance < 0.5);
//     };

//     checkBg();
//     window.addEventListener("scroll", checkBg);
//     window.addEventListener("resize", checkBg);

//     return () => {
//       window.removeEventListener("scroll", checkBg);
//       window.removeEventListener("resize", checkBg);
//     };
//   }, []);

//   return (
//     <>
//       {/* Header bar */}
//       <header
//         id="magsmen-header"
//         ref={headerRef}
//         className="fixed top-0 left-0 w-full z-50 transition-colors duration-300"
//       >
//         <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 sm:px-6">
//           <Link to="/" className="flex items-center">
//             <div className="p-2 md:p-3">
//               <img
//                 src={useWhiteLogo ? logolight : logo01}
//                 alt="MagsmenLogo"
//                 className="h-8 sm:h-10 md:h-20 md:w-20 object-contain"
//               />
//             </div>
//           </Link>

//           <button
//             className="p-2 flex items-end justify-end"
//             onClick={() => setIsMenuOpen(true)}
//             aria-label="Open menu"
//           >
//             <Menu className="w-8 h-8 text-[#5a35a3]" />
//           </button>
//         </div>
//       </header>

//       {/* Side Navbar */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.aside
//             initial={{ x: "100%", opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             exit={{ x: "100%", opacity: 0 }}
//             transition={{ type: "tween", duration: 0.28 }}
//             className="fixed top-0 right-0 h-full text-right w-full sm:w-[350px] md:w-[400px] bg-[#000000] text-white z-[99] overflow-y-auto"
//           >
//             <div className="flex justify-end p-4">
//               <button
//                 className="p-2"
//                 onClick={() => {
//                   setIsMenuOpen(false);
//                   setOpenDropdown(null);
//                 }}
//                 aria-label="Close menu"
//               >
//                 <X className="w-8 h-8 text-white" />
//               </button>
//             </div>

//             <nav className="flex-1 flex flex-col space-y-2 px-8 pt-4 font-medium">
//               {navigation.map((item) => (
//                 <div key={item.name} className="text-right">
//                   {item.dropdown ? (
//                     <>
//                       <div className="flex items-center justify-end w-full">
//                         <Link
//                           to={item.href}
//                           className="py-2 text-lg font-semibold mr-3"
//                           onClick={() => {
//                             setIsMenuOpen(false);
//                             setOpenDropdown(null);
//                           }}
//                         >
//                           {item.name}
//                         </Link>
//                         <button
//                           aria-expanded={openDropdown === item.name}
//                           aria-controls={`${item.name}-dropdown`}
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             setOpenDropdown((prev) => (prev === item.name ? null : item.name));
//                           }}
//                           className="p-2"
//                         >
//                           <ChevronDown
//                             className={`w-5 h-5 text-white transition-transform ${
//                               openDropdown === item.name ? "rotate-180" : ""
//                             }`}
//                           />
//                         </button>
//                       </div>

//                       <AnimatePresence>
//                         {openDropdown === item.name && (
//                           <motion.div
//                             id={`${item.name}-dropdown`}
//                             initial={{ opacity: 0, height: 0 }}
//                             animate={{ opacity: 1, height: "auto" }}
//                             exit={{ opacity: 0, height: 0 }}
//                             transition={{ duration: 0.18 }}
//                             className="mr-5 mb-2"
//                           >
//                             {item.dropdown.map((dropdownItem) => (
//                               <Link
//                                 key={dropdownItem.name}
//                                 to={dropdownItem.href}
//                                 className="block py-2 text-base text-white/80 hover:text-white text-right"
//                                 onClick={() => {
//                                   setIsMenuOpen(false);
//                                   setOpenDropdown(null);
//                                 }}
//                               >
//                                 {dropdownItem.name}
//                               </Link>
//                             ))}
//                           </motion.div>
//                         )}
//                       </AnimatePresence>
//                     </>
//                   ) : (
//                     <Link
//                       to={item.href}
//                       className={`block py-2 text-lg font-semibold text-white hover:text-gray-100 ${
//                         location.pathname === item.href ? "text-white" : ""
//                       }`}
//                       onClick={() => setIsMenuOpen(false)}
//                     >
//                       {item.name}
//                     </Link>
//                   )}
//                 </div>
//               ))}

//               <Link
//                 to="/magsmen-brand-portfolio"
//                 className="mt-8 bg-white text-[#683FBF] px-6 py-3 rounded-lg font-semibold text-center hover:bg-[#5a35a3] hover:text-white transition-colors shadow-lg w-full"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Portfolio
//               </Link>
//             </nav>
//           </motion.aside>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Header;





