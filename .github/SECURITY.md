# Security Policy

## Supported Versions

| Version | Supported              |
| ------- | ---------------------- |
| 1.x     | ✅ Actively supported  |
| < 1.0   | ❌ No longer supported |

## Reporting a Vulnerability

We take security seriously at Uibrium. If you discover a security vulnerability, please report it responsibly.

### How to Report

1. **Do NOT** open a public GitHub issue for security vulnerabilities.
2. Instead, use [GitHub's private vulnerability reporting](https://github.com/aryanony/uibrium/security/advisories/new).
3. Or email the maintainer directly at the email listed on the [GitHub profile](https://github.com/aryanony).

### What to Include

- A description of the vulnerability
- Steps to reproduce the issue
- The potential impact
- Any suggested fixes (optional but appreciated)

### Response Timeline

- **Acknowledgment:** Within 48 hours
- **Initial Assessment:** Within 5 business days
- **Fix & Disclosure:** Coordinated with the reporter

### Scope

This security policy applies to:

- The `@uibrium/ui` npm package
- The documentation site at https://uibrium.vercel.app
- The Storybook deployment
- All GitHub Actions workflows

### Out of Scope

- Third-party dependencies (report to their maintainers)
- Issues in forked repositories

## Security Best Practices for Contributors

- Never commit secrets, API keys, or tokens
- Always use `pnpm install --frozen-lockfile` in CI
- Review dependency updates from Dependabot before merging
- Use the `CODEOWNERS` file to ensure proper review

---

_Maintained by Aaryan Gupta — [@aryanony](https://github.com/aryanony)_
