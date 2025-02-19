
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-semibold">Company</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="hover:text-gray-600 px-3 py-2 transition-colors">Home</a>
              <a href="#about" className="hover:text-gray-600 px-3 py-2 transition-colors">About</a>
              <a href="#services" className="hover:text-gray-600 px-3 py-2 transition-colors">Services</a>
              <a href="#team" className="hover:text-gray-600 px-3 py-2 transition-colors">Team</a>
              <a href="#contact" className="hover:text-gray-600 px-3 py-2 transition-colors">Contact</a>
              <Button variant="outline" className="ml-4">Get Started</Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white/90 backdrop-blur-sm`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="#home" className="block px-3 py-2 text-base font-medium hover:text-gray-600">Home</a>
          <a href="#about" className="block px-3 py-2 text-base font-medium hover:text-gray-600">About</a>
          <a href="#services" className="block px-3 py-2 text-base font-medium hover:text-gray-600">Services</a>
          <a href="#team" className="block px-3 py-2 text-base font-medium hover:text-gray-600">Team</a>
          <a href="#contact" className="block px-3 py-2 text-base font-medium hover:text-gray-600">Contact</a>
          <Button variant="outline" className="w-full mt-4">Get Started</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
