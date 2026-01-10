# 🏠 RenoRef Pro - Competition Edition

> **Street-Smart Renovation Decision Tool** - A 4-tab SPA that helps homeowners make informed renovation decisions with professional architect-style recommendations.

![Industrial Theme](https://img.shields.io/badge/Theme-Industrial%20%2F%20Nimma%20Yatri-F4C430)
![Vanilla JS](https://img.shields.io/badge/JavaScript-Vanilla-yellow)
![CSS3](https://img.shields.io/badge/CSS-3D%20Transforms-blue)

## 🎯 Features

### 🥊 The Arena (Material Referee)
- Compare materials: Flooring (Tile vs Wood), Wall Finish (Paint vs Wallpaper), Lighting (Warm vs Cool)
- Constraint-based scoring: Budget, Pets, Climate, Room Area
- **3D Rotating Cube** with material textures
- Trade-off analysis and pros list

### 🧮 The Lab (Cost Calculator)
- Auto-syncs winner from Arena
- Real-time cost calculations
- Material + Labor + Tax breakdown
- Professional currency formatting

### 🛋️ The Studio (Style & Furniture Architect)
- Room Size selector (Small/Medium/Large)
- Vibe selector (Modern/Rustic/Industrial)
- **Blueprint-style recommendation cards**
- **Paint chip color swatches** with hex codes
- Material-linked furniture suggestions
- 9 unique combinations with trade-offs

### 📡 The Pulse (Community Feed)
- Reddit-style dark mode thread cards
- Contextual filtering based on selections
- Upvote arrows, comment counts, subreddit names

## 🎨 Design System

**Industrial / Nimma Yatri Aesthetic:**
- Background: `#121212` (Asphalt Black)
- Accent: `#F4C430` (Safety Yellow)
- Text: `#FFFFFF` (Pure White)
- Sharp edges, 2px yellow borders, no border-radius

**Typography:**
- Headers: Oswald (Bold, Condensed)
- Data: Courier Prime (Monospace)

## 📁 Project Structure

```
├── index.html        # Main application (4-tab SPA)
├── index.css         # Industrial styling
├── index.js          # Logic & state management
├── LICENSE           # MIT License
└── .kiro/
    └── specs/
        ├── requirements.md
        ├── design.md
        └── tasks.md
```

## 🚀 Quick Start

1. Clone the repository
2. Open `app.html` in your browser
3. No build process required - pure HTML/CSS/JS

## 💡 Key Technical Features

- **State Management**: Arena winner persists and influences Studio recommendations
- **Material-to-Furniture Mapping**: Tile → Industrial, Wood → Rustic, etc.
- **Pro-Tip Toast**: Yellow/black hazard stripes animation
- **3D CSS Cube**: Pure CSS transforms, no WebGL
- **Fixed Bottom Nav**: Mobile-optimized (position: fixed)
- **Blueprint Styling**: Grid overlay, dashed borders

## 📱 Responsive Design

- Mobile-first approach
- Fixed bottom navigation
- Touch-friendly controls (44px minimum targets)
- Supports portrait and landscape orientations

## 🏆 Competition Ready

Built for the Kiro Challenge Week 6 - featuring professional architect-style recommendations with industrial aesthetics.

## 📄 License

MIT License - See [LICENSE](LICENSE) file

---

**Built with ❤️ using Kiro IDE**
