# Security Policy

## 🛡️ GitHub Pages Security Best Practices

This document outlines security measures implemented for this academic website hosted on GitHub Pages.

## 🔒 Security Headers Implemented

### Content Security Policy (CSP)
```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; media-src 'self'; object-src 'none'; child-src 'none'; frame-src 'none'; worker-src 'none'; form-action 'self'; upgrade-insecure-requests;">
```

**Protection**: Prevents XSS attacks and unauthorized resource loading

### X-Content-Type-Options
```html
<meta http-equiv="X-Content-Type-Options" content="nosniff">
```

**Protection**: Prevents MIME-type sniffing attacks

### X-Frame-Options
```html
<meta http-equiv="X-Frame-Options" content="DENY">
```

**Protection**: Prevents clickjacking attacks by blocking iframe embedding

### X-XSS-Protection
```html
<meta http-equiv="X-XSS-Protection" content="1; mode=block">
```

**Protection**: Enables browser XSS filtering

### Referrer Policy
```html
<meta http-equiv="Referrer-Policy" content="strict-origin-when-cross-origin">
```

**Protection**: Controls referrer information sent with requests

### Permissions Policy
```html
<meta http-equiv="Permissions-Policy" content="geolocation=(), microphone=(), camera=()">
```

**Protection**: Blocks access to sensitive device features

## 🚫 File Protection Strategy

### Sensitive Files Prevention
The `.gitignore` file includes patterns to prevent accidental exposure of:

- **Environment files**: `.env`, `.env.local`, `.env.production`
- **Certificates**: `*.key`, `*.pem`, `*.p12`, `*.pfx`
- **Configuration**: `config/secrets.json`, `secrets/`, `credentials/`
- **Personal data**: `personal_info.json`, `private_config.js`, `api_keys.txt`
- **Databases**: `*.sql`, `*.db-backup`, `*.dump`

### Repository Security Checklist

✅ **Never commit sensitive information**
✅ **Use environment variables for secrets** (not applicable for static sites)
✅ **Regularly audit repository for exposed data**
✅ **Enable branch protection** (recommended for main branch)
✅ **Use secure connection** (HTTPS enforced by GitHub Pages)

## 🔧 GitHub Repository Security Settings

### Recommended Settings
1. **Enable vulnerability alerts** in repository settings
2. **Enable Dependabot alerts** for dependency security
3. **Disable unnecessary features**:
   - Wikis (if not used)
   - Issues (if not accepting contributions)
   - Projects (if not used)
4. **Restrict repository access** to necessary collaborators only

### Branch Protection Rules
For repositories with multiple contributors:
```yaml
Protection Rules:
- Require pull request reviews
- Dismiss stale reviews when new commits are pushed
- Require status checks to pass
- Require branches to be up to date
- Include administrators in restrictions
```

## 🌐 Domain and HTTPS Security

### HTTPS Enforcement
- **GitHub Pages**: Automatically enforces HTTPS
- **Custom domains**: Enable "Enforce HTTPS" in repository settings
- **HSTS**: Consider implementing HTTP Strict Transport Security

### Custom Domain Security
If using a custom domain:
```dns
# DNS CAA Records (optional but recommended)
example.com. CAA 0 issue "letsencrypt.org"
example.com. CAA 0 issuewild ";"
```

## 🔍 Security Monitoring

### Regular Security Audits
- **Monthly review** of repository access
- **Quarterly review** of dependencies (if any)
- **Monitor GitHub security advisories**
- **Check for exposed sensitive information**

### Automated Security Tools
GitHub provides several built-in security features:
- **Secret scanning** (alerts for leaked credentials)
- **Code scanning** (static analysis for vulnerabilities)
- **Dependabot** (dependency vulnerability scanning)

## 🚨 Incident Response

### If Sensitive Data is Exposed
1. **Remove the data immediately** from all branches
2. **Force push** to overwrite Git history if necessary
3. **Rotate any exposed credentials** immediately
4. **Review access logs** if available
5. **Consider repository privacy** settings

### Emergency Contacts
- **Repository Owner**: rayan.barhdadi@tamu.edu
- **GitHub Support**: https://support.github.com/

## 📚 Additional Security Resources

### GitHub Security Documentation
- [GitHub Pages Security](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https)
- [Repository Security](https://docs.github.com/en/code-security)
- [Secret Scanning](https://docs.github.com/en/code-security/secret-scanning)

### Web Security Best Practices
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Mozilla Security Guidelines](https://infosec.mozilla.org/guidelines/web_security)
- [Content Security Policy Guide](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)

## 📋 Security Checklist for Deployment

Before deploying:

- [ ] **Remove all test data and comments** with sensitive information
- [ ] **Verify no hardcoded credentials** in any files
- [ ] **Check image metadata** doesn't contain sensitive location/device info
- [ ] **Review all external links** for security
- [ ] **Test security headers** are properly set
- [ ] **Verify HTTPS is enforced**
- [ ] **Check repository permissions** are correctly configured
- [ ] **Enable security monitoring** features on GitHub

## 🔄 Security Updates

This security policy will be reviewed and updated:
- **Quarterly** for regular maintenance
- **Immediately** upon discovery of new threats
- **When GitHub updates** security features or recommendations

---

**Last Updated**: January 2025
**Version**: 1.0

For security concerns or questions, contact: rayan.barhdadi@tamu.edu