import React from 'react';

/**
 * Create a type-safe context with a descriptive error message on missing provider.
 *
 * @example
 * const [AccordionProvider, useAccordionContext] = createSafeContext<AccordionContextValue>(
 *   'Accordion compound components must be used within <Accordion>'
 * );
 */
export function createSafeContext<T>(errorMessage: string) {
  const Context = React.createContext<T | undefined>(undefined);

  function useContext() {
    const ctx = React.useContext(Context);
    if (ctx === undefined) {
      throw new Error(errorMessage);
    }
    return ctx;
  }

  function Provider({ children, value }: { children: React.ReactNode; value: T }) {
    return <Context.Provider value={value}>{children}</Context.Provider>;
  }

  return [Provider, useContext] as const;
}
