# NH-UI API Design Patterns

## Core Philosophy

NH-UI components follow these principles:
1. **Intuitive**: APIs should be discoverable and predictable
2. **Consistent**: Similar patterns across all components
3. **Flexible**: Support common use cases with escape hatches
4. **Type-Safe**: Full TypeScript support with excellent inference
5. **Composable**: Components work together seamlessly

## Naming Conventions

### Component Names
- **PascalCase**: `Button`, `TextField`, `DatePicker`
- **Prefix brand components**: `NHLogo`, `NHMusicPlayer`
- **Descriptive names**: Prefer `TextField` over `Input`

### Prop Names

#### Boolean Props
Always use `is` or `has` prefix for clarity:
```typescript
// ✅ Good
isDisabled, isLoading, isRequired, hasError, isOpen

// ❌ Bad
disabled, loading, required, error, open
```

#### Event Handlers
Use `on` prefix with descriptive names:
```typescript
// ✅ Good
onClick, onChange, onSubmit, onClose, onValueChange

// ❌ Bad
click, change, handleClick, clickHandler
```

#### Size and Variant Props
Use consistent naming across all components:
```typescript
interface ComponentProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'solid' | 'outline' | 'ghost' | 'link';
  colorScheme?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
}
```

## Component Patterns

### 1. Base Component Pattern
Every component follows this structure:
```typescript
import { forwardRef } from 'react';
import { cn } from '@/utils/cn';

export interface ComponentNameProps extends React.HTMLAttributes<HTMLElement> {
  // Component-specific props
  size?: 'sm' | 'md' | 'lg';
  variant?: 'solid' | 'outline';
  colorScheme?: ColorScheme;
  
  // State props
  isDisabled?: boolean;
  isLoading?: boolean;
  
  // Layout props
  fullWidth?: boolean;
  
  // Styling props
  className?: string;
  style?: React.CSSProperties;
}

export const ComponentName = forwardRef<HTMLElement, ComponentNameProps>(
  ({ 
    size = 'md',
    variant = 'solid',
    className,
    ...props 
  }, ref) => {
    return (
      <element
        ref={ref}
        className={cn(
          // Base styles
          'nh-component-name',
          // Size styles
          sizes[size],
          // Variant styles
          variants[variant],
          // User styles
          className
        )}
        {...props}
      />
    );
  }
);

ComponentName.displayName = 'ComponentName';
```

### 2. Compound Component Pattern
For complex components with multiple parts:
```typescript
// Parent component
interface CardProps {
  children: React.ReactNode;
  variant?: 'elevated' | 'outlined' | 'filled';
}

// Sub-components
interface CardHeaderProps {
  children: React.ReactNode;
}

// Implementation
const Card = ({ children, ...props }: CardProps) => {
  return <div {...props}>{children}</div>;
};

const CardHeader = ({ children }: CardHeaderProps) => {
  return <div className="nh-card-header">{children}</div>;
};

// Export as compound component
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export { Card };

// Usage
<Card>
  <Card.Header>Title</Card.Header>
  <Card.Body>Content</Card.Body>
  <Card.Footer>Actions</Card.Footer>
</Card>
```

### 3. Polymorphic Component Pattern
Components that can render as different elements:
```typescript
interface PolymorphicProps<T extends React.ElementType> {
  as?: T;
  children?: React.ReactNode;
}

type ComponentProps<T extends React.ElementType> = 
  PolymorphicProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof PolymorphicProps<T>>;

const Component = <T extends React.ElementType = 'div'>({
  as,
  ...props
}: ComponentProps<T>) => {
  const Element = as || 'div';
  return <Element {...props} />;
};

// Usage
<Component as="button" onClick={handleClick}>
  Click me
</Component>
```

### 4. Controlled/Uncontrolled Pattern
Support both controlled and uncontrolled usage:
```typescript
interface InputProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
}

const Input = ({ value, defaultValue, onChange }: InputProps) => {
  const [internalValue, setInternalValue] = useState(defaultValue ?? '');
  
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    
    if (!isControlled) {
      setInternalValue(newValue);
    }
    
    onChange?.(newValue);
  };
  
  return (
    <input
      value={currentValue}
      onChange={handleChange}
    />
  );
};
```

