import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
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
      { name: "React.js", level: 75 },
      { name: "Next.js", level: 60 },
      { name: "TypeScript", level: 40 },
    ],
  },
  {
    name: "Backend & Frameworks",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 70 },
    ],
  },
  {
    name: "Programming Languages",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "Python", level: 75 },
    ],
  },
  {
    name: "Tools & Technologies",
    skills: [
      { name: "Linux", level: 85 },
      { name: "AWS", level: 40 },
      { name: "Docker", level: 30 },
      { name: "Grafana", level: 75 },
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
  "TypeScript",
  "Microservices",
  "JavaScript",
  "Python",
  "SQL",
  "NoSQL",
  "Redis",
  "InfluxDB",
  "Linux",
  "Git",
  "Grafana",
  "Microsoft Office",
  "Data Structures and Algrithms",
  "Client Stakeholder Management",
  "Communication",
];

const Skills = () => {
  return (
    <section id="skills" className="page-section bg-gray-50">
      <div className="flex items-center gap-3 mb-8">
        <Code className="text-primary h-8 w-8" />
        <h2 className="section-title">SKILLS</h2>
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
            className="card-hover overflow-hidden border-0 shadow-md"
          >
            <div className="h-1 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">
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
