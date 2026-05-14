'use client';

import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { cn } from '../../utils/cn';

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> & {
    orientation?: 'horizontal' | 'vertical';
  }
>(({ className, orientation = 'vertical', ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn(
        'flex',
        orientation === 'vertical' ? 'flex-col gap-2.5' : 'flex-row gap-4',
        className,
      )}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & {
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'destructive';
    size?: 'sm' | 'md' | 'lg';
  }
>(({ className, color = 'primary', size = 'md', ...props }, ref) => {
  const sizeStyles = {
    sm: 'h-3.5 w-3.5',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
  };

  const indicatorSizes = {
    sm: 'h-1.5 w-1.5',
    md: 'h-2 w-2',
    lg: 'h-2.5 w-2.5',
  };

  const colorStyles = {
    primary: 'border-primary text-primary focus-visible:ring-primary',
    secondary: 'border-secondary text-secondary focus-visible:ring-secondary',
    success: 'border-success text-success focus-visible:ring-success',
    warning: 'border-warning text-warning focus-visible:ring-warning',
    destructive: 'border-destructive text-destructive focus-visible:ring-destructive',
  };

  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        'aspect-square rounded-full border border-primary text-primary ring-offset-background',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-50',
        sizeStyles[size],
        colorStyles[color],
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <span className={cn('rounded-full bg-current', indicatorSizes[size])} />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
