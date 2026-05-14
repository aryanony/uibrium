'use client';

import React from 'react';
import {
  Button,
  Badge,
  Input,
  Checkbox,
  Switch,
  Avatar,
  AvatarGroup,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Card,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@uibrium/ui';
import { ComponentPreview } from '@/components/component-preview';
import { Callout } from '@/components/callout';
import { Lock, User, Shield } from 'lucide-react';

export default function ComponentsPage() {
  return (
    <div className="space-y-24 pb-32">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight lg:text-6xl italic">
          Sanctuary Primitives
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed font-light">
          A collection of deterministic logic gates architected for the modern web. Every component
          represents the equilibrium between performance and beauty.
        </p>
      </header>

      {/* ── Button ────────────────────────────────────────────────────────────── */}
      <section id="button" className="scroll-mt-24 space-y-8">
        <div className="space-y-3">
          <Badge variant="subtle" className="uppercase tracking-widest font-black text-[10px]">
            Foundation
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight">Button</h2>
          <p className="text-muted-foreground text-lg font-light leading-relaxed max-w-2xl">
            The fundamental interactive sanctuary primitive. Engineered for tactile resonance and
            deterministic action triggering.
          </p>
        </div>

        <ComponentPreview
          code={`import { Button } from '@uibrium/ui';

<div className="flex items-center gap-4">
  <Button variant="solid">Primary Logic</Button>
  <Button variant="outline">Secondary Bridge</Button>
  <Button variant="ghost">Subtle Trace</Button>
  <Button variant="soft">Sanctuary Soft</Button>
</div>`}
        >
          <div className="flex items-center gap-4 flex-wrap">
            <Button variant="solid">Primary Logic</Button>
            <Button variant="outline">Secondary Bridge</Button>
            <Button variant="ghost">Subtle Trace</Button>
            <Button variant="soft">Sanctuary Soft</Button>
          </div>
        </ComponentPreview>
      </section>

      {/* ── Accordion ─────────────────────────────────────────────────────────── */}
      <section id="accordion" className="scroll-mt-24 space-y-8">
        <div className="space-y-3">
          <Badge variant="subtle" className="uppercase tracking-widest font-black text-[10px]">
            Layout Logic
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight">Accordion</h2>
          <p className="text-muted-foreground text-lg font-light leading-relaxed max-w-2xl">
            A vertically stacked set of interactive headings that each reveal a sanctuary of
            content.
          </p>
        </div>

        <ComponentPreview
          code={`import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@uibrium/ui';

<Accordion type="single" collapsible className="w-full max-w-md">
  <AccordionItem value="philosophy">
    <AccordionTrigger>What is Architecture?</AccordionTrigger>
    <AccordionContent>
      Architecture is the frozen music of logic. It defines the space where souls interact with data.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
        >
          <Accordion type="single" collapsible className="w-full max-w-lg">
            <AccordionItem value="logic">
              <AccordionTrigger className="text-lg font-bold">The Core Philosophy</AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-light leading-relaxed">
                UiBrium is architected on the principle of Deterministic Integrity. We believe that
                every pixel should serve a purpose, and every interaction should evoke emotional
                resonance.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="craft">
              <AccordionTrigger className="text-lg font-bold">
                Handcrafted Perfection
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-light leading-relaxed">
                Each primitive is polished to a mirror finish, ensuring that your applications
                don&apos;t just work—they inspire.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ComponentPreview>
      </section>

      {/* ── Avatar ────────────────────────────────────────────────────────────── */}
      <section id="avatar" className="scroll-mt-24 space-y-8">
        <div className="space-y-3">
          <Badge variant="subtle" className="uppercase tracking-widest font-black text-[10px]">
            Identity
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight">Avatar</h2>
          <p className="text-muted-foreground text-lg font-light leading-relaxed max-w-2xl">
            Representational artifacts for identities within the sanctuary. Supports groups and
            fallbacks.
          </p>
        </div>

        <ComponentPreview
          code={`import { Avatar, AvatarGroup } from '@uibrium/ui';

<AvatarGroup max={3}>
  <Avatar src="/user1.jpg" fallback="Aaryan Gupta" />
  <Avatar fallback="Design Lead" color="primary" />
  <Avatar fallback="Logic Engine" color="secondary" />
</AvatarGroup>`}
        >
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-6">
              <Avatar fallback="Aaryan Gupta" size="xl" className="shadow-lg" />
              <Avatar fallback="UiBrium" size="lg" color="secondary" />
              <Avatar fallback="Equilibrium" size="md" color="destructive" />
            </div>
            <AvatarGroup>
              <Avatar fallback="Alpha" color="primary" />
              <Avatar fallback="Beta" color="secondary" />
              <Avatar fallback="Gamma" color="success" />
              <Avatar fallback="Delta" color="warning" />
              <Avatar fallback="Epsilon" />
            </AvatarGroup>
          </div>
        </ComponentPreview>
      </section>

      {/* ── Dialog ────────────────────────────────────────────────────────────── */}
      <section id="dialog" className="scroll-mt-24 space-y-8">
        <div className="space-y-3">
          <Badge variant="subtle" className="uppercase tracking-widest font-black text-[10px]">
            Overlays
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight">Dialog (Modal)</h2>
          <p className="text-muted-foreground text-lg font-light leading-relaxed max-w-2xl">
            A window overlaid on the primary sanctuary, requiring user attention to maintain logic
            flow.
          </p>
        </div>

        <ComponentPreview
          code={`import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@uibrium/ui';

<Dialog>
  <DialogTrigger asChild>
    <Button>Summon Sanctuary</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Acknowledge Integrity</DialogTitle>
      <DialogDescription>Do you accept the terms of craftsmanship?</DialogDescription>
    </DialogHeader>
    {/* Content... */}
  </DialogContent>
</Dialog>`}
        >
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="rounded-full shadow-2xl shadow-primary/20">
                Initialize Protocol
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] rounded-[2rem] border-primary/20 bg-card/80 backdrop-blur-3xl">
              <DialogHeader className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <Shield className="h-6 w-6" />
                </div>
                <DialogTitle className="text-3xl font-black tracking-tight">
                  Protocol Authorization
                </DialogTitle>
                <DialogDescription className="text-lg font-light italic">
                  You are entering the core logic engine. Please confirm your commitment to
                  deterministic excellence.
                </DialogDescription>
              </DialogHeader>
              <div className="py-8 border-y border-border/50 my-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Accessing the sanctuary requires a high level of aesthetic alignment. By
                  proceeding, you agree to build with soul.
                </p>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="ghost" className="rounded-full">
                    Retreat
                  </Button>
                </DialogClose>
                <Button className="rounded-full px-8">Authorize</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </ComponentPreview>
      </section>

      {/* ── Form Primitives ────────────────────────────────────────────────────── */}
      <section id="forms" className="scroll-mt-24 space-y-12">
        <div className="space-y-3">
          <Badge variant="subtle" className="uppercase tracking-widest font-black text-[10px]">
            Data Entry
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight">Form Primitives</h2>
          <p className="text-muted-foreground text-lg font-light leading-relaxed max-w-2xl">
            A suite of input gates for harvesting user intent while maintaining architectural
            symmetry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="rounded-[2.5rem] border-border/40 p-10 space-y-8 bg-muted/20">
            <h3 className="text-2xl font-bold tracking-tight mb-6">Text Logic</h3>
            <Input
              label="Identity Alias"
              placeholder="Architect..."
              leftAdornment={<User className="h-4 w-4 text-muted-foreground" />}
            />
            <Input
              label="Encryption Key"
              type="password"
              placeholder="********"
              leftAdornment={<Lock className="h-4 w-4 text-muted-foreground" />}
              helperText="Keep this sanctuary secret."
            />
          </Card>

          <Card className="rounded-[2.5rem] border-border/40 p-10 space-y-8 bg-muted/20">
            <h3 className="text-2xl font-bold tracking-tight mb-6">Interactive Gates</h3>
            <div className="flex items-center justify-between p-4 rounded-2xl bg-background/50 border border-border/50">
              <div className="space-y-1">
                <p className="font-bold text-sm">Motion Resonance</p>
                <p className="text-xs text-muted-foreground font-light">
                  Enable micro-animations globally.
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-background/50 border border-border/50">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-light text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I accept the <span className="text-foreground font-bold">Equilibrium Mandate</span>.
              </label>
            </div>
          </Card>
        </div>
      </section>

      {/* ── Table ─────────────────────────────────────────────────────────────── */}
      <section id="table" className="scroll-mt-24 space-y-8">
        <div className="space-y-3">
          <Badge variant="subtle" className="uppercase tracking-widest font-black text-[10px]">
            Data Grid
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight">Table</h2>
          <p className="text-muted-foreground text-lg font-light leading-relaxed max-w-2xl">
            Orderly structures for presenting complex datasets with deterministic alignment.
          </p>
        </div>

        <ComponentPreview
          code={`import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@uibrium/ui';

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Primitive</TableHead>
      <TableHead>Status</TableHead>
      <TableHead className="text-right">Resonance</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-bold">Button</TableCell>
      <TableCell><Badge color="success">Finalized</Badge></TableCell>
      <TableCell className="text-right font-mono">99.9%</TableCell>
    </TableRow>
  </TableBody>
</Table>`}
        >
          <div className="w-full border rounded-[2rem] overflow-hidden bg-card/30 backdrop-blur-xl">
            <Table>
              <TableHeader className="bg-muted/50">
                <TableRow>
                  <TableHead className="font-black uppercase tracking-widest text-[10px]">
                    Architectural Primitives
                  </TableHead>
                  <TableHead className="font-black uppercase tracking-widest text-[10px]">
                    Sanctuary Status
                  </TableHead>
                  <TableHead className="text-right font-black uppercase tracking-widest text-[10px]">
                    Deterministic Yield
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="hover:bg-primary/5 transition-colors">
                  <TableCell className="font-bold py-6">Modular Buttons</TableCell>
                  <TableCell>
                    <Badge variant="subtle" color="success">
                      Calibrated
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right font-mono text-primary font-bold">
                    100.0%
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-primary/5 transition-colors">
                  <TableCell className="font-bold py-6">Emotional Overlays</TableCell>
                  <TableCell>
                    <Badge variant="subtle" color="warning">
                      Harmonizing
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right font-mono text-primary font-bold">
                    98.4%
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-primary/5 transition-colors">
                  <TableCell className="font-bold py-6">Logic Gates (Forms)</TableCell>
                  <TableCell>
                    <Badge variant="subtle" color="primary">
                      Optimized
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right font-mono text-primary font-bold">
                    99.7%
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </ComponentPreview>
      </section>

      <Callout title="Legacy Verification" type="success">
        The documentation sanctuary is now fully synchronized with the core UI engine. Every
        primitive listed is production-ready and architecturally stable.
      </Callout>
    </div>
  );
}
