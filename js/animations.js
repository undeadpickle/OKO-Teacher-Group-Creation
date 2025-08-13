// OKO Teacher Dashboard - GSAP Animations

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Wait for GSAP to load
    if (typeof gsap !== 'undefined') {
        initializeAnimations();
    } else {
        console.warn('GSAP not loaded, skipping animations');
    }
});

function initializeAnimations() {
    // Add hover animations to group cards
    setupGroupCardAnimations();
    
    // Add hover animations to buttons
    setupButtonAnimations();
    
    // Add animations to template cards
    setupTemplateAnimations();
    
    // Override modal animations
    setupModalAnimations();
    
    // Add dropdown animations
    setupDropdownAnimations();
    
    // Add subtle nav animations
    setupNavAnimations();
    
    // Initialize rotating placeholder text
    setupRotatingPlaceholder();
}

// Group card hover animations
function setupGroupCardAnimations() {
    const groupCards = document.querySelectorAll('.group-card');
    
    groupCards.forEach(card => {
        // Set initial state
        gsap.set(card, {
            scale: 1,
            y: 0,
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
        });
        
        // Hover in
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                scale: 1.02,
                y: -4,
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                duration: 0.1,
                ease: "power2.out"
            });
        });
        
        // Hover out
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                scale: 1,
                y: 0,
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                duration: 0.15,
                ease: "power2.out"
            });
        });
    });
}

// Button hover animations
function setupButtonAnimations() {
    const buttons = document.querySelectorAll('.btn-create, .btn-action, .split-button-main, .split-button-dropdown');
    
    buttons.forEach(button => {
        // Set initial state
        gsap.set(button, { scale: 1 });
        
        // Hover in
        button.addEventListener('mouseenter', () => {
            gsap.to(button, {
                scale: 1.05,
                duration: 0.1,
                ease: "power2.out"
            });
        });
        
        // Hover out
        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                scale: 1,
                duration: 0.15,
                ease: "power2.out"
            });
        });
        
        // Click animation
        button.addEventListener('mousedown', () => {
            gsap.to(button, {
                scale: 0.98,
                duration: 0.1,
                ease: "power2.out"
            });
        });
        
        button.addEventListener('mouseup', () => {
            gsap.to(button, {
                scale: 1.05,
                duration: 0.1,
                ease: "power2.out"
            });
        });
    });
}

// Template card animations
function setupTemplateAnimations() {
    const templateCards = document.querySelectorAll('.template-card');
    
    templateCards.forEach(card => {
        // Set initial state
        gsap.set(card, {
            scale: 1,
            y: 0
        });
        
        // Hover in
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                scale: 1.03,
                y: -2,
                duration: 0.12,
                ease: "power2.out"
            });
        });
        
        // Hover out
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                scale: 1,
                y: 0,
                duration: 0.18,
                ease: "power2.out"
            });
        });
    });
}

// Modal animations
function setupModalAnimations() {
    const modalOverlay = document.getElementById('createGroupModal');
    const modal = modalOverlay?.querySelector('.modal');
    
    if (!modalOverlay || !modal) return;
    
    // Set initial states
    gsap.set(modalOverlay, { opacity: 0 });
    gsap.set(modal, { 
        scale: 0.9,
        y: -20,
        opacity: 0
    });
    
    // Override the original modal open/close functions
    window.originalOpenCreateGroupModal = window.openCreateGroupModal;
    window.originalCloseCreateGroupModal = window.closeCreateGroupModal;
    
    window.openCreateGroupModal = function() {
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Animate in
        gsap.to(modalOverlay, {
            opacity: 1,
            duration: 0.3,
            ease: "power2.out"
        });
        
        gsap.to(modal, {
            scale: 1,
            y: 0,
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
            delay: 0.1
        });
    };
    
    window.closeCreateGroupModal = function() {
        // Animate out
        gsap.to(modal, {
            scale: 0.95,
            y: -10,
            opacity: 0,
            duration: 0.25,
            ease: "power2.out"
        });
        
        gsap.to(modalOverlay, {
            opacity: 0,
            duration: 0.3,
            ease: "power2.out",
            delay: 0.1,
            onComplete: () => {
                modalOverlay.classList.remove('active');
                document.body.style.overflow = '';
                if (window.originalCloseCreateGroupModal) {
                    // Call reset function instead of full close
                    resetCreateGroupForm();
                }
            }
        });
    };
}

