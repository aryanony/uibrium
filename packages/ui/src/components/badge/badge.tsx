import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

export const badgeVariants = cva(
  'inline-flex items-center justify-center font-semibold border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        solid: 'border-transparent',
        secondary: 'border-transparent',
        outline: 'bg-transparent',
        subtle: 'border-transparent',
        dot: 'bg-transparent text-foreground border-border before:content-[""] before:rounded-full before:inline-block',
      },
      color: {
        default: '',
        primary: '',
        destructive: '',
        success: '',
        warning: '',
        info: '',
      },
      size: {
        sm: 'text-[10px] px-1.5 py-0.5 min-w-[20px]',
        md: 'text-xs px-2.5 py-0.5 min-w-[24px]',
        lg: 'text-sm px-3 py-1 min-w-[28px]',
      },
      isPill: {
        true: 'rounded-full',
        false: 'rounded-md',
      },
    },
    compoundVariants: [
      // Solid
      { variant: 'solid', color: 'default', className: 'bg-foreground text-background' },
      { variant: 'solid', color: 'primary', className: 'bg-primary text-primary-foreground' },
      {
        variant: 'solid',
        color: 'destructive',
        className: 'bg-destructive text-destructive-foreground',
      },
      { variant: 'solid', color: 'success', className: 'bg-success text-success-foreground' },
      { variant: 'solid', color: 'warning', className: 'bg-warning text-warning-foreground' },
      { variant: 'solid', color: 'info', className: 'bg-info text-info-foreground' },
      // Secondary
      { variant: 'secondary', color: 'default', className: 'bg-muted text-muted-foreground' },
      { variant: 'secondary', color: 'primary', className: 'bg-primary/20 text-primary' },
      {
        variant: 'secondary',
        color: 'destructive',
        className: 'bg-destructive/20 text-destructive',
      },
      { variant: 'secondary', color: 'success', className: 'bg-success/20 text-success' },
      { variant: 'secondary', color: 'warning', className: 'bg-warning/20 text-warning' },
      { variant: 'secondary', color: 'info', className: 'bg-info/20 text-info' },
      // Outline
      { variant: 'outline', color: 'default', className: 'text-foreground border-border' },
      { variant: 'outline', color: 'primary', className: 'text-primary border-primary/50' },
      {
        variant: 'outline',
        color: 'destructive',
        className: 'text-destructive border-destructive/50',
      },
      { variant: 'outline', color: 'success', className: 'text-success border-success/50' },
      { variant: 'outline', color: 'warning', className: 'text-warning border-warning/50' },
      { variant: 'outline', color: 'info', className: 'text-info border-info/50' },
      // Dot
      { variant: 'dot', color: 'default', className: 'before:bg-muted-foreground' },
      { variant: 'dot', color: 'primary', className: 'before:bg-primary' },
      { variant: 'dot', color: 'destructive', className: 'before:bg-destructive' },
      { variant: 'dot', color: 'success', className: 'before:bg-success' },
      { variant: 'dot', color: 'warning', className: 'before:bg-warning' },
      { variant: 'dot', color: 'info', className: 'before:bg-info' },
      // Dot Sizes
      { variant: 'dot', size: 'sm', className: 'before:h-1.5 before:w-1.5 before:mr-1.5' },
      { variant: 'dot', size: 'md', className: 'before:h-2 before:w-2 before:mr-2' },
      { variant: 'dot', size: 'lg', className: 'before:h-2.5 before:w-2.5 before:mr-2.5' },
    ],
    defaultVariants: {
      variant: 'solid',
      color: 'default',
      size: 'md',
      isPill: false,
    },
  },
);

export interface BadgeProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>, VariantProps<typeof badgeVariants> {
  asChild?: boolean;
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, color, size, isPill, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div';
    return (
      <Comp
        ref={ref}
        className={cn(badgeVariants({ variant, color, size, isPill, className }))}
        {...props}
      />
    );
  },
);

Badge.displayName = 'Badge';
