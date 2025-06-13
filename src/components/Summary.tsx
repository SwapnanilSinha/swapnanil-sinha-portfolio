import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";

const Summary = () => {
  return (
    <section id="summary" className="page-section">
      <div className="flex items-center gap-3 mb-8">
        <FileText className="text-primary h-8 w-8" />
        <h2 className="section-title">SUMMARY</h2>
      </div>
      <Card className="card-hover border-0 shadow-lg overflow-hidden">
        <div className="h-2 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600"></div>
        <CardContent className="pt-8 px-6 md:px-8">
          <p className="text-gray-700 leading-relaxed text-lg">
            A full-stack developer with 3+ years of experience in JavaScript,
            React.js, Node.js, MYSQL, with expertise in data structures and
            algorithms, Git versioning, Linux, Grafana, front-end and backend
            development, clients & stakeholder management and techno- functional
            roles. Open for opportunities world-wide to contribute to innovative
            projects and collaborate with forward-thinking teams.
          </p>
        </CardContent>
      </Card>
    </section>
  );
};

export default Summary;
