# Design Document: Home Renovation Referee

## Overview

The Home Renovation Referee is a premium client-side web application that helps homeowners choose between renovation materials using an advanced glassmorphism interface with 3D material visualization and real-world cost calculations. The system uses vanilla JavaScript with a rule-based scoring algorithm to evaluate user constraints (Budget, Pets, Climate, Room Area) and provides winning recommendations with 3D material inspection cubes, accurate cost analysis, and animated trade-off alerts. The application follows a single-page architecture with no backend requirements, featuring cutting-edge CSS 3D transforms and glassmorphism design.

## Architecture

The system uses a simple client-side architecture:

```
┌─────────────────────────────────────┐
│        Client-Side Application      │
│  ┌─────────────────────────────────┐ │
│  │      index.html                 │ │
│  │  - Main structure               │ │
│  │  - Input form sections          │ │
│  │  - Results container (hidden)   │ │
│  │  - Tailwind CSS integration     │ │
│  └─────────────────────────────────┘ │
│  ┌─────────────────────────────────┐ │
│  │      style.css                  │ │
│  │  - Custom Referee theme         │ │
│  │  - Stripe patterns              │ │
│  │  - Whistle icon styling         │ │
│  │  - Color palette implementation │ │
│  └─────────────────────────────────┘ │
│  ┌─────────────────────────────────┐ │
│  │      logic.js                   │ │
│  │  - renovationData structure     │ │
│  │  - calculateWinner() function   │ │
│  │  - generateTradeOff() function  │ │
│  │  - DOM manipulation logic       │ │
│  └─────────────────────────────────┘ │
└─────────────────────────────────────┘
```

## Components and Interfaces

### HTML Structure (index.html)

**Section 1: Dilemma Selection**
- Dropdown for choosing between Flooring, Wall Finish, and Lighting
- Glassmorphism card layout with translucent backgrounds

**Section 2: Constraint Form**
- Form inputs for Budget, Pets, Climate, and Room Area (sq ft)
- Validation indicators and user-friendly labels
- Glassmorphism styling with blur effects

**Section 3: Action Trigger**
- "The Referee's Whistle" button with glassmorphism styling
- Loading state indicators during processing

**Section 4: Results Display**
- Result card with slide-up and fade-in animations
- Winner display with 3D Material Inspection cube
- Pros section with clear formatting
- Trade-off Alert with cost calculations and glassmorphism design

### CSS Styling (style.css)

**Glassmorphism Theme Elements**
- Translucent backgrounds with backdrop-blur filters
- Subtle gradients and glass-like effects
- Advanced CSS 3D transforms for material cubes
- Smooth animations and transitions

**3D Material Inspection**
- CSS 3D cube with transform-style: preserve-3d
- Continuous rotation keyframe animations
- Material texture mapping with placeholder URLs
- Smooth 60fps performance optimization

**Color Palette**
- Translucent Blues: Primary glassmorphism elements
- Glass White: Semi-transparent backgrounds
- Warning Yellow: Trade-off alert highlighting with transparency
- Gradient accents for premium feel

### JavaScript Logic (logic.js)

**Enhanced renovationData Structure**
```javascript
const renovationData = {
  flooring: {
    options: ['Tile', 'Wood'],
    scoringRules: { /* budget, pets, climate, area factors */ },
    tradeOffs: { /* cost-aware trade-off messages */ },
    pricing: { /* price per square foot data */ },
    textures: { /* 3D cube texture URLs */ }
  }
  // ... other categories
}
```

**calculateWinner() Function**
- Enhanced with cost calculation integration
- Takes user inputs including room area
- Applies scoring rules and cost analysis
- Returns winning option with cost data
- Interface: `calculateWinner(dilemma, constraints) => { winner, score, reasoning, costs }`

**generateTradeOff() Function**
- Enhanced with cost difference calculations
- Returns cost-aware trade-off messages
- Contextual to user's situation and budget
- Interface: `generateTradeOff(winner, constraints, costs) => tradeOffMessage`

**Material3D() Function**
- Creates and animates 3D material cubes
- Applies material textures dynamically
- Manages smooth rotation animations
- Interface: `Material3D(materialType) => cubeElement`

**CostCalculator() Function**
- Calculates total costs based on room area
- Compares material pricing differences
- Formats currency display
- Interface: `CostCalculator(material, area) => { total, difference }`

## Data Models

```javascript
// Enhanced User Input Structure
const userConstraints = {
  dilemma: 'flooring' | 'wallFinish' | 'lighting',
  budget: 'low' | 'medium' | 'high',
  pets: boolean,
  climate: 'humid' | 'dry' | 'cold',
  roomArea: number // square feet (50-5000)
}

// Enhanced Renovation Data Structure
const renovationCategory = {
  options: [string, string],
  scoringRules: {
    budget: { low: {}, medium: {}, high: {} },
    pets: { true: {}, false: {} },
    climate: { humid: {}, dry: {}, cold: {} }
  },
  pricing: {
    [option]: number // price per square foot
  },
  textures: {
    [option]: string // texture URL for 3D cube
  },
  tradeOffs: {
    [option]: {
      [constraint]: "cost-aware trade-off message"
    }
  }
}

// Enhanced Result Structure
const recommendationResult = {
  winner: string,
  pros: string[],
  tradeOffAlert: string,
  confidence: number,
  costs: {
    winner: number,
    alternative: number,
    difference: number,
    savings: boolean
  },
  texture: string
}

// 3D Material Cube Structure
const materialCube = {
  element: HTMLElement,
  texture: string,
  rotationSpeed: number,
  animationId: number
}
```

