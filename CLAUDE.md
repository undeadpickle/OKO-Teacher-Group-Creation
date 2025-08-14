# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a prototype for the OKO Teacher Dashboard's "Group Creation" flow, specifically for setting up collaborative math session groups in the "Let's Talk" feature. The application uses a modular file structure with separate CSS and JavaScript files for maintainability and scalability.

## Commands

Since this is a static HTML prototype, there are no build commands. To view and test the application:

```bash
# Open in browser
open index.html

# Or serve locally for development
python -m http.server 8000  # Then visit http://localhost:8000
```

## Architecture

### Modular File Structure
The prototype uses a clean separation of concerns across multiple files:

```
/
├── index.html (main HTML structure)
├── assets/
│   └── images/
│       └── OKO Core Logotype Dark Green.png (brand logo)
├── css/
│   ├── main.css (dashboard layout & base styles)
│   ├── components.css (reusable UI components)
│   └── modals.css (modal & panel styles)
├── js/
│   ├── main.js (initialization & setup)
│   ├── data.js (mock data & constants)
│   ├── group-management.js (group CRUD operations)
│   ├── standards-panel.js (standards selection logic)
│   └── animations.js (GSAP animation system)
└── CLAUDE.md (documentation)
```

- **HTML Structure**: Clean semantic markup with external CSS/JS references
- **CSS Styling**: Modular stylesheets implementing OKO's design system
- **JavaScript Logic**: Component rendering, state management, and interaction handlers
- **Animation System**: GSAP-powered micro-interactions and smooth transitions
- **Icon System**: Lucide SVG icons for modern, scalable iconography

### Component System (Simulated)
Though built as vanilla HTML/CSS/JS, the code simulates a component architecture:

- **Group Card Component**: Dynamically rendered from `groupsData` array with props like `groupName`, `status`, `grade`, `standardCode`, `duration`
- **Side Panel Component**: Modal for standard selection with search, filters, and preview functionality
- **Create Group Modal Component**: Hybrid template/custom group creation with curriculum-aligned templates
- **Data Layer**: Mock data structures (`groupsData`, `standardsData`, `recentlyUsedStandards`, `groupTemplates`) that simulate API responses

### Key Data Structures
```javascript
// Group object structure (Updated)
{
  id: number,
  name: string,
  standard: string, // e.g., '6.SP.B.5c'
  grade: number, // 5, 6, or 7
  domain: string, // 'SP', 'RP', 'EE', etc.
  cluster: string,
  status: "ready" | "notSet" | "needsReview",
  studentCount: number,
  maxStudents: 5,
  sessionLength: { min: number, max: number },
  questionCount: number,
  studentCode: string, // e.g., 'M2YJY'
  url: string // Generated student URL
}

// Standard object structure  
{
  standardCode: string,
  standardName: string,
  difficulty: "justRight" | "tooEasy" | "tooHard",
  numQuestions: number,
  prerequisites: Array<{code: string, name: string}>,
  previewProblems: Array<{questionText: string, type: string, choices?: string[]}>
}

// Group template structure
{
  id: string,
  name: string,
  grade: string,
  standardCode: string,
  standardName: string,
  duration: number,
  icon: string,
  description: string
}
```

### State Management
- Global variables track current selection state (`currentSelectedStandardId`, `selectedTemplate`, `selectedStandard`)
- DOM manipulation for dynamic rendering (no framework)
- Event-driven updates through onclick handlers and form interactions
- Modal state management for multiple overlapping modals (create group, standard selection, questions view)
- Modular JavaScript with clear separation between data layer, UI components, and business logic

## OKO Design System

The prototype strictly follows OKO's visual design system:

### Color Palette
- Foundational Green: `#0A4B3E` (primary buttons, links, focus states)
- Warm White: `#FFFDF5` (main background)
- Light Green: `#E8F2F0` (hover states, ready status backgrounds)
- Character Carrot: `#FF6B35` (needs review status, alerts)
- Turbo Tangerine: `#FF9800` (warning states)
- Neutral Gray: `#4A4A4A` (body text), `#B0B0B0` (not set status)

### Typography
- Font family: Inter (Regular 400, SemiBold 600, Bold 700)
- Headings: 18-24px Bold
- Body: 14-16px Regular
- Buttons: 14px SemiBold, uppercase

### Layout Specifications
- Responsive grid: Auto-fill columns based on 320px minimum card width
- Card dimensions: 320px min width, responsive max width
- Spacing: 24px horizontal gaps, 64px vertical gaps, 24px card padding
- Border radius: 16px cards, 6px buttons/segmented controls, 8px containers

