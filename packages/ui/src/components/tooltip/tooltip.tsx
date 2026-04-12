'use client';

import React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { cn } from '../../utils/cn';

// ── Types ──────────────────────────────────────────────────────────────────────

export interface TooltipProps {
  children: React.ReactNode;
  /** Tooltip content */
  content: React.ReactNode;
  /** Side of the trigger to show on */
  side?: 'top' | 'right' | 'bottom' | 'left';
  /** Alignment along the side */
  align?: 'start' | 'center' | 'end';
  /** Delay before showing (ms) */
  delayDuration?: number;
  /** Show arrow */
  showArrow?: boolean;
  /** Additional className for the content */
  className?: string;
  /** Open state (controlled) */
  open?: boolean;
  /** Default open state */
  defaultOpen?: boolean;
  /** Callback when open state changes */
  onOpenChange?: (open: boolean) => void;
}

// ── Provider (wrap your app once) ──────────────────────────────────────────────

export const TooltipProvider = TooltipPrimitive.Provider;

// ── Component ──────────────────────────────────────────────────────────────────

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      children,
      content,
      side = 'top',
      align = 'center',
      delayDuration = 200,
      showArrow = true,
      className,
      open,
      defaultOpen,
      onOpenChange,
    },
    ref,
  ) => {
    if (!content) return <>{children}</>;

    return (
      <TooltipPrimitive.Root
        delayDuration={delayDuration}
        open={open}
        defaultOpen={defaultOpen}
        onOpenChange={onOpenChange}
      >
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            ref={ref}
            side={side}
            align={align}
            sideOffset={4}
            className={cn(
              'z-50 overflow-hidden rounded-md px-3 py-1.5',
              'bg-foreground text-background text-xs font-medium',
              'shadow-md',
              'animate-in fade-in-0 zoom-in-95',
              'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
              'data-[side=bottom]:slide-in-from-top-2',
              'data-[side=left]:slide-in-from-right-2',
              'data-[side=right]:slide-in-from-left-2',
              'data-[side=top]:slide-in-from-bottom-2',
              className,
            )}
          >
            {content}
            {showArrow && (
              <TooltipPrimitive.Arrow className="fill-foreground" width={8} height={4} />
            )}
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    );
  },
);

Tooltip.displayName = 'Tooltip';
