# Design Document - RenoRef Pro (Competition Edition)

## Overview

RenoRef Pro is a competition-level renovation decision tool built as a 4-tab Single Page Application with a strict Industrial / Nimma Yatri aesthetic. The design emphasizes high contrast, sharp edges, and a street-smart visual language that conveys authority and trustworthiness.

## Architecture

### Application Structure
```
RenoRef Pro
├── App Shell (Fixed Container)
│   ├── Content Viewport (Scrollable)
│   │   ├── View: Arena (Material Referee)
│   │   ├── View: Lab (Cost Calculator)
│   │   ├── View: Studio (Style & Furniture)
│   │   └── View: Pulse (Community Feed)
│   ├── Bottom Navigation (Fixed)
│   └── Pro-Tip Toast (Overlay)
└── Loading Overlay (Modal)
```

### View Switching System
- Views use `display: none/block` for switching (no transform-based animations)
- Active view receives `.active` class
- Fade-in animation on view activation
- State preserved across view switches

---

## Components and Interfaces

### 1. Bottom Navigation Component

```css
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: #121212;
  border-top: 2px solid #F4C430;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1000;
}
```


#### Navigation Item Structure
```html
<button class="nav-item" data-target="arena">
  <svg class="nav-icon"><!-- Boxing Glove SVG --></svg>
  <span class="nav-label">ARENA</span>
</button>
```

#### SVG Icons for 4 Tabs

**Arena (Boxing Glove)**
```svg
<svg viewBox="0 0 24 24" fill="currentColor">
  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l4.59-4.58L18 11l-6 6z"/>
</svg>
```

**Lab (Calculator)**
```svg
<svg viewBox="0 0 24 24" fill="currentColor">
  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 2h2v2h-2V5zm0 4h2v2h-2V9zm-4-4h2v2H8V5zm0 4h2v2H8V9zm-1 4h6v2H7v-2zm10 4H7v-2h10v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"/>
</svg>
```

**Studio (Sofa)**
```svg
<svg viewBox="0 0 24 24" fill="currentColor">
  <path d="M21 9V7c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v2c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h1v2h2v-2h12v2h2v-2h1c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zm-2-2v3h-4V7h4zM5 7h4v3H5V7zm16 8H3v-4h3v1c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-1h3v4z"/>
</svg>
```

**Pulse (Heartbeat)**
```svg
<svg viewBox="0 0 24 24" fill="currentColor">
  <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"/>
</svg>
```

---

### 2. Industrial Card System

```css
.industrial-card {
  background: #1E1E1E;
  border: 2px solid #F4C430;
  border-radius: 0; /* Sharp edges - NO radius */
  padding: 20px;
  margin-bottom: 16px;
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid #3A3A3A;
}

.card-title {
  font-family: 'Oswald', sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
  color: #F4C430;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
```

---

### 3. The Studio - Blueprint Cards

The Studio uses a unique "Blueprint" aesthetic for furniture recommendations.

```css
.blueprint-card {
  background: linear-gradient(135deg, #0a1628 0%, #1a2a4a 100%);
  border: 2px solid #4a90d9;
  padding: 24px;
  position: relative;
  overflow: hidden;
}

/* Blueprint grid overlay */
.blueprint-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    linear-gradient(rgba(74, 144, 217, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(74, 144, 217, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
  pointer-events: none;
}

.blueprint-title {
  font-family: 'Courier Prime', monospace;
  font-weight: 700;
  font-size: 1.125rem;
  color: #FFFFFF;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border-bottom: 1px dashed #4a90d9;
  padding-bottom: 8px;
  margin-bottom: 16px;
}

.blueprint-content {
  font-family: 'Courier Prime', monospace;
  color: #a8c8e8;
  line-height: 1.6;
}

/* Furniture piece list */
.furniture-list {
  list-style: none;
  padding: 0;
}

.furniture-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 0;
  border-bottom: 1px dotted rgba(74, 144, 217, 0.3);
  color: #FFFFFF;
}

.furniture-item::before {
  content: '▸';
  color: #4a90d9;
  font-size: 1.25rem;
}
```


---

### 4. Paint Chip Color Swatches

