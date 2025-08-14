// OKO Teacher Dashboard - Group Management Logic

// Current editing group and standard selection state
let currentEditingGroup = null;
let selectedStandard = null;

// Render all group cards on page load
function renderGroupCards() {
    const container = document.getElementById('groupsContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    groupSlots.forEach(group => {
        const card = createGroupCard(group);
        container.appendChild(card);
    });
    
    // Re-initialize Lucide icons
    if (window.lucide) {
        lucide.createIcons();
    }
    
    // Add keyboard support for segmented controls
    addSegmentedControlKeyboardSupport();
}

// Create individual group card HTML - Updated Figma Design
function createGroupCard(group) {
    const card = document.createElement('div');
    const isNotSet = group.status === 'notSet';
    
    card.className = 'group-card-container';
    card.setAttribute('data-group-id', group.id);
    
    // Get standard data if available
    const standardData = group.standard ? standardsData[group.standard] : null;
    const grade = standardData ? standardData.grade : group.grade || 6;
    const domainName = standardData ? getDomainDisplayName(standardData.domain) : getDomainDisplayName(group.domain);
    const clusterName = standardData ? (standardData.cluster || standardData.name) : (group.cluster || 'No standard selected');
    const description = standardData ? getStandardDescription(standardData) : 'Click "Edit Group" to choose a math standard';
    const domainIcon = standardData ? getDomainIcon(standardData.domain) : getDomainIcon(group.domain);
    
    // Use actual group data
    const studentCode = group.studentCode || generateStudentCode();
    const studentCount = group.studentCount || 0;
    const sessionLength = group.sessionLength || { min: 15, max: 20 };
    const studentUrl = group.url || `https://app.okolabs.ai?code=${studentCode}`;
    
    // Generate example question for the standard
    const sampleQuestion = standardData ? generateSampleQuestionForCard(standardData) : getDefaultSampleQuestion();
    
    card.innerHTML = `
        <div class="group-card">
            <div class="ccss-badge">${group.standard || '6.SP.B.5c'}</div>
            
            <div class="top-content">
                <div class="domain-cluster-standard-container">
                    <div class="header-container">
                        <div class="icon-statistics-probability">
                            <i data-lucide="${domainIcon}"></i>
                        </div>
                        <div class="domain-title">Grade ${grade} » ${domainName}</div>
                    </div>
                    <div class="standard-description">${description}</div>
                </div>
                
                <div class="example-question-container">
                    <div class="example-question-content">
                        <div class="example-question-label">Example Question</div>
                        <div class="example-question-text">
                            <span class="question-type-italic">${sampleQuestion.type}: </span>${sampleQuestion.text}
                        </div>
                    </div>
                    <div class="view-all-questions-button" onclick="editGroup(${group.id})">
                        <span>View All Questions</span>
                    </div>
                </div>
            </div>
            
            <div class="bottom-content">
                <div class="session-length-container">
                    <div class="session-length-title">Session Length</div>
                    <div class="session-length-segmented-control" 
                         role="radiogroup" 
                         aria-label="Session length selection"
                         data-group-id="${group.id}">
                        <button class="session-length-option ${sessionLength.min === 10 && sessionLength.max === 15 ? 'active' : ''}"
                                role="radio"
                                aria-checked="${sessionLength.min === 10 && sessionLength.max === 15 ? 'true' : 'false'}"
                                tabindex="${sessionLength.min === 10 && sessionLength.max === 15 ? '0' : '-1'}"
                                aria-describedby="session-length-help-${group.id}"
                                data-min="10" 
                                data-max="15"
                                onclick="selectSessionLength(${group.id}, 10, 15, this)">
                            10-15 Min
                        </button>
                        <button class="session-length-option ${sessionLength.min === 15 && sessionLength.max === 20 ? 'active' : ''}"
                                role="radio"
                                aria-checked="${sessionLength.min === 15 && sessionLength.max === 20 ? 'true' : 'false'}"
                                tabindex="${sessionLength.min === 15 && sessionLength.max === 20 ? '0' : '-1'}"
                                aria-describedby="session-length-help-${group.id}"
                                data-min="15" 
                                data-max="20"
                                onclick="selectSessionLength(${group.id}, 15, 20, this)">
                            15-20 Min
                        </button>
                        <button class="session-length-option ${sessionLength.min === 20 && sessionLength.max === 25 ? 'active' : ''}"
                                role="radio"
                                aria-checked="${sessionLength.min === 20 && sessionLength.max === 25 ? 'true' : 'false'}"
                                tabindex="${sessionLength.min === 20 && sessionLength.max === 25 ? '0' : '-1'}"
                                aria-describedby="session-length-help-${group.id}"
                                data-min="20" 
                                data-max="25"
                                onclick="selectSessionLength(${group.id}, 20, 25, this)">
                            20-25 Min
                        </button>
                    </div>
                    <div id="session-length-help-${group.id}" class="sr-only">
                        Use arrow keys to navigate between session length options, or click to select
                    </div>
                    </div>
                </div>
                
                <div class="cta-actions-container">
                    <button class="edit-group-button" onclick="editGroup(${group.id})">
                        <span>Edit Group</span>
                    </button>
                    <button class="copy-code-button" onclick="copyGroupCode('${studentCode}', this)">
                        <div class="copy-icon">
                            <i data-lucide="copy"></i>
                        </div>
                        <span>Copy Code</span>
                    </button>
                </div>
            </div>
        </div>
    `;
    
    return card;
}

