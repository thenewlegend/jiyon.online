---
trigger: always_on
---

0. Stack Definition

Primary Stack

Framework: SvelteKit
Styling: Tailwind CSS
Animation: GSAP

Optional

GSAP Plugins: ScrollTrigger, TextPlugin, SplitText
Component layer: Skeleton UI (optional, not assumed)
1. Project Architecture (Non-negotiable)
src/
├── lib/
│   ├── components/
│   │   ├── layout/
│   │   ├── ui/
│   │   └── sections/
│   ├── animations/
│   │   ├── core.ts
│   │   ├── scroll.ts
│   │   ├── text.ts
│   │   └── transitions.ts
│   ├── styles/
│   │   └── globals.css
│   └── utils/
│       ├── dom.ts
│       └── media.ts
├── routes/
│   ├── +layout.svelte
│   └── +page.svelte
└── app.html
2. Core Design Principles
2.1 Determinism Rules
No inline GSAP logic inside arbitrary components
All animations must be imported from /lib/animations
No dynamic class generation at runtime (Tailwind must statically detect classes)
Layout must be declarative (no JS-driven layout)
2.2 Separation of Concerns
Concern	Tool
Layout	Tailwind
State	Svelte
Animation	GSAP
Responsiveness	Tailwind

Violation of this separation is not allowed.

3. Tailwind Usage Specification
3.1 Configuration

tailwind.config.js must define:

Fixed spacing scale
Typography scale
Breakpoints (DO NOT customize excessively)
theme: {
  screens: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  }
}
3.2 Usage Rules
Allowed:
Utility classes
Responsive prefixes (md:, lg:)
@apply for reusable patterns
Forbidden:
Arbitrary pixel values unless necessary (w-[123px])
Inline styles
Deep nesting of utility classes (>15 per element)
3.3 Layout System
Macro Layout
Use CSS Grid:
<div class="grid grid-cols-1 lg:grid-cols-2">
Micro Layout
Use Flexbox:
<div class="flex items-center justify-between">
3.4 Responsiveness Strategy
Mobile-first ONLY
Two breakpoints sufficient:
default (mobile)
lg: (desktop)

Avoid overfitting intermediate breakpoints.

4. GSAP Architecture
4.1 Import Pattern
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
4.2 Animation Layering
Layer 1 — Page Transitions
File: transitions.ts
Layer 2 — Scroll Animations
File: scroll.ts
Layer 3 — Micro Interactions
File: core.ts
Layer 4 — Text Animations
File: text.ts
4.3 Mandatory Lifecycle Pattern
import { onMount } from 'svelte';

onMount(() => {
  // GSAP logic here ONLY
});
4.4 Timeline Requirement

All animations must use timelines:

const tl = gsap.timeline();

tl.from(...)
  .to(...)

Single gsap.to() calls are prohibited for complex sequences.

5. Text Animation Specification
5.1 Allowed Methods
A. Word/Line Animation (Preferred)
Lower DOM cost
Stable across breakpoints
B. Character Animation (Restricted)
Only for hero sections
Must not exceed ~150 characters total
5.2 Split Strategy
Preferred:
GSAP SplitText plugin
Fallback:
Manual span injection via utility function
5.3 Reflow Handling

All text animations must support:

gsap.matchMedia()

On breakpoint change:

Reinitialize animations
Re-split text if necessary
6. ScrollTrigger Specification
6.1 Standard Pattern
gsap.from(element, {
  scrollTrigger: {
    trigger: element,
    start: "top 80%",
    end: "bottom 20%",
    scrub: false,
  },
  y: 100,
  opacity: 0
});
6.2 Rules
Each section = one ScrollTrigger context
Avoid overlapping triggers on same element
Always clean up on destroy
6.3 Cleanup Pattern
return () => {
  ScrollTrigger.getAll().forEach(t => t.kill());
};
7. Performance Constraints
7.1 Allowed Properties
transform
opacity
7.2 Forbidden (unless justified)
width
height
top, left
7.3 DOM Constraints
Avoid > 300 animated nodes simultaneously
Lazy load offscreen sections
8. SvelteKit Integration
8.1 Rendering Mode
Default: SSG (static)
SSR only if required
8.2 Routing
Use file-based routing only
Avoid dynamic routes unless necessary
8.3 Page Transition Hook

Use layout-level orchestration:

afterNavigate(() => {
  // trigger animations
});
9. Accessibility Requirements
9.1 Reduced Motion

Mandatory support:

@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
9.2 Text Readability
No animation that delays readability > 500ms
Avoid infinite motion loops on text
10. Edge Cases & Resolutions
10.1 Resize Breaks Animation

Cause:

Layout shift invalidates animation positions

Solution:

Use gsap.matchMedia()
Reinitialize animations on breakpoint change
10.2 ScrollTrigger Misfires

Cause:

DOM not ready or dynamic height changes

Solution:

ScrollTrigger.refresh();

Call after layout stabilization.

10.3 Hydration Mismatch (SvelteKit)

Cause:

GSAP running during SSR

Solution:

Wrap all GSAP in onMount
Never access DOM outside it
10.4 Tailwind Class Purging Issues

Cause:

Dynamic class names

Solution:

Use static class strings
Safelist if unavoidable
10.5 Performance Drops on Mobile

Cause:

Heavy timelines or too many elements

Solution:

Disable complex animations via matchMedia
Reduce stagger count
10.6 Text Splitting Breaks Layout

Cause:

Inline elements altering flow

Solution:

Wrap lines in block containers
Use display: inline-block