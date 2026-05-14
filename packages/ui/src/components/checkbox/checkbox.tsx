'use client';

import React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { cn } from '../../utils/cn';

// ── Types ──────────────────────────────────────────────────────────────────────

export interface CheckboxProps extends Omit<
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
  'color'
> {
  /** Size of the checkbox */
  size?: 'sm' | 'md' | 'lg';
  /** Color scheme */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'destructive';
  /** Label text */
  label?: string;
  /** Description text below the label */
  description?: string;
  /** Error state */
  isInvalid?: boolean;
}

// ── Styles ─────────────────────────────────────────────────────────────────────

const sizeStyles = {
  sm: 'h-3.5 w-3.5 rounded-[3px]',
  md: 'h-4 w-4 rounded',
  lg: 'h-5 w-5 rounded-md',
} as const;

const iconSizes = {
  sm: 'h-3 w-3',
  md: 'h-3.5 w-3.5',
  lg: 'h-4 w-4',
} as const;

const colorStyles = {
  primary: 'data-[state=checked]:bg-primary data-[state=checked]:border-primary',
  secondary: 'data-[state=checked]:bg-secondary data-[state=checked]:border-secondary',
  success: 'data-[state=checked]:bg-success data-[state=checked]:border-success',
  warning: 'data-[state=checked]:bg-warning data-[state=checked]:border-warning',
  destructive: 'data-[state=checked]:bg-destructive data-[state=checked]:border-destructive',
} as const;

const labelSizes = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
} as const;

// ── Component ──────────────────────────────────────────────────────────────────

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(
  (
    {
      className,
      size = 'md',
      color = 'primary',
      label,
      description,
      isInvalid = false,
      id,
      ...props
    },
    ref,
  ) => {
    const generatedId = React.useId();
    const checkboxId = id || generatedId;

    const checkbox = (
      <CheckboxPrimitive.Root
        ref={ref}
        id={checkboxId}
        className={cn(
          'peer shrink-0 border-2 border-input',
          'transition-all duration-150',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
          'disabled:cursor-not-allowed disabled:opacity-50',
          'data-[state=checked]:text-white',
          sizeStyles[size],
          colorStyles[color],
          isInvalid && 'border-destructive',
          className,
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator className="flex items-center justify-center text-current">
          {props.checked === 'indeterminate' ? (
            <svg className={iconSizes[size]} viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M4 8h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg className={iconSizes[size]} viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M3.5 8.5L6.5 11.5L12.5 5.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    );

    if (!label && !description) return checkbox;

    return (
      <div className="flex items-start gap-2">
        {checkbox}
        <div className="flex flex-col gap-0.5">
          {label && (
            <label
              htmlFor={checkboxId}
              className={cn(
                'font-medium text-foreground cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
                labelSizes[size],
              )}
            >
              {label}
            </label>
          )}
          {description && <p className="text-xs text-muted-foreground">{description}</p>}
        </div>
      </div>
    );
  },
);

Checkbox.displayName = 'Checkbox';
