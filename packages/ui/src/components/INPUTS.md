# NH-UI Input Components

A comprehensive collection of polished, accessible input components built on top of HeroUI with NH-specific enhancements and Apple-level attention to detail.

## Overview

All NH input components share common features:
- **Full TypeScript support** with strict typing
- **Accessibility-first** design with proper ARIA attributes
- **Consistent styling** across all components
- **Form integration** ready with validation support
- **Theme-aware** with support for dark mode
- **Responsive design** that works on all devices
- **Premium animations** and transitions

## Components

### 1. NHInput
Basic text input with variants and states.

```tsx
import { NHInput } from '@nh-ui/ui';

// Basic usage
<NHInput label="Email" placeholder="Enter your email" />

// With validation
<NHInput 
  label="Email" 
  type="email"
  isRequired
  errorMessage="Please enter a valid email"
/>

// With glow effect
<NHInput 
  label="Username"
  hasGlow
  glowColor="primary"
/>

// With character count
<NHInput 
  label="Bio"
  showCount
  maxLength={100}
/>
```

### 2. NHTextarea
Multi-line text input with auto-resize capabilities.

```tsx
import { NHTextarea } from '@nh-ui/ui';

// Basic usage
<NHTextarea label="Message" placeholder="Type your message..." />

// With auto-resize
<NHTextarea 
  label="Description"
  autoResize
  minRows={3}
  maxRows={10}
/>

// With character count
<NHTextarea 
  label="Comment"
  showCount
  maxLength={500}
/>
```

### 3. NHSelect
Dropdown selection component with search capabilities.

```tsx
import { NHSelect, NHSelectItem } from '@nh-ui/ui';

// Basic usage
<NHSelect label="Country" placeholder="Select a country">
  <NHSelectItem key="us" value="us">United States</NHSelectItem>
  <NHSelectItem key="uk" value="uk">United Kingdom</NHSelectItem>
  <NHSelectItem key="ca" value="ca">Canada</NHSelectItem>
</NHSelect>

// With glow effect
<NHSelect 
  label="Framework"
  hasGlow
  color="primary"
>
  <NHSelectItem key="react">React</NHSelectItem>
  <NHSelectItem key="vue">Vue</NHSelectItem>
  <NHSelectItem key="angular">Angular</NHSelectItem>
</NHSelect>
```

### 4. NHCheckbox & NHCheckboxGroup
Single and grouped checkbox components.

```tsx
import { NHCheckbox, NHCheckboxGroup } from '@nh-ui/ui';

// Single checkbox
<NHCheckbox>Accept terms and conditions</NHCheckbox>

// With glow effect
<NHCheckbox hasGlow color="primary">
  Subscribe to newsletter
</NHCheckbox>

// Checkbox group
<NHCheckboxGroup 
  label="Select your interests"
  orientation="horizontal"
>
  <NHCheckbox value="music">Music</NHCheckbox>
  <NHCheckbox value="sports">Sports</NHCheckbox>
  <NHCheckbox value="gaming">Gaming</NHCheckbox>
</NHCheckboxGroup>
```

### 5. NHRadio & NHRadioGroup
Radio button components for single selection.

```tsx
import { NHRadio, NHRadioGroup } from '@nh-ui/ui';

// Radio group
<NHRadioGroup 
  label="Select plan"
  defaultValue="pro"
  hasGlow
>
  <NHRadio value="free">Free</NHRadio>
  <NHRadio value="pro">Pro</NHRadio>
  <NHRadio value="enterprise">Enterprise</NHRadio>
</NHRadioGroup>
```

### 6. NHSwitch
Toggle switch component with icons.

```tsx
import { NHSwitch } from '@nh-ui/ui';

// Basic usage
<NHSwitch>Enable notifications</NHSwitch>

// With icons
<NHSwitch showIcons>
  Dark mode
</NHSwitch>

// With glow effect
<NHSwitch hasGlow color="success">
  Auto-save
</NHSwitch>
```

### 7. NHSlider
Range slider for numeric input.

