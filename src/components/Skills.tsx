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
};

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend Development",
    skills: [
      { name: "HTML", level: 85 },
      { name: "CSS", level: 80 },
      { name: "React.js", level: 80 },
      { name: "Next.js", level: 75 },
    ],
  },
  {
    name: "Backend & Frameworks",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 75 },
      { name: "FastAPI", level: 60 },
      { name: "Microservices", level: 70 },
      { name: "Authentication", level: 70 },
    ],
  },
  {
    name: "Programming Languages",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 80 },
      { name: "Python", level: 80 },
    ],
  },
  {
    name: "Databases",
    skills: [
      { name: "SQL", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "MongoDB", level: 70 },
      { name: "Redis", level: 65 },
      { name: "Supabase", level: 65 },
    ],
  },
  {
    name: "Tools & Technologies",
    skills: [
      { name: "Linux", level: 85 },
      { name: "Git Versioning", level: 85 },
      { name: "Grafana", level: 80 },
      { name: "AWS", level: 70 },
      { name: "Vercel", level: 70 },
      { name: "Azure AD", level: 60 },
      { name: "Microsoft Office", level: 60 },
      { name: "Data Structures and Algorithms", level: 70 },
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
  "Microsoft Office",
  "Data Structures and Algorithms",
  "AWS",
  "Vercel",
  "Azure AD",
];

const Skills = () => {
  return (
    <section id="skills" className="page-section bg-white/70">
      <div className="flex items-center gap-3 mb-8">
        <Code className="text-primary h-8 w-8" />
        <h2 className="section-title font-display">SKILLS</h2>
      </div>

      <div className="mb-10">
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
            className="card-hover overflow-hidden border border-slate-200/70 shadow-sm bg-white"
          >
            <div className="h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400"></div>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4 text-slate-800">
                {category.name}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                    <Progress
                      value={skill.level}
                      className={`h-2 ${
                        skill.level && skill.level > 90
                          ? "bg-gray-100"
                          : skill.level && skill.level > 80
                            ? "bg-gray-100"
                            : "bg-gray-100"
                      }`}
                    />
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
