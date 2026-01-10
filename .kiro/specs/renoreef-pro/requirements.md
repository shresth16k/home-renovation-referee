# Requirements Document - RenoRef Pro (Competition Edition)

## Introduction

RenoRef Pro is a competition-level, street-smart renovation decision tool built as a Multi-Tab Single Page Application (SPA). The application helps homeowners make informed renovation decisions by analyzing constraints, calculating costs, suggesting furniture layouts, and providing community insights. The app features a fixed bottom navigation bar with 4 core views: The Arena, The Lab, The Studio, and The Pulse.

## Glossary

- **Arena**: The material comparison and decision engine view
- **Lab**: The cost calculation and breakdown view
- **Studio**: The style, furniture layout, and color palette recommendation view
- **Pulse**: The community social feed view with simulated Reddit threads
- **Referee_Engine**: The core decision algorithm that scores and compares options
- **Constraint**: User input parameters that influence the decision (budget, pets, climate, room size, vibe)
- **Trade_Off**: The downside or compromise of choosing the winning option
- **Verdict**: The final recommendation from the Referee Engine
- **Vibe**: The aesthetic style preference (Modern, Rustic, Industrial)
- **3D_Cube**: A CSS-based rotating cube displaying material textures
- **Pro_Tip**: Expert advice displayed based on user selections
- **Bottom_Nav**: Fixed navigation bar at the bottom of the screen

---

## Requirements

### Requirement 1: Multi-Tab SPA Architecture

**User Story:** As a user, I want to navigate between different sections of the app using a fixed bottom navigation bar, so that I can access all features easily on any device.

#### Acceptance Criteria

1. THE Bottom_Nav SHALL display 4 navigation items: Arena, Lab, Studio, and Pulse
2. THE Bottom_Nav SHALL remain fixed at the bottom of the viewport on all screen sizes
3. WHEN a user taps a navigation item, THE App SHALL switch to the corresponding view
4. THE App SHALL highlight the active navigation item with the safety yellow accent color
5. THE App SHALL support swipe gestures to navigate between adjacent views on touch devices
6. THE App SHALL support keyboard navigation (keys 1-4 and arrow keys) on desktop
7. WHEN switching views, THE App SHALL animate the transition smoothly

---

### Requirement 2: The Arena - Material Referee

**User Story:** As a homeowner, I want to compare renovation materials based on my specific constraints, so that I can make an informed decision with clear trade-offs.

#### Acceptance Criteria

1. THE Arena SHALL display a form with the following inputs:
   - Renovation Category (Flooring, Wall Finish, Lighting)
   - Budget Range (Street Level, Mid-Tier, Premium)
   - Room Area in Square Feet (50-5000)
   - Pet Situation (Yes/No)
   - Climate Conditions (Humid, Dry, Cold)

2. WHEN all form fields are completed, THE Referee_Button SHALL become enabled
3. WHEN the user clicks "BLOW THE WHISTLE", THE Referee_Engine SHALL calculate the winner
4. THE Referee_Engine SHALL use a scoring matrix to evaluate options:
   - Budget constraint scoring
   - Pet-friendliness scoring
   - Climate suitability scoring

5. WHEN a winner is determined, THE Arena SHALL display:
   - Winner name with badge
   - Reasoning explanation
   - Trade-off analysis
   - List of pros (minimum 5 items)
   - 3D rotating cube with material texture

6. THE 3D_Cube SHALL rotate continuously to showcase the winning material
7. WHEN a decision is made, THE Arena SHALL trigger a Pro_Tip notification
8. THE Arena SHALL sync the room area value with The Lab automatically

---

### Requirement 3: The Lab - Cost Calculator

**User Story:** As a homeowner, I want to calculate the total project cost based on the winning material, so that I can budget accurately for my renovation.

#### Acceptance Criteria

1. THE Lab SHALL display the winning material from The Arena (if available)
2. THE Lab SHALL auto-populate material and labor costs based on the Arena winner
3. THE Lab SHALL provide editable input fields for:
   - Square Footage (synced from Arena)
   - Material Cost per Sq Ft
   - Labor Cost per Sq Ft

4. WHEN any input value changes, THE Lab SHALL recalculate costs in real-time
5. THE Lab SHALL display a cost breakdown showing:
   - Total Material Cost (Sq Ft × Material Cost)
   - Total Labor Cost (Sq Ft × Labor Cost)
   - Tax Amount (8.5% of subtotal)
   - Total Project Cost

6. THE Lab SHALL format all currency values in USD with proper formatting
7. IF no winner is selected in Arena, THE Lab SHALL display a prompt to complete Arena first

---

### Requirement 4: The Studio - Style & Furniture Referee

**User Story:** As a homeowner, I want furniture layout and color palette recommendations based on my room size and style preference, so that I can create a cohesive interior design.

#### Acceptance Criteria

1. THE Studio SHALL display a form with the following inputs:
   - Room Size (Small: <200 sq ft, Medium: 200-400 sq ft, Large: >400 sq ft)
   - Vibe/Style (Modern, Rustic, Industrial)
   - Primary Function (Living, Bedroom, Office, Dining)

