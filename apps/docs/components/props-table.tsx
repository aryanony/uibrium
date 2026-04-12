'use client';

import React from 'react';
import { 
  Table, 
  TableHeader, 
  TableBody, 
  TableHead, 
  TableRow, 
  TableCell 
} from '@uibrium/ui';

interface PropItem {
  name: string;
  type: string;
  defaultValue?: string;
  description: string;
  required?: boolean;
}

interface PropsTableProps {
  props: PropItem[];
}

export function PropsTable({ props }: PropsTableProps) {
  return (
    <div className="my-6 w-full overflow-hidden rounded-xl border">
      <Table>
        <TableHeader className="bg-muted/50">
          <TableRow>
            <TableHead className="w-[150px] font-semibold">Prop</TableHead>
            <TableHead className="w-[200px] font-semibold">Type</TableHead>
            <TableHead className="w-[100px] font-semibold">Default</TableHead>
            <TableHead className="font-semibold">Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {props.map((prop) => (
            <TableRow key={prop.name} className="hover:bg-muted/30 transition-colors">
              <TableCell className="font-mono text-sm font-semibold text-primary">
                {prop.name}
                {prop.required && <span className="ml-1 text-destructive">*</span>}
              </TableCell>
              <TableCell>
                <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono text-secondary-foreground">
                  {prop.type}
                </code>
              </TableCell>
              <TableCell className="font-mono text-xs text-muted-foreground">
                {prop.defaultValue || '-'}
              </TableCell>
              <TableCell className="text-sm text-balance">
                {prop.description}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
