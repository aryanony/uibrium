'use client';

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

// ── Types ──────────────────────────────────────────────────────────────────────

export type ThemeMode = 'light' | 'dark' | 'system';

export interface ThemeConfig {
  /** CSS variable overrides — e.g. { '--primary': '239 84% 67%' } */
  cssVariables?: Record<string, string>;
  /** Default border radius */
  radius?: string;
}

export interface ThemeContextValue {
  /** Current resolved theme ('light' | 'dark') */
  theme: 'light' | 'dark';
  /** Current theme mode setting ('light' | 'dark' | 'system') */
  mode: ThemeMode;
  /** Update the theme mode */
  setMode: (mode: ThemeMode) => void;
  /** Toggle between light and dark */
  toggleTheme: () => void;
}

// ── Context ────────────────────────────────────────────────────────────────────

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

// ── Provider ───────────────────────────────────────────────────────────────────

export interface ThemeProviderProps {
  children: React.ReactNode;
  /** Initial theme mode. Defaults to 'system'. */
  defaultMode?: ThemeMode;
  /** Custom theme config for CSS variable overrides */
  config?: ThemeConfig;
  /** Storage key for persisting theme preference */
  storageKey?: string;
  /** Attribute to set on the root element. Defaults to 'class'. */
  attribute?: 'class' | 'data-theme';
}

export function ThemeProvider({
  children,
  defaultMode = 'system',
  config,
  storageKey = 'uibrium-theme',
  attribute = 'class',
}: ThemeProviderProps) {
  const [mode, setModeState] = useState<ThemeMode>(() => {
    if (typeof window === 'undefined') return defaultMode;
    try {
      const stored = localStorage.getItem(storageKey) as ThemeMode | null;
      return stored || defaultMode;
    } catch {
      return defaultMode;
    }
  });

  const resolvedTheme = useMemo((): 'light' | 'dark' => {
    if (mode !== 'system') return mode;
    if (typeof window === 'undefined') return 'light';
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }, [mode]);

  // Listen for system theme changes
  useEffect(() => {
    if (mode !== 'system') return;
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => setModeState('system'); // trigger re-render
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, [mode]);

  // Apply theme to document
  useEffect(() => {
    const root = document.documentElement;

    if (attribute === 'class') {
      root.classList.remove('light', 'dark');
      root.classList.add(resolvedTheme);
    } else {
      root.setAttribute('data-theme', resolvedTheme);
    }
  }, [resolvedTheme, attribute]);

  // Apply custom CSS variables
  useEffect(() => {
    if (!config?.cssVariables) return;
    const root = document.documentElement;

    Object.entries(config.cssVariables).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });

    return () => {
      Object.keys(config.cssVariables!).forEach((key) => {
        root.style.removeProperty(key);
      });
    };
  }, [config?.cssVariables]);

  // Apply custom radius
  useEffect(() => {
    if (!config?.radius) return;
    document.documentElement.style.setProperty('--radius', config.radius);
    return () => {
      document.documentElement.style.removeProperty('--radius');
    };
  }, [config?.radius]);

  const setMode = useCallback(
    (newMode: ThemeMode) => {
      setModeState(newMode);
      try {
        localStorage.setItem(storageKey, newMode);
      } catch {
        // SSR or localStorage unavailable
      }
    },
    [storageKey],
  );

  const toggleTheme = useCallback(() => {
    const next = resolvedTheme === 'light' ? 'dark' : 'light';
    setMode(next);
  }, [resolvedTheme, setMode]);

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme: resolvedTheme,
      mode,
      setMode,
      toggleTheme,
    }),
    [resolvedTheme, mode, setMode, toggleTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

// ── Hook ───────────────────────────────────────────────────────────────────────

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a <ThemeProvider>');
  }
  return context;
}
