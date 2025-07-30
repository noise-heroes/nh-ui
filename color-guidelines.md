# Noise Heroes Color System Guidelines

## Overview
The Noise Heroes color system is built on three vibrant brand colors that work harmoniously together:
- **Blue** (Primary): `hsl(217, 91%, 60%)` - Trust, stability, and innovation
- **Purple** (Secondary): `hsl(271, 91%, 65%)` - Creativity, uniqueness, and energy
- **Teal** (Tertiary): `hsl(174, 83%, 63%)` - Growth, clarity, and balance

## Color Usage Principles

### 1. Primary Actions & Focus
- Use **Blue-500** for primary CTAs, important links, and active states
- Apply **Blue-600** for hover states on primary elements
- Use **Blue-100** to **Blue-200** for subtle backgrounds and highlights

### 2. Creative & Special Elements
- Use **Purple-500** for creative features, premium content, or special highlights
- Apply purple gradients for eye-catching headers or feature sections
- Use **Purple-100** to **Purple-200** for light accent backgrounds

### 3. Success & Information
- Use **Teal-500** for success states, completed actions, and positive feedback
- Apply teal for data visualization and informational graphics
- Use **Teal-100** to **Teal-200** for success message backgrounds

### 4. Semantic Colors
- **Success**: Green - Use for positive actions, confirmations, and successful operations
- **Warning**: Amber - Use for cautions, important notices, and warnings
- **Error**: Red - Use for errors, destructive actions, and critical alerts
- **Info**: Blue - Use for informational messages and helpful tips

## Accessibility Guidelines

### WCAG Compliance
All color combinations must meet WCAG standards:

#### Text on Background - Minimum Contrast Ratios
- **Normal text**: 4.5:1 (AA) / 7:1 (AAA)
- **Large text** (18pt+): 3:1 (AA) / 4.5:1 (AAA)

#### Tested Combinations (AA Compliant)
**Light Mode:**
- Gray-900 on White: 17.1:1 ✓
- Gray-700 on White: 8.5:1 ✓
- Blue-700 on White: 4.7:1 ✓
- Purple-700 on White: 4.6:1 ✓
- White on Blue-500: 3.3:1 (use Blue-600 for better contrast)
- White on Purple-500: 2.7:1 (use Purple-700 for text)
- White on Teal-700: 4.5:1 ✓

**Dark Mode:**
- Gray-50 on Gray-950: 17.3:1 ✓
- Gray-200 on Gray-950: 12.6:1 ✓
- Blue-400 on Gray-950: 9.2:1 ✓
- Purple-400 on Gray-950: 7.1:1 ✓
- Teal-400 on Gray-950: 10.8:1 ✓

### Color Blind Considerations
- Don't rely solely on color to convey information
- Use icons, patterns, or text labels alongside color
- Test designs with color blindness simulators
- Ensure sufficient contrast between different UI elements

## Gradient Usage

### Primary Gradients
1. **Hero Gradient**: Use `--nh-gradient-primary` for main hero sections
2. **Feature Gradient**: Use `--nh-gradient-secondary` for feature highlights
3. **Subtle Gradient**: Use `--nh-gradient-subtle` for light backgrounds

### Gradient Best Practices
- Use gradients sparingly to maintain visual hierarchy
- Apply to larger elements like headers, cards, or backgrounds
- Avoid gradients on small text or icons
- Consider performance impact of complex gradients

## Implementation Examples

### CSS Usage
```css
/* Primary button */
.btn-primary {
  background-color: var(--nh-blue-500);
  color: white;
}

.btn-primary:hover {
  background-color: var(--nh-blue-600);
}

/* Success message */
.alert-success {
  background-color: var(--nh-success-light);
  color: var(--nh-success-dark);
  border: 1px solid var(--nh-success);
}

/* Gradient text */
.hero-title {
  background: var(--nh-gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Dark mode support */
.card {
  background-color: var(--nh-surface-primary);
  color: var(--nh-text-primary);
  border: 1px solid var(--nh-border-primary);
}
```

### Component Examples
```jsx
// React/Tailwind example
<button className="bg-nh-blue-500 hover:bg-nh-blue-600 text-white">
  Primary Action
</button>

<div className="bg-gradient-to-r from-nh-blue-500 to-nh-purple-500">
  Gradient Header
</div>

<div className="bg-nh-surface-primary text-nh-text-primary">
  Adaptive content for light/dark mode
</div>
```

## Color Tokens Reference

### Spacing Between Shades
The color scale follows a consistent pattern:
- 50-100: Very light tints for backgrounds
- 200-300: Light shades for hover states and borders
- 400-600: Medium shades for primary UI elements
- 700-900: Dark shades for text and emphasis
- 950: Very dark for high contrast needs

### Alpha Transparency
Use RGB values with alpha for overlays and glass effects:
```css
/* 20% opacity blue overlay */
background-color: rgba(var(--nh-blue-rgb), 0.2);

/* 40% opacity purple shadow */
box-shadow: 0 4px 20px rgba(var(--nh-purple-rgb), 0.4);
```

## Do's and Don'ts

### Do's
- ✅ Use semantic colors for their intended purpose
- ✅ Test color combinations for accessibility
- ✅ Maintain consistency across similar UI elements
- ✅ Use the gradient system for visual interest
- ✅ Consider both light and dark modes

### Don'ts
- ❌ Don't use low contrast text combinations
- ❌ Don't overuse gradients or bright colors
- ❌ Don't mix semantic colors (e.g., using error color for success)
- ❌ Don't create new shades outside the system
- ❌ Don't forget to test with real users

## Tools & Resources

### Color Testing Tools
- WebAIM Contrast Checker
- Stark (Figma/Sketch plugin)
- Chrome DevTools (Lighthouse accessibility audit)
- Colorblinding (Chrome extension)

### Implementation Files
- `color-system.css`: Complete CSS custom properties
- `tailwind.config.js`: Tailwind CSS configuration (if using)
- Design tokens for Figma/Sketch available on request