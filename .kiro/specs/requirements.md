# Requirements Document - RenoRef (Minimalist Edition)

## Introduction

RenoRef is a professional renovation planning tool built as a clean, minimalist Single Page Application. The app helps homeowners make informed renovation decisions through clear comparisons, accurate budgeting, design recommendations, and community insights. The design follows Swiss Design principles with emphasis on readability, whitespace, and trust.

## Glossary

- **Decide**: The material comparison and decision view (formerly Arena)
- **Budget**: The cost calculation and breakdown view (formerly Lab)
- **Design**: The style and furniture recommendation view (formerly Studio)
- **Reviews**: The community insights view (formerly Pulse)
- **Comparison_Engine**: The core algorithm that evaluates material options
- **Trade_Off_Note**: A calm, informative note about the compromise of choosing an option
- **Insight_Card**: A clean card displaying community feedback

---

## Requirements

### Requirement 1: Clean Navigation Architecture

**User Story:** As a user, I want clear, professional navigation that immediately tells me what each section does.

#### Acceptance Criteria

1. THE Bottom_Nav SHALL display 4 clearly labeled tabs: Decide, Budget, Design, Reviews
2. THE Bottom_Nav SHALL use a white background with subtle gray border
3. THE Navigation_Icons SHALL be simple, thin-line icons (not filled/bold)
4. THE Active_Tab SHALL be indicated with the accent color (Sage Green or Soft Blue)
5. THE Tab_Labels SHALL use clear, professional language (no game/battle terminology)
6. THE Navigation SHALL remain fixed at the bottom on all devices

---

### Requirement 2: The Decide Tab - Side-by-Side Comparison

**User Story:** As a homeowner, I want to see a clear side-by-side comparison of my material options so I can make an informed decision.

#### Acceptance Criteria

1. THE Decide_Tab SHALL display a clean form with:
   - Category selector (Flooring, Wall Finish, Lighting)
   - Budget range (Economy, Standard, Premium)
   - Room size in square feet
   - Pet-friendly requirement (Yes/No toggle)
   - Climate type (Humid, Dry, Cold)

2. WHEN user submits preferences, THE App SHALL display a Side_By_Side_Comparison showing:
   - Option A (e.g., Tile) with pros list
   - Option B (e.g., Wood) with pros list
   - Clear "Recommended" badge on the winning option

