---
trigger: always_on
---

Contract Philosophy

Each component must behave like a pure UI module with explicit interfaces.

Hard Rules
No hidden side effects
No implicit global dependencies
No animation logic inline (must delegate)
Props = inputs, Events/slots = outputs
1. Global Typing Conventions
type ClassName = string;
type HTMLElementRef = HTMLElement | null;

type AnimationConfig = {
  enabled?: boolean;
  delay?: number;
  duration?: number;
  stagger?: number;
};

type Responsive<T> = {
  base: T;
  lg?: T;
};
2. Component Categories
layout/     → structural wrappers
ui/         → atomic reusable elements
sections/   → page-level compositions
motion/     → animation wrappers
3. Layout Components
3.1 <Container />
Purpose

Standard width + padding wrapper

Props
{
  class?: ClassName;
  fluid?: boolean; // full width
}
Behavior
Applies:
max-w-screen-xl mx-auto px-4 lg:px-8
If fluid = true, removes max-width
Output
Renders slot content
3.2 <Grid />
Props
{
  cols?: Responsive<number>; // default: { base: 1, lg: 2 }
  gap?: string; // Tailwind gap class
  class?: ClassName;
}
Behavior
Converts cols → Tailwind classes:
grid-cols-1 lg:grid-cols-2
Output
Slot content arranged in grid
3.3 <Section />
Props
{
  id?: string;
  class?: ClassName;
  padded?: boolean; // default true
}
Behavior
Applies vertical spacing:
py-16 lg:py-24
4. UI Components
4.1 <Heading />
Props
{
  level?: 1 | 2 | 3 | 4;
  text: string;
  class?: ClassName;
  animate?: boolean;
}
Behavior
Maps level → semantic tag (h1, h2, etc.)
Applies typography scale
Animation
If animate = true:
Calls /lib/animations/text.ts
4.2 <Text />
Props
{
  text: string;
  class?: ClassName;
  muted?: boolean;
}
Behavior
Applies:
text-gray-400 if muted
4.3 <Button />
Props
{
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  class?: ClassName;
}
Behavior
Renders <a> if href exists, else <button>
Applies variant styles
Output
Emits click event if applicable
5. Motion Components
5.1 <Reveal />
Purpose

Scroll-triggered reveal wrapper

Props
{
  animation?: 'fade-up' | 'fade-in' | 'scale';
  delay?: number;
  duration?: number;
  once?: boolean;
}
Behavior
On mount:
Registers ScrollTrigger
Applies GSAP animation from /lib/animations/scroll.ts
Output
Wraps slot
5.2 <Stagger />
Props
{
  stagger?: number;
  delay?: number;
}
Behavior
Targets children
Applies stagger animation
5.3 <TextSplit />
Props
{
  text: string;
  type?: 'chars' | 'words' | 'lines';
  animation?: AnimationConfig;
}
Behavior
Splits text (GSAP SplitText or fallback)
Applies animation
Constraint
Must reinitialize on resize
6. Section Components
6.1 <Hero />
Props
{
  title: string;
  subtitle?: string;
  cta?: {
    label: string;
    href: string;
  };
}
Composition
<Section>
<Container>
<Heading>
<Text>
<Button>
Animation
Title → stagger text animation
Subtitle → fade-in
CTA → delayed reveal
6.2 <FeatureGrid />
Props
{
  items: {
    title: string;
    description: string;
    icon?: string;
  }[];
}
Behavior
Uses <Grid>
Each item wrapped in <Reveal>
6.3 <Footer />
Props
{
  links: { label: string; href: string }[];
}
7. Animation Contract
7.1 Input Standard

All animation functions must accept:

{
  element: HTMLElement;
  config?: AnimationConfig;
}
7.2 Output
Returns GSAP timeline:
gsap.core.Timeline
7.3 Example
export function fadeUp({ element, config }) {
  return gsap.from(element, {
    y: 60,
    opacity: 0,
    duration: config?.duration ?? 0.8
  });
}
8. Event Contract
Standard Events
Event	Payload
on:click	MouseEvent
on:enter	void
on:leave	void
9. Data Flow Rules
Parent → child via props only
Child → parent via events only
No shared mutable state between components
10. Edge Cases & Enforcement
10.1 Missing Props
All required props must throw (dev mode)
10.2 Animation Disabled

If:

config.enabled === false

→ Skip GSAP entirely

10.3 SSR Safety
Components must render without GSAP
Animation attaches only in onMount
10.4 Slot Integrity
Components must not mutate slot structure
11. Naming Conventions
Type	Format
Components	PascalCase
Props	camelCase
Files	kebab-case
12. Final Deterministic Rules
Every component must have:
Explicit props
Defined output
No hidden behavior
Animation must:
Be externally defined
Be configurable via props
Layout must:
Be Tailwind-only
Never depend on JS
Components must be:
Composable
Stateless where possible