# Design Document - RenoRef (Minimalist Edition)

## Overview

RenoRef follows Swiss Design principles with emphasis on clarity, whitespace, and trust. The aesthetic is inspired by Notion, Apple, and high-end productivity tools. Every element serves a purpose, and the design prioritizes readability over decoration.

## Design Philosophy

- **Clarity over cleverness**: Every label should be immediately understood
- **Whitespace is a feature**: Let content breathe
- **Trust through simplicity**: Professional appearance builds confidence
- **Calm over excitement**: No aggressive colors or animations

---

## Visual Specifications

### Color Palette

```css
:root {
  /* Backgrounds */
  --bg-primary: #FFFFFF;
  --bg-secondary: #FAFAFA;
  --bg-card: #FFFFFF;
  
  /* Text */
  --text-primary: #333333;
  --text-secondary: #666666;
  --text-muted: #999999;
  
  /* Accent */
  --accent-primary: #4A90E2;    /* Soft Blue - trustworthy */
  --accent-hover: #357ABD;
  --accent-light: #E8F1FC;
  
  /* Borders & Dividers */
  --border-light: #E0E0E0;
  --border-medium: #D0D0D0;
  
  /* Semantic */
  --note-bg: #FFF9E6;           /* Soft cream for trade-offs */
  --note-border: #F0E6C8;
  --success: #4CAF50;
  --success-light: #E8F5E9;
}
```

### Typography

```css
/* Font Stack */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Scale */
--text-xs: 0.75rem;    /* 12px - labels, metadata */
--text-sm: 0.875rem;   /* 14px - body small */
--text-base: 1rem;     /* 16px - body */
--text-lg: 1.125rem;   /* 18px - emphasis */
--text-xl: 1.25rem;    /* 20px - section headers */
--text-2xl: 1.5rem;    /* 24px - page titles */
--text-3xl: 2rem;      /* 32px - hero numbers */

/* Weights */
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
```

### Spacing System

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-8: 32px;
--space-10: 40px;
--space-12: 48px;
```

---

## Components

### 1. Card Component

```css
.card {
  background: var(--bg-card);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid var(--border-light);
}

.card-title {
  font-size: var(--text-lg);
  font-weight: var(--font-semibold);
  color: var(--text-primary);
  margin-bottom: var(--space-4);
}
```

### 2. Bottom Navigation

```css
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 72px;
  background: var(--bg-primary);
  border-top: 1px solid var(--border-light);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 var(--space-4);
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 8px 16px;
  color: var(--text-muted);
  text-decoration: none;
  transition: color 0.2s ease;
}

.nav-item.active {
  color: var(--accent-primary);
}

.nav-icon {
  width: 24px;
  height: 24px;
  stroke-width: 1.5;
}

.nav-label {
  font-size: var(--text-xs);
  font-weight: var(--font-medium);
}
```

### 3. Form Elements

```css
.form-group {
  margin-bottom: var(--space-5);
}

.form-label {
  display: block;
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--text-secondary);
  margin-bottom: var(--space-2);
}

.form-select,
.form-input {
  width: 100%;
  padding: 12px 16px;
  font-size: var(--text-base);
  border: 1px solid var(--border-light);
  border-radius: 8px;
  background: var(--bg-primary);
  color: var(--text-primary);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.form-select:focus,
.form-input:focus {
  outline: none;
  border-color: var(--accent-primary);
  box-shadow: 0 0 0 3px var(--accent-light);
}
```

### 4. Trade-Off Note

```css
.trade-off-note {
  background: var(--note-bg);
  border: 1px solid var(--note-border);
  border-radius: 8px;
  padding: 16px 20px;
  margin: var(--space-4) 0;
}

.trade-off-note::before {
  content: "📝";
  margin-right: 8px;
}

.trade-off-note p {
  color: var(--text-primary);
  font-size: var(--text-sm);
  line-height: 1.6;
  margin: 0;
}
```

### 5. Comparison Cards (Side-by-Side)

```css
.comparison-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4);
}

@media (max-width: 640px) {
  .comparison-grid {
    grid-template-columns: 1fr;
  }
}

.comparison-card {
  background: var(--bg-card);
  border-radius: 12px;
  padding: 24px;
  border: 1px solid var(--border-light);
  position: relative;
}

.comparison-card.recommended {
  border-color: var(--accent-primary);
  box-shadow: 0 0 0 1px var(--accent-primary);
}

.recommended-badge {
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--accent-primary);
  color: white;
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  padding: 4px 12px;
  border-radius: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.pros-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.pros-list li {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 8px 0;
  font-size: var(--text-sm);
  color: var(--text-primary);
}

