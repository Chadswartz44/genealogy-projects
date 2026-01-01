# Security Policy

## Supported Versions

We release patches for security vulnerabilities. Which versions are eligible for receiving such patches depend on the CVSS v3.0 Rating:

| Version | Supported          |
| ------- | ------------------ |
| 2.x.x   | :white_check_mark: |
| 1.x.x   | :x:                |

## Reporting a Vulnerability

**Please do NOT report security vulnerabilities through public GitHub issues.**

Instead, please report them via email to **a.ddumba@kyakabi.com**. You should receive a response within 48 hours. If for some reason you do not, please follow up via email to ensure we received your original message.

Please include the requested information listed below (as much as you can provide) to help us better understand the nature and scope of the possible issue:

* Type of issue (e.g. buffer overflow, SQL injection, cross-site scripting, etc.)
* Full paths of source file(s) related to the manifestation of the issue
* The location of the affected source code (tag/branch/commit or direct URL)
* Any special configuration required to reproduce the issue
* Step-by-step instructions to reproduce the issue
* Proof-of-concept or exploit code (if possible)
* Impact of the issue, including how an attacker might exploit it

This information will help us triage your report more quickly.

## Disclosure Policy

When the security team receives a security bug report, they will assign it to a primary handler. This person will coordinate the fix and release process, involving the following steps:

1. **Confirm the problem** and determine the affected versions.
2. **Audit code** to find any potential similar problems.
3. **Prepare fixes** for all releases still under maintenance. These fixes will be released as quickly as possible.

## Security Updates

Security updates will be released as:
- **Patch releases** for minor vulnerabilities
- **Minor releases** for moderate vulnerabilities
- **Major releases** for critical vulnerabilities

## Security Best Practices

### For Developers
1. **Keep dependencies updated**: Regularly update all dependencies to their latest secure versions
2. **Code Review**: All code changes must be reviewed by at least one other developer
3. **Static Analysis**: Use ESLint and TypeScript to catch potential issues early
4. **Input Validation**: Always validate and sanitize user input
5. **Authentication**: Use secure authentication methods and proper session management

### For Deployment
1. **Environment Variables**: Never commit sensitive data to version control
2. **HTTPS**: Always use HTTPS in production
3. **Security Headers**: Implement proper security headers (CSP, HSTS, etc.)
4. **Regular Updates**: Keep server software updated
5. **Monitoring**: Implement proper logging and monitoring

## Dependencies Security

We use the following tools to maintain dependency security:
- **npm audit**: Regular security audits of dependencies
- **Dependabot**: Automated dependency updates and security alerts
- **Snyk**: Additional security scanning

## Encryption

All data in transit is encrypted using TLS 1.2 or higher. We recommend the following ciphers:
- TLS_AES_256_GCM_SHA384
- TLS_CHACHA20_POLY1305_SHA256
- TLS_AES_128_GCM_SHA256

## Responsible Disclosure

We follow a responsible disclosure policy. If you discover a security vulnerability:
1. **Do not** exploit the vulnerability
2. **Do not** share information about the vulnerability publicly
3. **Do** report it to us privately
4. **Allow us** reasonable time to fix the issue before disclosure

## Security Contact

**Primary Contact**: Ddumba Abdallah Kato  
**Email**: a.ddumba@kyakabi.com  
**PGP Key**: Available upon request

## Acknowledgements

We would like to thank the following for their responsible disclosure of security vulnerabilities:

[List will be updated as reports are received]

---

*Last updated: January 2026*