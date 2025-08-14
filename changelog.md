# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

<!--
INSTRUCTIONS FOR AI:
- Add all new, unreleased changes to the "[Unreleased]" section.
- For each change, describe both WHAT was changed and WHY it was changed.
- Keep descriptions concise, but ensure the 'what' and 'why' are always clear.
- When a new version is released, create a new version header like "## [1.2.3] - YYYY-MM-DD" and move the changes from "[Unreleased]" into it.
-->

## [Unreleased]

### Added

- **Example Questions Modal**: Full carousel modal system displaying all 3 questions per math standard with correct answer highlighting, purple navigation buttons, and smooth fade transitions between questions. Triggered by "View All Questions" buttons on group cards to allow teachers to review complete question sets without entering edit mode, improving lesson planning efficiency and content visibility.

- **Question Data Structure**: Comprehensive example question database with 3 multiple-choice questions per standard (Statistics & Probability, Ratios & Proportions, Expressions & Equations, Number System, Geometry) including realistic math problems, answer choices, and correct answer identification to provide teachers with authentic preview content for classroom planning.

- **Modal Navigation System**: Purple circular navigation buttons positioned inside modal (20px from edges) with smooth hover animations, keyboard controls (arrow keys for navigation, escape to close), and click-outside-to-close functionality to ensure intuitive and accessible question browsing experience.

- **Correct Answer Highlighting**: Visual indication system using light green backgrounds (#e8f5e8), green borders (#4caf50), and dark green text (#2e7d32) to highlight correct answers for teacher reference, eliminating the need for separate answer text and providing immediate visual feedback.

- **Question Progress Tracking**: Dynamic title formatting showing "Problem X of 3" to help teachers understand their position in the question sequence and total available content for each standard, improving navigation clarity.

- **Segmented Control Component**: Modern iOS-style session length selection interface with three discrete options (10-15min, 15-20min, 20-25min) replacing the previous slider component to improve user experience, reduce cognitive load, and provide clearer interaction patterns for teachers setting up math sessions.

- **Enhanced Accessibility Support**: Comprehensive ARIA implementation for session length controls including radiogroup pattern, roving tabindex, keyboard navigation (arrow keys, Home/End, Space/Enter), and screen reader instructions to ensure full accessibility compliance and inclusive design.

- **Visual Feedback System**: Smooth animations, hover effects, and selection states for segmented controls with purple theming (#605dec), scaling feedback, and subtle shadows to provide clear interaction feedback and match the overall design system aesthetic.

- **Mobile Touch Optimization**: Optimized session length controls for mobile devices with larger touch targets (24px vs 20px), proper touch event handling, and haptic feedback integration to enhance the mobile user experience for teachers using tablets.

### Changed

- **Session Length Interaction Model**: Replaced drag-based slider with single-click selection buttons to eliminate user confusion about discrete vs continuous values, improve interaction efficiency, and align with standard UI patterns for multiple-choice selections.

- **Responsive Grid Layout**: Enhanced card grid system with improved spacing (24px horizontal gaps, 64px vertical gaps) and flexible card widths (320px minimum) to provide better visual hierarchy and consistent layouts across different screen sizes.

- **Component Architecture**: Refactored session length selection from complex slider logic (200+ lines) to streamlined segmented control implementation, improving code maintainability and reducing JavaScript complexity while enhancing user experience.

- **CCSS Badge Positioning**: Refined orange badge placement to exact top-right corner edge (top: -2px, right: -2px) to match Figma Container design specifications and ensure consistent visual alignment across all group cards.

- **Card Layout Structure**: Implemented flexbox-based bottom alignment for student login code sections to ensure uniform card heights and professional layout consistency when content varies between cards.

- **Standards Modal Interface**: Removed "Recently Used" section to allocate more space for search results and grade/domain browsing, streamlining the standard selection workflow and reducing visual clutter.

- **Sample Question Button Styling**: Updated from text link to outlined pill button with purple border (#605dec), 6px border radius, and hover fill effects to match Figma design system and improve visual hierarchy.

- **Group Card Design**: Completely redesigned cards to match exact Figma specifications with purple top borders (#605dec), proper spacing (24px padding), and comprehensive information hierarchy to improve visual consistency and user experience.

- **Icon System Integration**: Replaced placeholder icons with domain-specific Lucide icons (bar-chart-3 for Statistics, percent for Ratios, calculator for Expressions, etc.) colored to match domain titles (#605dec) for better visual categorization.

- **Copy Button Styling**: Updated copy buttons with purple hover states (#d3d3f8), green success states (#e8f5e9), and comprehensive animation feedback to provide clearer interaction states and better user feedback.

- **Typography System**: Implemented ABC Marfa font for display elements and Roboto for body text with proper font weights (Regular 400, SemiBold 600, Bold 700, ExtraBold 800) to match OKO's brand guidelines.

- **Color Palette**: Updated color system with Primary Purple (#605dec), CCSS Orange (#f7622b), Foundational Green (#002e19), and muted text colors (#858b87) to create better visual hierarchy and accessibility.

- **Tooltip Positioning**: Enhanced tooltip system with proper z-index stacking, smooth fade-in/out animations, and chat bubble appearance with animated tails for more professional and intuitive user interactions.

### Fixed

- **Session Length Interaction Issues**: Resolved slider confusion where users attempted to set custom values between predefined ranges, now eliminated through clear discrete button choices that prevent user error and improve task completion efficiency.

- **Accessibility Compliance**: Fixed keyboard navigation issues in session length controls by implementing proper roving tabindex pattern and ARIA radiogroup semantics, ensuring full screen reader compatibility and keyboard-only navigation support.

- **Badge Positioning**: Resolved CCSS badge alignment issues where badges were appearing center-aligned instead of right-aligned, ensuring proper top-right corner placement on all group cards.

- **Tooltip Animation Synchronization**: Fixed tooltip tail animations to move in sync with tooltip bubbles, eliminating disconnected animation effects for smoother visual transitions.

- **Icon Color Consistency**: Corrected icon coloring to match domain title colors throughout the interface, ensuring visual cohesion and proper brand implementation.

---

## [0.2.0] - [2025-08-13]

### Added

- **Sample Question Preview**: Outlined pill button on group cards displaying sample math problems in tooltips to allow teachers to preview question content without entering edit mode, improving workflow efficiency and reducing navigation steps.

- **Domain-Specific Question Generation**: Intelligent question templates for different CCSS domains (Statistics & Probability, Number & Operations—Fractions, Measurement & Data, Ratios & Proportional Relationships, Expressions & Equations, Geometry) with both multiple choice and open response formats to provide realistic previews of student activities.

- **Enhanced Standards Modal**: Increased modal height to 90% viewport to display more standard content and improve browsing experience when selecting Common Core standards for group configuration.

### Changed

- **CCSS Badge Positioning**: Refined orange badge placement to exact top-right corner edge (top: -2px, right: -2px) to match Figma Container design specifications and ensure consistent visual alignment across all group cards.

- **Card Layout Structure**: Implemented flexbox-based bottom alignment for student login code sections to ensure uniform card heights and professional layout consistency when content varies between cards.

- **Standards Modal Interface**: Removed "Recently Used" section to allocate more space for search results and grade/domain browsing, streamlining the standard selection workflow and reducing visual clutter.

- **Sample Question Button Styling**: Updated from text link to outlined pill button with purple border (#605dec), 6px border radius, and hover fill effects to match Figma design system and improve visual hierarchy.

---

## [0.1.0] - [YYYY-MM-DD]

<!-- Example of an initial release -->

### Added

- Initial project setup and core features to establish the application baseline.