```tsx
import { NHSlider } from '@nh-ui/ui';

// Basic usage
<NHSlider 
  label="Volume"
  defaultValue={50}
  maxValue={100}
/>

// With custom formatting
<NHSlider 
  label="Price"
  formatOptions={{ style: 'currency', currency: 'USD' }}
  maxValue={1000}
  step={10}
/>

// With glow effect
<NHSlider 
  label="Brightness"
  hasGlow
  showTooltip
/>
```

### 8. NHDatePicker
Date selection component.

```tsx
import { NHDatePicker } from '@nh-ui/ui';

// Basic usage
<NHDatePicker label="Birth date" />

// With constraints
<NHDatePicker 
  label="Appointment date"
  minDate={new Date()}
  maxDate={new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)}
/>

// Custom format
<NHDatePicker 
  label="Event date"
  dateFormat="DD/MM/YYYY"
/>
```

### 9. NHTimePicker
Time selection component.

```tsx
import { NHTimePicker } from '@nh-ui/ui';

// Basic usage
<NHTimePicker label="Meeting time" />

// 24-hour format
<NHTimePicker 
  label="Departure time"
  hourFormat="24"
/>

// With minute steps
<NHTimePicker 
  label="Appointment time"
  minuteStep={15}
/>
```

### 10. NHColorPicker
Color selection component with swatches.

```tsx
import { NHColorPicker } from '@nh-ui/ui';

// Basic usage
<NHColorPicker label="Theme color" />

// Custom swatches
<NHColorPicker 
  label="Brand color"
  swatches={['#FF0000', '#00FF00', '#0000FF']}
/>

// With alpha channel
<NHColorPicker 
  label="Background color"
  showAlpha
/>
```

### 11. NHFileUpload
File upload component with drag & drop.

```tsx
import { NHFileUpload } from '@nh-ui/ui';

// Basic usage
<NHFileUpload 
  onChange={(files) => console.log(files)}
/>

// With constraints
<NHFileUpload 
  accept="image/*"
  maxSize={5 * 1024 * 1024} // 5MB
  maxFiles={3}
  multiple
/>

// Custom styling
<NHFileUpload 
  variant="bordered"
  hasGlow
  uploadText="Drop your images here"
  description="PNG, JPG up to 5MB"
/>
```

### 12. NHSearchInput
Specialized search input with debouncing.

```tsx
import { NHSearchInput } from '@nh-ui/ui';

// Basic usage
<NHSearchInput 
  placeholder="Search products..."
  onSearch={(value) => console.log(value)}
/>

// With instant search
<NHSearchInput 
  searchOnChange
  debounceDelay={300}
  onSearch={(value) => performSearch(value)}
/>
```

### 13. NHPasswordInput
Password input with strength indicator.

```tsx
import { NHPasswordInput } from '@nh-ui/ui';

// Basic usage
<NHPasswordInput label="Password" />

// With strength indicator
<NHPasswordInput 
  label="New password"
  showStrength
  requirements={[
    "At least 8 characters",
    "One uppercase letter",
    "One number",
    "One special character"
  ]}
/>
```

### 14. NHNumberInput
Number input with steppers.

```tsx
import { NHNumberInput } from '@nh-ui/ui';

// Basic usage
<NHNumberInput 
  label="Quantity"
  min={1}
  max={100}
/>

// With formatting
<NHNumberInput 
  label="Price"
  formatNumber
  precision={2}
  step={0.01}
/>

// Split steppers
<NHNumberInput 
  label="Age"
  stepperPosition="split"
/>
```

### 15. NHPinInput
Multi-digit PIN entry component.

```tsx
import { NHPinInput } from '@nh-ui/ui';

// Basic usage
<NHPinInput 
  length={4}
  onComplete={(pin) => console.log(pin)}
/>

// Masked input
<NHPinInput 
  length={6}
  isMasked
  type="numeric"
/>

// With validation
<NHPinInput 
  length={4}
  isInvalid={error}
  autoFocus
/>
```

### 16. NHRating
Star rating component.

```tsx
import { NHRating } from '@nh-ui/ui';

// Basic usage
<NHRating 
  value={4}
  onChange={(rating) => console.log(rating)}
/>

// With half stars
<NHRating 
  allowHalf
  defaultValue={3.5}
/>

// Custom styling
<NHRating 
  size="lg"
  color="warning"
  hasGlow
  showValue
/>
```

