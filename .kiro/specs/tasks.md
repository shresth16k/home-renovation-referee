# Implementation Plan - RenoRef (Minimalist Edition)

## Overview

Complete UI pivot from Industrial/Game aesthetic to clean, minimalist design inspired by Notion and Apple. Focus on clarity, whitespace, and professional appearance.

## Tasks

- [ ] 1. Create new HTML structure with renamed tabs
  - Rename Arena → Decide
  - Rename Lab → Budget  
  - Rename Studio → Design
  - Rename Pulse → Reviews
  - Use clean, semantic HTML
  - _Requirements: 1.1, 1.5_

- [ ] 2. Build minimalist CSS system
  - [ ] 2.1 Define CSS variables (colors, spacing, typography)
  - [ ] 2.2 Create card component with soft shadows
  - [ ] 2.3 Build clean bottom navigation
  - [ ] 2.4 Style form elements (inputs, selects, buttons)
  - [ ] 2.5 Create trade-off note component (soft cream background)
  - [ ] 2.6 Build comparison grid layout
  - [ ] 2.7 Style budget calculator (bank-app look)
  - [ ] 2.8 Create color swatch components
  - [ ] 2.9 Style insight cards for Reviews
  - [ ] 2.10 Clean 3D material sample
  - _Requirements: 7.1-7.5_

- [ ] 3. Implement JavaScript functionality
  - [ ] 3.1 Tab switching with clean transitions
  - [ ] 3.2 Decide tab: Side-by-side comparison logic
  - [ ] 3.3 Budget tab: Real-time calculator
  - [ ] 3.4 Design tab: Style recommendations
  - [ ] 3.5 Reviews tab: Community insights display
  - [ ] 3.6 State management across tabs
  - _Requirements: 2.1-2.5, 3.1-3.6, 4.1-4.5, 5.1-5.5_

- [ ] 4. Add responsive design
  - Mobile-first approach
  - Tablet and desktop breakpoints
  - _Requirements: 8.1-8.5_

- [ ] 5. Polish and accessibility
  - Focus states
  - Reduced motion support
  - Semantic HTML
  - _Requirements: 7.4, 8.4_

## Key Changes from Previous Version

1. **No battle/game terminology** - Use professional language
2. **White backgrounds** - Clean, trustworthy appearance
3. **Soft shadows** - Subtle depth, not harsh borders
4. **Generous whitespace** - Let content breathe
5. **Calm accent color** - Soft blue instead of safety yellow
6. **Trade-off notes** - Informative, not alarming
