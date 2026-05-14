# Uibrium — Beginner Contributor Guide

**Your complete step-by-step guide to making your first open source contribution**

> 🎯 Goal: Make your first Pull Request to Uibrium in under 1 hour
> No prior open source experience needed.

---

## What You'll Learn

By the end of this guide you will have:

- Made a real contribution to a live open-source project
- Learned the GitHub fork → branch → PR workflow
- Got your name in the project credits
- Added a GitHub contribution to your profile (the green square!)

---

## Before You Start — Tools You Need

Install these (one time only):

1. **Git** → https://git-scm.com/downloads
2. **Node.js (v18+)** → https://nodejs.org (Download the LTS version)
3. **pnpm** (package manager) → Open terminal and run:
   ```bash
   npm install -g pnpm
   ```
4. **VS Code** → https://code.visualstudio.com (free code editor)
5. **GitHub account** → https://github.com (free)

---

## Step 1 — Fork the Repository

"Fork" means making YOUR own copy of the project on GitHub.

1. Go to: **https://github.com/aryanony/uibrium**
2. Click the **"Fork"** button (top right corner)
3. Click **"Create fork"**

You now have your own copy at: `https://github.com/YOUR_USERNAME/uibrium`

---

## Step 2 — Clone to Your Computer

"Clone" means downloading the project to your computer.

Open your terminal (Command Prompt / PowerShell / Terminal) and type:

```bash
git clone https://github.com/YOUR_USERNAME/uibrium.git
```

Replace `YOUR_USERNAME` with your actual GitHub username.

Then enter the folder:

```bash
cd uibrium
```

---

## Step 3 — Install Dependencies

```bash
pnpm install
```

This downloads all the libraries the project needs. Wait for it to finish (1-2 minutes).

---

## Step 4 — Pick an Issue to Work On

1. Go to: **https://github.com/aryanony/uibrium/issues**
2. Click on the **"Labels"** filter
3. Select **"good first issue"** or **"beginner-friendly"**
4. Pick one issue that interests you
5. Comment on it: `"I'd like to work on this!"` — this tells others you're on it

---

## Step 5 — Create Your Own Branch

Never work directly on the `main` branch. Create a new branch:

```bash
git checkout -b your-branch-name
```

Name your branch based on what you're doing:

```bash
git checkout -b add-alert-storybook
# or
git checkout -b fix-button-typo
# or
git checkout -b docs-update-readme
```

---

## Step 6 — Make Your Changes

### Example Task: Adding a Storybook Story

If your task is "Add a Storybook story for the Alert component":

1. Open the project in VS Code:

   ```bash
   code .
   ```

2. Look at an existing story for reference:

   ```
   packages/ui/src/components/button/button.stories.tsx
   ```

3. Create a new file:

   ```
   packages/ui/src/components/alert/alert.stories.tsx
   ```

4. Copy the button story pattern and adapt it for Alert

---

### Example Task: Fixing a Typo

If your task is "Fix a typo in the README":

1. Open `README.md` in VS Code
2. Find the typo, fix it, save the file
3. Done! That's it.

---

### Example Task: Adding a JSDoc comment

If your task is "Add JSDoc comments to Button props":

Open `packages/ui/src/components/button/button.tsx` and add comments like:

```typescript
interface ButtonProps {
  /** The visual style of the button */
  variant?: 'primary' | 'secondary' | 'ghost';

  /** The size of the button */
  size?: 'sm' | 'md' | 'lg';

  /** Shows a loading spinner and disables the button */
  loading?: boolean;
}
```

---

## Step 7 — Test Your Changes

Run the build to make sure nothing is broken:

```bash
pnpm build
```

If you see no errors, you're good!

Optional — start Storybook to see your component visually:

```bash
pnpm storybook
```

---

## Step 8 — Commit Your Changes

"Commit" means saving your changes with a message.

```bash
# See what files you changed
git status

# Add all changed files
git add .

# Commit with a descriptive message
git commit -m "docs(alert): add Storybook story"
```