```css
.color-palette {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 16px;
}

.paint-chip {
  width: 80px;
  height: 100px;
  position: relative;
  box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.3);
}

.paint-chip-color {
  width: 100%;
  height: 70%;
  border: 2px solid #F4C430;
}

.paint-chip-label {
  width: 100%;
  height: 30%;
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4px;
}

.paint-chip-name {
  font-family: 'Oswald', sans-serif;
  font-size: 0.625rem;
  font-weight: 600;
  color: #121212;
  text-transform: uppercase;
}

.paint-chip-hex {
  font-family: 'Courier Prime', monospace;
  font-size: 0.625rem;
  color: #666666;
}
```

#### Paint Chip HTML Structure
```html
<div class="paint-chip">
  <div class="paint-chip-color" style="background: #F4C430;"></div>
  <div class="paint-chip-label">
    <span class="paint-chip-name">Safety</span>
    <span class="paint-chip-hex">#F4C430</span>
  </div>
</div>
```

---

### 5. The Pulse - Reddit-Style Thread Cards

```css
.reddit-card {
  background: #1E1E1E;
  border: 2px solid #3A3A3A;
  padding: 16px;
  display: flex;
  gap: 12px;
  transition: border-color 0.2s ease;
}

.reddit-card:hover {
  border-color: #F4C430;
}

.reddit-vote {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 40px;
  gap: 4px;
}

.vote-arrow-up {
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 14px solid #F4C430;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.vote-arrow-up:hover {
  transform: scale(1.2);
}

.vote-count {
  font-family: 'Courier Prime', monospace;
  font-weight: 700;
  color: #F4C430;
  font-size: 0.875rem;
}

.reddit-content {
  flex: 1;
}

.reddit-title {
  font-family: 'Oswald', sans-serif;
  font-weight: 600;
  color: #FFFFFF;
  font-size: 1rem;
  margin-bottom: 8px;
  line-height: 1.3;
}

.reddit-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: 'Oswald', sans-serif;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.02em;
  flex-wrap: wrap;
}

.reddit-author {
  color: #F4C430;
}

.reddit-subreddit {
  color: rgba(255, 255, 255, 0.8);
}

.reddit-comments {
  display: flex;
  align-items: center;
  gap: 4px;
}

.reddit-comments::before {
  content: '💬';
  font-size: 12px;
}
```

---

### 6. Pro-Tip Toast (Yellow/Black Stripes)

```css
.pro-tip-toast {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: repeating-linear-gradient(
    45deg,
    #F4C430,
    #F4C430 10px,
    #121212 10px,
    #121212 20px
  );
  padding: 4px;
  transform: translateY(-100%);
  transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  z-index: 1001;
}

.pro-tip-toast.visible {
  transform: translateY(0);
}

.pro-tip-toast-inner {
  background: #121212;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.pro-tip-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.pro-tip-text {
  flex: 1;
  font-family: 'Oswald', sans-serif;
  font-weight: 500;
  color: #FFFFFF;
  font-size: 0.875rem;
}

.pro-tip-close {
  background: #F4C430;
  border: none;
  color: #121212;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
}
```


---

## Data Models

### App State Model
```javascript
const appState = {
  currentView: 'arena', // arena | lab | studio | pulse
  arena: {
    dilemma: null,
    constraints: { budget: null, pets: null, climate: null, roomArea: null },
    winner: null,
    recommendation: null
  },
  lab: {
    selectedMaterial: null,
    calculations: { material: 0, labor: 0, tax: 0, total: 0 }
  },
  studio: {
    roomSize: null,    // small | medium | large
    vibe: null,        // modern | rustic | industrial
    function: null,    // living | bedroom | office | dining
    recommendation: null
  },
  pulse: {
    filter: 'all',     // all | material | style
    threads: []
  }
};
```

