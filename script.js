document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offset = 70;
                const targetPosition = targetSection.offsetTop - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Throttled active section highlighting
    let ticking = false;
    function updateActiveSection() {
        const sections = document.querySelectorAll('.section');
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href') === `#${sectionId}`) {
                        item.classList.add('active');
                    }
                });
            }
        });
        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateActiveSection);
            ticking = true;
        }
    }

    window.addEventListener('scroll', requestTick);
    updateActiveSection();

    // Add hover effect to publication links
    const pubLinks = document.querySelectorAll('.link-button');
    pubLinks.forEach(link => {
        if (link.getAttribute('href') === '#') {
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