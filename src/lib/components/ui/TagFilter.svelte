<script lang="ts">
  import { onMount } from "svelte";
  import gsap from "$lib/animations/core";

  let {
    tags,
    selectedTags = [],
    onToggle,
  } = $props<{
    tags: string[];
    selectedTags: string[];
    onToggle: (tag: string) => void;
  }>();

  let containerRef = $state<HTMLElement | null>(null);

  onMount(() => {
    if (containerRef) {
      gsap.from(containerRef.children, {
        opacity: 0,
        y: 10,
        stagger: 0.05,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.2,
      });
    }
  });

  function isSelected(tag: string) {
    return selectedTags.includes(tag);
  }
</script>

<div
  bind:this={containerRef}
  class="flex flex-wrap items-center justify-center gap-3 py-8"
>
  <button
    type="button"
    class="px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 border
      {selectedTags.length === 0
      ? 'bg-[var(--color-accent)] border-[var(--color-accent)] text-[var(--color-base-dark)]'
      : 'border-[var(--color-base-muted)]/20 text-[var(--color-base-muted)] hover:border-[var(--color-accent)]/40 hover:text-[var(--color-base-light)]'}"
    onclick={() => onToggle("ALL")}
  >
    All
  </button>

  {#each tags as tag}
    <button
      type="button"
      class="px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 border
        {isSelected(tag)
        ? 'bg-[var(--color-accent)] border-[var(--color-accent)] text-[var(--color-base-dark)] shadow-[0_0_20px_rgba(var(--color-accent-rgb),0.3)]'
        : 'border-[var(--color-base-muted)]/20 text-[var(--color-base-muted)] hover:border-[var(--color-accent)]/40 hover:text-[var(--color-base-light)]'}"
      onclick={() => onToggle(tag)}
    >
      {tag}
    </button>
  {/each}
</div>
