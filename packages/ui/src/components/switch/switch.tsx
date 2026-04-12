'use client';

import React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { cn } from '../../utils/cn';

// ── Types ──────────────────────────────────────────────────────────────────────

export interface SwitchProps
  extends Omit<React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>, 'color'> {
  /** Size of the switch */
  size?: 'sm' | 'md' | 'lg';
  /** Color when active */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'destructive';
  /** Label text */
  label?: string;
  /** Description text */
  description?: string;
}

// ── Styles ─────────────────────────────────────────────────────────────────────

const trackSizes = {
  sm: 'h-4 w-7',
  md: 'h-5 w-9',
  lg: 'h-6 w-11',
} as const;

const thumbSizes = {
  sm: 'h-3 w-3 data-[state=checked]:translate-x-3',
  md: 'h-4 w-4 data-[state=checked]:translate-x-4',
  lg: 'h-5 w-5 data-[state=checked]:translate-x-5',
} as const;

const colorStyles = {
  primary: 'data-[state=checked]:bg-primary',
  secondary: 'data-[state=checked]:bg-secondary',
  success: 'data-[state=checked]:bg-success',
  warning: 'data-[state=checked]:bg-warning',
  destructive: 'data-[state=checked]:bg-destructive',
} as const;

const labelSizes = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
} as const;

// ── Component ──────────────────────────────────────────────────────────────────

export const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>(({ className, size = 'md', color = 'primary', label, description, id, ...props }, ref) => {
  const switchId = id || React.useId();

  const switchElement = (
    <SwitchPrimitive.Root
      ref={ref}
      id={switchId}
      className={cn(
        'peer inline-flex shrink-0 cursor-pointer items-center rounded-full',
        'border-2 border-transparent shadow-xs',
        'transition-colors duration-200 ease-in-out',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'data-[state=unchecked]:bg-input',
        trackSizes[size],
        colorStyles[color],
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          'pointer-events-none block rounded-full bg-white shadow-lg ring-0',
          'transition-transform duration-200 ease-in-out',
          'data-[state=unchecked]:translate-x-0.5',
          thumbSizes[size],
        )}
      />
    </SwitchPrimitive.Root>
  );

  if (!label && !description) return switchElement;

  return (
    <div className="flex items-center gap-2">
      {switchElement}
      <div className="flex flex-col gap-0.5">
        {label && (
          <label
            htmlFor={switchId}
            className={cn(
              'font-medium text-foreground cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
              labelSizes[size],
            )}
          >
            {label}
          </label>
        )}
        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
      </div>
    </div>
  );
});

Switch.displayName = 'Switch';
