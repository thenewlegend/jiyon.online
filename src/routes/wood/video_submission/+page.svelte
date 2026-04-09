<script lang="ts">
  import Section from "$lib/components/layout/Section.svelte";
  import Container from "$lib/components/layout/Container.svelte";
  import Heading from "$lib/components/ui/Heading.svelte";
  import Text from "$lib/components/ui/Text.svelte";
  import Reveal from "$lib/components/motion/Reveal.svelte";
  import Button from "$lib/components/ui/Button.svelte";
  import { onMount } from "svelte";

  // State to track if video is loaded for QoL transition
  let isLoaded = $state(false);

  function handleLoad() {
    isLoaded = true;
  }
</script>

<svelte:head>
  <title>Video Submission | Woods</title>
  <meta
    name="description"
    content="Submitting my project to showcase craftsmanship."
  />
</svelte:head>

<Section
  class="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20 lg:pt-0"
>
  <!-- Decorative background elements to maintain premium feel -->
  <div
    class="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.05),transparent)] pointer-events-none"
  ></div>

  <Container
    class="flex flex-col items-center gap-8 lg:gap-12 relative z-10 py-12"
  >
    <!-- Video Wrapper with dynamic height constraint logic -->
    <Reveal animation="scale" delay={0.2} class="w-full">
      <div
        class="video-container group relative rounded-2xl overflow-hidden border border-[var(--color-accent)]/10 bg-[var(--color-base-dark)]/50 backdrop-blur-sm shadow-2xl transition-all duration-500 hover:border-[var(--color-accent)]/30"
        class:opacity-0={!isLoaded}
        class:opacity-100={isLoaded}
      >
        <!-- Loading Skeleton -->
        {#if !isLoaded}
          <div
            class="absolute inset-0 flex items-center justify-center bg-[var(--color-base-dark)] animate-pulse"
          >
            <div
              class="w-12 h-12 border-4 border-[var(--color-accent)]/20 border-t-[var(--color-accent)] rounded-full animate-spin"
            ></div>
          </div>
        {/if}

        <iframe
          src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?si=BgS6PkTCQgnYM8DU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          onload={handleLoad}
          class="w-full h-full"
        ></iframe>
      </div>
    </Reveal>

    <Reveal animation="fade-up" delay={0.4} class="w-full max-w-3xl">
      <div class="space-y-8 text-center lg:text-left">
        <Text
          text="Welcome to the video submission portal. Please review the footage above to ensure your submission meets our quality standards. We look for high-resolution captures of the joinery process, finishing techniques, and the final assembly. Your craftsmanship inspiration helps build the community."
          class="text-lg lg:text-xl font-light leading-relaxed opacity-80"
        />

        <div class="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
          <Button
            label="SUBMISSION OPEN"
            href="https://youtube.com"
            variant="secondary"
            class="rounded-full px-5 py-2 text-xs font-mono tracking-wider bg-white/5 border-[var(--color-base-muted)]/20 cursor-pointer"
          />
          <Button
            label="4K RESOLUTION"
            href="https://youtube.com"
            variant="secondary"
            class="rounded-full px-5 py-2 text-xs font-mono tracking-wider bg-white/5 border-[var(--color-base-muted)]/20 cursor-pointer"
          />
        </div>
      </div>
    </Reveal>
  </Container>
</Section>

<style>
  /* 
    The logic: 
    - Full width (minus margins) is default via w-full inside Container.
    - height follows aspect ratio (16:9).
    - To avoid scroll, max-height is constrained by viewport minus estimated space for header/paragraph.
    - Width is then recalculated to preserve 16:9 within that height constraint.
  */
  .video-container {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    aspect-ratio: 16 / 9;

    /* 
       Viewport height (100dvh) 
       - Header/Logo space (~80px)
       - Title area (~150px)
       - Paragraph + Padding area (~340px)
       - Buffer (~50px)
       Total Offset ≈ 620px on desktop
    */
    --offset: 580px;
    max-height: calc(100dvh - var(--offset));

    /* Recalculate width if max-height kicks in to maintain 16:9 */
    width: min(100%, calc((100dvh - var(--offset)) * (16 / 9)));

    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 1024px) {
    .video-container {
      --offset: 480px; /* Less space needed on smaller screens for text if it stacks differently */
      width: 100%; /* Be less aggressive on mobile unless it's really short landscape */
      max-height: 70vh;
    }
  }

  /* Ensure the scale animation has a nice origin */
  :global(.gsap-reveal-scale) {
    transform-origin: center center;
  }
</style>
