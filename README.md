```yaml
project:
  name: "JIYON P J Portfolio"
  description: "Primary professional portfolio & resume for JIYON P J — Mechanical Engineer specializing in AI and automation."
  repository: "https://github.com/thenewlegend/jiyon.online"

tech_stack:
  framework: "SvelteKit"
  language: "TypeScript"
  styling: "Tailwind CSS"
  animations: "GSAP (Core, ScrollTrigger)"
  build_target: "Static Site Generation (SSG) / Adapter Auto"

architecture:
  pattern: "Component-driven Declarative UI"
  state_management: "Props / Svelte Reactivity"
  directories:
    src/lib/components:
      layout: "Structural grids and sections"
      ui: "Atomic elements (Buttons, Headings)"
      sections: "Page composite segments (Hero, Experience, Blog)"
      motion: "GSAP wrappers (Reveal, Stagger)"
      resume: "Dedicated layout structures for the resume page"
    src/lib/config: "Headless data stores (experience, projects, resume data)"
    src/routes: "SvelteKit file-based routes (+page.svelte)"

design_philosophy:
  theme: "Engineering aesthetic (High-contrast Dark Mode)"
  responsiveness: "Mobile-first approach"
  motion: "Determinisitc, scroll-driven reveal micro-interactions"
  maintainability: "Data cleanly separated from presentation logic"

scripts:
  development: "npm run dev"
  build: "npm run build"
  preview: "npm run preview"
```
