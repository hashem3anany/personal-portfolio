"use client";

import { motion } from "framer-motion";
import { User, GraduationCap, Briefcase, Code, Shield, Award } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-card-bg/30 border-y border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <User className="text-accent" size={24} />
            <h2 className="text-3xl font-bold font-mono">About Me</h2>
          </div>
          <div className="w-20 h-1 bg-accent/50 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 space-y-4 text-muted/90 leading-relaxed text-lg"
          >
            <p>
              I am a Computer Science graduate from the Higher Technological Institute (HTI), 
              where I built a strong foundation in programming, software development, and technical problem-solving.
            </p>
            <p>
              My professional journey began in IT support and infrastructure as an IT Specialist at Franks Food Industries. 
              There, I developed practical experience managing networks, troubleshooting hardware and software, 
              and supporting critical infrastructure, including firewall technology and large-scale IP CCTV deployments.
            </p>
            <p>
              Alongside my IT experience, I have a deep passion for modern web development, focusing on Front-End technologies 
              like React.js and Next.js. I've augmented my academic knowledge with practical training through the iCareer Tech Track, 
              learning essential software development practices, agile methodologies, and AI-assisted workflows.
            </p>
            <p>
              More recently, I have been expanding my knowledge into cybersecurity and security operations. 
              I am fascinated by log analysis, threat intelligence, and incident response, and I see how my background in IT infrastructure 
              and development provides a strong basis for a future in security.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-background p-6 rounded-lg border border-border">
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2 border-b border-border pb-2">
                <GraduationCap size={18} className="text-accent" />
                Education
              </h3>
              <p className="font-medium">B.Sc. Computer Science</p>
              <p className="text-sm text-muted">Higher Technological Institute (HTI)</p>
              <p className="text-sm text-muted mt-1">Class of 2024</p>
            </div>

            <div className="bg-background p-6 rounded-lg border border-border">
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2 border-b border-border pb-2">
                <Briefcase size={18} className="text-accent" />
                Current Focus
              </h3>
              <ul className="space-y-2 text-sm text-muted">
                <li className="flex items-center gap-2"><Code size={14} className="text-accent-light" /> Front-End Development</li>
                <li className="flex items-center gap-2"><User size={14} className="text-accent-light" /> IT Infrastructure</li>
                <li className="flex items-center gap-2"><Shield size={14} className="text-accent-light" /> Cybersecurity Learning</li>
              </ul>
            </div>

            <div className="bg-background p-6 rounded-lg border border-border">
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2 border-b border-border pb-2">
                <Award size={18} className="text-accent" />
                Military Service
              </h3>
              <p className="font-medium">Completed</p>
              <p className="text-sm text-muted mt-1">September 2026</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
