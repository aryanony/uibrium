'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Search, 
  Github, 
  Moon, 
  Sun,
  Layout,
  Package,
  Wrench,
  BookOpen
} from 'lucide-react';
import { cn, Button } from '@uibrium/ui';

// ── Sidebar Navigation Data ────────────────────────────────────────────────────

const sidebarItems = [
  {
    title: 'Getting Started',
    icon: <BookOpen className="h-4 w-4" />,
    items: [
      { label: 'Introduction', href: '/docs/getting-started' },
      { label: 'Installation', href: '/docs/getting-started#installation' },
      { label: 'Theming', href: '/docs/theming' },
    ],
  },
  {
    title: 'Components',
    icon: <Package className="h-4 w-4" />,
    items: [
      { label: 'Accordion', href: '/docs/components#accordion' },
      { label: 'Alert', href: '/docs/components#alert' },
      { label: 'Avatar', href: '/docs/components#avatar' },
      { label: 'Badge', href: '/docs/components#badge' },
      { label: 'Button', href: '/docs/components#button' },
      { label: 'Card', href: '/docs/components#card' },
      { label: 'Checkbox', href: '/docs/components#checkbox' },
      { label: 'Dialog (Modal)', href: '/docs/components#dialog' },
      { label: 'Drawer', href: '/docs/components#drawer' },
      { label: 'Dropdown Menu', href: '/docs/components#dropdown' },
      { label: 'Input', href: '/docs/components#input' },
      { label: 'Pagination', href: '/docs/components#pagination' },
      { label: 'Radio Group', href: '/docs/components#radio' },
      { label: 'Select', href: '/docs/components#select' },
      { label: 'Switch', href: '/docs/components#switch' },
      { label: 'Table', href: '/docs/components#table' },
      { label: 'Tabs', href: '/docs/components#tabs' },
      { label: 'Textarea', href: '/docs/components#textarea' },
      { label: 'Tooltip', href: '/docs/components#tooltip' },
    ],
  },
  {
    title: 'Hooks',
    icon: <Wrench className="h-4 w-4" />,
    items: [
      { label: 'useDisclosure', href: '/docs/hooks#use-disclosure' },
      { label: 'useClickOutside', href: '/docs/hooks#use-click-outside' },
      { label: 'useMediaQuery', href: '/docs/hooks#use-media-query' },
    ],
  },
];

// ── Components ─────────────────────────────────────────────────────────────────

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggle = () => {
    setDark(!dark);
    document.documentElement.classList.toggle('dark', !dark);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggle}
      className="h-9 w-9 p-0"
    >
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  );
}

function Sidebar({ isOpen, onClose }: { isOpen?: boolean; onClose?: () => void }) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        'fixed inset-y-0 left-0 z-40 w-64 transform border-r bg-background transition-transform duration-300 lg:static lg:block lg:translate-x-0',
        !isOpen && '-translate-x-full'
      )}
    >
      <div className="flex h-16 items-center border-b px-6 lg:hidden">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="UiBrium" width={110} height={30} priority />
        </Link>
        <Button variant="ghost" size="sm" onClick={onClose} className="ml-auto p-0">
          <X className="h-5 w-5" />
        </Button>
      </div>

      <div className="h-[calc(100vh-4rem)] overflow-y-auto px-4 py-8">
        <nav className="space-y-8">
          {sidebarItems.map((group) => (
            <div key={group.title} className="space-y-3">
              <div className="flex items-center gap-2 px-2 text-xs font-bold uppercase tracking-widest text-muted-foreground/60">
                {group.icon}
                {group.title}
              </div>
              <ul className="space-y-1">
                {group.items.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className={cn(
                          'flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-all hover:bg-muted',
                          isActive 
                            ? 'bg-primary/10 text-primary' 
                            : 'text-muted-foreground hover:text-foreground'
                        )}
                      >
                        {item.label}
                        {isActive && <ChevronRight className="ml-auto h-3 w-3" />}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative flex min-h-screen flex-col">
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[90rem] items-center px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsSidebarOpen(true)}
              className="px-0"
            >
              <Menu className="h-6 w-6" />
            </Button>
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="UiBrium" width={100} height={28} priority />
            </Link>
          </div>

          <div className="hidden items-center gap-8 lg:flex">
            <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
              <Image src="/logo.png" alt="UiBrium" width={130} height={36} priority className="-ml-1" />
            </Link>
            <nav className="flex items-center gap-6 text-sm font-medium">
              <Link href="/docs/getting-started" className="text-foreground transition-colors hover:text-primary">Docs</Link>
              <a href="https://github.com/uibrium/uibrium" target="_blank" className="text-muted-foreground transition-colors hover:text-primary flex items-center gap-1">
                GitHub <Github className="h-3 w-3" />
              </a>
            </nav>
          </div>

          <div className="ml-auto flex items-center gap-3">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search documentation..."
                className="h-9 w-64 rounded-full border bg-muted/20 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-sans"
              />
              <kbd className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground sm:flex">
                <span className="text-xs">⌘</span>K
              </kbd>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-[90rem] flex-1">
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        
        {/* Backdrop for mobile */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 z-30 bg-background/80 backdrop-blur-sm lg:hidden" 
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        <main className="flex-1 min-w-0">
          <div className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-8 lg:px-12">
            <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-heading prose-headings:tracking-tight prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
