<script lang="ts">
  import { onMount } from 'svelte';
  import { staggerChildren } from '$lib/animations/scroll';

  let { 
    stagger = 0.15, 
    delay = 0, 
    children 
  } = $props<{
    stagger?: number;
    delay?: number;
    children?: any;
  }>();

  let container: HTMLElement | null = null;

  onMount(() => {
    if (container) {
      // Find direct children to stagger
      staggerChildren(container, ':scope > *', { stagger, delay });
    }
  });
</script>

<div bind:this={container} class="stagger-container">
  {@render children?.()}
</div>
