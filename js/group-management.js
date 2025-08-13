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
}

// Create individual group card HTML - Figma Container Design
function createGroupCard(group) {
    const card = document.createElement('div');
    const isNotSet = group.status === 'notSet';
    
    card.className = 'group-card';
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
    const sessionTime = group.sessionLength ? `${group.sessionLength.min}-${group.sessionLength.max} MIN` : '20-25 MIN';
    const studentUrl = group.url || `https://app.okolabs.ai?code=${studentCode}`;
    
    // Format description with appropriate prefix
    const descriptionPrefix = getDescriptionPrefix(standardData);
    const formattedDescription = descriptionPrefix ? `${descriptionPrefix} ${description}` : description;
    
    card.innerHTML = `
        <div class="ccss-badge tooltip" data-tooltip="${getCCSSTooltipText(group.standard || '6.SP.B.5c')}">${group.standard || '6.SP.B.5c'}</div>
        <div class="group-header">
            <div class="grade-label">GRADE ${grade}</div>
            <div class="standard-header">
                <div class="standard-icon">
                    <i data-lucide="${domainIcon}"></i>
                </div>
                <div class="standard-title">${domainName}</div>
            </div>
        </div>
        
        <div class="standard-cluster">
            <div class="cluster-title">${clusterName}</div>
            <div class="cluster-description">
                <div class="cluster-desc-text" id="desc-${group.id}">
                    <span class="desc-content">${formattedDescription}</span>
                    ${standardData && description.includes('...') ? `<a href="#" class="show-more-link" id="show-more-${group.id}" onclick="toggleStandardDescription(${group.id}, '${group.standard}'); return false;">Show More</a>` : ''}
                </div>
            </div>
        </div>
        
        <div class="student-code-section">
            <div class="student-code-header">
                <div class="code-label">STUDENT LOGIN CODE</div>
                <div class="group-code">${studentCode}</div>
            </div>
            <button class="copy-code-btn" onclick="copyGroupCode('${studentCode}', this)">
                <div class="copy-icon">
                    <i data-lucide="copy"></i>
                </div>
                <span class="copy-text">Copy Code</span>
            </button>
            <div class="student-url">${studentUrl}</div>
        </div>
        
        <div class="group-stats">
            <div class="stat-item tooltip" data-tooltip="${getStudentNamesTooltip(group.id, studentCount)}">
                <div class="stat-icon">
                    <i data-lucide="users"></i>
                </div>
                <div class="stat-text">${studentCount} STUDENTS</div>
            </div>
            <div class="stat-item tooltip" data-tooltip="Group session times can vary depending on the subject, student engagement, and discussion depth. This is a rough time estimate.">
                <div class="stat-icon">
                    <i data-lucide="clock"></i>
                </div>
                <div class="stat-text">${sessionTime}</div>
            </div>
        </div>
        
        <button class="edit-group-btn" onclick="editGroup(${group.id})">
            <span class="edit-btn-text">Edit Group</span>
        </button>
    `;
    
    return card;
}

// Remove old helper functions - now using new Figma design

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
        <span class="copy-text">Copied!</span>
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
            <span class="copy-text">Copy Code</span>
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
        <span class="copy-text">Copy Failed</span>
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
            <span class="copy-text">Copy Code</span>
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

// Helper function to get truncated standard description
function getStandardDescription(standardData) {
    if (!standardData.description) return '';
    
    const description = standardData.description;
    
    // Handle specific formatting for different standards
    if (description.includes('Part c:')) {
        const partC = description.split('Part c:')[1];
        if (partC) {
            const truncated = partC.trim().substring(0, 50);
            return truncated + (partC.trim().length > 50 ? '...' : '');
        }
    }
    
    // For other descriptions, just truncate at a reasonable length
    if (description.length > 60) {
        return description.substring(0, 60) + '...';
    }
    
    return description;
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

// Helper function to get description prefix
function getDescriptionPrefix(standardData) {
    if (!standardData) return '';
    
    // Only add "Part c:" prefix for the SP standard
    if (standardData.code === '6.SP.B.5c') {
        return 'Part c:';
    }
    
    return '';
}

// Helper function to generate student names tooltip
function getStudentNamesTooltip(groupId, studentCount) {
    if (studentCount === 0) {
        return 'No students assigned yet';
    }
    
    // Pool of student names to randomly select from
    const studentNames = [
        'Emma Rodriguez', 'Liam Chen', 'Sophia Johnson', 'Noah Patel', 'Isabella Smith',
        'Mason Williams', 'Ava Garcia', 'Lucas Brown', 'Mia Davis', 'Ethan Martinez',
        'Charlotte Wilson', 'Alexander Lee', 'Amelia Taylor', 'Benjamin Anderson', 'Harper Thompson',
        'Sebastian Moore', 'Evelyn Jackson', 'Oliver White', 'Abigail Harris', 'Elijah Clark',
        'Emily Lewis', 'James Robinson', 'Elizabeth Walker', 'William Hall', 'Sofia Allen'
    ];
    
    // Create consistent selection based on group ID to avoid changing names on re-render
    const seedNames = [];
    const baseIndex = (groupId - 1) * 5; // Different starting point for each group
    
    for (let i = 0; i < studentCount; i++) {
        const nameIndex = (baseIndex + i) % studentNames.length;
        seedNames.push(studentNames[nameIndex]);
    }
    
    if (studentCount === 1) {
        return `Student: ${seedNames[0]}`;
    } else {
        return `Students: ${seedNames.join(', ')}`;
    }
}

// Helper function to generate CCSS badge tooltip text
function getCCSSTooltipText(standardCode) {
    return 'This standard identifier is a unique code that designates the grade, domain, cluster, and specific standard in the Common Core State Standards for precise reference in curriculum and assessments.';
}

// Function to toggle standard description expansion
function toggleStandardDescription(groupId, standardCode) {
    const descElement = document.getElementById(`desc-${groupId}`);
    const showMoreLink = document.getElementById(`show-more-${groupId}`);
    const descContent = descElement.querySelector('.desc-content');
    
    if (!descElement || !showMoreLink || !descContent) return;
    
    const standardData = standardsData[standardCode];
    if (!standardData) return;
    
    // Get full and short descriptions
    const fullDescription = standardData.description;
    const shortDescription = getStandardDescription(standardData);
    const prefix = getDescriptionPrefix(standardData);
    
    // Check if currently expanded (compare with full description)
    const currentText = descContent.textContent;
    const isExpanded = currentText.includes(fullDescription);
    
    if (isExpanded) {
        // Collapse - show short version
        descContent.textContent = shortDescription;
        showMoreLink.textContent = "Show More";
        
        // Add collapse animation
        if (window.gsap) {
            gsap.from(descContent, {
                duration: 0.3,
                height: "auto",
                ease: "power2.out"
            });
        }
    } else {
        // Expand - show full description  
        descContent.textContent = fullDescription;
        showMoreLink.textContent = "Show Less";
        
        // Add expand animation
        if (window.gsap) {
            gsap.from(descContent, {
                duration: 0.3,
                height: 0,
                ease: "power2.out"
            });
        }
    }
}

// Initialize group management on page load
function initializeGroupManagement() {
    renderGroupCards();
}