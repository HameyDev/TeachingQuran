# Design Guidelines: Online Qur'an Teaching Service

## Design Approach
**Reference-Based Approach**: Drawing inspiration from educational platforms like Khan Academy and Coursera, combined with Islamic design principles for cultural authenticity and reverence.

## Core Design Elements

### A. Color Palette
**Primary Colors:**
- Deep Islamic Green: 155 60% 35% (main brand color)
- Soft Green: 155 40% 85% (backgrounds, cards)
- Pure White: 0 0% 100% (text backgrounds)

**Accent Colors:**
- Warm Gold: 45 85% 65% (highlights, CTAs)
- Charcoal: 220 15% 25% (headings, text)

**Gradients:**
- Hero background: Subtle gradient from deep green to darker green
- Button gradients: Green to gold for primary CTAs
- Card hover states: Soft green gradient overlays

### B. Typography
**Primary Font:** Poppins (Google Fonts)
- Headings: Poppins 600-700 weight
- Body text: Poppins 400-500 weight
- Hierarchy: H1 (3xl-4xl), H2 (2xl-3xl), H3 (xl-2xl), Body (base-lg)

### C. Layout System
**Spacing Units:** Consistent use of Tailwind units 4, 6, 8, 12, 16, 24
- Section padding: py-16 md:py-24
- Card spacing: p-6 md:p-8
- Element margins: mb-6, mb-8, mb-12

### D. Component Library

**Cards:**
- Rounded corners (rounded-xl)
- Soft shadows (shadow-lg)
- White backgrounds with subtle green borders
- Hover animations: gentle scale-up (scale-105)

**Buttons:**
- Primary: Green to gold gradient, rounded-full
- Secondary: Outline style with green border
- Padding: px-8 py-3, font medium

**Navigation:**
- Clean, minimal header with Islamic geometric pattern accent
- Smooth scroll navigation between sections

**Forms:**
- Clean input fields with green focus states
- Proper validation styling
- WhatsApp integration button with green background

### E. Animations
**Framer Motion Implementation:**
- Fade-in animations on scroll for sections
- Stagger animations for card grids
- Smooth hover transitions (0.3s duration)
- Minimal, purposeful animations focusing on user flow

## Visual Treatment

### Background Treatments
- Hero: Subtle Islamic geometric pattern overlay on gradient
- Sections: Alternating white and very light green backgrounds
- Cards: Pure white with soft shadows for depth

### Content Strategy
**Five Focused Sections:**
1. Hero with compelling value proposition
2. About section with trust-building content
3. What We Teach with service cards
4. Benefits with icon grid
5. Testimonials + Contact combined section

## Images
**Hero Section:** Large background image featuring an open Qur'an with soft lighting, overlaid with subtle Islamic geometric pattern
**About Section:** Professional image of an online teacher or learning setup
**Service Cards:** Minimal Islamic icons for each teaching type
**Testimonials:** Profile photos of diverse students/parents
**Contact Section:** Subtle Islamic calligraphy or mosque silhouette

## Responsive Design
- Mobile-first approach
- Grid layouts: 1 column mobile, 2-3 columns tablet/desktop
- Flexible typography scaling
- Touch-friendly button sizes (minimum 44px)
- Optimized image loading for performance

## Accessibility
- High contrast ratios for text readability
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly content
- Alt text for all images

This design creates a trustworthy, culturally respectful platform that balances modern web design with Islamic aesthetics, ensuring an engaging experience for Muslim families seeking Qur'an education.