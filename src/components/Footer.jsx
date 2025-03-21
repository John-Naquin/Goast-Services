import { Link } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaFacebookF } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-6 md:space-y-0">
          <div>
            <h2 className="text-lg sm:text-xl font-bold tracking-wide text-white">
              Goast Services
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              Elevating automation, one project at a time.
            </p>
          </div>
          <div className="flex space-x-8">
            <Link to="/home" className="hover:text-white transition-colors duration-200">
              Home
            </Link>
            <Link to="/services" className="hover:text-white transition-colors duration-200">
              Services
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors duration-200">
              Contact
            </Link>
          </div>
        </div>
        <hr className="my-6 border-gray-700" />
        <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition-colors duration-200">
              <FaTwitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              <FaFacebookF className="w-5 h-5" />
            </a>
          </div>
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} Goast Services. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
