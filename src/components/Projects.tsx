import React from "react";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Github, Code } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FiExternalLink } from "react-icons/fi";
import SectionHeader from "@/components/SectionHeader";

const highlightTechs = (text, technologies) => {
  if (!technologies || technologies.length === 0) return text;
  const techRegex = new RegExp(
    `(${technologies.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
    "gi",
  );
  const parts = text.split(techRegex);
  return (
    <>
      {parts.map((part, idx) =>
        technologies.some(
          (tech) => tech.toLowerCase() === part.toLowerCase(),
        ) ? (
          <span key={idx} className="font-semibold text-primary">
            {part}
          </span>
        ) : (
          <span key={idx}>{part}</span>
        ),
      )}
    </>
  );
};

type Project = {
  title: string;
  duration: string;
  description: string;
  details: string[];
  repoLink?: string;
  otherLink?: string;
  technologies?: string[];
  image?: {
    src: string;
    alt: string;
  };
};

const projectsData: Project[] = [
  {
    title: "RegXP - UsefulBI",
    duration: "Jun 2026 - Present",
    description:
      "Owned UX and full-stack development for RegXP, integrating AWS extraction pipelines and an AI chatbot to surface insights from pharmaceutical study documents.",
    details: [
      "Integrated Amazon Textract and AWS Bedrock extraction pipelines to automate document data extraction from pharmaceutical study documents.",
      "Built an AI chatbot to query study documents and owned end-to-end UX and full-stack delivery.",
    ],
    image: {
      src: "/usefulbi.jpeg",
      alt: "UsefulBI Corporation",
    },
    technologies: ["React.js", "Python", "AWS", "Amazon Textract", "AWS Bedrock"],
  },
  {
    title: "Study Lifecycle Platform - UsefulBI",
    duration: "Sep 2026 - Present",
    description:
      "Building an agentic platform that automates the pharmaceutical study lifecycle end-to-end, from study setup through to reporting.",
    details: [
      "Automates the full pharmaceutical study lifecycle, from study setup through to reporting, using an agentic workflow.",
      "Built with React.js and Python (FastAPI).",
    ],
    image: {
      src: "/usefulbi.jpeg",
      alt: "UsefulBI Corporation",
    },
    technologies: ["React.js", "Python", "FastAPI"],
  },
  {
    title: "DataGuard DQ - Sigmoid",
    duration: "Sep 2025 - May 2026",
    description:
      "Developed secure, high-concurrency APIs to enable seamless data exchange across internal services.",
    details: [
      "Built with FastAPI and Node.js, facilitating seamless data exchange between internal services.",
      "Reduced response latency, cut audit turnaround time by about 30%, and improved data governance across analytics workflows.",
    ],
    image: {
      src: "/sigmoid.jpeg",
      alt: "Sigmoid Analytics",
    },
    technologies: ["Python", "Node.js", "AWS", "Grafana"],
  },
  {
    title: "LEAP Studio Platform Feature Improvement",
    duration: "Jan 2022 - Jul 2025",
    description:
      "Developed and deployed product features from inception through testing, helping elevate LEAP into an enterprise-grade platform.",
    details: [
      "Developed and deployed features from inception to testing using React, Express, and Node.js.",
      "Features improved customer efficiency by around 25%.",
    ],
    image: {
      src: "/comviva.jpeg",
      alt: "Comviva Technologies",
    },
    technologies: ["React", "Express", "Node.js"],
  },
  {
    title: "Airtel Money - Comviva Technologies",
    duration: "Aug 2024 - Jul 2025",
    description:
      "Designed and implemented a user-friendly interface to manage merchant and subscriber financial transactions.",
    details: [
      "Designed and implemented a user-friendly interface to manage merchant and subscriber transactions.",
      "Ensured secure, interference-free monetary transactions for users across 14 countries.",
    ],
    image: {
      src: "/comviva.jpeg",
      alt: "Comviva Technologies",
    },
    technologies: ["Node.js", "React", "JavaScript"],
  },
  {
    title: "Cadance Run Club - Web App",
    duration: "Jun 2025 - Present",
    description:
      "Developed a responsive and community-centric website for Cadance Run Club, streamlining event coordination and runner engagement.",
    details: [
      "Implemented backend features for event scheduling, participant registration, and Cashfree payment gateway integration to ensure secure transactions.",
      "Built as a freelance engagement to improve event operations and runner participation through a streamlined web experience.",
    ],
    image: {
      src: "/cadance.jpg",
      alt: "Cadance Run Club",
    },
    otherLink: "https://www.runwithcadance.com",
    technologies: ["React.js", "TypeScript", "Supabase", "Cashfree"],
  },
  {
    title: "Hotel Bookings Management Application",
    duration: "Aug 2024 - Sep 2024",
    description:
      "Developed an Airbnb-inspired interactive web application on Vercel.",
    details: [
      "Built with TypeScript and Next.js for a seamless user experience.",
      "Developed an Airbnb-inspired interactive interface and deployed the application on Vercel.",
      "Used Git for version control with a publicly accessible repository.",
    ],
    repoLink: "https://github.com/SwapnanilSinha/next-project-24",
    otherLink: "https://hotel-bookings-project24.vercel.app/",
    technologies: [
      "Next.js",
      "TypeScript",
      "shadcn/ui",
      "Prisma",
      "PostgreSQL",
      "MongoDB",
      "Clerk",
      "Stripe",
      "Git",
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="page-section">
      <SectionHeader index="05 — Projects" title="Featured Projects" icon={Code} />

      <div className="space-y-5">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="card-surface card-hover overflow-hidden"
          >
            <div className="p-6 pb-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3">
                <div className="flex items-start gap-3">
                  {project.image && (
                    <img
                      src={project.image.src}
                      alt={project.image.alt}
                      className="h-12 w-12 rounded-lg border border-border bg-white object-contain p-1 flex-shrink-0"
                    />
                  )}
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-sm mt-1.5 flex items-center gap-1.5 text-foreground/55">
                      <CalendarDays size={14} className="text-foreground/40 flex-shrink-0" />
                      <span className="font-medium">{project.duration}</span>
                    </p>
                  </div>
                </div>
                {project.technologies && (
                  <div className="flex flex-wrap gap-1.5 mt-2 md:mt-0">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="bg-secondary text-foreground/70 border-border"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="bg-secondary text-foreground/50 border-border">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                )}
              </div>
            </div>
            <div className="px-6 pb-2">
              <p className="text-foreground/80 mb-4 leading-relaxed text-sm md:text-base">
                {highlightTechs(project.description, project.technologies)}
              </p>
              <Accordion type="single" collapsible>
                <AccordionItem value="details" className="border-border">
                  <AccordionTrigger className="text-sm font-semibold text-primary hover:text-primary/80">
                    View Details
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc list-inside space-y-2 text-foreground/80 pl-2">
                      {project.details.map((detail, idx) => (
                        <li key={idx} className="text-sm">
                          {highlightTechs(detail, project.technologies)}
                        </li>
                      ))}
                    </ul>

                    {project.technologies &&
                      project.technologies.length > 3 && (
                        <div className="mt-4">
                          <p className="text-sm font-medium mb-2 text-foreground/70">
                            Technologies:
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {project.technologies.map((tech, idx) => (
                              <Badge
                                key={idx}
                                variant="outline"
                                className="bg-secondary text-foreground/70 border-border"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            {(project.repoLink || project.otherLink) && (
              <div className="border-t border-border bg-secondary/50 px-6 py-4 gap-4 flex-wrap flex items-center">
                {project.repoLink && (
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 text-sm font-medium flex items-center gap-1.5 hover:text-primary transition-colors duration-200"
                  >
                    <Github size={16} />
                    View Code
                  </a>
                )}
                {project.otherLink && (
                  <a
                    href={project.otherLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm font-medium flex items-center gap-1.5 hover:text-primary/80 transition-colors duration-200"
                  >
                    <FiExternalLink size={16} />
                    Visit Project
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
