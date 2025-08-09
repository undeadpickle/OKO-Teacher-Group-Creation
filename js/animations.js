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

// Export for use in other files
window.animateNewGroupCard = animateNewGroupCard;
window.animateCopyFeedback = animateCopyFeedback;