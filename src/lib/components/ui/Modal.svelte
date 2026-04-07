<script lang="ts">
  import { onMount } from "svelte";
  import { browser } from "$app/environment";
  import gsap from "gsap";

  let { isOpen = false, onClose, children } = $props<{
    isOpen: boolean;
    onClose: () => void;
    children?: any;
  }>();

  let modalElement = $state<HTMLElement | null>(null);
  let backdropElement = $state<HTMLElement | null>(null);

  // Focus trap and escape key
  function handleKeydown(e: KeyboardEvent) {
    if (e.key === "Escape" && isOpen) {
      onClose();
    }
  }

  // Animation handling
  $effect(() => {
    if (!browser) return;

    if (isOpen) {
      document.body.style.overflow = "hidden";
      if (modalElement && backdropElement) {
        const tl = gsap.timeline();
        tl.fromTo(
          backdropElement,
          { opacity: 0 },
          { opacity: 1, duration: 0.4, ease: "power2.out" }
        ).fromTo(
          modalElement,
          { scale: 0.9, opacity: 0, y: 20 },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "back.out(1.7)",
          },
          "-=0.2"
        );
      }
    } else {
      document.body.style.overflow = "auto";
    }
  });

  onMount(() => {
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
      if (browser) {
        document.body.style.overflow = "auto";
      }
    };
  });
</script>

{#if isOpen}
  <div class="fixed inset-0 z-[200] flex items-center justify-center p-4">
    <!-- Backdrop with blueprint grid -->
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div 
      bind:this={backdropElement}
      class="absolute inset-0 bg-[var(--color-base-dark)]/80 backdrop-blur-xl cursor-crosshair"
      onclick={onClose}
    >
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#88888812_1px,transparent_1px),linear-gradient(to_bottom,#88888812_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
    </div>

    <!-- Modal Content holder -->
    <div 
      bind:this={modalElement}
      class="relative w-full max-w-lg bg-[var(--color-base-dark)] border border-[var(--color-base-muted)]/20 rounded-sm shadow-2xl p-8 lg:p-12 overflow-hidden"
    >
      <!-- Subtle accent corner -->
      <div class="absolute top-0 right-0 w-24 h-24 bg-[var(--color-accent)]/5 blur-3xl rounded-full translate-x-12 -translate-y-12"></div>
      
      <div class="relative z-10">
        {@render children?.()}
      </div>

      <!-- Close Action -->
      <button 
        class="absolute top-6 right-6 text-[var(--color-base-muted)] hover:text-[var(--color-accent)] transition-colors p-2"
        onclick={onClose}
        aria-label="Close Modal"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
    </div>
  </div>
{/if}
