"use client";

import { motion } from "framer-motion";
import { Lightbulb, CheckCircle2 } from "lucide-react";

export default function Training() {
  const trainingTopics = [
    "BRD to PRD & Scope definition",
    "Requirements gathering and analysis",
    "User stories and acceptance criteria",
    "Agile and Scrum methodologies",
    "Jira planning and issue tracking",
    "AI-assisted development (Cursor, Claude, MCP)",
    "Git and GitHub collaboration workflows",
    "Pull requests and code reviews",
    "Root Cause Analysis and bug investigation",
    "Regression testing",
    "Technical documentation and presentations",
    "Team capstone project collaboration"
  ];

  return (
    <section id="training" className="py-20 bg-card-bg/30 border-y border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="text-accent" size={24} />
              <h2 className="text-3xl font-bold font-mono">Software Development Practices</h2>
            </div>
            <div className="w-20 h-1 bg-accent/50 rounded-full mb-6"></div>
            
            <h3 className="text-xl font-semibold text-foreground mb-4">iCareer Tech Track</h3>
            
            <p className="text-muted/90 mb-6 leading-relaxed">
              Through the iCareer Tech Track, I developed practical experience in modern software development workflows, collaboration, and requirements analysis.
            </p>
            <p className="text-muted/90 mb-6 leading-relaxed">
              This structured training bridges the gap between coding and professional software engineering. It ensures that my Front-End development work is guided by clear requirements, and my IT troubleshooting skills are complemented by systematic root cause analysis and effective teamwork.
            </p>
            
            <div className="p-4 bg-background border border-border rounded-lg border-l-2 border-l-accent text-sm text-muted/90 italic">
              "These practices enable me to approach technical problems methodically, whether diagnosing an infrastructure issue or planning a new software feature."
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card-bg border border-border rounded-xl p-6 shadow-sm"
          >
            <h4 className="font-semibold text-foreground mb-6 pb-4 border-b border-border/50 flex items-center justify-between">
              <span>Training Outcomes</span>
              <span className="text-xs font-mono bg-accent/10 text-accent px-2 py-1 rounded-md">Practical Knowledge</span>
            </h4>
            
            <ul className="grid grid-cols-1 gap-y-3 gap-x-4">
              {trainingTopics.map((topic, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-accent mt-0.5 shrink-0" />
                  <span className="text-sm text-muted/90">{topic}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
