<script lang="ts">
  import { onMount } from 'svelte';
  import gsap from 'gsap';

  let { 
    label, 
    href = undefined, 
    onClick = undefined, 
    variant = 'primary', 
    class: className = '' 
  } = $props<{
    label: string;
    href?: string;
    onClick?: (e: MouseEvent) => void;
    variant?: 'primary' | 'secondary';
    class?: string;
  }>();

  let buttonRef = $state<HTMLElement | null>(null);

  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-all duration-300 focus:outline-none';
  const variantStyles = {
    primary: 'bg-[var(--color-accent)] text-[var(--color-base-dark)] hover:opacity-90',
    secondary: 'border border-[var(--color-base-muted)] text-[var(--color-base-light)] hover:border-[var(--color-accent)]'
  };

  const buttonClass = $derived(`${baseStyles} ${variantStyles[variant]} ${className}`);

  function handleMouseEnter() {
    gsap.to(buttonRef, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
  }

  function handleMouseLeave() {
    gsap.to(buttonRef, { scale: 1, duration: 0.3, ease: 'power2.out' });
  }

  function handleMouseDown() {
    gsap.to(buttonRef, { scale: 0.95, duration: 0.1 });
  }

  function handleMouseUp() {
    gsap.to(buttonRef, { scale: 1.05, duration: 0.2 });
  }
</script>

{#if href}
  <a 
    bind:this={buttonRef}
    {href} 
    class={buttonClass}
    onmouseenter={handleMouseEnter}
    onmouseleave={handleMouseLeave}
    onmousedown={handleMouseDown}
    onmouseup={handleMouseUp}
  >
    {label}
  </a>
{:else}
  <button 
    bind:this={buttonRef}
    type="button"
    class={buttonClass}
    onclick={onClick}
    onmouseenter={handleMouseEnter}
    onmouseleave={handleMouseLeave}
    onmousedown={handleMouseDown}
    onmouseup={handleMouseUp}
  >
    {label}
  </button>
{/if}
