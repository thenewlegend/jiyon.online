<script lang="ts">
  import Heading from "../ui/Heading.svelte";
  import Text from "../ui/Text.svelte";

  export type MEProject = {
    id: string;
    title: string;
    date: string;
    context: string;
    solution: string;
    impact: string;
    tools: string[];
    image?: string;
    links?: { label: string; url: string }[];
  };

  let { project } = $props<{ project: MEProject }>();
  let isExpanded = $state(false);
</script>

<article
  class="shrink-0 snap-start w-[300px] lg:w-[450px] p-6 lg:p-8 border border-[var(--color-base-muted)]/20 bg-[var(--color-base-dark)] hover:border-[var(--color-accent)]/40 transition-colors duration-500 group flex flex-col h-full rounded-sm"
>
  <div class="mb-6 lg:mb-8 flex justify-between items-start">
    <div class="space-y-1">
      <Heading
        level={3}
        text={project.title}
        class="text-xl lg:text-2xl group-hover:text-[var(--color-accent)] transition-colors duration-300"
      />
      <span
        class="text-[10px] uppercase tracking-widest text-[var(--color-base-muted)] font-bold"
        >{project.date}</span
      >
    </div>

    {#if project.image}
      <div
        class="w-12 h-12 lg:w-16 lg:h-16 bg-[var(--color-base-muted)]/10 overflow-hidden rounded-sm grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
      >
        <img
          src={project.image}
          alt={project.title}
          class="w-full h-full object-cover"
        />
      </div>
    {/if}
  </div>

  <div class="flex-grow space-y-4 lg:space-y-6">
    <!-- Detailed Text - Collapsible on Mobile -->
    <div class="space-y-4 {isExpanded ? 'block' : 'hidden lg:block'}">
      <div class="space-y-2">
        <h4
          class="text-[9px] uppercase font-bold tracking-[0.2em] text-[var(--color-base-muted)]"
        >
          Problem Context
        </h4>
        <Text text={project.context} class="text-xs lg:text-base opacity-70" />
      </div>

      <div class="space-y-2">
        <h4
          class="text-[9px] uppercase font-bold tracking-[0.2em] text-[var(--color-accent)]/80"
        >
          Solution
        </h4>
        <Text text={project.solution} class="text-sm lg:text-base" />
      </div>
    </div>

    <!-- Toggle button for mobile only -->
    <button
      class="lg:hidden text-[10px] uppercase tracking-widest font-bold text-[var(--color-accent)]/60 hover:text-[var(--color-accent)] transition-colors py-2"
      onclick={() => (isExpanded = !isExpanded)}
    >
      {isExpanded ? "Hide Details —" : "View Details +"}
    </button>

    <div
      class="py-3 lg:py-4 border-t border-b border-[var(--color-base-muted)]/10 flex flex-col items-start gap-1"
    >
      <span
        class="text-[9px] lg:text-[10px] uppercase font-bold tracking-[0.2em] text-[var(--color-accent)]"
        >Impact</span
      >
      <span
        class="text-sm lg:text-base font-medium tracking-tight text-[var(--color-accent)]"
        >{project.impact}</span
      >
    </div>

    <div class="flex flex-wrap gap-2 pt-1 lg:pt-2">
      {#each project.tools as tool}
        <span
          class="px-2 py-0.5 text-[8px] lg:text-[9px] uppercase tracking-wider border border-[var(--color-base-muted)]/30 text-[var(--color-base-muted)] rounded-sm"
        >
          {tool}
        </span>
      {/each}
    </div>

    <!-- Project Links Section -->
    {#if project.links && project.links.length > 0}
      <div class="pt-6 mt-auto">
        <div class="flex flex-wrap gap-3">
          {#each project.links as link}
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-3 px-4 py-2 bg-[var(--color-accent)]/5 border border-[var(--color-accent)]/20 hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 transition-all duration-300 rounded-sm text-[9px] uppercase font-bold tracking-[0.2em] text-[var(--color-accent)] cursor-pointer group/link"
            >
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
                class="opacity-60 group-hover/link:opacity-100 transition-opacity"
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
              </svg>
              <span>{link.label || 'Visit'}</span>
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
                class="transform -rotate-45 group-hover/link:rotate-0 transition-transform duration-500 opacity-40 group-hover/link:opacity-100"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          {/each}
        </div>
      </div>
    {/if}
  </div>
</article>
