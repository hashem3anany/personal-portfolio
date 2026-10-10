"use client";

import { motion } from "framer-motion";
import { Code2, Server, Shield, Database, Workflow } from "lucide-react";
import { skills } from "@/data/content";

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  const skillCategories = [
    { title: "IT Support & Infrastructure", icon: <Server size={20} className="text-accent" />, items: skills.itSupport },
    { title: "Front-End Development", icon: <Code2 size={20} className="text-accent" />, items: skills.frontEnd },
    { title: "Programming & Development", icon: <Database size={20} className="text-accent" />, items: skills.programming },
    /*{ title: "Cybersecurity Foundations", icon: <Shield size={20} className="text-accent" />, items: skills.cybersecurity },*/
    { title: "Software Development Practices", icon: <Workflow size={20} className="text-accent" />, items: skills.softwareDev },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold font-mono inline-block relative">
            Technical Skills
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-accent/50 rounded-full"></span>
          </h2>
          <p className="mt-6 text-muted max-w-2xl mx-auto">
            A comprehensive overview of my technical abilities across IT infrastructure, software development, and security operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`bg-card-bg border border-border p-6 rounded-xl hover:border-accent/50 transition-colors ${index === 3 || index === 4 ? 'lg:col-span-1.5' : ''}`}
            >
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-border/50">
                {category.icon}
                <h3 className="font-semibold text-foreground">{category.title}</h3>
              </div>
              
              <ul className="flex flex-wrap gap-2">
                {category.items.map((skill, i) => (
                  <motion.li
                    key={i}
                    variants={itemVariants}
                    className="text-xs md:text-sm px-3 py-1.5 bg-background border border-border rounded-md text-muted hover:text-accent hover:border-accent/50 transition-colors"
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
