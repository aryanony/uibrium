'use client';

import React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { cn } from '../../utils/cn';

// ── Types ──────────────────────────────────────────────────────────────────────

export interface AvatarProps extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> {
  /** Image source */
  src?: string;
  /** Alt text for image */
  alt?: string;
  /** Fallback text (initials) */
  fallback?: string;
  /** Size of the avatar */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  /** Shape */
  shape?: 'circle' | 'square';
  /** Border ring color */
  ring?: boolean;
  /** Status indicator */
  status?: 'online' | 'offline' | 'away' | 'busy';
}

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Maximum number of avatars to show */
  max?: number;
  /** Size for all avatars in the group */
  size?: AvatarProps['size'];
  children: React.ReactNode;
}

// ── Styles ─────────────────────────────────────────────────────────────────────

const sizeStyles = {
  xs: 'h-6 w-6 text-2xs',
  sm: 'h-8 w-8 text-xs',
  md: 'h-10 w-10 text-sm',
  lg: 'h-12 w-12 text-base',
  xl: 'h-16 w-16 text-lg',
  '2xl': 'h-20 w-20 text-xl',
} as const;

const statusSizes = {
  xs: 'h-1.5 w-1.5',
  sm: 'h-2 w-2',
  md: 'h-2.5 w-2.5',
  lg: 'h-3 w-3',
  xl: 'h-3.5 w-3.5',
  '2xl': 'h-4 w-4',
} as const;

const statusColors = {
  online: 'bg-success',
  offline: 'bg-muted-foreground',
  away: 'bg-warning',
  busy: 'bg-destructive',
} as const;

// ── Component ──────────────────────────────────────────────────────────────────

export const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(
  (
    {
      className,
      src,
      alt,
      fallback,
      size = 'md',
      shape = 'circle',
      ring = false,
      status,
      ...props
    },
    ref,
  ) => {
    const initials = fallback
      ? fallback
          .split(' ')
          .map((w) => w[0])
          .join('')
          .toUpperCase()
          .slice(0, 2)
      : '?';

    return (
      <div className="relative inline-flex shrink-0">
        <AvatarPrimitive.Root
          ref={ref}
          className={cn(
            'relative flex shrink-0 overflow-hidden',
            sizeStyles[size],
            shape === 'circle' ? 'rounded-full' : 'rounded-lg',
            ring && 'ring-2 ring-background',
            className,
          )}
          {...props}
        >
          <AvatarPrimitive.Image
            src={src}
            alt={alt}
            className="aspect-square h-full w-full object-cover"
          />
          <AvatarPrimitive.Fallback
            className={cn(
              'flex h-full w-full items-center justify-center font-medium',
              'bg-muted text-muted-foreground',
              shape === 'circle' ? 'rounded-full' : 'rounded-lg',
            )}
            delayMs={600}
          >
            {initials}
          </AvatarPrimitive.Fallback>
        </AvatarPrimitive.Root>

        {/* Status indicator */}
        {status && (
          <span
            className={cn(
              'absolute bottom-0 right-0 block rounded-full ring-2 ring-background',
              statusSizes[size],
              statusColors[status],
            )}
            aria-label={`Status: ${status}`}
          />
        )}
      </div>
    );
  },
);

Avatar.displayName = 'Avatar';

// ── Avatar Group ───────────────────────────────────────────────────────────────

export const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ className, max = 5, size = 'md', children, ...props }, ref) => {
    const childArray = React.Children.toArray(children);
    const visibleChildren = childArray.slice(0, max);
    const remainingCount = childArray.length - max;

    return (
      <div ref={ref} className={cn('flex -space-x-2', className)} {...props}>
        {visibleChildren.map((child, i) => {
          if (React.isValidElement<AvatarProps>(child)) {
            return React.cloneElement(child, { key: i, size, ring: true });
          }
          return child;
        })}
        {remainingCount > 0 && (
          <div
            className={cn(
              'relative flex shrink-0 items-center justify-center rounded-full',
              'bg-muted text-muted-foreground font-medium ring-2 ring-background',
              sizeStyles[size],
            )}
          >
            +{remainingCount}
          </div>
        )}
      </div>
    );
  },
);

AvatarGroup.displayName = 'AvatarGroup';
