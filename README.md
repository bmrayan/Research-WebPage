# Mohamed Rayan Barhdadi - Research Website

Personal academic research website showcasing publications, research experience, and achievements in Physics-Informed Deep Learning and Neural 3D Reconstruction.

## 🎨 Features

- **Texas A&M Maroon Theme** - Professional color scheme with maroon accents and hover effects
- **Circular Profile Photo** - Modern circular profile image in header section
- **Publication Showcase** - Clean layout with publication images, status badges, and BibTeX modal popup
- **Scrollable News Section** - Recent achievements and updates with smooth scrolling
- **About Section** - Detailed bio with dual image display on the right
- **Research Portfolio** - Detailed research experience and projects
- **Hobbies Gallery** - Personal interests with image showcase
- **Dual Email Contact** - Professional contact section with primary and academic emails
- **Mobile Responsive Design** - Fully optimized for all devices and screen sizes
- **Interactive Navigation** - Smooth scrolling navigation with hover effects

## 📁 File Structure

```
BMRAYAN_WebPage/
├── index.html                  # Main webpage
├── styles.css                  # Styling with Texas A&M maroon theme
├── script.js                   # Interactive functionality (includes BibTeX modal)
├── CNAME                       # Custom domain configuration
├── README.md                   # This file
├── CV_ICML.pdf                # Latest CV
├── main.tex                    # CV LaTeX source
│
├── photos/                     # Personal photos
│   ├── Light HS25.jpg         # Header profile photo (circular)
│   ├── MAINPIC.jpeg           # About section photo
│   ├── poster.jpg             # Research poster photo
│   ├── running.jpg            # Hobby photo
│   ├── hiking.jpg             # Hobby photo
│   └── traveling.jpg          # Hobby photo
│
├── logos/                      # Organization logos
│   ├── tamu.png               # Texas A&M logo
│   ├── QCRI.png               # QCRI logo
│   └── slb.png                # SLB logo
│
├── publication_cover/          # Publication images/GIFs
│   ├── pubphoto.gif           # Publication animation
│   ├── PhysicsNeRF_Cover.png  # PhysicsNeRF publication cover
│   └── DGADB_Cover.png        # DGADB publication cover
│
├── bibtex/                     # BibTeX citation files
│   └── PhysicsNeRF.bib        # PhysicsNeRF citation
│
└── publication_materials/      # Publication resources
    ├── papers/                 # PDF papers
    ├── posters/                # Conference posters
    ├── code/                   # Source code repositories
    ├── datasets/               # Research datasets
    ├── videos/                 # Presentation videos
    ├── project_websites/       # Individual project sites
    └── bibtex/                 # Additional citation files
```

## 🚀 Setup Instructions

1. **Fork or Clone Repository**
   ```bash
   git clone https://github.com/BMRayan/BMRAYAN_WebPage.git
   ```

2. **Update Personal Information**
   - Replace `photos/Light HS25.jpg` with your circular header profile photo
   - Replace `photos/MAINPIC.jpeg` and `photos/poster.jpg` for the About section images
   - Update content in `index.html` with your information
   - Add hobby photos in the `photos/` directory (running.jpg, hiking.jpg, traveling.jpg)

3. **Add Publication Materials**
   - Place publication covers in `publication_cover/` directory
   - Add BibTeX files to `bibtex/` directory for modal citations
   - Update links in HTML to point to actual papers, code, etc.
   - Organize materials in respective subdirectories under `publication_materials/`

4. **Configure Custom Domain**
   - Update `CNAME` file with your domain
   - Configure DNS settings with your domain provider

5. **Deploy on GitHub Pages**
   - Push changes to GitHub
   - Enable GitHub Pages in repository settings
   - Select main branch as source

## 📝 Customization Guide

### Adding Publications
Each publication in `index.html` includes:
- Publication cover image from `publication_cover/`
- Status badge (e.g., "Accepted at ICML 2025")
- Links to paper, code, dataset, video, and project website
- BibTeX modal that displays citation from `bibtex/` directory

Example structure:
```html
<!-- PUBLICATION: PhysicsNeRF (ICML 2025) -->
<!-- Status: Accepted -->
<!-- BibTeX: bibtex/PhysicsNeRF.bib -->
```

### Updating Links
Replace `href="#"` with actual links:
- Paper: Link to PDF in `publication_materials/papers/` or arXiv
- Code: GitHub repository link
- Dataset: Link to dataset repository
- Video: YouTube or direct video link
- Project Website: Individual project page
- BibTeX: Uses modal popup reading from `bibtex/` directory files

### BibTeX Modal
The website includes an interactive BibTeX modal:
- Click the BibTeX button to display citation in a popup
- Modal includes copy-to-clipboard functionality
- BibTeX files should be placed in the `bibtex/` directory

### Color Customization
Main colors defined in `styles.css`:
```css
--tamu-maroon: #500000;        /* Texas A&M Maroon */
--tamu-maroon-light: #750000;  /* Lighter shade */
--tamu-maroon-dark: #3C0000;   /* Darker shade */
```

## 🛠️ Technologies Used

- HTML5 with semantic markup
- CSS3 with CSS Variables and smooth transitions
- Vanilla JavaScript for interactivity (smooth scrolling, BibTeX modal)
- Font Awesome & Academicons for icons
- Google Fonts (Inter & Source Serif Pro)
- Responsive design with mobile-first approach

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 License

© 2025 Mohamed Rayan Barhdadi. All rights reserved.

## 🤝 Contact

- **Primary Email**: rayan.barhdadi@tamu.edu
- **Academic Email**: mohamed.barhdadi@qatar.tamu.edu
- **GitHub**: [BMRayan](https://github.com/BMRayan/)
- **LinkedIn**: [bmrayan](https://www.linkedin.com/in/bmrayan/)
- **Google Scholar**: [Profile](https://scholar.google.com/citations?user=G7qjc6kAAAAJ&hl=en&oi=ao)