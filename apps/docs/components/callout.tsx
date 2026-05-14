'use client';

import React from 'react';
import { AlertCircle, CheckCircle2, Info, AlertTriangle } from 'lucide-react';
import { cn } from '@uibrium/ui';

interface CalloutProps {
  icon?: React.ReactNode;
  title?: string;
  children: React.ReactNode;
  type?: 'default' | 'info' | 'success' | 'warning' | 'danger';
  className?: string;
}

const icons = {
  default: <Info className="h-5 w-5" />,
  info: <Info className="h-5 w-5 text-info" />,
  success: <CheckCircle2 className="h-5 w-5 text-success" />,
  warning: <AlertTriangle className="h-5 w-5 text-warning" />,
  danger: <AlertCircle className="h-5 w-5 text-destructive" />,
};

const styles = {
  default: 'bg-muted/50 border-border',
  info: 'bg-info/10 border-info/20',
  success: 'bg-success/10 border-success/20',
  warning: 'bg-warning/10 border-warning/20',
  danger: 'bg-destructive/10 border-destructive/20',
};

export function Callout({ icon, title, children, type = 'default', className }: CalloutProps) {
  return (
    <div
      className={cn(
        'my-6 flex items-start space-x-4 rounded-xl border p-4',
        styles[type],
        className,
      )}
    >
      <div className="mt-0.5 shrink-0">{icon || icons[type]}</div>
      <div className="flex-1 space-y-1">
        {title && <h5 className="font-bold leading-none tracking-tight">{title}</h5>}
        <div className="text-sm text-muted-foreground leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
