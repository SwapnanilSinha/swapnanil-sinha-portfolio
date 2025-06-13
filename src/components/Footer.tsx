import React from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8 border-b border-white/10">
          <div>
            <h3 className="text-2xl font-bold mb-2">Swapnanil Sinha</h3>
            <p className="text-gray-300 mb-4">
              Software Developer based in Bengaluru, India
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-300">
                Navigation
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#summary"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Summary
                  </a>
                </li>
                <li>
                  <a
                    href="#experience"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    href="#education"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Education
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-300">
                Contact
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:swapnanilsinha21@gmail.com"
                    className="text-gray-300 hover:text-white flex items-center gap-2 transition-colors"
                  >
                    <Mail size={16} className="text-blue-400" />
                    <span>Email</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+919186727279"
                    className="text-gray-300 hover:text-white flex items-center gap-2 transition-colors"
                  >
                    <Phone size={16} className="text-blue-400" />
                    <span>Call</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/swapnanilsinha/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white flex items-center gap-2 transition-colors"
                  >
                    <Linkedin size={16} className="text-blue-400" />
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/SwapnanilSinha/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white flex items-center gap-2 transition-colors"
                  >
                    <Github size={16} className="text-blue-400" />
                    <span>GitHub</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-400">
          <p>© {currentYear} Swapnanil Sinha. All rights reserved.</p>
          <span className="inline-flex items-center gap-2">
            <p className="mt-2 text-xs text-gray-400">
              Built with React and Tailwind CSS
            </p>
            <a
              href="https://github.com/SwapnanilSinha/swapnanil-sinha-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 mt-2 text-xs flex items-center hover:text-gray-300 transition-colors"
            >
              <Github size={16} className="mr-1" />
              View Repo
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
