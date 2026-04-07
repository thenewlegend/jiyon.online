<script lang="ts">
  import { onMount } from 'svelte';
  import { staggerChildren } from '$lib/animations/scroll';

  let { 
    stagger = 0.15, 
    delay = 0, 
    class: className = '',
    children 
  } = $props<{
    stagger?: number;
    delay?: number;
    class?: string;
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

<div bind:this={container} class="stagger-container {className}">
  {@render children?.()}
</div>
