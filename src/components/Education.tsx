import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalendarDays, MapPin, Award, GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="page-section bg-white">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-2 bg-orange-100 rounded-lg">
          <GraduationCap className="text-orange-600 h-6 w-6" />
        </div>
        <h2 className="section-title font-display">EDUCATION</h2>
      </div>
      <Card className="card-hover overflow-hidden border border-slate-100 shadow-lg bg-white">
        <div className="h-1.5 bg-gradient-to-r from-orange-500 to-orange-400"></div>
        <CardHeader className="pb-3 pt-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <div>
              <div className="flex items-center gap-3">
                <div className="bg-orange-50 p-2.5 rounded-lg">
                  <GraduationCap className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <CardTitle className="text-xl font-bold text-slate-900">
                    Bachelor of Technology, Electronics and Communication
                    Engineering
                  </CardTitle>
                  <CardDescription className="text-base text-slate-600 font-medium mt-0.5">
                    SRM Institute of Science and Technology
                  </CardDescription>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <a
                href="https://www.linkedin.com/school/s.r.m.-institute-of-science-&-technology-chennai/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-300 transition-transform hover:scale-105"
              >
                <img
                  className="h-16 w-16 rounded-lg border border-slate-200 shadow-sm object-cover"
                  src="/srmist.jpeg"
                  alt="SRM University Logo"
                />
              </a>
              <div className="flex flex-col text-sm text-slate-600 gap-2">
                <div className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-lg">
                  <CalendarDays
                    size={14}
                    className="text-slate-400 flex-shrink-0"
                  />
                  <span className="font-medium">Jun 2018 - May 2022</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-lg">
                  <MapPin size={14} className="text-slate-400 flex-shrink-0" />
                  <span className="font-medium">Chennai, India</span>
                </div>
                <div className="flex items-center gap-2 bg-orange-100 px-3 py-2 rounded-lg text-orange-700 font-semibold">
                  <Award size={14} className="text-orange-500 flex-shrink-0" />
                  <span>GPA: 8.53 / 10.0</span>
                </div>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pb-6">
          <p className="text-slate-700 leading-relaxed text-sm md:text-base">
            Completed a comprehensive curriculum in{" "}
            <span className="font-semibold text-orange-600">
              electronics and communication engineering
            </span>
            , with additional coursework in{" "}
            <span className="font-semibold text-orange-600">
              programming and software development
            </span>
            .
          </p>
        </CardContent>
      </Card>
    </section>
  );
};

export default Education;
