import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
      "Runner up for developing a demo chatbot for Leap. Users could interact with the bot to get tips, data samples, and screenshots, enabling an understanding of how to navigate and utilize the tool effectively.",
  },
  {
    title: "Event Management",
    description:
      "Led over 15 successful community events under HSR Run Club, fostering local engagement and participation. Additionally, coordinated two high-impact technical events during SRM Aarush '19 and '20, driving innovation and hands-on learning among attendees.",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="page-section">
      <h2 className="section-title font-display">ACHIEVEMENTS</h2>

      <div className="space-y-6">
        {projectsData.map((achievement, index) => (
          <Card
            key={index}
            className="card-hover overflow-hidden border border-slate-200/70 shadow-sm bg-white"
          >
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
              <p className="text-slate-700 mb-3">{achievement.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
