import React from "react";
import { FileText } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const Summary = () => {
  return (
    <section id="summary" className="page-section">
      <SectionHeader index="01 — Summary" title="Professional Summary" icon={FileText} />
      <div className="card-surface p-8 md:p-10">
        <p className="text-foreground/80 leading-relaxed text-base md:text-lg">
          I aim to build{" "}
          <span className="font-semibold text-primary">
            scalable, secure, and high-performance
          </span>{" "}
          software systems by combining strong{" "}
          <span className="font-semibold text-primary">
            full-stack engineering
          </span>{" "}
          with modern frameworks and{" "}
          <span className="font-semibold text-primary">
            cloud platforms
          </span>{" "}
          to solve real-world problems. I envision evolving as an engineer who
          consistently delivers{" "}
          <span className="font-semibold text-primary">
            reliable end-to-end products
          </span>{" "}
          while driving innovation through{" "}
          <span className="font-semibold text-primary">
            intelligent automation
          </span>
          {", "}
          <span className="font-semibold text-primary">
            data-driven insights
          </span>
          {", and thoughtful system design. As an "}
          <span className="font-semibold text-primary">
            AI-first practitioner
          </span>
          {", I utilize an "}
          <span className="font-semibold text-primary">
            AI-driven development flow with GitHub Copilot
          </span>{" "}
          where autonomous agents plan, generate, test, and refine code across
          tasks. This approach accelerates delivery through{" "}
          <span className="font-semibold text-primary">
            context-aware automation
          </span>
          {
            " paired with human-in-the-loop control. Beyond engineering, I am a "
          }
          co-founder of Cadance Run Club, a freelancer and web developer, a
          musician, a marathon runner, a Formula-1 enthusiast, and a squash
          player.
        </p>
      </div>
    </section>
  );
};

export default Summary;
