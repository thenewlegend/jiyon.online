<script lang="ts">
  import Hero from "$lib/components/sections/Hero.svelte";
  import MEProjectCard from "$lib/components/sections/MEProjectCard.svelte";
  import ExperienceCard from "$lib/components/sections/ExperienceCard.svelte";
  import EducationCard from "$lib/components/sections/EducationCard.svelte";
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
  import { education } from "$lib/config/education";
  import { projects } from "$lib/config/project";

  let { data } = $props();
</script>

<svelte:head>
  <title>JIYON P J</title>
  <meta
    name="description"
    content="Energy Engineer with applied experience in AI, RAG systems and automation"
  />
</svelte:head>

<main class="relative overflow-x-hidden">
  <!-- HERO SECTION -->
  <Hero
    title="JIYON P J"
    subtitle="Energy Engineer with applied experience in AI, RAG systems and automation"
    cta={{ label: "Go to Resume", href: "/resume" }}
  />

  <!-- SKILLS / ABOUT SECTION -->
  <Section
    id="about"
    class="bg-[var(--color-accent)] text-[var(--color-base-dark)] selection:bg-[var(--color-base-dark)] selection:text-[var(--color-accent)]"
  >
    <Container>
      <Grid cols={{ base: 1, lg: 1 }} gap="gap-16">
  <Reveal animation="fade-in">
    <p class="text-xl lg:text-4xl font-medium tracking-tight leading-tight opacity-90 max-w-4xl">
      Navigating the intersection of <span class="border-b-2 border-current">energy</span> and <span class="border-b-2 border-current">agentic workflows</span> to solve complex industrial challenges.
    </p>
  </Reveal>

  <Reveal animation="fade-up" delay={0.4}>
    <Grid cols={{ base: 2, lg: 4 }} gap="gap-8">
      <div class="space-y-4">
        <h4 class="text-[10px] uppercase font-bold tracking-[0.2em] opacity-40">
          Core Stack
        </h4>
        <ul class="text-sm font-medium space-y-2 opacity-80">
          <li>MATLAB / Simulink</li>
          <li>SolidWorks / Fusion 360</li>
          <li>COMSOL Multiphysics</li>         
          <li>AutoCAD 2D/3D</li>
          <li>Microsoft Excel</li>
        </ul>
      </div>      

      <div class="space-y-4">
        <h4 class="text-[10px] uppercase font-bold tracking-[0.2em] opacity-40">
          Domain Expertise
        </h4>
        <ul class="text-sm font-medium space-y-2 opacity-80">
          <li>Thermal & HVAC Management</li>
          <li>Hydrogen & Green Energy</li>
          <li>Renewable Energy Systems</li>
          <li>Energy Storage Systems (ESS)</li>
          <li>Decarbonization & ESG</li>
        </ul>
      </div>

      <div class="space-y-4">
        <h4 class="text-[10px] uppercase font-bold tracking-[0.2em] opacity-40">
          Intelligent Systems
        </h4>
        <ul class="text-sm font-medium space-y-2 opacity-80">
          <li>Spec-Driven AI Development</li>
          <li>Prompt Optimization & Model Tuning</li>
          <li>AI API Integration (Gemini API)</li>
          <li>RAG System Design with Vector DB</li>
          <li></li>
          <li>Multi-Agent Architecture</li>     
        </ul>
      </div>

      <div class="space-y-4">
        <h4 class="text-[10px] uppercase font-bold tracking-[0.2em] opacity-40">
          Product & Design
        </h4>
        <ul class="text-sm font-medium space-y-2 opacity-80">
          <li>Agile / Scrum Methodologies</li>
          <li>HTML / CSS / JS / SvelteKit / Supabase</li>
          <li>UI/UX Design (Figma/Google Stitch)</li>
          <li>Graphic Design (Photoshop/Canva)</li>
          <li>Video Production (DaVinci Resolve)</li>
        </ul>
      </div>
    </Grid>
  </Reveal>
</Grid>
    </Container>
  </Section>

  <!-- PROJECTS SECTION -->
  <div class="stark-dynamic-fade">
    <Section id="projects">
    <Container>
      <Reveal animation="fade-in" class="mb-10">
        <div class="space-y-4" style="margin-bottom: 2.5rem;">
          <Heading level={1} text="Featured Projects" />
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
  </div>

  <!-- EXPERIENCE SECTION -->
  <div class="stark-inverse-fade">
    <Section
    id="experience"
    class="bg-[var(--color-base-dark)]/50 backdrop-blur-sm"
  >
    <Container>
          <div class="max-w-4xl">
        <div style="margin-top: 2rem;">
          <Reveal animation="fade-in" class="mb-10">
            <Heading level={2} text="Education" />
          </Reveal>

          <Reveal animation="fade-up">
            <EducationCard item={education[0]} isCurrent={true} />
          </Reveal>

          <Reveal animation="fade-in" delay={0.2}>
            <a
              href="/resume#education"
              class="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-bold text-[var(--color-base-muted)] hover:text-[var(--color-accent)] transition-colors duration-300 group mt-8 lg:mt-12"
            >
              <span
                class="border-b border-transparent group-hover:border-current transition-colors"
                >See complete education</span
              >
              <svg
                class="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                ><path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path></svg
              >
            </a>
          </Reveal>
        </div>
      </div>

      <div class="mt-8 lg:mt-6">
        <Reveal animation="fade-in" class="mb-10">
          <Heading level={2} text="Work Experience" />
        </Reveal>

        <Reveal animation="fade-up">
          <ExperienceCard item={experience[0]} isCurrent={true} />
        </Reveal>

        <Reveal animation="fade-in" delay={0.2}>
          <a
            href="/resume#experience"
            class="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-bold text-[var(--color-base-muted)] hover:text-[var(--color-accent)] transition-colors duration-300 group mt-8 lg:mt-12"
          >
            <span
              class="border-b border-transparent group-hover:border-current transition-colors"
              >See complete experience</span
            >
            <svg
              class="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path></svg
            >
          </a>
        </Reveal>
      </div>


    </Container>
  </Section>
  </div>

  <!-- BLOG / WRITING SECTION -->
  <Section id="blog" class="bg-white text-[var(--color-base-dark)]">
    <Container>
      <div class="max-w-4xl mx-auto">
        <Reveal animation="fade-in" class="mb-12">
          <div class="space-y-4">
            <Heading level={2} text="Insights Blog" />
            <Text
              text="Notes, observations and insights.
