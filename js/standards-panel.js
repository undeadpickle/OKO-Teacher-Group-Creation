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
    
    // Hide clear button
    document.getElementById('searchClearBtn').style.display = 'none';
    
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
    
    // Update substandards display
    updateSubstandardsDisplay(standard);
    
    // Update inline questions preview
    updateInlineQuestionsPreview(standard);
    
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
    const clearBtn = document.getElementById('searchClearBtn');
    let searchTimeout;
    
    searchInput.addEventListener('input', function(e) {
        const query = e.target.value.trim().toLowerCase();
        
        // Show/hide clear button
        if (query.length > 0) {
            clearBtn.style.display = 'flex';
        } else {
            clearBtn.style.display = 'none';
        }
        
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

// Clear search input
function clearSearchInput() {
    const searchInput = document.getElementById('standardSearchInput');
    const clearBtn = document.getElementById('searchClearBtn');
    
    searchInput.value = '';
    clearBtn.style.display = 'none';
    
    // Show tree, hide results
    document.getElementById('standardsTree').style.display = 'block';
    document.getElementById('searchResults').style.display = 'none';
    
    // Focus back on input
    searchInput.focus();
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

// Update inline questions preview
function updateInlineQuestionsPreview(standard) {
    const totalQuestions = standard.questionCount || 24;
    document.getElementById('totalQuestionCount').textContent = totalQuestions;
    
    // Generate and display sample questions inline
    const sampleQuestions = generateSampleQuestions(standard).slice(0, 3); // Only show 3
    displayInlineSampleQuestions(sampleQuestions);
}

// Generate sample questions based on standard
function generateSampleQuestions(standard) {
    const questions = [];
    const standardCode = standard.code;
    
    // Different question templates based on standard type
    if (standardCode.includes('NF')) {
        // Fractions questions
        questions.push({
            number: 1,
            type: 'Multiple Choice',
            context: 'Pizza Party Problem',
            text: 'Maya ate 2/3 of a pizza and Jake ate 1/4 of the same pizza. How much pizza did they eat altogether?',
            choices: ['3/7', '11/12', '2/7', '3/12'],
            correct: 1,
            image: null
        });
        
        questions.push({
            number: 2,
            type: 'Multiple Choice',
            text: 'Which fraction is equivalent to 3/4?',
            choices: ['6/8', '4/6', '9/16', '3/8'],
            correct: 0,
            context: null,
            image: null
        });
        
        questions.push({
            number: 3,
            type: 'Open Response',
            text: 'Explain your strategy for adding fractions with different denominators. Use the problem 1/3 + 1/6 as an example.',
            choices: null,
            correct: null,
            context: 'Mathematical Reasoning',
            image: null
        });
    } else if (standardCode.includes('MD')) {
        // Measurement questions
        questions.push({
            number: 1,
            type: 'Multiple Choice',
            context: 'Garden Design',
            text: 'A rectangular garden is 8 feet long and 6 feet wide. What is the area of the garden?',
            choices: ['14 square feet', '28 square feet', '48 square feet', '64 square feet'],
            correct: 2,
            image: null
        });
        
        questions.push({
            number: 2,
            type: 'Multiple Choice',
            text: 'What is the perimeter of a rectangle that is 5 meters long and 3 meters wide?',
            choices: ['8 meters', '15 meters', '16 meters', '30 meters'],
            correct: 2,
            context: null,
            image: null
        });
        
        questions.push({
            number: 3,
            type: 'Open Response',
            text: 'Design a rectangular playground with an area of 24 square meters. What are three different possible dimensions? Show your work.',
            choices: null,
            correct: null,
            context: 'Problem Solving',
            image: null
        });
    } else {
        // Generic math questions
        questions.push({
            number: 1,
            type: 'Multiple Choice',
            text: 'Which of the following best represents the concept in this standard?',
            choices: ['Option A', 'Option B', 'Option C', 'Option D'],
            correct: 1,
            context: null,
            image: null
        });
        
        questions.push({
            number: 2,
            type: 'Multiple Choice',
            text: 'Solve the problem using the strategies from this standard.',
            choices: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
            correct: 2,
            context: 'Problem Solving',
            image: null
        });
        
        questions.push({
            number: 3,
            type: 'Open Response',
            text: 'Explain your thinking and show your work for this problem.',
            choices: null,
            correct: null,
            context: 'Mathematical Reasoning',
            image: null
        });
    }
    
    return questions;
}

// Display sample questions inline in the standards panel
function displayInlineSampleQuestions(questions) {
    const container = document.getElementById('inlineSampleQuestions');
    container.innerHTML = '';
    
    questions.forEach(question => {
        const questionCard = document.createElement('div');
        questionCard.className = 'inline-question-card';
        
        let contextHtml = '';
        if (question.context) {
            contextHtml = `
                <div class="inline-question-context">
                    <div class="inline-question-context-title">
                        <i data-lucide="info" style="width: 12px; height: 12px;"></i>
                        ${question.context}
                    </div>
                </div>
            `;
        }
        
        let choicesHtml = '';
        if (question.choices) {
            choicesHtml = `
                <div class="inline-question-choices">
                    ${question.choices.map((choice, index) => `
                        <div class="inline-question-choice${index === question.correct ? ' correct' : ''}">
                            ${choice}
                        </div>
                    `).join('')}
                </div>
            `;
        } else {
            choicesHtml = `
                <div class="inline-open-response-area">
                    Students write their response here...
                </div>
            `;
        }
        
        questionCard.innerHTML = `
            <div class="inline-question-header">
                <div class="inline-question-number">Question ${question.number}</div>
                <div class="inline-question-type">${question.type}</div>
            </div>
            ${contextHtml}
            <div class="inline-question-text">${question.text}</div>
            ${choicesHtml}
        `;
        
        container.appendChild(questionCard);
    });
    
    // Re-initialize Lucide icons for the new content
    if (window.lucide) {
        lucide.createIcons();
    }
}

// Update substandards display based on selected standard
function updateSubstandardsDisplay(standard) {
    const substandardsList = document.getElementById('substandardsList');
    substandardsList.innerHTML = '';
    
    // Generate mock substandards based on the standard code
    const baseCode = standard.code;
    const substandards = generateMockSubstandards(baseCode);
    
    substandards.forEach(sub => {
        const chipDiv = document.createElement('div');
        chipDiv.className = `substandard-chip ${sub.type}`;
        chipDiv.innerHTML = `
            <span class="substandard-code">${sub.code}</span>
            <span class="substandard-badge">${sub.type === 'official' ? 'Official' : 'Unofficial'}</span>
        `;
        substandardsList.appendChild(chipDiv);
    });
}

// Generate mock substandards for any given standard code
function generateMockSubstandards(standardCode) {
    const substandards = [];
    
    // Generate 2 official substandards (a, b format)
    substandards.push({
        code: `${standardCode}a`,
        type: 'official'
    });
    substandards.push({
        code: `${standardCode}b`,
        type: 'official'
    });
    
    // Generate 2 unofficial substandards (numbered format)
    substandards.push({
        code: `${standardCode}-1`,
        type: 'unofficial'
    });
    substandards.push({
        code: `${standardCode}-2`,
        type: 'unofficial'
    });
    
    return substandards;
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