import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle} from 'lucide-react';
import { Linkedin, X, Facebook, Instagram, Youtube } from 'lucide-react';
import FooterLogo from '/assets/magsmen-footer-logo2.png';
import Favi01 from '/assets/banners/Favi-light.svg';



const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            {/* <div className="text-2xl font-bold mb-4">MAGSMEN</div> */}
            <img src={Favi01} alt="MagsmenLogo" className="h-[10rem] w-auto mx-auto" />
            <p className="text-gray-300 mb-4 mt-5 text-justify">
              As one of the leading brand consulting firms, Magsmen is a great choice for businesses that want to turn themselves into a brand. With 9 awards on brand strategy, Magsmen partnered with some of the industry's leading brands in India.
            </p>
            <div className="flex space-x-7 mt-10">
              <a href="https://www.linkedin.com/company/magsmen" target='_blank' className="text-gray-300 hover:text-[#683FBF] transition-colors">
                <Linkedin className="w-8 h-10" />
              </a>
              <a href="https://x.com/magsmenindia" target='_blank' className="text-gray-300 hover:text-[#683FBF] transition-colors">
                <X className="w-8 h-10" />
              </a>
              <a href="https://www.facebook.com/magsmenindia" target='_blank' className="text-gray-300 hover:text-[#683FBF] transition-colors">
                <Facebook className="w-8 h-10" />
              </a>
              <a href="https://www.instagram.com/magsmenindia/" target='_blank' className="text-gray-300 hover:text-[#683FBF] transition-colors">
                <Instagram className="w-8 h-10" />
              </a>
              <a href="https://www.youtube.com/@magsmenindia" target='_blank' className="text-gray-300 hover:text-[#683FBF] transition-colors">
                <Youtube className="w-9 h-10" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className=''>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 ">
              <li><Link to="/about" className="text-gray-300 hover:text-[#683FBF] transition-colors">About</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-[#683FBF] transition-colors">Expertise</Link></li>
              <li><Link to="/case-studies" className="text-gray-300 hover:text-[#683FBF] transition-colors">Case Studies</Link></li>
              <li><Link to="/brand-audit" className="text-gray-300 hover:text-[#683FBF] transition-colors">Insights</Link></li>
              <li><Link to="/insights" className="text-gray-300 hover:text-[#683FBF] transition-colors">Careers</Link></li>
              <li><Link to="/insights" className="text-gray-300 hover:text-[#683FBF] transition-colors">Partner With Us</Link></li>
              <li><Link to="/insights" className="text-gray-300 hover:text-[#683FBF] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Expertises</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Brand Consulting</span></li>
              <li><span className="text-gray-300">Personal Brand Consulting</span></li>
              <li><span className="text-gray-300">Image Consulting</span></li>
              <li><span className="text-gray-300">Corporate Rebranding</span></li> 
              <li><span className="text-gray-300">Brand Expresso</span></li>
              <li><span className="text-gray-300">Brand Creation</span></li>
              <li><span className="text-gray-300">LinkFluence</span></li>
              <li><span className="text-gray-300">Launchpad</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-[#683FBF]" />
                <div className="text-gray-300 text-sm">
                  <p className="font-medium">Head Office</p>
                  <p>4th floor, icon spaces 5-98-57/5, 6th Lane, Brodipet, Guntur, AP 522002</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-10 h-5 mr-3 mt-1 text-[#683FBF]" />
                <div className="text-gray-300 text-sm">
                  <p className="font-medium">Corporate Office</p>
                  <p>Metro Pillar No. C1762, 3rd Floor, Plot No. 23, H.No. 1/90/2/A/23, Near Image Hospital, Silicon Valley, Madhapur, Hyderabad, Telangana – 500081</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-3 h-5 mr-3 mt-1 text-[#683FBF]" />
                <div className="text-gray-300 text-sm">
                  <p className="font-medium">Australia Office</p>
                  <p>1/9, Fifth Avenue, Rowville, VIC,Australia,3178.</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-3 h-5 mr-3 text-[#683FBF]" />
                <a href="tel:+919044910449" className="text-gray-300 hover:text-[#683FBF] transition-colors">
                  +91 90449 10449
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-3 h-5 mr-3 text-[#683FBF]" />
                <a href="tel:+61406017663" className="text-gray-300 hover:text-[#683FBF] transition-colors">
                  +61 406 017 663
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-3 h-5 mr-3 text-[#683FBF]" />
                <a href="mailto:connect@magsmen.com" className="text-gray-300 hover:text-[#683FBF] transition-colors">
                  connect@magsmen.com
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-3 h-5 mr-3 text-[#683FBF]" />
                <a href="mailto:connect@magsmen.com.au" className="text-gray-300 hover:text-[#683FBF] transition-colors">
                 connect@magsmen.com.au
                </a>
              </div>
              <a
                href="https://wa.me/919044910449"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#683FBF] text-white px-4 py-2 hover:bg-[#5a35a3] transition-colors flex items-center w-fit"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2023 Magsmen Brand Consultants. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;