# OKO Teacher Dashboard - Group Creation Prototype

A prototype for the OKO Teacher Dashboard's "Group Creation" flow, specifically for setting up collaborative math session groups in the "Let's Talk" feature.

## Features

- **Group Management**: Create, update, and manage collaborative math session groups
- **Standards Selection**: Dual-method selection (semantic search + hierarchical browsing)
- **Template System**: 6 curriculum-aligned templates for quick group creation
- **Custom Creation**: Flexible form-based group creation with validation
- **Prerequisite Navigation**: Breadcrumb system for exploring building block standards
- **Question Preview**: Full question sets with multiple choice and open response types
- **Tooltip System**: Contextual help tooltips for difficulty badges and UI elements
- **Brand Integration**: Official OKO logo properly integrated in sidebar
- **Smooth Animations**: GSAP-powered hover states, modal transitions, and micro-interactions
- **Modern Icons**: Lucide icon set for consistent, scalable iconography

## Getting Started

This is a static HTML prototype with no build process required.

### Viewing the Application

```bash
# Open directly in browser
open index.html

# Or serve locally for development
python -m http.server 8000
# Then visit http://localhost:8000
```

## Architecture

### File Structure
```
/
├── index.html                  # Main HTML structure
├── assets/
│   └── images/
│       └── OKO Core Logotype Dark Green.png
├── css/
│   ├── main.css               # Dashboard layout & base styles
│   ├── components.css         # Reusable UI components
│   └── modals.css             # Modal & panel styles
├── js/
│   ├── main.js                # Initialization & setup
│   ├── data.js                # Mock data & constants
│   ├── group-management.js    # Group CRUD operations
│   ├── standards-panel.js     # Standards selection logic
│   └── animations.js          # GSAP animation system
└── CLAUDE.md                  # Development documentation
```

### Design System

The prototype follows OKO's visual design system:

- **Primary Color**: Foundational Green `#1a5f3f`
- **Background**: Warm White `#f9f6f1`
- **Typography**: Inter font family (Regular 400, SemiBold 600, Bold 700)
- **Responsive**: Mobile-first design with breakpoints at 480px, 768px, 1024px

## Key Interactions

1. **Group Creation**: Click "+ Create Group" → Select template or create custom
2. **Standards Selection**: Click standard selector → Search or browse hierarchy
3. **Question Preview**: Click preview icon to see sample problems
4. **Tooltips**: Hover over difficulty badges and other UI elements for help

## Technology Stack

- **HTML5**: Semantic markup structure
- **CSS3**: Modern flexbox/grid layouts, custom properties
- **Vanilla JavaScript**: ES6+ features, modular architecture
- **GSAP**: High-performance animations and micro-interactions
- **Lucide Icons**: Modern, consistent SVG icon system
- **Animate.css**: CSS-based animation utilities
- **No Framework**: Lightweight, minimal-dependency implementation

## Development Notes

- Modular CSS architecture with clear separation of concerns
- Component-based JavaScript with simulated state management  
- Accessibility features including keyboard navigation and screen reader support
- Mock data structures simulate real API responses
- Responsive design tested across desktop, tablet, and mobile viewports
- Performant GSAP animations with optimized timing and easing curves
- Scalable SVG icons that adapt to different sizes and contexts
- Smooth micro-interactions enhance user experience without being distracting

## Browser Support

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+
