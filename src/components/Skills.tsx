
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
      { name: "HTML", level: 80 },
      { name: "CSS", level: 80 },
      { name: "React.js", level: 75 },
      { name: "Next.js", level: 65 }
    ]
  },
  {
    name: "Backend & Frameworks",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "TypeScript", level: 75 },
      { name: "Microservices", level: 80 }
    ]
  },
  {
    name: "Programming Languages",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "Python", level: 80 },
      { name: "C/C++", level: 65 }
    ]
  },
  {
    name: "Databases",
    skills: [
      { name: "RDBMS", level: 75 },
      { name: "MySQL", level: 75 },
      { name: "NoSQL", level: 75 },
      { name: "Redis", level: 75 },
      { name: "InfluxDB", level: 75 }
    ]
  },
  {
    name: "Tools & Technologies",
    skills: [
      { name: "Linux", level: 85 },
      { name: "Git", level: 90 },
      { name: "Grafana", level: 75 },
      { name: "Microsoft Office", level: 85 },
      { name: "Data Structures", level: 85 }
    ]
  }
];

const allSkills = [
  "HTML", "CSS", "React.js", "Next.js", "Node.js", "TypeScript", "Microservices", 
  "JavaScript", "Python", "C/C++", "RDBMS", "MySQL", "NoSQL", "Redis", "InfluxDB", 
  "Linux", "Git", "Grafana", "Microsoft Office", "Data Structures"
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
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>
      
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <Card key={index} className="card-hover overflow-hidden border-0 shadow-md">
            <div className="h-1 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">{category.name}</h3>
              <div className="space-y-5">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-700">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className={`h-2 ${
                        skill.level && skill.level > 90 ? "bg-gray-100" : 
                        skill.level && skill.level > 80 ? "bg-gray-100" : 
                        "bg-gray-100"
                      }`}
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div> */}
    </section>
  );
};

export default Skills;
