# Uibrium — Build Smarter. Ship Faster.

<picture>
  <source srcset="lightMode.png" media="(prefers-color-scheme: light)">
  <source srcset="darkMode.png" media="(prefers-color-scheme: dark)">
  <img alt="Uibrium Logo" src="lightMode.png">
</picture>

[![npm (scoped)](https://img.shields.io/npm/v/@uibrium/ui?style=flat-square)](https://www.npmjs.com/package/@uibrium/ui)
[![CI](https://github.com/aryanony/uibrium/actions/workflows/ci.yml/badge.svg)](https://github.com/aryanony/uibrium/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/npm/l/@uibrium/ui?style=flat-square)](LICENSE)
[![Docs](https://img.shields.io/website?down_color=lightgrey&down_message=offline&up_color=blue&up_message=online&url=https%3A%2F%2Fuibrium.vercel.app)](https://uibrium.vercel.app/)
[![Storybook](https://img.shields.io/badge/Storybook-Deployed-ff4785?logo=storybook)](https://aryanony.github.io/uibrium/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![GitHub stars](https://img.shields.io/github/stars/aryanony/uibrium?style=social)](https://github.com/aryanony/uibrium)
[![GitHub forks](https://img.shields.io/github/forks/aryanony/uibrium?style=social)](https://github.com/aryanony/uibrium)

Uibrium is a **premium, open-source React design system and component library** that marries couture design with rock-solid engineering. It delivers **high-fidelity user experiences** with **deterministic UI integrity**, balancing beauty and performance in every element. With Uibrium, developers get a **modular, themable toolkit** built on industry best-practices.

## Highlights

- 🎯 **Accessible Primitives:** Built on [Radix UI](https://radix-ui.com/) for 100% WAI-ARIA compliance. All base elements (buttons, inputs, etc.) are fully accessible from day one.
- 🎨 **Tailwind-Driven Styling:** Utility-first classes with a **pure HSL design token palette**, ensuring consistency. You get all of Tailwind’s power and a custom, premium color system.
- ⚡ **Sensory Animations:** Breathtaking motion with [Framer Motion](https://www.framer.com/motion/) and magnetic “sensory engineering” (custom cursor, loaders, etc.), adding polished micro-interactions to your UI.
- 🔀 **Tree-Shaking Ready:** Exports optimized ESM and CJS bundles (with `sideEffects: false`), so unused code is dropped in production builds. Every component is fully typed in TypeScript.
- 🌐 **Theming:** Built-in light/dark themes using CSS variables. Swap or extend themes easily, leveraging Uibrium’s HSL token API.
- 🤖 **Automated Documentation:** Fully automated Storybook story generation. Simply create a component, and the sanctuary handles the documentation for you.
- 🌍 **Open Source:** Premium design accessible to all. Contributions are welcome – see [Contributing](#contributing).

## Installation

Install via npm, yarn or pnpm (Uibrium uses `@uibrium/ui` as the package name) along with its peer dependencies:

```bash
# Using pnpm (recommended)
pnpm add @uibrium/ui framer-motion lucide-react

# Using npm
npm install @uibrium/ui framer-motion lucide-react

# Using yarn
yarn add @uibrium/ui framer-motion lucide-react
```

## Quick Start

Import Uibrium’s components and styles in your app. Wrap your app in the `<ThemeProvider>` to enable theming, and add the `<CustomCursor>` for Uibrium’s signature cursor effect (optional).

```jsx
import React from 'react';
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

This renders a styled **primary button** in large size. The `ThemeProvider` ensures all components use Uibrium’s theme tokens, and `CustomCursor` adds the premium cursor animation.

## Components List

Uibrium features a comprehensive set of 19+ premium components:

| Component     | Status       | Component     | Status       |
| ------------- | ------------ | ------------- | ------------ |
| Accordion     | ✅ Available | Dropdown Menu | ✅ Available |
| Alert         | ✅ Available | Input         | ✅ Available |
| Avatar        | ✅ Available | Modal/Dialog  | ✅ Available |
| Badge         | ✅ Available | Pagination    | ✅ Available |
| Button        | ✅ Available | Radio Group   | ✅ Available |
| Card          | ✅ Available | Select        | ✅ Available |
| Checkbox      | ✅ Available | Switch        | ✅ Available |
| Custom Cursor | ✅ Available | Table         | ✅ Available |
| Drawer        | ✅ Available | Tabs          | ✅ Available |
| Tooltip       | ✅ Available | Textarea      | ✅ Available |

## Local Development

Want to run the project locally? Follow these steps:

```bash
# Clone the repository
git clone https://github.com/aryanony/uibrium.git
cd uibrium

# Install dependencies using pnpm
pnpm install

# Start the component library in watch mode
pnpm dev

# Start the docs site locally
pnpm dev:docs

# Start Storybook
pnpm storybook
```

## Architecture

Uibrium is organized as a **monorepo** (using PNPM Workspaces and Turborepo) to separate the core library from the docs site while allowing seamless development:

```
uibrium/
├── packages/ui/       # Core component library (Vite + TypeScript)
├── apps/docs/         # Documentation site (Next.js on Vercel)
├── .storybook/        # Storybook configuration
├── .github/           # CI/CD, issue templates, security policy
├── .changeset/        # Versioning & changelog automation
└── turbo.json         # Turborepo task orchestration
```

- `/packages/ui` – The **core component library**. Contains all components, styles, tokens, and build configs. Built with Vite (library mode) and TypeScript.
- `/apps/docs` – The **documentation site** (Next.js). It consumes `@uibrium/ui` directly from the repo so that demos always use the latest changes.

## Theming

Uibrium comes with default light and dark themes. All component styles use CSS variables for colors, spacing, fonts, etc. To customize, override the token values in your own CSS or extend the `<ThemeProvider>`. For example, swap the primary color hue by updating `--ui-primary-hue` in CSS. Because Uibrium uses HSL tokens under the hood, color adjustments affect the entire palette gracefully.

## Roadmap

Check out our [ROADMAP.md](ROADMAP.md) to see what we're working on next. You can also view our [GitHub Projects Board](https://github.com/aryanony/uibrium/projects) for real-time progress tracking.

## Discussions & Community

Have a question? Want to share what you've built? Join our [GitHub Discussions](https://github.com/aryanony/uibrium/discussions)!

- 📣 Announcements
- 💡 Component Requests
- 🙋 Introductions
- 🎉 Show and Tell

## Contributing

Uibrium is 100% open source under the MIT License. Every contribution helps raise the baseline for developer tooling!

We welcome all types of contributions, from fixing typos to building new components. Check out our [Good First Issues](https://github.com/aryanony/uibrium/labels/good%20first%20issue) to get started!

> 🎓 **First time contributing to open source?**
> We have a dedicated [Beginner Contributor Guide](Uibrium-Contributor-Guide.md) that walks you through making your first pull request step-by-step!

Please read our full [CONTRIBUTING.md](CONTRIBUTING.md) guide before opening a PR.

## Contributors

Thanks to everyone who has contributed! 🎉

[![Contributors](https://contrib.rocks/image?repo=aryanony/uibrium)](https://github.com/aryanony/uibrium/graphs/contributors)

## Security

Please report security vulnerabilities responsibly. See our [Security Policy](.github/SECURITY.md) for details.

## Code of Conduct

We are committed to providing a welcoming community. Please read our [Code of Conduct](CODE_OF_CONDUCT.md).

## License

Released under the MIT License. See [LICENSE](LICENSE) for details.

---

_Created by [Aaryan Gupta](https://github.com/aryanony) · Made with ❤️ by the UiBrium community · Build smarter, ship faster._
