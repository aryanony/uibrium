import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

export const alertVariants = cva(
  'relative w-full rounded-lg border px-4 py-4 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground',
        subtle: 'border-transparent',
        solid: 'border-transparent text-white',
      },
      status: {
        default: '',
        info: '',
        success: '',
        warning: '',
        destructive: '',
      },
    },
    compoundVariants: [
      {
        variant: 'default',
        status: 'destructive',
        className:
          'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive',
      },
      {
        variant: 'default',
        status: 'success',
        className:
          'border-success/50 text-success-700 dark:text-success-400 [&>svg]:text-success-700 dark:[&>svg]:text-success-400',
      },
      {
        variant: 'subtle',
        status: 'info',
        className: 'bg-info/10 text-info-800 dark:text-info-300 [&>svg]:text-info-800',
      },
      {
        variant: 'subtle',
        status: 'success',
        className: 'bg-success/10 text-success-800 dark:text-success-300 [&>svg]:text-success-800',
      },
      {
        variant: 'subtle',
        status: 'warning',
        className: 'bg-warning/10 text-warning-800 dark:text-warning-300 [&>svg]:text-warning-800',
      },
      {
        variant: 'subtle',
        status: 'destructive',
        className:
          'bg-destructive/10 text-destructive-800 dark:text-destructive-300 [&>svg]:text-destructive-800',
      },
      { variant: 'solid', status: 'info', className: 'bg-info [&>svg]:text-white' },
      { variant: 'solid', status: 'success', className: 'bg-success [&>svg]:text-white' },
      { variant: 'solid', status: 'warning', className: 'bg-warning [&>svg]:text-white' },
      { variant: 'solid', status: 'destructive', className: 'bg-destructive [&>svg]:text-white' },
    ],
    defaultVariants: {
      variant: 'default',
      status: 'default',
    },
  },
);

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, status, ...props }, ref) => (
    <div
      ref={ref}
      role="alert"
      className={cn(alertVariants({ variant, status, className }))}
      {...props}
    />
  ),
);
Alert.displayName = 'Alert';

export const AlertTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn('mb-1 font-medium leading-none tracking-tight', className)}
    {...props}
  />
));
AlertTitle.displayName = 'AlertTitle';

export const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('text-sm [&_p]:leading-relaxed opacity-90', className)} {...props} />
));
AlertDescription.displayName = 'AlertDescription';