## Key Interaction Patterns

### Group Card States
- **Empty State**: No grade/standard selected, Update button disabled, "Not Set" status
- **Populated State**: All fields configured, Update button enabled, "Ready" status  
- **Loading State**: Spinner replaces Update button text during simulated API calls

### Standards Modal Workflow
1. Opens via "Edit Group" button on group cards
2. Enhanced modal with 90% viewport height for better content visibility
3. Left panel: semantic search, filter chips, and grade/domain browsing tree
4. Right panel: selected standard details, prerequisites, preview problems
5. Selection updates the originating group card and closes modal

### Group Creation Workflow
1. Click "+ Create Group" button in dashboard header
2. Modal opens showing curriculum-aligned template gallery (primary path)
3. Select template for instant creation OR click "Create Custom Group" (secondary path)
4. Custom form allows manual group configuration with validation
5. Both paths integrate seamlessly with existing group grid and standard selection flow

### Accessibility Features
- Full keyboard navigation with proper tab order
- Focus trapping in modal dialogs
- Screen reader labels and ARIA attributes
- Escape key closes modals (prioritized: create group → questions → standard selection)
- Enter key selection for interactive elements
- WCAG AA contrast compliance

## Features Implemented

### Core Functionality
- **Group Management**: Create, update, and manage collaborative math session groups
- **Standard Selection**: Dual-method selection (semantic search + hierarchical browsing)
- **Template System**: 6 curriculum-aligned templates for quick group creation
- **Custom Creation**: Flexible form-based group creation with validation
- **Prerequisite Navigation**: Breadcrumb system for exploring building block standards
- **Question Preview**: Full question sets with multiple choice and open response types
- **Example Questions Modal**: Carousel-based modal showing all 3 questions per standard with correct answer highlighting
- **CCSS Badge System**: Orange pill badges showing Common Core State Standards identifiers in top-right corner of each card
- **Enhanced Tooltip System**: Chat bubble tooltips with proper positioning and contextual help
- **Session Length Controls**: Segmented control interface with accessibility features and keyboard navigation

