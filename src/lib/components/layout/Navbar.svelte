<script lang="ts">
  import { onMount, tick } from "svelte";
  import { NAV_LINKS } from "$lib/config/nav";
  import gsap from "$lib/animations/core";
  import Container from "./Container.svelte";

  let isOpen = $state(false);
  let navElement = $state<HTMLElement | null>(null);
  let menuOverlay = $state<HTMLElement | null>(null);
  let linkElements = $state<HTMLElement[]>([]);

  // Toggle Menu logic
  async function toggleMenu() {
    isOpen = !isOpen;
    await tick();

    if (isOpen) {
      document.body.style.overflow = "hidden";
      animateOpen();
    } else {
      document.body.style.overflow = "auto";
      animateClose();
    }
  }

  function animateOpen() {
    const tl = gsap.timeline();
    tl.to(menuOverlay, {
      clipPath: "circle(150% at 100% 0%)",
      duration: 0.8,
      ease: "power3.inOut",
    }).from(
      linkElements,
      {
        y: 40,
        opacity: 0,
        stagger: 0.05,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.4",
    );
  }

  function animateClose() {
    gsap.to(menuOverlay, {
      clipPath: "circle(0% at 100% 0%)",
      duration: 0.6,
      ease: "power3.inOut",
    });
  }

  // Close menu on link click
  function handleLinkClick() {
    if (isOpen) toggleMenu();
  }
</script>

<nav
  bind:this={navElement}
  class="fixed top-0 left-0 w-full z-[100] h-20 flex items-center transition-all duration-500 {isOpen
    ? 'bg-transparent'
    : 'bg-[var(--color-base-dark)]/80 backdrop-blur-md border-b border-[var(--color-base-muted)]/10'}"
>
  <Container class="flex justify-between items-center">
    <!-- Logo/Name 
    <a
      href="/"
      class="text-xs uppercase font-bold tracking-[0.4em] text-[var(--color-accent)] z-[101]"
    >
      ♠️
    </a> -->

    <!-- Hamburger Toggle -->
    <button
      class="flex flex-col gap-1.5 p-2 z-[101] group"
      onclick={toggleMenu}
      aria-label="Toggle Menu"
    >
      <span
        class="w-6 h-[1px] bg-[var(--color-accent)] transition-all duration-300 {isOpen
          ? 'rotate-45 translate-y-[7px]'
          : ''}"
      ></span>
      <span
        class="w-6 h-[1px] bg-[var(--color-accent)] transition-all duration-300 {isOpen
          ? 'opacity-0'
          : 'opacity-100'}"
      ></span>
      <span
        class="w-6 h-[1px] bg-[var(--color-accent)] transition-all duration-300 {isOpen
          ? '-rotate-45 -translate-y-[7px]'
          : ''}"
      ></span>
    </button>
  </Container>
</nav>

<!-- Menu Overlay -->
<div
  bind:this={menuOverlay}
  class="fixed inset-0 bg-[var(--color-base-dark)] z-[99] flex flex-col justify-center items-center px-12"
  style="clip-path: circle(0% at 100% 0%);"
>
  <div class="space-y-6 text-center">
    {#each NAV_LINKS as link, i}
      <div bind:this={linkElements[i]} class="overflow-hidden">
        <a
          href={link.href}
          class="block text-4xl lg:text-7xl font-bold tracking-tight text-[var(--color-base-light)] hover:text-[var(--color-accent)] transition-colors duration-300"
          onclick={handleLinkClick}
        >
          {link.label}
        </a>
      </div>
    {/each}
  </div>

  <div
    class="absolute bottom-12 left-0 w-full flex justify-center gap-8 text-[10px] uppercase font-bold tracking-widest text-[var(--color-base-muted)]"
  >
    <a href="mailto:contact@jiyon.com" class="hover:text-[var(--color-accent)]"
      >Email</a
    >
    <a href="https://linkedin.com" class="hover:text-[var(--color-accent)]"
      >LinkedIn</a
    >
  </div>
</div>
