<script lang="ts">
  import { onMount } from "svelte";
  import Container from "./Container.svelte";

  let {
    children,
    class: className = "",
    title = "",
    showControls = true,
  } = $props<{
    children?: import("svelte").Snippet;
    class?: string;
    title?: string;
    showControls?: boolean;
  }>();

  let scrollContainer = $state<HTMLElement | null>(null);
  let canScrollLeft = $state(false);
  let canScrollRight = $state(true);

  function handleScroll() {
    if (!scrollContainer) return;
    canScrollLeft = scrollContainer.scrollLeft > 20;
    canScrollRight =
      scrollContainer.scrollLeft <
      scrollContainer.scrollWidth - scrollContainer.clientWidth - 20;
  }

  function scroll(direction: "left" | "right") {
    if (!scrollContainer) return;
    const scrollAmount = scrollContainer.clientWidth * 0.8;
    scrollContainer.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  }

  onMount(() => {
    handleScroll();
  });
</script>

<div class="group/carousel relative {className}">
  {#if showControls}
    <div class="absolute -top-16 right-4 hidden lg:flex items-center gap-3">
      <button
        class="w-10 h-10 flex items-center justify-center border border-[var(--color-base-muted)]/20 rounded-full hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-base-dark)] disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-300"
        onclick={() => scroll("left")}
        disabled={!canScrollLeft}
        aria-label="Scroll Left"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"><path d="m15 18-6-6 6-6" /></svg
        >
      </button>
      <button
        class="w-10 h-10 flex items-center justify-center border border-[var(--color-base-muted)]/20 rounded-full hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-base-dark)] disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-300"
        onclick={() => scroll("right")}
        disabled={!canScrollRight}
        aria-label="Scroll Right"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg
        >
      </button>
    </div>
  {/if}

  <div
    bind:this={scrollContainer}
    onscroll={handleScroll}
    class="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-6 px-4 lg:px-8 -mx-4 lg:-mx-8 pb-8"
  >
    <!-- Spacer for initial alignment -->
    <div class="shrink-0 w-0"></div>

    {@render children?.()}

    <!-- Spacer for end alignment -->
    <div class="shrink-0 w-4 lg:w-32 h-1"></div>
  </div>
</div>

<style>
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
</style>
