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

type Achievement = {
  title: string;
  description: string;
  link?: string;
};

const projectsData: Achievement[] = [
  {
    title: "Freelance Web Apps",
    description:
      "Developed web applications similar to the HSR Run Club platform for multiple clients, delivering tailored solutions that enhanced community engagement and received positive feedback.",
  },
  {
    title: "Comviva Hackathon 2023",
    description:
      "Developed a demo chatbot for Leap, designed to provide tips and guidance on effectively using the Leap tool. Users could interact with the bot to receive instructions, data samples, and screenshots, enabling a clear understanding of how to navigate and utilize the tool effectively.",
  },
  {
    title: "Event Management",
    description:
      "Led over 15 successful community events under HSR Run Club, fostering local engagement and participation. Additionally, coordinated two high-impact technical events during SRM Aarush ’19 and ’20, driving innovation and hands-on learning among attendees.",
  },
];

const Achievements = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  return (
    <section
      id="projects"
      className="py-12 px-4 md:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <h2 className="section-title">ACHIEVEMENTS</h2>

      <div className="space-y-6">
        {projectsData.map((achievement, index) => (
          <Card key={index} className="card-hover overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <CardTitle className="text-xl font-bold">
                    {achievement.title}
                  </CardTitle>
                  <CardDescription className="text-sm mt-1"></CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-3">{achievement.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
