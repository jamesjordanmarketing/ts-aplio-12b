# FeaturesSection Component Documentation

## Purpose
Displays a grid of feature cards with animations. Used to showcase key features of a product or service.

## Props
```typescript
interface FeaturesSectionProps {
  features: Feature[] // Array of feature objects
}
```

## Feature Type
```typescript
interface Feature {
  id: string
  icon: React.ReactNode
  title: string
  description: string
}
```

## Usage Example
```tsx
import FeaturesSection from '@/components/home/FeaturesSection'
import { features } from '@/data/featureData'

export default function HomePage() {
  return (
    <FeaturesSection features={features} />
  )
}
```

## Animation
- Uses Framer Motion for scroll-triggered animations
- fadeUpAnimation variant applied to the container
- Animation triggers when component enters viewport

## Responsive Behavior
- Mobile: Single column
- Tablet: 2 columns
- Desktop: 3 columns
- Padding and spacing adjusts based on screen size:
  - Base: gap-6, px-4, py-12
  - sm: gap-8, px-6, py-16
  - lg: gap-10, px-8, py-20

## Styling
- Uses Tailwind CSS classes
- Cards have white background (dark mode: dark-200)
- Hover effects: scale-105, shadow-lg, dark:hover:bg-dark-300
- Text colors adapt to dark mode
- Shadow effect on cards with hover enhancement
- Primary color used for icons
- Smooth transitions for all interactive states

## Accessibility
- Semantic section tag
- Proper heading hierarchy
- Dark mode support
- Responsive layout
- Smooth transitions for reduced motion preferences