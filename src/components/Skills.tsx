import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code } from "lucide-react";

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
      { name: "MySQL", level: 80, isCoreSkill: true },
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
      { name: "AWS", level: 70, isCoreSkill: true },
      {
        name: "GitHub Copilot Agentic Workflows",
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
      { name: "Squash" },
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
  "MySQL",
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
  "LLM Integration",
  "AI Automation",
  "Event Management",
  "Brand Management",
  "Running",
  "Squash",
  "Motorsports",
];

const Skills = () => {
  return (
    <section id="skills" className="page-section bg-white">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-2 bg-orange-100 rounded-lg">
          <Code className="text-orange-600 h-6 w-6" />
        </div>
        <h2 className="section-title font-display">SKILLS & EXPERTISE</h2>
      </div>

      <div className="mb-12">
        <div className="mb-6 p-4 bg-orange-50 border border-orange-200 rounded-lg">
          <p className="text-orange-900 text-sm font-bold mb-2">
            🤖 AI-First Developer
          </p>
          <p className="text-orange-800 text-xs leading-relaxed">
            Specialized in AI-driven development using GitHub Copilot's agentic
            workflow. Integrating LLMs and automation to accelerate development
            cycles and enhance code quality.
          </p>
        </div>
        <p className="text-slate-600 text-sm font-medium mb-4 uppercase tracking-wide">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <Card
            key={index}
            className="card-hover overflow-hidden border border-slate-100 shadow-md bg-white"
          >
            <div className="h-1.5 bg-gradient-to-r from-orange-500 via-orange-400 to-amber-400"></div>
            <CardContent className="pt-7 px-6">
              <h3 className="text-lg font-bold mb-6 text-slate-900">
                {category.name}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2.5">
                      <span
                        className={`text-sm ${skill.isCoreSkill ? "text-orange-600 font-bold" : "text-slate-700 font-medium"}`}
                      >
                        {skill.name}
                        {skill.isCoreSkill && (
                          <span className="ml-1.5 text-orange-500 text-base">
                            ★
                          </span>
                        )}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          skill.isCoreSkill
                            ? "bg-gradient-to-r from-orange-500 to-orange-400"
                            : "bg-gradient-to-r from-slate-400 to-slate-300"
                        }`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Skills;
