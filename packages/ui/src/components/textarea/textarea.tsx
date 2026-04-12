import * as React from 'react';
import { cn } from '../../utils/cn';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Label text for the textarea */
  label?: string;
  /** Visual variant */
  variant?: 'outline' | 'filled' | 'flushed' | 'unstyled';
  /** Textarea size */
  size?: 'sm' | 'md' | 'lg';
  /** Make invalid (error state) */
  isInvalid?: boolean;
  /** Error message to show */
  errorMessage?: string;
  /** Helper message */
  helperText?: string;
  /** Automatically resize based on content */
  autoResize?: boolean;
}

const variantStyles = {
  outline:
    'border border-input bg-background hover:border-primary/50 focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-ring',
  filled:
    'border border-transparent bg-muted hover:bg-muted/80 focus-visible:bg-background focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-ring',
  flushed:
    'border-b border-input bg-transparent rounded-none px-0 hover:border-primary/50 focus-visible:border-primary',
  unstyled: 'border-none bg-transparent resize-none p-0 focus-visible:ring-0',
} as const;

const sizeStyles = {
  sm: 'text-sm min-h-[60px] px-3 py-2',
  md: 'text-sm min-h-[80px] px-3 py-2',
  lg: 'text-base min-h-[120px] px-4 py-3',
} as const;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      variant = 'outline',
      size = 'md',
      label,
      isInvalid = false,
      errorMessage,
      helperText,
      autoResize = false,
      id,
      onChange,
      ...props
    },
    ref,
  ) => {
    const defaultId = React.useId();
    const textareaId = id || defaultId;
    const innerRef = React.useRef<HTMLTextAreaElement>(null);
    
    // Combine refs
    React.useImperativeHandle(ref, () => innerRef.current as HTMLTextAreaElement);

    const handleInput = React.useCallback(
      (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (autoResize && innerRef.current) {
          innerRef.current.style.height = 'auto';
          innerRef.current.style.height = `${innerRef.current.scrollHeight}px`;
        }
        onChange?.(e);
      },
      [autoResize, onChange]
    );

    return (
      <div className={cn('flex w-full flex-col gap-1.5', className)}>
        {label && (
          <label
            htmlFor={textareaId}
            className="text-sm font-medium leading-none text-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <textarea
            ref={innerRef}
            id={textareaId}
            onChange={handleInput}
            className={cn(
              'flex w-full rounded-md outline-none transition-colors duration-150',
              'placeholder:text-muted-foreground/60',
              'disabled:cursor-not-allowed disabled:opacity-50',
              variant !== 'unstyled' && sizeStyles[size],
              variantStyles[variant],
              isInvalid && variant !== 'unstyled' && 'border-destructive focus-visible:border-destructive focus-visible:ring-destructive/30',
              autoResize && 'resize-none overflow-hidden'
            )}
            {...props}
          />
        </div>
        {(errorMessage || helperText) && (
          <p
            className={cn(
              'text-[0.8rem]',
              isInvalid ? 'text-destructive font-medium' : 'text-muted-foreground',
            )}
          >
            {isInvalid ? errorMessage : helperText}
          </p>
        )}
      </div>
    );
  },
);

Textarea.displayName = 'Textarea';
