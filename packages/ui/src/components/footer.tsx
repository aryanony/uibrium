"use client";

import React from 'react';
import { Github, Linkedin, Globe, Mail, Twitter, ChevronRight, Heart } from 'lucide-react';
import { cn } from '../utils/cn';
import { Button } from './button';

export interface FooterProps {
  className?: string;
  logo?: React.ReactNode;
}

export function Footer({ className, logo }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: 'Ecosystem',
      links: [
        { name: 'Documentation', href: '/docs/getting-started' },
        { name: 'Components', href: '/docs/components' },
        { name: 'Theming', href: '/docs/theming' },
        { name: 'Hooks', href: '/docs/hooks' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Examples', href: '/examples' },
        { name: 'Showcase', href: '/showcase' },
        { name: 'Roadmap', href: 'https://github.com/aryanony/uibrium/projects' },
        { name: 'Changelog', href: 'https://github.com/aryanony/uibrium/releases' },
      ],
    },
    {
      title: 'Community',
      links: [
        { name: 'GitHub Source', href: 'https://github.com/aryanony/uibrium.git' },
        { name: 'Contribute', href: 'https://github.com/aryanony/uibrium/blob/main/CONTRIBUTING.md' },
        { name: 'Discussions', href: 'https://github.com/aryanony/uibrium/discussions' },
        { name: 'Report Bug', href: 'https://github.com/aryanony/uibrium/issues' },
      ],
    },
  ];

  return (
    <footer className={cn("relative z-10 border-t bg-background/50 backdrop-blur-3xl pt-24 pb-12", className)}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
          {/* Brand & Mission */}
          <div className="lg:col-span-2 space-y-8">
            <a href="/" className="inline-block group">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 bg-primary rounded-[12px] flex items-center justify-center text-primary-foreground font-bold shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform duration-500">
                  {logo || <div className="text-xl">U</div>}
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold tracking-tighter leading-none group-hover:text-primary transition-colors">UiBrium</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-black text-muted-foreground opacity-50">Equilibrium</span>
                </div>
              </div>
            </a>
            
            <p className="text-muted-foreground text-lg font-light leading-relaxed max-w-sm">
              Architecting the future of User Interfaces through technical determinism and emotional craft. A production-grade design sanctuary.
            </p>

            <div className="flex items-center gap-4">
              <Button asChild variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary">
                <a href="https://github.com/aryanony/uibrium.git" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" className="rounded-full hover:bg-blue-500/10 hover:text-blue-500">
                <a href="https://linkedin.com/in/aryanony" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" className="rounded-full hover:bg-pink-500/10 hover:text-pink-500">
                <a href="https://aryanony.github.io/portfolio" target="_blank" rel="noopener noreferrer">
                  <Globe className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Links Grid */}
          {sections.map((section) => (
            <div key={section.title} className="space-y-6">
              <h4 className="text-sm font-black uppercase tracking-[0.25em] text-foreground/80">{section.title}</h4>
              <ul className="space-y-4 font-medium">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-muted-foreground hover:text-primary flex items-center gap-1 transition-all hover:translate-x-1"
                    >
                      <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-muted-foreground text-sm font-light text-center md:text-left">
              &copy; {currentYear} <span className="text-foreground font-semibold">UiBrium Design Sanctuary</span>. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground/60 flex items-center gap-1">
              Contributed with <Heart className="h-3 w-3 text-red-500 fill-red-500" /> by 
              <a href="https://aryanony.github.io/portfolio" target="_blank" className="font-bold text-foreground hover:text-primary transition-colors hover:underline underline-offset-4">Aryan Gupta</a> 
              to the tech industry.
            </p>
          </div>
          
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-black text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Integrity</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Craft</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