// Helper functions for new Figma design

// Generate sample question for card display
function generateSampleQuestionForCard(standardData) {
    const domain = standardData.domain;
    const standardCode = standardData.code;
    
    // Domain-specific sample questions for 6th grade
    const questionTemplates = {
        'SP': {
            type: 'Multiple Choice',
            text: 'Maya collected data on her classmates\' favorite pizza toppings. If 12 students chose pepperoni and 8 chose cheese, what can Maya conclude about the most popular topping?'
        },
        'RP': {
            type: 'Open Response',
            text: 'A recipe calls for 2 cups of flour for every 3 cups of sugar. If you want to make a larger batch using 8 cups of flour, how much sugar will you need?'
        },
        'EE': {
            type: 'Multiple Choice',
            text: 'Which expression is equivalent to 3(x + 4)?'
        },
        'NS': {
            type: 'Multiple Choice',
            text: 'Which point on the coordinate plane represents the ordered pair (-2, 3)?'
        },
        'G': {
            type: 'Open Response',
            text: 'Find the area of a triangle with a base of 8 feet and a height of 6 feet. Show your work.'
        },
        'NF': {
            type: 'Multiple Choice',
            text: 'Maya ate 2/3 of a pizza and Jake ate 1/4 of the same pizza. How much pizza did they eat altogether?'
        }
    };
    
    return questionTemplates[domain] || questionTemplates['SP'];
}

// Default sample question for cards without standards
function getDefaultSampleQuestion() {
    return {
        type: 'Multiple Choice',
        text: 'Select a math standard to see example questions for this group.'
    };
}

// Calculate slider progress percentage based on session length
function getSliderProgress(sessionLength) {
    const minTime = 10;
    const maxTime = 25;
    const midpoint = (sessionLength.min + sessionLength.max) / 2;
    return ((midpoint - minTime) / (maxTime - minTime)) * 100;
}

