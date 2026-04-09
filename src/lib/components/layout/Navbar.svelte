<script lang="ts">
  import { onMount, tick } from "svelte";
  import { NAV_LINKS } from "$lib/config/nav";
  import gsap from "$lib/animations/core";

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

<!-- Home Toggle — fixed top-left on all pages 
<a
  href="/"
  class="fixed top-6 left-6 lg:top-8 lg:left-8 z-[101] p-2 cursor-pointer group text-[var(--color-accent)]"
  onclick={() => {
    if (isOpen) toggleMenu();
  }}
  aria-label="Go home"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="transition-transform group-hover:scale-110"
  >
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
</a> -->

<!-- Hamburger Toggle — fixed top-right on all pages -->
<button
  bind:this={navElement}
  class="fixed top-6 right-6 lg:top-8 lg:right-8 z-[101] flex flex-col gap-1.5 p-2 cursor-pointer group"
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
</div>
