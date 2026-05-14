import React from 'react';
import { cn } from '../../utils/cn';

// ── Types ──────────────────────────────────────────────────────────────────────

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Visual variant */
  variant?: 'outline' | 'filled' | 'flushed' | 'unstyled';
  /** Input size */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Element rendered before the input (inside the wrapper) */
  leftAdornment?: React.ReactNode;
  /** Element rendered after the input (inside the wrapper) */
  rightAdornment?: React.ReactNode;
  /** Error state — applies destructive styling */
  isInvalid?: boolean;
  /** Error message text */
  errorMessage?: string;
  /** Helper text below the input */
  helperText?: string;
  /** Label text */
  label?: string;
  /** Make the input full width */
  fullWidth?: boolean;
}

// ── Variant Styles ─────────────────────────────────────────────────────────────

const variantStyles = {
  outline:
    'border border-input bg-background hover:border-primary/50 focus-within:border-primary focus-within:ring-1 focus-within:ring-ring',
  filled:
    'border border-transparent bg-muted hover:bg-muted/80 focus-within:bg-background focus-within:border-primary focus-within:ring-1 focus-within:ring-ring',
  flushed:
    'border-b border-input rounded-none bg-transparent hover:border-primary/50 focus-within:border-primary focus-within:shadow-[0_1px_0_0_hsl(var(--primary))]',
  unstyled: 'border-none bg-transparent',
} as const;

const sizeStyles = {
  xs: 'h-7 text-xs px-2 gap-1.5 rounded-sm',
  sm: 'h-8 text-sm px-2.5 gap-1.5 rounded-sm',
  md: 'h-9 text-sm px-3 gap-2 rounded-md',
  lg: 'h-10 text-base px-3.5 gap-2 rounded-md',
  xl: 'h-12 text-lg px-4 gap-2.5 rounded-lg',
} as const;

const labelSizes = {
  xs: 'text-xs',
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-sm',
  xl: 'text-base',
} as const;

// ── Component ──────────────────────────────────────────────────────────────────

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant = 'outline',
      size = 'md',
      leftAdornment,
      rightAdornment,
      isInvalid = false,
      errorMessage,
      helperText,
      label,
      fullWidth = false,
      disabled,
      id,
      ...props
    },
    ref,
  ) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;

    return (
      <div className={cn('flex flex-col gap-1.5', fullWidth && 'w-full')}>
        {/* Label */}
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              'font-medium text-foreground',
              labelSizes[size],
              disabled && 'opacity-50 cursor-not-allowed',
            )}
          >
            {label}
          </label>
        )}

        {/* Input wrapper */}
        <div
          className={cn(
            'relative flex items-center transition-all duration-150',
            variantStyles[variant],
            sizeStyles[size],
            isInvalid &&
              'border-destructive focus-within:border-destructive focus-within:ring-destructive/30',
            disabled && 'opacity-50 cursor-not-allowed',
            fullWidth && 'w-full',
          )}
        >
          {/* Left adornment */}
          {leftAdornment && (
            <span className="flex items-center shrink-0 text-muted-foreground">
              {leftAdornment}
            </span>
          )}

          {/* Input */}
          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            aria-invalid={isInvalid || undefined}
            aria-describedby={
              errorMessage ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined
            }
            className={cn(
              'flex-1 bg-transparent outline-none placeholder:text-muted-foreground/60',
              'min-w-0',
              disabled && 'cursor-not-allowed',
              className,
            )}
            {...props}
          />

          {/* Right adornment */}
          {rightAdornment && (
            <span className="flex items-center shrink-0 text-muted-foreground">
              {rightAdornment}
            </span>
          )}
        </div>

        {/* Error message */}
        {isInvalid && errorMessage && (
          <p id={`${inputId}-error`} className="text-xs text-destructive" role="alert">
            {errorMessage}
          </p>
        )}

        {/* Helper text */}
        {!isInvalid && helperText && (
          <p id={`${inputId}-helper`} className="text-xs text-muted-foreground">
            {helperText}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';
