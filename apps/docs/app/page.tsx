'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  AmbientBackground,
} from '@uibrium/ui';
import {
  Rocket,
  ShieldCheck,
  Zap,
  Layers,
  Sparkles,
  ChevronRight,
  Heart,
  Github,
  Layout,
} from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="relative overflow-hidden bg-background">
      <AmbientBackground />

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center gap-6"
          >
            <Badge
              variant="outline"
              className="rounded-full px-6 py-2 uppercase tracking-[0.3em] text-[12px] font-black border-primary/30 text-primary bg-primary/5 backdrop-blur-sm animate-pulse"
            >
              Production Sanctuary v1.0.0
            </Badge>
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-[ -0.05em] leading-[0.85] text-foreground">
              Balanced <span className="italic font-light text-primary">Logic</span>.<br />
              Infinite{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Power
              </span>
              .
            </h1>
            <p className="max-w-2xl mx-auto text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
              UiBrium is more than a library. It is a{' '}
              <span className="text-foreground font-medium underline decoration-primary/30">
                Design Sanctuary
              </span>{' '}
              architected for those who refuse to compromise on technical integrity or emotional
              craft.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <Button
              asChild
              size="lg"
              className="h-16 px-10 rounded-full text-lg font-bold shadow-2xl shadow-primary/30 group"
            >
              <Link href="/docs/getting-started">
                Enter Sanctuary
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-16 px-10 rounded-full text-lg font-bold border-2 backdrop-blur-md"
            >
              <a href="https://github.com/aryanony/uibrium.git" target="_blank" rel="noreferrer">
                <Github className="mr-3 h-6 w-6" />
                Forge Locally
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Floating Component Cards Preview */}
        <div className="mt-32 relative max-w-6xl mx-auto">
          <div className="absolute inset-x-0 -top-20 h-40 bg-gradient-to-b from-background to-transparent z-10" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PreviewCard
              title="Deterministic Badge"
              component={
                <Badge variant="solid" className="rounded-full px-4">
                  Stable
                </Badge>
              }
              delay={0.4}
            />
            <PreviewCard
              title="Emotional Button"
              component={<Button className="rounded-xl shadow-lg">Action</Button>}
              delay={0.5}
            />
            <PreviewCard
              title="Sanctuary Card"
              component={<div className="w-full h-8 bg-primary/10 rounded-full animate-pulse" />}
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-40 border-y border-border/50 bg-muted/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-6xl font-black tracking-tighter leading-none italic">
                A Contribution to the <br />
                <span className="text-primary italic">Tech Industry</span>.
              </h2>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                Founded by <span className="text-foreground font-bold">Aaryan Gupta</span>, UiBrium
                was born from the delta between generic utilities and handcrafted perfection. This
                is my legacy—an open-source gift to developers who seek the equilibrium of
                performance and beauty.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <Feature
                icon={<ShieldCheck className="text-primary h-8 w-8" />}
                title="Technical Integrity"
                desc="Strictly typed. Zero layout shift. Pure deterministic logic."
              />
              <Feature
                icon={<Heart className="text-red-500 h-8 w-8 fill-red-500/10" />}
                title="Emotional Craft"
                desc="Designed to evoke trust through subtle micro-animations."
              />
              <Feature
                icon={<Zap className="text-secondary h-8 w-8" />}
                title="Market Standard"
                desc="Adhering to WCAG 2.1 and standard sizing primitives."
              />
              <Feature
                icon={<Layers className="text-info h-8 w-8" />}
                title="Highly Modular"
                desc="Construct your own sanctuary with composable blocks."
              />
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-primary/10 blur-[100px] rounded-full animate-pulse" />
            <Card className="relative z-10 rounded-[3rem] border-border/40 p-12 bg-card/50 backdrop-blur-2xl shadow-3xl">
              <CardHeader className="p-0 mb-8">
                <Badge variant="subtle" className="w-fit mb-4">
                  Core Philosophy
                </Badge>
                <CardTitle className="text-4xl font-black">
                  Zero-Runtime <br />
                  Latency Sanctuary
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-6 text-lg font-light italic text-muted-foreground">
                &quot;Architecture is not just about building structures, it&apos;s about defining
                the space where souls interact. UiBrium is that space for your data.&quot;
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Component Spotlight */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center space-y-4">
            <h2 className="text-5xl font-bold tracking-tighter">Spotlight Gallery</h2>
            <p className="text-xl text-muted-foreground font-light max-w-xl mx-auto">
              Explore some of the foundational elements in our growing component ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SpotlightItem title="Button" slug="button" icon={<Rocket />} />
            <SpotlightItem title="Badge" slug="badge" icon={<Sparkles />} />
            <SpotlightItem title="Card" slug="card" icon={<Layers />} />
            <SpotlightItem title="Navbar" slug="navbar" icon={<Layout />} />
          </div>

          <div className="flex justify-center">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-10 hover:bg-primary hover:text-white border-2"
            >
              <Link href="/docs/components">Explore All Components</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-6 relative">
        <div className="max-w-5xl mx-auto bg-foreground text-background rounded-[4rem] p-12 lg:p-24 text-center space-y-12 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full transition-transform duration-1000 group-hover:scale-150" />
          <div className="relative z-10 space-y-6">
            <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter leading-none">
              Start Architecting <br />
              Your{' '}
              <span className="text-primary italic underline decoration-white/20 underline-offset-8">
                Legacy
              </span>
              .
            </h2>
            <p className="text-xl text-white/60 font-light max-w-2xl mx-auto">
              Break the cycle of generic interfaces. Deploy production-grade components that
              resonate with your users on a psychological level.
            </p>
          </div>
          <div className="relative z-10 flex flex-wrap justify-center gap-6">
            <Button
              asChild
              size="lg"
              className="h-16 px-12 rounded-full bg-white text-black hover:bg-white/90 text-lg font-black shadow-2xl"
            >
              <Link href="/docs/getting-started">Initialize Legacy</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-16 px-12 rounded-full border-white/20 text-white hover:bg-white/5 text-lg font-black backdrop-blur-sm"
            >
              <a href="https://aryanony.github.io/portfolio" target="_blank" rel="noreferrer">
                The Creator
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function PreviewCard({
  title,
  component,
  delay,
}: {
  title: string;
  component: React.ReactNode;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className="p-8 rounded-[2rem] border border-border/60 bg-card/30 backdrop-blur-xl flex flex-col items-center justify-center gap-8 group hover:border-primary/40 transition-all"
    >
      <div className="text-xs uppercase tracking-[0.2em] font-black text-muted-foreground group-hover:text-primary transition-colors">
        {title}
      </div>
      <div className="h-20 flex items-center justify-center">{component}</div>
    </motion.div>
  );
}

