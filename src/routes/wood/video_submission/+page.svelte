<script lang="ts">
  import Section from "$lib/components/layout/Section.svelte";
  import Container from "$lib/components/layout/Container.svelte";
  import Heading from "$lib/components/ui/Heading.svelte";
  import Text from "$lib/components/ui/Text.svelte";
  import Reveal from "$lib/components/motion/Reveal.svelte";
  import Button from "$lib/components/ui/Button.svelte";
  import { onMount } from "svelte";
  import gsap from "gsap";

  // State Management
  let isLoaded = $state(false);
  let isCinemaMode = $state(false);
  let videoWrapper = $state<HTMLElement | null>(null);

  const VIDEO_ID = "dQw4w9WgXcQ";
  const EMBED_URL = `https://www.youtube-nocookie.com/embed/${VIDEO_ID}?si=BgS6PkTCQgnYM8DU&rel=0&showinfo=0&modestbranding=1`;

  function handleLoad() {
    isLoaded = true;
  }

  async function toggleCinema() {
    if (!isCinemaMode) {
      isCinemaMode = true;
      
      // Attempt Fullscreen and Orientation Lock
      if (videoWrapper) {
        try {
          if (videoWrapper.requestFullscreen) {
            await videoWrapper.requestFullscreen();
          }
          // Lock to landscape on mobile if supported
          if (window.screen.orientation && "lock" in window.screen.orientation) {
            // @ts-ignore - lock might not be in types but exists
            await window.screen.orientation.lock("landscape").catch(() => {});
          }
        } catch (err) {
          console.warn("Fullscreen/Orientation lock denied:", err);
        }
      }
    } else {
      isCinemaMode = false;
      if (document.fullscreenElement) {
        document.exitFullscreen().catch(() => {});
      }
    }
  }

  // Handle Fullscreen Exit (via ESC key or browser button)
  onMount(() => {
    const handleFsChange = () => {
      if (!document.fullscreenElement) {
        isCinemaMode = false;
      }
    };
    document.addEventListener("fullscreenchange", handleFsChange);
    return () => document.removeEventListener("fullscreenchange", handleFsChange);
  });
</script>

<svelte:head>
  <title>Video Submission | Woods</title>
  <meta
    name="description"
    content="Submitting my project to showcase craftsmanship."
  />
</svelte:head>

<Section
  class="min-h-screen flex flex-col justify-center relative overflow-hidden pt-12 lg:pt-0"
>
  <!-- Decorative background elements -->
  <div
    class="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.05),transparent)] pointer-events-none"
  ></div>

  <Container
    class="flex flex-col items-center gap-6 lg:gap-10 relative z-10 py-8"
  >
    <!-- Video Wrapper -->
    <Reveal animation="scale" delay={0.1} class="w-full">
      <div
        bind:this={videoWrapper}
        class="video-container group relative rounded-2xl overflow-hidden border border-[var(--color-accent)]/10 bg-[var(--color-base-dark)]/50 backdrop-blur-sm shadow-2xl transition-all duration-700"
        class:cinema-mode={isCinemaMode}
      >
        <!-- Loading Skeleton -->
        {#if !isLoaded}
          <div
            class="absolute inset-0 flex items-center justify-center bg-[var(--color-base-dark)] animate-pulse z-20"
          >
            <div
              class="w-12 h-12 border-4 border-[var(--color-accent)]/20 border-t-[var(--color-accent)] rounded-full animate-spin"
            ></div>
          </div>
        {/if}

        <!-- Interactive Play Overlay -->
        {#if !isCinemaMode}
          <div 
            class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all duration-500 cursor-pointer z-10"
            onclick={toggleCinema}
          >
            <div class="scale-90 group-hover:scale-100 transition-transform duration-500 bg-[var(--color-accent)] text-[var(--color-base-dark)] p-6 rounded-full shadow-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
        {/if}

        <!-- Top Right Close Button for Cinema Mode (Fallback if ESC not used) -->
        {#if isCinemaMode}
          <button 
            class="absolute top-6 right-6 z-30 p-3 rounded-full bg-black/40 text-white backdrop-blur-md border border-white/10 hover:bg-black/60 transition-all cursor-pointer"
            onclick={toggleCinema}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        {/if}

        <iframe
          src={isCinemaMode ? `${EMBED_URL}&autoplay=1` : EMBED_URL}
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

    <Reveal animation="fade-up" delay={0.3} class="w-full max-w-4xl">
      <div class="space-y-6 text-center lg:text-left">
        <Text
          text="Welcome to the video submission portal. Please review the footage above to ensure your submission meets our quality standards. We look for high-resolution captures of the joinery process, finishing techniques, and the final assembly. Your craftsmanship inspiration helps build the community."
          class="text-base lg:text-lg font-light leading-relaxed opacity-70"
        />

        <div class="flex flex-wrap justify-center lg:justify-start gap-3 pt-2">
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
  .video-container {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    aspect-ratio: 16 / 9;

    /* Larger Default Size logic:
       Reduced offset since Heading is gone.
    */
    --offset: 400px;
    max-height: calc(100dvh - var(--offset));
    width: min(100%, calc((100dvh - var(--offset)) * (16 / 9)));

    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  }

  /* Cinema Mode Overrides */
  .cinema-mode {
    position: fixed;
    inset: 0;
    width: 100vw !important;
    height: 100vh !important;
    max-height: 100vh !important;
    max-width: 100vw !important;
    z-index: 100 !important;
    border-radius: 0 !important;
    border: none !important;
    background: black !important;
    aspect-ratio: auto !important;
  }

  @media (max-width: 1024px) {
    .video-container {
      --offset: 350px;
      max-height: 65vh;
    }
  }

  :global(.gsap-reveal-scale) {
    transform-origin: center center;
  }
</style>e>
