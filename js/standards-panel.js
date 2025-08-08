// OKO Teacher Dashboard - Standards Panel Logic

// Standards panel state
let currentSelectedStandardId = null;
let currentEditingGroupIndex = null;

// Open standard selection panel
function openStandardSelection() {
    const overlay = document.getElementById('standardsPanel');
    const panel = overlay.querySelector('.standards-panel');
    overlay.classList.add('active');
    panel.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close standards panel
function closeStandardsPanel() {
    const overlay = document.getElementById('standardsPanel');
    const panel = overlay.querySelector('.standards-panel');
    overlay.classList.remove('active');
    panel.classList.remove('active');
    document.body.style.overflow = '';
    resetStandardsPanel();
}

// Reset standards panel state
function resetStandardsPanel() {
    currentSelectedStandardId = null;
    
    // Clear search
    document.getElementById('standardSearchInput').value = '';
    
    // Reset filter chips
    document.querySelectorAll('.filter-chip.active').forEach(chip => {
        chip.classList.remove('active');
    });
    
    // Show tree, hide search results
    document.getElementById('standardsTree').style.display = 'block';
    document.getElementById('searchResults').style.display = 'none';
    
    // Reset right panel to default state
    document.getElementById('standardDetailDefault').style.display = 'flex';
    document.getElementById('standardDetailContent').style.display = 'none';
    
    // Disable select button
    document.getElementById('selectStandardBtn').disabled = true;
    
    // Clear any selected standard items
    document.querySelectorAll('.standard-item.selected').forEach(item => {
        item.classList.remove('selected');
    });
}

// Toggle tree node expansion
function toggleTreeNode(header) {
    const content = header.parentElement.querySelector('.tree-node-content');
    const icon = header.querySelector('.tree-expand-icon');
    
    if (content.classList.contains('expanded')) {
        content.classList.remove('expanded');
        icon.classList.remove('expanded');
    } else {
        content.classList.add('expanded');
        icon.classList.add('expanded');
    }
}

// Select a standard
function selectStandard(standardId) {
    currentSelectedStandardId = standardId;
    const standard = standardsData[standardId];
    
    if (!standard) return;
    
    // Clear previous selections
    document.querySelectorAll('.standard-item.selected').forEach(item => {
        item.classList.remove('selected');
    });
    
    // Highlight selected standard
    document.querySelectorAll('.standard-item').forEach(item => {
        const code = item.querySelector('.standard-code').textContent;
        if (code === standardId) {
            item.classList.add('selected');
        }
    });
    
    // Update right panel
    showStandardDetails(standard);
    
    // Enable select button
    document.getElementById('selectStandardBtn').disabled = false;
}

// Show standard details in right panel
function showStandardDetails(standard) {
    document.getElementById('standardDetailDefault').style.display = 'none';
    document.getElementById('standardDetailContent').style.display = 'block';
    
    // Update standard info
    document.getElementById('detailStandardCode').textContent = standard.code;
    document.getElementById('detailStandardName').textContent = standard.name;
    document.getElementById('detailStandardDesc').textContent = standard.description;
    document.getElementById('detailQuestionCount').textContent = standard.questionCount;
    
    // Update difficulty badge
    const difficultyBadge = document.getElementById('detailDifficulty');
    difficultyBadge.className = `difficulty-badge difficulty-${standard.difficulty} tooltip`;
    
    if (standard.difficulty === 'just-right') {
        difficultyBadge.textContent = 'Just right';
        difficultyBadge.setAttribute('data-tooltip', 'Appropriate challenge level for most students based on grade-level expectations and prerequisite mastery');
    } else if (standard.difficulty === 'too-easy') {
        difficultyBadge.textContent = 'Too easy';
        difficultyBadge.setAttribute('data-tooltip', 'Students likely already mastered this based on prior assessment data - consider a higher standard');
    } else {
        difficultyBadge.textContent = 'Too hard';
        difficultyBadge.setAttribute('data-tooltip', 'May be too challenging based on prerequisite gaps - try building block standards first');
    }
    
    // Show prerequisites if they exist
    const prerequisitesSection = document.getElementById('prerequisitesSection');
    const prerequisitesList = document.getElementById('prerequisitesList');
    
    if (standard.prerequisites && standard.prerequisites.length > 0) {
        prerequisitesSection.style.display = 'block';
        prerequisitesList.innerHTML = '';
        
        standard.prerequisites.forEach(prereqId => {
            const prereq = standardsData[prereqId];
            if (prereq) {
                const prereqDiv = document.createElement('div');
                prereqDiv.className = 'prerequisite-item';
                prereqDiv.onclick = () => selectStandard(prereqId);
                prereqDiv.innerHTML = `
                    <div class="standard-code">${prereq.code}</div>
                    <div class="standard-name">${prereq.name}</div>
                `;
                prerequisitesList.appendChild(prereqDiv);
            }
        });
    } else {
        prerequisitesSection.style.display = 'none';
    }
}

// Toggle filter chips
function toggleFilter(chip, type, value) {
    chip.classList.toggle('active');
    
    // Simple filter implementation - in a real app, this would filter the standards
    const activeFilters = {
        grades: Array.from(document.querySelectorAll('.filter-chip.active')).filter(c => c.textContent.includes('Grade')).map(c => c.textContent.replace('Grade ', '')),
        domains: Array.from(document.querySelectorAll('.filter-chip.active')).filter(c => !c.textContent.includes('Grade')).map(c => c.onclick.toString().match(/'([^']+)'/)[1])
    };
    
    console.log('Active filters:', activeFilters);
}

// Search functionality (basic implementation)
function setupSearch() {
    const searchInput = document.getElementById('standardSearchInput');
    let searchTimeout;
    
    searchInput.addEventListener('input', function(e) {
        const query = e.target.value.trim().toLowerCase();
        
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            if (query.length > 0) {
                performSearch(query);
            } else {
                // Show tree, hide results
                document.getElementById('standardsTree').style.display = 'block';
                document.getElementById('searchResults').style.display = 'none';
            }
        }, 300);
    });
}

