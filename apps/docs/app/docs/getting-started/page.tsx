import type { Metadata } from 'next';
import Link from 'next/link';
import { Steps, Step } from '@/components/step';
import { Callout } from '@/components/callout';
import { Badge, Card } from '@uibrium/ui';
import { Terminal, Lightbulb, ShieldCheck, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Getting Started',
  description: 'Learn how to install and set up UiBrium in your React project.',
};

export default function GettingStartedPage() {
  return (
    <div className="space-y-12 pb-20">
      <header className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="subtle" color="primary" className="rounded-full">
            Version 2.0
          </Badge>
          <span className="text-xs text-muted-foreground font-medium">Updated 1 day ago</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">Getting Started</h1>
        <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
          UiBrium is a production-grade UI component library for building high-quality, accessible
          web applications with React and Tailwind CSS.
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Quick Start</h2>
        <p className="text-muted-foreground text-lg">
          Follow these steps to integrate UiBrium into your existing project.
        </p>

        <Steps>
          <Step>
            <h3 className="text-xl font-bold mb-4">Install Dependencies</h3>
            <p className="text-muted-foreground mb-4">
              UiBrium requires{' '}
              <code className="font-mono text-primary bg-primary/5 px-1.5 py-0.5 rounded">
                framer-motion
              </code>{' '}
              for animations and{' '}
              <code className="font-mono text-primary bg-primary/5 px-1.5 py-0.5 rounded">
                lucide-react
              </code>{' '}
              for icons.
            </p>
            <div className="relative rounded-xl border bg-muted/50 p-6 font-mono text-sm group">
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/20" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/20" />
                  <div className="h-3 w-3 rounded-full bg-green-500/20" />
                </div>
                <Terminal className="h-4 w-4 text-muted-foreground/50" />
              </div>
              <pre className="text-foreground">pnpm add @uibrium/ui framer-motion lucide-react</pre>
            </div>
          </Step>

          <Step>
            <h3 className="text-xl font-bold mb-4">Configure Tailwind CSS</h3>
            <p className="text-muted-foreground mb-4">
              To ensure the component styles are correctly purged and loaded, add the UiBrium
              package to your Tailwind configuration.
            </p>
            <div className="relative rounded-xl border bg-muted/50 p-6 font-mono text-sm group">
              <pre className="text-foreground">
                {`/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@uibrium/ui/dist/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}
              </pre>
            </div>
          </Step>

          <Step>
            <h3 className="text-xl font-bold mb-4">Import Global Styles</h3>
            <p className="text-muted-foreground mb-4">
              Import the core UiBrium stylesheet in your main entry file (e.g.,{' '}
              <code className="px-1.5 py-0.5 rounded bg-muted text-foreground">main.tsx</code> or{' '}
              <code className="px-1.5 py-0.5 rounded bg-muted text-foreground">_app.tsx</code>).
            </p>
            <div className="relative rounded-xl border bg-muted/50 p-6 font-mono text-sm group">
              <pre className="text-foreground line-clamp-1">
                {`import '@uibrium/ui/styles.css';`}
              </pre>
            </div>
            <Callout type="warning" className="mt-4">
              Ensure this import is placed after your global Tailwind directives to avoid CSS
              specificity issues.
            </Callout>
          </Step>

          <Step>
            <h3 className="text-xl font-bold mb-4">Add the Theme Provider</h3>
            <p className="text-muted-foreground mb-4">
              Wrap your application with the{' '}
              <code className="px-1.5 py-0.5 rounded bg-muted text-foreground">ThemeProvider</code>{' '}
              to enable automatic dark mode switching and system preference detection.
            </p>
            <div className="relative rounded-xl border bg-muted/50 p-6 font-mono text-sm group">
              <pre className="text-foreground">
                {`import { ThemeProvider } from '@uibrium/ui';

function App() {
  return (
    <ThemeProvider defaultMode="system">
      <YourAppContent />
    </ThemeProvider>
  );
}`}
              </pre>
            </div>
          </Step>
        </Steps>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Core Principles</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 border-primary/10 bg-primary/5">
            <ShieldCheck className="h-8 w-8 text-primary mb-4" />
            <h4 className="font-bold text-lg mb-2">WAI-ARIA Compliant</h4>
            <p className="text-muted-foreground text-sm">
              All interactive components strictly follow accessibility standards to ensure your
              application is usable by everyone.
            </p>
          </Card>
          <Card className="p-6 border-secondary/10 bg-secondary/5">
            <Zap className="h-8 w-8 text-secondary mb-4" />
            <h4 className="font-bold text-lg mb-2">Zero Runtime Overhead</h4>
            <p className="text-muted-foreground text-sm">
              Powered by Tailwind CSS, resulting in lightning-fast initial page loads and
              predictable styling behavior.
            </p>
          </Card>
        </div>
      </section>

      <Callout icon={<Lightbulb className="h-5 w-5 text-warning" />} title="Pro Tip" type="default">
        Use the <code className="px-1.5 py-0.5 rounded bg-muted text-foreground">asChild</code> prop
        found on most components to seamlessly merge UiBrium components with{' '}
        <code className="px-1.5 py-0.5 rounded bg-muted text-foreground">next/link</code> or other
        routing libraries.
      </Callout>

      <div className="flex items-center justify-between border-t pt-12">
        <div className="space-y-1">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Previous
          </p>
          <Link href="/" className="text-lg font-bold text-primary hover:underline">
            Home Page
          </Link>
        </div>
        <div className="text-right space-y-1">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Next</p>
          <Link href="/docs/components" className="text-lg font-bold text-primary hover:underline">
            Component Library
          </Link>
        </div>
      </div>
    </div>
  );
}
