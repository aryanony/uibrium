# UiBrium — Architecting Equilibrium

[![NPM Version](https://img.shields.io/npm/v/@uibrium/ui?color=6366f1&label=version)](https://www.npmjs.com/package/@uibrium/ui)
[![License](https://img.shields.io/npm/l/@uibrium/ui?color=6366f1)](https://github.com/uibrium/uibrium/blob/main/LICENSE)
[![Build Status](https://img.shields.io/github/actions/workflow/status/uibrium/uibrium/release.yml?branch=main)](https://github.com/uibrium/uibrium/actions)

**UiBrium** is a premium, open-source design system and React component library engineered for high-fidelity user experiences and deterministic UI integrity. It bridges the gap between high-end "couture" aesthetics and rigid technical standards.

[**Explore Documentation**](https://uibrium.com) • [**Source Code**](https://github.com/uibrium/uibrium)

---

## ✨ Features

- **🎯 Primal Primitives**: Engineered on Radix UI for 100% accessible Foundation.
- **⚡ Sensory Engineering**: Immersive animations (Framer Motion) and magnetic physics.
- **🎨 Tailwind Driven**: Pure HSL design tokens with a custom premium palette.
- **🚀 Production Ready**: Tree-shaking optimized, ESM/CJS bundles, 100% TypeScript.
- **🌍 Open Source**: Contributed to the tech stack as a baseline for premium development.

## 📦 Installation

```bash
# Using npm
npm install @uibrium/ui framer-motion lucide-react

# Using pnpm
pnpm add @uibrium/ui framer-motion lucide-react
```

## 🛠️ Quick Start

```tsx
import { Button, CustomCursor, ThemeProvider } from '@uibrium/ui';
import '@uibrium/ui/styles.css';

export default function App() {
  return (
    <ThemeProvider>
      <CustomCursor />
      <Button variant="primary" size="lg">
        Initiate Equilibrium
      </Button>
    </ThemeProvider>
  );
}
```

## 🏛️ Architecture

UiBrium is structured as a **Monorepo** managed by **PNPM Workspaces** and **Turborepo**:

- `/packages/ui`: The core component library.
- `/apps/docs`: Documentation platform built with Next.js 14.

## 🤝 Contributing

We welcome contributions that align with our philosophy of quality and deterministic design. Please read our `CONTRIBUTING.md` (coming soon) for details.

## ⚖️ License

Distributed under the MIT License. See `LICENSE` for more information.

---

<div align="center">
  <p>Architected with ❤️ by the UiBrium Community</p>
</div>