2. WHEN the user submits preferences, THE Studio_Referee SHALL generate:
   - Furniture Layout recommendation
   - Color Palette suggestion (3-5 colors with hex codes)
   - Style Trade-off explanation

3. THE Studio_Referee SHALL apply the following Furniture Logic:

   **Small Room Rules:**
   - WHEN Room_Size = Small AND Vibe = Modern, THE Studio SHALL recommend "Low-Profile Furniture with Hidden Storage"
   - Trade-off: "Less visible storage space, but the room appears 2x larger"
   - WHEN Room_Size = Small AND Vibe = Rustic, THE Studio SHALL recommend "Multi-functional Vintage Pieces"
   - Trade-off: "Limited seating options, but authentic character preserved"
   - WHEN Room_Size = Small AND Vibe = Industrial, THE Studio SHALL recommend "Wall-Mounted Shelving with Compact Seating"
   - Trade-off: "Reduced floor comfort, but maximum floor space maintained"

   **Medium Room Rules:**
   - WHEN Room_Size = Medium AND Vibe = Modern, THE Studio SHALL recommend "Modular Sectional with Statement Lighting"
   - Trade-off: "Higher cost for quality pieces, but flexible arrangement options"
   - WHEN Room_Size = Medium AND Vibe = Rustic, THE Studio SHALL recommend "Farmhouse Table with Mixed Seating"
   - Trade-off: "Requires more maintenance, but creates warm gathering space"
   - WHEN Room_Size = Medium AND Vibe = Industrial, THE Studio SHALL recommend "Metal Frame Furniture with Leather Accents"
   - Trade-off: "Can feel cold, but extremely durable and timeless"

   **Large Room Rules:**
   - WHEN Room_Size = Large AND Vibe = Modern, THE Studio SHALL recommend "Zoned Layout with Designer Anchor Pieces"
   - Trade-off: "Significant investment required, but creates magazine-worthy space"
   - WHEN Room_Size = Large AND Vibe = Rustic, THE Studio SHALL recommend "Oversized Comfort Pieces with Natural Textures"
   - Trade-off: "Can overwhelm smaller furniture, but ultimate comfort achieved"
   - WHEN Room_Size = Large AND Vibe = Industrial, THE Studio SHALL recommend "Open Plan with Statement Industrial Fixtures"
   - Trade-off: "Acoustics may suffer, but dramatic visual impact guaranteed"

4. THE Studio SHALL display Color Palette recommendations:

   **Modern Palettes:**
   - Primary: #FFFFFF (Pure White)
   - Secondary: #2C3E50 (Charcoal)
   - Accent: #3498DB (Electric Blue)

   **Rustic Palettes:**
   - Primary: #F5E6D3 (Warm Cream)
   - Secondary: #8B4513 (Saddle Brown)
   - Accent: #228B22 (Forest Green)

   **Industrial Palettes:**
   - Primary: #2F2F2F (Dark Charcoal)
   - Secondary: #B87333 (Copper)
   - Accent: #F4C430 (Safety Yellow)

5. THE Studio SHALL display a visual representation of the recommended layout
6. THE Studio SHALL provide a "Save to Mood Board" option (stores in local storage)
7. WHEN preferences change, THE Studio SHALL update recommendations in real-time

---

### Requirement 5: The Pulse - Community Social Feed

**User Story:** As a homeowner, I want to see what others are saying about my chosen materials and styles, so that I can learn from real experiences.

#### Acceptance Criteria

1. THE Pulse SHALL display a "Trending Now" indicator showing the current material/style focus
2. THE Pulse SHALL display simulated Reddit-style thread cards with:
   - Thread title
   - Author username
   - Subreddit name
   - Upvote count
   - Comment count
   - Time posted

3. WHEN a winner is selected in Arena, THE Pulse SHALL filter threads to show relevant content
4. WHEN a style is selected in Studio, THE Pulse SHALL include style-related threads
5. THE Pulse SHALL display a minimum of 6 thread cards
6. THE Pulse SHALL update thread content based on user selections across all views
7. WHEN no selections are made, THE Pulse SHALL display general renovation trending topics

---

### Requirement 6: 3D Material Visualization

**User Story:** As a homeowner, I want to see a realistic 3D preview of the winning material, so that I can visualize how it will look.

#### Acceptance Criteria

1. THE 3D_Cube SHALL be rendered using pure CSS transforms
2. THE 3D_Cube SHALL rotate continuously on the Y-axis
3. THE 3D_Cube SHALL display the winning material texture on all visible faces
4. THE 3D_Cube SHALL be responsive and scale appropriately on all devices
5. WHEN a new winner is selected, THE 3D_Cube SHALL update its texture
6. THE 3D_Cube SHALL pause rotation when user hovers/touches it
7. THE 3D_Cube SHALL support reduced motion preferences

---

### Requirement 7: Pro-Tip System

**User Story:** As a homeowner, I want to receive expert tips based on my selections, so that I can make better-informed decisions.

#### Acceptance Criteria

