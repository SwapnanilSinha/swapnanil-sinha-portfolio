import React from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const linkClass =
  "text-ink-foreground/55 hover:text-primary transition-colors text-sm font-medium rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-ink";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink text-ink-foreground py-16 px-4 md:px-8 lg:px-10">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-8 border-b border-white/10 mb-8">
          <div>
            <h3 className="font-display text-xl font-bold mb-3 tracking-tight">
              Swapnanil Sinha
            </h3>
            <p className="text-ink-foreground/55 leading-relaxed text-sm">
              Senior Full Stack Developer
            </p>
            <p className="text-ink-foreground/55 leading-relaxed text-sm">
              🤖 Claude Agentic AI Developer
            </p>
            <p className="text-ink-foreground/40 text-sm mt-2">
              Bangalore, KA, India
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-4 text-primary uppercase tracking-wide">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#summary" className={linkClass}>
                  Summary
                </a>
              </li>
              <li>
                <a href="#experience" className={linkClass}>
                  Experience
                </a>
              </li>
              <li>
                <a href="#education" className={linkClass}>
                  Education
                </a>
              </li>
              <li>
                <a href="#skills" className={linkClass}>
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className={linkClass}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#achievements" className={linkClass}>
                  Achievements
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-4 text-primary uppercase tracking-wide">
              Contact & Social
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:swapnanilsinha21@gmail.com"
                  className={`${linkClass} flex items-center gap-2.5`}
                >
                  <Mail size={16} className="text-primary flex-shrink-0" />
                  <span>Email</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+918867272279"
                  className={`${linkClass} flex items-center gap-2.5`}
                >
                  <Phone size={16} className="text-primary flex-shrink-0" />
                  <span>Call</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/swapnanilsinha/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkClass} flex items-center gap-2.5`}
                >
                  <Linkedin size={16} className="text-primary flex-shrink-0" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/SwapnanilSinha/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkClass} flex items-center gap-2.5`}
                >
                  <Github size={16} className="text-primary flex-shrink-0" />
                  <span>GitHub</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-sm text-ink-foreground/45">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-2 md:mb-0">
            <p>© {currentYear} Swapnanil Sinha. All rights reserved.</p>
            <span className="hidden md:block text-ink-foreground/25">•</span>
            <p className="text-xs">Built with React, Tailwind CSS & Vite</p>
          </div>
          <a
            href="https://github.com/SwapnanilSinha/swapnanil-sinha-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className={`${linkClass} inline-flex items-center gap-1.5 text-xs mt-3`}
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
