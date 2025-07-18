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
    title: "HSR Run Club - Web App",
    duration: "Jun 2025 - Present",
    description:
      "Developed a responsive and community-centric website for HSR Run Club, aimed at streamlining event coordination and runner engagement.",
    details: [
      "The platform includes robust backend features for event scheduling, participant registration, and a full PhonePe payment gateway integration to ensure secure and hassle-free transactions.",
      "The platform has upgraded and exposed the organisation to nearly 80% more engagement and is a popular choice among event goers.",
    ],
    repoLink: "https://github.com/SwapnanilSinha/hsrrun-club",
    otherLink: "https://www.hsrrun.club",
    technologies: [
      "React.js",
      "TypeScript",
      "Shadcn UI",
      "Supabase",
      "PostgreSQL",
      "PhonePe API",
    ],
  },
  {
    title: "Hotels - Booking Management System",
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
  {
    title: "Abhi Skill - The Upskilling Platform",
    duration: "Jul 2020 - May 2021",
    description:
      "Created an online skill-based learning platform for blue-collar workers to upskill and establish a community around their skills",
    details: [
      "Developed an online skill-based learning platform where individuls can organise and create courses, and users can learn and upskill themselves",
      "We onboarded 10+ instructors in the 2 months of release",
    ],
    technologies: ["Website Building", "Client Management", "UI/UX Design"],
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