### Commit Message Format

Use this pattern: `type(area): what you did`

Examples:

- `docs(alert): add storybook story`
- `fix(button): fix typo in loading prop`
- `feat(badge): add xl size variant`
- `docs(readme): fix installation command`

---

## Step 9 — Push to Your Fork

```bash
git push origin your-branch-name
```

---

## Step 10 — Open a Pull Request

1. Go to your fork: `https://github.com/YOUR_USERNAME/uibrium`
2. You'll see a yellow banner: **"Compare & pull request"** — click it
3. Fill in the PR form:
   - **Title**: Clear description of what you did
   - **Description**: Fill in the PR template (what you changed, why)
   - **Link the issue**: Write `Closes #123` (use the actual issue number)
4. Click **"Create pull request"**

That's it! 🎉 You've made your first open source contribution!

---

## Step 11 — Wait for Review

- Aaryan Gupta (the maintainer) will review your PR
- He may ask for small changes — that's normal and totally fine
- Make the changes, commit, push again — the PR updates automatically
- Once approved, it gets merged into the main project!

---

## Common Problems & Solutions

### "pnpm: command not found"

```bash
npm install -g pnpm
```

### "git: command not found"

Download Git from https://git-scm.com/downloads

### "pnpm install" fails

Make sure you have Node.js 18+:

```bash
node --version  # Should say v18.x.x or higher
```

### Build fails after my changes

- Check if you introduced any TypeScript errors
- Run `pnpm typecheck` to see specific errors
- Ask Aaryan Gupta for help — that's what maintainers are for!

### "I made changes to the wrong branch"

Don't panic! Run:

```bash
git stash
git checkout -b correct-branch-name
git stash pop
```

---

## Vocabulary Glossary

| Word                  | Meaning                                               |
| --------------------- | ----------------------------------------------------- |
| **Repository (repo)** | The project folder on GitHub                          |
| **Fork**              | Your personal copy of someone else's repo             |
| **Clone**             | Download the repo to your computer                    |
| **Branch**            | A parallel version of the code where you make changes |
| **Commit**            | A saved snapshot of your changes                      |
| **Push**              | Upload your commits to GitHub                         |
| **Pull Request (PR)** | A request to merge your changes into the main project |
| **Merge**             | Accepting the changes from a PR                       |
| **Issue**             | A task, bug, or feature request on GitHub             |
| **Maintainer**        | The person who owns/manages the project               |
| **Review**            | Maintainer checks your PR and gives feedback          |

---

## For the Maintainer (Aaryan Gupta) — How to Handle Contributions

### When Someone Opens a PR

1. **Respond within 24 hours** — even just "Thanks! I'll review this soon 🙏"
2. Leave clear, kind review comments — never harsh
3. If the PR is almost right, approve with suggestions instead of rejecting
4. Merge promptly after approval — don't leave PRs hanging

### Reviewing a Beginner's PR

Say this when requesting changes:

```
Great first contribution! Just a small tweak needed:

[Explain the change needed simply]

You can fix it by [specific instruction]. Let me know if you need help!
```

Say this when approving:

```
Amazing work! This looks great. Merging now 🎉

Welcome to the Uibrium contributors family! Your name will appear in our CONTRIBUTORS.md.
```

### After Merging

1. Comment a thank-you on their PR
2. Add their name to `CONTRIBUTORS.md`
3. Post in GitHub Discussions: "🎉 Welcome @username — new contributor!"
4. Tag them in a tweet/post if they share their GitHub handle

---

## What a Merged PR Looks Like on Your GitHub Profile

After your PR is merged, it shows on your GitHub profile as:

- A green square on your contribution graph
- Activity in your contributions feed
- The PR visible in your "Pull requests" tab

This is real, permanent evidence of open-source work that employers and interviewers look for. 💼

---

_Guide created for Uibrium — github.com/aryanony/uibrium_
_Maintained by Aaryan Gupta_
