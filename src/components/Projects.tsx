import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Github, Code } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FiExternalLink } from "react-icons/fi";

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
          <span key={idx} className="font-semibold text-orange-600">
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
    title: "DataGuard DQ - Sigmoid",
    duration: "Sep 2025 - Present",
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
    title: "Cadance Run Club - Web App",
    duration: "Jun 2025 - Present",
    description:
      "Developed a responsive and community-centric website for Cadance Run Club, streamlining event coordination and runner engagement.",
    details: [
      "Implemented backend features for event scheduling, participant registration, and PhonePe payment gateway integration to ensure secure transactions.",
      "Built as a freelance engagement to improve event operations and runner participation through a streamlined web experience.",
    ],
    image: {
      src: "/cadance.jpg",
      alt: "Cadance Run Club",
    },
    otherLink: "https://www.runwithcadance.com",
    technologies: ["React.js", "TypeScript", "Supabase", "PhonePe API"],
  },
  {
    title: "LEAP Studio Platform Feature Improvement",
    duration: "Jan 2024 - Jul 2025",
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
    <section
      id="projects"
      className="py-24 px-4 md:px-8 lg:px-10 max-w-6xl mx-auto bg-white"
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="p-2 bg-orange-100 rounded-lg">
          <Code className="text-orange-600 h-6 w-6" />
        </div>
        <h2 className="section-title font-display">FEATURED PROJECTS</h2>
      </div>

      <div className="space-y-6">
        {projectsData.map((project, index) => (
          <Card
            key={index}
            className="card-hover overflow-hidden border border-slate-100 shadow-md bg-white"
          >
            <CardHeader className="pb-3 pt-6 px-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3">
                <div className="flex items-start gap-3">
                  {project.image && (
                    <img
                      src={project.image.src}
                      alt={project.image.alt}
                      className="h-14 w-14 rounded-lg border border-slate-200 shadow-sm object-cover flex-shrink-0"
                    />
                  )}
                  <div>
                    <CardTitle className="text-xl font-bold text-slate-900">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm mt-2 flex items-center gap-1.5 text-slate-600">
                      <CalendarDays
                        size={14}
                        className="text-slate-400 flex-shrink-0"
                      />
                      <span className="font-medium">{project.duration}</span>
                    </CardDescription>
                  </div>
                </div>
                {project.technologies && (
                  <div className="flex flex-wrap gap-1 mt-2 md:mt-0">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="bg-orange-50 text-slate-700"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="bg-slate-50">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent className="pb-6 px-6">
              <p className="text-slate-700 mb-4 leading-relaxed text-sm md:text-base">
                {highlightTechs(project.description, project.technologies)}
              </p>
              <Accordion type="single" collapsible>
                <AccordionItem value="details">
                  <AccordionTrigger className="text-sm font-semibold text-orange-600 hover:text-orange-700">
                    View Details
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc list-inside space-y-2 text-slate-700 pl-2">
                      {project.details.map((detail, idx) => (
                        <li key={idx} className="text-sm">
                          {highlightTechs(detail, project.technologies)}
                        </li>
                      ))}
                    </ul>

                    {project.technologies &&
                      project.technologies.length > 3 && (
                        <div className="mt-4">
                          <p className="text-sm font-medium mb-2">
                            Technologies:
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {project.technologies.map((tech, idx) => (
                              <Badge
                                key={idx}
                                variant="outline"
                                className="bg-orange-50 text-slate-700"
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
            </CardContent>
            {(project.repoLink || project.otherLink) && (
              <CardFooter className="border-t border-slate-100 bg-gradient-to-r from-slate-50 to-transparent px-6 py-4 gap-4 flex-wrap">
                {project.repoLink && (
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-700 text-sm font-medium flex items-center gap-1.5 hover:text-orange-600 transition-colors duration-300"
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
                    className="text-orange-600 text-sm font-medium flex items-center gap-1.5 hover:text-orange-700 transition-colors duration-300"
                  >
                    <FiExternalLink size={16} />
                    Visit Project
                  </a>
                )}
              </CardFooter>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
