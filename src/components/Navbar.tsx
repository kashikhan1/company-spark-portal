import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <img
              src="/ali-square-logo-light.png"
              alt="Ali Square Logo"
              className="dark:hidden h-8 w-auto mr-2"
            />
            <img
              src="/ali-square-logo-dark.png"
              alt="Ali Square Logo"
              className="hidden dark:block h-8 w-auto mr-2"
            />
            <span className="text-xl font-semibold">Ali Square</span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#home"
                className="hover:text-gray-600 dark:hover:text-gray-300 px-3 py-2 transition-colors"
                aria-current={
                  window.location.hash === "#home" ? "page" : undefined
                }
              >
                Home
              </a>
              <a
                href="#projects"
                className="hover:text-gray-600 dark:hover:text-gray-300 px-3 py-2 transition-colors"
                aria-current={
                  window.location.hash === "#projects" ? "page" : undefined
                }
              >
                Projects
              </a>
              <a
                href="#services"
                className="hover:text-gray-600 dark:hover:text-gray-300 px-3 py-2 transition-colors"
                aria-current={
                  window.location.hash === "#services" ? "page" : undefined
                }
              >
                Services
              </a>
              <a
                href="#team"
                className="hover:text-gray-600 dark:hover:text-gray-300 px-3 py-2 transition-colors"
                aria-current={
                  window.location.hash === "#team" ? "page" : undefined
                }
              >
                Team
              </a>
              <a
                href="#contact"
                className="hover:text-gray-600 dark:hover:text-gray-300 px-3 py-2 transition-colors"
                aria-current={
                  window.location.hash === "#contact" ? "page" : undefined
                }
              >
                Contact
              </a>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="ml-4"
                aria-label={
                  theme === "dark"
                    ? "Switch to light mode"
                    : "Switch to dark mode"
                }
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-background/90 backdrop-blur-sm`}
        role="menu"
        aria-label="Mobile Navigation"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="#home"
            className="block px-3 py-2 text-base font-medium hover:text-gray-600 dark:hover:text-gray-300"
            role="menuitem"
            tabIndex={isOpen ? 0 : -1}
            aria-current={window.location.hash === "#home" ? "page" : undefined}
          >
            Home
          </a>
          <a
            href="#projects"
            className="block px-3 py-2 text-base font-medium hover:text-gray-600 dark:hover:text-gray-300"
            role="menuitem"
            tabIndex={isOpen ? 0 : -1}
            aria-current={
              window.location.hash === "#projects" ? "page" : undefined
            }
          >
            Projects
          </a>
          <a
            href="#services"
            className="block px-3 py-2 text-base font-medium hover:text-gray-600 dark:hover:text-gray-300"
            role="menuitem"
            tabIndex={isOpen ? 0 : -1}
            aria-current={
              window.location.hash === "#services" ? "page" : undefined
            }
          >
            Services
          </a>
          <a
            href="#team"
            className="block px-3 py-2 text-base font-medium hover:text-gray-600 dark:hover:text-gray-300"
            role="menuitem"
            tabIndex={isOpen ? 0 : -1}
            aria-current={window.location.hash === "#team" ? "page" : undefined}
          >
            Team
          </a>
          <a
            href="#contact"
            className="block px-3 py-2 text-base font-medium hover:text-gray-600 dark:hover:text-gray-300"
            role="menuitem"
            tabIndex={isOpen ? 0 : -1}
            aria-current={
              window.location.hash === "#contact" ? "page" : undefined
            }
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
