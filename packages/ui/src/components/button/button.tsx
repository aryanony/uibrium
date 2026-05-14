import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

// ── Variant Config ─────────────────────────────────────────────────────────────

export const buttonVariants = cva(
  'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
  {
    variants: {
      variant: {
        solid: 'shadow-sm',
        outline: 'border border-input hover:bg-accent hover:text-accent-foreground',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        soft: '',
        link: 'underline-offset-4 hover:underline text-primary p-0 h-auto',
      },
      color: {
        primary: '',
        secondary: '',
        destructive: '',
        success: '',
        warning: '',
      },
      size: {
        xs: 'h-7 px-2.5 text-xs gap-1 rounded-sm',
        sm: 'h-8 px-3 text-sm gap-1.5 rounded-sm',
        md: 'h-9 px-4 text-sm gap-2 rounded-md',
        lg: 'h-10 px-5 text-base gap-2 rounded-md',
        xl: 'h-12 px-6 text-lg gap-2.5 rounded-lg',
        icon: 'h-9 w-9 p-0',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    compoundVariants: [
      // Solid Colors
      {
        variant: 'solid',
        color: 'primary',
        className: 'bg-primary text-primary-foreground hover:bg-primary-600 active:bg-primary-700',
      },
      {
        variant: 'solid',
        color: 'secondary',
        className:
          'bg-secondary text-secondary-foreground hover:bg-secondary-600 active:bg-secondary-700',
      },
      {
        variant: 'solid',
        color: 'destructive',
        className:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90 active:bg-destructive/80',
      },
      {
        variant: 'solid',
        color: 'success',
        className: 'bg-success text-success-foreground hover:bg-success/90 active:bg-success/80',
      },
      {
        variant: 'solid',
        color: 'warning',
        className: 'bg-warning text-warning-foreground hover:bg-warning/90 active:bg-warning/80',
      },
      // Outline Colors
      {
        variant: 'outline',
        color: 'primary',
        className: 'border-primary text-primary hover:bg-primary/10',
      },
      {
        variant: 'outline',
        color: 'secondary',
        className: 'border-secondary text-secondary hover:bg-secondary/10',
      },
      {
        variant: 'outline',
        color: 'destructive',
        className: 'border-destructive text-destructive hover:bg-destructive/10',
      },
      {
        variant: 'outline',
        color: 'success',
        className: 'border-success text-success hover:bg-success/10',
      },
      {
        variant: 'outline',
        color: 'warning',
        className: 'border-warning text-warning hover:bg-warning/10',
      },
      // Soft Colors
      {
        variant: 'soft',
        color: 'primary',
        className: 'bg-primary/10 text-primary hover:bg-primary/20',
      },
      {
        variant: 'soft',
        color: 'secondary',
        className: 'bg-secondary/10 text-secondary hover:bg-secondary/20',
      },
      {
        variant: 'soft',
        color: 'destructive',
        className: 'bg-destructive/10 text-destructive hover:bg-destructive/20',
      },
      {
        variant: 'soft',
        color: 'success',
        className: 'bg-success/10 text-success hover:bg-success/20',
      },
      {
        variant: 'soft',
        color: 'warning',
        className: 'bg-warning/10 text-warning hover:bg-warning/20',
      },
      // Ghost Colors
      { variant: 'ghost', color: 'primary', className: 'text-primary hover:bg-primary/10' },
      { variant: 'ghost', color: 'secondary', className: 'text-secondary hover:bg-secondary/10' },
      {
        variant: 'ghost',
        color: 'destructive',
        className: 'text-destructive hover:bg-destructive/10',
      },
      { variant: 'ghost', color: 'success', className: 'text-success hover:bg-success/10' },
      { variant: 'ghost', color: 'warning', className: 'text-warning hover:bg-warning/10' },
    ],
    defaultVariants: {
      variant: 'solid',
      color: 'primary',
      size: 'md',
    },
  },
);

// ── Spinner ────────────────────────────────────────────────────────────────────

function ButtonSpinner({ className }: { className?: string }) {
  return (
    <svg
      className={cn('animate-spin h-4 w-4', className)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}

// ── Component ──────────────────────────────────────────────────────────────────

export interface ButtonProps
  extends
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    VariantProps<typeof buttonVariants> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;
  /**
   * If true, the button will show a spinner and be disabled.
   * @default false
   */
  loading?: boolean;
  /**
   * The text to display next to the spinner when the button is in a loading state.
   */
  loadingText?: string;
  /**
   * Element to be rendered before the button children.
   */
  leftIcon?: React.ReactNode;
  /**
   * Element to be rendered after the button children.
   */
  rightIcon?: React.ReactNode;
  /**
   * If true, the button will be styled as a square icon button.
   * @default false
   */
  iconOnly?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant,
      size,
      color,
      fullWidth,
      asChild = false,
      loading = false,
      loadingText,
      leftIcon,
      rightIcon,
      iconOnly = false,
      disabled,
      type = 'button',
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled || loading;

    if (asChild) {
      return (
        <Slot
          ref={ref}
          className={cn(
            buttonVariants({ variant, size, color, fullWidth, className }),
            iconOnly && 'aspect-square px-0',
          )}
          {...props}
        >
          {children}
        </Slot>
      );
    }

    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        className={cn(
          buttonVariants({ variant, size, color, fullWidth, className }),
          iconOnly && 'aspect-square px-0',
        )}
        {...props}
      >
        {loading && <ButtonSpinner />}
        {!loading && leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
        {(!iconOnly || (!loading && iconOnly)) && (
          <span className={cn(loading && !loadingText && 'opacity-0')}>
            {loading && loadingText ? loadingText : children}
          </span>
        )}
        {!loading && rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
      </button>
    );
  },
);

Button.displayName = 'Button';