"
              class="text-[var(--color-base-dark)] opacity-90"
            />
          </div>
        </Reveal>

        <Carousel>
          <div class="flex gap-6">
            {#each data.posts as post}
              <BlogCard {post} lightMode={true} />
            {/each}
          </div>
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
            ><span id="time"></span>

            <script>
              function updateTime() {
                const now = new Date();
                document.getElementById("time").textContent = now.toLocaleTimeString();
              }

              updateTime();
              setInterval(updateTime, 1000);
            </script>
            </span>
          <p
            class="text-xs text-[var(--color-base-muted)] font-medium tracking-widest"
          >
            ©<a
              href="https://github.com/thenewlegend/jiyon.online"
              target="_blank">thenewlegend</a
            >
          </p>
        </div>

        <div class="flex items-center gap-8">
          <a
            href="mailto:jiyonpj2501@gmail.com"
            class="text-sm uppercase tracking-wide hover:text-[var(--color-accent)] transition-colors duration-300"
            >Email</a
          >
          <a
            href="https://linkedin.com/in/jiyon"
            class="text-sm uppercase tracking-wide hover:text-[var(--color-accent)] transition-colors duration-300"
            >LinkedIn</a
          >
          <a
            href="https://github.com/thenewlegend"
            class="text-sm uppercase tracking-wide hover:text-[var(--color-accent)] transition-colors duration-300"
            >GitHub</a
          >
        </div>
      </div>
    </Container>
  </Section>
</main>

<style>
.stark-dynamic-fade {
  background: linear-gradient(180deg, 
    /* 0% - 15%: The Lighter Black Variance */
    #131313 0%, #131313 1%, #131313 2%, #121212 3%, #121212 4%, #121212 5%, 
    #111111 6%, #111111 7%, #111111 8%, #101010 9%, #101010 10%, #101010 11%, 
    #0f0f0f 12%, #0f0f0f 13%, #0e0e0e 14%, #0e0e0e 15%,
    /* 16% - 84%: Granular Decay */
    #0e0e0e 16%, #0d0d0d 18%, #0d0d0d 20%, #0c0c0c 22%, #0c0c0c 24%,
    #0b0b0b 26%, #0b0b0b 28%, #0a0a0a 30%, #0a0a0a 32%, #090909 34%,
    #090909 36%, #080808 38%, #080808 40%, #070707 42%, #070707 44%,
    #060606 46%, #060606 48%, #050505 50%, #050505 52%, #040404 54%,
    #040404 56%, #030303 58%, #030303 60%, #020202 62%, #020202 64%,
    #010101 66%, #010101 68%, #000000 70%, #000000 72%, #000000 74%,
    #000000 76%, #000000 78%, #000000 80%, #000000 82%, #000000 84%,
    /* 85% - 100%: The Void (Seam Prep) */
    #000000 85%, #000000 90%, #000000 95%, #000000 100%
  );
}

.stark-inverse-fade {
  background: linear-gradient(180deg, 
    /* 0% - 15%: The Void Anchor (Matches previous section end) */
    #000000 0%, #000000 5%, #000000 10%, #000000 15%,
    /* 16% - 84%: Granular Ascent */
    #000000 16%, #010101 18%, #010101 20%, #020202 22%, #020202 24%,
    #030303 26%, #030303 28%, #040404 30%, #040404 32%, #050505 34%,
    #050505 36%, #060606 38%, #060606 40%, #070707 42%, #070707 44%,
    #080808 46%, #080808 48%, #090909 50%, #090909 52%, #0a0a0a 54%,
    #0a0a0a 56%, #0b0b0b 58%, #0b0b0b 60%, #0c0c0c 62%, #0c0c0c 64%,
    #0d0d0d 66%, #0d0d0d 68%, #0e0e0e 70%, #0e0e0e 72%, #0e0e0e 74%,
    #0f0f0f 76%, #0f0f0f 78%, #101010 80%, #101010 82%, #111111 84%,
    /* 85% - 100%: Dynamic Charcoal Finish */
    #111111 85%, #121212 87%, #121212 89%, #121212 91%, #131313 93%, 
    #131313 95%, #131313 96%, #121212 97%, #131313 98%, #131313 99%, #131313 100%
  );
}
</style>