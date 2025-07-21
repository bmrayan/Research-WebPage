// Security: Disable right-click context menu
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
});

// Security: Disable text selection
document.addEventListener('selectstart', function(e) {
    if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        e.preventDefault();
        return false;
    }
});

// Security: Disable drag and drop for images
document.addEventListener('dragstart', function(e) {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
        return false;
    }
});

// Security: Disable print
window.addEventListener('beforeprint', function(e) {
    console.warn('Printing is disabled for security reasons.');
    return false;
});

// Security: Disable keyboard shortcuts for saving/printing
document.addEventListener('keydown', function(e) {
    // Disable Ctrl+S (save), Ctrl+P (print), Ctrl+A (select all)
    if (e.ctrlKey && (e.keyCode === 83 || e.keyCode === 80 || e.keyCode === 65)) {
        e.preventDefault();
        return false;
    }
    // Disable F12 (developer tools)
    if (e.keyCode === 123) {
        e.preventDefault();
        return false;
    }
    // Disable Ctrl+Shift+I (developer tools)
    if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
        e.preventDefault();
        return false;
    }
    // Disable Ctrl+Shift+J (console)
    if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
        e.preventDefault();
        return false;
    }
    // Disable Ctrl+U (view source)
    if (e.ctrlKey && e.keyCode === 85) {
        e.preventDefault();
        return false;
    }
});

// Security: Basic developer tools detection
let devtools = {open: false, orientation: null};
const threshold = 160;
setInterval(function() {
    if (window.outerHeight - window.innerHeight > threshold || 
        window.outerWidth - window.innerWidth > threshold) {
        if (!devtools.open) {
            devtools.open = true;
            console.clear();
            console.log('%cSecurity Warning!', 'color: red; font-size: 30px; font-weight: bold;');
            console.log('%cThis is a browser feature intended for developers. Content is protected by copyright.', 'color: red; font-size: 16px;');
        }
    } else {
        devtools.open = false;
    }
}, 500);

// Dark Mode Functionality - Initialize immediately to prevent flash
(function() {
    // Check for saved theme preference, default to 'light' always
    const savedTheme = localStorage.getItem('theme');
    const html = document.documentElement;
    
    if (savedTheme === 'dark') {
        html.setAttribute('data-theme', 'dark');
    } else {
        // Always default to light, ignore system preference on first visit
        html.setAttribute('data-theme', 'light');
    }
})();