function Feature({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="flex gap-4 group">
      <div className="shrink-0 transition-transform group-hover:scale-110 duration-500">{icon}</div>
      <div className="space-y-1">
        <h4 className="font-bold tracking-tight text-lg group-hover:text-primary transition-colors">
          {title}
        </h4>
        <p className="text-muted-foreground leading-relaxed font-light">{desc}</p>
      </div>
    </div>
  );
}

function SpotlightItem({
  title,
  slug,
  icon,
}: {
  title: string;
  slug: string;
  icon: React.ReactNode;
}) {
  return (
    <a href={`/docs/components/${slug}`} className="block group">
      <div className="p-8 rounded-[2rem] border border-border bg-card/30 backdrop-blur-md hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 space-y-4">
        <div className="w-12 h-12 rounded-xl bg-muted group-hover:bg-primary/10 flex items-center justify-center text-muted-foreground group-hover:text-primary transition-all duration-500">
          {React.cloneElement(icon as React.ReactElement, { className: 'h-6 w-6' })}
        </div>
        <div className="space-y-1">
          <h3 className="font-bold text-xl tracking-tight">{title}</h3>
          <p className="text-sm text-muted-foreground font-light">
            Production primitive for {title.toLowerCase()} orchestration.
          </p>
        </div>
      </div>
    </a>
  );
}
