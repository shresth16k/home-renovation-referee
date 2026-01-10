# Implementation Plan: RenoRef Pro (Competition Edition)

## Overview

Build a 4-tab SPA with Industrial/Nimma Yatri aesthetic featuring The Arena (Material Referee), The Lab (Calculator), The Studio (Style & Furniture), and The Pulse (Community Feed). State management ensures Arena winner influences Studio recommendations.

## Tasks

- [ ] 1. Set up project structure and HTML skeleton
  - Create renoreef-pro-final.html with 4-view structure
  - Add SVG icons for bottom navigation (Boxing Glove, Calculator, Sofa, Heartbeat)
  - Set up Google Fonts (Oswald, Courier Prime)
  - _Requirements: 1.1, 1.2, 10.2_

- [ ] 2. Build CSS styling system
  - [ ] 2.1 Create CSS variables and reset styles
    - Define color palette (#121212, #F4C430, #FFFFFF)
    - Set up typography classes
    - _Requirements: 10.1, 10.2_
  
  - [ ] 2.2 Build industrial card system
    - Sharp edges, 2px yellow borders
    - Card header and content styles
    - _Requirements: 10.3_
  
  - [ ] 2.3 Create bottom navigation styles
    - Fixed positioning at bottom
    - Active state highlighting
    - _Requirements: 1.2, 1.4, 9.2_
  
  - [ ] 2.4 Build blueprint card styles for Studio
    - Blue/black gradient background
    - Grid overlay pattern
    - White line aesthetics
    - _Requirements: 4.5_
  
  - [ ] 2.5 Create paint chip swatch styles
    - Physical paint chip appearance
    - Hex code labels
    - _Requirements: 4.4_
  
  - [ ] 2.6 Build Reddit thread card styles
    - Dark mode forum appearance
    - Upvote arrows and counts
    - _Requirements: 5.2_
  
  - [ ] 2.7 Create Pro-Tip toast with hazard stripes
    - Yellow/black diagonal stripes
    - Slide-down animation
    - _Requirements: 7.1, 7.2_
  
  - [ ] 2.8 Add 3D rotating cube styles
    - CSS transform-style: preserve-3d
    - Rotation keyframes
    - _Requirements: 6.1, 6.2_

- [ ] 3. Implement JavaScript core functionality
  - [ ] 3.1 Set up global state management
    - Create appState object
    - Track currentView, arena winner, studio selections
    - _Requirements: 8.5, 8.6_
  
  - [ ] 3.2 Build tab switching system
    - switchTab() function
    - Update navigation active states
    - Trigger Pro-Tip on tab change
    - _Requirements: 1.3, 1.7_
  
  - [ ] 3.3 Implement Arena referee engine
    - Scoring matrix for materials
    - calculateWinner() function
    - Trade-off generation
    - _Requirements: 2.4, 2.5_
  
  - [ ] 3.4 Build Lab cost calculator
    - Real-time calculation on input change
    - Auto-populate from Arena winner
    - Format currency display
    - _Requirements: 3.2, 3.4, 3.6_
  
  - [ ] 3.5 Create Studio furniture recommendation engine
    - styleData object mapping materials to furniture
    - generateStudioRecommendation() function
    - Color palette generation
    - _Requirements: 4.2, 4.3_
  
  - [ ] 3.6 Build Pulse thread filtering system
    - Filter threads by material/style
    - renderRedditThreads() function
    - _Requirements: 5.3, 5.4_
  
  - [ ] 3.7 Implement data synchronization
    - Sync Arena winner to Lab and Studio
    - Update Pulse based on selections
    - _Requirements: 8.1, 8.2, 8.3_

- [ ] 4. Build The Arena view (Tab 1)
  - [ ] 4.1 Create constraint input form
    - Dropdowns for category, budget, climate
    - Radio buttons for pets
    - Number input for room area
    - _Requirements: 2.1_
  
  - [ ] 4.2 Build results display section
    - Winner badge and name
    - Reasoning explanation
    - Trade-off card
    - Pros list
    - _Requirements: 2.5_
  
  - [ ] 4.3 Add 3D rotating cube
    - Material texture display
    - Continuous rotation animation
    - _Requirements: 6.3, 6.4_

- [ ] 5. Build The Lab view (Tab 2)
  - [ ] 5.1 Create calculator input grid
    - Square footage input
    - Material cost input
    - Labor cost input
    - _Requirements: 3.3_
  
  - [ ] 5.2 Build cost breakdown display
    - Material total
    - Labor total
    - Tax calculation
    - Grand total
    - _Requirements: 3.5_

- [ ] 6. Build The Studio view (Tab 3)
  - [ ] 6.1 Create style preference form
    - Room size selector (Small/Medium/Large)
    - Vibe selector (Modern/Rustic/Industrial)
    - Function selector (Living/Bedroom/Office/Dining)
    - _Requirements: 4.1_
  
  - [ ] 6.2 Build blueprint recommendation card
    - Layout title
    - Furniture pieces list
    - Trade-off explanation
    - _Requirements: 4.3_
  
  - [ ] 6.3 Create color palette display
    - Paint chip swatches
    - Hex code labels
    - _Requirements: 4.4_
  
  - [ ] 6.4 Add material-to-furniture mapping
    - Link Arena winner to Studio suggestions
    - Edison bulbs for Industrial, etc.
    - _Requirements: 4.3_

- [ ] 7. Build The Pulse view (Tab 4)
  - [ ] 7.1 Create trending indicator
    - Current material/style focus
    - _Requirements: 5.1_
  
  - [ ] 7.2 Build Reddit thread feed
    - Thread cards with votes
    - Author and subreddit info
    - _Requirements: 5.2, 5.5_

- [ ] 8. Add responsive design
  - [ ] 8.1 Mobile breakpoints (320px - 767px)
    - Single column layouts
    - Full-width cards
    - _Requirements: 9.1, 9.4_
  
  - [ ] 8.2 Tablet breakpoints (768px - 1023px)
    - Two column grids
    - _Requirements: 9.1_
  
  - [ ] 8.3 Desktop breakpoints (1024px+)
    - Centered content
    - Max-width containers
    - _Requirements: 9.1_

- [ ] 9. Final integration and testing
  - Verify state sync across all tabs
  - Test all 9 furniture combinations
  - Ensure Pro-Tip triggers correctly
  - _Requirements: 8.1-8.6_

## Notes

- State management is critical: Arena winner must persist and influence Studio
- Blueprint styling gives Studio a professional architect feel
- Pro-Tip toast uses hazard stripes for industrial aesthetic
- All animations respect prefers-reduced-motion
