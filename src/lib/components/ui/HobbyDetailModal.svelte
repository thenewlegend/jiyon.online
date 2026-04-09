<script lang="ts">
  import type { Hobby } from "$lib/config/hobbies";
  import Modal from "./Modal.svelte";
  import Heading from "./Heading.svelte";
  import Text from "./Text.svelte";
  import { onMount } from "svelte";
  import gsap from "$lib/animations/core";

  let { hobby, isOpen, onClose } = $props<{
    hobby: Hobby | null;
    isOpen: boolean;
    onClose: () => void;
  }>();

  let itemElements = $state<HTMLElement[]>([]);

  $effect(() => {
    if (isOpen && hobby && itemElements.length > 0) {
      gsap.fromTo(
        itemElements,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.8,
          delay: 0.4,
          ease: "power3.out",
        },
      );
    }
  });
</script>

<Modal {isOpen} {onClose}>
  {#if hobby}
    <div class="space-y-12">
      <!-- Header Section -->
      <div class="space-y-6">
        <div class="flex items-center gap-4">
          <div class="w-12 h-[1px] bg-[var(--color-accent)]"></div>
          <span class="text-[10px] uppercase font-bold tracking-[0.4em] text-[var(--color-accent)]">
            Explore Interests
          </span>
        </div>
        <div class="space-y-2">
          <Heading level={2} text={hobby.title} class="text-4xl lg:text-6xl uppercase tracking-tight" />
          <Text
            text={hobby.description}
            class="text-sm lg:text-base opacity-50 font-light max-w-2xl leading-relaxed"
          />
        </div>
      </div>

      <!-- Gallery Grid -->
      <div class="space-y-8">
        <div class="flex items-center justify-between border-b border-[var(--color-base-muted)]/10 pb-6">
          <Heading level={4} text="Selected Showcase" class="text-xs uppercase tracking-widest opacity-40" />
          <div class="flex items-center gap-4">
             <span class="text-[10px] font-mono text-[var(--color-accent)]">
              {hobby.works?.length || 0} SELECTIONS
            </span>
          </div>
        </div>

        <div class="grid grid-cols-1 gap-12">
          {#if hobby.works && hobby.works.length > 0}
            {#each hobby.works as work, i (work.title + i)}
              <div 
                bind:this={itemElements[i]}
                class="group space-y-6"
              >
                <!-- Image Section -->
                <div class="relative aspect-[16/8] lg:aspect-[21/9] overflow-hidden bg-[var(--color-base-muted)]/5 border border-[var(--color-base-muted)]/10 rounded-sm">
                  <img
                    src={work.image}
                    alt={work.title}
                    class="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                  <!-- Inner decorative frame -->
                  <div class="absolute inset-4 border border-white/5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>

                <!-- Info Section -->
                <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6 px-1">
                  <div class="space-y-3 max-w-xl">
                    <h3 class="text-xl lg:text-2xl font-bold tracking-wide text-[var(--color-base-light)] uppercase">
                      {work.title}
                    </h3>
                    {#if work.description}
                      <p class="text-sm text-[var(--color-base-muted)] font-light leading-relaxed">
                        {work.description}
                      </p>
                    {/if}
                  </div>

                  {#if work.link}
                    <div class="shrink-0 pb-1">
                      <a
                        href={work.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex items-center gap-4 text-[10px] uppercase font-bold tracking-[0.3em] text-[var(--color-accent)] hover:text-[var(--color-base-light)] transition-all group/link"
                      >
                        <span class="relative">
                          {work.linkText || 'Explore Work'}
                          <span class="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--color-base-light)] transition-all duration-500 group-hover/link:w-full"></span>
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="transform -rotate-45 group-hover/link:rotate-0 transition-transform duration-500"
                          ><line x1="7" y1="17" x2="17" y2="7"></line><polyline
                            points="7 7 17 7 17 17"
                          ></polyline></svg
                        >
                      </a>
                    </div>
                  {/if}
                </div>
              </div>
            {/each}
          {:else}
             <div class="py-24 text-center border border-dashed border-[var(--color-base-muted)]/20 rounded-sm">
              <Text
                text="Further archives are being curated."
                muted
                class="text-xs uppercase tracking-widest opacity-30 italic"
              />
            </div>
          {/if}
        </div>
      </div>

      <!-- Detailed Footer -->
      <div class="pt-8 border-t border-[var(--color-base-muted)]/10 flex flex-col sm:flex-row justify-between items-center gap-4 opacity-40">
        <div class="flex items-center gap-3">
          <span class="text-[9px] uppercase tracking-[0.3em] font-mono">
           JIYON ARCHIVE // VOL. {new Date().getFullYear()}
          </span>
        </div>
        <div class="flex gap-4">
          <div class="w-1 h-1 rounded-full bg-[var(--color-accent)]"></div>
          <div class="w-1 h-1 rounded-full bg-[var(--color-accent)] opacity-60"></div>
          <div class="w-1 h-1 rounded-full bg-[var(--color-accent)] opacity-20"></div>
        </div>
      </div>
    </div>
  {/if}
</Modal>
