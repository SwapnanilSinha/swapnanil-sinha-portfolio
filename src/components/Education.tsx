import React from "react";
import { CalendarDays, MapPin, Award, GraduationCap } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const Education = () => {
  return (
    <section id="education" className="page-section">
      <SectionHeader index="03 — Education" title="Education" icon={GraduationCap} />
      <div className="card-surface card-hover overflow-hidden p-6 md:p-7">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-secondary p-2.5 rounded-lg">
              <GraduationCap className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">
                Bachelor of Technology, Electronics and Communication
                Engineering
              </h3>
              <p className="text-base text-foreground/60 font-medium mt-0.5">
                SRM Institute of Science and Technology
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <a
              href="https://www.linkedin.com/school/s.r.m.-institute-of-science-&-technology-chennai/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-transform hover:scale-105"
            >
              <img
                className="h-14 w-14 rounded-lg border border-border bg-white object-contain p-1.5"
                src="/srmist.jpeg"
                alt="SRM University Logo"
              />
            </a>
            <div className="flex flex-col text-sm text-foreground/60 gap-2">
              <div className="flex items-center gap-2 bg-secondary px-3 py-2 rounded-lg">
                <CalendarDays size={14} className="text-foreground/40 flex-shrink-0" />
                <span className="font-medium">Jun 2018 - May 2022</span>
              </div>
              <div className="flex items-center gap-2 bg-secondary px-3 py-2 rounded-lg">
                <MapPin size={14} className="text-foreground/40 flex-shrink-0" />
                <span className="font-medium">Chennai, India</span>
              </div>
              <div className="flex items-center gap-2 bg-primary/10 px-3 py-2 rounded-lg text-primary font-semibold">
                <Award size={14} className="flex-shrink-0" />
                <span>GPA: 8.53 / 10.0</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 pt-5 border-t border-border">
          <p className="text-foreground/80 leading-relaxed text-sm md:text-base">
            Completed a comprehensive curriculum in{" "}
            <span className="font-semibold text-primary">
              electronics and communication engineering
            </span>
            , with additional coursework in{" "}
            <span className="font-semibold text-primary">
              programming and software development
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
