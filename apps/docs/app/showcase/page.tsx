"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Badge, Button, Card, CardHeader, CardTitle, CardDescription, CardContent } from '@uibrium/ui';
import { ExternalLink, Github, Sparkles, Zap, Layers, Cpu } from 'lucide-react';
import Image from 'next/image';

export default function ShowcasePage() {
  const projects = [
    {
      title: "Vortex Analytics",
      description: "A high-performance analytics platform built entirely with UiBrium's data visualization primitives.",
      metrics: ["1.2s Load Time", "99 Lighthouse Score"],
      image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800",
      link: "#"
    },
    {
      title: "Nebula OS",
      description: "A web-based operating system interface showcasing the advanced layering and windowing capabilities of the design system.",
      metrics: ["Zero Layout Shift", "Framer Motion Optimized"],
      image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&q=80&w=800",
      link: "#"
    },
    {
      title: "Lumina Marketplace",
      description: "An ultra-premium ecommerce platform utilizing the sanctuary's professional-grade card and motion systems.",
      metrics: ["Highly Responsive", "Accessible Patterns"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      link: "#"
    }
  ];

  return (
    <div className="pt-32 pb-40 px-6">
      <div className="max-w-7xl mx-auto space-y-32">
        {/* Header Section */}
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Badge variant="outline" className="rounded-full px-6 py-2 uppercase tracking-[0.3em] text-[12px] font-black border-primary text-primary bg-primary/5">
              Production Hall of Fame
            </Badge>
          </motion.div>
          <h1 className="text-6xl lg:text-8xl font-bold tracking-tighter leading-none italic">
            The <span className="text-primary">Showcase</span>.
          </h1>
          <p className="text-2xl text-muted-foreground font-light leading-relaxed">
            Witness the convergence of logic and artistry. These real-world applications demonstrate the deterministic power and emotional resonance of the UiBrium design sanctuary.
          </p>
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group"
            >
              <div className="space-y-8">
                <div className="relative aspect-[16/10] rounded-[3rem] overflow-hidden border border-border bg-muted group-hover:border-primary/50 transition-colors duration-700">
                   <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60 z-10" />
                   <img 
                     src={project.image} 
                     alt={project.title}
                     className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                   />
                   <div className="absolute bottom-8 left-8 right-8 z-20 flex justify-between items-end">
                      <div className="flex gap-2">
                        {project.metrics.map(metric => (
                          <Badge key={metric} variant="secondary" className="bg-background/80 backdrop-blur-md rounded-full text-[10px] py-1 font-bold">
                            {metric}
                          </Badge>
                        ))}
                      </div>
                      <Button size="icon" className="rounded-full h-14 w-14 bg-white text-black hover:bg-primary hover:text-white border-0">
                        <ExternalLink className="h-6 w-6" />
                      </Button>
                   </div>
                </div>
                <div className="space-y-4 px-4">
                  <h3 className="text-4xl font-black tracking-tight group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-xl text-muted-foreground font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Contribution Section */}
        <div className="py-20 border-y border-border flex flex-col items-center text-center space-y-12">
           <Cpu className="h-16 w-16 text-primary animate-pulse" />
           <div className="space-y-4">
             <h2 className="text-4xl font-bold tracking-tighter">Powered by Community Craft</h2>
             <p className="text-xl text-muted-foreground font-light max-w-xl">
               Join 5,000+ developers architecting the future. UiBrium is open-source, forever contributing back to the tech industry.
             </p>
           </div>
           <div className="flex flex-wrap justify-center gap-6">
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-14 border-2">
                 <a href="https://github.com/aryanony/uibrium.git">
                   <Github className="mr-3 h-6 w-6" />
                   View on GitHub
                 </a>
              </Button>
              <Button asChild size="lg" className="rounded-full px-8 h-14 shadow-2xl shadow-primary/40">
                 <a href="/docs/getting-started">
                   Start Your Legacy
                   <Sparkles className="ml-3 h-5 w-5" />
                 </a>
              </Button>
           </div>
        </div>
      </div>
    </div>
  );
}
