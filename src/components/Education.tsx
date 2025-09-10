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
    <section id="education" className="page-section">
      <div className="flex items-center gap-3 mb-8">
        <GraduationCap className="text-primary h-8 w-8" />
        <h2 className="section-title">EDUCATION</h2>
      </div>
      <Card className="card-hover overflow-hidden border-0 shadow-md">
        <div className="h-1 bg-indigo-500"></div>
        <CardHeader className="pb-2">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <div>
              <div className="flex items-center gap-2">
                <div className="bg-gray-100 p-2 rounded-full">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl font-bold">
                    Bachelor of Technology, Electronics and Communication
                    Engineering
                  </CardTitle>
                  <CardDescription className="text-lg text-blue-600 font-medium">
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
                className="hidden sm:block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <img
                  className="h-20 w-20 rounded-full"
                  src="/srmist.jpeg"
                  alt="SRM University Logo"
                />
              </a>
              <div className="flex flex-col text-sm text-gray-500 gap-2">
                <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full">
                  <CalendarDays size={14} className="text-gray-400" />
                  <span>Jun 2018 - May 2022</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full">
                  <MapPin size={14} className="text-gray-400" />
                  <span>Chennai, India</span>
                </div>
                <div className="flex items-center gap-2 bg-green-100 px-3 py-1.5 rounded-full text-green-700 font-semibold">
                  <Award size={14} className="text-green-500" />
                  <span>GPA: 8.53 / 10.0</span>
                </div>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">
            Completed a comprehensive curriculum in electronics and
            communication engineering, with additional coursework in programming
            and software development.
          </p>
        </CardContent>
      </Card>
    </section>
  );
};

export default Education;
