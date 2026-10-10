"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, Building } from "lucide-react";
import { experience } from "@/data/content";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-card-bg/30 border-y border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <Briefcase className="text-accent" size={24} />
            <h2 className="text-3xl font-bold font-mono">Professional Experience</h2>
          </div>
          <div className="w-20 h-1 bg-accent/50 rounded-full"></div>
        </motion.div>

        <div className="space-y-12">
          {experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-5 md:gap-8 items-start">
                <div className="md:col-span-2 mb-4 md:mb-0 md:text-right md:pr-8 md:border-r md:border-border/50 relative">
                  {/* Timeline dot for desktop */}
                  <div className="hidden md:block absolute right-[-5px] top-2 w-2 h-2 rounded-full bg-accent ring-4 ring-background"></div>
                  
                  {/* Timeline line and dot for mobile */}
                  <div className="md:hidden absolute left-[-24px] top-2 w-2 h-2 rounded-full bg-accent ring-4 ring-background z-10"></div>
                  <div className="md:hidden absolute left-[-21px] top-4 bottom-[-40px] w-[1px] bg-border/50"></div>
                  
                  <h3 className="text-xl font-bold text-foreground">{job.title}</h3>
                  <div className="flex items-center gap-2 text-muted mt-2 md:justify-end">
                    <Building size={14} />
                    <span className="font-medium">{job.company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted/70 text-sm mt-1 md:justify-end">
                    <Calendar size={14} />
                    <span>{job.period}</span>
                  </div>
                </div>
                
                <div className="md:col-span-3 pb-8 md:pb-0 relative">
                  <ul className="space-y-3 text-muted/90">
                    {job.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-accent mt-1.5 opacity-70">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
