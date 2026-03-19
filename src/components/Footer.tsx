import React from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white py-16 px-4 md:px-8 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-8 border-b border-white/10 mb-8">
          <div>
            <h3 className="font-display text-2xl font-bold mb-3">
              Swapnanil Sinha
            </h3>
            <p className="text-white/60 leading-relaxed text-sm">
              Software Development Engineer II - Full Stack Developer
            </p>
            <p className="text-white/50 text-sm mt-2">Bangalore, KA, India</p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-orange-300">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#summary"
                  className="text-white/60 hover:text-orange-300 transition-colors text-sm font-medium"
                >
                  Summary
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-white/60 hover:text-orange-300 transition-colors text-sm font-medium"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="text-white/60 hover:text-orange-300 transition-colors text-sm font-medium"
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-white/60 hover:text-orange-300 transition-colors text-sm font-medium"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-white/60 hover:text-orange-300 transition-colors text-sm font-medium"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#achievements"
                  className="text-white/60 hover:text-orange-300 transition-colors text-sm font-medium"
                >
                  Achievements
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-orange-300">
              Contact & Social
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:swapnanilsinha21@gmail.com"
                  className="text-white/60 hover:text-orange-300 flex items-center gap-2.5 transition-colors text-sm font-medium"
                >
                  <Mail size={16} className="text-orange-300 flex-shrink-0" />
                  <span>Email</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+918867272279"
                  className="text-white/60 hover:text-orange-300 flex items-center gap-2.5 transition-colors text-sm font-medium"
                >
                  <Phone size={16} className="text-orange-300 flex-shrink-0" />
                  <span>Call</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/swapnanilsinha/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-orange-300 flex items-center gap-2.5 transition-colors text-sm font-medium"
                >
                  <Linkedin
                    size={16}
                    className="text-orange-300 flex-shrink-0"
                  />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/SwapnanilSinha/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-orange-300 flex items-center gap-2.5 transition-colors text-sm font-medium"
                >
                  <Github size={16} className="text-orange-300 flex-shrink-0" />
                  <span>GitHub</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-sm text-white/50">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-2 md:mb-0">
            <p>© {currentYear} Swapnanil Sinha. All rights reserved.</p>
            <span className="hidden md:block text-white/30">•</span>
            <p className="text-xs">Built with React, Tailwind CSS & Vite</p>
          </div>
          <a
            href="https://github.com/SwapnanilSinha/swapnanil-sinha-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 inline-flex items-center gap-1.5 hover:text-orange-300 transition-colors text-xs mt-3"
          >
            <Github size={14} />
            View Source Code
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
