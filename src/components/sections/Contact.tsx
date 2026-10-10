"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, AlertCircle, CheckCircle2 } from "lucide-react";
import { siteMetadata } from "@/data/content";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    
    // Simulate form submission
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset status after a few seconds
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-card-bg/30 border-y border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold font-mono inline-block relative">
            Get In Touch
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-accent/50 rounded-full"></span>
          </h2>
          <p className="mt-6 text-muted max-w-2xl mx-auto">
            I am currently open to new opportunities in IT Support, Front-End Development, and entry-level Cybersecurity roles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 space-y-6"
          >
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            
            <div className="flex items-start gap-4 p-4 bg-background border border-border rounded-lg">
              <Mail className="text-accent mt-1" size={20} />
              <div>
                <h4 className="font-medium text-foreground">Email</h4>
                <a href={`mailto:${siteMetadata.email}`} className="text-sm text-muted hover:text-accent transition-colors">
                  {siteMetadata.email}
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-background border border-border rounded-lg">
              <MapPin className="text-accent mt-1" size={20} />
              <div>
                <h4 className="font-medium text-foreground">Location</h4>
                <p className="text-sm text-muted">{siteMetadata.location}</p>
              </div>
            </div>

            <div className="p-4 bg-accent/5 border border-accent/20 rounded-lg">
              <div className="flex items-start gap-2">
                <AlertCircle size={16} className="text-accent mt-0.5" />
                <p className="text-xs text-muted/90">
                  Note: The contact form on the right is currently a front-end demo. 
                  Please use the email address above to reach me directly until the backend is connected.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-3 bg-card-bg border border-border rounded-xl p-6"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-background border border-border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-background border border-border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-background border border-border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-colors"
                  placeholder="Job Opportunity"
                />
              </div>
              
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-background border border-border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-colors resize-none"
                  placeholder="Hello Hashem, I'd like to discuss..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full sm:w-auto px-6 py-2.5 bg-foreground text-background rounded-md font-medium text-sm hover:bg-foreground/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? (
                  "Sending..."
                ) : status === "success" ? (
                  <>Sent Successfully <CheckCircle2 size={16} /></>
                ) : (
                  <>Send Message <Send size={16} /></>
                )}
              </button>
              
              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-green-500 mt-2"
                >
                  Thank you for your message! I will get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
