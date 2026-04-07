<script lang="ts">
  import Hero from '$lib/components/sections/Hero.svelte';
  import MEProjectCard from '$lib/components/sections/MEProjectCard.svelte';
  import ExperienceCard from '$lib/components/sections/ExperienceCard.svelte';
  import Section from '$lib/components/layout/Section.svelte';
  import Container from '$lib/components/layout/Container.svelte';
  import Grid from '$lib/components/layout/Grid.svelte';
  import Heading from '$lib/components/ui/Heading.svelte';
  import Text from '$lib/components/ui/Text.svelte';
  import Reveal from '$lib/components/motion/Reveal.svelte';
  import Stagger from '$lib/components/motion/Stagger.svelte';

  import BlogCard from '$lib/components/sections/BlogCard.svelte';
  import type { BlogPost } from '$lib/components/sections/BlogCard.svelte';

  const projects = [
    {
      id: 'p1',
      title: 'Structural Optimization of Robotic Arm',
      date: '2025',
      context: 'Increased payload requirements for a 6-axis industrial robot without resizing existing motors.',
      solution: 'Re-engineered the elbow joint using topology optimization and carbon fiber-reinforced composites.',
      impact: 'Reduced weight by 22% while increasing stiffness by 15%.',
      tools: ['SolidWorks', 'ANSYS', 'FEA', 'Composite Design']
    },
    {
      id: 'p2',
      title: 'Precision Heat Exchanger for EV Batteries',
      date: '2024',
      context: 'Battery thermal management system failing during rapid charging cycles in high-ambient temperatures.',
      solution: 'Designed a micro-channel cold plate using additive manufacturing to maximize surface area-to-volume ratio.',
      impact: 'Maintained battery temp 8°C lower during 30min charge cycles.',
      tools: ['CFD', 'DFAM', 'Thermal Analysis', 'GD&T']
    },
    {
      id: 'p3',
      title: 'Automated Micro-Assembly Mechanism',
      date: '2024',
      context: 'Manual tiny-component assembly resulting in a 12% defect rate and high labor costs.',
      solution: 'Developed a high-precision flexure-based gripper system with integrated piezo-actuators for sub-micron control.',
      impact: 'Defect rate dropped to 0.4%, throughput increased by 300%.',
      tools: ['Precision Design', 'Mechanism Design', 'Mechatronics']
    }
  ];

  const experience = [
    {
      id: 'e1',
      role: 'Senior Design Engineer',
      company: 'Precision Dynamics Systems',
      duration: '2023 — Present',
      achievements: [
        'Lead mechanical architect for high-speed manufacturing lines serving the aerospace industry.',
        'Conceptualized and executed over 15 successful DFM/DFA initiatives, reducing assembly costs by 20%.',
        'Directly managed a team of 4 junior engineers through full product lifecycle (NPI).'
      ]
    },
    {
      id: 'e2',
      role: 'Mechanical Engineer',
      company: 'NextGen Mobility Labs',
      duration: '2020 — 2023',
      achievements: [
        'Developed structural components for autonomous vehicle prototypes using aluminum casting and CNC machining.',
        'Automated quality inspection reports using custom Python scripts integrated with SolidWorks API.',
        'Recipient of the 2021 Engineering Excellence Award for battery safety enclosure design.'
      ]
    }
  ];

  const blogPosts: BlogPost[] = [
    {
      id: 'b1',
      title: 'The Future of Topology Optimization in Consumer Products',
      date: 'Jan 28, 2026',
      readTime: '6 min read',
      excerpt: 'Exploring how generative design and AI-driven structural analysis are moving from aerospace to everyday consumer electronics for better thermal management and weight saving.'
    },
    {
      id: 'b2',
      title: 'Designing for Additive Manufacturing (DfAM): A Systems Approach',
      date: 'Dec 12, 2025',
      readTime: '12 min read',
      excerpt: 'Beyond 3D printing. DfAM is about rethinking the entire assembly process to reduce part counts and eliminate traditional point-of-failure joints.'
    }
  ];
</script>

<svelte:head>
  <title>JIYON P J | Mechanical Engineering Portfolio</title>
  <meta name="description" content="Personal portfolio of JIYON P J, a professional Mechanical Engineer specialized in precision design and structural optimization." />
</svelte:head>

