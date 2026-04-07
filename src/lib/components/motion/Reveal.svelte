<script lang="ts">
  import { onMount } from 'svelte';
  import { fadeUp, fadeIn, scaleIn } from '$lib/animations/scroll';

  let { 
    animation = 'fade-up', 
    delay = 0, 
    duration = 1, 
    once = true, 
    children 
  } = $props<{
    animation?: 'fade-up' | 'fade-in' | 'scale';
    delay?: number;
    duration?: number;
    once?: boolean;
    children?: any;
  }>();

  let element: HTMLElement | null = null;

  onMount(() => {
    if (element) {
      const config = { delay, duration, enabled: true };
      
      switch (animation) {
        case 'fade-up':
          fadeUp({ element, config });
          break;
        case 'fade-in':
          fadeIn({ element, config });
          break;
        case 'scale':
          scaleIn({ element, config });
          break;
      }
    }
  });
</script>

<div bind:this={element} class="reveal-wrapper">
  {@render children?.()}
</div>