### Furniture Recommendation Model
```javascript
const furnitureData = {
  small: {
    modern: {
      layout: "Low-Profile Furniture with Hidden Storage",
      tradeOff: "Less visible storage space, but the room appears 2x larger",
      pieces: ["Platform Bed", "Floating Shelves", "Nesting Tables", "Wall-Mounted TV"],
      palette: {
        primary: { name: "Pure White", hex: "#FFFFFF" },
        secondary: { name: "Charcoal", hex: "#2C3E50" },
        accent: { name: "Electric Blue", hex: "#3498DB" }
      }
    },
    rustic: {
      layout: "Multi-functional Vintage Pieces",
      tradeOff: "Limited seating options, but authentic character preserved",
      pieces: ["Storage Bench", "Ladder Shelf", "Trunk Coffee Table", "Wicker Baskets"],
      palette: {
        primary: { name: "Warm Cream", hex: "#F5E6D3" },
        secondary: { name: "Saddle Brown", hex: "#8B4513" },
        accent: { name: "Forest Green", hex: "#228B22" }
      }
    },
    industrial: {
      layout: "Wall-Mounted Shelving with Compact Seating",
      tradeOff: "Reduced floor comfort, but maximum floor space maintained",
      pieces: ["Pipe Shelving", "Metal Stool", "Folding Desk", "Wire Baskets"],
      palette: {
        primary: { name: "Dark Charcoal", hex: "#2F2F2F" },
        secondary: { name: "Copper", hex: "#B87333" },
        accent: { name: "Safety Yellow", hex: "#F4C430" }
      }
    }
  },
  medium: {
    modern: {
      layout: "Modular Sectional with Statement Lighting",
      tradeOff: "Higher cost for quality pieces, but flexible arrangement options",
      pieces: ["L-Shaped Sectional", "Arc Floor Lamp", "Glass Coffee Table", "Media Console"],
      palette: {
        primary: { name: "Cool Gray", hex: "#E5E5E5" },
        secondary: { name: "Navy", hex: "#1A365D" },
        accent: { name: "Coral", hex: "#FF6B6B" }
      }
    },
    rustic: {
      layout: "Farmhouse Table with Mixed Seating",
      tradeOff: "Requires more maintenance, but creates warm gathering space",
      pieces: ["Farmhouse Dining Table", "Windsor Chairs", "Bench Seating", "Hutch Cabinet"],
      palette: {
        primary: { name: "Antique White", hex: "#FAEBD7" },
        secondary: { name: "Barn Red", hex: "#7C0A02" },
        accent: { name: "Sage Green", hex: "#9CAF88" }
      }
    },
    industrial: {
      layout: "Metal Frame Furniture with Leather Accents",
      tradeOff: "Can feel cold, but extremely durable and timeless",
      pieces: ["Leather Sofa", "Metal Coffee Table", "Factory Cart Bar", "Edison Pendant"],
      palette: {
        primary: { name: "Concrete Gray", hex: "#95A5A6" },
        secondary: { name: "Rust", hex: "#B7410E" },
        accent: { name: "Brass", hex: "#D4AF37" }
      }
    }
  },
  large: {
    modern: {
      layout: "Zoned Layout with Designer Anchor Pieces",
      tradeOff: "Significant investment required, but creates magazine-worthy space",
      pieces: ["Designer Sofa", "Statement Art", "Sculptural Lighting", "Area Rugs for Zones"],
      palette: {
        primary: { name: "Bright White", hex: "#FFFFFF" },
        secondary: { name: "Black", hex: "#000000" },
        accent: { name: "Gold", hex: "#FFD700" }
      }
    },
    rustic: {
      layout: "Oversized Comfort Pieces with Natural Textures",
      tradeOff: "Can overwhelm smaller furniture, but ultimate comfort achieved",
      pieces: ["Oversized Sectional", "Reclaimed Wood Table", "Stone Fireplace", "Woven Textiles"],
      palette: {
        primary: { name: "Linen", hex: "#FAF0E6" },
        secondary: { name: "Walnut", hex: "#5D432C" },
        accent: { name: "Terracotta", hex: "#E2725B" }
      }
    },
    industrial: {
      layout: "Open Plan with Statement Industrial Fixtures",
      tradeOff: "Acoustics may suffer, but dramatic visual impact guaranteed",
      pieces: ["Warehouse Pendant Cluster", "Concrete Dining Table", "Metal Bookshelf Wall", "Exposed Ductwork"],
      palette: {
        primary: { name: "Raw Concrete", hex: "#8B8B8B" },
        secondary: { name: "Matte Black", hex: "#1C1C1C" },
        accent: { name: "Neon Orange", hex: "#FF6600" }
      }
    }
  }
};
```