// Dropdown animations
function setupDropdownAnimations() {
    const dropdownMenu = document.getElementById('createGroupMenu');
    
    if (!dropdownMenu) return;
    
    // Set initial state
    gsap.set(dropdownMenu, {
        opacity: 0,
        scale: 0.95,
        y: -10
    });
    
    // Override dropdown functions
    window.originalOpenSplitDropdown = window.openSplitDropdown;
    window.originalCloseSplitDropdown = window.closeSplitDropdown;
    
    window.openSplitDropdown = function() {
        const dropdownButton = document.getElementById('createGroupDropdown');
        
        dropdownButton?.classList.add('active');
        dropdownMenu.classList.add('active');
        
        gsap.to(dropdownMenu, {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.2,
            ease: "power2.out"
        });
    };
    
    window.closeSplitDropdown = function() {
        gsap.to(dropdownMenu, {
            opacity: 0,
            scale: 0.95,
            y: -5,
            duration: 0.15,
            ease: "power2.out",
            onComplete: () => {
                const dropdownButton = document.getElementById('createGroupDropdown');
                dropdownButton?.classList.remove('active');
                dropdownMenu.classList.remove('active');
            }
        });
    };
}

// Navigation hover animations
function setupNavAnimations() {
    const navItems = document.querySelectorAll('.nav-item:not(.active)');
    
    navItems.forEach(item => {
        // Set initial state
        gsap.set(item, { x: 0 });
        
        // Hover in
        item.addEventListener('mouseenter', () => {
            gsap.to(item, {
                x: 4,
                duration: 0.12,
                ease: "power2.out"
            });
        });
        
        // Hover out
        item.addEventListener('mouseleave', () => {
            gsap.to(item, {
                x: 0,
                duration: 0.15,
                ease: "power2.out"
            });
        });
    });
}

// Utility function to animate new group cards when they're created
function animateNewGroupCard(cardElement) {
    gsap.set(cardElement, {
        opacity: 0,
        scale: 0.8,
        y: 20
    });
    
    gsap.to(cardElement, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out"
    });
}

// Enhanced copy button feedback animation
function animateCopyFeedback(button) {
    // Scale bounce effect
    gsap.to(button, {
        scale: 0.95,
        duration: 0.1,
        ease: "power2.out",
        onComplete: () => {
            gsap.to(button, {
                scale: 1.05,
                duration: 0.15,
                ease: "power2.out",
                onComplete: () => {
                    gsap.to(button, {
                        scale: 1,
                        duration: 0.1,
                        ease: "power2.out"
                    });
                }
            });
        }
    });
    
    // Gentle pulse effect for success state
    if (button.classList.contains('copied')) {
        gsap.fromTo(button, 
            { 
                boxShadow: "0 0 0 rgba(76, 175, 80, 0)" 
            },
            {
                boxShadow: "0 0 10px rgba(76, 175, 80, 0.3)",
                duration: 0.3,
                ease: "power2.out",
                onComplete: () => {
                    gsap.to(button, {
                        boxShadow: "0 0 0 rgba(76, 175, 80, 0)",
                        duration: 0.5,
                        ease: "power2.out"
                    });
                }
            }
        );
    }
}

// Rotating placeholder text for semantic search demonstration
function setupRotatingPlaceholder() {
    const searchInput = document.getElementById('standardSearchInput');
    if (!searchInput) return;
    
    const placeholders = [
        "Search for standards (e.g., 'fractions with unlike denominators')",
        "Try: 'pizza problems with fractions' or 'area word problems'",
        "Search: 'Illustrative Math Unit 5.3' or curriculum terms...",
        "Find: 'multiplying mixed numbers' or 'decimal place value'",
        "Try: 'geometry shapes' or 'ratio word problems'",
        "Search: 'IM Grade 4 Module 2' or natural language..."
    ];
    
    let currentIndex = 0;
    
    function rotatePlaceholder() {
        // Only rotate if the input is empty and not focused
        if (searchInput.value === '' && searchInput !== document.activeElement) {
            currentIndex = (currentIndex + 1) % placeholders.length;
            searchInput.placeholder = placeholders[currentIndex];
        }
    }
    
    // Rotate every 4 seconds
    setInterval(rotatePlaceholder, 4000);
    
    // Reset to first placeholder when input gets focus
    searchInput.addEventListener('focus', () => {
        if (searchInput.value === '') {
            searchInput.placeholder = placeholders[0];
        }
    });
}

