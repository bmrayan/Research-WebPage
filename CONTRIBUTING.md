# Contributing to Academic Website Template

Thank you for your interest in contributing to this academic website project! This document provides guidelines for contributing to the codebase.

## 🤝 How to Contribute

### Reporting Issues
- **Search existing issues** before creating a new one
- **Use clear, descriptive titles** for issue reports
- **Include steps to reproduce** the problem
- **Specify browser and device** information
- **Add screenshots** if applicable

### Suggesting Features
- **Check if the feature already exists** or has been requested
- **Describe the feature clearly** with use cases
- **Consider the academic website context** 
- **Think about mobile compatibility**

### Code Contributions

#### Getting Started
1. **Fork the repository**
2. **Clone your fork**:
   ```bash
   git clone https://github.com/yourusername/academic-website.git
   cd academic-website
   ```
3. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

#### Development Setup
- **No build process required** - pure HTML, CSS, and JavaScript
- **Use a local server** for testing:
  ```bash
  python -m http.server 8000
  ```
- **Test on multiple browsers** and device sizes
- **Maintain accessibility standards**

## 📋 Development Guidelines

### HTML Standards
- **Use semantic HTML5** elements
- **Maintain proper document structure**
- **Include appropriate ARIA labels**
- **Follow existing naming conventions**
- **Keep accessibility in mind**

### CSS Guidelines
- **Follow the existing CSS methodology** (BEM-inspired)
- **Use CSS custom properties** for theming
- **Maintain performance optimizations**:
  - Prefer `transform` over layout-changing properties
  - Use `will-change` appropriately
  - Implement CSS containment where beneficial
- **Ensure responsive design**:
  - Mobile-first approach
  - Test on various screen sizes
  - Maintain two-line navigation on mobile

### JavaScript Standards
- **Keep vanilla JavaScript** (no frameworks/libraries)
- **Maintain performance focus**:
  - Use `requestAnimationFrame` for smooth animations
  - Implement throttling and debouncing
  - Cache DOM queries where possible
- **Follow existing patterns**:
  - Event delegation where appropriate
  - Consistent error handling
  - Clear function naming

## 🎨 Design Principles

### Theme Consistency
- **Maintain TAMU branding** with maroon color scheme
- **Support both light and dark themes**
- **Keep professional academic aesthetic**
- **Ensure consistent spacing and typography**

### Performance Focus
- **Optimize for mobile devices**
- **Minimize reflows and repaints**
- **Use efficient CSS selectors**
- **Implement smooth, performant animations**

### Accessibility
- **Ensure keyboard navigation works**
- **Maintain proper color contrast ratios**
- **Include appropriate ARIA attributes**
- **Test with screen readers when possible**

## 🧪 Testing Guidelines

### Cross-Browser Testing
Test your changes on:
- **Chrome** (latest)
- **Firefox** (latest)
- **Safari** (latest)
- **Edge** (latest)
- **Mobile browsers** (iOS Safari, Chrome Mobile)

### Device Testing
- **Desktop** (various screen sizes)
- **Tablet** (portrait and landscape)
- **Mobile** (various sizes, especially small screens)

### Performance Testing
- **Check page load speed**
- **Test smooth scrolling performance**
- **Verify animations are smooth**
- **Ensure search functionality is responsive**

## 📝 Code Style

### Naming Conventions
- **CSS classes**: Use BEM-inspired methodology
- **JavaScript functions**: camelCase with descriptive names
- **CSS custom properties**: Kebab-case with logical prefixes
- **File names**: Lowercase with hyphens

### Comments
- **Add comments for complex logic**
- **Document any performance optimizations**
- **Explain accessibility considerations**
- **Include browser compatibility notes if needed**

### Formatting
- **Use consistent indentation** (2 spaces)
- **Add blank lines for readability**
- **Keep lines under 100 characters when reasonable**
- **Use meaningful variable names**

## 🚀 Pull Request Process

### Before Submitting
1. **Test thoroughly** across browsers and devices
2. **Check performance** hasn't regressed
3. **Validate HTML** and CSS
4. **Ensure accessibility** hasn't been compromised
5. **Update documentation** if needed

### Pull Request Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Performance improvement
- [ ] Documentation update
- [ ] Code refactoring

## Testing
- [ ] Tested on desktop browsers
- [ ] Tested on mobile devices
- [ ] Verified accessibility
- [ ] Performance tested

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No new accessibility issues
```

### Review Process
1. **Automated checks** (if available) must pass
2. **Code review** by maintainers
3. **Testing verification** on multiple devices
4. **Merge** after approval

## 🐛 Reporting Security Issues

If you discover a security vulnerability, please:
- **Do not open a public issue**
- **Contact the maintainer directly** at rayan.barhdadi@tamu.edu
- **Provide detailed information** about the vulnerability
- **Allow reasonable time** for the issue to be addressed

## 📞 Getting Help

- **Open an issue** for questions about development
- **Check existing documentation** in README.md
- **Review closed issues** for similar problems
- **Contact maintainer** for complex questions

## 🙏 Recognition

Contributors will be acknowledged in:
- **README.md acknowledgments section**
- **Comments in code** for significant contributions
- **Release notes** for major features

---

Thank you for helping improve this academic website template! Your contributions help create better tools for researchers and academics worldwide.