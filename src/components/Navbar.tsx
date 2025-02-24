import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from './ui/button';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <img 
              src="/lovable-uploads/f39113c7-769b-4626-bdb0-5d90ba431667.png" 
              alt="Ali Square Logo" 
              className="h-8 w-auto mr-2"
            />
            <span className="text-xl font-semibold">Ali Square</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="hover:text-gray-600 dark:hover:text-gray-300 px-3 py-2 transition-colors">Home</a>
              <a href="#projects" className="hover:text-gray-600 dark:hover:text-gray-300 px-3 py-2 transition-colors">Projects</a>
              <a href="#services" className="hover:text-gray-600 dark:hover:text-gray-300 px-3 py-2 transition-colors">Services</a>
              <a href="#team" className="hover:text-gray-600 dark:hover:text-gray-300 px-3 py-2 transition-colors">Team</a>
              <a href="#contact" className="hover:text-gray-600 dark:hover:text-gray-300 px-3 py-2 transition-colors">Contact</a>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="ml-4"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>
          </div>
          
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-background/90 backdrop-blur-sm`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="#home" className="block px-3 py-2 text-base font-medium hover:text-gray-600 dark:hover:text-gray-300">Home</a>
          <a href="#projects" className="block px-3 py-2 text-base font-medium hover:text-gray-600 dark:hover:text-gray-300">Projects</a>
          <a href="#services" className="block px-3 py-2 text-base font-medium hover:text-gray-600 dark:hover:text-gray-300">Services</a>
          <a href="#team" className="block px-3 py-2 text-base font-medium hover:text-gray-600 dark:hover:text-gray-300">Team</a>
          <a href="#contact" className="block px-3 py-2 text-base font-medium hover:text-gray-600 dark:hover:text-gray-300">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
