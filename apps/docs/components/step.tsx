import React from 'react';
import { cn } from '@uibrium/ui';

interface StepsProps {
  children: React.ReactNode;
  className?: string;
}

export function Steps({ children, className }: StepsProps) {
  return (
    <div className={cn('mb-12 ml-4 border-l pl-8 [counter-reset:step]', className)}>{children}</div>
  );
}

interface StepProps {
  children: React.ReactNode;
  className?: string;
}

export function Step({ children, className }: StepProps) {
  return (
    <div className={cn('relative [counter-increment:step] pb-8', className)}>
      <div
        className={cn(
          'absolute -left-[calc(2rem+1px)] flex h-8 w-8 items-center justify-center rounded-full border bg-background text-sm font-bold shadow-sm ring-4 ring-background',
          'before:content-[counter(step)]',
        )}
      />
      {children}
    </div>
  );
}
