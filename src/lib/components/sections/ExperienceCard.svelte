<script lang="ts">
  import Heading from "../ui/Heading.svelte";

  export type Experience = {
    id: string;
    role: string;
    company: string;
    duration: string;
    achievements: string[];
  };

  let { item, isCurrent = false } = $props<{
    item: Experience;
    isCurrent?: boolean;
  }>();
</script>

<div
  class="relative pl-8 border-l border-[var(--color-base-muted)]/20 pb-8 lg:pb-12 last:pb-0"
>
  <div
    class="absolute left-[-1.5px] top-2 w-[4px] h-[4px] bg-[var(--color-accent)] rounded-full"
  ></div>

  <div
    class="flex flex-col lg:flex-row lg:items-center justify-between mb-4 gap-4"
  >
    <div class="space-y-1">
      <div class="flex items-center gap-3">
        <Heading level={4} text={item.role} class="text-xl lg:text-2xl" />
        <!-- {#if isCurrent}
          <span
            class="px-2 py-0.5 rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-[7px] uppercase font-bold tracking-[0.2em] border border-[var(--color-accent)]/20 shadow-[0_0_10px_var(--color-accent)] shadow-[var(--color-accent)]/10"
            >✪</span
          >
        {/if} -->
      </div>
      <span class="text-sm font-medium text-[var(--color-base-muted)]"
        >{item.company}</span
      >
    </div>
    <span
      class="text-xs uppercase tracking-widest text-[var(--color-base-muted)] font-bold"
      >{item.duration}</span
    >
  </div>

  <ul class="space-y-2 lg:space-y-3">
    {#each item.achievements as achievement}
      <li class="flex items-start gap-4">
        <span
          class="mt-2 w-1 h-[1px] bg-[var(--color-accent)] opacity-40 shrink-0"
        ></span>
        <p
          class="text-sm lg:text-base text-[var(--color-base-light)]/80 leading-relaxed font-light"
        >
          {achievement}
        </p>
      </li>
    {/each}
  </ul>
</div>
