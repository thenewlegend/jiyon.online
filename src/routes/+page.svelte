<script lang="ts">
  import Hero from "$lib/components/sections/Hero.svelte";
  import MEProjectCard from "$lib/components/sections/MEProjectCard.svelte";
  import ExperienceCard from "$lib/components/sections/ExperienceCard.svelte";
  import Section from "$lib/components/layout/Section.svelte";
  import Container from "$lib/components/layout/Container.svelte";
  import Grid from "$lib/components/layout/Grid.svelte";
  import Heading from "$lib/components/ui/Heading.svelte";
  import Text from "$lib/components/ui/Text.svelte";
  import Reveal from "$lib/components/motion/Reveal.svelte";
  import Stagger from "$lib/components/motion/Stagger.svelte";
  import BlogCard from "$lib/components/sections/BlogCard.svelte";
  import Carousel from "$lib/components/layout/Carousel.svelte";
  import { experience } from "$lib/config/experience";
  import { projects } from "$lib/config/project";

  let { data } = $props();
</script>

<svelte:head>
  <title>JIYON P J | Mechanical Engineering Portfolio</title>
  <meta
    name="description"
    content="Personal portfolio of JIYON P J, a professional Mechanical Engineer specialized in precision design and structural optimization."
  />
</svelte:head>

<main class="relative overflow-x-hidden">
  <!-- HERO SECTION -->
  <Hero
    title="JIYON P J"
    subtitle="Mechanical Engineer. Specializing in precision design, structural optimization, and functional prototyping."
    cta={{ label: "Go to Resume", href: "/resume" }}
  />

  <!-- SKILLS / ABOUT SECTION -->
  <Section
    id="about"
    class="bg-[var(--color-accent)] text-[var(--color-base-dark)] selection:bg-[var(--color-base-dark)] selection:text-[var(--color-accent)]"
  >
    <Container>
      <Grid cols={{ base: 1, lg: 2 }} gap="gap-16">
        <Reveal animation="fade-in">
          <Heading level={2} text="Engineering Philosophy" class="mb-8" />
          <p
            class="text-xl lg:text-3xl font-medium tracking-tight leading-normal opacity-90"
          >
            I believe engineering is the bridge between abstract physics and
            tangible solutions. I focus on <span
              class="border-b-2 border-current">material efficiency</span
            >, <span class="border-b-2 border-current">producible design</span>,
            and
            <span class="border-b-2 border-current">quantitative impact</span>.
          </p>
        </Reveal>

        <Reveal animation="fade-up" delay={0.4}>
          <Grid cols={{ base: 2, lg: 2 }} gap="gap-4">
            <div class="space-y-2">
              <h4
                class="text-[10px] uppercase font-bold tracking-[0.2em] opacity-40"
              >
                Core Stack
              </h4>
              <ul class="text-sm font-medium space-y-1">
                <li>SolidWorks / Fusion 360</li>
                <li>ANSYS / Abaqus (FEA/CFD)</li>
                <li>Python / MATLAB</li>
                <li>GD&T / DFM / DFA</li>
              </ul>
            </div>
            <div class="space-y-2">
              <h4
                class="text-[10px] uppercase font-bold tracking-[0.2em] opacity-40"
              >
                Expertise
              </h4>
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
          <Text
            text="A selection of engineered solutions that demonstrate a focus on structural efficiency and measurable impact."
            muted
          />
        </div>
      </Reveal>

      <Carousel>
        <Stagger stagger={0.2} class="flex gap-6">
          {#each projects as project}
            <MEProjectCard {project} />
          {/each}
        </Stagger>
      </Carousel>
    </Container>
  </Section>

  <!-- EXPERIENCE SECTION -->
  <Section
    id="experience"
    class="bg-[var(--color-base-dark)]/50 backdrop-blur-sm"
  >
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
            <Text
              text="Notes, observations, and deep dives into the mechanics of physical product development."
              muted
            />
          </div>
        </Reveal>

        <Carousel>
          <Stagger stagger={0.1} class="flex gap-6">
            {#each data.posts as post}
              <BlogCard {post} />
            {/each}
          </Stagger>
        </Carousel>
      </div>
    </Container>
  </Section>

  <!-- FOOTER -->
  <Section
    padded={false}
    class="py-12 border-t border-[var(--color-base-muted)]/10"
  >
    <Container>
      <div class="flex flex-col lg:flex-row justify-between items-center gap-8">
        <div class="space-y-2 text-center lg:text-left">
          <span
            class="text-xs uppercase font-bold tracking-[0.3em] text-[var(--color-accent)]"
            >JIYON P J</span
          >
          <p
            class="text-xs text-[var(--color-base-muted)] font-medium uppercase tracking-widest"
          >
            © 2026 Engineered in dark mode.
          </p>
        </div>

        <div class="flex items-center gap-8">
          <a
            href="mailto:contact@jiyon.com"
            class="text-sm uppercase tracking-wide hover:text-[var(--color-accent)] transition-colors duration-300"
            >Email</a
          >
          <a
            href="https://linkedin.com"
            class="text-sm uppercase tracking-wide hover:text-[var(--color-accent)] transition-colors duration-300"
            >LinkedIn</a
          >
          <a
            href="https://github.com"
            class="text-sm uppercase tracking-wide hover:text-[var(--color-accent)] transition-colors duration-300"
            >GitHub</a
          >
        </div>
      </div>
    </Container>
  </Section>
</main>
