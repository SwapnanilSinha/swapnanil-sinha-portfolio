import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Award } from "lucide-react";

const highlightKeywords = (text) => {
  const keywords = [
    "Cadance Run Club",
    "35 successful",
    "technical events",
    "demo chatbot",
    "community engagement",
    "innovation",
  ];
  const regex = new RegExp(
    `(${keywords.map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
    "gi",
  );
  const parts = text.split(regex);
  return parts.map((part, idx) =>
    keywords.some((k) => k.toLowerCase() === part.toLowerCase()) ? (
      <span key={idx} className="font-semibold text-orange-600">
        {part}
      </span>
    ) : (
      <span key={idx}>{part}</span>
    ),
  );
};

type Achievement = {
  title: string;
  description: string;
  link?: string;
};

const projectsData: Achievement[] = [
  {
    title: "Freelance Web Apps",
    description:
      "Developed web applications and SPAs similar to the Cadance Run Club platform for multiple clients, delivering tailored solutions that enhanced community engagement and received positive feedback.",
  },
  {
    title: "Comviva Hackathon",
    description:
      "Runner up for developing a demo chatbot for Leap. Users could interact with the bot to get tips, data samples, and screenshots, enabling an understanding of how to navigate and utilize the tool effectively.",
  },
  {
    title: "Event Management",
    description:
      "Spearheading over 35 successful community events under Cadance Run Club, fostering local engagement and participation. Additionally, coordinated two high-impact technical events during SRM Aarush '19 and '20, driving innovation and hands-on learning among attendees.",
  },
];

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="page-section bg-gradient-to-b from-transparent to-white/50"
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="p-2 bg-orange-100 rounded-lg">
          <Award className="text-orange-600 h-6 w-6" />
        </div>
        <h2 className="section-title font-display">
          ACHIEVEMENTS & HIGHLIGHTS
        </h2>
      </div>

      <div className="space-y-6">
        {projectsData.map((achievement, index) => (
          <Card
            key={index}
            className="card-hover overflow-hidden border border-slate-100 shadow-md bg-white"
          >
            <div className="h-1.5 bg-gradient-to-r from-orange-500 to-orange-400"></div>
            <CardHeader className="pb-2 pt-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <CardTitle className="text-xl font-bold text-slate-900">
                    {achievement.title}
                  </CardTitle>
                  <CardDescription className="text-sm mt-1"></CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pb-6">
              <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                {highlightKeywords(achievement.description)}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
