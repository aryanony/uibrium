'use client';

import React, { useState } from 'react';
import { Check, Copy, Code, Eye } from 'lucide-react';
import { cn } from '@uibrium/ui';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@uibrium/ui';

interface ComponentPreviewProps {
  children: React.ReactNode;
  code: string;
  className?: string;
  align?: 'center' | 'start' | 'end';
}

export function ComponentPreview({
  children,
  code,
  className,
  align = 'center',
}: ComponentPreviewProps) {
  const [hasCopied, setHasCopied] = useState(false);

  const copyToClipboard = React.useCallback(() => {
    navigator.clipboard.writeText(code);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  }, [code]);

  return (
    <div className={cn('group relative my-4 flex flex-col space-y-2', className)}>
      <Tabs defaultValue="preview" className="relative mr-auto w-full">
        <div className="flex items-center justify-between pb-3">
          <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
            <TabsTrigger
              value="preview"
              className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
            >
              <Eye className="mr-2 h-4 w-4" />
              Preview
            </TabsTrigger>
            <TabsTrigger
              value="code"
              className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
            >
              <Code className="mr-2 h-4 w-4" />
              Code
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="preview" className="relative rounded-md border min-h-[200px] bg-grid-black/[0.02] dark:bg-grid-white/[0.02]">
          <div
            className={cn(
              'flex items-center p-10',
              align === 'center' && 'justify-center',
              align === 'start' && 'justify-start',
              align === 'end' && 'justify-end'
            )}
          >
            {children}
          </div>
        </TabsContent>
        <TabsContent value="code">
          <div className="relative overflow-hidden rounded-md">
            <button
              onClick={copyToClipboard}
              className={cn(
                'absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-md border bg-background transition-all hover:bg-muted',
                hasCopied ? 'border-success text-success' : 'border-border text-muted-foreground'
              )}
            >
              {hasCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              <span className="sr-only">Copy code</span>
            </button>
            <pre className="overflow-x-auto bg-muted p-4 text-sm font-mono leading-relaxed text-foreground">
              <code>{code}</code>
            </pre>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
