"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { siteMetadata } from "@/data/content";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-16 md:pt-48 md:pb-32 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[90vh]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full p-1 border-2 border-accent/50 bg-card-bg overflow-hidden shadow-lg shadow-accent/20">
            <div className="relative w-full h-full rounded-full overflow-hidden bg-background">
              <Image 
                src="/profile.png" 
                alt={siteMetadata.name} 
                fill 
                className="object-cover object-top scale-[1.15] translate-y-2"
                priority
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full border border-border bg-card-bg/50 backdrop-blur-sm text-sm text-muted">
            <Terminal size={14} className="mr-2 text-accent" />
            <span>Open to new opportunities</span>
          </div>
        </motion.div>
        
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Hi, I'm <span className="text-gradient">{siteMetadata.name}</span>.
        </motion.h1>
        
        <motion.h2 
          className="text-xl md:text-2xl font-medium text-muted mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {siteMetadata.title}
        </motion.h2>
        
        <motion.p 
          className="text-base md:text-lg text-muted/80 max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {siteMetadata.description}
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="#projects" className="w-full sm:w-auto px-8 py-3 rounded-md bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors flex items-center justify-center gap-2">
            Explore My Projects <ArrowRight size={18} />
          </Link>
          <Link href="#contact" className="w-full sm:w-auto px-8 py-3 rounded-md bg-card-bg border border-border text-foreground font-medium hover:border-accent hover:text-accent transition-all flex items-center justify-center">
            Contact Me
          </Link>
        </motion.div>
        
        <motion.div 
          className="mt-12 flex items-center justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a href={siteMetadata.github} target="_blank" rel="noopener noreferrer" className="p-2 text-muted hover:text-accent bg-card-bg border border-border rounded-full hover:border-accent transition-all">
            <FaGithub size={20} />
          </a>
          <a href={siteMetadata.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 text-muted hover:text-accent bg-card-bg border border-border rounded-full hover:border-accent transition-all">
            <FaLinkedin size={20} />
          </a>
          <a href={`mailto:${siteMetadata.email}`} className="p-2 text-muted hover:text-accent bg-card-bg border border-border rounded-full hover:border-accent transition-all">
            <Mail size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