function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            // Add rotation animation to icon
            this.style.transform = 'rotate(360deg)';
            setTimeout(() => {
                this.style.transform = '';
            }, 300);
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme toggle functionality
    initTheme();
    
    // Get navigation items for the highlighting functionality
    const navItems = document.querySelectorAll('.nav-item');

    // Optimized throttled active section highlighting
    let ticking = false;
    let isUserInteracting = false;
    let userInteractionTimeout;
    let cachedSections = null;

    function updateActiveSection() {
        // Don't update active section while user is interacting
        if (isUserInteracting) {
            ticking = false;
            return;
        }

        // Cache sections on first run for better performance
        if (!cachedSections) {
            cachedSections = Array.from(document.querySelectorAll('.section')).map(section => ({
                element: section,
                id: section.getAttribute('id'),
                offsetTop: section.offsetTop,
                clientHeight: section.clientHeight
            }));
        }

        const scrollPosition = window.scrollY + window.innerHeight * 0.8;
        let currentSection = null;
        let closestDistance = Infinity;

        // Use cached sections for better performance
        for (const section of cachedSections) {
            const sectionCenter = section.offsetTop + (section.clientHeight / 2);
            const distance = Math.abs(scrollPosition - sectionCenter);
            
            if (distance < closestDistance) {
                closestDistance = distance;
                currentSection = section.id;
            }
        }

        // Only update if we found a section and it's different from current
        if (currentSection) {
            const currentActive = document.querySelector('.nav-item.active');
            const shouldBeActive = document.querySelector(`.nav-item[href="#${currentSection}"]`);
            
            if (currentActive !== shouldBeActive) {
                navItems.forEach(item => item.classList.remove('active'));
                if (shouldBeActive) {
                    shouldBeActive.classList.add('active');
                }
            }
        }
        
        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateActiveSection);
            ticking = true;
        }
    }

    // Add interaction handlers to navigation items
    navItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            // Only allow hover highlighting if no recent click
            if (!isUserInteracting) {
                clearTimeout(userInteractionTimeout);
                
                // Remove active from all items and add to hovered item
                navItems.forEach(navItem => navItem.classList.remove('active'));
                this.classList.add('active');
            }
        });

        item.addEventListener('mouseleave', function() {
            // Only revert to scroll-based if no recent click
            if (!isUserInteracting) {
                userInteractionTimeout = setTimeout(() => {
                    updateActiveSection(); // Update based on current scroll position
                }, 200);
            }
        });

        item.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // If it's an external link (like blog.html), let it navigate normally
            if (!targetId.startsWith('#')) {
                return; // Let the browser handle the navigation
            }
            
            e.preventDefault();
            isUserInteracting = true;
            clearTimeout(userInteractionTimeout);
            
            // Remove active from all items and add to clicked item
            navItems.forEach(navItem => navItem.classList.remove('active'));
            this.classList.add('active');
            
            // Scroll to section
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offset = 70;
                const targetPosition = targetSection.offsetTop - offset;
                
                // Smooth scroll with performance optimization
                const startPosition = window.pageYOffset;
                const distance = targetPosition - startPosition;
                const duration = 600; // Optimized duration
                let start = null;

                function animateScroll(timestamp) {
                    if (!start) start = timestamp;
                    const progress = timestamp - start;
                    const percentage = Math.min(progress / duration, 1);
                    
                    // Simpler easing for better performance
                    const ease = percentage < 0.5 
                        ? 2 * percentage * percentage 
                        : -1 + (4 - 2 * percentage) * percentage;
                    
                    window.scrollTo(0, startPosition + distance * ease);
                    
                    if (progress < duration) {
                        requestAnimationFrame(animateScroll);
                    }
                }
                
                requestAnimationFrame(animateScroll);
                
                // Keep the clicked item active longer, until user scrolls significantly
                setTimeout(() => {
                    isUserInteracting = false;
                }, 1000);
            }
        });
    });

    // Reset interaction state when user scrolls manually (not from click)
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        const scrollDelta = Math.abs(currentScrollY - lastScrollY);
        
        // If user scrolls more than 100px manually, reset interaction state
        if (scrollDelta > 100 && isUserInteracting) {
            setTimeout(() => {
                isUserInteracting = false;
                // Invalidate cache when user scrolls significantly
                cachedSections = null;
                updateActiveSection();
            }, 500);
        }
        
        lastScrollY = currentScrollY;
    }, { passive: true });

    window.addEventListener('scroll', requestTick);

    // Add scrolled class to navigation on scroll (throttled)
    const navigation = document.querySelector('.navigation');
    let navScrollTicking = false;
    
    function updateNavScroll() {
        const aboutSection = document.getElementById('about');
        const aboutTop = aboutSection ? aboutSection.offsetTop : 0;
        const triggerPoint = aboutTop - 100; // Trigger 100px before reaching About section
        
        if (window.scrollY >= triggerPoint) {
            navigation.classList.add('scrolled');
        } else {
            navigation.classList.remove('scrolled');
        }
        navScrollTicking = false;
    }
    
    function requestNavScrollTick() {
        if (!navScrollTicking) {
            requestAnimationFrame(updateNavScroll);
            navScrollTicking = true;
        }
    }
    
    window.addEventListener('scroll', requestNavScrollTick, { passive: true });
    
    updateActiveSection();

    // Add hover effect to publication links
    const pubLinks = document.querySelectorAll('.link-button');
    pubLinks.forEach(link => {
        if (link.getAttribute('href') === '#' && !link.getAttribute('onclick')) {
            // Only apply disabled styling to links without onclick handlers (not BibTeX buttons)
            link.style.cursor = 'not-allowed';
            link.style.opacity = '0.7';
            link.addEventListener('click', function(e) {
                e.preventDefault();
            });
        }
    });


    // Fun easter egg: console message
    console.log('%c🚀 Welcome to my research website! %c\nLooking for collaborations? Let\'s push the boundaries of ML together!\n\n', 
        'color: #500000; font-size: 20px; font-weight: bold;',
        'color: #333; font-size: 14px;');

    // Add hover effect to wave emoji
    const waveEmoji = document.querySelector('.wave');
    if (waveEmoji) {
        waveEmoji.addEventListener('mouseenter', function() {
            this.style.animationDuration = '0.5s';
        });
        waveEmoji.addEventListener('mouseleave', function() {
            this.style.animationDuration = '2.5s';
        });
    }

    // Coffee counter easter egg
    let coffeeCount = 0;
    const coffee = document.querySelector('.coffee');
    if (coffee) {
        coffee.addEventListener('click', function() {
            coffeeCount++;
            if (coffeeCount === 5) {
                this.title = 'That\'s a lot of coffee! ☕☕☕☕☕';
            } else if (coffeeCount === 10) {
                this.title = 'Coffee overflow! Time for a break? 😅';
                coffeeCount = 0;
            }
        });
    }

    // Publication Filter/Search Functionality
    const pubSearch = document.getElementById('pub-search');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const publications = document.querySelectorAll('.publication-item');

    // Filter by status
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            publications.forEach((pub, index) => {
                if (filter === 'all') {
                    pub.style.display = 'flex';
                    requestAnimationFrame(() => {
                        pub.style.opacity = '1';
                        pub.style.transform = 'translateY(0)';
                    });
                } else {
                    const status = pub.querySelector('.pub-status');
                    if (status && status.classList.contains(filter)) {
                        pub.style.display = 'flex';
                        requestAnimationFrame(() => {
                            pub.style.opacity = '1';
                            pub.style.transform = 'translateY(0)';
                        });
                    } else {
                        pub.style.opacity = '0';
                        pub.style.transform = 'translateY(-10px)';
                        setTimeout(() => {
                            if (pub.style.opacity === '0') {
                                pub.style.display = 'none';
                            }
                        }, 250);
                    }
                }
            });
        });
    });

    // Optimized search functionality (debounced with caching)
    if (pubSearch) {
        let searchTimeout;
        let cachedSearchData = null;
        
        function initializeSearchCache() {
            if (!cachedSearchData) {
                cachedSearchData = Array.from(publications).map(pub => ({
                    element: pub,
                    title: pub.querySelector('.pub-title').textContent.toLowerCase(),
                    authors: pub.querySelector('.pub-authors').textContent.toLowerCase(),
                    venue: pub.querySelector('.pub-venue').textContent.toLowerCase()
                }));
            }
        }
        
        function performSearch(searchTerm) {
            initializeSearchCache();
            
            cachedSearchData.forEach(pubData => {
                const isMatch = pubData.title.includes(searchTerm) || 
                               pubData.authors.includes(searchTerm) || 
                               pubData.venue.includes(searchTerm);
                
                if (isMatch) {
                    pubData.element.style.display = 'flex';
                    requestAnimationFrame(() => {
                        pubData.element.style.opacity = '1';
                        pubData.element.style.transform = 'translateY(0)';
                    });
                } else {
                    pubData.element.style.opacity = '0';
                    pubData.element.style.transform = 'translateY(-10px)';
                    setTimeout(() => {
                        if (pubData.element.style.opacity === '0') {
                            pubData.element.style.display = 'none';
                        }
                    }, 200);
                }
            });
        }
        
        pubSearch.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            
            // Debounce search for better performance
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                performSearch(searchTerm);
                
                // Reset filter buttons when searching
                if (searchTerm !== '') {
                    filterBtns.forEach(btn => btn.classList.remove('active'));
                    filterBtns[0].classList.add('active'); // Set "All" as active
                }
            }, 120);
        });
    }
});

