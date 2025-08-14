# OKO Teacher Dashboard - Group Creation Prototype

A high-fidelity prototype for the OKO Teacher Dashboard's "Group Creation" flow, featuring collaborative math session groups for the "Let's Talk" feature. Built with exact Figma design specifications and enhanced with interactive animations and realistic classroom data.

## ✨ Key Features

### Core Functionality
- **Group Management**: Create, update, and manage collaborative math session groups with diverse content levels
- **Example Questions Modal**: Full carousel modal displaying all 3 questions per standard with correct answer highlighting, navigation controls, and smooth fade transitions
- **CCSS Integration**: Orange pill badges displaying Common Core State Standards identifiers (6.SP.B.5c, 7.EE.A.1, etc.)
- **Standards Selection**: Enhanced modal with semantic search + hierarchical browsing (90% viewport height)
- **Template System**: 6 curriculum-aligned templates for quick group creation
- **Interactive Descriptions**: Expandable "Show More" functionality with smooth animations
- **Sample Question Preview**: Outlined pill buttons showing math problem previews via tooltips

### Enhanced User Experience  
- **Segmented Controls**: Modern iOS-style session length selection (10-15min, 15-20min, 20-25min) with single-click interaction, keyboard navigation, and accessibility compliance
- **Chat Bubble Tooltips**: Dark green tooltip system with rounded corners and animated connection tails
- **Confetti Celebrations**: Multi-colored particle burst animations with gravity physics and random shapes (circles, squares, triangles, stars)
- **Student Management**: Realistic student name assignments with diverse representation
- **Copy Success Feedback**: Enhanced copy button with purple hover states and celebration animations
- **Responsive Design**: Adapts seamlessly from desktop to tablet to mobile viewports with optimized touch targets

### Educational Features
- **Diverse Classroom Scenarios**: Above grade level (Grade 7), at grade level (Grade 6), and below grade level (Grade 5) content
- **Realistic Group Sizes**: Variable student counts (2-5 students) reflecting actual classroom differentiation
- **Time Estimates**: Session duration ranges based on content complexity and student needs
- **Domain-Specific Icons**: Visual indicators for Statistics, Ratios, Algebra, Fractions, and Geometry
- **Math Problem Previews**: Domain-specific sample questions (multiple choice and open response) for immediate content insight

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

The prototype implements OKO's comprehensive visual design system:

#### Colors
- **Primary Purple**: `#605dec` (card borders, domain titles, icons)
- **Foundational Green**: `#002e19` (text, tooltips)
- **CCSS Orange**: `#f7622b` (Common Core badges)
- **Background**: Warm White `#fffdf5`
- **Muted Text**: `#858b87` (secondary information)
- **Student Code Area**: `#f4f4fd` (light purple backgrounds)

#### Typography
- **Display Font**: ABC Marfa (headers, domain titles)
- **Body Font**: Roboto (descriptions, labels, buttons)
- **Font Weights**: Regular 400, SemiBold 600, Bold 700, ExtraBold 800

#### Layout & Spacing
- **Card Design**: 16px border radius with 4px top border and 24px internal padding
- **Responsive Grid**: 3 columns (desktop) → 2 columns (tablet) → 1 column (mobile)
- **Breakpoints**: 1024px (desktop), 768px (tablet), 480px (mobile)

## 🎯 Key Interactions

### Primary Workflows
1. **Set Session Length**: Click segmented control buttons (10-15min, 15-20min, 20-25min) for instant duration selection with visual feedback
2. **View All Questions**: Click "View All Questions" → Full modal carousel showing all 3 questions per standard with correct answers highlighted in green
3. **Copy Student Codes**: Click "Copy Code" → Confetti celebration with multi-colored particle burst
4. **Preview Sample Questions**: Click "Sample Question" button → Tooltip showing math problem preview
5. **View Standard Details**: Click "Show More" → Smooth expansion revealing full Common Core descriptions  
6. **Student Information**: Hover over student count → Chat bubble showing individual student names
7. **Session Timing**: Interactive session length controls with hover states and accessibility support
8. **CCSS Badges**: Hover over orange badges → Educational tooltip about Common Core identifiers

### Interactive Elements
- **Segmented Controls**: iOS-style three-button controls for session length with ARIA radiogroup pattern, keyboard navigation, and smooth animations
- **Group Cards**: Purple-bordered cards with hover animations, bottom-aligned layouts, and comprehensive tooltips
- **Example Questions Modal**: Carousel modal with purple navigation buttons, fade transitions, keyboard navigation (arrow keys, escape), and click-outside-to-close
- **Standards Selection**: Enhanced modal (90vh height) with semantic search + hierarchical browsing
- **Sample Question Buttons**: Outlined pill buttons showing domain-specific math problems in 400px tooltips
- **Copy Success**: Enhanced feedback with color changes, animations, and confetti celebrations
- **Expandable Content**: "Show More" links reveal detailed standard descriptions with GSAP transitions

## Technology Stack

- **HTML5**: Semantic markup structure
- **CSS3**: Modern flexbox/grid layouts, custom properties
- **Vanilla JavaScript**: ES6+ features, modular architecture
- **GSAP**: High-performance animations and micro-interactions
- **Lucide Icons**: Modern, consistent SVG icon system
- **Animate.css**: CSS-based animation utilities
- **No Framework**: Lightweight, minimal-dependency implementation

## 🛠️ Development Notes

### Architecture Highlights
- **Figma-First Design**: Implemented directly from Figma components using MCP integration
- **Modular CSS**: Clear separation of concerns across `main.css`, `components.css`, and `modals.css`
- **Component-Based JS**: Vanilla JavaScript with simulated state management and realistic data
- **Animation System**: GSAP-powered confetti physics with gravity, rotation, and particle variety

### User Experience Features
- **Accessibility**: Full keyboard navigation, screen reader support, and ARIA labels
- **Performance**: Optimized GSAP animations (60fps) with proper easing curves
- **Realistic Data**: 25 diverse student names, varied group compositions, and authentic classroom scenarios
- **Interactive Feedback**: Chat bubble tooltips, confetti celebrations, and smooth micro-interactions

### Technical Implementation
- **No Build Process**: Pure HTML/CSS/JS for immediate development and testing
- **CDN Libraries**: GSAP, Lucide Icons, and Animate.css loaded via CDN for simplicity
- **Mock Data Layer**: Comprehensive standards database with prerequisites and difficulty assessments
- **Cross-Browser**: Tested compatibility across modern browsers with graceful degradation

## Browser Support

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+
