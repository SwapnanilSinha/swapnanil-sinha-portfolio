import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#summary", label: "Summary" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
];

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
    ? "px-3 py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors rounded-md hover:bg-secondary"
    : "px-3 py-2 text-sm font-medium text-ink-foreground/70 hover:text-ink-foreground transition-colors rounded-md hover:bg-white/10";

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/85 backdrop-blur-lg border-b border-border py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <a
              href="#"
              className={`font-display text-base md:text-lg font-semibold tracking-tight ${
                isScrolled ? "text-foreground" : "text-ink-foreground"
              }`}
            >
              Swapnanil Sinha
            </a>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-0.5">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className={linkClassName}>
                  {link.label}
                </a>
              ))}
              <Button
                size="sm"
                className={`ml-4 ${
                  isScrolled
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-ink-foreground text-ink hover:bg-ink-foreground/90"
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
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              className={
                isScrolled
                  ? "text-foreground hover:bg-secondary"
                  : "text-ink-foreground hover:bg-white/10 hover:text-ink-foreground"
              }
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
      <div
        id="mobile-menu"
        aria-hidden={!isMobileMenuOpen}
        className={`md:hidden bg-background/95 backdrop-blur-lg border-b border-border shadow-lg absolute top-full left-0 right-0 origin-top transition-[opacity,transform] duration-200 ease-out ${
          isMobileMenuOpen
            ? "opacity-100 scale-y-100 pointer-events-auto"
            : "opacity-0 scale-y-95 pointer-events-none"
        }`}
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-secondary hover:text-foreground rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="px-3 py-2">
            <Button
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
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
    </nav>
  );
};

export default Navbar;