## Specific Implementation Rules

**Pet + Flooring Logic with Cost Analysis**
- When pets = true AND dilemma = flooring
- Penalize 'Wood' (scratch susceptibility)
- Boost 'Tile' (durability against claws)
- Calculate cost difference: "Tiles are durable against claws, but they will be cold underfoot in winter. However, you'll save ₹X,XXX compared to wood for this room size."

**Enhanced Scoring Algorithm**
- Each option starts with base score
- Apply constraint-specific modifiers
- Factor in cost considerations based on budget
- Highest score wins with cost analysis
- Generate contextual reasoning with pricing

**3D Material Visualization**
- CSS 3D cube with 6 faces showing material texture
- Continuous rotation using transform: rotateX() rotateY()
- Smooth 60fps animation with requestAnimationFrame
- Material-specific texture mapping from placeholder URLs

**Glassmorphism UI Behavior**
- Translucent backgrounds with backdrop-blur(10px)
- Subtle gradients and glass-like effects
- Results container slides up with transform: translateY()
- Fade-in animation with opacity transitions
- Smooth hover and focus state transitions

**Cost Calculator Integration**
- Real-time cost calculations based on room area
- Price per square foot data for all materials
- Currency formatting with locale-specific display
- Cost difference highlighting in trade-off messages

### Property Reflection

After reviewing the prework analysis, several properties can be consolidated:
- Properties 5.1 and 5.2 are redundant (both test deterministic behavior)
- Input validation properties 1.2, 1.3, 1.4, 1.5 can be combined into one comprehensive validation property
- Recommendation completeness properties 3.2, 4.1, 4.4 can be combined to test that all required elements are present

Property 1: Input validation consistency
*For any* user input, the system should accept all and only the valid constraint values (living/bedroom/kitchen for room type, low/medium/high for budget, humid/dry/cold for climate, pets/kids/rental/none for special conditions)
**Validates: Requirements 1.2, 1.3, 1.4, 1.5**

Property 2: Material category structure
*For any* material category, the system should present exactly two material options for comparison
**Validates: Requirements 2.2**

Property 3: Recommendation completeness
*For any* valid constraint combination, the system should generate a complete recommendation containing a winning choice, reasoning that addresses the specific constraints, and trade-off analysis explaining sacrificed benefits
**Validates: Requirements 3.1, 3.2, 3.4, 4.1, 4.2, 4.3, 4.4**

Property 4: Deterministic recommendations
*For any* valid constraint combination, processing the same constraints multiple times should produce identical recommendations
**Validates: Requirements 5.1, 5.2**

Property 5: Invalid input rejection
*For any* invalid or incomplete constraint data, the system should prevent analysis and provide appropriate error feedback
**Validates: Requirements 5.3**

## Error Handling

The system implements comprehensive error handling at multiple layers:

**Input Validation Errors**
- Invalid constraint values are rejected with specific error messages
- Incomplete constraint sets prevent recommendation generation
- Malformed requests return structured error responses

**Recommendation Engine Errors**
- Missing material data triggers fallback recommendations
- Conflicting constraint scenarios are resolved with priority rules
- Calculation errors are logged and return user-friendly messages

**System-Level Errors**
- Network failures are handled with retry mechanisms
- Database unavailability triggers cached response mode
- Unexpected errors are logged with correlation IDs for debugging

## Testing Strategy

The testing approach combines unit testing for specific functionality with property-based testing for universal behaviors:

**Unit Testing**
- Test specific constraint combinations with known expected outcomes
- Verify UI component rendering with sample data
- Test API endpoints with valid and invalid payloads
- Test error handling scenarios with controlled failure conditions

**Property-Based Testing**
Using **fast-check** for JavaScript property-based testing with minimum 100 iterations per property:

- **Property 1**: Generate random constraint combinations and verify input validation
- **Property 2**: Generate random material categories and verify two-option structure  
- **Property 3**: Generate random valid constraints and verify complete recommendation output
- **Property 4**: Generate random constraints and verify deterministic behavior across multiple calls
- **Property 5**: Generate random invalid constraints and verify appropriate rejection

Each property-based test will be tagged with comments referencing the specific correctness property from this design document using the format: **Feature: home-renovation-referee, Property {number}: {property_text}**

**Integration Testing**
- End-to-end user workflows from constraint input to recommendation display
- API integration between frontend and backend components
- Database integration for material property retrieval

The dual testing approach ensures both concrete functionality (unit tests) and universal correctness guarantees (property tests) are validated throughout development.