import React from "react";
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  GraduationCap,
  Code,
  Github,
  Mail,
  Phone,
  Linkedin,
  Download,
} from "lucide-react";

const Header = () => {
  return (
    <header className="relative w-full overflow-hidden bg-[#121212] text-white">
      <div className="absolute inset-0">
        <div className="absolute -top-24 right-[-10%] h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-10%] h-80 w-80 rounded-full bg-orange-500/20 blur-3xl" />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 md:px-8 lg:px-10 pt-28 pb-20 md:pt-32 md:pb-24">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="md:order-2 flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-white/10 blur-lg transform -translate-x-1 translate-y-1"></div>
              <img
                alt="Swapnanil Sinha - MERN Full Stack Software Developer"
                src="Image.png"
                className="relative w-40 h-40 rounded-full border-4 border-white/20 shadow-2xl object-fill"
              />
            </div>
          </div>

          <div className="md:order-1 text-center md:text-left flex-1">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-tight">
                SWAPNANIL SINHA
              </h1>
              <a
                href="/SWAPNANIL SINHA.pdf"
                download
                className="inline-flex items-center justify-center"
                title="Download Profile"
              >
                <Download
                  size={28}
                  className="text-orange-200 hover:text-white transition-colors cursor-pointer"
                  aria-label="Download Profile"
                />
              </a>
            </div>

            <h2 className="text-lg md:text-xl text-orange-100/90 mb-6 font-medium">
              Software Development Engineer II - Full Stack | Bangalore, KA,
              India
            </h2>

            <p className="text-base md:text-lg text-white/80 max-w-2xl mb-8">
              Building high-performance, data-driven products with modern web
              stacks, scalable backend systems, and thoughtful user interfaces.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
              <a
                href="tel:+918867272279"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <Phone size={16} className="opacity-70" />
                <span>+91-88672-72279</span>
              </a>
              <a
                href="mailto:swapnanilsinha21@gmail.com"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <Mail size={16} className="opacity-70" />
                <span>swapnanilsinha21@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/swapnanilsinha/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <Linkedin size={16} className="opacity-70" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href="https://github.com/SwapnanilSinha/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <Github size={16} className="opacity-70" />
                <span>GitHub Profile</span>
              </a>
            </div>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href="#experience"
                className="transition-transform hover:-translate-y-1"
              >
                <Button className="bg-primary text-white hover:bg-primary/90">
                  <Briefcase className="mr-2 h-4 w-4" />
                  Experience
                </Button>
              </a>
              <a
                href="#education"
                className="transition-transform hover:-translate-y-1"
              >
                <Button
                  variant="outline"
                  className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
                >
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Education
                </Button>
              </a>
              <a
                href="#skills"
                className="transition-transform hover:-translate-y-1"
              >
                <Button
                  variant="outline"
                  className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
                >
                  <Code className="mr-2 h-4 w-4" />
                  Skills
                </Button>
              </a>
              <a
                href="#projects"
                className="transition-transform hover:-translate-y-1"
              >
                <Button
                  variant="outline"
                  className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
                >
                  <Github className="mr-2 h-4 w-4" />
                  Projects
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-b from-transparent to-background"></div>
    </header>
  );
};

export default Header;
