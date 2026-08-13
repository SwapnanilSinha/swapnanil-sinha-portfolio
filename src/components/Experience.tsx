import React from "react";
import { CalendarDays, MapPin, Building, Briefcase } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

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
      <span key={idx} className="font-semibold text-primary">
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
    responsibilities: [
      "Developing responsive enterprise grade applications for global pharmaceutical clients in study report management, materials and drug testing record management.",
    ],
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
    <section id="experience" className="page-section">
      <SectionHeader index="02 — Experience" title="Experience" icon={Briefcase} />
      <div className="space-y-5">
        {experienceData.map((item, index) => (
          <div
            key={index}
            className="card-surface card-hover overflow-hidden p-6 md:p-7"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-secondary p-2.5 rounded-lg">
                  <Building className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-xl font-bold text-foreground">
                      {item.title}
                    </h3>
                    {item.isActive && (
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-base text-foreground/60 font-medium mt-0.5">
                    {item.company}
                  </p>
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
                    className="hidden sm:block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-transform hover:scale-105"
                  >
                    <img
                      src={item.logo}
                      alt={`${item.company} logo`}
                      className="h-14 w-14 rounded-lg border border-border bg-white object-contain p-1.5"
                    />
                  </a>
                )}
                <div className="flex flex-col text-sm text-foreground/60 gap-2">
                  <div className="flex items-center gap-2 bg-secondary px-3 py-2 rounded-lg">
                    <CalendarDays
                      size={14}
                      className="text-foreground/40 flex-shrink-0"
                    />
                    <span className="font-medium">{item.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-secondary px-3 py-2 rounded-lg">
                    <MapPin
                      size={14}
                      className="text-foreground/40 flex-shrink-0"
                    />
                    <span className="font-medium">{item.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {(item.description || item.responsibilities.length > 0) && (
              <div className="mt-5 pt-5 border-t border-border">
                {item.description && (
                  <p className="text-sm text-foreground/70 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                )}
                {item.responsibilities.length > 0 && (
                  <>
                    <h4 className="text-xs font-bold text-foreground/70 mb-4 uppercase tracking-wide">
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-3 text-foreground/80">
                      {item.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">
                            {highlightTechnologies(responsibility)}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
