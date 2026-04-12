import type { Metadata } from 'next';
import { Callout } from '@/components/callout';
import { Badge } from '@uibrium/ui';
import { Paintbrush, Palette, Wand2, Monitor } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Theming',
  description: 'Learn how to customize the UiBrium design system with themes, tokens, and CSS variables.',
};

function ColorSwatch({ name, value }: { name: string; value: string }) {
  return (
    <div className="flex items-center gap-3 p-2 rounded-lg border bg-card/50">
      <div
        className="w-12 h-12 rounded-md border shadow-inner transition-transform hover:scale-105"
        style={{ backgroundColor: `hsl(${value})` }}
      />
      <div>
        <div className="text-sm font-bold text-foreground">{name}</div>
        <div className="text-xs text-muted-foreground font-mono">hsl({value})</div>
      </div>
    </div>
  );
}

export default function ThemingPage() {
  return (
    <div className="space-y-12 pb-20">
      <header className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="subtle" color="primary" className="rounded-full">Flexible</Badge>
          <span className="text-xs text-muted-foreground font-medium">CSS Variables Powered</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">Theming</h1>
        <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
          UiBrium is built from the ground up to be fully customizable. We use CSS Custom Properties (Variables) 
          to provide a flexible and high-performance design system.
        </p>
      </header>

      <section className="space-y-6">
        <div className="flex items-center gap-2 text-primary">
          <Monitor className="h-6 w-6" />
          <h2 className="text-2xl font-bold tracking-tight">Theme Provider</h2>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          The <code className="px-1.5 py-0.5 rounded bg-muted text-foreground">ThemeProvider</code> is the root of your 
          UiBrium application. It handles theme switching, persistence, and global configuration overrides.
        </p>
        <div className="relative rounded-xl border bg-muted/50 p-6 font-mono text-sm group">
          <pre className="text-foreground">
{`import { ThemeProvider } from '@uibrium/ui';

<ThemeProvider
  defaultMode="system"
  storageKey="uibrium-preference"
  config={{
    radius: '0.75rem',
    cssVariables: {
      '--primary': '250 84% 54%', // HSL format
    },
  }}
>
  <App />
</ThemeProvider>`}
          </pre>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-2 text-secondary">
          <Palette className="h-6 w-6" />
          <h2 className="text-2xl font-bold tracking-tight">Standard Palette</h2>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          We provide a curated set of HSL-based color scales that look stunning in both light and dark modes.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-3">
            <h3 className="font-bold flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-primary" />
              Primary
            </h3>
            <ColorSwatch name="primary-500" value="239 84% 67%" />
            <ColorSwatch name="primary-600" value="243 75% 59%" />
          </div>
          <div className="space-y-3">
            <h3 className="font-bold flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-secondary" />
              Secondary
            </h3>
            <ColorSwatch name="secondary-500" value="271 91% 65%" />
            <ColorSwatch name="secondary-600" value="271 81% 56%" />
          </div>
          <div className="space-y-3">
            <h3 className="font-bold flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-success" />
              Success
            </h3>
            <ColorSwatch name="success" value="142 71% 45%" />
            <ColorSwatch name="info" value="199 89% 48%" />
          </div>
        </div>
      </section>

      <Callout type="info" title="Why HSL?" icon={<Paintbrush className="h-5 w-5" />}>
        We use HSL values because they make it incredibly easy to programmatically adjust opacity 
        and create harmonious color scales using CSS&apos;s <code className="px-1 py-0.5 bg-muted rounded">color-mix</code> or simple variable manipulation.
      </Callout>

      <section className="space-y-6">
        <div className="flex items-center gap-2 text-warning">
          <Wand2 className="h-6 w-6" />
          <h2 className="text-2xl font-bold tracking-tight">Global Overrides</h2>
        </div>
        <p className="text-muted-foreground">
          You can override any variable in your global CSS file to create a completely custom brand identity.
        </p>
        <div className="relative rounded-xl border bg-muted/50 p-6 font-mono text-sm group">
          <pre className="text-foreground">
{`:root {
  /* Brand Overrides */
  --primary: 172 66% 50%;
  --primary-foreground: 0 0% 100%;
  
  /* Layout Overrides */
  --radius: 0rem; /* Modern sharp edges */
  --border: 172 66% 90%;
}

.dark {
  --primary: 172 80% 45%;
  --background: 220 20% 10%;
}`}
          </pre>
        </div>
      </section>

      <Callout type="default" title="Design Tokens">
        All variables are also exported as TypeScript tokens for use in JS-in-CSS or animation libraries 
        like Framer Motion. Import them from <code className="px-1.5 py-0.5 rounded bg-muted text-foreground">@uibrium/ui/tokens</code>.
      </Callout>
    </div>
  );
}
