import React from "react";
import { Award } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

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
      <span key={idx} className="font-semibold text-primary">
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

const achievementsData: Achievement[] = [
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
      "Spearheading over 50 successful community events under Cadance Run Club, fostering local engagement and participation. Additionally, coordinated two high-impact technical events during SRM Aarush '19 and '20, driving innovation and hands-on learning among attendees.",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="page-section">
      <SectionHeader
        index="06 — Achievements"
        title="Achievements & Highlights"
        icon={Award}
      />

      <div className="space-y-4">
        {achievementsData.map((achievement, index) => (
          <div
            key={index}
            className="card-surface card-hover p-6 flex items-start gap-4"
          >
            <div className="bg-primary/10 p-2.5 rounded-lg flex-shrink-0">
              <Award className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-1.5">
                {achievement.title}
              </h3>
              <p className="text-foreground/75 leading-relaxed text-sm md:text-base">
                {highlightKeywords(achievement.description)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
