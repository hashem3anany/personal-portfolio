"use client";

import { siteMetadata } from "@/data/content";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-card-bg border-t border-border mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <span className="font-mono text-lg font-bold text-foreground">Hashem Nour El Enany</span>
            <p className="text-sm text-muted mt-1">IT Specialist & Front-End Developer</p>
          </div>
          
          <div className="flex space-x-6">
            <a href={siteMetadata.github} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">
              <span className="sr-only">GitHub</span>
              <FaGithub size={20} />
            </a>
            <a href={siteMetadata.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">
              <span className="sr-only">LinkedIn</span>
              <FaLinkedin size={20} />
            </a>
            <a href={`mailto:${siteMetadata.email}`} className="text-muted hover:text-accent transition-colors">
              <span className="sr-only">Email</span>
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted text-center md:text-left">
            &copy; 2026 {siteMetadata.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted mt-2 md:mt-0">
            Built with Next.js, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
