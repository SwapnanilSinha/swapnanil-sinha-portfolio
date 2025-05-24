import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, ExternalLink, Github, Home } from "lucide-react";
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
};

const projectsData: Project[] = [
  {
    title: "Hotel Bookings Management System",
    duration: "Aug 2024 - Sep 2024",
    description:
      "Developed an Airbnb-inspired user interactive web application on Vercel",
    details: [
      "Developed an Airbnb-inspired user interactive web application on Vercel, utilizing TypeScript and Next.js for a seamless and modern user experience",
      "Created the interface using the shaden/ui library, and efficiently handled user, property, and booking data with Prisma DB, built on PostgreSQL",
      "Integrated user account management using Clerk API and payment processing using the Stripe API",
      "Utilized Git for version control throughout the project, with the repository publicly accessible",
    ],
    repoLink: "https://github.com/SwapnanilSinha/next-project-24",
    otherLink: "https://hotel-bookings-project24.vercel.app/",
    technologies: [
      "Next.js",
      "TypeScript",
      "Shadcn UI",
      "Prisma DB",
      "PostgreSQL",
      "Clerk API",
      "Stripe API",
      "Git",
    ],
  },
  {
    title: "LEAP Studio Platform Feature Improvement",
    duration: "Jan 2024 - Present",
    description: "LEAP Studio",
    details: [
      "Developed and deployed features from inception to testing, elevating Leap to an enterprise-level tool",
      "Rapidly developed and implemented new features using React, Express, and Node.js",
      "Features received positive feedback and are now widely used by development teams at Airtel and MTN ADCR",
    ],
    technologies: ["React", "Express", "Node.js"],
  },
  {
    title: "Channel Migration",
    duration: "Mar 2023 - Aug 2024",
    description:
      "Led a successful migration project to transition the Airtel VAS system to the Leap platform",
    details: [
      "Led a successful migration project to transition the Airtel VAS system to the Leap platform",
      "Managed deployment across 14 countries, ensuring seamless integration and minimal downtime",
      "Led end-to-end development, testing, and deployment of features, managing over 250 sub-integrations",
    ],
    technologies: ["JavaScript", "Node.js"],
  },
  {
    title: "Airtel Money",
    duration: "Aug 2023 - Jan 2025",
    description:
      "Designed and implemented a user-friendly interface to manage Merchant and Subscriber financial transactions",
    details: [
      "Designed and implemented a user-friendly interface to manage Merchant and Subscriber financial transactions",
      "Set up dedicated Leap instances to ensure secure and interference-free monetary transactions for users across 14 countries",
      "Successfully integrated UNO-FLARES, Mobiquity, and Leap Studio for seamless system interoperability",
    ],
    technologies: ["JavaScript", "Node.js", "React"],
  },
];

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  return (
    <section
      id="projects"
      className="py-12 px-4 md:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <h2 className="section-title">PROJECTS</h2>

      <div className="space-y-6">
        {projectsData.map((project, index) => (
          <Card key={index} className="card-hover overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <CardTitle className="text-xl font-bold">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm mt-1">
                    <span className="flex items-center">
                      <CalendarDays size={14} className="mr-1" />
                      {project.duration}
                    </span>
                  </CardDescription>
                </div>
                {project.technologies && (
                  <div className="flex flex-wrap gap-1 mt-2 md:mt-0">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="bg-blue-50">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="bg-gray-50">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-3">{project.description}</p>
              <Accordion type="single" collapsible>
                <AccordionItem value="details">
                  <AccordionTrigger className="text-sm text-blue-600">
                    View Details
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 pl-2">
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
                                className="bg-blue-50"
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
            {project.repoLink && (
              <CardFooter className="border-t bg-gray-50 px-4 py-3">
                <span className="inline-flex items-center gap-2">
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 text-sm font-medium flex items-center hover:text-blue-800"
                  >
                    <Github size={16} className="mr-1" />
                    View Repository
                  </a>
                  <a
                    href={project.otherLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 text-sm font-medium flex items-center hover:text-blue-800"
                  >
                    <FiExternalLink size={16} className="mr-1" />
                    Visit Project
                  </a>
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
