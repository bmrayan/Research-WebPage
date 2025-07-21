# Mohamed Rayan Barhdadi - Academic Website

A modern, performance-optimized academic portfolio website showcasing research in 3D Computer Vision, AI for Social Good, and Interdisciplinary ML Research. Built with vanilla HTML, CSS, and JavaScript for maximum performance and compatibility.

## 🌟 Features

### ✨ Design & User Experience
- **Modern Academic Design** - Clean, professional layout with TAMU branding
- **Dark Mode Support** - Seamless light/dark theme toggle with smooth transitions
- **Performance Optimized** - CSS containment, optimized animations, and efficient JavaScript
- **Accessibility First** - Semantic HTML, proper ARIA labels, and keyboard navigation
- **SEO Optimized** - Comprehensive meta tags, structured data, and social media integration

### 📱 Mobile Excellence
- **Mobile-First Design** - Responsive layouts optimized for all screen sizes
- **Two-Line Navigation** - Prevents overlap on mobile devices with clean 2-row layout
- **Touch-Friendly** - Optimized tap targets and spacing for mobile interactions
- **Performance Focused** - Fast loading and smooth scrolling on mobile devices
- **Adaptive Content** - Content reorganized for optimal mobile viewing experience

### 🔍 Advanced Functionality
- **Smart Navigation** - Auto-highlighting active sections with smooth scrolling
- **Publication Search** - Real-time filtering with cached search data for performance
- **Interactive BibTeX** - Modal popups with copy-to-clipboard functionality
- **PDF Integration** - Optimized zoom levels for papers (90%) and posters (25%)
- **Smooth Animations** - Performance-optimized CSS transitions and micro-interactions

### 🎨 Content Sections
- **Professional Header** - Profile photo with social links and contact information
- **About Me** - Research background and academic journey
- **Recent News** - Timeline of achievements and updates with expandable content
- **Publications** - Interactive publication showcase with search and filtering
- **Experience** - Professional timeline with logos and detailed descriptions
- **Hobbies** - Personal interests gallery with 4 hobby images and captions
- **Journal** - Blog section for personal thoughts and experiences
- **Contact** - Professional contact information and email

## 🚀 Live Demo