<main class="relative overflow-x-hidden">
  
  <!-- HERO SECTION -->
  <Hero 
    title="JIYON P J" 
    subtitle="Mechanical Engineer. Specializing in precision design, structural optimization, and functional prototyping." 
    cta={{ label: "View Featured Projects", href: "#projects" }}
  />

  <!-- SKILLS / ABOUT SECTION -->
  <Section id="about" class="bg-[var(--color-accent)] text-[var(--color-base-dark)] selection:bg-[var(--color-base-dark)] selection:text-[var(--color-accent)]">
    <Container>
      <Grid cols={{ base: 1, lg: 2 }} gap="gap-16">
        <Reveal animation="fade-in">
          <Heading level={2} text="Engineering Philosophy" class="mb-8" />
          <p class="text-xl lg:text-3xl font-medium tracking-tight leading-normal opacity-90">
             I believe engineering is the bridge between abstract physics and tangible solutions. I focus on <span class="border-b-2 border-current">material efficiency</span>, <span class="border-b-2 border-current">producible design</span>, and <span class="border-b-2 border-current">quantitative impact</span>.
          </p>
        </Reveal>
        
        <Reveal animation="fade-up" delay={0.4}>
          <Grid cols={{ base: 2, lg: 2 }} gap="gap-4">
            <div class="space-y-2">
              <h4 class="text-[10px] uppercase font-bold tracking-[0.2em] opacity-40">Core Stack</h4>
              <ul class="text-sm font-medium space-y-1">
                <li>SolidWorks / Fusion 360</li>
                <li>ANSYS / Abaqus (FEA/CFD)</li>
                <li>Python / MATLAB</li>
                <li>GD&T / DFM / DFA</li>
              </ul>
            </div>
            <div class="space-y-2">
              <h4 class="text-[10px] uppercase font-bold tracking-[0.2em] opacity-40">Expertise</h4>
              <ul class="text-sm font-medium space-y-1">
                <li>Topology Optimization</li>
                <li>Additive Manufacturing</li>
                <li>Precision Machining</li>
                <li>Thermal Management</li>
              </ul>
            </div>
          </Grid>
        </Reveal>
      </Grid>
    </Container>
  </Section>

  <!-- PROJECTS SECTION -->
  <Section id="projects">
    <Container>
      <Reveal animation="fade-in" class="mb-16">
        <div class="space-y-4">
          <Heading level={2} text="Featured Projects" />
          <Text text="A selection of engineered solutions that demonstrate a focus on structural efficiency and measurable impact." muted />
        </div>
      </Reveal>

      <Stagger stagger={0.2}>
        <Grid cols={{ base: 1, lg: 3 }} gap="gap-4">
          {#each projects as project}
            <MEProjectCard {project} />
          {/each}
        </Grid>
      </Stagger>
    </Container>
  </Section>

  <!-- EXPERIENCE SECTION -->
  <Section id="experience" class="bg-[var(--color-base-dark)]/50 backdrop-blur-sm">
    <Container>
      <div class="max-w-4xl">
        <Reveal animation="fade-in" class="mb-16">
          <Heading level={2} text="Work Experience" />
        </Reveal>

        <Stagger stagger={0.3}>
          {#each experience as item}
            <ExperienceCard {item} />
          {/each}
        </Stagger>
      </div>
    </Container>
  </Section>

  <!-- BLOG / WRITING SECTION -->
  <Section id="blog">
    <Container>
      <div class="max-w-4xl mx-auto">
        <Reveal animation="fade-in" class="mb-12">
          <div class="space-y-4">
            <Heading level={2} text="Engineering Insights" />
            <Text text="Notes, observations, and deep dives into the mechanics of physical product development." muted />
          </div>
        </Reveal>

        <Stagger stagger={0.2}>
           <div class="border-t border-[var(--color-base-muted)]/10">
              {#each blogPosts as post}
                <BlogCard {post} />
              {/each}
           </div>
        </Stagger>
      </div>
    </Container>
  </Section>

  <!-- FOOTER -->
  <Section padded={false} class="py-12 border-t border-[var(--color-base-muted)]/10">
    <Container>
      <div class="flex flex-col lg:flex-row justify-between items-center gap-8">
        <div class="space-y-2 text-center lg:text-left">
           <span class="text-xs uppercase font-bold tracking-[0.3em] text-[var(--color-accent)]">JIYON P J</span>
           <p class="text-xs text-[var(--color-base-muted)] font-medium uppercase tracking-widest">© 2026 Engineered in dark mode.</p>
        </div>
        
        <div class="flex items-center gap-8">
           <a href="mailto:contact@jiyon.com" class="text-sm uppercase tracking-wide hover:text-[var(--color-accent)] transition-colors duration-300">Email</a>
           <a href="https://linkedin.com" class="text-sm uppercase tracking-wide hover:text-[var(--color-accent)] transition-colors duration-300">LinkedIn</a>
           <a href="https://github.com" class="text-sm uppercase tracking-wide hover:text-[var(--color-accent)] transition-colors duration-300">GitHub</a>
        </div>
      </div>
    </Container>
  </Section>

</main>