.pros-list li::before {
  content: "✓";
  color: var(--success);
  font-weight: bold;
  flex-shrink: 0;
}
```


### 6. Budget Calculator

```css
.budget-display {
  text-align: center;
  padding: var(--space-8) 0;
}

.budget-total {
  font-size: var(--text-3xl);
  font-weight: var(--font-semibold);
  color: var(--text-primary);
}

.budget-label {
  font-size: var(--text-sm);
  color: var(--text-muted);
  margin-top: var(--space-1);
}

.budget-breakdown {
  margin-top: var(--space-6);
}

.budget-row {
  display: flex;
  justify-content: space-between;
  padding: var(--space-3) 0;
  border-bottom: 1px solid var(--border-light);
  font-size: var(--text-sm);
}

.budget-row:last-child {
  border-bottom: none;
}

.budget-row-label {
  color: var(--text-secondary);
}

.budget-row-value {
  color: var(--text-primary);
  font-weight: var(--font-medium);
}
```

### 7. Color Swatches

```css
.color-palette {
  display: flex;
  gap: var(--space-3);
  flex-wrap: wrap;
}

.color-swatch {
  width: 72px;
  text-align: center;
}

.swatch-color {
  width: 72px;
  height: 72px;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: var(--space-2);
}

.swatch-name {
  font-size: var(--text-xs);
  font-weight: var(--font-medium);
  color: var(--text-primary);
}

.swatch-hex {
  font-size: var(--text-xs);
  color: var(--text-muted);
  font-family: monospace;
}
```

### 8. Insight Cards (Reviews)

```css
.insight-card {
  background: var(--bg-card);
  border-radius: 12px;
  padding: 20px;
  border: 1px solid var(--border-light);
  margin-bottom: var(--space-3);
}

.insight-title {
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  color: var(--text-primary);
  margin-bottom: var(--space-2);
  line-height: 1.4;
}

.insight-meta {
  display: flex;
  gap: var(--space-4);
  font-size: var(--text-xs);
  color: var(--text-muted);
}

.insight-source {
  color: var(--accent-primary);
}
```

### 9. Material Sample (3D Cube)

```css
.material-sample {
  width: 120px;
  height: 120px;
  margin: var(--space-6) auto;
  perspective: 500px;
}

.sample-cube {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  animation: gentle-rotate 12s infinite linear;
}

@keyframes gentle-rotate {
  from { transform: rotateX(-15deg) rotateY(0deg); }
  to { transform: rotateX(-15deg) rotateY(360deg); }
}

.cube-face {
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
```

### 10. Primary Button

```css
.btn-primary {
  width: 100%;
  padding: 14px 24px;
  background: var(--accent-primary);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  cursor: pointer;
  transition: background 0.2s ease, transform 0.1s ease;
}

.btn-primary:hover {
  background: var(--accent-hover);
}

.btn-primary:active {
  transform: scale(0.98);
}

.btn-primary:disabled {
  background: var(--border-medium);
  cursor: not-allowed;
}
```

---

## Layout Structure

```
┌─────────────────────────────────────┐
│           Page Header               │
│         (Tab Title + Subtitle)      │
├─────────────────────────────────────┤
│                                     │
│         Main Content Area           │
│         (Cards, Forms, etc.)        │
│                                     │
│         Generous Padding            │
│         (24px on mobile)            │
│         (48px on desktop)           │
│                                     │
├─────────────────────────────────────┤
│         Bottom Navigation           │
│    [Decide] [Budget] [Design] [Reviews]    │
└─────────────────────────────────────┘
```

---

## Responsive Breakpoints

```css
/* Mobile First */
@media (min-width: 640px) {
  /* Tablet */
  .container { max-width: 640px; }
}

@media (min-width: 768px) {
  /* Small Desktop */
  .container { max-width: 720px; }
  .comparison-grid { grid-template-columns: 1fr 1fr; }
}

@media (min-width: 1024px) {
  /* Desktop */
  .container { max-width: 800px; }
  .bottom-nav { 
    max-width: 600px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 16px 16px 0 0;
  }
}
```

---

## Animation Guidelines

- **Duration**: 200-300ms for micro-interactions
- **Easing**: `ease` or `ease-out` for natural feel
- **Reduced Motion**: Respect `prefers-reduced-motion`
- **Purpose**: Only animate to provide feedback, never for decoration

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Accessibility

- Minimum contrast ratio: 4.5:1 for text
- Focus states: Visible outline using accent color
- Touch targets: Minimum 44px × 44px
- Labels: All form inputs have associated labels
- Semantic HTML: Proper heading hierarchy