### Reddit Thread Model
```javascript
const redditThreads = {
  material: {
    tile: [
      { id: "t1", title: "Why I regret wood floors - 2 years later", author: "HomeOwner2024", subreddit: "r/HomeImprovement", upvotes: 1247, comments: 89 },
      { id: "t2", title: "Best grout colors for 2026", author: "TileProInstaller", subreddit: "r/Tile", upvotes: 892, comments: 156 }
    ],
    wood: [
      { id: "w1", title: "Hardwood maintenance tips that actually work", author: "WoodFloorLover", subreddit: "r/Flooring", upvotes: 2156, comments: 234 },
      { id: "w2", title: "Pet damage on hardwood - My $3000 mistake", author: "DogOwnerRegrets", subreddit: "r/HomeImprovement", upvotes: 1834, comments: 167 }
    ]
  },
  style: {
    modern: [
      { id: "m1", title: "Minimalist living room transformation", author: "ModernMinimalist", subreddit: "r/InteriorDesign", upvotes: 3421, comments: 287 },
      { id: "m2", title: "Best modern furniture brands under $2000", author: "BudgetDesigner", subreddit: "r/malelivingspace", upvotes: 1567, comments: 198 }
    ],
    rustic: [
      { id: "r1", title: "DIY farmhouse table build - Complete guide", author: "WoodworkingDad", subreddit: "r/DIY", upvotes: 4521, comments: 312 },
      { id: "r2", title: "Rustic decor that doesn't look dated", author: "InteriorPro", subreddit: "r/HomeDecorating", upvotes: 2134, comments: 178 }
    ],
    industrial: [
      { id: "i1", title: "Loft conversion with exposed brick - Before/After", author: "LoftLiving", subreddit: "r/AmateurRoomPorn", upvotes: 5678, comments: 423 },
      { id: "i2", title: "Where to find authentic industrial furniture", author: "VintageHunter", subreddit: "r/InteriorDesign", upvotes: 1892, comments: 156 }
    ]
  }
};
```

---

## Error Handling

### Form Validation States
```css
.input-error {
  border-color: #FF4444 !important;
  animation: shake 0.3s ease;
}

.input-success {
  border-color: #00FF88 !important;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}

.error-message {
  color: #FF4444;
  font-size: 0.75rem;
  margin-top: 4px;
  font-family: 'Oswald', sans-serif;
}
```

### Empty State Displays
```css
.empty-state {
  text-align: center;
  padding: 40px 20px;
  color: rgba(255, 255, 255, 0.6);
}

.empty-state-icon {
  font-size: 3rem;
  margin-bottom: 16px;
  opacity: 0.5;
}

.empty-state-title {
  font-family: 'Oswald', sans-serif;
  font-weight: 600;
  font-size: 1.25rem;
  color: #F4C430;
  margin-bottom: 8px;
}

.empty-state-text {
  font-size: 0.875rem;
  line-height: 1.5;
}
```

---

## Testing Strategy

### Unit Tests
- Test scoring algorithm with various constraint combinations
- Test furniture recommendation logic for all 9 combinations
- Test cost calculation accuracy
- Test color palette generation

### Integration Tests
- Test data sync between Arena → Lab
- Test data sync between Arena/Studio → Pulse
- Test view switching preserves state
- Test Pro-Tip triggers on correct events

### Visual Tests
- Test responsive breakpoints (320px, 768px, 1024px, 1440px)
- Test color contrast meets WCAG AA
- Test touch targets are minimum 44px
- Test animations respect reduced-motion preference

---

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system.*

### Property 1: Scoring Consistency
*For any* set of constraints, the Referee_Engine SHALL always produce the same winner when given identical inputs.
**Validates: Requirements 2.4**

### Property 2: Cost Calculation Accuracy
*For any* room area and material costs, the total cost SHALL equal (area × material) + (area × labor) + ((material + labor) × 0.085).
**Validates: Requirements 3.5**

### Property 3: Furniture Recommendation Completeness
*For any* valid combination of room size and vibe, the Studio SHALL return a non-empty layout, trade-off, pieces array, and palette.
**Validates: Requirements 4.3**

### Property 4: Data Synchronization Integrity
*For any* winner selected in Arena, the Lab SHALL display the same material name and correct pricing within 100ms.
**Validates: Requirements 8.1, 8.2**

### Property 5: View State Preservation
*For any* sequence of view switches, all user inputs SHALL be preserved and restored when returning to a previously visited view.
**Validates: Requirements 8.5**

### Property 6: Thread Filtering Accuracy
*For any* material or style selection, the Pulse SHALL display only threads tagged with the corresponding category.
**Validates: Requirements 5.3, 5.4**
