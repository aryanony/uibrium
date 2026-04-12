"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, ChevronRight } from 'lucide-react';
import { cn } from '../utils/cn';
import { Button } from './button';

export interface NavbarProps {
  className?: string;
  logo?: React.ReactNode;
  logoLight?: React.ReactNode;
  logoDark?: React.ReactNode;
  githubUrl?: string;
}

export function Navbar({ className, logo, logoLight, logoDark, githubUrl = "https://github.com/aryanony/uibrium.git" }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Documentation', href: '/docs/getting-started' },
    { name: 'Components', href: '/docs/components' },
    { name: 'Examples', href: '/examples' },
    { name: 'Showcase', href: '/showcase' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled 
          ? "bg-background/80 backdrop-blur-xl border-border py-3" 
          : "bg-transparent border-transparent py-5",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 cursor-pointer group">
          <div className="relative w-11 h-11 bg-primary rounded-[14px] flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg shadow-primary/20 group-hover:scale-105 transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-50" />
            <div className="relative z-10 w-full h-full flex items-center justify-center p-2">
              <div className="dark:hidden flex items-center justify-center w-full h-full">
                {logoLight || logo || "Ui"}
              </div>
              <div className="hidden dark:flex items-center justify-center w-full h-full">
                {logoDark || logo || "Ui"}
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tighter leading-none group-hover:text-primary transition-colors">UiBrium</span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-black text-muted-foreground opacity-50">Equilibrium</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <Button asChild variant="ghost" size="icon" className="hidden sm:flex rounded-full">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
            </a>
          </Button>
          <Button asChild className="rounded-full px-6 group shadow-lg shadow-primary/20">
            <a href="/docs/getting-started">
              Get Started
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          
          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="p-6 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="block text-lg font-bold text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-6 border-t border-border flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest font-black text-muted-foreground">Open Source Legacy</span>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