// Update a specific group's data and re-render its card
function updateGroup(groupId, updates) {
    const groupIndex = groupSlots.findIndex(g => g.id === groupId);
    if (groupIndex === -1) return;
    
    // Update the group data
    Object.assign(groupSlots[groupIndex], updates);
    
    // Auto-generate name if standard is set
    if (updates.standard) {
        groupSlots[groupIndex].name = generateGroupName(updates.standard);
        groupSlots[groupIndex].url = generateStudentUrl(groupSlots[groupIndex].studentCode);
        groupSlots[groupIndex].status = 'ready';
        
        // Update question count from standards data
        const standardData = standardsData[updates.standard];
        if (standardData) {
            groupSlots[groupIndex].questionCount = standardData.questionCount;
        }
    }
    
    // Re-render the specific card
    const card = document.querySelector(`[data-group-id="${groupId}"]`);
    if (card) {
        const newCard = createGroupCard(groupSlots[groupIndex]);
        card.parentNode.replaceChild(newCard, card);
        
        // Re-initialize Lucide icons
        if (window.lucide) {
            lucide.createIcons();
        }
    }
}


// Copy group code function with enhanced UX
function copyGroupCode(code, buttonElement) {
    // Use the passed button element or fall back to event target
    const button = buttonElement || event.target;
    
    // Disable button during copy process
    button.disabled = true;
    button.classList.add('copying');
    
    // Try clipboard API first (modern browsers)
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(code).then(() => {
            showCopySuccess(button);
        }).catch(() => {
            fallbackCopy(code, button);
        });
    } else {
        // Fallback for older browsers
        fallbackCopy(code, button);
    }
}

// Show copy success feedback for new Figma design
function showCopySuccess(button) {
    button.classList.remove('copying');
    button.classList.add('copied');
    button.innerHTML = `
        <div class="copy-icon">
            <i data-lucide="check"></i>
        </div>
        <span>Copied!</span>
    `;
    
    // Re-initialize icons for the new content
    if (window.lucide) {
        lucide.createIcons();
    }
    
    // Add animation feedback
    if (window.animateCopyFeedback) {
        window.animateCopyFeedback(button);
    }
    
    // Add confetti burst animation
    if (window.createConfettiBurst) {
        window.createConfettiBurst(button);
    }
    
    // Reset after 2 seconds
    setTimeout(() => {
        button.disabled = false;
        button.classList.remove('copied');
        button.innerHTML = `
            <div class="copy-icon">
                <i data-lucide="copy"></i>
            </div>
            <span>Copy Code</span>
        `;
        
        // Re-initialize icons for the new content
        if (window.lucide) {
            lucide.createIcons();
        }
    }, 2000);
}

// Fallback copy method for older browsers
function fallbackCopy(code, button) {
    try {
        // Create temporary textarea
        const textArea = document.createElement('textarea');
        textArea.value = code;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        // Try to copy
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        
        if (successful) {
            showCopySuccess(button);
        } else {
            showCopyError(button);
        }
    } catch (err) {
        showCopyError(button);
    }
}

// Show copy error feedback for new Figma design
function showCopyError(button) {
    button.disabled = false;
    button.classList.remove('copying');
    button.innerHTML = `
        <div class="copy-icon">
            <i data-lucide="x"></i>
        </div>
        <span>Copy Failed</span>
    `;
    
    // Re-initialize icons
    if (window.lucide) {
        lucide.createIcons();
    }
    
    // Reset after 2 seconds
    setTimeout(() => {
        button.innerHTML = `
            <div class="copy-icon">
                <i data-lucide="copy"></i>
            </div>
            <span>Copy Code</span>
        `;
        if (window.lucide) {
            lucide.createIcons();
        }
    }, 2000);
}

// Edit group function - opens standards panel
function editGroup(groupId) {
    currentEditingGroup = groupId;
    
    // Find the group data
    const group = groupSlots.find(g => g.id === groupId);
    if (!group) return;
    
    // Open the standards selection panel (preserves previous selection)
    openStandardsPanel();
}

// Helper function to get display name for domain
function getDomainDisplayName(domain) {
    const domainDisplayNames = {
        'SP': 'Statistics & Probability',
        'G': 'Geometry', 
        'NS': 'The Number System',
        'RP': 'Ratios & Proportional Relationships',
        'EE': 'Expressions & Equations',
        'NF': 'Number & Operations—Fractions',
        'NBT': 'Number & Operations in Base Ten',
        'MD': 'Measurement & Data'
    };
    return domainDisplayNames[domain] || domain;
}

