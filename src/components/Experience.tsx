import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalendarDays, MapPin, Building, Briefcase } from "lucide-react";

const technologies = [
  "Node.js",
  "FastAPI",
  "React.js",
  "Redux",
  "Next.js",
  "TypeScript",
  "HTML",
  "CSS",
  "Express.js",
  "InfluxDB",
  "Grafana",
  "NumPy",
  "Pandas",
  "Matplotlib",
  "Python",
  "JavaScript",
  "Microservices",
];

const escapeRegExp = (value: string) =>
  value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const highlightTechnologies = (text: string) => {
  const parts = text.split(
    new RegExp(`(${technologies.map(escapeRegExp).join("|")})`, "g"),
  );
  return parts.map((part, idx) =>
    technologies.includes(part) ? (
      <span key={idx} className="font-semibold text-orange-600">
        {part}
      </span>
    ) : (
      <span key={idx}>{part}</span>
    ),
  );
};

type ExperienceItem = {
  company: string;
  title: string;
  duration: string;
  location: string;
  description: string;
  responsibilities: string[];
  logo?: string;
  url?: string;
  isActive?: boolean;
};

const experienceData: ExperienceItem[] = [
  {
    company: "UsefulBI Corporation",
    title: "Senior Software Engineer I",
    duration: "May 2026 - Present",
    location: "Bangalore, KA, India",
    description: "",
    responsibilities: [],
    url: "usefulbi-corporation",
    logo: "/usefulbi.jpeg", // Local asset
    isActive: true,
  },
  {
    company: "Sigmoid Analytics",
    title: "Software Development Engineer II - Full Stack",
    duration: "Jul 2025 - Apr 2026",
    location: "Bangalore, KA, India",
    description:
      "Engineering secure, high-performance workflows and analytics systems with modern microservices architecture.",
    responsibilities: [
      "Engineered high-performance, secure workflows by integrating Node.js, FastAPI, and React.js microservices architecture, streamlining data processing.",
      "Develop and maintain scalable data pipelines and analytics solutions with Next.js, TypeScript, and an AI recommendation engine, delivering personalized insights that increased user engagement.",
    ],
    url: "sigmoid-analytics",
    logo: "/sigmoid.jpeg", // Local asset
    isActive: false,
  },
  {
    company: "Comviva Technologies",
    title: "Senior Software Engineer",
    duration: "Jan 2022 - Jul 2025",
    location: "Bangalore, KA, India",
    description:
      "Developed scalable APIs and USSD value-added services for mobile banking systems, aligning with streamlined SDLC practices.",
    responsibilities: [
      "Implemented web features for the LEAP product with Node.js and React.js, delivering a consistent UI built with HTML and CSS.",
      "Analyzed time-series data from InfluxDB and built KPI dashboards in Grafana, enabling data-driven decisions.",
    ],
    url: "comviva",
    logo: "/comviva.jpeg", // Local asset
  },
  {
    company: "Ckuens Analytics",
    title: "Data Science Intern",
    duration: "Jul 2021 - Sep 2021",
    location: "Bangalore, KA, India",
    description:
      "Engineered machine learning models using Python to classify and predict heartbeat signal anomalies with rigorous testing and validation.",
    responsibilities: [
      "Processed and analyzed datasets with NumPy, Pandas, and Matplotlib, and presented key findings to senior management, supporting technology selection decisions.",
    ],
    url: "ckuens",
    logo: "/ckuens.jpeg", // Local asset
  },
];

const Experience = () => {
  return (
    <section id="experience" className="page-section bg-white">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-2 bg-orange-100 rounded-lg">
          <Briefcase className="text-orange-600 h-6 w-6" />
        </div>
        <h2 className="section-title font-display">EXPERIENCE</h2>
      </div>
      <div className="space-y-6">
        {experienceData.map((item, index) => (
          <Card
            key={index}
            className="card-hover overflow-hidden border border-slate-100 shadow-md bg-white"
          >
            <div
              className={`h-1.5 ${index === 0 ? "bg-gradient-to-r from-orange-500 to-orange-400" : "bg-slate-200"}`}
            ></div>
            <CardHeader className="pb-3 pt-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="bg-orange-50 p-2.5 rounded-lg">
                      <Building className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-slate-900">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-base text-slate-600 font-medium mt-0.5">
                        {item.company}
                      </CardDescription>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                  {item.logo && (
                    <a
                      href={`https://www.linkedin.com/company/${item.url
                        .toLowerCase()
                        .replace(/\s+/g, "-")}/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden sm:block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-300 transition-transform hover:scale-105"
                    >
                      <img
                        src={item.logo}
                        alt={`${item.company} logo`}
                        className="h-16 w-16 rounded-lg border border-slate-200 shadow-sm object-cover"
                      />
                    </a>
                  )}
                  <div className="flex flex-col text-sm text-slate-600 gap-2">
                    <div className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-lg">
                      <CalendarDays
                        size={14}
                        className="text-slate-400 flex-shrink-0"
                      />
                      <span className="font-medium">{item.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-lg">
                      <MapPin
                        size={14}
                        className="text-slate-400 flex-shrink-0"
                      />
                      <span className="font-medium">{item.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pb-6">
              <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                {item.description}
              </p>
              {item.responsibilities.length > 0 && (
                <>
                  <h4 className="text-sm font-bold text-slate-800 mb-4 uppercase tracking-wide">
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-3 text-slate-700">
                    {item.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-orange-500 mt-2.5 flex-shrink-0"></span>
                        <span className="text-sm leading-relaxed">
                          {highlightTechnologies(responsibility)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Experience;
