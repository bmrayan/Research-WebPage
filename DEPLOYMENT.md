# Deployment Guide

This guide covers deployment options for the academic website, from local development to production hosting.

## 🚀 Quick Deployment (GitHub Pages)

### Prerequisites
- GitHub account
- Git installed locally
- Basic knowledge of Git commands

### Steps
1. **Fork/Clone the Repository**
   ```bash
   git clone https://github.com/BMRayan/bmrayan.github.io.git
   cd bmrayan.github.io
   ```

2. **Customize Content**
   - Update personal information in `index.html`
   - Replace images in `photos/` directory
   - Update CV in `CVs/` directory
   - Modify publication information
   - Update social media links

3. **Test Locally**
   ```bash
   # Using Python
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

4. **Deploy to GitHub Pages**
   ```bash
   git add .
   git commit -m "Customize website content"
   git push origin main
   ```

5. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to Pages section
   - Select "Deploy from a branch"
   - Choose `main` branch
   - Click Save

6. **Access Your Site**
   - Visit `https://yourusername.github.io/`
   - Custom domain optional (see below)

## 🌐 Custom Domain Setup

### DNS Configuration
1. **Purchase a domain** from any registrar
2. **Configure DNS records**:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   
   Type: A  
   Name: @
   Value: 185.199.109.153
   
   Type: A
   Name: @
   Value: 185.199.110.153
   
   Type: A
   Name: @
   Value: 185.199.111.153
   
   Type: CNAME
   Name: www
   Value: yourusername.github.io
   ```

3. **Update CNAME file**
   ```bash
   echo "yourdomain.com" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push
   ```

4. **Enable HTTPS** in GitHub Pages settings

## 🖥️ Alternative Hosting Options

### Netlify
1. **Connect Repository**
   - Sign up at netlify.com
   - Connect your GitHub repository
   - Deploy automatically on push

2. **Build Settings**
   - Build command: (leave empty)
   - Publish directory: `/` (root)
   - No build process required

3. **Custom Domain**
   - Add custom domain in Netlify dashboard
   - Follow DNS configuration instructions

### Vercel
1. **Import Project**
   - Sign up at vercel.com
   - Import GitHub repository
   - Deploy automatically

2. **Configuration**
   - Framework preset: Other
   - No build configuration needed

### Traditional Web Hosting
1. **Upload Files** via FTP/SFTP
2. **Ensure** web server serves static files
3. **Configure** custom domain if needed

## 🔧 Local Development

### Simple HTTP Server
```bash
# Python 3
python -m http.server 8000

# Python 2
python -M SimpleHTTPServer 8000

# Node.js
npx serve .

# PHP
php -S localhost:8000
```

### Live Reload Development
```bash
# Using Node.js live-server
npm install -g live-server
live-server

# Using Python with auto-reload
pip install livereload
python -m livereload
```

## 📊 Performance Optimization

### Image Optimization
```bash
# Optimize images before deployment
# Using ImageOptim, TinyPNG, or similar tools
# Target: < 500KB per image for web
```

### Caching Headers
For production hosting, configure caching:
```apache
# Apache .htaccess
<FilesMatch "\.(css|js|png|jpg|jpeg|gif|svg|ico)$">
    ExpiresActive On
    ExpiresDefault "access plus 1 year"
</FilesMatch>
```

```nginx
# Nginx configuration
location ~* \.(css|js|png|jpg|jpeg|gif|svg|ico)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

## 🔒 Security Considerations

### HTTPS
- **Always use HTTPS** for production
- **Enable HSTS** if supported by host
- **Use secure headers** where possible

### Content Security Policy
The website includes basic CSP headers:
```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com; ...">
```

## 📈 Analytics Setup

### Google Analytics
1. **Create GA account** and property
2. **Add tracking code** to `index.html`:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_TRACKING_ID');
   </script>
   ```

### Alternative Analytics
- **Plausible Analytics** (privacy-focused)
- **Simple Analytics** (GDPR compliant)
- **Cloudflare Analytics** (built into Cloudflare)

## 🛠️ Troubleshooting

### Common Issues

**Site not loading after deploy**
- Check GitHub Pages settings
- Verify CNAME file content
- Wait 24-48 hours for DNS propagation

**Images not displaying**
- Check file paths are correct
- Ensure images are in repository
- Verify file extensions match code

**Custom domain not working**
- Verify DNS records configuration
- Check CNAME file in repository
- Ensure HTTPS is enabled

**Performance issues**
- Optimize images (compress/resize)
- Minimize CSS/JS if needed
- Use browser dev tools to identify bottlenecks

### Support Resources
- **GitHub Pages Documentation**: https://pages.github.com/
- **Custom Domain Setup**: Check GitHub's official guides
- **DNS Configuration**: Consult your domain registrar's documentation

---

## 📝 Deployment Checklist

Before going live:

- [ ] **Content updated** with your information
- [ ] **Images replaced** with your photos
- [ ] **Links updated** (social media, CV, publications)
- [ ] **Local testing** completed
- [ ] **Cross-browser testing** done
- [ ] **Mobile responsiveness** verified
- [ ] **SEO meta tags** customized
- [ ] **Analytics** configured (optional)
- [ ] **Custom domain** configured (if applicable)
- [ ] **HTTPS** enabled
- [ ] **Performance** tested and optimized

Your academic website is ready for the world! 🎉