import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalendarDays, MapPin, Building, Briefcase } from "lucide-react";

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
    company: "Sigmoid Analytics",
    title: "Software Development Engineer II - Full Stack",
    duration: "Jul 2025 - Present",
    location: "Bangalore, KA, India",
    description:
      "Leading the development of advanced data analytics solutions with scalable architectures and real-time insights.",
    responsibilities: [
      "Led development of advanced data analytics solutions using Python, Node.js, microservices on AWS, and Grafana, reducing data-processing latency and enabling real-time dashboards.",
      "Developed and maintained scalable data pipelines and analytics solutions with Next.js, TypeScript, and an AI recommendation engine on AWS, delivering personalized insights that increased user engagement.",
    ],
    url: "sigmoid-analytics",
    logo: "/sigmoid.jpeg", // Local asset
    isActive: true,
  },
  {
    company: "Comviva Technologies",
    title: "Senior Software Engineer",
    duration: "Jan 2022 - Jul 2025",
    location: "Bangalore, KA, India",
    description:
      "Developed scalable APIs and USSD value-added services for mobile banking systems, aligning with streamlined software development life cycle practices.",
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
      "Processed and analyzed datasets with NumPy, Pandas, and Matplotlib, then presented key findings to senior management to inform product decisions.",
    ],
    url: "ckuens",
    logo: "/ckuens.jpeg", // Local asset
  },
];

const Experience = () => {
  return (
    <section id="experience" className="page-section bg-white/70">
      <div className="flex items-center gap-3 mb-8">
        <Briefcase className="text-primary h-8 w-8" />
        <h2 className="section-title font-display">EXPERIENCE</h2>
      </div>
      <div className="space-y-6">
        {experienceData.map((item, index) => (
          <Card
            key={index}
            className="card-hover overflow-hidden border border-slate-200/70 shadow-sm bg-white"
          >
            <div
              className={`h-1 ${index === 0 ? "bg-primary" : "bg-slate-300"}`}
            ></div>
            <CardHeader className="pb-2">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="bg-orange-50 p-2 rounded-full">
                      <Building className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-lg text-slate-700 font-medium">
                        {item.company}
                      </CardDescription>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  {item.logo && (
                    <a
                      href={`https://www.linkedin.com/company/${item.url
                        .toLowerCase()
                        .replace(/\s+/g, "-")}/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden sm:block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-300"
                    >
                      <img
                        src={item.logo}
                        alt={`${item.company} logo`}
                        className="h-20 w-20 rounded-full border border-slate-200/70"
                      />
                    </a>
                  )}
                  <div className="flex flex-col text-sm text-slate-500 gap-2">
                    <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-full">
                      <CalendarDays size={14} className="text-slate-400" />
                      <span>{item.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-full">
                      <MapPin size={14} className="text-slate-400" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-500 mb-4 italic">
                {item.description}
              </p>
              <h4 className="text-sm font-semibold text-slate-700 mb-3">
                Key Responsibilities:
              </h4>
              <ul className="space-y-3 text-slate-700">
                {item.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2"></span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Experience;
