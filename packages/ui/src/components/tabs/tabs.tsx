'use client';

import React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cn } from '../../utils/cn';

// ── Types ──────────────────────────────────────────────────────────────────────

export interface TabsProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root> {
  /** Visual variant */
  variant?: 'line' | 'enclosed' | 'pills' | 'underline';
  /** Size */
  size?: 'sm' | 'md' | 'lg';
  /** Full width tabs */
  fullWidth?: boolean;
}

export interface TabsListProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> {}
export interface TabsTriggerProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> {}
export interface TabsContentProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> {}

// ── Styles ─────────────────────────────────────────────────────────────────────

const listVariants = {
  line: 'border-b border-border gap-0',
  enclosed: 'bg-muted rounded-lg p-1 gap-1',
  pills: 'gap-1',
  underline: 'gap-0',
} as const;

const triggerVariants = {
  line: [
    'relative rounded-none border-b-2 border-transparent px-4 pb-2.5 pt-2',
    'text-muted-foreground hover:text-foreground',
    'data-[state=active]:border-primary data-[state=active]:text-foreground',
    'transition-all duration-150',
  ].join(' '),
  enclosed: [
    'rounded-md px-3 py-1.5',
    'text-muted-foreground hover:text-foreground',
    'data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm',
    'transition-all duration-150',
  ].join(' '),
  pills: [
    'rounded-full px-4 py-1.5',
    'text-muted-foreground hover:text-foreground hover:bg-muted',
    'data-[state=active]:bg-primary data-[state=active]:text-primary-foreground',
    'transition-all duration-150',
  ].join(' '),
  underline: [
    'relative px-4 pb-2.5 pt-2',
    'text-muted-foreground hover:text-foreground',
    'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-transparent',
    'data-[state=active]:text-foreground data-[state=active]:after:bg-primary',
    'transition-all duration-150',
  ].join(' '),
} as const;

const triggerSizes = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
} as const;

// ── Context for propagating variant ────────────────────────────────────────────

const TabsVariantContext = React.createContext<{
  variant: TabsProps['variant'];
  size: TabsProps['size'];
  fullWidth: boolean;
}>({ variant: 'line', size: 'md', fullWidth: false });

// ── Components ─────────────────────────────────────────────────────────────────

export const Tabs = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  TabsProps
>(({ variant = 'line', size = 'md', fullWidth = false, className, ...props }, ref) => (
  <TabsVariantContext.Provider value={{ variant, size, fullWidth }}>
    <TabsPrimitive.Root
      ref={ref}
      className={cn('flex flex-col', className)}
      {...props}
    />
  </TabsVariantContext.Provider>
));
Tabs.displayName = 'Tabs';

export const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  TabsListProps
>(({ className, ...props }, ref) => {
  const { variant, fullWidth } = React.useContext(TabsVariantContext);
  return (
    <TabsPrimitive.List
      ref={ref}
      className={cn(
        'inline-flex items-center',
        listVariants[variant || 'line'],
        fullWidth && 'w-full',
        className,
      )}
      {...props}
    />
  );
});
TabsList.displayName = 'TabsList';

export const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ className, ...props }, ref) => {
  const { variant, size, fullWidth } = React.useContext(TabsVariantContext);
  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap font-medium',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        'disabled:pointer-events-none disabled:opacity-50',
        triggerVariants[variant || 'line'],
        triggerSizes[size || 'md'],
        fullWidth && 'flex-1',
        className,
      )}
      {...props}
    />
  );
});
TabsTrigger.displayName = 'TabsTrigger';

export const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  TabsContentProps
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'mt-3',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      'data-[state=inactive]:hidden',
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = 'TabsContent';