### Advanced UX Features
- **Standards Tree**: Expandable hierarchy for browsing by grade/domain/cluster
- **Semantic Search**: Natural language search with filter chips
- **Substandards Handling**: Official vs unofficial substandards with visual badges
- **Difficulty Assessment**: "Just right", "Too easy", "Too hard" indicators with explanatory tooltips
- **Readiness Guidance**: Contextual help text for appropriate standard selection
- **Brand Integration**: Official OKO logo properly integrated in sidebar
- **Confetti Animation**: Fun celebratory burst animation on successful copy actions with colorful particles, gravity physics, and random shapes (circles, squares, triangles, stars)
- **Diverse Group Representation**: Realistic 6th grade classroom with above/below grade level content, varied group sizes (2-5 students), and different time allocations
- **Interactive Tooltips**: Chat bubble-style tooltips with dark green background (#002E19), rounded corners, and animated tails for student names and session information
- **Sample Question Preview**: Outlined pill button on each group card that shows a sample question in a tooltip without entering edit mode

## Development Notes

### File Structure Guidelines
- **CSS Files**: Each file has a specific purpose:
  - `main.css`: Dashboard layout, sidebar, stats, responsive grid (220+ lines)
  - `components.css`: Reusable UI components, buttons, cards, segmented controls (700+ lines)  
  - `modals.css`: All modal and panel styles (509 lines)
- **JavaScript Files**: Clean separation of concerns:
  - `main.js`: Initialization and event listener setup (11 lines)
  - `data.js`: Mock data structures and constants (137 lines)
  - `group-management.js`: Group CRUD operations, segmented controls, and modal logic (480+ lines)
  - `standards-panel.js`: Standards selection, search, and navigation (243 lines)
  - `animations.js`: GSAP-powered animation system for micro-interactions (325 lines)

### When extending this prototype:
- Maintain the OKO brand color system (Foundational Green as primary, Warm White background)
- Preserve accessibility features (ARIA labels, keyboard navigation)
- Follow the established data structure patterns for consistency
- Add new CSS to the appropriate file (main, components, or modals)
- Add new JavaScript functions to the appropriate module
- The responsive breakpoints are: 1024px (desktop), 768px (tablet), 480px (mobile)
- Status transitions follow: notSet → ready, or ready ↔ needsReview
- Use Character Carrot (#FF6B35) for error/warning states, not red
- Template data can be extended by adding entries to `groupTemplates` in `data.js`
- Modal z-index stacking: example questions (1400) > standard selection (1300) > create group (1200) > questions (1100)
- Store image assets in `/assets/images/` directory
- Difficulty badges use regular case text (not uppercase)
- Tooltips support multi-line wrapping with max-width: 350px (400px for sample question tooltips)
- All icons use Lucide SVG system with `<i data-lucide="icon-name"></i>` syntax
- Animation timing: 0.1s hover in, 0.15s hover out for optimal responsiveness
- Use `gsap.to()` and `gsap.set()` for all animations with "power2.out" easing
- Animation durations: hover (0.1-0.15s), modals (0.3-0.4s), micro-interactions (0.06-0.12s)
- Icons are automatically sized via CSS classes targeting `svg[data-lucide]` elements

### Recent Updates (Latest)
- **Example Questions Modal**: Implemented full carousel modal for viewing all questions associated with each group's standard
  - Modal triggered by "View All Questions" button on group cards
  - Carousel displays 3 questions per standard with fade transitions between questions
  - Navigation via purple circular buttons positioned inside modal (20px from edges)
  - Questions show "Problem X of 3" format for clear progression tracking
  - Multiple choice answers with correct answer highlighted in green (#e8f5e8 background, #4caf50 border)
  - Keyboard navigation: Arrow keys for prev/next, Escape to close
  - Click outside modal to close functionality
  - Data structure: Each standard has 3 example questions in `exampleQuestions` object in data.js
  - Modal styling: 900px width, 100px horizontal padding for button clearance
  - Z-index: 1400 (highest in modal stack)
- **Session Length UI Redesign**: Replaced slider component with segmented control for session length selection (10-15min, 15-20min, 20-25min) to improve user experience with clear discrete options, single-click selection, and better accessibility compliance
- **Improved Accessibility**: Implemented proper ARIA radiogroup pattern for session length controls with keyboard navigation (arrow keys, home/end), roving tabindex, and screen reader support
- **Enhanced Visual Feedback**: Added smooth animations, hover effects, and selection states to segmented control with purple theming (#605dec) to match overall design system
- **Mobile Optimization**: Optimized session length controls for touch devices with larger targets and haptic feedback on mobile platforms
- **Standards Modal Enhancement**: Increased modal height to 90vh and removed "Recently Used" section for better content visibility and space optimization
- **Sample Question Preview**: Added outlined pill button on group cards showing sample questions via tooltip - uses existing tooltip system with 400px max-width for question content
- **CCSS Badge Repositioning**: Adjusted orange badge positioning to top-right corner edge (top: -2px, right: -2px) for exact Figma Container design alignment
- **Card Layout Optimization**: Implemented bottom-alignment for student login code sections using flexbox to ensure consistent card layout across varying content heights and improved responsive grid with 24px horizontal gaps and 64px vertical spacing
- **Question Generation System**: Added domain-specific sample question generation (SP, NF, MD, RP, EE, G domains) with both multiple choice and open response question types
- **Figma Integration**: Implemented exact Figma Container design for group cards with purple top border (#605dec) and proper spacing
- **CCSS Badge System**: Added orange pill badges (#f7622b) in top-right corners showing Common Core identifiers (6.SP.B.5c, etc.)
- **Chat Bubble Tooltips**: Enhanced tooltip system with dark green backgrounds, rounded corners, and animated connection tails
- **Confetti Celebrations**: Added multi-colored confetti burst animation with gravity physics and random shapes for copy success feedback
- **Diverse Group Data**: Implemented realistic 6th grade classroom scenarios with above/below grade level groups and varied student counts
- **Interactive Animations**: Expandable "Show More" functionality for standard descriptions with smooth GSAP transitions
- **Student Name Tooltips**: Added realistic student name assignments with diverse representation for each group
- **Copy Button Enhancements**: Updated styling with purple hover states (#d3d3f8) and comprehensive success animations

### Previous Updates
- **Animation System**: Implemented GSAP-powered micro-interactions and smooth transitions
- **Icon System**: Replaced all emojis/Unicode icons with Lucide SVG icon set with domain-specific icons
- **Modal Animations**: Enhanced modal open/close with fade and scale effects
- **Hover States**: Optimized card and button hover animations for responsiveness
- **Dropdown Animations**: Added smooth scale and fade transitions for dropdown menus
- **Performance**: Optimized animation timing and easing curves for 60fps performance