"use client";

import { motion } from "framer-motion";
import { ShieldAlert, Lock, Search, Activity, BookOpen } from "lucide-react";

export default function Cybersecurity() {
  const topics = [
    { title: "Security Operations", icon: <Activity size={18} className="text-accent" />, status: "Learning" },
    { title: "Network Security", icon: <Lock size={18} className="text-accent" />, status: "Foundational" },
    { title: "Security Log Analysis", icon: <Search size={18} className="text-accent" />, status: "Learning" },
    { title: "SIEM Concepts", icon: <ShieldAlert size={18} className="text-accent" />, status: "Theoretical" },
  ];

  const roadmap = [
    { phase: "Phase 1: IT & Networking (Completed)", desc: "Built practical knowledge through my IT Specialist role, managing networks, switches, and firewalls." },
    { phase: "Phase 2: Security Fundamentals (Current)", desc: "Studying security operations, threat intelligence, and basic log analysis." },
    { phase: "Phase 3: Hands-on Labs (Planned)", desc: "Setting up a home lab for SIEM exploration, alert investigation, and incident documentation." },
  ];

  return (
    <section id="cybersecurity" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center justify-center p-3 mb-4 rounded-full bg-red-500/10 text-red-500 border border-red-500/20">
            <ShieldAlert size={24} />
          </div>
          <h2 className="text-3xl font-bold font-mono relative">
            Cybersecurity Interest
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            My transition from IT infrastructure and development towards security operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <BookOpen size={20} className="text-accent" />
              Focus Areas
            </h3>
            <p className="text-muted/90 mb-6 text-sm leading-relaxed">
              Cybersecurity is an area of active learning and professional development for me. 
              I am leveraging my existing knowledge of how networks operate and how applications are built to understand how to secure them.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {topics.map((topic, index) => (
                <div key={index} className="p-4 bg-card-bg border border-border rounded-lg flex items-start gap-3">
                  <div className="mt-1">{topic.icon}</div>
                  <div>
                    <h4 className="font-medium text-sm text-foreground">{topic.title}</h4>
                    <span className="text-xs text-muted font-mono">{topic.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-background border border-border rounded-xl p-6"
          >
            <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-border/50">Learning Roadmap</h3>
            
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
              {roadmap.map((item, index) => (
                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-background bg-accent group-[.is-active]:bg-accent text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 ml-[-9px] md:ml-0 z-10"></div>
                  <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] bg-card-bg p-4 rounded-lg border border-border shadow">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold text-sm text-foreground">{item.phase}</h4>
                    </div>
                    <div className="text-xs text-muted/90">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
