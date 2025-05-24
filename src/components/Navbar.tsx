
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <a href="#" className="font-bold text-xl text-blue-600">
              <span className="sr-only">Swapnanil Sinha</span>
            </a>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              <a
                href="#summary"
                className="px-3 py-2 text-white-700 hover:text-blue-600 transition-colors rounded-md hover:bg-blue-50"
              >
                Summary
              </a>
              <a
                href="#experience"
                className="px-3 py-2 text-white-700 hover:text-blue-600 transition-colors rounded-md hover:bg-blue-50"
              >
                Experience
              </a>
              <a
                href="#education"
                className="px-3 py-2 text-white-700 hover:text-blue-600 transition-colors rounded-md hover:bg-blue-50"
              >
                Education
              </a>
              <a
                href="#skills"
                className="px-3 py-2 text-white-700 hover:text-blue-600 transition-colors rounded-md hover:bg-blue-50"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="px-3 py-2 text-white-700 hover:text-blue-600 transition-colors rounded-md hover:bg-blue-50"
              >
                Projects
              </a>
              <Button 
                className="bg-blue-600 hover:bg-blue-700 ml-2"
                onClick={() => {
                  const mailtoLink = "mailto:swapnanilsinha21@gmail.com?subject=Job Opportunity";
                  window.location.href = mailtoLink;
                }}
              >
                Contact Me
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              className={isScrolled ? "text-gray-800" : "text-white"}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg absolute top-full left-0 right-0">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <a
              href="#summary"
              className="block px-3 py-2 text-white-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Summary
            </a>
            <a
              href="#experience"
              className="block px-3 py-2 text-white-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Experience
            </a>
            <a
              href="#education"
              className="block px-3 py-2 text-white-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Education
            </a>
            <a
              href="#skills"
              className="block px-3 py-2 text-white-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Skills
            </a>
            <a
              href="#projects"
              className="block px-3 py-2 text-white-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </a>
            <div className="px-3 py-2">
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700"
                onClick={() => {
                  const mailtoLink = "mailto:swapnanilsinha21@gmail.com?subject=Job Opportunity";
                  window.location.href = mailtoLink;
                  setIsMobileMenuOpen(false);
                }}
              >
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
