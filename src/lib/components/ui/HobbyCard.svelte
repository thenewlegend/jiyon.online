<script lang="ts">
  import type { Hobby } from "$lib/config/hobbies";
  import Heading from "./Heading.svelte";
  import Text from "./Text.svelte";
  import { onMount } from "svelte";
  import gsap from "$lib/animations/core";

  let { hobby, onOpenDetails } = $props<{
    hobby: Hobby;
    onOpenDetails?: (hobby: Hobby) => void;
  }>();

  let cardRef = $state<HTMLElement | null>(null);
  let imageRef = $state<HTMLElement | null>(null);

  function handleMouseEnter() {
    gsap.to(cardRef, {
      borderColor: "rgba(var(--color-accent-rgb), 0.3)",
      backgroundColor: "rgba(var(--color-base-muted-rgb), 0.05)",
      duration: 0.4,
      ease: "power2.out",
    });
    if (imageRef) {
      gsap.to(imageRef, { scale: 1.1, duration: 0.6, ease: "power2.out" });
    }
  }

  function handleMouseLeave() {
    gsap.to(cardRef, {
      borderColor: "rgba(var(--color-base-muted-rgb), 0.1)",
      backgroundColor: "transparent",
      duration: 0.4,
      ease: "power2.out",
    });
    if (imageRef) {
      gsap.to(imageRef, { scale: 1, duration: 0.6, ease: "power2.out" });
    }
  }
</script>

<div
  bind:this={cardRef}
  class="relative border border-[var(--color-base-muted)]/10 bg-transparent transition-all duration-500 flex flex-col h-full group overflow-hidden rounded-sm"
  onmouseenter={handleMouseEnter}
  onmouseleave={handleMouseLeave}
>
  <!-- Image Container -->
  {#if hobby.image}
    <div
      class="relative w-full aspect-video overflow-hidden bg-[var(--color-base-muted)]/5"
    >
      <img
        bind:this={imageRef}
        src={hobby.image}
        alt={hobby.title}
        class="w-full h-full object-cover transition-transform duration-700 ease-out"
        loading="lazy"
      />
      <!-- Subtle Overlay -->
      <div
        class="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-500"
      ></div>
    </div>
  {/if}

  <div class="flex-grow p-8 space-y-6 relative z-10 flex flex-col">
    <!-- Category Tags -->
    <div class="flex flex-wrap gap-2">
      {#each hobby.tags as tag}
        <span
          class="text-[9px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-full border border-[var(--color-base-muted)]/20 text-[var(--color-base-muted)] group-hover:border-[var(--color-accent)]/20 group-hover:text-[var(--color-accent)] transition-colors duration-300"
        >
          {tag}
        </span>
      {/each}
    </div>

    <div class="space-y-4 flex-grow">
      <Heading
        level={3}
        text={hobby.title}
        class="text-2xl transition-colors duration-300 group-hover:text-[var(--color-accent)]"
      />

      <Text
        text={hobby.description}
        muted
        class="text-sm font-light leading-relaxed group-hover:text-[var(--color-base-light)] transition-colors"
      />
    </div>

    <!-- Footer Action -->
    <button
      type="button"
      class="mt-8 px-6 py-4 bg-[var(--color-base-muted)]/5 border border-[var(--color-base-muted)]/10 hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-accent)]/5 transition-all duration-300 flex items-center justify-between group/btn cursor-pointer rounded-sm active:scale-95"
      onclick={() => onOpenDetails?.(hobby)}
    >
      <span
        class="text-[10px] uppercase font-bold tracking-[0.2em] text-[var(--color-base-light)] group-hover/btn:text-[var(--color-accent)] transition-colors"
      >
        SEE MORE
      </span>
      <div class="flex items-center gap-2">
        <span
          class="w-8 h-[1px] bg-[var(--color-base-muted)]/20 group-hover/btn:w-12 group-hover/btn:bg-[var(--color-accent)] transition-all duration-500"
        ></span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="transform -rotate-45 group-hover/btn:rotate-0 group-hover/btn:text-[var(--color-accent)] transition-all duration-500"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </div>
    </button>
  </div>
</div>
