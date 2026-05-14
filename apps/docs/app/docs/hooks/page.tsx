'use client';

import React from 'react';
import {
  Badge,
  Button,
  Card,
  CardContent,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@uibrium/ui';
import { Cpu, Zap, Info } from 'lucide-react';

export default function HooksPage() {
  const hooks = [
    {
      id: 'use-disclosure',
      name: 'useDisclosure',
      description:
        'A logic primitive for managing open/closed states (modals, drawers, accordions) with ease.',
      code: `const { isOpen, onOpen, onClose, onToggle } = useDisclosure();`,
      usage: `
import { useDisclosure, Button, Modal } from '@uibrium/ui';

export function Example() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        Content
      </Modal>
    </>
  );
}`,
    },
    {
      id: 'use-click-outside',
      name: 'useClickOutside',
      description:
        'Detects interactions outside a target element, perfect for dropdowns and popovers.',
      code: `useClickOutside(ref, () => setOpen(false));`,
      usage: `
import { useClickOutside } from '@uibrium/ui';

export function Dropdown() {
  const ref = useRef();
  useClickOutside(ref, () => setIsOpen(false));

  return <div ref={ref}>...</div>;
}`,
    },
    {
      id: 'use-media-query',
      name: 'useMediaQuery',
      description: 'A reactive hook for tracking CSS media queries. Efficient and SSR-friendly.',
      code: `const isMobile = useMediaQuery('(max-width: 768px)');`,
      usage: `
import { useMediaQuery } from '@uibrium/ui';

export function Responsive() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return <div>{isMobile ? 'Mobile' : 'Desktop'}</div>;
}`,
    },
  ];

  return (
    <div className="space-y-12 max-w-4xl">
      {/* Header */}
      <div className="space-y-6">
        <Badge
          variant="outline"
          className="rounded-full px-4 py-1 uppercase tracking-[0.2em] text-[10px] font-black border-primary"
        >
          {' '}
          Logic Primitives{' '}
        </Badge>
        <h1 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight">
          Functional <span className="text-primary italic">Hooks</span>.
        </h1>
        <p className="text-xl text-muted-foreground font-light leading-relaxed">
          The UiBrium sanctuary provides a suite of headless logic primitives designed to handle
          complex state and event orchestration with zero-runtime overhead.
        </p>
      </div>

      <div className="grid gap-16">
        {hooks.map((hook) => (
          <section
            key={hook.id}
            id={hook.id}
            className="scroll-mt-24 space-y-8 border-t border-border pt-16 first:border-0 first:pt-0"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <Cpu className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-black tracking-tight underline decoration-primary/30 decoration-4 underline-offset-8">
                  {hook.name}
                </h2>
              </div>
              <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-2xl">
                {hook.description}
              </p>
            </div>

            <div className="space-y-4">
              <Badge
                variant="subtle"
                className="text-xs font-mono py-1 rounded-md bg-muted text-foreground"
              >
                {hook.code}
              </Badge>

              <Tabs defaultValue="usage" className="w-full">
                <TabsList className="bg-muted/50 p-1 rounded-xl">
                  <TabsTrigger value="usage" className="rounded-lg px-6">
                    Usage Blueprint
                  </TabsTrigger>
                  <TabsTrigger value="anatomy" className="rounded-lg px-6">
                    Technical Anatomy
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="usage" className="pt-4">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000" />
                    <pre className="relative bg-[#0d1117] text-white p-8 rounded-2xl overflow-x-auto text-sm font-mono border border-white/5 leading-relaxed">
                      <code>{hook.usage.trim()}</code>
                    </pre>
                  </div>
                </TabsContent>
                <TabsContent value="anatomy" className="pt-4">
                  <Card className="rounded-2xl border-dashed">
                    <CardContent className="p-8 space-y-4">
                      <div className="flex items-start gap-4 text-muted-foreground">
                        <Info className="h-5 w-5 text-primary mt-1 shrink-0" />
                        <p className="text-sm italic leading-relaxed">
                          This hook utilizes optimized event listeners and requestAnimationFrame for
                          maximum performance. It is fully compatible with React 18 Concurrent Mode
                          and Server Components.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </section>
        ))}
      </div>

      {/* Contribution CTA */}
      <div className="bg-primary/5 border border-primary/20 rounded-[2.5rem] p-12 lg:p-16 flex flex-col items-center text-center space-y-8">
        <Zap className="h-12 w-12 text-primary fill-primary" />
        <div className="space-y-4">
          <h3 className="text-3xl font-bold tracking-tight">Need more primitives?</h3>
          <p className="text-lg text-muted-foreground font-light max-w-xl">
            We are constantly expanding our sanctuary of hooks. If you have a logic primitive that
            simplifies your workflow, we&apos;d love to see it in the core library.
          </p>
        </div>
        <Button
          asChild
          size="lg"
          className="rounded-full px-10 h-14 bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/20 transition-all duration-300"
        >
          <a href="https://github.com/aryanony/uibrium.git">Request Blueprint</a>
        </Button>
      </div>
    </div>
  );
}