1. THE Pro_Tip SHALL appear as a floating HUD in the top-right corner
2. THE Pro_Tip SHALL display with a lightbulb icon and yellow background
3. WHEN a decision is made in Arena, THE Pro_Tip SHALL show material-specific advice
4. WHEN a style is selected in Studio, THE Pro_Tip SHALL show style-specific advice
5. THE Pro_Tip SHALL include a source attribution
6. THE Pro_Tip SHALL auto-dismiss after 10 seconds
7. THE Pro_Tip SHALL have a manual close button

---

### Requirement 8: Data Synchronization

**User Story:** As a user, I want my selections to sync across all views, so that I have a cohesive experience.

#### Acceptance Criteria

1. WHEN room area is entered in Arena, THE Lab SHALL auto-populate the same value
2. WHEN a winner is determined in Arena, THE Lab SHALL auto-populate pricing
3. WHEN a winner is determined in Arena, THE Pulse SHALL filter relevant content
4. WHEN a style is selected in Studio, THE Pulse SHALL include style threads
5. THE App SHALL maintain state across view switches without data loss
6. THE App SHALL persist user selections in session storage

---

### Requirement 9: Responsive Design

**User Story:** As a user, I want the app to work perfectly on my phone, tablet, and desktop, so that I can use it anywhere.

#### Acceptance Criteria

1. THE App SHALL be fully functional on screens from 320px to 1920px+ width
2. THE Bottom_Nav SHALL adapt to screen size while maintaining touch targets (min 44px)
3. THE Form_Elements SHALL be touch-friendly on mobile devices
4. THE Calculator_Grid SHALL switch from 3-column to 1-column on mobile
5. THE 3D_Cube SHALL scale appropriately without breaking layout
6. THE Pro_Tip SHALL reposition to full-width on mobile screens
7. THE App SHALL support both portrait and landscape orientations

---

### Requirement 10: Visual Design - Street-Smart Industrial Theme

**User Story:** As a user, I want a bold, industrial aesthetic that feels professional and trustworthy.

#### Acceptance Criteria

1. THE App SHALL use the following color palette:
   - Background: #121212 (Asphalt Black)
   - Primary Accent: #F4C430 (Safety Yellow)
   - Text: #FFFFFF (Pure White)
   - Cards: #1E1E1E (Dark Gray)
   - Borders: 2px solid Safety Yellow

2. THE App SHALL use Oswald font for headers and Courier Prime for data
3. THE App SHALL use hard edges only (no soft shadows or rounded corners on cards)
4. THE App SHALL display emoji icons for visual enhancement
5. THE App SHALL maintain high contrast for accessibility (WCAG AA compliant)

---

### Requirement 11: Performance & Accessibility

**User Story:** As a user, I want the app to load quickly and be accessible to everyone.

#### Acceptance Criteria

1. THE App SHALL load and be interactive within 3 seconds on 3G connection
2. THE App SHALL work without JavaScript for basic content display (progressive enhancement)
3. THE App SHALL support keyboard navigation throughout
4. THE App SHALL include proper ARIA labels for screen readers
5. THE App SHALL respect prefers-reduced-motion settings
6. THE App SHALL not require any backend or API calls (fully client-side)

---

## Data Structures

### Material Pricing Data
```javascript
{
  flooring: {
    Tile: { material: 4.50, labor: 3.25 },
    Wood: { material: 8.75, labor: 4.50 }
  },
  wallFinish: {
    Paint: { material: 2.25, labor: 1.75 },
    Wallpaper: { material: 6.50, labor: 4.25 }
  },
  lighting: {
    Warm: { material: 12.50, labor: 8.00 },
    Cool: { material: 10.75, labor: 8.00 }
  }
}
```

### Furniture Recommendation Data
```javascript
{
  Small: {
    Modern: {
      layout: "Low-Profile Furniture with Hidden Storage",
      tradeOff: "Less visible storage space, but the room appears 2x larger",
      pieces: ["Platform Bed", "Floating Shelves", "Nesting Tables"]
    },
    Rustic: {
      layout: "Multi-functional Vintage Pieces",
      tradeOff: "Limited seating options, but authentic character preserved",
      pieces: ["Storage Bench", "Ladder Shelf", "Trunk Coffee Table"]
    },
    Industrial: {
      layout: "Wall-Mounted Shelving with Compact Seating",
      tradeOff: "Reduced floor comfort, but maximum floor space maintained",
      pieces: ["Pipe Shelving", "Metal Stool", "Folding Desk"]
    }
  }
  // ... Medium and Large configurations
}
```

### Reddit Thread Data Structure
```javascript
{
  id: "thread_001",
  title: "Thread title here",
  author: "username",
  subreddit: "r/SubredditName",
  upvotes: 1234,
  comments: 89,
  timeAgo: "3 hours ago",
  tags: ["material", "style", "general"]
}
```

---

## Technical Constraints

1. **No Backend Required**: All logic runs client-side in vanilla JavaScript
2. **No External Dependencies**: Only Google Fonts CDN allowed
3. **Single HTML File**: All views contained in one HTML document
4. **CSS-Only 3D**: No WebGL or Three.js - pure CSS transforms
5. **Local Storage Only**: No cookies or external data storage
6. **Cross-Browser**: Must work on Chrome, Firefox, Safari, Edge (latest versions)