// Confetti burst animation for copy success
function createConfettiBurst(button) {
    if (!button || typeof gsap === 'undefined') return;
    
    const buttonRect = button.getBoundingClientRect();
    const centerX = buttonRect.left + buttonRect.width / 2;
    const centerY = buttonRect.top + buttonRect.height / 2;
    
    // Create confetti container
    const confettiContainer = document.createElement('div');
    confettiContainer.style.position = 'fixed';
    confettiContainer.style.top = '0';
    confettiContainer.style.left = '0';
    confettiContainer.style.width = '100%';
    confettiContainer.style.height = '100%';
    confettiContainer.style.pointerEvents = 'none';
    confettiContainer.style.zIndex = '9999';
    document.body.appendChild(confettiContainer);
    
    // Bright and bold confetti colors for fun celebration
    const colors = [
        '#FF6B6B', // Bright Red
        '#4ECDC4', // Turquoise
        '#45B7D1', // Bright Blue  
        '#96CEB4', // Mint Green
        '#FFEAA7', // Sunny Yellow
        '#DDA0DD', // Plum Purple
        '#FFB347', // Peach Orange
        '#87CEEB', // Sky Blue
        '#98FB98', // Pale Green
        '#F0E68C'  // Khaki Yellow
    ];
    
    // Create confetti particles
    const particleCount = 15;
    const particles = [];
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '8px';
        particle.style.height = '8px';
        particle.style.left = centerX + 'px';
        particle.style.top = centerY + 'px';
        
        // Random color
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // Random shape
        const shapes = ['circle', 'square', 'triangle', 'star'];
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        
        // Apply shape-specific styling
        switch(shape) {
            case 'circle':
                particle.style.backgroundColor = color;
                particle.style.borderRadius = '50%';
                break;
            case 'square':
                particle.style.backgroundColor = color;
                particle.style.borderRadius = '0';
                break;
            case 'triangle':
                particle.style.width = '0';
                particle.style.height = '0';
                particle.style.borderLeft = '4px solid transparent';
                particle.style.borderRight = '4px solid transparent';
                particle.style.borderBottom = `8px solid ${color}`;
                particle.style.borderRadius = '0';
                break;
            case 'star':
                particle.style.backgroundColor = color;
                particle.style.clipPath = 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)';
                particle.style.borderRadius = '0';
                break;
        }
        
        confettiContainer.appendChild(particle);
        particles.push(particle);
        
        // Random direction and distance for initial burst
        const angle = (Math.PI * 2 * i) / particleCount;
        const velocity = 40 + Math.random() * 40; // Slightly slower initial burst
        const burstX = centerX + Math.cos(angle) * velocity;
        const burstY = centerY + Math.sin(angle) * velocity;
        
        // Add gravity effect - particles fall down after initial burst
        const gravityY = burstY + 100 + Math.random() * 150; // Fall down with some variation
        
        // Create timeline for more complex animation
        const tl = gsap.timeline();
        
        // Random rotation speeds for each particle
        const initialRotation = Math.random() * 360; // Random starting rotation
        const rotationSpeed = (Math.random() - 0.5) * 1440; // Random rotation speed (-720° to +720°)
        
        // Set initial rotation
        gsap.set(particle, { rotation: initialRotation });
        
        // Initial burst (faster, outward) with continuous rotation
        tl.to(particle, {
            x: burstX - centerX,
            y: burstY - centerY,
            rotation: `+=${rotationSpeed * 0.25}`, // Rotate during burst
            duration: 0.4,
            ease: "power2.out",
            delay: Math.random() * 0.15
        })
        // Then gravity takes over (slower fall with fade) with continued rotation
        .to(particle, {
            y: gravityY - centerY,
            rotation: `+=${rotationSpeed * 0.75}`, // Continue rotating during fall
            scale: 0,
            opacity: 0,
            duration: 1.2, // Longer fade out
            ease: "power1.in", // Gravity-like acceleration
        }, "-=0.1"); // Start falling slightly before burst ends
    }
    
    // Clean up after animation (longer timeout for extended animation)
    setTimeout(() => {
        if (confettiContainer.parentNode) {
            confettiContainer.parentNode.removeChild(confettiContainer);
        }
    }, 2000);
}

// Export for use in other files
window.animateNewGroupCard = animateNewGroupCard;
window.animateCopyFeedback = animateCopyFeedback;
window.createConfettiBurst = createConfettiBurst;