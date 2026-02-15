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

  const linkClassName = isScrolled
    ? "px-3 py-2 text-slate-700 hover:text-slate-900 transition-colors rounded-md hover:bg-orange-50"
    : "px-3 py-2 text-white/80 hover:text-white transition-colors rounded-md hover:bg-white/10";

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/85 backdrop-blur-lg shadow-[0_8px_30px_rgba(15,23,42,0.08)] py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <a
              href="#"
              className={`font-display text-lg md:text-xl font-semibold ${
                isScrolled ? "text-slate-900" : "text-white"
              }`}
            >
              Swapnanil Sinha
            </a>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              <a href="#summary" className={linkClassName}>
                Summary
              </a>
              <a href="#experience" className={linkClassName}>
                Experience
              </a>
              <a href="#education" className={linkClassName}>
                Education
              </a>
              <a href="#skills" className={linkClassName}>
                Skills
              </a>
              <a href="#projects" className={linkClassName}>
                Projects
              </a>
              <a href="#achievements" className={linkClassName}>
                Achievements
              </a>
              <Button
                className={`ml-3 ${
                  isScrolled
                    ? "bg-primary text-white hover:bg-primary/90"
                    : "bg-white text-slate-900 hover:bg-white/90"
                }`}
                onClick={() => {
                  const mailtoLink =
                    "mailto:swapnanilsinha21@gmail.com?subject=Job Opportunity";
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
              className={isScrolled ? "text-slate-900" : "text-slate-900"}
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
        <div className="md:hidden bg-white/95 backdrop-blur-lg shadow-lg absolute top-full left-0 right-0">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <a
              href="#summary"
              className="block px-3 py-2 text-slate-700 hover:bg-orange-50 hover:text-slate-900 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Summary
            </a>
            <a
              href="#experience"
              className="block px-3 py-2 text-slate-700 hover:bg-orange-50 hover:text-slate-900 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Experience
            </a>
            <a
              href="#education"
              className="block px-3 py-2 text-slate-700 hover:bg-orange-50 hover:text-slate-900 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Education
            </a>
            <a
              href="#skills"
              className="block px-3 py-2 text-slate-700 hover:bg-orange-50 hover:text-slate-900 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Skills
            </a>
            <a
              href="#projects"
              className="block px-3 py-2 text-slate-700 hover:bg-orange-50 hover:text-slate-900 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#achievements"
              className="block px-3 py-2 text-slate-700 hover:bg-orange-50 hover:text-slate-900 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Achievements
            </a>
            <div className="px-3 py-2">
              <Button
                className="w-full bg-primary text-white hover:bg-primary/90"
                onClick={() => {
                  const mailtoLink =
                    "mailto:swapnanilsinha21@gmail.com?subject=Job Opportunity";
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
