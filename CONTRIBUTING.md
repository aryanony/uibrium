# Contributing to UiBrium

First off, thank you for considering contributing to UiBrium! It's people like you that make UiBrium such a great tool for the developer community.

As a contributor, please help us keep this project open and inclusive by reading and following our [Code of Conduct](CODE_OF_CONDUCT.md).

## Technical Requirements

- **Node.js**: v18 or later
- **pnpm**: v8 or later (This is a monorepo using pnpm workspaces)

## Development Environment Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/aryanony/uibrium.git
   cd uibrium
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start development servers**
   - **Storybook** (for component development):
     ```bash
     pnpm storybook
     ```
   - **Documentation** (for docs changes):
     ```bash
     pnpm dev:docs
     ```

## Contribution Process

### 1. Claiming an Issue

- Browse the [issues](https://github.com/aryanony/uibrium/issues).
- If you find one you'd like to work on, comment on the issue.
- Wait for a maintainer to assign it to you.

### 2. Branch Naming

Please use the following naming convention for your branches:

- `feat/feature-name` for new features
- `fix/bug-fix-name` for bug fixes
- `docs/documentation-changes` for docs
- `refactor/code-refactoring` for refactors

### 3. Making Changes

- Ensure your code follows the project's coding standards.
- Run `pnpm lint` to check for style issues.
- Run `pnpm typecheck` to ensure type safety.
- If you're adding a component, ensure it has a corresponding `.stories.tsx` file (this is automated, see below).

### 4. Commit Style

We use [Conventional Commits](https://www.conventionalcommits.org/):

- `feat: add new toast component`
- `fix: resolve hydration error in navbar`
- `docs: update installation steps`

### 5. Submitting a Pull Request

- Push your changes to your fork.
- Open a PR against the `main` branch.
- Fill out the PR template completely.

## Component Guidelines

When creating a new component:

1. Create a directory in `packages/ui/src/components/[component-name]`.
2. Implement the component in `[component-name].tsx`.
3. Export it from `packages/ui/src/index.ts`.
4. Run `pnpm storybook` to automatically generate the initial story file.
5. Document the component's props using JSDoc comments for automatic documentation generation.

## Need Help?

Feel free to open a discussion or reach out to @aryanony.

---

UiBrium — Architecting the Sanctuary of Interfaces.
