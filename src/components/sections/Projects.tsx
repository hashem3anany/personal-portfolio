"use client";

import { motion } from "framer-motion";
import { Folder, ExternalLink, Code2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/content";
import Link from "next/link";

export default function Projects() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "In Progress":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case "Planned":
        return "bg-purple-500/10 text-purple-500 border-purple-500/20";
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20";
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold font-mono inline-block relative">
            Featured Projects
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-accent/50 rounded-full"></span>
          </h2>
          <p className="mt-6 text-muted max-w-2xl mx-auto">
            A selection of my technical work spanning full-stack development, IT infrastructure, and security labs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card-bg border border-border rounded-xl p-6 flex flex-col h-full hover:border-accent/50 transition-all hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-background border border-border rounded-lg text-accent">
                  {project.tags.includes("Infrastructure") ? <Folder size={24} /> : <Code2 size={24} />}
                </div>
                <div className={`px-2.5 py-1 text-xs font-medium rounded-full border ${getStatusColor(project.status)}`}>
                  {project.status}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
              <p className="text-muted/80 text-sm mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-background rounded-md text-muted font-mono border border-border/50">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                {project.github ? (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors">
                    <FaGithub size={16} />
                    <span>Source</span>
                  </a>
                ) : (
                  <span className="flex items-center gap-1.5 text-sm text-muted/30 cursor-not-allowed" title="Repository not available or private">
                    <FaGithub size={16} />
                    <span>Source</span>
                  </span>
                )}
                
                {project.live ? (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-muted hover:text-accent transition-colors">
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                ) : (
                  <span className="flex items-center gap-1.5 text-sm text-muted/30 cursor-not-allowed" title="Live demo not available">
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