// Perform search
function performSearch(query) {
    const results = Object.values(standardsData).filter(standard => {
        return standard.name.toLowerCase().includes(query) ||
               standard.description.toLowerCase().includes(query) ||
               standard.code.toLowerCase().includes(query);
    });
    
    // Show results
    document.getElementById('standardsTree').style.display = 'none';
    document.getElementById('searchResults').style.display = 'block';
    
    // Update results count
    document.getElementById('searchResultsCount').textContent = `${results.length} result${results.length !== 1 ? 's' : ''}`;
    
    // Populate results
    const resultsList = document.getElementById('searchResultsList');
    resultsList.innerHTML = '';
    
    results.forEach(standard => {
        const resultDiv = document.createElement('div');
        resultDiv.className = 'standard-item';
        resultDiv.onclick = () => selectStandard(standard.code);
        resultDiv.innerHTML = `
            <div class="standard-code">${standard.code}</div>
            <div class="standard-name">${standard.name}</div>
            <div class="standard-preview">${standard.description}</div>
        `;
        resultsList.appendChild(resultDiv);
    });
}

// Confirm standard selection
function confirmStandardSelection() {
    const standard = standardsData[currentSelectedStandardId];
    if (!standard) return;
    
    selectedStandard = {
        code: standard.code,
        name: standard.name
    };
    
    // Update the custom form if it was opened from there
    if (document.getElementById('createGroupModal').classList.contains('active')) {
        document.getElementById('standardPlaceholder').style.display = 'none';
        document.getElementById('standardSelected').style.display = 'block';
        document.getElementById('selectedStandardCode').textContent = standard.code;
        document.getElementById('selectedStandardName').textContent = standard.name;
        updateCreateButton();
    }
    
    closeStandardsPanel();
}

// Preview questions placeholder
function previewQuestions() {
    alert('Question preview modal will be implemented in the next phase!');
}

// Setup standards panel event listeners
function setupStandardsPanel() {
    // Setup search functionality
    setupSearch();
    
    // Close standards panel on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && document.getElementById('standardsPanel').classList.contains('active')) {
            closeStandardsPanel();
        }
    });
    
    // Close standards panel on overlay click
    document.getElementById('standardsPanel').addEventListener('click', function(e) {
        if (e.target === this) {
            closeStandardsPanel();
        }
    });
}