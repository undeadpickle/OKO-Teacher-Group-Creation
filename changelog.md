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

- **Sample Question Preview**: Outlined pill button on group cards displaying sample math problems in tooltips to allow teachers to preview question content without entering edit mode, improving workflow efficiency and reducing navigation steps.

- **Domain-Specific Question Generation**: Intelligent question templates for different CCSS domains (Statistics & Probability, Number & Operations—Fractions, Measurement & Data, Ratios & Proportional Relationships, Expressions & Equations, Geometry) with both multiple choice and open response formats to provide realistic previews of student activities.

- **Enhanced Standards Modal**: Increased modal height to 90% viewport to display more standard content and improve browsing experience when selecting Common Core standards for group configuration.

- **CCSS Badge System**: Orange pill badges in top-right corner of each group card displaying Common Core State Standards identifiers (e.g., "6.SP.B.5c", "7.EE.A.1") to provide instant visual identification of specific standards for teachers organizing math sessions.

- **Confetti Burst Animation**: Multi-colored particle celebration system for copy success actions using GSAP physics with gravity, rotation, and random shapes (circles, squares, triangles, stars) to enhance user engagement and provide delightful feedback.

- **Chat Bubble Tooltip System**: Enhanced tooltips with dark green backgrounds (#002e19), rounded corners, and animated connection tails to provide professional, contextual help that matches the educational application's design language.

- **Diverse Group Representation**: Realistic 6th grade classroom scenarios with above grade level (Grade 7), at grade level (Grade 6), and below grade level (Grade 5) content to reflect authentic differentiated instruction practices.

- **Student Name Tooltips**: Individual student name assignments with diverse representation (25 unique names) displayed in chat bubbles when hovering over student count icons to provide personalized group information.

- **Interactive Description Expansion**: "Show More" functionality with smooth GSAP animations for standard descriptions, allowing teachers to view abbreviated or full Common Core standard explanations as needed.

### Changed

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