### 5. Slot Pattern
For maximum flexibility:
```typescript
interface ButtonProps {
  children?: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  spinner?: React.ReactNode;
}

const Button = ({ 
  children, 
  startIcon, 
  endIcon, 
  spinner,
  isLoading 
}: ButtonProps) => {
  return (
    <button>
      {startIcon && <span className="nh-button-start-icon">{startIcon}</span>}
      {isLoading && spinner}
      {children}
      {endIcon && <span className="nh-button-end-icon">{endIcon}</span>}
    </button>
  );
};
```

## Prop Categories

### 1. Core Props
Available on all components:
```typescript
interface CoreProps {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
```

### 2. Interactive Props
For interactive components:
```typescript
interface InteractiveProps {
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  isInvalid?: boolean;
  tabIndex?: number;
  autoFocus?: boolean;
}
```

### 3. Form Props
For form components:
```typescript
interface FormProps<T> {
  name?: string;
  value?: T;
  defaultValue?: T;
  onChange?: (value: T) => void;
  onBlur?: (event: React.FocusEvent) => void;
  onFocus?: (event: React.FocusEvent) => void;
}
```

### 4. Layout Props
For layout control:
```typescript
interface LayoutProps {
  fullWidth?: boolean;
  maxWidth?: string | number;
  minWidth?: string | number;
  height?: string | number;
  margin?: SpaceValue;
  padding?: SpaceValue;
}
```

### 5. Visual Props
For visual customization:
```typescript
interface VisualProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: VariantType;
  colorScheme?: ColorScheme;
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
}
```

## Event Handling

### Standard Events
```typescript
interface EventProps {
  // Mouse events
  onClick?: (event: React.MouseEvent) => void;
  onDoubleClick?: (event: React.MouseEvent) => void;
  onMouseEnter?: (event: React.MouseEvent) => void;
  onMouseLeave?: (event: React.MouseEvent) => void;
  
  // Keyboard events
  onKeyDown?: (event: React.KeyboardEvent) => void;
  onKeyUp?: (event: React.KeyboardEvent) => void;
  onKeyPress?: (event: React.KeyboardEvent) => void;
  
  // Focus events
  onFocus?: (event: React.FocusEvent) => void;
  onBlur?: (event: React.FocusEvent) => void;
  
  // Form events
  onChange?: (value: T) => void;
  onSubmit?: (event: React.FormEvent) => void;
}
```

### Custom Events
Use descriptive names with proper typing:
```typescript
interface CustomEventProps {
  // Value changes
  onValueChange?: (value: string) => void;
  onSelectionChange?: (selection: string[]) => void;
  
  // State changes
  onOpenChange?: (isOpen: boolean) => void;
  onLoadingChange?: (isLoading: boolean) => void;
  
  // Actions
  onClear?: () => void;
  onRefresh?: () => void;
  onSearch?: (query: string) => void;
}
```

## Accessibility Props

All interactive components must support:
```typescript
interface A11yProps {
  // ARIA attributes
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  'aria-invalid'?: boolean;
  'aria-required'?: boolean;
  'aria-disabled'?: boolean;
  'aria-expanded'?: boolean;
  'aria-controls'?: string;
  
  // Roles
  role?: string;
  
  // Keyboard navigation
  tabIndex?: number;
}
```

## Ref Forwarding

All components must forward refs:
```typescript
import { forwardRef } from 'react';

export const Component = forwardRef<HTMLDivElement, ComponentProps>(
  (props, ref) => {
    return <div ref={ref} {...props} />;
  }
);

Component.displayName = 'Component';
```

## Default Props

Define sensible defaults:
```typescript
const defaultProps = {
  size: 'md',
  variant: 'solid',
  colorScheme: 'primary',
  isDisabled: false,
  isLoading: false,
} as const;

// In component
const Component = ({ 
  size = defaultProps.size,
  variant = defaultProps.variant,
  ...props 
}) => {
  // Implementation
};
```

## TypeScript Patterns

### 1. Discriminated Unions
For mutually exclusive props:
```typescript
type ButtonProps = 
  | { variant: 'solid'; outline?: never }
  | { variant: 'outline'; outline: boolean };
```

### 2. Generic Components
For type-safe collections:
```typescript
interface SelectProps<T> {
  value?: T;
  options: Array<{ label: string; value: T }>;
  onChange?: (value: T) => void;
}

const Select = <T extends string | number>({
  value,
  options,
  onChange,
}: SelectProps<T>) => {
  // Implementation
};
```

### 3. Extending HTML Elements
Properly extend native elements:
```typescript
interface ButtonProps extends Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'onChange' | 'size'
> {
  size?: 'sm' | 'md' | 'lg';
  // Custom props
}
```

