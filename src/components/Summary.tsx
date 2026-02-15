import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";

const Summary = () => {
  return (
    <section id="summary" className="page-section">
      <div className="flex items-center gap-3 mb-8">
        <FileText className="text-primary h-8 w-8" />
        <h2 className="section-title font-display">SUMMARY</h2>
      </div>
      <Card className="card-hover border border-slate-200/70 shadow-sm bg-white/90">
        <div className="h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400"></div>
        <CardContent className="pt-7 px-6 md:px-8">
          <p className="text-slate-700 leading-relaxed text-lg">
            Software Development Engineer II - Full Stack with mid-level
            expertise delivering end-to-end web solutions. Led development of a
            scalable data analytics platform using Next.js, TypeScript and an AI
            recommendation engine, boosting processing speed by 30%. Built
            high-performance APIs and interactive tools for customer ease.
            Seeking to apply full-stack skills to drive innovative products and
            measurable business impact.
          </p>
        </CardContent>
      </Card>
    </section>
  );
};

export default Summary;