// Helper function to get standard description for new design
function getStandardDescription(standardData) {
    if (!standardData.description) return '';
    return standardData.description;
}

// Helper function to get domain icon
function getDomainIcon(domain) {
    const domainIcons = {
        'SP': 'bar-chart-3',     // Statistics & Probability
        'RP': 'percent',         // Ratios & Proportional Relationships  
        'EE': 'calculator',      // Expressions & Equations
        'NF': 'slice',          // Number & Operations—Fractions
        'NS': 'grid-3x3',       // The Number System
        'G': 'triangle',        // Geometry
        'MD': 'ruler',          // Measurement & Data
        'NBT': 'hash'           // Number & Operations in Base Ten
    };
    return domainIcons[domain] || 'book-open';
}


// Session Length Selection Function
function selectSessionLength(groupId, minTime, maxTime, buttonElement) {
    // Add visual feedback during selection
    buttonElement.classList.add('selecting');
    setTimeout(() => buttonElement.classList.remove('selecting'), 100);
    
    // Update the group data
    const groupIndex = groupSlots.findIndex(g => g.id === groupId);
    if (groupIndex === -1) return;
    
    // Update session length
    groupSlots[groupIndex].sessionLength = { min: minTime, max: maxTime };
    
    // Update all buttons in this segmented control
    const segmentedControl = buttonElement.closest('.session-length-segmented-control');
    const allOptions = segmentedControl.querySelectorAll('.session-length-option');
    
    // Remove active state from all buttons and update roving tabindex
    allOptions.forEach(option => {
        option.classList.remove('active');
        option.setAttribute('aria-checked', 'false');
        option.setAttribute('tabindex', '-1');
    });
    
    // Add active state to selected button
    buttonElement.classList.add('active');
    buttonElement.setAttribute('aria-checked', 'true');
    buttonElement.setAttribute('tabindex', '0');
    
    // Optional: Add haptic feedback for mobile devices
    if ('vibrate' in navigator) {
        navigator.vibrate(10); // Very short vibration
    }
}

// Keyboard navigation for segmented control
function handleSegmentedControlKeydown(event) {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End', 'Space', 'Enter'].includes(event.key)) {
        return;
    }
    
    event.preventDefault();
    
    const currentButton = event.target;
    const segmentedControl = currentButton.closest('.session-length-segmented-control');
    const allOptions = Array.from(segmentedControl.querySelectorAll('.session-length-option'));
    const currentIndex = allOptions.indexOf(currentButton);
    
    let targetIndex = currentIndex;
    
    switch (event.key) {
        case 'ArrowLeft':
            targetIndex = Math.max(0, currentIndex - 1);
            break;
        case 'ArrowRight':
            targetIndex = Math.min(allOptions.length - 1, currentIndex + 1);
            break;
        case 'Home':
            targetIndex = 0;
            break;
        case 'End':
            targetIndex = allOptions.length - 1;
            break;
        case 'Space':
        case 'Enter':
            currentButton.click();
            return;
    }
    
    if (targetIndex !== currentIndex) {
        // Update roving tabindex
        allOptions.forEach(option => option.setAttribute('tabindex', '-1'));
        allOptions[targetIndex].setAttribute('tabindex', '0');
        allOptions[targetIndex].focus();
    }
}

// Add keyboard event listeners to segmented controls after rendering
function addSegmentedControlKeyboardSupport() {
    const segmentedControls = document.querySelectorAll('.session-length-segmented-control');
    segmentedControls.forEach(control => {
        const options = control.querySelectorAll('.session-length-option');
        options.forEach(option => {
            option.addEventListener('keydown', handleSegmentedControlKeydown);
        });
    });
}

// Initialize group management on page load
function initializeGroupManagement() {
    renderGroupCards();
    addSegmentedControlKeyboardSupport();
}