// BibTeX Modal Functions
const bibtexData = {
    physicsnerf: {
        title: "PhysicsNeRF",
        content: `@inproceedings{barhdadi2025physicsnerf,
  title     = {PhysicsNeRF: Physics-Guided 3D Reconstruction from Sparse Views},
  author    = {Barhdadi, Mohamed Rayan and Kurban, Hasan and Alnuweiri, Hussein},
  booktitle = {The International Conference on Machine Learning (ICML), Workshop on Building Physically Plausible World Models},
  year      = {2025},
  note      = {arXiv:2505.23481},
  url       = {https://arxiv.org/abs/2505.23481}
}`
    },
    cigre: {
        title: "Transformer Diagnostics",
        content: `@inproceedings{barhdadi2025transformer,
  title     = {Advancing Transformer Diagnostics: A Statistical Analysis of a Publicly Available DGA Database},
  author    = {Barhdadi, Mohamed Rayan and Jaldurgam, Farheen and Awadallah, Selma K.E.},
  booktitle = {21st CIGRE International Conference (GCC-CIGRE)},
  year      = {2025},
  address   = {Kuwait},
  organization = {CIGRE}
}`
    }
};

function showBibTeX(paperKey) {
    const modal = document.getElementById('bibtex-modal');
    const subtitle = document.getElementById('modal-subtitle');
    const content = document.getElementById('bibtex-content');
    const bibtexHeader = document.querySelector('.bibtex-header');
    
    if (bibtexData[paperKey]) {
        // Update content
        subtitle.innerHTML = `Here is the BibTeX for <strong>${bibtexData[paperKey].title}</strong>:`;
        content.textContent = bibtexData[paperKey].content;
        bibtexHeader.textContent = `${bibtexData[paperKey].title}.bib`;
        
        // Show modal with simple animation
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Trigger animation
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    }
}

function closeBibTeX() {
    const modal = document.getElementById('bibtex-modal');
    
    // Remove show class for exit animation
    modal.classList.remove('show');
    
    // Hide modal after animation completes
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 200);
}

function copyBibTeX() {
    const content = document.getElementById('bibtex-content');
    const copyBtn = document.querySelector('.copy-btn');
    const textToCopy = content.textContent;
    
    // Simple copy function
    if (navigator.clipboard) {
        navigator.clipboard.writeText(textToCopy).then(() => {
            showCopySuccess(copyBtn);
        });
    } else {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showCopySuccess(copyBtn);
    }
}

function showCopySuccess(copyBtn) {
    const originalHTML = copyBtn.innerHTML;
    
    // Simple success feedback
    copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
    copyBtn.classList.add('copied');
    
    setTimeout(() => {
        copyBtn.innerHTML = originalHTML;
        copyBtn.classList.remove('copied');
    }, 2000);
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('bibtex-modal');
    if (event.target === modal) {
        closeBibTeX();
    }
}

// Close modal with escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeBibTeX();
    }
});