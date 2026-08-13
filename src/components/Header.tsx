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

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-ink";

const Header = () => {
  return (
    <header className="relative w-full overflow-hidden bg-ink text-ink-foreground">
      {/* One deliberate glow + a faint dot grid, instead of stacked colored blobs */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 right-[-5%] h-96 w-96 rounded-full bg-primary/25 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 md:px-8 lg:px-10 pt-32 pb-20 md:pt-36 md:pb-24">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          <div className="md:order-2 flex-shrink-0 flex flex-col items-center">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/40 to-transparent blur-md" />
              <img
                alt="Swapnanil Sinha - Senior Full Stack Developer"
                src="Image.png"
                className="relative w-36 h-36 rounded-full border-2 border-white/15 shadow-2xl object-cover"
              />
            </div>
            <div className="mt-6 text-center">
              <p className="text-[11px] uppercase tracking-[0.25em] text-ink-foreground/45">
                Worked With
              </p>
              <div className="mt-3 flex items-center justify-center gap-2.5">
                <img
                  src="/usefulbi.jpeg"
                  alt="UsefulBI logo"
                  className="h-9 w-9 rounded-full border border-white/15 bg-white/5 object-cover"
                />
                <img
                  src="/sigmoid.jpeg"
                  alt="Sigmoid Analytics logo"
                  className="h-9 w-9 rounded-full border border-white/15 bg-white/5 object-cover"
                />
                <img
                  src="/comviva.jpeg"
                  alt="Comviva Technologies logo"
                  className="h-9 w-9 rounded-full border border-white/15 bg-white/5 object-cover"
                />
                <img
                  src="/ckuens.jpeg"
                  alt="Ckuens Analytics logo"
                  className="h-9 w-9 rounded-full border border-white/15 bg-white/5 object-cover"
                />
                <img
                  src="/cadance.jpg"
                  alt="Cadance Run Club logo"
                  className="h-9 w-9 rounded-full border border-white/15 bg-white/5 object-cover"
                />
              </div>
            </div>
          </div>

          <div className="md:order-1 text-center md:text-left flex-1">
            <p className="text-sm font-medium tracking-wide text-primary mb-3">
              Senior Full Stack Developer
            </p>

            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <h1
                className="font-display text-4xl md:text-6xl font-bold"
                style={{ letterSpacing: "-0.03em", lineHeight: 1.05 }}
              >
                Swapnanil Sinha
              </h1>
              <a
                href="/SWAPNANIL SINHA.pdf"
                download
                className={`inline-flex items-center justify-center rounded-full p-1.5 text-ink-foreground/50 transition-colors hover:bg-white/10 hover:text-ink-foreground ${focusRing}`}
                title="Download Profile"
                aria-label="Download Profile"
              >
                <Download size={22} />
              </a>
            </div>

            <h2 className="text-lg md:text-xl font-medium text-ink-foreground/85 mb-4">
              🤖 Claude Agentic AI Developer
            </h2>

            <div className="mb-5 flex flex-wrap items-center justify-center md:justify-start gap-2">
              <span className="text-ink-foreground/50 text-sm">
                Bangalore, KA, India · Passively Open to New Opportunities
              </span>
            </div>

            <p className="text-base md:text-lg text-ink-foreground/70 max-w-2xl mb-8 leading-relaxed">
              Building high-performance, data-driven products with modern web
              stacks, scalable backend systems, and thoughtful user interfaces.
              Leveraging AI-first development workflows with GitHub Copilot for
              accelerated delivery.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-x-5 gap-y-2 mb-9 text-sm">
              <a
                href="tel:+918867272279"
                className={`flex items-center gap-2 rounded-md px-1 text-ink-foreground/65 transition-colors hover:text-ink-foreground ${focusRing}`}
              >
                <Phone size={15} className="opacity-70" />
                <span>+91-88672-72279</span>
              </a>
              <a
                href="mailto:swapnanilsinha21@gmail.com"
                className={`flex items-center gap-2 rounded-md px-1 text-ink-foreground/65 transition-colors hover:text-ink-foreground ${focusRing}`}
              >
                <Mail size={15} className="opacity-70" />
                <span>swapnanilsinha21@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/swapnanilsinha/"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 rounded-md px-1 text-ink-foreground/65 transition-colors hover:text-ink-foreground ${focusRing}`}
              >
                <Linkedin size={15} className="opacity-70" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/SwapnanilSinha/"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 rounded-md px-1 text-ink-foreground/65 transition-colors hover:text-ink-foreground ${focusRing}`}
              >
                <Github size={15} className="opacity-70" />
                <span>GitHub</span>
              </a>
            </div>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href="#experience"
                className={`rounded-md transition-transform duration-200 hover:-translate-y-1 active:translate-y-0 active:scale-[0.97] ${focusRing}`}
              >
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Briefcase className="mr-2 h-4 w-4" />
                  Experience
                </Button>
              </a>
              <a
                href="#education"
                className={`rounded-md transition-transform duration-200 hover:-translate-y-1 active:translate-y-0 active:scale-[0.97] ${focusRing}`}
              >
                <Button
                  variant="outline"
                  className="border-white/15 bg-transparent text-ink-foreground hover:bg-white/10 hover:text-ink-foreground"
                >
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Education
                </Button>
              </a>
              <a
                href="#skills"
                className={`rounded-md transition-transform duration-200 hover:-translate-y-1 active:translate-y-0 active:scale-[0.97] ${focusRing}`}
              >
                <Button
                  variant="outline"
                  className="border-white/15 bg-transparent text-ink-foreground hover:bg-white/10 hover:text-ink-foreground"
                >
                  <Code className="mr-2 h-4 w-4" />
                  Skills
                </Button>
              </a>
              <a
                href="#projects"
                className={`rounded-md transition-transform duration-200 hover:-translate-y-1 active:translate-y-0 active:scale-[0.97] ${focusRing}`}
              >
                <Button
                  variant="outline"
                  className="border-white/15 bg-transparent text-ink-foreground hover:bg-white/10 hover:text-ink-foreground"
                >
                  <Github className="mr-2 h-4 w-4" />
                  Projects
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-b from-transparent to-background" />
    </header>
  );
};

export default Header;
