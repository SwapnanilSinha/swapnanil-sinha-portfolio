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
import { CalendarDays, Github } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FiExternalLink } from "react-icons/fi";

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
      "Engineered Dataguard to flag anomalies and suggest corrections in client historical datasets.",
    details: [
      "Reduced data errors by about 30% and improved reliability across analytics workflows.",
      "Built streamlined interfaces for data viewing and management, cutting manual review time by about 40% and enabling faster stakeholder decisions.",
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
      "Implemented backend features for event scheduling, participant registration, and Cashfree payment gateway integration to ensure secure transactions.",
      "The platform boosted engagement by nearly 80% and is a popular choice among event goers.",
    ],
    image: {
      src: "/cadance.jpg",
      alt: "Cadance Run Club",
    },
    otherLink: "https://www.runwithcadance.com",
    technologies: ["React.js", "TypeScript", "Supabase", "Cashfree API"],
  },
  {
    title: "LEAP Studio Platform Feature Improvement",
    duration: "Jan 2024 - Jul 2025",
    description: "LEAP Studio",
    details: [
      "Developed and deployed features from inception to testing, elevating Leap to an enterprise-level tool.",
      "Rapidly developed and implemented new features using React, Express, and Node.js.",
      "Features received positive feedback and boosted customer productivity by up to 35%.",
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
      "Set up dedicated Leap instances to ensure secure, interference-free monetary transactions for users across 14 countries.",
      "Integrated UNO-FLARES, Mobiquity, and Leap Studio for seamless system interoperability.",
    ],
    image: {
      src: "/comviva.jpeg",
      alt: "Comviva Technologies",
    },
    technologies: ["Node.js", "React", "JavaScript"],
  },
  {
    title: "Abhi Skill - Upskilling Platform",
    duration: "Jul 2020 - May 2021",
    description:
      "Created an online skill-based learning platform for blue-collar workers to upskill and build a community.",
    details: [
      "Created an online skill-based learning platform to help workers upskill and connect through shared learning paths.",
    ],
    technologies: ["Product Strategy", "Community Building", "UI/UX"],
  },
  {
    title: "Hotel Bookings Management Application",
    duration: "Aug 2024 - Sep 2024",
    description:
      "Developed an Airbnb-inspired interactive web application on Vercel.",
    details: [
      "Built with TypeScript and Next.js for a seamless user experience.",
      "Created the interface using the shadcn/ui library and handled user, property, and booking data with Prisma on PostgreSQL and MongoDB.",
      "Integrated user account management with Clerk and payment processing with Stripe.",
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
      className="py-20 px-4 md:px-8 lg:px-10 max-w-6xl mx-auto"
    >
      <h2 className="section-title font-display">PROJECTS</h2>

      <div className="space-y-6">
        {projectsData.map((project, index) => (
          <Card
            key={index}
            className="card-hover overflow-hidden border border-slate-200/70 shadow-sm bg-white"
          >
            <CardHeader className="pb-2">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div className="flex items-start gap-3">
                  {project.image && (
                    <img
                      src={project.image.src}
                      alt={project.image.alt}
                      className="h-12 w-12 rounded-xl border border-slate-200/70 object-cover"
                    />
                  )}
                  <div>
                    <CardTitle className="text-xl font-bold">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm mt-1">
                      <span className="flex items-center">
                        <CalendarDays
                          size={14}
                          className="mr-1 text-slate-400"
                        />
                        {project.duration}
                      </span>
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
            <CardContent>
              <p className="text-slate-700 mb-3">{project.description}</p>
              <Accordion type="single" collapsible>
                <AccordionItem value="details">
                  <AccordionTrigger className="text-sm text-orange-600">
                    View Details
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc list-inside space-y-2 text-slate-700 pl-2">
                      {project.details.map((detail, idx) => (
                        <li key={idx} className="text-sm">
                          {detail}
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
              <CardFooter className="border-t border-slate-200/70 bg-slate-50 px-4 py-3">
                <span className="inline-flex items-center gap-2">
                  {project.repoLink && (
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-700 text-sm font-medium flex items-center hover:text-slate-900"
                    >
                      <Github size={16} className="mr-1" />
                      View Repository
                    </a>
                  )}
                  {project.otherLink && (
                    <a
                      href={project.otherLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 text-sm font-medium flex items-center hover:text-orange-700"
                    >
                      <FiExternalLink size={16} className="mr-1" />
                      Visit Project
                    </a>
                  )}
                </span>
              </CardFooter>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
