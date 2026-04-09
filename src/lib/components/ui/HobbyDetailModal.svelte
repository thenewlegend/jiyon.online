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
    <div class="space-y-10">
      <!-- Header -->
      <div class="space-y-4">
        <div class="flex items-center gap-3">
          <div class="w-8 h-[1px] bg-[var(--color-accent)]"></div>
          <span
            class="text-[10px] uppercase font-bold tracking-[0.3em] text-[var(--color-accent)]"
          >
            Hobby Showcase
          </span>
        </div>
        <Heading level={2} text={hobby.title} class="text-4xl lg:text-5xl" />
        <Text
          text={hobby.description}
          class="text-sm opacity-60 leading-relaxed"
        />
      </div>

      <!-- Works Gallery -->
      <div class="space-y-6">
        <div
          class="flex items-center justify-between border-b border-[var(--color-base-muted)]/10 pb-4"
        >
          <span
            class="text-[10px] uppercase font-bold tracking-widest text-[var(--color-base-muted)]"
          >
            Selected Works
          </span>
          <span
            class="text-[10px] uppercase font-mono text-[var(--color-accent)]"
          >
            {hobby.works?.length || 0} ITEMS
          </span>
        </div>

        <div class="grid grid-cols-1 gap-6">
          {#if hobby.works && hobby.works.length > 0}
            {#each hobby.works as work, i (work.url)}
              <div
                bind:this={itemElements[i]}
                class="group relative overflow-hidden bg-[var(--color-base-muted)]/5 border border-[var(--color-base-muted)]/10 rounded-sm hover:border-[var(--color-accent)]/30 transition-all duration-500"
              >
                {#if work.type === "image"}
                  <div class="aspect-video overflow-hidden">
                    <img
                      src={work.url}
                      alt={work.label}
                      class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                {/if}

                <div class="p-4 flex items-center justify-between">
                  <span
                    class="text-xs font-medium tracking-wide text-[var(--color-base-light)]"
                  >
                    {work.label}
                  </span>

                  {#if work.type === "link"}
                    <a
                      href={work.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-[var(--color-accent)] hover:opacity-70 transition-opacity"
                    >
                      View Project
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        ><line x1="7" y1="17" x2="17" y2="7"></line><polyline
                          points="7 7 17 7 17 17"
                        ></polyline></svg
                      >
                    </a>
                  {:else}
                    <div
                      class="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] opacity-40"
                    ></div>
                  {/if}
                </div>
              </div>
            {/each}
          {:else}
            <div
              class="py-12 text-center border border-dashed border-[var(--color-base-muted)]/20 rounded-sm"
            >
              <Text
                text="Showcase content coming soon."
                muted
                class="text-xs italic"
              />
            </div>
          {/if}
        </div>
      </div>

      <!-- Footer -->
      <div
        class="pt-6 border-t border-[var(--color-base-muted)]/10 flex justify-between items-center opacity-40"
      >
        <span class="text-[9px] uppercase tracking-[0.2em] font-mono italic">
          Archives // {new Date().getFullYear()}
        </span>
        <div class="flex gap-1">
          <div class="w-1 h-1 rounded-full bg-[var(--color-accent)]"></div>
          <div
            class="w-1 h-1 rounded-full bg-[var(--color-accent)] opacity-50"
          ></div>
          <div
            class="w-1 h-1 rounded-full bg-[var(--color-accent)] opacity-20"
          ></div>
        </div>
      </div>
    </div>
  {/if}
</Modal>