## Style Prop Patterns

### 1. className Merging
Use cn utility for predictable merging:
```typescript
import { cn } from '@/utils/cn';

const Component = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        'base-styles',
        'component-styles',
        condition && 'conditional-styles',
        className // User styles always last
      )}
      {...props}
    />
  );
};
```

### 2. Style Object Merging
```typescript
const Component = ({ style, ...props }) => {
  return (
    <div
      style={{
        ...defaultStyles,
        ...conditionalStyles,
        ...style, // User styles override
      }}
      {...props}
    />
  );
};
```

### 3. CSS Variables
Use CSS variables for theming:
```typescript
const Component = ({ colorScheme, ...props }) => {
  return (
    <div
      style={{
        '--nh-color': `var(--nh-colors-${colorScheme}-500)`,
      }}
      className="nh-component"
    />
  );
};
```

## Documentation Requirements

Every component must have:

### 1. JSDoc Comments
```typescript
/**
 * Button component for user interactions
 * 
 * @example
 * ```tsx
 * <Button size="lg" variant="solid" onClick={handleClick}>
 *   Click me
 * </Button>
 * ```
 */
export interface ButtonProps {
  /**
   * The size of the button
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  
  /**
   * Visual variant of the button
   * @default 'solid'
   */
  variant?: 'solid' | 'outline' | 'ghost';
}
```

### 2. Prop Descriptions
Clear descriptions for every prop:
```typescript
interface Props {
  /**
   * Whether the component is in a loading state.
   * Shows a spinner and disables interactions.
   */
  isLoading?: boolean;
  
  /**
   * Callback fired when the value changes.
   * @param value - The new value
   */
  onChange?: (value: string) => void;
}
```

### 3. Usage Examples
Show common patterns:
```typescript
/**
 * @example Basic usage
 * ```tsx
 * <Select
 *   options={options}
 *   value={value}
 *   onChange={setValue}
 * />
 * ```
 * 
 * @example With custom rendering
 * ```tsx
 * <Select
 *   options={options}
 *   renderOption={(option) => (
 *     <div>{option.icon} {option.label}</div>
 *   )}
 * />
 * ```
 */
```

## Testing Requirements

All components must be testable:
```typescript
// Add data-testid for testing
const Component = ({ testId, ...props }) => {
  return (
    <div
      data-testid={testId}
      {...props}
    />
  );
};

// Export useful test utilities
export const componentTestIds = {
  root: 'component-root',
  input: 'component-input',
  trigger: 'component-trigger',
} as const;
```

## Performance Patterns

### 1. Memoization
Use React.memo for expensive components:
```typescript
export const ExpensiveComponent = React.memo(
  ({ data }: Props) => {
    // Expensive render
  },
  (prevProps, nextProps) => {
    // Custom comparison
    return prevProps.data.id === nextProps.data.id;
  }
);
```

### 2. Lazy Loading
For heavy components:
```typescript
const HeavyComponent = lazy(() => import('./HeavyComponent'));

export const Component = () => {
  return (
    <Suspense fallback={<Skeleton />}>
      <HeavyComponent />
    </Suspense>
  );
};
```

### 3. Event Handler Optimization
```typescript
const Component = ({ onClick }) => {
  // Use useCallback for stable references
  const handleClick = useCallback((event) => {
    event.preventDefault();
    onClick?.(event);
  }, [onClick]);
  
  return <button onClick={handleClick} />;
};
```

## Versioning and Breaking Changes

### Deprecation Pattern
```typescript
interface Props {
  /**
   * @deprecated Use `colorScheme` instead. Will be removed in v2.0
   */
  color?: string;
  
  colorScheme?: ColorScheme;
}

const Component = ({ color, colorScheme, ...props }) => {
  if (process.env.NODE_ENV === 'development' && color) {
    console.warn(
      'Component: `color` prop is deprecated. Use `colorScheme` instead.'
    );
  }
  
  const finalColorScheme = colorScheme || color;
  // ...
};
```

## Summary

These patterns ensure:
- **Consistency**: Same patterns everywhere
- **Discoverability**: Intuitive prop names
- **Type Safety**: Full TypeScript support
- **Flexibility**: Support various use cases
- **Performance**: Optimized by default
- **Accessibility**: Built-in a11y support
- **Documentation**: Self-documenting code
- **Testing**: Easy to test
- **Future-proof**: Easy to evolve