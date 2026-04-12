"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Badge, Button, Card, CardHeader, CardTitle, CardDescription, CardContent } from '@uibrium/ui';
import { Rocket, Box, Layout, Sparkles, ChevronRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ExamplesPage() {
  const examples = [
    {
      title: "SaaS Dashboard",
      description: "A comprehensive dashboard for modern SaaS applications with complex data visualizations and management interfaces.",
      icon: <Layout className="h-6 w-6" />,
      tag: "Enterprise",
      color: "primary",
    },
    {
      title: "Landing Page Sanctuary",
      description: "High-conversion landing pages architected with emotional resonance and deterministic visual hierarchy.",
      icon: <Sparkles className="h-6 w-6" />,
      tag: "Premium",
      color: "secondary",
    },
    {
      title: "Settings Portal",
      description: "Modular settings interfaces with advanced form handling and state synchronization logic.",
      icon: <Box className="h-6 w-6" />,
      tag: "Modular",
      color: "info",
    }
  ];

  return (
    <div className="pt-32 pb-40 px-6">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Header */}
        <div className="max-w-3xl space-y-6">
          <Badge variant="outline" className="rounded-full px-4 py-1 uppercase tracking-[0.2em] text-[10px] font-black border-primary/20 text-primary">
            The Blueprint Collection
          </Badge>
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter leading-none">
            Architectural <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Examples</span>.
          </h1>
          <p className="text-xl text-muted-foreground font-light leading-relaxed">
            Discover how to bridge the delta between vision and implementation using the UiBrium design sanctuary. These examples represent the pinnacle of digital craftsmanship.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {examples.map((example, i) => (
            <motion.div
              key={example.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full rounded-[2.5rem] border bg-card/30 backdrop-blur-xl group hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden">
                <CardHeader className="p-10 space-y-6">
                  <div className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-500 group-hover:scale-110",
                    example.color === 'primary' ? "bg-primary/10 text-primary border-primary/20" :
                    example.color === 'secondary' ? "bg-secondary/10 text-secondary border-secondary/20" :
                    "bg-info/10 text-info border-info/20"
                  )}>
                    {example.icon}
                  </div>
                  <div className="space-y-3">
                    <Badge variant="subtle" className="rounded-full">{example.tag}</Badge>
                    <CardTitle className="text-3xl font-bold tracking-tight">{example.title}</CardTitle>
                    <CardDescription className="text-lg leading-relaxed font-light">
                      {example.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <div className="px-10 pb-10">
                   <Button variant="ghost" className="p-0 text-primary font-bold uppercase tracking-widest text-xs group/btn">
                     Explore Blueprint <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-2 transition-transform" />
                   </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <section className="rounded-[4rem] bg-muted/30 border border-border p-12 lg:p-24 relative overflow-hidden text-center space-y-8">
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-info" />
           <h2 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight">Have a custom implementation?</h2>
           <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
             The UiBrium ecosystem is built by the community. Contribute your blueprints and inspire the next generation of digital architects.
           </p>
           <Button asChild size="lg" className="rounded-full px-10 h-14 shadow-xl shadow-primary/20">
             <a href="https://github.com/aryanony/uibrium.git">Submit Blueprint</a>
           </Button>
        </section>
      </div>
    </div>
  );
}

const cn = (...classes: any[]) => classes.filter(Boolean).join(' ');
