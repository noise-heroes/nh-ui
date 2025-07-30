# Noise Heroes Design System

## Design Philosophy: Minimal, Circular, Icon-First

The Noise Heroes Design System embraces minimalism through circular forms, pill-shaped elements, and icon-first communication. We combine this with our signature glass effects for a unique, modern aesthetic.

### Core Principles

1. **Circle & Pills**: Extensive use of circular elements and pill-shaped buttons for a soft, approachable feel.

2. **Icons Over Text**: Minimize text wherever possible, using clear iconography for universal understanding.

3. **Glass Containers, Flat Content**: All containers use frosted glass effects, while content within remains flat and clear.

4. **Playful Interactions**: Subtle rotations and scaling on hover create delightful micro-interactions.

5. **Minimal & Slim**: Clean lines, generous whitespace, and slim profiles throughout.

## Visual Language

### Glass Effects

```css
/* Base Glass Card */
.nh-glass-card {
  backdrop-filter: blur(12px) saturate(150%);
  background-color: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

/* Dark Mode Glass */
.dark .nh-glass-card {
  background-color: rgba(10, 10, 10, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

### Color System

- **Primary**: #FF5500 (Noise Orange)
- **Secondary**: #00D9B5 (Noise Teal)
- **Background**: Glass overlays on gradient or image backgrounds
- **Text**: High contrast flat colors for readability

### Typography

- **Headings**: Neue Haas Grotesk Display - Bold, flat, high contrast
- **Body**: Neue Haas Grotesk Display - Regular weight, optimal readability
- **Brand**: ABC Diatype Compressed - For special brand moments
- **Code**: SF Mono - Technical content

## Component Guidelines

### Cards

All cards use glass effects with flat content:

```tsx
<Card className="backdrop-blur-md bg-glass-light dark:bg-glass-dark border border-glass-light">
  <CardBody>
    <!-- Flat content here -->
  </CardBody>
</Card>
```

### Buttons

Buttons remain flat with subtle hover states:

```tsx
<Button color="primary" variant="flat">
  Flat Action
</Button>

<Button color="primary" variant="solid">
  Primary Action
</Button>
```

### Forms

Form fields use subtle glass with clear, flat input areas:

```tsx
<Input 
  className="backdrop-blur-sm"
  variant="flat"
  label="Flat label"
/>
```

### Navigation

Navigation uses glass blur for depth:

```tsx
<nav className="backdrop-blur-lg bg-glass-light dark:bg-glass-dark border-b border-glass-light">
  <!-- Flat navigation items -->
</nav>
```

## Best Practices

### Do's

- ✅ Use glass effects for containers and sections
- ✅ Keep content elements flat and clear
- ✅ Maintain high contrast for text readability
- ✅ Use consistent blur values across similar elements
- ✅ Apply glass effects to create visual hierarchy

### Don'ts

- ❌ Don't apply glass effects to small elements or text
- ❌ Don't stack multiple glass layers (reduces clarity)
- ❌ Don't use glass effects on interactive elements (buttons, inputs)
- ❌ Don't sacrifice readability for aesthetics
- ❌ Don't overuse animations on glass elements

## Implementation

### Using Glass Effects

```tsx
import { Card } from "@heroui/react";

// Glass card with flat content
<Card className="backdrop-blur-md bg-white/70 dark:bg-black/70 border border-white/20 dark:border-white/10">
  <CardBody>
    <h2 className="text-2xl font-bold text-black dark:text-white">
      Flat Heading
    </h2>
    <p className="text-gray-600 dark:text-gray-400">
      Clear, readable content on glass background
    </p>
  </CardBody>
</Card>
```

### Responsive Glass

Glass effects should adapt to different screen sizes:

```tsx
<div className="backdrop-blur-sm md:backdrop-blur-md lg:backdrop-blur-lg">
  <!-- Content adapts blur intensity -->
</div>
```

## Accessibility

- Ensure sufficient contrast between glass backgrounds and content
- Test with reduced transparency preferences
- Provide fallbacks for browsers without backdrop-filter support
- Never rely solely on glass effects for information hierarchy