3. THE Trade_Off_Note SHALL appear as a calm, informative box with:
   - Soft yellow/cream background (#FFF9E6)
   - Friendly language: "Note: [Material] requires [trade-off detail]"
   - No alarming colors or warning symbols

4. THE Comparison_View SHALL NOT use any battle/game terminology
5. THE Results SHALL be displayed in clean, readable cards with ample whitespace

---

### Requirement 3: The Budget Tab - Bank-App Style Calculator

**User Story:** As a homeowner, I want a clean, professional cost calculator that looks like a banking app.

#### Acceptance Criteria

1. THE Budget_Tab SHALL auto-sync the recommended material from Decide
2. THE Calculator SHALL display clean input fields for:
   - Square footage (synced from Decide)
   - Material cost per sq ft
   - Labor cost per sq ft

3. THE Cost_Breakdown SHALL display as a clean list:
   - Material subtotal
   - Labor subtotal
   - Tax (8.5%)
   - Total (prominently displayed)

4. THE Total_Display SHALL use large, clear typography
5. THE Layout SHALL have generous padding and whitespace
6. THE Numbers SHALL update in real-time as user types

---

### Requirement 4: The Design Tab - Professional Style Guide

**User Story:** As a homeowner, I want professional furniture and color recommendations that feel like working with an interior designer.

#### Acceptance Criteria

1. THE Design_Tab SHALL display clean selectors for:
   - Room size (Small, Medium, Large) as pill buttons
   - Style preference (Modern, Rustic, Industrial) as cards with subtle icons

2. WHEN user selects preferences, THE App SHALL display:
   - Recommended furniture layout as a clean list
   - Color palette as elegant swatches with labels
   - Design note explaining the recommendation

3. THE Trade_Off_Note SHALL appear as a subtle informational box
4. THE Color_Swatches SHALL display as rounded rectangles with hex codes
5. THE Layout SHALL feel like a professional design consultation

---

### Requirement 5: The Reviews Tab - Community Insights

**User Story:** As a homeowner, I want to see what others have experienced with my chosen materials in a clean, trustworthy format.

#### Acceptance Criteria

1. THE Reviews_Tab SHALL display "Community Insights" as the header
2. THE Insight_Cards SHALL display:
   - Clean title
   - Source attribution (e.g., "via r/HomeImprovement")
   - Engagement metrics (upvotes, comments) in subtle gray
   - No aggressive styling or "trending" language

3. THE Cards SHALL have white backgrounds with subtle shadows
4. THE Layout SHALL feel like reading professional reviews, not social media
5. THE Content SHALL be filtered based on user's material/style selections

---

### Requirement 6: Material Sample Visualization

**User Story:** As a homeowner, I want to see a clean preview of my chosen material.

#### Acceptance Criteria

1. THE Material_Sample SHALL display as a clean 3D cube on white background
2. THE Cube SHALL rotate slowly and smoothly
3. THE Cube SHALL have subtle shadows (not harsh borders)
4. THE Cube SHALL feel like a physical material sample, not a game object
5. THE Cube SHALL update texture based on selected material

---

### Requirement 7: Visual Design - Minimalist Principles

**User Story:** As a user, I want the app to feel professional and trustworthy, like a high-end productivity tool.

#### Acceptance Criteria

1. THE App SHALL use the following color palette:
   - Background: #FFFFFF or #FAFAFA
   - Text: #333333 (Charcoal)
   - Accent: #4A90E2 (Soft Blue) or #6B8E23 (Sage Green)
   - Borders: #E0E0E0 (Subtle Gray)
   - Trade-off background: #FFF9E6 (Soft Cream)

2. THE Typography SHALL use Inter or system sans-serif fonts
3. THE Cards SHALL have:
   - White backgrounds
   - Rounded corners (12px radius)
   - Soft shadows (box-shadow: 0 4px 6px rgba(0,0,0,0.05))
   - Generous internal padding (24px minimum)

4. THE App SHALL prioritize whitespace and readability
5. THE App SHALL NOT use any aggressive colors, thick borders, or game-like elements

---

### Requirement 8: Responsive Design

**User Story:** As a user, I want the app to work beautifully on my phone, tablet, and desktop.

#### Acceptance Criteria

1. THE App SHALL be fully responsive from 320px to 1920px+
2. THE Bottom_Nav SHALL remain fixed and accessible on all devices
3. THE Cards SHALL stack vertically on mobile, side-by-side on desktop
4. THE Touch_Targets SHALL be minimum 44px for accessibility
5. THE Typography SHALL scale appropriately for each breakpoint

---

## Data Structures

### Material Comparison Data
```javascript
{
  flooring: {
    options: ["Hardwood", "Tile"],
    hardwood: {
      pros: ["Warm underfoot", "Adds home value", "Natural beauty", "Can be refinished"],
      tradeOff: "Note: Hardwood requires 2x more maintenance than tile and is sensitive to moisture."
    },
    tile: {
      pros: ["Durable", "Water resistant", "Easy to clean", "Budget-friendly"],
      tradeOff: "Note: Tile feels cold underfoot and can be slippery when wet."
    }
  }
}
```

### Insight Card Data
```javascript
{
  title: "What I learned after 5 years with hardwood floors",
  source: "r/HomeImprovement",
  upvotes: 1247,
  comments: 89,
  summary: "Real homeowner experience with maintenance tips..."
}
```

---

## Technical Constraints

1. Pure HTML, CSS, JavaScript (no frameworks)
2. Google Fonts CDN for Inter font
3. No external dependencies
4. Client-side only (no backend)
5. Must work offline after initial load