### 17. NHTagInput
Multi-tag input component.

```tsx
import { NHTagInput } from '@nh-ui/ui';

// Basic usage
<NHTagInput 
  placeholder="Add tags..."
  onChange={(tags) => console.log(tags)}
/>

// With validation
<NHTagInput 
  label="Skills"
  maxTags={10}
  validate={(tag) => tag.length >= 2}
  allowDuplicates={false}
/>

// Custom styling
<NHTagInput 
  tagColor="primary"
  hasGlow
  size="lg"
/>
```

### 18. NHAutocomplete
Input with auto-suggestions.

```tsx
import { NHAutocomplete } from '@nh-ui/ui';

const items = [
  { value: 'react', label: 'React', description: 'A JavaScript library' },
  { value: 'vue', label: 'Vue', description: 'Progressive framework' },
  { value: 'angular', label: 'Angular', description: 'Platform for web apps' }
];

// Basic usage
<NHAutocomplete 
  items={items}
  placeholder="Select framework..."
  onSelectionChange={(value) => console.log(value)}
/>

// With custom filtering
<NHAutocomplete 
  items={items}
  filterFunction={(item, input) => 
    item.label.toLowerCase().startsWith(input.toLowerCase())
  }
/>

// Allow custom values
<NHAutocomplete 
  items={items}
  allowCustomValue
  maxItems={5}
/>
```

### 19. NHForm & NHFormField
Form wrapper and field components.

```tsx
import { NHForm, NHFormField, NHInput, NHButton } from '@nh-ui/ui';

// Complete form example
<NHForm 
  onSubmit={handleSubmit}
  validationMode="onChange"
  layout="vertical"
  spacing="md"
>
  <NHFormField 
    label="Email"
    isRequired
    errorMessage={errors.email}
  >
    <NHInput 
      type="email"
      name="email"
      value={values.email}
      onChange={handleChange}
    />
  </NHFormField>
  
  <NHFormField 
    label="Password"
    isRequired
    errorMessage={errors.password}
    helperText="Must be at least 8 characters"
  >
    <NHPasswordInput 
      name="password"
      value={values.password}
      onChange={handleChange}
      showStrength
    />
  </NHFormField>
  
  <NHFormField 
    label="Country"
    isRequired
  >
    <NHSelect name="country">
      <NHSelectItem key="us">United States</NHSelectItem>
      <NHSelectItem key="uk">United Kingdom</NHSelectItem>
    </NHSelect>
  </NHFormField>
  
  <NHButton type="submit" color="primary">
    Submit
  </NHButton>
</NHForm>
```

## Common Props

All input components share these common props:

- `variant`: 'flat' | 'bordered' | 'underlined' | 'faded'
- `color`: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
- `radius`: 'none' | 'sm' | 'md' | 'lg' | 'full'
- `size`: 'sm' | 'md' | 'lg'
- `isDisabled`: boolean
- `isReadOnly`: boolean
- `isRequired`: boolean
- `hasGlow`: boolean - NH-specific glow effect
- `errorMessage`: string
- `description`: string
- `label`: string
- `placeholder`: string

## Styling & Theming

All components support:
- **Dark mode**: Automatic adaptation to theme
- **Custom CSS**: className prop for additional styling
- **CSS-in-JS**: Style prop for inline styles
- **Tailwind**: Full Tailwind class support

## Best Practices

1. **Always provide labels** for accessibility
2. **Use proper input types** (email, tel, url, etc.)
3. **Provide helpful error messages** that guide users
4. **Consider mobile experience** with appropriate input modes
5. **Use loading states** for async operations
6. **Implement proper validation** on both client and server
7. **Test with keyboard navigation** and screen readers

## Future Enhancements

- [ ] Rich text editor component
- [ ] Advanced date range picker
- [ ] Multi-select with search
- [ ] OTP input component
- [ ] Credit card input
- [ ] Phone number input with country code
- [ ] Mentions/tagging input
- [ ] Code editor input