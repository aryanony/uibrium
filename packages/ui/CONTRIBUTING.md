# Contributing to Uibrium 🎯

> **Uibrium** is an open-source React UI component library.
> Every contribution — big or small — is valued and celebrated.

**Live site:** https://uibrium.vercel.app
**npm:** https://www.npmjs.com/package/@uibrium/ui
**GitHub:** https://github.com/aryanony/uibrium

---

## 🚀 Quick Start for Contributors

### 1. Fork & Clone

```bash
# 1. Click "Fork" on GitHub (top right)
# 2. Clone YOUR fork
git clone https://github.com/YOUR_USERNAME/uibrium.git
cd uibrium
```

### 2. Setup

```bash
# Install pnpm if you don't have it
npm install -g pnpm

# Install all dependencies
pnpm install
```

### 3. Start Development

```bash
# Watch mode for the component library
pnpm dev

# OR start the docs site
pnpm dev:docs

# OR open Storybook
pnpm storybook
```

### 4. Create Your Branch

```bash
git checkout -b feat/your-feature-name
# or
git checkout -b fix/bug-description
# or
git checkout -b docs/what-you-documented
```

### 5. Make Changes → Test → Commit

```bash
# Run build to make sure everything compiles
pnpm build

# Commit with a clear message
git commit -m "feat(button): add loading spinner variant"
```

### 6. Push & Open PR

```bash
git push origin feat/your-feature-name
# Then open a Pull Request on GitHub
```

---

## 🎯 What Can I Contribute?

### For Beginners (No prior open source experience needed)

> **New to Open Source?** Check out our complete [Beginner Contributor Guide](../../Uibrium-Contributor-Guide.md) for a step-by-step tutorial on making your first PR!

- Fix a typo in docs or README
- Add a missing prop description in docs
- Write a Storybook story for a component
- Improve accessibility labels (aria-label)
- Add dark mode support to a component
- Fix a `good first issue` on GitHub

### For Intermediate Developers

- Build a new component (see component checklist below)
- Write unit tests
- Improve existing component variants
- Add animation with Framer Motion
- Fix a reported bug

### For Advanced Developers

- Improve build pipeline
- Add Chromatic visual testing
- Performance optimizations
- New utility hooks
- Improve TypeScript generics

---

## 🧱 How to Add a New Component

1. Create the folder: `packages/ui/src/components/your-component/`
2. Create `your-component.tsx` — use TypeScript + Radix UI + Tailwind
3. Create `index.ts` — export the component
4. Export from `packages/ui/src/index.ts`
5. Create `your-component.stories.tsx` — Storybook story
6. Add docs to `apps/docs/app/docs/components/page.tsx`

### Component Checklist

- [ ] TypeScript props interface exported
- [ ] Variants using `class-variance-authority`
- [ ] Supports `className` prop for customization
- [ ] WAI-ARIA accessible (keyboard + screen reader)
- [ ] Works in light + dark mode
- [ ] Uses Uibrium design tokens
- [ ] Storybook story created

---

## 📐 Code Style

- **Language:** TypeScript only — no plain JS files
- **Styling:** Tailwind CSS + HSL design tokens
- **Variants:** Use `class-variance-authority (cva)` for prop-driven variants
- **Accessibility:** Always add ARIA roles, labels, and keyboard support
- **Animations:** Framer Motion for meaningful micro-interactions only
- **Commits:** Follow conventional commits format:
  - `feat(component): add X`
  - `fix(button): resolve Y`
  - `docs(readme): update Z`
  - `chore(build): update config`

---

## 🤝 Code of Conduct

Be kind, inclusive, and constructive. We welcome contributors of all skill levels.

**By contributing, you agree your work is licensed under MIT.**
