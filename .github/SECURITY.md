# Security Policy

## Supported Versions

| Version | Supported          |
|---------|--------------------|
| 1.x.x   | ✅ Active support  |
| < 1.0   | ❌ No longer supported |

## Reporting a Vulnerability

The Uibrium team takes security issues seriously. We appreciate your efforts to responsibly disclose your findings.

### ⚠️ Please do NOT

- Open a public GitHub issue for security vulnerabilities
- Post vulnerability details in GitHub Discussions
- Share vulnerability details on social media before resolution

### ✅ Please DO

1. **Email**: Send details to **aaryan.uibrium@gmail.com** with the subject line `[SECURITY] Vulnerability Report`
2. **GitHub Security Advisory**: [Create a private security advisory](https://github.com/aryanony/uibrium/security/advisories/new) (recommended)

### What to Include

- Description of the vulnerability
- Steps to reproduce the issue
- Potential impact assessment
- Suggested fix (if any)

### Response Timeline

| Action | Timeline |
|--------|----------|
| Initial acknowledgment | Within **48 hours** |
| Status update | Within **5 business days** |
| Vulnerability fix | Within **30 days** (critical) / **90 days** (low severity) |
| Public disclosure | After the fix is released |

### What to Expect

1. **Acknowledgment**: We will acknowledge receipt of your report within 48 hours
2. **Assessment**: We will investigate and assess the severity of the vulnerability
3. **Fix**: We will develop and test a fix
4. **Release**: We will release the fix and publicly disclose the vulnerability
5. **Credit**: We will credit you in the release notes (unless you prefer to remain anonymous)

### Scope

The following are in scope for security reports:

- **@uibrium/ui** npm package
- **uibrium.vercel.app** documentation site
- GitHub repository configuration
- CI/CD pipeline security

### Out of Scope

- Vulnerabilities in third-party dependencies (report these upstream, but let us know)
- Social engineering attacks
- Denial of service attacks
- Issues in user-implemented code using Uibrium components

## Security Best Practices for Contributors

When contributing to Uibrium, please follow these security guidelines:

1. **Never commit secrets**: API keys, tokens, passwords, or credentials must never be committed
2. **Validate inputs**: All component props that accept user input should be properly sanitized
3. **Use safe defaults**: Components should be secure by default without requiring additional configuration
4. **Avoid `dangerouslySetInnerHTML`**: Do not use unless absolutely necessary, and never with user-supplied content
5. **Keep dependencies updated**: Regularly audit and update dependencies for known vulnerabilities
6. **Follow the principle of least privilege**: Request only the permissions necessary for functionality

## Security Features

Uibrium implements the following security measures:

- ✅ **No `eval()` or `Function()` usage** in any component code
- ✅ **No `dangerouslySetInnerHTML`** in any component
- ✅ **XSS-safe rendering** — all text content is escaped by React's default behavior
- ✅ **Dependency auditing** via automated CI pipeline (`pnpm audit`)
- ✅ **Lockfile integrity** — `pnpm install --frozen-lockfile` in CI prevents supply chain attacks
- ✅ **Secret scanning** — CI checks for accidentally committed credentials
- ✅ **Minimal permissions** — GitHub Actions workflows use least-privilege `permissions` blocks

---

*Thank you for helping keep Uibrium and its users safe!*
