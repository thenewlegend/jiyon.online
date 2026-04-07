<script lang="ts">
  import { onMount, tick } from 'svelte';
  import { splitText, animateText } from '$lib/animations/text';
  import type { AnimationConfig } from '$lib/animations/core';

  let { 
    text, 
    type = 'words', 
    animation = { enabled: true, delay: 0, duration: 0.8, stagger: 0.03 } 
  } = $props<{
    text: string;
    type?: 'chars' | 'words';
    animation?: AnimationConfig;
  }>();

  let container: HTMLElement | null = null;
  let splitContent = $state('');

  async function reinitialize() {
    splitContent = splitText(text, type);
    await tick();
    if (container) {
      animateText(container, animation);
    }
  }

  onMount(() => {
    reinitialize();

    // Use a simple resize observer or window resize event per rules
    const handleResize = () => {
      // Re-splitting on resize can be heavy, but it's required by your specs for layout integrity
      reinitialize();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });
</script>

<div bind:this={container} class="text-split inline-block">
  {@html splitContent}
</div>
