<script lang="ts">
  import { onMount } from 'svelte';
  import { animateText } from '$lib/animations/text';

  let { 
    level = 2, 
    text, 
    class: className = '', 
    animate = false,
    delay = 0
  } = $props<{
    level?: 1 | 2 | 3 | 4;
    text: string;
    class?: string;
    animate?: boolean;
    delay?: number;
  }>();

  let headingElement: HTMLElement | null = null;

  const levelMap = {
    1: 'h1',
    2: 'h2',
    3: 'h3',
    4: 'h4'
  };

  const styleMap = {
    1: 'text-4xl lg:text-8xl font-bold tracking-tighter leading-[1.1]',
    2: 'text-2xl lg:text-6xl font-bold tracking-tight leading-tight',
    3: 'text-xl lg:text-3xl font-semibold tracking-tight',
    4: 'text-lg lg:text-xl font-semibold'
  };

  onMount(() => {
    if (animate && headingElement) {
      animateText(headingElement, { delay });
    }
  });
</script>

<svelte:element this={levelMap[level]} bind:this={headingElement} class="{styleMap[level]} {className}">
  {text}
</svelte:element>
