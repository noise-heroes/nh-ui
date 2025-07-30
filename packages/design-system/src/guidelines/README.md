# Noise Heroes Design System

## Design Philosophy: Flat Meets Glass

The Noise Heroes Design System combines the clarity of flat design with the depth and sophistication of glassmorphism. Our approach creates a unique visual language that is both modern and timeless.

### Core Principles

1. **Glass Containers, Flat Content**: All containers (cards, sections, modals) use frosted glass effects, while content within remains flat and clear.

2. **Depth Through Blur**: Instead of traditional shadows, we use backdrop blur to create depth and hierarchy.

3. **Vibrant on Subtle**: Bold, flat elements stand out against subtle glass backgrounds.

4. **Motion with Purpose**: Smooth transitions enhance the liquid glass experience without overwhelming.

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