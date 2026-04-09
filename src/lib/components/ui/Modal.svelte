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
      class="absolute inset-0 bg-[var(--color-base-dark)]/95 backdrop-blur-xl cursor-pointer"
      onclick={onClose}
    >
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
    </div>

    <!-- Modal Content holder -->
    <div 
      bind:this={modalElement}
      class="relative w-full max-w-3xl bg-[var(--color-base-dark)] border border-[var(--color-base-muted)]/20 rounded-sm shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
    >
      <!-- Subtle accent corner -->
      <div class="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent)]/5 blur-3xl rounded-full translate-x-16 -translate-y-16 pointer-events-none"></div>
      
      <div class="relative z-10 overflow-y-auto p-8 lg:p-12 custom-scrollbar">
        {@render children?.()}
      </div>

      <!-- Close Action -->
      <button 
        class="absolute top-4 right-4 lg:top-6 lg:right-6 text-[var(--color-base-muted)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]/40 transition-all p-3 rounded-full border border-[var(--color-base-muted)]/20 z-20 cursor-pointer flex items-center justify-center bg-[var(--color-base-dark)]/50 backdrop-blur-md"
        onclick={onClose}
        aria-label="Close Modal"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
    </div>
  </div>
{/if}
