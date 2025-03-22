import { Link } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaFacebookF, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaHeadset } from "react-icons/fa";

export function Footer() {
  const handleServiceClick = (index) => {
    localStorage.setItem('selectedServiceIndex', index);
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  return (
    <footer className="relative bg-gray-900 text-gray-200 pt-16 pb-8 overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-brandGold rounded-full blur-2xl"></div>
        <div className="absolute -left-20 bottom-0 w-48 h-48 bg-brandGold rounded-full blur-2xl"></div>
        <svg className="absolute right-0 bottom-0 h-64 w-64 text-brandGold opacity-5" viewBox="0 0 200 200" fill="currentColor">
          <path d="M44.1,-76.5C58.2,-69.7,71.3,-59.5,79.4,-46.1C87.5,-32.7,90.6,-16.4,89.9,-0.4C89.2,15.6,84.8,31.2,76.6,44.9C68.3,58.6,56.3,70.4,42.1,77.8C27.9,85.2,14,88.2,-0.6,89.2C-15.1,90.2,-30.2,89.3,-44.1,83.1C-58,77,-70.8,65.6,-78.3,51.3C-85.8,37,-88,19.5,-87.3,2.5C-86.6,-14.5,-83,-29,-76,-41.7C-69,-54.3,-58.6,-65.2,-45.8,-72.6C-33,-80,-16.5,-84,-0.8,-82.6C14.9,-81.3,29.9,-74.6,44.1,-76.5Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-8">
          <div className="md:col-span-5 lg:col-span-4">
            <Link to="/" className="inline-block" onClick={() => window.scrollTo(0, 0)}>
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-brandGold to-amber-500 p-0.5 rounded-lg">
                  <div className="bg-brandDark p-1 rounded-md">
                    <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-brandGold">
                      GOAST
                    </h2>
                  </div>
                </div>
                <div className="ml-2 text-xl font-bold text-white">Services</div>
              </div>
            </Link>
            <p className="text-sm text-gray-400 mt-3 max-w-md">
              Elevating automation through innovative technologies and expert engineering for maximum safety, efficiency, and reliability.
            </p>
            
            <div className="mt-6 space-y-3">
              <div className="flex items-center">
                <FaPhoneAlt className="text-brandGold mr-3 flex-shrink-0" />
                <span className="text-sm text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-brandGold mr-3 flex-shrink-0" />
                <span className="text-sm text-gray-300">info@goastservices.com</span>
              </div>
              
            </div>
          </div>
          
          <div className="md:col-span-3 lg:col-span-2">
            <h3 className="text-lg font-semibold text-white relative inline-block mb-4">
              Quick Links
              <div className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-brandGold"></div>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-brandGold transition-colors duration-200 inline-block py-1" onClick={() => window.scrollTo(0, 0)}>
                  Home
                </Link>
              </li>

              <li>
                <Link to="/services" className="text-gray-400 hover:text-brandGold transition-colors duration-200 inline-block py-1" onClick={() => window.scrollTo(0, 0)}>
                  Services
                </Link>
              </li>
    
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-brandGold transition-colors duration-200 inline-block py-1" onClick={() => window.scrollTo(0, 0)}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-4 lg:col-span-3">
            <h3 className="text-lg font-semibold text-white relative inline-block mb-4">
              Our Services
              <div className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-brandGold"></div>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" onClick={() => handleServiceClick('0')} className="text-gray-400 hover:text-brandGold transition-colors duration-200 inline-block py-1">
                  Building Automation & Controls
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={() => handleServiceClick('1')} className="text-gray-400 hover:text-brandGold transition-colors duration-200 inline-block py-1">
                  Preventative Maintenance
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={() => handleServiceClick('2')} className="text-gray-400 hover:text-brandGold transition-colors duration-200 inline-block py-1">
                  Troubleshooting & Restoration
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={() => handleServiceClick('3')} className="text-gray-400 hover:text-brandGold transition-colors duration-200 inline-block py-1">
                  Remote Monitoring
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={() => handleServiceClick('4')} className="text-gray-400 hover:text-brandGold transition-colors duration-200 inline-block py-1">
                  Electrical Services
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={() => handleServiceClick('5')} className="text-gray-400 hover:text-brandGold transition-colors duration-200 inline-block py-1">
                  HVAC Solutions
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-12 lg:col-span-3">
            <h3 className="text-lg font-semibold text-white relative inline-block mb-4">
              Why Choose Us
              <div className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-brandGold"></div>
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="p-2 bg-brandGold/20 rounded-full mr-3 mt-1">
                  <FaClock className="text-brandGold w-4 h-4" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">21+ Years of Experience</p>
                  <p className="text-gray-400 text-xs">Trusted expertise in automation</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-brandGold/20 rounded-full mr-3 mt-1">
                  <FaHeadset className="text-brandGold w-4 h-4" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">24/7 Support Available</p>
                  <p className="text-gray-400 text-xs">Always ready to assist you</p>
                </div>
              </div>
            </div>
          
            <div className="mt-6">
              <h4 className="text-sm font-medium text-gray-300 mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-brandGold hover:text-brandDark transition-colors duration-200">
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-brandGold hover:text-brandDark transition-colors duration-200">
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-brandGold hover:text-brandDark transition-colors duration-200">
                  <FaFacebookF className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-700"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-brandDark px-4">
              <div className="h-5 w-5 rounded-full bg-brandGold/20 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-brandGold"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Goast Services. All rights reserved. 
          </p>
        </div>
      </div>
    </footer>
  );
}