Visit the live website: [https://bmrayan.github.io/](https://bmrayan.github.io/)

## 📁 Project Structure

```
BMRAYAN_WebPage/
├── index.html                  # Main homepage
├── blog.html                   # Blog/journal page
├── styles.css                  # Main stylesheet with responsive design
├── script.js                   # Interactive JavaScript functionality
├── README.md                   # Project documentation
├── CNAME                       # Custom domain configuration
├── robots.txt                  # SEO crawler instructions
├── sitemap.xml                 # SEO site structure
│
├── photos/                     # Profile and personal images
│   ├── Light HS25.jpg         # Main profile photo
│   ├── MAINPIC.jpeg           # About section image
│   ├── poster.jpg             # Research poster image
│   ├── traveling.jpg          # Travel hobby image
│   ├── hiking.jpg             # Hiking hobby image
│   ├── hiking2.jpg            # Trekking hobby image
│   └── running.jpg            # Running hobby image
│
├── CVs/                        # Curriculum Vitae directory
│   └── CV_ICML.pdf            # Latest academic CV
│
├── publication_cover/          # Publication cover images
│   ├── PhysicsNeRF_Cover.png  # PhysicsNeRF publication cover
│   ├── DGADB_Cover.png        # DGA Database publication cover
│   └── pubphoto.gif           # Placeholder publication GIF
│
├── papers/                     # Research papers (PDF)
│   └── DGAFullPaper.pdf       # CIGRE 2025 paper
│
├── posters/                    # Conference posters (PDF)
│   └── PhysicsNeRF_ICML_poster.pdf  # ICML 2025 poster
│
├── bibtex/                     # BibTeX citation files
│   └── PhysicsNeRF.bib        # PhysicsNeRF citation
│
└── logos/                      # Institution logos
    ├── tamu.png               # Texas A&M University logo
    ├── QCRI.png              # Qatar Computing Research Institute
    └── slb.png               # SLB company logo
```

## 🛠 Technologies Used

- **HTML5**: Semantic markup with comprehensive SEO and accessibility features
- **CSS3**: Modern CSS with Flexbox, Grid, CSS Variables, and performance optimizations
- **Vanilla JavaScript**: Lightweight, performance-focused interactive functionality
- **Font Awesome**: Comprehensive icon library for social links and UI elements
- **Academicons**: Academic-specific icons for scholarly profiles
- **Google Fonts**: Inter and Source Serif Pro for professional typography

## ⚡ Performance Features

### CSS Optimizations
- **CSS Containment**: Layout, style, and paint containment for optimal rendering
- **Optimized Transitions**: Specific property transitions instead of `all` for better performance
- **Will-change Hints**: Strategic GPU acceleration for transform animations
- **Efficient Selectors**: Minimal specificity with BEM-inspired methodology

### JavaScript Performance
- **Section Caching**: Cached DOM queries to eliminate repeated lookups
- **Throttled Events**: RequestAnimationFrame for smooth scroll handling
- **Debounced Search**: Performance-optimized publication filtering with data caching
- **Lazy Loading**: Strategic loading of interactive elements

### Mobile Optimizations
- **Mobile-First CSS**: Base styles optimized for mobile with desktop enhancements
- **Touch Targets**: Properly sized tap targets following accessibility guidelines
- **Responsive Images**: Optimized loading for different viewport sizes
- **Two-Line Navigation**: Clean mobile navigation preventing overlap

## 🎨 Customization Guide

### Theme Colors
The website uses CSS custom properties for easy theme customization:

```css
:root {
    /* Primary TAMU Colors */
    --tamu-maroon: #500000;        /* Primary brand color */
    --tamu-white: #FFFFFF;         /* Background color */
    --tamu-dark: #3C0000;          /* Dark accent */
    
    /* Text Colors */
    --text-primary: #202020;       /* Main text */
    --text-secondary: #3E3E3E;     /* Secondary text */
    --text-light: #707070;         /* Muted text */
}
```

### Dark Theme
Dark mode automatically handled with CSS variables:
```css
[data-theme="dark"] {
    --text-primary: #E0E0E0;
    --bg-main: #1A1A1A;
    /* Additional dark theme overrides */
}
```

### Content Updates
1. **Personal Information**: Update header section in `index.html`
2. **Publications**: Add new entries in the publications section with proper structure
3. **Experience**: Update timeline with new positions and achievements
4. **Research Areas**: Modify research interests and focus areas
5. **Images**: Replace photos in respective directories maintaining aspect ratios

## 📱 Responsive Design

### Breakpoints
- **Desktop**: > 992px (default optimized styles)
- **Tablet**: 768px - 992px (intermediate layouts)
- **Mobile**: < 768px (comprehensive mobile optimization)
- **Small Mobile**: < 480px (additional micro-optimizations)

### Mobile Features
- Two-line navigation bar preventing item overlap
- Icon-only contact links for space efficiency
- Centered layouts optimized for thumb navigation
- Grid-based hobby gallery (2x2 on mobile, 1x4 on tiny screens)
- Card-style publication and experience layouts

## 🚀 Setup & Deployment

### Local Development
1. **Clone the repository**:
   ```bash
   git clone https://github.com/BMRayan/bmrayan.github.io.git
   cd bmrayan.github.io
   ```

2. **Local Server** (recommended for full functionality):
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Open in browser**: Navigate to `http://localhost:8000`

### GitHub Pages Deployment
1. **Fork or clone** the repository to your GitHub account
2. **Customize content** with your personal information
3. **Enable GitHub Pages** in repository settings
4. **Select main branch** as the source
5. **Custom domain** (optional): Update `CNAME` file and configure DNS

### Content Updates
- **Publications**: Add entries following the existing HTML structure
- **Experience**: Update with your professional timeline
- **Images**: Replace with your photos maintaining consistent naming
- **CV**: Update the PDF in the `CVs/` directory
- **Links**: Update all social media and professional profile links

## 🌐 Browser Support

- **Chrome** (latest) - Full support
- **Firefox** (latest) - Full support  
- **Safari** (latest) - Full support
- **Edge** (latest) - Full support
- **Mobile browsers** - Optimized support
- **Legacy browsers** - Graceful degradation

## 🤝 Contributing

This project welcomes contributions! Whether you're fixing bugs, improving performance, or suggesting new features:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines
- Maintain semantic HTML structure
- Follow the existing CSS methodology
- Keep JavaScript vanilla for maximum compatibility
- Test across multiple devices and browsers
- Ensure accessibility compliance

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

© 2025 Mohamed Rayan Barhdadi. All rights reserved.

## 🔗 Connect

- **Website**: [bmrayan.github.io](https://bmrayan.github.io/)
- **Email**: rayan.barhdadi@tamu.edu
- **Google Scholar**: [Mohamed Rayan Barhdadi](https://scholar.google.com/citations?user=G7qjc6kAAAAJ&hl=en&oi=ao)
- **GitHub**: [@BMRayan](https://github.com/BMRayan/)
- **LinkedIn**: [bmrayan](https://www.linkedin.com/in/bmrayan/)
- **Twitter**: [@MRBarhdadi](https://twitter.com/MRBarhdadi)

## 🙏 Acknowledgments

- **Texas A&M University Qatar** - Academic affiliation and support
- **Qatar Computing Research Institute (QCRI)** - Research collaboration opportunities
- **SLB Qatar** - Professional development and internship experience
- **Font Awesome & Academicons** - Comprehensive icon libraries
- **Google Fonts** - Beautiful typography (Inter & Source Serif Pro)
- **GitHub Pages** - Free and reliable web hosting

---

**Note**: This academic website template prioritizes performance, accessibility, and mobile responsiveness while maintaining a professional aesthetic. The codebase is optimized for easy customization and maintenance.