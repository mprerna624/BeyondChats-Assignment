import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  const navItems = ["Home", "Features", "Pricing", "About", "Contact"];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-800 via-blue-600 to-purple-700 text-white shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo and company name */}
          <Link to="/" className="flex items-center space-x-2 lg:space-x-3 group">
            <img src="/logo-white.png" alt="BeyondChats Logo" className="h-7 w-auto sm:h-8" />
            <span className="text-xl sm:text-2xl lg:text-[27px] font-bold whitespace-nowrap">Beyond Chats</span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center">
            <div className="flex items-center space-x-4 lg:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item}
                  to="/"
                  className="text-sm lg:text-base text-white font-semibold transform relative
                    transition duration-300 ease-in-out hover:text-purple-200 hover:scale-105 
                    after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-300 after:bottom-[-4px] 
                    after:left-0 hover:after:w-full after:transition-all after:duration-300"
                >
                  {item}
                </Link>
              ))}
              <button className="bg-white text-blue-600 px-4 lg:px-6 py-2 rounded-lg 
                hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 
                hover:shadow-lg text-sm lg:text-base font-medium whitespace-nowrap"
                onClick={() => navigate("/register")}
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-white hover:bg-white/10"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (<X className="h-6 w-6" />) : (<Menu className="h-6 w-6" />)}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div 
          className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} py-4 space-y-2`}
        >
          <div className="flex flex-col items-center space-y-4">
            {navItems.map((item) => (
              <Link
                key={item}
                to="/"
                className="text-white/80 hover:text-white transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <button 
              onClick={() => {setIsMenuOpen(false); navigate("/register")}}
              className="w-full max-w-xs bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors duration-200 font-medium"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;