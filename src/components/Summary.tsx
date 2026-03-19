import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";

const Summary = () => {
  return (
    <section
      id="summary"
      className="page-section bg-gradient-to-b from-white/50 to-transparent"
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="p-2 bg-orange-100 rounded-lg">
          <FileText className="text-orange-600 h-6 w-6" />
        </div>
        <h2 className="section-title font-display">PROFESSIONAL SUMMARY</h2>
      </div>
      <Card className="card-hover border border-slate-100 shadow-lg bg-white overflow-hidden">
        <div className="h-1.5 bg-gradient-to-r from-orange-500 via-orange-400 to-amber-400"></div>
        <CardContent className="pt-8 px-8 md:px-10">
          <p className="text-slate-700 leading-relaxed text-base md:text-lg font-light">
            I aim to build{" "}
            <span className="font-semibold text-orange-600">
              scalable, secure, and high-performance
            </span>{" "}
            software systems by combining strong{" "}
            <span className="font-semibold text-orange-600">
              full-stack engineering
            </span>{" "}
            with modern frameworks and{" "}
            <span className="font-semibold text-orange-600">
              cloud platforms
            </span>{" "}
            to solve real-world problems. I envision evolving as an engineer who
            consistently delivers{" "}
            <span className="font-semibold text-orange-600">
              reliable end-to-end products
            </span>{" "}
            while driving innovation through{" "}
            <span className="font-semibold text-orange-600">
              intelligent automation
            </span>
            {", "}
            <span className="font-semibold text-orange-600">
              data-driven insights
            </span>
            {", and thoughtful system design. As an "}
            <span className="font-semibold text-orange-600">
              AI-first practitioner
            </span>
            {", I leverage "}
            <span className="font-semibold text-orange-600">
              GitHub Copilot's agentic workflow
            </span>{" "}
            where autonomous agents plan, generate, test, and refine code across
            tasks, accelerating delivery through{" "}
            <span className="font-semibold text-orange-600">
              context-aware automation
            </span>
            . I'm also a co-founder of Cadance Run Club, a passionate
            freelancer, musician, marathon runner, Formula-1 enthusiast, and
            squash player.
          </p>
        </CardContent>
      </Card>
    </section>
  );
};

export default Summary;
