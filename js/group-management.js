// OKO Teacher Dashboard - Group Management Logic

// Modal state management
let selectedTemplate = null;
let selectedStandard = null;

// Open create group modal
function openCreateGroupModal() {
    document.getElementById('createGroupModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close create group modal
function closeCreateGroupModal() {
    document.getElementById('createGroupModal').classList.remove('active');
    document.body.style.overflow = '';
    resetCreateGroupForm();
}

// Reset form state
function resetCreateGroupForm() {
    selectedTemplate = null;
    selectedStandard = null;
    
    // Clear template selections
    document.querySelectorAll('.template-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    // Clear custom form
    document.getElementById('groupNameInput').value = '';
    document.getElementById('gradeLevelSelect').value = '';
    document.getElementById('durationSelect').value = '15';
    
    // Reset standard selector
    document.getElementById('standardPlaceholder').style.display = 'block';
    document.getElementById('standardSelected').style.display = 'none';
    
    // Update form state
    updateCustomFormState();
    updateCreateButton();
}

// Select template
function selectTemplate(templateId) {
    selectedTemplate = templateId;
    
    // Update UI
    document.querySelectorAll('.template-card').forEach(card => {
        card.classList.remove('selected');
    });
    event.target.closest('.template-card').classList.add('selected');
    
    // Disable custom form when template is selected
    updateCustomFormState();
    updateCreateButton();
}

// Update custom form state
function updateCustomFormState() {
    const customForm = document.getElementById('customForm');
    if (selectedTemplate) {
        customForm.classList.remove('active');
    } else {
        customForm.classList.add('active');
    }
}

// Update create button state
function updateCreateButton() {
    const createBtn = document.getElementById('createGroupBtn');
    const groupName = document.getElementById('groupNameInput').value.trim();
    const gradeLevel = document.getElementById('gradeLevelSelect').value;
    
    if (selectedTemplate) {
        createBtn.disabled = false;
        createBtn.textContent = 'Create from Template';
    } else if (groupName && gradeLevel && selectedStandard) {
        createBtn.disabled = false;
        createBtn.textContent = 'Create Custom Group';
    } else {
        createBtn.disabled = true;
        createBtn.textContent = 'Create Group';
    }
}

// Create group function
function createGroup() {
    if (selectedTemplate) {
        createFromTemplate();
    } else {
        createCustomGroup();
    }
}

// Create from template
function createFromTemplate() {
    const template = groupTemplates[selectedTemplate];
    if (template) {
        // Generate a new group code
        const groupCode = generateGroupCode();
        
        // Create new group card and add to Ready section
        addNewGroupCard({
            name: template.name,
            standard: template.standard,
            standardName: template.standardName,
            groupCode: groupCode,
            duration: template.duration,
            status: 'ready'
        });
        
        closeCreateGroupModal();
    }
}

// Create custom group
function createCustomGroup() {
    const groupName = document.getElementById('groupNameInput').value.trim();
    const gradeLevel = document.getElementById('gradeLevelSelect').value;
    const duration = parseInt(document.getElementById('durationSelect').value);
    
    if (groupName && gradeLevel && selectedStandard) {
        const groupCode = generateGroupCode();
        
        addNewGroupCard({
            name: groupName,
            standard: selectedStandard.code,
            standardName: selectedStandard.name,
            groupCode: groupCode,
            duration: duration,
            status: 'ready'
        });
        
        closeCreateGroupModal();
    }
}

// Generate random group code
function generateGroupCode() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let result = '';
    for (let i = 0; i < 5; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

// Add new group card to the ready section
function addNewGroupCard(groupData) {
    const readySection = document.querySelector('.groups-section .groups-grid');
    const newCard = createGroupCard(groupData);
    readySection.appendChild(newCard);
    
    // Update section count
    updateSectionCount('Ready to Start');
}

// Create group card HTML
function createGroupCard(data) {
    const card = document.createElement('div');
    card.className = 'group-card';
    card.innerHTML = `
        <div class="group-status-bar"></div>
        <div class="group-content">
            <div class="group-header">
                <div class="group-name">${data.name}</div>
                <span class="group-badge badge-ready">Ready</span>
            </div>
            
            <div class="standard-info">
                <div class="standard-code">${data.standard}</div>
                <div class="standard-desc">${data.standardName}</div>
            </div>
            
            <div class="group-code-section">
                <div class="code-label">Student Login Code</div>
                <div class="group-code">${data.groupCode}</div>
                <button class="copy-btn" onclick="copyGroupCode('${data.groupCode}')">📋 Copy Code</button>
            </div>
            
            <div class="group-meta">
                <span class="meta-item">
                    <span>👥</span>
                    <span>0/24 joined</span>
                </span>
                <span class="meta-item">
                    <span>⏱️</span>
                    <span>${data.duration} min session</span>
                </span>
            </div>
            
            <div class="group-actions">
                <button class="btn-action" onclick="editGroup(this)">Edit</button>
                <button class="btn-action primary">Start Session</button>
            </div>
        </div>
    `;
    return card;
}

// Update section count
function updateSectionCount(sectionTitle) {
    const sections = document.querySelectorAll('.groups-section');
    sections.forEach(section => {
        const title = section.querySelector('.section-title').textContent;
        if (title === sectionTitle) {
            const countElement = section.querySelector('.section-count');
            const cards = section.querySelectorAll('.group-card').length;
            countElement.textContent = `${cards} group${cards !== 1 ? 's' : ''}`;
        }
    });
}

// Copy group code function
function copyGroupCode(code) {
    navigator.clipboard.writeText(code).then(() => {
        // Show feedback
        event.target.textContent = '✓ Copied!';
        setTimeout(() => {
            event.target.innerHTML = '📋 Copy Code';
        }, 2000);
    });
}

// Edit group placeholder
function editGroup(button) {
    alert('Edit group functionality will be implemented with standard selection!');
}

// Setup group management event listeners
function setupGroupManagement() {
    // Add event listeners to update create button
    document.getElementById('groupNameInput').addEventListener('input', updateCreateButton);
    document.getElementById('gradeLevelSelect').addEventListener('change', updateCreateButton);
    
    // Add click handlers to create group buttons
    document.querySelectorAll('.btn-create').forEach(btn => {
        btn.addEventListener('click', openCreateGroupModal);
    });
    
    // Close modal on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeCreateGroupModal();
        }
    });
    
    // Close modal on overlay click
    document.getElementById('createGroupModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeCreateGroupModal();
        }
    });
}