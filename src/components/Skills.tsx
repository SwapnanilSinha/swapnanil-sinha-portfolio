import React from "react";
import { Code } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

type SkillCategory = {
  name: string;
  skills: Skill[];
};

type Skill = {
  name: string;
  level?: number;
  isCoreSkill?: boolean;
};

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend Development",
    skills: [
      { name: "HTML", level: 85, isCoreSkill: true },
      { name: "CSS", level: 80, isCoreSkill: true },
      { name: "React.js", level: 80, isCoreSkill: true },
      { name: "Next.js", level: 50, isCoreSkill: true },
    ],
  },
  {
    name: "Backend & Frameworks",
    skills: [
      { name: "Node.js", level: 80, isCoreSkill: true },
      { name: "Express.js", level: 75, isCoreSkill: true },
      { name: "FastAPI", level: 60, isCoreSkill: true },
      { name: "Microservices", level: 70 },
      { name: "Authentication", level: 70 },
    ],
  },
  {
    name: "Programming Languages",
    skills: [
      { name: "JavaScript", level: 90, isCoreSkill: true },
      { name: "TypeScript", level: 50, isCoreSkill: true },
      { name: "Python", level: 80, isCoreSkill: true },
    ],
  },
  {
    name: "Databases",
    skills: [
      { name: "SQL", level: 80, isCoreSkill: true },
      { name: "PostgreSQL", level: 75 },
      { name: "MongoDB", level: 50 },
      { name: "Redis", level: 65 },
      { name: "Supabase", level: 65 },
    ],
  },
  {
    name: "Tools & Technologies",
    skills: [
      { name: "Linux", level: 85, isCoreSkill: true },
      { name: "Git Versioning", level: 85, isCoreSkill: true },
      { name: "Grafana", level: 80 },
      { name: "AWS", level: 40, isCoreSkill: true },
      { name: "Vercel", level: 75 },
      { name: "Figma", level: 65 },
      {
        name: "Claude Agentic Workflows",
        level: 80,
        isCoreSkill: true,
      },
      { name: "Azure AD", level: 60 },
      { name: "PromptOps", level: 65 },
      { name: "Microsoft Office", level: 60 },
      { name: "Data Structures and Algorithms", level: 70 },
    ],
  },
  {
    name: "Other Skills & Hobbies",
    skills: [
      { name: "Event Management" },
      { name: "Brand Management" },
      { name: "Running" },
      { name: "Motorsports" },
    ],
  },
];

const allSkills = [
  "HTML",
  "CSS",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "FastAPI",
  "Authentication",
  "Microservices",
  "JavaScript",
  "TypeScript",
  "Python",
  "SQL",
  "Redis",
  "MongoDB",
  "PostgreSQL",
  "Supabase",
  "Linux",
  "Git Versioning",
  "Grafana",
  "Figma",
  "Microsoft Office",
  "Data Structures and Algorithms",
  "AWS",
  "Vercel",
  "Azure AD",
  "PromptOps",
  "GitHub Copilot",
  "English",
  "Hindi",
  "French (Basic)",
  "German (Basic)",
  "Event Management",
  "Brand Management",
  "Running",
  "Squash",
  "Motorsports",
];

const Skills = () => {
  return (
    <section id="skills" className="page-section">
      <SectionHeader
        index="04 — Skills"
        title="Skills & Expertise"
        icon={Code}
      />

      <div className="mb-12">
        <div className="card-surface mb-6 p-5 border-primary/20 bg-primary/[0.04]">
          <p className="text-primary text-sm font-bold mb-1.5">
            🤖 Claude Agentic AI Developer
          </p>
          <p className="text-foreground/70 text-sm leading-relaxed">
            Specialized in AI-driven development using GitHub Copilot's agentic
            workflow. Integrating LLMs and automation to accelerate development
            cycles and enhance code quality.
          </p>
        </div>
        <p className="text-foreground/50 text-xs font-semibold mb-4 uppercase tracking-wide">
          Core Competencies
        </p>
        <div className="flex flex-wrap gap-2">
          {allSkills.map((skill, index) => (
            <span key={index} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {skillCategories.map((category, index) => (
          <div key={index} className="card-surface card-hover p-6">
            <h3 className="text-base font-bold mb-6 text-foreground">
              {category.name}
            </h3>
            <div className="space-y-5">
              {category.skills.map((skill, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-2">
                    <span
                      className={`text-sm ${
                        skill.isCoreSkill
                          ? "text-primary font-semibold"
                          : "text-foreground/75 font-medium"
                      }`}
                    >
                      {skill.name}
                    </span>
                    {skill.level !== undefined && (
                      <span className="text-xs text-foreground/40 font-medium">
                        {skill.level}%
                      </span>
                    )}
                  </div>
                  {skill.level !== undefined && (
                    <div className="w-full bg-secondary rounded-full h-1.5 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          skill.isCoreSkill ? "bg-primary" : "bg-foreground/25"
                        }`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
