import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../images/goast-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-sm z-50 transition-all duration-300">
      <div className="w-full pl-6 sm:pl-10 pr-4 sm:pr-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-4">
              <img 
                src={logo} 
                alt="Goast Logo" 
                className="h-12 sm:h-14 w-auto transition hover:opacity-80"
              />
              <span className="text-brandGold font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight">
                Goast Services
              </span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-10">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/features">Features</NavLink>
            <NavLink to="/pricing">Pricing</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-brandGold hover:bg-white/10 transition"
          >
            {isOpen ? <FiX className="w-10 h-10" /> : <FiMenu className="w-10 h-10" />}
          </button>
        </div>
        <div className={`md:hidden absolute top-full left-0 w-full bg-black/80 backdrop-blur-lg transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className="flex flex-col items-center py-4 space-y-5">
            <MobileNavLink to="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
            <MobileNavLink to="/features" onClick={() => setIsOpen(false)}>Features</MobileNavLink>
            <MobileNavLink to="/pricing" onClick={() => setIsOpen(false)}>Pricing</MobileNavLink>
            <MobileNavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-brandGold/90 hover:text-brandGold font-semibold transition-colors text-lg sm:text-xl lg:text-2xl relative
               after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-brandGold
               hover:after:w-full after:transition-all after:duration-300"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="text-brandGold/90 hover:text-brandGold text-xl sm:text-2xl font-medium py-2 px-4 w-full text-center hover:bg-white/10 rounded-lg transition"
  >
    {children}
  </Link>
);

export default Navbar;
