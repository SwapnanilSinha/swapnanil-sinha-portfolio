import React from "react";
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  GraduationCap,
  Code,
  Github,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  FileText,
  Download,
} from "lucide-react";

const Header = () => {
  return (
    <header className="relative w-full py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="md:order-2 flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-white/10 blur-lg transform -translate-x-1 translate-y-1"></div>
              <img
                alt="Swapnanil Sinha - MERN Full Stack Software Developer"
                src="Image.png"
                className="relative w-40 h-40 rounded-full border-4 border-white/30 shadow-lg object-fill"
              />
            </div>
          </div>

          <div className="md:order-1 text-center md:text-left flex-1">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
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
                  className="text-blue-400 hover:text-white transition-colors cursor-pointer"
                  aria-label="Download Profile"
                />
              </a>
            </div>

            <h2 className="text-xl text-blue-200 mb-6 font-light">
              Software Developer based in Bengaluru, India
            </h2>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
              <a
                href="tel:+919186727279"
                className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors"
              >
                <Phone size={16} className="opacity-70" />
                <span>+91-88672-72279</span>
              </a>
              <a
                href="mailto:swapnanilsinha21@gmail.com"
                className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors"
              >
                <Mail size={16} className="opacity-70" />
                <span>swapnanilsinha21@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/swapnanilsinha/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors"
              >
                <Linkedin size={16} className="opacity-70" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href="https://github.com/SwapnanilSinha/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors"
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
                <Button
                  variant="outline"
                  className="backdrop-blur-md bg-white/10 hover:bg-white/20 border-white/20"
                >
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
                  className="backdrop-blur-md bg-white/10 hover:bg-white/20 border-white/20"
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
                  className="backdrop-blur-md bg-white/10 hover:bg-white/20 border-white/20"
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
                  className="backdrop-blur-md bg-white/10 hover:bg-white/20 border-white/20"
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
